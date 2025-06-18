import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    { text: "What is Gyroscope?", link: "/tldr", icon: "", collapsible: false },
    { text: "Audit Reports", link: "/audit-reports.md", icon: "", collapsible: false },
    {
      text: "Pools",
      icon: "",
      collapsible: true,
      children: [
        { text: "Overview", link: "/pools/concentrated-liquidity-pools.md" },
        { text: "2-CLPs", link: "/pools/2-clps.md" },
        { text: "3-CLPs", link: "/pools/3-clps.md" },
        { text: "E-CLPs", link: "/pools/e-clps.md" },
        { text: "Dynamic CLPs", link: "/pools/dynamic-clps.md" },
        { text: "Rehype CLPs", link: "/pools/rehype-clps.md" },
        { text: "Technical documents", link: "/pools/technical-documents.md" },
      ],
    },
    {
      text: "Governance",
      icon: "",
      collapsible: true,
      children: [
        { text: "Overview", link: "/governance/overview.md" },
        {
          text: "How it works",
          link: "/governance/how-it-works/README.md",
          collapsible: true,
          children: [
            { text: "Voting Vaults", link: "/governance/how-it-works/voting-vaults/README.md", collapsible: true, children: 
              [
                    { text: "The Founding Member Vault", link: "/governance/how-it-works/voting-vaults/the-founding-member-vault.md" },
                    { text: "Councillor Vault", link: "/governance/how-it-works/voting-vaults/councillor-vault.md" },
                    { text: "Associated DAO Vault", link: "/governance/how-it-works/voting-vaults/associated-dao-vault.md" },
                    { text: "GYD LP Vault", link: "/governance/how-it-works/voting-vaults/gyd-lp-vault.md" },
                    { text: "GYFI Vault", link: "/governance/how-it-works/voting-vaults/gyfi-vault.md" },
                  ],
            },
            { text: "Action Tiering", link: "/governance/how-it-works/action-tiering.md" },
            { text: "On-chain proposals", link: "/governance/how-it-works/on-chain-proposals.md" },
            { text: "Vote delegation", link: "/governance/how-it-works/vote-delegation.md" },
            { text: "Conditional cashflows", link: "/governance/how-it-works/conditional-cashflows.md" },
            { text: "GYD Recovery Module", link: "/governance/how-it-works/gyd-recovery-module.md" },
            {
              text: "Optimistic Approval",
              link: "/governance/how-it-works/optimistic-approval/README.md",
              collapsible: true,
              children: [
                { text: "Emergency Recovery", link: "/governance/how-it-works/optimistic-approval/emergency-recovery.md" },
                { text: "Limiting Upgradeability", link: "/governance/how-it-works/optimistic-approval/limiting-upgradeability.md" },
              ],
            },
          ],
        },
        { text: "Governance process", link: "/governance/governance-process.md" },
        {
          text: "GYFI Tokenomics",
          link: "/governance/gyfi-tokenomics/README.md",
          collapsible: true,
          children: [
            { text: "Token Allocation", link: "/governance/gyfi-tokenomics/token-allocation.md" },
            { text: "Release schedules", link: "/governance/gyfi-tokenomics/release-schedules.md" },
            { text: "Eligibility", link: "/governance/gyfi-tokenomics/eligibility.md" },
          ],
        },
      ],
    },
    {
      text: "GYD",
      icon: "",
      collapsible: true,
      children: [
        { text: "Overview", link: "/gyd/readme.md" },
        {
          text: "How it works",
          link: "/gyd/how-it-works/README.md",
          collapsible: true,
          children: [
            { text: "Reserve design", link: "/gyd/how-it-works/reserve.md" },
            {
              text: "Autonomous pricing",
              link: "/gyd/how-it-works/autonomous-pricing/README.md",
              collapsible: true,
              children: [
                { text: "Dynamic Stability Mechanism", link: "/gyd/how-it-works/autonomous-pricing/pamm.md" },
                { text: "GYD Trading Pools", link: "/gyd/how-it-works/autonomous-pricing/samm.md" },
                { text: "Economic intuition", link: "/gyd/how-it-works/autonomous-pricing/economic-intuition.md" },
              ],
            },
            { text: "Reserve Safety Checks", link: "/gyd/how-it-works/reserve-safety-checks.md" },
            { text: "Complementary stability mechanisms", link: "/gyd/how-it-works/gyroscope-stability.md" },
            {
              text: "Oracles & price feeds",
              link: "/gyd/how-it-works/oracles/README.md",
              collapsible: true,
              children: [
                { text: "Consolidated price feed", link: "/gyd/how-it-works/oracles/consolidated-price-feed.md" },
                { text: "LP share pricing", link: "/gyd/how-it-works/oracles/lp-share-pricing.md" },
              ],
            },
            { text: "Risks", link: "/gyd/how-it-works/risks.md" },
            { text: "DSM error codes", link: "/gyd/how-it-works/dsm-error-codes.md" },
            { text: "Protocol fees", link: "/gyd/how-it-works/protocol-fees.md" },
          ],
        },
        {
          text: "sGYD",
          link: "/gyd/sgyd/README.md",
          collapsible: true,
          children: [
            { text: "Yield Emission Process", link: "/gyd/sgyd/yield-emission-process.md" },
            { text: "Security", link: "/gyd/sgyd/security.md" },
            { text: "Audit Report", link: "/gyd/sgyd/audit-report.md" },
            { text: "Code Repositories", link: "/gyd/sgyd/code-repositories.md" },
            { text: "Contract Addresses", link: "/deployed-contracts/README.md" },
            { text: "Supported Venues", link: "/gyd/sgyd/supported-venues.md" },
            { text: "sGYD Internals", link: "/gyd/sgyd/sgyd-internals.md" },
            { text: "Risks", link: "/gyd/sgyd/risks.md" },
          ],
        },
        { text: "Technical Documents", link: "/gyd/technical-documents.md" },
      ],
    },
    {
      text: "Deployed Contracts",
      icon: "",
      collapsible: true,
      children: [
            { text: "Bridged GYD", link: "/deployed-contracts/bridged-gyd.md" },
            { text: "GYFI", link: "/deployed-contracts/gyfi.md" },
            { text: "Pools", link: "/deployed-contracts/pools.md" },
            { text: "GYD Core", link: "/deployed-contracts/gyd-core.md" },
            {
              text: "Governance",
              link: "/deployed-contracts/governance/README.md",
              collapsible: true,
              children: [
                { text: "L1 Governance", link: "/deployed-contracts/governance/l1-governance.md" },
                { text: "L2 Governance", link: "/deployed-contracts/governance/l2-governance.md" },
              ],
            },
            { text: "Gyro Proto", link: "/deployed-contracts/contract-addresses.md" },
            { text: "Consolidated price feed", link: "/deployed-contracts/consolidated-price-feed.md" },
          ],
    },
    { text: "Official channels", link: "/official-channels.md", icon: "", collapsible: false },
    {
      text: "FAQ",
      link: "/faq/README.md",
      collapsible: false,
    },
    { text: "Press kit", link: "/press-kit.md", icon: "", collapsible: false },
    { text: "Learn more", link: "/learn-more.md", icon: "", collapsible: false },
    { text: "Licensing", link: "/licensing.md", icon: "", collapsible: false },
  ],
});