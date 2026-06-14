/* =====================================================================
   SES Terminale — Banque de questions (extension 4)
   ---------------------------------------------------------------------
   Ajouté à window.SES_QUIZ. Priorité aux 9 chapitres de l'écrit 2026.
   Règle anti-triche : distracteurs de LONGUEURS VARIÉES — la bonne
   réponse n'est jamais systématiquement la plus longue, et l'index `c`
   est volontairement réparti (la position est de toute façon mélangée
   au tirage par shuffleQcmItem). Même format que quiz.js.
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
      { q: "La productivité globale des facteurs (PGF) mesure :", o: ["la seule quantité de travail utilisée", "la part de la croissance non expliquée par la hausse des quantités de travail et de capital", "le stock de capital fixe", "le nombre d'heures travaillées"], c: 1, e: "Le « résidu » de Solow : l'efficacité combinée des facteurs, assimilée au progrès technique." },
      { q: "La « destruction créatrice » (Schumpeter) désigne :", o: ["la destruction de l'environnement par la croissance", "le processus par lequel l'innovation détruit les activités anciennes en créant les nouvelles", "les crises financières à répétition", "la baisse tendancielle des profits"], c: 1, e: "L'innovation renouvelle le tissu productif : des emplois/firmes disparaissent, d'autres naissent." },
      { q: "La croissance dite « endogène » insiste sur le fait que le progrès technique :", o: ["tombe du ciel", "résulte de décisions d'investissement (R&D, capital humain, public) — il est produit par l'économie", "ne joue aucun rôle", "dépend uniquement de la démographie"], c: 1, e: "Romer, Lucas : le progrès technique est endogène, entretenu par l'accumulation de capital humain, public, technologique." },
      { q: "Les droits de propriété bien définis favorisent la croissance car ils :", o: ["augmentent mécaniquement la population active", "incitent à investir et innover en sécurisant les rendements futurs", "suppriment toute inégalité", "remplacent le progrès technique"], c: 1, e: "Sans garantie sur les fruits de l'investissement, l'incitation à innover s'effondre (rôle des institutions)." }
    ],
    vf: [
      { s: "La croissance intensive repose sur des gains de productivité, pas seulement sur plus de facteurs.", a: true, e: "Intensive = efficacité accrue (PGF) ; extensive = hausse des quantités de facteurs." },
      { s: "Le progrès technique peut engendrer des externalités positives de connaissance.", a: true, e: "Le savoir se diffuse : une innovation profite à d'autres (justifie le soutien public à la R&D)." }
    ],
    trous: [
      { t: "Le résidu de Solow, part inexpliquée de la croissance, est assimilé au _____ technique.", a: "progrès", e: "Capté par la PGF." }
    ]
  });

  /* ============ 2. COMMERCE INTERNATIONAL ============ */
  add("eco-commerce", {
    qcm: [
      { q: "Selon la théorie de Ricardo, un pays a intérêt à se spécialiser selon son avantage :", o: ["absolu", "comparatif (là où son désavantage relatif est le plus faible)", "démographique", "monétaire"], c: 1, e: "Même sans avantage absolu, la spécialisation selon l'avantage comparatif accroît la production mondiale." },
      { q: "Le commerce « intra-branche » désigne l'échange :", o: ["entre une firme et ses salariés", "de produits similaires (même branche) entre pays comparables — ex. autos contre autos", "de matières premières contre produits manufacturés", "interdit par l'OMC"], c: 1, e: "Typique des pays développés : différenciation des produits et économies d'échelle l'expliquent." },
      { q: "La compétitivité-prix d'une économie se dégrade lorsque :", o: ["ses produits gagnent en qualité", "ses coûts de production augmentent plus vite que ceux de ses concurrents", "sa monnaie se déprécie fortement", "elle innove davantage"], c: 1, e: "Compétitivité-prix = capacité à proposer des prix bas ; elle dépend des coûts et du taux de change." },
      { q: "La décomposition internationale du processus productif (DIPP) correspond à :", o: ["la fermeture des frontières", "la fragmentation de la production en segments répartis entre pays (chaînes de valeur mondiales)", "la nationalisation des firmes", "l'interdiction des délocalisations"], c: 1, e: "Les FMN éclatent la chaîne de valeur selon les avantages de chaque territoire." }
    ],
    vf: [
      { s: "Le libre-échange ne fait que des gagnants au sein de chaque pays.", a: false, e: "Il y a des perdants (secteurs/salariés exposés) ; d'où la nécessité de politiques de redistribution/formation." },
      { s: "Pour Ricardo, un pays sans aucun avantage absolu peut quand même gagner à l'échange.", a: true, e: "Grâce à l'avantage comparatif : il se spécialise là où il est relativement le moins désavantagé." }
    ],
    trous: [
      { t: "Ricardo fonde la spécialisation sur l'avantage _____.", a: "comparatif", e: "≠ avantage absolu (Smith)." }
    ]
  });

  /* ============ 3. CHÔMAGE ============ */
  add("eco-chomage", {
    qcm: [
      { q: "La théorie « insider / outsider » explique une part du chômage par :", o: ["la météo économique", "le pouvoir des salariés en place (insiders) qui maintiennent des salaires élevés, au détriment des outsiders", "la baisse des prix", "le vieillissement"], c: 1, e: "Les protégés (insiders) négocient des salaires élevés ; les outsiders (chômeurs, précaires) en font les frais." },
      { q: "Le chômage dit « classique » provient surtout :", o: ["d'une demande globale insuffisante", "d'un coût du travail jugé trop élevé au regard de la productivité", "d'un excès d'investissement", "des délais d'appariement"], c: 1, e: "Analyse libérale : le coût du travail (salaire + cotisations) dépasse la productivité → moindre embauche." },
      { q: "Une politique de baisse du coût du travail sur les bas salaires vise à :", o: ["augmenter les impôts", "stimuler la demande de travail peu qualifié (allègements de cotisations)", "réduire la population active", "fermer les frontières"], c: 1, e: "Allègements de cotisations : rendre l'embauche peu qualifiée moins coûteuse." },
      { q: "Le processus d'appariement (« matching ») sur le marché du travail désigne :", o: ["le classement des diplômes", "la rencontre, plus ou moins rapide, entre offres d'emploi et demandeurs d'emploi", "le calcul du SMIC", "la fixation des cotisations"], c: 1, e: "Des frictions ralentissent la rencontre offre/demande : d'où un chômage frictionnel incompressible." }
    ],
    vf: [
      { s: "Le chômage conjoncturel résulte d'une insuffisance de la demande globale.", a: true, e: "Lié au cycle : la baisse de l'activité réduit la demande de travail." },
      { s: "La flexibilité du marché du travail a des effets univoques, toujours positifs sur l'emploi.", a: false, e: "Effets ambigus : elle peut faciliter l'embauche mais accroître la précarité." }
    ],
    trous: [
      { t: "Le chômage lié au cycle économique est dit _____.", a: "conjoncturel", e: "≠ structurel (durable)." }
    ]
  });

  /* ============ 5. POLITIQUES ÉCONOMIQUES EUROPÉENNES ============ */
  add("eco-europe", {
    qcm: [
      { q: "Dans l'Union économique et monétaire, la politique budgétaire reste :", o: ["fixée par la BCE", "du ressort de chaque État membre, mais encadrée par des règles communes", "supprimée", "votée par le Parlement européen"], c: 1, e: "Asymétrie de l'UEM : monnaie unique (BCE) mais budgets nationaux, coordonnés par le Pacte de stabilité." },
      { q: "Face à un choc asymétrique (qui ne touche qu'un seul pays), un membre de la zone euro ne peut plus :", o: ["lever l'impôt", "dévaluer sa monnaie nationale pour restaurer sa compétitivité", "emprunter sur les marchés", "réduire ses dépenses publiques"], c: 1, e: "La monnaie est commune : il ne reste que la « dévaluation interne » (baisse des coûts) et le budget national." },
      { q: "Le Pacte de stabilité et de croissance encadre :", o: ["la liberté de circulation", "les déficits publics (référence 3 % du PIB) et la dette (60 % du PIB)", "le niveau des salaires", "la politique monétaire de la BCE"], c: 1, e: "Coordination des politiques budgétaires nationales pour éviter les comportements de passager clandestin." },
      { q: "Une difficulté propre à la zone euro est :", o: ["l'absence totale de commerce entre membres", "la coexistence d'une politique monétaire unique et de politiques budgétaires nationales (chocs asymétriques)", "l'usage de monnaies différentes", "l'inexistence d'une banque centrale"], c: 1, e: "Un choc touchant un seul pays ne peut plus être amorti par une politique monétaire propre." }
    ],
    vf: [
      { s: "La BCE est indépendante des gouvernements.", a: true, e: "Son indépendance vise la crédibilité de la lutte contre l'inflation." },
      { s: "En union monétaire, un État peut dévaluer sa propre monnaie pour gagner en compétitivité.", a: false, e: "Plus de monnaie nationale : la dévaluation n'est plus possible (d'où la « dévaluation interne »)." }
    ],
    trous: [
      { t: "La banque centrale de la zone euro est la _____.", a: "BCE", alt: ["banque centrale européenne"], e: "Politique monétaire unique." }
    ]
  });

  /* ============ 6. STRUCTURE SOCIALE ============ */
  add("socio-structure", {
    qcm: [
      { q: "Pour Weber, la stratification sociale est :", o: ["réductible à la seule position économique", "multidimensionnelle : ordre économique (classes), social (groupes de statut) et politique (partis)", "déterminée par la seule naissance", "une illusion"], c: 1, e: "Weber distingue classe (richesse), statut (prestige/honneur) et parti (pouvoir) — contre le monisme marxien." },
      { q: "La thèse de la « moyennisation » (Mendras) soutient que :", o: ["les classes se polarisent en deux blocs hostiles", "une vaste constellation centrale se forme, atténuant les frontières de classes", "la société redevient une société d'ordres", "les inégalités disparaissent totalement"], c: 1, e: "Années 1960-80 : montée des classes moyennes ; thèse discutée aujourd'hui (retour des inégalités, polarisation)." },
      { q: "Chez Marx, une « classe pour soi » se distingue d'une « classe en soi » par :", o: ["son niveau de revenu", "la conscience de classe et l'organisation pour défendre ses intérêts", "sa taille démographique", "sa localisation géographique"], c: 1, e: "En soi = position objective ; pour soi = conscience + mobilisation collective." },
      { q: "Dire que la structure sociale est analysée de façon multidimensionnelle, c'est mobiliser :", o: ["le seul revenu", "plusieurs critères : revenu, diplôme, PCS, mais aussi genre, âge, lieu de vie", "uniquement le diplôme", "la seule profession du père"], c: 1, e: "Les facteurs de structuration se croisent (approche intersectionnelle des inégalités)." }
    ],
    vf: [
      { s: "Pour Weber, prestige social (statut) et richesse (classe) peuvent ne pas coïncider.", a: true, e: "Un noble désargenté garde du prestige ; un nouveau riche peut manquer de statut." },
      { s: "La nomenclature des PCS de l'INSEE est un outil de description de la structure sociale.", a: true, e: "6 grands groupes : un outil statistique central, mais une construction conventionnelle." }
    ],
    trous: [
      { t: "Weber distingue la classe, le groupe de _____ et le parti.", a: "statut", e: "Trois ordres : économique, social, politique." }
    ]
  });

  /* ============ 8. MOBILITÉ SOCIALE ============ */
  add("socio-mobilite", {
    qcm: [
      { q: "La table de mobilité dite « de recrutement » répond à la question :", o: ["que deviennent les fils (ou filles) d'ouvriers ?", "d'où viennent ceux qui occupent aujourd'hui telle position (ex. les cadres) ?", "combien existe-t-il de PCS ?", "quel est le taux de chômage ?"], c: 1, e: "Recrutement : on part de la position d'arrivée pour remonter aux origines. Destinée : l'inverse." },
      { q: "La table de mobilité dite « de destinée » répond à la question :", o: ["d'où viennent les cadres actuels ?", "que deviennent les fils (ou filles) d'ouvriers ?", "combien y a-t-il de PCS ?", "quel est le revenu moyen ?"], c: 1, e: "Destinée : on part de l'origine. Recrutement : on part de la position d'arrivée." },
      { q: "La mobilité « structurelle » s'explique par :", o: ["les seuls efforts individuels", "l'évolution de la structure des emplois (déclin agricole, tertiarisation)", "le hasard des naissances", "la baisse de la natalité"], c: 1, e: "Une partie de la mobilité observée est « forcée » par la transformation des emplois disponibles." },
      { q: "Pour Bourdieu, la reproduction sociale passe largement par :", o: ["la seule transmission du patrimoine financier", "le capital culturel transmis par la famille et valorisé par l'école", "le hasard scolaire", "les quotas imposés par l'État"], c: 1, e: "L'école valorise un capital culturel inégalement réparti : elle légitime la reproduction (« héritiers »)." }
    ],
    vf: [
      { s: "La mobilité observée additionne mobilité structurelle et fluidité (mobilité nette).", a: true, e: "Observée = structurelle + nette : on isole la part liée à l'égalité des chances." },
      { s: "Le paradoxe d'Anderson : un diplôme plus élevé que celui de ses parents garantit toujours une position supérieure.", a: false, e: "Avec la massification, un diplôme supérieur ne suffit plus toujours à surclasser ses parents (dévaluation)." }
    ],
    trous: [
      { t: "La mobilité « nette » des effets de structure mesure la _____ sociale.", a: "fluidité", e: "Indicateur d'égalité des chances." }
    ]
  });

  /* ============ 9. TRAVAIL ET EMPLOI ============ */
  add("socio-travail", {
    qcm: [
      { q: "La division « verticale » du travail (Taylor) consiste à :", o: ["alterner les postes entre ouvriers", "séparer la conception (bureau des méthodes) de l'exécution (ouvriers)", "réduire la journée de travail", "supprimer les contremaîtres"], c: 1, e: "Verticale = conception/exécution ; horizontale = parcellisation des tâches d'exécution." },
      { q: "Le fordisme ajoute au taylorisme :", o: ["la fin du salariat", "le travail à la chaîne et le « five dollars day » (hausse des salaires → débouchés de masse)", "la disparition des usines", "la journée de 14 heures"], c: 1, e: "Production et consommation de masse : standardisation + pouvoir d'achat ouvrier." },
      { q: "L'« ubérisation » du travail se caractérise par :", o: ["le retour du salariat à vie", "des travailleurs indépendants reliés à une plateforme numérique, hors du salariat classique", "la généralisation des CDI", "la fin du travail à distance"], c: 1, e: "Statut d'indépendant, mais forte dépendance économique à la plateforme : zone grise du salariat." },
      { q: "Pour Durkheim, le travail est un facteur :", o: ["de pure exploitation sans contrepartie", "d'intégration sociale (lien, solidarité organique, statut)", "d'isolement systématique", "indifférent au lien social"], c: 1, e: "La division du travail produit de la solidarité organique ; l'emploi confère statut et reconnaissance." }
    ],
    vf: [
      { s: "Le toyotisme (post-fordisme) valorise la polyvalence, la qualité et le « juste-à-temps ».", a: true, e: "Flux tendu, qualité totale, implication : rupture avec la parcellisation taylorienne." },
      { s: "La précarité de l'emploi peut fragiliser l'intégration sociale par le travail.", a: true, e: "Emplois courts/discontinus : moindre stabilité du statut et du lien social (Castel : désaffiliation)." }
    ],
    trous: [
      { t: "L'organisation scientifique du travail de Taylor sépare la conception de l'_____.", a: "exécution", e: "Division verticale du travail." }
    ]
  });

  /* ============ 10. ENGAGEMENT POLITIQUE ============ */
  add("socio-engagement", {
    qcm: [
      { q: "Le « paradoxe de l'action collective » (Olson) tient à ce que :", o: ["personne n'a jamais intérêt à se mobiliser", "l'individu rationnel est tenté d'être passager clandestin et de profiter du bien collectif sans contribuer", "les groupes nombreux se mobilisent toujours facilement", "l'engagement est purement irrationnel"], c: 1, e: "Le bien collectif profite à tous, même aux non-participants : d'où le « free rider »." },
      { q: "Pour lever ce paradoxe, Olson invoque :", o: ["la contrainte d'État", "des incitations sélectives (avantages réservés aux participants)", "le hasard", "la suppression des groupes"], c: 1, e: "Avantages matériels/symboliques réservés aux membres actifs ; complétées par les « rétributions du militantisme »." },
      { q: "Les « répertoires d'action collective » (Tilly) désignent :", o: ["les listes électorales", "l'ensemble des moyens d'action disponibles à une époque (manifestation, pétition, grève, boycott…)", "les partis politiques", "les programmes des candidats"], c: 1, e: "Le répertoire évolue historiquement (du charivari à la manifestation, puis aux formes numériques)." },
      { q: "Parmi les formes contemporaines d'engagement, on compte :", o: ["le seul vote", "le militantisme, le bénévolat, la consommation engagée, l'engagement en ligne", "uniquement la grève", "rien hors des partis"], c: 1, e: "L'engagement se diversifie et s'individualise au-delà des formes partisanes classiques." }
    ],
    vf: [
      { s: "Le diplôme et la génération influencent la probabilité de s'engager.", a: true, e: "Variables sociodémographiques : âge/génération, diplôme, catégorie sociale, sexe." },
      { s: "La consommation engagée (boycott, achat responsable) est une forme d'engagement politique.", a: true, e: "Le « consom'acteur » : peser politiquement par ses choix de consommation." }
    ],
    trous: [
      { t: "L'individu qui profite d'un bien collectif sans contribuer est un passager _____.", a: "clandestin", e: "Free rider (Olson)." }
    ]
  });

  /* ============ 12. ACTION PUBLIQUE / ENVIRONNEMENT ============ */
  add("rc-environnement", {
    qcm: [
      { q: "Une externalité négative environnementale (ex. pollution) signifie que :", o: ["le marché en tient parfaitement compte", "le coût supporté par la collectivité n'est pas payé par le pollueur (coût social > coût privé)", "il n'y a aucun dommage", "l'État interdit toute production"], c: 1, e: "Défaillance de marché : d'où l'idée de « faire payer le pollueur » (taxe pigouvienne)." },
      { q: "La taxe carbone est un instrument :", o: ["réglementaire (interdiction)", "économique : donner un prix au carbone pour inciter à réduire les émissions", "de subvention directe", "purement symbolique"], c: 1, e: "Signal-prix : renchérir les émissions modifie les comportements (logique pigouvienne)." },
      { q: "Le marché de quotas d'émission repose sur :", o: ["la gratuité totale des émissions", "un plafond global d'émissions et l'échange de droits à polluer entre acteurs", "l'interdiction de toute industrie", "une taxe sur le revenu"], c: 1, e: "« Cap and trade » : on fixe la quantité totale, le marché fixe le prix du quota (SEQE européen)." },
      { q: "Les acteurs de l'action publique environnementale incluent :", o: ["les seuls États", "pouvoirs publics, entreprises, ONG, mouvements citoyens et experts (GIEC)", "uniquement les entreprises", "seulement les scientifiques"], c: 1, e: "La gouvernance environnementale est multi-niveaux et multi-acteurs (local, national, mondial)." },
      { q: "La « tragédie des communs » (Hardin), nuancée par Ostrom, montre que :", o: ["les ressources communes sont toujours bien gérées", "une ressource commune en libre accès tend à la surexploitation, sauf institutions de gestion adaptées", "l'État doit tout nationaliser", "la propriété privée est la seule solution"], c: 1, e: "Ostrom : des communautés peuvent gérer durablement les communs par des règles collectives, sans privatisation ni étatisation." }
    ],
    vf: [
      { s: "La réglementation (normes, interdictions) est un instrument d'action publique différent de la taxation.", a: true, e: "Trois grands instruments : réglementation, instruments économiques (taxe, marché de quotas), subventions." },
      { s: "Le développement durable articule des objectifs économiques, sociaux et environnementaux.", a: true, e: "Les trois « piliers » : concilier croissance, équité sociale et préservation de l'environnement." }
    ],
    trous: [
      { t: "Une taxe qui internalise le coût d'une externalité négative est dite _____.", a: "pigouvienne", alt: ["pigovienne"], e: "D'après l'économiste Pigou." }
    ]
  });

})();
