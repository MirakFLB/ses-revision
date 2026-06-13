/* =====================================================================
   SES Terminale — Contenu enrichi & SOURCÉ (cours, notions, auteurs)
   ---------------------------------------------------------------------
   Définitions issues de sources de référence (INSEE, Melchior, SES-ENS
   Lyon, vie-publique, La finance pour tous, Observatoire des inégalités,
   Banque de France, Parlement européen, Défenseur des droits, Pour l'éco…).
   Le champ `s` = source courte, `u` = URL. Source « Cours » = définition
   standard de manuel (notions sans fiche de référence dédiée en ligne).
   Le cours (« L'essentiel ») synthétise les objectifs officiels.
   ===================================================================== */

window.SES_CONTENT = {

  /* ===================== 1. CROISSANCE ===================== */
  "eco-croissance": {
    cours: [
      "La croissance = hausse soutenue du PIB en volume sur longue période. Deux sources : l'accumulation des facteurs (travail, capital) et la hausse de la productivité globale des facteurs (PGF).",
      "La PGF (le « résidu ») mesure l'efficacité de la combinaison des facteurs ; elle est surtout tirée par le progrès technique.",
      "Le progrès technique est endogène : il est produit par l'économie elle-même (innovation, R&D, capital humain), pas donné de l'extérieur.",
      "Les institutions, notamment les droits de propriété, incitent à investir et innover. L'innovation s'accompagne d'une destruction créatrice (Schumpeter).",
      "Le progrès technique peut creuser les inégalités de revenus (qualifiés vs non qualifiés).",
      "Une croissance soutenable se heurte à des limites écologiques (épuisement des ressources, pollution, réchauffement) ; l'innovation peut aider à les reculer."
    ],
    notions: [
      { t: "Croissance économique", d: "Augmentation soutenue de la production sur longue période, mesurée par l'évolution en volume (hors prix) du PIB.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1365" },
      { t: "PIB", d: "Agrégat mesurant la richesse créée par tous les agents (privés et publics) sur un territoire pendant une période donnée.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1365" },
      { t: "Facteurs de production", d: "Moyens mobilisés pour produire : travail, capital, ressources naturelles.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Productivité globale des facteurs (PGF)", d: "Part de la croissance non expliquée par la quantité de travail et de capital ; mesure l'efficacité de leur combinaison, souvent assimilée au progrès technique.", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/1372836" },
      { t: "Productivité du travail", d: "Rapport de la valeur ajoutée (en volume) au facteur travail (heures ou personnes en emploi).", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1977" },
      { t: "Progrès technique", d: "Amélioration des techniques de production se traduisant par des gains de productivité.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Innovation", d: "Introduction sur le marché d'un produit ou d'un procédé nouveau.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Progrès technique endogène", d: "Progrès technique produit par l'activité économique elle-même (investissement, R&D), et non donné de l'extérieur.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Droits de propriété", d: "Institution garantissant à l'innovateur l'appropriation des fruits de son innovation, ce qui l'incite à investir et innover.", s: "Cours" },
      { t: "Destruction créatrice", d: "Processus par lequel les innovations détruisent des activités et des emplois anciens tout en en créant de nouveaux (Schumpeter).", s: "Cours" },
      { t: "Croissance endogène", d: "Croissance dont le moteur (progrès technique, innovation) est interne à l'économie et résulte des choix d'investissement des agents.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Croissance soutenable", d: "Développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1644" },
      { t: "Externalité", d: "Effet positif ou négatif de l'activité d'un agent sur le bien-être d'un autre, sans contrepartie marchande.", s: "SES-ENS", u: "https://ses.ens-lyon.fr" },
      { t: "Capital humain", d: "Ensemble des connaissances, qualifications et compétences qui rendent un individu plus productif (déf. OCDE).", s: "SES-ENS", u: "https://ses.ens-lyon.fr" }
    ],
    auteurs: [
      { n: "Joseph Schumpeter (1883–1950)", d: "Théorise la « destruction créatrice » : l'innovation, portée par l'entrepreneur, détruit les anciennes activités tout en créant les nouvelles — moteur du capitalisme.", s: "Cours" },
      { n: "Robert Solow (1924–2023)", d: "Modèle de croissance (1956) à progrès technique exogène ; la part inexpliquée de la croissance est le « résidu de Solow » (≈ PGF).", s: "La finance pour tous", u: "https://www.lafinancepourtous.com" },
      { n: "Paul Romer (1955–)", d: "Croissance endogène : le progrès technique résulte d'activités intentionnelles (R&D, connaissances), source de rendements croissants.", s: "Cours" },
      { n: "Philippe Aghion (1956–)", d: "Avec Howitt, intègre la destruction créatrice dans une croissance endogène où l'innovation dépend des institutions et de l'éducation.", s: "Cours" }
    ],
    chiffres: []
  },

  /* ===================== 2. COMMERCE INTERNATIONAL ===================== */
  "eco-commerce": {
    cours: [
      "Les dotations factorielles et technologiques (avantages comparatifs) fondent la spécialisation internationale : chaque pays se spécialise là où son désavantage est le plus faible.",
      "Le commerce entre pays comparables s'explique par la différenciation et la qualité des produits, et la fragmentation de la chaîne de valeur (commerce intra-branche).",
      "La productivité des firmes sous-tend la compétitivité d'un pays (sa capacité à exporter), prix et hors-prix.",
      "La chaîne de valeur s'internationalise (DIPP) : les étapes de production sont réparties entre pays par les firmes multinationales.",
      "Effets du commerce : gains moyens (baisse des prix), réduction des inégalités entre pays, mais hausse des inégalités de revenus au sein de chaque pays → débat libre-échange / protectionnisme."
    ],
    notions: [
      { t: "Avantage comparatif", d: "Un pays gagne à se spécialiser dans la production où son désavantage est le plus faible (coût relatif le plus bas), même sans avantage absolu (Ricardo).", s: "SES Webclass", u: "https://ses.webclass.fr/notions/avantages-comparatifs/" },
      { t: "Avantage absolu", d: "Situation où un pays produit un bien à un coût plus faible que les autres (Smith).", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Dotation factorielle", d: "Quantité de facteurs (travail qualifié/non qualifié, capital, ressources) dont un pays dispose.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Spécialisation", d: "Concentration des capacités de production d'un pays dans certaines branches, selon ses avantages comparatifs.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Libre-échange", d: "Politique de réduction des barrières douanières et des obstacles au commerce international ; s'oppose au protectionnisme.", s: "Vie-publique", u: "https://www.vie-publique.fr/parole-dexpert/270950-protectionnisme-et-libre-echange" },
      { t: "Protectionnisme", d: "Politique visant à limiter les importations (droits de douane, barrières non tarifaires) pour protéger la production nationale.", s: "Vie-publique", u: "https://www.vie-publique.fr/parole-dexpert/270950-protectionnisme-et-libre-echange" },
      { t: "Commerce intra-branche", d: "Commerce croisé de biens similaires (mêmes branches) entre pays, fondé sur la différenciation des produits.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Commerce inter-branche", d: "Commerce portant sur des produits de branches différentes.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Différenciation des produits", d: "Différences (réelles ou perçues) faisant que deux produits proches ne sont pas jugés identiques par les consommateurs.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Compétitivité-prix", d: "Capacité à gagner des parts de marché grâce à des prix plus bas que les concurrents.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Compétitivité hors-prix", d: "Capacité à gagner des parts de marché par la qualité, l'innovation ou le service (compétitivité structurelle).", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Chaîne de valeur", d: "Ensemble des étapes ajoutant de la valeur à un produit (R&D, composants, assemblage, vente…), désormais réparties internationalement.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "DIPP", d: "Décomposition internationale du processus productif : localiser les étapes de fabrication d'un produit dans différents pays.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Firme multinationale (FMN)", d: "Groupe possédant au moins une unité légale en France et une à l'étranger.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c2121" },
      { t: "Délocalisation", d: "Transfert par une firme d'une partie de sa production vers un pays étranger.", s: "Melchior", u: "https://www.melchior.fr" }
    ],
    auteurs: [
      { n: "Adam Smith (1723–1790)", d: "Avantages absolus : un pays se spécialise là où ses coûts sont plus faibles que les autres et échange le reste.", s: "Melchior", u: "https://www.melchior.fr" },
      { n: "David Ricardo (1772–1823)", d: "Avantages comparatifs : même sans avantage absolu, tout pays gagne à se spécialiser là où son coût relatif est le plus faible.", s: "SES Webclass", u: "https://ses.webclass.fr/notions/avantages-comparatifs/" },
      { n: "Heckscher-Ohlin-Samuelson (HOS)", d: "La spécialisation découle des dotations factorielles : chaque pays se spécialise dans la production utilisant intensément le facteur dont il est le mieux doté.", s: "Melchior", u: "https://www.melchior.fr" },
      { n: "Paul Krugman (1953–)", d: "Nouvelle théorie du commerce : entre pays comparables, le commerce s'explique par les économies d'échelle et le goût pour la diversité (Nobel 2008).", s: "Pour l'éco", u: "https://www.pourleco.com" }
    ],
    chiffres: [
      { d: "Les FMN = moins de 1 % des entreprises en France mais 42 % de l'emploi et 55 % de la valeur ajoutée (2021).", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/5758754" }
    ]
  },

  /* ===================== 3. CHÔMAGE ===================== */
  "eco-chomage": {
    cours: [
      "Le chômeur (BIT) est sans emploi, disponible et en recherche active. Indicateurs : taux de chômage (chômeurs / actifs) et taux d'emploi.",
      "Le chômage structurel vient du fonctionnement du marché : défauts d'appariement (frictions, inadéquations) et asymétries d'information (salaire d'efficience).",
      "Les institutions (salaire minimum, protection de l'emploi) ont des effets positifs ou négatifs sur le chômage structurel.",
      "Le chômage conjoncturel résulte des fluctuations de l'activité (insuffisance de la demande globale).",
      "Politiques de lutte : soutien de la demande, allègement du coût du travail, formation, flexibilisation du marché du travail."
    ],
    notions: [
      { t: "Chômeur (au sens du BIT)", d: "Personne de 15 ans ou + sans emploi, disponible sous deux semaines et ayant cherché activement un emploi le mois précédent.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1129" },
      { t: "Population active", d: "Ensemble des personnes en emploi et des chômeurs au sens du BIT.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1129" },
      { t: "Taux de chômage", d: "Rapport entre le nombre de chômeurs et le nombre d'actifs (en emploi ou au chômage).", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1475" },
      { t: "Taux d'emploi", d: "Rapport entre le nombre de personnes en emploi et la population correspondante.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1332" },
      { t: "Halo du chômage", d: "Personnes sans emploi souhaitant travailler mais non comptées comme chômeurs BIT (indisponibles ou sans recherche active).", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/7456893" },
      { t: "Sous-emploi", d: "Personnes à temps partiel souhaitant travailler plus et disponibles, ou en chômage technique.", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/7456893" },
      { t: "Chômage structurel", d: "Chômage durable lié aux caractéristiques du marché du travail (l'offre de travail excède durablement la demande).", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Chômage conjoncturel", d: "Chômage lié à un ralentissement de l'activité (insuffisance de la demande globale).", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Chômage frictionnel", d: "Chômage de court terme correspondant au temps de recherche d'un emploi adéquat.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Appariement", d: "Mise en correspondance de l'offre et de la demande de travail ; un défaut d'appariement crée du chômage structurel.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Salaire d'efficience", d: "Salaire fixé au-dessus de l'équilibre pour motiver et retenir les salariés (asymétrie d'info) ; source de chômage structurel.", s: "Manuels libres", u: "https://lesmanuelslibres.region-academique-idf.fr" },
      { t: "Salaire minimum", d: "Salaire plancher fixé par les pouvoirs publics (SMIC) ; au-dessus de l'équilibre, il peut créer du chômage.", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/1375188" },
      { t: "Rigidités du marché du travail", d: "Éléments (salaire minimum, protection de l'emploi) qui limitent la flexibilité, notamment salariale.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Flexibilité", d: "Mesures permettant d'adapter l'emploi et la production aux variations de la demande.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Flexisécurité", d: "Système combinant flexibilité des contrats, sécurité du revenu entre deux emplois et accompagnement vers le retour à l'emploi.", s: "La finance pour tous", u: "https://www.lafinancepourtous.com/outils/dictionnaire/flexisecurite/" },
      { t: "Demande globale", d: "Ensemble de la demande adressée aux entreprises (consommation, investissement, dépenses publiques, exportations).", s: "Melchior", u: "https://www.melchior.fr" }
    ],
    auteurs: [],
    chiffres: [
      { d: "Taux de chômage (BIT) = 7,9 % de la population active (4e trim. 2025).", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/8735266" },
      { d: "SMIC brut horaire = 12,02 € au 1er janvier 2026.", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/1375188" }
    ]
  },

  /* ===================== 4. CRISES FINANCIÈRES ===================== */
  "eco-crises": {
    cours: [
      "Crises de 1929 et 2008 : effondrement boursier, faillites en chaîne, chute du PIB, hausse du chômage.",
      "Une bulle spéculative se forme quand le prix d'un actif s'écarte de sa valeur fondamentale, entretenue par les comportements mimétiques et les prophéties auto-réalisatrices ; elle éclate (krach).",
      "Panique bancaire (retraits massifs) et faillites bancaires en chaîne propagent la crise.",
      "Transmission à l'économie réelle : effet de richesse négatif, baisse du prix du collatéral et ventes forcées, contraction du crédit.",
      "Régulation pour réduire l'aléa moral des banques : supervision par la banque centrale, ratio de solvabilité (fonds propres)."
    ],
    notions: [
      { t: "Système financier", d: "Ensemble des marchés, institutions (banques, assurances) et règles qui mettent en relation agents à capacité et à besoin de financement.", s: "Cours" },
      { t: "Bulle spéculative", d: "Hausse du prix d'un actif qui s'écarte fortement de sa valeur fondamentale sous l'effet de la spéculation.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Valeur fondamentale", d: "Valeur « objective » d'un actif, fondée sur les revenus futurs qu'il est censé rapporter.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Comportement mimétique", d: "Comportement d'imitation entre agents qui pousse le prix d'un actif au-dessus de sa valeur fondamentale.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Prophétie auto-réalisatrice", d: "Anticipation qui se réalise du seul fait d'être formulée : anticiper la hausse fait acheter, ce qui fait monter le prix.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Panique bancaire", d: "Crise de confiance conduisant les déposants à retirer simultanément leurs avoirs (crise de liquidité).", s: "La finance pour tous", u: "https://www.lafinancepourtous.com" },
      { t: "Aléa moral", d: "Une partie modifie son comportement (prise de risque) après un contrat, à l'insu et au détriment de l'autre (ex. banque sûre d'être renflouée).", s: "La finance pour tous", u: "https://www.lafinancepourtous.com" },
      { t: "Ratio de solvabilité", d: "Ratio minimal de fonds propres rapportés aux engagements imposé aux banques pour garantir leur solvabilité.", s: "La finance pour tous", u: "https://www.lafinancepourtous.com" },
      { t: "Effet de richesse", d: "Influence de la variation de la valeur du patrimoine des ménages sur leur consommation.", s: "Cours" },
      { t: "Collatéral", d: "Actif remis en garantie d'un prêt, que le créancier peut saisir en cas de défaut.", s: "Cours" },
      { t: "Contraction du crédit", d: "Réduction de l'offre de crédit par les banques (credit crunch), qui freine investissement et consommation.", s: "La finance pour tous", u: "https://www.lafinancepourtous.com" },
      { t: "Risque systémique", d: "Risque qu'un événement entraîne, par réactions en chaîne, une crise générale du système financier.", s: "La finance pour tous", u: "https://www.lafinancepourtous.com" },
      { t: "Titrisation", d: "Technique transformant des actifs peu liquides (crédits) en titres négociables.", s: "La finance pour tous", u: "https://www.lafinancepourtous.com" },
      { t: "Krach boursier", d: "Effondrement brutal des cours quand les opérateurs réalisent la surévaluation des actifs et les revendent.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Supervision bancaire", d: "Contrôle des banques par les autorités (ex. BCE) pour vérifier le respect des règles prudentielles.", s: "La finance pour tous", u: "https://www.lafinancepourtous.com" }
    ],
    auteurs: [
      { n: "J. M. Keynes (1883–1946)", d: "Les « esprits animaux » : les décisions d'investissement reposent en partie sur des ressorts psychologiques face à l'incertitude.", s: "La finance pour tous", u: "https://www.lafinancepourtous.com" },
      { n: "Hyman Minsky (1919–1996)", d: "« Paradoxe de la tranquillité » : l'instabilité se prépare en période de prospérité, l'endettement devenant spéculatif puis « Ponzi ».", s: "Cairn", u: "https://www.cairn.info" },
      { n: "André Orléan (1950–)", d: "Théorise le mimétisme financier : les agents imitent l'opinion commune, éloignant les prix de la valeur fondamentale.", s: "Melchior", u: "https://www.melchior.fr" }
    ],
    chiffres: [
      { d: "Bâle III : ratio de fonds propres « durs » (CET1) minimal = 4,5 % des actifs pondérés du risque.", s: "La finance pour tous", u: "https://www.lafinancepourtous.com" }
    ]
  },

  /* ===================== 5. POLITIQUES EUROPÉENNES ===================== */
  "eco-europe": {
    cours: [
      "L'intégration européenne repose sur le marché unique (libre circulation) et la zone euro. Le marché unique stimule la croissance (concurrence, économies d'échelle).",
      "La politique de la concurrence vise les ententes, abus de position dominante, concentrations et aides d'État — avec objectifs, modalités et limites.",
      "Politique monétaire et politique budgétaire agissent sur la conjoncture.",
      "Dans la zone euro, la politique monétaire est unique et indépendante (BCE), mais la politique budgétaire reste nationale (encadrée par les traités) → difficultés : défaut de coordination, chocs asymétriques."
    ],
    notions: [
      { t: "Marché unique", d: "Espace sans frontières intérieures assurant la libre circulation des marchandises, personnes, services et capitaux (1993).", s: "Parlement européen", u: "https://www.europarl.europa.eu/factsheets/fr/sheet/33/le-marche-interieur-principes-generaux" },
      { t: "Union économique et monétaire", d: "Union associant marché intérieur, monnaie commune, politique monétaire commune et coordination des politiques économiques.", s: "Parlement européen", u: "https://www.europarl.europa.eu/factsheets/fr/sheet/79/historique-de-l-union-economique-et-monetaire" },
      { t: "Zone euro", d: "Pays de l'UE ayant adopté l'euro comme monnaie (21 pays en 2026).", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1603" },
      { t: "Politique monétaire", d: "Moyens d'une banque centrale pour agir sur l'activité via la monnaie (taux directeurs), avec pour objectif la stabilité des prix.", s: "Banque de France", u: "https://www.banque-france.fr" },
      { t: "Politique budgétaire", d: "Mesures sur les recettes et dépenses de l'État visant à agir sur la conjoncture.", s: "La finance pour tous", u: "https://www.lafinancepourtous.com" },
      { t: "BCE", d: "Institution qui définit et met en œuvre la politique monétaire de la zone euro (objectif : stabilité des prix).", s: "Banque de France", u: "https://www.banque-france.fr" },
      { t: "Politique de la concurrence", d: "Lutte contre ententes et abus de position dominante, contrôle des concentrations et des aides d'État.", s: "Melchior", u: "https://www.melchior.fr/notion/politique-de-la-concurrence" },
      { t: "Entente", d: "Accord entre entreprises concurrentes restreignant la concurrence (ex. fixation concertée des prix).", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Abus de position dominante", d: "Entreprise utilisant sa position dominante pour évincer ses concurrents ou léser les consommateurs.", s: "Melchior", u: "https://www.melchior.fr/notion/abus-de-position-dominante" },
      { t: "Aide d'État", d: "Soutien public à des entreprises ; interdit dans l'UE s'il fausse la concurrence (sauf dérogations).", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Choc asymétrique", d: "Événement touchant un pays de la zone sans affecter (ou différemment) les autres, compliquant la politique monétaire unique.", s: "SES-ENS", u: "http://ses.ens-lyon.fr/articles/theorie-des-zones-monetaires-optimales-passe-et-present" },
      { t: "Policy mix", d: "Combinaison de la politique monétaire et de la politique budgétaire pour agir sur la conjoncture.", s: "Cours" },
      { t: "Déficit public", d: "Solde négatif du budget des administrations publiques quand les dépenses excèdent les recettes.", s: "La finance pour tous", u: "https://www.lafinancepourtous.com" },
      { t: "Pacte de stabilité et de croissance", d: "Règles budgétaires de la zone euro : déficit < 3 % du PIB et dette < 60 % du PIB.", s: "La finance pour tous", u: "https://www.lafinancepourtous.com" }
    ],
    auteurs: [
      { n: "Robert Mundell (1932–2021)", d: "Théorie de la zone monétaire optimale : une union monétaire est viable si les chocs asymétriques sont rares et si la mobilité du travail permet l'ajustement.", s: "SES-ENS", u: "http://ses.ens-lyon.fr/articles/theorie-des-zones-monetaires-optimales-passe-et-present" }
    ],
    chiffres: [
      { d: "Critères du PSC : déficit public < 3 % du PIB, dette publique < 60 % du PIB.", s: "La finance pour tous", u: "https://www.lafinancepourtous.com" },
      { d: "Cible d'inflation de la BCE = 2 % à moyen terme.", s: "Banque de France", u: "https://www.banque-france.fr" }
    ]
  },

  /* ===================== 6. STRUCTURE SOCIALE ===================== */
  "socio-structure": {
    cours: [
      "L'espace social est hiérarchisé par de multiples facteurs : PCS, revenu, diplôme, composition du ménage, âge, sexe, lieu de résidence.",
      "Évolutions de la structure socioprofessionnelle depuis 1950 : salarisation, tertiarisation, élévation des qualifications, féminisation des emplois.",
      "Théories des classes : Marx (rapport aux moyens de production, classe en soi / pour soi) et Weber (stratification multidimensionnelle : classes, statut, parti).",
      "La pertinence de l'analyse en classes fait débat : distances inter/intra-classes, articulation avec le genre, identifications subjectives, individualisation."
    ],
    notions: [
      { t: "Structure sociale", d: "Manière dont la population est organisée en groupes sociaux différenciés et hiérarchisés (PCS, statut, genre…).", s: "Cours" },
      { t: "Espace social", d: "Chez Bourdieu, espace où les individus sont positionnés selon le volume et la structure de leurs capitaux.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "PCS", d: "Nomenclature INSEE classant la population selon la profession, le statut, le secteur et la qualification.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1493" },
      { t: "Classe sociale", d: "Chez Marx, ensemble d'individus défini par sa place dans le système productif (rapport aux moyens de production).", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Classe en soi / pour soi", d: "Marx : la classe « en soi » existe objectivement ; la classe « pour soi » a conscience de ses intérêts communs et se mobilise.", s: "SES Webclass", u: "https://ses.webclass.fr/notions/classes-sociales/" },
      { t: "Stratification sociale", d: "Répartition de la population en groupes hiérarchisés selon une distribution inégale des ressources.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Groupe de statut", d: "Chez Weber, groupe défini par un même prestige social et un style de vie commun, distinct de la classe.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Salarisation", d: "Diffusion du statut de salarié comme forme principale d'emploi.", s: "INSEE", u: "https://www.insee.fr" },
      { t: "Tertiarisation", d: "Montée du poids du secteur tertiaire (services) dans l'emploi et l'activité.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1584" },
      { t: "Féminisation de l'emploi", d: "Hausse de la part des femmes dans la population active occupée.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Moyennisation", d: "Développement des couches intermédiaires conduisant à atténuer les clivages entre groupes sociaux (Mendras).", s: "Melchior", u: "https://www.melchior.fr/notion/moyennisation" },
      { t: "Individualisation", d: "Multiplication des facteurs qui distinguent les individus au sein des groupes, affaiblissant les appartenances de classe.", s: "Cours" },
      { t: "Capital économique", d: "Bourdieu : ressources économiques d'un individu (revenus, patrimoine).", s: "Melchior", u: "https://www.melchior.fr/notion/capital-sociologique" },
      { t: "Capital culturel", d: "Bourdieu : ressources culturelles (savoirs, diplômes, dispositions) souvent incorporées.", s: "Melchior", u: "https://www.melchior.fr/notion/capital-sociologique" },
      { t: "Capital social", d: "Bourdieu : réseaux de relations qu'un individu peut mobiliser à son avantage.", s: "Melchior", u: "https://www.melchior.fr/notion/capital-sociologique" }
    ],
    auteurs: [
      { n: "Karl Marx (1818–1883)", d: "Société structurée par les rapports de production ; opposition bourgeoisie/prolétariat (lutte des classes) ; classe en soi / pour soi.", s: "Melchior", u: "https://www.melchior.fr" },
      { n: "Max Weber (1864–1920)", d: "Stratification multidimensionnelle : ordre économique (classes), social (statut/prestige) et politique (partis).", s: "Melchior", u: "https://www.melchior.fr" },
      { n: "Pierre Bourdieu (1930–2002)", d: "Position sociale définie par le volume et la structure des capitaux (économique, culturel, social).", s: "Melchior", u: "https://www.melchior.fr/notion/capital-sociologique" },
      { n: "Henri Mendras (1927–2003)", d: "Thèse de la « moyennisation » : durant les Trente Glorieuses, une vaste classe moyenne atténue les clivages.", s: "Melchior", u: "https://www.melchior.fr/notion/moyennisation" }
    ],
    chiffres: [
      { d: "Nomenclature PCS 2020 = 6 groupes socioprofessionnels, 29 catégories.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1493" },
      { d: "Part des femmes dans la population active occupée : ~35 % (1962) → 47 % (2007).", s: "Melchior", u: "https://www.melchior.fr" }
    ]
  },

  /* ===================== 7. ÉCOLE ===================== */
  "socio-ecole": {
    cours: [
      "Dans les sociétés démocratiques, l'École transmet des savoirs et vise l'égalité des chances.",
      "Depuis les années 1950 : massification (hausse des effectifs) à distinguer de la démocratisation (réduction des inégalités selon l'origine sociale).",
      "Les inégalités de réussite scolaire ont des facteurs multiples : rôle de l'École, capital culturel et investissements familiaux, socialisation de genre, stratégies des ménages."
    ],
    notions: [
      { t: "Massification scolaire", d: "Allongement de la scolarité et hausse quantitative des effectifs scolarisés à chaque niveau.", s: "SES-ENS", u: "http://ses.ens-lyon.fr/ressources/stats-a-la-une/massification-et-democratisation-de-lacces-a-lecole-et-a-lenseignement-superieur" },
      { t: "Démocratisation scolaire", d: "Réduction des inégalités d'accès et de réussite selon l'origine sociale (≠ simple massification).", s: "Melchior", u: "https://www.melchior.fr/notion/democratisation-scolaire" },
      { t: "Démocratisation ségrégative", d: "Merle : l'accès au bac s'élargit, mais le recrutement social des séries reste très différencié (filières nobles vs dévalorisées).", s: "SES-ENS", u: "http://ses.ens-lyon.fr/ressources/stats-a-la-une/massification-et-democratisation-de-lacces-a-lecole-et-a-lenseignement-superieur" },
      { t: "Égalité des chances", d: "Principe selon lequel l'accès aux positions repose sur le mérite, indépendamment de l'origine sociale.", s: "Melchior", u: "https://www.melchior.fr/notion/democratisation-scolaire" },
      { t: "Méritocratie", d: "Système où la position dépend du seul mérite (talent + effort), non de l'origine sociale.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Capital culturel", d: "Ressources culturelles transmises par la famille, sous forme incorporée, objectivée (biens) et institutionnalisée (diplômes).", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/education-culture-et-domination-dans-la-sociologie-de-pierre-bourdieu" },
      { t: "Reproduction sociale", d: "Processus par lequel l'École reproduit la structure de distribution du capital, donc la structure sociale.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/education-culture-et-domination-dans-la-sociologie-de-pierre-bourdieu" },
      { t: "Stratégies familiales", d: "Boudon : choix d'orientation des familles selon leur position sociale, expliquant une part des inégalités de parcours.", s: "Universalis", u: "https://www.universalis.fr" },
      { t: "Taux de scolarisation", d: "Rapport entre les élèves/étudiants d'un âge donné et l'ensemble des jeunes de cet âge.", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/2383587" },
      { t: "Paradoxe d'Anderson", d: "Obtenir un diplôme supérieur à celui de son père n'assure pas une position sociale plus élevée.", s: "Melchior", u: "https://www.melchior.fr/notion/paradoxe-d-anderson" }
    ],
    auteurs: [
      { n: "Bourdieu & Passeron (1964, 1970)", d: "L'École reproduit les inégalités en valorisant le capital culturel des dominants tout en le présentant comme du mérite.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/education-culture-et-domination-dans-la-sociologie-de-pierre-bourdieu" },
      { n: "Raymond Boudon (1973)", d: "Les inégalités scolaires s'expliquent par les calculs coût/avantage rationnels des familles selon leur position.", s: "Universalis", u: "https://www.universalis.fr" },
      { n: "Baudelot & Establet (1971)", d: "Sous son unité apparente, l'École se divise en deux réseaux qui orientent différemment selon l'origine sociale.", s: "Persée", u: "https://www.persee.fr" }
    ],
    chiffres: [
      { d: "Accès au bac ≈ 79,6 % d'une génération (2017), contre < 5 % dans les années 1950.", s: "SES-ENS", u: "http://ses.ens-lyon.fr/ressources/stats-a-la-une/massification-et-democratisation-de-lacces-a-lecole-et-a-lenseignement-superieur" },
      { d: "40 % des enfants de cadres obtiennent un master/grande école, contre 13 % des enfants d'employés et ouvriers (2018-2020).", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/8612522" }
    ]
  },

  /* ===================== 8. MOBILITÉ SOCIALE ===================== */
  "socio-mobilite": {
    cours: [
      "La mobilité sociale (intergénérationnelle) compare la position de l'enfant à celle de son parent ; à distinguer des mobilités géographique et professionnelle.",
      "Les tables de mobilité (destinée, recrutement) mesurent la mobilité ; elles ont des intérêts et des limites.",
      "La mobilité observée comporte une part structurelle (évolution des emplois). La fluidité sociale mesure l'égalité des chances « pure » : une société plus mobile n'est pas forcément plus fluide.",
      "On y lit des situations de mobilité ascendante, de reproduction et de déclassement, avec des spécificités hommes/femmes.",
      "Facteurs explicatifs : évolution de la structure socioprofessionnelle, niveaux de formation, ressources et configurations familiales."
    ],
    notions: [
      { t: "Mobilité sociale", d: "Fait d'occuper une catégorie socioprofessionnelle différente de celle du parent de référence.", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/4797592" },
      { t: "Mobilité intergénérationnelle", d: "Changement de position sociale entre la génération des parents et celle des enfants.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Mobilité intragénérationnelle", d: "Changement de position d'un individu au cours de sa propre vie active.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Table de mobilité", d: "Tableau à double entrée comparant la PCS des enfants et celle de leur parent (à partir de l'enquête FQP de l'INSEE).", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Table de destinée", d: "Lecture en lignes : que deviennent les enfants issus d'une origine sociale donnée ?", s: "Ac. Bordeaux", u: "https://ent2d.ac-bordeaux.fr/disciplines/ses/2018/03/03/les-tables-de-mobilite-tables-de-mobilite-brute-de-destinee-et-de-recrutement/" },
      { t: "Table de recrutement", d: "Lecture en colonnes : quelle est l'origine sociale des individus occupant une position donnée ?", s: "Ac. Bordeaux", u: "https://ent2d.ac-bordeaux.fr/disciplines/ses/2018/03/03/les-tables-de-mobilite-tables-de-mobilite-brute-de-destinee-et-de-recrutement/" },
      { t: "Mobilité observée (totale)", d: "Ensemble de la mobilité constatée = mobilité structurelle + mobilité nette (de circulation).", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Mobilité structurelle", d: "Part de la mobilité due à la transformation de la structure des emplois dans le temps (mobilité « forcée »).", s: "SES-ENS", u: "http://ses.ens-lyon.fr/ressources/stats-a-la-une/la-mobilite-intergenerationnelle-des-actifs-au-debut-des-annees-2010" },
      { t: "Fluidité sociale", d: "Degré d'indépendance entre origine et position sociales ; mesure l'égalité réelle des chances (plus elle est forte, plus la société est fluide).", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Reproduction sociale", d: "Situation où l'enfant reste dans le même groupe social que son parent (immobilité).", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Mobilité ascendante", d: "Position de l'enfant jugée supérieure à celle du parent.", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/4797592" },
      { t: "Mobilité descendante", d: "Position de l'enfant jugée inférieure à celle du parent.", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/4797592" },
      { t: "Déclassement", d: "Mobilité descendante : l'individu occupe une position inférieure à celle de son parent (ou à celle qu'il occupait avant).", s: "Melchior", u: "https://www.melchior.fr" }
    ],
    auteurs: [
      { n: "INSEE — enquêtes FQP", d: "Construit les tables de mobilité (enquête Formation et Qualification Professionnelle) et réserve « mobilité sociale » à l'intergénérationnel.", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/7344755" }
    ],
    chiffres: [
      { d: "Un enfant de cadre a environ 9 fois plus de chances qu'un enfant d'ouvrier de devenir cadre.", s: "Melchior", u: "https://www.melchior.fr" }
    ]
  },

  /* ===================== 9. TRAVAIL & EMPLOI ===================== */
  "socio-travail": {
    cours: [
      "Distinguer travail, activité, statut d'emploi (salarié/non-salarié) et chômage ; les nouvelles formes d'emploi brouillent les frontières emploi/chômage/inactivité.",
      "La qualité de l'emploi se décrit par plusieurs critères : conditions de travail, salaire, sécurité, carrière, formation, variété des tâches.",
      "Modèles d'organisation : taylorien (division horizontale et verticale, hiérarchie stricte) vs post-taylorien (flexibilité, recomposition des tâches, management participatif) ; effets ambivalents sur les conditions de travail.",
      "Le numérique brouille les frontières du travail (télétravail), transforme les relations d'emploi et accroît la polarisation des emplois.",
      "Le travail est source d'intégration sociale ; précarisation, chômage élevé et polarisation peuvent affaiblir ce pouvoir intégrateur."
    ],
    notions: [
      { t: "Emploi (au sens du BIT)", d: "Personne de 15 ans ou + ayant effectué au moins une heure de travail rémunéré durant une semaine donnée.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1159" },
      { t: "Population active", d: "Personnes en emploi au sens du BIT + chômeurs au sens du BIT.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1224" },
      { t: "Inactivité", d: "Situation des personnes ni en emploi ni au chômage au sens du BIT (étudiants, retraités…).", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1224" },
      { t: "Statut d'emploi", d: "Distingue les indépendants (non-salariés) des salariés (lien de subordination, contrat de travail).", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1792" },
      { t: "Non-salariat", d: "Travailleurs rémunérés autrement que par un salaire (indépendants), sans lien de subordination.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c2301" },
      { t: "Précarité de l'emploi", d: "Emplois instables (CDD, intérim, apprentissage, contrats aidés), par opposition au CDI.", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/4501566" },
      { t: "Qualité de l'emploi", d: "Dimensions caractérisant un emploi au-delà du salaire : stabilité, conditions, protection, perspectives, autonomie.", s: "Cours" },
      { t: "Taylorisme (OST)", d: "Organisation scientifique du travail : division horizontale (parcellisation) et verticale (conception/exécution), salaire au rendement.", s: "SES Webclass", u: "https://ses.webclass.fr/notions/taylorisme/" },
      { t: "Fordisme", d: "Prolongement du taylorisme : travail à la chaîne + hausse des salaires (production et consommation de masse).", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Post-taylorisme", d: "Modèles cherchant flexibilité, recomposition des tâches et management participatif.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Toyotisme", d: "Organisation (Toyota, années 1970) fondée sur la flexibilité, le « juste-à-temps » et l'implication des salariés.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Flexibilité du travail", d: "Capacité d'adaptation de l'emploi et du travail aux variations de l'activité.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Polarisation des emplois", d: "Croissance simultanée des emplois très qualifiés et peu qualifiés, au détriment des emplois intermédiaires.", s: "Cours" },
      { t: "Ubérisation", d: "Modèle où une plateforme numérique met en relation directe clients et prestataires rémunérés à la tâche (micro-entrepreneurs).", s: "Vie-publique", u: "https://www.vie-publique.fr/fiches/270196-quest-ce-que-luberisation" },
      { t: "Intégration sociale", d: "Processus reliant l'individu à la société par des liens (notamment le travail) ; chez Durkheim, source de solidarité organique.", s: "Cours" }
    ],
    auteurs: [
      { n: "F. W. Taylor (1856–1915)", d: "Fondateur de l'OST : analyse scientifique des tâches, « one best way », division verticale et horizontale, salaire au rendement.", s: "SES Webclass", u: "https://ses.webclass.fr/notions/taylorisme/" },
      { n: "Henry Ford (1863–1947)", d: "Fordisme : travail à la chaîne et hausse des salaires (5 $/jour) pour soutenir la consommation de masse.", s: "Melchior", u: "https://www.melchior.fr" },
      { n: "Georges Friedmann (1902–1977)", d: "« Le Travail en miettes » : critique du travail parcellisé taylorien et de ses effets déshumanisants.", s: "Cours" },
      { n: "Émile Durkheim (1858–1917)", d: "La division du travail crée une solidarité organique : c'est l'interdépendance des fonctions qui intègre les individus dans les sociétés modernes.", s: "Cours" }
    ],
    chiffres: [
      { d: "Le salariat représente environ 88–90 % de l'emploi total en France.", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/2424696" }
    ]
  },

  /* ===================== 10. ENGAGEMENT POLITIQUE ===================== */
  "socio-engagement": {
    cours: [
      "L'engagement politique prend des formes variées : vote, militantisme, engagement associatif, consommation engagée.",
      "Malgré le paradoxe de l'action collective (Olson), les individus s'engagent grâce aux incitations sélectives, rétributions symboliques et à la structure des opportunités politiques.",
      "L'engagement dépend de variables sociodémographiques : CSP, diplôme, âge et génération, sexe.",
      "Les objets (conflits du travail, nouveaux enjeux, luttes minoritaires), les acteurs (partis, syndicats, associations) et les répertoires d'action collective se transforment."
    ],
    notions: [
      { t: "Engagement politique", d: "Fait de prendre part à la vie politique sous des formes variées : vote, militantisme, engagement associatif, consommation engagée.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { t: "Militantisme", d: "Engagement actif et durable au service d'une cause, d'un parti, d'un syndicat ou d'une association.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { t: "Consommation engagée", d: "Orienter ses achats (boycott, achat militant, équitable) selon ses convictions pour peser sur producteurs ou pouvoirs publics.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { t: "Action collective", d: "Action menée en commun par un groupe pour défendre une cause ou des intérêts partagés.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { t: "Paradoxe de l'action collective", d: "Olson : un individu rationnel n'a pas intérêt à participer à une action dont il profitera de toute façon.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { t: "Passager clandestin", d: "Individu qui bénéficie des résultats d'une action collective (bien public) sans en supporter les coûts.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { t: "Incitations sélectives", d: "Avantages ou sanctions réservés aux seuls participants, qui poussent à s'engager malgré le paradoxe d'Olson.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { t: "Rétributions symboliques", d: "Gratifications non matérielles de l'engagement (reconnaissance, sociabilité, identité) — Gaxie.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { t: "Structure des opportunités politiques", d: "Facteurs institutionnels et politiques qui facilitent ou freinent une mobilisation.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { t: "Répertoire d'action collective", d: "Ensemble des moyens d'action d'un groupe à une époque (manifestation, grève, pétition…) — Tilly.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { t: "Mouvement social", d: "Action collective organisée et durable visant un changement social.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { t: "Nouveaux mouvements sociaux", d: "Mouvements post-industriels portant sur l'identité et la qualité de vie (féminisme, écologie, luttes minoritaires).", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { t: "Groupe d'intérêt", d: "Groupe organisé exerçant une pression sur les pouvoirs publics pour défendre ses intérêts, sans chercher à conquérir le pouvoir.", s: "Toupictionnaire", u: "https://www.toupie.org/Dictionnaire/Groupe_de_pression.htm" },
      { t: "Abstention", d: "Fait de ne pas voter à une élection alors que l'on est inscrit sur les listes électorales.", s: "Vie-publique", u: "https://www.vie-publique.fr" }
    ],
    auteurs: [
      { n: "Mancur Olson (1932–1998)", d: "« La Logique de l'action collective » (1965) : l'individu rationnel tend à être passager clandestin ; l'action collective requiert des incitations sélectives.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { n: "Charles Tilly (1929–2008)", d: "Forge la notion de « répertoire d'action collective », ensemble historiquement situé des formes de protestation.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { n: "Daniel Gaxie (1947–)", d: "« Rétributions du militantisme » : des gratifications symboliques expliquent l'engagement au-delà du calcul coûts-avantages.", s: "SES-ENS", u: "https://ses.ens-lyon.fr/articles/lengagement-politique" },
      { n: "Alexis de Tocqueville (1805–1859)", d: "Les associations sont des corps intermédiaires essentiels : « l'art de s'associer » forme les citoyens et fait contre-pouvoir.", s: "Eduscol/EHNE", u: "https://ehne.fr" }
    ],
    chiffres: [
      { d: "Abstention au 1er tour des législatives de juin 2022 = 52,5 % (record sous la Ve République).", s: "Vie-publique", u: "https://www.vie-publique.fr/eclairage/294715-participation-et-abstention-aux-elections-legislatives-depuis-2002" }
    ]
  },

  /* ===================== 11. JUSTICE SOCIALE ===================== */
  "rc-justice": {
    cours: [
      "Les inégalités économiques évoluent depuis le début du XXe siècle ; elles sont multiformes et cumulatives.",
      "Outils de mesure : statiques (rapport inter-quantiles, courbe de Lorenz, coefficient de Gini, top 1 %) et dynamique (corrélation de revenu parents-enfants).",
      "Les formes d'égalité (droits, chances, situations) renvoient à des conceptions de la justice : utilitarisme, libertarisme, égalitarisme libéral, égalitarisme strict.",
      "L'action publique (fiscalité, protection sociale, services collectifs, lutte contre les discriminations) s'exerce sous contrainte de financement et fait débat : efficacité, légitimité, effets pervers (désincitations)."
    ],
    notions: [
      { t: "Justice sociale", d: "Idéal d'une répartition équitable des ressources, droits et situations ; ses critères font débat.", s: "SES-ENS", u: "http://ses.ens-lyon.fr/articles/introduction-aux-debats-sur-la-justice-sociale" },
      { t: "Inégalités économiques", d: "Différences d'accès aux ressources économiques (revenus, patrimoine) entre individus ou groupes.", s: "Obs. des inégalités", u: "https://www.inegalites.fr/Qu-est-ce-qu-une-inegalite" },
      { t: "Inégalités sociales", d: "Différences d'accès à des ressources socialement valorisées (éducation, santé, logement, reconnaissance).", s: "Obs. des inégalités", u: "https://www.inegalites.fr/Qu-est-ce-qu-une-inegalite" },
      { t: "Inégalités cumulatives", d: "Inégalités dans un domaine (revenu) qui renforcent celles d'autres domaines (santé, éducation, logement).", s: "Cours" },
      { t: "Égalité des droits", d: "Tous les individus disposent des mêmes droits et sont traités de la même façon par la loi.", s: "Cours" },
      { t: "Égalité des chances", d: "Donner à chacun les mêmes possibilités d'accès aux positions, indépendamment de son origine.", s: "SES-ENS", u: "http://ses.ens-lyon.fr/articles/introduction-aux-debats-sur-la-justice-sociale" },
      { t: "Égalité des situations", d: "Réduire les écarts dans les conditions de vie effectives (revenus, patrimoine), pas seulement les droits ou les chances.", s: "SES-ENS", u: "http://ses.ens-lyon.fr/articles/introduction-aux-debats-sur-la-justice-sociale" },
      { t: "Courbe de Lorenz", d: "Graphique associant à chaque part cumulée de la population la part cumulée du revenu (ou patrimoine) qu'elle détient.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definitions" },
      { t: "Coefficient de Gini", d: "Indicateur synthétique d'inégalité variant de 0 (égalité parfaite) à 1 (inégalité extrême).", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1551" },
      { t: "Rapport inter-décile (D9/D1)", d: "Rapport entre le 9e et le 1er décile, utilisé pour mesurer l'écart entre les plus riches et les plus pauvres.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c1080" },
      { t: "Utilitarisme", d: "Une société juste maximise la somme totale des utilités individuelles, sans s'intéresser à leur répartition (Bentham).", s: "SES-ENS", u: "http://ses.ens-lyon.fr/articles/introduction-aux-debats-sur-la-justice-sociale" },
      { t: "Libertarisme", d: "Nozick : les droits de propriété sont inviolables ; une distribution est juste si elle résulte d'échanges libres, sans redistribution imposée.", s: "SES-ENS", u: "http://ses.ens-lyon.fr/articles/introduction-aux-debats-sur-la-justice-sociale" },
      { t: "Égalitarisme libéral", d: "Rawls : concilier l'égale liberté de chacun et l'acceptation des seules inégalités profitant aux plus défavorisés.", s: "SES-ENS", u: "http://ses.ens-lyon.fr/articles/introduction-aux-debats-sur-la-justice-sociale" },
      { t: "Principe de différence", d: "Rawls : les inégalités ne sont justes que si elles sont « au plus grand bénéfice des plus défavorisés » (maximin).", s: "SES-ENS", u: "http://ses.ens-lyon.fr/articles/introduction-aux-debats-sur-la-justice-sociale" },
      { t: "Redistribution", d: "Prélèvements (impôts, cotisations) et versements (prestations) modifiant la répartition primaire des revenus.", s: "INSEE", u: "https://www.insee.fr/fr/metadonnees/definition/c2000" },
      { t: "Fiscalité progressive", d: "Impôt dont le taux augmente avec le revenu (vs impôt proportionnel).", s: "Vie-publique", u: "https://www.vie-publique.fr/fiches/21834-impot-proportionnel-et-impot-progressif-quelles-differences" },
      { t: "Discrimination", d: "Traitement défavorable fondé sur un critère prohibé par la loi (origine, sexe, âge, handicap…) dans un domaine visé par la loi.", s: "Défenseur des droits", u: "https://www.defenseurdesdroits.fr/comment-savoir-si-je-suis-victime-de-discrimination-141" }
    ],
    auteurs: [
      { n: "John Rawls (1921–2002)", d: "« Théorie de la justice » (1971) : égale liberté + principe de différence (seules les inégalités profitant aux plus défavorisés sont justes).", s: "SES-ENS", u: "http://ses.ens-lyon.fr/articles/introduction-aux-debats-sur-la-justice-sociale" },
      { n: "Robert Nozick (1938–2002)", d: "Libertarisme : les droits de propriété priment ; une distribution juste découle des échanges libres.", s: "SES-ENS", u: "http://ses.ens-lyon.fr/articles/introduction-aux-debats-sur-la-justice-sociale" },
      { n: "Jeremy Bentham (1748–1832)", d: "Fondateur de l'utilitarisme : la société juste maximise le bonheur (l'utilité) total.", s: "SES-ENS", u: "http://ses.ens-lyon.fr/articles/introduction-aux-debats-sur-la-justice-sociale" },
      { n: "Amartya Sen (1933–)", d: "Approche par les « capabilités » : la justice se mesure aux libertés réelles de mener la vie que l'on a raison de valoriser.", s: "SES-ENS", u: "http://ses.ens-lyon.fr/articles/introduction-aux-debats-sur-la-justice-sociale" }
    ],
    chiffres: [
      { d: "Les prestations de protection sociale = 32,2 % du PIB en France (2022).", s: "INSEE", u: "https://www.insee.fr/fr/statistiques/8242359" },
      { d: "La loi reconnaît plus de 25 critères de discrimination prohibés.", s: "Défenseur des droits", u: "https://www.defenseurdesdroits.fr/comment-savoir-si-je-suis-victime-de-discrimination-141" }
    ]
  },

  /* ===================== 12. ENVIRONNEMENT ===================== */
  "rc-environnement": {
    cours: [
      "Des acteurs multiples (pouvoirs publics, ONG, entreprises, experts, partis, mouvements citoyens) construisent l'environnement comme problème public et le mettent à l'agenda ; leurs relations mêlent coopération et conflit.",
      "L'action publique pour l'environnement articule différentes échelles : locale, nationale, européenne, mondiale.",
      "Face aux externalités négatives (ex. changement climatique), les pouvoirs publics disposent d'instruments : réglementation, marché de quotas d'émission, taxation, subvention à l'innovation verte — chacun avec avantages et limites.",
      "En présence de bien commun, les négociations internationales sont freinées par les stratégies de passager clandestin et les inégalités de développement."
    ],
    notions: [
      { t: "Problème public", d: "Situation jugée inacceptable qui, après mobilisation d'acteurs, est considérée comme devant être prise en charge par les pouvoirs publics.", s: "Cours" },
      { t: "Mise à l'agenda", d: "Processus par lequel un problème devient une priorité inscrite au programme de travail des pouvoirs publics.", s: "Cours" },
      { t: "Externalité négative", d: "Effet défavorable d'une activité sur autrui sans compensation marchande (ex. pollution supportée par la collectivité).", s: "Géoconfluences", u: "https://geoconfluences.ens-lyon.fr/glossaire/externalites" },
      { t: "Bien commun", d: "Ressource rivale (sa consommation par l'un réduit celle des autres) mais non exclusive, donc exposée à la surexploitation.", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Tragédie des communs", d: "Surexploitation d'une ressource commune en libre accès : chaque usager rationnel l'exploite au maximum, ce qui l'épuise (Hardin, 1968).", s: "La Vie des idées", u: "https://laviedesidees.fr/Elinor-Ostrom-par-dela-la-tragedie-des-communs" },
      { t: "Défaillance du marché", d: "Situation où le marché ne permet pas une allocation optimale des ressources (ex. en présence d'externalités).", s: "Melchior", u: "https://www.melchior.fr" },
      { t: "Réglementation", d: "Instrument fixant des normes contraignantes (interdictions, seuils, quotas) sous peine de sanction.", s: "Cours" },
      { t: "Marché de quotas d'émission", d: "Marché de permis d'émettre des polluants : l'État fixe un plafond et alloue des quotas dont le prix se forme par l'offre et la demande.", s: "Pour l'éco", u: "https://www.pourleco.com/le-dico-de-l-eco/quotas-demission" },
      { t: "Taxe pigouvienne", d: "Taxe correctrice (Pigou) égale au coût de l'externalité négative, afin de l'internaliser dans le calcul du pollueur.", s: "Cours" },
      { t: "Subvention à l'innovation verte", d: "Aide publique soutenant la R&D et la diffusion de technologies moins polluantes (externalité positive).", s: "Cours" },
      { t: "Développement durable", d: "Développement qui répond aux besoins du présent sans compromettre ceux des générations futures (rapport Brundtland, 1987).", s: "Vie-publique", u: "https://www.vie-publique.fr/fiches/292430-quest-ce-que-le-developpement-durable" },
      { t: "Passager clandestin", d: "Agent (individu ou État) profitant d'un bien commun ou d'un effort collectif sans y contribuer.", s: "SES-ENS", u: "https://ses.ens-lyon.fr" },
      { t: "Accord de Paris (COP21, 2015)", d: "Accord international visant à contenir le réchauffement « bien en dessous de 2 °C », et si possible 1,5 °C, vs l'ère préindustrielle.", s: "Vie-publique", u: "https://www.vie-publique.fr/fiches/274839-quest-ce-que-laccord-de-paris-sur-le-climat" },
      { t: "Principe pollueur-payeur", d: "Celui qui pollue doit supporter le coût des mesures de réduction de la pollution (valeur constitutionnelle en France).", s: "Min. Transition écologique", u: "https://www.notre-environnement.gouv.fr/themes/economie/article/la-fiscalite-environnementale" }
    ],
    auteurs: [
      { n: "Arthur C. Pigou (1877–1959)", d: "Propose (1920) la taxe correctrice : taxer le pollueur à hauteur du coût social qu'il génère pour l'inciter à réduire sa pollution.", s: "Cours" },
      { n: "Ronald Coase (1910–2013)", d: "Si les droits de propriété sont définis et les coûts de transaction faibles, les agents peuvent régler une externalité par la négociation privée.", s: "Cours" },
      { n: "Garrett Hardin (1915–2003)", d: "Popularise la « tragédie des communs » (1968) : en libre accès, une ressource commune est inévitablement surexploitée.", s: "La Vie des idées", u: "https://laviedesidees.fr/Elinor-Ostrom-par-dela-la-tragedie-des-communs" },
      { n: "Elinor Ostrom (1933–2012)", d: "Nobel 2009 : contre Hardin, des communautés gèrent durablement des ressources communes par l'auto-organisation et des règles collectives.", s: "La Vie des idées", u: "https://laviedesidees.fr/Elinor-Ostrom-par-dela-la-tragedie-des-communs" }
    ],
    chiffres: [
      { d: "Accord de Paris (2015) : limiter le réchauffement bien en dessous de +2 °C, si possible +1,5 °C.", s: "Vie-publique", u: "https://www.vie-publique.fr/fiches/274839-quest-ce-que-laccord-de-paris-sur-le-climat" }
    ]
  }
};
