# Security Incidents

This page documents past security incidents and provides transparency about our protocol's security
history.

## Overview

At Zap Pilot, we prioritize security and take full responsibility for any incidents that occur. We
believe in full transparency and proactive user protection.

## Incident Types

### 1. V1 Audits on Arbitrum (Deprecated)

#### Incident Details

- **Date:** November 17, 2024
- **Cause:** Router upgrade by GMX affecting portfolio contract
- **Impact:** All users fully reimbursed

#### Reimbursement Transactions

| Transaction Hash | Link                                                                                                              |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| 0x316c4baf...    | [Arbiscan Transaction](https://arbiscan.io/tx/0x316c4baf20c54a3c520ed33a91a692c575efd9051d6213c43ccc8f69a97b6056) |
| 0x0c1e06f1...    | [Arbiscan Transaction](https://arbiscan.io/tx/0x0c1e06f16eba9e38076b91264e3410fa68cc5815f34006b4be311ee3de23dd13) |
| 0x0d4fd4ac...    | [Arbiscan Transaction](https://arbiscan.io/tx/0x0d4fd4ac737b5eead65335f8f1c53ac75c781bc83cd5803043b059d101730df3) |
| 0xc86638fb...    | [Arbiscan Transaction](https://arbiscan.io/tx/0xc86638fb98b44caf419ff80aae5995190c3c6996c60908f8c7a65fadf2aa06da) |
| 0x15c2d546...    | [Arbiscan Transaction](https://arbiscan.io/tx/0x15c2d54601e1e43b93ac722ea7455f822e2fde515888d07d86c3644e74166c0c) |
| 0x726287ec...    | [Arbiscan Transaction](https://arbiscan.io/tx/0x726287ec44bb1699e5a4bddf27a916d262a1fa1b5b4cdf0a4bee2f866489cb8e) |
| 0xde412ce5...    | [Arbiscan Transaction](https://arbiscan.io/tx/0xde412ce59a8a742b1b1ce25300dbb86442ad03472e7a32cbf160c94c6cf97e7f) |

#### Deprecated V1 Contracts (Arbitrum)

**Helpful Links:**

- [Check Balance on Arbiscan](https://arbiscan.io/token/0x95503FfAffD9E8B2aEa782F36bb5C8B85a4e41D4#balances)

**Deprecated Contract Addresses:**

| Contract Type           | Address                                      |
| ----------------------- | -------------------------------------------- |
| Permanent Portfolio     | `0x95503FfAffD9E8B2aEa782F36bb5C8B85a4e41D4` |
| Magic Vault             | `0xA3CDd5a4b9f5a69C5C3a297A428A10B742F1c6E1` |
| Equilibria GLP Vault    | `0xBb4D0819089879d83ae13fEe71aBeAa345629389` |
| Equilibria GDAI Vault   | `0x0F658FC0C72A729F1B8F8444601D657D3F30Db41` |
| Equilibria RETH Vault   | `0x5073bf9aE65963A5881F36560072adf5d4c6e870` |
| Equilibria Pendle Vault | `0x4999AE9fDD361Ca6278B0295dd65776b4587E1aA` |
| Radiant Arbitrum Vault  | `0x99E9cE14C807e95329a2A35aDD52683528e53231` |

### 2. BSC Portfolio Contracts

#### Contracts Status

| Type                             | Address                                      | Status     |
| -------------------------------- | -------------------------------------------- | ---------- |
| Permanent Portfolio (Deprecated) | `0x24D22cA076Dc055A6b0faD59678d91BA4C948000` | Deprecated |
| ApolloX Vault                    | `0xd56d8Dfd3A3D6F6dafc0b7b6945F6E7AB138706e` | Deprecated |
| Permanent Portfolio (V2)         | `0xD188492217F09D18f2B0ecE3F8948015981e961a` | Exploited  |
| ApolloX Vault (V2)               | `0x9Ad45D46e2A2ca19BBB5D5a50Df319225aD60e0d` | Redeployed |

### 3. V2 Security Incident

#### Incident Overview

- **Date:** March 5-6
- **Impact:** Approximately $10,760 loss
- **Resolution:** Full user compensation

#### Incident Details

| Type               | Information                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Attacker's Address | [DeBank Profile](https://debank.com/profile/0xff61ba33ed51322bb716eab4137adf985644b94d)                          |
| Transaction 1      | [BSCScan Transaction](https://bscscan.com/tx/0x541260769bd8c389a5896fb46982ff4f8821a8b22b6e1e4399bf01e841fb9ce4) |
| Transaction 2      | [BSCScan Transaction](https://bscscan.com/tx/0x9983ca8eaee9ee69629f74537eaf031272af75f1e5a7725911d8b06df17c67ca) |

#### Reimbursement Transactions

| Transaction   | Link                                                                                                              |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| Transaction 1 | [Arbiscan Transaction](https://arbiscan.io/tx/0x2ca790c16af0dac48c8f44b2fae98423164d17ac32e812b62af56117951ac4ef) |
| Transaction 2 | [Arbiscan Transaction](https://arbiscan.io/tx/0xe365eda955d5fa48c2aceee6375cb6600c02587a74c434c036b069900933bf5e) |
| Transaction 3 | [Arbiscan Transaction](https://arbiscan.io/tx/0x6f3155dcad603017fd49d17112ccabba6c7645acc99c1fc1c7c655fb2a408989) |
| Transaction 4 | [Arbiscan Transaction](https://arbiscan.io/tx/0x6f3155dcad603017fd49d17112ccabba6c7645acc99c1fc1c7c655fb2a408989) |
| Transaction 5 | [Arbiscan Transaction](https://arbiscan.io/tx/0x5c7a92902435dda8b521eea5706cf73a81497a7154b82c3f2f5a0126b1f5076a) |
| Transaction 6 | [Arbiscan Transaction](https://arbiscan.io/tx/0x8e6dfbf7b660a2c9e5d4dbdb595948bf4506ff70492f9fdb2c582c9a7ae8d9e7) |

## Our Commitment to Security

We take security incidents seriously and are committed to:

- Full transparency
- Rapid incident response
- Complete user compensation
- Continuous security improvements

If you have any questions about these incidents, please contact our support team.
