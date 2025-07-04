---
sidebar_position: 4
---

# Mécaniques du Protocole

Zap Pilot fonctionne comme un système sophistiqué d'allocation d'actifs algorithmique non-custodial.
Voici comment nos mécaniques de protocole fonctionnent sous le capot.

## Architecture du Système

### Conception Non-Custodiale

Zap Pilot est construit autour d'un principe fondamental : **vous contrôlez toujours vos fonds**.

- **Pas de custody** : Nous ne détenons jamais vos actifs
- **Interaction directe avec les protocoles** : Votre portefeuille interagit directement avec les
  protocoles DeFi
- **Exécution transparente** : Toutes les opérations sont on-chain et auditables
- **Sorties d'urgence** : Vous pouvez retirer directement des protocoles si nécessaire

## Logique des Vaults

### Structure de Vault Thématique

Chaque vault représente une stratégie d'investissement spécifique avec des protocoles DeFi
sélectionnés :

#### **Composants du Vault**

- **Définition de stratégie** : Thèse d'investissement claire et allocation cible
- **Liste blanche de protocoles** : Protocoles vérifiés et audités respectant nos standards de
  sécurité
- **Paramètres de risque** : Limites d'allocation maximales par protocole
- **Règles de rééquilibrage** : Conditions qui déclenchent des ajustements de portefeuille

#### **Système de Pondération Dynamique**

Les protocoles au sein de chaque vault sont pondérés en fonction de :

```
Poids du Protocole = Poids de Base × Multiplicateur de Performance × Ajustement de Risque
```

**Facteurs de Poids de Base :**

- Total Value Locked (TVL) - minimum 300k$ pour les stratégies stablecoins
- Historique d'audit et score de sécurité
- Stabilité historique du rendement
- Profondeur de liquidité

**Multiplicateur de Performance :**

- Performance récente des rendements vs benchmarks
- Cohérence des rendements dans le temps
- Santé de la gouvernance du protocole

**Ajustement de Risque :**

- Évaluation du risque des contrats intelligents
- Concentration des tokens de gouvernance
- Âge du protocole et période de test en conditions réelles

### Flux d'Exécution de Stratégie

1. **Dépôt Utilisateur** → Le portefeuille Account Abstraction reçoit les fonds
2. **Routage du Vault** → Les fonds sont dirigés vers le vault thématique approprié
3. **Distribution des Protocoles** → Les actifs sont alloués aux protocoles sélectionnés
4. **Surveillance Continue** → Suivi en temps réel des performances et des risques
5. **Déclencheurs de Rééquilibrage** → Suggestions trimestrielles ou alertes basées sur des seuils

## Stratégie d'Allocation Kelly

### Fondement Mathématique

Nous utilisons le **Kelly Criterion** pour déterminer les tailles de position optimales, maximisant
la croissance géométrique à long terme tout en gérant le risque.

#### **Formule de Kelly**

```
Poids Optimal = (Rendement Attendu - Taux Sans Risque) / Variance
```

#### **Allocation Kelly Multi-Actifs**

Pour les portefeuilles avec plusieurs actifs :

```
W* = Σ⁻¹ × (μ - rf × 1)
```

Où :

- **W\*** = Vecteur de poids optimal
- **Σ⁻¹** = Matrice de covariance inverse des rendements
- **μ** = Vecteur de rendement attendu
- **rf** = Taux sans risque
- **1** = Vecteur d'uns

### Implémentation Pratique

#### **Kelly Ajusté au Risque**

Nous modifions la formule classique de Kelly pour tenir compte de :

- **Limites de drawdown maximum** (15% pour conservateur, 30% pour agressif)
- **Contraintes de corrélation** (max 60% dans des actifs corrélés)
- **Exigences de liquidité** (maintenir 10% en positions liquides)

#### **Déclencheurs de Rééquilibrage Dynamiques**

Le rééquilibrage se produit lorsque :

- **Dérive d'allocation** > 5% des poids cibles
- **Métriques de risque** dépassent les seuils prédéfinis
- **Nouvelles opportunités** avec des rendements ajustés au risque significativement meilleurs
  émergent
