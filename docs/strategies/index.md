---
sidebar_position: 2
---

# 📊 Strategies

Zap Pilot uses a single, cohesive strategy that adapts to market conditions. We call this
**Regime-Based Rebalancing**.

Instead of asking you to choose between "Conservative" or "Aggressive" vaults, we analyze the
market's psychological state—the **Fear & Greed Index**—and adjust your exposure dynamically.

---

## 5 Market Regimes

We categorize the market into 5 distinct regimes. Your portfolio's allocation depends entirely on
which regime the market is currently in.

## Momentum Matters: Bi-Directional Strategies

Crucially, **context matters**. The best move depends on where you _are_, but also where you _came
from_. We call this **Bi-Directional Logic**.

### 🔴 Extreme Fear (FGI < 25)

**"Maximum Accumulation"**

- **Scenario**: Market Crash.
- **Action**: Aggressively buy BTC/ETH with stablecoins.
- **Allocation**: **70% Crypto / 30% Stables**

### 🟠 Fear (FGI 25-45)

Here, our action depends on the trend:

- **📉 Falling into Fear (from Neutral)**:
  - **Strategy**: _Unwind LP for Spot_.
  - **Why**: Volatility is rising. We remove Liquidity Pool risk (Impermanent Loss) and shift into
    pure Spot BTC/ETH to catch the rebound.
- **📈 Recovering into Fear (from Extreme Fear)**:
  - **Strategy**: _Monitor Recovery_.
  - **Why**: We just bought the bottom in "Extreme Fear". Now we hold. We don't sell yet; we let the
    recovery ride.

### 🟡 Neutral (FGI 46-54)

**"Holiday Mode"**

- **Action**: Do nothing.
- **Allocation**: **50% Crypto / 50% Stables**
- **Why**: The market is undecided. We sit on our hands to save fees.

### 🟢 Greed (FGI 55-75)

Again, direction is key:

- **📈 Rising into Greed (from Neutral)**:
  - **Strategy**: _Lock Gains into LP_.
  - **Why**: The bull run is heating up. We rotate some Spot Bitcoin into **Liquidity Pools** to
    earn fees from the trading frenzy while locking in some paper profits.
- **📉 Cooling into Greed (from Extreme Greed)**:
  - **Strategy**: _Take a Rest_.
  - **Why**: We already sold the top in "Extreme Greed". As the market dips back down, we don't buy
    back in immediately. We wait for a deeper correction.

### 🟩 Extreme Greed (FGI > 75)

**"Maximum Defense"**

- **Scenario**: Market Euphoria / Top Signals.
- **Action**: Sell heavily into Stablecoins.
- **Allocation**: **30% Crypto / 70% Stables**

---

## ⚙️ How Rebalancing Works

1.  **Regime Change**: When the Fear & Greed Index moves from one regime to another (e.g., Fear →
    Neutral), a rebalancing event is triggered.
2.  **Notification**: You receive a notification (or a calendar invite) suggesting the new
    allocation.
3.  **Gradual Execution**:
    - To prevent selling too early or buying too late, we don't execute all at once.
    - We use a **damped execution model**, spreading trades over **5-10 days**.
    - This "Smooth Rebalance" ensures you get a better average price and avoid whip-saws.

## 🤝 Custody & Safety

Critically, **Zap Pilot never holds your funds**.

- All rebalancing transactions are proposed by us but **signed by you**.
- Funds move directly from your wallet to the DEX/Protocol and back.
- We use open-source smart contracts and standard protocols (Uniswap, Aave, etc.).

👉 **[Start Rebalancing Today](../getting-started)**
