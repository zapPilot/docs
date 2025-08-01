# Incidents de sécurité

Cette page documente les incidents de sécurité passés et les contrats dépréciés.

## Audits V1 sur Arbitrum (Déprécié)

En raison d'une mise à niveau du routeur par GMX, notre contrat de portefeuille a été affecté. Nous
avons remboursé tous nos utilisateurs le 17 novembre 2024.

### Transactions de remboursement

- [0x316c4baf20c54a3c520ed33a91a692c575efd9051d6213c43ccc8f69a97b6056](https://arbiscan.io/tx/0x316c4baf20c54a3c520ed33a91a692c575efd9051d6213c43ccc8f69a97b6056)
- [0x0c1e06f16eba9e38076b91264e3410fa68cc5815f34006b4be311ee3de23dd13](https://arbiscan.io/tx/0x0c1e06f16eba9e38076b91264e3410fa68cc5815f34006b4be311ee3de23dd13)
- [0x0d4fd4ac737b5eead65335f8f1c53ac75c781bc83cd5803043b059d101730df3](https://arbiscan.io/tx/0x0d4fd4ac737b5eead65335f8f1c53ac75c781bc83cd5803043b059d101730df3)
- [0xc86638fb98b44caf419ff80aae5995190c3c6996c60908f8c7a65fadf2aa06da](https://arbiscan.io/tx/0xc86638fb98b44caf419ff80aae5995190c3c6996c60908f8c7a65fadf2aa06da)
- [0x15c2d54601e1e43b93ac722ea7455f822e2fde515888d07d86c3644e74166c0c](https://arbiscan.io/tx/0x15c2d54601e1e43b93ac722ea7455f822e2fde515888d07d86c3644e74166c0c)
- [0x726287ec44bb1699e5a4bddf27a916d262a1fa1b5b4cdf0a4bee2f866489cb8e](https://arbiscan.io/tx/0x726287ec44bb1699e5a4bddf27a916d262a1fa1b5b4cdf0a4bee2f866489cb8e)
- [0xde412ce59a8a742b1b1ce25300dbb86442ad03472e7a32cbf160c94c6cf97e7f](https://arbiscan.io/tx/0xde412ce59a8a742b1b1ce25300dbb86442ad03472e7a32cbf160c94c6cf97e7f)

### Contrats V1 dépréciés (Arbitrum)

Vous pouvez toujours accéder à vos fonds en saisissant votre adresse via Arbiscan.

- **Vérifiez votre solde:**
  [https://arbiscan.io/token/0x95503FfAffD9E8B2aEa782F36bb5C8B85a4e41D4#balances](https://arbiscan.io/token/0x95503FfAffD9E8B2aEa782F36bb5C8B85a4e41D4#balances)
- **Vérifiez vos récompenses réclamables**
- **Réclamez vos récompenses**

#### Contrats de portefeuille

- **Portefeuille permanent:** `0x95503FfAffD9E8B2aEa782F36bb5C8B85a4e41D4`

#### Contrats de coffre-fort

- **Magic Vault:** `0xA3CDd5a4b9f5a69C5C3a297A428A10B742F1c6E1`
- **Equilibria GLP Vault:** `0xBb4D0819089879d83ae13fEe71aBeAa345629389`
- **Equilibria GDAI Vault:** `0x0F658FC0C72A729F1B8F8444601D657D3F30Db41`
- **Equilibria RETH Vault:** `0x5073bf9aE65963A5881F36560072adf5d4c6e870`
- **Equilibria Pendle Vault:** `0x4999AE9fDD361Ca6278B0295dd65776b4587E1aA`
- **Radiant Arbitrum Vault:** `0x99E9cE14C807e95329a2A35aDD52683528e53231`

---

## Contrats sur BSC

### Contrats de portefeuille (déprécié)

- **Portefeuille permanent:** `0x24D22cA076Dc055A6b0faD59678d91BA4C948000`

### Contrats de coffre-fort

- **ApolloX Vault:** `0xd56d8Dfd3A3D6F6dafc0b7b6945F6E7AB138706e`

### Contrats de portefeuille (v2, exploité)

- **Portefeuille permanent:** `0xD188492217F09D18f2B0ecE3F8948015981e961a`

### Contrats de coffre-fort (v2)

- **ApolloX Vault:** `0x9Ad45D46e2A2ca19BBB5D5a50Df319225aD60e0d`

---

## Incident de sécurité V2

Le contrat V2 a été exploité les 5 et 6 mars, entraînant une perte d'environ 10 760 $.

- **Adresse de l'attaquant:**
  [https://debank.com/profile/0xff61ba33ed51322bb716eab4137adf985644b94d](https://debank.com/profile/0xff61ba33ed51322bb716eab4137adf985644b94d)
- **Transaction 1:**
  [https://bscscan.com/tx/0x541260769bd8c389a5896fb46982ff4f8821a8b22b6e1e4399bf01e841fb9ce4](https://bscscan.com/tx/0x541260769bd8c389a5896fb46982ff4f8821a8b22b6e1e4399bf01e841fb9ce4)
- **Transaction 2:**
  [https://bscscan.com/tx/0x9983ca8eaee9ee69629f74537eaf031272af75f1e5a7725911d8b06df17c67ca](https://bscscan.com/tx/0x9983ca8eaee9ee69629f74537eaf031272af75f1e5a7725911d8b06df17c67ca)

Nous avons indemnisé toutes les pertes de nos utilisateurs, nos co-fondateurs couvrant
personnellement les pertes.

### Transactions de remboursement

- **Transaction 1:**
  [https://arbiscan.io/tx/0x2ca790c16af0dac48c8f44b2fae98423164d17ac32e812b62af56117951ac4ef](https://arbiscan.io/tx/0x2ca790c16af0dac48c8f44b2fae98423164d17ac32e812b62af56117951ac4ef)
- **Transaction 2:**
  [https://arbiscan.io/tx/0xe365eda955d5fa48c2aceee6375cb6600c02587a74c434c036b069900933bf5e](https://arbiscan.io/tx/0xe365eda955d5fa48c2aceee6375cb6600c02587a74c434c036b069900933bf5e)
- **Transaction 3:**
  [https://arbiscan.io/tx/0x6f3155dcad603017fd49d17112ccabba6c7645acc99c1fc1c7c655fb2a408989](https://arbiscan.io/tx/0x6f3155dcad603017fd49d17112ccabba6c7645acc99c1fc1c7c655fb2a408989)
- **Transaction 4:**
  [https://arbiscan.io/tx/0x6f3155dcad603017fd49d17112ccabba6c7645acc99c1fc1c7c655fb2a408989](https://arbiscan.io/tx/0x6f3155dcad603017fd49d17112ccabba6c7645acc99c1fc1c7c655fb2a408989)
- **Transaction 5:**
  [https://arbiscan.io/tx/0x5c7a92902435dda8b521eea5706cf73a81497a7154b82c3f2f5a0126b1f5076a](https://arbiscan.io/tx/0x5c7a92902435dda8b521eea5706cf73a81497a7154b82c3f2f5a0126b1f5076a)
- **Transaction 6:**
  [https://arbiscan.io/tx/0x8e6dfbf7b660a2c9e5d4dbdb595948bf4506ff70492f9fdb2c582c9a7ae8d9e7](https://arbiscan.io/tx/0x8e6dfbf7b660a2c9e5d4dbdb595948bf4506ff70492f9fdb2c582c9a7ae8d9e7)
