import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "tldr: What is Gyroscope",
      link: "/",
      icon: "",
      collapsible: false,
    },
    {
      text: "Audit Reports",
      link: "/audit-reports",
      icon: "",
      collapsible: false,
    },
    {
      text: "POOLS",
      icon: "",
      collapsible: false,
      children: [
        { text: "Overview", link: "/pools/overview" },
        { text: "2-CLPs", link: "/pools/2-clps" },
        { text: "3-CLPs", link: "/pools/3-clps" },
        { text: "E-CLPs", link: "/pools/e-clps" },
        { text: "Dynamic CLPs", link: "/pools/dynamic-clps" },
        { text: "Rehype CLPs", link: "/pools/rehype-clps" },
        { text: "Technical documents", link: "/pools/technical-documents" },
      ],
    },
    {
      text: "GOVERNANCE",
      icon: "",
      collapsible: false,
      children: [
        { text: "Overview", link: "/governance/overview" },
        { text: "How it works", link: "/governance/how-it-works" },
        { text: "Governance process", link: "/governance/process" },
        { text: "GYFI Tokenomics", link: "/governance/gyfi-tokenomics" },
      ],
    },
    {
      text: "GYD",
      icon: "",
      collapsible: false,
      children: [
        { text: "Overview", link: "/gyd/overview" },
        { text: "How it works", link: "/gyd/how-it-works" },
        { text: "sGYD", link: "/gyd/sgyd" },
        { text: "Technical Documents", link: "/gyd/technical-documents" },
      ],
    },
    {
      text: "DEPLOYED CONTRACTS",
      icon: "",
      collapsible: false,
      children: [
        { text: "Contract addresses", link: "/contracts/addresses" },
        { text: "Official channels", link: "/contracts/official-channels" },
        { text: "FAQ", link: "/contracts/faq" },
        { text: "Press kit", link: "/contracts/press-kit" },
        { text: "Learn more", link: "/contracts/learn-more" },
        { text: "Licensing", link: "/contracts/licensing" },
      ],
    },
  ],
});