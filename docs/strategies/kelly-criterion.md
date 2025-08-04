---
sidebar_position: 2
---

# 🔬 How Zap Pilot Allocates Funds

Zap Pilot uses the **Kelly Criterion** as the foundation for allocating user funds across multiple
DeFi protocols. While the original Kelly formula is mathematical in nature, our implementation
includes real-world risk modifiers to make it suitable for on-chain asset management.

This page explains how we calculate vault allocations and adjust raw Kelly outputs to reflect
on-chain risks, liquidity, and protocol maturity.

---

## 🔍 1. What Is the Kelly Criterion?

The Kelly Criterion is a position sizing strategy that maximizes long-term capital growth by
balancing return and risk. It’s widely used in both gambling and portfolio theory.

### 📐 Basic Formula:

```python
allocation_weight = expected_return / variance
```

In Zap Pilot, we treat each DeFi pool as a "bet" with an expected APY and a risk profile. The higher
the return and the lower the volatility, the more capital it deserves.

---

## ⚙️ 2. Kelly Criterion in Practice

We apply a simplified and normalized version of the Kelly formula across all eligible pools in a
vault.

### Step-by-Step Process:

#### 🔢 Input Metrics (Per Pool):

- Estimated annual return (APY)
- Risk estimate (variance, based on APY history or modeling)

#### 🧮 Compute Raw Weights:

```python
raw_weight = apy / variance
```

#### 📊 Normalize Weights:

Ensure all final weights sum to 1:

```python
normalized_weight = raw_weight / sum(raw_weights)
```

#### 🚫 Post-Processing Filters:

- Pools with **negative weights** are excluded
- Pools with **extremely small weights** (e.g., < 1%) may be filtered out to reduce gas overhead and
  dust allocation

👉 Full implementation: `kelly_allocation.py` on our GitHub

---

## 🧱 3. Real-World Adjustments: Risk Modifiers

While the Kelly formula is mathematically sound, DeFi requires additional layers of caution. Zap
Pilot integrates **risk modifiers** to improve real-world safety and reliability.

### 📦 TVL (Total Value Locked)

- Pools with **very low TVL** may be excluded or capped
- **Why?** Low TVL implies poor liquidity, higher slippage, or low market trust

### 🕰 Protocol Age

- Newly launched protocols (e.g., < 3 months) are treated conservatively
- **Why?** High APY doesn’t compensate for lack of audits, security, or user base

### 💡 How We Apply These:

- **Filters:** Remove pools below minimum TVL or age thresholds
- **Multipliers:** Risky pools may receive partial allocation (e.g., 50% weight reduction)
- **Boundaries:** Set upper/lower limits for each pool

These adjustments ensure that Kelly-based logic reflects **DeFi-specific trust and safety
concerns**.

---

## 📊 4. Sample Output

A sample Kelly-weighted allocation for a **Stablecoin Vault** might look like:

```
Aave USDC (Optimism):        35%
Pendle sDAI (Arbitrum):      42%
Compound USDT (Ethereum):    23%
```

When a user zaps in, their funds are automatically split and bridged to match this portfolio.

---

## 🔁 5. Rebalancing Model

- **Frequency:** Allocations are recalculated quarterly
- **Notification:** Users are emailed with updated strategy suggestions
- **Execution:** Users can one-click rebalance via the frontend  
  (all actions are non-custodial and signed from the user’s AA wallet)

---

## 🚀 6. Upcoming Improvements

We are expanding the allocation engine with more inputs and flexibility:

- Off-chain oracle feeds (APY, volatility)
- Risk scoring based on governance, tokenomics, and code audits
- User-defined Kelly curves (personalized risk profiles)
- Vault-specific overrides (e.g., capital caps, slippage modeling)

---

## ✅ Summary

Zap Pilot uses the Kelly Criterion not as a rigid formula, but as a **dynamic, risk-aware allocation
engine** for DeFi. By combining return-risk optimization with real-world filters like **TVL** and
**protocol maturity**, we aim to deliver **robust, long-term growth** while minimizing unnecessary
exposure.
