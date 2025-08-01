# [TODO: TRANSLATE] Zap Pilot Tokenomics (v2 – 2025)

## [TODO: TRANSLATE] Overview

Zap Pilot [TODO: TRANSLATE] is an on-chain portfolio autopilot. For busy DeFi users, Zap Pilot cuts
portfolio rebalancing from 30 min to 30 sec — moving your crypto across chains into higher-yield
pools with one click, while every token stays in your own wallet.

[TODO: TRANSLATE] The $ZAP token uses a buyback-based token economy: no staking, no passive rewards,
no empty emissions — just value aligned with actual protocol usage.

## [TODO: TRANSLATE] Token Details

| [TODO: TRANSLATE] Field         | [TODO: TRANSLATE] Value                               |
| ------------------------------- | ----------------------------------------------------- |
| [TODO: TRANSLATE] Name          | Zap Pilot Token                                       |
| [TODO: TRANSLATE] Symbol        | $ZAP ([TODO: TRANSLATE] tentative, may rebrand)       |
| [TODO: TRANSLATE] Supply Cap    | 100,000,000 ([TODO: TRANSLATE] fixed)                 |
| [TODO: TRANSLATE] Standard      | LayerZero OFT ([TODO: TRANSLATE] Omnichain)           |
| [TODO: TRANSLATE] Issuance      | Via ThirdWeb + LayerZero                              |
| [TODO: TRANSLATE] Primary Chain | Base ([TODO: TRANSLATE] with Optimism, Polygon, etc.) |

## [TODO: TRANSLATE] Utility & Design Philosophy

[TODO: TRANSLATE] No staking, no protocol-controlled yield. Instead: Every fee collected → used to
buy $ZAP from the market → price support via real usage.

| [TODO: TRANSLATE] Utility                                                      | [TODO: TRANSLATE] Description                                               | [TODO: TRANSLATE] Price Support |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | ------------------------------- |
| [TODO: TRANSLATE] Protocol fees are used to buy $ZAP via Uniswap or other DEXs |                                                                             | ✅                              |
| [TODO: TRANSLATE] User Incentives                                              | [TODO: TRANSLATE] Distributed via retroactive airdrops based on Zap Score   |                                 |
| [TODO: TRANSLATE] Governance (optional)                                        | [TODO: TRANSLATE] $ZAP may be used for future DAO voting or proposal rights |                                 |

## [TODO: TRANSLATE] Buyback Mechanism

| [TODO: TRANSLATE] Component                                            | [TODO: TRANSLATE] Implementation                                          | [TODO: TRANSLATE] Source of Funds |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------- |
| [TODO: TRANSLATE] Protocol-level zap-in fees (ETH / USDC)              |                                                                           |                                   |
| [TODO: TRANSLATE] Automated or manual buybacks on DEXs (e.g., Uniswap) |                                                                           |                                   |
| [TODO: TRANSLATE] Token Handling                                       | [TODO: TRANSLATE] Burned or redirected to DAO treasury                    |                                   |
| [TODO: TRANSLATE] Transparency                                         | [TODO: TRANSLATE] Weekly public reporting of buyback volume (optional UI) |                                   |

## [TODO: TRANSLATE] Token Allocation

| [TODO: TRANSLATE] Category                 | [TODO: TRANSLATE] % Allocation | [TODO: TRANSLATE] Notes                                                   |
| ------------------------------------------ | ------------------------------ | ------------------------------------------------------------------------- |
| [TODO: TRANSLATE] User Airdrop (Zap Score) | 40%                            | [TODO: TRANSLATE] Based on usage, referrals, social engagement            |
| [TODO: TRANSLATE] Team                     | 20%                            | [TODO: TRANSLATE] 1-year cliff + 2-year linear vesting                    |
| [TODO: TRANSLATE] Partners & Advisors      | 10%                            | [TODO: TRANSLATE] Includes incubators (1–2%), launchpads (1–2%), KOL pool |
| [TODO: TRANSLATE] DAO Treasury             | 20%                            | [TODO: TRANSLATE] Buybacks, incentive campaigns, governance               |
| [TODO: TRANSLATE] Liquidity Bootstrapping  | 10%                            | Uniswap/Aerodrome LP [TODO: TRANSLATE] seeding                            |

