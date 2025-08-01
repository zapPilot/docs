⚙️ Zap Pilot Tokenomics (v2 – 2025) 🎯 Overview Zap Pilot is an on-chain portfolio autopilot. For
busy DeFi users, Zap Pilot cuts portfolio rebalancing from 30 min to 30 sec — moving your crypto
across chains into higher-yield pools with one click, while every token stays in your own wallet.  
The $ZAP token uses a buyback-based token economy: no staking, no passive rewards, no empty
emissions — just value aligned with actual protocol usage.

🪙 Token Details

| Field           | Value | Name |
| --------------- | ----- | ---- |
| Zap Pilot Token |       |

Symbol | $ZAP (tentative, may rebrand)

Supply Cap | 100,000,000 (fixed)

| Standard | LayerZero OFT (Omnichain) |

Issuance | Via ThirdWeb + LayerZero Primary Chain | Base (with Optimism, Polygon, etc.)

💡 Utility & Design Philosophy No staking, no protocol-controlled yield. Instead: 🌀 Every fee
collected → used to buy $ZAP from the market → price support via real usage.

| Utility                                                      | Description                                               | Price Support |
| ------------------------------------------------------------ | --------------------------------------------------------- | ------------- |
| Protocol fees are used to buy $ZAP via Uniswap or other DEXs |                                                           |
| User Incentives                                              | Distributed via retroactive airdrops based on Zap Score   |
| Governance (optional)                                        | $ZAP may be used for future DAO voting or proposal rights |               |

🔁 Buyback Mechanism

| Component                                            | Implementation                                          | Source of Funds |
| ---------------------------------------------------- | ------------------------------------------------------- | --------------- |
| Protocol-level zap-in fees (ETH / USDC)              |
| Automated or manual buybacks on DEXs (e.g., Uniswap) |
| Token Handling                                       | Burned or redirected to DAO treasury                    |
| Transparency                                         | Weekly public reporting of buyback volume (optional UI) |

📊 Token Allocation

| Category                 | % Allocation | Notes                                                   |
| ------------------------ | ------------ | ------------------------------------------------------- |
| User Airdrop (Zap Score) | 40%          | Based on usage, referrals, social engagement            |
| Team                     | 20%          | 1-year cliff + 2-year linear vesting                    |
| Partners & Advisors      | 10%          | Includes incubators (1–2%), launchpads (1–2%), KOL pool |
| DAO Treasury             | 20%          | Buybacks, incentive campaigns, governance               |
| Liquidity Bootstrapping  | 10%          | Uniswap/Aerodrome LP seeding                            |

🔒 Partner/Advisor tokens are vested based on contribution type, generally using a 6-month cliff +
12-month linear unlock, but flexible per case.

🧮 Zap Score-Based Airdrop

| Metric            | Weight | Example |
| ----------------- | ------ | ------- |
| Zap-in Volume     | 40%    |
| Zap-in Frequency  | 40%    |
| Referrals         | 10%    |
| Community Actions | 10%    |

Zap Score is off-chain, tracked via backend, Notion or Sheets. Airdrop distribution is staged, and
partially locked to prevent instant dumping.

🔌 Tech Stack Overview

| Function              | Tool/Provider                           | Notes |
| --------------------- | --------------------------------------- | ----- |
| Intent Infrastructure | Thirdweb/ZeroDev (EIP-7702 + Paymaster) |
| Token Infrastructure  | ThirdWeb + LayerZero (OFT)              |
| Buyback Script        | Node.js + Uniswap SDK or custom relayer |
| Score Tracking        | Notion / Airtable / Firebase            |
| Airdrop Tools         | ThirdWeb SDK / Galxe / Airdrop.so       |
| LPs & Launchpads      | Uniswap / Aerodrome / Partnered IDO     |

🔐 Launchpad & Partner Vesting Tokens allocated to launchpads or advisors follow a 6-month cliff +
12-month linear vesting schedule. For example, if a launchpad receives 2,000,000 $ZAP: Months 1–6:
0% unlocked Month 7 onward: unlocks 1/12 per month (≈166,666 tokens per month) Fully unlocked after
month 18 Vesting schedules are flexible and negotiated based on actual value contributed (e.g.
marketing push, liquidity support, advisory work).

🧠 Why This Model Works Feature | Benefit --- | --- | --- No staking | No contract risk, no passive
yield dilution Buyback-based | Price is backed by real usage & revenue Fair Airdrop | Encourages
real participation, not speculation OFT design | Native cross-chain movement via LayerZero Smart EOA
wallet infra | Seamless UX for end users, gas sponsorship ready
