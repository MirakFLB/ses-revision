/* =====================================================================
   SES — COURS COMPLET RÉDIGÉ par chapitre. Onglet « Cours ».
   Intro problématisée + I/A développés + transitions + conclusion + à retenir.
   ===================================================================== */
(function () {
  var C = window.SES_CONTENT; if (!C) return;
  function set(id, lecon){ if (C[id]) C[id].lecon = lecon; }

  set("eco-croissance", {
    intro: "La croissance économique est l'augmentation soutenue, sur longue période, de la production de richesses d'un pays. On la mesure par le taux de croissance du PIB en volume, c'est-à-dire corrigé de l'inflation, pour saisir l'évolution réelle des quantités produites. La croissance conditionne l'emploi, le niveau de vie et le financement de la protection sociale, mais elle soulève deux grandes questions : d'où vient-elle vraiment, et comment la rendre compatible avec la préservation de l'environnement ?",
    parties: [
      { t: "I. Les sources de la croissance", sub: [
        { t: "A. L'accumulation des facteurs de production", p: [
          "La première source de croissance est quantitative : augmenter la quantité de travail (plus d'actifs, plus d'heures travaillées) et de capital (machines, infrastructures, locaux). On parle de croissance extensive.",
          "Mais cette source connaît une limite : la loi des rendements décroissants. À quantité de travail donnée, chaque unité de capital ajoutée rapporte de moins en moins. L'accumulation seule ne peut donc entretenir indéfiniment la croissance : il faut une autre source." ] },
        { t: "B. La productivité globale des facteurs (PGF)", p: [
          "La seconde source est qualitative : produire plus avec les mêmes facteurs, en améliorant leur efficacité. C'est la PGF, ce que Solow a appelé le « résidu » — la part de la croissance que la seule accumulation n'explique pas (jusqu'aux deux tiers de la croissance dans les pays développés). On parle alors de croissance intensive.",
          "Cette PGF est tirée surtout par le progrès technique, qui permet de combiner plus efficacement travail et capital. C'est elle qui explique la prospérité des Trente Glorieuses (1945-1975), portées par de très forts gains de productivité." ] }
      ],
        trans: "Reste à comprendre d'où vient ce progrès technique, moteur de la PGF : est-il un don du hasard, ou peut-on l'entretenir ?" },
      { t: "II. Le rôle du progrès technique et des institutions", sub: [
        { t: "A. Un progrès technique endogène", p: [
          "Pour Solow, le progrès technique était « exogène », tombé du ciel. Les théories de la croissance endogène (Romer, Aghion, années 1980) montrent au contraire qu'il est produit par l'économie elle-même : il résulte des investissements en recherche-développement, en innovation et en capital humain (éducation, santé, formation).",
          "Ces investissements ont des rendements croissants et des effets de diffusion : une connaissance, une fois produite, profite à tous sans se détruire. La croissance peut donc s'auto-entretenir, à condition d'investir." ] },
        { t: "B. L'importance des institutions", p: [
          "Le progrès technique ne se déploie que si le cadre institutionnel l'encourage. Les droits de propriété, en particulier les brevets, garantissent à l'innovateur l'appropriation des fruits de son innovation : sans cette protection, pourquoi prendre le risque d'investir ?",
          "Schumpeter ajoute que l'innovation procède par « destruction créatrice » : les nouvelles activités (le numérique, par exemple) détruisent les anciennes (le commerce traditionnel) tout en créant de nouveaux emplois et de nouvelles richesses. La croissance est donc un processus de transformation permanente, jamais paisible." ] }
      ],
        trans: "Cette croissance, si désirable soit-elle, est-elle pour autant sans revers ?" },
      { t: "III. Les défis de la croissance", sub: [
        { t: "A. Les inégalités", p: [
          "Le progrès technique est souvent « biaisé » en faveur du travail qualifié : il augmente la demande de travailleurs formés et réduit celle des moins qualifiés (automatisation des tâches routinières). Il peut donc creuser les inégalités de revenus au sein des sociétés, même quand la richesse globale augmente." ] },
        { t: "B. La soutenabilité écologique", p: [
          "La croissance se heurte à des limites écologiques : épuisement des ressources, pollution, réchauffement climatique. Le débat oppose la soutenabilité faible (le capital technique peut se substituer au capital naturel détruit) et la soutenabilité forte (certains capitaux naturels sont irremplaçables et doivent être préservés).",
          "L'innovation (technologies vertes) peut reculer ces limites, mais ne les supprime pas : c'est tout l'enjeu d'une croissance dite « soutenable »." ] }
      ]}
    ],
    conclusion: "La croissance ne se réduit donc pas à l'accumulation de facteurs : son moteur profond est le progrès technique, lui-même produit par l'innovation et soutenu par les institutions. Mais cette croissance n'est ni automatiquement partagée (risque d'inégalités) ni automatiquement durable (limites écologiques). Tout l'enjeu des politiques économiques contemporaines est de la rendre à la fois inclusive et soutenable.",
    retenir: [
      "Notions : PIB en volume, croissance extensive / intensive, PGF (résidu de Solow), progrès technique endogène, destruction créatrice, soutenabilité faible / forte.",
      "Auteurs : Solow (PT exogène, le résidu), Romer & Aghion (croissance endogène), Schumpeter (destruction créatrice).",
      "Repère : Trente Glorieuses (1945-1975), croissance forte tirée par la productivité."
    ]
  });

  set("eco-commerce", {
    intro: "Le commerce international (les échanges de biens et services entre pays) et l'internationalisation de la production (la fragmentation des chaînes de fabrication à l'échelle mondiale) sont au cœur de la mondialisation, fortement développée depuis 1945. S'ils profitent globalement aux économies, ils font aussi des perdants. Le problème est donc double : qu'est-ce qui fonde et explique ces échanges, et qui en sont les gagnants et les perdants ?",
    parties: [
      { t: "I. Les fondements du commerce international", sub: [
        { t: "A. Avantages comparatifs et dotations factorielles", p: [
          "Ricardo établit la théorie des avantages comparatifs : même un pays désavantagé partout a intérêt à se spécialiser dans la production où son désavantage est le plus faible (ou son avantage le plus fort), puis à échanger. Chacun y gagne, car la spécialisation accroît la production mondiale totale.",
          "La théorie HOS (Heckscher-Ohlin-Samuelson) précise l'origine de ces avantages : un pays exporte les biens qui utilisent intensément le facteur dont il est le mieux doté (un pays riche en main-d'œuvre exportera des biens à forte intensité de travail)." ] },
        { t: "B. Le commerce entre pays comparables", p: [
          "Ces théories n'expliquent toutefois pas l'essentiel du commerce actuel, qui se fait entre pays développés semblables. Ce commerce intra-branche (échange de produits similaires : la France exporte ET importe des automobiles) s'explique par la différenciation des produits et la recherche de qualité et de variété par les consommateurs." ] }
      ],
        trans: "Au-delà des dotations des pays, ce sont aussi les stratégies des firmes qui structurent le commerce mondial." },
      { t: "II. Compétitivité et internationalisation de la production", sub: [
        { t: "A. La compétitivité des firmes et des pays", p: [
          "La productivité des firmes fonde la compétitivité d'un pays, c'est-à-dire son aptitude à exporter. On distingue la compétitivité-prix (vendre moins cher, grâce à des coûts plus faibles ou un taux de change favorable) et la compétitivité hors-prix ou structurelle (la qualité, l'innovation, l'image de marque, le service)." ] },
        { t: "B. La chaîne de valeur mondiale (DIPP)", p: [
          "Les firmes multinationales pratiquent la décomposition internationale du processus productif (DIPP) : elles fragmentent la chaîne de valeur et localisent chaque étape (conception, fabrication des composants, assemblage) là où elle est la plus avantageuse. Un smartphone est ainsi conçu dans un pays, ses composants fabriqués dans plusieurs autres, l'ensemble assemblé ailleurs." ] }
      ],
        trans: "Si le commerce enrichit globalement, pourquoi suscite-t-il tant de débats et de résistances ?" },
      { t: "III. Les effets du commerce et le débat", sub: [
        { t: "A. Des gagnants et des perdants", p: [
          "Les effets globaux sont positifs : gains moyens pour les consommateurs (baisse des prix, plus de choix) et réduction des inégalités entre pays (les pays émergents rattrapent leur retard).",
          "Mais au sein de chaque pays, le commerce accroît souvent les inégalités : certains secteurs et travailleurs (peu qualifiés, exposés à la concurrence) perdent leur emploi, tandis que d'autres en bénéficient." ] },
        { t: "B. Libre-échange ou protectionnisme ?", p: [
          "D'où le débat entre libre-échange (qui maximise l'efficacité par la spécialisation) et protectionnisme (qui protège les emplois et les industries naissantes par des droits de douane ou des quotas, mais au risque de représailles, de hausse des prix et de perte d'efficacité)." ] }
      ]}
    ],
    conclusion: "Le commerce international repose sur la spécialisation (avantages comparatifs, dotations) et sur les stratégies des firmes (compétitivité, chaînes de valeur). S'il accroît la richesse globale et réduit les écarts entre nations, il produit des perdants à l'intérieur de chaque pays — d'où la nécessité de politiques d'accompagnement (formation, redistribution) plus que d'un repli protectionniste.",
    retenir: [
      "Notions : avantage comparatif (Ricardo), dotations factorielles (HOS), commerce intra-branche, compétitivité prix / hors-prix, DIPP, firme multinationale.",
      "Débat : libre-échange (efficacité) vs protectionnisme (protection des emplois) ; gains moyens mais hausse des inégalités internes."
    ]
  });

  set("eco-chomage", {
    intro: "Le chômage désigne, au sens du Bureau International du Travail (BIT), la situation des personnes en âge de travailler, sans emploi, disponibles et qui en recherchent activement un. C'est à la fois un drame individuel (perte de revenu, de statut, de lien social) et un problème économique majeur. Le problème pour l'analyse est d'en comprendre les causes — sont-elles passagères ou profondes ? — afin de déterminer les politiques capables de le réduire.",
    parties: [
      { t: "I. Mesurer et distinguer le chômage", sub: [
        { t: "A. Définitions et indicateurs", p: [
          "Le taux de chômage rapporte le nombre de chômeurs à la population active (actifs occupés + chômeurs) ; le taux d'emploi rapporte les actifs occupés à la population en âge de travailler.",
          "À côté du chômage, le sous-emploi (temps partiel subi) et le « halo du chômage » (les découragés qui ne cherchent plus, donc non comptés) montrent que les frontières sont floues et que le seul taux de chômage ne dit pas tout." ] },
        { t: "B. Chômage conjoncturel et structurel", p: [
          "Le chômage conjoncturel est lié au ralentissement de l'activité : quand la demande globale fléchit, les entreprises produisent et embauchent moins.",
          "Le chômage structurel est durable et indépendant de la conjoncture : il tient au fonctionnement même du marché du travail. C'est sur lui que se concentrent les analyses des causes profondes." ] }
      ],
        trans: "Quelles sont précisément les causes de ce chômage structurel, le plus difficile à résorber ?" },
      { t: "II. Les causes du chômage structurel", sub: [
        { t: "A. Appariement et asymétries d'information", p: [
          "Le marché du travail souffre de problèmes d'appariement : il existe des emplois vacants et des chômeurs en même temps, faute de correspondance entre les compétences offertes et demandées (inadéquations de qualifications) ou entre les localisations.",
          "Le salaire d'efficience explique aussi un chômage : l'employeur verse un salaire supérieur à l'équilibre pour motiver et retenir ses salariés (face à l'asymétrie d'information sur leur effort), ce qui réduit le nombre d'embauches possibles." ] },
        { t: "B. Le rôle ambivalent des institutions", p: [
          "Les institutions du marché du travail (salaire minimum, règles de protection de l'emploi, indemnisation) protègent les salariés et soutiennent la demande, mais peuvent, selon certaines analyses, freiner les embauches en augmentant le coût ou le risque associé à l'emploi. Leurs effets sur le chômage structurel sont donc débattus." ] }
      ],
        trans: "À chaque type de chômage correspondent des politiques différentes." },
      { t: "III. Les politiques de lutte contre le chômage", sub: [
        { t: "A. Agir sur la demande", p: [
          "Contre le chômage conjoncturel, on agit sur la demande globale : politiques de relance budgétaire (dépenses publiques, baisses d'impôts) ou monétaire (baisse des taux d'intérêt) pour stimuler l'activité et donc l'emploi." ] },
        { t: "B. Agir sur le marché du travail", p: [
          "Contre le chômage structurel, on agit sur l'offre et le fonctionnement du marché : allègement du coût du travail (baisses de cotisations sociales), politiques de formation (pour réduire les inadéquations de qualifications) et flexibilisation (assouplir les rigidités). Ces politiques sont elles aussi discutées quant à leur efficacité et leurs effets sociaux." ] }
      ]}
    ],
    conclusion: "Le chômage n'a pas une cause unique : il faut distinguer sa composante conjoncturelle (insuffisance de la demande) et structurelle (fonctionnement du marché, institutions, qualifications). C'est pourquoi aucune politique unique ne suffit : la lutte contre le chômage combine soutien de la demande, formation, et réformes du marché du travail, dont l'équilibre fait l'objet de débats permanents.",
    retenir: [
      "Notions : chômage (BIT), population active, taux de chômage / d'emploi, sous-emploi, chômage conjoncturel / structurel, salaire d'efficience, flexibilité / rigidités.",
      "Politiques : demande globale (conjoncturel) ; coût du travail, formation, flexibilisation (structurel)."
    ]
  });

  set("eco-crises", {
    intro: "Une crise financière est une rupture brutale dans le fonctionnement du système financier (banques, marchés), aux conséquences souvent dramatiques pour l'économie réelle : effondrement boursier, faillites en chaîne, chute du PIB et hausse du chômage. La crise de 1929 et la crise des « subprimes » de 2008 en sont les exemples majeurs. Le problème est d'expliquer comment ces crises se forment, et comment réguler la finance pour en limiter le risque et les effets.",
    parties: [
      { t: "I. La formation des crises financières", sub: [
        { t: "A. La bulle spéculative", p: [
          "Une bulle spéculative est un écart auto-entretenu et croissant entre le prix d'un actif (action, immobilier) et sa valeur fondamentale. Les agents achètent non pour la valeur réelle du bien, mais parce qu'ils anticipent que les prix continueront de monter.",
          "Ce mécanisme repose sur les comportements mimétiques (on imite les autres : le « comportement moutonnier ») et les prophéties auto-réalisatrices (les anticipations se réalisent du seul fait qu'on y croit). La bulle gonfle… jusqu'à l'éclatement brutal, quand la confiance se retourne." ] },
        { t: "B. La panique bancaire", p: [
          "La crise se propage au système bancaire. Une panique bancaire (bank run) survient quand les déposants, pris de défiance, retirent massivement et simultanément leurs fonds : même une banque solvable peut alors s'effondrer, faute de liquidités. La défiance se transmet de banque en banque (faillites en chaîne)." ] }
      ],
        trans: "Comment cette crise, née dans la sphère financière, contamine-t-elle l'économie réelle ?" },
      { t: "II. La transmission à l'économie réelle", sub: [
        { t: "A. Les canaux de transmission", p: [
          "Plusieurs canaux opèrent. L'effet de richesse négatif : appauvris par la chute de leur patrimoine, les ménages consomment moins. La baisse du prix du collatéral (les actifs servant de garantie aux emprunts) entraîne des ventes forcées qui aggravent la chute. Et la contraction du crédit (credit crunch) : les banques fragilisées prêtent moins, ce qui asphyxie l'investissement et la consommation." ] }
      ],
        trans: "Comment alors prévenir ces crises et limiter la prise de risque ?" },
      { t: "III. La régulation du système financier", sub: [
        { t: "A. Superviser et imposer des fonds propres", p: [
          "Pour prévenir ces crises, on régule les banques : supervision par la banque centrale, et surtout ratio de solvabilité (un niveau minimal de fonds propres pour absorber les pertes, fixé par les accords de Bâle)." ] },
        { t: "B. Réduire l'aléa moral", p: [
          "L'objectif est de réduire l'aléa moral : la prise de risque excessive de banques qui se savent « too big to fail » (trop grosses pour faire faillite), donc sûres d'être sauvées par l'État en cas de crise — ce qui les incite à prendre toujours plus de risques aux frais de la collectivité." ] }
      ]}
    ],
    conclusion: "Les crises financières naissent de l'emballement spéculatif et de la défiance, et se transmettent à l'économie réelle par la richesse, le collatéral et le crédit. Elles révèlent que les marchés financiers, loin d'être toujours efficients, peuvent être profondément instables — d'où la nécessité d'une régulation prudentielle qui limite l'aléa moral, sans pour autant supprimer tout risque.",
    retenir: [
      "Notions : bulle spéculative, valeur fondamentale, comportements mimétiques, prophéties auto-réalisatrices, panique bancaire, aléa moral, ratio de solvabilité.",
      "Repères : crise de 1929 ; crise des subprimes de 2008.",
      "Chapitre non évaluable à l'écrit 2026 (mais excellent appui pour le Grand Oral)."
    ]
  });

  set("eco-europe", {
    intro: "L'Union européenne constitue une construction économique originale, qui combine un vaste marché unique et, pour une partie des États, une union monétaire : la zone euro. Ce cadre encadre fortement les politiques économiques nationales. Le problème est de comprendre comment ces politiques s'articulent dans un tel ensemble, et quelles difficultés spécifiques cette architecture soulève.",
    parties: [
      { t: "I. Le cadre de l'intégration européenne", sub: [
        { t: "A. Le marché unique", p: [
          "Le marché unique (achevé en 1993) repose sur les « quatre libertés » : la libre circulation des biens, des services, des capitaux et des personnes. Il favorise la croissance par l'intensification de la concurrence, les économies d'échelle (des marchés plus vastes) et une plus grande variété pour les consommateurs." ] },
        { t: "B. La politique de la concurrence", p: [
          "Pour que cette concurrence reste loyale, l'UE mène une politique de la concurrence : lutte contre les ententes et les abus de position dominante, contrôle des concentrations (fusions) et des aides d'État. Elle est parfois critiquée lorsqu'elle empêche l'émergence de « champions européens » face aux géants américains et chinois." ] }
      ],
        trans: "À ce marché intégré s'ajoute, pour 20 pays, une monnaie commune — ce qui soulève la question de la coordination des politiques économiques." },
      { t: "II. Le partage des politiques conjoncturelles", sub: [
        { t: "A. Une politique monétaire unique", p: [
          "Dans la zone euro, la politique monétaire est unique et indépendante : elle est conduite par la Banque centrale européenne (BCE, à Francfort), dont l'objectif principal est la stabilité des prix (maîtrise de l'inflation). L'euro est scriptural depuis 1999, en pièces et billets depuis 2002." ] },
        { t: "B. Des politiques budgétaires nationales", p: [
          "En revanche, la politique budgétaire reste nationale : chaque État décide de ses dépenses et de ses recettes. Mais cette autonomie est encadrée par les traités, qui imposent des règles sur les déficits et la dette publics pour préserver la stabilité de la monnaie commune." ] }
      ],
        trans: "Ce partage entre une monnaie unique et des budgets nationaux engendre des difficultés propres." },
      { t: "III. Les difficultés de ce policy mix", sub: [
        { t: "A. Les chocs asymétriques", p: [
          "Une politique monétaire unique (un même taux d'intérêt pour tous) convient mal à des pays connaissant des situations économiques différentes : ce qui est bon pour une économie en surchauffe peut être néfaste pour une économie en récession." ] },
        { t: "B. Le défaut de coordination", p: [
          "Les politiques budgétaires, restées nationales, sont difficiles à harmoniser, ce qui handicape la réponse commune aux crises — comme l'a montré la crise de la zone euro des années 2010." ] }
      ]}
    ],
    conclusion: "L'intégration européenne offre les bénéfices d'un grand marché et d'une monnaie stable, mais au prix d'une architecture déséquilibrée : une politique monétaire unique cohabite avec des politiques budgétaires nationales mal coordonnées. C'est cette tension, entre intégration monétaire et souveraineté budgétaire, qui constitue le principal défi de la zone euro.",
    retenir: [
      "Notions : marché unique (4 libertés), zone euro, politique monétaire (BCE) / budgétaire (nationale), politique de la concurrence, choc asymétrique, défaut de coordination.",
      "Repères : marché unique achevé en 1993 ; euro scriptural 1999, fiduciaire 2002 ; BCE à Francfort."
    ]
  });

  set("socio-structure", {
    intro: "Toute société est structurée : les individus y occupent des positions hiérarchisées et inégales. Décrire la structure de la société française revient à identifier les facteurs qui la divisent et la hiérarchisent. Mais une question traverse la sociologie depuis ses origines : ces divisions forment-elles encore des « classes sociales », ou bien la société est-elle devenue trop fragmentée et individualisée pour qu'une telle analyse reste pertinente ?",
    parties: [
      { t: "I. Les facteurs de structuration de l'espace social", sub: [
        { t: "A. Une hiérarchie multidimensionnelle", p: [
          "La position sociale ne dépend pas d'un seul critère. L'espace social (Bourdieu) est hiérarchisé par la catégorie socioprofessionnelle (PCS), le revenu et le diplôme, mais aussi par l'âge, le sexe, le lieu de résidence et la composition du ménage. Ces facteurs se combinent et souvent se cumulent (capital économique ET capital culturel)." ] },
        { t: "B. Les grandes évolutions depuis 1950", p: [
          "La structure socioprofessionnelle s'est profondément transformée : salarisation (la quasi-totalité des actifs sont aujourd'hui salariés), tertiarisation (l'emploi s'est déplacé de l'industrie vers les services), élévation générale du niveau de qualification et féminisation des emplois. La classe ouvrière a reculé, les professions intermédiaires et les cadres ont progressé." ] }
      ],
        trans: "Ces positions hiérarchisées constituent-elles pour autant des classes sociales au sens fort ?" },
      { t: "II. L'analyse en termes de classes sociales", sub: [
        { t: "A. Deux traditions : Marx et Weber", p: [
          "Pour Marx, les classes se définissent objectivement par la place dans les rapports de production : la bourgeoisie (qui possède les moyens de production) s'oppose au prolétariat. Une classe passe de l'état de classe « en soi » (réalité objective) à celui de classe « pour soi » lorsqu'elle prend conscience de ses intérêts communs (conscience de classe).",
          "Weber propose une analyse multidimensionnelle : la hiérarchie sociale combine l'ordre économique (les classes), l'ordre social (les groupes de statut, fondés sur le prestige) et l'ordre politique (les partis)." ] },
        { t: "B. Les débats actuels", p: [
          "La pertinence des classes fait débat. La thèse de la moyennisation (années 1960-70) soulignait la constitution d'une vaste classe moyenne et la réduction des écarts. On insiste aujourd'hui sur l'individualisation (l'affaiblissement des appartenances collectives) et sur l'articulation avec le genre. Mais le retour des inégalités relance l'analyse en termes de classes." ] }
      ]}
    ],
    conclusion: "La société française est structurée par une pluralité de facteurs qui se cumulent, et ses transformations (salarisation, tertiarisation) ont brouillé les frontières d'antan. Si l'identification subjective aux classes a reculé, les inégalités objectives, elles, persistent : l'analyse en termes de classes garde donc une part de sa pertinence, à condition de la croiser avec d'autres dimensions comme le genre et la génération.",
    retenir: [
      "Notions : espace social, PCS, salarisation / tertiarisation / féminisation, classe en soi / pour soi (Marx), groupes de statut (Weber), moyennisation, individualisation.",
      "Auteurs : Marx (rapports de production), Weber (multidimensionnel), Bourdieu (espace social, capitaux)."
    ]
  });

  set("socio-ecole", {
    intro: "Dans les sociétés démocratiques, l'École a une double mission : transmettre des savoirs et favoriser l'égalité des chances, c'est-à-dire permettre à chacun de réussir indépendamment de son origine sociale. L'accès à l'école s'est massivement élargi depuis les années 1950. Pourtant, les inégalités de réussite persistent. Le problème est donc de savoir si l'École réduit réellement les inégalités sociales, et d'où viennent les inégalités de réussite scolaire.",
    parties: [
      { t: "I. Massification n'est pas démocratisation", sub: [
        { t: "A. Deux processus distincts", p: [
          "La massification scolaire désigne l'augmentation générale et quantitative des effectifs scolarisés et de l'accès aux diplômes : aujourd'hui, la quasi-totalité d'une génération atteint le lycée, et une part croissante l'enseignement supérieur.",
          "Mais la démocratisation — la réduction des inégalités d'accès selon l'origine sociale — n'a pas suivi au même rythme. On parle parfois de « démocratisation ségrégative » : tout le monde monte d'un cran, mais les écarts entre milieux sociaux se déplacent vers les filières et les diplômes les plus prestigieux, sans se résorber." ] }
      ],
        trans: "Si l'École ne suffit pas à égaliser, d'où viennent les inégalités de réussite ?" },
      { t: "II. Les facteurs des inégalités de réussite", sub: [
        { t: "A. Le poids de la famille", p: [
          "Bourdieu met en avant le capital culturel : les savoirs, le langage, les références et le rapport à la culture transmis par la famille avantagent les enfants des milieux favorisés, dont la culture est proche de celle de l'École.",
          "À cela s'ajoutent les stratégies des ménages : choix de l'établissement, des options, de l'orientation, inégalement maîtrisés selon les familles." ] },
        { t: "B. L'École et la socialisation", p: [
          "L'École n'est pas neutre : ses attentes implicites, le curriculum, les jugements des enseignants peuvent renforcer les inégalités. La socialisation différenciée selon le genre produit aussi des orientations sexuées (filières scientifiques, littéraires)." ] }
      ]}
    ],
    conclusion: "L'École démocratique a réussi sa massification, mais pas pleinement sa démocratisation : l'origine sociale continue de peser lourdement sur la réussite. Les inégalités scolaires résultent de la combinaison du capital culturel familial, des stratégies des ménages et du fonctionnement même de l'institution — ce qui explique la difficulté à les réduire malgré les politiques d'égalité des chances.",
    retenir: [
      "Notions : massification ≠ démocratisation, égalité des chances, capital culturel (Bourdieu), stratégies des ménages, socialisation de genre.",
      "Chapitre non évaluable à l'écrit 2026 (appui Grand Oral)."
    ]
  });

  set("socio-mobilite", {
    intro: "La mobilité sociale désigne le changement de position sociale des individus, en particulier d'une génération à l'autre : c'est la mobilité intergénérationnelle, qui compare la position d'un individu à celle de ses parents. Elle est au cœur de l'idéal démocratique d'égalité des chances. Le problème est double : comment la mesurer rigoureusement, et la société française est-elle réellement mobile et « fluide » ?",
    parties: [
      { t: "I. Mesurer la mobilité sociale", sub: [
        { t: "A. Les tables de mobilité", p: [
          "On mesure la mobilité grâce aux tables de mobilité, qui croisent l'origine sociale (la PCS du père) et la position sociale de l'individu. La table de destinée répond à « que deviennent les fils d'ouvriers ? » ; la table de recrutement à « d'où viennent les cadres ? ».",
          "Elles permettent de repérer trois situations : la mobilité ascendante (monter dans la hiérarchie), la reproduction sociale (rester dans la position des parents) et le déclassement (mobilité descendante)." ] },
        { t: "B. Mobilité observée et fluidité sociale", p: [
          "Il faut distinguer la mobilité structurelle, due à l'évolution de la structure des emplois (la création de postes de cadres et le recul des emplois agricoles obligent mécaniquement à de la mobilité), de la fluidité sociale, qui mesure l'égalité des chances « pure », indépendante de cette évolution. Conséquence importante : une société peut être plus mobile sans être plus fluide." ] }
      ],
        trans: "Comment expliquer le niveau et les formes de cette mobilité ?" },
      { t: "II. Expliquer la mobilité (et la reproduction)", sub: [
        { t: "A. Les facteurs de mobilité", p: [
          "L'évolution de la structure socioprofessionnelle crée des places nouvelles (tertiarisation, hausse des emplois qualifiés). L'élévation des niveaux de formation joue un rôle ambivalent : le diplôme favorise la mobilité, mais sa possession reste socialement inégale." ] },
        { t: "B. Le poids de la reproduction", p: [
          "Les ressources et configurations familiales (capital culturel, économique, social) expliquent une forte reproduction : malgré la mobilité, la position des parents continue de peser lourdement sur celle des enfants. Les trajectoires diffèrent aussi selon le sexe." ] }
      ]}
    ],
    conclusion: "La société française connaît une mobilité réelle, mais en grande partie « structurelle » (liée à la transformation des emplois) plutôt que « fluide » (liée à une véritable égalité des chances). La reproduction sociale demeure forte : l'origine continue largement de déterminer la destinée. Mesurer la mobilité suppose donc de ne jamais confondre le mouvement apparent (mobilité brute) et l'égalité des chances (fluidité).",
    retenir: [
      "Notions : mobilité intergénérationnelle, tables de mobilité (destinée / recrutement), mobilité ascendante / reproduction / déclassement, mobilité structurelle, fluidité sociale.",
      "Piège majeur : ne pas confondre mobilité (observée) et fluidité (égalité des chances)."
    ]
  });

  set("socio-travail", {
    intro: "Le travail et l'emploi connaissent depuis quelques décennies de profondes mutations : montée du chômage et de la précarité, transformation de l'organisation du travail, révolution numérique. Ces évolutions affectent à la fois la nature du travail et sa place dans la société. Le problème est de comprendre comment elles modifient les conditions de travail et le pouvoir intégrateur du travail — sa capacité à insérer l'individu dans la société.",
    parties: [
      { t: "I. Des notions à distinguer, une qualité à apprécier", sub: [
        { t: "A. Travail, activité, emploi, statut", p: [
          "Il faut distinguer le travail (activité productive), l'activité (qui regroupe emploi et chômage), l'emploi (l'exercice du travail dans un cadre statutaire) et le statut (salarié : CDI, CDD… ou non-salarié : indépendant). Les nouvelles formes d'emploi (auto-entrepreneuriat, plateformes numériques) brouillent les frontières entre ces catégories, et entre emploi, chômage et inactivité." ] },
        { t: "B. La qualité de l'emploi", p: [
          "Un emploi ne se résume pas à son existence : sa qualité se mesure à travers les conditions de travail, le niveau de salaire, la sécurité économique, l'horizon de carrière, le potentiel de formation et la variété des tâches." ] }
      ],
        trans: "Au cœur de ces mutations se trouve la transformation de l'organisation du travail." },
      { t: "II. L'évolution de l'organisation du travail", sub: [
        { t: "A. Du taylorisme au post-taylorisme", p: [
          "Le modèle taylorien (l'Organisation Scientifique du Travail) repose sur une double division : horizontale (parcellisation des tâches) et verticale (séparation de la conception et de l'exécution), avec une hiérarchie stricte. Le fordisme l'a prolongé avec le travail à la chaîne.",
          "Le modèle post-taylorien cherche à dépasser ces limites par la flexibilité, la recomposition des tâches et le management participatif. Mais ses effets sont ambivalents : plus d'autonomie, mais aussi intensification et stress." ] },
        { t: "B. L'impact du numérique", p: [
          "Le numérique brouille les frontières (télétravail, disponibilité permanente, frontière travail / hors-travail) et accroît la polarisation des emplois : croissance des emplois très qualifiés et peu qualifiés, au détriment des emplois intermédiaires automatisables." ] }
      ],
        trans: "Au-delà des conditions de travail, ces mutations touchent au rôle social du travail lui-même." },
      { t: "III. Travail et intégration sociale", sub: [
        { t: "A. Un puissant facteur d'intégration", p: [
          "Le travail est une source majeure d'intégration sociale : il procure un revenu, mais aussi un statut, une identité et des liens sociaux. C'est pourquoi le chômage et la précarité sont vécus comme une exclusion, au-delà de la seule perte de revenu." ] },
        { t: "B. Un pouvoir intégrateur affaibli", p: [
          "Or les évolutions actuelles — précarisation, chômage durable, polarisation de la qualité des emplois — affaiblissent ce pouvoir intégrateur : le travail intègre moins sûrement qu'auparavant." ] }
      ]}
    ],
    conclusion: "Les mutations du travail et de l'emploi (flexibilité, numérique, nouvelles formes d'emploi) transforment en profondeur l'expérience du travail : elles offrent parfois plus d'autonomie, mais fragilisent aussi les conditions de travail et le pouvoir intégrateur du travail. L'enjeu social est de préserver ce dernier — faire en sorte que le travail continue d'inclure, et non d'exclure.",
    retenir: [
      "Notions : travail / activité / emploi / statut, qualité de l'emploi, taylorisme (OST) / fordisme / post-taylorisme, polarisation des emplois, intégration sociale par le travail.",
      "Repère : taylorisme (début XXᵉ) → fordisme (chaîne) → post-taylorisme + numérique."
    ]
  });

  set("socio-engagement", {
    intro: "L'engagement politique désigne la participation des individus à la vie de la cité, sous des formes variées : le vote, le militantisme dans un parti ou un syndicat, l'engagement associatif, ou encore la consommation engagée (boycotts, achats militants). Or, du point de vue de l'intérêt individuel, s'engager semble irrationnel. Le problème est donc de comprendre pourquoi les individus s'engagent malgré tout, et ce qui détermine les formes de leur engagement.",
    parties: [
      { t: "I. Pourquoi s'engager, malgré le paradoxe de l'action collective ?", sub: [
        { t: "A. Le paradoxe d'Olson", p: [
          "Olson formule le paradoxe de l'action collective : si l'action vise un bien collectif (dont tous profiteront, qu'ils aient participé ou non), l'individu rationnel a intérêt à ne PAS s'engager et à laisser les autres faire, pour bénéficier du résultat sans en payer le coût. C'est le « passager clandestin » (free rider). À suivre cette logique, personne ne devrait s'engager." ] },
        { t: "B. Les solutions au paradoxe", p: [
          "Pourtant, les individus s'engagent. Plusieurs facteurs l'expliquent : les incitations sélectives (des avantages, matériels ou non, réservés aux seuls participants), les rétributions symboliques (la reconnaissance, le sentiment d'utilité, la sociabilité, l'identité que procure l'engagement) et la structure des opportunités politiques (un contexte plus ou moins favorable à la mobilisation)." ] }
      ],
        trans: "Au-delà du « pourquoi », il faut comprendre qui s'engage, et sous quelles formes." },
      { t: "II. Les déterminants et les formes de l'engagement", sub: [
        { t: "A. Les variables sociodémographiques", p: [
          "L'engagement n'est pas réparti au hasard : il dépend de la CSP, du diplôme (plus on est diplômé, plus on s'engage en moyenne), de l'âge et de la génération (effets de cycle de vie et d'appartenance générationnelle), et du sexe." ] },
        { t: "B. La transformation des acteurs et des répertoires", p: [
          "Les objets de mobilisation se diversifient (des conflits du travail aux nouvelles causes : environnement, luttes minoritaires). Les acteurs évoluent (déclin relatif des partis et syndicats, essor des associations et des collectifs). Et les répertoires d'action (Tilly) — l'ensemble des moyens d'action disponibles à une époque — se transforment, des formes classiques (manifestation, grève, pétition) aux mobilisations en ligne." ] }
      ]}
    ],
    conclusion: "L'engagement politique est un paradoxe résolu : malgré la logique du passager clandestin, les individus s'engagent, mus par des incitations sélectives mais surtout par des rétributions symboliques. Loin de disparaître, l'engagement se transforme : il déserte en partie les formes traditionnelles (partis, syndicats) pour de nouvelles causes, de nouveaux acteurs et de nouveaux répertoires.",
    retenir: [
      "Notions : engagement politique, paradoxe de l'action collective / passager clandestin (Olson), incitations sélectives, rétributions symboliques, structure des opportunités politiques, répertoire d'action (Tilly).",
      "Idée-clé : on s'engage rarement par pur calcul — les rétributions symboliques comptent autant que les matérielles."
    ]
  });

  set("rc-justice", {
    intro: "Les inégalités économiques et sociales (de revenu, de patrimoine, d'éducation, de santé…) sont multiformes et souvent cumulatives : elles se renforcent les unes les autres. Mais toute inégalité n'est pas nécessairement injuste. Le problème, à la croisée de l'économie et de la philosophie politique, est de déterminer quelles inégalités sont compatibles avec la justice, selon les différentes conceptions de celle-ci, et comment les pouvoirs publics peuvent agir.",
    parties: [
      { t: "I. Mesurer les inégalités", sub: [
        { t: "A. Les outils de mesure", p: [
          "On dispose d'outils statiques : le rapport inter-quantiles (par exemple D9/D1, qui compare les revenus des 10 % les plus riches et des 10 % les plus pauvres), la courbe de Lorenz et le coefficient de Gini (compris entre 0 = égalité parfaite et 1 = inégalité maximale), ou la part du revenu détenue par le « top 1 % ».",
          "Et un outil dynamique : la corrélation de revenu entre parents et enfants, qui mesure la transmission — donc la reproduction — des inégalités d'une génération à l'autre." ] }
      ],
        trans: "Mais à partir de quand une inégalité devient-elle injuste ? Tout dépend de la conception de la justice retenue." },
      { t: "II. Les conceptions de la justice sociale", sub: [
        { t: "A. Les trois formes d'égalité", p: [
          "On distingue l'égalité des droits (les mêmes droits pour tous, fondement de la démocratie), l'égalité des chances (neutraliser le poids de l'origine sociale dans les trajectoires) et l'égalité des situations (réduire les écarts de résultats eux-mêmes). Chaque société arbitre entre elles." ] },
        { t: "B. Les grandes doctrines", p: [
          "L'utilitarisme vise à maximiser le bien-être total, quitte à tolérer des inégalités. Le libertarisme (Nozick) donne la priorité absolue à la liberté et au respect de la propriété. L'égalitarisme libéral de Rawls n'admet les inégalités que si elles profitent aussi aux plus défavorisés (principe de différence). L'égalitarisme strict vise l'égalité des situations." ] }
      ],
        trans: "Ces conceptions orientent l'action concrète des pouvoirs publics." },
      { t: "III. L'action des pouvoirs publics", sub: [
        { t: "A. Les instruments de la justice sociale", p: [
          "Pour réduire les inégalités jugées injustes, l'État dispose de la fiscalité (impôts progressifs, redistribution), de la protection sociale, des services collectifs (école, santé) et des mesures de lutte contre les discriminations." ] },
        { t: "B. Sous contrainte et en débat", p: [
          "Mais cette action s'exerce sous contrainte de financement et fait l'objet de débats : sur son efficacité (réduit-elle vraiment les inégalités ?), sa légitimité (le consentement à l'impôt) et ses risques d'effets pervers (désincitations au travail ou à l'effort)." ] }
      ]}
    ],
    conclusion: "Les inégalités ne sont pas justes ou injustes en elles-mêmes : leur évaluation dépend de la conception de la justice que l'on adopte (de l'utilitarisme à l'égalitarisme strict). L'action publique cherche un équilibre toujours discuté entre la réduction des inégalités, le respect des libertés et l'efficacité économique — preuve que la justice sociale est autant un choix politique qu'une question technique.",
    retenir: [
      "Notions : inégalités multiformes / cumulatives, courbe de Lorenz & coefficient de Gini, formes d'égalité (droits / chances / situations), conceptions de la justice (utilitarisme, libertarisme, Rawls, égalitarisme strict), redistribution, effets pervers.",
      "Chapitre non évaluable à l'écrit 2026 (appui Grand Oral)."
    ]
  });

  set("rc-environnement", {
    intro: "L'environnement, et en particulier le changement climatique, s'est imposé comme un problème public majeur. Mais un problème environnemental n'a rien d'« évident » : il doit être construit comme tel par des acteurs, puis inscrit à l'agenda politique. Le problème est de comprendre comment se construit ce problème public, et de quels instruments dispose l'action publique, à quelles échelles, pour y répondre efficacement.",
    parties: [
      { t: "I. La construction du problème public environnemental", sub: [
        { t: "A. Des acteurs en coopération et en conflit", p: [
          "Une question ne devient un « problème public » que lorsque des acteurs la construisent comme telle et obtiennent sa mise à l'agenda politique. De nombreux acteurs y participent : les pouvoirs publics, les ONG, les entreprises, les experts (le GIEC pour le climat), les partis et les mouvements citoyens.",
          "Ces acteurs entretiennent des relations à la fois de coopération et de conflit (lobbying des uns, mobilisations des autres) : la définition même du problème et des solutions est un enjeu de luttes." ] }
      ],
        trans: "Une fois le problème posé, comment les pouvoirs publics peuvent-ils agir ?" },
      { t: "II. Les instruments de l'action publique", sub: [
        { t: "A. Le cadre : externalités et échelles", p: [
          "La pollution est l'exemple type d'une externalité négative : un coût imposé à des tiers (la collectivité, les générations futures) sans compensation par le marché. Corriger cette défaillance justifie l'intervention publique, qui s'articule à plusieurs échelles imbriquées : locale, nationale, européenne et mondiale." ] },
        { t: "B. Les quatre grands instruments (ex. climat)", p: [
          "Face au changement climatique, les pouvoirs publics disposent de quatre instruments : la réglementation (normes, interdictions), le marché de quotas d'émission (plafonner puis échanger des « droits à polluer »), la taxation (la taxe carbone, qui applique le principe pollueur-payeur, dans la logique de l'économiste Pigou) et la subvention à l'innovation verte.",
          "Chacun a ses avantages et ses limites (efficacité, coût, acceptabilité sociale) et peut se heurter à des dysfonctionnements de l'action publique." ] }
      ],
        trans: "Mais au-delà de chaque pays, le climat pose un défi de coopération internationale redoutable." },
      { t: "III. Le défi de la coopération internationale", sub: [
        { t: "A. Le climat, un bien commun mondial", p: [
          "Le climat est un bien commun mondial : non exclusif (nul ne peut en être privé) mais rival (sa dégradation nuit à tous). Sa préservation se heurte donc aux stratégies de passager clandestin : chaque pays est tenté de profiter des efforts des autres sans réduire lui-même ses émissions." ] },
        { t: "B. L'obstacle des inégalités de développement", p: [
          "S'y ajoutent les inégalités de développement : les pays émergents refusent de freiner leur croissance pour un problème largement causé par les pays développés. D'où la difficulté des accords internationaux (les COP), qui doivent concilier efficacité écologique et équité entre nations." ] }
      ]}
    ],
    conclusion: "L'action publique pour l'environnement suppose d'abord que le problème soit construit et mis à l'agenda par une diversité d'acteurs, puis qu'elle mobilise des instruments complémentaires (réglementation, quotas, taxe, subvention) à des échelles articulées. Mais le caractère de bien commun mondial du climat en fait un défi politique majeur, où l'efficacité dépend d'une coopération internationale toujours fragile.",
    retenir: [
      "Notions : problème public, mise à l'agenda, externalité négative, instruments (réglementation, marché de quotas, taxation, subvention), bien commun, passager clandestin.",
      "Repère : la taxe carbone illustre le principe « pollueur-payeur » (logique de Pigou) ; le GIEC pour l'expertise climatique."
    ]
  });

})();
