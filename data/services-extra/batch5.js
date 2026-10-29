const services = [
    {
        id: "exchange-hawala-system",
        slug: "exchange-hawala-system",
        category: "finance",
        title: {
            en: "Exchange & Hawala Management System",
            da: "سیستم مدیریت صرافی و حواله",
            pa: "د صرافۍ او حوالې د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Record exchanges, hawala transfers and partner balances in one place",
            da: "ثبت تبادله اسعار، حواله‌ها و بیلانس همکاران در یک جا",
            pa: "د اسعارو تبادله، حوالې او د همکارانو بیلانس په یو ځای کې ثبت کړئ"
        },
        description: {
            en: "We build software for money exchangers that records currency buy and sell deals, incoming and outgoing hawala transfers, and running balances with each partner office. Daily cash counts per currency, receipts in Dari, Pashto or English, and clear reports replace paper registers. The software is ours to build; operating licences and regulatory compliance remain the exchanger's responsibility.",
            da: "ما برای صرافان نرم‌افزاری می‌سازیم که خرید و فروش اسعار، حواله‌های آمده و رفته، و بیلانس جاری با هر دفتر همکار را ثبت می‌کند. شمارش روزانه نقدینه برای هر اسعار، رسید به دری، پشتو یا انگلیسی و راپورهای واضح جای دفترهای کاغذی را می‌گیرند. ساخت نرم‌افزار کار ماست؛ جواز فعالیت و رعایت مقررات به عهده خود صراف است.",
            pa: "موږ د صرافانو لپاره داسې سافټویر جوړوو چې د اسعارو پېر او پلور، راغلې او تللې حوالې، او له هر همکار دفتر سره روان بیلانس ثبتوي. د هرې اسعارو ورځنۍ نغدې شمېرنه، په پښتو، دري یا انګلیسي رسید او روښانه راپورونه د کاغذي کتابونو ځای نیسي. د سافټویر جوړول زموږ کار دی؛ د فعالیت جواز او د مقرراتو مراعات د صراف پر غاړه دي."
        },
        features: [
            "Currency Buy & Sell Records",
            "Hawala Send & Receive",
            "Partner Office Ledgers",
            "Daily Cash Count per Currency",
            "Printable Receipts in Dari, Pashto & English",
            "Exchange Rate Board",
            "User Roles & Activity Log",
            "Daily and Monthly Reports"
        ],
        pricing: {
            basic: {
                name: "Single Office",
                price: "AFN 25,000",
                features: [
                    "One Office, Up to 3 Users",
                    "Exchange & Hawala Records",
                    "Partner Ledgers",
                    "Printable Receipts",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Multi-Branch",
                price: "AFN 45,000",
                features: [
                    "Up to 5 Branches",
                    "Unlimited Users",
                    "Branch-to-Branch Transfers",
                    "Rate Board Display",
                    "Daily Cloud Backups",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Network",
                price: "AFN 80,000+",
                features: [
                    "Unlimited Branches",
                    "Partner Portal for Correspondents",
                    "SMS Transfer Notifications",
                    "Custom Reports",
                    "Data Migration from Old Registers",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "online-accounting",
        slug: "online-accounting",
        category: "finance",
        title: {
            en: "Online Accounting System",
            da: "سیستم حسابداری آنلاین",
            pa: "آنلاین د حساب‌دارۍ سیسټم"
        },
        shortDesc: {
            en: "Web-based bookkeeping in AFN and USD, usable from any office",
            da: "حسابداری تحت وب به افغانی و دالر، قابل استفاده از هر دفتر",
            pa: "په افغانیو او ډالرو ویب‌پر بنسټ حساب‌داري، له هر دفتر څخه د کارولو وړ"
        },
        description: {
            en: "We set up a web-based accounting system with double-entry bookkeeping, a chart of accounts suited to your business, and support for AFN, USD and other currencies. Owners and accountants can see cash, receivables, payables and profit reports from any computer or phone. We build and configure the software; tax and accounting decisions stay with your accountant.",
            da: "ما یک سیستم حسابداری تحت وب با دفترداری دوطرفه، چارت حساب‌های مناسب کسب‌وکار شما، و پشتیبانی از افغانی، دالر و اسعار دیگر راه‌اندازی می‌کنیم. مالکان و حسابداران می‌توانند نقدینه، طلب‌ها، قرض‌ها و راپورهای مفاد را از هر کمپیوتر یا موبایل ببینند. ما نرم‌افزار را می‌سازیم و تنظیم می‌کنیم؛ تصمیم‌های مالیاتی و حسابداری به عهده حسابدار شماست.",
            pa: "موږ ویب‌پر بنسټ د حساب‌دارۍ سیسټم جوړوو چې دوه‌اړخیز دفترداري، ستاسو کاروبار ته مناسب د حسابونو چارټ، او د افغانیو، ډالرو او نورو اسعارو ملاتړ لري. مالکین او محاسبین کولی شي نغدې پیسې، غوښتنې، پورونه او د ګټې راپورونه له هر کمپیوټر یا موبایل څخه وګوري. موږ سافټویر جوړوو او تنظیموو؛ د مالیې او حساب‌دارۍ پرېکړې ستاسو د محاسب پر غاړه دي."
        },
        features: [
            "Double-Entry Bookkeeping",
            "AFN, USD & Multi-Currency",
            "Profit & Loss and Balance Sheet",
            "Receivables & Payables Tracking",
            "Custom Chart of Accounts",
            "Bank and Cash Accounts",
            "Accountant and Owner Roles",
            "Excel and PDF Export"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 18,000",
                features: [
                    "Single Company Setup",
                    "Chart of Accounts Configuration",
                    "Core Financial Reports",
                    "Up to 3 Users",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 35,000",
                features: [
                    "Multi-Currency Accounts",
                    "Branch or Project Tracking",
                    "Opening Balance Import",
                    "Up to 10 Users",
                    "Staff Training Session",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Group",
                price: "AFN 60,000+",
                features: [
                    "Multiple Companies",
                    "Consolidated Reports",
                    "Integration with Sales or Inventory",
                    "Custom Report Builder",
                    "Unlimited Users",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "invoicing-system",
        slug: "invoicing-system",
        category: "finance",
        title: {
            en: "Invoicing & Billing System",
            da: "سیستم بل‌دهی و صورت‌حساب",
            pa: "د بل او صورت‌حساب سیسټم"
        },
        shortDesc: {
            en: "Bills in AFN or USD with customer balances always up to date",
            da: "بل به افغانی یا دالر با بیلانس همیشه به‌روز مشتریان",
            pa: "په افغانیو یا ډالرو بلونه، د پیرودونکو تل تازه بیلانس سره"
        },
        description: {
            en: "We build an invoicing system that issues bills in AFN or USD, records full and partial payments, and keeps every customer's balance up to date. Invoices can be printed with your logo or sent as PDF over WhatsApp and email, in Dari, Pashto or English. Overdue lists and statements make it easy to follow up with customers who owe you.",
            da: "ما یک سیستم بل‌دهی می‌سازیم که بل را به افغانی یا دالر صادر می‌کند، پرداخت‌های کامل و قسمی را ثبت می‌کند و بیلانس هر مشتری را به‌روز نگه می‌دارد. بل‌ها با لوگوی شما چاپ می‌شوند یا به شکل PDF از طریق واتس‌اپ و ایمیل به دری، پشتو یا انگلیسی فرستاده می‌شوند. لست بل‌های معوق و صورت‌حساب مشتری پیگیری طلب‌ها را آسان می‌سازد.",
            pa: "موږ د بلونو داسې سیسټم جوړوو چې په افغانیو یا ډالرو بل صادروي، بشپړې او برخه‌یي تادیې ثبتوي او د هر پیرودونکي بیلانس تازه ساتي. بلونه ستاسو له لوګو سره چاپیږي یا د PDF په بڼه د واټس‌اپ او ایمیل له لارې په پښتو، دري یا انګلیسي لیږل کیږي. د ځنډېدلو بلونو لیست او د پیرودونکي صورت‌حساب له پوروړو سره تعقیب اسانه کوي."
        },
        features: [
            "Invoices in AFN or USD",
            "Customer Balances & Statements",
            "Partial Payment Recording",
            "PDF via WhatsApp & Email",
            "Dari, Pashto & English Invoices",
            "Overdue Payment Lists",
            "Product & Price List",
            "Sales and Collection Reports"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 14,000",
                features: [
                    "Branded Invoice Template",
                    "Customer Balances",
                    "Payment Recording",
                    "PDF Export",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 28,000",
                features: [
                    "AFN & USD Invoicing",
                    "Customer Statements",
                    "WhatsApp & Email Sending",
                    "Overdue Reminders",
                    "Multiple Users",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 45,000+",
                features: [
                    "Multiple Branches",
                    "Recurring Invoices",
                    "Accounting Integration",
                    "Customer Self-Service Portal",
                    "Custom Reports",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "digital-wallet-app",
        slug: "digital-wallet-app",
        category: "finance",
        title: {
            en: "Digital Wallet App",
            da: "اپلیکیشن کیف پول دیجیتال",
            pa: "د ډیجیټل بټوې اپلیکیشن"
        },
        shortDesc: {
            en: "Wallet app software for licensed providers: top-up, transfer, pay",
            da: "نرم‌افزار کیف پول برای ارائه‌کنندگان دارای جواز: شارژ، انتقال، پرداخت",
            pa: "د جواز لرونکو چمتو کوونکو لپاره د بټوې سافټویر: شارژ، لیږد، تادیه"
        },
        description: {
            en: "We build the software side of a digital wallet: the customer app, agent app, admin dashboard and the transaction ledger behind them. It covers registration with ID capture, top-up, peer-to-peer transfers, merchant payments and full transaction history, designed for low-end Android phones and weak connections. The e-money licence, KYC policy and banking partnerships are held by you, the client; we build the software to fit them.",
            da: "ما بخش نرم‌افزاری کیف پول دیجیتال را می‌سازیم: اپ مشتری، اپ نماینده، داشبورد مدیریت و دفتر معاملات پشت آن‌ها. این شامل ثبت‌نام با گرفتن عکس تذکره، شارژ حساب، انتقال پول بین افراد، پرداخت به فروشندگان و تاریخچه کامل معاملات است و برای موبایل‌های ارزان اندروید و انترنت ضعیف دیزاین می‌شود. جواز پول الکترونیکی، پالیسی شناخت مشتری و همکاری با بانک‌ها به عهده شما مشتری است؛ ما نرم‌افزار را مطابق آن‌ها می‌سازیم.",
            pa: "موږ د ډیجیټل بټوې سافټویري برخه جوړوو: د پیرودونکي اپ، د استازي اپ، د مدیریت ډشبورډ او د هغوی شاته د معاملو دفتر. دا د تذکرې د انځور سره نوم‌لیکنه، د حساب شارژ، د خلکو ترمنځ د پیسو لیږد، پلورونکو ته تادیه او د معاملو بشپړ تاریخچه لري او د ارزانه اندروید موبایلونو او کمزوري انټرنټ لپاره ډیزاین کیږي. د برېښنايي پیسو جواز، د پیرودونکي د پېژندنې پالیسي او له بانکونو سره همکاري ستاسو د مشتري پر غاړه ده؛ موږ سافټویر د هغو سره سم جوړوو."
        },
        features: [
            "Customer Wallet App",
            "Agent Cash-In / Cash-Out App",
            "Peer-to-Peer Transfers",
            "Merchant QR Payments",
            "ID Capture for KYC",
            "Transaction Ledger & History",
            "Admin & Compliance Dashboard",
            "PIN and Device Security"
        ],
        pricing: {
            basic: {
                name: "Prototype",
                price: "AFN 45,000",
                features: [
                    "Requirements & Flow Design",
                    "Clickable App Prototype",
                    "Ledger Architecture Plan",
                    "Security Review of Design",
                    "Build Estimate"
                ]
            },
            professional: {
                name: "Wallet MVP",
                price: "AFN 150,000+",
                features: [
                    "Android Customer App",
                    "Top-Up, Transfer & History",
                    "Admin Dashboard",
                    "Transaction Ledger Backend",
                    "Agent App",
                    "6 Months Support"
                ]
            },
            enterprise: {
                name: "Full Platform",
                price: "Custom",
                features: [
                    "Android & iOS Apps",
                    "Merchant Payments & QR",
                    "Bank and Partner API Integrations",
                    "Compliance Reporting Tools",
                    "Penetration Testing via Partner",
                    "Ongoing Maintenance Contract"
                ]
            }
        }
    },
    {
        id: "microfinance-system",
        slug: "microfinance-system",
        category: "finance",
        title: {
            en: "Microfinance Loan Management System",
            da: "سیستم مدیریت قرضه‌های کوچک",
            pa: "د کوچنیو پورونو د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Track borrowers, repayment schedules and field collections",
            da: "پیگیری قرضه‌گیرندگان، جدول بازپرداخت و جمع‌آوری ساحوی",
            pa: "د پور اخیستونکو، د بیرته ورکړې مهال‌وېش او ساحوي ټولونې تعقیب"
        },
        description: {
            en: "We build loan management software for microfinance institutions, NGOs and savings groups. It manages borrower profiles, individual and group loans, repayment schedules, collections recorded by field officers on their phones, and portfolio reports such as overdue loans by branch. Loan products and their terms are configured to your institution's own policies, whether conventional or profit-based.",
            da: "ما نرم‌افزار مدیریت قرضه برای مؤسسات قرضه‌های کوچک، مؤسسات غیردولتی و گروه‌های پس‌انداز می‌سازیم. این سیستم پروفایل قرضه‌گیرندگان، قرضه‌های انفرادی و گروهی، جدول بازپرداخت، جمع‌آوری‌هایی که کارمندان ساحوی با موبایل ثبت می‌کنند، و راپورهای پورتفولیو مانند قرضه‌های معوق هر نماینده‌گی را مدیریت می‌کند. محصولات قرضه و شرایط آن‌ها مطابق پالیسی‌های خود مؤسسه شما تنظیم می‌شوند، چه عادی باشند و چه بر اساس مفاد.",
            pa: "موږ د کوچنیو پورونو موسسو، نادولتي موسسو او د سپما ډلو لپاره د پور د مدیریت سافټویر جوړوو. دا سیسټم د پور اخیستونکو پروفایلونه، انفرادي او ډله‌ییز پورونه، د بیرته ورکړې مهال‌وېش، هغه ټولونې چې ساحوي کارکوونکي یې په موبایل ثبتوي، او د پورټفولیو راپورونه لکه د هرې څانګې ځنډېدلي پورونه مدیریت کوي. د پور محصولات او شرطونه یې ستاسو د موسسې د خپلو پالیسیو سره سم تنظیمیږي، که عادي وي او که د ګټې پر بنسټ."
        },
        features: [
            "Borrower Profiles & Documents",
            "Individual and Group Loans",
            "Repayment Schedules",
            "Field Officer Collection App",
            "Configurable Loan Products",
            "Overdue and Portfolio Reports",
            "Branch and Officer Performance",
            "SMS Repayment Reminders"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 40,000",
                features: [
                    "Single Branch",
                    "Borrower & Loan Records",
                    "Repayment Schedules",
                    "Core Portfolio Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Institution",
                price: "AFN 75,000",
                features: [
                    "Multiple Branches",
                    "Group Lending",
                    "Field Officer Mobile App",
                    "SMS Reminders",
                    "Data Migration from Excel",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Savings and Loan Products",
                    "Accounting Integration",
                    "Donor and Board Reporting",
                    "Mobile Money Repayments",
                    "Audit Trail & Approvals",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "insurance-management",
        slug: "insurance-management",
        category: "finance",
        title: {
            en: "Insurance Management System",
            da: "سیستم مدیریت بیمه",
            pa: "د بیمې د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Policies, premiums, claims and agents managed in one system",
            da: "مدیریت بیمه‌نامه‌ها، حق بیمه، ادعاها و نمایندگان در یک سیستم",
            pa: "بیمه‌لیکونه، د بیمې حق، ادعاوې او استازي په یو سیسټم کې"
        },
        description: {
            en: "We build software for insurers and brokers to issue policies, track premium payments and renewals, and handle claims from submission through assessment to settlement. Agents get their own login to register customers and see their commissions. Products, rates and approval rules are set up from your own underwriting policies — we build the system, not the insurance terms.",
            da: "ما برای شرکت‌های بیمه و دلالان نرم‌افزاری می‌سازیم که بیمه‌نامه صادر کند، پرداخت حق بیمه و تمدیدها را پیگیری کند و ادعاها را از ثبت تا ارزیابی و تصفیه مدیریت نماید. نمایندگان حساب جداگانه دارند تا مشتری ثبت کنند و کمیشن خود را ببینند. محصولات، نرخ‌ها و قواعد منظوری از پالیسی‌های خود شما تنظیم می‌شوند — ما سیستم را می‌سازیم، نه شرایط بیمه را.",
            pa: "موږ د بیمې شرکتونو او دلالانو لپاره داسې سافټویر جوړوو چې بیمه‌لیک صادر کړي، د بیمې د حق تادیې او تمدیدونه تعقیب کړي او ادعاوې له ثبت څخه تر ارزونې او تصفیې پورې سمبال کړي. استازي خپل جلا حساب لري ترڅو پیرودونکي ثبت کړي او خپل کمیشن وګوري. محصولات، نرخونه او د منظورۍ قواعد ستاسو د خپلو پالیسیو له مخې تنظیمیږي — موږ سیسټم جوړوو، نه د بیمې شرطونه."
        },
        features: [
            "Policy Issuance & Documents",
            "Premium & Renewal Tracking",
            "Claims Workflow",
            "Agent and Broker Portal",
            "Commission Calculation",
            "Configurable Products & Rates",
            "Customer SMS Notifications",
            "Portfolio and Claims Reports"
        ],
        pricing: {
            basic: {
                name: "Broker",
                price: "AFN 45,000",
                features: [
                    "Policy & Customer Records",
                    "Renewal Reminders",
                    "Basic Claims Tracking",
                    "Up to 5 Users",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Insurer",
                price: "AFN 80,000",
                features: [
                    "Multiple Product Lines",
                    "Full Claims Workflow",
                    "Agent Portal & Commissions",
                    "Premium Payment Tracking",
                    "Document Uploads",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Customer Self-Service Portal",
                    "Mobile App for Claims",
                    "Accounting Integration",
                    "Reinsurance and Regulator Reports",
                    "Approval Hierarchies",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "e-signature",
        slug: "e-signature",
        category: "finance",
        title: {
            en: "E-Signature & Online Contracts",
            da: "امضای الکترونیکی و قراردادهای آنلاین",
            pa: "برېښنايي لاسلیک او آنلاین قراردادونه"
        },
        shortDesc: {
            en: "Send contracts and collect signatures from a phone, anywhere",
            da: "قرارداد بفرستید و امضا را از طریق موبایل از هر جا بگیرید",
            pa: "قرارداد ولیږئ او لاسلیک له هر ځای څخه د موبایل له لارې واخلئ"
        },
        description: {
            en: "We build a contract signing system where you upload or generate a contract, send a link, and the other party reviews and signs it on their phone — useful when partners or customers are in another province or abroad. Every document keeps a record of who signed, when and from which device, and signed copies are stored as PDFs. Whether an electronic signature is accepted for a particular type of agreement depends on the applicable law, so we recommend checking that with your legal adviser.",
            da: "ما یک سیستم امضای قرارداد می‌سازیم که در آن قرارداد را بارگذاری یا تولید می‌کنید، لینک می‌فرستید و طرف مقابل آن را روی موبایل خود مطالعه و امضا می‌کند — مفید وقتی همکاران یا مشتریان در ولایت دیگر یا خارج از کشور هستند. هر سند ثبت می‌کند که چه کسی، چه وقت و از کدام دستگاه امضا کرده است و نسخه‌های امضاشده به شکل PDF نگهداری می‌شوند. این‌که امضای الکترونیکی برای یک نوع خاص قرارداد پذیرفته می‌شود یا نه به قانون مربوط بستگی دارد، پس توصیه می‌کنیم آن را با مشاور حقوقی خود بررسی کنید.",
            pa: "موږ د قرارداد د لاسلیک داسې سیسټم جوړوو چې تاسو پکې قرارداد پورته یا جوړ کړئ، لینک ولیږئ او بل اړخ یې په خپل موبایل کې ولولي او لاسلیک یې کړي — ګټور دی کله چې همکاران یا پیرودونکي په بل ولایت یا بهر کې وي. هر سند ثبتوي چې چا، کله او له کومې وسیلې لاسلیک کړی، او لاسلیک شوې نسخې د PDF په بڼه ساتل کیږي. دا چې برېښنايي لاسلیک د یو ځانګړي ډول تړون لپاره منل کیږي که نه، په اړوند قانون پورې اړه لري، نو سپارښتنه کوو چې دا له خپل حقوقي سلاکار سره وګورئ."
        },
        features: [
            "Sign on Phone or Computer",
            "Contract Templates",
            "Signing Order for Multiple Parties",
            "Audit Trail (Who, When, Device)",
            "OTP Verification by SMS",
            "Signed PDF Storage",
            "Dari, Pashto & English Documents",
            "Reminders for Unsigned Contracts"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 12,000",
                features: [
                    "Upload & Send for Signature",
                    "Phone-Friendly Signing Page",
                    "Audit Trail",
                    "Signed PDF Download",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 25,000",
                features: [
                    "Reusable Contract Templates",
                    "Multiple Signers & Order",
                    "SMS OTP Verification",
                    "Automatic Reminders",
                    "Team Accounts",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 45,000+",
                features: [
                    "Integration with Your CRM or HR System",
                    "Bulk Sending",
                    "Custom Branding & Domain",
                    "Approval Workflows",
                    "Document Archive Search",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "online-auction",
        slug: "online-auction",
        category: "finance",
        title: {
            en: "Online Auction Platform",
            da: "پلتفرم لیلام آنلاین",
            pa: "د آنلاین لیلام پلاټفورم"
        },
        shortDesc: {
            en: "Run timed or live online auctions with transparent bidding",
            da: "برگزاری لیلام آنلاین زمان‌دار یا زنده با داوطلبی شفاف",
            pa: "وخت‌لرونکي یا ژوندي آنلاین لیلامونه د روښانه داوطلبۍ سره"
        },
        description: {
            en: "We build auction platforms for vehicles, property, livestock, surplus equipment or any goods you sell to the highest bidder. Bidders register and verify by phone, follow lots with photos and condition notes, and bid in timed auctions with live updates and anti-sniping extensions. You control deposits, reserve prices and approval of winners from an admin panel.",
            da: "ما پلتفرم‌های لیلام برای موتر، ملکیت، مالداری، تجهیزات اضافی یا هر جنسی که به بالاترین داوطلب می‌فروشید می‌سازیم. داوطلبان با شماره موبایل ثبت‌نام و تأیید می‌شوند، اجناس را با عکس و یادداشت وضعیت دنبال می‌کنند و در لیلام‌های زمان‌دار با به‌روزرسانی زنده و تمدید خودکار وقت در دقایق آخر داوطلبی می‌کنند. شما پیش‌پرداخت، قیمت حداقل و تأیید برندگان را از پنل مدیریت کنترول می‌کنید.",
            pa: "موږ د موټرو، ملکیت، څارویو، اضافي تجهیزاتو یا هر هغه جنس لپاره چې لوړ داوطلب ته یې پلورئ د لیلام پلاټفورمونه جوړوو. داوطلبان د موبایل شمېرې سره نوم‌لیکنه او تایید کوي، توکي له انځورونو او د حالت له یادښتونو سره تعقیبوي، او په وخت‌لرونکو لیلامونو کې د ژوندي تازه کولو او په وروستیو دقیقو کې د وخت د اتوماتیک اوږدولو سره داوطلبي کوي. تاسو مخکینۍ تادیه، لږ تر لږه بیه او د ګټونکو تایید د مدیریت له پینل څخه کنټرولوئ."
        },
        features: [
            "Timed and Live Auctions",
            "Real-Time Bid Updates",
            "Phone-Verified Bidders",
            "Lots with Photos & Condition Notes",
            "Reserve Prices & Bid Increments",
            "Anti-Sniping Time Extension",
            "Bidder Deposits",
            "Admin Approval of Winners"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 35,000",
                features: [
                    "Timed Auctions",
                    "Bidder Registration by Phone",
                    "Lot Listings with Photos",
                    "Admin Panel",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 60,000",
                features: [
                    "Real-Time Bidding",
                    "Anti-Sniping Extensions",
                    "Reserve Prices & Deposits",
                    "SMS Outbid Alerts",
                    "Dari, Pashto & English",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Android & iOS Bidder Apps",
                    "Multiple Sellers / Marketplace",
                    "Online Payment Integration",
                    "Live Auction Streaming Integration",
                    "Custom Reports & Invoicing",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "supply-chain-system",
        slug: "supply-chain-system",
        category: "finance",
        title: {
            en: "Supply Chain & Cold Storage Tracking",
            da: "پیگیری زنجیره تأمین و سردخانه",
            pa: "د اکمالاتي ځنځیر او سړې خونې تعقیب"
        },
        shortDesc: {
            en: "Follow stock from farm or factory through cold storage to buyer",
            da: "پیگیری اجناس از فارم یا فابریکه تا سردخانه و خریدار",
            pa: "د توکو تعقیب له فارم یا فابریکې تر سړې خونې او پیرودونکي پورې"
        },
        description: {
            en: "We build tracking software for traders, exporters and cold storage operators handling fruit, vegetables, dairy or medicines. Each batch is recorded from receiving through storage rooms and dispatch, with stock levels, storage charges and buyer deliveries in one dashboard. Temperature sensors can feed readings and alerts into the system; the software is ours, while sensors and their installation come through hardware partners.",
            da: "ما نرم‌افزار پیگیری برای تاجران، صادرکنندگان و گردانندگان سردخانه که میوه، سبزی، لبنیات یا دوا را مدیریت می‌کنند می‌سازیم. هر بسته از زمان دریافت تا اتاق‌های نگهداری و ارسال ثبت می‌شود و موجودی، هزینه نگهداری و تحویل به خریداران در یک داشبورد دیده می‌شود. حسگرهای حرارت می‌توانند ارقام و هشدارها را به سیستم بفرستند؛ نرم‌افزار از ماست و حسگرها و نصب آن‌ها از طریق همکاران سخت‌افزاری تأمین می‌شوند.",
            pa: "موږ د هغو سوداګرو، صادروونکو او د سړو خونو چلوونکو لپاره چې مېوه، سبزي، لبنیات یا درمل سمبالوي د تعقیب سافټویر جوړوو. هره بسته د ترلاسه کولو څخه د ساتنې تر خونو او لېږلو پورې ثبتیږي، او موجودي، د ساتنې لګښتونه او پیرودونکو ته سپارنې په یو ډشبورډ کې ښکاري. د تودوخې سینسرونه کولی شي ارقام او خبرتیاوې سیسټم ته ولیږي؛ سافټویر زموږ دی، او سینسرونه او نصب یې د هارډویر همکارانو له لارې برابریږي."
        },
        features: [
            "Batch Tracking from Receipt to Dispatch",
            "Cold Room and Rack Locations",
            "Stock Levels by Product & Owner",
            "Storage Charges Calculation",
            "Temperature Readings & Alerts",
            "Delivery Notes & Truck Records",
            "Expiry and Quality Notes",
            "Exporter and Buyer Reports"
        ],
        pricing: {
            basic: {
                name: "Warehouse",
                price: "AFN 40,000",
                features: [
                    "Single Facility",
                    "Batch In/Out Records",
                    "Room & Location Tracking",
                    "Stock Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Cold Chain",
                price: "AFN 75,000",
                features: [
                    "Multiple Facilities",
                    "Sensor Data Integration",
                    "Temperature Alerts by SMS",
                    "Storage Billing",
                    "Delivery Tracking",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Farm-to-Buyer Traceability",
                    "Client Portal for Stock Owners",
                    "Driver Mobile App",
                    "Export Documentation Support",
                    "Accounting Integration",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "budgeting-app",
        slug: "budgeting-app",
        category: "finance",
        title: {
            en: "Personal Budgeting App",
            da: "اپلیکیشن بودجه شخصی",
            pa: "د شخصي بودیجې اپلیکیشن"
        },
        shortDesc: {
            en: "A branded money-tracking app for your customers or members",
            da: "اپ پیگیری مصارف با برند شما برای مشتریان یا اعضای تان",
            pa: "ستاسو د برانډ سره د پیسو د تعقیب اپ ستاسو پیرودونکو یا غړو ته"
        },
        description: {
            en: "We build budgeting apps for banks, microfinance institutions, NGOs and financial literacy programmes that want to give people a simple way to track income, spending and savings goals. The app works offline, supports AFN and other currencies, and uses plain Dari and Pashto with clear categories like rent, food and remittances received. It is a tracking tool, not financial advice — any guidance content inside the app comes from you.",
            da: "ما اپلیکیشن‌های بودجه برای بانک‌ها، مؤسسات قرضه‌های کوچک، مؤسسات غیردولتی و برنامه‌های سواد مالی می‌سازیم که می‌خواهند به مردم راه ساده‌ای برای ثبت عاید، مصارف و اهداف پس‌انداز بدهند. اپ بدون انترنت کار می‌کند، از افغانی و اسعار دیگر پشتیبانی می‌کند و دری و پشتوی ساده با کتگوری‌های واضح مانند کرایه، خوراک و پول دریافتی از خارج دارد. این یک ابزار ثبت است، نه مشوره مالی — هر محتوای رهنمایی داخل اپ از طرف شما تهیه می‌شود.",
            pa: "موږ د بانکونو، د کوچنیو پورونو موسسو، نادولتي موسسو او د مالي سواد پروګرامونو لپاره د بودیجې اپونه جوړوو چې غواړي خلکو ته د عاید، لګښت او د سپما موخو د ثبت ساده لاره ورکړي. اپ پرته له انټرنټه کار کوي، د افغانیو او نورو اسعارو ملاتړ کوي او ساده پښتو او دري د روښانه کټګوریو لکه کرایه، خواړه او له بهر څخه راغلې پیسې سره لري. دا د ثبت وسیله ده، نه مالي مشوره — په اپ کې هر لارښود منځپانګه ستاسو له خوا برابریږي."
        },
        features: [
            "Income & Expense Tracking",
            "Savings Goals",
            "Offline-First with Sync",
            "AFN & Multi-Currency",
            "Simple Dari & Pashto Interface",
            "Monthly Spending Charts",
            "Bill and Payment Reminders",
            "Your Branding & Content"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 30,000",
                features: [
                    "Android App",
                    "Income, Expense & Categories",
                    "Offline Storage",
                    "Your Branding",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 55,000",
                features: [
                    "Android & iOS",
                    "Savings Goals & Charts",
                    "Cloud Sync & Backup",
                    "Reminders",
                    "Educational Content Section",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Programme",
                price: "AFN 90,000+",
                features: [
                    "Admin Dashboard for Your Team",
                    "Anonymous Usage Analytics",
                    "Integration with Bank or Wallet Data",
                    "Push Notification Campaigns",
                    "Multi-Language Content Management",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "zakat-management",
        slug: "zakat-management",
        category: "finance",
        title: {
            en: "Zakat & Sadaqah Management Platform",
            da: "پلتفرم مدیریت زکات و صدقه",
            pa: "د زکات او صدقې د مدیریت پلاټفورم"
        },
        shortDesc: {
            en: "Collect, record and distribute zakat and sadaqah transparently",
            da: "جمع‌آوری، ثبت و توزیع شفاف زکات و صدقه",
            pa: "د زکات او صدقې روښانه راټولول، ثبتول او وېشل"
        },
        description: {
            en: "We build platforms for charities, mosques and community organisations to receive zakat and sadaqah online and from the diaspora, keep zakat and sadaqah funds separate, and record exactly who received what. Donors get receipts and distribution updates, and your team manages beneficiary lists and approvals. Any zakat calculator or eligibility rules in the platform are set by your organisation's own scholars — we build the software, not the rulings.",
            da: "ما برای مؤسسات خیریه، مساجد و نهادهای اجتماعی پلتفرمی می‌سازیم که زکات و صدقه را به شکل آنلاین و از افغان‌های خارج از کشور دریافت کند، وجوه زکات و صدقه را جدا نگه دارد و دقیق ثبت کند که چه کسی چه چیزی دریافت کرده است. اهداکنندگان رسید و معلومات توزیع دریافت می‌کنند و تیم شما لست مستحقین و منظوری‌ها را مدیریت می‌کند. هر حساب‌کننده زکات یا قواعد استحقاق در پلتفرم توسط علمای خود مؤسسه شما تعیین می‌شود — ما نرم‌افزار را می‌سازیم، نه احکام را.",
            pa: "موږ د خیریه موسسو، جوماتونو او ټولنیزو بنسټونو لپاره داسې پلاټفورم جوړوو چې زکات او صدقه آنلاین او له بهر میشتو افغانانو څخه ترلاسه کړي، د زکات او صدقې پیسې جلا وساتي او دقیق ثبت کړي چې چا څه ترلاسه کړي. ورکوونکي رسید او د وېش معلومات ترلاسه کوي او ستاسو ټیم د مستحقینو لیست او منظورۍ سمبالوي. په پلاټفورم کې د زکات هر حساب‌کوونکی یا د استحقاق قواعد ستاسو د موسسې د خپلو علماوو له خوا ټاکل کیږي — موږ سافټویر جوړوو، نه احکام."
        },
        features: [
            "Online Donations incl. Diaspora",
            "Separate Zakat & Sadaqah Funds",
            "Beneficiary Registry",
            "Distribution Records & Approvals",
            "Donor Receipts & Updates",
            "Configurable Zakat Calculator",
            "Campaign Pages",
            "Transparency Reports"
        ],
        pricing: {
            basic: {
                name: "Community",
                price: "AFN 25,000",
                features: [
                    "Donation Records",
                    "Separate Fund Tracking",
                    "Beneficiary List",
                    "Printable Receipts",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Organisation",
                price: "AFN 45,000",
                features: [
                    "Online Donation Page",
                    "Campaign Management",
                    "Distribution Approvals",
                    "Donor Email & SMS Updates",
                    "Zakat Calculator (Your Rules)",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Network",
                price: "AFN 80,000+",
                features: [
                    "Multiple Branches or Provinces",
                    "Field Distribution Mobile App",
                    "International Payment Gateways",
                    "Public Transparency Dashboard",
                    "Audit Trail",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "islamic-finance-software",
        slug: "islamic-finance-software",
        category: "finance",
        title: {
            en: "Islamic Finance Software",
            da: "نرم‌افزار مالی اسلامی",
            pa: "د اسلامي مالي چارو سافټویر"
        },
        shortDesc: {
            en: "Software for Murabaha, Ijara and other Islamic finance products",
            da: "نرم‌افزار برای مرابحه، اجاره و دیگر محصولات مالی اسلامی",
            pa: "د مرابحې، اجارې او نورو اسلامي مالي محصولاتو لپاره سافټویر"
        },
        description: {
            en: "We build software for Islamic banking windows, microfinance institutions and cooperatives offering products such as Murabaha and Ijara. The system handles asset purchase records, sale or rental schedules, customer instalments, profit tracking and contract documents for each deal. Product structures and contract steps are configured as approved by your own Sharia board; we implement them in software and do not issue Sharia rulings.",
            da: "ما برای بخش‌های بانکداری اسلامی، مؤسسات قرضه‌های کوچک و کوپراتیف‌هایی که محصولاتی مانند مرابحه و اجاره ارائه می‌کنند نرم‌افزار می‌سازیم. این سیستم ثبت خرید دارایی، جدول فروش یا کرایه، اقساط مشتری، پیگیری مفاد و اسناد قرارداد هر معامله را مدیریت می‌کند. ساختار محصولات و مراحل قرارداد مطابق منظوری هیئت شرعی خود شما تنظیم می‌شوند؛ ما آن‌ها را در نرم‌افزار پیاده می‌کنیم و حکم شرعی صادر نمی‌کنیم.",
            pa: "موږ د اسلامي بانکدارۍ څانګو، د کوچنیو پورونو موسسو او کوپراتیفونو لپاره چې د مرابحې او اجارې په څېر محصولات وړاندې کوي سافټویر جوړوو. دا سیسټم د شتمنۍ د پېرلو ثبت، د پلور یا کرایې مهال‌وېش، د پیرودونکي قسطونه، د ګټې تعقیب او د هرې معاملې د قرارداد اسناد سمبالوي. د محصولاتو جوړښت او د قرارداد پړاوونه ستاسو د خپل شرعي هیئت د منظورۍ سره سم تنظیمیږي؛ موږ یې په سافټویر کې پلي کوو او شرعي حکم نه صادروو."
        },
        features: [
            "Murabaha Deal Management",
            "Ijara Lease Schedules",
            "Asset Purchase Records",
            "Customer Instalment Tracking",
            "Profit Calculation & Reports",
            "Contract Document Generation",
            "Sharia Board Approval Workflow",
            "Audit Trail for Each Step"
        ],
        pricing: {
            basic: {
                name: "Single Product",
                price: "AFN 60,000",
                features: [
                    "One Product (e.g. Murabaha)",
                    "Deal & Instalment Records",
                    "Contract Templates",
                    "Core Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Multi-Product",
                price: "AFN 120,000+",
                features: [
                    "Murabaha & Ijara Products",
                    "Approval Workflows",
                    "Branch Support",
                    "Customer SMS Reminders",
                    "Accounting Integration",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Institution",
                price: "Custom",
                features: [
                    "Additional Product Types",
                    "Core Banking Integration",
                    "Customer Portal or App",
                    "Regulatory Reporting Formats",
                    "Data Migration",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "expense-management",
        slug: "expense-management",
        category: "finance",
        title: {
            en: "Employee Expense Management",
            da: "مدیریت مصارف کارمندان",
            pa: "د کارکوونکو د لګښتونو مدیریت"
        },
        shortDesc: {
            en: "Staff submit receipts by phone; managers approve in a tap",
            da: "کارمندان رسید را با موبایل می‌فرستند؛ مدیران با یک کلیک منظور می‌کنند",
            pa: "کارکوونکي رسید په موبایل لیږي؛ مدیران په یو کلیک منظوروي"
        },
        description: {
            en: "We build expense systems where staff photograph receipts for fuel, travel, field costs or office purchases and submit them from their phones, even with weak signal. Managers approve or reject with comments, finance sees what is owed to whom, and advances given to staff are tracked against the expenses they later report. Reports by project, donor or department make month-end and audits easier.",
            da: "ما سیستم‌های مصارف می‌سازیم که در آن کارمندان از رسیدهای تیل، سفر، مصارف ساحوی یا خریدهای دفتر عکس می‌گیرند و آن‌ها را حتی با انترنت ضعیف از موبایل خود می‌فرستند. مدیران با نظر منظور یا رد می‌کنند، بخش مالی می‌بیند که به چه کسی چه مقدار باید پرداخت شود، و پیش‌پرداخت‌های کارمندان در مقابل مصارفی که بعداً گزارش می‌دهند پیگیری می‌شوند. راپورها بر اساس پروژه، تمویل‌کننده یا دیپارتمنت، کار آخر ماه و تفتیش را آسان‌تر می‌سازند.",
            pa: "موږ د لګښتونو داسې سیسټمونه جوړوو چې کارکوونکي د تېلو، سفر، ساحوي لګښتونو یا دفتري پېرودونو د رسیدونو انځور اخلي او حتی په کمزوري انټرنټ کې یې له خپل موبایل څخه لیږي. مدیران له نظر سره منظوروي یا ردوي، مالي څانګه ګوري چې چا ته څومره ورکړه پاتې ده، او کارکوونکو ته ورکړل شوې مخکینۍ پیسې د هغو لګښتونو په مقابل کې تعقیبیږي چې وروسته یې راپوروي. د پروژې، تمویلوونکي یا څانګې له مخې راپورونه د میاشتې پای او پلټنې اسانه کوي."
        },
        features: [
            "Receipt Photo Capture",
            "Mobile Submission with Offline Queue",
            "Manager Approval Workflow",
            "Staff Advances & Settlement",
            "Expense Categories & Limits",
            "Project and Donor Coding",
            "Reimbursement Tracking",
            "Excel Export for Finance"
        ],
        pricing: {
            basic: {
                name: "Team",
                price: "AFN 18,000",
                features: [
                    "Web App for Staff & Managers",
                    "Receipt Uploads",
                    "Single-Level Approval",
                    "Monthly Expense Report",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Organisation",
                price: "AFN 35,000",
                features: [
                    "Android App with Offline Queue",
                    "Multi-Level Approvals",
                    "Advances & Settlements",
                    "Project / Donor Coding",
                    "Spending Limits",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 60,000+",
                features: [
                    "Accounting System Integration",
                    "Multiple Offices & Currencies",
                    "Per Diem Rules",
                    "Audit-Ready Reports",
                    "Single Sign-On",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "procurement-system",
        slug: "procurement-system",
        category: "finance",
        title: {
            en: "Procurement & Tender Management",
            da: "مدیریت تدارکات و داوطلبی",
            pa: "د تدارکاتو او داوطلبۍ مدیریت"
        },
        shortDesc: {
            en: "Requests, quotations and tenders handled with a clear audit trail",
            da: "درخواست‌ها، نرخ‌گیری و داوطلبی با سابقه واضح و قابل تفتیش",
            pa: "غوښتنې، نرخ اخیستل او داوطلبي د روښانه پلټنې وړ ریکارډ سره"
        },
        description: {
            en: "We build procurement systems that take a purchase from internal request and approval through requests for quotation or a formal tender, bid evaluation and purchase order. Suppliers can submit bids online before a deadline, sealed until opening, and every step is logged for donors and auditors. Thresholds, committees and evaluation criteria follow your own procurement policy.",
            da: "ما سیستم‌های تدارکات می‌سازیم که خرید را از درخواست داخلی و منظوری تا نرخ‌گیری یا داوطلبی رسمی، ارزیابی آفرها و فرمایش خرید پیش می‌برد. تأمین‌کنندگان می‌توانند آفرهای خود را پیش از مهلت به شکل آنلاین بفرستند که تا زمان بازگشایی مهر و مؤم می‌مانند، و هر مرحله برای تمویل‌کنندگان و مفتشین ثبت می‌شود. حدود، کمیته‌ها و معیارهای ارزیابی مطابق پالیسی تدارکات خود شماست.",
            pa: "موږ د تدارکاتو داسې سیسټمونه جوړوو چې پېرود له داخلي غوښتنې او منظورۍ څخه د نرخ غوښتنې یا رسمي داوطلبۍ، د وړاندیزونو ارزونې او د پېرود فرمایش پورې پرمخ وړي. اکمالوونکي کولی شي خپل وړاندیزونه له وروستۍ نېټې مخکې آنلاین ولیږي چې د پرانیستلو تر وخته مهر شوي پاتې کیږي، او هر پړاو د تمویلوونکو او پلټونکو لپاره ثبتیږي. حدونه، کمیټې او د ارزونې معیارونه ستاسو د خپلې تدارکاتي پالیسۍ سره سم دي."
        },
        features: [
            "Purchase Requests & Approvals",
            "Requests for Quotation (RFQ)",
            "Online Tender Publishing",
            "Sealed Online Bid Submission",
            "Bid Evaluation Scoring",
            "Purchase Orders & Contracts",
            "Supplier Registry",
            "Full Audit Trail"
        ],
        pricing: {
            basic: {
                name: "Requests",
                price: "AFN 35,000",
                features: [
                    "Purchase Requests",
                    "Approval Workflow",
                    "RFQ Management",
                    "Purchase Orders",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Tenders",
                price: "AFN 65,000",
                features: [
                    "Public Tender Pages",
                    "Sealed Online Bids",
                    "Evaluation Committee Scoring",
                    "Supplier Registration Portal",
                    "Document Archive",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multiple Offices & Thresholds",
                    "Contract Management",
                    "Budget Checks Before Approval",
                    "Accounting & Inventory Integration",
                    "Donor Compliance Reports",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "subscription-billing",
        slug: "subscription-billing",
        category: "finance",
        title: {
            en: "Subscription & Recurring Billing",
            da: "صورت‌حساب اشتراک و پرداخت‌های تکراری",
            pa: "د ګډون او تکراري تادیو بل‌کول"
        },
        shortDesc: {
            en: "Automatic monthly bills, reminders and payment tracking",
            da: "بل ماهانه خودکار، یادآوری و پیگیری پرداخت",
            pa: "اتوماتیک میاشتني بلونه، یادونې او د تادیو تعقیب"
        },
        description: {
            en: "We build recurring billing systems for internet providers, schools, gyms, software companies and any business that charges the same customers every month. Plans, start dates and discounts are set once; invoices are generated automatically, reminders go out by SMS or WhatsApp, and late accounts can be flagged or paused. Payments can be recorded by cash, bank or mobile money such as HesabPay or M-Paisa where an integration is available.",
            da: "ما سیستم‌های بل‌دهی تکراری برای ارائه‌کنندگان انترنت، مکاتب، باشگاه‌های ورزشی، شرکت‌های نرم‌افزاری و هر کسب‌وکاری که از مشتریان ثابت هر ماه پول می‌گیرد می‌سازیم. پلان‌ها، تاریخ شروع و تخفیف‌ها یک بار تنظیم می‌شوند؛ بل‌ها به شکل خودکار ساخته می‌شوند، یادآوری‌ها از طریق SMS یا واتس‌اپ فرستاده می‌شوند و حساب‌های معوق علامت‌گذاری یا متوقف می‌شوند. پرداخت‌ها می‌توانند به شکل نقد، بانکی یا پول موبایلی مانند HesabPay یا M-Paisa، در صورت امکان اتصال، ثبت شوند.",
            pa: "موږ د انټرنټ چمتو کوونکو، ښوونځیو، ورزشي کلبونو، سافټویري شرکتونو او هر هغه کاروبار لپاره چې له ثابتو پیرودونکو هره میاشت پیسې اخلي د تکراري بلونو سیسټمونه جوړوو. پلانونه، د پیل نېټې او تخفیفونه یو ځل تنظیمیږي؛ بلونه اتوماتیک جوړیږي، یادونې د SMS یا واټس‌اپ له لارې لیږل کیږي او ځنډېدلي حسابونه نښه یا ودرول کیږي. تادیې کولی شي په نغدو، بانکي یا د موبایلي پیسو لکه HesabPay یا M-Paisa له لارې، که نښلول ممکن وي، ثبت شي."
        },
        features: [
            "Monthly, Quarterly & Annual Plans",
            "Automatic Invoice Generation",
            "SMS & WhatsApp Reminders",
            "Late Account Flagging or Pausing",
            "Discounts & Pro-Rated Changes",
            "Cash, Bank & Mobile Money Records",
            "Customer Self-Service Page",
            "Recurring Revenue Reports"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 20,000",
                features: [
                    "Plans & Customer Records",
                    "Automatic Monthly Invoices",
                    "Payment Recording",
                    "Overdue List",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 40,000",
                features: [
                    "SMS & WhatsApp Reminders",
                    "Auto-Pause for Late Accounts",
                    "Customer Self-Service Page",
                    "Multiple Plans & Discounts",
                    "Revenue Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 70,000+",
                features: [
                    "Mobile Money Integration (Where Available)",
                    "Usage-Based Billing",
                    "Integration with Your Service Platform",
                    "Multiple Branches & Currencies",
                    "Accounting Integration",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "shop-credit-ledger-app",
        slug: "shop-credit-ledger-app",
        category: "finance",
        title: {
            en: "Shopkeeper Credit Ledger App",
            da: "اپلیکیشن کتاب قرض دکانداران",
            pa: "د دوکاندارانو د پور د کتاب اپلیکیشن"
        },
        shortDesc: {
            en: "A digital khata: who owes what, with reminders by SMS",
            da: "کتاب قرض دیجیتال: چه کسی چقدر قرضدار است، با یادآوری SMS",
            pa: "ډیجیټل کتاب: څوک څومره پوروړی دی، د SMS یادونو سره"
        },
        description: {
            en: "We build a digital version of the shopkeeper's credit notebook. Each customer's purchases on credit and payments are entered in seconds, the running balance is always correct, and a polite SMS or WhatsApp reminder can be sent with one tap. It works offline on basic Android phones and backs up when the connection returns, so the record is not lost if the notebook or phone is.",
            da: "ما نسخه دیجیتال کتاب قرض دکاندار را می‌سازیم. خریدهای قرضی و پرداخت‌های هر مشتری در چند ثانیه ثبت می‌شوند، بیلانس همیشه درست است و یادآوری مؤدبانه از طریق SMS یا واتس‌اپ با یک کلیک فرستاده می‌شود. اپ روی موبایل‌های ساده اندروید بدون انترنت کار می‌کند و وقتی انترنت وصل شد بکاپ می‌گیرد، پس اگر کتابچه یا موبایل گم شود، حساب‌ها از بین نمی‌روند.",
            pa: "موږ د دوکاندار د پور د کتابچې ډیجیټل نسخه جوړوو. د هر پیرودونکي پور اخیستي توکي او تادیې په څو ثانیو کې ثبتیږي، بیلانس تل سم وي او په یو کلیک د SMS یا واټس‌اپ له لارې درنه یادونه لیږل کیدی شي. اپ په ساده اندروید موبایلونو پرته له انټرنټه کار کوي او کله چې انټرنټ وصل شي بیک اپ اخلي، نو که کتابچه یا موبایل ورک شي، حسابونه له منځه نه ځي."
        },
        features: [
            "Customer Credit & Payment Entries",
            "Running Balance per Customer",
            "SMS & WhatsApp Reminders",
            "Works Offline on Basic Phones",
            "Automatic Cloud Backup",
            "Dari & Pashto Interface",
            "Daily Credit Summary",
            "Supplier Credit Tracking"
        ],
        pricing: {
            basic: {
                name: "Shop",
                price: "AFN 12,000",
                features: [
                    "Web App Installable on Phone",
                    "Customer Ledger",
                    "WhatsApp Reminder Links",
                    "Cloud Backup",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Branded App",
                price: "AFN 35,000",
                features: [
                    "Android App with Your Name",
                    "Full Offline Mode",
                    "SMS Reminders",
                    "Supplier Ledger",
                    "Multiple Staff Logins",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Platform",
                price: "AFN 70,000+",
                features: [
                    "Multi-Shop Platform for Distributors",
                    "Shop Sign-Up & Admin Panel",
                    "Usage Dashboard",
                    "Mobile Money Integration (Where Available)",
                    "Custom Features",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "wholesale-ordering-app",
        slug: "wholesale-ordering-app",
        category: "finance",
        title: {
            en: "Wholesale Ordering App for Retailers",
            da: "اپلیکیشن سفارش عمده برای پرچون‌فروشان",
            pa: "د پرچون پلورونکو لپاره د عمده فرمایش اپلیکیشن"
        },
        shortDesc: {
            en: "Let shops order from your catalogue on their phone, day or night",
            da: "دکان‌ها از فهرست اجناس شما روی موبایل در هر وقت سفارش بدهند",
            pa: "دوکانونه ستاسو له کتلاګ څخه په موبایل هر وخت فرمایش ورکړي"
        },
        description: {
            en: "We build ordering apps for wholesalers and distributors so that retailers can browse your catalogue, see their own prices and place orders from their phone instead of calling or sending voice messages. Orders arrive in a dashboard for packing and delivery, and each shop can see its order history and outstanding balance. Customer-specific prices, minimum quantities and credit limits are all supported.",
            da: "ما برای عمده‌فروشان و توزیع‌کنندگان اپلیکیشن سفارش می‌سازیم تا پرچون‌فروشان فهرست اجناس شما را ببینند، قیمت‌های مخصوص خود را مشاهده کنند و به جای تماس یا پیام صوتی از موبایل سفارش بدهند. سفارش‌ها در یک داشبورد برای بسته‌بندی و تحویل می‌رسند و هر دکان تاریخچه سفارش‌ها و بیلانس باقی‌مانده خود را می‌بیند. قیمت‌های مخصوص هر مشتری، حداقل مقدار و حد قرض همه پشتیبانی می‌شوند.",
            pa: "موږ د عمده پلورونکو او وېشونکو لپاره د فرمایش اپونه جوړوو ترڅو پرچون پلورونکي ستاسو کتلاګ وګوري، خپلې ځانګړې بیې وګوري او د زنګ یا غږیز پیغام پر ځای له موبایل څخه فرمایش ورکړي. فرمایشونه د بسته‌بندۍ او سپارلو لپاره یو ډشبورډ ته راځي او هر دوکان د خپلو فرمایشونو تاریخچه او پاتې بیلانس ګوري. د هر پیرودونکي ځانګړې بیې، لږ تر لږه مقدار او د پور حد ټول ملاتړ کیږي."
        },
        features: [
            "Product Catalogue with Photos",
            "Customer-Specific Prices",
            "Phone Ordering for Retailers",
            "Order Dashboard for Packing",
            "Minimum Quantities & Credit Limits",
            "Retailer Balance & History",
            "Delivery Status Updates",
            "Dari, Pashto & English"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 35,000",
                features: [
                    "Web Ordering App",
                    "Catalogue & Price Lists",
                    "Order Dashboard",
                    "Retailer Accounts",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 60,000",
                features: [
                    "Android App for Retailers",
                    "Customer-Specific Pricing",
                    "Credit Limits & Balances",
                    "Delivery Tracking",
                    "SMS Order Confirmations",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Distributor",
                price: "Custom",
                features: [
                    "Multiple Warehouses",
                    "Inventory & Accounting Integration",
                    "Promotions & Schemes",
                    "Sales Rep Ordering",
                    "Analytics by Area & Product",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "field-sales-app",
        slug: "field-sales-app",
        category: "finance",
        title: {
            en: "Field Sales & Order Booking App",
            da: "اپلیکیشن فروش ساحوی و ثبت سفارش",
            pa: "د ساحوي پلور او فرمایش د ثبت اپلیکیشن"
        },
        shortDesc: {
            en: "Sales reps book orders and collect payments on their rounds",
            da: "نمایندگان فروش در مسیر خود سفارش ثبت و پول جمع‌آوری می‌کنند",
            pa: "د پلور استازي په خپلو ګرځښتونو کې فرمایش ثبتوي او پیسې ټولوي"
        },
        description: {
            en: "We build apps for sales representatives who visit shops on set routes. Reps see their route for the day, book orders, record cash collected and note stock on the shelf, all offline, and the data syncs when they get signal. Managers see visits, orders and collections per rep and per area in a web dashboard.",
            da: "ما برای نمایندگان فروش که در مسیرهای مشخص به دکان‌ها سر می‌زنند اپلیکیشن می‌سازیم. نمایندگان مسیر روزانه خود را می‌بینند، سفارش ثبت می‌کنند، پول نقد جمع‌آوری‌شده را ثبت می‌کنند و موجودی قفسه را یادداشت می‌کنند، همه بدون انترنت، و معلومات وقتی انترنت پیدا شد همگام می‌شود. مدیران بازدیدها، سفارش‌ها و جمع‌آوری‌ها را بر اساس هر نماینده و هر ساحه در یک داشبورد وب می‌بینند.",
            pa: "موږ د هغو پلور استازو لپاره اپونه جوړوو چې په ټاکلو لارو دوکانونو ته ورځي. استازي د ورځې خپله لاره ګوري، فرمایش ثبتوي، ټولې شوې نغدې پیسې ثبتوي او په المارۍ کې موجودي یادداشتوي، ټول پرته له انټرنټه، او معلومات هغه وخت همغږي کیږي چې انټرنټ پیدا شي. مدیران لیدنې، فرمایشونه او ټولونې د هر استازي او هرې سیمې له مخې په یو ویب ډشبورډ کې ګوري."
        },
        features: [
            "Daily Route & Shop List",
            "Offline Order Booking",
            "Cash Collection Records",
            "Shelf Stock Notes & Photos",
            "GPS Visit Check-In",
            "Shop Balances on the Spot",
            "Manager Web Dashboard",
            "Rep and Area Performance Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 30,000",
                features: [
                    "Android App for Reps",
                    "Order Booking",
                    "Offline Sync",
                    "Basic Manager Dashboard",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 55,000",
                features: [
                    "Routes & Visit Check-In",
                    "Cash Collection Tracking",
                    "Shop Balances",
                    "Stock & Photo Notes",
                    "Performance Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 90,000+",
                features: [
                    "Inventory & Accounting Integration",
                    "Targets & Incentives",
                    "Van Sales with Printed Receipts",
                    "Multiple Regions & Supervisors",
                    "Custom Reports",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "vendor-portal",
        slug: "vendor-portal",
        category: "finance",
        title: {
            en: "Supplier & Vendor Portal",
            da: "پورتال تأمین‌کنندگان و فروشندگان",
            pa: "د اکمالوونکو او پلورونکو پورټال"
        },
        shortDesc: {
            en: "One place for suppliers to register, send invoices and check payments",
            da: "یک جا برای ثبت‌نام تأمین‌کنندگان، فرستادن بل و دیدن پرداخت‌ها",
            pa: "یو ځای چې اکمالوونکي نوم‌لیکنه وکړي، بلونه ولیږي او تادیې وګوري"
        },
        description: {
            en: "We build supplier portals where vendors register with their business documents, receive purchase orders, upload invoices and delivery notes, and check the status of their payments without phoning your finance team. Your staff review and approve suppliers, match invoices to orders, and keep every document in one searchable place. Expiring documents such as business licences trigger reminders.",
            da: "ما پورتال‌های تأمین‌کنندگان می‌سازیم که در آن فروشندگان با اسناد تجارتی خود ثبت‌نام می‌کنند، فرمایش خرید دریافت می‌کنند، بل و رسید تحویل را بارگذاری می‌کنند و وضعیت پرداخت خود را بدون تماس با بخش مالی شما می‌بینند. کارمندان شما تأمین‌کنندگان را بررسی و تأیید می‌کنند، بل‌ها را با فرمایش‌ها مطابقت می‌دهند و همه اسناد را در یک جای قابل جستجو نگه می‌دارند. اسنادی که تاریخ‌شان ختم می‌شود، مانند جواز تجارتی، یادآوری می‌فرستند.",
            pa: "موږ د اکمالوونکو داسې پورټالونه جوړوو چې پلورونکي پکې د خپلو سوداګریزو اسنادو سره نوم‌لیکنه کوي، د پېرود فرمایشونه ترلاسه کوي، بلونه او د سپارنې رسیدونه پورته کوي، او ستاسو مالي ټیم ته له زنګ پرته د خپلو تادیو حالت ګوري. ستاسو کارکوونکي اکمالوونکي ارزوي او تاییدوي، بلونه له فرمایشونو سره پرتله کوي او ټول اسناد په یو د لټون وړ ځای کې ساتي. هغه اسناد چې نېټه یې پای ته رسیږي، لکه سوداګریز جواز، یادونه لیږي."
        },
        features: [
            "Supplier Registration & Documents",
            "Supplier Approval Workflow",
            "Purchase Orders to Suppliers",
            "Invoice & Delivery Note Uploads",
            "Invoice-to-Order Matching",
            "Payment Status Tracking",
            "Document Expiry Reminders",
            "Supplier Performance Notes"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 25,000",
                features: [
                    "Supplier Registration",
                    "Document Uploads",
                    "Approval by Your Team",
                    "Supplier Directory",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 45,000",
                features: [
                    "Purchase Orders",
                    "Invoice Submission",
                    "Payment Status Page",
                    "Expiry Reminders",
                    "Email & SMS Notifications",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 80,000+",
                features: [
                    "Procurement System Integration",
                    "Accounting Integration",
                    "Supplier Ratings",
                    "Multiple Entities or Offices",
                    "Custom Workflows",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "pharmacy-management",
        slug: "pharmacy-management",
        category: "health",
        title: {
            en: "Pharmacy Management System",
            da: "سیستم مدیریت دواخانه",
            pa: "د درملتون د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Stock, expiry dates, sales and suppliers for your pharmacy",
            da: "موجودی، تاریخ انقضا، فروش و تأمین‌کنندگان دواخانه شما",
            pa: "ستاسو د درملتون موجودي، د تېرېدو نېټې، پلور او اکمالوونکي"
        },
        description: {
            en: "We build pharmacy software that tracks every medicine by batch and expiry date, warns you before stock expires or runs low, and speeds up the counter with search by brand or generic name and barcode scanning. Purchases from distributors, supplier balances and daily sales reports are all in one place. The software is ours; barcode scanners and receipt printers can be supplied through partners.",
            da: "ما نرم‌افزار دواخانه می‌سازیم که هر دوا را بر اساس بسته و تاریخ انقضا پیگیری می‌کند، پیش از ختم تاریخ یا کم شدن موجودی هشدار می‌دهد و کار پیشخوان را با جستجو به نام تجارتی یا علمی و اسکن بارکود سریع‌تر می‌سازد. خرید از توزیع‌کنندگان، بیلانس تأمین‌کنندگان و راپور فروش روزانه همه در یک جا هستند. نرم‌افزار از ماست؛ اسکنر بارکود و پرینتر رسید از طریق همکاران تأمین می‌شود.",
            pa: "موږ د درملتون سافټویر جوړوو چې هر درمل د بستې او د تېرېدو د نېټې له مخې تعقیبوي، د نېټې له تېرېدو یا د موجودۍ له کمېدو مخکې خبرتیا ورکوي او د سوداګریز یا علمي نوم له مخې لټون او د بارکوډ سکن سره د کاونټر کار چټکوي. له وېشونکو څخه پېرود، د اکمالوونکو بیلانس او د ورځني پلور راپورونه ټول په یو ځای کې دي. سافټویر زموږ دی؛ د بارکوډ سکنر او د رسید پرنټر د همکارانو له لارې برابریږي."
        },
        features: [
            "Batch & Expiry Tracking",
            "Low Stock and Expiry Alerts",
            "Search by Brand or Generic Name",
            "Barcode Scanning at Counter",
            "Purchase & Supplier Balances",
            "Printed Sales Receipts",
            "Daily Sales and Profit Reports",
            "Multi-User with Roles"
        ],
        pricing: {
            basic: {
                name: "Single Pharmacy",
                price: "AFN 18,000",
                features: [
                    "Stock with Batch & Expiry",
                    "Counter Sales Screen",
                    "Expiry Alerts",
                    "Daily Sales Report",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 35,000",
                features: [
                    "Barcode Scanning",
                    "Purchases & Supplier Ledger",
                    "Returns & Adjustments",
                    "Profit Reports",
                    "Medicine List Import",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Chain",
                price: "AFN 60,000+",
                features: [
                    "Multiple Branches",
                    "Central Stock Transfers",
                    "Head Office Dashboard",
                    "Online Ordering Integration",
                    "Cloud Backup & Sync",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "laboratory-management",
        slug: "laboratory-management",
        category: "health",
        title: {
            en: "Laboratory Management System",
            da: "سیستم مدیریت لابراتوار",
            pa: "د لابراتوار د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Track samples, enter results and print clear lab reports",
            da: "پیگیری نمونه‌ها، ثبت نتایج و چاپ راپورهای واضح لابراتوار",
            pa: "د نمونو تعقیب، د پایلو ثبت او د لابراتوار روښانه راپورونه چاپول"
        },
        description: {
            en: "We build software for diagnostic laboratories that registers patients and test orders, labels samples, and lets technicians enter results against reference ranges set by your lab. Reports are printed or sent to patients and referring doctors as PDF over WhatsApp or SMS link, and billing and referral commissions are tracked alongside. Connection to analysers is possible where the device supports a standard data interface.",
            da: "ما نرم‌افزار برای لابراتوارهای تشخیصی می‌سازیم که مریضان و درخواست‌های معاینه را ثبت می‌کند، نمونه‌ها را لیبل می‌زند و به تکنیشنان اجازه می‌دهد نتایج را در مقابل محدوده‌های مرجعی که لابراتوار شما تعیین کرده ثبت کنند. راپورها چاپ می‌شوند یا به شکل PDF از طریق واتس‌اپ یا لینک SMS برای مریضان و داکتران معرفی‌کننده فرستاده می‌شوند، و بل‌دهی و کمیشن معرفی هم‌زمان پیگیری می‌شود. اتصال به ماشین‌های تحلیل در صورتی ممکن است که دستگاه از یک رابط معلوماتی استندرد پشتیبانی کند.",
            pa: "موږ د تشخیصي لابراتوارونو لپاره سافټویر جوړوو چې ناروغان او د ازموینو غوښتنې ثبتوي، نمونو ته لیبل لګوي او تکنیشنانو ته اجازه ورکوي چې پایلې د هغو مرجع حدونو په مقابل کې ثبت کړي چې ستاسو لابراتوار ټاکلي دي. راپورونه چاپیږي یا د PDF په بڼه د واټس‌اپ یا SMS لینک له لارې ناروغانو او معرفي کوونکو ډاکټرانو ته لیږل کیږي، او بل‌کول او د معرفۍ کمیشن هم ورسره تعقیبیږي. له تحلیلي ماشینونو سره نښلول هغه وخت ممکن دي چې وسیله د معلوماتو معیاري انټرفیس ملاتړ وکړي."
        },
        features: [
            "Patient & Test Order Registration",
            "Sample Labels with Barcodes",
            "Result Entry with Reference Ranges",
            "Printed and PDF Reports",
            "Report Sharing via WhatsApp or SMS",
            "Billing & Referral Commissions",
            "Test Catalogue & Prices",
            "Analyser Integration Where Supported"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 30,000",
                features: [
                    "Patient & Test Registration",
                    "Result Entry",
                    "Branded Printed Reports",
                    "Billing",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 55,000",
                features: [
                    "Barcode Sample Labels",
                    "PDF Reports via WhatsApp/SMS",
                    "Referral Doctor Accounts",
                    "Technician & Verifier Roles",
                    "Daily Income Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Analyser Interfacing",
                    "Multiple Collection Centres",
                    "Patient Online Report Portal",
                    "Hospital System Integration",
                    "Quality Control Logs",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "telemedicine-platform",
        slug: "telemedicine-platform",
        category: "health",
        title: {
            en: "Telemedicine Platform",
            da: "پلتفرم طب از راه دور",
            pa: "له لرې د درملنې پلاټفورم"
        },
        shortDesc: {
            en: "Online consultations that still work on weak connections",
            da: "مشوره آنلاین با داکتر که با انترنت ضعیف هم کار می‌کند",
            pa: "له ډاکټر سره آنلاین مشوره چې په کمزوري انټرنټ هم کار کوي"
        },
        description: {
            en: "We build telemedicine platforms for clinics, hospitals and health programmes: patients book a slot, pay, and meet the doctor by video, with automatic fallback to audio or chat when the connection is weak. Doctors keep consultation notes and issue prescriptions or referrals within the platform, and patients in the provinces or abroad can share earlier reports and photos. The platform is the software only — clinical decisions, licensing of doctors and medical responsibility stay with the healthcare provider.",
            da: "ما برای کلینیک‌ها، شفاخانه‌ها و برنامه‌های صحی پلتفرم طب از راه دور می‌سازیم: مریض وقت می‌گیرد، پرداخت می‌کند و با داکتر از طریق ویدیو ملاقات می‌کند و در صورت ضعیف بودن انترنت، به شکل خودکار به صدا یا چت تغییر می‌کند. داکتران یادداشت‌های مشوره را نگه می‌دارند و نسخه یا معرفی را داخل پلتفرم صادر می‌کنند، و مریضان در ولایات یا خارج از کشور می‌توانند راپورها و عکس‌های قبلی را شریک کنند. این پلتفرم تنها نرم‌افزار است — تصمیم‌های طبی، جواز داکتران و مسئولیت صحی به عهده ارائه‌کننده خدمات صحی است.",
            pa: "موږ د کلینیکونو، روغتونونو او روغتیایي پروګرامونو لپاره له لرې د درملنې پلاټفورمونه جوړوو: ناروغ وخت نیسي، تادیه کوي او له ډاکټر سره د ویډیو له لارې ګوري، او که انټرنټ کمزوری وي په اتوماتیک ډول غږ یا چټ ته اوړي. ډاکټران د مشورې یادښتونه ساتي او نسخه یا معرفي په پلاټفورم کې صادروي، او په ولایتونو یا بهر کې ناروغان کولی شي پخواني راپورونه او انځورونه شریک کړي. پلاټفورم یوازې سافټویر دی — طبي پرېکړې، د ډاکټرانو جواز او روغتیایي مسؤلیت د روغتیایي خدمت وړاندې کوونکي پر غاړه دي."
        },
        features: [
            "Appointment Booking & Payment",
            "Video Consultations",
            "Audio & Chat Fallback on Weak Connections",
            "Consultation Notes",
            "Prescriptions & Referrals",
            "Patient File & Report Sharing",
            "Doctor Schedules & Availability",
            "Dari, Pashto & English Interface"
        ],
        pricing: {
            basic: {
                name: "Clinic",
                price: "AFN 45,000",
                features: [
                    "Web Booking & Video Calls",
                    "Doctor Schedules",
                    "Consultation Notes",
                    "SMS Appointment Reminders",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 85,000",
                features: [
                    "Android & iOS Patient App",
                    "Audio/Chat Fallback",
                    "Online Payments",
                    "Prescriptions & Referrals",
                    "Patient File Uploads",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Network",
                price: "Custom",
                features: [
                    "Multiple Clinics & Specialties",
                    "Hospital System Integration",
                    "Diaspora Payment Options",
                    "Admin & Reporting Dashboard",
                    "Data Security Review",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "veterinary-clinic-system",
        slug: "veterinary-clinic-system",
        category: "health",
        title: {
            en: "Veterinary Clinic System",
            da: "سیستم کلینیک وترنری",
            pa: "د وترنرۍ کلینیک سیسټم"
        },
        shortDesc: {
            en: "Animal records, treatments, vaccinations and billing for vets",
            da: "سوابق حیوانات، تداوی، واکسین و بل‌دهی برای داکتران حیوانات",
            pa: "د څارویو ریکارډونه، درملنه، واکسین او بل‌کول د وترنرانو لپاره"
        },
        description: {
            en: "We build software for veterinary clinics and livestock services that keeps records for each owner and their animals, from pets to herds of sheep, cattle and poultry. Vets record visits, treatments and vaccinations, the clinic tracks medicine stock and bills, and owners receive SMS reminders when the next vaccination or follow-up is due. Field visits to farms can be recorded on a phone and synced later.",
            da: "ما برای کلینیک‌های وترنری و خدمات مالداری نرم‌افزاری می‌سازیم که سوابق هر مالک و حیوانات او را، از حیوانات خانگی تا رمه‌های گوسفند، گاو و مرغ، نگه می‌دارد. داکتران وترنری مراجعه‌ها، تداوی و واکسین‌ها را ثبت می‌کنند، کلینیک موجودی دوا و بل‌ها را پیگیری می‌کند و مالکان وقتی واکسین یا معاینه بعدی نزدیک شد یادآوری SMS دریافت می‌کنند. بازدیدهای ساحوی از فارم‌ها روی موبایل ثبت و بعداً همگام می‌شوند.",
            pa: "موږ د وترنرۍ کلینیکونو او مالدارۍ خدماتو لپاره داسې سافټویر جوړوو چې د هر مالک او د هغه د څارویو ریکارډ ساتي، له کورني څارویو نیولې تر پسونو، غواګانو او چرګانو رمو پورې. وترنران مراجعې، درملنې او واکسینونه ثبتوي، کلینیک د درملو موجودي او بلونه تعقیبوي، او مالکین هغه وخت د SMS یادونه ترلاسه کوي چې راتلونکی واکسین یا معاینه نږدې شي. فارمونو ته ساحوي لیدنې په موبایل ثبتیږي او وروسته همغږي کیږي."
        },
        features: [
            "Owner & Animal Records",
            "Herd and Flock Records",
            "Visit & Treatment History",
            "Vaccination Schedules",
            "SMS Reminders to Owners",
            "Medicine Stock & Expiry",
            "Billing & Receipts",
            "Offline Field Visit Recording"
        ],
        pricing: {
            basic: {
                name: "Clinic",
                price: "AFN 15,000",
                features: [
                    "Owner & Animal Records",
                    "Treatment History",
                    "Billing",
                    "Up to 3 Users",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 30,000",
                features: [
                    "Vaccination Schedules",
                    "SMS Reminders",
                    "Medicine Stock",
                    "Herd & Flock Records",
                    "Monthly Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Livestock Services",
                price: "AFN 50,000+",
                features: [
                    "Field Vet Android App",
                    "Multiple Clinics",
                    "Area & Disease Reports",
                    "Programme / Donor Reporting",
                    "Custom Features",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "mother-child-health-app",
        slug: "mother-child-health-app",
        category: "health",
        title: {
            en: "Mother & Child Health App",
            da: "اپلیکیشن صحت مادر و طفل",
            pa: "د مور او ماشوم د روغتیا اپلیکیشن"
        },
        shortDesc: {
            en: "Vaccination and check-up reminders for mothers and young children",
            da: "یادآوری واکسین و معاینه برای مادران و اطفال خردسال",
            pa: "د میندو او کوچنیو ماشومانو لپاره د واکسین او معاینې یادونې"
        },
        description: {
            en: "We build mother and child health apps for clinics, health NGOs and programmes. Families or health workers register a pregnancy or a child, and the app sends reminders for check-ups and vaccinations by push notification and SMS — SMS matters for families without smartphones. Schedules and health content are provided and approved by your medical team; we build the app, not the medical guidance.",
            da: "ما برای کلینیک‌ها، مؤسسات صحی غیردولتی و برنامه‌های صحی اپلیکیشن صحت مادر و طفل می‌سازیم. خانواده‌ها یا کارکنان صحی بارداری یا طفل را ثبت می‌کنند و اپ برای معاینه‌ها و واکسین‌ها از طریق اعلان و SMS یادآوری می‌فرستد — SMS برای خانواده‌هایی که موبایل هوشمند ندارند مهم است. جدول‌ها و محتوای صحی توسط تیم طبی شما تهیه و تأیید می‌شوند؛ ما اپ را می‌سازیم، نه رهنمایی طبی را.",
            pa: "موږ د کلینیکونو، روغتیایي نادولتي موسسو او پروګرامونو لپاره د مور او ماشوم د روغتیا اپونه جوړوو. کورنۍ یا روغتیایي کارکوونکي امیندواري یا ماشوم ثبتوي، او اپ د معاینو او واکسینونو لپاره د خبرتیا او SMS له لارې یادونې لیږي — SMS د هغو کورنیو لپاره مهم دی چې هوښیار موبایل نه لري. مهال‌وېشونه او روغتیایي منځپانګه ستاسو د طبي ټیم له خوا برابریږي او تاییدیږي؛ موږ اپ جوړوو، نه طبي لارښوونه."
        },
        features: [
            "Pregnancy & Child Registration",
            "Vaccination Reminders",
            "Check-Up Reminders",
            "SMS for Families without Smartphones",
            "Health Worker Mode",
            "Vaccination Card Record",
            "Content Approved by Your Medical Team",
            "Dari & Pashto with Audio Support"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 35,000",
                features: [
                    "Android App",
                    "Child & Pregnancy Registration",
                    "Vaccination Reminders",
                    "Your Schedule & Content",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Programme",
                price: "AFN 65,000",
                features: [
                    "SMS Reminders",
                    "Health Worker Mode",
                    "Offline Use with Sync",
                    "Audio Messages in Dari & Pashto",
                    "Admin Dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multiple Provinces & Facilities",
                    "Coverage and Follow-Up Reports",
                    "Integration with Health Information Systems",
                    "Android & iOS",
                    "Data Protection Review",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "pharmacy-delivery-app",
        slug: "pharmacy-delivery-app",
        category: "health",
        title: {
            en: "Pharmacy Delivery App",
            da: "اپلیکیشن تحویل دوا",
            pa: "د درملو د رسولو اپلیکیشن"
        },
        shortDesc: {
            en: "Customers upload a prescription; your pharmacy delivers",
            da: "مشتری نسخه را بارگذاری می‌کند؛ دواخانه شما تحویل می‌دهد",
            pa: "پیرودونکی نسخه پورته کوي؛ ستاسو درملتون یې رسوي"
        },
        description: {
            en: "We build delivery apps for pharmacies and pharmacy chains. Customers search for products or upload a photo of their prescription, a pharmacist reviews it and confirms what is available and the price, and the order is delivered with cash on delivery or mobile payment. Prescription-only medicines go through pharmacist review before dispatch, and compliance with pharmacy rules remains with the licensed pharmacy.",
            da: "ما برای دواخانه‌ها و زنجیره‌های دواخانه اپلیکیشن تحویل می‌سازیم. مشتریان محصولات را جستجو می‌کنند یا عکس نسخه خود را بارگذاری می‌کنند، دواساز آن را بررسی می‌کند و موجودی و قیمت را تأیید می‌کند، و سفارش با پرداخت نقد هنگام تحویل یا پرداخت موبایلی تحویل داده می‌شود. دواهای نسخه‌دار پیش از ارسال از بررسی دواساز می‌گذرند و رعایت مقررات دواخانه به عهده دواخانه دارای جواز است.",
            pa: "موږ د درملتونونو او د درملتونونو د ځنځیرونو لپاره د رسولو اپونه جوړوو. پیرودونکي محصولات لټوي یا د خپلې نسخې انځور پورته کوي، درمل‌جوړونکی یې ګوري او موجودي او بیه تاییدوي، او فرمایش د سپارلو پر وخت د نغدو تادیې یا موبایلي تادیې سره رسول کیږي. نسخه‌اړین درمل له لېږلو مخکې د درمل‌جوړونکي له کتنې تېریږي، او د درملتون د مقرراتو مراعات د جواز لرونکي درملتون پر غاړه دي."
        },
        features: [
            "Prescription Photo Upload",
            "Pharmacist Review & Confirmation",
            "Product Search & Categories",
            "Cash on Delivery & Mobile Payment",
            "Delivery Tracking",
            "Rider App",
            "Refill Reminders",
            "Pharmacy Order Dashboard"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 40,000",
                features: [
                    "Web Ordering App",
                    "Prescription Upload",
                    "Pharmacist Review Screen",
                    "Order Dashboard",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 75,000",
                features: [
                    "Android & iOS Customer App",
                    "Rider App & Tracking",
                    "Mobile Payment Integration",
                    "Refill Reminders",
                    "Stock Sync with Pharmacy System",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Chain",
                price: "Custom",
                features: [
                    "Multiple Branches & Zones",
                    "Nearest-Branch Order Routing",
                    "Loyalty & Promotions",
                    "Analytics Dashboard",
                    "Custom Integrations",
                    "1 Year Maintenance"
                ]
            }
        }
    }
];

export default services;
