/* =====================================================================
   SES — « Cours résumé » par chapitre (fiche express).
   Ajouté à window.SES_CONTENT[id].resume (affiché en tête de l'onglet
   « L'essentiel »). Synthèse ultra-condensée : définitions, mécanismes,
   auteurs/théories clés, débat. À recouper avec le cours du prof.
   ===================================================================== */
(function () {
  var C = window.SES_CONTENT; if (!C) return;
  function set(id, arr){ if (C[id]) C[id].resume = arr; }

  set("eco-croissance", [
    "Croissance = hausse soutenue du PIB en volume sur longue période. 2 sources : accumulation des facteurs (travail, capital) + hausse de la PGF.",
    "PGF (« résidu de Solow ») = efficacité de la combinaison des facteurs, tirée surtout par le progrès technique.",
    "Progrès technique ENDOGÈNE (Romer, Aghion) : produit par l'économie (R&D, innovation, capital humain), pas donné de l'extérieur.",
    "Institutions clés : droits de propriété → incitent à investir/innover. Schumpeter : destruction créatrice.",
    "Limites : le PT peut creuser les inégalités ; la croissance soutenable bute sur les limites écologiques (l'innovation peut les reculer)."
  ]);

  set("eco-commerce", [
    "Fondements : avantages comparatifs (Ricardo) + dotations factorielles (théorie HOS) → spécialisation internationale.",
    "Entre pays comparables : commerce intra-branche (différenciation et qualité des produits).",
    "Compétitivité (capacité à exporter) : prix (coûts) et hors-prix (qualité, innovation).",
    "DIPP : les firmes multinationales fragmentent la chaîne de valeur entre pays.",
    "Effets : gains moyens (↓ prix), ↓ inégalités entre pays MAIS ↑ inégalités internes → débat libre-échange / protectionnisme."
  ]);

  set("eco-chomage", [
    "Chômage (BIT) : sans emploi, disponible, en recherche active. Taux de chômage = chômeurs / population active.",
    "Chômage structurel : appariement (frictions, qualifications), institutions (salaire minimum, protection), salaire d'efficience.",
    "Chômage conjoncturel : insuffisance de la demande globale.",
    "Politiques : soutien de la demande (conjoncturel), allègement du coût du travail, formation, flexibilisation du marché du travail."
  ]);

  set("eco-crises", [
    "Crises financières (1929, 2008) : krach boursier, faillites en chaîne, chute du PIB, hausse du chômage.",
    "Bulle spéculative : écart auto-entretenu prix / valeur fondamentale (comportements mimétiques, prophéties auto-réalisatrices), puis éclatement.",
    "Transmission au réel : effet de richesse négatif, baisse du prix du collatéral (ventes forcées), contraction du crédit.",
    "Régulation : supervision par la banque centrale, ratio de solvabilité → réduire l'aléa moral des banques."
  ]);

  set("eco-europe", [
    "Intégration : marché unique (libre circulation : biens, services, capitaux, personnes) + zone euro (monnaie unique).",
    "Politique monétaire : UNIQUE et indépendante (BCE). Politique budgétaire : NATIONALE mais contrainte par les traités.",
    "Politique de la concurrence : lutte contre ententes, abus de position dominante, contrôle des concentrations et aides d'État.",
    "Difficultés : chocs asymétriques, défaut de coordination des politiques budgétaires."
  ]);

  set("socio-structure", [
    "Espace social hiérarchisé par : PCS, revenu, diplôme, âge, sexe, lieu de résidence, composition du ménage.",
    "Évolutions depuis 1950 : salarisation, tertiarisation, élévation des qualifications, féminisation des emplois.",
    "Théories des classes : Marx (rapports de production ; classe « en soi » / « pour soi ») vs Weber (multidimensionnel : classes, statut, parti).",
    "Débats : moyennisation vs maintien des classes ; individualisation ; articulation avec le genre."
  ]);

  set("socio-ecole", [
    "École : transmet des savoirs et vise l'égalité des chances.",
    "Massification (hausse générale des effectifs) ≠ démocratisation (réduction des inégalités selon l'origine sociale).",
    "Inégalités de réussite : capital culturel (Bourdieu), investissements et stratégies des familles, socialisation selon le genre.",
    "Indicateurs : taux de scolarisation, taux d'accès au diplôme / à l'enseignement supérieur."
  ]);

  set("socio-mobilite", [
    "Mobilité intergénérationnelle : changement de position entre parents et enfants. Mesurée par les tables de mobilité (destinée / recrutement).",
    "Mobilité structurelle (due à l'évolution des emplois) ≠ fluidité sociale (mobilité « pure », égalité des chances relative).",
    "Une société plus mobile n'est pas forcément plus fluide.",
    "Situations lisibles : mobilité ascendante, reproduction sociale, déclassement (spécificités hommes / femmes)."
  ]);

  set("socio-travail", [
    "Distinguer travail / activité / emploi / statut (salarié, non-salarié) ; frontières emploi-chômage-inactivité brouillées.",
    "Qualité de l'emploi : conditions de travail, salaire, sécurité, carrière, formation, variété des tâches.",
    "Taylorisme (OST : division horizontale et verticale) vs post-taylorisme (flexibilité, management participatif).",
    "Le numérique brouille les frontières (télétravail) et polarise les emplois. Le travail intègre (revenu, statut, liens) ; la précarité affaiblit ce pouvoir."
  ]);

  set("socio-engagement", [
    "Engagement politique : vote, militantisme, engagement associatif, consommation engagée.",
    "Paradoxe de l'action collective (Olson) : l'individu rationnel a intérêt à ne pas s'engager (passager clandestin).",
    "Résolu par : incitations sélectives, rétributions symboliques, structure des opportunités politiques.",
    "Variables : CSP, diplôme, âge / génération, sexe. Répertoires d'action (Tilly) et acteurs (partis, syndicats, associations) en transformation."
  ]);

  set("rc-justice", [
    "Inégalités multiformes et cumulatives. Mesure : courbe de Lorenz, coefficient de Gini (0 = égalité, 1 = inégalité max), D9/D1, top 1%.",
    "3 formes d'égalité : des droits, des chances, des situations.",
    "Conceptions de la justice sociale : utilitarisme, libertarisme, égalitarisme libéral (Rawls), égalitarisme strict.",
    "Action publique (fiscalité, protection sociale, services collectifs) : débats efficacité / légitimité (consentement à l'impôt) / effets pervers (désincitations)."
  ]);

  set("rc-environnement", [
    "Question environnementale = problème public construit par des acteurs (pouvoirs publics, ONG, entreprises, experts) ; coopération ET conflit ; mise à l'agenda.",
    "Action publique à plusieurs échelles articulées : locale, nationale, européenne, mondiale.",
    "Instruments (ex. climat) : réglementation, marché de quotas d'émission, taxation, subvention à l'innovation verte → avantages et limites.",
    "Bien commun : les stratégies de passager clandestin et les inégalités de développement freinent les accords internationaux."
  ]);

})();
