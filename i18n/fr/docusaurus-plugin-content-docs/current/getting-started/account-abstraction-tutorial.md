---
sidebar_position: 3
---

# Tutoriel Wallet Account Abstraction

Les wallets Account Abstraction (AA) représentent la prochaine génération de technologie de
portefeuille crypto, rendant DeFi plus accessible et convivial. Ce guide vous accompagne dans la
configuration et l'utilisation de votre wallet AA avec Zap Pilot.

## Qu'est-ce que l'Account Abstraction ?

### Wallets Traditionnels vs Wallets AA

#### **Wallets Traditionnels**

- Nécessitent de l'ETH pour le gas à chaque transaction
- Logique de transaction limitée
- Approbation manuelle des transactions pour chaque étape
- Opérations complexes multi-étapes

#### **Wallets Account Abstraction**

- **Transactions sans gas** - payer les frais avec n'importe quel token
- **Opérations par lots** - plusieurs actions en une transaction
- **Logique de smart contract** - comportement de wallet programmable
- **Récupération sociale** - récupérer l'accès sans phrases de récupération

### Avantages Clés pour DeFi

🚀 **Expérience Simplifiée**

- Opérations complexes en un clic
- Pas besoin de détenir des tokens gas spécifiques
- Regroupement automatique des transactions

🔒 **Sécurité Renforcée**

- Support multi-signatures
- Limites de dépenses et contrôles
- Clés de session pour les stratégies automatisées

💰 **Efficacité des Coûts**

- Regrouper plusieurs opérations pour économiser le gas
- Payer les frais avec des stablecoins au lieu d'ETH
- Transactions sponsorisées pour les petits montants

## Configuration de votre Wallet AA

### Option 1 : Connexion Sociale (Recommandé pour les Débutants)

#### **Utilisation de Gmail**

