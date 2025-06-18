---
title: FAQ
---

## FAQ

## How is Gyroscope different?

Gyro is designed to be DeFi's all-weather currency. Gyro is designed to uniquely address the following major challenges for non-custodial stablecoins.

1. **Scalability**: the ability to meet high levels of demand in a sustainable way. While we like over-collateralized stablecoins like Dai, they rely on the leverage-long ETH market to scale, which has run into issues and likely will again.
2. **Safe during crashes**: the ability to maintain a peg within a tight band during market turbulence without invoking trust assumptions (e.g., tethering to USDC);
3. **Aligned governance**: having a governance mechanism that incentivizes the long-term health of the stablecoin, rather than short-term profit.

We expand on these ideas in a three part series: [Part I](https://medium.com/gyroscope-protocol/gyroscope-is-different-part-1-72dcb8c303a4), [Part II](https://medium.com/gyroscope-protocol/gyroscope-is-different-part-2-algorithmic-stablecoins-78c53c005e89),  Part III (coming soon).

| In comparison to                         | Gyroscope's design improvement                                                                                                                         |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Meta-Stablecoins                         | Better risk segregation: [Part I](https://medium.com/gyroscope-protocol/gyroscope-is-different-part-1-72dcb8c303a4)                                    |
| Algorithmic stablecoins                  | Resilience over confidence crises: [Part II](https://medium.com/gyroscope-protocol/gyroscope-is-different-part-2-algorithmic-stablecoins-78c53c005e89) |
| Custodial and leverage based stablecoins | Part III (coming soon)                                                                                                                                 |

### **Meta-Stablecoins** <a href="#e55d" id="e55d"></a>

Meta-stablecoins are stablecoins that are composed of a basket of other stablecoins. The idea is that the basket diversifies the risks of the individual stablecoins. This can create a new type of risk for the stablecoin, called composability risk: the risk that a problem in one system can cascade into other systems. For more discussion, see our [article here](https://medium.com/gyroscope-protocol/gyroscope-is-different-part-1-72dcb8c303a4). Gyroscope’s all-weather reserve is designed to be resistant to these composability risks.

### Algorithmic Stablecoins

Algorithmic stablecoins aim to maintain a stable price by automatically adapting the stablecoin supply to meet demand. Algorithmic stablecoins up until this point have tried to address the scalability challenge in a flawed way: by trying to produce as many stablecoins for as little collateral as possible. For instance, the Basis type designs try to maintain stablecoins with no collateral. These and related seigniorage shares designs, based on "endogenous collateral", rely on a sense of self-fulfilling expectations about the system or its future cashflows. However, these cashflows are very fragile and can disappear in a crisis. Other newer attempts lie somewhere in between these types of designs and full reserve designs.

This is flawed because it is unnecessary for scalability and can come at the expense of the system. To see why, consider that in any functioning stablecoin, someone always buys newly minted stablecoins for $1. A key question is where this $1 goes. In under-collateralized designs today, much of this is paid out to protocol stakeholders at the expense of system health.

Gyroscope is not like those algorithmic stablecoins. Instead, all of every $1 paid for a new stablecoin goes into a reserve that aims to be 100% reserved. This is as scalable as other algorithmic designs, it just diverts the seigniorage revenue to the right places.

For further discussion of how Gyroscope compares to algorithmic stablecoins, including resistance to bank runs, read our [article here](https://medium.com/gyroscope-protocol/gyroscope-is-different-part-2-algorithmic-stablecoins-78c53c005e89).

<figure><img src="../assets/Algorithmic Stablecoins Confidence Crisis Flow Chart.png" alt="Critical design choices for stablecoins"><figcaption><p>Critical design choices for stablecoins</p></figcaption></figure>

### Custodial and Leverage-based Stablecoins

Coming soon. Read ahead in our [Stablecoins 2.0](https://arxiv.org/abs/2006.12388) paper

## Why is it called Gyroscope?

[Gyroscope](http://gyro.finance/) is a new stablecoin design that, like a physical gyroscope, remains stable as the surrounding environment changes. Its reserve of capital acts like a spinning disk, maintaining its peg target.

::: info
For a demonstration on how a (physical) Gyroscope keeps itself stable in various environments [see here](https://www.youtube.com/watch?v=p9zhP9Bnx-k).
:::

Gyroscope experiences “friction” if assets in the reserve lose value and users swap stablecoins for the underlying reserve assets. Drawing on the reserves makes the stablecoin “wobbly” as the spinning disk slows, similar to a physical gyroscope. But crucially, also like a physical gyroscope, it can be “spun” back up, with high reserve yields and inflows to the stablecoin boosting the reserve.

## How scalable is Gyroscope?

Gyroscope is potentially indefinitely scalable. Anyone can always turn \~$1 worth of assets into a new Gyro stablecoin. The Gyroscope mechanism is not constrained by the scalability of any other systems as the reserve is designed to evolve as the DeFi space evolves. This compares, for instance, with stablecoins like Dai, which can only scale with the size of the leverage-long market. Gyroscope is as scalable as algorithmic designs, except it also has sound economics. With highly liquid reserve assets, it is also as scalable as USDC.

At the beginning, the Gyroscope reserve will likely consist mostly of a basket of other stablecoins. This is especially important early on when the scale and usage of the system starts small. Naturally, as Gyroscope grows, it may test the scalability of other stablecoins in the basket, like Dai. This is not an issue for Gyroscope, however, as the system will shift the reserve portfolio toward more scalable assets like ETH. This is a unique ability of stablecoin mechanisms like Gyroscope, which include a primary market mechanism designed to maintain stability properties, though less strong, even if the reserve value is shocked below 100%. At large scale, the system fundamentals are also stronger, which makes coordination on the peg more stable even with volatile reserve assets like ETH.

Throughout the scaling process, Gyroscope is designed to maintain the strongest possible system. While the reserve collateral level could fluctuate long-term with a lot of ETH collateral, the system puts all resources toward maintaining reserve health. For instance, every $1 that someone pays for a newly minted Gyro stablecoins goes completely to the reserve, unlike algorithmic stablecoins which siphon this value to the pockets of stakeholders. Instead, Gyroscope stakeholders have incentives aligned with long-term reserve health.

##  What are use cases of Gyroscope?

### Trading Hub Asset

The concentrated liquidity in the GYD Trading Pools, made possible by [Gyroscope's Dynamic Stability Mechanism](../gyd/how-it-works/autonomous-pricing/pamm.md) (DSM) design, makes Gyro stablecoin liquidity exceptional in the stablecoin space.

&#x20;For this reason, a natural use case of Gyroscope is as a trading hub asset. Like USDT predominantly today, many low slippage trades can be made possible by connecting through GYD Trading Pools within the Balancer v2 trading ecosystem, where the first GYD Trading Pools will be deployed. Early liquidity provision on the GYD Trading Pools at launch can be bootstrapped using liquidity mining.

<figure><img src="../assets/SAMM and Reserve Pools Graphic.png" alt="Stylized visualization of the Gyroscope stablecoin trading network"><figcaption><p>Stylized visualization of the Gyroscope stablecoin trading network</p></figcaption></figure>

### More Efficient Collateral for DeFi

The exceptional Gyro stablecoin liquidity and stability also makes Gyro stablecoins an ideal collateral for use in other DeFi protocols. For instance, protocols with liquidations can incorporate the observable DSM redemption price as a floor on the liquidation value when adapting risk parameters. Further, the boosted GYD trading pool liquidity means that liquidations are likely to be settled at much better rates. Altogether, this means that collateral can be used more efficiently.

While the system is healthy and the reserve is generating good yield, parts of that yield may be passed on to Gyro stablecoin holders in the form of an interest rate (like Dai's DSR).

### Bootstrapping Economic Usage

While speculative usage of stablecoins is the predominant use case today, the long-term future of a successful stablecoin is in real economic usage (e.g., as a currency). The following examples provide theoretical use cases:

* Firstly, crypto-native businesses will be able to use Gyroscope for treasury management, without needing to rely entirely on banking infrastructure of other stablecoins with centralization risks.
* Secondly, a non-custodial, censorship resistant stablecoin will be useful for households in unstable markets and geographic regions. It provides a means for value to be stored, offering a savings alternative with a reduced prospect of sharp devaluations, and without restrictions on the movement of capital or confiscation of funds.
* Lastly, one mechanism in the DAO toolkit is a universal basic income (UBI) scheme, which can help to bootstrap early economic usage. The idea is that, through such a program, if you can prove that you're a unique person, you would be able to earn a regular allotment of Gyro stablecoins delivered on a Layer-2 (no high transaction fees!) that can be used in various ways. This serves to get first adopters using Gyroscope, regardless of whether they are able to provide capital of the size needed for liquidity farming. This could be supported by an early bootstrapping of the protocol reserve.

### Vaults: Robust Yield Automation

Separate from Gyro stablecoins, investors can also choose to provide liquidity directly to the vaults built for the Gyroscope reserve. These vaults will automate various yield strategies in robust and secure ways. For instance, long-term vault strategies will be non-upgradeable within a given vault. And other vault strategies will be secured from governance risks using the Gyroscope governance mechanisms. Both serve to make governance attacks impossible or unprofitable.

## What are the academic roots of Gyroscope?

::: info
> **Presentation at IC3 Blockchain Camp on stablecoins:**  
> [https://www.youtube.com/watch?v=GCxRPwvHPIM&feature=emb_imp_woyt](https://www.youtube.com/watch?v=GCxRPwvHPIM&feature=emb_imp_woyt)
>
> **Presentation at DevCon VI on the Dynamic Stability Mechanism:**  
> [https://www.youtube.com/watch?v=3Yw2ASIBRgw&t=1s&ab_channel=EthereumFoundation](https://www.youtube.com/watch?v=3Yw2ASIBRgw&t=1s&ab_channel=EthereumFoundation)

:::

::: info
> **Publications by the core team, FTL Labs**
>
> * Ariah Klages-Mundt: [https://scholar.google.com/citations?user=mXzhSMQAAAAJ](https://scholar.google.com/citations?user=mXzhSMQAAAAJ)
> * Lewis Gudgeon: [https://scholar.google.com/citations?user=U5XZlvoAAAAJ](https://scholar.google.com/citations?user=U5XZlvoAAAAJ)
> * Daniel Perez: [https://scholar.google.com/citations?user=W2XsCqwAAAAJ](https://scholar.google.com/citations?user=W2XsCqwAAAAJ)
> * Steffen Schuldenzucker: [https://scholar.google.com/citations?user=NiUrvJYAAAAJ&hl](https://scholar.google.com/citations?user=NiUrvJYAAAAJ&hl)
> * Jonas Klemm: [https://scholar.google.com/citations?user=9Wv2lTMAAAAJ](https://scholar.google.com/citations?user=9Wv2lTMAAAAJ)
:::

## Is GYFI the only governance token for the project?

YES. GYRO on BSC is not affiliated with gyro.finance.

## Is there a Gyroscope whitepaper?

Yes, however, the whitepaper is no longer up-to-date.&#x20;

The original whitepaper is still accessible here: [https://github.com/gyrostable/gyroscope-landing/tree/master/pdfs](https://github.com/gyrostable/gyroscope-landing/tree/master/pdfs)

