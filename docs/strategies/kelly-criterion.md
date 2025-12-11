---
sidebar_position: 2
---

# 🔬 Kelly Criterion & Allocation

Zap Pilot uses the **Kelly Criterion** to optimize how we deploy capital _within_ our Crypto and
Stablecoin buckets.

While the **Market Regime** determines the _split_ between Crypto and Stables (e.g., 60/40), the
**Kelly Criterion** determines _where_ that 60% Crypto or 40% Stables actually goes (e.g., Aave,
Morpho, Uniswap).

---

## 🔍 1. What Is the Kelly Criterion?

The Kelly Criterion is a formula for maximizing long-term wealth growth by balancing **expected
return** against **risk**.

### 📐 Basic Formula

```
allocation_weight = expected_return / variance
```

Protocols with **higher yield** and **lower volatility** get more capital.

---

## ⚙️ 2. Adapting for DeFi

We take the raw Kelly output and apply **Real-World Risk Modifiers**:

1.  **TVL (Total Value Locked)**: We cap allocation to pools with low liquidity to avoid slippage.
2.  **Protocol Age**: Newer protocols get a "maturity penalty" to reduce smart contract risk.
3.  **Audits**: Unaudited protocols are excluded or strictly capped.

---

## 📊 3. Sample Allocation

If the **Market Regime** is **Fear** (60% Crypto / 40% Stables), the Kelly Engine might distribute
the **40% Stablecoin** portion like this:

- **Morpho (USDC):** 45% (High Safety, Moderate Yield)
- **Aave v3 (USDT):** 35% (High Safety, Moderate Yield)
- **Hyperliquid (USDC):** 20% (Higher Yield, Higher Risk)

This ensures diversification even within the asset classes.

---

## ✅ Summary

Zap Pilot combines **Macro Sentiment** (Fear & Greed) for the big picture with **Kelly
Optimization** for the specific execution. This double-layer approach aims to protect capital while
maximizing growth.