[TODO: TRANSLATE] Partner/Advisor tokens are vested based on contribution type, generally using a
6-month cliff + 12-month linear unlock, but flexible per case.

## [TODO: TRANSLATE] Zap Score-Based Airdrop

| [TODO: TRANSLATE] Metric            | [TODO: TRANSLATE] Weight | [TODO: TRANSLATE] Example |
| ----------------------------------- | ------------------------ | ------------------------- |
| [TODO: TRANSLATE] Zap-in Volume     | 40%                      |                           |
| [TODO: TRANSLATE] Zap-in Frequency  | 40%                      |                           |
| [TODO: TRANSLATE] Referrals         | 10%                      |                           |
| [TODO: TRANSLATE] Community Actions | 10%                      |                           |

[TODO: TRANSLATE] Zap Score is off-chain, tracked via backend, Notion or Sheets. Airdrop
distribution is staged, and partially locked to prevent instant dumping.

## [TODO: TRANSLATE] Tech Stack Overview

| [TODO: TRANSLATE] Function              | [TODO: TRANSLATE] Tool/Provider                           | [TODO: TRANSLATE] Notes |
| --------------------------------------- | --------------------------------------------------------- | ----------------------- |
| [TODO: TRANSLATE] Intent Infrastructure | Thirdweb/ZeroDev (EIP-7702 + Paymaster)                   |                         |
| [TODO: TRANSLATE] Token Infrastructure  | ThirdWeb + LayerZero (OFT)                                |                         |
| [TODO: TRANSLATE] Buyback Script        | Node.js + Uniswap SDK [TODO: TRANSLATE] or custom relayer |                         |
| [TODO: TRANSLATE] Score Tracking        | Notion / Airtable / Firebase                              |                         |
| [TODO: TRANSLATE] Airdrop Tools         | ThirdWeb SDK / Galxe / Airdrop.so                         |                         |
| [TODO: TRANSLATE] LPs & Launchpads      | Uniswap / Aerodrome / [TODO: TRANSLATE] Partnered IDO     |                         |

## [TODO: TRANSLATE] Launchpad & Partner Vesting

[TODO: TRANSLATE] Tokens allocated to launchpads or advisors follow a 6-month cliff + 12-month
linear vesting schedule. For example, if a launchpad receives 2,000,000 $ZAP:

- [TODO: TRANSLATE] Months 1–6: 0% unlocked
- [TODO: TRANSLATE] Month 7 onward: unlocks 1/12 per month (≈166,666 tokens per month)
- [TODO: TRANSLATE] Fully unlocked after month 18

[TODO: TRANSLATE] Vesting schedules are flexible and negotiated based on actual value contributed
(e.g. marketing push, liquidity support, advisory work).

## [TODO: TRANSLATE] Why This Model Works

| [TODO: TRANSLATE] Feature                | [TODO: TRANSLATE] Benefit                                          |
| ---------------------------------------- | ------------------------------------------------------------------ |
| [TODO: TRANSLATE] No staking             | [TODO: TRANSLATE] No contract risk, no passive yield dilution      |
| [TODO: TRANSLATE] Buyback-based          | [TODO: TRANSLATE] Price is backed by real usage & revenue          |
| [TODO: TRANSLATE] Fair Airdrop           | [TODO: TRANSLATE] Encourages real participation, not speculation   |
| [TODO: TRANSLATE] OFT design             | [TODO: TRANSLATE] Native cross-chain movement via LayerZero        |
| [TODO: TRANSLATE] Smart EOA wallet infra | [TODO: TRANSLATE] Seamless UX for end users, gas sponsorship ready |
