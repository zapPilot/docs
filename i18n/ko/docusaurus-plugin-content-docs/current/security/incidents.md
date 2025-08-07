# 보안 사고

이 페이지는 과거 보안 사고를 기록하고 프로토콜의 보안 기록에 대한 투명성을 제공합니다.

## 개요

Zap Pilot에서는 보안을 최우선으로 생각하며 발생하는 모든 사고에 대해 전적인 책임을 집니다. 우리는
완전한 투명성과 사전 예방적인 사용자 보호를 믿습니다.

## 사고 유형

### 1. Arbitrum의 V1 감사 (사용 중단)

#### 사고 세부 정보

- **날짜:** 2024년 11월 17일
- **원인:** GMX의 라우터 업그레이드가 포트폴리오 계약에 영향을 미침
- **영향:** 모든 사용자에게 전액 환급

#### 환급 거래

| 거래 해시     | 링크                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| 0x316c4baf... | [Arbiscan 거래](https://arbiscan.io/tx/0x316c4baf20c54a3c520ed33a91a692c575efd9051d6213c43ccc8f69a97b6056) |
| 0x0c1e06f1... | [Arbiscan 거래](https://arbiscan.io/tx/0x0c1e06f16eba9e38076b91264e3410fa68cc5815f34006b4be311ee3de23dd13) |
| 0x0d4fd4ac... | [Arbiscan 거래](https://arbiscan.io/tx/0x0d4fd4ac737b5eead65335f8f1c53ac75c781bc83cd5803043b059d101730df3) |
| 0xc86638fb... | [Arbiscan 거래](https://arbiscan.io/tx/0xc86638fb98b44caf419ff80aae5995190c3c6996c60908f8c7a65fadf2aa06da) |
| 0x15c2d546... | [Arbiscan 거래](https://arbiscan.io/tx/0x15c2d54601e1e43b93ac722ea7455f822e2fde515888d07d86c3644e74166c0c) |
| 0x726287ec... | [Arbiscan 거래](https://arbiscan.io/tx/0x726287ec44bb1699e5a4bddf27a916d262a1fa1b5b4cdf0a4bee2f866489cb8e) |
| 0xde412ce5... | [Arbiscan 거래](https://arbiscan.io/tx/0xde412ce59a8a742b1b1ce25300dbb86442ad03472e7a32cbf160c94c6cf97e7f) |

#### 사용 중단된 V1 계약 (Arbitrum)

**유용한 링크:**

- [Arbiscan에서 잔액 확인](https://arbiscan.io/token/0x95503FfAffD9E8B2aEa782F36bb5C8B85a4e41D4#balances)

**사용 중단된 계약 주소:**

| 계약 유형              | 주소                                         |
| ---------------------- | -------------------------------------------- |
| 영구 포트폴리오        | `0x95503FfAffD9E8B2aEa782F36bb5C8B85a4e41D4` |
| 매직 볼트              | `0xA3CDd5a4b9f5a69C5C3a297A428A10B742F1c6E1` |
| Equilibria GLP 볼트    | `0xBb4D0819089879d83ae13fEe71aBeAa345629389` |
| Equilibria GDAI 볼트   | `0x0F658FC0C72A729F1B8F8444601D657D3F30Db41` |
| Equilibria RETH 볼트   | `0x5073bf9aE65963A5881F36560072adf5d4c6e870` |
| Equilibria Pendle 볼트 | `0x4999AE9fDD361Ca6278B0295dd65776b4587E1aA` |
| Radiant Arbitrum 볼트  | `0x99E9cE14C807e95329a2A35aDD52683528e53231` |

### 2. BSC 포트폴리오 계약

#### 계약 상태

| 유형                        | 주소                                         | 상태      |
| --------------------------- | -------------------------------------------- | --------- |
| 영구 포트폴리오 (사용 중단) | `0x24D22cA076Dc055A6b0faD59678d91BA4C948000` | 사용 중단 |
| ApolloX 볼트                | `0xd56d8Dfd3A3D6F6dafc0b7b6945F6E7AB138706e` | 사용 중단 |
| 영구 포트폴리오 (V2)        | `0xD188492217F09D18f2B0ecE3F8948015981e961a` | 악용됨    |
| ApolloX 볼트 (V2)           | `0x9Ad45D46e2A2ca19BBB5D5a50Df319225aD60e0d` | 재배포됨  |

### 3. V2 보안 사고

#### 사고 개요

- **날짜:** 3월 5-6일
- **영향:** 약 10,760달러 손실
- **해결:** 전체 사용자 보상

#### 사고 세부 정보

| 유형        | 정보                                                                                                      |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| 공격자 주소 | [DeBank 프로필](https://debank.com/profile/0xff61ba33ed51322bb716eab4137adf985644b94d)                    |
| 거래 1      | [BSCScan 거래](https://bscscan.com/tx/0x541260769bd8c389a5896fb46982ff4f8821a8b22b6e1e4399bf01e841fb9ce4) |
| 거래 2      | [BSCScan 거래](https://bscscan.com/tx/0x9983ca8eaee9ee69629f74537eaf031272af75f1e5a7725911d8b06df17c67ca) |

#### 환급 거래

| 거래   | 링크                                                                                                       |
| ------ | ---------------------------------------------------------------------------------------------------------- |
| 거래 1 | [Arbiscan 거래](https://arbiscan.io/tx/0x2ca790c16af0dac48c8f44b2fae98423164d17ac32e812b62af56117951ac4ef) |
| 거래 2 | [Arbiscan 거래](https://arbiscan.io/tx/0xe365eda955d5fa48c2aceee6375cb6600c02587a74c434c036b069900933bf5e) |
| 거래 3 | [Arbiscan 거래](https://arbiscan.io/tx/0x6f3155dcad603017fd49d17112ccabba6c7645acc99c1fc1c7c655fb2a408989) |
| 거래 4 | [Arbiscan 거래](https://arbiscan.io/tx/0x6f3155dcad603017fd49d17112ccabba6c7645acc99c1fc1c7c655fb2a408989) |
| 거래 5 | [Arbiscan 거래](https://arbiscan.io/tx/0x5c7a92902435dda8b521eea5706cf73a81497a7154b82c3f2f5a0126b1f5076a) |
| 거래 6 | [Arbiscan 거래](https://arbiscan.io/tx/0x8e6dfbf7b660a2c9e5d4dbdb595948bf4506ff70492f9fdb2c582c9a7ae8d9e7) |

## 보안에 대한 우리의 약속

우리는 보안 사고를 심각하게 받아들이며 다음에 전념합니다:

- 완전한 투명성
- 신속한 사고 대응
- 완전한 사용자 보상
- 지속적인 보안 개선

이러한 사고에 대해 질문이 있는 경우 지원팀에 문의하십시오.
