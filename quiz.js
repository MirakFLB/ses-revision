/* =====================================================================
   SES Terminale — Banque de questions (QCM, Vrai/Faux, textes à trous)
   ---------------------------------------------------------------------
   Questions ancrées sur les objectifs officiels et les définitions
   sourcées (content.js). Chaque item porte une explication (e).
   qcm: { q, o:[4 options], c:index correct, e }
   vf:  { s:affirmation, a:true|false, e }
   trous: { t:phrase avec _____, a:réponse, alt:[variantes acceptées], e }
   Les jeux d'association (notion↔définition, auteur↔apport) sont
   générés automatiquement à partir de content.js.
   ===================================================================== */

window.SES_QUIZ = {

  "eco-croissance": {
    qcm: [
      { q: "Que mesure la productivité globale des facteurs (PGF) ?", o: ["La quantité totale de travail et de capital mobilisée dans la production", "L'efficacité de la combinaison des facteurs de production", "Le niveau général des prix des biens et services produits", "Le stock de capital fixe accumulé par les entreprises du pays"], c: 1, e: "La PGF est le « résidu » : la part de croissance non expliquée par les quantités de travail et de capital. Elle reflète l'efficacité de leur combinaison, surtout via le progrès technique." },
      { q: "Selon Schumpeter, la « destruction créatrice » désigne :", o: ["La dégradation des ressources naturelles provoquée par la croissance économique", "Le remplacement des activités anciennes par de nouvelles sous l'effet de l'innovation", "La succession des crises financières qui ruinent périodiquement les entreprises", "La baisse durable de la productivité liée à l'épuisement des innovations"], c: 1, e: "L'innovation crée de nouvelles activités et emplois tout en détruisant les anciens : c'est le moteur du capitalisme selon Schumpeter." },
      { q: "Dire que le progrès technique est « endogène » signifie qu'il :", o: ["Tombe du ciel comme une donnée extérieure que l'économie subit passivement", "Est produit par l'économie elle-même (innovation, R&D)", "Ne dépend que des dépenses publiques décidées par l'État central", "N'a aucun effet durable sur le rythme de la croissance économique"], c: 1, e: "Le progrès technique endogène résulte des choix d'investissement des agents (R&D, capital humain) : théories de la croissance endogène (Romer, Aghion)." },
      { q: "Quel rôle les droits de propriété jouent-ils dans la croissance ?", o: ["Ils découragent l'innovation en bloquant la diffusion des nouvelles technologies", "Ils incitent à investir et innover en garantissant l'appropriation des gains", "Ils n'ont aucun effet sur les décisions d'investissement des agents économiques", "Ils provoquent les crises en concentrant la richesse entre quelques mains"], c: 1, e: "En garantissant à l'innovateur les fruits de son innovation, cette institution renforce l'incitation à investir et innover." },
      { q: "Les deux grandes sources de la croissance économique sont :", o: ["La hausse de l'inflation et la baisse régulière du taux de chômage", "L'accumulation des facteurs et la hausse de la PGF", "Le développement des exportations et la limitation des importations", "L'arbitrage des ménages entre la consommation et l'épargne de précaution"], c: 1, e: "La croissance vient de l'accumulation des facteurs (travail, capital) et de l'accroissement de la productivité globale des facteurs." },
      { q: "Une croissance soutenable se heurte notamment à :", o: ["La baisse généralisée des prix qui décourage les investissements de long terme", "Des limites écologiques (ressources, pollution, climat)", "Un excès de capital humain qui dévalorise les diplômes sur le marché du travail", "La hausse de la PGF qui rendrait le progrès technique inutile à long terme"], c: 1, e: "La soutenabilité bute sur des limites écologiques ; l'innovation peut aider à les reculer." }
    ],
    vf: [
      { s: "La PGF se confond avec la quantité de capital utilisée.", a: false, e: "Non : la PGF est justement la part de croissance NON expliquée par les quantités de facteurs." },
      { s: "Le progrès technique peut engendrer des inégalités de revenus.", a: true, e: "Oui, par exemple en favorisant les travailleurs qualifiés (biais technologique)." },
      { s: "Selon la croissance endogène, le progrès technique est extérieur à l'économie.", a: false, e: "C'est l'inverse : il est endogène (interne), produit par l'économie." },
      { s: "L'innovation s'accompagne d'un processus de destruction créatrice.", a: true, e: "Schumpeter : les innovations détruisent les activités anciennes en créant les nouvelles." }
    ],
    trous: [
      { t: "Le « résidu » qui mesure l'efficacité de la combinaison des facteurs est la productivité _____ des facteurs.", a: "globale", e: "PGF = productivité globale des facteurs." },
      { t: "Selon Schumpeter, l'innovation provoque un processus de destruction _____.", a: "créatrice", alt: ["creatrice"], e: "La destruction créatrice." }
    ]
  },

  "eco-commerce": {
    qcm: [
      { q: "L'avantage comparatif (Ricardo) signifie qu'un pays a intérêt à se spécialiser :", o: ["Dans tous les biens qu'il produit à un coût absolu inférieur à ses partenaires", "Là où son désavantage est le plus faible (coût relatif le plus bas)", "Uniquement dans l'agriculture, secteur où les besoins sont toujours assurés", "Dans aucun bien, car l'autarcie protège mieux l'emploi et la production nationale"], c: 1, e: "Même sans avantage absolu, un pays gagne à se spécialiser là où son coût relatif est le plus faible, puis à échanger." },
      { q: "Le commerce intra-branche désigne :", o: ["L'échange de produits appartenant à des branches d'activité très différentes", "L'échange croisé de produits similaires entre pays comparables", "Le commerce réalisé à l'intérieur des frontières d'un même pays entre régions", "Le transfert d'une unité de production vers un pays à bas coûts salariaux"], c: 1, e: "Entre pays comparables, on échange des produits proches (même branche), grâce à la différenciation et la qualité." },
      { q: "La compétitivité hors-prix repose sur :", o: ["Des prix de vente plus bas obtenus grâce à la réduction des coûts de production", "La qualité, l'innovation et le service", "Le seul taux de change, qui rend les produits nationaux plus ou moins chers", "Les barrières douanières qui renchérissent le prix des produits importés"], c: 1, e: "La compétitivité hors-prix (structurelle) joue sur la qualité/innovation ; la compétitivité-prix joue sur les coûts." },
      { q: "La DIPP (décomposition internationale du processus productif) consiste à :", o: ["Interdire les importations afin de protéger les producteurs nationaux concurrencés", "Répartir les étapes de fabrication d'un produit entre plusieurs pays", "Fixer un prix mondial unique pour un produit grâce à un accord entre États", "Concentrer toutes les étapes de fabrication d'un produit dans un seul pays"], c: 1, e: "Les FMN fragmentent la chaîne de valeur en localisant chaque étape là où c'est avantageux." },
      { q: "Au sein de chaque pays, un effet du commerce international peut être :", o: ["La suppression de toute inégalité de revenus grâce à l'égalisation des salaires", "Un accroissement des inégalités de revenus", "La fin de la spécialisation productive et le retour à une économie autarcique", "Une hausse générale des prix à la consommation due à l'ouverture des marchés"], c: 1, e: "Le commerce procure des gains moyens (baisse des prix) et réduit les inégalités entre pays, mais peut accroître les inégalités internes." },
      { q: "La théorie HOS explique la spécialisation par :", o: ["Les dotations factorielles", "Le hasard des découvertes scientifiques propres à chaque économie nationale", "La seule taille de la population active disponible dans le pays considéré", "La politique monétaire conduite par la banque centrale du pays exportateur"], c: 0, e: "Heckscher-Ohlin-Samuelson : chaque pays se spécialise selon le facteur dont il est le mieux doté." }
    ],
    vf: [
      { s: "Selon Ricardo, un pays sans aucun avantage absolu n'a pas intérêt à commercer.", a: false, e: "Faux : grâce à l'avantage comparatif, il gagne à se spécialiser là où son désavantage est le plus faible." },
      { s: "La compétitivité-prix dépend des coûts de production.", a: true, e: "Oui : produire moins cher permet de baisser les prix de vente." },
      { s: "Le protectionnisme vise à favoriser les importations.", a: false, e: "Le protectionnisme limite les importations pour protéger la production nationale." },
      { s: "Le commerce entre pays comparables s'explique surtout par la différenciation des produits.", a: true, e: "Commerce intra-branche : qualité et différenciation." }
    ],
    trous: [
      { t: "La loi des avantages _____ a été formulée par David Ricardo.", a: "comparatifs", e: "Avantages comparatifs." },
      { t: "La fragmentation internationale de la production est appelée la _____ (sigle).", a: "DIPP", e: "Décomposition internationale du processus productif." }
    ]
  },

  "eco-chomage": {
    qcm: [
      { q: "Un chômeur au sens du BIT doit :", o: ["Être obligatoirement inscrit comme demandeur d'emploi auprès de France Travail", "Être sans emploi, disponible et en recherche active", "Déclarer ne pas vouloir travailler tout en restant inscrit sur les listes", "Occuper un emploi à temps partiel en souhaitant travailler davantage d'heures"], c: 1, e: "Les trois critères du BIT : sans emploi, disponible sous deux semaines, recherche active." },
      { q: "Le taux de chômage se calcule :", o: ["En rapportant le nombre de chômeurs à l'ensemble de la population totale", "Chômeurs / population active", "En rapportant le nombre de chômeurs au seul nombre d'actifs occupés", "En rapportant la population active au nombre de chômeurs recensés"], c: 1, e: "Taux de chômage = chômeurs / population active (actifs occupés + chômeurs)." },
      { q: "Le chômage structurel est lié :", o: ["À un ralentissement temporaire de l'activité lié au cycle économique", "Au fonctionnement du marché du travail (appariement, institutions)", "Uniquement aux variations saisonnières de l'activité dans certains secteurs", "À l'inflation qui réduit le pouvoir d'achat et donc la demande de travail"], c: 1, e: "Il est durable et indépendant de la conjoncture." },
      { q: "Le salaire d'efficience peut créer du chômage car :", o: ["Il est fixé en dessous du salaire d'équilibre du marché du travail", "Il est fixé au-dessus de l'équilibre pour motiver les salariés", "Il est interdit par la loi car jugé contraire au salaire minimum légal", "Il supprime les asymétries d'information entre l'employeur et ses salariés"], c: 1, e: "Payer au-dessus de l'équilibre (pour motiver/retenir) réduit l'embauche → chômage structurel." },
      { q: "Quelle politique vise le chômage conjoncturel ?", o: ["La formation professionnelle des actifs pour améliorer l'appariement des emplois", "Le soutien de la demande globale (relance)", "La flexibilisation du marché du travail pour faciliter les embauches durables", "La baisse du salaire minimum afin de réduire le coût du travail peu qualifié"], c: 1, e: "Le soutien de la demande cible le conjoncturel ; formation/flexibilité ciblent le structurel." },
      { q: "Le halo du chômage regroupe :", o: ["Les chômeurs au sens du BIT qui remplissent les trois critères officiels", "Des inactifs proches de l'emploi, non comptés comme chômeurs", "Les actifs occupés exerçant un emploi à temps plein de façon stable", "Les seuls retraités souhaitant reprendre une activité professionnelle rémunérée"], c: 1, e: "Le halo = personnes souhaitant travailler mais non comptées comme chômeurs BIT (indisponibles ou sans recherche active)." }
    ],
    vf: [
      { s: "Le sous-emploi concerne des personnes à temps partiel souhaitant travailler davantage.", a: true, e: "Oui, c'est l'une de ses composantes." },
      { s: "Taux d'emploi et taux de chômage sont synonymes.", a: false, e: "Le taux d'emploi = personnes en emploi / population correspondante ; différent du taux de chômage." },
      { s: "Les politiques de formation visent surtout le chômage structurel.", a: true, e: "Elles agissent sur l'appariement et les qualifications." },
      { s: "Le chômage conjoncturel s'explique par une insuffisance de la demande globale.", a: true, e: "Lié au ralentissement de l'activité." }
    ],
    trous: [
      { t: "Le chômage lié à une insuffisance de la demande globale est qualifié de _____.", a: "conjoncturel", e: "Chômage conjoncturel." },
      { t: "Un salaire fixé au-dessus de l'équilibre pour inciter à l'effort est un salaire d'_____.", a: "efficience", e: "Salaire d'efficience." }
    ]
  },

  "eco-crises": {
    qcm: [
      { q: "Une bulle spéculative correspond à :", o: ["Un prix d'actif qui reste durablement aligné sur sa valeur fondamentale", "Un prix d'actif qui s'écarte fortement de sa valeur fondamentale", "Une baisse générale et durable des prix des biens et services dans l'économie", "Une politique monétaire expansionniste menée par la banque centrale du pays"], c: 1, e: "La spéculation pousse le prix loin de la valeur fondamentale, jusqu'à l'éclatement (krach)." },
      { q: "Une prophétie auto-réalisatrice est :", o: ["Une anticipation qui se réalise du fait des comportements qu'elle induit", "Une prévision économique qui se révèle systématiquement fausse a posteriori", "Une règle prudentielle imposée aux banques pour limiter leur prise de risque", "Une politique conduite par la BCE pour stabiliser les anticipations de marché"], c: 0, e: "Anticiper la hausse fait acheter, ce qui fait effectivement monter le prix." },
      { q: "L'aléa moral des banques désigne :", o: ["Une prise de risque excessive car elles s'attendent à être renflouées", "Une obligation légale de détenir un montant minimal de fonds propres", "Une baisse des taux directeurs décidée pour relancer la distribution du crédit", "La transformation de créances en titres financiers négociables sur les marchés"], c: 0, e: "Si une banque ne supporte pas toutes les conséquences de ses risques (sauvetage attendu), elle en prend davantage." },
      { q: "Pour réduire l'aléa moral, on impose aux banques :", o: ["Un ratio de solvabilité (fonds propres)", "La fermeture immédiate de tout établissement ayant pris des risques élevés", "Un prix unique du crédit fixé par l'autorité de régulation bancaire nationale", "La nationalisation systématique des banques pour socialiser leurs pertes"], c: 0, e: "Le ratio de solvabilité (Bâle) impose un niveau minimal de fonds propres." },
      { q: "Un canal de transmission d'une crise financière à l'économie réelle est :", o: ["La hausse de la productivité des entreprises stimulée par l'innovation financière", "La contraction du crédit", "La baisse du chômage entraînée par la relance des embauches dans les banques", "La hausse des exportations soutenue par la dépréciation de la monnaie nationale"], c: 1, e: "Avec l'effet de richesse négatif et la baisse du prix du collatéral, la contraction du crédit freine l'activité." },
      { q: "La panique bancaire correspond à :", o: ["Des retraits massifs et simultanés des déposants", "Une hausse soudaine des dépôts des ménages liée à un excès d'épargne de précaution", "Une baisse des taux directeurs décidée par la banque centrale en cas de récession", "Un effondrement des prix de l'immobilier sans conséquence sur les banques"], c: 0, e: "La crise de confiance provoque une crise de liquidité, voire la faillite." }
    ],
    vf: [
      { s: "La crise de 2008 s'est traduite par une chute du PIB et une hausse du chômage.", a: true, e: "Comme la crise des années 1930, avec effondrement boursier et faillites en chaîne." },
      { s: "Les comportements mimétiques stabilisent les marchés financiers.", a: false, e: "Ils amplifient les mouvements (bulles puis krachs)." },
      { s: "Le ratio de solvabilité impose un niveau minimal de fonds propres aux banques.", a: true, e: "Outil prudentiel pour réduire l'aléa moral." }
    ],
    trous: [
      { t: "Le comportement consistant à imiter les autres opérateurs sur les marchés est dit _____.", a: "mimétique", alt: ["mimetique"], e: "Comportement mimétique." },
      { t: "Le risque qu'un événement entraîne une crise générale du système est le risque _____.", a: "systémique", alt: ["systemique"], e: "Risque systémique." }
    ]
  },

  "eco-europe": {
    qcm: [
      { q: "Dans la zone euro, la politique monétaire est :", o: ["Décidée librement par chaque État membre selon sa situation nationale", "Unique et conduite par la BCE", "Interdite par les traités afin de préserver la stabilité de la monnaie", "Fixée chaque année par la Commission européenne après vote du Parlement"], c: 1, e: "Politique monétaire unique et indépendante, conduite par la BCE." },
      { q: "La politique budgétaire dans la zone euro :", o: ["Est unique et décidée collectivement pour l'ensemble des États membres", "Reste nationale mais encadrée par les traités", "Est décidée par la BCE en complément de la politique monétaire commune", "N'existe pas car les États ont transféré toute compétence à l'Union"], c: 1, e: "Chaque État conduit sa politique budgétaire, sous contrainte des traités (PSC)." },
      { q: "Un choc asymétrique :", o: ["Touche tous les pays de la zone de la même façon et au même moment", "Affecte un pays sans (ou différemment) les autres", "Est une politique commune décidée par la BCE pour amortir les récessions", "Favorise la coordination budgétaire en rapprochant les conjonctures nationales"], c: 1, e: "Il complique une politique monétaire unique adaptée à tous." },
      { q: "La politique européenne de la concurrence lutte notamment contre :", o: ["Les ententes et abus de position dominante", "Les exportations des entreprises européennes vers les pays tiers concurrents", "La libre circulation des biens et des capitaux au sein du marché intérieur", "L'usage de l'euro comme monnaie unique dans les transactions commerciales"], c: 0, e: "Elle surveille aussi les concentrations et les aides d'État." },
      { q: "Le marché unique assure la libre circulation :", o: ["Des seules marchandises produites sur le territoire des États membres", "Des biens, services, capitaux et personnes", "Des seuls capitaux entre les places financières des pays de la zone", "D'aucun facteur, chaque État conservant le contrôle de ses frontières"], c: 1, e: "Les « quatre libertés » du marché unique." },
      { q: "Une difficulté de la zone euro est :", o: ["L'excès de coordination budgétaire qui prive les États de toute autonomie", "Le défaut de coordination face aux chocs asymétriques", "L'absence d'une monnaie commune empêchant les échanges entre États membres", "Une inflation nulle garantie en permanence par l'action de la banque centrale"], c: 1, e: "Politique monétaire unique + budgets nationaux = risque de défaut de coordination." }
    ],
    vf: [
      { s: "La BCE est indépendante des États.", a: true, e: "Son indépendance est inscrite dans les traités." },
      { s: "Le marché unique tend à stimuler la croissance (concurrence, économies d'échelle).", a: true, e: "Objectif d'efficacité économique." },
      { s: "Une aide d'État qui fausse la concurrence est en principe autorisée dans l'UE.", a: false, e: "Elle est en principe interdite (sauf dérogations)." }
    ],
    trous: [
      { t: "La banque centrale de la zone euro est la _____ (sigle).", a: "BCE", e: "Banque centrale européenne." },
      { t: "Un choc qui ne touche qu'un seul pays de la zone est dit _____.", a: "asymétrique", alt: ["asymetrique"], e: "Choc asymétrique." }
    ]
  },

  "socio-structure": {
    qcm: [
      { q: "Les PCS sont une nomenclature de :", o: ["L'INSEE", "L'ONU, qui harmonise les statistiques sociales à l'échelle internationale", "La BCE, dans le cadre de son suivi de la situation économique de la zone euro", "France Travail, afin de classer les demandeurs d'emploi selon leur métier visé"], c: 0, e: "Professions et catégories socioprofessionnelles, nomenclature de l'INSEE." },
      { q: "Pour Marx, les classes sociales se définissent par :", o: ["Le prestige social et l'honneur attachés à un certain mode de vie", "La place dans les rapports de production", "Le niveau de diplôme atteint et la position obtenue grâce à l'École", "L'âge et la position dans le cycle de vie des individus considérés"], c: 1, e: "Rapport aux moyens de production (bourgeoisie / prolétariat)." },
      { q: "Pour Weber, la stratification est :", o: ["Unidimensionnelle, reposant uniquement sur la place dans les rapports de production", "Multidimensionnelle (économique, social, politique)", "Inexistante, les individus formant une masse indifférenciée sans hiérarchie", "Fondée sur le seul genre, qui déterminerait l'ensemble des positions sociales"], c: 1, e: "Classes (économique), groupes de statut (social), partis (politique)." },
      { q: "La « moyennisation » (Mendras) désigne :", o: ["La disparition progressive des classes moyennes au profit des deux extrêmes", "Le développement de couches intermédiaires atténuant les clivages", "La hausse des inégalités de revenus et de patrimoine entre les classes sociales", "Le déplacement des emplois vers le secteur des services au cours des Trente Glorieuses"], c: 1, e: "Thèse d'une vaste classe moyenne pendant les Trente Glorieuses." },
      { q: "Parmi les évolutions de la structure socioprofessionnelle depuis 1950 :", o: ["Désalarisation et essor du travail indépendant au détriment du salariat", "Salarisation et tertiarisation", "Baisse générale des qualifications des emplois et déclin du capital humain", "Masculinisation des emplois liée au recul de l'activité féminine rémunérée"], c: 1, e: "Salarisation, tertiarisation, élévation des qualifications, féminisation." },
      { q: "La « classe pour soi » (Marx) suppose :", o: ["Une conscience de classe et une mobilisation", "Aucune conscience d'appartenir à un groupe partageant des intérêts communs", "Un niveau de revenu élevé permettant l'accumulation de capital économique", "Un diplôme élevé garantissant l'accès aux positions sociales supérieures"], c: 0, e: "La classe « en soi » devient « pour soi » quand elle a conscience de ses intérêts communs." }
    ],
    vf: [
      { s: "Le capital culturel, chez Bourdieu, se limite à l'argent.", a: false, e: "Le capital culturel = savoirs, diplômes, dispositions ; l'argent relève du capital économique." },
      { s: "La pertinence des classes sociales pour décrire la société française fait débat.", a: true, e: "Débat théorique et statistique (distances, individualisation…)." },
      { s: "La tertiarisation désigne la montée du secteur primaire.", a: false, e: "Le tertiaire = les services." }
    ],
    trous: [
      { t: "La nomenclature de l'INSEE classant la population selon la profession est la _____ (sigle).", a: "PCS", e: "Professions et catégories socioprofessionnelles." },
      { t: "Chez Bourdieu, l'ensemble des relations mobilisables est le capital _____.", a: "social", e: "Capital social." }
    ]
  },

  "socio-ecole": {
    qcm: [
      { q: "La massification scolaire désigne :", o: ["La réduction des inégalités de réussite scolaire selon l'origine sociale", "La hausse quantitative des effectifs scolarisés", "La baisse du niveau général des élèves liée à l'allongement des études", "La privatisation croissante des établissements d'enseignement secondaire"], c: 1, e: "Hausse quantitative ; à distinguer de la démocratisation." },
      { q: "La démocratisation scolaire désigne :", o: ["La hausse quantitative des effectifs scolarisés dans le secondaire et le supérieur", "La réduction des inégalités d'accès/réussite selon l'origine sociale", "La sélection accrue des élèves à l'entrée des filières les plus prestigieuses", "L'augmentation du nombre d'années d'études suivies par chaque génération"], c: 1, e: "Réduction des inégalités selon l'origine sociale (≠ massification)." },
      { q: "Le capital culturel (Bourdieu) favorise la réussite car :", o: ["Il s'achète directement sur le marché comme n'importe quel autre bien économique", "Il est transmis par la famille et valorisé par l'École", "Il est distribué de façon égale par l'État à tous les élèves dès l'école primaire", "Il est inutile à la réussite car l'École récompense uniquement le travail fourni"], c: 1, e: "L'École valorise le capital culturel des familles favorisées." },
      { q: "Le paradoxe d'Anderson établit que :", o: ["Un diplôme plus élevé que celui de son père garantit toujours une position supérieure", "Un diplôme supérieur à celui du père n'assure pas une position plus élevée", "L'École est socialement neutre et récompense le seul mérite individuel des élèves", "Les diplômes ne jouent aucun rôle dans la détermination de la position sociale"], c: 1, e: "À cause de l'inflation/dévaluation des diplômes." },
      { q: "Pour Boudon, les inégalités scolaires s'expliquent surtout par :", o: ["La seule transmission du capital culturel par les familles favorisées", "Les calculs coût/avantage des familles selon leur position", "Le hasard des parcours individuels et des rencontres au cours de la scolarité", "Des aptitudes héréditaires inégalement réparties entre les enfants des classes sociales"], c: 1, e: "Individualisme méthodologique : stratégies familiales rationnelles." }
    ],
    vf: [
      { s: "Massification et démocratisation sont synonymes.", a: false, e: "On peut massifier sans démocratiser (démocratisation ségrégative)." },
      { s: "Pour Bourdieu, l'École tend à reproduire les inégalités sociales.", a: true, e: "Reproduction sociale (Les Héritiers, La Reproduction)." },
      { s: "L'égalité des chances vise à neutraliser le poids de l'origine sociale.", a: true, e: "C'est son principe." }
    ],
    trous: [
      { t: "La hausse quantitative des effectifs scolarisés est la _____ scolaire.", a: "massification", e: "Massification." },
      { t: "Bourdieu et Passeron parlent de _____ sociale pour décrire le rôle de l'École.", a: "reproduction", e: "Reproduction sociale." }
    ]
  },

  "socio-mobilite": {
    qcm: [
      { q: "La mobilité sociale intergénérationnelle compare :", o: ["La position d'un individu au début et à la fin de sa propre carrière professionnelle", "La position de l'enfant à celle de son parent", "Les positions sociales moyennes observées entre deux pays à un moment donné", "Les positions sociales dominantes dans deux régions différentes d'un même pays"], c: 1, e: "Entre générations (parent → enfant). Au cours d'une vie = intragénérationnelle." },
      { q: "La table de destinée répond à la question :", o: ["De quelle origine sociale viennent les individus occupant une position donnée ?", "Que deviennent les enfants d'une origine donnée ?", "Combien de classes sociales distinctes peut-on dénombrer dans la société ?", "Quel est le niveau de revenu moyen associé à chaque catégorie sociale ?"], c: 1, e: "Destinée = devenir des enfants selon leur origine (lecture en lignes)." },
      { q: "La mobilité structurelle est due :", o: ["À l'évolution de la structure des emplois", "Au seul mérite individuel récompensant le talent et l'effort de chacun", "Aux migrations géographiques des actifs entre les différentes régions", "À la fluidité sociale, c'est-à-dire à l'indépendance entre origine et position"], c: 0, e: "La transformation des emplois « force » une partie de la mobilité." },
      { q: "La fluidité sociale mesure :", o: ["La mobilité totale observée entre les générations dans une société donnée", "Le degré d'indépendance entre origine et position (égalité des chances)", "Le rythme de la croissance économique qui ouvre de nouvelles positions sociales", "Le niveau de chômage qui freine l'accès des jeunes aux positions supérieures"], c: 1, e: "Mobilité « pure », indépendante des changements de structure." },
      { q: "Une société plus mobile est-elle forcément plus fluide ?", o: ["Oui, toujours, car toute hausse de la mobilité traduit plus d'égalité des chances", "Non : la mobilité peut venir des changements de structure", "Oui par définition, mobilité et fluidité étant deux mesures strictement équivalentes", "Non, la mobilité observée et la fluidité sociale n'ont aucun lien entre elles"], c: 1, e: "La mobilité observée inclut une part structurelle : plus de mobilité ne signifie pas plus d'égalité des chances." },
      { q: "Le déclassement correspond à :", o: ["Une mobilité ascendante vers une position plus élevée que celle du parent", "Une mobilité descendante", "Une immobilité, l'enfant restant dans le même groupe social que son parent", "Une mobilité géographique de l'individu d'une région vers une autre région"], c: 1, e: "Position de l'enfant inférieure à celle du parent." }
    ],
    vf: [
      { s: "La table de recrutement se lit en colonnes (origine des individus d'une position donnée).", a: true, e: "Recrutement = d'où viennent ceux qui occupent une position." },
      { s: "Mobilité observée = mobilité structurelle + mobilité de circulation (nette).", a: true, e: "Décomposition classique de la mobilité." },
      { s: "La reproduction sociale correspond à une forte mobilité.", a: false, e: "La reproduction = immobilité (l'enfant reste dans le groupe du parent)." }
    ],
    trous: [
      { t: "Le degré d'indépendance entre origine et position sociales est la _____ sociale.", a: "fluidité", alt: ["fluidite"], e: "Fluidité sociale." },
      { t: "La part de mobilité due à l'évolution des emplois est la mobilité _____.", a: "structurelle", e: "Mobilité structurelle." }
    ]
  },

  "socio-travail": {
    qcm: [
      { q: "Le taylorisme (OST) repose sur :", o: ["La polyvalence des salariés et l'autonomie dans l'organisation de leurs tâches", "La division horizontale et verticale du travail", "Le recours au télétravail pour brouiller les frontières du temps de travail", "L'absence de hiérarchie et la prise de décision collective par les ouvriers"], c: 1, e: "Parcellisation (horizontale) + séparation conception/exécution (verticale)." },
      { q: "La division verticale du travail sépare :", o: ["La conception et l'exécution", "Les tâches réalisées dans deux usines distinctes d'une même entreprise", "Les étapes de production localisées dans deux pays aux coûts différents", "Les fonctions commerciales d'achat et de vente au sein de l'entreprise"], c: 0, e: "Les ingénieurs conçoivent, les ouvriers exécutent (Taylor)." },
      { q: "Le post-taylorisme se caractérise par :", o: ["Une parcellisation accrue des tâches et un contrôle renforcé des temps de travail", "Flexibilité, recomposition des tâches, management participatif", "Un salaire au rendement strictement indexé sur le nombre de pièces produites", "La généralisation de la chaîne de montage et du travail à la chaîne fordiste"], c: 1, e: "Rupture avec la parcellisation taylorienne." },
      { q: "La polarisation des emplois désigne :", o: ["La hausse des seuls emplois intermédiaires au détriment des deux extrémités", "La croissance des emplois très et peu qualifiés au détriment des intermédiaires", "La disparition progressive du salariat au profit du travail indépendant", "La baisse du chômage liée à la création massive d'emplois peu qualifiés"], c: 1, e: "Le numérique accentue cette polarisation." },
      { q: "Le travail est source d'intégration sociale car :", o: ["Il procure revenu, statut et liens sociaux", "Il revêt un caractère obligatoire imposé à tous les membres de la société", "Il supprime les classes sociales en homogénéisant les conditions de vie", "Il est par nature toujours précaire et donc source d'exclusion sociale"], c: 0, e: "La précarisation peut affaiblir ce pouvoir intégrateur." },
      { q: "Le numérique (télétravail) tend à :", o: ["Clarifier nettement les frontières entre le temps de travail et la vie privée", "Brouiller les frontières du travail", "Supprimer l'emploi salarié en automatisant l'ensemble des tâches productives", "Interdire la flexibilité en rigidifiant les horaires et les lieux de travail"], c: 1, e: "Il brouille les frontières et transforme les relations d'emploi." }
    ],
    vf: [
      { s: "Le fordisme ajoute au taylorisme le travail à la chaîne et de meilleurs salaires.", a: true, e: "Logique de production et de consommation de masse." },
      { s: "La précarité de l'emploi concerne notamment les CDD et l'intérim.", a: true, e: "Emplois instables, par opposition au CDI." },
      { s: "L'ubérisation repose sur le salariat classique en CDI.", a: false, e: "Elle repose sur des prestataires rémunérés à la tâche (souvent micro-entrepreneurs)." }
    ],
    trous: [
      { t: "L'organisation scientifique du travail théorisée par Taylor est aussi appelée le _____.", a: "taylorisme", e: "Taylorisme (OST)." },
      { t: "La croissance des emplois très et peu qualifiés au détriment des intermédiaires est la _____ des emplois.", a: "polarisation", e: "Polarisation des emplois." }
    ]
  },

  "socio-engagement": {
    qcm: [
      { q: "Le paradoxe de l'action collective (Olson) montre que :", o: ["Les individus s'engagent toujours spontanément dès qu'un intérêt commun existe", "Un individu rationnel a intérêt à être passager clandestin", "L'engagement est gratuit et ne représente aucun coût pour celui qui y participe", "Le vote est rendu obligatoire pour contraindre les citoyens à l'action collective"], c: 1, e: "Pourquoi s'engager si l'on profite du résultat sans participer ?" },
      { q: "Les incitations sélectives servent à :", o: ["Décourager l'engagement en réservant les avantages aux non-participants", "Réserver des avantages aux participants pour les inciter à s'engager", "Punir les citoyens qui votent en leur retirant certains droits sociaux", "Financer l'action de l'État grâce aux cotisations versées par les membres"], c: 1, e: "Réponse d'Olson au paradoxe de l'action collective." },
      { q: "Les rétributions symboliques (Gaxie) sont :", o: ["Des salaires versés en contrepartie de l'engagement militant des participants", "Des gratifications non matérielles (reconnaissance, sociabilité)", "Des amendes infligées aux membres qui ne participent pas à l'action collective", "Des impôts prélevés pour financer les organisations militantes reconnues"], c: 1, e: "Elles expliquent l'engagement au-delà du calcul coûts-avantages." },
      { q: "Le répertoire d'action collective (Tilly) désigne :", o: ["La liste des partis politiques autorisés à se présenter à une élection donnée", "L'ensemble des formes de mobilisation disponibles à une époque", "Le programme électoral présenté par un parti aux citoyens lors d'un scrutin", "Le budget dont dispose une association pour financer ses actions militantes"], c: 1, e: "Manifestation, grève, pétition, occupation…" },
      { q: "Parmi ces formes d'engagement politique :", o: ["Le seul vote, qui constituerait l'unique forme légitime d'engagement politique", "Vote, militantisme, engagement associatif, consommation engagée", "La seule grève, qui serait le mode d'action réservé au monde du travail salarié", "Aucune forme reconnue, l'engagement relevant uniquement de la sphère privée"], c: 1, e: "L'engagement prend des formes variées." },
      { q: "Un « passager clandestin » est quelqu'un qui :", o: ["Supporte seul les coûts de l'action collective au bénéfice de tous les autres", "Profite de l'action collective sans y contribuer", "Organise la mobilisation et coordonne l'action de l'ensemble des participants", "Refuse les bénéfices de l'action collective en s'abstenant lors du vote"], c: 1, e: "Free rider : il bénéficie du bien public sans en supporter les coûts." }
    ],
    vf: [
      { s: "L'engagement politique dépend de variables sociodémographiques (diplôme, âge, CSP, sexe).", a: true, e: "Ces variables structurent l'intensité et les formes de l'engagement." },
      { s: "La consommation engagée (boycott) est une forme d'engagement politique.", a: true, e: "Orienter ses achats selon ses convictions." },
      { s: "Selon Olson, l'action collective est toujours spontanée et facile.", a: false, e: "Le paradoxe la rend improbable sans incitations sélectives." }
    ],
    trous: [
      { t: "L'individu qui profite d'un bien collectif sans y contribuer est un passager _____.", a: "clandestin", e: "Passager clandestin." },
      { t: "L'ensemble des formes de mobilisation d'une époque est le _____ d'action collective.", a: "répertoire", alt: ["repertoire"], e: "Répertoire d'action collective (Tilly)." }
    ]
  },

  "rc-justice": {
    qcm: [
      { q: "Le coefficient de Gini vaut 0 quand :", o: ["Les inégalités de revenus atteignent leur niveau maximal dans la population", "L'égalité est parfaite", "Le produit intérieur brut du pays est nul au cours de l'année considérée", "L'ensemble de la population vit en dessous du seuil de pauvreté monétaire"], c: 1, e: "Gini ∈ [0;1] : 0 = égalité parfaite, proche de 1 = inégalité extrême." },
      { q: "La courbe de Lorenz représente :", o: ["L'évolution du niveau général des prix au cours d'une période donnée", "La répartition cumulée d'un revenu/patrimoine dans la population", "L'évolution de la part de la population active privée d'emploi dans le temps", "Le rythme d'augmentation de la richesse produite par l'économie chaque année"], c: 1, e: "Part cumulée de la population vs part cumulée du revenu/patrimoine." },
      { q: "Pour Rawls, les inégalités sont justes si :", o: ["Elles profitent en priorité aux membres les plus favorisés de la société", "Elles bénéficient aux plus défavorisés (principe de différence)", "Elles sont entièrement supprimées par une redistribution égalisant les revenus", "Elles sont maximisées afin de récompenser pleinement le mérite de chacun"], c: 1, e: "Égalitarisme libéral : maximin." },
      { q: "Le libertarisme (Nozick) privilégie :", o: ["Une redistribution maximale des revenus organisée par l'État pour corriger le marché", "Les droits de propriété et les échanges libres", "L'égalité stricte des revenus garantie par une fiscalité fortement progressive", "La maximisation de l'utilité totale de la société sans souci de sa répartition"], c: 1, e: "Une distribution est juste si elle résulte d'échanges libres." },
      { q: "L'utilitarisme (Bentham) juge une société à :", o: ["La somme totale des utilités (bonheur)", "La seule égalité des droits formels reconnus à chacun des membres de la société", "La taille de l'État et l'étendue de son intervention dans la vie économique", "Le niveau du coefficient de Gini mesurant les inégalités de revenus du pays"], c: 0, e: "Maximiser l'utilité totale, sans s'intéresser à sa répartition." },
      { q: "Le rapport inter-décile D9/D1 mesure :", o: ["L'écart entre les plus riches et les plus pauvres", "Le taux de croissance de la richesse produite par l'économie sur une année", "La part de la population active sans emploi et à la recherche d'un travail", "Le rythme d'augmentation du niveau général des prix à la consommation"], c: 0, e: "Outil statique de mesure des inégalités." }
    ],
    vf: [
      { s: "Un coefficient de Gini proche de 1 traduit de fortes inégalités.", a: true, e: "1 = inégalité extrême." },
      { s: "Égalité des droits, des chances et des situations désignent la même chose.", a: false, e: "Ce sont trois conceptions distinctes de l'égalité." },
      { s: "La redistribution peut être critiquée en termes d'effets pervers (désincitations).", a: true, e: "Débat sur l'efficacité et les effets pervers." }
    ],
    trous: [
      { t: "L'indicateur d'inégalité compris entre 0 et 1 est le coefficient de _____.", a: "Gini", e: "Coefficient de Gini." },
      { t: "Chez Rawls, les inégalités justes sont celles qui bénéficient aux plus _____.", a: "défavorisés", alt: ["defavorises", "defavorisés"], e: "Principe de différence." }
    ]
  },

  "rc-environnement": {
    qcm: [
      { q: "Une externalité négative est :", o: ["Un bénéfice procuré gratuitement à autrui sans contrepartie marchande (ex. pollinisation)", "Un coût imposé à autrui sans compensation (ex. pollution)", "Une subvention versée par l'État pour soutenir une activité jugée d'intérêt général", "Une taxe prélevée sur une activité afin de financer les dépenses publiques"], c: 1, e: "Défaillance de marché : le coût n'est pas supporté par le pollueur." },
      { q: "Un marché de quotas d'émission :", o: ["Interdit purement et simplement toute émission polluante aux entreprises concernées", "Plafonne les émissions et laisse s'échanger des droits à polluer", "Subventionne l'usage des énergies fossiles pour soutenir l'activité industrielle", "Fixe un prix administré unique du carbone identique pour tous les pollueurs"], c: 1, e: "L'État fixe un plafond ; le prix du quota se forme par l'offre et la demande." },
      { q: "La taxe pigouvienne vise à :", o: ["Augmenter le produit intérieur brut en stimulant la production des entreprises", "Internaliser le coût de l'externalité (faire payer le pollueur)", "Financer l'implantation des firmes multinationales dans les pays en développement", "Supprimer l'impôt sur les sociétés afin d'alléger les charges des entreprises"], c: 1, e: "Taxe correctrice égale au coût de l'externalité (Pigou)." },
      { q: "La « tragédie des communs » (Hardin) décrit :", o: ["La surexploitation d'une ressource commune en libre accès", "La réussite des accords climatiques internationaux grâce à la coopération des États", "La disparition de la pollution obtenue par la gestion privée des ressources", "Le fonctionnement efficace d'un marché qui alloue au mieux les ressources rares"], c: 0, e: "Chaque usager rationnel surexploite la ressource, qui s'épuise." },
      { q: "Le « passager clandestin » freine les accords climatiques car :", o: ["Il supporte une part trop lourde de l'effort de réduction au profit des autres", "Il profite des efforts des autres sans contribuer", "Il pollue volontairement davantage pour saboter les négociations internationales", "Il finance seul la transition écologique de l'ensemble des pays signataires"], c: 1, e: "Stratégie de free rider en présence de bien commun." },
      { q: "Elinor Ostrom a montré que :", o: ["Seule la privatisation des ressources permet d'éviter l'épuisement des communs", "Des communautés peuvent gérer durablement des communs par des règles collectives", "L'État central doit gérer lui-même l'ensemble des ressources naturelles communes", "Les ressources communes en libre accès sont toujours condamnées à la surexploitation"], c: 1, e: "Contre Hardin : l'auto-organisation est possible (Nobel 2009)." }
    ],
    vf: [
      { s: "L'action publique pour l'environnement articule plusieurs échelles (locale à mondiale).", a: true, e: "Locale, nationale, européenne, mondiale." },
      { s: "Réglementation, taxation et marchés de quotas sont des instruments de l'action publique environnementale.", a: true, e: "Avec la subvention à l'innovation verte." },
      { s: "Sans intervention, le marché prend correctement en compte une externalité négative.", a: false, e: "C'est une défaillance de marché : le coût n'est pas internalisé." }
    ],
    trous: [
      { t: "Le coût imposé à autrui sans compensation marchande est une _____ négative.", a: "externalité", alt: ["externalite"], e: "Externalité négative." },
      { t: "La taxe correctrice d'une externalité, théorisée par Pigou, est dite _____.", a: "pigouvienne", e: "Taxe pigouvienne." }
    ]
  }
};
