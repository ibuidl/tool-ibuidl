export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "加密货币最全导航",
  description: "基于 Next.js 的加密货币导航",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/0xkkdemian",
    github: "https://github.com/chuhemiao/next-web-nav",
  },
}

export interface NavLink {
  /** 站点图标 */
  icon?: string
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc?: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData: NavData[] = [
  {
    title: "常用工具",
    items: [
      {
        icon: "https://crypto-fundraising.info/wp-content/themes/ico/img/cf-logo.svg",
        title: "Crypto Fundraising",
        desc: "加密货币融资平台",
        link: "https://crypto-fundraising.info/",
      },
      {
        icon: "/icons/cmc.jpeg",
        title: "CMC",
        desc: "最大的加密资产价格跟踪网站",
        link: "https://coinmarketcap.com/",
      },
      {
        icon: "/icons/tree.jpg",
        title: "Tree of alpha",
        desc: "最快的加密信息索引平台",
        link: "https://news.treeofalpha.com/",
      },
      {
        icon: "/icons/alternative-me-logo.png",
        title: "恐惧与贪婪指数",
        desc: "历史悠久的加密指数",
        link: "https://alternative.me/crypto/fear-and-greed-index/",
      },
      {
        icon: "/icons/artemis.jpeg",
        title: "公链的链上日活数据",
        desc: "ETH, BTC, SOL, SUI, NEAR等公链的活跃地址和钱包",
        link: "https://app.artemis.xyz/chains",
      },
      {
        icon: "/icons/theblock.jpeg",
        title: "比特币期货期权",
        desc: "稳定币，合约链上交易数据平台",
        link: "https://www.theblock.co/data/crypto-markets/spot",
      },
      {
        icon: "/icons/defillama.jpeg",
        title: "Defillama",
        desc: "Defi数据大全",
        link: "https://defillama.com/",
      },
      {
        icon: "/icons/dappradar.jpeg",
        title: "dappradar",
        desc: "dapp数据大全，游戏，NFT，热门合约等",
        link: "https://dappradar.com/rankings",
      },
    ],
  },

  {
    title: "链上数据",
    items: [
      {
        icon: "/icons/artemis.jpeg",
        title: "公链的链上日活数据",
        desc: "ETH, BTC, SOL, SUI, NEAR等公链的活跃地址和钱包",
        link: "https://app.artemis.xyz/chains",
      },
      {
        icon: "/icons/vettafi.jpeg",
        title: "加密货币的ETF数据",
        desc: "美股比特币ETF以及合约期权",
        link: "https://etfdb.com/themes/blockchain-etfs/",
      },
      {
        icon: "/icons/growthepie.jpeg",
        title: "Layer2的数据分析平台",
        desc: "ETH生态L2的基本面和区块空间分析。一个是公共基金扶持的项目。",
        link: "https://www.growthepie.xyz/",
      },
      {
        icon: "/icons/geckoterminal.png",
        title: "geckoterminal",
        desc: "EVM和Layer2链上数据",
        link: "https://www.geckoterminal.com/",
      },
      {
        icon: "/icons/coingecko.jpeg",
        title: "加密货币数据追踪",
        desc: "和CMC相比，coingecko会细分更多领域和标签",
        link: "https://www.coingecko.com/",
      },
      {
        icon: "/icons/dune.jpeg",
        title: "Dune的数据面板",
        desc: "ETH2.0的质押和重新质押数据",
        link: "https://dune.com/hildobby/eth2-staking",
      },
      {
        icon: "/icons/nansen.jpeg",
        title: "Nansen ai",
        desc: "基于AI的数据平台，用来寻找alpha和热门合约等",
        link: "https://app.nansen.ai/",
      },
      {
        icon: "/icons/binance.jpeg",
        title: "币安研究报告",
        desc: "每个月，季度，热点项目币安都会出一些研究报告",
        link: "https://www.binance.com/en/research/analysis",
      },
      {
        icon: "/icons/tradingview.jpeg",
        title: "tradingview",
        desc: "加密货币K线看盘最佳工具",
        link: "https://www.tradingview.com/symbols/BTCUSD/#community",
      },
      {
        icon: "/icons/cryptoslam.jpeg",
        title: "cryptoslam",
        desc: "NFT链上数据",
        link: "https://www.cryptoslam.io/",
      },
      {
        icon: "/icons/cryptoslam.jpeg",
        title: "cryptofees",
        desc: "加密货币每日费用排行",
        link: "https://cryptofees.info/",
      },
      {
        icon: "/icons/cryptoslam.jpeg",
        title: "ethburned",
        desc: "ETH的销毁数据，自2.0以来",
        link: "https://ethburned.info/",
      },
      {
        icon: "/icons/tokenlock.jpeg",
        title: "代币解锁数据",
        desc: "最全的代币解锁数据，订阅可以获得每月的解锁状态",
        link: "https://token.unlocks.app/",
      },

      {
        icon: "/icons/coinglass.jpeg",
        title: "加密货币合约数据",
        desc: "加密衍生品数据分析平台，包含比特币期权、交易所资金费率等",
        link: "https://www.coinglass.com/zh",
      },
    ],
  },
  {
    title: "硬件钱包",
    items: [
      {
        icon: "/icons/coldcard.jpeg",
        title: "Coldcard",
        desc: "超级安全的比特币硬件钱包之一",
        link: "https://coldcard.com/",
      },
      {
        icon: "/icons/safepal.png",
        title: "safepal",
        desc: "支持多种加密货币的硬件钱包",
        link: "https://store.safepal.com/safepal-s1-hardware-wallet.html",
      },
    ],
  },
  {
    title: "交易所",
    items: [
      {
        icon: "/icons/binance.jpeg",
        title: "Binance - 币安",
        desc: "全球最大最广泛的加密货币交易所",
        link: "https://accounts.binance.com/en/register?ref=MKOOSEO4",
      },
      {
        icon: "/icons/okx.jpeg",
        title: "Okx",
        desc: "支持多种加密货币的硬件钱包",
        link: "https://www.okx.com/join/1871789",
      },
      {
        icon: "/icons/coinbase.png",
        title: "Coinbase Pro",
        desc: "合规的加密货币交易所",
        link: "https://www.coinbase.com/",
      },
    ],
  },
  {
    title: "前端和合约开发",
    items: [
      {
        icon: "https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",
        title: "MDN | Web 开发者指南",
        desc: "Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资料",
        link: "https://developer.mozilla.org/zh-CN",
      },
      {
        icon: "/icons/es6.png",
        title: "ES6 入门教程",
        desc: "《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性",
        link: "https://es6.ruanyifeng.com/",
      },
      {
        icon: "/icons/typescript.png",
        title: "深入理解 TypeScript",
        desc: "《TypeScript Deep Dive》 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法",
        link: "https://jkchao.github.io/typescript-book-chinese/",
      },
      {
        icon: "/icons/rust.svg",
        title: "Rust语言圣经",
        desc: "一份高质量 Rust 教程",
        link: "https://course.rs",
      },
      {
        icon: "/icons/solidity.svg",
        title: "Solidity 指南",
        desc: "一份高质量以太坊开发教程",
        link: "https://github.com/dukedaily/solidity-expert",
      },
      {
        icon: "/icons/solidity.svg",
        title: "Solidity 官方文档",
        desc: "学习Solidity 从0到1的最佳指南",
        link: "https://solidity-cn.readthedocs.io/zh/develop/",
      },
    ],
  },
  {
    title: "Meme",
    items: [
      {
        title: "Doge",
        desc: "最早的加密meme，以前都是打赏用的,或许有一天，马斯克带它上火星",
        icon: "/icons/doge.png",
        link: "https://dogecoin.com/",
      },
      {
        title: "Shib",
        desc: "第一个巨量发行的meme代币，不可复制的神话",
        icon: "/icons/shib.jpeg",
        link: "https://shib.io/",
      },
      {
        title: "Pepe",
        desc: "现存最具模因性的模因币。Doge已经度过了他们的日子，是 pepe 统治的时候了。",
        icon: "/icons/pepe.jpeg",
        link: "https://www.pepe.vip/",
      },
    ],
  },
  {
    title: "Layer2",
    items: [
      {
        title: "比特币L2 Watch",
        desc: "比特币生态Layer2的所有项目和状态",
        icon: "/icons/l2watch.png",
        link: "https://l2.watch/",
      },
      {
        title: "btceden",
        desc: "探索比特币的 Layer 2 和整个生态系统",
        icon: "/icons/btceden.svg",
        link: "https://www.btceden.org/",
      },
      {
        title: "ETH L2 进度和TVL",
        desc: "以太坊生态的Layer2项目，观察TVL锁仓，每个L2的阶段以及Layer3项目。",
        icon: "/icons/l2beat.jpeg",
        link: "https://l2beat.com/scaling/summary",
      },
    ],
  },
  {
    title: "GameFi",
    items: [
      {
        title: "Redstone",
        desc: "专为链上游戏和自治世界而全新构建的链，基于Op的底层和Mud的全链游戏协议",
        icon: "/icons/redstone.jpeg",
        link: "https://redstone.xyz/",
      },
      {
        title: "Gala",
        desc: "加密货币的娱乐之王，游戏、音乐、电影等娱乐设施的提供者",
        icon: "/icons/gala.jpeg",
        link: "https://gala.com/",
      },
      {
        title: "Shrapnel",
        desc: "是一款竞争激烈的 AAA 撤离射击游戏。",
        icon: "/icons/shrapnel.jpeg",
        link: "https://www.shrapnel.com/",
      },
      {
        title: "Matr1x Fire",
        desc: "Web3娱乐平台，提供一款Fire的FPS手机游戏",
        icon: "/icons/fire.jpeg",
        link: "https://matr1x.io/",
      },
      {
        title: "Gods Unchained",
        desc: "由Immutable主导的交易纸牌游戏",
        icon: "/icons/gods.jpeg",
        link: "https://godsunchained.com/",
      },
      {
        title: "Mythical",
        desc: "区块链和游戏交汇处的下一代游戏技术工作室。",
        icon: "/icons/mythical.jpeg",
        link: "https://mythicalgames.com/",
      },
    ],
  },
  {
    title: "AI工具",
    items: [
      {
        title: "Trendx",
        desc: "一款用于 AI 驱动的 Web3 趋势跟踪和智能交易的一体化平台。",
        icon: "/icons/trendx.jpeg",
        link: "https://app.trendx.tech/",
      },
    ],
  },
  {
    title: "优质作家",
    items: [
      {
        title: "Paradigm",
        desc: "币圈顶级加密资本的内容输出,用来观察行业和技术新趋势。",
        icon: "/icons/paradigm.jpeg",
        link: "https://www.paradigm.xyz/writing",
      },
      {
        title: "V神",
        desc: "ETH的创始人，币圈大佬，通过文章寻找财富密码。",
        icon: "/icons/vitalik.jpeg",
        link: "https://vitalik.eth.limo/",
      },
      {
        title: "Chris Dixon",
        desc: "A16Z顶级合伙人, 读、写、拥有此书的作者，web3忠实拥护者。",
        icon: "/icons/cdixon.png",
        link: "https://cdixon.org/",
      },
      {
        title: "Jacob Horne",
        desc: "前Coinbase 员工，Jacob Horne 于 2020 年共同创立了 Zora，一个NFT的L2平台。",
        icon: "/icons/jacob.jpeg",
        link: "https://jacob.energy/index.html",
      },
      {
        title: "A16Z Future",
        desc: "A16Z旗下的内容平台，用来书写行业趋势以及投资标的的研究等。",
        icon: "/icons/future.jpeg",
        link: "https://future.com/",
      },
      {
        title: "Varun Srinivasan",
        desc: "去中心化网络 Farcaster的联合创始人，前cb、微软、yc员工。",
        icon: "/icons/varunsrinivasan.jpeg",
        link: "https://www.varunsrinivasan.com/writing/",
      },
      {
        title: "Glassnode",
        desc: "glassnode的研究报告，通过研报观察趋势和寻找新币的机会。",
        icon: "/icons/glassnode.jpeg",
        link: "https://insights.glassnode.com/",
      },
    ],
  },
  {
    title: "加密新闻",
    items: [
      {
        icon: "/icons/cointelegraph.jpeg",
        title: "Cointelegraph",
        desc: "一个加密货币信息网站",
        link: "https://cointelegraph.com/",
      },
      {
        icon: "/icons/bankless.jpeg",
        title: "Bankless",
        desc: "以Youtube和播客的形式在扩大加密货币的群体，涉及所有加密货币的话题",
        link: "https://www.bankless.com/",
      },
      {
        icon: "/icons/messari.jpeg",
        title: "Messari",
        desc: "专业加密货币研究机构和数据平台",
        link: "https://messari.io/",
      },

      {
        icon: "/icons/tree.jpg",
        title: "Tree of alpha",
        desc: "最快的加密信息索引平台",
        link: "https://news.treeofalpha.com/",
      },
      {
        icon: "/icons/wu.svg",
        title: "吴说",
        desc: "中文加密货币信息网站",
        link: "https://www.wublock123.com/",
      },
      {
        icon: "/icons/coindesk.png",
        title: "coindesk",
        desc: "古老的加密信息网站，加密共识大会举办方",
        link: "https://www.coindesk.com/",
      },
      {
        icon: "/icons/cointelegraph.jpeg",
        title: "bitscreener",
        desc: "加密货币热力图",
        link: "https://bitscreener.com/crypto-heat-maps",
      },
      {
        icon: "/icons/avator.jpg",
        title: "kkdemian的加密货币周报",
        desc: "了解一些加密货币的最新趋势和寻找百倍密码的渠道",
        link: "https://weekly.kkdemian.com/",
      },
    ],
  },
]
