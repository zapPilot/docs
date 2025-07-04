---
sidebar_position: 4
---

# Protocol Mechanics

Zap Pilot operates as a sophisticated, non-custodial algorithmic asset allocation system. Here's how
our protocol mechanics work under the hood.

## System Architecture

### Non-Custodial Design

Zap Pilot is built around a fundamental principle: **you always control your funds**.

- **No custody**: We never hold your assets
- **Direct protocol interaction**: Your wallet interacts directly with DeFi protocols
- **Transparent execution**: All operations are on-chain and auditable
- **Emergency exits**: You can withdraw directly from protocols if needed

## Vault Logic

### Thematic Vault Structure

Each vault represents a specific investment strategy with curated DeFi protocols:

#### **Vault Components**

- **Strategy Definition**: Clear investment thesis and target allocation
- **Protocol Whitelist**: Vetted, audited protocols meeting our security standards
- **Risk Parameters**: Maximum allocation limits per protocol
- **Rebalancing Rules**: Conditions that trigger portfolio adjustments

#### **Dynamic Weighting System**

Protocols within each vault are weighted based on:

```
Protocol Weight = Base Weight × Performance Multiplier × Risk Adjustment
```

**Base Weight Factors:**

- Total Value Locked (TVL) - minimum $300k for stablecoin strategies
- Audit history and security score
- Historical yield stability
- Liquidity depth

**Performance Multiplier:**

- Recent yield performance vs benchmarks
- Yield consistency over time
- Protocol governance health

**Risk Adjustment:**

- Smart contract risk assessment
- Governance token concentration
- Protocol age and battle-testing period

### Strategy Execution Flow

1. **User Deposit** → Account Abstraction wallet receives funds
2. **Vault Routing** → Funds directed to appropriate thematic vault
3. **Protocol Distribution** → Assets allocated across curated protocols
4. **Continuous Monitoring** → Real-time performance and risk tracking
5. **Rebalancing Triggers** → Quarterly suggestions or threshold-based alerts

## Kelly Allocation Strategy

### Mathematical Foundation

We use the **Kelly Criterion** to determine optimal position sizes, maximizing long-term geometric
growth while managing risk.

#### **Kelly Formula**

```
Optimal Weight = (Expected Return - Risk-Free Rate) / Variance
```

#### **Multi-Asset Kelly Allocation**

For portfolios with multiple assets:

```
W* = Σ⁻¹ × (μ - rf × 1)
```

Where:

- **W\*** = Optimal weight vector
- **Σ⁻¹** = Inverse covariance matrix of returns
- **μ** = Expected return vector
- **rf** = Risk-free rate
- **1** = Vector of ones

### Practical Implementation

#### **Risk-Adjusted Kelly**

We modify the classic Kelly formula to account for:

- **Maximum drawdown limits** (15% for conservative, 30% for aggressive)
- **Correlation constraints** (max 60% in correlated assets)
- **Liquidity requirements** (maintain 10% in liquid positions)

#### **Dynamic Rebalancing Triggers**

Rebalancing occurs when:

- **Allocation drift** > 5% from target weights
- **Risk metrics** exceed predefined thresholds
- **New opportunities** with significantly better risk-adjusted returns emerge
- **Quarterly reviews** regardless of drift (user-configurable)

## Account Abstraction Integration

### Wallet Architecture

#### **Smart Wallet Features**

- **Gasless transactions** through meta-transactions
- **Batch operations** for gas efficiency
- **Session keys** for automated strategies
- **Multi-signature support** for institutional users

#### **User Experience Benefits**

**For Beginners:**

- No need to hold ETH for gas across multiple chains
- One-click complex operations
- Social recovery options

**For Advanced Users:**

- Programmable transaction logic
- Automated rebalancing permissions
- Custom spending controls

### Transaction Batching

Multiple operations combined into single transaction:

```
Batch Transaction = [
  approve(token, amount),
  deposit(vault, amount),
  distribute(protocols[], weights[]),
  track(performance_metrics)
]
```

## Risk Management Framework

### Protocol-Level Safeguards

#### **Automated Risk Monitoring**

- **TVL thresholds**: Minimum liquidity requirements
- **Yield anomaly detection**: Flag unusually high/low returns
- **Governance risk assessment**: Monitor protocol changes
- **Smart contract monitoring**: Track upgrade events

#### **Diversification Constraints**

- **Maximum single protocol allocation**: 30% for conservative, 50% for aggressive
- **Asset type diversification**: No more than 70% in any single asset class
- **Chain diversification**: Spread risk across multiple networks

### User-Level Controls

#### **Risk Tolerance Settings**

- **Conservative**: Lower volatility, stable protocols only
- **Moderate**: Balanced risk/reward, established protocols
- **Aggressive**: Higher risk tolerance, including newer protocols

#### **Emergency Procedures**

- **Immediate withdrawal**: Direct protocol interaction
- **Risk-off mode**: Automatic movement to safer assets during crisis
- **Circuit breakers**: Halt automated actions during extreme volatility

## Rebalancing Mechanics

### Trigger Conditions

#### **Threshold-Based Rebalancing**

- Allocation drift exceeds target by 5%
- Risk metrics breach predefined limits
- Yield opportunities with >2% advantage emerge

#### **Time-Based Rebalancing**

- **Weekly**: For active strategies (optional, higher costs)
- **Monthly**: Standard frequency (recommended)
- **Quarterly**: Low-cost approach via email suggestions

### Execution Process

1. **Analysis Phase**
   - Calculate current vs target allocations
   - Assess gas costs vs rebalancing benefits
   - Identify optimal execution paths

2. **User Approval**
   - Present rebalancing proposal
   - Show estimated costs and benefits
   - Allow manual review and modification

3. **Execution Phase**
   - Batch transactions for gas efficiency
   - Execute across multiple chains if needed
   - Update tracking and analytics

## Performance Attribution

### Real-Time Analytics

Track performance contributions from:

- **Protocol selection**: Which protocols drove returns
- **Allocation timing**: Impact of rebalancing decisions
- **Chain optimization**: Benefits of cross-chain strategies
- **Cost management**: Gas efficiency and fee optimization

### Benchmark Comparison

Compare strategy performance against:

- **Market indices**: Bitcoin, Ethereum, DeFi index
- **Traditional finance**: S&P 500, bond indices
- **DeFi benchmarks**: Protocol-specific returns
- **Risk-adjusted metrics**: Sharpe ratio, Sortino ratio

---

Understanding these mechanics helps you make informed decisions about your DeFi strategy. Our system
handles the complexity while keeping you in control.

👉 **[Explore Strategies →](../strategies)** 👉 **[View Security Details →](../security)**
