// October 2025 timeline data
export const octoberData = [
  {
    date: "October 2, 2025",
    title: "IBM Releases Granite 4.0 with Hybrid Architecture for Efficient AI",
    description:
      "IBM launched its open-source Granite 4.0 models under Apache 2.0 license, featuring a groundbreaking hybrid Mamba-Transformer architecture that significantly reduces memory requirements and makes high-performance AI more accessible on cheaper hardware. The models use Mamba-2 and Transformer layers in a 9:1 ratio, achieving over 70% reduction in GPU memory requirements (specifically 72% for Granite 4.0 Tiny). Model variants include Granite-4.0-H-Small (32B total/9B active parameters), Granite-4.0-H-Tiny (7B total/1B active), and Granite-4.0-H-Micro (3B dense), all trained on a 22-trillion-token corpus from enterprise datasets with sequences up to 512,000 tokens. IBM's models are the world's first open models with ISO 42001 certification, available on Hugging Face, IBM watsonx.ai, Dell Technologies, Docker Hub, Kaggle, NVIDIA NIM, Ollama, and Replicate.",
    category: "Model Releases",
    company: "IBM",
    icon: "model",
    month: "October 2025",
  },
  {
    date: "October 6, 2025",
    title: "Samsung's Tiny 7M-Parameter Model Outperforms AI Giants in Reasoning",
    description:
      "Samsung researchers led by Alexia Jolicoeur-Martineau developed the Tiny Recursive Model (TRM), a 7-million-parameter model that achieved state-of-the-art results on complex reasoning benchmarks, challenging the 'bigger is better' AI scaling paradigm. The model outperformed competitors 10,000x larger with less than 0.01% of their parameters, achieving 44.6-45% accuracy on ARC-AGI-1 (vs. Gemini 2.5 Pro: 37%), 7.8-8% on ARC-AGI-2 (vs. Gemini 2.5 Pro: 4.9%), 87.4% on Sudoku-Extreme (new state-of-the-art record), and 85.3% on Maze-Hard. The model was trained for under $500 using 4 NVIDIA H100 GPUs, published as 'Less is More: Recursive Reasoning with Tiny Networks' (arXiv:2510.04871), and released on GitHub under MIT License at SamsungSAILMontreal/TinyRecursiveModels, making it commercially viable.",
    category: "Research Breakthroughs",
    company: "Samsung",
    icon: "research",
    month: "October 2025",
  },
  {
    date: "October 6, 2025",
    title: "AMD and OpenAI Announce Massive GPU Partnership Challenging Nvidia",
    description:
      "OpenAI committed to purchasing 6 gigawatts of AMD Instinct GPUs in a multi-billion dollar deal (described as 'tens of billions of dollars' over five years) that includes warrants for up to 160 million shares of AMD common stock at $0.01 per share, potentially giving OpenAI approximately 10% ownership if fully exercised. The first 1 gigawatt deployment of AMD Instinct MI450 GPUs begins in the second half of 2026. Warrant vesting is tied to deployment milestones (scaling from 1 GW to 6 GW) AND AMD achieving certain share-price targets (escalating up to $600 per share for final tranche). AMD stock soared 23.71% on the announcement day, adding $63.4 billion to market valuation. The deal diversifies the AI hardware market and is in addition to (not replacing) OpenAI's existing Nvidia partnerships.",
    category: "Corporate Partnerships",
    company: "AMD / OpenAI",
    icon: "partnership",
    month: "October 2025",
  },
  {
    date: "October 6, 2025",
    title: "OpenAI Transforms ChatGPT into an App Platform at DevDay 2025",
    description:
      "At DevDay 2025 in San Francisco with 1,500+ developers, OpenAI unveiled a comprehensive platform transformation positioning ChatGPT as a new operating system. The company launched an Apps SDK with integrated apps from Canva, Spotify, Zillow, Figma, and Booking.com; released AgentKit, a full IDE featuring Agent Builder visual canvas, ChatKit, Guardrails, and Evals; and announced new GPT-5 Pro and Sora 2 APIs. GPT-5 Pro is priced at $15/M input tokens and $120/M output tokens with 400K context window. ChatGPT head Nick Turley stated: 'It's not inconceivable to me that over time, you perceive ChatGPT to be a type of operating system.' The platform is built on Model Context Protocol (MCP), with ChatGPT now serving 800 million weekly active users. OpenAI also released new cost-effective models including gpt-realtime-mini (70% cheaper) and announced a fireside chat with Jony Ive.",
    category: "Product Launches",
    company: "OpenAI",
    icon: "product",
    month: "October 2025",
  },
  {
    date: "October 7, 2025",
    title: "Google Releases Gemini Model for Direct UI Control and Automation",
    description:
      "Google released Gemini 2.5 Computer Use, a specialized model built on Gemini 2.5 Pro that allows AI agents to directly control web and mobile interfaces by simulating human clicks and typing, setting a new standard for UI automation. Available in public preview via Gemini API, Google AI Studio, and Vertex AI, the model returns function calls like click_at, type_text_at, and drag_and_drop. It outperforms competitors with lower latency on multiple benchmarks: Online-Mind2Web (Browserbase): 65.7% vs. Claude Sonnet 4 (61.0%) vs. OpenAI Agent (44.3%); WebVoyager (Browserbase): 79.9% vs. Claude Sonnet 4 (69.4%) vs. OpenAI Agent (61.0%). The model is primarily optimized for web browsers with strong promise for mobile (AndroidWorld benchmark), though not yet optimized for desktop OS-level control. It features built-in safety training for three key risk categories plus external safety service, with demo environment available via Browserbase.",
    category: "Model Releases",
    company: "Google",
    icon: "model",
    month: "October 2025",
  },
  {
    date: "October 7, 2025",
    title: "Nvidia Invests $2 Billion in xAI as Part of $20 Billion Funding Round",
    description:
      "Nvidia invested up to $2 billion in Elon Musk's xAI as part of a $20 billion funding round (approximately $7.5 billion in equity and up to $12.5 billion in debt), with the deal tied to xAI's purchase of Nvidia GPUs in a novel circular financing model. The financing is structured through a special purpose vehicle (SPV) that will purchase Nvidia GPUs and rent them to xAI for its Colossus 2 project in Memphis under a five-year lease term. Other investors include Valor Capital (leading the equity raise), Apollo Global Management, and Diameter Capital Partners. Jensen Huang confirmed the investment on October 8, 2025, stating his only regret was 'not giving them more money.' The deal continues the trend of chipmakers financing their largest AI customers, with xAI burning through approximately $1 billion per month on infrastructure buildout.",
    category: "Corporate Partnerships",
    company: "Nvidia / xAI",
    icon: "partnership",
    month: "October 2025",
  },
  {
    date: "October 9, 2025",
    title: "Study Reveals LLMs Can Be Backdoored with Just 250 Malicious Documents",
    description:
      "A joint study by Anthropic, the UK AI Safety Institute, and the Alan Turing Institute found that large language models can be compromised with just 250 malicious documents (approximately 420,000 tokens, or just 0.00016% of total training data for a 13B parameter model), highlighting a critical and scalable security risk. The research challenges the assumption that attackers need to control a percentage of training data, demonstrating they may just need a small, fixed amount. The study tested models ranging from 600M to 13B parameters, with effects observed across both commercial and open models, including Llama 3.1, GPT-3.5 Turbo, and Pythia. Important caveat: The study focused on a narrow backdoor (producing gibberish text) that is unlikely to pose significant risks in frontier models, but demonstrates that data-poisoning attacks may be more practical than previously believed.",
    category: "AI Ethics Safety",
    company: "Anthropic / UK Government",
    icon: "ethics",
    month: "October 2025",
  },
  {
    date: "October 9, 2025",
    title: "China Restricts Rare Earth Exports in Response to US Chip Controls",
    description:
      "China's Ministry of Commerce (MOFCOM) announced broad new export controls in six proclamations, adding five rare-earth elements (samarium, gadolinium, lutetium, europium, and ytterbium) to the controlled list, bringing the total to 12 of 17 rare-earth metals essential for semiconductors. For the first time, China applied the foreign direct product rule (FDPR), requiring foreign companies to obtain export licenses if rare earths processed in China make up as little as 0.1% of their products' value. Starting December 1, 2025, companies with any affiliation to foreign militaries (including the US) will be largely denied export licenses. Controls on Chinese-origin rare earth items became effective immediately on October 9, 2025. China controls about 70% of global rare earth supply and more than 90% of world processing capacity, posing a major risk to the global AI hardware supply chain. The announcement came one day before President Trump canceled his planned meeting with President Xi Jinping at the APEC summit in South Korea.",
    category: "Policy Regulation",
    company: "China",
    icon: "policy",
    month: "October 2025",
  },
  {
    date: "October 9, 2025",
    title: "Figure AI Unveils Figure 03 Humanoid Robot Designed for Mass Production",
    description:
      "Figure AI debuted its Figure 03 humanoid robot, designed for mass manufacturing and home use with advanced manipulation skills, though full autonomy for home tasks remains a 2026 goal. The robot features the Helix AI vision-language-action system, new tactile sensors that detect forces as small as 3 grams, wireless charging through feet at 2kW, and 9% less mass than Figure 02. Designed for high-volume manufacturing with targets of 12,000 units/year initially, scaling to 100,000 units over four years, with a target retail price under $20,000 at high volumes. The robot can fold clothes and load dishwashers, but still requires human assistance (e.g., a human needs to start the wash cycle and help if it drops something). CEO Brett Adcock admits they're 'not there yet' for fully autonomous home use and hopes to achieve it by 2026. Limited partner testing begins first, then broader availability in 2026.",
    category: "Robotics Automation",
    company: "Figure AI",
    icon: "robotics",
    month: "October 2025",
  },
  {
    date: "October 9, 2025",
    title: "Google Launches Gemini Enterprise to Automate Workplace Tasks",
    description:
      "Google announced Gemini Enterprise as 'the new front door for AI in the workplace,' a unified AI platform for businesses integrating Gemini models with a no-code orchestration workbench and pre-built/custom AI agents. The platform features packaged connectors to Microsoft 365/SharePoint and works seamlessly in Microsoft 365 environments, with pricing starting at $30/user/month for Gemini Enterprise Standard/Plus. Early adopters include Figma, Klarna, Gordon Food Service, Macquarie Bank, and Virgin Voyages. On October 16, 2025, the Salesforce-Google partnership expanded to integrate Gemini models with Agentforce 360, and Google announced a new Data Science Agent in preview. The platform is designed for agentic AI and workplace automation, enabling businesses to create custom AI agents without coding expertise.",
    category: "Product Launches",
    company: "Google",
    icon: "product",
    month: "October 2025",
  },
  {
    date: "October 9, 2025",
    title: "Anthropic Extends Claude Code with Plugin System for Developers",
    description:
      "Anthropic launched a plugin system for its coding agent in public beta, allowing developers to install and share custom slash commands, subagents, MCP servers, and hooks, making the platform more modular and collaborative. The decentralized marketplace system allows anyone to create and host marketplaces from Git repositories, differentiating from centralized app store approaches. Install with the /plugin command, which works in both terminal and VS Code. Popular community marketplaces include Dan Ávila's DevOps/documentation plugins and Seth Hobson's 80+ specialized sub-agents. Plugins can be toggled on/off to manage system complexity, with 226+ plugins available in the community hub. The system enables developers to package and distribute custom functionality, creating an ecosystem around Claude Code similar to VS Code extensions.",
    category: "Product Launches",
    company: "Anthropic",
    icon: "product",
    month: "October 2025",
  },
  {
    date: "October 10, 2025",
    title: "OpenAI Faces Legal Scrutiny Over Copyright and Intimidation Claims",
    description:
      "OpenAI came under intense legal scrutiny on multiple fronts as Bloomberg Law reported that the company's failure to shield internal communications about pirated books threatens to expose it to billions in damages, and Nathan Calvin (General Counsel of Encode) publicly disclosed via viral X/Twitter thread that OpenAI served subpoenas in August 2025 to him and at least seven nonprofits critical of OpenAI. The US District Court for the Southern District of New York ordered OpenAI to turn over most employee communications about deleting a dataset containing pirated books. Damages could reach $150,000 per work if willful infringement is proven (up from $750 for standard infringement), with tens of millions of books and news articles at issue across the dozen copyright cases consolidated in Manhattan federal court. The subpoenas demanded all private communications about California's SB 53 (AI transparency law). Encode, a small 3-person nonprofit, had filed an amicus brief supporting some of Elon Musk's arguments in his lawsuit against OpenAI. OpenAI's Head of Mission Alignment, Joshua Achiam, publicly criticized the subpoenas, stating 'At what is possibly a risk to my whole career I will say: this doesn't seem great.' On October 30, 2025, a Magistrate granted a motion to consolidate the Authors Guild case with the NY Times v. Microsoft & OpenAI case.",
    category: "Policy Regulation",
    company: "OpenAI",
    icon: "policy",
    month: "October 2025",
  },
  {
    date: "October 11, 2025",
    title: "Meta Hires Thinking Machines Lab Co-Founder in Major Talent Acquisition",
    description:
      "Meta hired Andrew Tulloch, co-founder of the high-profile startup Thinking Machines Lab (led by former OpenAI CTO Mira Murati), highlighting the intense and costly talent war for elite AI researchers among top tech companies. After Meta's Mark Zuckerberg failed to acquire Thinking Machines Lab entirely, he reportedly offered Tulloch a compensation package potentially worth up to $1.5 billion over at least six years. Tulloch announced his departure to employees on Friday, October 11, 2025, with a Thinking Machines Lab spokesperson confirming he departed to 'pursue a different path for personal reasons.' Tulloch previously worked at both OpenAI and Facebook AI Research, making this a return to Meta. The acquisition represents one of the most expensive individual talent acquisitions in AI history and underscores the strategic importance of securing top AI researchers.",
    category: "Corporate Partnerships",
    company: "Meta / Thinking Machines Lab",
    icon: "partnership",
    month: "October 2025",
  },
];

export default octoberData;
