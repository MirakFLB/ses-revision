/* =====================================================================
   SES — COURS STRUCTURÉ par chapitre (intro + I / A / points + à retenir).
   Ajouté à window.SES_CONTENT[id].lecon, affiché dans l'onglet « L'essentiel ».
   Plan adapté aux objectifs officiels de chaque chapitre.
   ===================================================================== */
(function () {
  var C = window.SES_CONTENT; if (!C) return;
  function set(id, lecon){ if (C[id]) C[id].lecon = lecon; }

  set("eco-croissance", {
    intro: "La croissance économique est l'augmentation soutenue, sur longue période, de la production de richesses, mesurée par le taux de croissance du PIB en volume (corrigé de l'inflation). Problème : quelles en sont les sources profondes, et comment la concilier avec les limites écologiques ?",
    parties: [
      { t: "I. Les sources de la croissance", sub: [
        { t: "A. L'accumulation des facteurs", p: [
          "La croissance vient d'abord de l'augmentation des quantités de travail et de capital (croissance « extensive »).",
          "Mais l'accumulation seule connaît des rendements décroissants : ajouter toujours plus de capital rapporte de moins en moins." ] },
        { t: "B. La productivité globale des facteurs (PGF)", p: [
          "La PGF (le « résidu de Solow ») mesure l'efficacité de la combinaison des facteurs, au-delà de leur quantité : c'est la croissance « intensive ».",
          "Elle est tirée surtout par le progrès technique. Exemple : les Trente Glorieuses (1945-1975), portées par de forts gains de productivité." ] }
      ]},
      { t: "II. Progrès technique et institutions", sub: [
        { t: "A. Un progrès technique endogène", p: [
          "Le PT n'est pas une « manne » tombée du ciel : il est produit par l'économie elle-même (R&D, innovation, capital humain) — c'est la croissance endogène (Romer, Aghion).",
          "Le capital humain (éducation, santé) et l'investissement en connaissances ont des rendements croissants (effets de diffusion)." ] },
        { t: "B. Le rôle des institutions", p: [
          "Les droits de propriété (dont les brevets) protègent l'innovateur et l'incitent à investir et innover.",
          "Schumpeter : l'innovation est un processus de « destruction créatrice » — les nouvelles activités détruisent les anciennes (ex. le numérique balaie des secteurs entiers)." ] }
      ]},
      { t: "III. Les défis de la croissance", sub: [
        { t: "A. Les inégalités", p: [
          "Le progrès technique est souvent « biaisé » en faveur des travailleurs qualifiés → il peut creuser les inégalités de revenus." ] },
        { t: "B. La soutenabilité", p: [
          "La croissance se heurte à des limites écologiques (épuisement des ressources, pollution, réchauffement climatique).",
          "Débat : soutenabilité faible (le capital technique peut remplacer le capital naturel) vs forte (certains capitaux naturels sont irremplaçables) ; l'innovation verte peut reculer ces limites." ] }
      ]}
    ],
    retenir: [
      "Notions : PIB en volume, PGF (résidu de Solow), progrès technique endogène, destruction créatrice, croissance soutenable.",
      "Auteurs : Solow (PT exogène, le « résidu »), Romer & Aghion (croissance endogène), Schumpeter (destruction créatrice).",
      "Repère : Trente Glorieuses (1945-1975) = croissance forte tirée par la productivité."
    ]
  });

  set("eco-commerce", {
    intro: "Le commerce international et l'internationalisation de la production se sont fortement développés (mondialisation). Problème : qu'est-ce qui fonde les échanges entre pays, et qui en sont les gagnants et les perdants ?",
    parties: [
      { t: "I. Les fondements des échanges", sub: [
        { t: "A. Avantages comparatifs et dotations", p: [
          "Ricardo : un pays gagne à se spécialiser là où son désavantage est le plus faible (avantage comparatif) — il a intérêt à échanger même sans aucun avantage absolu.",
          "Théorie HOS (Heckscher-Ohlin-Samuelson) : chaque pays se spécialise selon le facteur dont il est le mieux doté (travail, capital, ressources)." ] },
        { t: "B. Le commerce entre pays comparables", p: [
          "Une grande part du commerce est intra-branche : on échange des produits similaires (ex. la France exporte ET importe des voitures), fondé sur la différenciation et la qualité." ] }
      ]},
      { t: "II. Compétitivité et chaîne de valeur", sub: [
        { t: "A. La compétitivité des firmes", p: [
          "La productivité des firmes fonde la compétitivité d'un pays : compétitivité-prix (coûts, change) et hors-prix (qualité, innovation, image)." ] },
        { t: "B. L'internationalisation de la production", p: [
          "DIPP (décomposition internationale du processus productif) : les firmes multinationales fragmentent la chaîne de valeur, localisant chaque étape là où c'est le plus avantageux (ex. conception ici, assemblage ailleurs)." ] }
      ]},
      { t: "III. Les effets et le débat", p: [
        "Effets globaux : gains moyens (baisse des prix, plus de choix), réduction des inégalités entre pays (rattrapage), mais hausse des inégalités au sein de chaque pays (emplois délocalisés).",
        "D'où le débat libre-échange (efficacité, spécialisation) / protectionnisme (protéger emplois et industries naissantes, mais risque de représailles et de hausse des prix)." ]}
    ],
    retenir: [
      "Notions : avantage comparatif (Ricardo), dotations factorielles (HOS), commerce intra-branche, compétitivité prix / hors-prix, DIPP.",
      "Débat : libre-échange vs protectionnisme ; gains moyens mais ↑ inégalités internes.",
      "Exemple : un produit comme un smartphone est conçu, fabriqué et assemblé dans plusieurs pays (chaîne de valeur mondiale)."
    ]
  });

  set("eco-chomage", {
    intro: "Le chômage désigne, au sens du BIT, la situation des personnes sans emploi, disponibles pour travailler et qui en recherchent activement un. Problème : quelles sont ses causes (conjoncturelles ou structurelles), et quelles politiques permettent de le réduire ?",
    parties: [
      { t: "I. Mesurer et distinguer le chômage", sub: [
        { t: "A. Définition et indicateurs", p: [
          "Taux de chômage = chômeurs / population active (occupés + chômeurs) ; taux d'emploi = actifs occupés / population en âge de travailler ; sous-emploi = temps partiel subi.",
          "Les frontières sont floues (halo du chômage, découragés)." ] },
        { t: "B. Deux grands types", p: [
          "Chômage conjoncturel : lié au ralentissement de l'activité (insuffisance de la demande globale).",
          "Chômage structurel : durable, lié au fonctionnement même du marché du travail." ] }
      ]},
      { t: "II. Les causes du chômage structurel", sub: [
        { t: "A. Appariement et asymétries d'information", p: [
          "Problèmes d'appariement : frictions, inadéquations spatiales et de qualifications entre offres et demandes d'emploi.",
          "Salaire d'efficience : l'employeur paie au-dessus de l'équilibre pour motiver / retenir → moins d'embauches." ] },
        { t: "B. Le rôle des institutions", p: [
          "Salaire minimum et règles de protection de l'emploi : ils protègent les salariés mais peuvent, selon les analyses, freiner l'embauche (effets ambivalents)." ] }
      ]},
      { t: "III. Les politiques de lutte", p: [
        "Contre le chômage conjoncturel : politiques de soutien de la demande globale (relance budgétaire / monétaire).",
        "Contre le chômage structurel : allègement du coût du travail (baisses de cotisations), politiques de formation (qualifications), flexibilisation du marché du travail." ]}
    ],
    retenir: [
      "Notions : chômage (BIT), taux de chômage / d'emploi, sous-emploi, chômage structurel / conjoncturel, salaire d'efficience, flexibilité / rigidités.",
      "Politiques : demande globale (conjoncturel) ; coût du travail, formation, flexibilisation (structurel)."
    ]
  });

  set("eco-crises", {
    intro: "Les crises financières (la crise de 1929, celle de 2008 dite des « subprimes ») se caractérisent par un effondrement boursier, des faillites en chaîne, une chute du PIB et une hausse du chômage. Problème : comment expliquer leur formation, et comment réguler le système financier pour les prévenir ?",
    parties: [
      { t: "I. La formation des crises", sub: [
        { t: "A. La bulle spéculative", p: [
          "Une bulle est un écart auto-entretenu et croissant entre le prix d'un actif et sa valeur fondamentale.",
          "Elle est alimentée par les comportements mimétiques (on achète parce que les autres achètent) et les prophéties auto-réalisatrices, puis elle éclate brutalement." ] },
        { t: "B. La panique bancaire", p: [
          "Bank run : des retraits massifs et simultanés peuvent faire tomber une banque pourtant solvable ; la défiance se propage en faillites en chaîne." ] }
      ]},
      { t: "II. La transmission à l'économie réelle", p: [
        "Effet de richesse négatif (les ménages, appauvris, consomment moins), baisse du prix du collatéral entraînant des ventes forcées, et contraction du crédit (credit crunch)." ]},
      { t: "III. La régulation du système financier", p: [
        "Supervision des banques par la banque centrale ; ratio de solvabilité (un minimum de fonds propres pour absorber les pertes).",
        "Objectif : réduire l'aléa moral — la prise de risque excessive des banques qui se savent « too big to fail » (sauvées en cas de crise)." ]}
    ],
    retenir: [
      "Notions : bulle spéculative, comportements mimétiques, prophéties auto-réalisatrices, panique bancaire, aléa moral, ratio de solvabilité.",
      "Repères : crise de 1929 ; crise des subprimes de 2008.",
      "Chapitre non évaluable à l'écrit 2026 (mais excellent appui pour le Grand Oral)."
    ]
  });

  set("eco-europe", {
    intro: "L'intégration européenne combine un marché unique (libre circulation) et, pour 20 pays, une union monétaire : la zone euro. Problème : comment les politiques économiques s'articulent-elles dans ce cadre original, et quelles difficultés cela soulève-t-il ?",
    parties: [
      { t: "I. Le cadre de l'intégration", sub: [
        { t: "A. Le marché unique", p: [
          "Libre circulation des biens, des services, des capitaux et des personnes (achevé en 1993) ; effets positifs sur la croissance (concurrence accrue, économies d'échelle, plus de variété)." ] },
        { t: "B. La politique de la concurrence", p: [
          "Lutte contre les ententes et les abus de position dominante ; contrôle des concentrations et des aides d'État, pour préserver une concurrence loyale (parfois critiquée face aux géants mondiaux)." ] }
      ]},
      { t: "II. Les politiques conjoncturelles", sub: [
        { t: "A. La politique monétaire", p: [
          "UNIQUE et indépendante, conduite par la BCE (Francfort) pour toute la zone euro ; objectif principal : la stabilité des prix (maîtrise de l'inflation)." ] },
        { t: "B. La politique budgétaire", p: [
          "NATIONALE (chaque État décide de ses dépenses et recettes), mais contrainte par les traités (règles sur déficit et dette)." ] }
      ]},
      { t: "III. Les difficultés de ce policy mix", p: [
        "Chocs asymétriques : une politique monétaire unique convient mal à des pays en situations différentes (un même taux pour tous).",
        "Défaut de coordination des politiques budgétaires nationales : difficile de mener une stratégie commune (ex. débats lors de la crise de la zone euro)." ]}
    ],
    retenir: [
      "Notions : marché unique, zone euro, politique monétaire (BCE) / budgétaire (nationale), politique de la concurrence, choc asymétrique, défaut de coordination.",
      "Repères : marché unique achevé en 1993 ; euro scriptural 1999, pièces et billets 2002 ; BCE à Francfort."
    ]
  });

  set("socio-structure", {
    intro: "La société française est structurée et hiérarchisée selon de multiples facteurs. Problème : comment décrire cette structure sociale, et l'analyse en termes de classes sociales est-elle encore pertinente aujourd'hui ?",
    parties: [
      { t: "I. Les facteurs de structuration", sub: [
        { t: "A. Une hiérarchie multidimensionnelle", p: [
          "L'espace social (Bourdieu) est hiérarchisé par la PCS, le revenu, le diplôme, mais aussi l'âge, le sexe, le lieu de résidence et la composition du ménage.",
          "Ces facteurs se combinent et se cumulent (ex. capital économique ET capital culturel)." ] },
        { t: "B. Les évolutions depuis 1950", p: [
          "Salarisation (la grande majorité des actifs sont salariés), tertiarisation (essor des services), élévation générale des qualifications, féminisation des emplois." ] }
      ]},
      { t: "II. Les théories des classes", sub: [
        { t: "A. Marx vs Weber", p: [
          "Marx : les classes se définissent par la place dans les rapports de production (bourgeoisie / prolétariat) ; passage de la classe « en soi » à la classe « pour soi » (conscience de classe).",
          "Weber : une hiérarchie multidimensionnelle — ordre économique (classes), social (groupes de statut, prestige) et politique (partis)." ] },
        { t: "B. Les débats actuels", p: [
          "Thèse de la moyennisation (réduction des écarts, grande classe moyenne) ; individualisation (affaiblissement des appartenances collectives) ; articulation avec le genre. La pertinence des classes fait débat — mais les inégalités persistent." ] }
      ]}
    ],
    retenir: [
      "Notions : espace social, PCS, salarisation / tertiarisation / féminisation, classe en soi / pour soi, moyennisation, individualisation.",
      "Auteurs : Marx (rapports de production), Weber (multidimensionnel), Bourdieu (espace social, capitaux)."
    ]
  });

  set("socio-ecole", {
    intro: "Dans les sociétés démocratiques, l'École transmet des savoirs et vise l'égalité des chances. Problème : l'École réduit-elle réellement les inégalités sociales, et d'où viennent les inégalités de réussite scolaire ?",
    parties: [
      { t: "I. Massification et démocratisation", p: [
        "Massification = augmentation générale des effectifs scolarisés et de l'accès aux diplômes (depuis les années 1950).",
        "Démocratisation = réduction des inégalités d'accès selon l'origine sociale. La massification n'entraîne PAS mécaniquement la démocratisation (on parle parfois de « démocratisation ségrégative »)." ]},
      { t: "II. Les facteurs des inégalités de réussite", sub: [
        { t: "A. Le poids de la famille", p: [
          "Capital culturel (Bourdieu) : savoirs, langage, rapport à la culture transmis par la famille, qui favorisent la réussite.",
          "Stratégies des ménages : choix d'établissement, d'options, d'orientation." ] },
        { t: "B. L'École et la socialisation", p: [
          "Effets propres de l'École (curriculum, attentes des enseignants) ; socialisation différenciée selon le genre (orientations sexuées)." ] }
      ]}
    ],
    retenir: [
      "Notions : massification ≠ démocratisation, égalité des chances, capital culturel (Bourdieu), stratégies des ménages.",
      "Chapitre non évaluable à l'écrit 2026 (appui Grand Oral)."
    ]
  });

  set("socio-mobilite", {
    intro: "La mobilité sociale désigne le changement de position sociale, en particulier entre la génération des parents et celle des enfants (mobilité intergénérationnelle). Problème : comment la mesurer, et la société française est-elle réellement mobile et fluide ?",
    parties: [
      { t: "I. Mesurer la mobilité", sub: [
        { t: "A. Les tables de mobilité", p: [
          "Elles croisent l'origine sociale (PCS du père) et la position de l'enfant. Table de destinée (« que deviennent les fils d'ouvriers ? ») et table de recrutement (« d'où viennent les cadres ? »).",
          "On y lit la mobilité ascendante, la reproduction sociale et le déclassement (mobilité descendante)." ] },
        { t: "B. Mobilité et fluidité", p: [
          "Mobilité structurelle : due à l'évolution de la structure des emplois (création de postes de cadres, recul des emplois agricoles).",
          "Fluidité sociale : mobilité « pure », indépendante de la structure, qui mesure l'égalité des chances relative. Une société plus mobile n'est pas forcément plus fluide." ] }
      ]},
      { t: "II. Expliquer la mobilité", p: [
        "L'évolution de la structure socioprofessionnelle, l'élévation des niveaux de formation, et les ressources et configurations familiales expliquent à la fois la mobilité observée et la reproduction.",
        "Les trajectoires diffèrent selon le sexe (mobilité des femmes spécifique)." ]}
    ],
    retenir: [
      "Notions : mobilité intergénérationnelle, tables (destinée / recrutement), mobilité structurelle, fluidité sociale, reproduction, déclassement.",
      "Piège : ne pas confondre mobilité (brute, observée) et fluidité (égalité des chances)."
    ]
  });

  set("socio-travail", {
    intro: "Le travail et l'emploi connaissent de profondes mutations (numérique, flexibilité, nouvelles formes d'emploi). Problème : comment ces transformations affectent-elles les conditions de travail et le pouvoir intégrateur du travail dans la société ?",
    parties: [
      { t: "I. Notions et qualité de l'emploi", sub: [
        { t: "A. Travail, activité, emploi", p: [
          "Distinguer le travail (activité productive), l'activité (emploi + chômage), l'emploi (cadre statutaire) et le statut (salarié : CDI, CDD… / non-salarié).",
          "Les frontières emploi-chômage-inactivité deviennent floues (auto-entrepreneuriat, plateformes)." ] },
        { t: "B. La qualité de l'emploi", p: [
          "Conditions de travail, niveau de salaire, sécurité économique, horizon de carrière, potentiel de formation, variété des tâches." ] }
      ]},
      { t: "II. L'organisation du travail", p: [
        "Modèle taylorien (OST) : division horizontale ET verticale du travail, parcellisation des tâches, hiérarchie stricte (prolongé par le fordisme : travail à la chaîne).",
        "Modèle post-taylorien : flexibilité, recomposition des tâches, management participatif — avec des effets positifs (autonomie) et négatifs (intensification, stress).",
        "Le numérique brouille les frontières (télétravail, travail / hors-travail) et accroît la polarisation des emplois." ]},
      { t: "III. Travail et intégration sociale", p: [
        "Le travail est une source majeure d'intégration : il procure un revenu, un statut et des liens sociaux.",
        "Mais la précarisation, le chômage durable et la polarisation de la qualité des emplois affaiblissent ce pouvoir intégrateur." ]}
    ],
    retenir: [
      "Notions : activité / emploi / statut, qualité de l'emploi, taylorisme (OST) / post-taylorisme, polarisation des emplois, intégration par le travail.",
      "Repère : taylorisme (début XXᵉ) → fordisme (chaîne) → post-taylorisme + numérique."
    ]
  });

  set("socio-engagement", {
    intro: "L'engagement politique prend des formes variées : vote, militantisme, engagement associatif, consommation engagée. Problème : pourquoi les individus s'engagent-ils, alors que la logique de l'intérêt individuel (le paradoxe de l'action collective) devrait les en dissuader ?",
    parties: [
      { t: "I. Pourquoi s'engager malgré le paradoxe ?", sub: [
        { t: "A. Le paradoxe de l'action collective (Olson)", p: [
          "Rationnellement, l'individu a intérêt à NE PAS s'engager et à profiter des résultats obtenus par les autres : c'est le « passager clandestin » (free rider)." ] },
        { t: "B. Les solutions au paradoxe", p: [
          "Incitations sélectives : avantages réservés aux seuls participants (matériels ou non).",
          "Rétributions symboliques (reconnaissance, sociabilité, identité) et structure des opportunités politiques (contexte plus ou moins favorable)." ] }
      ]},
      { t: "II. Qui s'engage, et comment ?", sub: [
        { t: "A. Les variables sociodémographiques", p: [
          "L'engagement dépend de la CSP, du diplôme, de l'âge et de la génération, du sexe." ] },
        { t: "B. Acteurs et répertoires", p: [
          "Diversité et transformation des objets (conflits du travail, nouvelles causes : climat, luttes minoritaires), des acteurs (partis, syndicats, associations) et des répertoires d'action (Tilly : manifestation, grève, pétition, occupation, formes en ligne)." ] }
      ]}
    ],
    retenir: [
      "Notions : engagement politique, paradoxe de l'action collective / passager clandestin (Olson), incitations sélectives, rétributions symboliques, répertoire d'action (Tilly).",
      "Idée-clé : on s'engage rarement par pur calcul — les rétributions symboliques comptent autant que les matérielles."
    ]
  });

  set("rc-justice", {
    intro: "Les inégalités économiques et sociales sont multiformes (revenu, patrimoine, éducation, santé…) et cumulatives. Problème : quelles inégalités peut-on considérer comme justes, selon les différentes conceptions de la justice sociale, et comment les pouvoirs publics agissent-ils ?",
    parties: [
      { t: "I. Mesurer les inégalités", p: [
        "Outils statiques : rapport inter-quantiles (ex. D9/D1), courbe de Lorenz et coefficient de Gini (entre 0 = égalité parfaite et 1 = inégalité maximale), part du top 1 %.",
        "Outil dynamique : la corrélation de revenu entre parents et enfants (mesure la reproduction des inégalités)." ]},
      { t: "II. Les conceptions de la justice sociale", sub: [
        { t: "A. Les formes d'égalité", p: [
          "Égalité des droits (mêmes droits pour tous), des chances (neutraliser le poids de l'origine), des situations (réduire les écarts de résultats)." ] },
        { t: "B. Les doctrines", p: [
          "Utilitarisme (maximiser le bien-être total), libertarisme (priorité à la liberté et au mérite), égalitarisme libéral (Rawls : inégalités justes si elles profitent aux plus défavorisés), égalitarisme strict." ] }
      ]},
      { t: "III. L'action des pouvoirs publics", p: [
        "Outils : fiscalité (redistribution), protection sociale, services collectifs, lutte contre les discriminations — sous contrainte de financement.",
        "Débats : efficacité (réduit-on vraiment les inégalités ?), légitimité (consentement à l'impôt), risque d'effets pervers (désincitations au travail)." ]}
    ],
    retenir: [
      "Notions : inégalités multiformes / cumulatives, Gini & courbe de Lorenz, formes d'égalité, conceptions de la justice (utilitarisme, libertarisme, Rawls, égalitarisme strict), redistribution, effets pervers.",
      "Chapitre non évaluable à l'écrit 2026 (appui Grand Oral)."
    ]
  });

  set("rc-environnement", {
    intro: "L'environnement est devenu un problème public majeur, en particulier le changement climatique. Problème : comment ce problème se construit-il, et de quels instruments dispose l'action publique, à quelles échelles, pour y répondre ?",
    parties: [
      { t: "I. La construction du problème public", p: [
        "Des acteurs variés (pouvoirs publics, ONG, entreprises, experts du GIEC, partis, mouvements citoyens) construisent la question environnementale et la mettent à l'agenda politique.",
        "Ils entretiennent des relations de coopération ET de conflit (lobbying, mobilisations)." ]},
      { t: "II. Échelles et instruments de l'action publique", sub: [
        { t: "A. Des échelles articulées", p: [
          "L'action se joue à plusieurs niveaux imbriqués : locale, nationale, européenne et mondiale (accords internationaux)." ] },
        { t: "B. Les instruments (face aux externalités négatives)", p: [
          "La pollution est une externalité négative (coût imposé à des tiers sans compensation). Outils : réglementation (normes), marché de quotas d'émission, taxation (taxe carbone, principe pollueur-payeur), subvention à l'innovation verte.",
          "Chacun a des avantages et des limites, et peut se heurter à des dysfonctionnements de l'action publique." ] }
      ]},
      { t: "III. Le défi de la coopération internationale", p: [
        "Le climat est un bien commun mondial. Les stratégies de passager clandestin (profiter des efforts des autres sans contribuer) et les inégalités de développement entre pays freinent les accords internationaux." ]}
    ],
    retenir: [
      "Notions : problème public, mise à l'agenda, externalité négative, instruments (réglementation, quotas, taxe, subvention), bien commun, passager clandestin.",
      "Repère : la taxe carbone illustre le principe « pollueur-payeur » (logique de Pigou)."
    ]
  });

})();
