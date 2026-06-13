// Extrait les définitions sourcées (content.js) des 9 chapitres évaluables à l'écrit → fiche_data.json
const fs = require('fs');
global.window = {};
eval(fs.readFileSync('data.js', 'utf8'));
eval(fs.readFileSync('content.js', 'utf8'));
const D = window.SES_DATA, C = window.SES_CONTENT;

const out = {
  meta: { programme: D.meta.sourceProgramme, epreuve: D.meta.sourceEpreuve, session: D.meta.session },
  parts: []
};
D.parts.forEach(p => {
  const chs = p.chapters.map(c => {
    const ct = C[c.id] || {};
    return {
      num: c.num,
      title: c.title,
      ecrit: !!c.ecrit,
      notions: (ct.notions || []).map(n => ({ t: n.t, d: n.d, s: n.s || '', u: n.u || '' })),
      auteurs: (ct.auteurs || []).map(a => ({ n: a.n, d: a.d, s: a.s || '' }))
    };
  });
  if (chs.length) out.parts.push({ name: p.name, chapters: chs });
});

fs.writeFileSync('fiche_data.json', JSON.stringify(out, null, 2));
const nC = out.parts.reduce((s, p) => s + p.chapters.length, 0);
const nN = out.parts.reduce((s, p) => s + p.chapters.reduce((x, c) => x + c.notions.length, 0), 0);
const nA = out.parts.reduce((s, p) => s + p.chapters.reduce((x, c) => x + c.auteurs.length, 0), 0);
console.log('parts:', out.parts.length, '| chapters:', nC, '| notions:', nN, '| auteurs:', nA);
