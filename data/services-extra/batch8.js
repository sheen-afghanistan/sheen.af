const services = [
    {
        id: "utility-billing-system",
        slug: "utility-billing-system",
        category: "agri-energy",
        title: {
            en: "Water & Electricity Utility Billing",
            da: "سیستم بل‌دهی آب و برق",
            pa: "د اوبو او برېښنا د بل ورکولو سیسټم"
        },
        shortDesc: {
            en: "Meter readings, bills and payment tracking for water and power providers",
            da: "ثبت میتر، صدور بل و پیگیری پرداخت برای شرکت‌های آب و برق",
            pa: "د میټر لوستل، بلونه او د تادیاتو تعقیب د اوبو او برېښنا شرکتونو لپاره"
        },
        description: {
            en: "A billing system for municipal water projects, community water committees and local power providers. Readers record meter readings in a mobile app that works offline, the system applies your tariffs and prints or texts bills in Dari and Pashto, and every payment — cash, bank or mobile money — is logged against the customer's account so arrears are always visible. Meters and field hardware are not supplied by us; the software works with the meters you already have.",
            da: "یک سیستم بل‌دهی برای پروژه‌های آب شاروالی، کمیته‌های آب محلی و شرکت‌های کوچک برق. میترخوان‌ها ارقام میتر را در یک اپلیکیشن موبایل که بدون انترنت هم کار می‌کند ثبت می‌کنند، سیستم تعرفه‌های شما را تطبیق داده و بل‌ها را به دری و پشتو چاپ یا از طریق SMS می‌فرستد، و هر پرداخت — نقد، بانکی یا پول موبایلی — در حساب مشتری ثبت می‌شود تا باقی‌داری‌ها همیشه معلوم باشد. میتر و سخت‌افزار ساحه‌ای از طرف ما تهیه نمی‌شود؛ نرم‌افزار با میترهای موجود شما کار می‌کند.",
            pa: "د ښاروالۍ د اوبو پروژو، د سیمه‌ییزو اوبو کمېټو او کوچنیو برېښنا شرکتونو لپاره د بل ورکولو سیسټم. میټر لوستونکي د میټر شمېرې په یوه موبایل اپ کې ثبتوي چې پرته له انټرنټ هم کار کوي، سیسټم ستاسو تعرفې پلي کوي او بلونه په دري او پښتو چاپوي یا د SMS له لارې لېږي، او هره تادیه — نغدي، بانکي یا موبایلي پیسې — د پیرودونکي په حساب کې ثبتیږي څو پاتې پورونه تل څرګند وي. میټرونه او ساحوي هارډویر زموږ له خوا نه برابریږي؛ سافټویر ستاسو له موجوده میټرونو سره کار کوي."
        },
        features: [
            "Offline Meter Reading App",
            "Flexible Tariffs & Slabs",
            "Dari & Pashto Bills",
            "Arrears & Payment Tracking",
            "SMS Bill Notifications",
            "Mobile Money Payment Recording",
            "Customer & Connection Registry",
            "Collection & Revenue Reports"
        ],
        pricing: {
            basic: {
                name: "Community",
                price: "AFN 45,000",
                features: [
                    "Up to 2,000 Connections",
                    "Single Tariff Structure",
                    "Printable Dari & Pashto Bills",
                    "Payment & Arrears Ledger",
                    "2 Months Support"
                ]
            },
            professional: {
                name: "Utility",
                price: "AFN 90,000",
                features: [
                    "Up to 20,000 Connections",
                    "Offline Meter Reading App",
                    "Multiple Tariffs & Slabs",
                    "SMS Bills & Reminders",
                    "Collection Reports by Area",
                    "6 Months Support"
                ]
            },
            enterprise: {
                name: "Provider",
                price: "Custom",
                features: [
                    "Unlimited Connections & Zones",
                    "Mobile Money Integration (where available)",
                    "Smart Meter Data Import (via vendor APIs)",
                    "Customer Self-Service Portal",
                    "Role-Based Access for Branches",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "mini-grid-management",
        slug: "mini-grid-management",
        category: "agri-energy",
        title: {
            en: "Mini-Grid Customer & Payment Management",
            da: "مدیریت مشتریان و پرداخت شبکه‌های کوچک برق",
            pa: "د کوچنیو برېښنا شبکو د پیرودونکو او تادیاتو مدیریت"
        },
        shortDesc: {
            en: "Customer, tariff and payment software for solar and hydro mini-grids",
            da: "نرم‌افزار مشتریان، تعرفه و پرداخت برای شبکه‌های کوچک سولری و آبی",
            pa: "د لمریزو او اوبو کوچنیو شبکو لپاره د پیرودونکو، تعرفې او تادیاتو سافټویر"
        },
        description: {
            en: "Software for operators of village solar and micro-hydro mini-grids to register households and shops, set tariffs or prepaid packages, and record payments collected by local agents. Operators see who has paid, who is behind and how much each site collects, even when agents sync only once a day. If your meters offer an API, we connect to it to pull consumption data; meters and installation themselves come through your hardware partners.",
            da: "نرم‌افزاری برای گردانندگان شبکه‌های کوچک سولری و برق‌آبی قریه‌ها تا خانه‌ها و دکان‌ها را ثبت کنند، تعرفه یا بسته‌های پیش‌پرداخت تعیین کنند و پرداخت‌هایی را که نماینده‌های محلی جمع می‌کنند ثبت نمایند. گرداننده می‌بیند چه کسی پرداخته، چه کسی عقب مانده و هر ساحه چقدر جمع‌آوری دارد، حتی اگر نماینده‌ها فقط روزی یک بار همگام‌سازی کنند. اگر میترهای شما API داشته باشند، برای گرفتن ارقام مصرف به آن وصل می‌شویم؛ خود میتر و نصب آن از طریق همکاران سخت‌افزاری شما تهیه می‌شود.",
            pa: "سافټویر د کلیو د لمریزو او کوچنیو اوبو برېښنا شبکو چلوونکو لپاره، څو کورونه او دوکانونه ثبت کړي، تعرفې یا مخکې تادیه شوي کڅوړې وټاکي، او هغه تادیات ثبت کړي چې سیمه‌ییز استازي یې راټولوي. چلوونکی ویني چې چا پیسې ورکړې، څوک وروسته پاتې دی او هره سیمه څومره راټولوي، حتی که استازي ورځ کې یوازې یو ځل همغږي وکړي. که ستاسو میټرونه API ولري، د مصرف معلوماتو د راوړلو لپاره ورسره نښلوو؛ پخپله میټرونه او نصب یې ستاسو د هارډویر همکارانو له لارې کیږي."
        },
        features: [
            "Household & Shop Registry",
            "Tariffs & Prepaid Packages",
            "Agent Payment Collection App",
            "Offline Sync for Remote Sites",
            "Arrears & Disconnection Lists",
            "Multi-Site Dashboard",
            "Meter API Integration (where supported)",
            "Dari & Pashto Interface"
        ],
        pricing: {
            basic: {
                name: "Single Site",
                price: "AFN 40,000",
                features: [
                    "One Mini-Grid Site",
                    "Customer Registry",
                    "Tariff & Payment Ledger",
                    "Monthly Collection Report",
                    "2 Months Support"
                ]
            },
            professional: {
                name: "Operator",
                price: "AFN 85,000",
                features: [
                    "Up to 10 Sites",
                    "Agent Collection App (Offline)",
                    "Prepaid Package Management",
                    "SMS Payment Receipts",
                    "Multi-Site Dashboard",
                    "6 Months Support"
                ]
            },
            enterprise: {
                name: "Network",
                price: "Custom",
                features: [
                    "Unlimited Sites",
                    "Meter Vendor API Integration",
                    "Mobile Money Integration (where available)",
                    "Donor & Investor Reporting Exports",
                    "Custom Tariff Rules",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "donation-platform",
        slug: "donation-platform",
        category: "platforms",
        title: {
            en: "Donation & Fundraising Platform",
            da: "پلتفورم کمک‌های مالی و جمع‌آوری اعانه",
            pa: "د مرستو او بسپنې راټولولو پلاتفورم"
        },
        shortDesc: {
            en: "Online giving pages for charities, schools and community projects",
            da: "صفحات کمک آنلاین برای خیریه‌ها، مکاتب و پروژه‌های اجتماعی",
            pa: "د خیریه موسسو، ښوونځیو او ټولنیزو پروژو لپاره آنلاین مرستې پاڼې"
        },
        description: {
            en: "A fundraising website where your organisation runs campaigns, shows progress toward each goal and accepts one-off or monthly donations. Diaspora supporters can give by card through a payment provider on your own account, and local donors can use mobile money or bank transfer where those are set up. Every gift is recorded with a receipt, and you can post updates so donors see what their money paid for.",
            da: "یک ویب‌سایت جمع‌آوری اعانه که در آن موسسه شما کمپاین راه می‌اندازد، پیشرفت به سوی هر هدف را نشان می‌دهد و کمک‌های یک‌باره یا ماهانه را می‌پذیرد. حامیان مقیم خارج می‌توانند از طریق کارت و درگاه پرداختی که به نام حساب خود شماست کمک کنند، و کمک‌کنندگان داخلی هر جا امکان باشد از پول موبایلی یا انتقال بانکی استفاده کنند. هر کمک با رسید ثبت می‌شود و شما می‌توانید گزارش‌های تازه نشر کنید تا کمک‌کنندگان ببینند پول‌شان کجا مصرف شده است.",
            pa: "د بسپنې راټولولو ویب پاڼه چې ستاسو موسسه پکې کمپاینونه چلوي، د هرې موخې پر لور پرمختګ ښیي او یو ځلي یا میاشتنۍ مرستې مني. په بهر کې مېشت ملاتړي کولی شي د هغه تادیې برابروونکي له لارې چې ستاسو په خپل حساب دی په کارت مرسته وکړي، او کورني مرسته کوونکي چېرې چې شونې وي موبایلي پیسې یا بانکي لېږد کاروي. هره مرسته له رسید سره ثبتیږي، او تاسو کولی شئ تازه راپورونه خپاره کړئ څو مرسته کوونکي وګوري چې پیسې یې په څه لګول شوې."
        },
        features: [
            "Campaign Pages with Goals",
            "One-Off & Monthly Giving",
            "Card Payments for Diaspora Donors",
            "Automatic Donation Receipts",
            "Mobile Money & Bank Transfer Options",
            "Donor Database & Exports",
            "Project Updates for Donors",
            "Dari, Pashto & English Pages"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 35,000",
                features: [
                    "Single Campaign Page",
                    "Card Payment Gateway Setup",
                    "Email Donation Receipts",
                    "Donor List Export",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Organisation",
                price: "AFN 70,000",
                features: [
                    "Unlimited Campaigns",
                    "Monthly Recurring Donations",
                    "Progress Bars & Project Updates",
                    "Donor Dashboard",
                    "Two Languages (incl. RTL)",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Network",
                price: "AFN 120,000+",
                features: [
                    "Peer-to-Peer Fundraising Pages",
                    "Multiple Payment Providers",
                    "Mobile Money Integration (where available)",
                    "CRM or Accounting Integration",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "job-board-platform",
        slug: "job-board-platform",
        category: "platforms",
        title: {
            en: "Job Board Platform",
            da: "پلتفورم اعلانات کاریابی",
            pa: "د دندو د اعلانونو پلاتفورم"
        },
        shortDesc: {
            en: "A job site where employers post vacancies and candidates apply online",
            da: "سایت کاریابی که کارفرمایان بست خالی نشر می‌کنند و متقاضیان آنلاین درخواست می‌دهند",
            pa: "د دندو ویب پاڼه چې کارګمارونکي پکې خالي بستونه خپروي او غوښتونکي آنلاین غوښتنه کوي"
        },
        description: {
            en: "We build job boards for recruiters, industry associations or regional job sites. Employers post vacancies and review applications in their own dashboard, candidates build a profile and apply with a CV, and job alerts go out by email or SMS. Listings can be filtered by province, sector and contract type, and pages work in Dari, Pashto and English.",
            da: "ما سایت‌های کاریابی را برای شرکت‌های استخدام، اتحادیه‌های صنفی یا سایت‌های کاریابی منطقه‌ای می‌سازیم. کارفرمایان بست‌های خالی را نشر و درخواست‌ها را در داشبورد خود بررسی می‌کنند، متقاضیان پروفایل می‌سازند و با CV درخواست می‌دهند، و اطلاعیه‌های وظیفه از طریق ایمیل یا SMS فرستاده می‌شود. اعلان‌ها بر اساس ولایت، سکتور و نوع قرارداد فیلتر می‌شوند و صفحات به دری، پشتو و انگلیسی کار می‌کنند.",
            pa: "موږ د استخدام شرکتونو، صنفي ټولنو یا سیمه‌ییزو دندو ویب پاڼو لپاره د دندو پلاتفورمونه جوړوو. کارګمارونکي خالي بستونه خپروي او غوښتنلیکونه په خپل ډشبورډ کې کتلی شي، غوښتونکي پروفایل جوړوي او له CV سره غوښتنه کوي، او د دندو خبرتیاوې د برېښنالیک یا SMS له لارې لېږل کیږي. اعلانونه د ولایت، سکتور او د قرارداد د ډول له مخې فلټر کیږي، او پاڼې په دري، پښتو او انګلیسي کار کوي."
        },
        features: [
            "Employer Job Posting Dashboard",
            "Candidate Profiles & CV Upload",
            "Search by Province & Sector",
            "Email & SMS Job Alerts",
            "Application Tracking for Employers",
            "Paid or Featured Listings",
            "Admin Moderation Tools",
            "Dari, Pashto & English"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 40,000",
                features: [
                    "Job Listings & Search",
                    "Employer Accounts",
                    "Online Applications with CV",
                    "Admin Approval of Posts",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 80,000",
                features: [
                    "Candidate Profiles",
                    "Employer Application Dashboard",
                    "Email Job Alerts",
                    "Featured / Paid Listings",
                    "Two Languages (incl. RTL)",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Marketplace",
                price: "Custom",
                features: [
                    "Mobile App for Candidates",
                    "SMS Job Alerts",
                    "Online Payment for Listings",
                    "Screening Questions & Shortlists",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "freelance-platform",
        slug: "freelance-platform",
        category: "platforms",
        title: {
            en: "Freelance Marketplace Platform",
            da: "پلتفورم بازار کار آزاد (فریلنس)",
            pa: "د ازاد کار (فریلانس) بازار پلاتفورم"
        },
        shortDesc: {
            en: "A marketplace connecting clients with freelancers, from brief to delivery",
            da: "بازاری که مشتریان را از تعریف کار تا تحویل با فریلنسرها وصل می‌کند",
            pa: "یو بازار چې پیرودونکي له فریلانسرانو سره د کار له تعریف تر سپارلو نښلوي"
        },
        description: {
            en: "A platform where clients post projects, freelancers send proposals, and both sides agree on milestones, exchange files and messages, and leave reviews when the work is done. We build the profiles, bidding, messaging and milestone tracking; how payments are held and released depends on the payment provider and any licence your business holds, and we integrate with whatever you are permitted to use.",
            da: "پلتفورمی که در آن مشتریان پروژه نشر می‌کنند، فریلنسرها پیشنهاد می‌فرستند، و هر دو طرف بر مراحل کار توافق کرده، فایل و پیام رد و بدل می‌کنند و پس از ختم کار نظر می‌گذارند. ما پروفایل‌ها، پیشنهاددهی، پیام‌رسانی و پیگیری مراحل را می‌سازیم؛ نگهداری و آزادسازی پرداخت‌ها به درگاه پرداخت و جواز کاری شما بستگی دارد و ما با هر روشی که شما اجازه استفاده آن را دارید وصل می‌کنیم.",
            pa: "یو پلاتفورم چې پیرودونکي پکې پروژې خپروي، فریلانسران وړاندیزونه لېږي، او دواړه خواوې د کار پړاوونو باندې موافقه کوي، فایلونه او پیغامونه تبادله کوي او د کار له پای ته رسېدو وروسته نظر لیکي. موږ پروفایلونه، وړاندیزونه، پیغامونه او د پړاوونو تعقیب جوړوو؛ د تادیاتو ساتل او خوشې کول ستاسو د تادیې برابروونکي او جواز پورې اړه لري، او موږ له هغې لارې سره نښلوو چې تاسو یې د کارولو اجازه لرئ."
        },
        features: [
            "Client & Freelancer Profiles",
            "Project Posting & Proposals",
            "Milestone Tracking",
            "In-App Messaging & File Sharing",
            "Ratings & Reviews",
            "Skills & Category Search",
            "Payment Provider Integration",
            "Admin Dispute Tools"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 60,000",
                features: [
                    "Client & Freelancer Accounts",
                    "Project Posting & Proposals",
                    "Basic Messaging",
                    "Ratings & Reviews",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Marketplace",
                price: "AFN 120,000",
                features: [
                    "Milestones & Deliverables",
                    "File Sharing in Messages",
                    "Payment Provider Integration",
                    "Commission Settings",
                    "Admin Dispute Dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Platform",
                price: "Custom",
                features: [
                    "Android & iOS Apps",
                    "Identity Verification Workflow",
                    "Multiple Currencies",
                    "Advanced Search & Matching",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "group-buying-coupons",
        slug: "group-buying-coupons",
        category: "platforms",
        title: {
            en: "Group Buying & Discount Coupons Platform",
            da: "پلتفورم خرید گروهی و کوپن‌های تخفیف",
            pa: "د ډله‌ییز پیرود او تخفیف کوپونونو پلاتفورم"
        },
        shortDesc: {
            en: "Deal and coupon site where shops publish offers and customers redeem them",
            da: "سایت تخفیف و کوپن که دکان‌ها پیشنهاد نشر می‌کنند و مشتریان استفاده می‌کنند",
            pa: "د تخفیف او کوپون ویب پاڼه چې دوکانونه وړاندیزونه خپروي او پیرودونکي یې کاروي"
        },
        description: {
            en: "A deals platform where restaurants, shops and service businesses publish time-limited offers, and a deal can be set to unlock only when enough buyers join. Customers get a coupon with a unique code or QR, and merchants check and redeem it from their phone so each coupon is used only once. You control commissions, merchant approval and which deals appear on the home page.",
            da: "یک پلتفورم تخفیف که در آن رستورانت‌ها، دکان‌ها و خدمات‌دهنده‌ها پیشنهادهای وقت‌دار نشر می‌کنند و می‌توان تعیین کرد که یک تخفیف فقط زمانی فعال شود که خریداران کافی بپیوندند. مشتریان کوپنی با کود یا QR مخصوص می‌گیرند و فروشنده آن را از موبایل خود بررسی و استفاده می‌کند تا هر کوپن فقط یک بار استفاده شود. کمیشن، تأیید فروشندگان و پیشنهادهای صفحه اول در اختیار شماست.",
            pa: "د تخفیفونو پلاتفورم چې رستورانتونه، دوکانونه او خدماتي سوداګرۍ پکې د محدود وخت وړاندیزونه خپروي، او یو تخفیف داسې ټاکل کیدی شي چې یوازې هغه وخت فعال شي کله چې کافي پیرودونکي ورسره یوځای شي. پیرودونکي له ځانګړي کوډ یا QR سره کوپون ترلاسه کوي، او پلورونکی یې له خپل موبایل څخه ګوري او کاروي څو هر کوپون یوازې یو ځل وکارول شي. کمیشن، د پلورونکو منظوري او د لومړۍ پاڼې وړاندیزونه ستاسو په واک کې دي."
        },
        features: [
            "Time-Limited Deal Pages",
            "Group Deals with Minimum Buyers",
            "Unique Coupon Codes & QR",
            "Merchant Redemption App",
            "Merchant Accounts & Approval",
            "Commission Settings",
            "Deal Categories & City Filters",
            "Sales & Redemption Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 45,000",
                features: [
                    "Deal Listing Pages",
                    "Coupon Codes",
                    "Merchant Accounts",
                    "Admin Approval",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 85,000",
                features: [
                    "Group Deals with Thresholds",
                    "QR Coupons & Redemption App",
                    "Online Payment Integration",
                    "Commission & Payout Reports",
                    "Two Languages (incl. RTL)",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Marketplace",
                price: "Custom",
                features: [
                    "Android & iOS Customer Apps",
                    "Multi-City Setup",
                    "Referral & Loyalty Rewards",
                    "Push Notifications",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "equipment-rental-platform",
        slug: "equipment-rental-platform",
        category: "platforms",
        title: {
            en: "Equipment Rental Platform",
            da: "پلتفورم کرایه تجهیزات",
            pa: "د تجهیزاتو د کرایې پلاتفورم"
        },
        shortDesc: {
            en: "Online booking for renting generators, machinery, tools and gear",
            da: "رزرو آنلاین برای کرایه جنراتور، ماشین‌آلات، ابزار و وسایل",
            pa: "د جنراتورونو، ماشینونو، اوزارو او وسایلو د کرایې آنلاین بُکنګ"
        },
        description: {
            en: "A rental website and back office for businesses that hire out generators, construction machinery, event equipment or cameras. Customers check availability on a calendar and book by the day or week, while your staff track deposits, handover condition, returns and late fees in one place. It can serve a single rental company or become a marketplace where several owners list their equipment.",
            da: "یک ویب‌سایت کرایه و سیستم اداری برای کسب‌وکارهایی که جنراتور، ماشین‌آلات ساختمانی، وسایل محافل یا کمره کرایه می‌دهند. مشتریان موجودیت را در تقویم می‌بینند و روزانه یا هفته‌وار رزرو می‌کنند، و کارمندان شما ضمانت‌ها، حالت وسیله هنگام تحویل، برگشت و جریمه تأخیر را در یک جا پیگیری می‌کنند. این سیستم می‌تواند برای یک شرکت کرایه باشد یا به بازاری تبدیل شود که چند مالک تجهیزات خود را در آن ثبت کنند.",
            pa: "د هغو سوداګریو لپاره د کرایې ویب پاڼه او دفتري سیسټم چې جنراتورونه، ودانیز ماشینونه، د محفلونو وسایل یا کمرې په کرایه ورکوي. پیرودونکي په کلیز کې شتون ګوري او په ورځ یا اونۍ بُک کوي، او ستاسو کارکوونکي ضمانتونه، د سپارلو پر مهال د وسیلې حالت، بیرته راګرځول او د ځنډ جریمې په یوه ځای کې تعقیبوي. دا سیسټم د یوه کرایه شرکت لپاره کیدی شي یا په یوه بازار بدل شي چې څو مالکان پکې خپل تجهیزات ثبتوي."
        },
        features: [
            "Availability Calendar",
            "Daily & Weekly Rates",
            "Online Booking Requests",
            "Deposit & Late Fee Tracking",
            "Handover & Return Checklists",
            "Equipment Catalogue with Photos",
            "Multi-Owner Marketplace Option",
            "Utilisation & Revenue Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 35,000",
                features: [
                    "Equipment Catalogue",
                    "Availability Calendar",
                    "Booking Request Form",
                    "Admin Booking Dashboard",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Rental Business",
                price: "AFN 70,000",
                features: [
                    "Online Booking & Confirmation",
                    "Deposits & Late Fees",
                    "Handover Photo Checklists",
                    "SMS Return Reminders",
                    "Utilisation Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Marketplace",
                price: "Custom",
                features: [
                    "Multiple Owners & Payouts",
                    "Online Payment Integration",
                    "Delivery & Pickup Scheduling",
                    "Mobile App",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "civic-complaints-app",
        slug: "civic-complaints-app",
        category: "platforms",
        title: {
            en: "Civic Issue Reporting App",
            da: "اپلیکیشن گزارش مشکلات شهری",
            pa: "د ښاري ستونزو د راپور ورکولو اپ"
        },
        shortDesc: {
            en: "Residents report local problems with photo and location; staff track fixes",
            da: "شهروندان مشکلات محلی را با عکس و موقعیت گزارش می‌دهند و کارمندان رسیدگی می‌کنند",
            pa: "اوسېدونکي سیمه‌ییزې ستونزې له انځور او موقعیت سره راپور کوي؛ کارکوونکي یې حل تعقیبوي"
        },
        description: {
            en: "An app for municipalities, community councils and NGOs that lets residents report broken water points, uncollected rubbish, damaged roads or streetlights with a photo and map location. Each report is routed to the right department, staff update its status, and the person who reported it is notified when it is resolved. Reports can be saved offline and sent once a connection is available, and a dashboard shows open issues by area and category.",
            da: "یک اپلیکیشن برای شاروالی‌ها، شوراهای محلی و موسسات که به شهروندان اجازه می‌دهد نل‌های خراب آب، زباله‌های جمع‌نشده، سرک‌های تخریب‌شده یا چراغ‌های جاده را با عکس و موقعیت روی نقشه گزارش دهند. هر گزارش به بخش مربوطه فرستاده می‌شود، کارمندان وضعیت آن را به‌روز می‌کنند و گزارش‌دهنده هنگام حل شدن مشکل خبر می‌شود. گزارش‌ها بدون انترنت ذخیره و پس از وصل شدن فرستاده می‌شوند، و یک داشبورد مشکلات باز را بر اساس ساحه و نوع نشان می‌دهد.",
            pa: "یو اپ د ښاروالیو، سیمه‌ییزو شوراګانو او موسسو لپاره چې اوسېدونکو ته اجازه ورکوي ماتې نلې، نه راټول شوې کثافات، ویجاړ سړکونه یا د سړک څراغونه له انځور او په نقشه کې له موقعیت سره راپور کړي. هر راپور اړوندې څانګې ته لېږل کیږي، کارکوونکي یې حالت تازه کوي، او راپور ورکوونکی د ستونزې د حل پر مهال خبرېږي. راپورونه پرته له انټرنټ ساتل کیږي او د نښلېدو وروسته لېږل کیږي، او یو ډشبورډ پرانیستې ستونزې د سیمې او ډول له مخې ښیي."
        },
        features: [
            "Photo & GPS Issue Reports",
            "Offline Report Saving",
            "Routing to Departments",
            "Status Updates for Residents",
            "Map Dashboard of Open Issues",
            "Issue Categories & Priorities",
            "Anonymous Reporting Option",
            "Dari & Pashto Interface"
        ],
        pricing: {
            basic: {
                name: "Pilot",
                price: "AFN 50,000",
                features: [
                    "Web Reporting Form",
                    "Photo & Location Capture",
                    "Staff Dashboard",
                    "Status Tracking",
                    "2 Months Support"
                ]
            },
            professional: {
                name: "District",
                price: "AFN 100,000",
                features: [
                    "Android App for Residents",
                    "Offline Report Saving",
                    "Department Routing Rules",
                    "SMS Status Notifications",
                    "Map Dashboard",
                    "6 Months Support"
                ]
            },
            enterprise: {
                name: "City",
                price: "Custom",
                features: [
                    "Android & iOS Apps",
                    "Field Staff App for Repairs",
                    "Response-Time Reports",
                    "Public Open-Issues Map",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "sports-league-system",
        slug: "sports-league-system",
        category: "platforms",
        title: {
            en: "Sports League Management System",
            da: "سیستم مدیریت لیگ‌های ورزشی",
            pa: "د لوبو د لیګونو د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Fixtures, results, standings and player registration for leagues and clubs",
            da: "برنامه مسابقات، نتایج، جدول رده‌بندی و ثبت بازیکنان برای لیگ‌ها و باشگاه‌ها",
            pa: "د لیګونو او کلبونو لپاره د سیالیو مهال‌وېش، پایلې، درجه‌بندي او د لوبغاړو ثبت"
        },
        description: {
            en: "A system for cricket, football, volleyball and futsal leagues and tournaments — from school and district competitions to club leagues. Organisers register teams and players, generate fixtures, enter scores from the ground on a phone, and the public site updates standings and top scorers automatically. Fans and families abroad can follow results without needing a social media account.",
            da: "سیستمی برای لیگ‌ها و تورنمنت‌های کرکت، فوتبال، والیبال و فوتسال — از مسابقات مکاتب و ولسوالی‌ها تا لیگ‌های باشگاهی. برگزارکنندگان تیم‌ها و بازیکنان را ثبت می‌کنند، برنامه مسابقات را می‌سازند، نتایج را از میدان با موبایل وارد می‌کنند و سایت عمومی جدول رده‌بندی و بهترین گلزنان را خودکار به‌روز می‌کند. هواداران و خانواده‌ها در خارج هم بدون نیاز به حساب شبکه اجتماعی نتایج را دنبال می‌کنند.",
            pa: "د کرکټ، فوټبال، والیبال او فوټسال د لیګونو او ټورنمنټونو لپاره سیسټم — د ښوونځیو او ولسوالیو له سیالیو تر کلبي لیګونو. تنظیموونکي ټیمونه او لوبغاړي ثبتوي، د سیالیو مهال‌وېش جوړوي، پایلې له میدان څخه په موبایل داخلوي، او عامه ویب پاڼه درجه‌بندي او غوره ګول وهونکي په اوتومات ډول تازه کوي. مینه‌وال او په بهر کې کورنۍ هم پرته له ټولنیزې رسنۍ حساب څخه پایلې تعقیبولی شي."
        },
        features: [
            "Team & Player Registration",
            "Automatic Fixture Generation",
            "Live Score Entry from Phone",
            "Auto-Updated Standings",
            "Player Statistics",
            "Public League Website",
            "Multiple Sports & Formats",
            "Dari, Pashto & English"
        ],
        pricing: {
            basic: {
                name: "Tournament",
                price: "AFN 25,000",
                features: [
                    "One Tournament or League",
                    "Team & Player Registration",
                    "Fixtures & Results",
                    "Standings Table",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "League",
                price: "AFN 55,000",
                features: [
                    "Multiple Divisions & Seasons",
                    "Mobile Score Entry",
                    "Player Statistics",
                    "Public League Website",
                    "Online Team Registration",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Federation",
                price: "AFN 100,000+",
                features: [
                    "Multiple Sports & Leagues",
                    "Registration Fee Payments",
                    "Player ID Cards with QR",
                    "Referee & Venue Scheduling",
                    "Mobile App for Fans",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "event-ticketing",
        slug: "event-ticketing",
        category: "platforms",
        title: {
            en: "Event Ticketing with QR",
            da: "تکت‌فروشی محافل با QR",
            pa: "د QR سره د غونډو ټکټ پلور"
        },
        shortDesc: {
            en: "Sell tickets online and check them in at the gate with QR scanning",
            da: "فروش آنلاین تکت و بررسی آن در دروازه با اسکن QR",
            pa: "ټکټونه آنلاین وپلورئ او په دروازه کې یې د QR سکن سره وګورئ"
        },
        description: {
            en: "A ticketing system for concerts, conferences, exhibitions and sports matches. Buyers choose a ticket type and receive a QR ticket by SMS, email or WhatsApp; your staff scan tickets at the entrance with a phone app that keeps working if the venue's connection drops, and each ticket can only be used once. You see sales and check-ins in real time and can also issue free invitations or sell tickets through agents for cash.",
            da: "یک سیستم تکت‌فروشی برای کنسرت‌ها، کنفرانس‌ها، نمایشگاه‌ها و مسابقات ورزشی. خریداران نوع تکت را انتخاب می‌کنند و تکت QR را از طریق SMS، ایمیل یا WhatsApp دریافت می‌کنند؛ کارمندان شما تکت‌ها را در دروازه با یک اپلیکیشن موبایل اسکن می‌کنند که اگر انترنت محل قطع شود هم کار می‌کند، و هر تکت فقط یک بار قابل استفاده است. فروش و ورودی‌ها را لحظه‌به‌لحظه می‌بینید و می‌توانید دعوت‌نامه رایگان صادر یا از طریق نماینده‌ها تکت نقدی بفروشید.",
            pa: "د کنسرټونو، کنفرانسونو، نندارتونونو او ورزشي سیالیو لپاره د ټکټ پلور سیسټم. پیرودونکي د ټکټ ډول ټاکي او QR ټکټ د SMS، برېښنالیک یا WhatsApp له لارې ترلاسه کوي؛ ستاسو کارکوونکي ټکټونه په دروازه کې د یوه موبایل اپ سره سکن کوي چې که د ځای انټرنټ پرې شي هم کار کوي، او هر ټکټ یوازې یو ځل کارول کیدی شي. پلور او ننوتنې سمدستي ګورئ او کولی شئ وړیا بلنې صادرې کړئ یا د استازو له لارې په نغدو ټکټ وپلورئ."
        },
        features: [
            "Online Ticket Sales",
            "QR Tickets by SMS, Email or WhatsApp",
            "Offline Gate Scanning App",
            "One-Time-Use Ticket Validation",
            "Multiple Ticket Types & Prices",
            "Free Invitations & Guest Lists",
            "Agent Cash Sales",
            "Live Sales & Check-In Dashboard"
        ],
        pricing: {
            basic: {
                name: "Single Event",
                price: "AFN 20,000",
                features: [
                    "One Event Page",
                    "QR Ticket Generation",
                    "Gate Scanning App",
                    "Guest List Export",
                    "Event-Day Support"
                ]
            },
            professional: {
                name: "Organiser",
                price: "AFN 60,000",
                features: [
                    "Unlimited Events",
                    "Online Payment Integration",
                    "Offline Scanning Mode",
                    "Agent & Cash Sales",
                    "Sales Dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Platform",
                price: "Custom",
                features: [
                    "Multi-Organiser Marketplace",
                    "Seat Selection Maps",
                    "Mobile App for Buyers",
                    "Organiser Payout Reports",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "classifieds-platform",
        slug: "classifieds-platform",
        category: "platforms",
        title: {
            en: "Classifieds Platform",
            da: "پلتفورم نیازمندی‌ها و اعلانات",
            pa: "د اړتیاوو او اعلانونو پلاتفورم"
        },
        shortDesc: {
            en: "Buy-and-sell listings for cars, property, phones and household goods",
            da: "اعلانات خرید و فروش موتر، ملک، موبایل و لوازم خانه",
            pa: "د موټرو، ملکیتونو، موبایلونو او کور وسایلو د پېر او پلور اعلانونه"
        },
        description: {
            en: "A classifieds website and app where people post ads with photos, price and location, and buyers contact sellers by phone, WhatsApp or in-app chat. Listings are organised by category and province, with filters that suit each category, such as make and year for cars or rooms and area for property. Photos are compressed for slow connections, and you can earn from featured ads and business accounts.",
            da: "یک ویب‌سایت و اپلیکیشن نیازمندی‌ها که مردم در آن اعلان با عکس، قیمت و موقعیت نشر می‌کنند و خریداران از طریق تلفون، WhatsApp یا چت داخل اپ با فروشنده تماس می‌گیرند. اعلان‌ها بر اساس کتگوری و ولایت تنظیم شده و فیلترهای مخصوص هر کتگوری دارند، مثلاً مدل و سال برای موتر یا تعداد اتاق و مساحت برای ملک. عکس‌ها برای انترنت کند فشرده می‌شوند و شما می‌توانید از اعلان‌های ویژه و حساب‌های تجارتی درآمد داشته باشید.",
            pa: "د اړتیاوو ویب پاڼه او اپ چې خلک پکې له انځور، بیې او موقعیت سره اعلانونه خپروي، او پیرودونکي له پلورونکي سره د تلیفون، WhatsApp یا د اپ دننه چټ له لارې اړیکه نیسي. اعلانونه د کټګورۍ او ولایت له مخې تنظیم شوي او د هرې کټګورۍ لپاره ځانګړي فلټرونه لري، لکه د موټرو لپاره ماډل او کال یا د ملکیت لپاره د کوټو شمېر او مساحت. انځورونه د ورو انټرنټ لپاره کمپرس کیږي، او تاسو کولی شئ له ځانګړو اعلانونو او سوداګریزو حسابونو عاید ترلاسه کړئ."
        },
        features: [
            "Ad Posting with Photos",
            "Category & Province Filters",
            "Call, WhatsApp & Chat Contact",
            "Featured & Paid Ads",
            "Compressed Images for Slow Networks",
            "Business Seller Accounts",
            "Spam & Ad Moderation Tools",
            "Dari, Pashto & English"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 40,000",
                features: [
                    "Ad Posting & Search",
                    "Categories & Provinces",
                    "Seller Contact Buttons",
                    "Admin Moderation",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 85,000",
                features: [
                    "Category-Specific Filters",
                    "In-App Chat",
                    "Featured Ad Payments",
                    "Business Seller Pages",
                    "Two Languages (incl. RTL)",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Marketplace",
                price: "Custom",
                features: [
                    "Android & iOS Apps",
                    "Saved Searches & Alerts",
                    "Seller Verification Workflow",
                    "Advertising Banner System",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "home-services-marketplace",
        slug: "home-services-marketplace",
        category: "platforms",
        title: {
            en: "Home Services Marketplace",
            da: "بازار خدمات خانگی",
            pa: "د کور خدماتو بازار"
        },
        shortDesc: {
            en: "Book plumbers, electricians, cleaners and repair workers online",
            da: "رزرو آنلاین نل‌دوان، برق‌کار، پاک‌کاری و ترمیم‌کار",
            pa: "نلدوان، برېښناکار، پاکونکي او ترمیم کوونکي آنلاین بُک کړئ"
        },
        description: {
            en: "A marketplace where households book plumbers, electricians, carpenters, cleaners, AC and generator technicians. Customers choose a service, describe the job with photos and pick a time; workers accept jobs in their own app, and both sides rate each other afterwards. You decide how workers are vetted and onboarded, and payment can be cash on completion or online where a provider is set up.",
            da: "بازاری که در آن خانواده‌ها نل‌دوان، برق‌کار، نجار، پاک‌کاری، و تخنیکر ایرکندیشن و جنراتور رزرو می‌کنند. مشتریان خدمت را انتخاب، کار را با عکس توضیح و وقت را تعیین می‌کنند؛ کارگران کارها را در اپ خود قبول می‌کنند و پس از ختم کار دو طرف به همدیگر امتیاز می‌دهند. روش بررسی و ثبت کارگران را شما تعیین می‌کنید، و پرداخت می‌تواند نقد پس از ختم کار یا آنلاین — جایی که درگاه پرداخت تنظیم شده — باشد.",
            pa: "یو بازار چې کورنۍ پکې نلدوان، برېښناکار، نجار، پاکونکي، او د ایرکنډیشن او جنراتور تخنیکران بُک کوي. پیرودونکي خدمت ټاکي، کار له انځورونو سره بیانوي او وخت ټاکي؛ کارګران کارونه په خپل اپ کې مني، او د کار وروسته دواړه خواوې یو بل ته نمرې ورکوي. د کارګرو د ارزونې او ثبت طریقه تاسو ټاکئ، او تادیه کیدی شي د کار په پای کې نغدي وي یا آنلاین — چېرې چې د تادیې لاره جوړه شوې وي."
        },
        features: [
            "Service Booking with Photos",
            "Worker App for Job Requests",
            "Time Slot Scheduling",
            "Ratings for Customers & Workers",
            "Worker Onboarding & Profiles",
            "Cash or Online Payment",
            "Commission & Earnings Reports",
            "Dari & Pashto Interface"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 50,000",
                features: [
                    "Web Booking for Customers",
                    "Service Categories",
                    "Admin Job Assignment",
                    "SMS Booking Confirmations",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Marketplace",
                price: "AFN 110,000",
                features: [
                    "Customer Android App",
                    "Worker App (Accept & Update Jobs)",
                    "Ratings & Reviews",
                    "Commission Tracking",
                    "Worker Onboarding Flow",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-City",
                price: "Custom",
                features: [
                    "Android & iOS Apps",
                    "Online Payment Integration",
                    "Live Worker Location",
                    "Multi-City Operations",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "tutor-marketplace",
        slug: "tutor-marketplace",
        category: "platforms",
        title: {
            en: "Tutor Marketplace",
            da: "بازار استادان خصوصی",
            pa: "د خصوصي ښوونکو بازار"
        },
        shortDesc: {
            en: "Students find tutors by subject, book lessons and study online or in person",
            da: "شاگردان بر اساس مضمون استاد پیدا می‌کنند، درس رزرو و آنلاین یا حضوری می‌خوانند",
            pa: "زده‌کوونکي د مضمون له مخې ښوونکي پیدا کوي، درس بُک کوي او آنلاین یا حضوري لولي"
        },
        description: {
            en: "A platform where tutors list the subjects and levels they teach, their rates and available times, and students or parents book lessons. Lessons can be in person or online through a video link, with booking reminders and a record of past sessions. It works for local tuition as well as diaspora families looking for Dari, Pashto, Quran recitation or school-subject teachers for their children abroad.",
            da: "پلتفورمی که در آن استادان مضامین و سطوحی که تدریس می‌کنند، نرخ و وقت‌های آزاد خود را ثبت می‌کنند و شاگردان یا والدین درس رزرو می‌کنند. درس‌ها می‌توانند حضوری یا آنلاین از طریق لینک ویدیویی باشند، با یادآوری رزرو و سابقه جلسات قبلی. این برای تدریس محلی و همچنین خانواده‌های مقیم خارج که برای فرزندان خود استاد دری، پشتو، تلاوت قرآن یا مضامین مکتب می‌خواهند مناسب است.",
            pa: "یو پلاتفورم چې ښوونکي پکې هغه مضامین او کچې چې تدریسوي، خپل نرخ او وزګار وختونه ثبتوي، او زده‌کوونکي یا والدین درسونه بُک کوي. درسونه کیدی شي حضوري یا د ویډیو لینک له لارې آنلاین وي، د بُکنګ یادونو او د تېرو ناستو له ریکارډ سره. دا د سیمه‌ییز تدریس او همدارنګه د هغو بهر مېشتو کورنیو لپاره ګټور دی چې خپلو ماشومانو ته د دري، پښتو، د قرآن تلاوت یا د ښوونځي مضامینو ښوونکي غواړي."
        },
        features: [
            "Tutor Profiles by Subject & Level",
            "Lesson Booking Calendar",
            "Online or In-Person Lessons",
            "Video Lesson Links",
            "Booking Reminders",
            "Reviews from Students & Parents",
            "Package & Hourly Pricing",
            "Diaspora Time Zone Support"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 40,000",
                features: [
                    "Tutor Profiles & Search",
                    "Booking Requests",
                    "Contact & Messaging",
                    "Admin Tutor Approval",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Academy",
                price: "AFN 80,000",
                features: [
                    "Availability Calendars",
                    "Video Lesson Links",
                    "Online Payment Integration",
                    "Lesson Packages",
                    "Time Zone Handling",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Marketplace",
                price: "Custom",
                features: [
                    "Android & iOS Apps",
                    "Tutor Payout Reports",
                    "Homework & Progress Notes",
                    "Multiple Currencies",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "doctor-directory",
        slug: "doctor-directory",
        category: "platforms",
        title: {
            en: "Doctor Directory & Appointment Platform",
            da: "پلتفورم فهرست داکتران و نوبت‌گیری",
            pa: "د ډاکټرانو د لړلیک او وخت اخیستلو پلاتفورم"
        },
        shortDesc: {
            en: "Patients find doctors by specialty and city and book appointments online",
            da: "بیماران داکتر را بر اساس تخصص و شهر پیدا و آنلاین نوبت می‌گیرند",
            pa: "ناروغان ډاکټر د تخصص او ښار له مخې پیدا کوي او آنلاین وخت اخلي"
        },
        description: {
            en: "A directory where patients search doctors and clinics by specialty, city and language, see visiting hours and fees, and request or book an appointment. Doctors or their reception staff manage the schedule in a simple dashboard, and patients get SMS confirmations and reminders. The platform handles listings and bookings only — it gives no medical advice, and checking each doctor's credentials is part of the listing workflow you run.",
            da: "یک فهرست که در آن بیماران داکتران و کلینیک‌ها را بر اساس تخصص، شهر و زبان جستجو می‌کنند، ساعات معاینه و فیس را می‌بینند و نوبت درخواست یا رزرو می‌کنند. داکتران یا کارمندان پذیرش‌شان تقسیم‌اوقات را در یک داشبورد ساده مدیریت می‌کنند و بیماران تأیید و یادآوری را از طریق SMS دریافت می‌کنند. این پلتفورم فقط فهرست و نوبت‌دهی را انجام می‌دهد — هیچ مشوره صحی نمی‌دهد، و بررسی اسناد هر داکتر بخشی از روند ثبت است که شما اجرا می‌کنید.",
            pa: "یو لړلیک چې ناروغان پکې ډاکټران او کلینیکونه د تخصص، ښار او ژبې له مخې لټوي، د کتنې ساعتونه او فیس ګوري، او د وخت غوښتنه یا بُکنګ کوي. ډاکټران یا د هغوی د پذیرش کارکوونکي مهال‌وېش په یوه ساده ډشبورډ کې اداره کوي، او ناروغان تایید او یادونې د SMS له لارې ترلاسه کوي. دا پلاتفورم یوازې لړلیک او بُکنګ اداره کوي — هېڅ طبي مشوره نه ورکوي، او د هر ډاکټر د اسنادو کتنه د ثبت د هغه بهیر برخه ده چې تاسو یې پرمخ وړئ."
        },
        features: [
            "Search by Specialty, City & Language",
            "Doctor & Clinic Profiles",
            "Online Appointment Booking",
            "SMS Confirmations & Reminders",
            "Reception Schedule Dashboard",
            "Doctor Verification Workflow",
            "Patient Reviews (Moderated)",
            "Dari, Pashto & English"
        ],
        pricing: {
            basic: {
                name: "Directory",
                price: "AFN 40,000",
                features: [
                    "Doctor & Clinic Listings",
                    "Specialty & City Search",
                    "Appointment Request Form",
                    "Admin Listing Approval",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Booking",
                price: "AFN 90,000",
                features: [
                    "Live Appointment Slots",
                    "Doctor & Reception Dashboard",
                    "SMS Reminders",
                    "Moderated Reviews",
                    "Two Languages (incl. RTL)",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Network",
                price: "Custom",
                features: [
                    "Android & iOS Patient Apps",
                    "Multi-Branch Clinics & Hospitals",
                    "Online Fee Payment",
                    "Video Consultation Links",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "business-directory",
        slug: "business-directory",
        category: "platforms",
        title: {
            en: "Business Directory",
            da: "فهرست کسب‌وکارها",
            pa: "د سوداګریو لړلیک"
        },
        shortDesc: {
            en: "A searchable guide to local businesses with maps, hours and contacts",
            da: "راهنمای قابل جستجو از کسب‌وکارهای محلی با نقشه، ساعات کاری و تماس",
            pa: "د سیمه‌ییزو سوداګریو د لټون وړ لارښود له نقشې، کاري ساعتونو او اړیکو سره"
        },
        description: {
            en: "A directory website for a city, market, chamber or diaspora community, listing businesses with their category, address, map location, phone, WhatsApp and opening hours. Business owners can claim and update their own listing, add photos and offers, and upgrade to a featured placement. Visitors search by category and area, and diaspora users can find Afghan-owned businesses in their own city.",
            da: "یک ویب‌سایت فهرست برای یک شهر، مارکیت، اتاق تجارت یا جامعه مهاجر که کسب‌وکارها را با کتگوری، آدرس، موقعیت نقشه، تلفون، WhatsApp و ساعات کاری نشان می‌دهد. مالکان می‌توانند صفحه خود را ادعا و به‌روز کنند، عکس و پیشنهاد اضافه کنند و به جایگاه ویژه ارتقا دهند. بازدیدکنندگان بر اساس کتگوری و ساحه جستجو می‌کنند و افغان‌های مقیم خارج می‌توانند کسب‌وکارهای افغانی را در شهر خود پیدا کنند.",
            pa: "د یوه ښار، مارکېټ، سوداګرۍ خونې یا مهاجرې ټولنې لپاره د لړلیک ویب پاڼه چې سوداګرۍ له کټګورۍ، پتې، په نقشه کې موقعیت، تلیفون، WhatsApp او کاري ساعتونو سره ښیي. مالکان کولی شي خپله پاڼه ادعا او تازه کړي، انځورونه او وړاندیزونه ورزیات کړي او ځانګړي ځای ته یې لوړه کړي. لیدونکي د کټګورۍ او سیمې له مخې لټون کوي، او بهر مېشت افغانان کولی شي په خپل ښار کې افغاني سوداګرۍ ومومي."
        },
        features: [
            "Category & Area Search",
            "Map Locations",
            "Phone & WhatsApp Buttons",
            "Owner Claim & Self-Editing",
            "Photos, Offers & Opening Hours",
            "Featured Listings",
            "Reviews (Moderated)",
            "Dari, Pashto & English"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 30,000",
                features: [
                    "Business Listings & Search",
                    "Map & Contact Details",
                    "Admin-Managed Listings",
                    "Mobile-Friendly Design",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Community",
                price: "AFN 60,000",
                features: [
                    "Owner Claim & Editing",
                    "Photos & Offers",
                    "Featured Listing Payments",
                    "Moderated Reviews",
                    "Two Languages (incl. RTL)",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Regional",
                price: "AFN 110,000+",
                features: [
                    "Multiple Cities or Countries",
                    "Mobile App",
                    "Events & News Section",
                    "Advertising Banner System",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "volunteer-platform",
        slug: "volunteer-platform",
        category: "platforms",
        title: {
            en: "Volunteer Management Platform",
            da: "پلتفورم مدیریت داوطلبان",
            pa: "د رضاکارانو د مدیریت پلاتفورم"
        },
        shortDesc: {
            en: "Recruit volunteers, assign shifts and track hours in one place",
            da: "جذب داوطلبان، تقسیم نوبت‌ها و ثبت ساعات کار در یک جا",
            pa: "رضاکاران جذب کړئ، نوبتونه وټاکئ او ساعتونه په یوه ځای کې تعقیب کړئ"
        },
        description: {
            en: "A platform for NGOs, youth groups and community organisations to post volunteer opportunities, collect sign-ups and assign people to activities or shifts. Volunteers receive SMS or email reminders, check in on the day, and build up a record of hours that the organisation can use for certificates. Coordinators see who is available, by skill and location, and can message groups directly.",
            da: "پلتفورمی برای موسسات، گروه‌های جوانان و نهادهای اجتماعی تا فرصت‌های داوطلبانه را نشر، ثبت‌نام‌ها را جمع و افراد را به فعالیت‌ها یا نوبت‌ها تعیین کنند. داوطلبان یادآوری را از طریق SMS یا ایمیل دریافت می‌کنند، در روز فعالیت حاضری می‌دهند و سابقه ساعات کارشان ثبت می‌شود که موسسه می‌تواند برای تصدیق‌نامه از آن استفاده کند. هماهنگ‌کنندگان می‌بینند چه کسی بر اساس مهارت و موقعیت در دسترس است و می‌توانند مستقیماً به گروه‌ها پیام بفرستند.",
            pa: "یو پلاتفورم د موسسو، د ځوانانو ډلو او ټولنیزو بنسټونو لپاره، څو د رضاکارۍ فرصتونه خپاره کړي، نومونه راټول کړي او خلک فعالیتونو یا نوبتونو ته وټاکي. رضاکاران یادونې د SMS یا برېښنالیک له لارې ترلاسه کوي، د فعالیت په ورځ حاضري ورکوي، او د هغوی د کاري ساعتونو ریکارډ جوړیږي چې موسسه یې د تصدیق‌نامو لپاره کارولی شي. همغږي کوونکي ګوري چې څوک د مهارت او موقعیت له مخې شته، او ډلو ته مستقیم پیغام لېږلی شي."
        },
        features: [
            "Volunteer Opportunity Listings",
            "Online Sign-Up Forms",
            "Shift & Activity Scheduling",
            "SMS & Email Reminders",
            "Check-In & Hours Tracking",
            "Skills & Location Search",
            "Volunteer Certificates",
            "Group Messaging"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 30,000",
                features: [
                    "Opportunity Listings",
                    "Sign-Up Forms",
                    "Volunteer Database",
                    "Email Reminders",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Organisation",
                price: "AFN 60,000",
                features: [
                    "Shift Scheduling",
                    "Check-In & Hours Tracking",
                    "SMS Reminders",
                    "Printable Certificates",
                    "Two Languages (incl. RTL)",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Network",
                price: "AFN 100,000+",
                features: [
                    "Multiple Branches & Programmes",
                    "Mobile App for Volunteers",
                    "QR Check-In",
                    "Donor & Impact Reports",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "laundry-app",
        slug: "laundry-app",
        category: "platforms",
        title: {
            en: "Laundry Pickup & Delivery App",
            da: "اپلیکیشن جمع‌آوری و تحویل لباسشویی",
            pa: "د جامو مینځلو د راټولولو او رسولو اپ"
        },
        shortDesc: {
            en: "Customers book a pickup, track their order and get clean clothes delivered",
            da: "مشتریان جمع‌آوری را رزرو، سفارش را پیگیری و لباس پاک را تحویل می‌گیرند",
            pa: "پیرودونکي د راټولولو وخت بُک کوي، فرمایش تعقیبوي او پاکې جامې ترلاسه کوي"
        },
        description: {
            en: "An ordering app and back office for laundries and dry cleaners. Customers choose services such as wash, iron or dry clean, book a pickup slot and follow their order through each stage; staff tag items, update statuses and plan driver routes. The price list, delivery areas and cash or online payment are all set by you, and customers are notified by SMS when their clothes are on the way.",
            da: "یک اپلیکیشن سفارش و سیستم اداری برای لباسشویی‌ها و خشک‌شویی‌ها. مشتریان خدماتی مثل شستن، اتو یا خشک‌شویی را انتخاب، وقت جمع‌آوری را رزرو و سفارش خود را در هر مرحله دنبال می‌کنند؛ کارمندان لباس‌ها را نشانی، وضعیت را به‌روز و مسیر دریوران را برنامه‌ریزی می‌کنند. لیست قیمت، ساحات تحویل و پرداخت نقد یا آنلاین را شما تعیین می‌کنید و مشتریان هنگامی که لباس‌شان در راه است از طریق SMS خبر می‌شوند.",
            pa: "د جامو مینځلو او وچ پاکولو ځایونو لپاره د فرمایش اپ او دفتري سیسټم. پیرودونکي خدمتونه لکه مینځل، اوتو یا وچ پاکول ټاکي، د راټولولو وخت بُک کوي او خپل فرمایش په هر پړاو کې تعقیبوي؛ کارکوونکي جامې نښه کوي، حالت تازه کوي او د موټر چلوونکو لارې پلانوي. د بیو لړلیک، د رسولو سیمې او نغدي یا آنلاین تادیه تاسو ټاکئ، او پیرودونکي هغه وخت د SMS له لارې خبرېږي کله چې یې جامې په لاره وي."
        },
        features: [
            "Pickup Slot Booking",
            "Service & Price List",
            "Order Status Tracking",
            "Item Tagging for Staff",
            "Driver Pickup & Delivery Routes",
            "SMS Order Notifications",
            "Cash or Online Payment",
            "Repeat Customer Discounts"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 35,000",
                features: [
                    "Web Ordering Page",
                    "Price List & Services",
                    "Order Dashboard",
                    "SMS Notifications",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 75,000",
                features: [
                    "Customer Android App",
                    "Pickup Slot Scheduling",
                    "Driver App",
                    "Item Tagging & Status Stages",
                    "Loyalty Discounts",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Chain",
                price: "Custom",
                features: [
                    "Android & iOS Apps",
                    "Multiple Branches",
                    "Online Payment Integration",
                    "Subscription Plans",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "grocery-delivery-app",
        slug: "grocery-delivery-app",
        category: "platforms",
        title: {
            en: "Grocery Delivery App",
            da: "اپلیکیشن تحویل مواد خوراکی",
            pa: "د خوراکي توکو د رسولو اپ"
        },
        shortDesc: {
            en: "Online ordering and home delivery for supermarkets and grocery shops",
            da: "سفارش آنلاین و تحویل به خانه برای سوپرمارکت‌ها و دکان‌های مواد خوراکی",
            pa: "د سوپرمارکېټونو او خوراکي دوکانونو لپاره آنلاین فرمایش او کور ته رسول"
        },
        description: {
            en: "An ordering app for supermarkets and grocery shops, with a catalogue organised by aisle, prices and stock you update from a dashboard, and delivery slots by area. Orders go to a picking screen for staff and then to drivers, and customers pay cash on delivery or online. Diaspora customers can also order groceries for family members in Afghanistan, with delivery to an address they enter.",
            da: "یک اپلیکیشن سفارش برای سوپرمارکت‌ها و دکان‌های مواد خوراکی، با کتلاگ تنظیم‌شده بر اساس بخش‌ها، قیمت و موجودی که از داشبورد به‌روز می‌کنید و وقت‌های تحویل بر اساس ساحه. سفارش‌ها به صفحه جمع‌آوری کارمندان و سپس به دریوران می‌رود، و مشتریان هنگام تحویل نقد یا آنلاین پرداخت می‌کنند. افغان‌های مقیم خارج نیز می‌توانند برای اعضای خانواده خود در افغانستان مواد خوراکی سفارش دهند و آدرس تحویل را خودشان وارد کنند.",
            pa: "د سوپرمارکېټونو او خوراکي دوکانونو لپاره د فرمایش اپ، له داسې کټلاګ سره چې د برخو له مخې تنظیم شوی، بیې او موجودي چې له ډشبورډ څخه یې تازه کوئ، او د سیمې له مخې د رسولو وختونه. فرمایشونه د کارکوونکو د راټولولو پرده او بیا موټر چلوونکو ته ځي، او پیرودونکي د سپارلو پر مهال نغدي یا آنلاین تادیه کوي. بهر مېشت افغانان هم کولی شي په افغانستان کې د خپلې کورنۍ غړو لپاره خوراکي توکي فرمایش کړي او د رسولو پته پخپله ولیکي."
        },
        features: [
            "Product Catalogue by Category",
            "Stock & Price Management",
            "Delivery Slots by Area",
            "Staff Picking Screen",
            "Driver Delivery App",
            "Cash on Delivery & Online Payment",
            "Diaspora Orders for Family",
            "Dari & Pashto Interface"
        ],
        pricing: {
            basic: {
                name: "Shop",
                price: "AFN 45,000",
                features: [
                    "Online Store (Web)",
                    "Up to 500 Products",
                    "Order Dashboard",
                    "Cash on Delivery",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Supermarket",
                price: "AFN 95,000",
                features: [
                    "Customer Android App",
                    "Unlimited Products",
                    "Delivery Slots & Zones",
                    "Picking & Driver Apps",
                    "Online Payment Integration",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Store",
                price: "Custom",
                features: [
                    "Android & iOS Apps",
                    "Multiple Branches & Stock",
                    "POS or Inventory Integration",
                    "Diaspora Ordering & Card Payments",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "salon-booking-app",
        slug: "salon-booking-app",
        category: "platforms",
        title: {
            en: "Beauty Salon Booking App",
            da: "اپلیکیشن نوبت‌گیری آرایشگاه",
            pa: "د ښکلا سالون د وخت اخیستلو اپ"
        },
        shortDesc: {
            en: "Online appointments, staff calendars and reminders for salons and barbers",
            da: "نوبت آنلاین، تقویم کارمندان و یادآوری برای آرایشگاه‌ها و سلمانی‌ها",
            pa: "د سالونونو او نایانو لپاره آنلاین وخت، د کارکوونکو کلیز او یادونې"
        },
        description: {
            en: "A booking system for beauty salons, bridal salons and barbers. Clients choose a service, a staff member and a time, and receive SMS or WhatsApp reminders so fewer slots go empty; staff see their day in a simple calendar. Women's salons can keep client details and photos private to staff, and bridal packages with deposits can be booked weeks in advance.",
            da: "یک سیستم نوبت‌گیری برای آرایشگاه‌های زنانه، آرایشگاه‌های عروس و سلمانی‌ها. مشتریان خدمت، آرایشگر و وقت را انتخاب می‌کنند و یادآوری از طریق SMS یا WhatsApp دریافت می‌کنند تا نوبت‌های کمتری خالی بماند؛ کارمندان روز کاری خود را در یک تقویم ساده می‌بینند. آرایشگاه‌های زنانه می‌توانند معلومات و عکس‌های مشتریان را فقط برای کارمندان محفوظ نگهدارند، و بسته‌های عروس با پیش‌پرداخت می‌توانند هفته‌ها قبل رزرو شوند.",
            pa: "د ښځینه ښکلا سالونونو، د ناوې سالونونو او نایانو لپاره د وخت اخیستلو سیسټم. پیرودونکي خدمت، کارکوونکی او وخت ټاکي او د SMS یا WhatsApp له لارې یادونې ترلاسه کوي څو لږ وختونه خالي پاتې شي؛ کارکوونکي خپله ورځ په یوه ساده کلیز کې ګوري. ښځینه سالونونه کولی شي د پیرودونکو معلومات او انځورونه یوازې د کارکوونکو لپاره خوندي وساتي، او د ناوې کڅوړې له مخکې تادیې سره اونۍ مخکې بُک کیدی شي."
        },
        features: [
            "Online Appointment Booking",
            "Staff Calendars",
            "SMS & WhatsApp Reminders",
            "Service Menu & Prices",
            "Bridal Packages with Deposits",
            "Private Client Records",
            "Walk-In Queue",
            "Daily Sales Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 20,000",
                features: [
                    "Online Booking Page",
                    "Service Menu",
                    "Up to 3 Staff Calendars",
                    "SMS Reminders",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Salon",
                price: "AFN 45,000",
                features: [
                    "Unlimited Staff",
                    "Bridal Packages & Deposits",
                    "Private Client Records",
                    "WhatsApp Reminders",
                    "Sales Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Branch",
                price: "AFN 90,000+",
                features: [
                    "Multiple Branches",
                    "Customer Mobile App",
                    "Loyalty & Gift Vouchers",
                    "Online Payment Integration",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "wedding-vendor-marketplace",
        slug: "wedding-vendor-marketplace",
        category: "platforms",
        title: {
            en: "Wedding Vendor Marketplace",
            da: "بازار خدمات عروسی",
            pa: "د واده خدماتو بازار"
        },
        shortDesc: {
            en: "Compare wedding halls, photographers, decorators and caterers in one place",
            da: "مقایسه تالارهای عروسی، عکاسان، دیزاین‌کاران و آشپزها در یک جا",
            pa: "د واده تالارونه، عکاسان، سینګار کوونکي او پخلي خدمات په یوه ځای کې پرتله کړئ"
        },
        description: {
            en: "A marketplace where families compare wedding halls, photographers, decorators, caterers, music and bridal salons by city, capacity and price range. Vendors manage their own profile, photo gallery, packages and available dates, and couples send enquiries or booking requests directly. Diaspora families planning a wedding in Afghanistan can shortlist vendors and contact them from abroad.",
            da: "بازاری که در آن خانواده‌ها تالارهای عروسی، عکاسان، دیزاین‌کاران، آشپزها، موسیقی و آرایشگاه‌های عروس را بر اساس شهر، ظرفیت و محدوده قیمت مقایسه می‌کنند. فروشندگان پروفایل، گالری عکس، بسته‌ها و تاریخ‌های آزاد خود را مدیریت می‌کنند و زوج‌ها مستقیماً پرسش یا درخواست رزرو می‌فرستند. خانواده‌های مقیم خارج که در افغانستان عروسی برنامه‌ریزی می‌کنند، می‌توانند از بیرون فروشندگان را انتخاب و با آن‌ها تماس بگیرند.",
            pa: "یو بازار چې کورنۍ پکې د واده تالارونه، عکاسان، سینګار کوونکي، د پخلي خدمات، موسیقي او د ناوې سالونونه د ښار، ظرفیت او بیې له مخې پرتله کوي. خدمت وړاندې کوونکي خپل پروفایل، د انځورونو ګالري، کڅوړې او وزګار نېټې اداره کوي، او جوړې مستقیماً پوښتنې یا د بُکنګ غوښتنې لېږي. بهر مېشتې کورنۍ چې په افغانستان کې واده پلانوي، کولی شي له بهر څخه خدمت وړاندې کوونکي وټاکي او ورسره اړیکه ونیسي."
        },
        features: [
            "Vendor Categories & City Search",
            "Halls by Capacity & Price Range",
            "Vendor Galleries & Packages",
            "Availability Dates",
            "Enquiry & Booking Requests",
            "Couple Shortlists",
            "Vendor Subscriptions & Featured Spots",
            "Dari, Pashto & English"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 40,000",
                features: [
                    "Vendor Listings & Search",
                    "Photo Galleries",
                    "Enquiry Forms",
                    "Admin Vendor Approval",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Marketplace",
                price: "AFN 85,000",
                features: [
                    "Vendor Self-Service Dashboards",
                    "Packages & Availability Dates",
                    "Couple Shortlists",
                    "Featured Vendor Payments",
                    "Two Languages (incl. RTL)",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Platform",
                price: "Custom",
                features: [
                    "Android & iOS Apps",
                    "Booking Deposits Online",
                    "Wedding Budget & Checklist Tools",
                    "Multi-City or Diaspora Coverage",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "attendance-system",
        slug: "attendance-system",
        category: "workplace",
        title: {
            en: "Employee Attendance System",
            da: "سیستم حاضری کارمندان",
            pa: "د کارکوونکو د حاضرۍ سیسټم"
        },
        shortDesc: {
            en: "Track check-ins, late arrivals and leave by phone, QR or fingerprint device",
            da: "ثبت ورود، تأخیر و رخصتی با موبایل، QR یا دستگاه انگشت",
            pa: "ننوتل، ځنډ او رخصتي د موبایل، QR یا د ګوتې د وسیلې له لارې ثبت کړئ"
        },
        description: {
            en: "An attendance system where staff check in by phone with location, by scanning a QR code at the office, or through an existing fingerprint or face device that we connect to. Managers see who is present, late or on leave, approve leave requests online, and export monthly attendance for payroll with dates in both the Solar Hijri and Gregorian calendars. We provide the software; attendance devices come through hardware partners or your existing supplier.",
            da: "یک سیستم حاضری که کارمندان با موبایل و موقعیت، با اسکن کود QR در دفتر، یا از طریق دستگاه انگشت یا چهره موجود که ما به آن وصل می‌کنیم حاضری می‌دهند. مدیران می‌بینند چه کسی حاضر، دیر یا رخصت است، درخواست‌های رخصتی را آنلاین تأیید می‌کنند و حاضری ماهانه را با تاریخ هجری شمسی و میلادی برای معاش خروجی می‌گیرند. نرم‌افزار از ماست؛ دستگاه‌های حاضری از طریق همکاران سخت‌افزاری یا تأمین‌کننده فعلی شما تهیه می‌شود.",
            pa: "د حاضرۍ سیسټم چې کارکوونکي پکې په موبایل او موقعیت، په دفتر کې د QR کوډ په سکن کولو، یا د ګوتې یا څېرې د موجوده وسیلې له لارې چې موږ ورسره نښلوو، حاضري ورکوي. مدیران ګوري چې څوک حاضر، ناوخته یا په رخصتۍ دي، د رخصتۍ غوښتنې آنلاین منظوروي، او میاشتنۍ حاضري د معاش لپاره له لمریز هجري او میلادي نېټو سره ایستلی شي. سافټویر زموږ دی؛ د حاضرۍ وسایل د هارډویر همکارانو یا ستاسو د اوسني برابروونکي له لارې راځي."
        },
        features: [
            "Mobile Check-In with Location",
            "QR Code Office Check-In",
            "Fingerprint & Face Device Integration",
            "Late & Absence Reports",
            "Online Leave Requests",
            "Shift & Holiday Calendars",
            "Solar Hijri & Gregorian Dates",
            "Payroll Export"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 25,000",
                features: [
                    "Up to 50 Employees",
                    "Mobile or QR Check-In",
                    "Daily Attendance Dashboard",
                    "Monthly Excel Export",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 55,000",
                features: [
                    "Up to 300 Employees",
                    "Location-Verified Check-In",
                    "Leave Requests & Approvals",
                    "Shifts & Public Holidays",
                    "Payroll Export",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Organisation",
                price: "AFN 95,000+",
                features: [
                    "Unlimited Employees & Branches",
                    "Biometric Device Integration",
                    "Field Staff Tracking",
                    "Integration with Payroll / HR",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "payroll-system",
        slug: "payroll-system",
        category: "workplace",
        title: {
            en: "Payroll System",
            da: "سیستم معاشات",
            pa: "د معاشونو سیسټم"
        },
        shortDesc: {
            en: "Monthly salaries, deductions and payslips calculated in minutes",
            da: "محاسبه معاش ماهانه، کسرات و فیش معاش در چند دقیقه",
            pa: "میاشتني معاشونه، کسرونه او د معاش پاڼې په څو دقیقو کې محاسبه کړئ"
        },
        description: {
            en: "A payroll system that calculates monthly salaries from base pay, allowances, overtime, advances and absences, then produces payslips and a bank or cash payment list. Tax and deduction rules are configurable, with the rates set and checked by your finance team, and staff can be paid in AFN or USD. It can take attendance data directly, keeps a full history per employee, and prints payslips in Dari, Pashto or English.",
            da: "یک سیستم معاشات که معاش ماهانه را از معاش اصلی، امتیازات، اضافه‌کاری، پیش‌پرداخت‌ها و غیرحاضری‌ها محاسبه کرده و فیش معاش و لیست پرداخت بانکی یا نقدی تولید می‌کند. قواعد مالیه و کسرات قابل تنظیم است و نرخ‌ها توسط تیم مالی شما تعیین و بررسی می‌شود، و معاش کارمندان به افغانی یا دالر قابل پرداخت است. این سیستم می‌تواند ارقام حاضری را مستقیماً بگیرد، سابقه کامل هر کارمند را نگه دارد و فیش معاش را به دری، پشتو یا انگلیسی چاپ کند.",
            pa: "د معاشونو سیسټم چې میاشتنی معاش له اصلي معاش، امتیازاتو، اضافه کار، مخکې ورکړل شویو پیسو او غیرحاضریو څخه محاسبه کوي، بیا د معاش پاڼې او د بانکي یا نغدي تادیې لړلیک جوړوي. د مالیې او کسرونو قواعد د تنظیم وړ دي او نرخونه ستاسو مالي ټیم ټاکي او ګوري، او کارکوونکو ته معاش په افغانۍ یا ډالر ورکول کیدی شي. دا سیسټم کولی شي د حاضرۍ معلومات مستقیماً واخلي، د هر کارکوونکي بشپړ تاریخچه ساتي، او د معاش پاڼې په دري، پښتو یا انګلیسي چاپوي."
        },
        features: [
            "Monthly Salary Calculation",
            "Allowances, Overtime & Advances",
            "Configurable Tax & Deduction Rules",
            "Payslips in Dari, Pashto & English",
            "AFN & USD Salaries",
            "Bank & Cash Payment Lists",
            "Attendance Data Import",
            "Payroll History & Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 30,000",
                features: [
                    "Up to 50 Employees",
                    "Salary & Deduction Calculation",
                    "Printable Payslips",
                    "Monthly Payroll Report",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 65,000",
                features: [
                    "Up to 300 Employees",
                    "Allowances, Overtime & Advances",
                    "AFN & USD Payroll",
                    "Attendance Import",
                    "Bank Payment Lists",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Organisation",
                price: "AFN 110,000+",
                features: [
                    "Unlimited Employees & Branches",
                    "Project / Donor Cost Allocation",
                    "Approval Workflow",
                    "Accounting System Export",
                    "Employee Payslip Portal",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "hr-management",
        slug: "hr-management",
        category: "workplace",
        title: {
            en: "HR Management System",
            da: "سیستم مدیریت منابع بشری",
            pa: "د بشري سرچینو د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Employee records, contracts, leave and reviews in one HR system",
            da: "سوابق کارمندان، قراردادها، رخصتی و ارزیابی در یک سیستم",
            pa: "د کارکوونکو ریکارډونه، قراردادونه، رخصتي او ارزونې په یوه سیسټم کې"
        },
        description: {
            en: "An HR system that replaces paper files and spreadsheets: employee profiles, documents and contracts with expiry reminders, leave balances and requests, recruitment, and performance reviews. Staff can view their own details and apply for leave from a self-service portal, and managers approve requests online. It works with our attendance and payroll systems or on its own, and supports both Solar Hijri and Gregorian dates.",
            da: "یک سیستم منابع بشری که جای فایل‌های کاغذی و جدول‌های اکسل را می‌گیرد: پروفایل کارمندان، اسناد و قراردادها با یادآوری ختم مدت، بیلانس و درخواست رخصتی، استخدام و ارزیابی اجراآت. کارمندان می‌توانند معلومات خود را ببینند و از طریق پورتال خدمات شخصی درخواست رخصتی دهند و مدیران درخواست‌ها را آنلاین تأیید می‌کنند. این سیستم با سیستم‌های حاضری و معاشات ما یا به‌تنهایی کار می‌کند و از تاریخ هجری شمسی و میلادی پشتیبانی می‌کند.",
            pa: "د بشري سرچینو سیسټم چې د کاغذي دوسیو او اکسل جدولونو ځای نیسي: د کارکوونکو پروفایلونه، اسناد او قراردادونه د پای ته رسېدو له یادونو سره، د رخصتۍ بیلانس او غوښتنې، استخدام، او د کړنو ارزونه. کارکوونکي کولی شي خپل معلومات وګوري او د ځان‌خدمت پورټل له لارې د رخصتۍ غوښتنه وکړي، او مدیران غوښتنې آنلاین منظوروي. دا سیسټم زموږ د حاضرۍ او معاشونو له سیسټمونو سره یا یوازې کار کوي، او د لمریز هجري او میلادي نېټو ملاتړ کوي."
        },
        features: [
            "Employee Profiles & Documents",
            "Contract Expiry Reminders",
            "Leave Balances & Requests",
            "Employee Self-Service Portal",
            "Recruitment & Applicant Tracking",
            "Performance Reviews",
            "Org Chart & Departments",
            "Solar Hijri & Gregorian Dates"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 35,000",
                features: [
                    "Up to 50 Employees",
                    "Employee Profiles & Documents",
                    "Leave Management",
                    "Contract Reminders",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 75,000",
                features: [
                    "Up to 300 Employees",
                    "Self-Service Portal",
                    "Recruitment Module",
                    "Performance Reviews",
                    "Approval Workflows",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Organisation",
                price: "Custom",
                features: [
                    "Unlimited Employees & Branches",
                    "Attendance & Payroll Integration",
                    "Training & Certificates Tracking",
                    "Custom HR Reports",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "project-management-system",
        slug: "project-management-system",
        category: "workplace",
        title: {
            en: "Project & Task Management System",
            da: "سیستم مدیریت پروژه و وظایف",
            pa: "د پروژو او دندو د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Plan projects, assign tasks and track progress across your team",
            da: "برنامه‌ریزی پروژه‌ها، تقسیم وظایف و پیگیری پیشرفت تیم",
            pa: "پروژې پلان کړئ، دندې ووېشئ او د ټیم پرمختګ تعقیب کړئ"
        },
        description: {
            en: "A project system built around how your organisation actually works — construction sites, donor-funded programmes, software teams or client agencies. Teams break projects into tasks with owners and deadlines, follow them on boards or timelines, share files and comments, and managers see what is overdue at a glance. Field staff can update tasks from a phone, and reports can follow the structure your clients or donors expect.",
            da: "یک سیستم پروژه که بر اساس شیوه واقعی کار موسسه شما ساخته می‌شود — ساحات ساختمانی، برنامه‌های تمویل‌شده توسط دونرها، تیم‌های نرم‌افزاری یا شرکت‌های خدماتی. تیم‌ها پروژه‌ها را به وظایف با مسئول و مهلت تقسیم، آن‌ها را روی بورد یا جدول زمانی دنبال، فایل و نظر شریک می‌کنند، و مدیران کارهای عقب‌مانده را با یک نگاه می‌بینند. کارمندان ساحوی می‌توانند وظایف را با موبایل به‌روز کنند و گزارش‌ها می‌توانند مطابق ساختاری باشند که مشتریان یا دونرهای شما می‌خواهند.",
            pa: "د پروژې سیسټم چې ستاسو د موسسې د کار د اصلي طریقې پر بنسټ جوړیږي — ودانیز ساحې، د دونرانو له لوري تمویل شوي پروګرامونه، د سافټویر ټیمونه یا خدماتي شرکتونه. ټیمونه پروژې په داسې دندو وېشي چې مسؤل او وروستۍ نېټه لري، په بورډ یا مهالي کرښه یې تعقیبوي، فایلونه او نظرونه شریکوي، او مدیران وروسته پاتې کارونه په یوه کتنه ګوري. ساحوي کارکوونکي کولی شي دندې په موبایل تازه کړي، او راپورونه د هغه جوړښت سره سم کیدی شي چې ستاسو پیرودونکي یا دونران یې غواړي."
        },
        features: [
            "Projects, Tasks & Subtasks",
            "Kanban Boards & Timelines",
            "Owners, Deadlines & Priorities",
            "Comments & File Sharing",
            "Overdue Alerts",
            "Mobile Updates for Field Staff",
            "Time Tracking",
            "Client & Donor Progress Reports"
        ],
        pricing: {
            basic: {
                name: "Team",
                price: "AFN 30,000",
                features: [
                    "Up to 25 Users",
                    "Projects & Task Boards",
                    "Deadlines & Assignments",
                    "Comments & Attachments",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 65,000",
                features: [
                    "Up to 150 Users",
                    "Timelines & Milestones",
                    "Time Tracking",
                    "Email & SMS Alerts",
                    "Progress Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Organisation",
                price: "Custom",
                features: [
                    "Unlimited Users & Departments",
                    "Budget & Expense Tracking",
                    "Client / Donor Portal",
                    "Mobile App for Field Staff",
                    "Custom Report Templates",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "helpdesk-ticketing",
        slug: "helpdesk-ticketing",
        category: "workplace",
        title: {
            en: "Helpdesk & Ticketing System",
            da: "سیستم پشتیبانی و تکت‌ها",
            pa: "د ملاتړ او ټکټونو سیسټم"
        },
        shortDesc: {
            en: "Turn customer and staff requests into tracked tickets with clear owners",
            da: "درخواست‌های مشتریان و کارمندان را به تکت‌های قابل پیگیری با مسئول مشخص تبدیل کنید",
            pa: "د پیرودونکو او کارکوونکو غوښتنې د ټاکلي مسؤل سره د تعقیب وړ ټکټونو ته بدل کړئ"
        },
        description: {
            en: "A helpdesk where requests arriving by email, web form or WhatsApp become tickets, each with a category, priority and an assigned staff member. Customers get a ticket number and status updates, while your team uses canned replies, internal notes and response-time targets to stay on top of the queue. It can serve customer support, an internal IT desk or both, with a searchable knowledge base for common questions in Dari, Pashto and English.",
            da: "یک سیستم پشتیبانی که در آن درخواست‌هایی که از طریق ایمیل، فورم ویب یا WhatsApp می‌رسند به تکت تبدیل می‌شوند، هر کدام با کتگوری، اولویت و کارمند مسئول. مشتریان شماره تکت و وضعیت آن را دریافت می‌کنند، و تیم شما از جواب‌های آماده، یادداشت‌های داخلی و اهداف زمان پاسخ استفاده می‌کند تا صف کارها را کنترول کند. این سیستم می‌تواند برای پشتیبانی مشتریان، بخش IT داخلی یا هر دو باشد، با یک پایگاه دانش قابل جستجو برای سوالات معمول به دری، پشتو و انگلیسی.",
            pa: "د ملاتړ سیسټم چې د برېښنالیک، ویب فورم یا WhatsApp له لارې راغلې غوښتنې پکې په ټکټونو بدلیږي، هر یو له کټګورۍ، لومړیتوب او ټاکلي کارکوونکي سره. پیرودونکي د ټکټ شمېره او د حالت تازه معلومات ترلاسه کوي، او ستاسو ټیم چمتو ځوابونه، داخلي یادښتونه او د ځواب د وخت موخې کاروي څو د کارونو کتار کنټرول کړي. دا سیسټم د پیرودونکو ملاتړ، داخلي IT څانګې یا دواړو لپاره کیدی شي، د عامو پوښتنو لپاره د لټون وړ پوهې زېرمې سره په دري، پښتو او انګلیسي."
        },
        features: [
            "Email, Web Form & WhatsApp Intake",
            "Ticket Assignment & Priorities",
            "Customer Status Updates",
            "Canned Replies & Internal Notes",
            "Response-Time Targets",
            "Knowledge Base",
            "Customer & Internal IT Desks",
            "Team Performance Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 25,000",
                features: [
                    "Up to 5 Agents",
                    "Email & Web Form Tickets",
                    "Assignment & Status Tracking",
                    "Customer Email Updates",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 55,000",
                features: [
                    "Up to 25 Agents",
                    "Canned Replies & Internal Notes",
                    "Response-Time Targets",
                    "Knowledge Base",
                    "Two Languages (incl. RTL)",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Organisation",
                price: "AFN 100,000+",
                features: [
                    "Unlimited Agents & Departments",
                    "WhatsApp Integration",
                    "Customer Portal",
                    "CRM or System Integration",
                    "Dari, Pashto & English",
                    "1 Year Maintenance"
                ]
            }
        }
    }
];

export default services;
