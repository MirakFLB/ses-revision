/* =====================================================================
   SES Terminale — Banque de questions (extension 6) : TEXTES À TROUS
   ---------------------------------------------------------------------
   Ajouté à window.SES_QUIZ. Étoffe les « textes à trous » sur les 12
   chapitres. Format : { t:"phrase avec _____", a:"réponse", alt:[...], e }.
   Réponses courtes (comparaison insensible aux accents/casse).
   ===================================================================== */
(function () {
  var Q = window.SES_QUIZ; if (!Q) { window.SES_QUIZ = Q = {}; }
  function add(id, extra){
    var t = Q[id]; if (!t) { t = Q[id] = { qcm:[], vf:[], trous:[] }; }
    ["qcm","vf","trous"].forEach(function(k){ if (extra[k]) t[k] = (t[k]||[]).concat(extra[k]); });
  }

  /* ===== 1. CROISSANCE ===== */
  add("eco-croissance", { trous: [
    { t: "La croissance _____ provient de la hausse des quantités de facteurs (travail, capital).", a: "extensive", e: "≠ intensive (gains de productivité)." },
    { t: "L'accumulation de connaissances et de compétences forme le capital _____.", a: "humain", e: "Source clé de la croissance endogène (Lucas)." },
    { t: "Schumpeter nomme « destruction _____ » le renouvellement du tissu productif par l'innovation.", a: "creatrice", alt: ["créatrice"], e: "L'innovation détruit l'ancien et crée le nouveau." },
    { t: "Une innovation qui profite gratuitement à d'autres acteurs crée une externalité _____ de connaissance.", a: "positive", e: "Justifie le soutien public à la R&D." }
  ]});

  /* ===== 2. COMMERCE INTERNATIONAL ===== */
  add("eco-commerce", { trous: [
    { t: "Ricardo fonde la spécialisation sur l'avantage _____, et non sur l'avantage absolu.", a: "comparatif", e: "Smith = absolu ; Ricardo = comparatif." },
    { t: "L'échange de produits similaires entre pays comparables est le commerce _____-branche.", a: "intra", e: "Différenciation + économies d'échelle." },
    { t: "La fragmentation de la production entre pays s'appelle la _____ internationale du processus productif (DIPP).", a: "decomposition", alt: ["décomposition"], e: "Chaînes de valeur mondiales." },
    { t: "Friedrich List défend la protection temporaire des industries _____.", a: "naissantes", alt: ["naissante"], e: "Le temps qu'elles deviennent compétitives." }
  ]});

  /* ===== 3. CHÔMAGE ===== */
  add("eco-chomage", { trous: [
    { t: "Le chômage lié au cycle et à une demande insuffisante est dit _____.", a: "conjoncturel", e: "≠ structurel (durable)." },
    { t: "Verser un salaire au-dessus de l'équilibre pour motiver les salariés = salaire d'_____.", a: "efficience", e: "Peut réduire l'emploi offert." },
    { t: "Un chômage de très courte durée lié aux délais d'appariement est dit _____.", a: "frictionnel", e: "Incompressible, normal sur un marché du travail." },
    { t: "Au sens du _____, un chômeur est sans emploi, disponible et en recherche active.", a: "BIT", alt: ["bureau international du travail"], e: "Trois critères cumulatifs." }
  ]});

  /* ===== 4. CRISES FINANCIÈRES ===== */
  add("eco-crises", { trous: [
    { t: "Quand le prix d'un actif s'écarte durablement de sa valeur fondamentale, on parle de _____ spéculative.", a: "bulle", e: "Avant le krach." },
    { t: "Un agent assuré contre le risque qui en prend davantage illustre l'aléa _____.", a: "moral", e: "Too big to fail." },
    { t: "S'endetter pour investir davantage, amplifiant gains et pertes, c'est l'effet de _____.", a: "levier", e: "Démultiplie le risque." },
    { t: "La banque centrale joue le rôle de prêteur en dernier _____ pour éviter la panique bancaire.", a: "ressort", e: "Fournit des liquidités." }
  ]});

  /* ===== 5. POLITIQUES EUROPÉENNES ===== */
  add("eco-europe", { trous: [
    { t: "La politique monétaire de la zone euro est conduite par la _____.", a: "BCE", alt: ["banque centrale europeenne","banque centrale européenne"], e: "Indépendante, cible la stabilité des prix." },
    { t: "Le rachat massif de titres par la banque centrale s'appelle l'assouplissement _____.", a: "quantitatif", e: "Quantitative easing, politique non conventionnelle." },
    { t: "Le Pacte de stabilité fixe une référence de déficit public à _____ % du PIB.", a: "3", alt: ["trois"], e: "Et 60 % pour la dette." },
    { t: "Une union _____ ajoute à la zone de libre-échange un tarif extérieur commun.", a: "douaniere", alt: ["douanière"], e: "Étape d'intégration avant le marché unique." }
  ]});

  /* ===== 6. STRUCTURE SOCIALE ===== */
  add("socio-structure", { trous: [
    { t: "La nomenclature de l'INSEE qui classe la population par profession s'appelle les _____ (sigle).", a: "PCS", alt: ["csp","categories socioprofessionnelles"], e: "6 grands groupes." },
    { t: "Une classe « pour soi » (Marx) suppose une _____ de classe.", a: "conscience", e: "≠ classe « en soi » (position objective)." },
    { t: "La thèse de la _____ (Mendras) décrit une vaste classe moyenne centrale.", a: "moyennisation", e: "Aujourd'hui contestée." },
    { t: "Pour Bourdieu, les goûts culturels servent de marqueurs de _____ sociale.", a: "distinction", e: "Capital culturel et reproduction." }
  ]});

  /* ===== 7. ÉCOLE ===== */
  add("socio-ecole", { trous: [
    { t: "L'allongement des études et l'accès du plus grand nombre = _____ quantitative (massification).", a: "democratisation", alt: ["démocratisation"], e: "≠ démocratisation qualitative." },
    { t: "Le décalage entre l'accès élargi à l'école et le maintien des inégalités est le _____ de la massification.", a: "paradoxe", e: "Démocratisation « ségrégative »." },
    { t: "Le patrimoine de savoirs et codes transmis par la famille est le capital _____.", a: "culturel", e: "Inégalement réparti, valorisé par l'école." },
    { t: "L'idéal selon lequel la réussite dépend du seul mérite s'appelle la _____.", a: "meritocratie", alt: ["méritocratie"], e: "Souvent démentie par le poids de l'origine." }
  ]});

  /* ===== 8. MOBILITÉ SOCIALE ===== */
  add("socio-mobilite", { trous: [
    { t: "La table de _____ part de l'origine et suit ce que deviennent les fils.", a: "destinee", alt: ["destinée"], e: "Lecture en ligne ; recrutement = colonne." },
    { t: "La table de _____ part de la position d'arrivée et remonte aux origines.", a: "recrutement", e: "≠ destinée (on part de l'origine)." },
    { t: "Occuper une position inférieure à celle attendue de son diplôme s'appelle le _____.", a: "declassement", alt: ["déclassement"], e: "Lié à l'inflation des diplômes." },
    { t: "Comparer sa position à celle de ses parents, c'est la mobilité _____générationnelle.", a: "inter", e: "≠ intragénérationnelle (au cours d'une carrière)." }
  ]});

  /* ===== 9. TRAVAIL ET EMPLOI ===== */
  add("socio-travail", { trous: [
    { t: "Le post-fordisme japonais fondé sur la polyvalence et le « juste-à-temps » est le _____.", a: "toyotisme", e: "Flux tendu, qualité totale." },
    { t: "Le _____ ajoute au taylorisme le travail à la chaîne et la hausse des salaires.", a: "fordisme", e: "Production et consommation de masse." },
    { t: "Pour Castel, l'effritement de l'emploi et des liens conduit à la _____.", a: "desaffiliation", alt: ["désaffiliation"], e: "Au bout de la précarisation." },
    { t: "La croissance des emplois très et peu qualifiés au détriment du milieu = _____ des emplois.", a: "polarisation", e: "Effet « sablier »." }
  ]});

  /* ===== 10. ENGAGEMENT POLITIQUE ===== */
  add("socio-engagement", { trous: [
    { t: "La théorie du « passager clandestin » dans l'action collective est due à l'économiste _____.", a: "olson", e: "Mancur Olson, 1965." },
    { t: "Pour inciter à se mobiliser, Olson invoque des incitations _____.", a: "selectives", alt: ["sélectives"], e: "Réservées aux participants." },
    { t: "L'ensemble des moyens d'action d'une époque forme le _____ d'action collective (Tilly).", a: "repertoire", alt: ["répertoire"], e: "Manifestation, pétition, grève…" },
    { t: "Écologie, féminisme et identités relèvent des « nouveaux mouvements _____ ».", a: "sociaux", e: "NMS, post-matérialistes." }
  ]});

  /* ===== 11. JUSTICE SOCIALE ===== */
  add("rc-justice", { trous: [
    { t: "L'ensemble des prélèvements et prestations qui réduit les inégalités s'appelle la _____.", a: "redistribution", e: "Verticale (riches→pauvres) et horizontale." },
    { t: "Traiter différemment des groupes défavorisés pour rétablir l'égalité réelle = discrimination _____.", a: "positive", e: "Ex. éducation prioritaire." },
    { t: "Pour Rawls, des inégalités sont justes si elles profitent aux plus _____.", a: "defavorises", alt: ["défavorisés","defavorises"], e: "Principe de différence." },
    { t: "Donner à tous les mêmes positions de départ, c'est l'égalité des _____.", a: "chances", e: "≠ égalité des situations (résultats)." }
  ]});

  /* ===== 12. ENVIRONNEMENT ===== */
  add("rc-environnement", { trous: [
    { t: "Le coût (ex. pollution) supporté par la collectivité et non par le pollueur est une externalité _____.", a: "negative", alt: ["négative"], e: "Défaillance de marché." },
    { t: "Le marché de quotas fixe un _____ global d'émissions et laisse s'échanger les droits.", a: "plafond", e: "« Cap and trade »." },
    { t: "Les trois piliers du développement durable : économique, social et _____.", a: "environnemental", alt: ["environnement"], e: "Rapport Brundtland (1987)." },
    { t: "Approuver un projet utile mais le refuser près de chez soi = syndrome _____.", a: "NIMBY", alt: ["not in my backyard"], e: "Frein local à l'action publique." }
  ]});

})();
