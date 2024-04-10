const stockdata = {
    AAPL: {
        "data": {
            "symbol": "AAPL:NASDAQ",
            "type": "stock",
            "news": [
                {
                    "article_title": "Apple (AAPL) Future Products Could Include Robots and Smart Home Push",
                    "article_url": "https://www.bloomberg.com/news/newsletters/2024-04-07/apple-aapl-future-products-could-include-robots-and-smart-home-push-lupinmna",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8z-26D4a1x3_AcJ-a6O0GSAKsv6MsLNufPPyYE6QM0NmU3oYSwyN_8TeCLaA",
                    "source": "Bloomberg",
                    "post_time_utc": "2024-04-07 12:45:04"
                },
                {
                    "article_title": "Forget Apple: Warren Buffett Has Spent Twice as Much Buying Shares of This \nBeloved Stock Since 2018",
                    "article_url": "https://finance.yahoo.com/news/forget-apple-warren-buffett-spent-090600538.html",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTscKskEgcdNQIRliyUngloO6JogU49TG2L2LHo9iI7kPhGALMrM3FFeDmdyn8",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-05 09:06:00"
                },
                {
                    "article_title": "What Can Apple's Success Teach Investors About Peloton's Struggles?",
                    "article_url": "https://www.fool.com/investing/2024/04/07/apple-success-teach-investors-peloton-struggles/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzXY7Aw9FMetM8OmDgpqbd4lgkHBG9uyR2Z5rjS40hXbrO8UTmv2AJR9Fo3c0",
                    "source": "The Motley Fool",
                    "post_time_utc": "2024-04-07 14:30:00"
                },
                {
                    "article_title": "Apple's had a terrible start to the year. Here's what's gone wrong.",
                    "article_url": "https://www.businessinsider.com/apple-bad-year-ai-stock-tim-cook-2024-4",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOmuwkjMi8GYyZVHRQWMbzvHTj4tp03uM0iWCjEiBIpFMlK4RXVepRntqPBo",
                    "source": "Business Insider",
                    "post_time_utc": "2024-04-06 13:07:00"
                },
                {
                    "article_title": "Apple confirms layoffs affecting 700+ workers, including car team",
                    "article_url": "https://9to5mac.com/2024/04/04/apple-layoffs-700-workers-car-microled/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROY91DsupfeyrrblmQCRB6rEumnFExKo-S1a3kuoUUkFos6LB3vWD_YlFdX_Q",
                    "source": "9to5Mac",
                    "post_time_utc": "2024-04-05 00:08:00"
                },
                {
                    "article_title": "Apple Inc. stock rises Friday, still underperforms market",
                    "article_url": "https://www.marketwatch.com/data-news/apple-inc-stock-rises-friday-still-underperforms-market-c4dda839-ba67ca91f567",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSN6261Ccc_x8g_S7Eeu5RrfNHAPMXJPKVf_Huh9MZTHhFceZcL25Gvv8RZVgw",
                    "source": "MarketWatch",
                    "post_time_utc": "2024-04-05 20:32:00"
                },
                {
                    "article_title": "Buy-rated stocks on Friday include Apple, Netflix, AmEx, Ollie's",
                    "article_url": "https://www.cnbc.com/2024/04/05/buy-rated-stocks-on-friday-in-clude-apple-netflix.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScbdnaNjk384oRWh2Fk_X6MDhIATEPLmcYFJqQky7I-3pXoFbtlR5GRIunKBc",
                    "source": "CNBC",
                    "post_time_utc": "2024-04-05 12:28:09"
                },
                {
                    "article_title": "Apple laying off 614 California workers after scrapping electric car project",
                    "article_url": "https://www.foxbusiness.com/economy/apple-laying-off-614-california-workers-after-scrapping-electric-car-project",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQimzfnLejbn_aGI5A-KAbdqQMJ4B1Mtvb1m6klVJSiCwy14HlzgmaBz6F_VHA",
                    "source": "Fox Business",
                    "post_time_utc": "2024-04-05 13:01:00"
                },
                {
                    "article_title": "Apple supplier Foxconn sees growth in Q2 after dip in Q1 revenue",
                    "article_url": "https://www.reuters.com/technology/foxconn-q1-revenue-drops-96-yy-sees-growth-q2-2024-04-05/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPKif2oWr7Lm19fTIcIjwxuc3laG0KG3I0p4VVeTLrSXwUo2f8FgFhPuPZkt4",
                    "source": "Reuters",
                    "post_time_utc": "2024-04-05 08:15:00"
                },
                {
                    "article_title": "Apple’s DoJ Lawsuit Was Inevitable And Will Change The Company Forever",
                    "article_url": "https://www.forbes.com/sites/moorinsights/2024/04/05/apples-doj-lawsuit-was-inevitable-and-will-change-the-company-forever/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlxalYFzlRQN28O7_MofrOY2MQwKEandjp4UNXX4dgnqyMY7vRs9qO7VvESSQ",
                    "source": "Forbes",
                    "post_time_utc": "2024-04-05 16:01:04"
                },
                {
                    "article_title": "Apple stock sentiment 'could not be much worse' - analysts",
                    "article_url": "https://www.investing.com/news/stock-market-news/apple-stock-sentiment-could-not-be-much-worse--analysts-3367221",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF1SLDf9kvgFUWVbsJBYEhUWY4Czuz5fDQbzbtH8Jpiyf4-XajGU7f-1TNTj4",
                    "source": "Investing.com",
                    "post_time_utc": "2024-04-05 10:15:16"
                },
                {
                    "article_title": "Apple co-founder calls out ‘hypocrisy’ of politicians calling for TikTok ban",
                    "article_url": "https://www.cnn.com/videos/business/2024/03/23/steve-wozniak-apple-cofounder-tiktok-lcl-sot-vpx.cnn",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYuXJV3gIBCwAa32QXvni3oMro6DGPmRZbABog0ip5lmnUkT0jM-Il-pYxoKg",
                    "source": "CNN",
                    "post_time_utc": "2024-03-22 07:00:00"
                },
                {
                    "article_title": "Apple abandons its car: Here are other projects the company has killed",
                    "article_url": "https://techcrunch.com/2024/03/02/apple-abandons-its-car-here-are-other-projects-the-company-has-killed/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqs7YjDiRQ8DKSyjqiu2EH35r4BsvZccmM_xnn8KUYxHcxsS2NN5DZpBqCos",
                    "source": "TechCrunch",
                    "post_time_utc": "2024-03-02 08:00:00"
                },
                {
                    "article_title": "US senator accused of cozy ties to Apple after leading charge against \ncongressional stock trading",
                    "article_url": "https://nypost.com/2024/04/01/business/us-senator-accused-of-cozy-ties-to-apple-after-opposing-congressional-stock-trading/",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFIIkF3VtDmUGHczAStNxsDRqVt1HWz8u5O-orpbCbOP40tTh4jIH4fOCGC1M",
                    "source": "New York Post",
                    "post_time_utc": "2024-04-01 10:02:00"
                },
                {
                    "article_title": "Nvidia stock tumbled and Apple climbed in a 'Magnificent Seven' shakeup",
                    "article_url": "https://qz.com/nvidia-stock-apple-amazon-microsoft-magnificent-seven-1851321435",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1mOVr8Wmfi3uhQpUwJdID2h0d5b4u4FBLupWBij6yxFvvR3Nifue4vW2kXvo",
                    "source": "Quartz",
                    "post_time_utc": "2024-03-08 08:00:00"
                },
                {
                    "article_title": "Apple bows to Brussels over App Store in latest EU concession",
                    "article_url": "https://www.ft.com/content/0b009a04-e10c-4311-bed8-e87b61feccc1",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5u28gR3TxuT4swcZ8KW9YOkI5xSzz17pZhKIKgvy1h5fO8soEFdLmmRsCGdA",
                    "source": "Financial Times",
                    "post_time_utc": "2024-03-12 07:00:00"
                }
            ]
        }
    },
  
    MSFT: {
        "data": {
            "symbol": "MSFT:NASDAQ",
            "type": "stock",
            "news": [
                {
                    "article_title": "UnitedHealth's 6.4% Drop Brings Microsoft This Much Closer to Becoming the \nMost Important Stock in the Dow Jones ...",
                    "article_url": "https://www.fool.com/investing/2024/04/07/unitedhealth-drop-buy-microsoft-stock-dow-jones/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYwwJLgNDquOScKgBlwsIeixSliw6dmDr4441xG7n5aUIZOiGAUQaQJBiBuco",
                    "source": "The Motley Fool",
                    "post_time_utc": "2024-04-07 12:23:00"
                },
                {
                    "article_title": "Microsoft And AI Play Lead Five Stocks Near Buy Points",
                    "article_url": "https://www.investors.com/news/microsoft-msft-ai-lead-stocks-near-buy-points/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0xy4gan73iMVaVaUKw6lVjUQ-qGJd-GyXegIPKDBFV1jDVuwJNduocQdmf0",
                    "source": "Investor's Business Daily",
                    "post_time_utc": "2024-04-06 15:27:00"
                },
                {
                    "article_title": "MSFT vs. GOOGL: Which Big Tech Stock Is the Better Buy? - TipRanks.com",
                    "article_url": "https://www.tipranks.com/news/msft-vs-googl-which-big-tech-stock-is-the-better-buy",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNieaCE3qWulRuAao3guL3KoLTfKKoSJSnjp-lu8mr11DqbFaojSVfzzU6Ajo",
                    "source": "Tipranks",
                    "post_time_utc": "2024-04-06 02:24:42"
                },
                {
                    "article_title": "Bill Gates' three tips for business success",
                    "article_url": "https://fortune.com/2024/04/04/bill-gates-microsoft-tips-business-success/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSmddO8skWR3DSxpEol_K8_5cNr3tt80hi6_dvD21MEINUEJJVj00IJt8XWOuc",
                    "source": "Fortune",
                    "post_time_utc": "2024-04-04 17:39:00"
                },
                {
                    "article_title": "The Cyberattack Stopped by a Microsoft Engineer Was Scarier Than We Realize",
                    "article_url": "https://www.inc.com/reuters/the-cyberattack-stopped-by-a-microsoft-engineer-was-scarier-than-we-realize.html",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRP5eWPwbGj0X6TINAZmPTSlbIVCtHQ4Ok38R24ZH6RIPwX5_Edy-lPOdLAWjU",
                    "source": "Inc.com",
                    "post_time_utc": "2024-04-05 12:18:52"
                },
                {
                    "article_title": "Microsoft Corp. stock outperforms competitors on strong trading day",
                    "article_url": "https://www.marketwatch.com/data-news/microsoft-corp-stock-outperforms-competitors-on-strong-trading-day-ff6f5742-35d39083253e",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwL3nlCx_0WGklD2PQUnpEtAKD6zpJ8fNmqpWbWnaWHV1rt6h9nIkCJ3eJxnc",
                    "source": "MarketWatch",
                    "post_time_utc": "2024-04-05 20:32:00"
                },
                {
                    "article_title": "AMD, Samsung, Check Point, Microsoft, and Other Tech Stocks in Focus Today",
                    "article_url": "https://www.barrons.com/articles/tech-stocks-amd-samsung-microsoft-be4420d5",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXJZcst2L4D_mDlXwWRQ_8fVuxFVsQ3nryLqgF3mfsNYqdL_K8EmlBPq-Ys_M",
                    "source": "Barron's",
                    "post_time_utc": "2024-04-05 13:50:00"
                },
                {
                    "article_title": "Microsoft: Increased Caution Over AI Exuberance (NASDAQ:MSFT)",
                    "article_url": "https://seekingalpha.com/article/4682342-microsoft-increased-caution-over-ai-exuberance",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-fSOHW6kqJpWGX3MZw-ZRTeYF9NUzxRUpqy6YGQUazyMg0MqwQY6RDou5s8",
                    "source": "Seeking Alpha",
                    "post_time_utc": "2024-04-05 15:30:46"
                },
                {
                    "article_title": "Sheryl Sandberg's Fund Backs Pigment, a Microsoft Excel Rival, in $145 \nMillion Round",
                    "article_url": "https://www.bloomberg.com/news/articles/2024-04-04/sheryl-sandberg-s-fund-backs-microsoft-excel-rival-pigment-in-145-million-round",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_fLQDRlK-vxxIFKyfOEIGNDcizfY7yjrVjbmjk3K8LhTxIJtz3U54u0RpN1Q",
                    "source": "Bloomberg",
                    "post_time_utc": "2024-04-04 08:11:56"
                },
                {
                    "article_title": "Microsoft Creates Buzz in Quantum Realm: 3 Stocks to Watch",
                    "article_url": "https://finance.yahoo.com/news/microsoft-creates-buzz-quantum-realm-124000743.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQPWv3gCtlM8fpJGtdnzFlsLrBppJhd5l35dSSyUnZRHqZ7SR-jtxVpX-4s_8s",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-04 12:40:00"
                },
                {
                    "article_title": "Microsoft reveals how much businesses will have to pay to keep using \nWindows 10 securely",
                    "article_url": "https://www.theverge.com/2024/4/3/24120093/microsoft-windows-10-extended-security-updates-price",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTanY3jagFCCMiT3PE79S3Pn9tp1-k1aAjmIOQcgQv50Wua83AFf6tDsjLyLcg",
                    "source": "The Verge",
                    "post_time_utc": "2024-04-04 00:42:00"
                },
                {
                    "article_title": "Why Wall Street analysts and Jim Cramer see more upside for this portfolio \nBig Tech name",
                    "article_url": "https://www.cnbc.com/2024/04/01/jim-cramer-and-wall-street-analysts-see-more-upside-for-microsoft.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwjH8nqxLLwQWYIpUePK7Tp2KO3ZFaMsa8Rn2Y-IwupppWdgSAd-1LvNiAMxU",
                    "source": "CNBC",
                    "post_time_utc": "2024-04-01 15:37:47"
                },
                {
                    "article_title": "Russian hackers breached key Microsoft systems",
                    "article_url": "https://www.cnn.com/2024/03/08/tech/microsoft-russia-hack/index.html",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlhavNs5945EMuxPC3SZ529gk4gxLT90h5dRY4mUAHmdTGefvkNln_XkQSXc",
                    "source": "CNN",
                    "post_time_utc": "2024-03-08 08:00:00"
                },
                {
                    "article_title": "Who Is Midnight Blizzard? Russian-Linked Group Has Repeatedly Targeted \nMicrosoft, Company Says",
                    "article_url": "https://www.forbes.com/sites/jamesfarrell/2024/03/08/who-is-midnight-blizzard-russian-linked-group-has-repeatedly-targeted-microsoft-company-says/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQANAzV84BYJgqbE5A46ikgw8CJ7oeItxIi9S_U5Cm7Xt2fmCov8SGS-WlOAmM",
                    "source": "Forbes",
                    "post_time_utc": "2024-03-08 08:00:00"
                },
                {
                    "article_title": "Exclusive: Microsoft to separate Teams and Office globally amid antitrust \nscrutiny",
                    "article_url": "https://www.reuters.com/technology/microsoft-separate-teams-office-globally-amid-antitrust-scrutiny-2024-04-01/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTvjyJexILdludhCQXzrDKU-quJelXQfyWd98eMEz2w1Q_HLSzgpZ42omBrwMw",
                    "source": "Reuters",
                    "post_time_utc": "2024-04-01 18:45:00"
                },
                {
                    "article_title": "Microsoft and OpenAI Plot $100 Billion Stargate AI Supercomputer",
                    "article_url": "https://www.theinformation.com/articles/microsoft-and-openai-plot-100-billion-stargate-ai-supercomputer",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYbQe7KSe1gnGOsiA5jrgSmhAon7HhgS6a74WLlz3OnxcDFfIrCzbJ8R9caM0",
                    "source": "The Information",
                    "post_time_utc": "2024-03-29 07:00:00"
                },
                {
                    "article_title": "Analysts revamp Microsoft stock price target amid OpenAI reports",
                    "article_url": "https://www.thestreet.com/technology/analysts-revamp-microsoft-stock-price-target-amid-openai-reports",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNjKPlmW4U8DUDzSb1WrkZFonbKwDNpQkvkMDnJyi-OfGuZGzkLstz2sUHwI",
                    "source": "TheStreet",
                    "post_time_utc": "2024-04-01 23:07:00"
                },
                {
                    "article_title": "Read Satya Nadella's memo about Mustafa Suleyman's move to Microsoft",
                    "article_url": "https://www.businessinsider.com/satya-nadella-mustafa-suleyman-microsoft-memo-2024-3",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRF4hicWzKdXwEiCbuJAClvvFiZ_kOukFsFDzHUJs-BovUY6ki0KpahyWmC9SY",
                    "source": "Business Insider",
                    "post_time_utc": "2024-03-20 07:00:00"
                },
                {
                    "article_title": "Introducing Microsoft Copilot for Finance – the newest Copilot offering in \nMicrosoft 365 designed to transform modern ...",
                    "article_url": "https://blogs.microsoft.com/blog/2024/02/29/introducing-microsoft-copilot-for-finance-the-newest-copilot-offering-in-microsoft-365-designed-to-transform-modern-finance/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6dcI5eNMSxh4HZqCdSp2t3o5Gfd-yqt3qFT_2SFfQUKjmEn2htbmYcGOcs04",
                    "source": "The Official Microsoft Blog",
                    "post_time_utc": "2024-02-29 08:00:00"
                }
            ]
        }
    },
    AMZN: {
        "data": {
            "symbol": "AMZN:NASDAQ",
            "type": "stock",
            "news": [
                {
                    "article_title": "Is Amazon Stock a Buy Now?",
                    "article_url": "https://www.fool.com/investing/2024/04/07/is-amazon-stock-a-buy-now/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQT8U_6ixXEDLlXFefVUw4qRmQGjqTxg9EefGBqTtf5HVuWEVwKVEgMjYLshOc",
                    "source": "The Motley Fool",
                    "post_time_utc": "2024-04-07 12:30:00"
                },
                {
                    "article_title": "Amazon's two key businesses get bullish updates. No wonder its stock is at \nmultiyear highs",
                    "article_url": "https://www.cnbc.com/2024/04/05/amazons-two-key-businesses-get-bullish-updates-no-wonder-its-stock-is-at-multiyear-highs.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQoDrK1EQvYQDSOY7twEZsbbUQtxprUAMVvB7Mz5ve_9rTlPg77iX8fQcJI1q4",
                    "source": "CNBC",
                    "post_time_utc": "2024-04-05 19:57:47"
                },
                {
                    "article_title": "Best AI Stock: Nvidia Stock vs. Amazon Stock",
                    "article_url": "https://www.nasdaq.com/articles/best-ai-stock:-nvidia-stock-vs.-amazon-stock",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lcaRUHBs1yG3Z3A4xxEVndyt2LzdlwK8fqG4dHYbxwl_U_1s2fa81EuRCK0",
                    "source": "Nasdaq",
                    "post_time_utc": "2024-04-06 10:30:00"
                },
                {
                    "article_title": "Meta Stock Gains On Analyst Price Target, Amazon PT Also Increased",
                    "article_url": "https://www.investors.com/news/technology/meta-amazon-stock-rise-on-analyst-price-target-hikes/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5uACl40UK2JPufFdHVIhzXFCfwwq1Ps3xYeZKSLO1ObdJlPKlQTVYIJ7nKg0",
                    "source": "Investor's Business Daily",
                    "post_time_utc": "2024-04-04 20:39:00"
                },
                {
                    "article_title": "Amazon: Tech giant cuts hundreds of jobs in cloud computing unit",
                    "article_url": "https://www.bbc.com/news/business-68729318",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRF0aVpvZfxZ7TNaFjvhrIjn2vsC7nC8kVEYXp-tl1zZdzyo9JKYFbNyXlmkjs",
                    "source": "BBC",
                    "post_time_utc": "2024-04-04 03:48:15"
                },
                {
                    "article_title": "Amazon is cutting hundreds of jobs in its cloud computing unit AWS",
                    "article_url": "https://www.npr.org/2024/04/04/1242718244/amazon-cutting-jobs-cloud-computing",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSsbCoMnZIc1zIBWBTJDwzbmQinRO3ZKg-bISECcrYiiWCCHX5Xh8zRlfQTrqo",
                    "source": "NPR",
                    "post_time_utc": "2024-04-04 05:18:01"
                },
                {
                    "article_title": "Amazon’s cashier-less technology was supposed to revolutionize grocery \nshopping. It’s been a flop",
                    "article_url": "https://www.cnn.com/2024/04/03/business/amazons-self-checkout-technology-grocery-flop/index.html",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSME1t_wGZIWWWD2zw3ZLqgdA2DPIN3SNO8Di7u_0Cm_bY7oVQkDlR2zkQQ-Xk",
                    "source": "CNN",
                    "post_time_utc": "2024-04-03 20:35:00"
                },
                {
                    "article_title": "Amazon's 'Just Walk Out' pullback shows AI has a long way to go",
                    "article_url": "https://www.businessinsider.com/amazons-just-walk-out-pullback-shows-ai-way-to-go",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRVZi--_ulFDS4ae6of1ZuEJT2HwQ1ELz493gc4Xdu9VBoeT-wxBsv9-_GIBeE",
                    "source": "Business Insider",
                    "post_time_utc": "2024-04-04 09:30:00"
                },
                {
                    "article_title": "Where Will Amazon Stock Be in 2030?",
                    "article_url": "https://finance.yahoo.com/news/where-amazon-stock-2030-095500053.html",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNR9IHJPWW4YQN-AEYS1kXj5vipeMkVBuM4xoEu5ZY9xokyfG2uWuwa5d09w8",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-05 09:55:00"
                },
                {
                    "article_title": "Jobs report, Disney's next move, and Amazon retail changes",
                    "article_url": "https://www.fastcompany.com/91086773/top-business-headlines-today-disney-boardroom-amazon-fresh-layoffs-tesla-evs-lowcost-retail",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQonXH4_WWUbL8uWHCqQkt3urAss4ZJTJ4EjO7cEwITNNquGeUz4wgXRouQ02o",
                    "source": "Fast Company",
                    "post_time_utc": "2024-04-05 10:37:41"
                },
                {
                    "article_title": "Amazon: FCF Turnaround Makes It A Buy (NASDAQ:AMZN)",
                    "article_url": "https://seekingalpha.com/article/4682348-amazon-fcf-turnaround-makes-it-a-buy",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQA7v-iqLPQq6wOFgJu_f1cDiLqjVwPzojr3qgnnKr6IBO7RNvRJlNqpZN-OmY",
                    "source": "Seeking Alpha",
                    "post_time_utc": "2024-04-05 14:46:39"
                },
                {
                    "article_title": "Amazon's no-checkout flop shows AI's limits",
                    "article_url": "https://www.axios.com/2024/04/04/amazon-walk-out-grocery-stores-ai-technology",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSRSE3jzWSAzYjXiDqaRgiNojJ4LE92v0ohCpSSUX0B30Q7qAQe0ULJwSNsaTs",
                    "source": "Axios",
                    "post_time_utc": "2024-04-05 01:00:40"
                },
                {
                    "article_title": "Jeff Bezos Convinced His Siblings To Invest $10K Each In His Online Startup \nCalled Amazon — Here's How Mu",
                    "article_url": "https://www.benzinga.com/markets/equities/24/04/38050032/jeff-bezos-convinced-his-siblings-to-invest-10k-each-in-his-online-startup-called-amazon-heres-h",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQa_V8V1srNd4M4bRvvtqXyRnbHK1zD-QQ7uInjZR36_2GhhHJglS1h2f0ygm8",
                    "source": "Benzinga",
                    "post_time_utc": "2024-04-02 14:59:04"
                },
                {
                    "article_title": "The Amazon play that could change the game for streaming sports",
                    "article_url": "https://www.ft.com/content/54087705-1527-4c5b-876a-3a4aad372e12",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3_fPIJWs3D0DuH2PbznXWBN5qRLYVc_YLTMuXtzE0OMJ_8Fiy_4clu6dDlQ8",
                    "source": "Financial Times",
                    "post_time_utc": "2024-03-22 07:00:00"
                },
                {
                    "article_title": "Amazon's senior employees may not get a cash pay raise this year",
                    "article_url": "https://www.reuters.com/business/retail-consumer/amazons-senior-employees-may-not-get-cash-pay-raise-this-year-2024-03-27/",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnSiT-xyOvBv3_76O_aCU6fjJdVvUVRmG7UD0sqPszLE3q7kstBZTzMXFuJ74",
                    "source": "Reuters",
                    "post_time_utc": "2024-03-28 07:00:00"
                },
                {
                    "article_title": "Amazon Bets $150 Billion on Data Centers Required for AI Boom",
                    "article_url": "https://www.bloomberg.com/news/articles/2024-03-28/amazon-bets-150-billion-on-data-centers-required-for-ai-boom",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNcod_XO-ZDiznR1L2DbLfStdLIdSxOemIfmEoAIH1Ud0PAP52FoZ_ioLIxE",
                    "source": "Bloomberg",
                    "post_time_utc": "2024-03-28 07:00:00"
                },
                {
                    "article_title": "How to Sell on Amazon from Alibaba in 2024: Step-by-Step Guide",
                    "article_url": "https://www.junglescout.com/resources/articles/alibaba-to-amazon-fba/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjPlt6R2T9fF80dIGRpi_FSQYZ9sJrT3ncgbZYUXR4hQH9NDySBZgFq01iqg",
                    "source": "Jungle Scout",
                    "post_time_utc": "2024-04-03 07:00:00"
                },
                {
                    "article_title": "Exclusive: Many senior Amazon employees won't get cash raises this year",
                    "article_url": "https://fortune.com/2024/03/27/amazon-no-cash-base-pay-raises-l6/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8LJ0n0zvoZFDKPjlYih3sO060bRYFn91h-jbgkFOReBLKJ4lQAYXlKJ3t6M8",
                    "source": "Fortune",
                    "post_time_utc": "2024-03-27 07:00:00"
                },
                {
                    "article_title": "Amazon completes $4B Anthropic investment to advance generative AI",
                    "article_url": "https://www.aboutamazon.com/news/company-news/amazon-anthropic-ai-investment",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT7fkHowXOsWZjhD_rveMMnLtN773kSRAlqYhAN4eNq0_ANvMkBsklwYNSxUSA",
                    "source": "About Amazon",
                    "post_time_utc": "2024-03-27 07:00:00"
                }
            ]
        }
    },
    NVDA: {
        "data": {
            "symbol": "NVDA:NASDAQ",
            "type": "stock",
            "news": [
                {
                    "article_title": "Forget Nvidia: These Are Likely the Next Once-in-a-Generation Tech Stocks \nto Buy",
                    "article_url": "https://www.fool.com/investing/2024/04/07/forget-nvidia-next-once-generation-tech-stocks/",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8GVi0Y4fATdirn4twIbTZczkypxjZ7wB-csewT9B6_HUO8jNW7KWuLEG8wR8",
                    "source": "The Motley Fool",
                    "post_time_utc": "2024-04-07 11:30:00"
                },
                {
                    "article_title": "Missed Out on Nvidia? Here's 1 Spectacular Artificial Intelligence (AI) \nStock Down 75% to Buy Instead",
                    "article_url": "https://finance.yahoo.com/news/missed-nvidia-heres-1-spectacular-100800669.html",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSW1QzIfLHXiJ98R9D6ff0WhsS4PcS7NxHt33_iDJ_Qu6M8wohRHXobhGshMdM",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-07 10:08:00"
                },
                {
                    "article_title": "Wall Street hunts AI winners beyond Nvidia in emerging markets",
                    "article_url": "https://finance.yahoo.com/news/wall-street-hunts-ai-winners-120000874.html",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7r1ec3Ad4sUgZH3lc96Vj2hROsLihd7K8ahafQU2aTpyNodKynaD8Ui0Q_3c",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-07 12:37:15"
                },
                {
                    "article_title": "Best AI Stock: Nvidia Stock vs. Amazon Stock",
                    "article_url": "https://www.nasdaq.com/articles/best-ai-stock:-nvidia-stock-vs.-amazon-stock",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lcaRUHBs1yG3Z3A4xxEVndyt2LzdlwK8fqG4dHYbxwl_U_1s2fa81EuRCK0",
                    "source": "Nasdaq",
                    "post_time_utc": "2024-04-06 10:30:00"
                },
                {
                    "article_title": "Market Constructive As These AI Winners Forge New Bases",
                    "article_url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-nvidia-stock-elon-musk-tesla-robotaxi/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_VSgquztbEifKpPMu-BzZ-M7a2FkK4Wx25Z27LYC6lXPpp2yntE8FV0Ws18",
                    "source": "Investor's Business Daily",
                    "post_time_utc": "2024-04-07 11:33:00"
                },
                {
                    "article_title": "Meet the off-the-grid Nvidia cofounder",
                    "article_url": "https://fortune.com/2024/04/05/nvidia-forgotten-co-founder-curtis-priem/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZc5ZLYuVIvJs-Al-eB-Z3hx5-Iw-UNjf8lMV08KiZr-ULapXGb6sUBtSVX0s",
                    "source": "Fortune",
                    "post_time_utc": "2024-04-05 19:05:00"
                },
                {
                    "article_title": "Nvidia Stock Gains. More of the Chip Maker’s Supply Chain Is Coming to the \nU.S.",
                    "article_url": "https://www.barrons.com/articles/nvidia-stock-price-buy-sell-f269c3b3",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRaguNY_b9hqpEm4JjrRbgrRFBF0y2GMiIBeG25bqOBgbBGGhGzUPuzLoYoo2A",
                    "source": "Barron's",
                    "post_time_utc": "2024-04-04 14:32:00"
                },
                {
                    "article_title": "The NVDA Alternatives: 3 Stocks Offering Superior Growth Prospects to Nvidia",
                    "article_url": "https://investorplace.com/2024/04/the-nvda-alternatives-3-stocks-offering-superior-growth-prospects-to-nvidia/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZEGmcoV1u6ApahmuB2sNOWFsktabmeoVmz4Qf2MyVCyhNuSzwRHS2XiiUneI",
                    "source": "InvestorPlace",
                    "post_time_utc": "2024-04-07 07:52:20"
                },
                {
                    "article_title": "Nvidia Stock Price Prediction: Meteoric Rise Could Be Over, Analysts Warn",
                    "article_url": "https://markets.businessinsider.com/news/stocks/nvidia-stock-price-prediction-artificial-intelligence-gpu-earnings-forecast-rally-2024-4",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQX4Xz28MsbpxAPrsJBmBys_-FadVPnIbpnHB1TgpCjhlJ6E3RO4CPT7cPL1fc",
                    "source": "markets.businessinsider.com",
                    "post_time_utc": "2024-04-06 11:49:00"
                },
                {
                    "article_title": "NVIDIA Corp. stock rises Friday, outperforms market",
                    "article_url": "https://www.marketwatch.com/data-news/nvidia-corp-stock-rises-friday-outperforms-market-ab5cf3d8-4a5471d529b3",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwL3nlCx_0WGklD2PQUnpEtAKD6zpJ8fNmqpWbWnaWHV1rt6h9nIkCJ3eJxnc",
                    "source": "MarketWatch",
                    "post_time_utc": "2024-04-05 20:33:00"
                },
                {
                    "article_title": "AI Boom Led by Nvidia Has Room for Industrial Contributors Like Vertiv",
                    "article_url": "https://www.bloomberg.com/opinion/articles/2024-04-02/ai-boom-led-by-nvidia-has-room-for-industrial-contributors-like-vertiv",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZJd_ZByfrMiNO8XCVTuDgIsVpe2hOwWPH7BMVj62_U8ebTTjRns62_b8KU0A",
                    "source": "Bloomberg",
                    "post_time_utc": "2024-04-02 10:30:22"
                },
                {
                    "article_title": "From NVDA to BA: Portfolio manager names her top stocks to buy",
                    "article_url": "https://www.cnbc.com/2024/04/05/from-nvda-to-ba-portfolio-manager-names-her-top-stocks-to-buy.html",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtMKd6t9Bm-0fMlOkj7Vj0W2KE7dw31NwR8-nxXE_e5ged-TAS0GhVhJ4F__s",
                    "source": "CNBC",
                    "post_time_utc": "2024-04-04 23:22:33"
                },
                {
                    "article_title": "NVIDIA vs. Broadcom: Stock Split Rivals Battling for the Future of AI",
                    "article_url": "https://247wallst.com/technology-3/2024/03/31/nvidia-vs-broadcom-stock-split-rivals-battling-for-the-future-of-ai/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoyEG5tDs3pwUm2srcLCRI8YajVunsHN5ba30N2USWwPf_A9K0ADaqar-cZI",
                    "source": "24/7 Wall St.",
                    "post_time_utc": "2024-03-31 16:07:51"
                },
                {
                    "article_title": "Exclusive | Nvidia Partner Plans $4 Billion Investment in Indiana",
                    "article_url": "https://www.wsj.com/tech/nvidia-partner-plans-4-billion-investment-in-indiana-4a094ace",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHL5NZgMyOjnXuXbDxsre-3X4UYoW32aNVdTC0yLhdS8_qjZctaHZ6SVhxg-k",
                    "source": "WSJ",
                    "post_time_utc": "2024-03-26 07:00:00"
                },
                {
                    "article_title": "Nvidia Stock Market Value Would Be Bigger Than the World Economy",
                    "article_url": "https://www.nytimes.com/2024/03/15/business/nvidia-stock-market-ai-bubble.html",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDc-da1WJfYEgapeuHwH4cbOsqjZF-Z8PrxYfXWyFriuezdWHg3z10e4e1xI",
                    "source": "The New York Times",
                    "post_time_utc": "2024-03-18 07:00:00"
                },
                {
                    "article_title": "Nvidia insiders sell stock and make millions on AI chipmaker's rally",
                    "article_url": "https://qz.com/nvidia-ai-chips-stock-rally-1851315992",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXM13Ev_vuHQuoXz8hvr5Bva_B1O-BDi3r0AakvPL_91LJOfXSnF18DnG4zzQ",
                    "source": "Quartz",
                    "post_time_utc": "2024-03-07 08:00:00"
                },
                {
                    "article_title": "Nvidia: Boss says AI at 'tipping point' as revenues soar",
                    "article_url": "https://www.bbc.com/news/business-68366467",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzOpkTq6XpZd_qyIfoR9F2nVW7xXNa52VN4NYxMEcPR45nAOavZj9ayjFR4lg",
                    "source": "BBC",
                    "post_time_utc": "2024-02-21 08:00:00"
                },
                {
                    "article_title": "Nvidia stock on meteoric rise. Will earnings keep up?",
                    "article_url": "https://asia.nikkei.com/Business/Markets/Nvidia-stock-on-meteoric-rise.-Will-earnings-keep-up",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNsyxGtYoo9qV0IwVlT-V9BSGjZfwDj6riTv9UTwyZkEKC6ihzE30ejGSh7v8",
                    "source": "Nikkei Asia",
                    "post_time_utc": "2024-03-09 08:00:00"
                },
                {
                    "article_title": "Macy's store closings, Nvidia stock price surge show changing market",
                    "article_url": "https://www.usatoday.com/story/money/2024/03/07/macys-store-closing-nvidia-stock-changing-market/72759737007/",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRySnMRg0KcosVeMWH6s_s5_U5UBdvPRhg5JAhAgj9v1STDQHqM4yDQqSrC0n4",
                    "source": "USA Today",
                    "post_time_utc": "2024-03-07 08:00:00"
                },
                {
                    "article_title": "Nvidia supplier SK Hynix to invest $3.87 bln in US chip packaging plant",
                    "article_url": "https://www.reuters.com/technology/nvidia-supplier-sk-hynix-invest-387-bln-us-chip-packaging-plant-2024-04-03/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNryMSiPnPJPjT9KM5QgXsFO1exsP1ROAXtNJIMY6QAJCLxbrKRbHh_93AngY",
                    "source": "Reuters",
                    "post_time_utc": "2024-04-03 18:52:00"
                }
            ]
        }
    },
    META: {
        "data": {
            "symbol": "META:NASDAQ",
            "type": "stock",
            "news": [
                {
                    "article_title": "Is Meta Platforms Stock a Buy Now?",
                    "article_url": "https://www.fool.com/investing/2024/04/07/is-meta-platforms-stock-a-buy-now/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUx7uUZZIZ_SZ3_wnkkvOY-lEvKiizuL5ylDidFpZWASrhGQvJXpL3_EXDxvo",
                    "source": "The Motley Fool",
                    "post_time_utc": "2024-04-07 10:53:00"
                },
                {
                    "article_title": "Meta shares hit intraday record after analyst says company 'has too many \nadvantages to count'",
                    "article_url": "https://www.cnbc.com/2024/04/04/meta-rises-to-record-after-jefferies-rbc-analysts-raise-price-targets.html",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4A4FGY-WSKnBu4HcY_dsMc2Acs5jp1KfSsYCmUbzPMJLiR7VuKvXNDxU3_k",
                    "source": "CNBC",
                    "post_time_utc": "2024-04-04 19:07:06"
                },
                {
                    "article_title": "Zuckerberg's wealth exceeds Elon Musk's for the first time since 2020",
                    "article_url": "https://www.business-standard.com/world-news/zuckerberg-s-wealth-exceeds-elon-musk-s-for-the-first-time-since-2020-124040600039_1.html",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtlDXj9k_GX9MYDUz2FE4dkYA30I9nP07C_71urd60gVVuisni2tKl7g3b8iQ",
                    "source": "Business Standard",
                    "post_time_utc": "2024-04-06 01:13:11"
                },
                {
                    "article_title": "Instagram makes more ad money than YouTube, court filings show",
                    "article_url": "https://www.businessinsider.com/instagram-ads-revenue-youtube-court-documents-2024-4",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-xglnw91LiP5ucu0TtSzKqOmdBjNTLz6lxacsDnqT7J_UXSowDe8ejsVdTOQ",
                    "source": "Business Insider",
                    "post_time_utc": "2024-04-05 21:31:00"
                },
                {
                    "article_title": "The Case Against Crowdfunding in the Work Chat",
                    "article_url": "https://www.bloomberg.com/news/articles/2024-04-04/the-case-against-crowdfunding-in-the-work-chat",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAYOnIF31-nNMo6UWXdFLxd7GAzAjFAeg1vErfyALH-LUbW2I5R-Z2WBKe72s",
                    "source": "Bloomberg.com",
                    "post_time_utc": "2024-04-04 10:00:25"
                },
                {
                    "article_title": "Meta Stock Gains On Analyst Price Target, Amazon PT Also Increased",
                    "article_url": "https://www.investors.com/news/technology/meta-amazon-stock-rise-on-analyst-price-target-hikes/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5uACl40UK2JPufFdHVIhzXFCfwwq1Ps3xYeZKSLO1ObdJlPKlQTVYIJ7nKg0",
                    "source": "Investor's Business Daily",
                    "post_time_utc": "2024-04-04 20:39:00"
                },
                {
                    "article_title": "Meta is accused of censoring a non-profit newspaper and an independent \njournalist who criticized the company",
                    "article_url": "https://finance.yahoo.com/news/meta-accused-censoring-non-profit-232421493.html",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRV7kt4bvPbaqPI88B7A1ajoate9iCZjV_gptO2YY9KE9LS_Ip59IWMvc0qcaI",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-05 23:24:21"
                },
                {
                    "article_title": "Tesla, Meta Platforms, Enphase Energy, Cinemark, Krispy Kreme, Kura Sushi, \nand More Movers",
                    "article_url": "https://www.barrons.com/articles/stock-market-movers-021157c7",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-tSZ4WFbsR4HrYYWpy31yO1152CvNuyCM4c7Vi37K4vwaqJaDL8kXxbjxtf4",
                    "source": "Barron's",
                    "post_time_utc": "2024-04-05 20:48:00"
                },
                {
                    "article_title": "Analyst revamps Meta stock price target ahead of earnings",
                    "article_url": "https://www.thestreet.com/investing/analyst-revamps-meta-stock-price-target-on-ad-data",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0bFnjKs5tFFHFqAnKm50gE6YuBjwZMRc3GQQql5Ma5kKmejl8Q0XZ9mrYqIA",
                    "source": "TheStreet",
                    "post_time_utc": "2024-04-05 13:38:12"
                },
                {
                    "article_title": "Cathie Wood's Ark Invest Buys More Shares Of This Meta Platforms Competitor \n- ARK Fintech Innovation ETF",
                    "article_url": "https://www.benzinga.com/markets/cryptocurrency/24/04/38083441/cathie-woods-ark-invest-buys-more-shares-of-this-meta-platforms-competitor",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRdb6UA6BxJ7mR7pfv9zD2p0PJ2McnEqMzTR1KCfSy9aKk6AV1Ly3KGxfENYgg",
                    "source": "Benzinga",
                    "post_time_utc": "2024-04-04 02:17:46"
                },
                {
                    "article_title": "Meta's WhatsApp back up after global outage",
                    "article_url": "https://www.reuters.com/technology/metas-whatsapp-down-thousands-downdetector-shows-2024-04-03/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZOsVPISzM8dkryXWjYkjAiQlFVnO_kmgcAYKOPkI3rjr0Dh65CkIZE5V5FQk",
                    "source": "Reuters",
                    "post_time_utc": "2024-04-03 22:56:00"
                },
                {
                    "article_title": "Trump calls Facebook the enemy of the people. Meta’s stock sinks",
                    "article_url": "https://www.cnn.com/2024/03/11/tech/trump-tiktok-facebook-meta/index.html",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQguixWL3DvbdNGkaTrPuMylDiC1HVZbyM67kr4_2WmDfrGHM0hNATJphhZiQw",
                    "source": "CNN",
                    "post_time_utc": "2024-03-11 07:00:00"
                },
                {
                    "article_title": "Meta worker rips company's 'toxic' ban on controversial topics after probe \nover anti-Israel letter",
                    "article_url": "https://nypost.com/2024/03/27/business/meta-worker-rips-companys-toxic-ban-on-controversial-topics/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR27A9IP7VsJMUV27cpIO2uFWjvEQVovu_ILzR_Y5bo29EYkoiITiWnxYupyn8",
                    "source": "New York Post",
                    "post_time_utc": "2024-03-27 07:00:00"
                },
                {
                    "article_title": "Chat app Telegram challenges Meta with the launch of new ‘Business’ \nfeatures and revenue-sharing",
                    "article_url": "https://techcrunch.com/2024/04/01/chat-app-telegram-challenges-meta-with-the-launch-of-new-business-features-and-revenue-sharing/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRX3SIA3yr3eQQYpth43dE7z6X2Tw0NDhfuoIIuSAW7OUS-4QD2sszPIesB9U",
                    "source": "TechCrunch",
                    "post_time_utc": "2024-04-01 20:34:54"
                },
                {
                    "article_title": "Heard on the Street: Who Wins if TikTok Is Banned? It's More Complex Than \nIt Looks.",
                    "article_url": "https://www.wsj.com/livecoverage/stock-market-today-dow-jones-03-13-2024/card/heard-on-the-street-who-wins-if-tiktok-is-banned-it-s-more-complex-than-it-looks--y2F8qsCdIs5tugqeXoBf",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRA6BH5oz1WVmvMFj_SCBIXiQZGRcADxjjQ7OYdhSe7ULHzvLcIlLkrNvLa2ZM",
                    "source": "WSJ",
                    "post_time_utc": "2024-03-13 07:00:00"
                },
                {
                    "article_title": "Facebook let Netflix peek into user DMs, explosive court docs claim",
                    "article_url": "https://www.foxbusiness.com/technology/facebook-let-netflix-peek-user-dms-explosive-court-docs-claim",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcThGMo9yKpY0mydKgj3uKKPGgBb1RX-WLLIrSNr-LFGcrl3GhJM9N4gGnQgrhE",
                    "source": "Fox Business",
                    "post_time_utc": "2024-04-02 15:35:00"
                },
                {
                    "article_title": "Instagram, WhatsApp and Meta Business Services Suffer Outages",
                    "article_url": "https://www.pymnts.com/meta/2024/instagram-whatsapp-and-meta-business-services-suffer-outages/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ynjSvaaucD9WDI9MG8JYHYHwBE_YJdmttARLNYbbQQhV0MAokNADMjO6dTQ",
                    "source": "PYMNTS.com",
                    "post_time_utc": "2024-04-04 01:17:51"
                },
                {
                    "article_title": "The 3 Best Metaverse Stocks to Buy in April 2024",
                    "article_url": "https://investorplace.com/2024/04/the-3-best-metaverse-stocks-to-buy-in-april-2024/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUhUm2nnqyKkhEJugeVQ_GHiJQaV5iD_xDEsKAQQ_f6RxyZxEwG04i5s6YVPk",
                    "source": "InvestorPlace",
                    "post_time_utc": "2024-04-03 23:34:22"
                },
                {
                    "article_title": "The 'Meta AI mafia' brain drain continues with 3 more major departures",
                    "article_url": "https://fortune.com/2024/04/02/mark-zuckerberg-ai-jobs-meta-brain-drain-erik-meijer/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkyzszwsVULp8flu9plRXyLhriFJmEzK5FBgxRG0ohMZHsQ8wQ1pMVwcaupS8",
                    "source": "Fortune",
                    "post_time_utc": "2024-04-02 17:36:00"
                }
            ]
        }
    },
    TSLA: {
        "data": {
            "symbol": "TSLA:NASDAQ",
            "type": "stock",
            "news": [
                {
                    "article_title": "What’s wrong with Tesla",
                    "article_url": "https://www.cnn.com/2024/04/07/business/tesla-ev-sales-slowdown-stock/index.html",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQKgNBJMw79tScOFEQwYsnHa2vvBnIijeFaJ-JxbGwud5Q7WK4tYSAixantJko",
                    "source": "CNN",
                    "post_time_utc": "2024-04-07 07:00:00"
                },
                {
                    "article_title": "Elon Musk might not be leading a hyper-growth EV maker, after all, and \nanalysts are taking note: 'We caution Tesla ...",
                    "article_url": "https://fortune.com/2024/04/06/tesla-elon-musk-market-cap-analyst-warnings-ev-slowdown/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAB6Bu9p607E8dvOe7eTZWcXkFEqxB9LE4h_K5nmXXmGAN95MDAYePnRRD7xg",
                    "source": "Fortune",
                    "post_time_utc": "2024-04-06 15:09:00"
                },
                {
                    "article_title": "What's Going on With Tesla Stock?",
                    "article_url": "https://finance.yahoo.com/news/whats-going-tesla-stock-090400873.html",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgXooeEHa0FM-TIGKi4y9jpwmU5-SqZn-0fNlMf4tjKJyIWv26gVV-1tRK98",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-07 09:04:00"
                },
                {
                    "article_title": "Elon Musk says Tesla will unveil its robotaxi on Aug. 8; shares pop",
                    "article_url": "https://www.cnbc.com/2024/04/05/elon-musk-says-tesla-will-unveil-its-robotaxi-on-aug-8-shares-pop.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMeov1Dl6xlzElARd7gQXEd-L5yqyTajFOoPFJgGU8zPEv5lDaDcxQ3JW6SXQ",
                    "source": "CNBC",
                    "post_time_utc": "2024-04-05 21:03:46"
                },
                {
                    "article_title": "Exclusive: Tesla scraps low-cost car plans amid fierce Chinese EV \ncompetition",
                    "article_url": "https://www.reuters.com/business/autos-transportation/tesla-scraps-low-cost-car-plans-amid-fierce-chinese-ev-competition-2024-04-05/",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnBhFVj1nmHDRB7aiCB9cCM-zkIpDZ6moXR_vMu1HAWOQZei2PVCwsTV3DQGc",
                    "source": "Reuters",
                    "post_time_utc": "2024-04-05 21:32:00"
                },
                {
                    "article_title": "6 reasons why Tesla is failing, and they all have to do with design",
                    "article_url": "https://www.fastcompany.com/91086771/6-reasons-why-tesla-is-failing-and-they-all-have-to-do-with-design",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_MkiVVdjDBnCeZuCt8Nyvv-Vz9YerNphHHCTSWSGU2ppDsOXfq_7ve2Xj12Q",
                    "source": "Fast Company",
                    "post_time_utc": "2024-04-05 17:40:29"
                },
                {
                    "article_title": "Elon Musk boosting pay of AI engineers to prevent poaching from OpenAI",
                    "article_url": "https://www.foxbusiness.com/technology/elon-musk-boosting-pay-ai-engineers-prevent-poaching-openai",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLr9dWNPvpE8Xqfdln3c3gzQU5LZjv8tAkwKiaL5y09uacTLfowqjZabt4E70",
                    "source": "Fox Business",
                    "post_time_utc": "2024-04-04 21:19:00"
                },
                {
                    "article_title": "Hybrid Cars Retake The Limelight As EV Sales Slow. What It Means For Ford, \nGM, Tesla.",
                    "article_url": "https://www.investors.com/news/hybrid-cars-ev-electric-vehicles-ford-gm-tesla-toyota-honda/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEvAm9UGgACheYevdLuLMrU6y7vAeB7Tn1rGFae9CZb18MSVKzHzspoGis0E",
                    "source": "Investor's Business Daily",
                    "post_time_utc": "2024-04-05 15:46:00"
                },
                {
                    "article_title": "Tesla (TSLA) turns to deep discounts as inventory piles up",
                    "article_url": "https://electrek.co/2024/04/04/tesla-tsla-turns-deep-discounts-inventory-piles-up/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGXwHZCAZD1UQFImW62wyHB8VO5c9Guf35boT2geOArDzp8ztTKBymF-OVnZk",
                    "source": "Electrek",
                    "post_time_utc": "2024-04-04 16:33:00"
                },
                {
                    "article_title": "Would-be Tesla buyers snub company as Musk's reputation dips",
                    "article_url": "https://www.reuters.com/business/autos-transportation/would-be-tesla-buyers-snub-company-musks-reputation-dips-2024-04-01/",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxD7r8kwFPDdrnyBFHqTfXZbW4PQ8ORkjgtZgWVZG5JQd4b8yc_QfTmRm0rAM",
                    "source": "Reuters",
                    "post_time_utc": "2024-04-01 17:31:00"
                },
                {
                    "article_title": "Down More Than 50%, This \"Magnificent Seven\" Stock Is a Screaming Buy",
                    "article_url": "https://www.fool.com/investing/2024/04/01/down-more-than-50-this-magnificent-seven-stock-is/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS917tVaPsBdvlboIpnMNYYY015C1Nc1ryPXSwq0DQucSFYVsOoBojphU2I9uQ",
                    "source": "The Motley Fool",
                    "post_time_utc": "2024-04-01 07:58:00"
                },
                {
                    "article_title": "Angela Chao died after accidentally putting her Tesla in reverse: WSJ",
                    "article_url": "https://www.businessinsider.com/angela-chao-foremost-group-death-tesla-gearshift-reverse-drowning-accident-2024-3",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzeGQbk0JaXt0418GQrI8bs3veIny_orQphI3zaKPN06PABY9U5kgV4TGnHDc",
                    "source": "Business Insider",
                    "post_time_utc": "2024-03-08 08:00:00"
                },
                {
                    "article_title": "Tesla shares fall after deliveries drop 8.5% from a year ago",
                    "article_url": "https://www.nbcnews.com/business/business-news/tesla-shares-drop-first-quarter-2024-vehicle-delivery-production-rcna146015",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrdKxkm5bqzJMlsjF9H4UiH_WKibAo67gn2weHoU01GYdmAMHMP79xfuSevM",
                    "source": "NBC News",
                    "post_time_utc": "2024-04-02 14:17:33"
                },
                {
                    "article_title": "Tesla scouts sites for $3bn India car plant in boost for Modi",
                    "article_url": "https://www.ft.com/content/e9cbf92f-17f9-439a-ab7f-80fd8b589472",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQLiKkuoliwvXZdnYP1xc7gKqbCnqj-dIjLvWT3MlTBr6F4fhrsZzB2dfG1RA",
                    "source": "Financial Times",
                    "post_time_utc": "2024-04-03 12:01:24"
                },
                {
                    "article_title": "Analyst who correctly predicted Tesla's stock drop revamps target",
                    "article_url": "https://www.thestreet.com/technology/analyst-who-correctly-predicted-teslas-stock-drop-revamps-target",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU7rhj_KMfM1UeZ0C_MM8ZFGH9oIWORw5__ufLYRotGVI3pgkE2g4j_7pa0i8",
                    "source": "TheStreet",
                    "post_time_utc": "2024-04-04 01:03:00"
                },
                {
                    "article_title": "Cathie Wood's Ark Amasses Nearly $15M Tesla Shares Ahead Of Crucial Q1 \nDeliveries Report - Continues To O",
                    "article_url": "https://www.benzinga.com/markets/cryptocurrency/24/04/38038248/cathie-woods-ark-amasses-nearly-15m-tesla-shares-ahead-of-crucial-q1-deliveries-report-con",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjV9lb4mq5gZ_vNzNgY_C5Q7Atc0itQfuqCNhqobEgKus4SwbTv0HhnyDf3_U",
                    "source": "Benzinga",
                    "post_time_utc": "2024-04-02 02:53:39"
                },
                {
                    "article_title": "Tesla’s stock slumps as delivery numbers miss the mark by a wide margin",
                    "article_url": "https://www.marketwatch.com/story/tesla-deliveries-are-on-deck-but-wall-street-gets-a-somber-signal-out-of-china-10bd91a7",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPetEDHs8hjofDuBNi-IFpg99RGD-ZSc83KSBA7lfVYJOa3k2Y7kJqbez4xX0",
                    "source": "MarketWatch",
                    "post_time_utc": "2024-04-02 15:05:00"
                },
                {
                    "article_title": "Tesla Takes Back the EV Crown From BYD, Stock Falls Anyway",
                    "article_url": "https://www.barrons.com/articles/tesla-stock-price-today-d9886162",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDuH2l-8Ewx3kgfsLEPLHEGZJZWxdg1u82QxoqDcoElLLTvnh6XQb_sxXyKKM",
                    "source": "Barron's",
                    "post_time_utc": "2024-04-01 20:27:00"
                },
                {
                    "article_title": "A Mistake in a Tesla and a Panicked Final Call: The Death of Angela Chao",
                    "article_url": "https://www.wsj.com/real-estate/angela-chao-death-texas-tesla-safety-c435daa0",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQKFxsqgMx-keuRuumu0eY0aA6OaXjYD48qPBj5ibrKSKRMm4oscM0HHyS3R-M",
                    "source": "WSJ",
                    "post_time_utc": "2024-03-08 08:00:00"
                }
            ]
        }
    },
    MA: {
        "data": {
            "symbol": "MA:NYSE",
            "type": "stock",
            "news": [
                {
                    "article_title": "Mastercard Stock: Exciting Opportunity To Purchase At A Discount (NYSE:MA)",
                    "article_url": "https://seekingalpha.com/article/4682545-mastercard-exciting-opportunity-to-purchase-compounder-at-a-discount",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9f2vQPQsaYYDe88x_WUu7ZXwloxUbfSESvEdu29KsmwDI_JtPr_jNegirP6E",
                    "source": "Seeking Alpha",
                    "post_time_utc": "2024-04-07 13:18:16"
                },
                {
                    "article_title": "The Zacks Analyst Blog Highlights American Express, Visa and Mastercard",
                    "article_url": "https://finance.yahoo.com/news/zacks-analyst-blog-highlights-american-102400926.html",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbWUAqJPSSSbarj-dugyKSjOHtP6eu1Z9eVN4hraOtQpITA2EIXzqbFwlUxMU",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-04 10:24:00"
                },
                {
                    "article_title": "Dividend Roundup: Citigroup, Mastercard, AT&T, PNC Financial, and more",
                    "article_url": "https://seekingalpha.com/news/4087529-dividend-roundup-citigroup-mastercard-att-pnc-financial-and-more",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3swe_AfBIVLWRcLDtkZ0We43As_amL_SaXxlYFAJo6EZ41KqJ0aE9_Bwcufo",
                    "source": "Seeking Alpha",
                    "post_time_utc": "2024-04-05 12:05:41"
                },
                {
                    "article_title": "MoviePass Mastercard deal gives discount subscription to see movies",
                    "article_url": "https://www.businessinsider.com/moviepass-deal-mastercard-discount-movie-subscription-2024-4",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2maNzHUTfdNLZypkrlhszdw1GjMqB-dxX0ie2wD97Cq5zccja4lUfeCRvLrQ",
                    "source": "Business Insider",
                    "post_time_utc": "2024-04-04 18:38:00"
                },
                {
                    "article_title": "Why Visa Could Be A Better Investment Than Mastercard (NYSE:V)",
                    "article_url": "https://seekingalpha.com/article/4682170-why-visa-could-be-a-better-investment-than-mastercard",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ42mAEPfPCdEOPFYJ2zxTS900aXMzEAWnoSWpM0lDzmA4Jh97keg0MV5i0iNY",
                    "source": "Seeking Alpha",
                    "post_time_utc": "2024-04-04 15:39:58"
                },
                {
                    "article_title": "Mastercard, Visa upping their game with African fintech startups",
                    "article_url": "https://restofworld.org/2024/mastercard-visa-africa-fintech/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_uFJPmUaWZ_viNtkH4dV7L3eQ-ofn7IEEiyG27H1gt-wcdpCD4Yee77rbPZ0",
                    "source": "Rest of World",
                    "post_time_utc": "2024-03-13 07:00:00"
                },
                {
                    "article_title": "Visa, Mastercard settle on card fees — and yours may go up at checkout",
                    "article_url": "https://www.businessinsider.com/visa-mastercard-lawsuit-settlement-credit-card-fees-checkout-2024-3",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRgrdY28Ou_dgJHZm4q3zmIhLom2UyyGtVRt6piPoDIpH-oq-0jbehOJNQMvEU",
                    "source": "Business Insider",
                    "post_time_utc": "2024-03-26 07:00:00"
                },
                {
                    "article_title": "Mastercard and MTN Group Fintech partner to drive acceleration of mobile \nmoney ecosystem in Africa across 13 ...",
                    "article_url": "https://www.mtn.com/mastercard-and-mtn-group-fintech-partner-to-drive-acceleration-of-mobile-money-ecosystem-in-africa-across-13-markets/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvWUmBKMn0w96qX4XUE2Zhk9Hl6LQpls2CCUwogKK1GHHjsxr-MCbFMl-kNU",
                    "source": "MTN Group",
                    "post_time_utc": "2024-02-29 08:00:00"
                },
                {
                    "article_title": "Visa and Mastercard agree $30bn settlement over US transaction fees",
                    "article_url": "https://www.ft.com/content/7fd67b7a-fa87-449c-a549-a8f796b305da",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NeeXwvZk6o5SsIssfnxe8M8awADuliRbb58i7wB4wUwB4ljNVWJvsbndtgk",
                    "source": "Financial Times",
                    "post_time_utc": "2024-03-26 07:00:00"
                },
                {
                    "article_title": "Visa and Mastercard agree to $30 billion settlement that will lower \nmerchant fees",
                    "article_url": "https://www.cnn.com/2024/03/26/economy/visa-mastercard-swipe-fee-settlement/index.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQffpadPriQwJNE3-ONAguFdi7jRaNiivgWdwJaeBL0edNrIznYtp0LpwVlSpI",
                    "source": "CNN",
                    "post_time_utc": "2024-03-26 07:00:00"
                },
                {
                    "article_title": "Credit-card reward programs impacted by new agreement",
                    "article_url": "https://www.businessinsider.com/visa-mastercard-merchants-agreement-impacts-credit-cards-reward-programs-2024-3",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwn8FVWr2CWBtMUUbfW7AU6N3d2rs3wCn4xwR3Jh4RBokT2GoR32HZERiqaVc",
                    "source": "Business Insider",
                    "post_time_utc": "2024-03-26 07:00:00"
                }
            ]
        }
    },
    NFLX: {
        "data": {
            "symbol": "NFLX:NASDAQ",
            "type": "stock",
            "news": [
                {
                    "article_title": "Netflix Scores Street-High Price Target On 'Solid Momentum'",
                    "article_url": "https://www.investors.com/news/technology/netflix-stock-nflx-street-high-price-target-pivotal/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ61ZrCjWrC-vShc2HzGETuGb2Qe9V_L9Qb4O6kKdwdl6sceopvj_8OgRxP8tM",
                    "source": "Investor's Business Daily",
                    "post_time_utc": "2024-04-05 20:22:00"
                },
                {
                    "article_title": "Netflix Inc. stock outperforms competitors on strong trading day",
                    "article_url": "https://www.marketwatch.com/data-news/netflix-inc-stock-outperforms-competitors-on-strong-trading-day-e9cfa114-32dd2d61beaf",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkWGGMHrytiW9-fW27P6Deyzk2TJ9ttPdkQiDoktRzeEqzm3LbfP1Yetv24Us",
                    "source": "MarketWatch",
                    "post_time_utc": "2024-04-05 20:31:00"
                },
                {
                    "article_title": "'Ripley' reviews: Critics call Andrew Scott sensational in slow-burn series",
                    "article_url": "https://www.businessinsider.com/ripley-netflix-reviews-what-critics-are-saying-2024-4",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPdvn9cRTTtR5_6xWLAx3ADf1_3WeFuyUNTwj374q8e4W6Nzyeon8RJ_b4yNE",
                    "source": "Business Insider",
                    "post_time_utc": "2024-04-05 19:40:00"
                },
                {
                    "article_title": "A billionaire helped bring ‘3-Body Problem’ to Netflix. His business \npartner ensured he never lived to see its premiere",
                    "article_url": "https://www.cnn.com/2024/04/03/china/billionaire-three-body-problem-netflix-intl-hnk/index.html",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTY2ORkCVhT3JBXtSnJKov69Arhvr07Vlwo_ii8vK_Q9tDY2-MByrd5FK5DKmc",
                    "source": "CNN",
                    "post_time_utc": "2024-04-03 20:00:00"
                },
                {
                    "article_title": "A Scottish Wrexham? Former Netflix Exec Erik Barmack ‘In Talks’ To Invest \nIn British Soccer Club Motherwell",
                    "article_url": "https://deadline.com/2024/04/erik-barmack-netflix-talks-with-motherwell-fc-1235876520/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyl6emUNqAUnHLPG1QEYffb8UKxK2YLk3F_TvHQL2pRfL01s7ShEyEWf-jwQ",
                    "source": "Deadline",
                    "post_time_utc": "2024-04-05 09:28:00"
                },
                {
                    "article_title": "Reed Hastings only invests in index funds and Netflix",
                    "article_url": "https://fortune.com/2024/04/05/reed-hastings-index-funds-netflix-investor-stock-market-mutual-funds/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSWM6s1egF-QhuN62-A72spaYGxmxWyjqBoNvrOol3Q5rfVY_LKZsC0sQOTJxg",
                    "source": "Fortune",
                    "post_time_utc": "2024-04-05 19:38:00"
                },
                {
                    "article_title": "Friday's analyst calls: Netflix seen adding to huge gains, Krispy Kreme, \nOllie's get upgrades",
                    "article_url": "https://www.cnbc.com/2024/04/05/fridays-analyst-calls-netflix-seen-adding-to-huge-gains-krispy-kreme-gets-upgrade.html",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTfjUWgRnUlYu_v1k0TtI3hpw1fZmVcGhEjo-mCayXbZf5neuuR476WoMOGtQA",
                    "source": "CNBC",
                    "post_time_utc": "2024-04-05 10:07:52"
                },
                {
                    "article_title": "Netflix stock rises as Pivotal Research raises price target",
                    "article_url": "https://finance.yahoo.com/video/netflix-stock-rises-pivotal-research-144200848.html",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQTVoWcbmWa79qiwxFPu1UgcUQc1MOg9XtGbtZ7TUexPhvOVPmb_V9amUOQl1s",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-05 14:42:00"
                },
                {
                    "article_title": "4 stocks to watch on Friday: SWAV on JNJ deal, NFLX and more",
                    "article_url": "https://seekingalpha.com/news/4087566-4-stocks-to-watch-on-friday-swav-on-jnj-deal-nflx-and-more",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCFi1peWlWLYmZISBwj8AR-aZnUFsuYRm8cSnoZH1wyfAi7mHbd4RJ24Mvkgs",
                    "source": "Seeking Alpha",
                    "post_time_utc": "2024-04-05 13:13:00"
                },
                {
                    "article_title": "Ripley review — Andrew Scott is a calculated operator in new Netflix series",
                    "article_url": "https://www.ft.com/content/3c0a5eac-45ae-4c3f-a35d-bcf80bdcbf73",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRgfmrngPQ1PtNjEXqv_mGEUS4myW7oNNgbvEfO6AkzcyB6rVJCIu4pt2cn3Rw",
                    "source": "Financial Times",
                    "post_time_utc": "2024-04-04 07:01:19"
                },
                {
                    "article_title": "Have $10000? 3 Elite Growth Stocks to Buy Right Now",
                    "article_url": "https://investorplace.com/2024/03/have-10000-3-elite-growth-stocks-to-buy-right-now/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIgLfs_37V8Vu7dDgXv2UzZQUKB6q-B1JtlioODUds3nISOQOKgHNGF7EfJxg",
                    "source": "InvestorPlace",
                    "post_time_utc": "2024-03-06 08:00:00"
                },
                {
                    "article_title": "How Netflix won the streaming wars",
                    "article_url": "https://www.latimes.com/entertainment-arts/business/story/2024-03-06/how-netflix-held-onto-its-crown-as-king-of-streaming",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2y8OxB3dgwIivGf5mH3uOD4xUM09f6h1cnUUdwwiCGSbNHGytfe_cB4qg6qM",
                    "source": "Los Angeles Times",
                    "post_time_utc": "2024-03-06 08:00:00"
                },
                {
                    "article_title": "'3 Body Problem' science you need to know to watch the Netflix show",
                    "article_url": "https://www.businessinsider.com/3-body-problem-science-netflix-physics-2024-3",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUmdZZGglho1ddswEr8ynxjhTyvVAvz2lMUtco42752jg-Mbe-XRvM9FyoYI0",
                    "source": "Business Insider",
                    "post_time_utc": "2024-03-23 07:00:00"
                },
                {
                    "article_title": "Netflix Fight Night: Mike Tyson to Battle Jake Paul in “Boxing Mega-Event” \nStreaming Live in July",
                    "article_url": "https://www.hollywoodreporter.com/tv/tv-news/netflix-boxing-mike-tyson-vs-jake-paul-1235845004/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZBLX_zwN24rr-JD_Jn5L3sv1qaR28NvXi4HeNFYSTRup3fOi7g2NMcPA5ECg",
                    "source": "The Hollywood Reporter",
                    "post_time_utc": "2024-03-07 08:00:00"
                },
                {
                    "article_title": "Free Netflix Sharing is Over, but Here's How to Save Your Profile",
                    "article_url": "https://www.cnet.com/tech/home-entertainment/free-netflix-sharing-is-over-but-heres-how-to-save-your-profile/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRrm4kbEKiAmU7uUFe5mWzxDCuLmo3hIyYi_J7Jh3tUjqULO3CCFchjbm2G7as",
                    "source": "CNET",
                    "post_time_utc": "2024-03-22 07:00:00"
                },
                {
                    "article_title": "Facebook let Netflix peek into user DMs, explosive court docs claim",
                    "article_url": "https://www.foxbusiness.com/technology/facebook-let-netflix-peek-user-dms-explosive-court-docs-claim",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcThGMo9yKpY0mydKgj3uKKPGgBb1RX-WLLIrSNr-LFGcrl3GhJM9N4gGnQgrhE",
                    "source": "Fox Business",
                    "post_time_utc": "2024-04-02 15:35:00"
                }
            ]
        }
    },
    ACN: {
        "data": {
            "symbol": "ACN:NYSE",
            "type": "stock",
            "news": [
                {
                    "article_title": "Accenture PLC Cl A stock rises Friday, still underperforms market",
                    "article_url": "https://www.marketwatch.com/data-news/accenture-plc-cl-a-stock-rises-friday-still-underperforms-market-e706cabc-f23ee895865e",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwL3nlCx_0WGklD2PQUnpEtAKD6zpJ8fNmqpWbWnaWHV1rt6h9nIkCJ3eJxnc",
                    "source": "MarketWatch",
                    "post_time_utc": "2024-04-05 20:36:00"
                },
                {
                    "article_title": "Accenture boss Julie Sweet accused of 'shaming' executive with ADHD",
                    "article_url": "https://www.ft.com/content/07be48c3-fe61-4acb-9f24-59169ac094f0",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFDzCvHcBpgBvAuIUlYF19eUm3AxYGjPYUYANxdKt0kCSlOjs2djpQBhkbZ4I",
                    "source": "Financial Times",
                    "post_time_utc": "2024-04-04 17:56:22"
                },
                {
                    "article_title": "Ex-Accenture executive sues consultancy giant over claims he was 'shamed' \nfor having ADHD",
                    "article_url": "https://finance.yahoo.com/news/ex-accenture-executive-sues-consultancy-172835410.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpbAPPd0-9xv9IxJ42a2NGhS8xrV1eh526UJMTiIjWJMBveAwLC12X2b7cb2Q",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-04 17:28:35"
                },
                {
                    "article_title": "Accenture's Generative AI Revenue Surpasses All VC-Backed Startups Combined",
                    "article_url": "https://analyticsindiamag.com/accentures-generative-ai-revenue-surpasses-all-vc-backed-startups-combined/",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSsw7xQcwlnmUdLJUr2buBTnLGL_rOTfIxa0k-Al3zyJwAa4i-BFwYb8Ty2XDw",
                    "source": "Analytics India Magazine",
                    "post_time_utc": "2024-03-23 07:00:00"
                },
                {
                    "article_title": "Accenture CEO Julie Sweet on acquiring Udacity to launch AI-powered \ntraining platform",
                    "article_url": "https://fortune.com/2024/03/05/accenture-ceo-julie-sweet-udacity-deal-acquisition-ai/",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR0WoFnvuBY_kwResGoW0JlFiGkuL-z7tlivTdXgtAyYxkaVBXbaCcR_AQ0La4",
                    "source": "Fortune",
                    "post_time_utc": "2024-03-05 08:00:00"
                },
                {
                    "article_title": "Accenture Launches Accenture LearnVantage to Help Clients and Their People \nGain Essential Skills and Achieve ...",
                    "article_url": "https://newsroom.accenture.com/news/2024/accenture-launches-accenture-learnvantage-to-help-clients-and-their-people-gain-essential-skills-and-achieve-greater-business-value-in-the-ai-economy",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQTzEvWRAhqnsgib9SnjrS9eaBruH7kpQCVMT8gM8a78UQ1XW69cU-HgO8Wsys",
                    "source": "Accenture",
                    "post_time_utc": "2024-03-05 08:00:00"
                },
                {
                    "article_title": "The consulting business is rough right now",
                    "article_url": "https://www.businessinsider.com/the-consulting-business-demand-is-rough-right-now-2024-3",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQyy5h9xUh7IZrOpBgzlaNYW7LMClSiKhISc6GlPBo0MdL-gWXuepnzuzIKkzo",
                    "source": "Business Insider",
                    "post_time_utc": "2024-03-23 07:00:00"
                },
                {
                    "article_title": "Accenture to Acquire EdTech Leader Udacity to Accelerate Capabilities of \nAccenture LearnVantage",
                    "article_url": "https://newsroom.accenture.com/news/2024/accenture-to-acquire-edtech-leader-udacity-to-accelerate-capabilities-of-accenture-learnvantage",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrAhRxzihJ61lz3fpxqCN6Lv668wrr6kTDFZsw4XzdYEhAyxD86Io_SOVQ8Qo",
                    "source": "Accenture",
                    "post_time_utc": "2024-03-05 08:00:00"
                },
                {
                    "article_title": "Accenture cuts revenue forecast in signal of slower consulting market",
                    "article_url": "https://www.ft.com/content/620e5f54-493c-413d-a46c-f1fb0c4a4149",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQc-JTZLZPi4Bc2hINnH7FU__oS5JiBaMCTPoti7A4E4Bhvba47yWFKT3NAqu4",
                    "source": "Financial Times",
                    "post_time_utc": "2024-03-21 07:00:00"
                }
            ]
        }
    },
    CRM: {
        "data": {
            "symbol": "CRM:NYSE",
            "type": "stock",
            "news": [
                {
                    "article_title": "Salesforce, 3M share losses lead Dow's 300-point fall",
                    "article_url": "https://www.marketwatch.com/data-news/salesforce-3m-share-losses-lead-dow-s-300-point-fall-e831c211-dd8dcc3af961",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4JVI8pP1CiZOKOYme5sBe6WyQL6Z6ouRS15GhIqzkHMftIZNVWHWBFdBPr0",
                    "source": "MarketWatch",
                    "post_time_utc": "2024-04-04 18:49:00"
                },
                {
                    "article_title": "Salesforce (NYSE:CRM) shareholders have earned a 14% CAGR over the last \nfive years",
                    "article_url": "https://finance.yahoo.com/news/salesforce-nyse-crm-shareholders-earned-120020358.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRDtSBq5xS3fs5gxIx6PyBKRm4g2WTg52HbJ3X2SnI9TLq-StD1njklfNPXlm8",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-04 12:00:20"
                },
                {
                    "article_title": "Google, Hubspot Deal Talk Reminds Wall Street Why It Loves the Stock",
                    "article_url": "https://www.businessinsider.com/google-hubspot-deal-talk-wall-street-stock-2024-4",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9bJqqJVCqaEUOPqdZIaWV3OdZUEneng0SXZxyGxVbfNcSfdCPPQUAmZ9Pcw",
                    "source": "Business Insider",
                    "post_time_utc": "2024-04-05 19:56:00"
                },
                {
                    "article_title": "Shopify Hires Dozens of Salesforce Veterans in Enterprise Push",
                    "article_url": "https://www.businessinsider.com/shopify-hires-dozens-salesforce-veterans-enterprise-e-commerce-push-2024-4",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkd3ECfwBivZtb25KMKXXx47_sQN9JskfuTZpaR4DJbhzgpoZEN6dpG7un1z8",
                    "source": "Business Insider",
                    "post_time_utc": "2024-04-04 09:00:00"
                },
                {
                    "article_title": "Salesforce's CEO Marc Benioff sends Hawaii hospitals a $150M gift",
                    "article_url": "https://www.foxbusiness.com/lifestyle/salesforce-ceo-marc-benioff-sends-hawaii-hospitals-150m-gift",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRt_mgSb6HkI8s3u4WTCHYaoYZOt8zfcZnWVoD4kSlSVeUc1mtjtg7zytGl4HA",
                    "source": "Fox Business",
                    "post_time_utc": "2024-03-06 08:00:00"
                },
                {
                    "article_title": "Salesforce's behind-the-scenes co-founder is tackling Slack as software \ncompany turns 25",
                    "article_url": "https://www.cnbc.com/2024/03/09/parker-harris-prepared-salesforce-for-ai-now-hes-focused-on-slack.html",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWxw1tV1vbRXFmj0F5liSkgqMhlWUTqgHYGIvJHb3u-vqWEdB-4MoyzfHFchM",
                    "source": "CNBC",
                    "post_time_utc": "2024-03-09 08:00:00"
                },
                {
                    "article_title": "Salesforce AI Executive Clara Shih Leads with a Beginner’s Mind",
                    "article_url": "https://www.nytimes.com/2024/03/07/business/clara-shih-salesforce-artificial-intelligence.html",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRBzBwu8RtKOAqJZhqOJ-i6-Mx10o4i6CCOeoSUEFISdRAv6keAQ3I9QH9mBGQ",
                    "source": "The New York Times",
                    "post_time_utc": "2024-03-07 08:00:00"
                },
                {
                    "article_title": "Salesforce looks to reinvent itself again with its fledgling AI business",
                    "article_url": "https://www.marketwatch.com/story/salesforce-looks-to-reinvent-itself-again-with-its-fledgling-ai-business-35638ac4",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa76uIBR0A1rtXRnAT7TjRDe2JJumjsSsLvJEVF3i5aRiscevVXk2_KuQf6BA",
                    "source": "MarketWatch",
                    "post_time_utc": "2024-03-25 07:00:00"
                },
                {
                    "article_title": "Why does Marc Benioff own so much land in Hawaii?",
                    "article_url": "https://fortune.com/2024/03/05/salesforce-ceo-marc-benioff-hawaii-land/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRZPd0cpDXwIO5GZReRY1bjLUclNALvevhWKsKAs42pMGHZeWyOcodwAXFfLWQ",
                    "source": "Fortune",
                    "post_time_utc": "2024-03-05 08:00:00"
                },
                {
                    "article_title": "Salesforce announces new AI tools for doctors",
                    "article_url": "https://www.cnbc.com/2024/03/07/salesforce-announces-new-ai-tools-for-doctors.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpf6JGjcYUv1Kdv35WdnY9wXMaTfDx8txmDv4PJLZ-rseaHgb4vUWPRhLVEsU",
                    "source": "CNBC",
                    "post_time_utc": "2024-03-07 08:00:00"
                },
                {
                    "article_title": "Did You Miss Your Moonshot Moment With Salesforce Stock?",
                    "article_url": "https://investorplace.com/2024/04/did-you-miss-your-moonshot-moment-with-salesforce-stock/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCb-SRZOtml0CTDjKlra6_gvi0Il5LE9kwMkg-jaKM4kZTRM4-tL1JeV9_7As",
                    "source": "InvestorPlace",
                    "post_time_utc": "2024-04-01 10:22:27"
                }
            ]
        }
    },
    WMT: {
        "data": {
            "symbol": "WMT:NYSE",
            "type": "stock",
            "news": [
                {
                    "article_title": "Walmart Inc. stock rises Friday, still underperforms market",
                    "article_url": "https://www.marketwatch.com/data-news/walmart-inc-stock-rises-friday-still-underperforms-market-0b466344-fc1dca86b956",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwL3nlCx_0WGklD2PQUnpEtAKD6zpJ8fNmqpWbWnaWHV1rt6h9nIkCJ3eJxnc",
                    "source": "MarketWatch",
                    "post_time_utc": "2024-04-05 20:34:00"
                },
                {
                    "article_title": "Forget Walmart: These 2 Potential Stock-Split Stocks Are Cheaper and \nSmarter Buys",
                    "article_url": "https://www.fool.com/investing/2024/04/04/forget-walmart-2-stock-split-stocks-are-cheaper/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuuk_VkaeWQCilGJrMWnl9HPyA4VMCKVh5ZQRt4uuSQDVOSCQieajF_zBgHrU",
                    "source": "The Motley Fool",
                    "post_time_utc": "2024-04-04 09:21:00"
                },
                {
                    "article_title": "Best Stock to Buy Right Now: Shopify vs. Walmart",
                    "article_url": "https://www.fool.com/investing/2024/04/06/best-stock-to-buy-right-now-shopify-walmart/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRanFE9_wGJCV_6X5EnrRHLVnrOMtJhP7-v6xUPlqJBYjwzTzJgHK-rq4K6Qj4",
                    "source": "The Motley Fool",
                    "post_time_utc": "2024-04-06 09:30:00"
                },
                {
                    "article_title": "Walmart shoppers could get cash payment under $45M lawsuit settlement",
                    "article_url": "https://www.foxbusiness.com/lifestyle/walmart-shoppers-could-get-cash-payment-under-45m-lawsuit-settlement",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnEJsglPlTQfCrO33ryXxjfdNXUTaIMgSHnxZ34dRDuuXqhbgsbS9LQXTb-E",
                    "source": "Fox Business",
                    "post_time_utc": "2024-04-05 21:21:00"
                },
                {
                    "article_title": "Walmart shoppers could claim up to $500 as part of a class-action settlement",
                    "article_url": "https://www.cnn.com/2024/04/05/business/walmart-shoppers-class-action-settlement/index.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTgNNEO71e7TvztLFONxfY5AMI5aMddF6oXPzttXf85UmPjBxlVJ_GGNMVbRLs",
                    "source": "CNN",
                    "post_time_utc": "2024-04-05 22:52:00"
                },
                {
                    "article_title": "How to claim the $500 Walmart might owe you",
                    "article_url": "https://www.businessinsider.com/how-to-claim-the-500-walmart-might-owe-you-2024-4",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSd3yB7oJxmAWwhWGV2lGqTzQdgLnPY2eH5Tpo7_4peuRRNBdDhCx26aW9eHmY",
                    "source": "Business Insider",
                    "post_time_utc": "2024-04-06 11:09:00"
                },
                {
                    "article_title": "Walmart shoppers who bought weighted groceries eligible for share of cash \nsettlement",
                    "article_url": "https://abc7.com/videoClip/14624257/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQoPIZ3G7cnTxObgpd1DmsZ0tMRjIYN6MvlpwCP8oqlc8917W2knK8-Yt91fUM",
                    "source": "ABC7 Los Angeles",
                    "post_time_utc": "2024-04-06 04:55:38"
                },
                {
                    "article_title": "Attention, Walmart shoppers: Retailer may owe you up to $500",
                    "article_url": "https://finance.yahoo.com/news/attention-walmart-shoppers-retailer-may-183930476.html",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSX2qewuzC4jDkhF61clTBHoLtP3N_QHOMYWfWlC7V33XMBq7GI_oqUr74SRy4",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-06 09:57:28"
                },
                {
                    "article_title": "Walmart decelerates health center expansion plans",
                    "article_url": "https://finance.yahoo.com/news/walmart-decelerates-health-center-expansion-090317696.html",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSvKGCdy8Bd1CquQsmaBis2ckFeLyHw2whOVw1do8S9Yr534B7Ymw6z9-q_Xgo",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-04 14:03:36"
                },
                {
                    "article_title": "Why Walmart's quick success in generative AI search should have Google \nworried",
                    "article_url": "https://www.cnbc.com/2024/03/10/why-walmarts-quick-success-in-gen-ai-search-should-worry-google.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTRolpDj9CQ3r7SbZJu13PpDeHz8a2AB2Sht-fCOO09Zuu0fr1YzPQcz5DsaIQ",
                    "source": "CNBC",
                    "post_time_utc": "2024-03-10 08:00:00"
                },
                {
                    "article_title": "Walmart Commerce Technologies Launches AI-Powered Logistics Product",
                    "article_url": "https://corporate.walmart.com/news/2024/03/14/walmart-commerce-technologies-launches-ai-powered-logistics-product",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRahRf8ut3XCHXQ5tYRX0DK_d0sHb49scHAu_iQ8UEw1BVFU3nn3596SxrjlJM",
                    "source": "Walmart",
                    "post_time_utc": "2024-03-14 07:00:00"
                },
                {
                    "article_title": "Walmart Wants to Teach Store Managers Compassion",
                    "article_url": "https://www.nytimes.com/2024/03/12/business/walmart-manager-training.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSyOPxHWD4fN19r8g4Jv-Tqfp-xU5MlnczmGugVSQ3PbhElsR4mvT9tGOAnPa0",
                    "source": "The New York Times",
                    "post_time_utc": "2024-03-12 07:00:00"
                },
                {
                    "article_title": "Walmart Agrees To Acquire VIZIO HOLDING CORP. To Facilitate Accelerated \nGrowth of Walmart Connect through ...",
                    "article_url": "https://corporate.walmart.com/news/2024/02/20/walmart-agrees-to-acquire-vizio-holding-corp-to-facilitate-accelerated-growth-of-walmart-connect-through-vizio-s-smartcast-operating-system",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDJn5jSPryMnEauv_uSlXeAFgMCmIBkCeAwa71-mKzmf748JuiDuvdddvKi4w",
                    "source": "Walmart.com",
                    "post_time_utc": "2024-02-20 08:00:00"
                },
                {
                    "article_title": "Walmart and Target limit self-checkout as retail giants face dilemma",
                    "article_url": "https://www.fastcompany.com/91049952/walmart-target-self-checkout-limit-retail-giants-crossroads",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpT4XD4hapvtaXXBacMidp8_4MTvJK7xzTF0tp5SSPnIq9fsZoOQZvL6ds_L4",
                    "source": "Fast Company",
                    "post_time_utc": "2024-03-07 08:00:00"
                }
            ]
        }
    },
    V: {
        "data": {
            "symbol": "V:NYSE",
            "type": "stock",
            "news": [
                {
                    "article_title": "The Zacks Analyst Blog Highlights Visa, Home Depot, Toyota Motor, Applied \nMaterials and Eaton",
                    "article_url": "https://finance.yahoo.com/news/zacks-analyst-blog-highlights-visa-101800976.html",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbWUAqJPSSSbarj-dugyKSjOHtP6eu1Z9eVN4hraOtQpITA2EIXzqbFwlUxMU",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-05 10:18:00"
                },
                {
                    "article_title": "Top Stock Reports for Visa, Home Depot & Toyota Motor",
                    "article_url": "https://finance.yahoo.com/news/top-stock-reports-visa-home-161000715.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSB-UjF9tDbxWKZVEgYcgwedrcQ1IOfyodzO7IKnIFULdGyy3d-4W2XyPpe0Zs",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-04-04 16:10:00"
                },
                {
                    "article_title": "Why Visa Could Be A Better Investment Than Mastercard (NYSE:V)",
                    "article_url": "https://seekingalpha.com/article/4682170-why-visa-could-be-a-better-investment-than-mastercard",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ42mAEPfPCdEOPFYJ2zxTS900aXMzEAWnoSWpM0lDzmA4Jh97keg0MV5i0iNY",
                    "source": "Seeking Alpha",
                    "post_time_utc": "2024-04-04 15:39:58"
                },
                {
                    "article_title": "Visa and Mastercard agree $30bn settlement over US transaction fees",
                    "article_url": "https://www.ft.com/content/7fd67b7a-fa87-449c-a549-a8f796b305da",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NeeXwvZk6o5SsIssfnxe8M8awADuliRbb58i7wB4wUwB4ljNVWJvsbndtgk",
                    "source": "Financial Times",
                    "post_time_utc": "2024-03-26 07:00:00"
                },
                {
                    "article_title": "Credit-card reward programs impacted by new agreement",
                    "article_url": "https://www.businessinsider.com/visa-mastercard-merchants-agreement-impacts-credit-cards-reward-programs-2024-3",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwn8FVWr2CWBtMUUbfW7AU6N3d2rs3wCn4xwR3Jh4RBokT2GoR32HZERiqaVc",
                    "source": "Business Insider",
                    "post_time_utc": "2024-03-26 07:00:00"
                },
                {
                    "article_title": "Visa, Mastercard settle on card fees — and yours may go up at checkout",
                    "article_url": "https://www.businessinsider.com/visa-mastercard-lawsuit-settlement-credit-card-fees-checkout-2024-3",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRgrdY28Ou_dgJHZm4q3zmIhLom2UyyGtVRt6piPoDIpH-oq-0jbehOJNQMvEU",
                    "source": "Business Insider",
                    "post_time_utc": "2024-03-26 07:00:00"
                },
                {
                    "article_title": "Visa and Mastercard agree to $30 billion settlement that will lower \nmerchant fees",
                    "article_url": "https://www.cnn.com/2024/03/26/economy/visa-mastercard-swipe-fee-settlement/index.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQffpadPriQwJNE3-ONAguFdi7jRaNiivgWdwJaeBL0edNrIznYtp0LpwVlSpI",
                    "source": "CNN",
                    "post_time_utc": "2024-03-26 07:00:00"
                }
            ]
        }
    },
    JPM: {
        "data": {
            "symbol": "JPM:NYSE",
            "type": "stock",
            "news": [
                {
                    "article_title": "The career timeline of Jamie Dimon, CEO of JPMorgan Chase",
                    "article_url": "https://www.businessinsider.com/jamie-dimon-career",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm57TtGV7NEhw534sdaLNydEFVL4AU8HAUU5nXuZyiUHmoN9w3my8PBh6Af6w",
                    "source": "Business Insider",
                    "post_time_utc": "2024-04-06 09:55:00"
                },
                {
                    "article_title": "1 Stock to Buy, 1 Stock to Sell This Week: JPMorgan Chase, Delta Air Lines",
                    "article_url": "https://www.investing.com/analysis/1-stock-to-buy-1-stock-to-sell-this-week-jpmorgan-chase-delta-air-lines-200647425",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgDVT3h4EFBaT27eveH9UW6odClY5pRw2LCMeTJnGz9kX3tZjfS236yrIhWGg",
                    "source": "Investing.com",
                    "post_time_utc": "2024-04-07 10:29:28"
                },
                {
                    "article_title": "Analysts update JP Morgan stock price target ahead of earnings report",
                    "article_url": "https://www.gwinnettdailypost.com/arena/thestreet/analysts-update-jp-morgan-stock-price-target-ahead-of-earnings-report/article_2caf796f-e962-5355-af72-9e9bec3bc55e.html",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiA77K75lfaBWcenbt4oSw0A64jtuJi7yVV-PmL5El5Q4aISpqlzihoJMknIw",
                    "source": "Gwinnett Daily Post",
                    "post_time_utc": "2024-04-07 11:03:00"
                },
                {
                    "article_title": "JPMorgan (JPM) Promotes Executives in Global Investment Banking Unit",
                    "article_url": "https://www.bloomberg.com/news/articles/2024-04-04/jpmorgan-promotes-global-banking-executives-under-petno-gori",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkjW6oJWnNZv5D0Z9WrHc-qtV6tuhm9XCFtjJUM-fzTH54q51FomZeRDRkWpA",
                    "source": "Bloomberg",
                    "post_time_utc": "2024-04-04 17:44:02"
                },
                {
                    "article_title": "America's Best Banks 2024",
                    "article_url": "https://www.forbes.com/sites/hanktucker/2024/04/04/americas-best-banks-2024/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WVcEQCWqA6u2nxiZgZ8EWVCczAp1leWfDMwRv6FjM3l9x4Z-x6TXP5xzxsE",
                    "source": "Forbes",
                    "post_time_utc": "2024-04-04 10:30:00"
                },
                {
                    "article_title": "JPMorgan's pivot to advertising means all companies are adtechs now",
                    "article_url": "https://www.ft.com/content/75a19ce5-53f2-4cd1-a509-d13db10e1fbc",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQ6_MXLxtKnuXZteoiNYCrpPiOL8pbvNApcdY7LU078ZDJ61rxZ8aPu8vf1PM",
                    "source": "Financial Times",
                    "post_time_utc": "2024-04-04 10:10:16"
                },
                {
                    "article_title": "JPMorgan names investment bankers in latest management refresh",
                    "article_url": "https://www.marketwatch.com/story/jpmorgan-names-investment-bankers-in-latest-management-refresh-8f0f105e",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDL9O9KIcZEVqZOhFO_LmC0itkFroMw4gpuAjqoznGS_Pjq-Bkr4bj5Ae6NyM",
                    "source": "MarketWatch",
                    "post_time_utc": "2024-04-05 20:52:00"
                },
                {
                    "article_title": "JPMorgan picks new bosses in banking, capital markets after reshuffle",
                    "article_url": "https://www.reuters.com/business/finance/jpmorgan-reorganizes-leadership-global-banking-memo-2024-04-04/",
                    "article_photo_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxqD4_5hawM6Mo6dhkDVRe4PFQx91DTNFVdJJulKdrSF85jqnexZRS6an9HJE",
                    "source": "Reuters",
                    "post_time_utc": "2024-04-05 00:58:00"
                },
                {
                    "article_title": "Chase to share customer data with advertisers",
                    "article_url": "https://qz.com/chase-to-share-customer-data-with-advertisers-1851388357",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT3S4fWVJwGBlusTDqDbd8foBGSD5iTi0dr53BpE2D4svOwwzQguv6iNhShDV8",
                    "source": null,
                    "post_time_utc": "2024-04-04 18:46:00"
                },
                {
                    "article_title": "Ether Could Avoid Designation as a Security With Centralization Risk \nEasing, JPMorgan Says",
                    "article_url": "https://www.coindesk.com/business/2024/04/04/ether-could-avoid-designation-as-a-security-with-centralization-risk-easing-jpmorgan-says/",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8VdvCF9bb7_u7JS6-6QFwMeMs5LFKX0y01vXvSuDoKkUXCiIpIFyk-aqVu0",
                    "source": "CoinDesk",
                    "post_time_utc": "2024-04-04 16:48:00"
                },
                {
                    "article_title": "JPMorgan Says Its AI Cashflow Tool Cut Human Work Almost 90%",
                    "article_url": "https://www.entrepreneur.com/business-news/jpmorgan-says-its-ai-cashflow-tool-cut-human-work-almost-90/470682",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTj_fgAmulm9KiyV8q3mjnitBSTwW1ZoOpDW4lD2Xg9PYxFp6ns5yGReBlIE4M",
                    "source": "Entrepreneur",
                    "post_time_utc": "2024-03-05 08:00:00"
                },
                {
                    "article_title": "Meet Pakistan's new Finance Minister Muhammad Aurangzeb, an ex-JPMorgan \nBanker | Mint",
                    "article_url": "https://www.livemint.com/news/india/meet-pakistans-new-finance-minister-muhammad-aurangzeb-an-ex-jpmorgan-banker-11710210093260.html",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSA2hWW7SfoFssjNwss0TVqd1F7uj-bC-j_71xHe-vHr9DcLpjxCoUuxquvyX4",
                    "source": "mint",
                    "post_time_utc": "2024-03-12 07:00:00"
                },
                {
                    "article_title": "JPMorgan Chase, Bank of America and Six Financial Giants Pay $70,000,000 \nSettlement Over Allegations of ‘Widespread Fraud and Collusion’",
                    "article_url": "https://dailyhodl.com/2024/03/23/jpmorgan-chase-bank-of-america-and-six-financial-giants-pay-70000000-settlement-over-allegations-of-widespread-fraud-and-collusion/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJMr_2FBxjAhf-bYhaHJ3BxPZ9xJX5m-PB16_9MHas5YUFMWwWnNy71TEScf8",
                    "source": "The Daily Hodl",
                    "post_time_utc": "2024-03-23 07:00:00"
                },
                {
                    "article_title": "Riot Platforms or Marathon Digital: J.P. Morgan Chooses the Superior \nBitcoin Stock to Buy - TipRanks.com",
                    "article_url": "https://www.tipranks.com/news/riot-platforms-or-marathon-digital-j-p-morgan-chooses-the-superior-bitcoin-stock-to-buy",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGuH93JHnDzNbdPvy0GloWRrOrAVemBaf5CIVqubwBkbmYSbYHfhQE3LDETI",
                    "source": "Tipranks",
                    "post_time_utc": "2024-03-26 16:48:57"
                },
                {
                    "article_title": "Jamie Dimon's firm seals deal with investors to reveal key clean energy \nmetric—the first of the big banks to do so",
                    "article_url": "https://fortune.com/2024/03/04/jamie-dimon-takes-a-stand-by-signing-jpmorgan-up-as-the-first-big-bank-to-reveal-a-key-clean-energy-metric-to-investors/",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQCCKkk6nucuoQgVSh1DFhkK1jhU_3Ne_bon5VB2lAh6-mumniClTYXsYqAu3E",
                    "source": "Fortune",
                    "post_time_utc": "2024-03-04 08:00:00"
                },
                {
                    "article_title": "JPMorgan Growth Arm Backs Cyber Business Eye Security - WSJ",
                    "article_url": "https://www.wsj.com/articles/jpmorgan-growth-arm-backs-cyber-business-eye-security-f93a2262",
                    "article_photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcBgwlumA8qB-6YaOJiWJz0T1BTy0fmSfRIIvuMN8hotumQFeOJ8wGokcqs8",
                    "source": "WSJ",
                    "post_time_utc": "2024-03-10 08:00:00"
                },
                {
                    "article_title": "JPMorgan Says Stocks Are So Crowded They May Crack at Any Time",
                    "article_url": "https://finance.yahoo.com/news/jpmorgan-says-crowded-stocks-sow-191152610.html",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQI6MoxQ3UF_Ng1_7Qy7jY4M9UUD1D8Puo07nQs6v4oTnByAb3c8hCJmZZujYc",
                    "source": "Yahoo Finance",
                    "post_time_utc": "2024-03-27 07:00:00"
                },
                {
                    "article_title": "JPMorgan: The Fed Put May Propel Shares To New Records (NYSE:JPM)",
                    "article_url": "https://seekingalpha.com/article/4680639-jpmorgan-chase-fed-put-may-propel-shares-to-new-records-maintain-buy",
                    "article_photo_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwfRIXnr7KzbU4B_3p26_w7OVr5VqUJqnU8qkdW5C72zYLpfe8nG9w7nK299Q",
                    "source": "Seeking Alpha",
                    "post_time_utc": "2024-03-27 04:38:18"
                },
                {
                    "article_title": "JPMorgan Is Pounding the Table on RIOT Stock Ahead of the Bitcoin Halving",
                    "article_url": "https://investorplace.com/2024/03/jpmorgan-is-pounding-the-table-on-riot-stock-ahead-of-the-bitcoin-halving/",
                    "article_photo_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQAWKpeD25T1y_k01_cSPmlyY_rtNW8rpOKTNWIWf8ycA0Pm2db8ILfOppD6Bk",
                    "source": "InvestorPlace",
                    "post_time_utc": "2024-03-20 07:00:00"
                }
            ]
        }
    },
  };
  
  module.exports = stockdata;
  