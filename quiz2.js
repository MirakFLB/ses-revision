/* =====================================================================
   SES Terminale — Banque de questions SUPPLÉMENTAIRE (quiz2)
   ---------------------------------------------------------------------
   Questions générées et ancrées sur content.js / data.js (contenu déjà
   sourcé), sans doublon avec quiz.js. Fusionnées dans window.SES_QUIZ.
   ===================================================================== */
(function () {
  "use strict";
  var add = {

    "eco-croissance": {
      qcm: [
        { q: "Selon Robert Solow, la part de la croissance inexpliquée par l'accumulation des facteurs est appelée :", o: ["Le multiplicateur keynésien", "Le résidu (assimilé à la PGF)", "Le capital humain", "La destruction créatrice"], c: 1, e: "Dans le modèle de Solow (1956), à progrès technique exogène, la part inexpliquée de la croissance est le « résidu de Solow », proche de la PGF." },
        { q: "Quel auteur associe la croissance endogène à des activités intentionnelles de R&D source de rendements croissants ?", o: ["Adam Smith", "Paul Romer", "David Ricardo", "Joseph Schumpeter"], c: 1, e: "Romer théorise la croissance endogène : le progrès technique résulte d'activités intentionnelles (R&D, connaissances) génératrices de rendements croissants." },
        { q: "Le capital humain, au sens de l'OCDE, désigne :", o: ["Le nombre total de salariés d'un pays", "L'ensemble des connaissances, qualifications et compétences rendant un individu plus productif", "Le stock de machines et d'équipements", "Les ressources naturelles disponibles"], c: 1, e: "Le capital humain = connaissances, qualifications et compétences qui rendent l'individu plus productif ; c'est l'un des moteurs du progrès technique endogène." },
        { q: "Une externalité se définit comme :", o: ["Un effet d'un agent sur le bien-être d'un autre sans contrepartie marchande", "Une exportation de biens et services", "Un impôt sur la production", "Un gain de productivité interne à l'entreprise"], c: 0, e: "L'externalité est un effet positif ou négatif de l'activité d'un agent sur autrui sans contrepartie marchande (ex. pollution, diffusion des connaissances)." },
        { q: "Pour Philippe Aghion (avec Howitt), l'innovation dans une croissance endogène dépend notamment :", o: ["Du seul hasard scientifique", "Des institutions et de l'éducation", "De la quantité de ressources naturelles uniquement", "De la politique monétaire de la banque centrale"], c: 1, e: "Aghion intègre la destruction créatrice dans une croissance endogène où l'innovation dépend des institutions et de l'éducation." },
        { q: "La productivité du travail se mesure par :", o: ["Le rapport de la valeur ajoutée en volume au facteur travail", "Le nombre d'entreprises créées", "Le rapport du capital au travail", "Le taux de chômage des actifs"], c: 0, e: "La productivité du travail est le rapport de la valeur ajoutée (en volume) au facteur travail (heures ou personnes en emploi)." }
      ],
      vf: [
        { s: "Pour Schumpeter, c'est l'entrepreneur qui porte l'innovation, moteur du capitalisme.", a: true, e: "Schumpeter place l'entrepreneur innovateur au cœur de la destruction créatrice, moteur du capitalisme." },
        { s: "Dans le modèle de Solow, le progrès technique est endogène.", a: false, e: "Faux : chez Solow (1956), le progrès technique est exogène ; c'est Romer et Aghion qui le rendent endogène." },
        { s: "L'innovation est l'introduction sur le marché d'un produit ou d'un procédé nouveau.", a: true, e: "C'est la définition même de l'innovation, à distinguer de l'invention." },
        { s: "Une croissance qui répond aux besoins du présent sans compromettre ceux des générations futures est dite extensive.", a: false, e: "Faux : c'est la définition de la croissance soutenable, pas de la croissance extensive (accumulation des facteurs)." }
      ],
      trous: [
        { t: "Les connaissances, qualifications et compétences qui rendent un individu plus productif forment le capital _____.", a: "humain", e: "Capital humain (déf. OCDE), moteur du progrès technique endogène." },
        { t: "L'institution qui garantit à l'innovateur l'appropriation des fruits de son innovation est l'ensemble des droits de _____.", a: "propriété", alt: ["propriete"], e: "Les droits de propriété incitent à investir et innover." },
        { t: "Le modèle de croissance de 1956 à progrès technique exogène a été élaboré par Robert _____.", a: "Solow", e: "Robert Solow et son « résidu »." },
        { t: "Un effet d'un agent sur le bien-être d'un autre sans contrepartie marchande est une _____.", a: "externalité", alt: ["externalite"], e: "Externalité positive ou négative." }
      ]
    },

    "eco-commerce": {
      qcm: [
        { q: "Selon Adam Smith, un pays a un avantage absolu lorsqu'il :", o: ["Produit un bien à un coût plus faible que les autres pays", "A le coût relatif le plus faible sans avantage de coût", "Possède le plus de facteurs de production", "Limite ses importations par des droits de douane"], c: 0, e: "L'avantage absolu (Smith) : produire un bien à un coût plus faible que les autres, puis se spécialiser et échanger le reste." },
        { q: "La théorie d'Heckscher-Ohlin-Samuelson (HOS) affirme qu'un pays se spécialise dans la production :", o: ["Utilisant intensément le facteur dont il est le mieux doté", "Où sa population est la plus nombreuse", "Réclamant le plus de capital quel que soit le pays", "Imposant le moins de taxes"], c: 0, e: "HOS : la spécialisation découle des dotations factorielles ; chaque pays se spécialise là où il utilise intensément le facteur dont il est le mieux doté." },
        { q: "Pour Paul Krugman, le commerce entre pays comparables s'explique surtout par :", o: ["Les écarts de dotations factorielles", "Les économies d'échelle et le goût pour la diversité", "Les seuls avantages absolus", "Les barrières protectionnistes"], c: 1, e: "La nouvelle théorie du commerce (Krugman, Nobel 2008) : économies d'échelle et goût pour la diversité expliquent le commerce entre pays semblables." },
        { q: "Une firme multinationale (FMN), au sens de l'INSEE, est un groupe possédant :", o: ["Au moins une unité légale en France et une à l'étranger", "Uniquement des filiales hors d'Europe", "Plus de mille salariés", "Son siège social à l'étranger"], c: 0, e: "Définition INSEE : une FMN possède au moins une unité légale en France et une à l'étranger." },
        { q: "La délocalisation désigne :", o: ["Le transfert par une firme d'une partie de sa production vers l'étranger", "L'achat de biens étrangers par les ménages", "La fermeture définitive d'une entreprise", "La hausse des droits de douane"], c: 0, e: "La délocalisation est le transfert par une firme d'une partie de sa production vers un pays étranger." },
        { q: "Le commerce inter-branche porte sur :", o: ["Des produits de branches différentes", "Des produits similaires de la même branche", "Les seuls services financiers", "Les échanges à l'intérieur d'un même pays"], c: 0, e: "Le commerce inter-branche porte sur des produits de branches différentes ; l'intra-branche sur des biens similaires." }
      ],
      vf: [
        { s: "En France, les FMN représentent moins de 1 % des entreprises mais 55 % de la valeur ajoutée (2021).", a: true, e: "Données INSEE 2021 : moins de 1 % des entreprises, mais 42 % de l'emploi et 55 % de la valeur ajoutée." },
        { s: "La différenciation des produits suppose que deux produits proches soient jugés identiques par les consommateurs.", a: false, e: "Faux : la différenciation fait justement que des produits proches ne sont PAS jugés identiques." },
        { s: "La compétitivité hors-prix est aussi qualifiée de compétitivité structurelle.", a: true, e: "La compétitivité hors-prix (qualité, innovation, service) est dite structurelle." },
        { s: "L'avantage comparatif a été théorisé par Adam Smith.", a: false, e: "Faux : l'avantage comparatif est de Ricardo ; Smith théorise l'avantage absolu." }
      ],
      trous: [
        { t: "La quantité de facteurs (travail, capital, ressources) dont un pays dispose est sa dotation _____.", a: "factorielle", e: "Dotation factorielle, au fondement de la théorie HOS." },
        { t: "La capacité à gagner des parts de marché grâce à des prix plus bas est la compétitivité-_____.", a: "prix", e: "Compétitivité-prix (jouant sur les coûts)." },
        { t: "Le groupe possédant au moins une unité légale en France et une à l'étranger est une firme _____.", a: "multinationale", e: "Firme multinationale (FMN), déf. INSEE." },
        { t: "L'auteur de la nouvelle théorie du commerce fondée sur les économies d'échelle est Paul _____.", a: "Krugman", e: "Paul Krugman, Nobel 2008." }
      ]
    },

    "eco-chomage": {
      qcm: [
        { q: "La population active regroupe :", o: ["Les personnes en emploi et les chômeurs au sens du BIT", "Toutes les personnes de 15 ans ou plus", "Les seuls salariés du secteur privé", "Les actifs occupés et les retraités"], c: 0, e: "La population active = personnes en emploi + chômeurs au sens du BIT." },
        { q: "La flexisécurité combine :", o: ["Flexibilité des contrats et sécurité du revenu entre deux emplois", "Salaire minimum élevé et interdiction des licenciements", "Plein emploi garanti par l'État", "Suppression de l'assurance chômage"], c: 0, e: "La flexisécurité associe flexibilité des contrats, sécurité du revenu entre deux emplois et accompagnement vers le retour à l'emploi." },
        { q: "Le chômage frictionnel correspond :", o: ["Au temps de recherche d'un emploi adéquat", "À une insuffisance durable de la demande globale", "À un ralentissement saisonnier de l'activité", "À la fermeture définitive d'usines"], c: 0, e: "Le chômage frictionnel est un chômage de court terme correspondant au temps de recherche d'un emploi adéquat." },
        { q: "Au 4e trimestre 2025, le taux de chômage (BIT) en France s'établit à environ :", o: ["4,5 % de la population active", "7,9 % de la population active", "10,5 % de la population active", "15 % de la population active"], c: 1, e: "Selon l'INSEE, le taux de chômage au sens du BIT est de 7,9 % de la population active au 4e trimestre 2025." },
        { q: "Un défaut d'appariement sur le marché du travail :", o: ["Crée du chômage structurel", "Supprime le chômage frictionnel", "Relève uniquement de la conjoncture", "Concerne seulement les retraités"], c: 0, e: "L'appariement est la mise en correspondance offre/demande de travail ; un défaut d'appariement crée du chômage structurel." },
        { q: "Le sous-emploi concerne notamment :", o: ["Les personnes à temps partiel souhaitant travailler plus et disponibles", "Les cadres dirigeants", "Les chômeurs de longue durée exclusivement", "Les inactifs sans projet professionnel"], c: 0, e: "Le sous-emploi vise les personnes à temps partiel souhaitant travailler plus et disponibles, ou en chômage technique." }
      ],
      vf: [
        { s: "Le SMIC brut horaire s'élève à 12,02 € au 1er janvier 2026.", a: true, e: "Donnée INSEE : SMIC brut horaire de 12,02 € au 1er janvier 2026." },
        { s: "Le salaire minimum, fixé au-dessus de l'équilibre, peut créer du chômage.", a: true, e: "Comme institution, le SMIC fixé au-dessus de l'équilibre du marché peut créer du chômage." },
        { s: "Le chômage frictionnel est un chômage durable de longue durée.", a: false, e: "Faux : le chômage frictionnel est de court terme (temps de recherche d'un emploi)." },
        { s: "L'allègement du coût du travail est l'une des politiques de lutte contre le chômage.", a: true, e: "Parmi les politiques : soutien de la demande, allègement du coût du travail, formation, flexibilisation." }
      ],
      trous: [
        { t: "Le rapport entre le nombre de personnes en emploi et la population correspondante est le taux d'_____.", a: "emploi", e: "Taux d'emploi (à distinguer du taux de chômage)." },
        { t: "Les personnes sans emploi souhaitant travailler mais non comptées comme chômeurs BIT forment le _____ du chômage.", a: "halo", e: "Halo du chômage." },
        { t: "La mise en correspondance de l'offre et de la demande de travail est l'_____.", a: "appariement", e: "Un défaut d'appariement crée du chômage structurel." },
        { t: "Le système combinant flexibilité des contrats et sécurité du revenu entre deux emplois est la _____.", a: "flexisécurité", alt: ["flexisecurite"], e: "Flexisécurité (modèle de type danois)." }
      ]
    },

    "eco-crises": {
      qcm: [
        { q: "Que désigne la « valeur fondamentale » d'un actif financier ?", o: ["Son prix de marché au moment du krach", "Sa valeur « objective », fondée sur les revenus futurs qu'il est censé rapporter", "Le montant des fonds propres de la banque qui le détient", "Sa valeur après éclatement de la bulle"], c: 1, e: "La valeur fondamentale est la valeur objective d'un actif, fondée sur les revenus futurs attendus ; la bulle naît quand le prix s'en écarte." },
        { q: "Selon Keynes, les « esprits animaux » renvoient à :", o: ["Des ressorts psychologiques des décisions d'investissement face à l'incertitude", "Un ratio prudentiel imposé aux banques", "La supervision exercée par la banque centrale", "La titrisation des crédits"], c: 0, e: "Keynes souligne que les décisions d'investissement reposent en partie sur des ressorts psychologiques face à l'incertitude." },
        { q: "La titrisation consiste à :", o: ["Garantir les dépôts des épargnants", "Transformer des actifs peu liquides (crédits) en titres négociables", "Relever les taux directeurs", "Interdire la spéculation"], c: 1, e: "La titrisation transforme des actifs peu liquides comme des crédits en titres négociables." },
        { q: "Le « collatéral » désigne :", o: ["Un actif remis en garantie d'un prêt, saisissable en cas de défaut", "Le bénéfice d'une banque", "Une aide d'État aux banques", "Le taux d'intérêt directeur"], c: 0, e: "Le collatéral est un actif remis en garantie ; sa baisse de prix déclenche des ventes forcées qui propagent la crise." },
        { q: "Pour André Orléan, l'éloignement des prix par rapport à la valeur fondamentale s'explique surtout par :", o: ["La hausse des taux directeurs", "Le mimétisme financier : les agents imitent l'opinion commune", "Le ratio de solvabilité", "La baisse du collatéral"], c: 1, e: "Orléan théorise le mimétisme financier : les agents imitent l'opinion commune, éloignant les prix de la valeur fondamentale." },
        { q: "Selon Minsky, le « paradoxe de la tranquillité » signifie que :", o: ["Les crises n'arrivent jamais en période calme", "L'instabilité se prépare en période de prospérité, l'endettement devenant spéculatif puis « Ponzi »", "La tranquillité supprime l'aléa moral", "La prospérité réduit toujours l'endettement"], c: 1, e: "Minsky : c'est en période de prospérité que l'instabilité se construit, l'endettement glissant vers le spéculatif puis le « Ponzi »." }
      ],
      vf: [
        { s: "Le système financier met en relation les agents à capacité et les agents à besoin de financement.", a: true, e: "C'est sa définition : marchés, institutions et règles reliant capacité et besoin de financement." },
        { s: "Un effet de richesse négatif pousse les ménages à augmenter leur consommation.", a: false, e: "La baisse de la valeur du patrimoine réduit la consommation des ménages : l'effet de richesse joue à la baisse." },
        { s: "La supervision bancaire par la BCE vise à vérifier le respect des règles prudentielles.", a: true, e: "La supervision est le contrôle des banques par les autorités pour vérifier le respect des règles prudentielles." },
        { s: "Le krach boursier survient quand les opérateurs réalisent la surévaluation des actifs et les revendent.", a: true, e: "Le krach est l'effondrement brutal des cours lié à la prise de conscience de la surévaluation." }
      ],
      trous: [
        { t: "Une anticipation qui se réalise du seul fait d'être formulée est une prophétie _____.", a: "auto-réalisatrice", alt: ["auto-realisatrice", "autoréalisatrice", "autorealisatrice"], e: "Prophétie auto-réalisatrice : anticiper la hausse fait acheter, ce qui fait monter le prix." },
        { t: "La réduction de l'offre de crédit par les banques, qui freine investissement et consommation, est la _____ du crédit.", a: "contraction", e: "Contraction du crédit (credit crunch)." },
        { t: "Le niveau minimal de fonds propres rapportés aux engagements imposé aux banques est le ratio de _____.", a: "solvabilité", alt: ["solvabilite"], e: "Ratio de solvabilité." },
        { t: "L'accord prudentiel international fixant un ratio de fonds propres « durs » (CET1) minimal de 4,5 % est _____ III.", a: "Bâle", alt: ["Bale", "bale"], e: "Bâle III : ratio CET1 minimal de 4,5 % des actifs pondérés du risque." }
      ]
    },

    "eco-europe": {
      qcm: [
        { q: "Selon la théorie de Robert Mundell, une union monétaire est viable si :", o: ["Les chocs asymétriques sont fréquents", "Les chocs asymétriques sont rares et la mobilité du travail permet l'ajustement", "Chaque pays garde sa propre monnaie", "La politique budgétaire est unique"], c: 1, e: "Mundell (zone monétaire optimale) : l'union est viable si les chocs asymétriques sont rares et si la mobilité du travail permet l'ajustement." },
        { q: "Le « policy mix » désigne :", o: ["La combinaison des politiques monétaire et budgétaire", "Le mélange des monnaies de la zone", "La fusion des banques centrales nationales", "Le contrôle des aides d'État"], c: 0, e: "Le policy mix est la combinaison de la politique monétaire et de la politique budgétaire pour agir sur la conjoncture." },
        { q: "Une « entente » sanctionnée par la politique de la concurrence est :", o: ["Un accord entre concurrents restreignant la concurrence (ex. prix concertés)", "Une aide publique à une entreprise", "Une fusion autorisée", "Une baisse des taux directeurs"], c: 0, e: "L'entente est un accord entre entreprises concurrentes qui restreint la concurrence, par exemple une fixation concertée des prix." },
        { q: "Selon le Pacte de stabilité et de croissance, la dette publique ne doit en principe pas dépasser :", o: ["3 % du PIB", "60 % du PIB", "2 % du PIB", "21 % du PIB"], c: 1, e: "Critères du PSC : déficit public < 3 % du PIB et dette publique < 60 % du PIB." },
        { q: "L'« abus de position dominante » consiste pour une entreprise à :", o: ["Utiliser sa position dominante pour évincer ses concurrents ou léser les consommateurs", "Recevoir une aide d'État autorisée", "Détenir simplement une grande part de marché", "Exporter hors de l'UE"], c: 0, e: "L'abus de position dominante : une entreprise utilise sa position pour évincer ses concurrents ou léser les consommateurs." },
        { q: "L'Union économique et monétaire associe le marché intérieur, une monnaie commune et :", o: ["Une politique budgétaire unique pour toute l'UE", "Une politique monétaire commune et la coordination des politiques économiques", "La suppression des politiques de la concurrence", "Un budget fédéral unique"], c: 1, e: "L'UEM associe marché intérieur, monnaie commune, politique monétaire commune et coordination des politiques économiques." }
      ],
      vf: [
        { s: "La cible d'inflation de la BCE est de 2 % à moyen terme.", a: true, e: "L'objectif de stabilité des prix de la BCE correspond à une cible d'inflation de 2 % à moyen terme." },
        { s: "Le déficit public correspond à un solde négatif du budget des administrations publiques.", a: true, e: "Il apparaît quand les dépenses des administrations publiques excèdent leurs recettes." },
        { s: "Le marché unique a instauré la libre circulation au sein de l'UE en 1993.", a: true, e: "Le marché unique est un espace sans frontières intérieures assurant les quatre libertés de circulation, depuis 1993." },
        { s: "Une aide d'État qui fausse la concurrence est en principe autorisée dans l'UE.", a: false, e: "Elle est en principe interdite, sauf dérogations." }
      ],
      trous: [
        { t: "La combinaison de la politique monétaire et de la politique budgétaire est appelée le _____ mix.", a: "policy", e: "Policy mix." },
        { t: "Les règles budgétaires de la zone euro sont fixées par le Pacte de _____ et de croissance.", a: "stabilité", alt: ["stabilite"], e: "Pacte de stabilité et de croissance." },
        { t: "Un soutien public à des entreprises, interdit dans l'UE s'il fausse la concurrence, est une aide d'_____.", a: "État", alt: ["Etat", "etat"], e: "Aide d'État." },
        { t: "En 2026, _____ pays de l'UE ont adopté l'euro comme monnaie.", a: "21", alt: ["vingt-et-un", "vingt et un"], e: "La zone euro compte 21 pays en 2026." }
      ]
    },

    "socio-structure": {
      qcm: [
        { q: "Chez Bourdieu, l'« espace social » est l'espace où les individus sont positionnés selon :", o: ["Leur seul revenu", "Le volume et la structure de leurs capitaux", "Leur âge uniquement", "Leur lieu de naissance"], c: 1, e: "Pour Bourdieu, la position dans l'espace social dépend du volume et de la structure des capitaux (économique, culturel, social)." },
        { q: "Un « groupe de statut » au sens de Weber se définit par :", o: ["La place dans les rapports de production", "Un même prestige social et un style de vie commun", "Le seul niveau de patrimoine", "L'appartenance à un parti"], c: 1, e: "Chez Weber, le groupe de statut se distingue de la classe : il repose sur un prestige social et un style de vie communs." },
        { q: "La « salarisation » désigne :", o: ["La hausse du nombre d'indépendants", "La diffusion du statut de salarié comme forme principale d'emploi", "La montée des services", "La hausse de la part des femmes au travail"], c: 1, e: "La salarisation est la diffusion du statut de salarié comme forme principale d'emploi." },
        { q: "Le capital économique, chez Bourdieu, correspond :", o: ["Aux réseaux de relations mobilisables", "Aux ressources économiques (revenus, patrimoine)", "Aux savoirs et diplômes", "Au prestige social"], c: 1, e: "Le capital économique regroupe les ressources économiques d'un individu : revenus et patrimoine." },
        { q: "L'« individualisation » désigne le processus par lequel :", o: ["Les classes sociales se renforcent", "Les facteurs qui distinguent les individus se multiplient, affaiblissant les appartenances de classe", "Le secteur tertiaire recule", "Le prestige remplace le revenu"], c: 1, e: "L'individualisation correspond à la multiplication des facteurs distinguant les individus, ce qui affaiblit les appartenances de classe." },
        { q: "La nomenclature des PCS 2020 de l'INSEE comporte :", o: ["6 groupes socioprofessionnels et 29 catégories", "2 classes et 10 catégories", "21 groupes", "100 catégories"], c: 0, e: "La nomenclature PCS 2020 compte 6 groupes socioprofessionnels et 29 catégories." }
      ],
      vf: [
        { s: "Pour Weber, la stratification sociale articule un ordre économique, un ordre social et un ordre politique.", a: true, e: "Weber distingue les classes (économique), les groupes de statut (social) et les partis (politique)." },
        { s: "La « moyennisation » de Mendras décrit le développement d'une vaste classe moyenne qui atténue les clivages.", a: true, e: "Mendras : durant les Trente Glorieuses, le développement des couches intermédiaires atténue les clivages entre groupes." },
        { s: "La féminisation de l'emploi désigne la baisse de la part des femmes dans la population active occupée.", a: false, e: "C'est au contraire la hausse de la part des femmes dans la population active occupée." },
        { s: "Chez Marx, la classe « en soi » existe objectivement avant même toute conscience de classe.", a: true, e: "La classe « en soi » existe objectivement ; elle devient « pour soi » lorsqu'elle prend conscience de ses intérêts communs." }
      ],
      trous: [
        { t: "Chez Marx, une classe devient classe « _____ soi » lorsqu'elle a conscience de ses intérêts communs et se mobilise.", a: "pour", e: "Classe « pour soi » : la classe consciente d'elle-même, par opposition à la classe « en soi »." },
        { t: "La montée du poids du secteur des services dans l'emploi est la _____ de l'économie.", a: "tertiarisation", e: "Tertiarisation : montée du secteur tertiaire." },
        { t: "Chez Bourdieu, les savoirs et diplômes relèvent du capital _____.", a: "culturel", e: "Capital culturel, souvent incorporé." },
        { t: "La part des femmes dans la population active occupée est passée d'environ 35 % en 1962 à 47 % en _____.", a: "2007", e: "Part des femmes dans la population active occupée : ~35 % (1962) → 47 % (2007)." }
      ]
    },

    "socio-ecole": {
      qcm: [
        { q: "La « démocratisation ségrégative » (Merle) désigne une situation où :", o: ["l'accès au bac s'élargit mais le recrutement social des séries reste très différencié", "toutes les filières recrutent dans les mêmes milieux sociaux", "les effectifs scolarisés diminuent", "l'origine sociale n'a plus aucun effet"], c: 0, e: "Merle : l'accès au baccalauréat s'élargit, mais les filières nobles et dévalorisées gardent des recrutements sociaux très différents." },
        { q: "Selon Bourdieu et Passeron, l'École présente comme du mérite ce qui relève en réalité :", o: ["du capital culturel des familles dominantes", "du seul talent inné", "du hasard des notes", "des moyens financiers de l'État"], c: 0, e: "L'École valorise le capital culturel des dominants tout en le faisant passer pour du mérite, ce qui assure la reproduction sociale." },
        { q: "Quelle forme du capital culturel correspond aux diplômes ?", o: ["la forme institutionnalisée", "la forme incorporée", "la forme objectivée", "la forme économique"], c: 0, e: "Le capital culturel a trois formes : incorporée (dispositions), objectivée (biens) et institutionnalisée (diplômes)." },
        { q: "D'après l'analyse de Baudelot et Establet, l'École :", o: ["se divise en deux réseaux qui orientent différemment selon l'origine sociale", "est parfaitement unifiée et neutre", "supprime toute inégalité de parcours", "ne dépend que des choix individuels des élèves"], c: 0, e: "Sous une unité apparente, Baudelot et Establet décrivent deux réseaux de scolarisation aux débouchés socialement différenciés." },
        { q: "Le taux de scolarisation se définit comme le rapport entre :", o: ["les élèves d'un âge donné et l'ensemble des jeunes de cet âge", "les diplômés et les actifs", "les enfants de cadres et les enfants d'ouvriers", "les reçus au bac et les inscrits"], c: 0, e: "C'est le rapport entre les élèves ou étudiants d'un âge donné et l'ensemble des jeunes de ce même âge." },
        { q: "Le paradoxe d'Anderson établit qu'obtenir un diplôme supérieur à celui de son père :", o: ["n'assure pas une position sociale plus élevée que la sienne", "garantit toujours une meilleure position", "fait nécessairement baisser le niveau scolaire", "supprime la mobilité sociale"], c: 0, e: "En raison de la dévaluation des diplômes, dépasser le diplôme paternel ne garantit pas une position sociale plus élevée que celle du père." }
      ],
      vf: [
        { s: "La massification scolaire désigne l'allongement de la scolarité et la hausse quantitative des effectifs à chaque niveau.", a: true, e: "C'est sa définition : une croissance quantitative des effectifs scolarisés, distincte de la démocratisation." },
        { s: "Pour Boudon, les inégalités scolaires résultent de calculs coût/avantage des familles selon leur position sociale.", a: true, e: "Boudon explique une part des inégalités d'orientation par des stratégies familiales rationnelles selon la position sociale." },
        { s: "La méritocratie est un système où la position sociale dépend de l'origine sociale plutôt que du mérite.", a: false, e: "C'est l'inverse : la méritocratie fait dépendre la position du seul mérite (talent et effort), indépendamment de l'origine sociale." },
        { s: "La socialisation selon le genre figure parmi les facteurs des inégalités de réussite scolaire.", a: true, e: "Le programme cite la socialisation de genre parmi les facteurs des inégalités de réussite, aux côtés de l'École, du capital culturel et des stratégies des ménages." }
      ],
      trous: [
        { t: "La réduction des inégalités d'accès et de réussite selon l'origine sociale est la _____ scolaire.", a: "démocratisation", alt: ["democratisation"], e: "La démocratisation se distingue de la simple massification." },
        { t: "Le processus par lequel l'École reproduit la structure de distribution du capital est la _____ sociale.", a: "reproduction", e: "Reproduction sociale (Bourdieu et Passeron)." },
        { t: "Le principe selon lequel l'accès aux positions repose sur le mérite, indépendamment de l'origine sociale, est l'égalité des _____.", a: "chances", e: "Égalité des chances." },
        { t: "Le paradoxe selon lequel un diplôme supérieur à celui du père n'assure pas une meilleure position est le paradoxe d'_____.", a: "Anderson", e: "Paradoxe d'Anderson (dévaluation des diplômes)." }
      ]
    },

    "socio-mobilite": {
      qcm: [
        { q: "La mobilité intragénérationnelle désigne :", o: ["le changement de position d'un individu au cours de sa propre vie active", "le changement de position entre parents et enfants", "un déménagement entre régions", "le passage d'un pays à un autre"], c: 0, e: "L'intragénérationnelle porte sur la carrière d'un même individu ; entre générations, on parle de mobilité intergénérationnelle." },
        { q: "Les tables de mobilité sont construites principalement à partir de :", o: ["l'enquête Formation et Qualification Professionnelle (FQP) de l'INSEE", "la comptabilité nationale", "les déclarations fiscales", "le recensement agricole"], c: 0, e: "L'INSEE construit les tables de mobilité à partir de l'enquête FQP." },
        { q: "La mobilité observée (totale) se décompose en :", o: ["mobilité structurelle et mobilité nette (de circulation)", "mobilité géographique et professionnelle", "fluidité et reproduction", "mobilité ascendante et descendante seulement"], c: 0, e: "Mobilité observée = mobilité structurelle (due à l'évolution des emplois) + mobilité nette dite de circulation." },
        { q: "La mobilité structurelle est qualifiée de mobilité « forcée » parce qu'elle :", o: ["découle de la transformation de la structure des emplois dans le temps", "résulte du seul mérite individuel", "mesure l'égalité réelle des chances", "ne concerne que les femmes"], c: 0, e: "Elle est imposée par la déformation de la structure des emplois (ex. tertiarisation), indépendamment des choix individuels." },
        { q: "Affirmer qu'une société plus mobile n'est pas nécessairement plus fluide signifie que :", o: ["une partie de la mobilité observée vient des changements de structure, non de l'égalité des chances", "la mobilité et la fluidité sont toujours identiques", "la fluidité mesure la mobilité géographique", "plus de mobilité supprime la reproduction"], c: 0, e: "La fluidité mesure l'indépendance origine/position ; la mobilité observée inclut une composante structurelle qui ne reflète pas l'égalité des chances." },
        { q: "Dans une table de mobilité, la lecture en colonnes correspond à la table de :", o: ["recrutement", "destinée", "contingence des prix", "Lorenz"], c: 0, e: "Recrutement = lecture en colonnes (origine sociale de ceux qui occupent une position) ; destinée = lecture en lignes." }
      ],
      vf: [
        { s: "La fluidité sociale mesure le degré d'indépendance entre l'origine et la position sociales.", a: true, e: "Plus la fluidité est forte, plus la position est indépendante de l'origine, donc plus la société est fluide." },
        { s: "La mobilité sociale, au sens de l'INSEE, désigne avant tout la mobilité géographique.", a: false, e: "L'INSEE réserve « mobilité sociale » à l'intergénérationnelle : occuper une PCS différente de celle du parent de référence." },
        { s: "La table de destinée répond à la question : que deviennent les enfants issus d'une origine sociale donnée ?", a: true, e: "C'est sa définition : lecture en lignes, du devenir des enfants selon leur origine." },
        { s: "La reproduction sociale correspond à une situation où l'enfant change de groupe social par rapport à son parent.", a: false, e: "La reproduction sociale est au contraire une situation d'immobilité : l'enfant reste dans le même groupe que son parent." }
      ],
      trous: [
        { t: "Une mobilité descendante, où l'individu occupe une position inférieure à celle de son parent, est un _____.", a: "déclassement", alt: ["declassement"], e: "Déclassement = mobilité descendante." },
        { t: "La part de la mobilité due à la transformation de la structure des emplois est la mobilité _____.", a: "structurelle", e: "Mobilité structurelle (mobilité « forcée »)." },
        { t: "La lecture en lignes d'une table de mobilité, qui suit le devenir des enfants d'une origine donnée, est la table de _____.", a: "destinée", alt: ["destinee"], e: "Table de destinée." },
        { t: "Le changement de position sociale entre la génération des parents et celle des enfants est la mobilité _____.", a: "intergénérationnelle", alt: ["intergenerationnelle"], e: "Mobilité intergénérationnelle." }
      ]
    },

    "socio-travail": {
      qcm: [
        { q: "Au sens du BIT, une personne en emploi est celle qui a effectué, durant une semaine donnée :", o: ["au moins une heure de travail rémunéré", "au moins 35 heures de travail", "un travail uniquement salarié", "une recherche active d'emploi"], c: 0, e: "Le seuil BIT de l'emploi est très bas : au moins une heure de travail rémunéré sur la semaine de référence." },
        { q: "Le non-salariat se caractérise par :", o: ["l'absence de lien de subordination", "un contrat de travail salarié", "un CDI à temps plein", "le versement d'un salaire"], c: 0, e: "Les indépendants (non-salariés) sont rémunérés autrement que par un salaire et sans lien de subordination." },
        { q: "Le toyotisme, apparu chez Toyota dans les années 1970, repose notamment sur :", o: ["la flexibilité et le « juste-à-temps »", "la parcellisation maximale des tâches", "le salaire au rendement strict", "l'absence d'implication des salariés"], c: 0, e: "Le toyotisme combine flexibilité, production en « juste-à-temps » et implication des salariés." },
        { q: "L'ubérisation correspond à un modèle où :", o: ["une plateforme numérique met en relation directe clients et prestataires payés à la tâche", "tous les travailleurs sont en CDI", "l'État emploie directement les travailleurs", "la production se fait à la chaîne en usine"], c: 0, e: "Les prestataires sont souvent micro-entrepreneurs, rémunérés à la tâche via la plateforme." },
        { q: "Chez Durkheim, l'intégration sociale par le travail repose sur :", o: ["une solidarité organique née de l'interdépendance des fonctions", "la suppression de la division du travail", "une solidarité fondée sur la ressemblance des individus", "l'absence de tout lien social"], c: 0, e: "Pour Durkheim, la division du travail crée une solidarité organique : c'est l'interdépendance des fonctions qui intègre les individus." },
        { q: "Dans l'organisation taylorienne, la division verticale du travail correspond à la séparation entre :", o: ["la conception et l'exécution", "deux ateliers d'une usine", "le travail des hommes et celui des femmes", "les ventes et les achats"], c: 0, e: "Division verticale = séparation conception/exécution ; division horizontale = parcellisation des tâches." }
      ],
      vf: [
        { s: "Selon Friedmann, le travail parcellisé du taylorisme a des effets déshumanisants.", a: true, e: "Dans « Le Travail en miettes », Friedmann critique la parcellisation taylorienne et ses effets déshumanisants." },
        { s: "L'inactivité, au sens du BIT, désigne les personnes ni en emploi ni au chômage (étudiants, retraités…).", a: true, e: "C'est sa définition : on n'est ni en emploi ni au chômage au sens du BIT." },
        { s: "Le fordisme se limite au travail à la chaîne, sans aucune hausse des salaires.", a: false, e: "Le fordisme ajoute au travail à la chaîne une hausse des salaires (les 5 dollars par jour de Ford) pour soutenir la consommation de masse." },
        { s: "Le statut d'emploi distingue les salariés, liés par un contrat de subordination, des indépendants.", a: true, e: "Le statut d'emploi oppose les salariés (lien de subordination, contrat de travail) aux non-salariés." }
      ],
      trous: [
        { t: "Le modèle d'organisation cherchant flexibilité, recomposition des tâches et management participatif est le _____.", a: "post-taylorisme", alt: ["post taylorisme", "posttaylorisme"], e: "Post-taylorisme, par opposition au taylorisme." },
        { t: "La solidarité née de l'interdépendance des fonctions, qui intègre les individus dans les sociétés modernes selon Durkheim, est dite _____.", a: "organique", e: "Solidarité organique (Durkheim)." },
        { t: "Les emplois instables comme les CDD, l'intérim ou les contrats aidés relèvent de la _____ de l'emploi.", a: "précarité", alt: ["precarite"], e: "Précarité de l'emploi, par opposition au CDI." },
        { t: "Le prolongement du taylorisme associant travail à la chaîne et hausse des salaires est le _____.", a: "fordisme", e: "Fordisme (production et consommation de masse)." }
      ]
    },

    "socio-engagement": {
      qcm: [
        { q: "Selon Tocqueville, les associations sont importantes car elles :", o: ["remplacent l'État dans toutes ses fonctions", "constituent des corps intermédiaires qui forment les citoyens et font contre-pouvoir", "visent toujours à conquérir le pouvoir", "n'ont aucun rôle politique"], c: 1, e: "Tocqueville voit dans « l'art de s'associer » une école de la citoyenneté et un contre-pouvoir : les associations sont des corps intermédiaires essentiels." },
        { q: "Un groupe d'intérêt se distingue d'un parti politique parce qu'il :", o: ["cherche à conquérir le pouvoir", "exerce une pression sur les pouvoirs publics sans chercher à conquérir le pouvoir", "ne défend aucun intérêt", "est interdit par la loi"], c: 1, e: "Le groupe d'intérêt exerce une pression sur les pouvoirs publics pour défendre ses intérêts, mais sans chercher à conquérir le pouvoir, contrairement à un parti." },
        { q: "Les « nouveaux mouvements sociaux » se caractérisent par :", o: ["la centralité des conflits du travail et du salaire", "des enjeux d'identité et de qualité de vie (féminisme, écologie, luttes minoritaires)", "la conquête de l'appareil d'État", "l'absence de toute organisation"], c: 1, e: "Mouvements post-industriels portant sur l'identité et la qualité de vie : féminisme, écologie, luttes minoritaires." },
        { q: "La structure des opportunités politiques désigne :", o: ["les avantages réservés aux seuls participants", "les facteurs institutionnels et politiques qui facilitent ou freinent une mobilisation", "les gratifications symboliques de l'engagement", "le calcul coûts-avantages de l'individu"], c: 1, e: "C'est le contexte institutionnel et politique plus ou moins favorable qui facilite ou freine la mobilisation." },
        { q: "La consommation engagée consiste à :", o: ["consommer le plus possible pour soutenir la croissance", "orienter ses achats (boycott, achat équitable) selon ses convictions pour peser sur producteurs ou pouvoirs publics", "voter à chaque élection", "adhérer à un syndicat"], c: 1, e: "Forme d'engagement où l'on oriente ses achats (boycott, achat militant, équitable) selon ses convictions." },
        { q: "Un mouvement social se définit comme :", o: ["une action isolée et ponctuelle d'un individu", "une action collective organisée et durable visant un changement social", "un groupe de pression économique", "une simple opinion politique"], c: 1, e: "Le mouvement social est une action collective organisée et durable visant un changement social." }
      ],
      vf: [
        { s: "Pour Gaxie, les rétributions symboliques (reconnaissance, sociabilité, identité) expliquent l'engagement au-delà du seul calcul coûts-avantages.", a: true, e: "Daniel Gaxie met en avant des gratifications non matérielles qui rétribuent le militantisme." },
        { s: "L'abstention désigne le fait de voter blanc dans l'isoloir.", a: false, e: "L'abstention, c'est ne pas voter alors qu'on est inscrit sur les listes électorales ; le vote blanc est un vote exprimé sans choix de candidat." },
        { s: "Les objets, les acteurs et les répertoires de l'action collective se transforment dans le temps.", a: true, e: "Le programme insiste sur la diversité et les transformations des objets, des acteurs (partis, syndicats, associations) et de leurs répertoires." },
        { s: "Charles Tilly a forgé la notion de répertoire d'action collective comme un ensemble historiquement situé des formes de protestation.", a: true, e: "Pour Tilly, le répertoire dépend de l'époque : les formes de protestation disponibles évoluent historiquement." }
      ],
      trous: [
        { t: "L'engagement actif et durable au service d'une cause, d'un parti ou d'un syndicat est le _____.", a: "militantisme", e: "Le militantisme désigne cet engagement actif et durable." },
        { t: "Selon Olson, l'action collective requiert des incitations _____ pour surmonter le paradoxe de l'action collective.", a: "sélectives", alt: ["selectives"], e: "Les incitations sélectives sont des avantages ou sanctions réservés aux seuls participants." },
        { t: "Les mouvements post-industriels portant sur l'identité et la qualité de vie sont les _____ mouvements sociaux.", a: "nouveaux", e: "Nouveaux mouvements sociaux : féminisme, écologie, luttes minoritaires." },
        { t: "Un groupe organisé exerçant une pression sur les pouvoirs publics sans chercher à conquérir le pouvoir est un groupe d'_____.", a: "intérêt", alt: ["interet"], e: "Groupe d'intérêt (ou groupe de pression)." }
      ]
    },

    "rc-justice": {
      qcm: [
        { q: "Dire que les inégalités économiques et sociales sont « cumulatives » signifie qu'elles :", o: ["se compensent les unes les autres", "se renforcent mutuellement (revenu, patrimoine, éducation, santé…)", "diminuent automatiquement avec la croissance", "ne concernent que le revenu"], c: 1, e: "Les inégalités sont multiformes et cumulatives : elles se renforcent mutuellement dans plusieurs domaines." },
        { q: "Quel outil mesure les inégalités de manière DYNAMIQUE ?", o: ["Le coefficient de Gini", "La courbe de Lorenz", "La corrélation de revenu entre parents et enfants", "Le rapport inter-quantiles"], c: 2, e: "La corrélation de revenu parents-enfants est l'outil dynamique ; Lorenz, Gini, top 1 % et rapports inter-quantiles sont statiques." },
        { q: "L'égalitarisme strict défend :", o: ["la maximisation de l'utilité totale", "une égalité réelle des situations (des conditions)", "la priorité absolue aux droits de propriété", "l'égalité des seules chances"], c: 1, e: "L'égalitarisme strict vise l'égalité des situations, à distinguer de l'égalité des droits ou des chances." },
        { q: "L'action des pouvoirs publics en matière de justice sociale s'exerce notamment par :", o: ["la seule politique monétaire", "la fiscalité, la protection sociale, les services collectifs et la lutte contre les discriminations", "la dévaluation de la monnaie", "le libre jeu du marché sans intervention"], c: 1, e: "Le programme cite fiscalité, protection sociale, services collectifs et mesures de lutte contre les discriminations." },
        { q: "La légitimité de la redistribution est notamment discutée à travers :", o: ["le consentement à l'impôt", "le taux de change", "la productivité globale des facteurs", "le ratio de solvabilité"], c: 0, e: "Le débat de légitimité porte notamment sur le consentement à l'impôt." },
        { q: "L'égalité des chances renvoie à l'idée que :", o: ["tout le monde doit avoir le même revenu final", "l'accès aux positions doit reposer sur le mérite, indépendamment de l'origine sociale", "les droits formels suffisent", "l'État doit s'abstenir de toute intervention"], c: 1, e: "L'égalité des chances vise à neutraliser le poids de l'origine sociale ; c'est une des trois formes d'égalité, distincte de l'égalité des droits et des situations." }
      ],
      vf: [
        { s: "La courbe de Lorenz et le coefficient de Gini sont liés : plus la courbe s'éloigne de la diagonale, plus le Gini est élevé.", a: true, e: "Le Gini se déduit de l'aire entre la courbe de Lorenz et la diagonale d'égalité parfaite." },
        { s: "L'utilitarisme s'intéresse avant tout à la répartition des utilités entre les individus.", a: false, e: "L'utilitarisme cherche à maximiser la somme totale des utilités, sans se préoccuper de sa répartition." },
        { s: "Égalité des droits, égalité des chances et égalité des situations correspondent à des conceptions distinctes de ce qui est juste.", a: true, e: "Ces trois formes d'égalité renvoient à des conceptions différentes de la justice sociale." },
        { s: "La redistribution s'exerce sans aucune contrainte de financement.", a: false, e: "L'action des pouvoirs publics s'exerce au contraire sous contrainte de financement." }
      ],
      trous: [
        { t: "La part du revenu détenue par les 1 % les plus riches, le _____ 1 %, est un outil statique de mesure des inégalités.", a: "top", e: "Le top 1 % mesure la concentration au sommet de la distribution." },
        { t: "La conception de la justice qui fonde le juste sur les droits de propriété et les échanges libres est le _____.", a: "libertarisme", e: "Libertarisme : une distribution est juste si elle résulte d'échanges libres." },
        { t: "Les effets négatifs non voulus de la redistribution, comme la désincitation au travail, sont qualifiés d'effets _____.", a: "pervers", e: "Effets pervers / désincitations." },
        { t: "Le rapport entre le 9e et le 1er décile, noté D9/D1, est un rapport inter-_____.", a: "quantiles", alt: ["deciles", "déciles"], e: "Rapport inter-quantiles (ici inter-déciles)." }
      ]
    },

    "rc-environnement": {
      qcm: [
        { q: "Un « problème public » environnemental est :", o: ["un problème que seuls les experts peuvent constater", "une question construite par des acteurs comme nécessitant une action publique, puis inscrite à l'agenda politique", "une externalité positive du marché", "un bien purement privé"], c: 1, e: "Le problème public est construit par des acteurs, puis mis à l'agenda politique." },
        { q: "Parmi les acteurs qui participent à la construction des questions environnementales :", o: ["uniquement les pouvoirs publics", "pouvoirs publics, ONG, entreprises, experts, partis et mouvements citoyens", "seulement les entreprises", "exclusivement les ONG"], c: 1, e: "De multiples acteurs interviennent, entretenant des relations de coopération et de conflit." },
        { q: "La subvention à l'innovation verte est :", o: ["une interdiction de polluer", "un instrument de l'action publique encourageant les technologies propres", "une taxe sur la pollution", "un marché de quotas"], c: 1, e: "Avec la réglementation, la taxation et les marchés de quotas, c'est l'un des instruments face aux externalités négatives." },
        { q: "Le climat est qualifié de « bien commun » car il est :", o: ["exclusif et non rival", "non exclusif mais rival, donc exposé à la surexploitation", "ni exclusif ni rival", "entièrement approprié par les États"], c: 1, e: "Un bien commun est non exclusif mais rival : chacun peut l'utiliser, mais son usage le dégrade, d'où le risque de surexploitation." },
        { q: "Les négociations internationales sur l'environnement sont contraintes par :", o: ["l'absence totale de pollution", "les stratégies de passager clandestin et les inégalités de développement entre pays", "un gouvernement mondial unique", "la disparition des externalités"], c: 1, e: "En présence d'un bien commun, les accords sont freinés par le passager clandestin et les inégalités de développement." },
        { q: "Quelle affirmation décrit le mieux l'articulation des échelles de l'action environnementale ?", o: ["Elle est purement nationale", "Elle s'articule du local au mondial (locale, nationale, européenne, mondiale)", "Elle est uniquement mondiale", "Elle relève des seules entreprises"], c: 1, e: "L'action publique pour l'environnement articule plusieurs échelles, de la locale à la mondiale." }
      ],
      vf: [
        { s: "Les acteurs des questions environnementales entretiennent uniquement des relations de coopération.", a: false, e: "Ils entretiennent des relations à la fois de coopération ET de conflit." },
        { s: "Une externalité négative est un coût imposé à un tiers sans compensation par le marché.", a: true, e: "Exemple : la pollution ou les émissions de CO₂, non payées par le pollueur." },
        { s: "Le passager clandestin profite d'un bien commun sans contribuer à son financement.", a: true, e: "C'est ce qui freine les accords internationaux de préservation de l'environnement." },
        { s: "Tous les instruments de l'action publique environnementale ont les mêmes avantages et les mêmes limites.", a: false, e: "Le programme souligne que chaque instrument présente des avantages et des limites propres, et peut se heurter à des dysfonctionnements." }
      ],
      trous: [
        { t: "Une question construite par des acteurs puis inscrite à l'agenda politique devient un problème _____.", a: "public", e: "Problème public mis à l'agenda." },
        { t: "Un dispositif qui plafonne les émissions et laisse s'échanger des droits à polluer est un marché de _____.", a: "quotas", e: "Marché de quotas d'émission." },
        { t: "Une ressource partagée, non exclusive mais rivale et exposée à la surexploitation, est un bien _____.", a: "commun", e: "Bien commun (ex. climat, atmosphère)." },
        { t: "L'action publique pour l'environnement articule différentes _____, de la locale à la mondiale.", a: "échelles", alt: ["echelles"], e: "Échelles d'action : locale, nationale, européenne, mondiale." }
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