1. **Visiter l'App Zap Pilot**
   - Allez sur [app.zap-pilot.com](https://app.zap-pilot.com)
   - Cliquez sur "Connect Wallet"

2. **Sélectionner la Connexion Sociale**
   - Choisissez "Continue with Gmail"
   - Autorisez avec votre compte Google

3. **Création du Wallet**
   - Wallet AA créé automatiquement
   - Pas de phrase de récupération nécessaire (sécurisé par Google)
   - Options de sauvegarde fournies

4. **Vérification**
   - Confirmation par email envoyée
   - Vérifiez votre compte pour une sécurité renforcée

#### **Utilisation d'Apple ID ou Facebook**

Processus similaire à Gmail :

- Sélectionnez votre fournisseur social préféré
- Autorisez l'accès au compte
- Wallet créé et sécurisé par le fournisseur

### Option 2 : Intégration de Wallet Existant

#### **Intégration MetaMask**

1. **Connecter MetaMask**
   - Assurez-vous que MetaMask est installé
   - Connectez-vous à Zap Pilot comme d'habitude

2. **Mise à niveau vers AA**
   - Cliquez sur "Upgrade to Smart Wallet"
   - Déployez le contrat de wallet AA
   - Liez à votre MetaMask existant

3. **Avantages**
   - Gardez vos adresses existantes
   - Fonctionnalité améliorée
   - Compatibilité descendante

#### **Support d'Autres Wallets**

- **WalletConnect** : Connecte plus de 200 wallets mobiles
- **Coinbase Wallet** : Intégration directe
- **Hardware Wallets** : Via le pont MetaMask

## Fonctionnalités du Wallet AA

### Transactions Sans Gas

#### **Comment Ça Fonctionne**

Au lieu de payer le gas avec ETH :

```
Traditionnel : Votre ETH → Frais de Gas → Transaction
Wallet AA : Votre USDC → Sponsorisé → Transaction
```

#### **Tokens de Frais Supportés**

- **USDC** (recommandé)
- **USDT**
- **DAI**
- **ETH** (si vous préférez)

#### **Sponsoring de Frais**

Pour les transactions qualifiées :

- **Nouveaux utilisateurs** : 3 premières transactions sponsorisées
- **Petits montants** : Transactions sous $100
- **Dépôts de stratégie** : Entrées initiales de vault

### Opérations par Lots

#### **Une Transaction, Plusieurs Actions**

Investissement DeFi traditionnel :

```
1. Approuver USDC
2. Échanger contre des tokens cibles
3. Ajouter de la liquidité
4. Staker les tokens LP
Total : 4 transactions, 4 frais de gas
```

Avec wallet AA :

```
1. Lot : [approuver, échanger, ajouter_liquidité, staker]
Total : 1 transaction, 1 frais de gas
```

#### **Intégration Zap Pilot**

Quand vous "Zap In" dans une stratégie :

- Approbation, swaps, dépôts groupés
- Opérations cross-chain coordonnées
- Utilisation optimale du gas sur toutes les étapes

### Clés de Session

#### **Gestion Automatisée de Stratégies**

Configurez des clés de session pour :

- **Rééquilibrage automatique** dans des paramètres définis
- **Récolte de rendement** et capitalisation
- Actions de **gestion des risques**
- **Sorties d'urgence** basées sur des conditions

#### **Contrôles de Sécurité**

Les clés de session incluent :

- **Limites de dépenses** : Montant maximum par transaction
- **Limites de temps** : Les clés expirent automatiquement
- **Restrictions d'actions** : Seules les fonctions spécifiques autorisées
- **Révocation** : Annuler les permissions à tout moment

## Sécurité du Wallet

### Support Multi-Signatures

#### **Gestion d'Équipe**

- **Signatures 2-sur-3** pour les comptes d'équipe
- **Permissions basées sur les rôles** pour différentes fonctions
- **Seuils de dépenses** nécessitant plusieurs approbations

#### **Sécurité Personnelle**

- **Configuration de gardiens** : Contacts de confiance pour la récupération
- **Autorisation d'appareils** : Limiter l'accès aux appareils connus
- **Délais de transaction** : Verrous temporels pour les gros montants

### Récupération Sociale

#### **Fini les Phrases de Récupération Perdues**

Récupération traditionnelle :

- Perdre la phrase de récupération = tout perdre
- Exigences de sauvegarde complexes
- Point unique de défaillance

Récupération de wallet AA :

- **Réseau de gardiens** : Amis/famille peuvent aider à récupérer
- **Vérification sociale** : Plusieurs méthodes de confirmation
- **Accès graduel** : Récupérer étape par étape

#### **Processus de Récupération**

1. **Initier la Récupération**
   - Accéder à "Recover Wallet" depuis n'importe quel appareil
   - Vérifier l'identité via le fournisseur social

2. **Confirmation des Gardiens**
   - Les gardiens présélectionnés reçoivent la demande de récupération
   - Approbation majoritaire requise pour continuer

3. **Configuration du Nouvel Appareil**
   - Installer le wallet sur le nouvel appareil
   - Compléter la vérification de récupération
   - Accès complet restauré

## Fonctionnalités Avancées

### Contrôles de Dépenses

#### **Limites Quotidiennes**

- Définir des montants maximum de dépenses quotidiennes
- Réinitialisation automatique toutes les 24 heures
- Options de contournement pour les grandes transactions vérifiées

#### **Listes de Protocoles Autorisés**

- Restreindre les interactions aux protocoles approuvés
- Liste blanche des plateformes DeFi spécifiques
- Bloquer les interactions avec les contrats signalés

#### **Contrôles Basés sur le Temps**

- **Heures de bureau** : Limiter les transactions à des heures spécifiques
- **Périodes de refroidissement** : Délais entre les grandes transactions
- **Gel d'urgence** : Arrêter toute activité si nécessaire

### Automatisation de Portfolio

#### **Automatisation de Rééquilibrage**

```
IF portfolio_drift > 5% AND gas_cost < rebalancing_benefit
THEN execute_rebalancing()
```

#### **Optimisation de Rendement**

```
IF new_yield_opportunity > current_yield + 2%
THEN propose_migration()
```

#### **Gestion des Risques**

```
IF protocol_risk_score < threshold
THEN emergency_exit()
```

## Dépannage

### Problèmes Courants

#### **"Transaction Failed"**

- **Cause** : Solde insuffisant pour les frais
- **Solution** : Assurez-vous que le wallet a des tokens de frais (USDC/ETH)
- **Prévention** : Activer la gestion automatique des frais

#### **"Session Key Expired"**

- **Cause** : Permissions automatisées expirées
- **Solution** : Re-autoriser les clés de session
- **Prévention** : Définir des périodes d'expiration plus longues

#### **"Guardian Not Responding"**

- **Cause** : Gardien de récupération indisponible
- **Solution** : Contacter d'autres gardiens ou utiliser la méthode de sauvegarde
- **Prévention** : Sélectionner plusieurs gardiens fiables

### Obtenir de l'Aide

#### **Support Wallet**

- **Documentation ThirdWeb** : [docs.thirdweb.com](https://docs.thirdweb.com)
- **Support Zap Pilot** : Chat en direct pour les problèmes de wallet
- **Forum Communautaire** : Assistance utilisateur à utilisateur

#### **Procédures d'Urgence**

- **Gel immédiat** : Arrêter toutes les fonctions automatisées
- **Accès direct au protocole** : Retirer les fonds directement
- **Assistance de récupération** : Support 24/7 pour la récupération de compte

---

## Prochaines Étapes

Maintenant que votre wallet AA est configuré :

1. **Financez votre wallet** avec des stablecoins ou crypto
2. **Choisissez votre stratégie** basée sur la tolérance au risque
3. **Déployez votre premier investissement** en un clic
4. **Configurez l'automatisation** pour une gestion optimale

Votre wallet AA rend l'investissement DeFi aussi simple que la finance traditionnelle, mais avec
tous les avantages de la décentralisation et de l'auto-custody.

👉 **[Financer votre Wallet →](../getting-started)** 👉 **[Choisir une Stratégie →](../strategies)**
