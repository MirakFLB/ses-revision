/* =====================================================================
   SES Terminale — Données de révision (Bac 2026)
   ---------------------------------------------------------------------
   SOURCES OFFICIELLES :
   - Programme : BO spécial n°8 du 25 juillet 2019 (arrêté du 19-7-2019),
     annexe « Programme de SES de terminale générale ».
   - Épreuve & questions évaluables : Note de service consolidée
     (version septembre 2024), dispositions en vigueur à compter de la
     session 2025 — NOR MENE2001800N / MENE2323020N / MENE2416667N.

   Les "objectifs d'apprentissage" et les libellés de chapitres sont
   reproduits VERBATIM du programme officiel.
   Les "notions" et les rappels de méthode/formules sont des
   AIDE-MÉMOIRE de révision (non officiels), fidèles au programme.
   ===================================================================== */

window.SES_DATA = {
  meta: {
    matiere: "Sciences économiques et sociales",
    niveau: "Terminale générale — spécialité",
    session: "Baccalauréat 2026",
    coefficient: 16,
    duree: "4 heures",
    datesEcrit: "16–17 juin 2026",
    sourceProgramme: "Programme officiel — BO spécial n°8 du 25 juillet 2019",
    sourceEpreuve: "Note de service consolidée (sept. 2024) — épreuve en vigueur à compter de la session 2025",
    note9: "Depuis la session 2025, l'épreuve écrite ne porte que sur 9 des 12 questions du programme (plus de rotation années paires/impaires). Les 3 autres restent au programme et sont mobilisables au Grand Oral."
  },

  parts: [
    /* ============================ SCIENCE ÉCONOMIQUE ============================ */
    {
      id: "eco",
      name: "Science économique",
      short: "Économie",
      accent: "eco",
      chapters: [
        {
          id: "eco-croissance",
          num: 1,
          title: "Quels sont les sources et les défis de la croissance économique ?",
          ecrit: true,
          objectifs: [
            "Comprendre le processus de croissance économique et les sources de la croissance : accumulation des facteurs et accroissement de la productivité globale des facteurs ; comprendre le lien entre le progrès technique et l'accroissement de la productivité globale des facteurs.",
            "Comprendre que le progrès technique est endogène et qu'il résulte en particulier de l'innovation.",
            "Comprendre comment les institutions (notamment les droits de propriété) influent sur la croissance en affectant l'incitation à investir et innover ; savoir que l'innovation s'accompagne d'un processus de destruction créatrice.",
            "Comprendre comment le progrès technique peut engendrer des inégalités de revenus.",
            "Comprendre qu'une croissance économique soutenable se heurte à des limites écologiques (notamment l'épuisement des ressources, la pollution et le réchauffement climatique) et que l'innovation peut aider à reculer ces limites."
          ],
          notions: [
            { t: "Croissance économique", d: "Augmentation soutenue de la production de biens et services sur longue période, mesurée par le taux de croissance du PIB réel." },
            { t: "Facteurs de production", d: "Travail et capital dont l'accumulation (quantité) alimente la croissance extensive." },
            { t: "Productivité globale des facteurs (PGF)", d: "Part de la croissance non expliquée par l'accumulation des facteurs ; mesure l'efficacité de leur combinaison, tirée surtout par le progrès technique (le « résidu »)." },
            { t: "Progrès technique endogène", d: "Le progrès technique est produit par le système économique lui-même (innovation, R&D, capital humain), il n'est pas une donnée extérieure." },
            { t: "Droits de propriété", d: "Institution garantissant à l'innovateur l'appropriation des fruits de son innovation, ce qui l'incite à investir et innover." },
            { t: "Destruction créatrice (Schumpeter)", d: "Processus par lequel les innovations détruisent des activités et des emplois anciens tout en en créant de nouveaux." },
            { t: "Croissance soutenable", d: "Croissance compatible avec les limites écologiques (épuisement des ressources, pollution, réchauffement) ; soutenabilité faible (capital substituable) vs forte." }
          ]
        },
        {
          id: "eco-commerce",
          num: 2,
          title: "Quels sont les fondements du commerce international et de l'internationalisation de la production ?",
          ecrit: true,
          objectifs: [
            "Comprendre le rôle des dotations factorielles et technologiques (avantages comparatifs) dans les échanges commerciaux et la spécialisation internationale.",
            "Comprendre le commerce entre pays comparables (différenciation des produits, qualité des produits, et fragmentation de la chaîne de valeur).",
            "Comprendre que la productivité des firmes sous-tend la compétitivité d'un pays, c'est-à-dire son aptitude à exporter.",
            "Comprendre l'internationalisation de la chaîne de valeur et savoir l'illustrer.",
            "Comprendre les effets induits par le commerce international : gains moyens en termes de baisse de prix, réduction des inégalités entre pays, accroissement des inégalités de revenus au sein de chaque pays ; comprendre les termes du débat entre libre-échange et protectionnisme."
          ],
          notions: [
            { t: "Avantage comparatif (Ricardo)", d: "Un pays gagne à se spécialiser dans la production où son désavantage est le plus faible (ou son avantage le plus fort) relativement aux autres." },
            { t: "Dotations factorielles (HOS)", d: "Abondance relative d'un pays en facteurs (travail, capital, ressources) qui fonde sa spécialisation." },
            { t: "Commerce intra-branche", d: "Échanges de produits similaires entre pays comparables, fondés sur la différenciation et la qualité des produits." },
            { t: "Compétitivité", d: "Aptitude d'un pays à exporter : compétitivité-prix (coûts) et compétitivité hors-prix (qualité, innovation)." },
            { t: "Chaîne de valeur (DIPP)", d: "Décomposition internationale du processus productif : chaque étape est réalisée là où elle est la plus avantageuse." },
            { t: "Libre-échange / protectionnisme", d: "Débat sur l'ouverture commerciale : gains (baisse des prix, efficacité) vs coûts (inégalités internes, dépendance)." }
          ]
        },
        {
          id: "eco-chomage",
          num: 3,
          title: "Comment lutter contre le chômage ?",
          ecrit: true,
          objectifs: [
            "Savoir définir le chômage et le sous-emploi et connaître les indicateurs de taux de chômage et de taux d'emploi.",
            "Comprendre que les problèmes d'appariements (frictions, inadéquations spatiales et de qualifications) et les asymétries d'information (salaire d'efficience) sont des sources de chômage structurel.",
            "Comprendre les effets (positifs ou négatifs) des institutions sur le chômage structurel (notamment salaire minimum et règles de protection de l'emploi).",
            "Comprendre les effets des fluctuations de l'activité économique sur le chômage conjoncturel.",
            "Connaître les principales politiques mises en œuvre pour lutter contre le chômage : politiques macroéconomiques de soutien de la demande globale, politiques d'allégement du coût du travail, politiques de formation et politiques de flexibilisation pour lutter contre les rigidités du marché du travail."
          ],
          notions: [
            { t: "Chômage (BIT)", d: "Personne sans emploi, disponible pour travailler et qui effectue une recherche active d'emploi." },
            { t: "Sous-emploi", d: "Situation des actifs occupés à temps partiel subi ou travaillant moins qu'ils ne le souhaiteraient." },
            { t: "Taux de chômage / taux d'emploi", d: "Taux de chômage = chômeurs / population active. Taux d'emploi = actifs occupés / population en âge de travailler." },
            { t: "Chômage structurel", d: "Chômage lié au fonctionnement du marché du travail (appariement, qualifications, institutions), indépendant de la conjoncture." },
            { t: "Chômage conjoncturel", d: "Chômage lié au ralentissement de l'activité économique (insuffisance de la demande globale)." },
            { t: "Salaire d'efficience", d: "Salaire supérieur à l'équilibre versé pour motiver et retenir les salariés (asymétrie d'information) ; source de chômage structurel." },
            { t: "Flexibilité / rigidités", d: "Politiques d'assouplissement du marché du travail visant à réduire les rigidités (protection de l'emploi, coût du travail)." }
          ]
        },
        {
          id: "eco-crises",
          num: 4,
          title: "Comment expliquer les crises financières et réguler le système financier ?",
          ecrit: false,
          objectifs: [
            "Connaître les principales caractéristiques de la crise financière des années 1930 et de celle de 2008 (effondrement boursier, faillites en chaîne, chute du PIB et accroissement du chômage).",
            "Comprendre et savoir illustrer la formation et l'éclatement d'une bulle spéculative (comportements mimétiques et prophéties auto réalisatrices).",
            "Comprendre les phénomènes de panique bancaire et de faillites bancaires en chaîne.",
            "Connaître les principaux canaux de transmission d'une crise financière à l'économie réelle : effets de richesse négatif, baisse du prix du collatéral et ventes forcées, contraction du crédit.",
            "Connaître les principaux instruments de régulation du système bancaire et financier qui permettent de réduire l'aléa moral des banques : supervision des banques par la banque centrale, ratio de solvabilité."
          ],
          notions: [
            { t: "Bulle spéculative", d: "Écart auto-entretenu et croissant entre le prix d'un actif et sa valeur fondamentale, suivi d'un éclatement." },
            { t: "Comportements mimétiques", d: "Imitation des autres agents (comportement moutonnier) qui alimente la hausse puis la chute des prix." },
            { t: "Prophéties auto-réalisatrices", d: "Anticipations qui se réalisent du seul fait des comportements qu'elles induisent." },
            { t: "Panique bancaire (bank run)", d: "Retraits massifs et simultanés des déposants qui peuvent provoquer la faillite d'une banque solvable." },
            { t: "Aléa moral", d: "Prise de risque excessive d'un agent qui ne supporte pas toutes les conséquences de ses actes (sauvetage anticipé)." },
            { t: "Ratio de solvabilité", d: "Niveau minimal de fonds propres imposé aux banques pour absorber leurs pertes (régulation prudentielle)." },
            { t: "Effet de richesse", d: "Variation de la consommation provoquée par la variation de la valeur du patrimoine des ménages." }
          ]
        },
        {
          id: "eco-europe",
          num: 5,
          title: "Quelles politiques économiques dans le cadre européen ?",
          ecrit: true,
          objectifs: [
            "Connaître les grandes caractéristiques de l'intégration européenne (marché unique et zone euro) ; comprendre les effets du marché unique sur la croissance.",
            "Comprendre les objectifs, les modalités et les limites de la politique européenne de la concurrence.",
            "Comprendre comment la politique monétaire et la politique budgétaire agissent sur la conjoncture.",
            "Savoir que la politique monétaire dans la zone euro, conduite de façon indépendante par la Banque centrale européenne, est unique alors que la politique budgétaire est du ressort de chaque pays membre mais contrainte par les traités européens ; comprendre les difficultés soulevées par cette situation (défaut de coordination, chocs asymétriques)."
          ],
          notions: [
            { t: "Marché unique", d: "Espace de libre circulation des biens, services, capitaux et personnes au sein de l'Union européenne." },
            { t: "Zone euro", d: "Union monétaire des pays ayant adopté l'euro, avec une monnaie et une politique monétaire uniques." },
            { t: "Politique monétaire", d: "Action de la BCE sur les taux d'intérêt et la masse monétaire ; unique et indépendante dans la zone euro." },
            { t: "Politique budgétaire", d: "Action de l'État via ses dépenses et recettes ; nationale, mais contrainte par les traités européens." },
            { t: "Politique de la concurrence", d: "Lutte contre les ententes, abus de position dominante, contrôle des concentrations et des aides d'État." },
            { t: "Choc asymétrique", d: "Choc affectant différemment les pays d'une zone monétaire, rendant difficile une politique monétaire unique." },
            { t: "Défaut de coordination", d: "Absence d'harmonisation des politiques budgétaires nationales au sein de la zone euro." }
          ]
        }
      ]
    },

    /* ===================== SOCIOLOGIE ET SCIENCE POLITIQUE ===================== */
    {
      id: "socio",
      name: "Sociologie et science politique",
      short: "Socio / SP",
      accent: "socio",
      chapters: [
        {
          id: "socio-structure",
          num: 6,
          title: "Comment est structurée la société française actuelle ?",
          ecrit: true,
          objectifs: [
            "Savoir identifier les multiples facteurs de structuration et de hiérarchisation de l'espace social (catégorie socioprofessionnelle, revenu, diplôme, composition du ménage, position dans le cycle de vie, sexe, lieu de résidence).",
            "Comprendre les principales évolutions de la structure socioprofessionnelle en France depuis la seconde moitié du XXe siècle (salarisation, tertiarisation, élévation du niveau de qualification, féminisation des emplois).",
            "Connaître les théories des classes et de la stratification sociale dans la tradition sociologique (Marx, Weber) ; comprendre que la pertinence d'une approche en termes de classes sociales pour rendre compte de la société française fait l'objet de débats théoriques et statistiques : évolution des distances inter- et intra-classes, articulation avec les rapports sociaux de genre, identifications subjectives à un groupe social, multiplication des facteurs d'individualisation."
          ],
          notions: [
            { t: "Espace social", d: "Représentation hiérarchisée des positions sociales selon plusieurs dimensions (Bourdieu)." },
            { t: "PCS", d: "Professions et catégories socioprofessionnelles : nomenclature de l'INSEE classant la population active." },
            { t: "Facteurs de structuration", d: "PCS, revenu, diplôme, âge, sexe, lieu de résidence, composition du ménage : critères qui hiérarchisent l'espace social." },
            { t: "Salarisation / tertiarisation / féminisation", d: "Grandes évolutions de la structure socioprofessionnelle française depuis 1950." },
            { t: "Classes sociales (Marx)", d: "Groupes définis par leur place dans les rapports de production ; classe « en soi » et « pour soi » (conscience de classe)." },
            { t: "Stratification (Weber)", d: "Hiérarchie multidimensionnelle : ordre économique (classes), social (groupes de statut) et politique (partis)." },
            { t: "Moyennisation / individualisation", d: "Thèses de réduction des distances entre groupes (moyennisation) et d'affaiblissement des appartenances collectives." }
          ]
        },
        {
          id: "socio-ecole",
          num: 7,
          title: "Quelle est l'action de l'École sur les destins individuels et sur l'évolution de la société ?",
          ecrit: false,
          objectifs: [
            "Comprendre que, dans les sociétés démocratiques, l'École transmet des savoirs et vise à favoriser l'égalité des chances ; comprendre l'évolution, depuis les années 1950, des principaux indicateurs mesurant l'accès à l'école et à l'enseignement supérieur (taux de scolarisation, taux d'accès à un diplôme ou à un type de formation) en distinguant les processus de massification et de démocratisation.",
            "Comprendre la multiplicité des facteurs d'inégalités de réussite scolaire (notamment, rôle de l'École, rôle du capital culturel et des investissements familiaux, socialisation selon le genre, effets des stratégies des ménages) dans la construction des trajectoires individuelles de formation."
          ],
          notions: [
            { t: "Massification scolaire", d: "Augmentation quantitative et générale des effectifs scolarisés et de l'accès aux diplômes." },
            { t: "Démocratisation", d: "Réduction des inégalités d'accès à l'école selon l'origine sociale (à distinguer de la simple massification)." },
            { t: "Égalité des chances", d: "Objectif de neutraliser le poids de l'origine sociale dans la réussite scolaire et les trajectoires." },
            { t: "Capital culturel (Bourdieu)", d: "Ressources culturelles transmises par la famille (savoirs, langage, rapport à l'école) favorisant la réussite." },
            { t: "Inégalités de réussite scolaire", d: "Écarts de réussite liés à l'École, au capital culturel et aux stratégies familiales, à la socialisation de genre." },
            { t: "Stratégies des ménages", d: "Choix scolaires des familles (établissement, options, orientation) influençant les trajectoires." }
          ]
        },
        {
          id: "socio-mobilite",
          num: 8,
          title: "Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ?",
          ecrit: true,
          objectifs: [
            "Savoir distinguer la mobilité sociale intergénérationnelle des autres formes de mobilité (géographique, professionnelle).",
            "Comprendre les principes de construction, les intérêts et les limites des tables de mobilité comme instrument de mesure de la mobilité sociale.",
            "Comprendre que la mobilité observée comporte une composante structurelle (mobilité structurelle) ; comprendre que la mobilité peut aussi se mesurer de manière relative indépendamment des différences de structure entre origine et position sociales (fluidité sociale) et qu'une société plus mobile n'est pas nécessairement une société plus fluide.",
            "À partir de la lecture des tables de mobilité, être capable de mettre en évidence des situations de mobilité ascendante, de reproduction sociale et de déclassement, et de retrouver les spécificités de la mobilité sociale des hommes et de celles des femmes.",
            "Comprendre comment l'évolution de la structure socioprofessionnelle, les niveaux de formation et les ressources et configurations familiales contribuent à expliquer la mobilité sociale."
          ],
          notions: [
            { t: "Mobilité intergénérationnelle", d: "Changement de position sociale entre la génération des parents et celle des enfants." },
            { t: "Tables de mobilité", d: "Tableaux croisant l'origine sociale et la position sociale ; tables de destinée et de recrutement." },
            { t: "Mobilité structurelle", d: "Part de la mobilité due à l'évolution de la structure des emplois (création/disparition de positions)." },
            { t: "Fluidité sociale", d: "Mobilité « pure », indépendante des changements de structure ; mesure l'égalité des chances relative." },
            { t: "Reproduction sociale", d: "Maintien des enfants dans la position sociale de leurs parents (immobilité)." },
            { t: "Déclassement", d: "Position sociale de l'enfant inférieure à celle de ses parents (mobilité descendante)." },
            { t: "Destinée / Recrutement", d: "Destinée : que deviennent les enfants d'une origine donnée. Recrutement : d'où viennent ceux d'une position donnée." }
          ]
        },
        {
          id: "socio-travail",
          num: 9,
          title: "Quelles mutations du travail et de l'emploi ?",
          ecrit: true,
          objectifs: [
            "Savoir distinguer les notions de travail, activité, statut d'emploi (salarié, non-salarié), chômage ; comprendre que les évolutions des formes d'emploi rendent plus incertaines les frontières entre emploi, chômage et inactivité.",
            "Connaître les principaux descripteurs de la qualité des emplois (conditions de travail, niveau de salaire, sécurité économique, horizon de carrière, potentiel de formation, variété des tâches).",
            "Comprendre les principales caractéristiques des modèles d'organisation taylorien (division du travail horizontale et verticale, relation hiérarchique stricte) et post-taylorien (flexibilité, recomposition des tâches, management participatif) ; comprendre les effets positifs et négatifs de l'évolution des formes de l'organisation du travail sur les conditions de travail.",
            "Comprendre comment le numérique brouille les frontières du travail (télétravail, travail / hors travail), transforme les relations d'emploi et accroît les risques de polarisation des emplois.",
            "Comprendre que le travail est source d'intégration sociale et que certaines évolutions de l'emploi (précarisation, taux persistant de chômage élevé, polarisation de la qualité des emplois) peuvent affaiblir ce pouvoir intégrateur."
          ],
          notions: [
            { t: "Travail / activité / emploi", d: "Travail = activité productive ; activité = emploi + chômage ; emploi = exercice du travail dans un cadre statutaire." },
            { t: "Statut d'emploi", d: "Forme juridique de l'emploi : salarié (CDI, CDD…) ou non-salarié (indépendant)." },
            { t: "Qualité de l'emploi", d: "Conditions de travail, salaire, sécurité économique, carrière, formation, variété des tâches." },
            { t: "Taylorisme (OST)", d: "Organisation scientifique du travail : division horizontale et verticale, parcellisation, hiérarchie stricte." },
            { t: "Post-taylorisme", d: "Modèles fondés sur la flexibilité, la recomposition des tâches et le management participatif." },
            { t: "Polarisation des emplois", d: "Croissance des emplois très qualifiés et peu qualifiés au détriment des emplois intermédiaires." },
            { t: "Intégration sociale par le travail", d: "Le travail procure revenu, statut et liens sociaux ; la précarité affaiblit ce pouvoir intégrateur." }
          ]
        },
        {
          id: "socio-engagement",
          num: 10,
          title: "Comment expliquer l'engagement politique dans les sociétés démocratiques ?",
          ecrit: true,
          objectifs: [
            "Comprendre que l'engagement politique prend des formes variées (vote, militantisme, engagement associatif, consommation engagée).",
            "Comprendre pourquoi, malgré le paradoxe de l'action collective, les individus s'engagent (incitations sélectives, rétributions symboliques, structure des opportunités politiques).",
            "Comprendre que l'engagement politique dépend notamment de variables sociodémographiques (catégorie socioprofessionnelle, diplôme, âge et génération, sexe).",
            "Comprendre la diversité et les transformations des objets de l'action collective (conflits du travail, nouveaux enjeux de mobilisation, luttes minoritaires), des acteurs (partis politiques, syndicats, associations, groupements) et de leurs répertoires."
          ],
          notions: [
            { t: "Engagement politique", d: "Participation à la vie politique sous des formes variées : vote, militantisme, engagement associatif, consommation engagée." },
            { t: "Paradoxe de l'action collective (Olson)", d: "Rationnellement, l'individu a intérêt à ne pas s'engager et à profiter de l'action des autres (passager clandestin)." },
            { t: "Incitations sélectives", d: "Avantages réservés aux seuls participants pour les inciter à s'engager (et résoudre le paradoxe d'Olson)." },
            { t: "Rétributions symboliques", d: "Gratifications non matérielles tirées de l'engagement : reconnaissance, sociabilité, identité." },
            { t: "Structure des opportunités politiques", d: "Contexte politique plus ou moins favorable qui facilite ou freine la mobilisation." },
            { t: "Variables sociodémographiques", d: "CSP, diplôme, âge/génération, sexe : facteurs qui structurent l'intensité et la forme de l'engagement." },
            { t: "Répertoire d'action collective (Tilly)", d: "Ensemble des moyens d'action dont dispose un groupe à une époque (manifestation, grève, pétition, occupation…)." }
          ]
        }
      ]
    },

    /* ============================ REGARDS CROISÉS ============================ */
    {
      id: "rc",
      name: "Regards croisés",
      short: "Regards croisés",
      accent: "rc",
      chapters: [
        {
          id: "rc-justice",
          num: 11,
          title: "Quelles inégalités sont compatibles avec les différentes conceptions de la justice sociale ?",
          ecrit: false,
          objectifs: [
            "Connaître les grandes tendances d'évolution des inégalités économiques depuis le début du XXe siècle et comprendre que les inégalités économiques et sociales présentent un caractère multiforme et cumulatif.",
            "Savoir interpréter les principaux outils de mesure des inégalités, statique (rapport inter-quantiles, courbe de Lorenz et coefficient de Gini, top 1%) et dynamique (corrélation de revenu parents-enfants).",
            "Comprendre que les différentes formes d'égalité (égalité des droits, des chances ou des situations) permettent de définir ce qui est considéré comme juste selon différentes conceptions de la justice sociale (notamment l'utilitarisme, le libertarisme, l'égalitarisme libéral, l'égalitarisme strict).",
            "Comprendre que l'action des pouvoirs publics en matière de justice sociale (fiscalité, protection sociale, services collectifs, mesures de lutte contre les discriminations) s'exerce sous contrainte de financement et fait l'objet de débats en termes d'efficacité (réduction des inégalités), de légitimité (notamment consentement à l'impôt) et de risque d'effets pervers (désincitations)."
          ],
          notions: [
            { t: "Inégalités multiformes et cumulatives", d: "Inégalités économiques et sociales qui se renforcent mutuellement (revenu, patrimoine, éducation, santé…)." },
            { t: "Courbe de Lorenz / coefficient de Gini", d: "Outils de mesure de la concentration des revenus ou patrimoines ; Gini entre 0 (égalité parfaite) et 1 (inégalité maximale)." },
            { t: "Rapport inter-quantiles / top 1%", d: "Outils statiques de mesure des inégalités (ex. D9/D1, part du revenu détenue par les 1% les plus riches)." },
            { t: "Formes d'égalité", d: "Égalité des droits, des chances et des situations : trois conceptions distinctes de ce qui est juste." },
            { t: "Conceptions de la justice sociale", d: "Utilitarisme, libertarisme, égalitarisme libéral (Rawls), égalitarisme strict : visions concurrentes du juste." },
            { t: "Redistribution", d: "Action des pouvoirs publics (fiscalité, protection sociale, services collectifs) réduisant les inégalités." },
            { t: "Effets pervers / désincitations", d: "Effets négatifs non voulus de la redistribution (par ex. désincitation au travail ou à l'effort)." }
          ]
        },
        {
          id: "rc-environnement",
          num: 12,
          title: "Quelle action publique pour l'environnement ?",
          ecrit: true,
          objectifs: [
            "Savoir identifier les différents acteurs (pouvoirs publics, ONG, entreprises, experts, partis, mouvements citoyens) qui participent à la construction des questions environnementales comme problème public et à leur mise à l'agenda politique ; comprendre que ces acteurs entretiennent des relations de coopération et de conflit.",
            "Comprendre que l'action publique pour l'environnement articule différentes échelles (locale, nationale, européenne, mondiale).",
            { text: "En prenant l'exemple du changement climatique :", subs: [
              "connaître les principaux instruments dont disposent les pouvoirs publics pour faire face aux externalités négatives sur l'environnement : réglementation, marchés de quotas d'émission, taxation, subvention à l'innovation verte ; comprendre que ces différents instruments présentent des avantages et des limites, et que leur mise en œuvre peut se heurter à des dysfonctionnements de l'action publique ;",
              "comprendre qu'en présence de bien commun les négociations et accords internationaux liés à la préservation de l'environnement sont contraints par des stratégies de passager clandestin et les inégalités de développement entre pays."
            ]}
          ],
          notions: [
            { t: "Problème public", d: "Question construite par des acteurs comme nécessitant une action publique, puis inscrite à l'agenda politique." },
            { t: "Acteurs de l'environnement", d: "Pouvoirs publics, ONG, entreprises, experts, partis, mouvements citoyens ; relations de coopération et de conflit." },
            { t: "Externalité négative", d: "Coût imposé à un tiers sans compensation par le marché (ex. pollution, émissions de CO₂)." },
            { t: "Instruments de l'action publique", d: "Réglementation, marché de quotas d'émission, taxation, subvention à l'innovation verte." },
            { t: "Bien commun", d: "Ressource partagée, non exclusive mais rivale, exposée à la surexploitation (ex. climat, atmosphère)." },
            { t: "Passager clandestin", d: "Acteur qui profite d'un bien commun sans contribuer à son financement ; frein aux accords internationaux." },
            { t: "Échelles d'action", d: "L'action environnementale s'articule du local au mondial (locale, nationale, européenne, mondiale)." }
          ]
        }
      ]
    }
  ],

  /* ===================== SAVOIR-FAIRE QUANTITATIFS (officiel) ===================== */
  quantitatif: {
    intro: "Objectifs d'apprentissage concernant l'utilisation des données quantitatives et des représentations graphiques (programme officiel). Les formules sont des aide-mémoire.",
    groupes: [
      {
        titre: "Calcul, lecture, interprétation",
        outils: [
          { t: "Proportion / pourcentage de répartition", f: "Proportion = (partie / ensemble) × 100. Les parts d'une répartition somment à 100 %.", note: "Sert notamment à transformer une table de mobilité en tables de destinée et de recrutement." },
          { t: "Taux de variation", f: "TV = ((V arrivée − V départ) / V départ) × 100", note: "Mesure une évolution en %." },
          { t: "Taux de variation cumulé", f: "À partir des coefficients multiplicateurs : CM total = CM₁ × CM₂ × … ; TV cumulé = (CM total − 1) × 100", note: "On multiplie les CM, on n'additionne pas les taux." },
          { t: "Coefficient multiplicateur", f: "CM = V arrivée / V départ = 1 + (TV / 100)", note: "Mesure combien la valeur a été multipliée." },
          { t: "Indice simple (base 100)", f: "Indice = (V t / V base) × 100", note: "Indice − 100 = taux de variation depuis la base." },
          { t: "Moyenne arithmétique simple et pondérée", f: "Simple = (Σ valeurs) / n. Pondérée = Σ(valeur × effectif) / Σ effectifs.", note: "La pondérée tient compte du poids de chaque valeur." }
        ]
      },
      {
        titre: "Lecture et interprétation",
        outils: [
          { t: "Indice synthétique", f: "Indicateur agrégeant plusieurs dimensions en une valeur (ex. IDH).", note: "À lire, pas à calculer." },
          { t: "Médiane", f: "Valeur qui partage une série ordonnée en deux moitiés égales (50 % au-dessous, 50 % au-dessus).", note: "Moins sensible aux valeurs extrêmes que la moyenne." },
          { t: "Écart et rapport inter-quantile", f: "Rapport (ex. D9/D1) = quantile haut / quantile bas. Écart = différence entre quantiles.", note: "Mesure la dispersion / les inégalités." },
          { t: "Coefficient de Gini", f: "Indicateur entre 0 et 1.", note: "0 = égalité parfaite ; proche de 1 = forte inégalité. Lié à la courbe de Lorenz." },
          { t: "Corrélation et causalité", f: "Une corrélation statistique entre deux variables n'implique pas un lien de cause à effet.", note: "Attention aux variables tierces et au sens de la causalité." },
          { t: "Taux de variation moyen", f: "TVM = ((CM)^(1/n) − 1) × 100, sur n périodes.", note: "Taux moyen par période d'une évolution." },
          { t: "Valeur nominale / valeur réelle", f: "Valeur réelle = (valeur nominale / indice des prix) × 100. Taux d'intérêt réel ≈ taux nominal − taux d'inflation.", note: "La valeur réelle corrige de l'inflation (pouvoir d'achat)." },
          { t: "Tableau à double entrée", f: "Tableau croisant deux variables (ex. origine × position sociale).", note: "Lire ligne et colonne ; attention au champ et à l'unité." },
          { t: "Représentations graphiques", f: "Diagrammes de répartition, séries chronologiques, courbe de Lorenz.", note: "Identifier l'axe, l'unité, la source et la tendance." },
          { t: "Fonctions simples (offre, demande, coût)", f: "Représentation graphique et lecture des pentes et déplacements des courbes.", note: "Distinguer mouvement le long de la courbe et déplacement de la courbe." }
        ]
      }
    ]
  },

  /* ============================ MÉTHODE / ÉPREUVE ============================ */
  methode: {
    ecrit: {
      titre: "Épreuve écrite de spécialité",
      duree: "4 heures",
      coefficient: 16,
      choix: "Le jour de l'épreuve, le candidat choisit entre deux sujets : une dissertation s'appuyant sur un dossier documentaire OU une épreuve composée.",
      couverture: "Les sujets couvrent plusieurs dimensions du programme : le sujet de dissertation et la partie 3 de l'épreuve composée portent sur des champs différents ; chaque sujet/partie porte sur des questions différentes du programme."
    },
    dissertation: {
      titre: "Dissertation s'appuyant sur un dossier documentaire",
      note: "Notée sur 20",
      attendus: [
        "Répondre à la question posée par le sujet.",
        "Construire une argumentation à partir d'une problématique que l'on doit élaborer.",
        "Mobiliser des connaissances et des informations pertinentes pour traiter le sujet, notamment celles figurant dans le dossier.",
        "Rédiger en utilisant le vocabulaire économique et social approprié et en organisant le développement sous la forme d'un plan cohérent qui ménage l'équilibre des parties."
      ],
      dossier: "Dossier de trois ou quatre documents de nature strictement factuelle (principalement des données statistiques ; un document texte factuel possible). Chaque document statistique : 120 données chiffrées au maximum ; texte éventuel : 2 500 signes au maximum.",
      conseil: "Il est tenu compte de la clarté de l'expression et du soin de la présentation. Le dossier appuie l'argumentation : ni paraphrase, ni commentaire systématique."
    },
    epreuveComposee: {
      titre: "Épreuve composée (trois parties)",
      note: "Notée sur 20 — les 3 parties portent sur 3 questions différentes et au moins 2 champs du programme.",
      parties: [
        {
          nom: "Partie 1 — Mobilisation des connaissances",
          points: 4,
          desc: "Une question sans document d'appui. Répondre en faisant appel aux connaissances acquises dans le cadre du programme."
        },
        {
          nom: "Partie 2 — Étude d'un document",
          points: 6,
          desc: "Étude d'un document statistique (graphique, tableau, carte, radar…) de 120 données chiffrées au maximum, comportant deux questions. Démarche méthodologique rigoureuse de collecte et de traitement de l'information."
        },
        {
          nom: "Partie 3 — Raisonnement s'appuyant sur un dossier documentaire",
          points: 10,
          desc: "Développer un raisonnement en exploitant les documents du dossier (deux ou trois documents de nature différente) et ses connaissances personnelles, en composant une introduction, un développement et une conclusion."
        }
      ]
    },
    oral: {
      titre: "Épreuve orale de contrôle (rattrapage)",
      duree: "20 minutes (préparation : 30 minutes)",
      desc: "Même programme que l'écrit. Le candidat choisit entre deux sujets dont les questions principales portent sur des champs différents.",
      structure: [
        "Question principale sur 10 points, appuyée sur deux documents courts de nature différente (texte ≤ 1 300 signes ; document statistique ≤ 65 données chiffrées).",
        "Trois questions simples sur 10 points : deux questions sur 6 points (notions de base de deux champs différents) + une question sur 4 points (maîtrise des outils et savoir-faire, en lien avec un document)."
      ]
    },
    grandOral: {
      titre: "Lien avec le Grand Oral",
      desc: "Les 3 chapitres non évaluables à l'écrit (crises financières, action de l'École, justice sociale) restent au programme et constituent d'excellents appuis pour les questions du Grand Oral adossées à la spécialité SES."
    }
  }
};