- **Révisions trimestrielles** indépendamment de la dérive (configurable par l'utilisateur)

## Intégration Account Abstraction

### Architecture de Portefeuille

#### **Fonctionnalités du Smart Wallet**

- **Transactions sans gas** via des méta-transactions
- **Opérations par lots** pour l'efficacité du gas
- **Clés de session** pour les stratégies automatisées
- **Support multi-signature** pour les utilisateurs institutionnels

#### **Avantages de l'Expérience Utilisateur**

**Pour les Débutants :**

- Pas besoin de détenir de l'ETH pour le gas sur plusieurs chaînes
- Opérations complexes en un clic
- Options de récupération sociale

**Pour les Utilisateurs Avancés :**

- Logique de transaction programmable
- Permissions de rééquilibrage automatisé
- Contrôles de dépense personnalisés

### Regroupement de Transactions

Plusieurs opérations combinées en une seule transaction :

```
Transaction par Lot = [
  approve(token, amount),
  deposit(vault, amount),
  distribute(protocols[], weights[]),
  track(performance_metrics)
]
```

## Cadre de Gestion des Risques

### Sauvegardes au Niveau du Protocole

#### **Surveillance Automatisée des Risques**

- **Seuils de TVL** : Exigences minimales de liquidité
- **Détection d'anomalies de rendement** : Signaler les rendements inhabituellement élevés/bas
- **Évaluation du risque de gouvernance** : Surveiller les changements de protocole
- **Surveillance des contrats intelligents** : Suivre les événements de mise à niveau

#### **Contraintes de Diversification**

- **Allocation maximale d'un protocole unique** : 30% pour conservateur, 50% pour agressif
- **Diversification par type d'actif** : Pas plus de 70% dans une seule classe d'actifs
- **Diversification de chaîne** : Répartir le risque sur plusieurs réseaux

### Contrôles au Niveau Utilisateur

#### **Paramètres de Tolérance au Risque**

- **Conservateur** : Volatilité plus faible, protocoles stables uniquement
- **Modéré** : Risque/récompense équilibré, protocoles établis
- **Agressif** : Tolérance au risque plus élevée, incluant les protocoles plus récents

#### **Procédures d'Urgence**

- **Retrait immédiat** : Interaction directe avec les protocoles
- **Mode d'aversion au risque** : Mouvement automatique vers des actifs plus sûrs pendant les crises
- **Disjoncteurs** : Arrêter les actions automatisées pendant une volatilité extrême

## Mécaniques de Rééquilibrage

### Conditions de Déclenchement

#### **Rééquilibrage Basé sur les Seuils**

- La dérive d'allocation dépasse l'objectif de 5%
- Les métriques de risque franchissent les limites prédéfinies
- Les opportunités de rendement avec >2% d'avantage émergent

#### **Rééquilibrage Basé sur le Temps**

- **Hebdomadaire** : Pour les stratégies actives (optionnel, coûts plus élevés)
- **Mensuel** : Fréquence standard (recommandé)
- **Trimestriel** : Approche à faible coût via des suggestions par email

### Processus d'Exécution

1. **Phase d'Analyse**
   - Calculer les allocations actuelles vs cibles
   - Évaluer les coûts de gas vs les bénéfices du rééquilibrage
   - Identifier les chemins d'exécution optimaux

2. **Approbation de l'Utilisateur**
   - Présenter la proposition de rééquilibrage
   - Montrer les coûts estimés et les bénéfices
   - Permettre la révision manuelle et la modification

3. **Phase d'Exécution**
   - Transactions par lots pour l'efficacité du gas
   - Exécuter sur plusieurs chaînes si nécessaire
   - Mettre à jour le suivi et l'analytique

## Attribution de Performance

### Analytique en Temps Réel

Suivre les contributions de performance de :

- **Sélection de protocoles** : Quels protocoles ont généré les rendements
- **Timing d'allocation** : Impact des décisions de rééquilibrage
- **Optimisation de chaîne** : Bénéfices des stratégies cross-chain
- **Gestion des coûts** : Efficacité du gas et optimisation des frais

### Comparaison de Benchmarks

Comparer la performance de la stratégie contre :

- **Indices de marché** : Bitcoin, Ethereum, indice DeFi
- **Finance traditionnelle** : S&P 500, indices obligataires
- **Benchmarks DeFi** : Rendements spécifiques aux protocoles
- **Métriques ajustées au risque** : Ratio de Sharpe, Ratio de Sortino

---

Comprendre ces mécaniques vous aide à prendre des décisions éclairées sur votre stratégie DeFi.
Notre système gère la complexité tout en vous gardant au contrôle.

👉 **[Explorer les Stratégies →](../strategies)** 👉
**[Voir les Détails de Sécurité →](../security)**
