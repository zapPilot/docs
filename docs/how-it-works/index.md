---
sidebar_position: 1
---

# 🚀 How Zap Pilot Works

## 🧠 The Core Mechanism

Zap Pilot is a **Sentiment-Driven Portfolio Autopilot**. We use the **Fear & Greed Index** to
automatically determine how much of your portfolio should be in **Crypto (BTC/ETH)** vs.
**Stablecoins**.

### Key Principles

- **Buy Fear**: When the market is scared, we increase crypto allocation.
- **Defend Greed**: When the market is euphoric, we take profits into stables.
- **Non-Custodial**: You sign every move. We never hold your funds.

---

## 1️⃣ Connect & Deposit

You connect your wallet (Metamask, etc.) and deposit funds. Instead of picking a random strategy,
you are opting into our **Regime-Based Model**.

---

## 2️⃣ The Regimes

Your funds are allocated based on the 5 Market Regimes:

| Regime            | Indicator    | Strategy                    |
| :---------------- | :----------- | :-------------------------- |
| **Extreme Fear**  | 🔴 FGI < 25  | **70% Crypto** / 30% Stable |
| **Fear**          | 🟠 FGI 25-45 | **60% Crypto** / 40% Stable |
| **Neutral**       | 🟡 FGI 46-54 | **50% Crypto** / 50% Stable |
| **Greed**         | 🟢 FGI 55-75 | **40% Crypto** / 60% Stable |
| **Extreme Greed** | 🟩 FGI > 75  | **30% Crypto** / 70% Stable |

**Learn More:** [Detailed Strategy Guide](../strategies)

---

## 3️⃣ 📐 Kelly Allocation

To optimize which _specific_ protocols we use (e.g., Aave vs. Compound for stables, or Uniswap vs.
Curve for LP), we use the **Kelly Criterion**. This ensures we maximize yield while minimizing smart
contract risk.

**Detailed Explanation:** [Kelly Criterion in Depth](../strategies/kelly-criterion)

---

## 4️⃣ ♻️ Rebalancing (User-Driven)

When the market regime shifts (e.g., Fear → Neutral), we generate a **Rebalance Proposal**.

1.  **Notification**: You get an alert (Email/Calendar).
2.  **Execution**: You click "Rebalance" on the Zap Pilot dashboard.
3.  **Gradual Execution**: Logic splits the trade over 5-10 days to minimize slippage and timing
    risk.

---

## 🔒 Security & Transparency

- **Non-Custodial**: Your funds always remain in your wallet.
- **On-Chain Execution**: All transactions are transparent.
- **User-Controlled**: You approve every move.

**Security Details:** [Security Incidents & Transparency](../security)

👉 **[Get Started →](../getting-started)**
