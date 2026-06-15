/* =====================================================================
   SES Terminale — Banque de questions (extension 7)
   ---------------------------------------------------------------------
   Ajouté à window.SES_QUIZ. Surtout des QCM : élargit le banc qui
   alimente le mode SURVIE (tirage du banc complet dédoublonné).
   Distracteurs de longueurs variées, index `c` réparti.
   ===================================================================== */
(function () {
  var Q = window.SES_QUIZ; if (!Q) { window.SES_QUIZ = Q = {}; }
  function add(id, extra){
    var t = Q[id]; if (!t) { t = Q[id] = { qcm:[], vf:[], trous:[] }; }
    ["qcm","vf","trous"].forEach(function(k){ if (extra[k]) t[k] = (t[k]||[]).concat(extra[k]); });
  }

  /* ===== 1. CROISSANCE ===== */
  add("eco-croissance", { qcm: [
    { q: "Le PIB « réel » se distingue du PIB « nominal » parce qu'il :", o: ["inclut l'économie souterraine", "est corrigé de l'inflation (à prix constants)", "compte les exportations deux fois", "exclut les services publics"], c: 1, e: "Réel = volume (prix constants) ; nominal = valeur (prix courants). On isole la vraie croissance." },
    { q: "Des institutions « extractives » (Acemoglu) freinent la croissance car elles :", o: ["protègent trop la propriété", "concentrent le pouvoir et les rentes au profit d'une minorité, décourageant l'investissement", "favorisent l'innovation", "garantissent l'État de droit"], c: 1, e: "À l'inverse des institutions inclusives qui sécurisent contrats et droits de propriété." },
    { q: "Le capital public (infrastructures, écoles) soutient la croissance en :", o: ["remplaçant le travail", "améliorant la productivité de l'ensemble des facteurs privés", "augmentant l'inflation", "réduisant la population active"], c: 1, e: "Routes, réseaux, éducation : externalités positives sur toute l'économie." }
  ]});

  /* ===== 2. COMMERCE ===== */
  add("eco-commerce", { qcm: [
    { q: "Pour Adam Smith, un pays doit se spécialiser selon son avantage :", o: ["comparatif", "absolu (produire un bien avec moins de facteurs que les autres)", "démographique", "monétaire"], c: 1, e: "Smith = avantage absolu ; Ricardo complète avec l'avantage comparatif." },
    { q: "Le « dumping » consiste à :", o: ["fermer ses frontières", "vendre à l'étranger à un prix inférieur au coût ou au prix domestique", "augmenter ses droits de douane", "subventionner les ménages"], c: 1, e: "Pratique de concurrence déloyale, sanctionnée par des mesures antidumping." },
    { q: "Les « termes de l'échange » d'un pays s'améliorent quand :", o: ["ses importations augmentent", "le prix de ses exportations augmente plus vite que celui de ses importations", "sa monnaie s'effondre", "ses exportations chutent"], c: 1, e: "Rapport prix export / prix import : une hausse = pouvoir d'achat extérieur accru." }
  ]});

  /* ===== 3. CHÔMAGE ===== */
  add("eco-chomage", { qcm: [
    { q: "Le taux d'activité rapporte les actifs (occupés + chômeurs) :", o: ["aux seuls chômeurs", "à la population en âge de travailler", "aux retraités", "aux emplois vacants"], c: 1, e: "≠ taux d'emploi (occupés / population en âge de travailler) ; ≠ taux de chômage (chômeurs / actifs)." },
    { q: "Le « sous-emploi » désigne des personnes qui :", o: ["ne cherchent pas de travail", "travaillent à temps partiel mais souhaiteraient travailler plus", "sont au chômage total", "sont retraitées"], c: 1, e: "Temps partiel subi : un halo autour du chômage, signe de sous-utilisation du travail." },
    { q: "L'« hystérèse » du chômage signifie qu'un chômage élevé :", o: ["disparaît tout seul rapidement", "tend à s'auto-entretenir (perte de compétences, découragement), devenant structurel", "fait baisser les prix", "augmente l'offre de travail"], c: 1, e: "Un chômage conjoncturel prolongé peut se transformer en chômage durable." }
  ]});

  /* ===== 4. CRISES FINANCIÈRES ===== */
  add("eco-crises", { qcm: [
    { q: "La « titrisation » consiste à :", o: ["imprimer de la monnaie", "transformer des crédits en titres financiers revendus sur les marchés", "nationaliser les banques", "interdire l'emprunt"], c: 1, e: "Au cœur de la crise des subprimes (2008) : le risque est dispersé… et opacifié." },
    { q: "Les agences de notation ont joué un rôle dans la crise de 2008 en :", o: ["interdisant les prêts", "attribuant de bonnes notes à des produits en réalité très risqués", "baissant les taux directeurs", "rachetant des titres"], c: 1, e: "Surévaluation du risque : asymétrie d'information et conflits d'intérêts." },
    { q: "Le « risque systémique » désigne le risque que :", o: ["une seule entreprise fasse faillite sans conséquence", "la défaillance d'un acteur se propage à tout le système financier (contagion)", "les prix baissent légèrement", "un ménage ne rembourse pas"], c: 1, e: "Interconnexion des banques : d'où la régulation prudentielle (Bâle) et le prêteur en dernier ressort." }
  ]});

  /* ===== 5. EUROPE ===== */
  add("eco-europe", { qcm: [
    { q: "Un avantage de la monnaie unique pour les échanges est :", o: ["la hausse des droits de douane", "la suppression du risque de change et des coûts de conversion entre membres", "la dévaluation permanente", "la fin du commerce"], c: 1, e: "Plus de risque de change intra-zone : commerce et investissement facilités." },
    { q: "La « convergence réelle » entre pays de la zone euro désigne le rapprochement :", o: ["de leurs drapeaux", "de leurs niveaux de vie, de productivité et de structures économiques", "de leurs langues", "de leurs fuseaux horaires"], c: 1, e: "≠ convergence nominale (inflation, taux). Son insuffisance fragilise l'union monétaire." },
    { q: "Le « Semestre européen » est un dispositif de :", o: ["vacances communes", "coordination et surveillance des politiques budgétaires et économiques nationales", "création monétaire", "fixation des salaires"], c: 1, e: "L'UE examine en amont les budgets et réformes des États membres." }
  ]});

  /* ===== 6. STRUCTURE SOCIALE ===== */
  add("socio-structure", { qcm: [
    { q: "Pour Edmond Goblot, la bourgeoisie se protège par une « barrière » et un « niveau », c'est-à-dire :", o: ["des murs et des étages", "des conditions d'accès (diplôme, manières) et un mode de vie distinctif à maintenir", "un revenu minimum", "un quota d'emplois"], c: 1, e: "La « barrière » filtre l'entrée ; le « niveau » impose des codes pour rester du bon côté." },
    { q: "Les trois formes de capital chez Bourdieu sont les capitaux :", o: ["fixe, circulant et humain", "économique, culturel et social", "public, privé et associatif", "matériel, immatériel et naturel"], c: 1, e: "Économique (patrimoine), culturel (savoirs/diplômes), social (réseaux) : ils se cumulent et se convertissent." },
    { q: "Le sentiment d'appartenance à une classe a tendance, en France, à :", o: ["se renforcer fortement", "s'affaiblir avec l'individualisation, sans que les inégalités disparaissent", "rendre les revenus égaux", "supprimer les PCS"], c: 1, e: "On se pense moins « en classes », mais les écarts objectifs demeurent." }
  ]});

  /* ===== 7. ÉCOLE ===== */
  add("socio-ecole", { qcm: [
    { q: "L'« autocensure » scolaire désigne le fait que des élèves :", o: ["trichent aux examens", "limitent eux-mêmes leurs ambitions d'orientation selon leur origine sociale", "refusent d'aller à l'école", "choisissent les filières les plus sélectives"], c: 1, e: "Intériorisation des chances objectives : on ne « se voit pas » dans certaines filières." },
    { q: "L'« effet établissement » montre que :", o: ["tous les établissements se valent", "le contexte scolaire (composition sociale, climat) influence la réussite des élèves", "seuls les profs comptent", "l'origine sociale n'a aucun effet"], c: 1, e: "À profil égal, l'établissement fréquenté pèse sur les parcours (ségrégation scolaire)." }
  ]});

  /* ===== 8. MOBILITÉ ===== */
  add("socio-mobilite", { qcm: [
    { q: "La « contre-mobilité » désigne le fait de :", o: ["ne jamais bouger socialement", "retrouver, après une mobilité, la position sociale de ses parents", "émigrer à l'étranger", "changer d'emploi chaque année"], c: 1, e: "Ex. études longues puis retour au niveau d'origine : la trajectoire boucle." },
    { q: "La famille pèse sur la mobilité notamment par :", o: ["sa seule taille", "la transmission de capital culturel, économique et social", "le hasard", "la météo"], c: 1, e: "Aide aux devoirs, réseaux, patrimoine, ambitions : la socialisation familiale oriente les parcours." },
    { q: "Une société est d'autant plus « fluide » que :", o: ["la structure des emplois change vite", "la destinée des individus dépend peu de leur origine sociale", "il y a beaucoup d'agriculteurs", "les diplômes sont rares"], c: 1, e: "Fluidité = égalité des chances, indépendante des effets de structure." }
  ]});

  /* ===== 9. TRAVAIL ===== */
  add("socio-travail", { qcm: [
    { q: "En France, le taux de syndicalisation est :", o: ["parmi les plus élevés d'Europe", "faible, mais les syndicats gardent un poids dans la négociation collective", "de 100 %", "interdit"], c: 1, e: "Paradoxe français : peu d'adhérents, mais une couverture conventionnelle large." },
    { q: "Le « chômage technologique » résulte :", o: ["d'une pénurie de machines", "du remplacement d'emplois par l'automatisation et le progrès technique", "d'une hausse des salaires", "de la baisse de la population"], c: 1, e: "Destruction d'emplois par la technique ; compensée en partie par la destruction créatrice." },
    { q: "La qualification « reconnue » d'un emploi se lit surtout dans :", o: ["la couleur du badge", "la classification de la convention collective et le niveau de rémunération", "l'ancienneté seule", "le lieu de travail"], c: 1, e: "La qualification est une construction sociale (négociée), pas seulement une compétence technique." }
  ]});

  /* ===== 10. ENGAGEMENT ===== */
  add("socio-engagement", { qcm: [
    { q: "L'effet « de génération » sur le vote signifie que :", o: ["tout le monde vote pareil au même âge", "une cohorte marquée par un contexte garde des comportements politiques durables", "le vote dépend de la météo", "seuls les jeunes votent"], c: 1, e: "≠ effet d'âge (lié au cycle de vie) : la génération imprime une trace durable." },
    { q: "L'abstention électorale peut être analysée comme :", o: ["toujours de l'indifférence pure", "parfois un retrait, parfois une protestation ou un engagement déçu", "un délit", "une obligation légale"], c: 1, e: "L'abstention n'est pas qu'apathie : elle a des significations sociales variées." },
    { q: "Le « consumérisme politique » (consommation engagée) consiste à :", o: ["consommer sans réfléchir", "orienter ses achats (boycott, achat responsable) pour peser politiquement", "voter plusieurs fois", "adhérer à un parti"], c: 1, e: "Forme d'engagement individualisée, hors des canaux partisans classiques." }
  ]});

  /* ===== 11. JUSTICE SOCIALE ===== */
  add("rc-justice", { qcm: [
    { q: "Pour l'utilitarisme (Bentham), une société juste maximise :", o: ["la liberté des plus riches", "le bonheur (l'utilité) total du plus grand nombre", "l'égalité stricte des revenus", "le pouvoir de l'État"], c: 1, e: "Critère : la plus grande somme de bien-être — critiqué car il peut sacrifier des minorités." },
    { q: "L'approche par les « capabilités » (Amartya Sen) évalue la justice selon :", o: ["le seul revenu monétaire", "les libertés réelles dont disposent les individus pour mener la vie qu'ils ont raison de valoriser", "le PIB par habitant", "le patrimoine"], c: 1, e: "Au-delà des ressources : ce que les gens peuvent réellement être ou faire." },
    { q: "Distinguer égalité « formelle » et égalité « réelle », c'est opposer :", o: ["deux synonymes", "l'égalité en droit à l'égalité effective des situations et des moyens", "le riche et le pauvre", "l'impôt et la prestation"], c: 1, e: "Mêmes droits sur le papier ≠ mêmes possibilités concrètes (d'où la discrimination positive)." }
  ]});

  /* ===== 12. ENVIRONNEMENT ===== */
  add("rc-environnement", { qcm: [
    { q: "Le principe « pollueur-payeur » signifie que :", o: ["l'État paie pour tout le monde", "le coût de la pollution doit être supporté par celui qui la génère", "la pollution est gratuite", "les ménages sont seuls responsables"], c: 1, e: "Internaliser le coût externe : fondement de la fiscalité environnementale." },
    { q: "Le principe de précaution s'applique quand :", o: ["le risque est parfaitement connu", "un risque grave est possible mais l'incertitude scientifique demeure", "il n'y a aucun danger", "le profit est garanti"], c: 1, e: "Agir/encadrer sans attendre la certitude, face à un dommage potentiellement irréversible." },
    { q: "Pour Elinor Ostrom, les biens communs (forêts, pêcheries) peuvent être préservés :", o: ["seulement par la propriété privée", "par des institutions de gestion collective définies par les usagers eux-mêmes", "uniquement par l'État central", "en les laissant en libre accès"], c: 1, e: "Une 3ᵉ voie entre marché et État, contre le fatalisme de la « tragédie des communs »." }
  ]});

})();
