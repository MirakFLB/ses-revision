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
      { q: "Que mesure la productivité globale des facteurs (PGF) ?", o: ["La quantité totale de travail utilisée", "L'efficacité de la combinaison des facteurs de production", "Le niveau général des prix", "Le stock de capital fixe"], c: 1, e: "La PGF est le « résidu » : la part de croissance non expliquée par les quantités de travail et de capital. Elle reflète l'efficacité de leur combinaison, surtout via le progrès technique." },
      { q: "Selon Schumpeter, la « destruction créatrice » désigne :", o: ["La destruction de l'environnement par la croissance", "Le remplacement des activités anciennes par de nouvelles sous l'effet de l'innovation", "Les crises financières à répétition", "La baisse durable de la productivité"], c: 1, e: "L'innovation crée de nouvelles activités et emplois tout en détruisant les anciens : c'est le moteur du capitalisme selon Schumpeter." },
      { q: "Dire que le progrès technique est « endogène » signifie qu'il :", o: ["Tombe du ciel (exogène)", "Est produit par l'économie elle-même (innovation, R&D)", "Ne dépend que de l'État", "Est sans effet sur la croissance"], c: 1, e: "Le progrès technique endogène résulte des choix d'investissement des agents (R&D, capital humain) : théories de la croissance endogène (Romer, Aghion)." },
      { q: "Quel rôle les droits de propriété jouent-ils dans la croissance ?", o: ["Ils découragent l'innovation", "Ils incitent à investir et innover en garantissant l'appropriation des gains", "Ils n'ont aucun effet", "Ils provoquent les crises"], c: 1, e: "En garantissant à l'innovateur les fruits de son innovation, cette institution renforce l'incitation à investir et innover." },
      { q: "Les deux grandes sources de la croissance économique sont :", o: ["L'inflation et le chômage", "L'accumulation des facteurs et la hausse de la PGF", "Les exportations et les importations", "La consommation et l'épargne"], c: 1, e: "La croissance vient de l'accumulation des facteurs (travail, capital) et de l'accroissement de la productivité globale des facteurs." },
      { q: "Une croissance soutenable se heurte notamment à :", o: ["La baisse des prix", "Des limites écologiques (ressources, pollution, climat)", "Un excès de capital humain", "La hausse de la PGF"], c: 1, e: "La soutenabilité bute sur des limites écologiques ; l'innovation peut aider à les reculer." }
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
      { q: "L'avantage comparatif (Ricardo) signifie qu'un pays a intérêt à se spécialiser :", o: ["Dans tout ce qu'il produit moins cher en valeur absolue", "Là où son désavantage est le plus faible (coût relatif le plus bas)", "Uniquement dans l'agriculture", "Dans rien : l'autarcie est préférable"], c: 1, e: "Même sans avantage absolu, un pays gagne à se spécialiser là où son coût relatif est le plus faible, puis à échanger." },
      { q: "Le commerce intra-branche désigne :", o: ["L'échange de produits de branches différentes", "L'échange croisé de produits similaires entre pays comparables", "Le commerce intérieur d'un pays", "La délocalisation"], c: 1, e: "Entre pays comparables, on échange des produits proches (même branche), grâce à la différenciation et la qualité." },
      { q: "La compétitivité hors-prix repose sur :", o: ["Des prix plus bas", "La qualité, l'innovation et le service", "Le seul taux de change", "Les barrières douanières"], c: 1, e: "La compétitivité hors-prix (structurelle) joue sur la qualité/innovation ; la compétitivité-prix joue sur les coûts." },
      { q: "La DIPP (décomposition internationale du processus productif) consiste à :", o: ["Interdire les importations", "Répartir les étapes de fabrication d'un produit entre plusieurs pays", "Fixer un prix mondial unique", "Tout produire dans un seul pays"], c: 1, e: "Les FMN fragmentent la chaîne de valeur en localisant chaque étape là où c'est avantageux." },
      { q: "Au sein de chaque pays, un effet du commerce international peut être :", o: ["La suppression de toute inégalité", "Un accroissement des inégalités de revenus", "La fin de la spécialisation", "Une hausse générale des prix"], c: 1, e: "Le commerce procure des gains moyens (baisse des prix) et réduit les inégalités entre pays, mais peut accroître les inégalités internes." },
      { q: "La théorie HOS explique la spécialisation par :", o: ["Les dotations factorielles", "Le hasard", "La seule taille de la population", "La politique monétaire"], c: 0, e: "Heckscher-Ohlin-Samuelson : chaque pays se spécialise selon le facteur dont il est le mieux doté." }
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
      { q: "Un chômeur au sens du BIT doit :", o: ["Seulement être inscrit à France Travail", "Être sans emploi, disponible et en recherche active", "Ne pas vouloir travailler", "Être à temps partiel"], c: 1, e: "Les trois critères du BIT : sans emploi, disponible sous deux semaines, recherche active." },
      { q: "Le taux de chômage se calcule :", o: ["Chômeurs / population totale", "Chômeurs / population active", "Chômeurs / actifs occupés", "Actifs / chômeurs"], c: 1, e: "Taux de chômage = chômeurs / population active (actifs occupés + chômeurs)." },
      { q: "Le chômage structurel est lié :", o: ["À un ralentissement temporaire de l'activité", "Au fonctionnement du marché du travail (appariement, institutions)", "Uniquement aux saisons", "À l'inflation"], c: 1, e: "Il est durable et indépendant de la conjoncture." },
      { q: "Le salaire d'efficience peut créer du chômage car :", o: ["Il est inférieur au marché", "Il est fixé au-dessus de l'équilibre pour motiver les salariés", "Il est interdit", "Il supprime les asymétries d'information"], c: 1, e: "Payer au-dessus de l'équilibre (pour motiver/retenir) réduit l'embauche → chômage structurel." },
      { q: "Quelle politique vise le chômage conjoncturel ?", o: ["La formation professionnelle", "Le soutien de la demande globale (relance)", "La flexibilisation", "La baisse du salaire minimum"], c: 1, e: "Le soutien de la demande cible le conjoncturel ; formation/flexibilité ciblent le structurel." },
      { q: "Le halo du chômage regroupe :", o: ["Des chômeurs au sens du BIT", "Des inactifs proches de l'emploi, non comptés comme chômeurs", "Des actifs occupés", "Des retraités uniquement"], c: 1, e: "Le halo = personnes souhaitant travailler mais non comptées comme chômeurs BIT (indisponibles ou sans recherche active)." }
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
      { q: "Une bulle spéculative correspond à :", o: ["Un prix d'actif égal à sa valeur fondamentale", "Un prix d'actif qui s'écarte fortement de sa valeur fondamentale", "Une baisse générale des prix", "Une politique monétaire"], c: 1, e: "La spéculation pousse le prix loin de la valeur fondamentale, jusqu'à l'éclatement (krach)." },
      { q: "Une prophétie auto-réalisatrice est :", o: ["Une anticipation qui se réalise du fait des comportements qu'elle induit", "Une prévision toujours fausse", "Une règle prudentielle", "Une politique de la BCE"], c: 0, e: "Anticiper la hausse fait acheter, ce qui fait effectivement monter le prix." },
      { q: "L'aléa moral des banques désigne :", o: ["Une prise de risque excessive car elles s'attendent à être renflouées", "Une obligation légale", "Une baisse des taux", "La titrisation"], c: 0, e: "Si une banque ne supporte pas toutes les conséquences de ses risques (sauvetage attendu), elle en prend davantage." },
      { q: "Pour réduire l'aléa moral, on impose aux banques :", o: ["Un ratio de solvabilité (fonds propres)", "La fermeture", "Un prix unique", "La nationalisation systématique"], c: 0, e: "Le ratio de solvabilité (Bâle) impose un niveau minimal de fonds propres." },
      { q: "Un canal de transmission d'une crise financière à l'économie réelle est :", o: ["La hausse de la productivité", "La contraction du crédit", "La baisse du chômage", "La hausse des exportations"], c: 1, e: "Avec l'effet de richesse négatif et la baisse du prix du collatéral, la contraction du crédit freine l'activité." },
      { q: "La panique bancaire correspond à :", o: ["Des retraits massifs et simultanés des déposants", "Une hausse des dépôts", "Une baisse des taux directeurs", "Un krach immobilier uniquement"], c: 0, e: "La crise de confiance provoque une crise de liquidité, voire la faillite." }
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
      { q: "Dans la zone euro, la politique monétaire est :", o: ["Décidée par chaque État", "Unique et conduite par la BCE", "Interdite", "Fixée par la Commission"], c: 1, e: "Politique monétaire unique et indépendante, conduite par la BCE." },
      { q: "La politique budgétaire dans la zone euro :", o: ["Est unique", "Reste nationale mais encadrée par les traités", "Est décidée par la BCE", "N'existe pas"], c: 1, e: "Chaque État conduit sa politique budgétaire, sous contrainte des traités (PSC)." },
      { q: "Un choc asymétrique :", o: ["Touche tous les pays de la même façon", "Affecte un pays sans (ou différemment) les autres", "Est une politique de la BCE", "Favorise la coordination"], c: 1, e: "Il complique une politique monétaire unique adaptée à tous." },
      { q: "La politique européenne de la concurrence lutte notamment contre :", o: ["Les ententes et abus de position dominante", "Les exportations", "La libre circulation", "L'euro"], c: 0, e: "Elle surveille aussi les concentrations et les aides d'État." },
      { q: "Le marché unique assure la libre circulation :", o: ["Des seules marchandises", "Des biens, services, capitaux et personnes", "Des seuls capitaux", "De rien"], c: 1, e: "Les « quatre libertés » du marché unique." },
      { q: "Une difficulté de la zone euro est :", o: ["L'excès de coordination budgétaire", "Le défaut de coordination face aux chocs asymétriques", "L'absence de monnaie", "Une inflation nulle garantie"], c: 1, e: "Politique monétaire unique + budgets nationaux = risque de défaut de coordination." }
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
      { q: "Les PCS sont une nomenclature de :", o: ["L'INSEE", "L'ONU", "La BCE", "France Travail"], c: 0, e: "Professions et catégories socioprofessionnelles, nomenclature de l'INSEE." },
      { q: "Pour Marx, les classes sociales se définissent par :", o: ["Le prestige", "La place dans les rapports de production", "Le diplôme", "L'âge"], c: 1, e: "Rapport aux moyens de production (bourgeoisie / prolétariat)." },
      { q: "Pour Weber, la stratification est :", o: ["Unidimensionnelle (économique)", "Multidimensionnelle (économique, social, politique)", "Inexistante", "Fondée sur le seul genre"], c: 1, e: "Classes (économique), groupes de statut (social), partis (politique)." },
      { q: "La « moyennisation » (Mendras) désigne :", o: ["La disparition des classes moyennes", "Le développement de couches intermédiaires atténuant les clivages", "La hausse des inégalités", "La tertiarisation"], c: 1, e: "Thèse d'une vaste classe moyenne pendant les Trente Glorieuses." },
      { q: "Parmi les évolutions de la structure socioprofessionnelle depuis 1950 :", o: ["Désalarisation", "Salarisation et tertiarisation", "Baisse des qualifications", "Masculinisation des emplois"], c: 1, e: "Salarisation, tertiarisation, élévation des qualifications, féminisation." },
      { q: "La « classe pour soi » (Marx) suppose :", o: ["Une conscience de classe et une mobilisation", "Aucune conscience", "Un revenu élevé", "Un diplôme"], c: 0, e: "La classe « en soi » devient « pour soi » quand elle a conscience de ses intérêts communs." }
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
      { q: "La massification scolaire désigne :", o: ["La réduction des inégalités selon l'origine", "La hausse quantitative des effectifs scolarisés", "La baisse du niveau", "La privatisation"], c: 1, e: "Hausse quantitative ; à distinguer de la démocratisation." },
      { q: "La démocratisation scolaire désigne :", o: ["La hausse des effectifs", "La réduction des inégalités d'accès/réussite selon l'origine sociale", "La sélection", "La massification"], c: 1, e: "Réduction des inégalités selon l'origine sociale (≠ massification)." },
      { q: "Le capital culturel (Bourdieu) favorise la réussite car :", o: ["Il s'achète", "Il est transmis par la famille et valorisé par l'École", "Il est distribué par l'État", "Il est inutile"], c: 1, e: "L'École valorise le capital culturel des familles favorisées." },
      { q: "Le paradoxe d'Anderson établit que :", o: ["Un diplôme plus élevé que son père garantit une position plus élevée", "Un diplôme supérieur à celui du père n'assure pas une position plus élevée", "L'école est neutre", "Les diplômes ne servent à rien"], c: 1, e: "À cause de l'inflation/dévaluation des diplômes." },
      { q: "Pour Boudon, les inégalités scolaires s'expliquent surtout par :", o: ["Le capital culturel uniquement", "Les calculs coût/avantage des familles selon leur position", "Le hasard", "La génétique"], c: 1, e: "Individualisme méthodologique : stratégies familiales rationnelles." }
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
      { q: "La mobilité sociale intergénérationnelle compare :", o: ["La position d'un individu au début et à la fin de sa carrière", "La position de l'enfant à celle de son parent", "Deux pays", "Deux régions"], c: 1, e: "Entre générations (parent → enfant). Au cours d'une vie = intragénérationnelle." },
      { q: "La table de destinée répond à la question :", o: ["D'où viennent les individus d'une position donnée ?", "Que deviennent les enfants d'une origine donnée ?", "Combien de classes existe-t-il ?", "Quel est le revenu moyen ?"], c: 1, e: "Destinée = devenir des enfants selon leur origine (lecture en lignes)." },
      { q: "La mobilité structurelle est due :", o: ["À l'évolution de la structure des emplois", "Au seul mérite", "Aux migrations", "À la fluidité"], c: 0, e: "La transformation des emplois « force » une partie de la mobilité." },
      { q: "La fluidité sociale mesure :", o: ["La mobilité totale observée", "Le degré d'indépendance entre origine et position (égalité des chances)", "La croissance", "Le chômage"], c: 1, e: "Mobilité « pure », indépendante des changements de structure." },
      { q: "Une société plus mobile est-elle forcément plus fluide ?", o: ["Oui, toujours", "Non : la mobilité peut venir des changements de structure", "Oui par définition", "La question n'a pas de sens"], c: 1, e: "La mobilité observée inclut une part structurelle : plus de mobilité ne signifie pas plus d'égalité des chances." },
      { q: "Le déclassement correspond à :", o: ["Une mobilité ascendante", "Une mobilité descendante", "Une immobilité", "Une mobilité géographique"], c: 1, e: "Position de l'enfant inférieure à celle du parent." }
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
      { q: "Le taylorisme (OST) repose sur :", o: ["La polyvalence et l'autonomie", "La division horizontale et verticale du travail", "Le télétravail", "L'absence de hiérarchie"], c: 1, e: "Parcellisation (horizontale) + séparation conception/exécution (verticale)." },
      { q: "La division verticale du travail sépare :", o: ["La conception et l'exécution", "Deux usines", "Deux pays", "Les ventes et les achats"], c: 0, e: "Les ingénieurs conçoivent, les ouvriers exécutent (Taylor)." },
      { q: "Le post-taylorisme se caractérise par :", o: ["Plus de parcellisation", "Flexibilité, recomposition des tâches, management participatif", "Le salaire au rendement strict", "La chaîne de montage"], c: 1, e: "Rupture avec la parcellisation taylorienne." },
      { q: "La polarisation des emplois désigne :", o: ["La hausse des seuls emplois intermédiaires", "La croissance des emplois très et peu qualifiés au détriment des intermédiaires", "La fin du salariat", "La baisse du chômage"], c: 1, e: "Le numérique accentue cette polarisation." },
      { q: "Le travail est source d'intégration sociale car :", o: ["Il procure revenu, statut et liens sociaux", "Il est obligatoire", "Il supprime les classes", "Il est toujours précaire"], c: 0, e: "La précarisation peut affaiblir ce pouvoir intégrateur." },
      { q: "Le numérique (télétravail) tend à :", o: ["Clarifier nettement les frontières travail/hors-travail", "Brouiller les frontières du travail", "Supprimer l'emploi", "Interdire la flexibilité"], c: 1, e: "Il brouille les frontières et transforme les relations d'emploi." }
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
      { q: "Le paradoxe de l'action collective (Olson) montre que :", o: ["Les individus s'engagent toujours", "Un individu rationnel a intérêt à être passager clandestin", "L'engagement est gratuit", "Le vote est obligatoire"], c: 1, e: "Pourquoi s'engager si l'on profite du résultat sans participer ?" },
      { q: "Les incitations sélectives servent à :", o: ["Décourager l'engagement", "Réserver des avantages aux participants pour les inciter à s'engager", "Punir les votants", "Financer l'État"], c: 1, e: "Réponse d'Olson au paradoxe de l'action collective." },
      { q: "Les rétributions symboliques (Gaxie) sont :", o: ["Des salaires", "Des gratifications non matérielles (reconnaissance, sociabilité)", "Des amendes", "Des impôts"], c: 1, e: "Elles expliquent l'engagement au-delà du calcul coûts-avantages." },
      { q: "Le répertoire d'action collective (Tilly) désigne :", o: ["La liste des partis", "L'ensemble des formes de mobilisation disponibles à une époque", "Le programme électoral", "Le budget d'une association"], c: 1, e: "Manifestation, grève, pétition, occupation…" },
      { q: "Parmi ces formes d'engagement politique :", o: ["Seulement le vote", "Vote, militantisme, engagement associatif, consommation engagée", "Seulement la grève", "Aucune"], c: 1, e: "L'engagement prend des formes variées." },
      { q: "Un « passager clandestin » est quelqu'un qui :", o: ["Paie pour les autres", "Profite de l'action collective sans y contribuer", "Organise la mobilisation", "Vote blanc"], c: 1, e: "Free rider : il bénéficie du bien public sans en supporter les coûts." }
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
      { q: "Le coefficient de Gini vaut 0 quand :", o: ["Les inégalités sont maximales", "L'égalité est parfaite", "Le PIB est nul", "Tout le monde est pauvre"], c: 1, e: "Gini ∈ [0;1] : 0 = égalité parfaite, proche de 1 = inégalité extrême." },
      { q: "La courbe de Lorenz représente :", o: ["L'inflation", "La répartition cumulée d'un revenu/patrimoine dans la population", "Le chômage", "La croissance"], c: 1, e: "Part cumulée de la population vs part cumulée du revenu/patrimoine." },
      { q: "Pour Rawls, les inégalités sont justes si :", o: ["Elles profitent aux plus favorisés", "Elles bénéficient aux plus défavorisés (principe de différence)", "Elles sont supprimées", "Elles sont maximales"], c: 1, e: "Égalitarisme libéral : maximin." },
      { q: "Le libertarisme (Nozick) privilégie :", o: ["La redistribution maximale", "Les droits de propriété et les échanges libres", "L'égalité stricte des revenus", "L'utilité totale"], c: 1, e: "Une distribution est juste si elle résulte d'échanges libres." },
      { q: "L'utilitarisme (Bentham) juge une société à :", o: ["La somme totale des utilités (bonheur)", "La seule égalité des droits", "La taille de l'État", "Le niveau du Gini"], c: 0, e: "Maximiser l'utilité totale, sans s'intéresser à sa répartition." },
      { q: "Le rapport inter-décile D9/D1 mesure :", o: ["L'écart entre les plus riches et les plus pauvres", "Le taux de croissance", "Le chômage", "L'inflation"], c: 0, e: "Outil statique de mesure des inégalités." }
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
      { q: "Une externalité négative est :", o: ["Un bénéfice non payé", "Un coût imposé à autrui sans compensation (ex. pollution)", "Une subvention", "Une taxe"], c: 1, e: "Défaillance de marché : le coût n'est pas supporté par le pollueur." },
      { q: "Un marché de quotas d'émission :", o: ["Interdit toute pollution", "Plafonne les émissions et laisse s'échanger des droits à polluer", "Subventionne le pétrole", "Fixe un prix administré unique"], c: 1, e: "L'État fixe un plafond ; le prix du quota se forme par l'offre et la demande." },
      { q: "La taxe pigouvienne vise à :", o: ["Augmenter le PIB", "Internaliser le coût de l'externalité (faire payer le pollueur)", "Financer les FMN", "Supprimer l'impôt"], c: 1, e: "Taxe correctrice égale au coût de l'externalité (Pigou)." },
      { q: "La « tragédie des communs » (Hardin) décrit :", o: ["La surexploitation d'une ressource commune en libre accès", "La réussite des accords climatiques", "La fin de la pollution", "Un marché efficace"], c: 0, e: "Chaque usager rationnel surexploite la ressource, qui s'épuise." },
      { q: "Le « passager clandestin » freine les accords climatiques car :", o: ["Il paie trop", "Il profite des efforts des autres sans contribuer", "Il pollue volontairement", "Il finance la transition"], c: 1, e: "Stratégie de free rider en présence de bien commun." },
      { q: "Elinor Ostrom a montré que :", o: ["Seule la privatisation sauve les communs", "Des communautés peuvent gérer durablement des communs par des règles collectives", "L'État doit tout gérer", "Les communs sont toujours surexploités"], c: 1, e: "Contre Hardin : l'auto-organisation est possible (Nobel 2009)." }
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
