const services = [
    {
        id: "company-intranet",
        slug: "company-intranet",
        category: "workplace",
        title: {
            en: "Company Intranet",
            da: "انترانت شرکت",
            pa: "د شرکت انټرانیټ"
        },
        shortDesc: {
            en: "One private portal for staff news, forms, policies and the directory",
            da: "یک پورتال خصوصی برای اخبار، فورم‌ها، پالیسی‌ها و فهرست کارمندان",
            pa: "د کارکوونکو د خبرونو، فورمو، پالیسیو او لړلیک لپاره یو خصوصي پورټال"
        },
        description: {
            en: "We build a private intranet where your staff find announcements, HR forms, policies and a searchable employee directory in one place, in Dari, Pashto and English. Access is limited to your people with role-based permissions, and pages stay light so they load well across branch offices on slower connections.",
            da: "ما یک انترانت خصوصی می‌سازیم که کارمندان شما اعلانات، فورم‌های منابع بشری، پالیسی‌ها و فهرست قابل جستجوی کارمندان را یکجا به دری، پشتو و انگلیسی پیدا کنند. دسترسی فقط برای افراد شما و بر اساس نقش‌ها محدود است، و صفحات سبک نگه داشته می‌شوند تا در نمایندگی‌ها با انترنت کند هم خوب باز شوند.",
            pa: "موږ یو خصوصي انټرانیټ جوړوو چې ستاسو کارکوونکي پکې اعلانونه، د بشري سرچینو فورمې، پالیسۍ او د لټون وړ د کارکوونکو لړلیک یو ځای په دري، پښتو او انګلیسي ومومي. لاسرسی یوازې ستاسو خلکو ته د رول پر بنسټ محدود دی، او پاڼې سپکې ساتل کیږي څو په څانګو کې په ورو انټرنټ هم ښه خلاصې شي."
        },
        features: [
            "Company News & Announcements",
            "Searchable Staff Directory",
            "Policies & Forms Library",
            "Role-Based Access",
            "Dari, Pashto & English Interface",
            "Department Pages",
            "Event & Holiday Calendar",
            "Lightweight Pages for Slow Connections"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 25,000",
                features: [
                    "News & Announcements",
                    "Staff Directory",
                    "Documents Library",
                    "Up to 50 Users",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 45,000",
                features: [
                    "Everything in Starter",
                    "Department Pages",
                    "Online HR Forms",
                    "Shared Calendar",
                    "Up to 300 Users",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multi-Branch Structure",
                    "Single Sign-On Integration",
                    "Integration with HR & Payroll",
                    "Unlimited Users",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "internal-messenger",
        slug: "internal-messenger",
        category: "workplace",
        title: {
            en: "Self-Hosted Internal Messenger",
            da: "پیام‌رسان داخلی شرکت",
            pa: "د شرکت داخلي پیغام رسان"
        },
        shortDesc: {
            en: "Private team chat on your own server, not on public messaging apps",
            da: "چت تیمی خصوصی روی سرور خودتان، نه در اپ‌های پیام‌رسان عمومی",
            pa: "خصوصي ټیمي چټ ستاسو په خپل سرور، نه په عامو پیغام رسانو اپونو کې"
        },
        description: {
            en: "We set up and customise a team messenger that runs on your own server or a cloud account you control, so work conversations and files stay with your organisation instead of on personal WhatsApp groups. It includes channels, direct messages, file sharing and desktop and mobile apps, with Dari and Pashto text displayed correctly.",
            da: "ما یک پیام‌رسان تیمی را روی سرور خودتان یا حساب کلاودی که در اختیار شماست نصب و تنظیم می‌کنیم، تا گفتگوها و فایل‌های کاری نزد سازمان شما بماند نه در گروپ‌های شخصی واتس‌اپ. این سیستم شامل چینل‌ها، پیام مستقیم، شریک‌سازی فایل و اپ‌های کمپیوتر و موبایل است و متن دری و پشتو درست نمایش داده می‌شود.",
            pa: "موږ یو ټیمي پیغام رسان ستاسو په خپل سرور یا هغه کلاوډ حساب کې چې ستاسو په واک کې دی نصبوو او برابروو، څو کاري خبرې او فایلونه ستاسو له سازمان سره پاتې شي نه په شخصي واټساپ ګروپونو کې. پدې کې چینلونه، مستقیم پیغامونه، د فایلونو شریکول او د کمپیوټر او موبایل اپونه شامل دي، او دري او پښتو متن په سمه توګه ښودل کیږي."
        },
        features: [
            "Self-Hosted on Your Server",
            "Channels & Direct Messages",
            "File & Image Sharing",
            "Desktop & Mobile Apps",
            "Message Search & History",
            "Admin User Management",
            "Dari & Pashto Text Support",
            "Backup & Retention Settings"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 30,000",
                features: [
                    "Installation on Your Server",
                    "Channels & Direct Messages",
                    "File Sharing",
                    "Up to 50 Users",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 60,000",
                features: [
                    "Everything in Starter",
                    "Branded Mobile & Desktop Apps",
                    "Audio & Video Calls",
                    "Automated Backups",
                    "Up to 300 Users",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multi-Server or High-Availability Setup",
                    "Single Sign-On Integration",
                    "Custom Bots & Integrations",
                    "Unlimited Users",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "call-center-software",
        slug: "call-center-software",
        category: "workplace",
        title: {
            en: "Call Center Software",
            da: "سافت‌ویر مرکز تماس",
            pa: "د زنګ مرکز سافټویر"
        },
        shortDesc: {
            en: "Route calls, see caller history and record outcomes in one agent screen",
            da: "تقسیم تماس‌ها، دیدن سابقه تماس‌گیرنده و ثبت نتیجه در یک صفحه",
            pa: "د زنګونو ویشل، د زنګ وهونکي تاریخچه لیدل او پایله ثبتول په یوه پاڼه کې"
        },
        description: {
            en: "We set up call center software that queues incoming calls, routes them to available agents and shows each caller's history before the agent answers. Supervisors get live queue views and call reports. The software is ours to configure; phone lines and SIP trunks come from your telecom provider, and headsets or IP phones through partners.",
            da: "ما سافت‌ویر مرکز تماس را راه‌اندازی می‌کنیم که تماس‌های ورودی را در صف می‌گذارد، به کارمند آزاد می‌فرستد و پیش از جواب دادن سابقه هر تماس‌گیرنده را نشان می‌دهد. سرپرستان صف‌ها را به‌طور زنده می‌بینند و راپور تماس‌ها را دارند. تنظیم سافت‌ویر کار ماست؛ خطوط تلفون و SIP از شرکت مخابراتی شما، و هدست یا تلفون‌های IP از طریق همکاران ما تهیه می‌شود.",
            pa: "موږ د زنګ مرکز سافټویر برابروو چې راتلونکي زنګونه په کتار کې ږدي، وزګار کارکوونکي ته یې لیږي او د ځواب ورکولو مخکې د هر زنګ وهونکي تاریخچه ښیي. څارونکي کتارونه ژوندي ویني او د زنګونو راپورونه لري. د سافټویر برابرول زموږ کار دی؛ د تلیفون لیکې او SIP ستاسو د مخابراتي شرکت له خوا، او هډسیټونه یا IP تلیفونونه زموږ د همکارانو له لارې برابریږي."
        },
        features: [
            "Call Queues & Routing",
            "Caller History Pop-Up",
            "Live Supervisor Dashboard",
            "Call Recording",
            "Call Outcome Notes",
            "Agent Performance Reports",
            "CRM Integration",
            "Works with SIP Lines from Your Provider"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 35,000",
                features: [
                    "Up to 5 Agents",
                    "Single Call Queue",
                    "Caller History",
                    "Basic Call Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 70,000",
                features: [
                    "Up to 25 Agents",
                    "Multiple Queues & Skills Routing",
                    "Call Recording",
                    "Supervisor Dashboard",
                    "CRM Integration",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Unlimited Agents",
                    "Multi-Site Call Centers",
                    "Outbound Campaign Dialing",
                    "Custom Reports & Integrations",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "ivr-system",
        slug: "ivr-system",
        category: "workplace",
        title: {
            en: "IVR Phone Menu System",
            da: "سیستم منوی تلفونی IVR",
            pa: "د IVR تلیفوني مینو سیسټم"
        },
        shortDesc: {
            en: "Phone menus in Dari, Pashto and English that send callers to the right desk",
            da: "منوی تلفونی به دری، پشتو و انگلیسی که تماس‌گیرنده را به بخش درست می‌فرستد",
            pa: "په دري، پښتو او انګلیسي تلیفوني مینو چې زنګ وهونکي سمې څانګې ته لیږي"
        },
        description: {
            en: "We design and configure IVR menus so callers can press a number to reach sales, support or a branch, hear opening hours, or check a simple status without waiting for an operator. Voice prompts can be recorded in Dari, Pashto and English. Phone lines and SIP trunks come from your telecom provider; we handle the menu logic and setup.",
            da: "ما منوهای IVR را دیزاین و تنظیم می‌کنیم تا تماس‌گیرنده با فشار یک نمبر به بخش فروش، پشتیبانی یا نمایندگی برسد، ساعات کاری را بشنود یا وضعیت ساده‌ای را بدون انتظار برای اپراتور بپرسد. پیام‌های صوتی به دری، پشتو و انگلیسی ثبت شده می‌توانند. خطوط تلفون و SIP از شرکت مخابراتی شماست؛ منطق منو و راه‌اندازی آن با ماست.",
            pa: "موږ IVR مینوګانې ډیزاین او برابروو څو زنګ وهونکی د یوې شمېرې په کښېکاږلو پلور، ملاتړ یا څانګې ته ورسیږي، د کار وختونه واوري، یا پرته د اپریټر له انتظاره یو ساده حالت وپوښتي. غږیز پیغامونه په دري، پښتو او انګلیسي ثبتیدای شي. د تلیفون لیکې او SIP ستاسو د مخابراتي شرکت دي؛ د مینو منطق او برابرول زموږ کار دی."
        },
        features: [
            "Multi-Level Phone Menus",
            "Dari, Pashto & English Prompts",
            "Opening Hours & Holiday Rules",
            "Transfer to Departments or Branches",
            "Voicemail",
            "Call Volume Reports",
            "Simple Status Lookups via API",
            "Works with SIP Lines from Your Provider"
        ],
        pricing: {
            basic: {
                name: "Basic Menu",
                price: "AFN 15,000",
                features: [
                    "One-Level Menu (Up to 5 Options)",
                    "Single Language",
                    "Opening Hours Message",
                    "Voicemail",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Multi-Language",
                price: "AFN 30,000",
                features: [
                    "Multi-Level Menus",
                    "Dari, Pashto & English",
                    "Holiday & After-Hours Rules",
                    "Branch Transfers",
                    "Call Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Integrated",
                price: "AFN 55,000+",
                features: [
                    "Everything in Multi-Language",
                    "Status Lookups from Your System",
                    "Call Center Integration",
                    "Callback Requests",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "self-service-kiosk",
        slug: "self-service-kiosk",
        category: "workplace",
        title: {
            en: "Self-Service Kiosk Software",
            da: "سافت‌ویر کیوسک خودخدمت",
            pa: "د ځان خدمت کیوسک سافټویر"
        },
        shortDesc: {
            en: "Touchscreen kiosk apps for check-in, orders, forms and information",
            da: "اپ‌های کیوسک لمسی برای ثبت ورود، سفارش، فورم و معلومات",
            pa: "د لمسي کیوسک اپونه د راتګ ثبت، فرمایش، فورمو او معلوماتو لپاره"
        },
        description: {
            en: "We build touchscreen kiosk software that lets customers check in, place orders, fill forms or find information without waiting at a counter. Screens are designed for large buttons and Dari, Pashto and English, and keep working if the connection drops, syncing when it returns. The software is ours; kiosk hardware, printers and installation come through partners.",
            da: "ما سافت‌ویر کیوسک لمسی می‌سازیم که مشتریان بدون انتظار در کاونتر ورود خود را ثبت کنند، سفارش بدهند، فورم پر کنند یا معلومات پیدا کنند. صفحات با دکمه‌های بزرگ و به دری، پشتو و انگلیسی دیزاین می‌شوند و اگر انترنت قطع شود به کار ادامه می‌دهند و بعداً همگام‌سازی می‌کنند. سافت‌ویر از ماست؛ سخت‌افزار کیوسک، پرنتر و نصب از طریق همکاران تهیه می‌شود.",
            pa: "موږ د لمسي کیوسک سافټویر جوړوو چې پیرودونکي پرته د کاونټر انتظاره خپل راتګ ثبت کړي، فرمایش ورکړي، فورم ډک کړي یا معلومات ومومي. پاڼې د لویو تڼیو سره او په دري، پښتو او انګلیسي ډیزاین کیږي، او که انټرنټ پرې شي کار ته دوام ورکوي او وروسته همغږي کیږي. سافټویر زموږ دی؛ د کیوسک هارډویر، پرنټر او نصب د همکارانو له لارې برابریږي."
        },
        features: [
            "Touch-Friendly Interface",
            "Dari, Pashto & English",
            "Check-In, Orders & Forms",
            "Offline Mode with Sync",
            "Receipt & Ticket Printing",
            "Remote Content Updates",
            "Locked-Down Kiosk Mode",
            "Usage Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 30,000",
                features: [
                    "Single Kiosk Flow (e.g. Check-In)",
                    "Up to 6 Screens",
                    "Trilingual Interface",
                    "Kiosk Lock Mode",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 60,000",
                features: [
                    "Multiple Flows",
                    "Receipt Printing",
                    "Offline Mode with Sync",
                    "Admin Panel for Content",
                    "Integration with One System",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multi-Location Kiosk Fleet",
                    "Payment Integration",
                    "Remote Monitoring",
                    "Custom Integrations",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "digital-signage",
        slug: "digital-signage",
        category: "workplace",
        title: {
            en: "Digital Signage Management",
            da: "مدیریت تابلوهای دیجیتال",
            pa: "د ډیجیټل لوحو مدیریت"
        },
        shortDesc: {
            en: "Control what plays on your screens from one dashboard",
            da: "کنترل محتوای همه صفحه‌نمایش‌ها از یک داشبورد",
            pa: "د خپلو ټولو سکرینونو منځپانګه له یوه ډشبورډ څخه کنټرول کړئ"
        },
        description: {
            en: "We set up a signage system so you can schedule menus, prices, promotions and announcements on screens in shops, lobbies or branches from one web dashboard. Content is cached on each screen, so it keeps playing when the connection drops. We supply and configure the software; screens and media players can be sourced and installed through partners.",
            da: "ما یک سیستم تابلوی دیجیتال راه‌اندازی می‌کنیم تا منو، قیمت‌ها، تخفیف‌ها و اعلانات را روی صفحه‌های دوکان، لابی یا نمایندگی‌ها از یک داشبورد وب زمان‌بندی کنید. محتوا روی هر صفحه ذخیره می‌شود، پس با قطع انترنت هم نمایش ادامه دارد. سافت‌ویر را ما تهیه و تنظیم می‌کنیم؛ صفحه‌ها و پلیرها از طریق همکاران تهیه و نصب شده می‌توانند.",
            pa: "موږ د ډیجیټل لوحو سیسټم برابروو څو تاسو مینو، بیې، تخفیفونه او اعلانونه د دوکانونو، لابیو یا څانګو په سکرینونو له یوه ویب ډشبورډ څخه مهالویش کړئ. منځپانګه په هر سکرین ساتل کیږي، نو د انټرنټ د پرې کیدو پر مهال هم ښودنه دوام لري. سافټویر موږ برابروو؛ سکرینونه او پلیرونه د همکارانو له لارې برابرېدای او نصبېدای شي."
        },
        features: [
            "Central Web Dashboard",
            "Content Scheduling",
            "Offline Playback",
            "Screen Groups by Location",
            "Images, Video & Live Text",
            "Dari & Pashto Text Support",
            "Menu & Price Boards",
            "Screen Status Monitoring"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 12,000",
                features: [
                    "Up to 3 Screens",
                    "Image & Video Playlists",
                    "Basic Scheduling",
                    "Setup & Training",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 25,000",
                features: [
                    "Up to 15 Screens",
                    "Screen Groups by Branch",
                    "Menu & Price Board Templates",
                    "Offline Playback",
                    "Status Monitoring",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Network",
                price: "AFN 45,000+",
                features: [
                    "Unlimited Screens",
                    "Multi-Branch Management",
                    "Live Data Feeds (Prices, Rates)",
                    "User Roles & Approvals",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "visitor-management",
        slug: "visitor-management",
        category: "workplace",
        title: {
            en: "Visitor Management System",
            da: "سیستم مدیریت مراجعین",
            pa: "د لیدونکو د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Register visitors, notify hosts and keep a clear log of who came in",
            da: "ثبت مراجعین، خبر دادن به میزبان و نگهداری سابقه واضح ورود",
            pa: "د لیدونکو ثبت، کوربه خبرول او د راتلونکو روښانه ثبت ساتل"
        },
        description: {
            en: "We build a visitor system that replaces the paper logbook at reception: guards or receptionists register visitors, the host is notified by SMS or app, and every entry and exit is recorded with time and purpose. Pre-registered guests can be checked in by QR code. Badge printers, ID scanners and cameras, if needed, come through partners.",
            da: "ما یک سیستم مراجعین می‌سازیم که جای کتابچه کاغذی دروازه را می‌گیرد: نگهبان یا پذیرش مراجع را ثبت می‌کند، میزبان از طریق SMS یا اپ خبر می‌شود، و هر ورود و خروج با زمان و هدف ثبت می‌گردد. مهمانانی که از قبل ثبت شده‌اند با QR کود وارد می‌شوند. پرنتر کارت، اسکنر تذکره و کمره در صورت نیاز از طریق همکاران تهیه می‌شود.",
            pa: "موږ د لیدونکو سیسټم جوړوو چې د دروازې د کاغذي کتابچې ځای نیسي: ساتونکی یا استقبالیه لیدونکی ثبتوي، کوربه ته د SMS یا اپ له لارې خبر ورکول کیږي، او هر ننوتل او وتل د وخت او موخې سره ثبتیږي. هغه میلمانه چې مخکې ثبت شوي د QR کوډ په مرسته ننوځي. د کارت پرنټر، د تذکرې سکنر او کمرې د اړتیا په صورت کې د همکارانو له لارې برابریږي."
        },
        features: [
            "Digital Visitor Log",
            "Host Notifications by SMS or App",
            "QR Pre-Registration",
            "Entry & Exit Times",
            "Visitor Photo Capture",
            "Badge Printing",
            "Blocked Visitor List",
            "Daily & Monthly Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 14,000",
                features: [
                    "Single Reception Desk",
                    "Digital Visitor Log",
                    "Host Notifications",
                    "Basic Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 28,000",
                features: [
                    "Multiple Gates or Desks",
                    "QR Pre-Registration",
                    "Visitor Photo Capture",
                    "Badge Printing",
                    "Blocked Visitor List",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 50,000+",
                features: [
                    "Multi-Site Visitor Records",
                    "Integration with Access Control",
                    "Contractor & Delivery Tracking",
                    "Custom Reports",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "meeting-room-booking",
        slug: "meeting-room-booking",
        category: "workplace",
        title: {
            en: "Meeting Room Booking System",
            da: "سیستم رزرو اتاق جلسات",
            pa: "د غونډو د خونو د بک کولو سیسټم"
        },
        shortDesc: {
            en: "Book rooms, halls and shared equipment without double bookings",
            da: "رزرو اتاق، سالون و وسایل مشترک بدون رزرو تکراری",
            pa: "د خونو، تالارونو او ګډو وسایلو بک کول پرته له دوه ځلي بکینګ"
        },
        description: {
            en: "We build a simple booking system where staff see which meeting rooms, halls or projectors are free and reserve them in a few taps. It prevents double bookings, sends reminders, and can show the day's schedule on a tablet outside each room. It works in Dari, Pashto and English and can sync with Google or Outlook calendars.",
            da: "ما یک سیستم ساده رزرو می‌سازیم که کارمندان ببینند کدام اتاق جلسه، سالون یا پروجکتور آزاد است و با چند لمس آن را رزرو کنند. این سیستم از رزرو تکراری جلوگیری می‌کند، یادآوری می‌فرستد و می‌تواند برنامه روز را روی تبلت کنار هر اتاق نشان دهد. به دری، پشتو و انگلیسی کار می‌کند و با تقویم Google یا Outlook همگام می‌شود.",
            pa: "موږ یو ساده بکینګ سیسټم جوړوو چې کارکوونکي وګوري کومه د غونډې خونه، تالار یا پروجکټر وزګار دی او په څو ټکونو یې بک کړي. دا سیسټم د دوه ځلي بکینګ مخه نیسي، یادونې لیږي، او کولی شي د ورځې پروګرام د هرې خونې تر څنګ په ټابلیټ وښیي. په دري، پښتو او انګلیسي کار کوي او د Google یا Outlook کلیزې سره همغږي کیدای شي."
        },
        features: [
            "Live Room Availability",
            "No Double Bookings",
            "Email & SMS Reminders",
            "Room Tablet Display",
            "Equipment Booking",
            "Google & Outlook Calendar Sync",
            "Approval for Large Halls",
            "Room Usage Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 8,000",
                features: [
                    "Up to 5 Rooms",
                    "Web Booking Calendar",
                    "Email Reminders",
                    "Admin Panel",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 16,000",
                features: [
                    "Up to 20 Rooms",
                    "Room Tablet Display",
                    "Equipment Booking",
                    "Calendar Sync",
                    "Usage Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 30,000+",
                features: [
                    "Unlimited Rooms & Buildings",
                    "Approval Workflows",
                    "Single Sign-On Integration",
                    "External Guest Bookings",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "document-management",
        slug: "document-management",
        category: "workplace",
        title: {
            en: "Document Management System",
            da: "سیستم مدیریت اسناد",
            pa: "د اسنادو د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Scan, organise and find your files with access control and versions",
            da: "اسکن، تنظیم و پیدا کردن اسناد با کنترل دسترسی و نسخه‌ها",
            pa: "د اسنادو سکن، تنظیم او موندل د لاسرسي کنټرول او نسخو سره"
        },
        description: {
            en: "We set up a document management system that brings scanned papers, contracts and office files into one searchable archive. Folders follow your departments, every document keeps its version history, and permissions control who can view, edit or delete. Search works on Dari, Pashto and English file names and tags, and backups run automatically.",
            da: "ما یک سیستم مدیریت اسناد راه‌اندازی می‌کنیم که کاغذهای اسکن‌شده، قراردادها و فایل‌های دفتری را در یک آرشیف قابل جستجو جمع می‌کند. پوشه‌ها مطابق دیپارتمنت‌های شماست، هر سند تاریخچه نسخه‌های خود را دارد، و صلاحیت‌ها تعیین می‌کنند چه کسی ببیند، ویرایش یا حذف کند. جستجو روی نام فایل‌ها و برچسپ‌های دری، پشتو و انگلیسی کار می‌کند و بک‌اپ خودکار گرفته می‌شود.",
            pa: "موږ د اسنادو د مدیریت سیسټم برابروو چې سکن شوي کاغذونه، قراردادونه او دفتري فایلونه په یوه د لټون وړ آرشیف کې راټولوي. فولډرونه ستاسو د څانګو سره سم دي، هر سند د خپلو نسخو تاریخچه ساتي، او اجازې ټاکي چې څوک یې وویني، سم یې کړي یا یې ړنګ کړي. لټون د دري، پښتو او انګلیسي فایل نومونو او ټګونو په اساس کار کوي او بیک اپ په اتومات ډول اخیستل کیږي."
        },
        features: [
            "Central Searchable Archive",
            "Folder Structure by Department",
            "Version History",
            "Role-Based Permissions",
            "Scanning & Bulk Upload",
            "Tags & Metadata in Dari, Pashto & English",
            "Audit Log of Access",
            "Automated Backups"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 25,000",
                features: [
                    "Central Archive Setup",
                    "Folders & Permissions",
                    "Search by Name & Tags",
                    "Up to 25 Users",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 50,000",
                features: [
                    "Everything in Starter",
                    "Version History",
                    "Audit Log",
                    "Bulk Scan Import",
                    "Up to 150 Users",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multi-Branch Archive",
                    "Approval Workflows",
                    "Retention Rules",
                    "Integration with Other Systems",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "applicant-tracking",
        slug: "applicant-tracking",
        category: "workplace",
        title: {
            en: "Applicant Tracking System",
            da: "سیستم پیگیری متقاضیان کار",
            pa: "د دندې غوښتونکو د تعقیب سیسټم"
        },
        shortDesc: {
            en: "Publish vacancies, collect CVs and shortlist candidates in one place",
            da: "اعلان بست‌ها، جمع‌آوری سی‌وی‌ها و شارت‌لست کاندیدان در یک جا",
            pa: "د بستونو اعلان، د CV راټولول او د نوماندانو لنډ لیست په یوه ځای کې"
        },
        description: {
            en: "We build a hiring system with a careers page where candidates apply online, and a dashboard where your HR team screens CVs, moves applicants through stages, schedules interviews and records panel scores. It replaces CV inboxes and spreadsheets, keeps a history of every vacancy, and supports Dari, Pashto and English job posts.",
            da: "ما یک سیستم استخدام با صفحه فرصت‌های شغلی می‌سازیم که کاندیدان آنلاین درخواست بدهند، و داشبوردی که تیم منابع بشری شما سی‌وی‌ها را بررسی کند، متقاضیان را مرحله به مرحله پیش ببرد، مصاحبه‌ها را زمان‌بندی کند و نمرات هیئت را ثبت نماید. این سیستم جای ایمیل‌های سی‌وی و شیت‌های اکسل را می‌گیرد، سابقه هر بست را نگه می‌دارد و از اعلانات به دری، پشتو و انگلیسی پشتیبانی می‌کند.",
            pa: "موږ د استخدام سیسټم جوړوو چې د دندو پاڼه لري چیرې چې نوماندان آنلاین غوښتنه ورکوي، او یو ډشبورډ چې ستاسو د بشري سرچینو ټیم پکې CV ګانې کتي، غوښتونکي له یوه پړاو بل ته وړي، مرکې مهالویش کوي او د هیئت نمرې ثبتوي. دا سیسټم د CV بریښنالیکونو او اکسل شیټونو ځای نیسي، د هر بست تاریخچه ساتي، او په دري، پښتو او انګلیسي اعلانونو ملاتړ کوي."
        },
        features: [
            "Careers Page & Online Applications",
            "CV Collection & Screening",
            "Hiring Pipeline Stages",
            "Interview Scheduling",
            "Panel Scoring Sheets",
            "Candidate Email & SMS Updates",
            "Trilingual Job Posts",
            "Vacancy & Hiring Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 18,000",
                features: [
                    "Careers Page",
                    "Online Application Form",
                    "CV Dashboard",
                    "Up to 5 HR Users",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 35,000",
                features: [
                    "Everything in Starter",
                    "Pipeline Stages",
                    "Interview Scheduling",
                    "Panel Scoring",
                    "Candidate Notifications",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 60,000+",
                features: [
                    "Multi-Office Hiring",
                    "Written Test Module",
                    "Approval Workflows",
                    "Integration with HR System",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "e-office-system",
        slug: "e-office-system",
        category: "workplace",
        title: {
            en: "E-Office & Official Letters Workflow",
            da: "دفتر الکترونیکی و جریان مکاتیب رسمی",
            pa: "برېښنايي دفتر او د رسمي مکتوبونو بهیر"
        },
        shortDesc: {
            en: "Register, route, approve and track official letters (maktub) online",
            da: "ثبت، ارجاع، منظوری و پیگیری مکاتیب رسمی به‌صورت آنلاین",
            pa: "د رسمي مکتوبونو ثبت، راجع کول، منظوري او تعقیب په آنلاین ډول"
        },
        description: {
            en: "We build an e-office system for the official letter (maktub) process: incoming and outgoing letters get a registration number, are routed to the right department, collect comments and approvals, and every step is logged so nothing goes missing. Letters can be drafted from templates with your letterhead, and staff see pending items on one dashboard.",
            da: "ما یک سیستم دفتر الکترونیکی برای جریان مکاتیب رسمی می‌سازیم: مکاتیب وارده و صادره نمبر ثبت می‌گیرند، به دیپارتمنت مربوط ارجاع می‌شوند، ملاحظات و منظوری‌ها را جمع می‌کنند، و هر مرحله ثبت می‌شود تا هیچ مکتوبی گم نشود. مکاتیب از روی قالب‌ها با سرلوحه شما تهیه می‌شوند و کارمندان کارهای معطل را در یک داشبورد می‌بینند.",
            pa: "موږ د رسمي مکتوبونو د بهیر لپاره برېښنايي دفتر سیسټم جوړوو: وارده او صادره مکتوبونه د ثبت شمېره اخلي، اړوندې څانګې ته راجع کیږي، ملاحظات او منظورۍ راټولوي، او هر پړاو ثبتیږي څو هیڅ مکتوب ورک نشي. مکتوبونه ستاسو د سرلیک سره له قالبونو جوړیدای شي، او کارکوونکي ځنډیدلي کارونه په یوه ډشبورډ کې ویني."
        },
        features: [
            "Incoming & Outgoing Letter Register",
            "Automatic Reference Numbers",
            "Routing Between Departments",
            "Comments & Approval Chain",
            "Letter Templates with Letterhead",
            "Full Audit Trail",
            "Pending Items Dashboard",
            "Dari & Pashto Document Support"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 40,000",
                features: [
                    "Letter Register (Incoming & Outgoing)",
                    "Reference Numbering",
                    "Routing to Departments",
                    "Up to 30 Users",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 80,000",
                features: [
                    "Everything in Starter",
                    "Multi-Step Approval Chain",
                    "Letter Templates",
                    "Scanned Attachments",
                    "Up to 200 Users",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multi-Directorate Structure",
                    "Custom Workflows",
                    "Integration with DMS & HR",
                    "On-Premise Deployment",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "contract-management",
        slug: "contract-management",
        category: "workplace",
        title: {
            en: "Contract Management System",
            da: "سیستم مدیریت قراردادها",
            pa: "د قراردادونو د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Keep every contract, deadline and renewal date in one tracked place",
            da: "همه قراردادها، مهلت‌ها و تاریخ‌های تمدید در یک جای قابل پیگیری",
            pa: "ټول قراردادونه، مهلتونه او د تمدید نیټې په یوه د تعقیب وړ ځای کې"
        },
        description: {
            en: "We build a contract register where each supplier, client or rental agreement is stored with its parties, value, key dates and signed copy. The system reminds the responsible person before renewals, expiries and payment milestones, and tracks internal approval before signing. It manages the documents and dates; legal review of contract terms stays with your lawyers.",
            da: "ما یک ثبت قراردادها می‌سازیم که هر قرارداد تهیه‌کننده، مشتری یا کرایه با طرفین، ارزش، تاریخ‌های مهم و کاپی امضاشده در آن نگهداری شود. سیستم پیش از تمدید، ختم و مراحل پرداخت به شخص مسئول یادآوری می‌کند و منظوری داخلی قبل از امضا را پیگیری می‌نماید. این سیستم اسناد و تاریخ‌ها را مدیریت می‌کند؛ بررسی حقوقی شرایط قرارداد به عهده وکلای شماست.",
            pa: "موږ د قراردادونو ثبت جوړوو چې هر د عرضه کوونکي، پیرودونکي یا کرایې قرارداد د اړخونو، ارزښت، مهمو نیټو او لاسلیک شوې کاپي سره پکې ساتل کیږي. سیسټم د تمدید، پای ته رسیدو او د تادیې د پړاوونو مخکې مسؤل کس ته یادونه کوي او د لاسلیک مخکې داخلي منظوري تعقیبوي. دا سیسټم اسناد او نیټې اداره کوي؛ د قرارداد د شرایطو حقوقي کتنه ستاسو د وکیلانو دنده ده."
        },
        features: [
            "Central Contract Register",
            "Renewal & Expiry Reminders",
            "Payment Milestone Tracking",
            "Signed Copy Storage",
            "Internal Approval Workflow",
            "Contract Templates",
            "Search by Party, Value or Date",
            "Role-Based Access"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 20,000",
                features: [
                    "Contract Register",
                    "Signed Copy Upload",
                    "Expiry Reminders",
                    "Up to 10 Users",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 40,000",
                features: [
                    "Everything in Starter",
                    "Payment Milestones",
                    "Approval Workflow",
                    "Contract Templates",
                    "Up to 50 Users",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 70,000+",
                features: [
                    "Multi-Department Contracts",
                    "Integration with Finance System",
                    "Custom Reports",
                    "Audit Log",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "shift-scheduling",
        slug: "shift-scheduling",
        category: "workplace",
        title: {
            en: "Staff Shift Scheduling",
            da: "تنظیم نوبت‌های کاری کارمندان",
            pa: "د کارکوونکو د کاري نوبتونو تنظیم"
        },
        shortDesc: {
            en: "Plan rotas, handle shift swaps and track attendance without spreadsheets",
            da: "برنامه‌ریزی نوبت‌ها، تبادل شیفت و حاضری بدون شیت اکسل",
            pa: "د نوبتونو پلان، د شفټ بدلون او حاضري پرته له اکسل شیټ"
        },
        description: {
            en: "We build a scheduling tool for teams that work in shifts, such as clinics, guards, restaurants and call centers. Managers build weekly rotas from templates, staff see their shifts on their phones, request swaps or leave, and the system flags gaps and overtime. Attendance can be recorded by app check-in or linked to an existing attendance device.",
            da: "ما یک ابزار نوبت‌بندی برای تیم‌هایی می‌سازیم که شیفتی کار می‌کنند، مثل کلینیک‌ها، نگهبانان، رستورانت‌ها و مراکز تماس. مدیران برنامه هفتگی را از روی قالب می‌سازند، کارمندان شیفت خود را در موبایل می‌بینند، درخواست تبادل یا رخصتی می‌دهند، و سیستم کمبود نیرو و اضافه‌کاری را نشان می‌دهد. حاضری با ثبت ورود در اپ یا اتصال به دستگاه حاضری موجود ثبت می‌شود.",
            pa: "موږ د هغو ټیمونو لپاره د نوبتونو وسیله جوړوو چې په شفټونو کار کوي، لکه کلینیکونه، ساتونکي، رستورانتونه او د زنګ مرکزونه. مدیران اونیز پروګرام له قالبونو جوړوي، کارکوونکي خپل شفټونه په موبایل کې ویني، د بدلون یا رخصتۍ غوښتنه کوي، او سیسټم د کارکوونکو کمښت او اضافه کاري ښیي. حاضري د اپ له لارې یا د موجوده حاضري ماشین سره د نښلولو له لارې ثبتیږي."
        },
        features: [
            "Weekly Rota Builder",
            "Shift Templates",
            "Mobile Schedule for Staff",
            "Shift Swap & Leave Requests",
            "Gap & Overtime Alerts",
            "App Check-In Attendance",
            "Attendance Device Integration",
            "Hours Reports for Payroll"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 12,000",
                features: [
                    "Rota Builder",
                    "Staff Mobile View",
                    "Shift Templates",
                    "Up to 30 Staff",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 25,000",
                features: [
                    "Everything in Starter",
                    "Swap & Leave Requests",
                    "Overtime Alerts",
                    "App Check-In",
                    "Up to 150 Staff",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 45,000+",
                features: [
                    "Multi-Location Scheduling",
                    "Attendance Device Integration",
                    "Payroll Export",
                    "Unlimited Staff",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "knowledge-base-setup",
        slug: "knowledge-base-setup",
        category: "workplace",
        title: {
            en: "Knowledge Base Setup",
            da: "راه‌اندازی پایگاه دانش",
            pa: "د پوهې د زېرمې جوړول"
        },
        shortDesc: {
            en: "A searchable help center for your staff or customers, in three languages",
            da: "مرکز راهنمای قابل جستجو برای کارمندان یا مشتریان، به سه زبان",
            pa: "د لټون وړ لارښود مرکز ستاسو کارکوونکو یا پیرودونکو لپاره، په دریو ژبو"
        },
        description: {
            en: "We set up a knowledge base where your procedures, how-to guides and FAQs live as searchable articles, either internal for staff or public for customers. We configure the platform, design the category structure, and can help turn your existing documents into clear articles in Dari, Pashto and English, so questions get answered without a phone call.",
            da: "ما یک پایگاه دانش راه‌اندازی می‌کنیم که روش‌های کاری، رهنمودها و سوالات متداول شما به شکل مقاله‌های قابل جستجو در آن باشد، چه داخلی برای کارمندان و چه عمومی برای مشتریان. پلتفورم را تنظیم و ساختار کتگوری‌ها را دیزاین می‌کنیم، و در تبدیل اسناد موجود شما به مقاله‌های واضح به دری، پشتو و انگلیسی کمک کرده می‌توانیم، تا سوالات بدون تماس تلفونی جواب بگیرند.",
            pa: "موږ د پوهې زېرمه جوړوو چې ستاسو کاري کړنلارې، لارښودونه او عامې پوښتنې پکې د لټون وړ مقالو په بڼه وي، که داخلي د کارکوونکو لپاره وي یا عامه د پیرودونکو لپاره. پلاټفارم برابروو، د کټګوریو جوړښت ډیزاین کوو، او کولی شو ستاسو موجوده اسناد په دري، پښتو او انګلیسي روښانه مقالو بدلولو کې مرسته وکړو، څو پوښتنې پرته له تلیفوني زنګ ځواب شي."
        },
        features: [
            "Searchable Article Library",
            "Internal or Public Access",
            "Category & Tag Structure",
            "Dari, Pashto & English Articles",
            "Easy Article Editor",
            "Images & Video in Articles",
            "Article Feedback Buttons",
            "Search & View Analytics"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 8,000",
                features: [
                    "Platform Setup",
                    "Category Structure",
                    "Up to 20 Articles Imported",
                    "Editor Training",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 18,000",
                features: [
                    "Everything in Starter",
                    "Custom Branding",
                    "Up to 75 Articles Written or Converted",
                    "Two Languages",
                    "Search Analytics",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 35,000+",
                features: [
                    "Internal & Public Sections",
                    "Three Languages",
                    "Login & Access Control",
                    "Integration with Helpdesk or Website",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "wedding-hall-management",
        slug: "wedding-hall-management",
        category: "solutions",
        title: {
            en: "Wedding Hall Management System",
            da: "سیستم مدیریت تالار عروسی",
            pa: "د واده د تالار د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Hall bookings, deposits, menus and event-day planning in one system",
            da: "رزرو تالار، پیش‌پرداخت، منو و برنامه روز محفل در یک سیستم",
            pa: "د تالار بکینګ، مخکې تادیه، مینو او د محفل د ورځې پلان په یوه سیسټم کې"
        },
        description: {
            en: "We build software for wedding and event halls that shows every hall and date on one calendar, so the same slot is never sold twice. Each booking records the family, guest count, chosen menu, decoration and separate men's and women's sections, along with deposits and remaining balance. Kitchen and staff get a clear event sheet for each day.",
            da: "ما سافت‌ویری برای تالارهای عروسی و محافل می‌سازیم که همه سالون‌ها و تاریخ‌ها را در یک تقویم نشان می‌دهد تا یک وقت دو بار فروخته نشود. هر رزرو شامل معلومات فامیل، تعداد مهمانان، منوی انتخاب‌شده، تزئینات و بخش‌های جداگانه مردانه و زنانه، همراه با پیش‌پرداخت و باقی‌مانده پول است. آشپزخانه و کارمندان برای هر روز یک ورق واضح برنامه محفل دریافت می‌کنند.",
            pa: "موږ د واده او محفلونو د تالارونو لپاره سافټویر جوړوو چې ټول سالونونه او نیټې په یوه کلیزه کې ښیي، څو یو وخت دوه ځله ونه پلورل شي. هر بکینګ د کورنۍ معلومات، د میلمنو شمېر، غوره شوی مینو، سینګار او د نارینه او ښځینه بېلې برخې، د مخکې تادیې او پاتې پیسو سره ثبتوي. پخلنځی او کارکوونکي د هرې ورځې لپاره د محفل روښانه پاڼه ترلاسه کوي."
        },
        features: [
            "Hall & Date Booking Calendar",
            "Double-Booking Prevention",
            "Deposits & Balance Tracking",
            "Menu & Package Selection",
            "Men's & Women's Section Planning",
            "Event Sheets for Kitchen & Staff",
            "SMS Reminders to Customers",
            "Income & Booking Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 18,000",
                features: [
                    "Booking Calendar",
                    "Up to 2 Halls",
                    "Deposit Tracking",
                    "Printable Receipts",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 35,000",
                features: [
                    "Up to 6 Halls",
                    "Menu & Package Builder",
                    "Event Sheets for Kitchen",
                    "SMS Reminders",
                    "Income Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 60,000+",
                features: [
                    "Multiple Venues",
                    "Inventory & Purchasing",
                    "Staff & Expense Tracking",
                    "Online Availability Page",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "gym-management",
        slug: "gym-management",
        category: "solutions",
        title: {
            en: "Gym & Fitness Club Management",
            da: "مدیریت جم و باشگاه ورزشی",
            pa: "د جم او ورزشي کلب مدیریت"
        },
        shortDesc: {
            en: "Memberships, fees, attendance and trainer schedules for your gym",
            da: "عضویت، فیس، حاضری و برنامه مربیان برای جم شما",
            pa: "غړیتوب، فیس، حاضري او د روزونکو مهالویش ستاسو د جم لپاره"
        },
        description: {
            en: "We build gym software that tracks members, monthly and package fees, and who has paid or is overdue. Members check in with a card or QR code, trainers see their class and session schedules, and the system sends SMS reminders before memberships expire. Separate timings for men and women can be set, and reports show income and active members.",
            da: "ما سافت‌ویر جم می‌سازیم که اعضا، فیس ماهانه و بسته‌ها، و اینکه چه کسی پرداخته یا عقب‌افتاده است را پیگیری می‌کند. اعضا با کارت یا QR کود حاضر می‌شوند، مربیان برنامه کلاس‌ها و جلسات خود را می‌بینند، و سیستم پیش از ختم عضویت SMS یادآوری می‌فرستد. اوقات جداگانه برای مردان و زنان تنظیم شده می‌تواند و راپورها عاید و اعضای فعال را نشان می‌دهند.",
            pa: "موږ د جم سافټویر جوړوو چې غړي، میاشتنی او د بستو فیس، او دا چې چا تادیه کړې یا وروسته پاتې دي تعقیبوي. غړي د کارت یا QR کوډ په مرسته حاضري ورکوي، روزونکي د خپلو ټولګیو او غونډو مهالویش ویني، او سیسټم د غړیتوب له پای ته رسیدو مخکې SMS یادونه لیږي. د نارینه او ښځو لپاره بېل وختونه ټاکل کیدای شي، او راپورونه عاید او فعال غړي ښیي."
        },
        features: [
            "Member Profiles & Plans",
            "Fee Collection & Overdue Alerts",
            "Card or QR Check-In",
            "Class & Trainer Schedules",
            "Separate Men's & Women's Timings",
            "SMS Renewal Reminders",
            "Personal Training Sessions",
            "Income & Attendance Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 14,000",
                features: [
                    "Member Records",
                    "Fee Tracking",
                    "Manual Check-In",
                    "Basic Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 28,000",
                features: [
                    "Everything in Starter",
                    "QR or Card Check-In",
                    "SMS Reminders",
                    "Class & Trainer Schedules",
                    "Overdue Alerts",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Branch",
                price: "AFN 50,000+",
                features: [
                    "Multiple Branches",
                    "Member Mobile App",
                    "Access Gate Integration",
                    "Online Payment Integration",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "property-management",
        slug: "property-management",
        category: "solutions",
        title: {
            en: "Rental Property Management",
            da: "مدیریت املاک کرایی",
            pa: "د کرایي ملکیتونو مدیریت"
        },
        shortDesc: {
            en: "Track units, tenants, rent and repairs, including for owners abroad",
            da: "پیگیری واحدها، کرایه‌نشین‌ها، کرایه و ترمیمات، حتی برای مالکان خارج",
            pa: "د واحدونو، کرایه دارانو، کرایې او ترمیمونو تعقیب، د بهر مالکانو لپاره هم"
        },
        description: {
            en: "We build software for landlords and property agents to manage apartments, shops and houses: who rents each unit, when rent is due, what was paid and which repairs are open. Owners living abroad can log in to see their rent ledger and reports from anywhere. Rent receipts and reminders go out by SMS, and documents for each tenant are stored in one place.",
            da: "ما برای مالکان و رهنماهای املاک سافت‌ویری می‌سازیم که اپارتمان‌ها، دوکان‌ها و خانه‌ها را مدیریت کند: چه کسی کدام واحد را کرایه گرفته، کرایه کی سر می‌رسد، چه پرداخت شده و کدام ترمیم باقی است. مالکانی که در خارج زندگی می‌کنند از هر جا وارد شده دفتر کرایه و راپورهای خود را می‌بینند. رسید و یادآوری کرایه با SMS فرستاده می‌شود و اسناد هر کرایه‌نشین یکجا نگهداری می‌شود.",
            pa: "موږ د ملکیت والو او املاکو د رهنماګانو لپاره سافټویر جوړوو چې اپارتمانونه، دوکانونه او کورونه اداره کړي: کوم واحد څوک په کرایه لري، کرایه کله ورکول کیږي، څه تادیه شوي او کوم ترمیمونه پاتې دي. هغه مالکان چې بهر ژوند کوي له هر ځایه ننوځي او د کرایې دفتر او راپورونه ویني. د کرایې رسیدونه او یادونې د SMS له لارې لیږل کیږي او د هر کرایه دار اسناد یو ځای ساتل کیږي."
        },
        features: [
            "Units, Buildings & Tenants",
            "Rent Due Dates & Ledger",
            "SMS Rent Reminders & Receipts",
            "Lease Document Storage",
            "Repair & Maintenance Requests",
            "Owner Portal for Owners Abroad",
            "Expense Tracking per Property",
            "Income & Vacancy Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 16,000",
                features: [
                    "Up to 30 Units",
                    "Tenant Records",
                    "Rent Ledger",
                    "Printable Receipts",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 32,000",
                features: [
                    "Up to 200 Units",
                    "SMS Reminders",
                    "Repair Requests",
                    "Expense Tracking",
                    "Owner Portal",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 60,000+",
                features: [
                    "Unlimited Units",
                    "Multiple Owners & Agents",
                    "Tenant Mobile Access",
                    "Online Payment Integration",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "manufacturing-system",
        slug: "manufacturing-system",
        category: "solutions",
        title: {
            en: "Manufacturing & Production Management",
            da: "مدیریت تولید و فابریکه",
            pa: "د تولید او فابریکې مدیریت"
        },
        shortDesc: {
            en: "Plan production, track raw materials and know your real cost per unit",
            da: "برنامه‌ریزی تولید، پیگیری مواد خام و دانستن قیمت واقعی هر واحد",
            pa: "د تولید پلان، د خامو موادو تعقیب او د هر واحد ریښتینی لګښت پېژندل"
        },
        description: {
            en: "We build production software for factories and workshops, such as food processing, plastics, carpets or construction materials. It holds your recipes or bills of materials, issues production orders, deducts raw materials from stock as batches are made, and records output and waste. Managers see what is in progress, what stock is running low, and the actual cost of each batch.",
            da: "ما سافت‌ویر تولید برای فابریکه‌ها و ورکشاپ‌ها می‌سازیم، مثل پروسس مواد غذایی، پلاستیک، قالین یا مواد ساختمانی. این سیستم فورمول‌ها یا لست مواد هر محصول را نگه می‌دارد، فرمان تولید صادر می‌کند، با ساخت هر بچ مواد خام را از گدام کم می‌کند و تولید و ضایعات را ثبت می‌نماید. مدیران می‌بینند چه چیزی در جریان تولید است، کدام مواد رو به ختم است و قیمت واقعی هر بچ چقدر شده.",
            pa: "موږ د فابریکو او ورکشاپونو لپاره د تولید سافټویر جوړوو، لکه د خوړو پروسس، پلاستیک، غالۍ یا ساختماني توکي. دا سیسټم د هر محصول فورمول یا د موادو لیست ساتي، د تولید امر صادروي، د هر بچ په جوړیدو خام مواد له ګدام څخه کموي، او تولید او ضایعات ثبتوي. مدیران ویني چې څه د تولید په حال کې دي، کوم مواد پای ته رسیږي، او د هر بچ ریښتینی لګښت څومره شوی."
        },
        features: [
            "Bills of Materials & Recipes",
            "Production Orders & Batches",
            "Raw Material Stock Deduction",
            "Low Stock Alerts",
            "Output & Waste Recording",
            "Batch Cost Calculation",
            "Finished Goods Inventory",
            "Production & Cost Reports"
        ],
        pricing: {
            basic: {
                name: "Workshop",
                price: "AFN 50,000",
                features: [
                    "Bills of Materials",
                    "Production Orders",
                    "Raw Material Stock",
                    "Basic Production Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Factory",
                price: "AFN 90,000",
                features: [
                    "Everything in Workshop",
                    "Batch Costing",
                    "Waste Tracking",
                    "Finished Goods Inventory",
                    "Purchase Orders for Materials",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multiple Plants & Warehouses",
                    "Quality Control Checks",
                    "Sales & Accounting Integration",
                    "Barcode Tracking",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "queue-management",
        slug: "queue-management",
        category: "solutions",
        title: {
            en: "Digital Queue Management",
            da: "مدیریت دیجیتال نوبت",
            pa: "د نوبت ډیجیټل مدیریت"
        },
        shortDesc: {
            en: "Token numbers, counter calls and SMS alerts instead of crowded waiting rooms",
            da: "نمبر نوبت، فراخوان کاونتر و SMS به جای سالون‌های انتظار شلوغ",
            pa: "د نوبت شمېرې، د کاونټر غږ او SMS د ګڼو انتظار خونو پر ځای"
        },
        description: {
            en: "We set up queue software for banks, clinics, government-facing offices and service centers: customers take a token at a kiosk, from a receptionist or by SMS, and are called to the next free counter on a display with an audio announcement. Managers see waiting times and counter performance. The software is ours; token printers, displays and speakers come through partners.",
            da: "ما سافت‌ویر نوبت را برای بانک‌ها، کلینیک‌ها، دفاتر خدمات عامه و مراکز خدماتی راه‌اندازی می‌کنیم: مشتری از کیوسک، پذیرش یا از طریق SMS نمبر نوبت می‌گیرد و با اعلان صوتی روی صفحه به کاونتر آزاد بعدی فراخوانده می‌شود. مدیران زمان انتظار و کارکرد هر کاونتر را می‌بینند. سافت‌ویر از ماست؛ پرنتر نوبت، صفحه‌نمایش و بلندگو از طریق همکاران تهیه می‌شود.",
            pa: "موږ د بانکونو، کلینیکونو، عامه خدماتو دفترونو او خدماتي مرکزونو لپاره د نوبت سافټویر برابروو: پیرودونکی له کیوسک، استقبالیې یا SMS څخه د نوبت شمېره اخلي او په سکرین د غږیز اعلان سره راتلونکي وزګار کاونټر ته رابلل کیږي. مدیران د انتظار وخت او د هر کاونټر کارکرد ویني. سافټویر زموږ دی؛ د نوبت پرنټر، سکرینونه او سپیکرونه د همکارانو له لارې برابریږي."
        },
        features: [
            "Token Issue by Kiosk, Desk or SMS",
            "Counter Call Display",
            "Audio Announcements in Dari & Pashto",
            "Multiple Services & Counters",
            "SMS Turn-Approaching Alerts",
            "Priority Queues",
            "Waiting Time Reports",
            "Counter Performance Dashboard"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 15,000",
                features: [
                    "Up to 4 Counters",
                    "Token Issue at Desk",
                    "Call Display Screen",
                    "Basic Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 30,000",
                features: [
                    "Up to 15 Counters",
                    "Kiosk Token Issue",
                    "Audio Announcements",
                    "SMS Alerts",
                    "Multiple Service Types",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Branch",
                price: "AFN 55,000+",
                features: [
                    "Multiple Branches",
                    "Online Appointment Booking",
                    "Central Performance Dashboard",
                    "Integration with Your System",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "membership-management",
        slug: "membership-management",
        category: "solutions",
        title: {
            en: "Membership Management",
            da: "مدیریت اعضا",
            pa: "د غړو مدیریت"
        },
        shortDesc: {
            en: "Member records, dues, ID cards and notices for unions and associations",
            da: "سوابق اعضا، حق عضویت، کارت هویت و اطلاعیه‌ها برای اتحادیه‌ها و انجمن‌ها",
            pa: "د غړو ریکارډونه، د غړیتوب حق، د پېژند کارتونه او خبرتیاوې د اتحادیو او ټولنو لپاره"
        },
        description: {
            en: "We build membership systems for unions, guilds, professional associations and alumni groups. You keep one register of members with their category and status, record annual dues and who is behind, print member ID cards with QR codes, and send notices by SMS or email. An optional portal lets members, including those abroad, update their details and see their dues.",
            da: "ما سیستم‌های عضویت برای اتحادیه‌ها، صنف‌ها، انجمن‌های مسلکی و گروه‌های فارغان می‌سازیم. یک ثبت واحد از اعضا با کتگوری و وضعیت آنها دارید، حق عضویت سالانه و کسانی که عقب مانده‌اند را ثبت می‌کنید، کارت عضویت با QR کود چاپ می‌کنید و اطلاعیه‌ها را با SMS یا ایمیل می‌فرستید. یک پورتال اختیاری به اعضا، از جمله اعضای خارج از کشور، اجازه می‌دهد معلومات خود را به‌روز کنند و حق عضویت خود را ببینند.",
            pa: "موږ د اتحادیو، صنفونو، مسلکي ټولنو او فارغانو ډلو لپاره د غړیتوب سیسټمونه جوړوو. تاسو د غړو یو واحد ثبت د هغوی د کټګورۍ او حالت سره لرئ، کلنی حق العضویت او هغه کسان چې وروسته پاتې دي ثبتوئ، د QR کوډ سره د غړیتوب کارتونه چاپوئ، او خبرتیاوې د SMS یا بریښنالیک له لارې لیږئ. یو اختیاري پورټال غړو ته، په ګډون د بهر غړو، اجازه ورکوي چې خپل معلومات تازه کړي او خپل حق العضویت وویني."
        },
        features: [
            "Central Member Register",
            "Membership Categories & Status",
            "Annual Dues Tracking",
            "Member ID Cards with QR",
            "SMS & Email Notices",
            "Member Self-Service Portal",
            "Event & Meeting Attendance",
            "Membership & Dues Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 14,000",
                features: [
                    "Member Register",
                    "Dues Tracking",
                    "Printable ID Cards",
                    "Up to 1,000 Members",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Association",
                price: "AFN 28,000",
                features: [
                    "Everything in Starter",
                    "QR Card Verification",
                    "SMS & Email Notices",
                    "Member Portal",
                    "Up to 10,000 Members",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Federation",
                price: "AFN 50,000+",
                features: [
                    "Provincial Branches",
                    "Online Dues Payment Integration",
                    "Elections & Voting Module",
                    "Unlimited Members",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "qr-digital-menu",
        slug: "qr-digital-menu",
        category: "solutions",
        title: {
            en: "QR Digital Menu for Restaurants",
            da: "منوی دیجیتال QR برای رستورانت‌ها",
            pa: "د رستورانتونو لپاره د QR ډیجیټل مینو"
        },
        shortDesc: {
            en: "A menu guests open by scanning a QR code, which you update in minutes",
            da: "منویی که مهمانان با اسکن QR کود باز می‌کنند و شما در چند دقیقه به‌روز می‌کنید",
            pa: "یو مینو چې میلمانه یې د QR کوډ په سکن خلاصوي او تاسو یې په څو دقیقو کې تازه کوئ"
        },
        description: {
            en: "We set up a QR menu for your restaurant, cafe or hotel: guests scan a code on the table and see your dishes with photos and prices in Dari, Pashto and English. You change prices, mark items as sold out or add specials from your phone, with no reprinting. Pages are kept small so they open quickly on mobile data.",
            da: "ما برای رستورانت، کافی یا هوتل شما منوی QR آماده می‌کنیم: مهمانان کود روی میز را اسکن می‌کنند و غذاها را با عکس و قیمت به دری، پشتو و انگلیسی می‌بینند. شما از موبایل خود قیمت‌ها را تغییر می‌دهید، غذاهای تمام‌شده را علامت می‌زنید یا غذای ویژه اضافه می‌کنید، بدون چاپ دوباره. صفحات سبک نگه داشته می‌شوند تا با انترنت موبایل سریع باز شوند.",
            pa: "موږ ستاسو د رستورانت، کافي یا هوټل لپاره QR مینو جوړوو: میلمانه په میز د کوډ سکن کوي او خواړه د انځورونو او بیو سره په دري، پښتو او انګلیسي ویني. تاسو له خپل موبایل څخه بیې بدلوئ، ختم شوي خواړه نښه کوئ یا ځانګړي خواړه زیاتوئ، پرته له بیا چاپ. پاڼې سپکې ساتل کیږي څو د موبایل په انټرنټ ژر خلاصې شي."
        },
        features: [
            "QR Codes for Every Table",
            "Dish Photos & Prices",
            "Dari, Pashto & English Menu",
            "Update Prices from Your Phone",
            "Sold-Out & Daily Specials",
            "Fast-Loading on Mobile Data",
            "Order to Waiter or WhatsApp",
            "Menu View Statistics"
        ],
        pricing: {
            basic: {
                name: "Basic Menu",
                price: "AFN 3,500",
                features: [
                    "Digital Menu Page",
                    "Up to 40 Items",
                    "One Language",
                    "Printable QR Codes",
                    "Self-Edit Panel"
                ]
            },
            professional: {
                name: "Restaurant",
                price: "AFN 8,000",
                features: [
                    "Unlimited Items",
                    "Dish Photos",
                    "Three Languages",
                    "Table-Specific QR Codes",
                    "Sold-Out & Specials",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Ordering",
                price: "AFN 15,000+",
                features: [
                    "Everything in Restaurant",
                    "Table Ordering to Kitchen Screen",
                    "Multiple Branches",
                    "Custom Branded Design",
                    "Order Reports",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "mosque-management",
        slug: "mosque-management",
        category: "solutions",
        title: {
            en: "Mosque Management System",
            da: "سیستم مدیریت مسجد",
            pa: "د جومات د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Donations, expenses, announcements and classes, recorded transparently",
            da: "کمک‌ها، مصارف، اعلانات و صنف‌ها با ثبت شفاف",
            pa: "مرستې، لګښتونه، اعلانونه او ټولګي په روڼ ډول ثبت شوي"
        },
        description: {
            en: "We build a simple system for mosque committees to record donations and expenses with receipts, so accounts can be shown clearly to the community. It also handles announcements, a prayer timetable entered by the mosque, Quran class registrations and volunteer lists. It is a record-keeping tool only; schedules and religious matters are set by the mosque itself.",
            da: "ما یک سیستم ساده برای کمیته‌های مسجد می‌سازیم تا کمک‌ها و مصارف را با رسید ثبت کنند و حساب‌ها به‌طور واضح به اهل محل نشان داده شود. این سیستم همچنین اعلانات، جدول اوقات نماز که توسط مسجد وارد می‌شود، ثبت‌نام صنف‌های قرآن و لست داوطلبان را مدیریت می‌کند. این فقط یک ابزار ثبت و نگهداری است؛ اوقات و امور دینی را خود مسجد تعیین می‌کند.",
            pa: "موږ د جومات د کمیټو لپاره یو ساده سیسټم جوړوو څو مرستې او لګښتونه د رسیدونو سره ثبت کړي او حسابونه ټولنې ته په روښانه ډول وښودل شي. دا سیسټم اعلانونه، د لمانځه د وختونو جدول چې د جومات له خوا داخلیږي، د قرآن د ټولګیو نوم لیکنه او د رضاکارانو لیست هم اداره کوي. دا یوازې د ثبت او ساتنې وسیله ده؛ وختونه او دیني چارې پخپله جومات ټاکي."
        },
        features: [
            "Donation Records & Receipts",
            "Expense Tracking",
            "Community Account Summaries",
            "Announcements Board",
            "Prayer Timetable Display",
            "Quran Class Registrations",
            "Volunteer Lists",
            "SMS Notices to Community"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 7,000",
                features: [
                    "Donation & Expense Records",
                    "Printable Receipts",
                    "Monthly Summary",
                    "Admin Training",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Community",
                price: "AFN 14,000",
                features: [
                    "Everything in Starter",
                    "Announcements Page",
                    "Prayer Timetable Display",
                    "Class Registrations",
                    "SMS Notices",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Center",
                price: "AFN 25,000+",
                features: [
                    "Multiple Programs & Classes",
                    "Online Donation Integration",
                    "Screen Display for Hall",
                    "Volunteer Scheduling",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "personal-portfolio-website",
        slug: "personal-portfolio-website",
        category: "development",
        title: {
            en: "Personal & Portfolio Websites",
            da: "ویب‌سایت شخصی و نمونه‌کار",
            pa: "شخصي او د نمونه کارونو ویب پاڼې"
        },
        shortDesc: {
            en: "A professional site that shows your work, CV and how to reach you",
            da: "یک سایت مسلکی که کارها، سی‌وی و راه تماس با شما را نشان می‌دهد",
            pa: "یوه مسلکي ویب پاڼه چې ستاسو کارونه، CV او د اړیکې لاره ښیي"
        },
        description: {
            en: "We build personal websites for freelancers, doctors, lawyers, artists, photographers, consultants and job seekers. Your site presents your work samples, experience and services, with a contact form and links to your profiles, on your own domain. It can be in Dari, Pashto, English or all three, and you can update projects yourself.",
            da: "ما ویب‌سایت‌های شخصی برای فریلنسرها، داکتران، وکلا، هنرمندان، عکاسان، مشاوران و کارجویان می‌سازیم. سایت شما نمونه‌کارها، تجربه و خدمات شما را با فورم تماس و لینک پروفایل‌هایتان روی دامنه خودتان نشان می‌دهد. سایت به دری، پشتو، انگلیسی یا هر سه زبان بوده می‌تواند و پروژه‌ها را خودتان به‌روز می‌کنید.",
            pa: "موږ د فریلانسرانو، ډاکټرانو، وکیلانو، هنرمندانو، عکاسانو، مشاورینو او دنده لټوونکو لپاره شخصي ویب پاڼې جوړوو. ستاسو ویب پاڼه ستاسو د کار نمونې، تجربه او خدمات د اړیکې فورم او ستاسو د پروفایلونو د لینکونو سره ستاسو په خپل ډومین ښیي. ویب پاڼه په دري، پښتو، انګلیسي یا درې واړو ژبو کیدای شي او پروژې پخپله تازه کولی شئ."
        },
        features: [
            "Portfolio & Project Gallery",
            "About & CV Section",
            "Services Overview",
            "Contact Form & Social Links",
            "Your Own Domain",
            "Dari, Pashto & English Options",
            "Mobile-Friendly Design",
            "Self-Editable Content"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 5,000",
                features: [
                    "One-Page Website",
                    "About, Work & Contact Sections",
                    "Mobile-Friendly Design",
                    "Domain Connection",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Portfolio",
                price: "AFN 10,000",
                features: [
                    "Up to 5 Pages",
                    "Project Gallery",
                    "Downloadable CV",
                    "Two Languages",
                    "Self-Edit Panel",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Professional",
                price: "AFN 18,000+",
                features: [
                    "Custom Design",
                    "Three Languages",
                    "Blog or Articles Section",
                    "Appointment Booking Form",
                    "Basic SEO Setup",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "news-portal",
        slug: "news-portal",
        category: "development",
        title: {
            en: "News Portal Development",
            da: "ساخت پورتال خبری",
            pa: "د خبري پورټال جوړول"
        },
        shortDesc: {
            en: "Fast trilingual news sites with an editorial workflow for your newsroom",
            da: "سایت‌های خبری سریع و سه‌زبانه با جریان کاری ویراستاری برای خبرنگاران",
            pa: "چټک درې ژبي خبري سایټونه د خبرونو د خونې لپاره د سمون کاري بهیر سره"
        },
        description: {
            en: "We build news websites for media outlets and publishers, with separate Dari, Pashto and English sections, categories, breaking news, video and photo galleries. Reporters submit drafts and editors review and publish them through role-based workflows. Pages are optimised to load fast on mobile data, handle traffic spikes through caching, and are set up for search engines and social sharing.",
            da: "ما سایت‌های خبری برای رسانه‌ها و نشرات با بخش‌های جداگانه دری، پشتو و انگلیسی، کتگوری‌ها، خبرهای فوری، و گالری ویدیو و عکس می‌سازیم. خبرنگاران پیش‌نویس می‌فرستند و ویراستاران از طریق جریان کاری مبتنی بر نقش آن را بررسی و نشر می‌کنند. صفحات برای باز شدن سریع با انترنت موبایل بهینه می‌شوند، با کش (cache) بار ترافیک بالا را تحمل می‌کنند و برای موتورهای جستجو و شریک‌سازی در شبکه‌های اجتماعی آماده می‌شوند.",
            pa: "موږ د رسنیو او خپرندویانو لپاره خبري ویب پاڼې د دري، پښتو او انګلیسي بېلو برخو، کټګوریو، بیړنیو خبرونو، او د ویډیو او انځورونو ګالریو سره جوړوو. خبریالان مسوده لیږي او ایډیټران یې د رول پر بنسټ کاري بهیر له لارې ګوري او خپروي. پاڼې د موبایل په انټرنټ د چټک خلاصیدو لپاره برابریږي، د کش (cache) په مرسته لوړ ټرافیک زغمي، او د لټون انجنونو او ټولنیزو رسنیو کې د شریکولو لپاره چمتو کیږي."
        },
        features: [
            "Dari, Pashto & English Editions",
            "Reporter & Editor Workflow",
            "Breaking News & Live Updates",
            "Video & Photo Galleries",
            "Fast Loading with Caching",
            "News SEO & Social Sharing",
            "Ad Placement Zones",
            "Readership Analytics"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 30,000",
                features: [
                    "News Website with Categories",
                    "One Language",
                    "Editor Dashboard",
                    "Mobile-Friendly Design",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Newsroom",
                price: "AFN 55,000",
                features: [
                    "Two or Three Languages",
                    "Reporter & Editor Roles",
                    "Video & Photo Galleries",
                    "Breaking News Ticker",
                    "Ad Zones",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Media House",
                price: "AFN 90,000+",
                features: [
                    "Everything in Newsroom",
                    "Live Blog Coverage",
                    "Mobile App Feed or API",
                    "High-Traffic Hosting Setup",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "website-to-app",
        slug: "website-to-app",
        category: "development",
        title: {
            en: "Website to Mobile App Conversion",
            da: "تبدیل ویب‌سایت به اپلیکیشن موبایل",
            pa: "ویب پاڼې په موبایل اپ بدلول"
        },
        shortDesc: {
            en: "Turn your existing website into an Android and iOS app",
            da: "ویب‌سایت موجود خود را به اپ اندروید و iOS تبدیل کنید",
            pa: "خپله موجوده ویب پاڼه په اندروید او iOS اپ بدله کړئ"
        },
        description: {
            en: "We turn an existing website or online store into a mobile app, so customers can install it from Google Play or the App Store and you can reach them with push notifications. Depending on your site, we wrap it with native navigation and offline screens, or build a lighter app on top of your existing API. Store submission is included; approval follows each store's own review rules.",
            da: "ما ویب‌سایت یا فروشگاه آنلاین موجود شما را به اپ موبایل تبدیل می‌کنیم تا مشتریان آن را از Google Play یا App Store نصب کنند و شما با پوش نوتیفیکیشن به آنها برسید. بسته به سایت شما، آن را با ناوبری بومی و صفحات آفلاین می‌پوشانیم یا یک اپ سبک‌تر روی API موجود شما می‌سازیم. ارسال به استور شامل است؛ منظوری مطابق قوانین بررسی خود هر استور صورت می‌گیرد.",
            pa: "موږ ستاسو موجوده ویب پاڼه یا آنلاین پلورنځی په موبایل اپ بدلوو څو پیرودونکي یې له Google Play یا App Store څخه نصب کړي او تاسو د پوش خبرتیاوو له لارې ورته ورسیږئ. ستاسو د سایټ پر اساس، یا یې د اصلي نیویګیشن او آفلاین پاڼو سره پوښو، یا ستاسو د موجوده API پر سر یو سپک اپ جوړوو. سټور ته لیږل شامل دي؛ منظوري د هر سټور د خپلو کتنې قوانینو سره سمه کیږي."
        },
        features: [
            "Android & iOS Apps from Your Website",
            "Push Notifications",
            "Native Navigation Bar",
            "Offline & No-Connection Screens",
            "Splash Screen & App Icon",
            "Deep Links to Site Pages",
            "Play Store & App Store Submission",
            "Updates When Your Site Changes"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 20,000",
                features: [
                    "Android App from Your Website",
                    "App Icon & Splash Screen",
                    "Offline Screen",
                    "Play Store Submission",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 40,000",
                features: [
                    "Android & iOS Apps",
                    "Push Notifications",
                    "Native Navigation Bar",
                    "Deep Links",
                    "Both Store Submissions",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Native-Feel",
                price: "AFN 70,000+",
                features: [
                    "App Built on Your API",
                    "Native Screens for Key Flows",
                    "User Login & Cart in App",
                    "Offline Caching",
                    "Priority Support",
                    "1 Year Maintenance"
                ]
            }
        }
    }
];

export default services;
