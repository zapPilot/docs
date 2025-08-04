---
sidebar_position: 2
---

# 📊 Investment Strategies Overview

Zap Pilot helps users achieve stable, high-yield portfolios through intent-based execution,
mathematical allocation, and full user custody.

---

## ⚖️ 1. Allocation Strategy: Kelly Criterion

We use the **Kelly Criterion** to compute optimal allocation weights for each pool within a Vault.
This strategy balances **expected return** against **volatility**, aiming to maximize long-term
geometric growth.

### 📐 Simplified Formula:

```
allocation ∝ expected return / variance
```

### ✅ Benefits:

- 📈 Higher weights for low-volatility, high-reward pools
- 🛡️ Reduced risk from overexposure to any single protocol
- 🔄 Allocation is **recalculated quarterly** to reflect market changes

---

## 🔁 2. Rebalancing: User-Driven

Since Zap Pilot is non-custodial and assets remain in your **AA wallet**, the protocol **cannot
rebalance on your behalf**.  
Instead, we offer a **hybrid rebalancing model**:

- 📬 **Quarterly Suggestions**:  
  Personalized rebalancing recommendations via email, based on updated Kelly weights

- 🖱️ **One-Click Rebalance Tool**:  
  Users can apply changes via frontend in just one click (executed from their wallet)

> You stay in control. We help optimize.

---

## 🔐 3. Security & Non-Custodial Design

Zap Pilot is **strictly non-custodial**. Our frontend coordinates, but never holds or accesses user
funds.

### 🛡️ Security Principles:

- ✅ All transactions are signed & executed from **your own AA wallet**
- ✅ No smart contract custody
- ✅ Fully transparent and on-chain traceable

> Your keys, your coins — always.

---

## 🛠️ 4. Coming Soon: Customizable Vaults

While current Vaults are predefined, we're building toward **flexible, user-generated strategies**.

### 🚧 Upcoming Features:

- 🧩 **User-Created Vaults**: Select pools, customize weights, and name your strategy
- 🌐 **Strategy Marketplace**: Publish your Vaults for others to follow
- 🏆 **Vault Leaderboards**: Track performance, compete, and earn rewards

---

## 🚀 Ready to Start?

Choose the strategy that matches your investment style:

👉 **[Get Started →](../getting-started)** 👉 **[View Investment Strategies →](./)**
