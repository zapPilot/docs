# Tokenomics de Zap Pilot (v2 – 2025)

## Aperçu

Zap Pilot est un pilote automatique de portefeuille en chaîne. Pour les utilisateurs de DeFi très
occupés, Zap Pilot réduit le rééquilibrage de portefeuille de 30 minutes à 30 secondes - en
déplaçant vos cryptomonnaies d'une chaîne à l'autre dans des pools à plus haut rendement en un seul
clic, tandis que chaque jeton reste dans votre propre portefeuille.

Le jeton $ZAP utilise une économie de jetons basée sur le rachat : pas de jalonnement, pas de
récompenses passives, pas d'émissions vides - juste une valeur alignée sur l'utilisation réelle du
protocole.

## Détails du jeton

| Champ                       | Valeur                                 |
| --------------------------- | -------------------------------------- |
| Nom                         | Jeton Zap Pilot                        |
| Symbole                     | $ZAP (provisoire, peut être rebaptisé) |
| Plafond d'approvisionnement | 100 000 000 (fixe)                     |
| Norme                       | LayerZero OFT (Omnichain)              |
| Émission                    | Via ThirdWeb + LayerZero               |
| Chaîne principale           | Base (avec Optimism, Polygon, etc.)    |

## Utilité et philosophie de conception

Pas de jalonnement, pas de rendement contrôlé par le protocole. Au lieu de cela : chaque frais perçu
→ utilisé pour acheter des $ZAP sur le marché → soutien des prix via une utilisation réelle.

| Utilité                                                                                | Description                                                                            | Soutien des prix |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------- |
| Les frais de protocole sont utilisés pour acheter des $ZAP via Uniswap ou d'autres DEX |                                                                                        | ✅               |
| Incitations des utilisateurs                                                           | Distribuées via des parachutages rétroactifs basés sur le score Zap                    |                  |
| Gouvernance (facultatif)                                                               | Le $ZAP peut être utilisé pour les futurs votes de la DAO ou les droits de proposition |                  |

## Mécanisme de rachat

| Composant                                                         | Implémentation                                                                             | Source de fonds |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------- |
| Frais de zap-in au niveau du protocole (ETH / USDC)               |                                                                                            |                 |
| Rachats automatisés ou manuels sur les DEX (par exemple, Uniswap) |                                                                                            |                 |
| Traitement des jetons                                             | Brûlés ou redirigés vers la trésorerie de la DAO                                           |                 |
| Transparence                                                      | Rapports publics hebdomadaires sur le volume de rachat (interface utilisateur facultative) |                 |

## Allocation de jetons

| Catégorie                              | % d'allocation | Remarques                                                                         |
| -------------------------------------- | -------------- | --------------------------------------------------------------------------------- |
| Parachutage d'utilisateurs (score Zap) | 40 %           | Basé sur l'utilisation, les références, l'engagement social                       |
| Équipe                                 | 20 %           | Falaise d'un an + acquisition linéaire de deux ans                                |
| Partenaires et conseillers             | 10 %           | Comprend les incubateurs (1–2 %), les rampes de lancement (1–2 %), le pool de KOL |
| Trésorerie de la DAO                   | 20 %           | Rachats, campagnes d'incitation, gouvernance                                      |
| Amorçage de la liquidité               | 10 %           | Amorçage de LP Uniswap/Aerodrome                                                  |

Les jetons des partenaires/conseillers sont acquis en fonction du type de contribution, en utilisant
généralement une falaise de 6 mois + un déverrouillage linéaire de 12 mois, mais flexible selon les
cas.

## Parachutage basé sur le score Zap

| Métrique                 | Poids | Exemple |
| ------------------------ | ----- | ------- |
| Volume de zap-in         | 40 %  |         |
| Fréquence de zap-in      | 40 %  |         |
| Références               | 10 %  |         |
| Actions de la communauté | 10 %  |         |

Le score Zap est hors chaîne, suivi via le backend, Notion ou Sheets. La distribution du parachutage
est échelonnée et partiellement verrouillée pour empêcher le dumping instantané.

## Aperçu de la pile technologique

| Fonction                   | Outil/Fournisseur                            | Remarques |
| -------------------------- | -------------------------------------------- | --------- |
| Infrastructure d'intention | Thirdweb/ZeroDev (EIP-7702 + Paymaster)      |           |
| Infrastructure de jetons   | ThirdWeb + LayerZero (OFT)                   |           |
| Script de rachat           | Node.js + SDK Uniswap ou relais personnalisé |           |
| Suivi du score             | Notion / Airtable / Firebase                 |           |
| Outils de parachutage      | SDK ThirdWeb / Galxe / Airdrop.so            |           |
| LP et rampes de lancement  | Uniswap / Aerodrome / IDO en partenariat     |           |

## Acquisition par la rampe de lancement et les partenaires

Les jetons alloués aux rampes de lancement ou aux conseillers suivent un calendrier d'acquisition
linéaire de 6 mois de falaise + 12 mois. Par exemple, si une rampe de lancement reçoit 2 000 000 de
$ZAP :

- Mois 1 à 6 : 0 % débloqué
- À partir du 7e mois : débloque 1/12e par mois (≈166 666 jetons par mois)
- Entièrement débloqué après le 18e mois

Les calendriers d'acquisition sont flexibles et négociés en fonction de la valeur réelle apportée
(par exemple, effort de marketing, soutien à la liquidité, travail de conseil).

## Pourquoi ce modèle fonctionne

| Fonctionnalité                           | Avantage                                                                                 |
| ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| Pas de jalonnement                       | Pas de risque de contrat, pas de dilution de rendement passif                            |
| Basé sur le rachat                       | Le prix est soutenu par une utilisation et des revenus réels                             |
| Parachutage équitable                    | Encourage la participation réelle, pas la spéculation                                    |
| Conception OFT                           | Mouvement natif inter-chaînes via LayerZero                                              |
| Infrastructure de portefeuille Smart EOA | Expérience utilisateur transparente pour les utilisateurs finaux, parrainage de gaz prêt |
