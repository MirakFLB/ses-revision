/* =====================================================================
   SES Terminale — Révision Bac 2026 · Application
   Routing hash · progression & gamification (localStorage) · 7 jeux.
   ===================================================================== */
(function () {
  "use strict";

  const DATA = window.SES_DATA, CONTENT = window.SES_CONTENT || {}, QUIZ = window.SES_QUIZ || {};
  const PARTS = DATA.parts;
  const orderedChapters = PARTS.flatMap(p => p.chapters);
  const partOf = {}, chapterById = {};
  PARTS.forEach(p => p.chapters.forEach(c => { partOf[c.id] = p; chapterById[c.id] = c; }));
  const view = document.getElementById("view");

  /* ---------- helpers ---------- */
  const objText = o => (typeof o === "string" ? o : o.text);
  const objSubs = o => (typeof o === "string" ? null : (o.subs || null));
  function esc(s){ return String(s).replace(/[&<>"]/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;" }[m])); }
  function hl(t, toks){ let o = esc(t); toks.forEach(k => { if(!k) return; const r = new RegExp("(" + k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + ")","ig"); o = o.replace(r,"<mark>$1</mark>"); }); return o; }
  function shuffle(a){ a = a.slice(); for (let i = a.length-1; i>0; i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
  function norm(s){ return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]/g,""); }
  function todayStr(){ const d = new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
  function dayBefore(str){ const p=str.split("-"); const d=new Date(+p[0],+p[1]-1,+p[2]); d.setDate(d.getDate()-1); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }

  /* ---------- store ---------- */
  const KEY = "ses2026.v2";
  const PROG_VERSION = 3; // bump pour réinitialiser la progression des chapitres (garde écus/skins/XP)
  let state = load();
  function load(){
    let r = {};
    try { r = JSON.parse(localStorage.getItem(KEY)) || {}; } catch(e){ r = {}; }
    const s = {
      done: new Set(r.done||[]),
      leitner: r.leitner||{},
      objxp: r.objxp||{},
      ncorr: r.ncorr||{},
      seen: new Set(r.seen||[]),
      pv: r.pv||0,
      xp: r.xp||0,
      badges: new Set(r.badges||[]),
      streak: r.streak||{count:0,last:""},
      best: r.best||{},
      stats: r.stats||{ans:0,correct:0},
      daily: r.daily||{date:"",xp:0},
      ecritOnly: !!r.ecritOnly,
      coins: r.coins||0,
      owned: { themes: (r.owned&&r.owned.themes&&r.owned.themes.length) ? Array.from(new Set(["gold"].concat(r.owned.themes))) : ["gold"], titles: (r.owned&&r.owned.titles)||[] },
      equipped: r.equipped||{ theme:"gold", title:null },
      powerups: r.powerups||{ freeze:0, boost:0 },
      boostActive: !!r.boostActive,
      lastDaily: r.lastDaily||"",
      sound: r.sound!==undefined ? !!r.sound : true
    };
    if (s.pv !== PROG_VERSION){ s.done = new Set(); s.objxp = {}; s.ncorr = {}; s.seen = new Set(); s.pv = PROG_VERSION; }
    return s;
  }
  function save(){ try { localStorage.setItem(KEY, JSON.stringify({ done:[...state.done], leitner:state.leitner, objxp:state.objxp, ncorr:state.ncorr, xp:state.xp, badges:[...state.badges], streak:state.streak, best:state.best, stats:state.stats, daily:state.daily, ecritOnly:state.ecritOnly, coins:state.coins, owned:state.owned, equipped:state.equipped, powerups:state.powerups, boostActive:state.boostActive, lastDaily:state.lastDaily, sound:state.sound, seen:[...state.seen], pv:state.pv })); } catch(e){} }

  /* ---------- gamification ---------- */
  const DAILY_GOAL = 80;
  const LEVELS = [
    { min: 0,    name: "Lycéen" },
    { min: 120,  name: "Initié" },
    { min: 350,  name: "Connaisseur" },
    { min: 700,  name: "Stratège" },
    { min: 1200, name: "Expert SES" },
    { min: 2000, name: "Major du Bac" }
  ];
  function levelInfo(){
    const xp = state.xp; let i = 0;
    for (let k = 0; k < LEVELS.length; k++) if (xp >= LEVELS[k].min) i = k;
    const cur = LEVELS[i], next = LEVELS[i+1];
    const pct = next ? Math.round((xp - cur.min) / (next.min - cur.min) * 100) : 100;
    return { idx:i, name:cur.name, xp, nextMin: next?next.min:null, pct, toNext: next? next.min-xp : 0 };
  }
  function addXp(n){ const before = levelInfo().idx; state.xp += n; const t = todayStr(); if (state.daily.date !== t) state.daily = { date:t, xp:0 }; state.daily.xp += n; const after = levelInfo().idx; if (after > before) onLevelUp(after); }
  function touchStreak(){ const t = todayStr(); if (state.streak.last === t) return; state.streak.count = (state.streak.last === dayBefore(t)) ? state.streak.count+1 : 1; state.streak.last = t; }
  function notionsMastered(){ let n = 0; for (const k in state.leitner) if (state.leitner[k] >= 4) n++; return n; }
  function partAllDone(pid){ const p = PARTS.find(x => x.id===pid); return p.chapters.every(c => c.objectifs.every((o,i)=>state.done.has(c.id+"#o"+i))); }
  function ecritAllDone(){ return orderedChapters.filter(c=>c.ecrit).every(c => c.objectifs.every((o,i)=>state.done.has(c.id+"#o"+i))); }

  const BADGES = [
    { id:"firststep", icon:"⚡", name:"Premiers pas", desc:"Répondre à une première question" },
    { id:"perfect",   icon:"🎯", name:"Sans-faute", desc:"Terminer un quiz sans aucune erreur" },
    { id:"streak3",   icon:"🔥", name:"Régulier", desc:"3 jours de révision d'affilée" },
    { id:"streak7",   icon:"🔥", name:"Assidu", desc:"7 jours de révision d'affilée" },
    { id:"century",   icon:"💯", name:"Centurion", desc:"100 bonnes réponses au total" },
    { id:"memory",    icon:"🧠", name:"Mémoire d'éléphant", desc:"20 notions maîtrisées en cartes" },
    { id:"eco",       icon:"📈", name:"Économiste", desc:"Tous les objectifs d'économie maîtrisés" },
    { id:"socio",     icon:"👥", name:"Sociologue", desc:"Tous les objectifs de socio/SP maîtrisés" },
    { id:"ready",     icon:"🎓", name:"Prêt pour le Bac", desc:"Tous les objectifs évaluables à l'écrit maîtrisés" }
  ];
  function checkBadges(extra){
    const newly = [];
    const earn = (id, cond) => { if (cond && !state.badges.has(id)) { state.badges.add(id); newly.push(id); } };
    earn("firststep", state.stats.ans >= 1);
    earn("century", state.stats.correct >= 100);
    earn("streak3", state.streak.count >= 3);
    earn("streak7", state.streak.count >= 7);
    earn("memory", notionsMastered() >= 20);
    earn("eco", partAllDone("eco"));
    earn("socio", partAllDone("socio"));
    earn("ready", ecritAllDone());
    if (extra && extra.perfect) earn("perfect", true);
    return newly;
  }
  function announceBadges(ids){ ids.forEach(id => { const b = BADGES.find(x=>x.id===id); if (b) toast(`<span class="t-ico">${b.icon}</span> Badge débloqué — <b>${esc(b.name)}</b>`); }); }

  /* record a correct/incorrect answer (shared by qcm/vf/trous/exam) */
  function recordAnswer(correct){
    state.stats.ans++;
    if (g){ g.combo = correct ? (g.combo||0)+1 : 0; }
    if (correct){ state.stats.correct++; addXp(10); const combo = g?(g.combo||1):1; gainCoins(5 + Math.min(Math.max(combo-1,0),5)*2); sfx("correct"); if (g && g.items[g.i] && g.items[g.i].c){ const it2=g.items[g.i]; creditObjective(it2.c.id, it2.c.id+"|"+(it2.d.q||it2.d.s||it2.d.t||"")); } }
    else { sfx("wrong"); }
    touchStreak();
    const nb = checkBadges();
    save();
    announceBadges(nb);
  }

  /* ---------- economy: coins, themes, titles, sounds, fx ---------- */
  const COIN = "🪙";
  const THEMES = [
    { id:"gold",     name:"Or",                price:0,    sw:["#e4b765","#5b9dff","#34d6b6"] },
    { id:"emerald",  name:"Émeraude",          price:150,  sw:["#34d6a0","#46c98b","#b08bff"] },
    { id:"sapphire", name:"Saphir",            price:180,  sw:["#5b9dff","#7cc5ff","#b08bff"] },
    { id:"ruby",     name:"Rubis",             price:220,  sw:["#ff5d7a","#ff8a5b","#ffd166"] },
    { id:"amethyst", name:"Améthyste",         price:260,  sw:["#c08bff","#8ab4ff","#5b9dff"] },
    { id:"sunset",   name:"Coucher de soleil", price:300,  sw:["#ff8a5b","#ff5d7a","#ffd166"] },
    { id:"ocean",    name:"Océan",             price:340,  sw:["#22d3ee","#34d6b6","#5b9dff"] },
    { id:"neon",     name:"Néon",              price:450,  sw:["#ff2bd6","#22e0ff","#b6ff3a"] },
    { id:"vapor",    name:"Vaporwave",         price:600,  sw:["#ff6ad5","#8a6dff","#26d6ff"] },
    { id:"matrix",   name:"Matrix",            price:800,  sw:["#39ff14","#26d367","#0aff9d"] },
    { id:"platinum", name:"Platine",           price:1000, sw:["#cfd8e6","#aab4c4","#9bb0d0"] }
  ];
  const TITLES = [
    { id:"stratege", name:"Le Stratège",       price:200 },
    { id:"sniper",   name:"Sniper du QCM",     price:300 },
    { id:"futurhec", name:"Futur HEC",         price:400 },
    { id:"machine",  name:"Machine à SES",     price:500 },
    { id:"major",    name:"Major en approche", price:700 },
    { id:"goat",     name:"GOAT du Bac",       price:1200 }
  ];
  const POWERUPS = [
    { id:"freeze", icon:"🧊", name:"Gel de série", desc:"Protège ta série si tu sautes un jour.", price:200 },
    { id:"boost",  icon:"⚡", name:"Boost ×2",     desc:"Double les écus de ta prochaine partie.", price:150 }
  ];

  function addCoins(n){ state.coins += n; }
  function gainCoins(base){ const amt = Math.round(base * (g && g.coinMult ? g.coinMult : 1)); if (amt<=0) return 0; state.coins += amt; coinPop("+"+amt+" "+COIN); return amt; }
  function applyTheme(){ document.documentElement.setAttribute("data-theme", (state.equipped&&state.equipped.theme)||"gold"); }
  function titleName(id){ const t = TITLES.find(x=>x.id===id); return t?t.name:null; }
  function onLevelUp(idx){ const bonus=50; addCoins(bonus); sfx("levelup"); confetti(); toast(`<span class="t-ico">🎉</span> Niveau ${idx+1} — <b>${esc(LEVELS[idx].name)}</b> ! +${bonus} ${COIN}`); }

  function dailyCheck(){
    const t = todayStr();
    if (state.streak.last && state.streak.last !== t && state.streak.last !== dayBefore(t) && (state.powerups.freeze||0) > 0){
      state.powerups.freeze--; state.streak.last = dayBefore(t);
      setTimeout(()=>toast(`<span class="t-ico">🧊</span> Gel de série utilisé — ta série de ${state.streak.count} jours est sauvée !`), 700);
    }
    if (state.lastDaily !== t){ state.lastDaily = t; state.coins += 20; setTimeout(()=>{ coinPop("+20 "+COIN); toast(`<span class="t-ico">🎁</span> Bonus quotidien : +20 ${COIN}`); }, 500); }
    save();
  }

  /* sound — WebAudio, no assets */
  let actx;
  function ensureAudio(){ if(!actx){ try{ actx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){ return null; } } if(actx && actx.state==="suspended"){ try{ actx.resume(); }catch(e){} } return actx; }
  function tone(freq, t0, dur, type, vol){ const c=ensureAudio(); if(!c) return; const o=c.createOscillator(), gn=c.createGain(); o.type=type||"sine"; o.frequency.value=freq; o.connect(gn); gn.connect(c.destination); const t=c.currentTime+t0; gn.gain.setValueAtTime(0.0001,t); gn.gain.exponentialRampToValueAtTime(vol||0.16,t+0.012); gn.gain.exponentialRampToValueAtTime(0.0001,t+dur); o.start(t); o.stop(t+dur+0.03); }
  function sfx(kind){ if(!state.sound) return; if(!ensureAudio()) return;
    if(kind==="correct"){ tone(660,0,0.12,"sine",0.16); tone(990,0.09,0.16,"sine",0.14); }
    else if(kind==="wrong"){ tone(196,0,0.2,"sawtooth",0.10); tone(146,0.09,0.22,"sawtooth",0.09); }
    else if(kind==="coin"){ tone(1046,0,0.07,"square",0.11); tone(1397,0.06,0.1,"square",0.09); }
    else if(kind==="buy"){ [523,659,784,1047].forEach((f,i)=>tone(f,i*0.08,0.2,"triangle",0.13)); }
    else if(kind==="levelup"){ [523,659,784,1047,1319].forEach((f,i)=>tone(f,i*0.09,0.32,"triangle",0.14)); }
    else if(kind==="win"){ [659,784,988,1319].forEach((f,i)=>tone(f,i*0.1,0.3,"sine",0.14)); }
  }

  /* floating fx */
  function coinPop(text){ const el=document.createElement("div"); el.className="coinpop"; el.textContent=text; document.body.appendChild(el); requestAnimationFrame(()=>el.classList.add("go")); setTimeout(()=>el.remove(),1100); }
  function confetti(){ try{ if(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return; }catch(e){} const box=document.createElement("div"); box.className="confetti"; const cols=["#e4b765","#46c98b","#5b9dff","#b08bff","#e7785a","#22d3ee"]; for(let i=0;i<40;i++){ const s=document.createElement("i"); const x=((Math.random()*2-1)*240).toFixed(0); const r=(Math.random()*720-360).toFixed(0); const d=(0.9+Math.random()*0.8).toFixed(2); s.style.cssText="--x:"+x+"px;--r:"+r+"deg;--d:"+d+"s;background:"+cols[i%cols.length]+";animation-delay:"+(Math.random()*0.12).toFixed(2)+"s"; box.appendChild(s); } document.body.appendChild(box); setTimeout(()=>box.remove(),2400); }

  /* ---------- progress + ring (maîtrise = couverture réelle de la banque) ----------
     Maîtrise d'un chapitre = nb de réponses DISTINCTES correctes / cible.
     cible = ~80% de toute la banque (QCM+V/F+trous+notions).
     → on ne peut plus sauter à 60% en 2 questions : il faut couvrir le bank. */
  const COVERAGE = 0.8;
  function bankSize(c){ const Qd = QUIZ[c.id]||{}, Cd = CONTENT[c.id]||{}; return (Qd.qcm||[]).length + (Qd.vf||[]).length + (Qd.trous||[]).length + (Cd.notions||[]).length; }
  function chapTarget(c){ return Math.max(c.objectifs.length, Math.ceil(bankSize(c) * COVERAGE)); }
  function chapCorrect(c){ return state.ncorr[c.id] || 0; }
  function objThreshold(c, i){ const N = c.objectifs.length || 1; return Math.ceil(chapTarget(c) * (i+1) / N); }
  function objDone(c, i){ return state.done.has(c.id+"#o"+i) || chapCorrect(c) >= objThreshold(c, i); }
  function chapProgress(c){ const t = c.objectifs.length; let d = 0; for (let i=0;i<t;i++) if (objDone(c,i)) d++; const tg = chapTarget(c); return { d, t, cc: chapCorrect(c), tg, pct: tg ? Math.round(Math.min(1, chapCorrect(c)/tg) * 100) : 0 }; }
  function partProgress(p){ let d=0,t=0,cc=0,tt=0; p.chapters.forEach(c=>{const x=chapProgress(c); d+=x.d; t+=x.t; cc+=x.cc; tt+=x.tg;}); return { d, t, pct: tt ? Math.round(Math.min(1, cc/tt) * 100) : 0 }; }
  function overall(){ let d=0,t=0,cc=0,tt=0; orderedChapters.forEach(c=>{const x=chapProgress(c); d+=x.d; t+=x.t; cc+=x.cc; tt+=x.tg;}); return { d, t, pct: tt ? Math.round(Math.min(1, cc/tt) * 100) : 0 }; }
  function creditObjective(chapterId, sig){
    const c = chapterById[chapterId]; if(!c) return;
    if (sig){ if (state.seen.has(sig)) return; state.seen.add(sig); } // une réponse distincte ne crédite qu'une fois
    const before = chapCorrect(c), after = before + 1; state.ncorr[c.id] = after;
    for (let i=0;i<c.objectifs.length;i++){
      const oid = c.id+"#o"+i; if (state.done.has(oid)) continue;
      const thr = objThreshold(c, i);
      if (after >= thr && before < thr){ state.done.add(oid); state.coins += 10; toast(`<span class="t-ico">✅</span> Objectif maîtrisé — +10 ${COIN}`); }
    }
  }

  function ring(pct, size){
    size = size || 44; const sw = size>=120?9:5; const r=(size-sw)/2; const c=2*Math.PI*r; const off=c*(1-pct/100);
    const inner = size>=120 ? (pct+"%<small>maîtrisé</small>") : (pct+"%");
    return `<div class="ring ${size>=120?"lg":""}" style="width:${size}px;height:${size}px"><svg width="${size}" height="${size}"><circle class="track" cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke-width="${sw}"/><circle class="fill" cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke-width="${sw}" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}"/></svg><div class="val">${inner}</div></div>`;
  }
  const badgeEcrit = c => c.ecrit ? `<span class="badge ok dot">Évaluable à l'écrit</span>` : `<span class="badge oral dot">Programme · Grand Oral</span>`;
  const srcLink = n => n.s ? (n.u ? `<a class="src" href="${esc(n.u)}" target="_blank" rel="noopener">source : ${esc(n.s)} ↗</a>` : `<span class="src">source : ${esc(n.s)}</span>`) : "";

  /* ---------- toast ---------- */
  let toastBox;
  function toast(html){
    if (!toastBox){ toastBox = document.createElement("div"); toastBox.className = "toast-box"; document.body.appendChild(toastBox); }
    const el = document.createElement("div"); el.className = "toast"; el.innerHTML = html; toastBox.appendChild(el);
    requestAnimationFrame(()=>el.classList.add("in"));
    setTimeout(()=>{ el.classList.remove("in"); setTimeout(()=>el.remove(), 350); }, 3200);
  }

  /* ===================================================================
     VIEWS
     =================================================================== */
  function gamificationStrip(){
    const lv = levelInfo(); const dg = state.daily.date===todayStr()?state.daily.xp:0;
    const dpct = Math.min(100, Math.round(dg/DAILY_GOAL*100));
    return `<div class="gstrip">
      <div class="gstat"><span class="gk">Niveau ${lv.idx+1}</span><span class="gv">${esc(lv.name)}</span>
        <div class="bar sm"><i style="width:${lv.pct}%"></i></div>
        <span class="gsub">${lv.nextMin!==null?`${lv.xp} / ${lv.nextMin} XP`:`${lv.xp} XP · max`}</span></div>
      <div class="gstat"><span class="gk">Série</span><span class="gv">${state.streak.count} ${state.streak.count>1?"jours":"jour"} <span class="flame">🔥</span></span>
        <span class="gsub">Objectif du jour : ${dg}/${DAILY_GOAL} XP</span>
        <div class="bar sm gold2"><i style="width:${dpct}%"></i></div></div>
      <a class="gstat go" href="#/jouer"><span class="gk">Jouer</span><span class="gv">7 modes →</span><span class="gsub">QCM, cartes, assos, examen…</span></a>
    </div>`;
  }

  function renderDashboard(){
    const o = overall(); const m = DATA.meta;
    const partBars = PARTS.map(p => { const pp = partProgress(p);
      return `<a class="card prow" href="#/programme" data-accent="${p.accent}">${ring(pp.pct,52)}
        <div style="flex:1"><div class="prow-t">${esc(p.name)}</div><div class="muted prow-s">${p.chapters.length} chapitres · ${pp.d}/${pp.t} objectifs</div></div>
        <svg viewBox="0 0 24 24" width="18" height="18" style="color:var(--text-3)"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`; }).join("");
    const ecritList = orderedChapters.filter(c=>c.ecrit).map(c=>`<li><svg class="tick ok" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span><b>${esc(c.title)}</b><br><span class="field">${esc(partOf[c.id].name)}</span></span></li>`).join("");
    const oralList = orderedChapters.filter(c=>!c.ecrit).map(c=>`<li><svg class="tick oral" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 8v5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.3" r="1.1" fill="currentColor"/></svg><span><b>${esc(c.title)}</b><br><span class="field">${esc(partOf[c.id].name)}</span></span></li>`).join("");

    return `<div class="view fade" data-accent="gold">
      <section class="hero">
        <span class="badge badge-src">${esc(m.sourceProgramme)}</span>
        <p class="eyebrow">${esc(m.matiere)} · ${esc(m.niveau)}</p>
        <h1 class="display">Tout le programme officiel de SES, prêt à réviser.</h1>
        <p class="lead">${esc(m.session)} — 12 chapitres, leurs objectifs officiels, des définitions sourcées, et 7 jeux pour apprendre vite. Coche, joue, gagne de l'XP, suis ta progression.</p>
        <div class="facts">
          <div class="fact"><div class="k">${m.coefficient}</div><div class="l">Coefficient de l'épreuve</div></div>
          <div class="fact"><div class="k">${esc(m.duree)}</div><div class="l">Durée de l'écrit</div></div>
          <div class="fact"><div class="k">9<small> / 12</small></div><div class="l">Chapitres évaluables à l'écrit</div></div>
          <div class="fact"><div class="k" style="font-size:20px;line-height:1.2">${esc(m.datesEcrit)}</div><div class="l">Épreuve écrite de spécialité</div></div>
        </div>
      </section>

      ${gamificationStrip()}

      <h2 class="section">Ta progression</h2>
      <div class="grid" style="grid-template-columns:auto 1fr;gap:26px;align-items:center">
        <div data-accent="gold" style="display:grid;place-items:center">${ring(o.pct,132)}</div>
        <div class="grid" style="gap:12px">${partBars}</div>
      </div>
      <div class="toolbar" style="margin-top:18px">
        <a class="btn" href="#/jouer"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M5 3l14 9-14 9z" fill="currentColor"/></svg> Jouer pour réviser</a>
        <a class="btn ghost" href="#/programme">Parcourir le programme</a>
      </div>

      <h2 class="section">Ce qui tombe à l'écrit en 2026</h2>
      <p class="lead" style="font-size:15px">${esc(m.note9)}</p>
      <div class="callout" style="margin-top:16px"><div class="eval-cols">
        <div><h3 style="color:var(--ok)">À réviser en priorité — évaluable à l'écrit (9)</h3><ul class="eval-list">${ecritList}</ul></div>
        <div><h3 style="color:var(--warn)">Au programme, pas à l'écrit — appui Grand Oral (3)</h3><ul class="eval-list">${oralList}</ul></div>
      </div></div>
    </div>`;
  }

  function renderProgramme(){
    const blocks = PARTS.map(p => { const pp = partProgress(p);
      const chaps = p.chapters.filter(c => !state.ecritOnly || c.ecrit).map(c => { const cp = chapProgress(c);
        return `<a class="card chap" href="#/chapitre/${c.id}" data-accent="${p.accent}">
          <div class="num">Chapitre ${c.num}</div><div class="title">${esc(c.title)}</div>
          <div class="meta">${badgeEcrit(c)}<span class="badge">${c.objectifs.length} obj.</span>${ring(cp.pct,44)}</div></a>`; }).join("");
      if (!chaps) return "";
      return `<section class="part" data-accent="${p.accent}"><div class="part-head"><span class="part-dot"></span><h2>${esc(p.name)}</h2><span class="count">${pp.pct}% · ${p.chapters.length} chapitres</span></div><div class="grid cols-2">${chaps}</div></section>`; }).join("");
    return `<div class="view fade" data-accent="gold">
      <p class="eyebrow">Programme officiel</p><h1 class="display">Les 12 chapitres</h1>
      <p class="lead">Clique sur un chapitre : cours, objectifs officiels, notions sourcées et auteurs.</p>
      <div class="toolbar" style="margin-top:18px"><label class="toggle"><input type="checkbox" id="ecritOnly" ${state.ecritOnly?"checked":""}><span class="sw"></span> Afficher seulement les chapitres évaluables à l'écrit</label></div>
      ${blocks}</div>`;
  }

  /* ---- chapter detail with tabs ---- */
  let chapTab = "cours";
  function renderChapter(id){
    const c = chapterById[id]; if (!c) return renderDashboard();
    const p = partOf[id]; const cp = chapProgress(c); const ct = CONTENT[id] || {};
    const idx = orderedChapters.indexOf(c); const prev = orderedChapters[idx-1], next = orderedChapters[idx+1];
    const tabs = [["cours","L'essentiel"],["objectifs","Objectifs"],["notions","Notions"],["auteurs","Auteurs"]];
    const tabBtns = tabs.map(t => `<button class="tab ${chapTab===t[0]?"on":""}" data-act="tab" data-tab="${t[0]}">${t[1]}</button>`).join("");
    let body = "";
    if (chapTab === "cours"){
      const cours = (ct.cours||[]).map(b=>`<li>${esc(b)}</li>`).join("");
      const chiffres = (ct.chiffres||[]).map(c2=>`<div class="figrow"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M4 19V5m0 14h16M8 16v-4m4 4V8m4 8v-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg><span>${esc(c2.d)} ${srcLink(c2)}</span></div>`).join("");
      body = `<div class="cours-block"><h3 class="sub3">L'essentiel <span class="aide-tag">synthèse</span></h3><ul class="cours-list">${cours||"<li class='muted'>—</li>"}</ul>
        ${chiffres?`<h3 class="sub3" style="margin-top:24px">Chiffres-clés</h3><div class="figs">${chiffres}</div>`:""}</div>`;
    } else if (chapTab === "objectifs"){
      const cc=cp.cc, tg=cp.tg;
      const objs = c.objectifs.map((o,i)=>{ const oid=c.id+"#o"+i; const done=objDone(c,i); const subs=objSubs(o); const thr=objThreshold(c,i);
        const sub = subs?`<ul class="subs">${subs.map(s=>`<li>${esc(s)}</li>`).join("")}</ul>`:"";
        const prog = done ? "" : `<div class="obj-prog"><div class="obj-prog-bar"><i style="width:${Math.round(Math.min(1,cc/thr)*100)}%"></i></div><span>palier : ${thr} bonnes réponses distinctes</span></div>`;
        return `<li class="obj ${done?"done":""}" data-act="toggle-obj" data-id="${oid}"><span class="chk"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span><div class="body"><div class="otext">${esc(objText(o))}</div>${sub}${prog}</div></li>`; }).join("");
      body = `<div class="obj-head" style="margin-top:6px"><h3 class="sub3">Objectifs d'apprentissage</h3><span class="official">Programme officiel</span></div>
        <p class="obj-sub">Maîtrise réelle : <b>${cc}/${tg}</b> bonnes réponses <b>distinctes</b> du chapitre (${cp.pct}%). Atteindre 100% suppose de couvrir la quasi-totalité de la banque — répéter une question déjà réussie ne compte pas.</p>
        <div class="obj-prog" style="margin:0 0 18px"><div class="obj-prog-bar" style="max-width:none"><i style="width:${cp.pct}%"></i></div><span>${cp.pct}%</span></div>
        <ul class="obj-list">${objs}</ul>`;
    } else if (chapTab === "notions"){
      const notions = (ct.notions||[]).map(n=>`<div class="notion"><div class="t">${esc(n.t)}</div><div class="d">${esc(n.d)}</div>${srcLink(n)}</div>`).join("");
      body = `<div class="obj-head" style="margin-top:6px"><h3 class="sub3">Notions clés</h3><span class="aide-tag">définitions sourcées</span></div>
        <p class="obj-sub">Définitions issues de sources de référence (INSEE, SES-ENS, Melchior, vie-publique…).</p><div class="notion-grid">${notions||"<p class='muted'>—</p>"}</div>`;
    } else {
      const auteurs = (ct.auteurs||[]).map(a=>`<div class="notion auth"><div class="t">${esc(a.n)}</div><div class="d">${esc(a.d)}</div>${srcLink(a)}</div>`).join("");
      body = `<div class="obj-head" style="margin-top:6px"><h3 class="sub3">Auteurs &amp; théories</h3></div>
        <div class="notion-grid">${auteurs||"<p class='muted'>Aucun auteur clé spécifique pour ce chapitre.</p>"}</div>`;
    }
    const navLink = (ch,dir) => ch ? `<a class="${dir==="next"?"next":""}" href="#/chapitre/${ch.id}"><span class="dir">${dir==="next"?"Chapitre suivant":"Chapitre précédent"}</span><span class="lab">${esc(ch.title)}</span></a>` : `<span class="empty"></span>`;

    return `<div class="view fade" data-accent="${p.accent}">
      <a class="back" href="#/programme"><svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Programme</a>
      <div class="detail-top"><div class="detail-head" style="flex:1;min-width:260px"><p class="eyebrow">${esc(p.name)} · Chapitre ${c.num}</p><h1>${esc(c.title)}</h1>
        <div class="chap-tags">${badgeEcrit(c)}<span class="badge">${c.objectifs.length} objectifs</span><span class="badge">${(ct.notions||[]).length} notions</span></div></div>
        <div style="display:grid;place-items:center">${ring(cp.pct,132)}</div></div>
      <div class="tabs">${tabBtns}</div>
      <div class="tab-body">${body}</div>
      <div class="toolbar" style="margin-top:30px"><button class="btn" data-act="revise-chap" data-id="${c.id}"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M5 3l14 9-14 9z" fill="currentColor"/></svg> Jouer sur ce chapitre</button></div>
      <nav class="chap-nav">${navLink(prev,"prev")}${navLink(next,"next")}</nav></div>`;
  }

  function renderMethode(){
    const M = DATA.methode;
    const parties = M.epreuveComposee.parties.map(pt=>`<div class="epr-part"><div class="pts">${pt.points}<small>points</small></div><div class="pt-body"><strong>${esc(pt.nom)}</strong><p>${esc(pt.desc)}</p></div></div>`).join("");
    const attendus = M.dissertation.attendus.map(a=>`<li><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span>${esc(a)}</span></li>`).join("");
    const oral = M.oral.structure.map(s=>`<li><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span>${esc(s)}</span></li>`).join("");
    return `<div class="view fade" data-accent="gold">
      <p class="eyebrow">Épreuves du Bac</p><h1 class="display">Méthode &amp; format des épreuves</h1><p class="lead">${esc(M.ecrit.choix)}</p>
      <div class="grid" style="margin-top:22px"><div class="card method-card"><h3>${esc(M.ecrit.titre)}</h3>
        <div class="facts" style="margin-top:18px;grid-template-columns:repeat(3,1fr)"><div class="fact"><div class="k">${esc(M.ecrit.duree)}</div><div class="l">Durée</div></div><div class="fact"><div class="k">${M.ecrit.coefficient}</div><div class="l">Coefficient</div></div><div class="fact"><div class="k">2</div><div class="l">Sujets au choix</div></div></div>
        <p class="info-line">${esc(M.ecrit.couverture)}</p></div></div>
      <h2 class="section">Sujet A — Dissertation</h2>
      <div class="card method-card"><h3>${esc(M.dissertation.titre)} <span class="badge" style="vertical-align:middle">${esc(M.dissertation.note)}</span></h3>
        <ul class="attendus">${attendus}</ul><p class="info-line"><b style="color:var(--text-2)">Dossier —</b> ${esc(M.dissertation.dossier)}</p><p class="info-line" style="border-top:0;padding-top:0">${esc(M.dissertation.conseil)}</p></div>
      <h2 class="section">Sujet B — Épreuve composée</h2>
      <div class="card method-card"><h3>${esc(M.epreuveComposee.titre)}</h3><p class="muted" style="font-size:13.5px;margin:6px 0 0">${esc(M.epreuveComposee.note)}</p><div class="parts-epreuve">${parties}</div></div>
      <h2 class="section">Rattrapage &amp; Grand Oral</h2>
      <div class="grid cols-2"><div class="card method-card"><h3>${esc(M.oral.titre)}</h3><p class="muted" style="font-size:13.5px;margin:6px 0 10px">${esc(M.oral.duree)}</p><p style="font-size:14px;color:var(--text-2);margin:0 0 6px">${esc(M.oral.desc)}</p><ul class="attendus">${oral}</ul></div>
      <div class="card method-card" data-accent="socio"><h3>${esc(M.grandOral.titre)}</h3><p style="font-size:14.5px;color:var(--text-2);margin-top:10px">${esc(M.grandOral.desc)}</p></div></div></div>`;
  }

  function renderOutils(){
    const Q = DATA.quantitatif;
    const groups = Q.groupes.map(g=>{ const tools = g.outils.map(o=>`<div class="tool"><div class="t">${esc(o.t)}</div><div class="f">${esc(o.f)}</div>${o.note?`<div class="n">${esc(o.note)}</div>`:""}</div>`).join("");
      return `<h2 class="section">${esc(g.titre)}</h2><div class="grid cols-2">${tools}</div>`; }).join("");
    return `<div class="view fade" data-accent="gold"><p class="eyebrow">Savoir-faire</p><h1 class="display">Outils quantitatifs</h1><p class="lead">${esc(Q.intro)}</p>${groups}</div>`;
  }

  /* ===================== GAME HUB ===================== */
  const MODES = [
    { id:"qcm",   icon:"❓", name:"QCM", desc:"Choisis la bonne réponse, explication immédiate." },
    { id:"vf",    icon:"⚖️", name:"Vrai / Faux", desc:"Rapide, avec justification." },
    { id:"flash", icon:"🃏", name:"Cartes mémoire", desc:"Notion → définition, répétition espacée." },
    { id:"match", icon:"🔗", name:"Associations", desc:"Relie chaque notion à sa définition." },
    { id:"trous", icon:"✏️", name:"Textes à trous", desc:"Complète le mot manquant." },
    { id:"exam",  icon:"⏱️", name:"Examen blanc", desc:"Mix chronométré, score final." },
    { id:"objectifs", icon:"✅", name:"Objectifs (auto-éval)", desc:"Sais-je traiter chaque objectif officiel ?" },
    { id:"sprint", icon:"⚡", name:"Sprint 60 s", desc:"Un max de bonnes réponses en 60 secondes." },
    { id:"survie", icon:"💀", name:"Survie", desc:"Enchaîne les QCM — une erreur et c'est fini." }
  ];
  const hub = { mode:"qcm", scope:"ecrit" };

  function chaptersInScope(scope){
    if (scope==="all") return orderedChapters;
    if (scope==="ecrit") return orderedChapters.filter(c=>c.ecrit);
    if (chapterById[scope]) return [chapterById[scope]];
    const p = PARTS.find(x=>x.id===scope); return p?p.chapters:orderedChapters;
  }
  function scopeLabel(scope){ if(scope==="all")return"Tout le programme"; if(scope==="ecrit")return"Évaluables à l'écrit"; if(chapterById[scope])return chapterById[scope].title; const p=PARTS.find(x=>x.id===scope); return p?p.name:"Sélection"; }
  function countFor(mode, scope){
    const chs = chaptersInScope(scope); let n = 0;
    chs.forEach(c=>{ if(mode==="flash") n+=(CONTENT[c.id]&&CONTENT[c.id].notions||[]).length;
      else if(mode==="objectifs") n+=c.objectifs.length;
      else if(mode==="match") n+=(CONTENT[c.id]&&CONTENT[c.id].notions||[]).length;
      else if(mode==="exam"||mode==="sprint"||mode==="survie") n+=(QUIZ[c.id]&&QUIZ[c.id].qcm||[]).length;
      else n+=(QUIZ[c.id]&&QUIZ[c.id][mode]||[]).length; });
    return n;
  }

  function renderHub(){
    const modeCards = MODES.map(mo=>`<button class="mode-card ${hub.mode===mo.id?"on":""}" data-act="hub-mode" data-mode="${mo.id}"><span class="mi">${mo.icon}</span><span class="mn">${esc(mo.name)}</span><span class="md">${esc(mo.desc)}</span></button>`).join("");
    const scopes = [["ecrit","Évaluables à l'écrit"],["all","Tout le programme"],["eco","Économie"],["socio","Socio · SP"],["rc","Regards croisés"]];
    let chips = scopes.map(s=>`<button class="chip ${hub.scope===s[0]?"sel":""}" data-act="hub-scope" data-scope="${s[0]}">${esc(s[1])}</button>`).join("");
    if (chapterById[hub.scope]) chips += `<button class="chip sel" data-act="hub-scope" data-scope="${hub.scope}">${esc(chapterById[hub.scope].title)}</button>`;
    const n = countFor(hub.mode, hub.scope);
    const ok = hub.mode==="match" ? n>=4 : n>=1;
    return `<div class="view fade" data-accent="gold">
      <p class="eyebrow">Jouer &amp; réviser</p><h1 class="display">Choisis ton jeu</h1>
      <p class="lead">7 façons d'apprendre. Chaque bonne réponse rapporte de l'XP, fait monter ton niveau et entretient ta série.</p>
      ${gamificationStrip()}
      <h2 class="section" style="margin-top:30px">Mode de jeu</h2>
      <div class="mode-grid">${modeCards}</div>
      <h2 class="section">Sur quoi ?</h2>
      <div class="chips">${chips}</div>
      <div class="toolbar" style="margin-top:24px"><button class="btn xl" data-act="start-game" ${ok?"":"disabled"}><svg viewBox="0 0 24 24" width="20" height="20"><path d="M5 3l14 9-14 9z" fill="currentColor"/></svg> Lancer · ${esc(scopeLabel(hub.scope))}</button></div>
      ${ok?"":`<p class="muted" style="margin-top:10px">Pas assez d'éléments pour ce mode sur cette sélection — choisis « Tout le programme ».</p>`}
    </div>`;
  }

  /* ===================== GAME SESSION ===================== */
  let g = null;        // active session
  let examTimer = null;
  function stopTimer(){ if (examTimer){ clearInterval(examTimer); examTimer = null; } }

  function buildSession(mode, scope){
    const chs = chaptersInScope(scope);
    const s = { mode, scope, i:0, correct:0, wrong:0, answered:false, picked:null, flipped:false, items:[], answers:[], startMs:Date.now(), combo:0, coinMult:1, rewarded:false };
    const collect = kind => { const out=[]; chs.forEach(c=>{ (QUIZ[c.id]&&QUIZ[c.id][kind]||[]).forEach(d=>out.push({kind, d, c})); }); return out; };
    if (mode==="qcm")  s.items = shuffle(collect("qcm")).slice(0,12);
    else if (mode==="vf") s.items = shuffle(collect("vf")).slice(0,14);
    else if (mode==="trous") s.items = shuffle(collect("trous")).slice(0,12);
    else if (mode==="exam"){
      const epool = orderedChapters.filter(c=>c.ecrit);
      const q=[]; epool.forEach(c=>(QUIZ[c.id].qcm||[]).forEach(d=>q.push({kind:"qcm",d,c})));
      const v=[]; epool.forEach(c=>(QUIZ[c.id].vf||[]).forEach(d=>v.push({kind:"vf",d,c})));
      s.items = shuffle(shuffle(q).slice(0,8).concat(shuffle(v).slice(0,4)));
      s.exam = true;
    } else if (mode==="flash"){
      const cards=[]; chs.forEach(c=>(CONTENT[c.id]&&CONTENT[c.id].notions||[]).forEach((nn,idx)=>cards.push({kind:"flash", d:nn, c, nid:c.id+"#n"+idx})));
      cards.sort((a,b)=>(state.leitner[a.nid]||1)-(state.leitner[b.nid]||1));
      const low = cards.filter(x=>(state.leitner[x.nid]||1)<4);
      s.items = shuffle(low.length?low:cards).slice(0,20);
    } else if (mode==="objectifs"){
      const obs=[]; chs.forEach(c=>c.objectifs.forEach((o,idx)=>obs.push({kind:"objectif", d:{text:objText(o),subs:objSubs(o)}, c, oid:c.id+"#o"+idx})));
      s.items = shuffle(obs);
    } else if (mode==="sprint"){
      let pool = collect("qcm"); if (pool.length<10) pool = pool.concat(collect("qcm"));
      s.items = shuffle(pool); s.sprint = true; s.deadline = Date.now()+60000;
    } else if (mode==="survie"){
      let pool = collect("qcm"); if (pool.length<12) pool = pool.concat(collect("qcm"), collect("qcm"));
      s.items = shuffle(pool); s.survie = true;
    } else if (mode==="match"){
      buildMatchRound(s, chs);
    }
    if (state.boostActive){ s.coinMult = 2; state.boostActive = false; save(); }
    return s;
  }
  function buildMatchRound(s, chs){
    chs = chs || chaptersInScope(s.scope);
    const pool=[]; chs.forEach(c=>(CONTENT[c.id]&&CONTENT[c.id].notions||[]).forEach((nn,idx)=>pool.push({nid:c.id+"#n"+idx, t:nn.t, d:nn.d})));
    const pick = shuffle(pool).slice(0,5);
    s.left = pick; s.right = shuffle(pick); s.sel = null; s.matched = {}; s.wrongId = null; s.roundsDone = s.roundsDone||0;
  }

  function renderGame(){
    if (!g) return renderHub();
    if (g.mode==="match") return renderMatch();
    if (g.i >= g.items.length) return renderResult();
    const it = g.items[g.i]; const p = partOf[it.c.id];
    const top = gameTop(p.accent);
    let card = "";
    if (it.kind==="qcm" || (it.kind==="qcm")) card = renderQCM(it);
    else if (it.kind==="vf") card = renderVF(it);
    else if (it.kind==="trous") card = renderTrou(it);
    else if (it.kind==="flash") card = renderFlash(it);
    else if (it.kind==="objectif") card = renderObjectif(it);
    return `<div class="view fade" data-accent="${p.accent}"><div class="player">${top}${card}</div></div>`;
  }
  function gameTop(accent){
    const isRun = g.sprint||g.survie;
    const pct = Math.round(g.i / g.items.length * 100);
    const timer = (g.exam||g.sprint) ? `<span class="timer" id="exam-timer">${g.sprint?"⏱️ 60 s":"⏱️ 0:00"}</span>` : "";
    const surv = g.survie ? `<span class="surv">💀 Survie</span>` : "";
    const combo = (!g.exam && !isRun && (g.combo||0)>=2) ? `<span class="combo">Combo ×${g.combo} 🔥</span>` : "";
    const boost = (g.coinMult||1)>1 ? `<span class="boostbadge">×2 ${COIN}</span>` : "";
    const counter = isRun ? `<span class="count">✓ ${g.correct}</span>` : `<span class="count">${g.i+1} / ${g.items.length}</span>`;
    const bar = isRun ? "" : `<div class="bar"><i style="width:${pct}%"></i></div>`;
    return `<div class="player-top"><a class="back" href="#/jouer" data-act="quit-game" style="margin:0"><svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Quitter</a>${combo}${boost}${surv}${timer}${counter}${bar}</div>`;
  }

  function renderQCM(it){
    const q = it.d; const ans = g.answered;
    const opts = q.o.map((opt,idx)=>{ let cls="opt";
      if (ans && !g.exam){ if(idx===q.c) cls+=" good"; else if(idx===g.picked) cls+=" bad"; }
      else if (g.exam && g.picked===idx) cls+=" picked";
      return `<button class="${cls}" data-act="pick" data-i="${idx}" ${ans&&!g.exam?"disabled":""}><span class="opt-k">${String.fromCharCode(65+idx)}</span><span>${esc(opt)}</span></button>`; }).join("");
    const fbMsg = g.picked===q.c ? "Bonne réponse !" : (g.survie ? "Raté — fin de la partie." : "Pas tout à fait.");
    const feedback = (ans && !g.exam) ? `<div class="feedback ${g.picked===q.c?"ok":"no"}">${fbMsg} <span>${esc(q.e)}</span></div>` : "";
    let actions = "";
    if (ans && !g.exam){ if (g.sprint) actions=""; else if (g.survie && g.dead) actions=`<button class="btn" data-act="survie-end">Voir mon score</button>`; else actions=`<button class="btn" data-act="next-q">Suivant</button>`; }
    return `<div class="q-card"><div class="q-chap">${esc(it.c.title)}</div><div class="q-text">${esc(q.q)}</div><div class="opts">${opts}</div>${feedback}<div class="q-actions">${actions}</div></div>`;
  }
  function renderVF(it){
    const q = it.d; const ans = g.answered;
    const btn = (val,label,cls) => { let c="vf-btn "+cls;
      if (ans && !g.exam){ if(val===q.a) c+=" good"; else if(g.picked===val) c+=" bad"; }
      else if (g.exam && g.picked===val) c+=" picked";
      return `<button class="${c}" data-act="answer-vf" data-v="${val}" ${ans&&!g.exam?"disabled":""}>${label}</button>`; };
    const feedback = (ans && !g.exam) ? `<div class="feedback ${g.picked===q.a?"ok":"no"}">${g.picked===q.a?"Exact !":"Eh non."} <span>${esc(q.e)}</span></div>` : "";
    const nextBtn = (ans && !g.exam) ? `<button class="btn" data-act="next-q">Suivant</button>` : "";
    return `<div class="q-card"><div class="q-chap">${esc(it.c.title)}</div><div class="q-text">${esc(q.s)}</div><div class="vf-row">${btn(true,"Vrai","yes")}${btn(false,"Faux","no")}</div>${feedback}<div class="q-actions">${nextBtn}</div></div>`;
  }
  function renderTrou(it){
    const q = it.d; const ans = g.answered;
    const parts = q.t.split("_____");
    const filled = ans ? `<span class="trou-ans ${g.picked?"good":"bad"}">${esc(q.a)}</span>` : `<input class="trou-input" id="trou-input" type="text" autocomplete="off" spellcheck="false" placeholder="…">`;
    const feedback = ans ? `<div class="feedback ${g.picked?"ok":"no"}">${g.picked?"Correct !":`Réponse : ${esc(q.a)}.`} <span>${esc(q.e||"")}</span></div>` : "";
    const actions = ans ? `<button class="btn" data-act="next-q">Suivant</button>` : `<button class="btn" data-act="submit-trou">Valider</button>`;
    return `<div class="q-card"><div class="q-chap">${esc(it.c.title)}</div><div class="q-text trou">${esc(parts[0])}${filled}${esc(parts[1]||"")}</div>${feedback}<div class="q-actions">${actions}</div></div>`;
  }
  function renderFlash(it){
    const n = it.d; const box = state.leitner[it.nid]||1;
    return `<div class="flash ${g.flipped?"flip":""}" data-act="flip"><div class="flash-inner">
      <div class="flash-face flash-front"><div class="tagline">Notion · boîte ${box}/5</div><div class="q">${esc(n.t)}</div><div class="hint">Clique pour révéler</div><div class="ctx">${esc(it.c.title)}</div></div>
      <div class="flash-face flash-back"><div class="tagline">Définition</div><div class="a small">${esc(n.d)}</div>${n.s?`<div class="ctx">source : ${esc(n.s)}</div>`:""}</div></div></div>
      <div class="player-actions"><button class="btn again" data-act="flash-rate" data-v="0">À revoir</button><button class="btn know" data-act="flash-rate" data-v="1">Je sais</button></div>
      <p class="flash-reveal-hint">Espace : retourner · ← À revoir · → Je sais</p>`;
  }
  function renderObjectif(it){
    const subs = it.d.subs?`<ul class="subs" style="margin-top:10px">${it.d.subs.map(s=>`<li>${esc(s)}</li>`).join("")}</ul>`:"";
    return `<div class="q-card"><div class="q-chap">Objectif officiel · ${esc(it.c.title)}</div><div class="q-text" style="font-size:18px">${esc(it.d.text)}</div>${subs}
      <p class="muted" style="margin:14px 0 0">Sais-tu définir, expliquer et illustrer cet objectif ?</p>
      <div class="player-actions" style="margin-top:14px"><button class="btn again" data-act="obj-rate" data-v="0">À revoir</button><button class="btn know" data-act="obj-rate" data-v="1">Acquis ✓</button></div></div>`;
  }

  function renderMatch(){
    if (Object.keys(g.matched).length === g.left.length){
      // round complete
      return `<div class="view fade" data-accent="gold"><div class="player">${gameTop("gold")}
        <div class="match-done"><div class="big-emoji">🔗</div><h2>Manche réussie !</h2><p class="muted">5 associations correctes. +25 XP</p>
        <div class="result-actions"><button class="btn" data-act="match-again">Nouvelle manche</button><a class="btn ghost" href="#/jouer" data-act="quit-game">Terminer</a></div></div></div></div>`;
    }
    const left = g.left.map((x,i)=>{ const done=!!g.matched[x.nid]; const sel=g.sel===x.nid;
      return `<button class="m-item ${done?"done":""} ${sel?"sel":""}" data-act="match-left" data-nid="${x.nid}" ${done?"disabled":""}>${esc(x.t)}</button>`; }).join("");
    const right = g.right.map((x,i)=>{ const done=!!g.matched[x.nid]; const wrong=g.wrongId===x.nid;
      return `<button class="m-item def ${done?"done":""} ${wrong?"wrong":""}" data-act="match-right" data-nid="${x.nid}" ${done?"disabled":""}>${esc(x.d)}</button>`; }).join("");
    return `<div class="view fade" data-accent="gold"><div class="player wide">${gameTop("gold")}
      <p class="match-help">Clique une notion, puis sa définition.</p>
      <div class="match-grid"><div class="m-col">${left}</div><div class="m-col">${right}</div></div></div></div>`;
  }

  function renderResult(){
    stopTimer();
    if (!g.rewarded){
      g.rewarded = true;
      const total0 = g.correct + g.wrong;
      if (g.exam){ g._isBest = g.correct > (state.best.exam||0); if (g._isBest) state.best.exam = g.correct; gainCoins(10 + (g._isBest?25:0)); confetti(); sfx("win"); }
      else if (total0>0 && g.wrong===0){ g._perfect = true; const nb=checkBadges({perfect:true}); announceBadges(nb); gainCoins(20); confetti(); sfx("win"); }
      save();
    }
    const total = g.correct + g.wrong; const pct = total?Math.round(g.correct/total*100):0;
    let extra = "", titleTxt = pct>=80?"Excellent !":pct>=50?"Bien joué":"Continue !";
    if (g.sprint){ titleTxt = "Sprint terminé"; extra = `<p><b>${g.correct}</b> bonnes réponses en 60 s${g._isBest?` · <span style="color:var(--ok)">nouveau record !</span>`:` · record : ${state.best.sprint||0}`}</p>`; }
    else if (g.survie){ titleTxt = g.correct>=10?"Machine !":"Game over"; extra = `<p>Série de <b>${g.correct}</b> bonne${g.correct>1?"s":""} réponse${g.correct>1?"s":""}${g._isBest?` · <span style="color:var(--ok)">nouveau record !</span>`:` · record : ${state.best.survie||0}`}</p>`; }
    else if (g.exam){ const secs = Math.round(((g.endMs||Date.now()) - g.startMs)/1000); const mm=Math.floor(secs/60), ss=secs%60;
      extra = `<p>Score : <b>${g.correct} / ${g.items.length}</b> · Temps : ${mm}:${String(ss).padStart(2,"0")}${g._isBest?` · <span style="color:var(--ok)">nouveau record !</span>`:""}</p>`;
    } else {
      extra = `<p>${g.correct} bonne${g.correct>1?"s":""} réponse${g.correct>1?"s":""} sur ${total}${g._perfect?` · <span style="color:var(--ok)">sans-faute ! +20 ${COIN}</span>`:""}</p>`;
    }
    const review = g.exam ? `<div class="exam-review">${g.answers.map((a,i)=>`<div class="er ${a.ok?"ok":"no"}"><span class="er-i">${i+1}</span><span class="er-q">${esc(a.q)}</span><span class="er-v">${a.ok?"✓":"✗"}</span></div>`).join("")}</div>` : "";
    return `<div class="view fade" data-accent="gold"><div class="card result-card" data-accent="gold">
      <div style="display:grid;place-items:center">${ring(pct,132)}</div><h2>${titleTxt}</h2>${extra}
      <div class="result-actions"><button class="btn" data-act="restart-game"><svg viewBox="0 0 24 24" width="17" height="17"><path d="M4 12a8 8 0 1 1 2.3 5.6M4 12V7m0 5h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Rejouer</button><a class="btn ghost" href="#/jouer" data-act="quit-game">Autre jeu</a></div></div>
      ${review}</div>`;
  }

  /* ---- answer handlers ---- */
  function finishQuestionFeedback(correct){ g.answered=true; if(correct) g.correct++; else g.wrong++; recordAnswer(correct); view.innerHTML = renderGame(); renderSidebar(); }
  function examRecord(it, correct, label){ g.answers.push({q:label, ok:correct}); if(correct) g.correct++; else g.wrong++; recordAnswer(correct); advance(); }
  function advance(){ g.i++; g.answered=false; g.picked=null; g.flipped=false; view.innerHTML = renderGame(); if (g.i>=g.items.length){ g.endMs=Date.now(); window.scrollTo(0,0); } renderSidebar(); if (g.exam && g.i<g.items.length) startExamTimer(); }

  function startExamTimer(){ stopTimer(); examTimer = setInterval(()=>{ const el=document.getElementById("exam-timer"); if(!el){ stopTimer(); return; } const s=Math.round((Date.now()-g.startMs)/1000); el.textContent="⏱️ "+Math.floor(s/60)+":"+String(s%60).padStart(2,"0"); }, 1000); }
  function startSprintTimer(){ stopTimer(); examTimer = setInterval(()=>{ if(!g||!g.sprint){ stopTimer(); return; } const rem=Math.max(0,Math.round((g.deadline-Date.now())/1000)); const el=document.getElementById("exam-timer"); if(el){ el.textContent="⏱️ "+rem+" s"; el.classList.toggle("low", rem<=10); } if(rem<=0) endGame(); }, 250); }
  function endGame(){ stopTimer(); if(g){ g.i=g.items.length; g.endMs=Date.now(); } view.innerHTML=renderGame(); window.scrollTo(0,0); renderSidebar(); }

  function pickQCM(idx){
    const it = g.items[g.i]; const correct = idx===it.d.c;
    if (g.exam){ g.picked=idx; examRecord(it, correct, it.d.q); return; }
    if (g.answered) return;
    g.picked=idx;
    if (g.survie){ g.answered=true; if(correct) g.correct++; else { g.wrong++; g.dead=true; } recordAnswer(correct); view.innerHTML=renderGame(); renderSidebar(); return; }
    if (g.sprint){ g.answered=true; if(correct) g.correct++; else g.wrong++; recordAnswer(correct); view.innerHTML=renderGame(); renderSidebar(); if (Date.now() < g.deadline) setTimeout(()=>{ if(g&&g.sprint&&g.answered&&Date.now()<g.deadline) advance(); }, 650); return; }
    finishQuestionFeedback(correct);
  }
  function answerVF(val){
    const it = g.items[g.i]; const correct = val===it.d.a;
    if (g.exam){ g.picked=val; examRecord(it, correct, it.d.s); }
    else { if(g.answered) return; g.picked=val; finishQuestionFeedback(correct); }
  }
  function submitTrou(){
    if (g.answered) return; const it=g.items[g.i]; const inp=document.getElementById("trou-input"); const val=inp?inp.value:"";
    if (!val.trim()) return; const cands=[it.d.a].concat(it.d.alt||[]); const correct=cands.some(c=>norm(c)===norm(val));
    g.picked=correct; finishQuestionFeedback(correct);
  }
  function flashRate(know){
    const it=g.items[g.i]; const cur=state.leitner[it.nid]||1;
    state.leitner[it.nid] = know ? Math.min(5,cur+1) : 1;
    if (know){ g.correct++; addXp(5); gainCoins(3); sfx("correct"); creditObjective(it.c.id, it.nid); } else { g.wrong++; sfx("wrong"); }
    touchStreak(); const nb=checkBadges(); save(); announceBadges(nb); advance();
  }
  function objRate(acq){
    const it=g.items[g.i];
    if (acq){ creditObjective(it.c.id, it.oid+"|acq"); g.correct++; addXp(10); gainCoins(5); sfx("correct"); }
    else { g.wrong++; sfx("wrong"); }
    touchStreak(); const nb=checkBadges(); save(); announceBadges(nb); advance();
  }
  function matchLeft(nid){ g.sel=nid; g.wrongId=null; view.innerHTML=renderGame(); }
  function matchRight(nid){
    if (!g.sel){ return; }
    if (nid===g.sel){ g.matched[nid]=true; g.sel=null; g.wrongId=null; addXp(5); gainCoins(3); sfx("correct"); creditObjective(nid.split("#")[0], nid);
      if (Object.keys(g.matched).length===g.left.length){ touchStreak(); gainCoins(15); confetti(); sfx("win"); const nb=checkBadges(); save(); announceBadges(nb); }
      else save();
    } else { g.wrongId=nid; sfx("wrong"); setTimeout(()=>{ g.wrongId=null; if(g.mode==="match") view.innerHTML=renderGame(); }, 600); }
    view.innerHTML=renderGame();
  }

  /* ===================== PROFIL ===================== */
  function renderProfil(){
    const lv = levelInfo(); const o = overall();
    const acc = state.stats.ans?Math.round(state.stats.correct/state.stats.ans*100):0;
    const dg = state.daily.date===todayStr()?state.daily.xp:0; const dpct=Math.min(100,Math.round(dg/DAILY_GOAL*100));
    const title = state.equipped.title ? titleName(state.equipped.title) : null;
    const badges = BADGES.map(b=>{ const got=state.badges.has(b.id); return `<div class="badge-card ${got?"got":""}"><div class="b-ico">${b.icon}</div><div class="b-name">${esc(b.name)}</div><div class="b-desc">${esc(b.desc)}</div>${got?'<div class="b-got">obtenu</div>':'<div class="b-lock">à débloquer</div>'}</div>`; }).join("");
    return `<div class="view fade" data-accent="gold">
      <p class="eyebrow">Profil &amp; progrès</p><h1 class="display">Niveau ${lv.idx+1} · ${esc(lv.name)}${title?` <span class="title-chip">« ${esc(title)} »</span>`:""}</h1>
      <div class="card method-card" style="margin-top:8px"><div class="lvl-row"><div style="flex:1"><div class="bar"><i style="width:${lv.pct}%"></i></div><div class="muted" style="font-size:12.5px;margin-top:7px">${lv.nextMin!==null?`${lv.xp} / ${lv.nextMin} XP — plus que ${lv.toNext} XP pour le niveau ${lv.idx+2}`:`${lv.xp} XP — niveau max atteint`}</div></div></div></div>
      <div class="stat-grid">
        <div class="stat-c gold-stat"><div class="sc-k">${COIN} ${state.coins}</div><div class="sc-l">Écus</div></div>
        <div class="stat-c"><div class="sc-k">${lv.xp}</div><div class="sc-l">XP total</div></div>
        <div class="stat-c"><div class="sc-k">${state.streak.count} 🔥</div><div class="sc-l">Série (jours)</div></div>
        <div class="stat-c"><div class="sc-k">${state.stats.correct}</div><div class="sc-l">Bonnes réponses</div></div>
        <div class="stat-c"><div class="sc-k">${acc}%</div><div class="sc-l">Taux de réussite</div></div>
        <div class="stat-c"><div class="sc-k">${notionsMastered()}</div><div class="sc-l">Notions maîtrisées</div></div>
        <div class="stat-c"><div class="sc-k">${o.d}/${o.t}</div><div class="sc-l">Objectifs cochés</div></div>
        <div class="stat-c"><div class="sc-k">${state.best.exam||0}/12</div><div class="sc-l">Record examen</div></div>
        <div class="stat-c"><div class="sc-k">⚡ ${state.best.sprint||0} · 💀 ${state.best.survie||0}</div><div class="sc-l">Records sprint / survie</div></div>
        <div class="stat-c"><div class="sc-k">🧊 ${state.powerups.freeze||0} · ⚡ ${state.powerups.boost||0}</div><div class="sc-l">Power-ups</div></div>
        <div class="stat-c"><div class="sc-k">${dg}/${DAILY_GOAL}</div><div class="sc-l">XP aujourd'hui</div><div class="bar sm" style="margin-top:8px"><i style="width:${dpct}%"></i></div></div>
      </div>
      <h2 class="section">Badges <span class="muted" style="font-size:14px;font-weight:400">· ${state.badges.size}/${BADGES.length}</span></h2>
      <div class="badge-grid">${badges}</div>
      <div class="toolbar" style="margin-top:30px"><a class="btn" href="#/boutique"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M5 7h14l-1 9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg> Boutique</a><label class="toggle"><input type="checkbox" id="soundToggle" ${state.sound?"checked":""}><span class="sw"></span> Sons &amp; effets</label><button class="link-btn" data-act="reset">Réinitialiser ma progression</button></div>
    </div>`;
  }

  /* ===================== BOUTIQUE ===================== */
  function renderBoutique(){
    const themes = THEMES.map(th=>{
      const owned = state.owned.themes.indexOf(th.id)>=0;
      const equipped = ((state.equipped.theme)||"gold")===th.id;
      const sw = th.sw.map(c=>`<span style="background:${c}"></span>`).join("");
      let action;
      if (equipped) action = `<button class="btn ghost" disabled>Équipé ✓</button>`;
      else if (owned) action = `<button class="btn" data-act="equip-theme" data-id="${th.id}">Équiper</button>`;
      else action = `<button class="btn" data-act="buy-theme" data-id="${th.id}" ${state.coins<th.price?"disabled":""}>${th.price} ${COIN}</button>`;
      return `<div class="shop-card ${equipped?"equipped":""}"><div class="sw3">${sw}</div><div class="shop-name">${esc(th.name)}</div>${action}</div>`;
    }).join("");
    const pows = POWERUPS.map(pw=>{
      const have = state.powerups[pw.id]||0;
      const buy = `<button class="btn" data-act="buy-pow" data-id="${pw.id}" ${state.coins<pw.price?"disabled":""}>${pw.price} ${COIN}</button>`;
      const use = pw.id==="boost" ? `<button class="btn ghost" data-act="use-boost" ${(have>0&&!state.boostActive)?"":"disabled"}>${state.boostActive?"Armé ✓":"Activer"}</button>` : "";
      return `<div class="shop-card pw"><div class="pw-ico">${pw.icon}</div><div class="shop-name">${esc(pw.name)}</div><div class="pw-desc">${esc(pw.desc)}</div><div class="pw-have">Possédés : ${have}</div><div class="pw-acts">${buy}${use}</div></div>`;
    }).join("");
    const titles = TITLES.map(ti=>{
      const owned = state.owned.titles.indexOf(ti.id)>=0;
      const equipped = state.equipped.title===ti.id;
      let action;
      if (equipped) action = `<button class="btn ghost" disabled>Porté ✓</button>`;
      else if (owned) action = `<button class="btn" data-act="equip-title" data-id="${ti.id}">Porter</button>`;
      else action = `<button class="btn" data-act="buy-title" data-id="${ti.id}" ${state.coins<ti.price?"disabled":""}>${ti.price} ${COIN}</button>`;
      return `<div class="shop-card ti ${equipped?"equipped":""}"><div class="ti-name">« ${esc(ti.name)} »</div>${action}</div>`;
    }).join("");
    return `<div class="view fade" data-accent="gold">
      <div class="shop-head"><div><p class="eyebrow">Boutique</p><h1 class="display">Dépense tes écus</h1></div><div class="coin-balance">${COIN} <b>${state.coins}</b></div></div>
      <p class="lead">Gagne des écus à chaque bonne réponse. Relooke toute l'app avec des thèmes, équipe des power-ups et porte des titres.</p>
      <h2 class="section">Thèmes <span class="muted" style="font-size:14px;font-weight:400">· ${state.owned.themes.length}/${THEMES.length} possédés</span></h2>
      <div class="shop-grid">${themes}</div>
      <h2 class="section">Power-ups</h2>
      <div class="shop-grid">${pows}</div>
      <h2 class="section">Titres</h2>
      <div class="shop-grid">${titles}</div>
      <div class="toolbar" style="margin-top:28px"><a class="btn" href="#/jouer">Gagner plus d'écus →</a></div>
    </div>`;
  }

  /* ===================================================================
     ROUTER
     =================================================================== */
  function route(){
    const seg = (location.hash||"#/").replace(/^#/,"").split("/").filter(Boolean);
    closeSearch();
    if (seg[0] !== "jouer" || !g) { if (seg[0] !== "jouer") { g = null; stopTimer(); } }
    let html, active="/";
    switch(seg[0]){
      case undefined: html=renderDashboard(); active="/"; break;
      case "programme": html=renderProgramme(); active="/programme"; break;
      case "chapitre": html=renderChapter(seg[1]); active="/programme"; break;
      case "methode": html=renderMethode(); active="/methode"; break;
      case "outils": html=renderOutils(); active="/outils"; break;
      case "jouer": html = g ? renderGame() : renderHub(); active="/jouer"; break;
      case "profil": html=renderProfil(); active="/profil"; break;
      case "boutique": html=renderBoutique(); active="/boutique"; break;
      default: html=renderDashboard();
    }
    view.innerHTML = html;
    document.querySelectorAll(".nav a[data-route]").forEach(a=>a.classList.toggle("active", a.getAttribute("data-route")===active));
    renderSidebar();
    document.body.classList.remove("menu-open"); document.getElementById("scrim").hidden=true;
    if (seg[0]==="jouer" && g && g.i<g.items.length){ if(g.exam) startExamTimer(); if(g.sprint) startSprintTimer(); }
    if (!(seg[0]==="jouer" && g)) window.scrollTo(0,0);
  }

  function renderSidebar(){
    const lv = levelInfo(); const o = overall();
    const title = state.equipped.title ? titleName(state.equipped.title) : null;
    document.getElementById("sidebar-progress").innerHTML =
      `<div class="mini-prog">${title?`<div class="mini-title">« ${esc(title)} »</div>`:""}
      <div class="mini-prog-top"><span>Niveau ${lv.idx+1}</span><b>${esc(lv.name)}</b></div><div class="bar"><i style="width:${lv.pct}%"></i></div>
      <div class="mini-row"><span>🔥 ${state.streak.count} j</span><span>${lv.xp} XP</span></div>
      <a class="coins-row" href="#/boutique"><span>${COIN} ${state.coins}</span><span class="shop-link">Boutique →</span></a>
      <div class="mini-prog-top" style="margin-top:12px"><span>Objectifs</span><b>${o.pct}%</b></div><div class="bar"><i style="width:${o.pct}%"></i></div></div>`;
  }

  /* ===================================================================
     EVENTS
     =================================================================== */
  document.addEventListener("click", function(e){
    ensureAudio();
    const el = e.target.closest("[data-act]"); if(!el) return;
    const act = el.getAttribute("data-act");
    switch(act){
      case "toggle-obj": { const id=el.getAttribute("data-id"); if(state.done.has(id))state.done.delete(id);else state.done.add(id); const nb=checkBadges(); save(); announceBadges(nb); el.classList.toggle("done"); const seg=(location.hash||"").replace(/^#/,"").split("/").filter(Boolean); if(seg[0]==="chapitre") softRefreshChapter(seg[1]); renderSidebar(); break; }
      case "tab": chapTab=el.getAttribute("data-tab"); { const seg=(location.hash||"").replace(/^#/,"").split("/").filter(Boolean); view.innerHTML=renderChapter(seg[1]); } break;
      case "reset": if(confirm("Réinitialiser toute ta progression, XP et badges ?")){ localStorage.removeItem(KEY); state=load(); save(); route(); } break;
      case "hub-mode": hub.mode=el.getAttribute("data-mode"); view.innerHTML=renderHub(); break;
      case "hub-scope": hub.scope=el.getAttribute("data-scope"); view.innerHTML=renderHub(); break;
      case "start-game": g=buildSession(hub.mode,hub.scope); window.scrollTo(0,0); view.innerHTML=renderGame(); if(g.exam) startExamTimer(); if(g.sprint) startSprintTimer(); renderSidebar(); break;
      case "revise-chap": hub.scope=el.getAttribute("data-id"); hub.mode="qcm"; g=null; location.hash="#/jouer"; break;
      case "quit-game": e.preventDefault(); g=null; stopTimer(); view.innerHTML=renderHub(); renderSidebar(); window.scrollTo(0,0); break;
      case "restart-game": g=buildSession(g.mode, g.scope); window.scrollTo(0,0); view.innerHTML=renderGame(); if(g.exam) startExamTimer(); if(g.sprint) startSprintTimer(); break;
      case "survie-end": endGame(); break;
      case "pick": pickQCM(+el.getAttribute("data-i")); break;
      case "answer-vf": answerVF(el.getAttribute("data-v")==="true"); break;
      case "submit-trou": submitTrou(); break;
      case "next-q": advance(); break;
      case "flip": if(g&&g.items[g.i]&&g.items[g.i].kind==="flash"){ g.flipped=!g.flipped; const f=view.querySelector(".flash"); if(f) f.classList.toggle("flip"); } break;
      case "flash-rate": flashRate(el.getAttribute("data-v")==="1"); break;
      case "obj-rate": objRate(el.getAttribute("data-v")==="1"); break;
      case "match-left": matchLeft(el.getAttribute("data-nid")); break;
      case "match-right": matchRight(el.getAttribute("data-nid")); break;
      case "match-again": buildMatchRound(g); view.innerHTML=renderGame(); break;
      case "buy-theme": { const id=el.getAttribute("data-id"); const th=THEMES.find(x=>x.id===id); if(!th||state.owned.themes.indexOf(id)>=0) break; if(state.coins>=th.price){ state.coins-=th.price; state.owned.themes.push(id); state.equipped.theme=id; applyTheme(); sfx("buy"); confetti(); save(); toast(`<span class="t-ico">🎨</span> Thème <b>${esc(th.name)}</b> débloqué et équipé !`); view.innerHTML=renderBoutique(); renderSidebar(); } else { toast(`Il te manque ${th.price-state.coins} ${COIN}.`); } break; }
      case "equip-theme": { const id=el.getAttribute("data-id"); state.equipped.theme=id; applyTheme(); sfx("coin"); save(); view.innerHTML=renderBoutique(); break; }
      case "buy-title": { const id=el.getAttribute("data-id"); const ti=TITLES.find(x=>x.id===id); if(!ti||state.owned.titles.indexOf(id)>=0) break; if(state.coins>=ti.price){ state.coins-=ti.price; state.owned.titles.push(id); state.equipped.title=id; sfx("buy"); confetti(); save(); toast(`<span class="t-ico">🏷️</span> Titre « ${esc(ti.name)} » débloqué !`); view.innerHTML=renderBoutique(); renderSidebar(); } else { toast(`Il te manque ${ti.price-state.coins} ${COIN}.`); } break; }
      case "equip-title": { const id=el.getAttribute("data-id"); state.equipped.title=id; sfx("coin"); save(); view.innerHTML=renderBoutique(); renderSidebar(); break; }
      case "buy-pow": { const id=el.getAttribute("data-id"); const pw=POWERUPS.find(x=>x.id===id); if(!pw) break; if(state.coins>=pw.price){ state.coins-=pw.price; state.powerups[id]=(state.powerups[id]||0)+1; sfx("buy"); save(); toast(`<span class="t-ico">${pw.icon}</span> ${esc(pw.name)} acheté !`); view.innerHTML=renderBoutique(); renderSidebar(); } else { toast(`Il te manque ${pw.price-state.coins} ${COIN}.`); } break; }
      case "use-boost": { if((state.powerups.boost||0)>0 && !state.boostActive){ state.powerups.boost--; state.boostActive=true; sfx("coin"); save(); toast(`<span class="t-ico">⚡</span> Boost ×2 armé pour ta prochaine partie !`); view.innerHTML=renderBoutique(); } break; }
    }
  });
  document.addEventListener("change", function(e){ if(e.target&&e.target.id==="ecritOnly"){ state.ecritOnly=e.target.checked; save(); view.innerHTML=renderProgramme(); } else if(e.target&&e.target.id==="soundToggle"){ state.sound=e.target.checked; save(); if(state.sound){ ensureAudio(); sfx("coin"); } } });
  document.addEventListener("keydown", function(e){
    if (e.key==="Enter" && e.target && e.target.id==="trou-input"){ e.preventDefault(); submitTrou(); return; }
  });

  function softRefreshChapter(id){
    const c=chapterById[id]; if(!c) return; const cp=chapProgress(c);
    const rw=view.querySelector(".detail-top .ring.lg"); if(rw){ const t=document.createElement("div"); t.innerHTML=ring(cp.pct,132); rw.replaceWith(t.firstElementChild); }
    const sub=view.querySelector(".obj-sub"); if(sub&&chapTab==="objectifs") sub.innerHTML=`Maîtrise réelle : <b>${cp.cc}/${cp.tg}</b> bonnes réponses <b>distinctes</b> du chapitre (${cp.pct}%). Atteindre 100% suppose de couvrir la quasi-totalité de la banque — répéter une question déjà réussie ne compte pas.`;
  }

  /* ===================== SEARCH ===================== */
  const SEARCH_INDEX = [];
  orderedChapters.forEach(c=>{
    SEARCH_INDEX.push({type:"Chapitre",title:c.title,ctx:`Chapitre ${c.num} · ${partOf[c.id].name}`,href:`#/chapitre/${c.id}`,hay:c.title.toLowerCase()});
    c.objectifs.forEach(o=>{ const t=objText(o); SEARCH_INDEX.push({type:"Objectif",title:t,ctx:`Ch. ${c.num} — ${c.title}`,href:`#/chapitre/${c.id}`,hay:t.toLowerCase()}); });
    (CONTENT[c.id]&&CONTENT[c.id].notions||[]).forEach(n=>SEARCH_INDEX.push({type:"Notion",title:n.t,ctx:n.d,href:`#/chapitre/${c.id}`,hay:(n.t+" "+n.d).toLowerCase()}));
  });
  const overlay=document.getElementById("search-overlay"), sInput=document.getElementById("search-input"), sResults=document.getElementById("search-results");
  let sCursor=-1;
  function openSearch(){ overlay.hidden=false; sInput.value=""; runSearch(""); setTimeout(()=>sInput.focus(),30); }
  function closeSearch(){ if(!overlay.hidden) overlay.hidden=true; }
  function runSearch(q){
    const toks=q.toLowerCase().split(/\s+/).filter(Boolean); let hits=SEARCH_INDEX;
    if(toks.length) hits=SEARCH_INDEX.filter(it=>toks.every(t=>it.hay.includes(t)));
    const order={Chapitre:0,Notion:1,Objectif:2};
    hits=hits.slice().sort((a,b)=>order[a.type]-order[b.type]).slice(0,40);
    if(!hits.length){ sResults.innerHTML=`<div class="sr-empty">Aucun résultat${q?` pour « ${esc(q)} »`:""}.</div>`; return; }
    const groups={}; hits.forEach(h=>{(groups[h.type]=groups[h.type]||[]).push(h);});
    let html="";
    ["Chapitre","Notion","Objectif"].forEach(grp=>{ if(!groups[grp])return; html+=`<div class="sr-group-title">${grp==="Chapitre"?"Chapitres":grp==="Notion"?"Notions":"Objectifs"}</div>`;
      groups[grp].forEach(h=>{ html+=`<a class="sr-item" href="${h.href}"><div class="sr-t">${hl(h.title,toks)}</div><div class="sr-c">${hl(h.ctx.length>110?h.ctx.slice(0,110)+"…":h.ctx,toks)}</div></a>`; }); });
    sResults.innerHTML=html; sCursor=-1;
  }
  function moveCursor(d){ const items=sResults.querySelectorAll(".sr-item"); if(!items.length)return; sCursor=(sCursor+d+items.length)%items.length; items.forEach((el,i)=>el.classList.toggle("cursor",i===sCursor)); items[sCursor].scrollIntoView({block:"nearest"}); }
  sInput&&sInput.addEventListener("input",()=>runSearch(sInput.value));
  overlay&&overlay.addEventListener("click",e=>{ if(e.target===overlay) closeSearch(); });
  sResults&&sResults.addEventListener("click",e=>{ if(e.target.closest(".sr-item")) closeSearch(); });
  document.getElementById("search-close").addEventListener("click",closeSearch);

  /* ===================== NAV / KEYBOARD ===================== */
  document.getElementById("search-btn").addEventListener("click",openSearch);
  document.getElementById("search-btn-m").addEventListener("click",openSearch);
  document.getElementById("menu-btn").addEventListener("click",()=>{ document.body.classList.toggle("menu-open"); document.getElementById("scrim").hidden=!document.body.classList.contains("menu-open"); });
  document.getElementById("scrim").addEventListener("click",()=>{ document.body.classList.remove("menu-open"); document.getElementById("scrim").hidden=true; });
  document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",()=>{ document.body.classList.remove("menu-open"); document.getElementById("scrim").hidden=true; }));
  document.addEventListener("keydown",function(e){
    if(e.key==="/"&&overlay.hidden&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){ e.preventDefault(); openSearch(); return; }
    if(!overlay.hidden){ if(e.key==="Escape")closeSearch(); else if(e.key==="ArrowDown"){e.preventDefault();moveCursor(1);} else if(e.key==="ArrowUp"){e.preventDefault();moveCursor(-1);} else if(e.key==="Enter"&&sCursor>=0){ const a=sResults.querySelectorAll(".sr-item")[sCursor]; if(a){ location.hash=a.getAttribute("href").slice(1); closeSearch(); } } return; }
    if(g && location.hash.indexOf("jouer")>=0 && g.i<g.items.length){
      const it=g.items[g.i];
      if(it.kind==="flash"){ if(e.key===" "){e.preventDefault(); g.flipped=!g.flipped; const f=view.querySelector(".flash"); if(f)f.classList.toggle("flip");} else if(e.key==="ArrowRight")flashRate(true); else if(e.key==="ArrowLeft")flashRate(false); }
      else if(it.kind==="objectif"){ if(e.key==="ArrowRight")objRate(true); else if(e.key==="ArrowLeft")objRate(false); }
      else if(!g.answered){ if((it.kind==="qcm")&&/^[1-4]$/.test(e.key)) pickQCM(+e.key-1); else if(it.kind==="vf"){ if(e.key==="v"||e.key==="V")answerVF(true); if(e.key==="f"||e.key==="F")answerVF(false); } }
      else if(g.answered && !g.exam){ if(g.sprint){} else if(g.survie && g.dead){ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); endGame(); } } else if(e.key==="Enter"||e.key===" "){ e.preventDefault(); advance(); } }
    }
  });

  applyTheme();
  dailyCheck();
  window.addEventListener("hashchange",route);
  route();
})();
