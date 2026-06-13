/* =====================================================================
   SES Terminale — Banque de questions SUPPLÉMENTAIRE (quiz3)
   ---------------------------------------------------------------------
   3e vague de questions, ancrées sur content.js / data.js, distinctes de
   quiz.js et quiz2.js. Fusionnées dans window.SES_QUIZ.
   ===================================================================== */
(function () {
  "use strict";
  var add = {

    "eco-croissance": {
      qcm: [
        { q: "Quelle formulation décrit le mieux la croissance économique au sens de l'INSEE ?", o: ["Une hausse ponctuelle des prix sur une année", "Une augmentation soutenue de la production sur longue période, mesurée en volume", "Une hausse du chômage des travailleurs qualifiés", "Une simple augmentation de la population active"], c: 1, e: "La croissance = augmentation soutenue de la production sur longue période, mesurée par l'évolution en volume (hors prix) du PIB." },
        { q: "Le PIB est défini comme un agrégat mesurant :", o: ["La seule richesse créée par les entreprises privées", "La richesse créée par tous les agents, privés et publics, sur un territoire", "Le patrimoine total des ménages", "La masse monétaire en circulation"], c: 1, e: "Le PIB mesure la richesse créée par tous les agents (privés et publics) sur un territoire pendant une période donnée." },
        { q: "Parmi ces éléments, lequel relève des facteurs de production ?", o: ["Le taux d'inflation", "Le travail, le capital et les ressources naturelles", "Le déficit public", "La valeur fondamentale d'un actif"], c: 1, e: "Les facteurs de production sont les moyens mobilisés pour produire : travail, capital, ressources naturelles." },
        { q: "L'accumulation des facteurs renvoie à une croissance dite :", o: ["Intensive", "Extensive", "Soutenable", "Endogène"], c: 1, e: "L'accumulation (quantité) des facteurs travail et capital alimente la croissance extensive ; les gains de productivité alimentent la croissance intensive." },
        { q: "Une innovation, au sens du cours, se distingue d'une invention car elle suppose :", o: ["Une découverte scientifique non appliquée", "L'introduction effective sur le marché d'un produit ou d'un procédé nouveau", "Un dépôt de brevet sans commercialisation", "Une amélioration uniquement théorique"], c: 1, e: "L'innovation est l'introduction sur le marché d'un produit ou d'un procédé nouveau, ce qui la distingue de l'invention." },
        { q: "Dans la soutenabilité dite « forte », contrairement à la soutenabilité « faible », on considère que le capital naturel :", o: ["Est entièrement substituable par du capital produit", "N'est pas substituable et doit être préservé pour lui-même", "Est sans valeur économique", "Augmente automatiquement avec la croissance"], c: 1, e: "La soutenabilité faible suppose le capital naturel substituable par du capital produit ; la soutenabilité forte le juge non substituable." },
        { q: "Quel auteur a, avec Howitt, intégré la destruction créatrice dans un modèle de croissance endogène ?", o: ["Robert Solow", "Philippe Aghion", "Adam Smith", "André Orléan"], c: 1, e: "Philippe Aghion, avec Howitt, intègre la destruction créatrice dans une croissance endogène où l'innovation dépend des institutions et de l'éducation." },
        { q: "Le « résidu de Solow » correspond, dans le modèle de 1956, à :", o: ["La part de la croissance expliquée par la seule hausse du capital", "La part de la croissance inexpliquée par l'accumulation des facteurs, à progrès technique exogène", "La quantité de travail mobilisée", "Le taux d'épargne des ménages"], c: 1, e: "Chez Solow (1956), à progrès technique exogène, la part inexpliquée de la croissance est le « résidu », proche de la PGF." }
      ],
      vf: [
        { s: "La croissance économique se mesure par l'évolution en volume du PIB, c'est-à-dire hors effet des prix.", a: true, e: "La mesure en volume neutralise l'effet de l'inflation : c'est la définition retenue par l'INSEE." },
        { s: "La productivité du travail se calcule en rapportant le facteur travail à la valeur ajoutée.", a: false, e: "C'est l'inverse : la productivité du travail rapporte la valeur ajoutée (en volume) au facteur travail." },
        { s: "Pour Paul Romer, le progrès technique résulte d'activités intentionnelles comme la R&D et peut générer des rendements croissants.", a: true, e: "Romer théorise la croissance endogène : le progrès technique vient d'activités intentionnelles, source de rendements croissants." },
        { s: "Les institutions, et notamment les droits de propriété, sont sans influence sur l'incitation à innover.", a: false, e: "Au contraire, en garantissant l'appropriation des fruits de l'innovation, les droits de propriété renforcent l'incitation à investir et innover." },
        { s: "L'innovation peut aider à reculer les limites écologiques que rencontre une croissance soutenable.", a: true, e: "La soutenabilité bute sur des limites écologiques, mais l'innovation peut contribuer à les repousser." },
        { s: "Le progrès technique profite toujours également aux travailleurs qualifiés et non qualifiés.", a: false, e: "Le progrès technique peut creuser les inégalités de revenus, en favorisant notamment les travailleurs qualifiés." }
      ],
      trous: [
        { t: "Les moyens mobilisés pour produire (travail, capital, ressources naturelles) sont les _____ de production.", a: "facteurs", e: "Facteurs de production." },
        { t: "L'agrégat qui mesure la richesse créée par tous les agents sur un territoire est le _____ (sigle).", a: "PIB", e: "Produit intérieur brut." },
        { t: "L'amélioration des techniques de production se traduisant par des gains de productivité est le _____ technique.", a: "progrès", alt: ["progres"], e: "Progrès technique." },
        { t: "Une croissance qui répond aux besoins du présent sans compromettre ceux des générations futures est dite _____.", a: "soutenable", e: "Croissance soutenable." },
        { t: "La croissance fondée sur la hausse de la quantité de facteurs employés est qualifiée d'_____.", a: "extensive", e: "Croissance extensive (par accumulation des facteurs), par opposition à la croissance intensive." },
        { t: "Le rapport de la valeur ajoutée en volume au facteur travail est la _____ du travail.", a: "productivité", alt: ["productivite"], e: "Productivité du travail." }
      ]
    },

    "eco-commerce": {
      qcm: [
        { q: "La spécialisation d'un pays se définit comme :", o: ["La concentration de ses capacités de production dans certaines branches selon ses avantages comparatifs", "La fermeture totale de ses frontières commerciales", "La production de tous les biens en autarcie", "L'imposition de droits de douane élevés"], c: 0, e: "La spécialisation est la concentration des capacités de production d'un pays dans certaines branches, selon ses avantages comparatifs." },
        { q: "Le libre-échange se définit comme une politique de :", o: ["Hausse des barrières douanières pour protéger l'industrie", "Réduction des barrières douanières et des obstacles au commerce international", "Limitation des exportations nationales", "Fixation administrée des prix mondiaux"], c: 1, e: "Le libre-échange est une politique de réduction des barrières douanières et des obstacles au commerce ; il s'oppose au protectionnisme." },
        { q: "La différenciation des produits désigne :", o: ["Des différences, réelles ou perçues, faisant que deux produits proches ne sont pas jugés identiques", "L'identité parfaite entre deux biens concurrents", "La baisse des coûts de production", "Le transfert de production à l'étranger"], c: 0, e: "La différenciation correspond à des différences réelles ou perçues qui font que des produits proches ne sont pas jugés identiques par les consommateurs." },
        { q: "La chaîne de valeur désigne l'ensemble des étapes qui :", o: ["Ajoutent de la valeur à un produit (R&D, composants, assemblage, vente…)", "Fixent le taux de change d'une monnaie", "Composent le budget de l'État", "Déterminent le salaire minimum"], c: 0, e: "La chaîne de valeur réunit les étapes ajoutant de la valeur à un produit (R&D, composants, assemblage, vente), désormais réparties internationalement." },
        { q: "Parmi les effets du commerce international figure :", o: ["Une hausse générale des prix pour les consommateurs", "Une baisse des prix (gains moyens) et une réduction des inégalités entre pays", "La disparition de toute spécialisation", "La suppression des firmes multinationales"], c: 1, e: "Le commerce procure des gains moyens (baisse des prix) et réduit les inégalités entre pays, tout en pouvant accroître les inégalités internes." },
        { q: "En France, en 2021, les firmes multinationales (FMN) concentraient environ :", o: ["10 % de l'emploi", "42 % de l'emploi", "70 % de l'emploi", "5 % de l'emploi"], c: 1, e: "Selon l'INSEE (2021), les FMN représentent moins de 1 % des entreprises mais 42 % de l'emploi et 55 % de la valeur ajoutée." },
        { q: "La productivité des firmes est présentée comme le fondement de :", o: ["La compétitivité d'un pays, c'est-à-dire son aptitude à exporter", "La politique monétaire de la BCE", "Le taux de chômage structurel", "La courbe de Lorenz"], c: 0, e: "La productivité des firmes sous-tend la compétitivité d'un pays, soit sa capacité à exporter, à la fois en prix et hors-prix." },
        { q: "L'avantage absolu de Smith et l'avantage comparatif de Ricardo se distinguent en ce que :", o: ["L'avantage absolu compare des coûts plus faibles que les autres pays, l'avantage comparatif raisonne en coûts relatifs", "Ils désignent exactement la même chose", "L'avantage comparatif suppose forcément un avantage de coût absolu", "L'avantage absolu interdit tout échange"], c: 0, e: "Smith : produire à un coût plus faible que les autres (absolu) ; Ricardo : se spécialiser là où le coût relatif est le plus faible, même sans avantage absolu." }
      ],
      vf: [
        { s: "Le commerce inter-branche porte sur des produits de branches différentes.", a: true, e: "Inter-branche = branches différentes ; intra-branche = produits similaires de la même branche." },
        { s: "Selon la théorie HOS, un pays se spécialise dans la production utilisant intensément le facteur dont il est le moins bien doté.", a: false, e: "C'est l'inverse : il se spécialise là où il utilise intensément le facteur dont il est le MIEUX doté." },
        { s: "La DIPP consiste à localiser les étapes de fabrication d'un produit dans différents pays.", a: true, e: "La décomposition internationale du processus productif répartit les étapes de production entre pays." },
        { s: "Une dotation factorielle correspond à la quantité de facteurs dont un pays dispose.", a: true, e: "Dotation factorielle = quantité de facteurs (travail qualifié/non qualifié, capital, ressources) dont dispose un pays." },
        { s: "Pour Paul Krugman, le commerce entre pays comparables s'explique par les économies d'échelle et le goût pour la diversité.", a: true, e: "C'est la nouvelle théorie du commerce (Krugman, Nobel 2008)." },
        { s: "La compétitivité-prix repose sur la qualité et l'innovation plutôt que sur les coûts.", a: false, e: "C'est la compétitivité hors-prix qui repose sur la qualité et l'innovation ; la compétitivité-prix joue sur les coûts et les prix." }
      ],
      trous: [
        { t: "La concentration des capacités de production d'un pays dans certaines branches est la _____.", a: "spécialisation", alt: ["specialisation"], e: "Spécialisation selon les avantages comparatifs." },
        { t: "La politique visant à limiter les importations pour protéger la production nationale est le _____.", a: "protectionnisme", e: "Protectionnisme, opposé au libre-échange." },
        { t: "Le commerce croisé de biens similaires entre pays comparables est le commerce _____.", a: "intra-branche", alt: ["intrabranche", "intra branche"], e: "Commerce intra-branche, fondé sur la différenciation des produits." },
        { t: "Le transfert par une firme d'une partie de sa production vers un pays étranger est une _____.", a: "délocalisation", alt: ["delocalisation"], e: "Délocalisation." },
        { t: "La capacité à gagner des parts de marché par la qualité, l'innovation ou le service est la compétitivité _____-prix.", a: "hors", e: "Compétitivité hors-prix (ou structurelle)." },
        { t: "La théorie selon laquelle la spécialisation découle des dotations factorielles est la théorie _____ (sigle).", a: "HOS", e: "Heckscher-Ohlin-Samuelson." }
      ]
    },

    "eco-chomage": {
      qcm: [
        { q: "Selon le BIT, à partir de quel âge une personne peut-elle être comptée comme chômeur ?", o: ["16 ans ou plus", "15 ans ou plus", "18 ans ou plus", "14 ans ou plus"], c: 1, e: "Le chômeur au sens du BIT est une personne de 15 ans ou plus, sans emploi, disponible et en recherche active." },
        { q: "Le taux d'emploi se définit comme le rapport entre :", o: ["Le nombre de chômeurs et la population active", "Le nombre de personnes en emploi et la population correspondante", "Les actifs occupés et les inactifs", "Les chômeurs et les actifs occupés"], c: 1, e: "Le taux d'emploi rapporte le nombre de personnes en emploi à la population correspondante ; à distinguer du taux de chômage." },
        { q: "Les rigidités du marché du travail désignent notamment :", o: ["Le salaire minimum et la protection de l'emploi qui limitent la flexibilité", "La libre fixation des salaires sans contrainte", "La baisse de la demande globale", "Le temps de recherche d'un emploi"], c: 0, e: "Les rigidités sont les éléments (salaire minimum, protection de l'emploi) qui limitent la flexibilité, notamment salariale." },
        { q: "La demande globale adressée aux entreprises comprend :", o: ["La seule consommation des ménages", "La consommation, l'investissement, les dépenses publiques et les exportations", "Uniquement les exportations", "Le seul investissement des entreprises"], c: 1, e: "La demande globale = consommation + investissement + dépenses publiques + exportations." },
        { q: "Les asymétries d'information, source de chômage structurel, sont illustrées dans le cours par :", o: ["Le salaire d'efficience", "Le taux de change", "La courbe de Lorenz", "Le coefficient multiplicateur"], c: 0, e: "Le salaire d'efficience, fixé au-dessus de l'équilibre face à l'asymétrie d'information, est une source de chômage structurel." },
        { q: "Quelle politique vise spécifiquement à réduire les rigidités du marché du travail ?", o: ["La politique de soutien de la demande globale", "La politique de flexibilisation", "La politique monétaire de la BCE", "La hausse du salaire minimum"], c: 1, e: "La flexibilisation cherche à réduire les rigidités ; le soutien de la demande vise le chômage conjoncturel." },
        { q: "Le chômage frictionnel et le chômage structurel se distinguent en ce que le frictionnel :", o: ["Est un chômage de court terme lié au temps de recherche d'un emploi adéquat", "Résulte d'une insuffisance durable de la demande globale", "Est toujours d'origine saisonnière", "Concerne uniquement les retraités"], c: 0, e: "Le chômage frictionnel est un chômage de court terme correspondant au temps de recherche d'un emploi adéquat." },
        { q: "Une inadéquation entre les qualifications offertes et celles demandées sur le marché du travail relève :", o: ["D'un défaut d'appariement, source de chômage structurel", "Du chômage conjoncturel", "De l'effet de richesse", "Du sous-emploi à temps partiel"], c: 0, e: "Les problèmes d'appariement (frictions, inadéquations spatiales et de qualifications) sont des sources de chômage structurel." }
      ],
      vf: [
        { s: "La population active regroupe les personnes en emploi et les chômeurs au sens du BIT.", a: true, e: "Population active = personnes en emploi + chômeurs au sens du BIT." },
        { s: "La flexisécurité consiste à supprimer toute protection du revenu entre deux emplois.", a: false, e: "Au contraire, elle combine flexibilité des contrats, sécurité du revenu entre deux emplois et accompagnement vers le retour à l'emploi." },
        { s: "Le chômage conjoncturel résulte des fluctuations de l'activité économique.", a: true, e: "Il est lié à un ralentissement de l'activité (insuffisance de la demande globale)." },
        { s: "La protection de l'emploi est une institution dont les effets sur le chômage structurel peuvent être positifs ou négatifs.", a: true, e: "Le programme précise que les institutions (salaire minimum, protection de l'emploi) ont des effets positifs OU négatifs sur le chômage structurel." },
        { s: "Le halo du chômage est inclus dans le nombre de chômeurs au sens du BIT.", a: false, e: "Le halo regroupe justement des personnes souhaitant travailler mais NON comptées comme chômeurs BIT." },
        { s: "L'allègement du coût du travail fait partie des politiques de lutte contre le chômage.", a: true, e: "Parmi les politiques : soutien de la demande, allègement du coût du travail, formation, flexibilisation." }
      ],
      trous: [
        { t: "Le rapport entre le nombre de chômeurs et le nombre d'actifs est le taux de _____.", a: "chômage", alt: ["chomage"], e: "Taux de chômage = chômeurs / actifs." },
        { t: "Les personnes à temps partiel souhaitant travailler plus et disponibles relèvent du _____.", a: "sous-emploi", alt: ["sous emploi", "sousemploi"], e: "Sous-emploi." },
        { t: "Le chômage durable lié aux caractéristiques du marché du travail est le chômage _____.", a: "structurel", e: "Chômage structurel, indépendant de la conjoncture." },
        { t: "L'ensemble de la demande adressée aux entreprises (consommation, investissement, dépenses publiques, exportations) est la demande _____.", a: "globale", e: "Demande globale." },
        { t: "Les mesures permettant d'adapter l'emploi et la production aux variations de la demande relèvent de la _____.", a: "flexibilité", alt: ["flexibilite"], e: "Flexibilité du marché du travail." },
        { t: "Le chômage de court terme correspondant au temps de recherche d'un emploi adéquat est le chômage _____.", a: "frictionnel", e: "Chômage frictionnel." }
      ]
    },

    "eco-crises": {
      qcm: [
        { q: "Quelle caractéristique commune partagent les crises de 1929 et de 2008 ?", o: ["Une hausse du PIB et une baisse du chômage", "Un effondrement boursier, des faillites en chaîne, une chute du PIB et une hausse du chômage", "Une simple baisse des taux directeurs sans effet réel", "Une pénurie de monnaie sans conséquence sur l'emploi"], c: 1, e: "Les deux crises se traduisent par un effondrement boursier, des faillites en chaîne, une chute du PIB et une hausse du chômage." },
        { q: "Quelle notion désigne l'effondrement brutal des cours lorsque les opérateurs prennent conscience de la surévaluation des actifs ?", o: ["La bulle spéculative", "Le krach boursier", "La titrisation", "La panique bancaire"], c: 1, e: "Le krach boursier est l'effondrement brutal des cours quand les opérateurs réalisent la surévaluation des actifs et les revendent ; la bulle, elle, est la phase de hausse." },
        { q: "Le risque systémique se distingue de l'aléa moral en ce qu'il désigne :", o: ["la prise de risque excessive d'une banque sûre d'être renflouée", "le risque qu'un événement entraîne, par réactions en chaîne, une crise générale du système financier", "l'écart entre le prix d'un actif et sa valeur fondamentale", "le niveau minimal de fonds propres exigé des banques"], c: 1, e: "Le risque systémique vise la propagation en chaîne d'une crise à tout le système ; l'aléa moral concerne le comportement individuel de prise de risque." },
        { q: "Parmi les canaux de transmission d'une crise financière à l'économie réelle, l'effet de richesse négatif joue par :", o: ["la baisse de la valeur du patrimoine des ménages, qui réduit leur consommation", "la hausse des fonds propres des banques", "l'augmentation des exportations nettes", "la hausse des taux de scolarisation"], c: 0, e: "L'effet de richesse traduit l'influence de la valeur du patrimoine des ménages sur leur consommation : quand le patrimoine perd de la valeur, la consommation recule." },
        { q: "Une panique bancaire correspond avant tout à une crise :", o: ["de solvabilité de l'État", "de liquidité provoquée par des retraits massifs et simultanés des déposants", "de surproduction industrielle", "du marché des changes"], c: 1, e: "La panique bancaire est une crise de confiance et de liquidité : les déposants retirent simultanément leurs avoirs, ce qui peut faire tomber une banque même solvable." },
        { q: "La supervision bancaire se distingue du ratio de solvabilité car elle désigne :", o: ["le contrôle des banques par les autorités (ex. BCE) pour vérifier le respect des règles", "un actif remis en garantie d'un prêt", "le minimum de fonds propres rapporté aux engagements", "une anticipation qui se réalise d'elle-même"], c: 0, e: "La supervision est l'activité de contrôle exercée par les autorités ; le ratio de solvabilité est l'une des règles prudentielles dont elle vérifie le respect." },
        { q: "La baisse du prix du collatéral aggrave une crise financière parce qu'elle :", o: ["renforce la valeur des garanties détenues par les banques", "déclenche des ventes forcées d'actifs", "augmente l'offre de crédit des banques", "supprime le risque systémique"], c: 1, e: "Quand le prix de l'actif remis en garantie chute, les créanciers exigent des garanties supplémentaires ou liquident les positions : ces ventes forcées propagent la crise." },
        { q: "Dans le système financier, les marchés et institutions ont pour fonction de :", o: ["fixer le taux de chômage d'équilibre", "mettre en relation les agents à capacité et les agents à besoin de financement", "produire directement des biens et services", "garantir un coefficient de Gini nul"], c: 1, e: "Le système financier réunit marchés, institutions et règles qui relient les agents à capacité de financement et ceux à besoin de financement." }
      ],
      vf: [
        { s: "La bulle spéculative correspond à la phase de hausse du prix d'un actif, tandis que le krach en est l'éclatement.", a: true, e: "La bulle est l'écart croissant entre le prix et la valeur fondamentale ; le krach est l'effondrement brutal des cours qui la conclut." },
        { s: "Une faillite bancaire peut se propager aux autres banques par un mécanisme de faillites en chaîne.", a: true, e: "Panique bancaire et faillites bancaires en chaîne propagent la crise à l'ensemble du système." },
        { s: "Le collatéral est un actif remis en garantie d'un prêt, que le créancier peut saisir en cas de défaut.", a: true, e: "C'est sa définition ; la baisse de son prix entraîne des ventes forcées." },
        { s: "Pour Hyman Minsky, l'instabilité financière se construit surtout pendant les périodes de crise déjà déclarée.", a: false, e: "Au contraire, le « paradoxe de la tranquillité » de Minsky veut que l'instabilité se prépare en période de prospérité, l'endettement devenant spéculatif puis « Ponzi »." },
        { s: "La valeur fondamentale d'un actif repose sur les revenus futurs qu'il est censé rapporter.", a: true, e: "C'est la valeur « objective » de l'actif ; la bulle naît quand le prix de marché s'en écarte." },
        { s: "Le ratio de solvabilité vise à augmenter l'aléa moral des banques.", a: false, e: "Il vise au contraire à le réduire, en imposant un niveau minimal de fonds propres pour absorber les pertes." }
      ],
      trous: [
        { t: "L'effondrement boursier de 1929, comme celui de 2008, s'accompagne de faillites en _____ et d'une chute du PIB.", a: "chaîne", alt: ["chaine"], e: "Faillites en chaîne : caractéristique commune des deux crises." },
        { t: "L'influence de la variation de la valeur du patrimoine des ménages sur leur consommation est l'effet de _____.", a: "richesse", e: "Effet de richesse, l'un des canaux de transmission à l'économie réelle." },
        { t: "Une crise de confiance conduisant les déposants à retirer simultanément leurs avoirs est une _____ bancaire.", a: "panique", e: "Panique bancaire (bank run), source de crise de liquidité." },
        { t: "La technique qui transforme des actifs peu liquides comme des crédits en titres négociables est la _____.", a: "titrisation", e: "Titrisation, qui a joué un rôle dans la crise de 2008." },
        { t: "Une situation où un agent modifie sa prise de risque parce qu'il n'en supportera pas seul les conséquences est un aléa _____.", a: "moral", e: "Aléa moral, que la régulation cherche à réduire." },
        { t: "La valeur « objective » d'un actif, fondée sur ses revenus futurs attendus, est sa valeur _____.", a: "fondamentale", e: "Valeur fondamentale, dont le prix s'écarte lors d'une bulle." }
      ]
    },

    "eco-europe": {
      qcm: [
        { q: "L'objectif principal assigné à la politique monétaire de la BCE est :", o: ["le plein emploi immédiat", "la stabilité des prix", "l'équilibre du commerce extérieur", "la baisse du coefficient de Gini"], c: 1, e: "La BCE définit et met en œuvre la politique monétaire de la zone euro avec pour objectif premier la stabilité des prix." },
        { q: "Le contrôle des concentrations relève de :", o: ["la politique budgétaire nationale", "la politique européenne de la concurrence", "la politique monétaire de la BCE", "la libre circulation des personnes"], c: 1, e: "La politique de la concurrence lutte contre ententes et abus de position dominante et contrôle les concentrations ainsi que les aides d'État." },
        { q: "Quelle distinction sépare une entente d'un abus de position dominante ?", o: ["L'entente est un accord entre concurrents, l'abus est le fait d'une entreprise dominante qui évince ses rivaux", "Les deux désignent exactement la même pratique", "L'entente est autorisée, l'abus de position dominante est encouragé", "L'entente concerne les États, l'abus concerne la BCE"], c: 0, e: "L'entente suppose un accord entre plusieurs entreprises concurrentes ; l'abus de position dominante est le comportement d'une seule entreprise qui utilise sa position pour évincer ses concurrents ou léser les consommateurs." },
        { q: "Dans la zone euro, qui conduit la politique monétaire et qui conserve la politique budgétaire ?", o: ["La BCE pour la monnaie ; chaque État membre pour le budget", "Chaque État pour la monnaie ; la Commission pour le budget", "La BCE pour les deux", "Les États pour les deux"], c: 0, e: "La politique monétaire est unique et conduite par la BCE, tandis que la politique budgétaire reste du ressort de chaque pays membre, sous contrainte des traités." },
        { q: "Selon le Pacte de stabilité et de croissance, le déficit public ne doit en principe pas dépasser :", o: ["3 % du PIB", "60 % du PIB", "2 % du PIB", "0,5 % du PIB"], c: 0, e: "Les critères du PSC fixent un déficit public inférieur à 3 % du PIB et une dette publique inférieure à 60 % du PIB." },
        { q: "Parmi les « quatre libertés » du marché unique figure la libre circulation :", o: ["des seules marchandises agricoles", "des capitaux", "des seuls travailleurs frontaliers", "des décisions de la BCE"], c: 1, e: "Le marché unique assure la libre circulation des marchandises, des personnes, des services et des capitaux." },
        { q: "Un déficit public apparaît lorsque :", o: ["les recettes des administrations publiques excèdent leurs dépenses", "les dépenses des administrations publiques excèdent leurs recettes", "la dette publique tombe à zéro", "l'inflation dépasse 2 %"], c: 1, e: "Le déficit public est le solde négatif du budget des administrations publiques, quand les dépenses excèdent les recettes." },
        { q: "Pourquoi un choc asymétrique complique-t-il la politique monétaire de la zone euro ?", o: ["Parce qu'il touche tous les pays de manière identique", "Parce qu'il affecte un pays sans (ou différemment) les autres, alors que la politique monétaire est unique", "Parce qu'il oblige la BCE à fixer plusieurs monnaies", "Parce qu'il supprime la politique budgétaire nationale"], c: 1, e: "Une politique monétaire unique ne peut pas être adaptée à un pays particulier frappé par un choc qui épargne les autres : c'est une difficulté de la zone euro." }
      ],
      vf: [
        { s: "La politique de la concurrence contrôle non seulement les ententes et abus de position dominante, mais aussi les concentrations et les aides d'État.", a: true, e: "Ce sont ses quatre domaines d'intervention." },
        { s: "Dans la zone euro, chaque État membre conduit sa propre politique monétaire.", a: false, e: "La politique monétaire y est unique et conduite par la BCE ; c'est la politique budgétaire qui reste nationale." },
        { s: "L'Union économique et monétaire associe un marché intérieur, une monnaie commune, une politique monétaire commune et la coordination des politiques économiques.", a: true, e: "C'est la définition de l'UEM." },
        { s: "Le marché unique stimule la croissance notamment par la concurrence et les économies d'échelle.", a: true, e: "L'intégration par le marché unique vise un gain d'efficacité économique." },
        { s: "La politique budgétaire agit sur la conjoncture au moyen des recettes et des dépenses de l'État.", a: true, e: "Elle joue sur les recettes et dépenses publiques pour influencer l'activité." },
        { s: "Un déficit public correspond à un excédent du budget des administrations publiques.", a: false, e: "C'est l'inverse : le déficit est un solde négatif, les dépenses excédant les recettes." }
      ],
      trous: [
        { t: "L'objectif premier de la politique monétaire de la BCE est la stabilité des _____.", a: "prix", e: "Stabilité des prix, traduite par une cible d'inflation de 2 % à moyen terme." },
        { t: "Un accord entre entreprises concurrentes qui restreint la concurrence, par exemple une fixation concertée des prix, est une _____.", a: "entente", e: "Entente, sanctionnée par la politique de la concurrence." },
        { t: "Le solde négatif du budget des administrations publiques, quand les dépenses excèdent les recettes, est le _____ public.", a: "déficit", alt: ["deficit"], e: "Déficit public, encadré par le PSC (< 3 % du PIB)." },
        { t: "L'espace sans frontières intérieures assurant la libre circulation des biens, services, capitaux et personnes est le marché _____.", a: "unique", e: "Marché unique, en place depuis 1993." },
        { t: "L'union associant marché intérieur, monnaie commune et coordination des politiques économiques est l'Union économique et _____.", a: "monétaire", alt: ["monetaire"], e: "Union économique et monétaire (UEM)." },
        { t: "Le comportement d'une entreprise qui utilise sa position dominante pour évincer ses concurrents est un _____ de position dominante.", a: "abus", e: "Abus de position dominante, distinct de l'entente." }
      ]
    },

    "socio-structure": {
      qcm: [
        { q: "Chez Marx, l'opposition fondamentale entre classes met aux prises :", o: ["les groupes de statut et les partis", "la bourgeoisie et le prolétariat", "les cadres et les professions intermédiaires", "les actifs et les inactifs"], c: 1, e: "Pour Marx, la société est structurée par les rapports de production et l'opposition entre bourgeoisie et prolétariat (lutte des classes)." },
        { q: "Dans la stratification wébérienne, le « parti » correspond à l'ordre :", o: ["économique", "social", "politique", "religieux"], c: 2, e: "Weber distingue trois ordres : économique (classes), social (groupes de statut) et politique (partis)." },
        { q: "Parmi les évolutions de la structure socioprofessionnelle depuis 1950, l'« élévation du niveau de qualification » désigne :", o: ["la baisse générale des diplômes", "la hausse du niveau de formation et de qualification des emplois", "la diminution du salariat", "le recul du secteur tertiaire"], c: 1, e: "Avec la salarisation, la tertiarisation et la féminisation, l'élévation du niveau de qualification est l'une des grandes transformations de la structure socioprofessionnelle." },
        { q: "Le capital social, au sens de Bourdieu, désigne :", o: ["les revenus et le patrimoine d'un individu", "les savoirs et diplômes incorporés", "les réseaux de relations qu'un individu peut mobiliser à son avantage", "le prestige attaché à un statut"], c: 2, e: "Le capital social regroupe les réseaux de relations mobilisables ; le capital économique vise les ressources matérielles et le capital culturel les savoirs et diplômes." },
        { q: "La thèse de la « moyennisation » de Mendras est associée à quelle période ?", o: ["la Révolution industrielle", "les Trente Glorieuses", "les années 2010", "l'entre-deux-guerres"], c: 1, e: "Mendras situe le développement d'une vaste classe moyenne atténuant les clivages durant les Trente Glorieuses." },
        { q: "Lequel de ces éléments est un facteur de structuration et de hiérarchisation de l'espace social ?", o: ["Le lieu de résidence", "Le taux directeur de la BCE", "Le ratio de solvabilité", "La valeur fondamentale des actifs"], c: 0, e: "L'espace social est hiérarchisé par de multiples facteurs : PCS, revenu, diplôme, composition du ménage, âge, sexe et lieu de résidence." },
        { q: "La stratification sociale se définit comme :", o: ["la répartition de la population en groupes hiérarchisés selon une distribution inégale des ressources", "la seule mesure du revenu médian", "l'absence de toute hiérarchie sociale", "la nomenclature comptable de l'INSEE"], c: 0, e: "La stratification sociale est la répartition de la population en groupes hiérarchisés selon une distribution inégale des ressources." },
        { q: "Le débat sur la pertinence des classes sociales porte notamment sur :", o: ["la disparition de la nomenclature PCS", "l'évolution des distances inter- et intra-classes et la multiplication des facteurs d'individualisation", "l'interdiction de mesurer le revenu", "la suppression du secteur tertiaire"], c: 1, e: "La pertinence de l'analyse en classes fait débat : distances inter/intra-classes, articulation avec le genre, identifications subjectives, individualisation." }
      ],
      vf: [
        { s: "Chez Marx, la « classe pour soi » se distingue de la « classe en soi » par la conscience de classe et la mobilisation.", a: true, e: "La classe « en soi » existe objectivement ; elle devient « pour soi » quand elle prend conscience de ses intérêts communs et se mobilise." },
        { s: "Pour Weber, la position sociale se réduit à la seule dimension économique.", a: false, e: "La stratification wébérienne est multidimensionnelle : classes (économique), groupes de statut (social) et partis (politique)." },
        { s: "La salarisation désigne la diffusion du statut de salarié comme forme principale d'emploi.", a: true, e: "C'est l'une des grandes évolutions de la structure socioprofessionnelle depuis 1950." },
        { s: "Le capital économique, chez Bourdieu, recouvre les savoirs et les diplômes d'un individu.", a: false, e: "Les savoirs et diplômes relèvent du capital culturel ; le capital économique vise les revenus et le patrimoine." },
        { s: "La composition du ménage et la position dans le cycle de vie figurent parmi les facteurs de hiérarchisation de l'espace social.", a: true, e: "Avec la PCS, le revenu, le diplôme, l'âge, le sexe et le lieu de résidence." },
        { s: "L'individualisation tend à renforcer les appartenances de classe.", a: false, e: "Elle multiplie au contraire les facteurs qui distinguent les individus au sein des groupes, ce qui affaiblit les appartenances de classe." }
      ],
      trous: [
        { t: "Pour Marx, l'affrontement entre la bourgeoisie et le prolétariat constitue la lutte des _____.", a: "classes", e: "Lutte des classes, fondée sur le rapport aux moyens de production." },
        { t: "Chez Weber, l'ordre politique de la stratification est représenté par les _____.", a: "partis", alt: ["parti"], e: "Weber : classes (économique), groupes de statut (social), partis (politique)." },
        { t: "La répartition de la population en groupes hiérarchisés selon une distribution inégale des ressources est la _____ sociale.", a: "stratification", e: "Stratification sociale." },
        { t: "Chez Bourdieu, les ressources économiques d'un individu, revenus et patrimoine, forment le capital _____.", a: "économique", alt: ["economique"], e: "Capital économique, distinct du capital culturel et du capital social." },
        { t: "La hausse de la part des femmes dans la population active occupée est la _____ des emplois.", a: "féminisation", alt: ["feminisation"], e: "Féminisation des emplois, l'une des évolutions depuis 1950." },
        { t: "La thèse d'un développement des couches intermédiaires atténuant les clivages, défendue par Mendras, est la _____.", a: "moyennisation", e: "Moyennisation (Henri Mendras)." }
      ]
    },

    "socio-ecole": {
      qcm: [
        { q: "Dans les sociétés démocratiques, quelles sont les deux grandes fonctions assignées à l'École selon le programme ?", o: ["Sélectionner une élite et exclure les plus faibles", "Transmettre des savoirs et favoriser l'égalité des chances", "Garder les enfants et réduire le chômage des jeunes", "Produire de la main-d'oeuvre et financer la recherche"], c: 1, e: "Le cours rappelle que, dans les sociétés démocratiques, l'École transmet des savoirs et vise à favoriser l'égalité des chances." },
        { q: "La méritocratie se définit comme un système où la position sociale dépend :", o: ["de l'origine sociale et du patrimoine familial", "du seul mérite, c'est-à-dire du talent et de l'effort", "du diplôme du père uniquement", "du hasard et des relations"], c: 1, e: "La méritocratie fait dépendre la position du seul mérite (talent + effort), indépendamment de l'origine sociale." },
        { q: "Sous quelle forme le capital culturel correspond-il aux biens culturels (livres, oeuvres, instruments) ?", o: ["la forme incorporée", "la forme objectivée", "la forme institutionnalisée", "la forme économique"], c: 1, e: "Le capital culturel objectivé prend la forme de biens culturels ; il se distingue des formes incorporée (dispositions) et institutionnalisée (diplômes)." },
        { q: "D'après les données de l'INSEE (2018-2020), la part des enfants de cadres obtenant un master ou une grande école est d'environ :", o: ["13 %", "40 %", "55 %", "80 %"], c: 1, e: "40 % des enfants de cadres obtiennent un master ou une grande école, contre 13 % des enfants d'employés et ouvriers." },
        { q: "Selon Raymond Boudon, la part des inégalités scolaires liée à l'orientation s'explique avant tout par :", o: ["la transmission du capital culturel des familles", "les calculs coût/avantage rationnels des familles selon leur position", "la division de l'École en deux réseaux", "la socialisation différenciée selon le genre"], c: 1, e: "Boudon mobilise l'individualisme méthodologique : les familles arbitrent rationnellement coûts et avantages selon leur position sociale." },
        { q: "Quel processus correspond à l'élargissement quantitatif des effectifs scolarisés sans réduction nécessaire des inégalités d'origine ?", o: ["la démocratisation", "la massification", "la méritocratie", "la reproduction"], c: 1, e: "La massification est la hausse quantitative des effectifs ; elle ne garantit pas la démocratisation (réduction des inégalités selon l'origine)." },
        { q: "L'accès au baccalauréat concernait moins de 5 % d'une génération dans les années 1950 ; en 2017, il atteint environ :", o: ["50 % d'une génération", "65 % d'une génération", "79,6 % d'une génération", "95 % d'une génération"], c: 2, e: "L'accès au bac atteint environ 79,6 % d'une génération en 2017, illustrant la massification scolaire." },
        { q: "Pour Bourdieu et Passeron, en valorisant le capital culturel des familles dominantes, l'École tend surtout à :", o: ["neutraliser l'origine sociale des élèves", "reproduire la structure sociale tout en la présentant comme méritocratique", "favoriser les enfants d'ouvriers", "supprimer les différences de réussite"], c: 1, e: "L'École reproduit les inégalités en valorisant le capital culturel des dominants, tout en présentant le résultat comme du mérite." }
      ],
      vf: [
        { s: "Le taux de scolarisation rapporte les élèves d'un âge donné à l'ensemble des jeunes du même âge.", a: true, e: "C'est sa définition : un rapport entre les scolarisés d'un âge et l'ensemble de la classe d'âge." },
        { s: "Le capital culturel institutionnalisé correspond aux diplômes.", a: true, e: "Parmi les trois formes du capital culturel, la forme institutionnalisée est celle des diplômes." },
        { s: "Selon le paradoxe d'Anderson, obtenir un diplôme plus élevé que celui de son père garantit une position sociale supérieure à la sienne.", a: false, e: "Le paradoxe d'Anderson établit l'inverse : à cause de la dévaluation des diplômes, dépasser le diplôme paternel n'assure pas une position plus élevée." },
        { s: "La démocratisation ségrégative décrit un élargissement de l'accès au bac accompagné d'un recrutement social qui reste très différencié selon les séries.", a: true, e: "Merle : l'accès au bac s'élargit, mais filières nobles et dévalorisées gardent des recrutements sociaux très inégaux." },
        { s: "Le capital culturel se transmet uniquement à l'école, jamais par la famille.", a: false, e: "Le capital culturel est d'abord transmis par la famille (savoirs, langage, rapport à l'école), puis valorisé par l'École." },
        { s: "Les investissements familiaux et les stratégies des ménages figurent parmi les facteurs des inégalités de réussite scolaire.", a: true, e: "Le programme cite le rôle de l'École, du capital culturel, des investissements familiaux, de la socialisation de genre et des stratégies des ménages." }
      ],
      trous: [
        { t: "Le rapport entre les élèves d'un âge donné et l'ensemble des jeunes de cet âge est le taux de _____.", a: "scolarisation", e: "Taux de scolarisation, indicateur de l'accès à l'école." },
        { t: "Un système où la position sociale ne dépend que du talent et de l'effort relève de la _____.", a: "méritocratie", e: "Méritocratie : position fondée sur le seul mérite." },
        { t: "Selon Boudon, les choix d'orientation des familles selon leur position sociale sont des stratégies _____.", a: "familiales", e: "Stratégies familiales : arbitrages coût/avantage selon la position sociale." },
        { t: "Bourdieu distingue le capital culturel incorporé, objectivé et _____, cette dernière forme correspondant aux diplômes.", a: "institutionnalisé", alt: ["institutionnalise"], e: "Forme institutionnalisée du capital culturel : les diplômes." },
        { t: "L'analyse de Baudelot et Establet décrit une École divisée en deux _____ aux débouchés socialement différenciés.", a: "réseaux", alt: ["reseaux"], e: "Deux réseaux de scolarisation selon l'origine sociale." },
        { t: "D'après l'INSEE, 40 % des enfants de cadres obtiennent un master ou une grande école, contre _____ % des enfants d'employés et d'ouvriers.", a: "13", alt: ["treize"], e: "13 % des enfants d'employés et d'ouvriers (2018-2020)." }
      ]
    },

    "socio-mobilite": {
      qcm: [
        { q: "La mobilité sociale intergénérationnelle doit être distinguée de la mobilité géographique et de la mobilité :", o: ["professionnelle", "structurelle", "ascendante", "nette"], c: 0, e: "Le programme distingue la mobilité sociale intergénérationnelle des autres formes : mobilité géographique et mobilité professionnelle." },
        { q: "La mobilité ascendante correspond à une situation où la position de l'enfant est jugée :", o: ["inférieure à celle du parent", "supérieure à celle du parent", "identique à celle du parent", "indépendante de celle du parent"], c: 1, e: "Mobilité ascendante : la position de l'enfant est supérieure à celle du parent ; l'inverse est le déclassement." },
        { q: "La part de la mobilité observée qui subsiste une fois retirée la mobilité structurelle est la mobilité :", o: ["forcée", "nette (de circulation)", "géographique", "absolue"], c: 1, e: "Mobilité observée = mobilité structurelle + mobilité nette dite de circulation." },
        { q: "Parmi les facteurs explicatifs de la mobilité sociale retenus par le programme figure :", o: ["le taux de change", "l'évolution de la structure socioprofessionnelle, les niveaux de formation et les configurations familiales", "la politique monétaire de la BCE", "le coefficient de Gini"], c: 1, e: "La mobilité s'explique par l'évolution de la structure socioprofessionnelle, les niveaux de formation et les ressources et configurations familiales." },
        { q: "La table de recrutement permet de répondre à la question :", o: ["que deviennent les enfants issus d'une origine donnée ?", "quelle est l'origine sociale des individus occupant une position donnée ?", "combien de PCS existe-t-il ?", "quel est le revenu médian des cadres ?"], c: 1, e: "La table de recrutement (lecture en colonnes) renseigne sur l'origine sociale de ceux qui occupent une position donnée." },
        { q: "D'après les données mobilisées en cours, un enfant de cadre a, par rapport à un enfant d'ouvrier, environ :", o: ["la même probabilité de devenir cadre", "2 fois plus de chances de devenir cadre", "9 fois plus de chances de devenir cadre", "100 fois plus de chances de devenir cadre"], c: 2, e: "Un enfant de cadre a environ 9 fois plus de chances qu'un enfant d'ouvrier de devenir cadre." },
        { q: "Affirmer que la mobilité structurelle est une mobilité « forcée » revient à dire qu'elle est imposée par :", o: ["la volonté individuelle des actifs", "la transformation de la structure des emplois dans le temps", "le niveau de diplôme des parents", "la fluidité sociale"], c: 1, e: "La mobilité structurelle découle de la déformation de la structure des emplois (ex. tertiarisation), indépendamment des choix individuels." },
        { q: "La fluidité sociale est dite parfaite lorsque :", o: ["tout le monde est immobile socialement", "la position sociale est totalement indépendante de l'origine sociale", "la mobilité observée est nulle", "seule la mobilité structurelle subsiste"], c: 1, e: "La fluidité mesure le degré d'indépendance entre origine et position ; elle est maximale quand la position ne dépend plus de l'origine." }
      ],
      vf: [
        { s: "La mobilité professionnelle et la mobilité géographique sont des formes de mobilité distinctes de la mobilité sociale intergénérationnelle.", a: true, e: "Le programme demande de distinguer la mobilité sociale intergénérationnelle des mobilités géographique et professionnelle." },
        { s: "La mobilité observée comporte une composante structurelle liée à l'évolution de la structure des emplois.", a: true, e: "Une partie de la mobilité observée est structurelle : elle vient de la transformation des emplois." },
        { s: "Les tables de mobilité ne présentent ni intérêt ni limite comme instrument de mesure.", a: false, e: "Le programme demande justement d'en comprendre les principes de construction, les intérêts ET les limites." },
        { s: "L'analyse de la mobilité fait apparaître des spécificités selon le sexe, entre la mobilité des hommes et celle des femmes.", a: true, e: "Les tables de mobilité permettent de retrouver les spécificités de la mobilité sociale des hommes et des femmes." },
        { s: "La mobilité ascendante désigne une position de l'enfant inférieure à celle de son parent.", a: false, e: "C'est la mobilité descendante (déclassement) ; la mobilité ascendante correspond à une position supérieure." },
        { s: "Les tables de mobilité sont construites à partir de l'enquête Formation et Qualification Professionnelle de l'INSEE.", a: true, e: "L'INSEE construit les tables de mobilité à partir de l'enquête FQP." }
      ],
      trous: [
        { t: "La position de l'enfant jugée supérieure à celle de son parent correspond à une mobilité _____.", a: "ascendante", e: "Mobilité ascendante (par opposition à descendante)." },
        { t: "Une fois retirée la mobilité structurelle, la mobilité restante est dite mobilité nette ou de _____.", a: "circulation", e: "Mobilité nette, dite de circulation." },
        { t: "La table qui se lit en colonnes et indique l'origine sociale de ceux qui occupent une position donnée est la table de _____.", a: "recrutement", e: "Table de recrutement (lecture en colonnes)." },
        { t: "Le changement de position d'un individu au cours de sa propre vie active est la mobilité _____.", a: "intragénérationnelle", alt: ["intragenerationnelle"], e: "Mobilité intragénérationnelle, distincte de l'intergénérationnelle." },
        { t: "L'enquête de l'INSEE servant à construire les tables de mobilité est l'enquête _____ (sigle).", a: "FQP", e: "Formation et Qualification Professionnelle." },
        { t: "Une situation où l'enfant reste dans le même groupe social que son parent est une situation de _____ sociale.", a: "reproduction", e: "Reproduction sociale (immobilité)." }
      ]
    },

    "socio-travail": {
      qcm: [
        { q: "Parmi les descripteurs de la qualité de l'emploi retenus par le programme figure :", o: ["le seul montant du salaire", "la sécurité économique, l'horizon de carrière et le potentiel de formation", "uniquement le statut juridique", "le nombre de salariés de l'entreprise"], c: 1, e: "La qualité de l'emploi se décrit par plusieurs critères : conditions de travail, salaire, sécurité économique, carrière, formation, variété des tâches." },
        { q: "Dans l'organisation taylorienne, la division horizontale du travail correspond à :", o: ["la séparation entre conception et exécution", "la parcellisation des tâches", "la hausse des salaires", "le travail en équipes autonomes"], c: 1, e: "Division horizontale = parcellisation des tâches ; division verticale = séparation conception/exécution." },
        { q: "La hausse des salaires à « 5 dollars par jour » est une caractéristique associée à :", o: ["Frederick Taylor", "Henry Ford", "Georges Friedmann", "Émile Durkheim"], c: 1, e: "Ford instaure le travail à la chaîne et une hausse des salaires (5 $/jour) pour soutenir la consommation de masse." },
        { q: "Selon Durkheim, l'intégration sociale par le travail repose sur une solidarité :", o: ["mécanique, fondée sur la ressemblance", "organique, née de l'interdépendance des fonctions", "financière, fondée sur le revenu", "hiérarchique, fondée sur le grade"], c: 1, e: "Pour Durkheim, la division du travail engendre une solidarité organique : l'interdépendance des fonctions intègre les individus." },
        { q: "Le statut d'emploi distingue principalement :", o: ["les hommes et les femmes", "les indépendants (non-salariés) et les salariés", "les jeunes et les seniors", "les diplômés et les non-diplômés"], c: 1, e: "Le statut d'emploi oppose les non-salariés (indépendants, sans subordination) aux salariés (lien de subordination, contrat de travail)." },
        { q: "Le développement du numérique tend à accroître le risque de :", o: ["disparition totale du chômage", "polarisation des emplois", "fin du salariat", "baisse générale des qualifications"], c: 1, e: "Le numérique brouille les frontières du travail, transforme les relations d'emploi et accroît la polarisation des emplois." },
        { q: "En France, le salariat représente environ :", o: ["50 % de l'emploi total", "70 % de l'emploi total", "88 à 90 % de l'emploi total", "100 % de l'emploi total"], c: 2, e: "Le salariat représente environ 88 à 90 % de l'emploi total en France (INSEE)." },
        { q: "Dans le modèle post-taylorien, la « recomposition des tâches » s'oppose à :", o: ["la parcellisation taylorienne du travail", "la hausse des salaires", "la stabilité de l'emploi", "le management participatif"], c: 0, e: "Le post-taylorisme recompose les tâches (polyvalence) en rupture avec la parcellisation du taylorisme." }
      ],
      vf: [
        { s: "La variété des tâches fait partie des descripteurs de la qualité de l'emploi.", a: true, e: "La qualité de l'emploi inclut conditions de travail, salaire, sécurité, carrière, formation et variété des tâches." },
        { s: "Les évolutions des formes d'emploi rendent plus nettes les frontières entre emploi, chômage et inactivité.", a: false, e: "C'est l'inverse : ces évolutions rendent ces frontières plus incertaines." },
        { s: "Le télétravail est un exemple de brouillage des frontières entre travail et hors-travail.", a: true, e: "Le numérique, via le télétravail, brouille la frontière entre travail et hors-travail." },
        { s: "L'évolution des formes d'organisation du travail n'a que des effets positifs sur les conditions de travail.", a: false, e: "Le programme souligne des effets à la fois positifs ET négatifs sur les conditions de travail." },
        { s: "La précarisation, un chômage élevé persistant et la polarisation des emplois peuvent affaiblir le pouvoir intégrateur du travail.", a: true, e: "Ces évolutions de l'emploi peuvent affaiblir la fonction d'intégration sociale du travail." },
        { s: "Le fordisme se distingue du taylorisme notamment par le travail à la chaîne et la hausse des salaires.", a: true, e: "Le fordisme prolonge le taylorisme en ajoutant le travail à la chaîne et une hausse des salaires." }
      ],
      trous: [
        { t: "Dans l'organisation taylorienne, la parcellisation des tâches correspond à la division _____ du travail.", a: "horizontale", e: "Division horizontale (parcellisation) ; la division verticale sépare conception et exécution." },
        { t: "Selon Durkheim, l'interdépendance des fonctions dans les sociétés modernes produit une solidarité _____.", a: "organique", e: "Solidarité organique née de la division du travail." },
        { t: "Le processus reliant l'individu à la société par des liens, notamment le travail, est l'_____ sociale.", a: "intégration", alt: ["integration"], e: "Intégration sociale par le travail." },
        { t: "Le travailleur rémunéré autrement que par un salaire et sans lien de subordination relève du _____.", a: "non-salariat", alt: ["non salariat", "nonsalariat"], e: "Non-salariat (indépendants)." },
        { t: "Le critère de qualité de l'emploi désignant les perspectives d'évolution professionnelle est l'horizon de _____.", a: "carrière", alt: ["carriere"], e: "Horizon de carrière, descripteur de la qualité de l'emploi." },
        { t: "Le seuil retenu par le BIT pour être considéré comme « en emploi » est d'au moins une _____ de travail rémunéré sur la semaine.", a: "heure", e: "Au moins une heure de travail rémunéré durant la semaine de référence (BIT)." }
      ]
    },

    "socio-engagement": {
      qcm: [
        { q: "L'action collective se définit comme :", o: ["une action menée en commun par un groupe pour défendre une cause ou des intérêts partagés", "le fait de voter à une élection nationale", "une décision individuelle de consommation", "la pression d'une entreprise sur l'État"], c: 0, e: "L'action collective est une action menée en commun par un groupe pour défendre une cause ou des intérêts partagés." },
        { q: "Quel auteur a écrit « La Logique de l'action collective » (1965) ?", o: ["Charles Tilly", "Mancur Olson", "Daniel Gaxie", "Alexis de Tocqueville"], c: 1, e: "C'est Mancur Olson qui, dans « La Logique de l'action collective » (1965), montre que l'individu rationnel tend à être passager clandestin." },
        { q: "Les rétributions symboliques de l'engagement ont été théorisées par :", o: ["Mancur Olson", "Charles Tilly", "Daniel Gaxie", "Alexis de Tocqueville"], c: 2, e: "Daniel Gaxie, avec les « rétributions du militantisme », explique l'engagement par des gratifications symboliques au-delà du calcul coûts-avantages." },
        { q: "Le militantisme se distingue du simple vote parce qu'il suppose :", o: ["un engagement actif et durable au service d'une cause", "une obligation légale de participer", "uniquement un achat orienté par ses convictions", "l'absence de toute organisation"], c: 0, e: "Le militantisme est un engagement actif et durable au service d'une cause, d'un parti, d'un syndicat ou d'une association." },
        { q: "Quelle formulation correspond à un répertoire d'action collective au sens de Tilly ?", o: ["la liste des partis présents à une élection", "l'ensemble des moyens d'action d'un groupe à une époque (manifestation, grève, pétition)", "le programme économique d'un syndicat", "les variables sociodémographiques des militants"], c: 1, e: "Le répertoire d'action collective (Tilly) est l'ensemble des moyens d'action d'un groupe à une époque : manifestation, grève, pétition." },
        { q: "Au 1er tour des législatives de juin 2022, l'abstention a atteint :", o: ["32,5 %", "42,5 %", "52,5 %", "62,5 %"], c: 2, e: "L'abstention au 1er tour des législatives de juin 2022 a atteint 52,5 %, un record sous la Ve République." },
        { q: "Parmi les variables qui structurent l'engagement politique figurent notamment :", o: ["la CSP, le diplôme, l'âge et le sexe", "le seul niveau de patrimoine financier", "uniquement le lieu de résidence", "la nationalité d'origine exclusivement"], c: 0, e: "L'engagement dépend de variables sociodémographiques : catégorie socioprofessionnelle, diplôme, âge et génération, sexe." },
        { q: "Un mouvement social et un groupe d'intérêt se distinguent en ce que le groupe d'intérêt :", o: ["vise un changement social global et durable", "exerce une pression sur les pouvoirs publics sans chercher à conquérir le pouvoir", "ne s'organise jamais", "est par nature post-industriel"], c: 1, e: "Le groupe d'intérêt exerce une pression sur les pouvoirs publics pour défendre ses intérêts, sans chercher à conquérir le pouvoir, alors que le mouvement social vise un changement social." }
      ],
      vf: [
        { s: "Le passager clandestin bénéficie des résultats d'une action collective sans en supporter les coûts.", a: true, e: "C'est sa définition : il profite du bien public produit par l'action collective sans y contribuer." },
        { s: "Les incitations sélectives sont des avantages ou sanctions ouverts à tous, participants comme non-participants.", a: false, e: "Faux : les incitations sélectives sont réservées aux seuls participants, ce qui pousse à s'engager malgré le paradoxe d'Olson." },
        { s: "La structure des opportunités politiques peut aussi bien faciliter que freiner une mobilisation.", a: true, e: "Ce sont les facteurs institutionnels et politiques qui facilitent ou freinent une mobilisation." },
        { s: "Pour Tocqueville, les associations affaiblissent les citoyens et empêchent tout contre-pouvoir.", a: false, e: "Au contraire, Tocqueville fait de « l'art de s'associer » une école de la citoyenneté et un contre-pouvoir." },
        { s: "La consommation engagée englobe le boycott, l'achat militant et l'achat équitable.", a: true, e: "Elle consiste à orienter ses achats selon ses convictions pour peser sur producteurs ou pouvoirs publics." },
        { s: "Un mouvement social est par définition une action collective brève et ponctuelle.", a: false, e: "Faux : le mouvement social est une action collective organisée et durable visant un changement social." }
      ],
      trous: [
        { t: "Le fait de ne pas voter alors que l'on est inscrit sur les listes électorales est l'_____.", a: "abstention", e: "Abstention : ne pas voter tout en étant inscrit sur les listes électorales." },
        { t: "L'individu qui bénéficie d'un bien public sans en supporter les coûts est un _____ clandestin.", a: "passager", e: "Passager clandestin (free rider)." },
        { t: "La participation à la vie politique sous des formes variées (vote, militantisme, consommation engagée) est l'engagement _____.", a: "politique", e: "Engagement politique." },
        { t: "Les facteurs institutionnels et politiques qui facilitent ou freinent une mobilisation forment la structure des _____ politiques.", a: "opportunités", alt: ["opportunites"], e: "Structure des opportunités politiques." },
        { t: "Le fait d'orienter ses achats selon ses convictions, par exemple par un boycott, est la _____ engagée.", a: "consommation", e: "Consommation engagée." },
        { t: "Selon Olson, un individu rationnel n'a pas intérêt à participer à une action dont il profitera de toute façon : c'est le paradoxe de l'action _____.", a: "collective", e: "Paradoxe de l'action collective (Olson)." }
      ]
    },

    "rc-justice": {
      qcm: [
        { q: "Le coefficient de Gini est directement lié à :", o: ["la courbe de Lorenz", "le taux de croissance du PIB", "le rapport inter-décile uniquement", "la corrélation parents-enfants"], c: 0, e: "Le coefficient de Gini se déduit de la courbe de Lorenz (aire entre la courbe et la diagonale d'égalité parfaite)." },
        { q: "La conception de la justice qui juge une société à la somme totale des utilités est :", o: ["le libertarisme", "l'utilitarisme", "l'égalitarisme strict", "l'égalitarisme libéral"], c: 1, e: "L'utilitarisme cherche à maximiser l'utilité (le bonheur) totale, sans s'intéresser à sa répartition." },
        { q: "Le principe de différence, selon lequel les inégalités justes sont celles qui bénéficient aux plus défavorisés, relève de :", o: ["l'utilitarisme", "le libertarisme", "l'égalitarisme libéral (Rawls)", "l'égalitarisme strict"], c: 2, e: "L'égalitarisme libéral de Rawls admet les inégalités si elles bénéficient aux plus défavorisés (principe de différence / maximin)." },
        { q: "Dire que les inégalités sont « multiformes » signifie qu'elles :", o: ["touchent plusieurs domaines (revenu, patrimoine, éducation, santé…)", "diminuent toujours dans le temps", "se limitent au seul revenu", "ne concernent que le patrimoine"], c: 0, e: "Les inégalités économiques et sociales sont multiformes (plusieurs domaines) et cumulatives (elles se renforcent)." },
        { q: "Parmi les outils STATIQUES de mesure des inégalités figure :", o: ["la corrélation de revenu parents-enfants", "le rapport inter-quantiles (ex. D9/D1)", "le taux de variation du PIB", "le coefficient multiplicateur"], c: 1, e: "Les outils statiques sont le rapport inter-quantiles, la courbe de Lorenz, le coefficient de Gini et le top 1 % ; la corrélation parents-enfants est dynamique." },
        { q: "Les trois formes d'égalité distinguées par le programme sont :", o: ["l'égalité des droits, des chances et des situations", "l'égalité fiscale, sociale et politique", "l'égalité de revenu, de patrimoine et de santé", "l'égalité locale, nationale et mondiale"], c: 0, e: "Les formes d'égalité (droits, chances, situations) renvoient à des conceptions différentes de la justice sociale." },
        { q: "L'action des pouvoirs publics en matière de justice sociale est notamment discutée en termes de risque d'effets pervers, c'est-à-dire :", o: ["de désincitations (au travail ou à l'effort)", "de hausse mécanique de la croissance", "de baisse automatique des prix", "de suppression de l'impôt"], c: 0, e: "Le débat porte sur l'efficacité, la légitimité et le risque d'effets pervers comme les désincitations au travail ou à l'effort." },
        { q: "L'outil DYNAMIQUE de mesure des inégalités retenu par le programme est :", o: ["la courbe de Lorenz", "le coefficient de Gini", "la corrélation de revenu entre parents et enfants", "le top 1 %"], c: 2, e: "La corrélation de revenu parents-enfants mesure les inégalités de manière dynamique (transmission intergénérationnelle)." }
      ],
      vf: [
        { s: "L'action des pouvoirs publics en matière de justice sociale s'exerce sous contrainte de financement.", a: true, e: "Le programme rappelle que cette action s'exerce sous contrainte de financement." },
        { s: "Le libertarisme privilégie la redistribution maximale des revenus.", a: false, e: "Faux : le libertarisme privilégie les droits de propriété et les échanges libres, pas la redistribution." },
        { s: "La légitimité de la redistribution se discute notamment à travers le consentement à l'impôt.", a: true, e: "Le débat de légitimité porte notamment sur le consentement à l'impôt." },
        { s: "Un coefficient de Gini égal à 0 correspond à une situation d'égalité parfaite.", a: true, e: "Gini varie entre 0 (égalité parfaite) et 1 (inégalité maximale)." },
        { s: "Les inégalités cumulatives se compensent les unes les autres.", a: false, e: "Faux : cumulatives signifie qu'elles se renforcent mutuellement, et non qu'elles se compensent." },
        { s: "La fiscalité, la protection sociale et les services collectifs sont des leviers de la redistribution.", a: true, e: "La redistribution s'appuie sur la fiscalité, la protection sociale et les services collectifs." }
      ],
      trous: [
        { t: "La conception de la justice qui vise une égalité réelle des situations est l'égalitarisme _____.", a: "strict", e: "Égalitarisme strict : égalité des situations (des conditions)." },
        { t: "La représentation graphique de la répartition cumulée d'un revenu dans la population est la courbe de _____.", a: "Lorenz", e: "Courbe de Lorenz." },
        { t: "La conception de la justice qui admet les inégalités si elles profitent aux plus défavorisés est l'égalitarisme _____.", a: "libéral", alt: ["liberal"], e: "Égalitarisme libéral (Rawls), principe de différence." },
        { t: "Les inégalités qui se renforcent mutuellement dans plusieurs domaines sont dites multiformes et _____.", a: "cumulatives", e: "Inégalités multiformes et cumulatives." },
        { t: "L'action publique réduisant les inégalités par la fiscalité et la protection sociale est la _____.", a: "redistribution", e: "Redistribution." },
        { t: "L'outil dynamique mesurant la transmission des inégalités est la corrélation de revenu entre parents et _____.", a: "enfants", e: "Corrélation de revenu parents-enfants (outil dynamique)." }
      ]
    },

    "rc-environnement": {
      qcm: [
        { q: "L'inscription d'une question environnementale à l'ordre des priorités politiques est appelée :", o: ["sa mise à l'agenda politique", "une externalité positive", "une délocalisation", "un marché de quotas"], c: 0, e: "Un problème public est construit par des acteurs puis inscrit à l'agenda politique (mise à l'agenda)." },
        { q: "Quel instrument de l'action publique consiste à imposer des normes ou des interdictions ?", o: ["la réglementation", "la subvention à l'innovation verte", "le marché de quotas d'émission", "la taxation"], c: 0, e: "La réglementation impose des normes ou interdictions ; elle se distingue de la taxation, des quotas et des subventions." },
        { q: "Faire payer au pollueur le coût de l'externalité qu'il génère, c'est :", o: ["internaliser l'externalité", "créer un bien commun", "supprimer la réglementation", "subventionner la pollution"], c: 0, e: "L'objectif d'instruments comme la taxe est d'internaliser l'externalité, c'est-à-dire de faire payer au pollueur le coût imposé à autrui." },
        { q: "Un bien commun se caractérise par le fait d'être :", o: ["exclusif et non rival", "non exclusif mais rival", "ni exclusif ni rival", "exclusif et rival"], c: 1, e: "Le bien commun est non exclusif (chacun peut l'utiliser) mais rival (son usage le dégrade), d'où le risque de surexploitation." },
        { q: "Selon le programme, les accords internationaux sur l'environnement sont contraints notamment par :", o: ["les inégalités de développement entre pays", "l'absence d'externalités", "l'existence d'un gouvernement mondial", "la suppression des biens communs"], c: 0, e: "En présence d'un bien commun, les accords sont contraints par les stratégies de passager clandestin et les inégalités de développement entre pays." },
        { q: "Les relations entre les acteurs des questions environnementales sont des relations :", o: ["de coopération et de conflit", "de pure coopération", "de pur conflit", "d'indifférence totale"], c: 0, e: "Pouvoirs publics, ONG, entreprises, experts, partis et mouvements citoyens entretiennent des relations de coopération et de conflit." },
        { q: "Quel mécanisme laisse s'échanger des droits à polluer sous un plafond fixé par les pouvoirs publics ?", o: ["la subvention à l'innovation verte", "le marché de quotas d'émission", "la réglementation", "la corrélation parents-enfants"], c: 1, e: "Le marché de quotas d'émission plafonne les émissions totales et laisse s'échanger des droits à polluer." },
        { q: "La subvention à l'innovation verte vise principalement à :", o: ["encourager le développement de technologies propres", "interdire toute émission de CO₂", "taxer directement les ménages", "supprimer l'action publique"], c: 0, e: "C'est un instrument incitatif encourageant l'innovation et les technologies propres face aux externalités négatives." }
      ],
      vf: [
        { s: "Un problème public résulte d'une construction par des acteurs, et non d'une donnée naturelle évidente.", a: true, e: "Le problème public est une question construite par des acteurs comme nécessitant une action publique." },
        { s: "Réglementation, taxation, marchés de quotas et subvention à l'innovation verte présentent chacun des avantages et des limites.", a: true, e: "Le programme souligne que ces instruments ont des avantages et des limites et peuvent se heurter à des dysfonctionnements." },
        { s: "L'action publique pour l'environnement se limite à l'échelle nationale.", a: false, e: "Faux : elle articule plusieurs échelles, de la locale à la mondiale (locale, nationale, européenne, mondiale)." },
        { s: "La stratégie de passager clandestin facilite la conclusion des accords internationaux sur le climat.", a: false, e: "Au contraire, le passager clandestin freine les accords : il profite des efforts des autres sans contribuer." },
        { s: "Les experts comptent parmi les acteurs qui participent à la construction des questions environnementales.", a: true, e: "Les acteurs incluent pouvoirs publics, ONG, entreprises, experts, partis et mouvements citoyens." },
        { s: "Une externalité négative est correctement prise en compte par le marché sans intervention publique.", a: false, e: "Faux : c'est une défaillance de marché ; le coût imposé à autrui n'est pas compensé sans intervention." }
      ],
      trous: [
        { t: "Les pouvoirs publics, ONG, entreprises, experts, partis et mouvements citoyens sont les _____ de l'environnement.", a: "acteurs", e: "Acteurs de l'environnement, en relation de coopération et de conflit." },
        { t: "L'instrument qui impose des normes ou des interdictions pour limiter la pollution est la _____.", a: "réglementation", alt: ["reglementation"], e: "Réglementation (instrument de l'action publique)." },
        { t: "L'acteur qui profite d'un bien commun sans contribuer à son financement freine les accords : c'est le passager _____.", a: "clandestin", e: "Passager clandestin, frein aux accords internationaux." },
        { t: "L'instrument incitatif qui encourage les technologies propres est la _____ à l'innovation verte.", a: "subvention", e: "Subvention à l'innovation verte." },
        { t: "Le coût imposé à un tiers sans compensation par le marché, comme les émissions de CO₂, est une externalité _____.", a: "négative", alt: ["negative"], e: "Externalité négative." },
        { t: "L'action publique pour l'environnement articule différentes échelles, de la locale à la _____.", a: "mondiale", e: "Échelles d'action : locale, nationale, européenne, mondiale." }
      ]
    }

  };

  var Q = window.SES_QUIZ = window.SES_QUIZ || {};
  for (var k in add) {
    if (!Q[k]) Q[k] = { qcm: [], vf: [], trous: [] };
    ["qcm", "vf", "trous"].forEach(function (t) {
      Q[k][t] = (Q[k][t] || []).concat(add[k][t] || []);
    });
  }
})();
