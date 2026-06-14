/* =====================================================================
   SES Terminale — Banque de questions (extension 5)
   ---------------------------------------------------------------------
   Ajouté à window.SES_QUIZ. Couvre les 12 chapitres, y compris les 3
   chapitres « Grand Oral » (crises financières, École, justice sociale),
   et approfondit les 9 chapitres de l'écrit.
   Règle anti-triche : distracteurs de LONGUEURS VARIÉES, index `c`
   réparti (la position est mélangée au tirage par shuffleQcmItem).
   ===================================================================== */
(function () {
  var Q = window.SES_QUIZ; if (!Q) { window.SES_QUIZ = Q = {}; }
  function add(id, extra){
    var t = Q[id]; if (!t) { t = Q[id] = { qcm:[], vf:[], trous:[] }; }
    ["qcm","vf","trous"].forEach(function(k){ if (extra[k]) t[k] = (t[k]||[]).concat(extra[k]); });
  }

  /* ============ 1. CROISSANCE ============ */
  add("eco-croissance", {
    qcm: [
      { q: "Le PIB est un indicateur critiqué parce qu'il :", o: ["est trop difficile à calculer", "ignore les inégalités, le travail domestique et la dégradation de l'environnement", "ne mesure pas la production", "double les exportations"], c: 1, e: "Le PIB mesure la richesse marchande mais pas le bien-être, les inégalités ni le capital naturel détruit." },
      { q: "L'IDH (indice de développement humain) combine :", o: ["le seul revenu par habitant", "le revenu, l'espérance de vie et le niveau d'éducation", "le PIB et la dette", "l'emploi et l'inflation"], c: 1, e: "Le PNUD agrège santé, éducation et niveau de vie : le développement dépasse la seule croissance." },
      { q: "La « soutenabilité forte » suppose que :", o: ["le capital naturel est remplaçable par du capital technique", "certaines composantes du capital naturel sont irremplaçables et doivent être préservées", "la croissance n'a aucune limite", "seule la dette compte"], c: 1, e: "Soutenabilité forte : le capital naturel critique n'est pas substituable. Faible : substituabilité entre capitaux." },
      { q: "Selon les théories institutionnalistes (North, Acemoglu), la croissance dépend surtout :", o: ["du climat", "d'institutions « inclusives » : droits de propriété, État de droit, sécurité des contrats", "de la seule taille de la population", "du hasard"], c: 1, e: "Des institutions inclusives incitent à investir et innover ; des institutions « extractives » la freinent." }
    ],
    vf: [
      { s: "Une croissance peut être forte tout en étant peu soutenable écologiquement.", a: true, e: "Le PIB peut croître en détruisant le capital naturel : d'où le débat sur la soutenabilité." },
      { s: "Le brevet, en protégeant l'innovateur, peut stimuler l'innovation.", a: true, e: "Il garantit un rendement temporaire à la R&D, mais peut aussi freiner la diffusion." }
    ],
    trous: [
      { t: "L'indicateur du PNUD qui combine santé, éducation et niveau de vie est l'_____.", a: "IDH", alt: ["indice de developpement humain"], e: "Au-delà du seul PIB." }
    ]
  });

  /* ============ 2. COMMERCE INTERNATIONAL ============ */
  add("eco-commerce", {
    qcm: [
      { q: "Le protectionnisme « non tarifaire » recourt notamment à :", o: ["des droits de douane élevés", "des normes, quotas et barrières administratives qui freinent les importations", "une hausse de la TVA", "la dévaluation"], c: 1, e: "Normes sanitaires/techniques, quotas, formalités : protéger sans tarif douanier affiché." },
      { q: "Un investissement direct à l'étranger (IDE) correspond à :", o: ["un achat ponctuel d'actions sans contrôle", "une prise de contrôle ou de participation durable d'une firme dans une entité étrangère", "un prêt bancaire international", "une exportation de biens"], c: 1, e: "L'IDE implique une influence durable sur la gestion (≠ placement de portefeuille)." },
      { q: "L'argument de « l'industrie naissante » (List) justifie :", o: ["le libre-échange immédiat et total", "une protection temporaire le temps qu'un secteur jeune devienne compétitif", "la suppression de toute industrie", "la baisse des salaires"], c: 1, e: "Friedrich List : protéger provisoirement une industrie émergente face aux concurrents déjà établis." },
      { q: "Le libre-échange tend à créer des gagnants et des perdants car il :", o: ["profite également à tous les secteurs", "favorise les secteurs compétitifs et fragilise ceux exposés à la concurrence", "supprime tous les emplois", "n'a aucun effet sur l'emploi"], c: 1, e: "D'où la nécessité de redistribuer et d'accompagner (formation, reconversion) les perdants." }
    ],
    vf: [
      { s: "Les firmes multinationales organisent des chaînes de valeur mondiales.", a: true, e: "Elles fragmentent la production (DIPP) selon les avantages de chaque territoire." },
      { s: "Le protectionnisme n'a que des avantages et aucun coût pour le pays qui le pratique.", a: false, e: "Il renchérit les biens importés, peut provoquer des représailles et réduire le pouvoir d'achat." }
    ],
    trous: [
      { t: "Une prise de participation durable d'une firme à l'étranger est un _____ (3 lettres).", a: "IDE", alt: ["investissement direct a l etranger"], e: "≠ placement de portefeuille." }
    ]
  });

  /* ============ 3. CHÔMAGE ============ */
  add("eco-chomage", {
    qcm: [
      { q: "La « flexisécurité » (modèle danois) combine :", o: ["des licenciements impossibles", "une grande flexibilité de l'emploi ET une forte sécurisation des parcours (indemnisation, formation)", "la suppression des allocations chômage", "le gel total des embauches"], c: 1, e: "Flexibilité pour l'entreprise + sécurité pour le salarié (revenus, accompagnement, formation)." },
      { q: "Le « halo » du chômage désigne :", o: ["les chômeurs indemnisés uniquement", "des personnes sans emploi proches du chômage mais classées inactives (découragées, indisponibles)", "les retraités", "les emplois saisonniers"], c: 1, e: "Frontière floue chômage/inactivité : le halo complète le chômage au sens du BIT." },
      { q: "Une politique « active » de l'emploi vise surtout à :", o: ["verser des allocations sans contrepartie", "améliorer l'employabilité (formation, accompagnement, aides au retour à l'emploi)", "augmenter le chômage", "réduire la population"], c: 1, e: "Active = agir sur l'offre de travail et l'appariement ; passive = indemniser." },
      { q: "Le chômage « naturel » (ou structurel d'équilibre) correspond :", o: ["à un chômage nul", "au niveau de chômage incompressible même quand l'économie tourne à plein régime", "au seul chômage saisonnier", "à une erreur statistique"], c: 1, e: "Lié aux frictions et au fonctionnement du marché du travail (proche du NAIRU)." }
    ],
    vf: [
      { s: "Au sens du BIT, un chômeur est sans emploi, disponible et en recherche active.", a: true, e: "Trois critères cumulatifs : sans emploi, disponible sous 15 jours, démarche active." },
      { s: "La formation des chômeurs agit sur le chômage structurel d'inadéquation.", a: true, e: "Réduire l'écart entre qualifications offertes et demandées améliore l'appariement." }
    ],
    trous: [
      { t: "Le modèle danois qui marie flexibilité et sécurité s'appelle la _____.", a: "flexisecurite", alt: ["flexisécurité"], e: "Flexibilité + sécurisation des parcours." }
    ]
  });

  /* ============ 4. CRISES FINANCIÈRES (Grand Oral) ============ */
  add("eco-crises", {
    qcm: [
      { q: "Une bulle spéculative se forme quand :", o: ["les prix d'un actif reflètent fidèlement sa valeur réelle", "le prix d'un actif s'écarte durablement de sa valeur fondamentale, porté par des anticipations auto-réalisatrices", "la banque centrale baisse ses taux", "les salaires augmentent"], c: 1, e: "On achète parce que « ça monte » : comportement mimétique, jusqu'au retournement (krach)." },
      { q: "L'« aléa moral » dans la finance désigne :", o: ["une faute morale des banquiers", "le fait qu'un acteur assuré contre le risque prend davantage de risques", "un délit d'initié", "une erreur comptable"], c: 1, e: "Si l'on sait être secouru (too big to fail), l'incitation à la prudence diminue." },
      { q: "Le rôle de « prêteur en dernier ressort » est assuré par :", o: ["les agences de notation", "la banque centrale, qui fournit des liquidités pour éviter une panique bancaire", "les ménages épargnants", "le FMI uniquement"], c: 1, e: "La banque centrale empêche l'assèchement des liquidités et la contagion (bank run)." },
      { q: "L'« effet de levier » consiste à :", o: ["réduire son endettement", "s'endetter pour investir davantage, ce qui amplifie les gains… mais aussi les pertes", "épargner systématiquement", "vendre à perte"], c: 1, e: "Le levier démultiplie la rentabilité des fonds propres et le risque de faillite." }
    ],
    vf: [
      { s: "Les comportements mimétiques des investisseurs peuvent amplifier une crise.", a: true, e: "Suivre le troupeau gonfle les bulles puis accélère les krachs (prophéties auto-réalisatrices)." },
      { s: "La réglementation prudentielle (ex. ratios de fonds propres) vise à limiter le risque systémique.", a: true, e: "Bâle : imposer des coussins de capital pour absorber les chocs et éviter la contagion." }
    ],
    trous: [
      { t: "La banque centrale joue le rôle de prêteur en dernier _____.", a: "ressort", e: "Pour éviter la panique bancaire." }
    ]
  });

  /* ============ 5. POLITIQUES ÉCONOMIQUES EUROPÉENNES ============ */
  add("eco-europe", {
    qcm: [
      { q: "Le marché unique européen garantit la libre circulation :", o: ["des seules marchandises", "des biens, des services, des capitaux et des personnes (les « quatre libertés »)", "des seuls capitaux", "des seuls travailleurs"], c: 1, e: "Au-delà de l'union douanière : harmonisation et suppression des barrières internes." },
      { q: "L'« assouplissement quantitatif » (quantitative easing) de la BCE consiste à :", o: ["augmenter les impôts", "racheter massivement des titres pour injecter des liquidités quand les taux sont déjà très bas", "dévaluer l'euro officiellement", "fermer les banques"], c: 1, e: "Politique monétaire non conventionnelle : soutenir le crédit et l'activité, lutter contre la déflation." },
      { q: "Une union douanière se distingue d'une simple zone de libre-échange par :", o: ["l'absence de commerce", "un tarif extérieur commun face aux pays tiers", "une monnaie unique", "l'union politique"], c: 1, e: "Zone de libre-échange = pas de droits internes ; union douanière = + tarif extérieur commun." }
    ],
    vf: [
      { s: "Les critères de convergence (Maastricht) encadrent inflation, taux, déficit et dette.", a: true, e: "Conditions d'entrée puis de discipline dans l'UEM." },
      { s: "Une politique monétaire unique convient parfaitement à des économies très hétérogènes.", a: false, e: "Une seule politique pour des conjonctures divergentes peut être trop laxiste ou trop restrictive selon les pays." }
    ],
    trous: [
      { t: "La libre circulation des biens, services, capitaux et personnes définit le marché _____.", a: "unique", e: "Les quatre libertés." }
    ]
  });

  /* ============ 6. STRUCTURE SOCIALE ============ */
  add("socio-structure", {
    qcm: [
      { q: "La « distinction » (Bourdieu) renvoie à l'idée que :", o: ["tous les goûts se valent socialement", "les goûts et pratiques culturelles servent de marqueurs et reproduisent les hiérarchies sociales", "la culture n'a aucun rôle social", "seul le revenu compte"], c: 1, e: "Les pratiques culturelles distinguent les groupes et légitiment les positions (capital culturel)." },
      { q: "L'individualisation des modes de vie tend à :", o: ["renforcer la conscience de classe", "brouiller les appartenances de classe sans faire disparaître les inégalités", "supprimer les inégalités", "uniformiser les revenus"], c: 1, e: "Les identités se diversifient ; les inégalités demeurent mais sont moins vécues en termes de classe." },
      { q: "Les PCS de l'INSEE reposent principalement sur :", o: ["le seul revenu", "la profession (statut, qualification, secteur), considérée comme révélatrice de la position sociale", "le diplôme uniquement", "le lieu de résidence"], c: 1, e: "La profession synthétise de nombreuses dimensions de la position sociale." }
    ],
    vf: [
      { s: "Le genre et l'âge sont des facteurs de structuration de l'espace social.", a: true, e: "Avec la profession, le diplôme, le revenu : approche multidimensionnelle." },
      { s: "La thèse de la moyennisation est aujourd'hui contestée par le retour des inégalités.", a: true, e: "Depuis les années 1980-90 : polarisation, précarité, creusement du haut de la distribution." }
    ],
    trous: [
      { t: "Pour Bourdieu, les goûts fonctionnent comme des marqueurs de _____ sociale.", a: "distinction", e: "Capital culturel et reproduction." }
    ]
  });

  /* ============ 7. ÉCOLE (Grand Oral) ============ */
  add("socio-ecole", {
    qcm: [
      { q: "La démocratisation « quantitative » de l'école désigne :", o: ["la baisse du nombre d'élèves", "l'allongement des études et l'accès du plus grand nombre aux diplômes", "la suppression des examens", "la privatisation de l'école"], c: 1, e: "Massification scolaire : plus d'élèves, plus longtemps. À distinguer de la démocratisation qualitative." },
      { q: "Le « paradoxe » de la massification scolaire est que :", o: ["elle a supprimé toutes les inégalités", "l'accès s'est élargi sans que les inégalités sociales de réussite disparaissent (démocratisation « ségrégative »)", "elle a réduit le nombre de diplômés", "elle n'a rien changé"], c: 1, e: "Plus de monde accède, mais les écarts selon l'origine sociale se déplacent plutôt qu'ils ne s'effacent." },
      { q: "Pour Bourdieu et Passeron, l'école tend à :", o: ["annuler l'effet de l'origine sociale", "reproduire les inégalités en valorisant un capital culturel inégalement réparti", "favoriser systématiquement les milieux populaires", "être totalement neutre socialement"], c: 1, e: "Les « héritiers » : l'école transforme des inégalités sociales en inégalités scolaires « méritées »." },
      { q: "La méritocratie scolaire suppose en principe que la réussite dépende :", o: ["de l'origine sociale", "du mérite et du travail de l'élève, indépendamment de son milieu", "du hasard", "du lieu de naissance"], c: 1, e: "Idéal méritocratique souvent démenti par le poids réel de l'origine sociale sur les parcours." }
    ],
    vf: [
      { s: "Massification scolaire et démocratisation qualitative ne sont pas synonymes.", a: true, e: "On peut scolariser plus sans réduire les inégalités de réussite selon l'origine." },
      { s: "L'école peut être à la fois un facteur de mobilité et un lieu de reproduction sociale.", a: true, e: "Elle ouvre des trajectoires mais reproduit aussi les écarts (capital culturel)." }
    ],
    trous: [
      { t: "Bourdieu et Passeron analysent l'école comme un lieu de _____ des inégalités.", a: "reproduction", e: "Via le capital culturel hérité." }
    ]
  });

  /* ============ 8. MOBILITÉ SOCIALE ============ */
  add("socio-mobilite", {
    qcm: [
      { q: "Le « capital social » (réseaux de relations) influence la mobilité car il :", o: ["n'a aucun effet sur l'emploi", "facilite l'accès à l'information et aux opportunités (emplois, recommandations)", "remplace le diplôme", "concerne seulement les loisirs"], c: 1, e: "Les réseaux (la « force des liens faibles », Granovetter) ouvrent des portes sur le marché du travail." },
      { q: "L'homogamie sociale désigne le fait de :", o: ["changer souvent de catégorie sociale", "se mettre en couple avec une personne de milieu social proche", "vivre seul", "épouser systématiquement un milieu différent"], c: 1, e: "L'homogamie tend à reproduire les positions sociales d'une génération à l'autre." },
      { q: "La mobilité « intergénérationnelle » compare :", o: ["plusieurs emplois au cours d'une vie", "la position sociale d'un individu à celle de ses parents", "deux pays différents", "deux entreprises"], c: 1, e: "Intergénérationnelle = entre générations (vs intragénérationnelle = au cours d'une carrière)." }
    ],
    vf: [
      { s: "La massification scolaire peut produire un déclassement pour certains diplômés.", a: true, e: "Inflation des diplômes : à diplôme égal, la position accessible peut être inférieure à celle d'avant." },
      { s: "Une forte fluidité sociale signale une société plus égalitaire dans l'accès aux positions.", a: true, e: "L'origine sociale pèse moins sur la destinée : meilleure égalité des chances." }
    ],
    trous: [
      { t: "Se mettre en couple au sein d'un même milieu social s'appelle l'_____.", a: "homogamie", e: "Facteur de reproduction sociale." }
    ]
  });

  /* ============ 9. TRAVAIL ET EMPLOI ============ */
  add("socio-travail", {
    qcm: [
      { q: "Distinguer la qualification « du poste » et celle « de l'individu », c'est dire que :", o: ["les deux coïncident toujours", "un emploi a un niveau requis qui peut différer des compétences réellement détenues par le salarié", "la qualification n'existe pas", "seul le diplôme compte"], c: 1, e: "Qualification du poste (exigée) vs de l'individu (acquise) : décalages possibles (surqualification, déclassement)." },
      { q: "Pour Robert Castel, la précarisation de l'emploi peut conduire à une :", o: ["intégration renforcée", "« désaffiliation » : effritement des protections et du lien social", "hausse des salaires", "stabilité accrue"], c: 1, e: "De l'intégration à la vulnérabilité puis à la désaffiliation quand emploi et liens se défont." },
      { q: "Le télétravail transforme le rapport au travail en :", o: ["supprimant tout encadrement", "brouillant la frontière entre vie professionnelle et vie privée", "augmentant mécaniquement les salaires", "interdisant la coopération"], c: 1, e: "Autonomie accrue mais risques (porosité des temps, isolement, contrôle à distance)." }
    ],
    vf: [
      { s: "La montée des contrats courts (CDD, intérim) illustre la flexibilité quantitative externe.", a: true, e: "Ajuster le volume d'emploi via des statuts précaires (vs flexibilité interne : horaires, polyvalence)." },
      { s: "Le travail ne joue plus aucun rôle dans l'intégration sociale aujourd'hui.", a: false, e: "Il reste central (statut, revenu, lien) même si la précarité en fragilise la fonction intégratrice." }
    ],
    trous: [
      { t: "Pour Castel, l'effritement des protections et des liens conduit à la _____.", a: "desaffiliation", alt: ["désaffiliation"], e: "Au bout de la précarisation." }
    ]
  });

  /* ============ 10. ENGAGEMENT POLITIQUE ============ */
  add("socio-engagement", {
    qcm: [
      { q: "Les « nouveaux mouvements sociaux » (NMS) se distinguent du mouvement ouvrier par :", o: ["leur centrage sur le seul salaire", "des enjeux post-matérialistes (environnement, féminisme, identités, qualité de vie)", "leur refus de toute action", "leur caractère strictement syndical"], c: 1, e: "Au-delà du conflit capital/travail : causes culturelles, écologiques, identitaires (années 1970+)." },
      { q: "La « structure des opportunités politiques » désigne :", o: ["le budget d'un parti", "le contexte (institutions, alliances, ouverture du système) qui favorise ou freine la mobilisation", "le nombre d'adhérents", "le programme électoral"], c: 1, e: "Le succès d'un mouvement dépend aussi du contexte politique qui s'ouvre ou se ferme." },
      { q: "Le déclin des formes traditionnelles d'engagement (partis, syndicats) s'accompagne :", o: ["de la fin de tout engagement", "de l'essor de formes plus ponctuelles, distancées et individualisées", "d'un retour à la monarchie", "d'une hausse du vote obligatoire"], c: 1, e: "Engagement « à la carte » : pétitions en ligne, consommation engagée, mobilisations ponctuelles." }
    ],
    vf: [
      { s: "L'engagement militant procure des rétributions symboliques (sociabilité, identité, reconnaissance).", a: true, e: "Au-delà des incitations matérielles : le militantisme « paie » aussi symboliquement." },
      { s: "Le sentiment d'efficacité politique favorise la participation.", a: true, e: "Se croire capable de peser augmente la probabilité de s'engager." }
    ],
    trous: [
      { t: "Les mobilisations post-matérialistes (écologie, féminisme) relèvent des « nouveaux mouvements _____ ».", a: "sociaux", e: "NMS, années 1970+." }
    ]
  });

  /* ============ 11. JUSTICE SOCIALE (Grand Oral) ============ */
  add("rc-justice", {
    qcm: [
      { q: "L'égalité « des chances » se distingue de l'égalité « des situations » en ce qu'elle vise :", o: ["des résultats identiques pour tous", "des positions de départ équitables, les résultats pouvant ensuite différer", "la suppression de toute compétition", "l'égalité des revenus"], c: 1, e: "Égalité des chances = mêmes points de départ ; égalité des situations = mêmes positions/résultats." },
      { q: "La discrimination positive consiste à :", o: ["interdire toute différence de traitement", "traiter différemment certains groupes défavorisés pour rétablir l'égalité réelle des chances", "supprimer les aides sociales", "privatiser l'école"], c: 1, e: "Un traitement préférentiel ciblé (ex. zones d'éducation prioritaire) pour corriger des inégalités de départ." },
      { q: "Pour les libertariens (Nozick), la justice sociale par redistribution est :", o: ["un devoir absolu de l'État", "contestable, car elle porte atteinte aux droits individuels et à la propriété légitimement acquise", "la seule forme de justice", "sans aucun coût"], c: 1, e: "Nozick : si les acquisitions sont justes, redistribuer revient à violer des droits individuels." },
      { q: "Les principaux instruments des pouvoirs publics pour la justice sociale sont :", o: ["la seule police", "la fiscalité, la protection sociale, les services collectifs et la discrimination positive", "uniquement l'armée", "le marché seul"], c: 1, e: "Redistribution monétaire (impôts/prestations) + services publics + actions ciblées." }
    ],
    vf: [
      { s: "Une fiscalité progressive réduit les inégalités de revenu disponible.", a: true, e: "Taux croissant avec le revenu : prélève proportionnellement plus en haut (redistribution verticale)." },
      { s: "Pour Rawls, des inégalités sont justes si elles profitent aux plus défavorisés.", a: true, e: "Principe de différence, dans la « Théorie de la justice » (1971)." }
    ],
    trous: [
      { t: "Un impôt dont le taux augmente avec le revenu est dit _____.", a: "progressif", e: "Outil de redistribution verticale." }
    ]
  });

  /* ============ 12. ACTION PUBLIQUE / ENVIRONNEMENT ============ */
  add("rc-environnement", {
    qcm: [
      { q: "Le développement durable repose sur l'articulation de trois piliers :", o: ["passé, présent, futur", "économique, social et environnemental", "local, national, mondial", "public, privé, associatif"], c: 1, e: "Concilier croissance, équité sociale et préservation de l'environnement (rapport Brundtland, 1987)." },
      { q: "Les normes (réglementation) comme instrument environnemental ont pour avantage :", o: ["d'être toujours gratuites", "de fixer une obligation claire et un résultat certain (interdiction, plafond)", "de laisser le marché décider seul", "d'augmenter les émissions"], c: 1, e: "Efficaces et lisibles, mais parfois rigides et coûteuses, peu incitatives à faire mieux que la norme." },
      { q: "Le syndrome « NIMBY » (Not In My BackYard) illustre :", o: ["un soutien total aux projets verts", "l'opposition locale à une installation pourtant jugée utile collectivement", "une taxe environnementale", "un marché de quotas"], c: 1, e: "On approuve le principe (éolienne, déchetterie) mais pas près de chez soi : frein à l'action publique." },
      { q: "La coordination internationale sur le climat (COP) est difficile car :", o: ["aucun pays n'est concerné", "le climat est un bien commun mondial exposé au comportement de passager clandestin", "il n'existe pas d'accords", "les émissions sont nulles"], c: 1, e: "Chacun a intérêt à ce que les autres agissent : d'où la difficulté d'accords contraignants." }
    ],
    vf: [
      { s: "Une subvention aux énergies renouvelables est un instrument incitatif d'action publique.", a: true, e: "Aider financièrement les comportements vertueux (à côté de la norme et de la taxe)." },
      { s: "La taxe et le marché de quotas sont deux instruments « économiques » distincts.", a: true, e: "La taxe fixe un prix (quantité incertaine) ; le marché de quotas fixe une quantité (prix incertain)." }
    ],
    trous: [
      { t: "Les trois piliers du développement durable sont l'économique, le social et l'_____.", a: "environnemental", alt: ["environnement"], e: "Rapport Brundtland (1987)." }
    ]
  });

})();
