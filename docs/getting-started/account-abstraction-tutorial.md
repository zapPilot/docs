---
sidebar_position: 3
---

# Account Abstraction Wallet Tutorial

Account Abstraction (AA) wallets represent the next generation of crypto wallet technology, making
DeFi more accessible and user-friendly. This guide walks you through setting up and using your AA
wallet with Zap Pilot.

## What is Account Abstraction?

### Traditional Wallets vs AA Wallets

#### **Traditional Wallets**

- Require ETH for gas on every transaction
- Limited transaction logic
- Manual transaction approval for each step
- Complex multi-step operations

#### **Account Abstraction Wallets**

- **Gasless transactions** - pay fees with any token
- **Batch operations** - multiple actions in one transaction
- **Smart contract logic** - programmable wallet behavior
- **Social recovery** - recover access without seed phrases

### Key Benefits for DeFi

🚀 **Simplified Experience**

- One-click complex operations
- No need to hold specific gas tokens
- Automatic transaction batching

🔒 **Enhanced Security**

- Multi-signature support
- Spending limits and controls
- Session keys for automated strategies

💰 **Cost Efficiency**

- Batch multiple operations to save gas
- Pay fees with stablecoins instead of ETH
- Sponsored transactions for small amounts

## Setting Up Your AA Wallet

### Option 1: Social Login (Recommended for Beginners)

#### **Using Gmail**

1. **Visit Zap Pilot App**
   - Go to [app.zap-pilot.com](https://app.zap-pilot.com)
   - Click "Connect Wallet"

2. **Select Social Login**
   - Choose "Continue with Gmail"
   - Authorize with your Google account

3. **Wallet Creation**
   - AA wallet automatically created
   - No seed phrase needed (secured by Google)
   - Backup options provided

4. **Verification**
   - Email confirmation sent
   - Verify your account for enhanced security

#### **Using Apple ID or Facebook**

Similar process to Gmail:

- Select your preferred social provider
- Authorize account access
- Wallet created and secured by provider

### Option 2: Existing Wallet Integration

#### **MetaMask Integration**

1. **Connect MetaMask**
   - Ensure MetaMask is installed
   - Connect to Zap Pilot as usual

2. **Upgrade to AA**
   - Click "Upgrade to Smart Wallet"
   - Deploy AA wallet contract
   - Link to your existing MetaMask

3. **Benefits**
   - Keep your existing addresses
   - Enhanced functionality
   - Backward compatibility

#### **Other Wallet Support**

- **WalletConnect**: Connects 200+ mobile wallets
- **Coinbase Wallet**: Direct integration
- **Hardware Wallets**: Via MetaMask bridge

## AA Wallet Features

### Gasless Transactions

#### **How It Works**

Instead of paying gas with ETH:

```
Traditional: Your ETH → Gas Fee → Transaction
AA Wallet: Your USDC → Sponsored → Transaction
```

#### **Supported Fee Tokens**

- **USDC** (recommended)
- **USDT**
- **DAI**
- **ETH** (if you prefer)

#### **Fee Sponsorship**

For qualifying transactions:

- **New users**: First 3 transactions sponsored
- **Small amounts**: Transactions under $100
- **Strategy deposits**: Initial vault entries

### Batch Operations

#### **Single Transaction, Multiple Actions**

Traditional DeFi investment:

```
1. Approve USDC
2. Swap to target tokens
3. Add liquidity
4. Stake LP tokens
Total: 4 transactions, 4 gas fees
```

With AA wallet:

```
1. Batch: [approve, swap, add_liquidity, stake]
Total: 1 transaction, 1 gas fee
```

#### **Zap Pilot Integration**

When you "Zap In" to a strategy:

- Approval, swaps, deposits bundled
- Cross-chain operations coordinated
- Optimal gas usage across all steps

### Session Keys

#### **Automated Strategy Management**

Set up session keys for:

- **Automatic rebalancing** within set parameters
- **Yield harvesting** and compounding
- **Risk management** actions
- **Emergency exits** based on conditions

#### **Security Controls**

Session keys include:

- **Spending limits**: Maximum amount per transaction
- **Time limits**: Keys expire automatically
- **Action restrictions**: Only specific functions allowed
- **Revocation**: Cancel permissions anytime

## Wallet Security

### Multi-Signature Support

#### **Team Management**

- **2-of-3 signatures** for team accounts
- **Role-based permissions** for different functions
- **Spending thresholds** requiring multiple approvals

#### **Personal Security**

- **Guardian setup**: Trusted contacts for recovery
- **Device authorization**: Limit access to known devices
- **Transaction delays**: Time locks for large amounts

### Social Recovery

#### **No More Lost Seed Phrases**

Traditional recovery:

- Lose seed phrase = lose everything
- Complex backup requirements
- Single point of failure

AA wallet recovery:

- **Guardian network**: Friends/family can help recover
- **Social verification**: Multiple confirmation methods
- **Gradual access**: Recover step by step

#### **Recovery Process**

1. **Initiate Recovery**
   - Access "Recover Wallet" from any device
   - Verify identity through social provider

2. **Guardian Confirmation**
   - Pre-selected guardians receive recovery request
   - Majority approval required to proceed

3. **New Device Setup**
   - Install wallet on new device
   - Complete recovery verification
   - Full access restored

## Advanced Features

### Spending Controls

#### **Daily Limits**

- Set maximum daily spending amounts
- Automatic reset every 24 hours
- Override options for verified large transactions

#### **Protocol Allowlists**

- Restrict interactions to approved protocols
- Whitelist specific DeFi platforms
- Block interactions with flagged contracts

#### **Time-Based Controls**

- **Business hours**: Limit transactions to specific times
- **Cool-down periods**: Delays between large transactions
- **Emergency freeze**: Halt all activity if needed

### Portfolio Automation

#### **Rebalancing Automation**

```
IF portfolio_drift > 5% AND gas_cost < rebalancing_benefit
THEN execute_rebalancing()
```

#### **Yield Optimization**

```
IF new_yield_opportunity > current_yield + 2%
THEN propose_migration()
```

#### **Risk Management**

```
IF protocol_risk_score < threshold
THEN emergency_exit()
```

## Troubleshooting

### Common Issues

#### **"Transaction Failed"**

- **Cause**: Insufficient balance for fees
- **Solution**: Ensure wallet has fee tokens (USDC/ETH)
- **Prevention**: Enable automatic fee management

#### **"Session Key Expired"**

- **Cause**: Automated permissions expired
- **Solution**: Re-authorize session keys
- **Prevention**: Set longer expiration periods

#### **"Guardian Not Responding"**

- **Cause**: Recovery guardian unavailable
- **Solution**: Contact other guardians or use backup method
- **Prevention**: Select multiple reliable guardians

### Getting Help

#### **Wallet Support**

- **ThirdWeb Documentation**: [docs.thirdweb.com](https://docs.thirdweb.com)
- **Zap Pilot Support**: Live chat for wallet issues
- **Community Forum**: User-to-user assistance

#### **Emergency Procedures**

- **Immediate freeze**: Halt all automated functions
- **Direct protocol access**: Withdraw funds directly
- **Recovery assistance**: 24/7 support for account recovery

---

## Next Steps

Now that your AA wallet is set up:

1. **Fund your wallet** with stablecoins or crypto
2. **Choose your strategy** based on risk tolerance
3. **Deploy your first investment** with one click
4. **Set up automation** for optimal management

Your AA wallet makes DeFi investing as simple as traditional finance, but with all the benefits of
decentralization and self-custody.

👉 **[Fund Your Wallet →](../getting-started)** 👉 **[Choose Strategy →](../strategies)**
