/* =====================================================================
   SES Terminale — Banque de questions (extension 4)
   Questions supplémentaires ajoutées à window.SES_QUIZ (chargé par quiz.js).
   Même format : qcm {q,o,c,e} · vf {s,a,e} · trous {t,a,alt,e}.
   ===================================================================== */
(function () {
  var Q = window.SES_QUIZ; if (!Q) { window.SES_QUIZ = Q = {}; }
  function add(id, extra){
    var t = Q[id]; if (!t) { t = Q[id] = { qcm:[], vf:[], trous:[] }; }
    ["qcm","vf","trous"].forEach(function(k){ if (extra[k]) t[k] = (t[k]||[]).concat(extra[k]); });
  }

  add("eco-croissance", {
    qcm: [
      { q: "La croissance endogène explique le progrès technique par :", o: ["le hasard", "les choix d'investissement internes (R&D, capital humain)", "la météo", "la seule démographie"], c: 1, e: "Romer, Aghion : le progrès technique est produit par l'économie elle-même." },
      { q: "La PGF est souvent surnommée :", o: ["le « résidu » (de Solow)", "le PIB", "le déficit", "la dette publique"], c: 0, e: "Part de la croissance inexpliquée par l'accumulation des facteurs." }
    ],
    vf: [
      { s: "Les droits de propriété renforcent l'incitation à innover.", a: true, e: "Ils garantissent à l'innovateur l'appropriation des fruits de son innovation." },
      { s: "Une croissance soutenable ignore les limites écologiques.", a: false, e: "Elle compose avec elles (ressources, pollution, climat)." }
    ],
    trous: [ { t: "Le progrès technique est dit _____ car produit par l'économie elle-même.", a: "endogène", alt: ["endogene"], e: "Croissance endogène." } ]
  });

  add("eco-commerce", {
    qcm: [
      { q: "La compétitivité hors-prix repose sur :", o: ["les bas salaires", "la qualité et l'innovation", "le seul taux de change", "les quotas"], c: 1, e: "Hors-prix = qualité, innovation, service ; prix = coûts." },
      { q: "La DIPP désigne :", o: ["la fermeture des frontières", "la décomposition internationale du processus productif", "une taxe douanière", "un syndicat"], c: 1, e: "Les FMN fragmentent la chaîne de valeur entre pays." }
    ],
    vf: [
      { s: "Le commerce intra-branche échange des produits similaires entre pays comparables.", a: true, e: "Fondé sur la différenciation et la qualité." },
      { s: "Selon Ricardo, sans avantage absolu un pays n'a pas intérêt à échanger.", a: false, e: "L'avantage comparatif justifie quand même la spécialisation." }
    ],
    trous: [ { t: "La théorie HOS explique la spécialisation par les _____ factorielles.", a: "dotations", e: "Heckscher-Ohlin-Samuelson." } ]
  });

  add("eco-chomage", {
    qcm: [
      { q: "Le chômage structurel est lié :", o: ["à la conjoncture", "au fonctionnement du marché du travail (appariement, institutions)", "aux saisons", "aux exportations"], c: 1, e: "Indépendant de la conjoncture." },
      { q: "Le salaire d'efficience peut créer du chômage car :", o: ["il fait baisser les prix", "il est fixé au-dessus de l'équilibre", "il supprime les impôts", "il augmente la demande"], c: 1, e: "Salaire supérieur à l'équilibre → source de chômage structurel." }
    ],
    vf: [
      { s: "Taux de chômage = chômeurs / population active.", a: true, e: "Population active = actifs occupés + chômeurs." },
      { s: "Les politiques de soutien de la demande ciblent surtout le chômage conjoncturel.", a: true, e: "Elles relancent l'activité (demande globale)." }
    ],
    trous: [ { t: "Le chômage lié au ralentissement de l'activité est dit _____.", a: "conjoncturel", e: "Insuffisance de la demande globale." } ]
  });

  add("eco-crises", {
    qcm: [
      { q: "Une bulle spéculative est :", o: ["une baisse des prix", "un écart auto-entretenu entre prix et valeur fondamentale", "un impôt", "un dividende"], c: 1, e: "Suivi d'un éclatement (comportements mimétiques)." }
    ],
    vf: [
      { s: "L'aléa moral = prise de risque excessive quand on ne supporte pas toutes les conséquences.", a: true, e: "Ex. sauvetage anticipé des banques." }
    ],
    trous: [ { t: "Les retraits massifs et simultanés des déposants = _____ bancaire (bank run).", a: "panique", e: "Peut faire tomber une banque solvable." } ]
  });

  add("eco-europe", {
    qcm: [
      { q: "Dans la zone euro, la politique monétaire est :", o: ["nationale", "unique, menée par la BCE", "interdite", "décidée par chaque banque commerciale"], c: 1, e: "Unique et indépendante." }
    ],
    vf: [
      { s: "La politique budgétaire est nationale mais contrainte par les traités européens.", a: true, e: "D'où des difficultés de coordination." }
    ],
    trous: [ { t: "Un choc qui touche différemment les pays d'une zone monétaire est dit _____.", a: "asymétrique", e: "Rend difficile une politique monétaire unique." } ]
  });

  add("socio-structure", {
    qcm: [
      { q: "Pour Weber, la stratification est :", o: ["unidimensionnelle (l'économie)", "multidimensionnelle (classes, statut, parti)", "inexistante", "fondée sur l'âge"], c: 1, e: "Ordre économique, social et politique." }
    ],
    vf: [
      { s: "Pour Marx, la classe « pour soi » suppose une conscience de classe.", a: true, e: "Par opposition à la classe « en soi »." }
    ],
    trous: [ { t: "La nomenclature de l'INSEE classant la population active = les _____ (sigle).", a: "PCS", alt: ["pcs"], e: "Professions et catégories socioprofessionnelles." } ]
  });

  add("socio-ecole", {
    qcm: [
      { q: "La démocratisation scolaire (≠ massification) désigne :", o: ["davantage d'élèves", "la réduction des inégalités d'accès selon l'origine sociale", "moins d'écoles", "plus de sélection"], c: 1, e: "À distinguer de la simple hausse des effectifs." }
    ],
    vf: [
      { s: "Le capital culturel (Bourdieu) favorise la réussite scolaire.", a: true, e: "Ressources culturelles transmises par la famille." }
    ],
    trous: [ { t: "L'augmentation générale des effectifs scolarisés = la _____ scolaire.", a: "massification", e: "≠ démocratisation." } ]
  });

  add("socio-mobilite", {
    qcm: [
      { q: "La fluidité sociale mesure :", o: ["la mobilité brute observée", "la mobilité indépendante des changements de structure", "la croissance", "le chômage"], c: 1, e: "Mobilité « pure » = égalité des chances relative." }
    ],
    vf: [
      { s: "Une société plus mobile est nécessairement plus fluide.", a: false, e: "La mobilité structurelle peut gonfler la mobilité observée." }
    ],
    trous: [ { t: "La position de l'enfant inférieure à celle de ses parents = le _____.", a: "déclassement", alt: ["declassement"], e: "Mobilité descendante." } ]
  });

  add("socio-travail", {
    qcm: [
      { q: "Le taylorisme (OST) repose sur :", o: ["la polyvalence", "la division horizontale ET verticale du travail", "le télétravail", "l'autonomie ouvrière"], c: 1, e: "Parcellisation, hiérarchie stricte." }
    ],
    vf: [
      { s: "La polarisation oppose emplois très et peu qualifiés au détriment des intermédiaires.", a: true, e: "Effet du numérique notamment." }
    ],
    trous: [ { t: "Le travail procure revenu, statut et liens : il est facteur d'_____ sociale.", a: "intégration", alt: ["integration"], e: "La précarité affaiblit ce pouvoir intégrateur." } ]
  });

  add("socio-engagement", {
    qcm: [
      { q: "Le paradoxe d'Olson : l'individu rationnel a intérêt à :", o: ["s'engager toujours", "ne pas s'engager et profiter de l'action des autres", "payer une cotisation", "voter blanc"], c: 1, e: "Le « passager clandestin »." }
    ],
    vf: [
      { s: "Les incitations sélectives réservent des avantages aux seuls participants.", a: true, e: "Pour résoudre le paradoxe d'Olson." }
    ],
    trous: [ { t: "L'ensemble des moyens d'action d'un groupe à une époque = le _____ d'action collective (Tilly).", a: "répertoire", alt: ["repertoire"], e: "Manifestation, grève, pétition…" } ]
  });

  add("rc-justice", {
    qcm: [
      { q: "Le coefficient de Gini vaut 0 quand :", o: ["l'inégalité est maximale", "l'égalité est parfaite", "il n'y a pas de revenu", "tout le monde est pauvre"], c: 1, e: "0 = égalité parfaite, proche de 1 = forte inégalité." }
    ],
    vf: [
      { s: "Égalité des chances et égalité des situations sont synonymes.", a: false, e: "Trois formes distinctes : droits, chances, situations." }
    ],
    trous: [ { t: "La courbe de _____ représente la concentration des revenus (liée au Gini).", a: "Lorenz", alt: ["lorenz"], e: "Courbe de Lorenz." } ]
  });

  add("rc-environnement", {
    qcm: [
      { q: "Une externalité négative est :", o: ["un gain partagé", "un coût imposé à un tiers sans compensation par le marché", "une subvention", "un impôt"], c: 1, e: "Ex. pollution, émissions de CO₂." }
    ],
    vf: [
      { s: "Le passager clandestin freine les accords internationaux sur le climat.", a: true, e: "Profiter du bien commun sans contribuer." }
    ],
    trous: [ { t: "Le marché de _____ d'émission est un instrument de l'action publique environnementale.", a: "quotas", e: "Avec réglementation, taxation, subvention." } ]
  });

})();
