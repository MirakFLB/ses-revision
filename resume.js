/* =====================================================================
   SES — COURS STRUCTURÉ par chapitre (intro + I / A / points + à retenir).
   Ajouté à window.SES_CONTENT[id].lecon, affiché dans l'onglet « L'essentiel ».
   Plan adapté aux objectifs officiels de chaque chapitre.
   ===================================================================== */
(function () {
  var C = window.SES_CONTENT; if (!C) return;
  function set(id, lecon){ if (C[id]) C[id].lecon = lecon; }

  set("eco-croissance", {
    intro: "La croissance économique est l'augmentation soutenue, sur longue période, de la production de richesses (mesurée par le PIB en volume). Problème : quelles en sont les sources, et comment la concilier avec les limites écologiques ?",
    parties: [
      { t: "I. Les sources de la croissance", sub: [
        { t: "A. L'accumulation des facteurs", p: [
          "La croissance vient d'abord de l'augmentation des quantités de travail et de capital (croissance « extensive »).",
          "Mais l'accumulation seule connaît des rendements décroissants." ] },
        { t: "B. La productivité globale des facteurs (PGF)", p: [
          "La PGF (« résidu de Solow ») mesure l'efficacité de la combinaison des facteurs : c'est la croissance « intensive ».",
          "Elle est tirée surtout par le progrès technique." ] }
      ]},
      { t: "II. Progrès technique et institutions", sub: [
        { t: "A. Un progrès technique endogène", p: [
          "Le PT n'est pas donné de l'extérieur : il est produit par l'économie (R&D, innovation, capital humain) — croissance endogène (Romer, Aghion)." ] },
        { t: "B. Le rôle des institutions", p: [
          "Les droits de propriété protègent l'innovateur et l'incitent à investir.",
          "Schumpeter : l'innovation est un processus de « destruction créatrice »." ] }
      ]},
      { t: "III. Les défis de la croissance", sub: [
        { t: "A. Les inégalités", p: [
          "Le progrès technique, biaisé en faveur des qualifiés, peut creuser les inégalités de revenus." ] },
        { t: "B. La soutenabilité", p: [
          "La croissance se heurte à des limites écologiques (ressources, pollution, climat) ; l'innovation verte peut les reculer (soutenabilité faible vs forte)." ] }
      ]}
    ],
    retenir: [
      "Notions : PIB en volume, PGF (résidu de Solow), progrès technique endogène, destruction créatrice, croissance soutenable.",
      "Auteurs : Solow (PT exogène), Romer & Aghion (croissance endogène), Schumpeter (destruction créatrice)."
    ]
  });

  set("eco-commerce", {
    intro: "Le commerce international et l'internationalisation de la production se sont fortement développés. Problème : qu'est-ce qui fonde les échanges, et qui en sont les gagnants et les perdants ?",
    parties: [
      { t: "I. Les fondements des échanges", sub: [
        { t: "A. Avantages comparatifs et dotations", p: [
          "Ricardo : un pays gagne à se spécialiser là où son désavantage est le plus faible (avantage comparatif), même sans avantage absolu.",
          "Théorie HOS : on se spécialise selon le facteur dont on est le mieux doté." ] },
        { t: "B. Le commerce entre pays comparables", p: [
          "Commerce intra-branche : échange de produits similaires, fondé sur la différenciation et la qualité." ] }
      ]},
      { t: "II. Compétitivité et chaîne de valeur", sub: [
        { t: "A. La compétitivité des firmes", p: [
          "Compétitivité-prix (coûts) et hors-prix (qualité, innovation) déterminent la capacité à exporter." ] },
        { t: "B. L'internationalisation de la production", p: [
          "DIPP : les firmes multinationales fragmentent la chaîne de valeur, localisant chaque étape là où c'est avantageux." ] }
      ]},
      { t: "III. Les effets et le débat", p: [
        "Gains moyens (baisse des prix), réduction des inégalités entre pays, mais hausse des inégalités au sein de chaque pays.",
        "D'où le débat libre-échange (efficacité) / protectionnisme (protection des emplois, mais risque de représailles)." ]}
    ],
    retenir: [
      "Notions : avantage comparatif (Ricardo), dotations factorielles (HOS), commerce intra-branche, compétitivité prix/hors-prix, DIPP.",
      "Débat : libre-échange vs protectionnisme ; gains moyens mais ↑ inégalités internes."
    ]
  });

  set("eco-chomage", {
    intro: "Le chômage désigne la situation des personnes sans emploi, disponibles et en recherche active (BIT). Problème : quelles sont ses causes, et quelles politiques permettent de le réduire ?",
    parties: [
      { t: "I. Mesurer et distinguer le chômage", sub: [
        { t: "A. Définition et indicateurs", p: [
          "Taux de chômage = chômeurs / population active ; taux d'emploi = actifs occupés / population en âge de travailler ; sous-emploi (temps partiel subi)." ] },
        { t: "B. Deux grands types", p: [
          "Chômage structurel (durable, lié au fonctionnement du marché) et chômage conjoncturel (lié au ralentissement de l'activité)." ] }
      ]},
      { t: "II. Les causes du chômage structurel", sub: [
        { t: "A. Appariement et asymétries", p: [
          "Problèmes d'appariement (frictions, inadéquations de qualifications) et salaire d'efficience (salaire au-dessus de l'équilibre)." ] },
        { t: "B. Le rôle des institutions", p: [
          "Salaire minimum, règles de protection de l'emploi : effets ambivalents sur le chômage structurel." ] }
      ]},
      { t: "III. Les politiques de lutte", p: [
        "Soutien de la demande globale (chômage conjoncturel) ; allègement du coût du travail ; formation ; flexibilisation pour réduire les rigidités." ]}
    ],
    retenir: [
      "Notions : chômage (BIT), taux de chômage / d'emploi, chômage structurel / conjoncturel, salaire d'efficience, flexibilité.",
      "Politiques : demande globale, coût du travail, formation, flexibilisation."
    ]
  });

  set("eco-crises", {
    intro: "Les crises financières (1929, 2008) se caractérisent par un krach, des faillites en chaîne et une récession. Problème : comment expliquer leur formation et comment réguler le système financier ?",
    parties: [
      { t: "I. La formation des crises", sub: [
        { t: "A. La bulle spéculative", p: [
          "Écart auto-entretenu entre le prix d'un actif et sa valeur fondamentale (comportements mimétiques, prophéties auto-réalisatrices), suivi d'un éclatement." ] },
        { t: "B. La panique bancaire", p: [
          "Retraits massifs et simultanés (bank run) pouvant faire tomber une banque même solvable ; faillites en chaîne." ] }
      ]},
      { t: "II. La transmission à l'économie réelle", p: [
        "Effet de richesse négatif, baisse du prix du collatéral (ventes forcées), contraction du crédit." ]},
      { t: "III. La régulation", p: [
        "Supervision des banques par la banque centrale, ratio de solvabilité (fonds propres) → réduire l'aléa moral." ]}
    ],
    retenir: [
      "Notions : bulle spéculative, comportements mimétiques, panique bancaire, aléa moral, ratio de solvabilité.",
      "Chapitre non évaluable à l'écrit 2026 (mais utile au Grand Oral)."
    ]
  });

  set("eco-europe", {
    intro: "L'intégration européenne combine un marché unique et une union monétaire (zone euro). Problème : comment les politiques économiques s'articulent-elles dans ce cadre, et quelles difficultés cela soulève-t-il ?",
    parties: [
      { t: "I. Le cadre de l'intégration", sub: [
        { t: "A. Le marché unique", p: [
          "Libre circulation des biens, services, capitaux et personnes ; effets positifs sur la croissance (concurrence, économies d'échelle)." ] },
        { t: "B. La politique de la concurrence", p: [
          "Lutte contre les ententes, abus de position dominante ; contrôle des concentrations et des aides d'État." ] }
      ]},
      { t: "II. Les politiques conjoncturelles", sub: [
        { t: "A. La politique monétaire", p: [
          "Unique et indépendante, conduite par la BCE pour toute la zone euro." ] },
        { t: "B. La politique budgétaire", p: [
          "Nationale (dépenses / recettes de chaque État), mais contrainte par les traités européens." ] }
      ]},
      { t: "III. Les difficultés", p: [
        "Chocs asymétriques (une politique monétaire unique convient mal à des situations différentes) et défaut de coordination des politiques budgétaires." ]}
    ],
    retenir: [
      "Notions : marché unique, zone euro, politique monétaire (BCE) / budgétaire (nationale), politique de la concurrence, choc asymétrique."
    ]
  });

  set("socio-structure", {
    intro: "La société française est structurée et hiérarchisée selon plusieurs facteurs. Problème : comment décrire cette structure, et l'approche en termes de classes sociales est-elle encore pertinente ?",
    parties: [
      { t: "I. Les facteurs de structuration", sub: [
        { t: "A. Une hiérarchie multidimensionnelle", p: [
          "PCS, revenu, diplôme, âge, sexe, lieu de résidence, composition du ménage hiérarchisent l'espace social (Bourdieu)." ] },
        { t: "B. Les évolutions depuis 1950", p: [
          "Salarisation, tertiarisation, élévation des qualifications, féminisation des emplois." ] }
      ]},
      { t: "II. Les théories des classes", sub: [
        { t: "A. Marx vs Weber", p: [
          "Marx : les classes se définissent par la place dans les rapports de production (classe « en soi » / « pour soi »).",
          "Weber : une hiérarchie multidimensionnelle (classes, groupes de statut, partis)." ] },
        { t: "B. Les débats actuels", p: [
          "Moyennisation, individualisation, articulation avec le genre : la pertinence des classes fait débat." ] }
      ]}
    ],
    retenir: [
      "Notions : espace social, PCS, salarisation / tertiarisation / féminisation, classe en soi / pour soi, moyennisation.",
      "Auteurs : Marx, Weber, Bourdieu."
    ]
  });

  set("socio-ecole", {
    intro: "Dans les sociétés démocratiques, l'École transmet des savoirs et vise l'égalité des chances. Problème : l'École réduit-elle réellement les inégalités, et d'où viennent les inégalités de réussite ?",
    parties: [
      { t: "I. Massification et démocratisation", p: [
        "Massification = hausse générale des effectifs scolarisés. Démocratisation = réduction des inégalités d'accès selon l'origine sociale.",
        "La massification n'entraîne pas mécaniquement la démocratisation." ]},
      { t: "II. Les facteurs des inégalités de réussite", sub: [
        { t: "A. Le poids de la famille", p: [
          "Capital culturel (Bourdieu), investissements et stratégies scolaires des familles." ] },
        { t: "B. École et socialisation", p: [
          "Effets propres de l'École ; socialisation différenciée selon le genre." ] }
      ]}
    ],
    retenir: [
      "Notions : massification ≠ démocratisation, égalité des chances, capital culturel (Bourdieu), stratégies des ménages.",
      "Chapitre non évaluable à l'écrit 2026 (appui Grand Oral)."
    ]
  });

  set("socio-mobilite", {
    intro: "La mobilité sociale désigne le changement de position sociale, notamment entre les générations. Problème : comment la mesurer, et la société française est-elle mobile et fluide ?",
    parties: [
      { t: "I. Mesurer la mobilité", sub: [
        { t: "A. Les tables de mobilité", p: [
          "Elles croisent origine et position sociales (tables de destinée et de recrutement) ; on y lit mobilité ascendante, reproduction, déclassement." ] },
        { t: "B. Mobilité et fluidité", p: [
          "Mobilité structurelle (due à l'évolution des emplois) ≠ fluidité sociale (mobilité « pure »).",
          "Une société plus mobile n'est pas forcément plus fluide." ] }
      ]},
      { t: "II. Expliquer la mobilité", p: [
        "L'évolution de la structure socioprofessionnelle, les niveaux de formation et les ressources familiales expliquent mobilité et reproduction." ]}
    ],
    retenir: [
      "Notions : mobilité intergénérationnelle, tables (destinée / recrutement), mobilité structurelle, fluidité sociale, reproduction, déclassement."
    ]
  });

  set("socio-travail", {
    intro: "Le travail et l'emploi connaissent de profondes mutations. Problème : comment ces transformations affectent-elles les conditions de travail et le pouvoir intégrateur du travail ?",
    parties: [
      { t: "I. Notions et qualité de l'emploi", sub: [
        { t: "A. Travail, activité, emploi", p: [
          "Distinguer travail / activité / emploi / statut (salarié, non-salarié) ; les frontières emploi-chômage-inactivité se brouillent." ] },
        { t: "B. La qualité de l'emploi", p: [
          "Conditions de travail, salaire, sécurité, carrière, formation, variété des tâches." ] }
      ]},
      { t: "II. L'organisation du travail", p: [
        "Taylorisme (OST : division horizontale et verticale, parcellisation) vs post-taylorisme (flexibilité, management participatif).",
        "Le numérique brouille les frontières (télétravail) et polarise les emplois." ]},
      { t: "III. Travail et intégration sociale", p: [
        "Le travail procure revenu, statut et liens. La précarité, le chômage durable et la polarisation affaiblissent ce pouvoir intégrateur." ]}
    ],
    retenir: [
      "Notions : statut d'emploi, qualité de l'emploi, taylorisme / post-taylorisme, polarisation, intégration par le travail."
    ]
  });

  set("socio-engagement", {
    intro: "L'engagement politique prend des formes variées (vote, militantisme, engagement associatif, consommation engagée). Problème : pourquoi les individus s'engagent-ils, malgré le paradoxe de l'action collective ?",
    parties: [
      { t: "I. Pourquoi s'engager ?", sub: [
        { t: "A. Le paradoxe de l'action collective (Olson)", p: [
          "Rationnellement, l'individu a intérêt à ne pas s'engager et à profiter de l'action des autres (passager clandestin)." ] },
        { t: "B. Les solutions au paradoxe", p: [
          "Incitations sélectives, rétributions symboliques, structure des opportunités politiques." ] }
      ]},
      { t: "II. Qui s'engage et comment ?", sub: [
        { t: "A. Les variables sociodémographiques", p: [
          "CSP, diplôme, âge / génération, sexe structurent l'intensité et la forme de l'engagement." ] },
        { t: "B. Acteurs et répertoires", p: [
          "Diversité et transformation des objets, des acteurs (partis, syndicats, associations) et des répertoires d'action (Tilly)." ] }
      ]}
    ],
    retenir: [
      "Notions : engagement politique, paradoxe d'Olson (passager clandestin), incitations sélectives, rétributions symboliques, répertoire d'action (Tilly)."
    ]
  });

  set("rc-justice", {
    intro: "Les inégalités sont multiformes et cumulatives. Problème : quelles inégalités sont justes selon les différentes conceptions de la justice sociale, et comment les pouvoirs publics agissent-ils ?",
    parties: [
      { t: "I. Mesurer les inégalités", p: [
        "Outils statiques : rapport inter-quantiles (D9/D1), courbe de Lorenz et coefficient de Gini (0 = égalité, 1 = inégalité max), part du top 1%.",
        "Outil dynamique : corrélation de revenu entre parents et enfants." ]},
      { t: "II. Les conceptions de la justice sociale", sub: [
        { t: "A. Les formes d'égalité", p: [
          "Égalité des droits, des chances, des situations." ] },
        { t: "B. Les doctrines", p: [
          "Utilitarisme, libertarisme, égalitarisme libéral (Rawls), égalitarisme strict." ] }
      ]},
      { t: "III. L'action des pouvoirs publics", p: [
        "Fiscalité, protection sociale, services collectifs, lutte contre les discriminations — sous contrainte de financement et en débat (efficacité / légitimité / effets pervers)." ]}
    ],
    retenir: [
      "Notions : Gini / Lorenz, formes d'égalité, conceptions de la justice (Rawls…), redistribution, effets pervers.",
      "Chapitre non évaluable à l'écrit 2026 (appui Grand Oral)."
    ]
  });

  set("rc-environnement", {
    intro: "L'environnement est devenu un problème public majeur. Problème : qui construit ce problème, et de quels instruments dispose l'action publique, à quelles échelles ?",
    parties: [
      { t: "I. La construction du problème public", p: [
        "Des acteurs (pouvoirs publics, ONG, entreprises, experts, mouvements citoyens) construisent la question et la mettent à l'agenda, dans des relations de coopération ET de conflit." ]},
      { t: "II. Échelles et instruments", sub: [
        { t: "A. Des échelles articulées", p: [
          "L'action environnementale se joue du local au mondial (locale, nationale, européenne, mondiale)." ] },
        { t: "B. Les instruments (ex. climat)", p: [
          "Réglementation, marché de quotas d'émission, taxation, subvention à l'innovation verte — chacun avec avantages et limites." ] }
      ]},
      { t: "III. Le défi de la coopération internationale", p: [
        "En présence d'un bien commun, les stratégies de passager clandestin et les inégalités de développement freinent les accords internationaux." ]}
    ],
    retenir: [
      "Notions : problème public, externalité négative, instruments (réglementation, quotas, taxe, subvention), bien commun, passager clandestin."
    ]
  });

})();
