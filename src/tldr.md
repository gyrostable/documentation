---
title: What is Gyroscope
---

## Disclaimer

These documents are for general information purposes only. They does not constitute investment advice or a recommendation or solicitation to buy or sell any investment and should not be used in the evaluation of the merits of making any investment decision. They should not be relied upon for accounting, legal or tax advice or investment recommendations. These papers may contain experimental code and technical designs that may not be ready for general use. These papers reflects the current opinions of the authors and is not made on behalf of Superluminal Labs or its affiliates and does not necessarily reflect the opinions of Superluminal Labs, its affiliates or individuals associated with Superluminal Labs. The opinions reflected herein are subject to change without being updated.


## What is Gyroscope?

Gyroscope is a non-custodial liquidity engine that combines more efficient passive concentrated liquidity and stablecoin yield.

Its governance token is GYFI.

Gyroscope’s novel revenue model captures both high organic swap fees from volatile pairs and stablecoin yields, unlocking efficiencies that set it apart from traditional DEX or stablecoin models.&#x20;

This is a new revenue playbook. The data, available [here](https://dune.com/gyro_finance/gyroscope#total-ecosystem-protocols-revenue), speaks for itself.

## Pools

Gyroscope E-CLPs, standing for elliptic concentrated liquidity pools, are a novel liquidity pool type that enables asymmetric concentration of liquidity. E-CLPs focalize trading of assets along the curve of an ellipse.

E-CLPs have several advantages over other liquidity pool types:

* E-CLPs are usually at least 75% more efficient than Stableswap liquidity pools. They greatly improve capital efficiency for liquidity providers (LPs).
* E-CLPs are highly customizable. They allow a further degree of flexibility as liquidity no longer needs to be spread evenly within uniform price bounds.
* E-CLPs don’t require active position management and adapt automatically to yield-accruing assets. The pool deployer takes on responsibility of calibrating and establishing trading parameters upon launch.

E-CLPs package concentrated liquidity into a customizable and passive form.

## Gyro Dollars

Gyroscope’s stablecoin Gyro Dollars (GYD) is designed to be superliquid and all-weather. It is built to be fully backed by a basket of assets with fundamental innovations in risk control built in at the protocol level. GYD’s innovations aim to segment and contain risks from across the asset space and include:

* Automated risk diversification rules,
* Optimized minting and redemption bonding curves that guide the protocol on how to use reserve assets to maintain stability,
* A new resilient oracle and circuit breaker system that handles stress.

GYD is designed to protect against the main risks of holding stablecoins, placing risk control at a high degree of automation in a decentralized, non-custodial way. It serves as a principled risk control layer for stablecoin holders. GYD, which aims to form the safest on-chain stable asset, implements these design principles.

## GYD and E-CLPs

GYD and E-CLPs are complementary. While E-CLPs have use cases outside of GYD, they also integrate closely together.

GYD and E-CLPs together aim to achieve:

* Enhanced stability for GYD: optimized E-CLP trading pools for GYD provide more liquidity at the prices that matter around the peg price. This is backed up by support from the protocol’s mint and redemption mechanism.
* A more efficient collateral class of LP shares for backing GYD. E-CLPs are used as a yield strategy for reserve assets.

Longer term, LP positions in LST E-CLPs could be integrated into a leverage mechanism for GYD. This would allow GYD to be borrowed against the highly efficient yield-bearing collateral type arising from E-CLPs.

Lastly, GYD is launched with a special AMO pools, implemented at the protocol level, which help to bootstrap GYD liquidity in early stages and new markets. The bootstrapping pool provides a pre-set amount of GYD that can be issued against yield-bearing stablecoins as a reserve asset by swapping through the pool. This is provided as a more straightforward alternative to minting directly against reserve assets, which is a complex process expected to be undertaken by sophisticated market makers in the future.


