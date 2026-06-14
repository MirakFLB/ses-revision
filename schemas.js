/* =====================================================================
   SES Terminale — Schémas & courbes (page « Schémas »)
   ---------------------------------------------------------------------
   window.SES_SCHEMAS = [ { id, titre, chap, accent, svg, lecture[], retenir[] } ]
   svg : graphique vectoriel annoté (couleurs = variables CSS du thème).
   lecture : comment LIRE le schéma (pas à pas).
   retenir : ce qui tombe / la phrase à recracher le jour J.
   Rendu par renderSchemas() dans app.js.
   ===================================================================== */
window.SES_SCHEMAS = [

  /* ---------- 1. LORENZ + GINI ---------- */
  {
    id: "lorenz-gini",
    titre: "Courbe de Lorenz & coefficient de Gini",
    chap: "Mesurer les inégalités",
    accent: "rc",
    svg: `<svg viewBox="0 0 440 300" role="img" aria-label="Courbe de Lorenz et aire de Gini">
      <line x1="55" y1="265" x2="410" y2="265" stroke="var(--text-3)" stroke-width="1.4"/>
      <line x1="55" y1="265" x2="55" y2="28" stroke="var(--text-3)" stroke-width="1.4"/>
      <path d="M55,265 L380,40 C 320,140 235,235 55,265 Z" fill="var(--accent)" opacity="0.16"/>
      <line x1="55" y1="265" x2="380" y2="40" stroke="var(--text-2)" stroke-width="1.6" stroke-dasharray="6 4"/>
      <path d="M55,265 C 235,255 320,150 380,40" fill="none" stroke="var(--accent)" stroke-width="2.6"/>
      <circle cx="380" cy="40" r="3.2" fill="var(--accent)"/>
      <text x="150" y="120" fill="var(--text-2)" font-size="12" transform="rotate(-33 150 120)">diagonale = égalité parfaite</text>
      <text x="250" y="232" fill="var(--accent)" font-size="12.5" font-weight="600">courbe de Lorenz</text>
      <text x="205" y="180" fill="var(--text-2)" font-size="15" font-weight="700">A</text>
      <text x="300" y="255" fill="var(--text-3)" font-size="13" font-weight="600">B</text>
      <text x="232" y="290" fill="var(--text-3)" font-size="11.5" text-anchor="middle">% cumulé de la population</text>
      <text x="20" y="150" fill="var(--text-3)" font-size="11.5" text-anchor="middle" transform="rotate(-90 20 150)">% cumulé du revenu</text>
      <text x="60" y="282" fill="var(--text-3)" font-size="11">0</text>
      <text x="372" y="282" fill="var(--text-3)" font-size="11">100</text>
    </svg>`,
    formule: "Gini = aire A ÷ (aire A + aire B) = aire A ÷ (aire du demi-triangle)",
    lecture: [
      "Axe horizontal : population classée des plus pauvres aux plus riches (% cumulé). Axe vertical : part cumulée du revenu (ou du patrimoine) qu'ils détiennent.",
      "La diagonale est l'égalité parfaite : 20 % des gens détiennent 20 % du revenu, 50 % en détiennent 50 %, etc.",
      "La courbe de Lorenz réelle passe SOUS la diagonale : ex. les 50 % les plus pauvres ne touchent que 25 % du revenu.",
      "Plus la courbe s'éloigne de la diagonale (plus l'aire A est grande), plus la société est inégalitaire."
    ],
    retenir: [
      "Gini = A / (A+B) : un nombre entre 0 et 1.",
      "Gini = 0 → égalité parfaite (la courbe est sur la diagonale). Gini = 1 → inégalité maximale (une personne a tout).",
      "France : Gini du niveau de vie ≈ 0,29–0,30 ; il est plus élevé pour le patrimoine que pour les revenus.",
      "Deux courbes qui se croisent ne se comparent pas directement par le Gini : un même Gini peut cacher des répartitions différentes."
    ]
  },

  /* ---------- 2. MARCHÉ DU TRAVAIL & CHÔMAGE ---------- */
  {
    id: "marche-travail",
    titre: "Marché du travail & chômage « classique »",
    chap: "Comment lutter contre le chômage ?",
    accent: "eco",
    svg: `<svg viewBox="0 0 440 300" role="img" aria-label="Offre et demande de travail, salaire minimum et chômage">
      <line x1="55" y1="265" x2="410" y2="265" stroke="var(--text-3)" stroke-width="1.4"/>
      <line x1="55" y1="265" x2="55" y2="28" stroke="var(--text-3)" stroke-width="1.4"/>
      <line x1="70" y1="70" x2="370" y2="250" stroke="var(--text-2)" stroke-width="2.2"/>
      <line x1="70" y1="250" x2="370" y2="70" stroke="var(--accent)" stroke-width="2.2"/>
      <line x1="55" y1="110" x2="370" y2="110" stroke="var(--warn)" stroke-width="2" stroke-dasharray="6 4"/>
      <line x1="137" y1="110" x2="303" y2="110" stroke="var(--warn)" stroke-width="6" opacity="0.5"/>
      <circle cx="220" cy="160" r="3.4" fill="var(--text)"/>
      <line x1="55" y1="160" x2="220" y2="160" stroke="var(--text-3)" stroke-width="1" stroke-dasharray="3 3"/>
      <text x="40" y="114" fill="var(--warn)" font-size="11.5" text-anchor="end" font-weight="600">SMIC</text>
      <text x="40" y="164" fill="var(--text-2)" font-size="11.5" text-anchor="end">w*</text>
      <text x="318" y="62" fill="var(--accent)" font-size="11.5" font-weight="600">offre (actifs)</text>
      <text x="300" y="262" fill="var(--text-2)" font-size="11.5" font-weight="600">demande (entreprises)</text>
      <text x="220" y="100" fill="var(--warn)" font-size="11.5" text-anchor="middle" font-weight="600">chômage</text>
      <text x="232" y="290" fill="var(--text-3)" font-size="11.5" text-anchor="middle">Quantité de travail (L)</text>
      <text x="20" y="150" fill="var(--text-3)" font-size="11.5" text-anchor="middle" transform="rotate(-90 20 150)">Salaire réel (w)</text>
    </svg>`,
    lecture: [
      "La demande de travail (par les entreprises) décroît avec le salaire : plus le travail coûte cher, moins on embauche.",
      "L'offre de travail (par les actifs) croît avec le salaire : un salaire élevé attire davantage de candidats.",
      "Sans intervention, le marché s'équilibre en w* (salaire) et L* (emploi) — au croisement des deux courbes.",
      "Si un salaire minimum (SMIC) est fixé AU-DESSUS de w*, l'offre dépasse la demande : l'écart est le chômage."
    ],
    retenir: [
      "Analyse libérale (« chômage classique ») : un coût du travail trop élevé (salaire minimum, cotisations) crée du chômage.",
      "D'où les politiques d'allègement de cotisations sur les bas salaires (baisser le coût sans baisser le salaire net).",
      "Nuance keynésienne : le chômage peut aussi venir d'une demande globale insuffisante (chômage conjoncturel), pas seulement du coût du travail.",
      "Le salaire minimum a aussi des effets positifs (pouvoir d'achat, demande, salaire d'efficience) : débat non tranché."
    ]
  },

  /* ---------- 3. COURBE DE PHILLIPS ---------- */
  {
    id: "phillips",
    titre: "Courbe de Phillips (inflation / chômage)",
    chap: "Politiques économiques",
    accent: "eco",
    svg: `<svg viewBox="0 0 440 300" role="img" aria-label="Courbe de Phillips décroissante">
      <line x1="55" y1="265" x2="410" y2="265" stroke="var(--text-3)" stroke-width="1.4"/>
      <line x1="55" y1="265" x2="55" y2="28" stroke="var(--text-3)" stroke-width="1.4"/>
      <path d="M75,55 C 175,200 270,245 390,252" fill="none" stroke="var(--accent)" stroke-width="2.6"/>
      <text x="120" y="80" fill="var(--accent)" font-size="12.5" font-weight="600">arbitrage de court terme</text>
      <text x="232" y="290" fill="var(--text-3)" font-size="11.5" text-anchor="middle">Taux de chômage →</text>
      <text x="20" y="150" fill="var(--text-3)" font-size="11.5" text-anchor="middle" transform="rotate(-90 20 150)">Taux d'inflation →</text>
    </svg>`,
    lecture: [
      "Relation décroissante : quand le chômage est FAIBLE (à gauche), l'inflation est FORTE (en haut) ; quand le chômage est fort, l'inflation est faible.",
      "Idée : un marché du travail tendu (peu de chômeurs) pousse les salaires, donc les prix, à la hausse.",
      "Elle suggère un « arbitrage » de court terme : on pourrait baisser le chômage en acceptant plus d'inflation."
    ],
    retenir: [
      "Vraie à court terme seulement. À long terme (Friedman, Phelps), la relation disparaît : la courbe devient verticale au chômage « naturel ».",
      "La stagflation des années 1970 (chômage ET inflation élevés) a invalidé la version simple.",
      "Sert à comprendre la tension entre l'objectif d'emploi et l'objectif de stabilité des prix (carré magique de Kaldor)."
    ]
  },

  /* ---------- 4. CIRCUIT ÉCONOMIQUE ---------- */
  {
    id: "circuit",
    titre: "Le circuit économique (flux)",
    chap: "Fonctionnement de l'économie",
    accent: "eco",
    svg: `<svg viewBox="0 0 440 280" role="img" aria-label="Circuit économique entre ménages et entreprises">
      <rect x="35" y="95" width="135" height="78" rx="12" fill="var(--accent)" opacity="0.12"/>
      <rect x="35" y="95" width="135" height="78" rx="12" fill="none" stroke="var(--accent)" stroke-width="1.6"/>
      <text x="102" y="140" fill="var(--text)" font-size="14" font-weight="700" text-anchor="middle">Ménages</text>
      <rect x="270" y="95" width="135" height="78" rx="12" fill="var(--eco)" opacity="0.12"/>
      <rect x="270" y="95" width="135" height="78" rx="12" fill="none" stroke="var(--eco)" stroke-width="1.6"/>
      <text x="337" y="140" fill="var(--text)" font-size="14" font-weight="700" text-anchor="middle">Entreprises</text>
      <defs><marker id="ar" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-2)"/></marker></defs>
      <line x1="172" y1="58" x2="268" y2="58" stroke="var(--text-2)" stroke-width="1.7" marker-end="url(#ar)"/>
      <text x="220" y="50" fill="var(--text-2)" font-size="11" text-anchor="middle">travail, capital</text>
      <line x1="268" y1="88" x2="172" y2="88" stroke="var(--text-2)" stroke-width="1.7" marker-end="url(#ar)"/>
      <text x="220" y="105" fill="var(--text-2)" font-size="11" text-anchor="middle">revenus (salaires, profits)</text>
      <line x1="268" y1="200" x2="172" y2="200" stroke="var(--eco)" stroke-width="1.7" marker-end="url(#ar)"/>
      <text x="220" y="192" fill="var(--text-2)" font-size="11" text-anchor="middle">biens &amp; services</text>
      <line x1="172" y1="230" x2="268" y2="230" stroke="var(--eco)" stroke-width="1.7" marker-end="url(#ar)"/>
      <text x="220" y="247" fill="var(--text-2)" font-size="11" text-anchor="middle">dépenses de consommation</text>
    </svg>`,
    lecture: [
      "Deux grands agents : les ménages et les entreprises. Entre eux circulent des flux réels (haut) et des flux monétaires (qui les paient).",
      "Marché du travail (en haut) : les ménages fournissent travail et capital ; les entreprises versent en retour des revenus (salaires, profits).",
      "Marché des biens & services (en bas) : les entreprises produisent les biens ; les ménages les paient par leurs dépenses de consommation.",
      "À chaque flux réel correspond un flux monétaire de sens inverse : l'économie « tourne » en boucle."
    ],
    retenir: [
      "Le revenu des uns est la dépense des autres : production = revenus = dépenses (les trois optiques du PIB).",
      "On peut enrichir le circuit avec l'État (impôts/prestations), les banques (épargne/crédit) et l'extérieur (importations/exportations).",
      "Une fuite (épargne, impôts, importations) sort du circuit ; une injection (investissement, dépense publique, exportations) y entre."
    ]
  },

  /* ---------- 5. EXTERNALITÉ NÉGATIVE ---------- */
  {
    id: "externalite",
    titre: "Externalité négative & surproduction",
    chap: "Action publique pour l'environnement",
    accent: "rc",
    svg: `<svg viewBox="0 0 440 300" role="img" aria-label="Coût marginal privé et social, externalité négative">
      <line x1="55" y1="265" x2="410" y2="265" stroke="var(--text-3)" stroke-width="1.4"/>
      <line x1="55" y1="265" x2="55" y2="28" stroke="var(--text-3)" stroke-width="1.4"/>
      <line x1="70" y1="80" x2="360" y2="250" stroke="var(--text-2)" stroke-width="2.1"/>
      <line x1="70" y1="250" x2="360" y2="90" stroke="var(--accent)" stroke-width="2.1"/>
      <line x1="70" y1="210" x2="320" y2="60" stroke="var(--warn)" stroke-width="2.1"/>
      <line x1="219" y1="167" x2="219" y2="265" stroke="var(--text-3)" stroke-width="1.2" stroke-dasharray="3 3"/>
      <line x1="180" y1="144" x2="180" y2="265" stroke="var(--text-3)" stroke-width="1.2" stroke-dasharray="3 3"/>
      <rect x="180" y="255" width="39" height="10" fill="var(--warn)" opacity="0.5"/>
      <circle cx="219" cy="167" r="3.2" fill="var(--accent)"/>
      <circle cx="180" cy="144" r="3.2" fill="var(--warn)"/>
      <text x="300" y="100" fill="var(--accent)" font-size="11.5" font-weight="600">Coût privé</text>
      <text x="250" y="60" fill="var(--warn)" font-size="11.5" font-weight="600">Coût social</text>
      <text x="318" y="250" fill="var(--text-2)" font-size="11.5" font-weight="600">Demande</text>
      <text x="180" y="285" fill="var(--warn)" font-size="11" text-anchor="middle">Q*</text>
      <text x="219" y="285" fill="var(--text-2)" font-size="11" text-anchor="middle">Qmarché</text>
      <text x="20" y="150" fill="var(--text-3)" font-size="11.5" text-anchor="middle" transform="rotate(-90 20 150)">Prix / coût</text>
    </svg>`,
    lecture: [
      "Le coût marginal PRIVÉ (ce que paie le producteur) est inférieur au coût marginal SOCIAL (qui ajoute le dommage subi par la collectivité, ex. pollution).",
      "Le marché s'équilibre où la demande croise le coût privé : la quantité produite est Qmarché.",
      "L'optimum pour la société serait Q*, plus faible, là où la demande croise le coût social.",
      "Comme Qmarché > Q*, le marché SUR-produit le bien polluant : c'est la défaillance liée à l'externalité négative."
    ],
    retenir: [
      "Externalité = effet sur un tiers non pris en compte par le marché (le pollueur ne paie pas le dommage).",
      "Solution de Pigou : une taxe (taxe carbone) qui « internalise » le coût externe → ramène la production vers Q*.",
      "Autres instruments : la norme/réglementation (interdiction, plafond) et le marché de quotas d'émission.",
      "Coase : sous certaines conditions (droits de propriété, faibles coûts de transaction), la négociation privée peut suffire."
    ]
  },

  /* ---------- 6. DÉVELOPPEMENT DURABLE ---------- */
  {
    id: "dev-durable",
    titre: "Les trois piliers du développement durable",
    chap: "Action publique pour l'environnement",
    accent: "rc",
    svg: `<svg viewBox="0 0 440 300" role="img" aria-label="Trois cercles du développement durable">
      <circle cx="170" cy="125" r="82" fill="var(--eco)" opacity="0.16" stroke="var(--eco)" stroke-width="1.4"/>
      <circle cx="270" cy="125" r="82" fill="var(--socio)" opacity="0.16" stroke="var(--socio)" stroke-width="1.4"/>
      <circle cx="220" cy="205" r="82" fill="var(--rc)" opacity="0.16" stroke="var(--rc)" stroke-width="1.4"/>
      <text x="140" y="100" fill="var(--text)" font-size="13" font-weight="700" text-anchor="middle">Économique</text>
      <text x="300" y="100" fill="var(--text)" font-size="13" font-weight="700" text-anchor="middle">Social</text>
      <text x="220" y="245" fill="var(--text)" font-size="13" font-weight="700" text-anchor="middle">Environ-<tspan x="220" dy="15">nemental</tspan></text>
      <text x="220" y="112" fill="var(--text-2)" font-size="10.5" text-anchor="middle">Équitable</text>
      <text x="168" y="170" fill="var(--text-2)" font-size="10.5" text-anchor="middle">Viable</text>
      <text x="272" y="170" fill="var(--text-2)" font-size="10.5" text-anchor="middle">Vivable</text>
      <text x="220" y="150" fill="var(--text)" font-size="11.5" font-weight="700" text-anchor="middle">Durable</text>
    </svg>`,
    lecture: [
      "Le développement durable est à l'intersection de trois exigences : économique, sociale et environnementale.",
      "Croisement économique × social = équitable ; économique × environnemental = viable ; social × environnemental = vivable.",
      "Au centre, là où les trois se rencontrent : le développement réellement durable.",
      "Définition Brundtland (1987) : « répondre aux besoins du présent sans compromettre la capacité des générations futures à satisfaire les leurs »."
    ],
    retenir: [
      "Un projet n'est durable que s'il satisfait les TROIS piliers à la fois — pas seulement la croissance.",
      "Soutenabilité faible : capital naturel substituable par du capital technique. Soutenabilité forte : certains capitaux naturels sont irremplaçables.",
      "Décliné en politiques publiques : COP climat, lois de transition énergétique, ODD de l'ONU."
    ]
  },

  /* ---------- 7. TABLE DE MOBILITÉ ---------- */
  {
    id: "table-mobilite",
    titre: "Lire une table de mobilité (destinée & recrutement)",
    chap: "Mobilité sociale",
    accent: "socio",
    svg: `<div class="mob-wrap">
      <div class="mob-top">↓ lire une <b>colonne</b> = <b>recrutement</b> (d'où viennent-ils ?)</div>
      <table class="mob-table">
        <thead><tr><th class="mob-corner">Père&nbsp;↓ / Fils&nbsp;→</th><th>Indép.</th><th>Cadre</th><th>Interm.<br>Employé</th><th>Ouvrier</th><th class="mob-tot">Total</th></tr></thead>
        <tbody>
          <tr><th>Indépendant</th><td class="mob-diag">25</td><td>20</td><td>30</td><td>25</td><td class="mob-tot">100</td></tr>
          <tr><th>Cadre</th><td>10</td><td class="mob-diag">52</td><td>28</td><td>10</td><td class="mob-tot">100</td></tr>
          <tr><th>Interm./Empl.</th><td>8</td><td>30</td><td class="mob-diag">40</td><td>22</td><td class="mob-tot">100</td></tr>
          <tr class="mob-rowhl"><th>Ouvrier</th><td>9</td><td>12</td><td>32</td><td class="mob-diag mob-cellhl">47</td><td class="mob-tot">100</td></tr>
        </tbody>
      </table>
      <div class="mob-side">→ lire une <b>ligne</b> = <b>destinée</b> (que deviennent les fils ?)</div>
      <div class="mob-legend"><span class="mob-key mob-keydiag"></span> diagonale = immobilité (reproduction) &nbsp;·&nbsp; <span class="mob-key mob-keyhl"></span> exemple lu ci-dessous &nbsp;·&nbsp; table de <i>destinée</i> (chaque ligne = 100&nbsp;%, chiffres illustratifs)</div>
    </div>`,
    lecture: [
      "Une table de mobilité croise l'origine sociale (la PCS du père, en lignes) et la position atteinte (la PCS du fils, en colonnes).",
      "Lire une LIGNE = la table de destinée (« l'avenir ») : sur 100 fils d'ouvriers, 47 sont ouvriers, 32 professions intermédiaires/employés, 12 cadres, 9 indépendants. On part de l'origine et on suit ce que deviennent les enfants.",
      "Lire une COLONNE = la table de recrutement : on part d'une position d'arrivée (ex. les cadres) et on remonte aux origines (« d'où viennent-ils ? »).",
      "La diagonale (père et fils dans la même catégorie) mesure l'immobilité, c'est-à-dire la reproduction sociale ; tout ce qui est hors diagonale est de la mobilité."
    ],
    retenir: [
      "Destinée (lignes = 100 %) et recrutement (colonnes = 100 %) sont DEUX tables construites à partir des mêmes effectifs bruts, mais on ne les normalise pas dans le même sens.",
      "Forte reproduction aux extrémités : fils de cadres souvent cadres (52), fils d'ouvriers souvent ouvriers (47). L'origine pèse lourd.",
      "Mobilité observée = mobilité structurelle (forcée par l'évolution des emplois : moins d'agriculteurs/ouvriers, plus de cadres) + fluidité (mobilité nette, vraie égalité des chances).",
      "Limites : tables longtemps centrées sur les hommes (père→fils), PCS agrégées, elles décrivent la mobilité mais ne mesurent pas directement la fluidité."
    ]
  }

];
