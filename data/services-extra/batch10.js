const services = [
    {
        id: "wordpress-plugin-development",
        slug: "wordpress-plugin-development",
        category: "development",
        title: {
            en: "WordPress Plugin Development",
            da: "ساخت پلاگین WordPress",
            pa: "د WordPress پلګین جوړول"
        },
        shortDesc: {
            en: "Custom WordPress plugins for features no off-the-shelf plugin covers",
            da: "پلاگین‌های اختصاصی WordPress برای امکاناتی که پلاگین آماده ندارد",
            pa: "ځانګړي WordPress پلګینونه د هغو اسانتیاوو لپاره چې چمتو پلګین یې نه لري"
        },
        description: {
            en: "We write custom WordPress and WooCommerce plugins when your site needs something specific — a custom booking flow, a local payment gateway, an integration with your own system, or a Dari/Pashto-aware admin screen. Plugins follow WordPress coding standards, survive core updates, and come with the source code and documentation.",
            da: "ما پلاگین‌های اختصاصی WordPress و WooCommerce را زمانی می‌نویسیم که سایت شما به چیزی خاص نیاز دارد — یک روند رزرو اختصاصی، اتصال به درگاه پرداخت محلی، وصل شدن با سیستم خودتان، یا صفحه مدیریت سازگار با دری و پشتو. پلاگین‌ها مطابق معیارهای کودنویسی WordPress نوشته می‌شوند، با آپدیت‌های WordPress خراب نمی‌شوند و همراه با سورس کود و رهنما تحویل داده می‌شوند.",
            pa: "موږ ځانګړي WordPress او WooCommerce پلګینونه هغه وخت لیکو چې ستاسو ویب پاڼې یو ځانګړي شي ته اړتیا ولري — ځانګړې د بکینګ پروسه، د سیمه‌ییز تادیې دروازې سره نښلول، ستاسو د خپل سیسټم سره اړیکه، یا د دري او پښتو سره برابره د مدیریت پاڼه. پلګینونه د WordPress د کوډ لیکلو د معیارونو سره سم لیکل کیږي، د WordPress له تازه کېدو سره نه خرابیږي، او د سرچینې کوډ او لارښود سره سپارل کیږي."
        },
        features: [
            "Custom WordPress Plugins",
            "WooCommerce Extensions",
            "Third-Party API Integrations",
            "RTL-Ready Admin Screens",
            "Custom Post Types & Fields",
            "Gutenberg Blocks",
            "Update-Safe Code",
            "Source Code & Documentation"
        ],
        pricing: {
            basic: {
                name: "Simple Plugin",
                price: "AFN 10,000",
                features: [
                    "One focused feature",
                    "Settings page in admin",
                    "Tested on latest WordPress",
                    "Installation on your site",
                    "1 Month Bug Fixes"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 25,000",
                features: [
                    "Multi-feature plugin",
                    "Custom post types & fields",
                    "One API integration",
                    "Shortcodes or Gutenberg blocks",
                    "Dari/Pashto translation files",
                    "3 Months Bug Fixes"
                ]
            },
            enterprise: {
                name: "Advanced",
                price: "AFN 45,000+",
                features: [
                    "Complex business logic",
                    "Multiple API integrations",
                    "WooCommerce payment or shipping module",
                    "Role-based permissions",
                    "Technical documentation",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "browser-extension",
        slug: "browser-extension",
        category: "development",
        title: {
            en: "Browser Extension Development",
            da: "ساخت افزونه مرورگر",
            pa: "د براوزر توسعې (Extension) جوړول"
        },
        shortDesc: {
            en: "Chrome, Edge and Firefox extensions for your team or your customers",
            da: "افزونه‌های Chrome، Edge و Firefox برای تیم یا مشتریان شما",
            pa: "د Chrome، Edge او Firefox توسعې ستاسو د ټیم یا پیرودونکو لپاره"
        },
        description: {
            en: "We build browser extensions that add tools right where people already work — internal productivity helpers for your staff, or public extensions for your customers. We handle the extension itself, any backend it needs, and submission to the Chrome Web Store and Firefox Add-ons.",
            da: "ما افزونه‌های مرورگر می‌سازیم که ابزار را دقیقاً همان جایی می‌آورند که مردم کار می‌کنند — ابزارهای داخلی برای کارمندان شما، یا افزونه‌های عمومی برای مشتریان‌تان. ساخت خود افزونه، هر بک‌اندی که لازم داشته باشد، و نشر آن در Chrome Web Store و Firefox Add-ons را ما انجام می‌دهیم.",
            pa: "موږ د براوزر توسعې جوړوو چې وسایل هماغه ځای ته راوړي چیرې چې خلک کار کوي — ستاسو د کارکوونکو لپاره داخلي وسایل، یا ستاسو د پیرودونکو لپاره عامې توسعې. د توسعې جوړول، هر هغه بیک اېنډ چې ورته اړتیا وي، او په Chrome Web Store او Firefox Add-ons کې یې خپرول زموږ کار دی."
        },
        features: [
            "Chrome & Edge Extensions",
            "Firefox Add-ons",
            "Internal Productivity Tools",
            "Backend & API Connection",
            "Dari & Pashto Interfaces",
            "Manifest V3 Compliance",
            "Store Submission",
            "Updates & Maintenance"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 14,000",
                features: [
                    "Single-purpose extension",
                    "Chrome & Edge support",
                    "Simple popup interface",
                    "Chrome Web Store submission"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 30,000",
                features: [
                    "Multi-feature extension",
                    "Chrome, Edge & Firefox",
                    "Connection to your API",
                    "User login & settings sync",
                    "Multilingual interface",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 55,000+",
                features: [
                    "Custom backend included",
                    "Team management & admin panel",
                    "Private deployment for staff",
                    "Analytics & usage reports",
                    "Security review",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "mobile-game-development",
        slug: "mobile-game-development",
        category: "development",
        title: {
            en: "Mobile Game Development",
            da: "ساخت بازی موبایل",
            pa: "د موبایل لوبو جوړول"
        },
        shortDesc: {
            en: "Casual, educational and branded games for Android and iOS",
            da: "بازی‌های ساده، آموزشی و تبلیغاتی برای اندروید و iOS",
            pa: "ساده، ښوونیزې او تبلیغاتي لوبې د اندروید او iOS لپاره"
        },
        description: {
            en: "We make 2D mobile games — casual puzzles, educational games for children in Dari and Pashto, and branded games for marketing campaigns. Games are built in Unity or Flutter, kept small enough to download on mobile data, and published to Google Play and the App Store under your account.",
            da: "ما بازی‌های دوبعدی موبایل می‌سازیم — معماهای ساده، بازی‌های آموزشی برای کودکان به دری و پشتو، و بازی‌های تبلیغاتی برای کمپاین‌های بازاریابی. بازی‌ها با Unity یا Flutter ساخته می‌شوند، حجم‌شان آن‌قدر کم نگه داشته می‌شود که با انترنت موبایل دانلود شوند، و به نام حساب خودتان در Google Play و App Store نشر می‌شوند.",
            pa: "موږ دوه‌اړخیزې (2D) موبایل لوبې جوړوو — ساده معماوې، د ماشومانو لپاره په دري او پښتو ښوونیزې لوبې، او د بازارموندنې کمپاینونو لپاره تبلیغاتي لوبې. لوبې په Unity یا Flutter جوړیږي، حجم یې دومره کم ساتل کیږي چې د موبایل انټرنټ سره ډاونلوډ شي، او ستاسو په حساب په Google Play او App Store کې خپریږي."
        },
        features: [
            "2D Casual & Puzzle Games",
            "Educational Games for Kids",
            "Branded Marketing Games",
            "Dari & Pashto Content",
            "Unity & Flutter",
            "Small Download Size",
            "Leaderboards & Rewards",
            "Play Store & App Store Publishing"
        ],
        pricing: {
            basic: {
                name: "Mini Game",
                price: "AFN 30,000",
                features: [
                    "One simple game mechanic",
                    "Up to 10 levels",
                    "Android build",
                    "Basic sound & graphics",
                    "Play Store publishing"
                ]
            },
            professional: {
                name: "Standard Game",
                price: "AFN 75,000",
                features: [
                    "Original game design",
                    "Up to 30 levels",
                    "Android & iOS builds",
                    "Custom artwork & animation",
                    "Leaderboards & achievements",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Full Production",
                price: "Custom",
                features: [
                    "Multi-mode or online game",
                    "In-app purchases or ads",
                    "Backend & player accounts",
                    "Analytics integration",
                    "Content updates plan",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "legacy-modernization",
        slug: "legacy-modernization",
        category: "development",
        title: {
            en: "Legacy System Modernization",
            da: "نوسازی سیستم‌های قدیمی",
            pa: "د زړو سیسټمونو نوي کول"
        },
        shortDesc: {
            en: "Move old Access, Excel and desktop systems to modern web software",
            da: "انتقال سیستم‌های قدیمی Access، Excel و دسکتاپ به نرم‌افزار وب مدرن",
            pa: "د زړو Access، Excel او ډیسکټاپ سیسټمونو عصري ویب سافټویر ته لېږدول"
        },
        description: {
            en: "Many Afghan organizations still run on old Access databases, shared Excel files or outdated desktop programs that only one person understands. We map what the old system does, migrate the data carefully, and rebuild it as a modern web application — in stages, so daily work is not interrupted.",
            da: "بسیاری از اداره‌ها و شرکت‌های افغان هنوز با دیتابیس‌های قدیمی Access، فایل‌های مشترک Excel یا برنامه‌های کهنه دسکتاپ کار می‌کنند که فقط یک نفر آن را می‌فهمد. ما کارکرد سیستم قدیمی را بررسی می‌کنیم، معلومات را با دقت انتقال می‌دهیم و آن را به یک اپلیکیشن وب مدرن تبدیل می‌کنیم — مرحله به مرحله، تا کار روزمره متوقف نشود.",
            pa: "ډېر افغان ادارې او شرکتونه لا هم په زړو Access ډیټابیسونو، ګډو Excel فایلونو یا زړو ډیسکټاپ پروګرامونو کار کوي چې یوازې یو کس یې پوهیږي. موږ د زاړه سیسټم کار څېړو، معلومات په احتیاط سره لېږدوو او هغه په یو عصري ویب اپلیکیشن بدلوو — ګام په ګام، څو ورځنی کار ونه دریږي."
        },
        features: [
            "Legacy System Assessment",
            "Access & Excel Migration",
            "Desktop to Web Conversion",
            "Careful Data Migration",
            "Phased Rollout",
            "Modern Tech Stack",
            "User Training",
            "Documentation of Business Rules"
        ],
        pricing: {
            basic: {
                name: "Assessment",
                price: "AFN 12,000",
                features: [
                    "Review of current system",
                    "Data structure analysis",
                    "Modernization roadmap",
                    "Cost & timeline estimate"
                ]
            },
            professional: {
                name: "Migration",
                price: "AFN 60,000",
                features: [
                    "Rebuild of one core module",
                    "Full data migration",
                    "Web-based access for staff",
                    "User roles & permissions",
                    "Staff training",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Full Modernization",
                price: "Custom",
                features: [
                    "Complete system rebuild",
                    "Phased module-by-module rollout",
                    "Parallel running period",
                    "Integrations with other systems",
                    "Full documentation",
                    "12 Months Support"
                ]
            }
        }
    },
    {
        id: "code-audit",
        slug: "code-audit",
        category: "development",
        title: {
            en: "Code Review & Audit",
            da: "بررسی و ارزیابی کود",
            pa: "د کوډ بیاکتنه او ارزونه"
        },
        shortDesc: {
            en: "An independent review of your codebase before you build, buy or scale",
            da: "بررسی مستقل کود شما پیش از توسعه، خرید یا گسترش",
            pa: "ستاسو د کوډ خپلواکه بیاکتنه مخکې له پراختیا، پېرلو یا غځولو"
        },
        description: {
            en: "If you inherited code from a freelancer, are about to buy a product, or are unsure about the quality of what was delivered, we review it. You get a written report covering structure, security weaknesses, performance problems and maintainability, with each issue ranked by priority and a clear recommendation.",
            da: "اگر کود را از یک فریلنسر تحویل گرفته‌اید، می‌خواهید یک محصول را بخرید، یا از کیفیت کار تحویل‌شده مطمئن نیستید، ما آن را بررسی می‌کنیم. شما یک گزارش کتبی دریافت می‌کنید که ساختار، نقاط ضعف امنیتی، مشکلات سرعت و قابلیت نگهداری را پوشش می‌دهد و هر مشکل با اولویت و پیشنهاد روشن درج شده است.",
            pa: "که تاسو کوډ له یو فریلانسر څخه ترلاسه کړی، غواړئ یو محصول وپېرئ، یا د سپارل شوي کار په کیفیت ډاډه نه یاست، موږ یې بیاکتنه کوو. تاسو یو لیکلی راپور ترلاسه کوئ چې جوړښت، امنیتي کمزورۍ، د سرعت ستونزې او د ساتنې وړتیا پکې شامله ده، او هره ستونزه د لومړیتوب او روښانه وړاندیز سره ښودل شوې ده."
        },
        features: [
            "Code Quality Review",
            "Security Weakness Check",
            "Performance Analysis",
            "Architecture Assessment",
            "Dependency & License Check",
            "Prioritized Issue List",
            "Written Report",
            "Walkthrough Call"
        ],
        pricing: {
            basic: {
                name: "Quick Review",
                price: "AFN 8,000",
                features: [
                    "Small codebase or one module",
                    "Code quality & structure review",
                    "Top issues summary",
                    "Short written report"
                ]
            },
            professional: {
                name: "Full Audit",
                price: "AFN 25,000",
                features: [
                    "Complete web or mobile app",
                    "Security & performance review",
                    "Dependency check",
                    "Prioritized issue list",
                    "Detailed written report",
                    "Walkthrough call"
                ]
            },
            enterprise: {
                name: "Audit & Fix",
                price: "AFN 50,000+",
                features: [
                    "Multi-system audit",
                    "Architecture recommendations",
                    "Fixing critical issues",
                    "Re-review after fixes",
                    "Team coding guidelines",
                    "1 Month Follow-up Support"
                ]
            }
        }
    },
    {
        id: "white-label-apps",
        slug: "white-label-apps",
        category: "development",
        title: {
            en: "White-Label App Solutions",
            da: "اپلیکیشن‌های آماده با برند شما",
            pa: "ستاسو د برانډ سره چمتو اپلیکیشنونه"
        },
        shortDesc: {
            en: "Proven app templates launched under your own brand, faster and cheaper",
            da: "قالب‌های آزموده اپلیکیشن با برند خودتان، سریع‌تر و ارزان‌تر",
            pa: "ازمویل شوي د اپ قالبونه ستاسو په خپل برانډ، چټک او ارزانه"
        },
        description: {
            en: "Instead of building from scratch, we take an existing app base — ordering, booking, delivery or loyalty — and rebrand and adapt it for your business with your logo, colors, languages and payment options. You launch in weeks rather than months, and the app is published under your own store accounts.",
            da: "به جای ساخت از صفر، ما یک پایه اپلیکیشن موجود — سفارش، رزرو، تحویل یا وفاداری مشتری — را با لوگو، رنگ‌ها، زبان‌ها و روش‌های پرداخت شما برای کسب‌وکارتان آماده می‌کنیم. شما به جای چند ماه، در چند هفته شروع می‌کنید و اپلیکیشن به نام حساب‌های خودتان در اپ‌ستورها نشر می‌شود.",
            pa: "له صفر څخه د جوړولو پر ځای، موږ د اپ یوه موجوده بنسټ — فرمایش، بکینګ، رسول یا د پیرودونکو وفاداري — ستاسو د لوګو، رنګونو، ژبو او د تادیې د لارو سره ستاسو سوداګرۍ ته برابروو. تاسو د میاشتو پر ځای په څو اونیو کې پیل کوئ او اپ ستاسو په خپلو سټور حسابونو خپریږي."
        },
        features: [
            "Ready-Made App Bases",
            "Your Logo, Colors & Name",
            "Dari, Pashto & English",
            "Local Payment Options",
            "Admin Dashboard",
            "Published Under Your Account",
            "Custom Feature Add-ons",
            "Ongoing Updates"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 35,000",
                features: [
                    "One white-label app (Android)",
                    "Branding & color setup",
                    "Basic admin panel",
                    "Play Store publishing",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 65,000",
                features: [
                    "Android & iOS apps",
                    "Web admin dashboard",
                    "Multilingual setup",
                    "Payment integration",
                    "Minor custom changes",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 110,000+",
                features: [
                    "Customer, driver & admin apps",
                    "Custom features on request",
                    "Full source code license",
                    "Server setup & hosting",
                    "Staff training",
                    "12 Months Support"
                ]
            }
        }
    },
    {
        id: "odoo-customization",
        slug: "odoo-customization",
        category: "development",
        title: {
            en: "Odoo & ERPNext Customization",
            da: "تنظیم و توسعه Odoo و ERPNext",
            pa: "د Odoo او ERPNext برابرول او پراختیا"
        },
        shortDesc: {
            en: "Open-source ERP set up and adapted to how your business really works",
            da: "ERP متن‌باز که مطابق روش واقعی کار شما تنظیم و توسعه داده می‌شود",
            pa: "خلاص سرچینه ERP چې ستاسو د کار د اصلي طریقې سره برابریږي"
        },
        description: {
            en: "Odoo and ERPNext cover accounting, inventory, sales, HR and purchasing without per-user license fees on their community editions. We install and configure them, build custom modules and reports for your workflows, add AFN and multi-currency handling, translate the interface into Dari and Pashto, and migrate your existing data.",
            da: "Odoo و ERPNext حسابداری، گدام، فروش، منابع بشری و خریداری را پوشش می‌دهند و نسخه‌های community آن‌ها فیس لایسنس برای هر کاربر ندارند. ما آن‌ها را نصب و تنظیم می‌کنیم، ماژول‌ها و گزارش‌های اختصاصی برای روند کار شما می‌سازیم، افغانی و چند اسعار را اضافه می‌کنیم، رابط کاربری را به دری و پشتو ترجمه می‌کنیم و معلومات موجود شما را انتقال می‌دهیم.",
            pa: "Odoo او ERPNext حساب‌داري، ګودام، پلور، بشري سرچینې او پېرود پوښي او د دوی community نسخې د هر کاروونکي لپاره د جواز فیس نه لري. موږ یې نصبوو او برابروو، ستاسو د کاري بهیر لپاره ځانګړي ماډیولونه او راپورونه جوړوو، افغانۍ او څو اسعارو ملاتړ ورزیاتوو، انټرفیس یې دري او پښتو ته ژباړو او ستاسو موجود معلومات لېږدوو."
        },
        features: [
            "Odoo & ERPNext Setup",
            "Custom Modules",
            "Accounting & Inventory",
            "AFN & Multi-Currency",
            "Dari & Pashto Translation",
            "Custom Reports & Invoices",
            "Data Migration",
            "Staff Training"
        ],
        pricing: {
            basic: {
                name: "Setup",
                price: "AFN 25,000",
                features: [
                    "Installation on your server",
                    "Up to 3 standard modules",
                    "Company & currency setup",
                    "Invoice template branding",
                    "Basic staff training"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 60,000",
                features: [
                    "Up to 6 modules configured",
                    "Custom reports",
                    "Data import from Excel",
                    "Dari/Pashto interface",
                    "User roles & permissions",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Custom ERP",
                price: "Custom",
                features: [
                    "Custom-developed modules",
                    "Multi-branch setup",
                    "Integration with POS or e-commerce",
                    "Full data migration",
                    "On-site or remote training",
                    "12 Months Support"
                ]
            }
        }
    },
    {
        id: "moodle-setup",
        slug: "moodle-setup",
        category: "development",
        title: {
            en: "Moodle Setup & Customization",
            da: "راه‌اندازی و تنظیم Moodle",
            pa: "د Moodle جوړول او برابرول"
        },
        shortDesc: {
            en: "Moodle e-learning platforms for schools, universities and trainers",
            da: "پلتفرم آموزش آنلاین Moodle برای مکاتب، پوهنتون‌ها و مراکز آموزشی",
            pa: "د Moodle آنلاین زده‌کړې پلېټفارم د ښوونځیو، پوهنتونونو او روزنیزو مرکزونو لپاره"
        },
        description: {
            en: "We install and customize Moodle, the open-source learning platform, for schools, universities, training centers and NGOs. That includes branding, a proper RTL Dari/Pashto interface, course and user setup, quizzes and certificates, and tuning so lessons load on slow connections and on phones.",
            da: "ما Moodle، پلتفرم آموزشی متن‌باز، را برای مکاتب، پوهنتون‌ها، مراکز آموزشی و NGOها نصب و تنظیم می‌کنیم. این کار شامل برندسازی، رابط درست راست‌به‌چپ دری و پشتو، ایجاد کورس‌ها و کاربران، امتحان‌ها و تصدیق‌نامه‌ها، و بهینه‌سازی برای باز شدن درس‌ها روی انترنت کند و موبایل است.",
            pa: "موږ Moodle، چې یو خلاص سرچینه د زده‌کړې پلېټفارم دی، د ښوونځیو، پوهنتونونو، روزنیزو مرکزونو او NGOګانو لپاره نصبوو او برابروو. په دې کې برانډ کول، د دري او پښتو سم ښي‌نه‌کیڼ انټرفیس، د کورسونو او کاروونکو جوړول، ازموینې او سندونه، او داسې برابرول شامل دي چې درسونه په ورو انټرنټ او موبایل کې پرانیستل شي."
        },
        features: [
            "Moodle Installation & Hosting Setup",
            "Custom Theme & Branding",
            "Dari & Pashto RTL Interface",
            "Course & User Setup",
            "Quizzes & Certificates",
            "Low-Bandwidth Optimization",
            "Plugin Configuration",
            "Teacher & Admin Training"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 18,000",
                features: [
                    "Moodle installation",
                    "Logo & color branding",
                    "Dari/Pashto language packs",
                    "Up to 5 courses set up",
                    "Admin training session"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 40,000",
                features: [
                    "Custom theme",
                    "Bulk user & course import",
                    "Certificates & badges",
                    "Mobile app configuration",
                    "Teacher training",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Institution",
                price: "AFN 75,000+",
                features: [
                    "Multi-faculty or multi-branch setup",
                    "Custom plugins",
                    "Integration with student system",
                    "Performance tuning for large user base",
                    "Backup setup",
                    "12 Months Support"
                ]
            }
        }
    },
    {
        id: "rtl-app-conversion",
        slug: "rtl-app-conversion",
        category: "development",
        title: {
            en: "RTL Conversion for Apps & Software",
            da: "تبدیل اپلیکیشن و نرم‌افزار به راست‌به‌چپ",
            pa: "د اپونو او سافټویر ښي‌نه‌کیڼ (RTL) ته اړول"
        },
        shortDesc: {
            en: "Make your existing app or website work properly in Dari and Pashto",
            da: "اپلیکیشن یا ویب‌سایت موجود شما را به دری و پشتو درست قابل استفاده می‌سازیم",
            pa: "ستاسو موجود اپ یا ویب پاڼه په دري او پښتو کې سم کاروونکې کوو"
        },
        description: {
            en: "Many apps and systems were built for left-to-right languages only, so Dari and Pashto text appears broken, misaligned or mixed up with numbers. We convert the layout to proper right-to-left, fix fonts and text shaping, handle mixed Persian-script and English content, and add the translation structure so new languages can be added later.",
            da: "بسیاری از اپلیکیشن‌ها و سیستم‌ها فقط برای زبان‌های چپ‌به‌راست ساخته شده‌اند و متن دری و پشتو در آن‌ها شکسته، نامرتب یا با اعداد قاطی نمایش داده می‌شود. ما چیدمان را به راست‌به‌چپ درست تبدیل می‌کنیم، فونت‌ها و اتصال حروف را اصلاح می‌کنیم، محتوای ترکیبی دری/پشتو و انگلیسی را مدیریت می‌کنیم و ساختار ترجمه را اضافه می‌کنیم تا بعداً زبان‌های دیگر هم اضافه شوند.",
            pa: "ډېر اپونه او سیسټمونه یوازې د کیڼ‌نه‌ښي ژبو لپاره جوړ شوي، نو د دري او پښتو متن پکې مات، ګډوډ یا له شمېرو سره ګډ ښکاري. موږ جوړښت سم ښي‌نه‌کیڼ ته اړوو، فونټونه او د تورو نښلول سموو، د دري/پښتو او انګلیسي ګډه منځپانګه سمبالوو او د ژباړې جوړښت ورزیاتوو څو وروسته نورې ژبې هم ور اضافه شي."
        },
        features: [
            "Full RTL Layout Conversion",
            "Dari & Pashto Font Setup",
            "Mixed RTL/LTR Text Handling",
            "Number & Date Formatting",
            "Internationalization (i18n) Setup",
            "Web, Android & iOS",
            "Translation File Structure",
            "RTL Testing on Real Devices"
        ],
        pricing: {
            basic: {
                name: "Website",
                price: "AFN 12,000",
                features: [
                    "RTL conversion of up to 10 pages",
                    "Dari/Pashto web fonts",
                    "Language switcher",
                    "Mobile layout check"
                ]
            },
            professional: {
                name: "App",
                price: "AFN 35,000",
                features: [
                    "Full web app or mobile app",
                    "i18n setup for all screens",
                    "Mixed text & number fixes",
                    "Shamsi date display",
                    "Translation files ready",
                    "1 Month Support"
                ]
            },
            enterprise: {
                name: "Platform",
                price: "AFN 70,000+",
                features: [
                    "Multiple apps & admin panels",
                    "PDF & report RTL fixes",
                    "Email & SMS template conversion",
                    "Translation of interface text",
                    "QA on real devices",
                    "3 Months Support"
                ]
            }
        }
    },
    {
        id: "no-code-development",
        slug: "no-code-development",
        category: "development",
        title: {
            en: "No-Code & Low-Code App Development",
            da: "ساخت اپلیکیشن بدون کود و کم‌کود",
            pa: "بې کوډه او لږ کوډه اپ جوړول"
        },
        shortDesc: {
            en: "Fast, affordable internal tools and apps built on no-code platforms",
            da: "ابزارها و اپلیکیشن‌های سریع و کم‌هزینه با پلتفرم‌های بدون کود",
            pa: "چټک او ارزانه داخلي وسایل او اپونه په بې کوډه پلېټفارمونو"
        },
        description: {
            en: "For internal tools, simple apps and prototypes, a no-code or low-code platform is often faster and cheaper than custom code. We build on tools like Glide, AppSheet, Airtable and Make, connect them to your Google Sheets or databases, and tell you honestly when a project has outgrown no-code and needs a custom build.",
            da: "برای ابزارهای داخلی، اپلیکیشن‌های ساده و نمونه‌های اولیه، پلتفرم‌های بدون کود یا کم‌کود اغلب سریع‌تر و ارزان‌تر از کودنویسی اختصاصی هستند. ما با ابزارهایی مثل Glide، AppSheet، Airtable و Make کار می‌کنیم، آن‌ها را به Google Sheets یا دیتابیس شما وصل می‌کنیم و صادقانه می‌گوییم چه وقت یک پروژه از توان بدون کود بیرون شده و به ساخت اختصاصی نیاز دارد.",
            pa: "د داخلي وسایلو، ساده اپونو او لومړنیو نمونو لپاره، بې کوډه یا لږ کوډه پلېټفارمونه اکثراً د ځانګړي کوډ لیکلو په پرتله چټک او ارزانه وي. موږ د Glide، AppSheet، Airtable او Make په څېر وسایلو کار کوو، هغه ستاسو Google Sheets یا ډیټابیس سره نښلوو، او په ریښتیني ډول درته وایو چې کله یوه پروژه د بې کوډه له وس څخه وتلې او ځانګړي جوړونې ته اړتیا لري."
        },
        features: [
            "Internal Tools & Dashboards",
            "Glide, AppSheet & Airtable",
            "Workflow Automation (Make, Zapier)",
            "Google Sheets Integration",
            "Rapid Prototypes",
            "Forms & Data Collection Apps",
            "Team Handover & Training",
            "Honest Platform Advice"
        ],
        pricing: {
            basic: {
                name: "Quick Tool",
                price: "AFN 8,000",
                features: [
                    "One simple no-code app",
                    "Connected to Google Sheets",
                    "Up to 5 screens",
                    "Handover session"
                ]
            },
            professional: {
                name: "Business App",
                price: "AFN 22,000",
                features: [
                    "Multi-screen internal app",
                    "User roles & logins",
                    "2 automation workflows",
                    "Reports & dashboards",
                    "Team training",
                    "1 Month Support"
                ]
            },
            enterprise: {
                name: "Advanced",
                price: "AFN 40,000+",
                features: [
                    "Multiple connected apps",
                    "Database & API connections",
                    "Advanced automations",
                    "Platform cost planning",
                    "Documentation",
                    "3 Months Support"
                ]
            }
        }
    },
    {
        id: "loyalty-program",
        slug: "loyalty-program",
        category: "ecommerce",
        title: {
            en: "Customer Loyalty Program",
            da: "برنامه وفاداری مشتریان",
            pa: "د پیرودونکو د وفادارۍ پروګرام"
        },
        shortDesc: {
            en: "Points, rewards and repeat-customer programs for shops and online stores",
            da: "امتیاز، جایزه و برنامه مشتری دایمی برای دکان‌ها و فروشگاه‌های آنلاین",
            pa: "نمرې، انعامونه او د تلپاتې پیرودونکو پروګرامونه د دوکانونو او آنلاین پلورنځیو لپاره"
        },
        description: {
            en: "We build loyalty programs that reward customers for coming back — points per purchase, stamp cards, referral bonuses and member discounts. Customers can join with just a phone number, check their balance by app, web or SMS, and the program can connect to your POS or online store.",
            da: "ما برنامه‌های وفاداری می‌سازیم که به مشتریان برای برگشتن جایزه می‌دهند — امتیاز برای هر خرید، کارت مُهر، جایزه معرفی دوستان و تخفیف اعضا. مشتریان فقط با شماره تلفن عضو می‌شوند، موجودی امتیاز خود را از طریق اپ، وب یا SMS می‌بینند، و برنامه می‌تواند به سیستم POS یا فروشگاه آنلاین شما وصل شود.",
            pa: "موږ د وفادارۍ پروګرامونه جوړوو چې پیرودونکو ته د بیا راتګ انعام ورکوي — د هر پېرود نمرې، د ټاپې کارتونه، د ملګرو د معرفي کولو انعام او د غړو تخفیف. پیرودونکي یوازې د تلیفون شمېرې سره غړیتوب اخلي، خپلې نمرې د اپ، ویب یا SMS له لارې ګوري، او پروګرام ستاسو POS سیسټم یا آنلاین پلورنځي سره نښلېدلی شي."
        },
        features: [
            "Points & Rewards System",
            "Digital Stamp Cards",
            "Phone-Number Sign-Up",
            "Referral Bonuses",
            "SMS Balance & Offers",
            "POS & Online Store Integration",
            "Customer Insights Dashboard",
            "Dari, Pashto & English"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 15,000",
                features: [
                    "Points or stamp card program",
                    "Web-based member portal",
                    "Staff panel to add points",
                    "Customer list export",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 35,000",
                features: [
                    "Points, tiers & referrals",
                    "SMS notifications",
                    "Online store integration",
                    "Reward catalog",
                    "Reports dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Branch",
                price: "AFN 70,000+",
                features: [
                    "Branded mobile app",
                    "Multi-branch support",
                    "POS integration",
                    "Partner rewards",
                    "Campaign tools",
                    "12 Months Support"
                ]
            }
        }
    },
    {
        id: "b2b-export-catalog",
        slug: "b2b-export-catalog",
        category: "ecommerce",
        title: {
            en: "B2B Export Catalog",
            da: "کاتالوگ صادراتی B2B",
            pa: "د B2B صادراتو کتلاګ"
        },
        shortDesc: {
            en: "Online catalogs that present Afghan products to wholesale buyers abroad",
            da: "کاتالوگ آنلاین برای معرفی محصولات افغانی به خریداران عمده خارجی",
            pa: "آنلاین کتلاګونه چې افغاني محصولات بهرنیو عمده پېرودونکو ته وړاندې کوي"
        },
        description: {
            en: "For exporters of saffron, dried fruit, carpets, gemstones and handicrafts, we build online catalogs aimed at wholesale buyers rather than retail shoppers. Each product has specifications, packaging options and minimum order quantities, and buyers send inquiries or request quotes directly — in English plus other buyer languages as needed.",
            da: "برای صادرکنندگان زعفران، میوه خشک، قالین، سنگ‌های قیمتی و صنایع دستی، ما کاتالوگ‌های آنلاین می‌سازیم که مخاطب آن خریداران عمده هستند نه مشتریان پرچون. هر محصول مشخصات، گزینه‌های بسته‌بندی و حداقل مقدار سفارش دارد و خریداران مستقیماً درخواست معلومات یا قیمت می‌فرستند — به انگلیسی و در صورت نیاز به زبان‌های دیگر خریداران.",
            pa: "د زعفرانو، وچو مېوو، غالیو، قیمتي ډبرو او لاسي صنایعو د صادرونکو لپاره، موږ آنلاین کتلاګونه جوړوو چې مخاطبین یې عمده پېرودونکي دي نه پرچون پېرودونکي. هر محصول مشخصات، د بسته‌بندۍ انتخابونه او د فرمایش لږترلږه اندازه لري، او پېرودونکي مستقیم د معلوماتو یا بیې غوښتنه لېږي — په انګلیسي او د اړتیا په صورت کې د پېرودونکو په نورو ژبو."
        },
        features: [
            "Wholesale Product Catalog",
            "Specs, Grades & Packaging",
            "Minimum Order Quantities",
            "Request-for-Quote Forms",
            "Downloadable PDF Catalog",
            "Multilingual for Buyers",
            "Inquiry Management Panel",
            "Export-Market SEO"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 20,000",
                features: [
                    "Up to 30 products",
                    "English catalog site",
                    "Inquiry form",
                    "PDF catalog download",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 40,000",
                features: [
                    "Up to 150 products",
                    "2 languages",
                    "Request-for-quote system",
                    "Inquiry management panel",
                    "Basic export SEO",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 70,000+",
                features: [
                    "Unlimited products",
                    "Private price lists for buyers",
                    "Buyer accounts & order history",
                    "Multiple languages",
                    "CRM integration",
                    "12 Months Support"
                ]
            }
        }
    },
    {
        id: "digital-business-card",
        slug: "digital-business-card",
        category: "design",
        title: {
            en: "Digital & NFC Business Cards",
            da: "کارت ویزیت دیجیتال و NFC",
            pa: "ډیجیټل او NFC د لیدنې کارتونه"
        },
        shortDesc: {
            en: "Shareable digital business cards with QR codes and NFC tap support",
            da: "کارت ویزیت دیجیتال قابل اشتراک با کود QR و پشتیبانی NFC",
            pa: "د شریکولو وړ ډیجیټل د لیدنې کارتونه د QR کوډ او NFC ملاتړ سره"
        },
        description: {
            en: "We design digital business cards — a mobile-friendly profile page with your contact details, WhatsApp, social links and a save-to-contacts button — shared through a QR code or an NFC card tap. We handle the design and the digital profile; physical NFC cards are printed and encoded through partner suppliers.",
            da: "ما کارت ویزیت دیجیتال دیزاین می‌کنیم — یک صفحه پروفایل مناسب موبایل با معلومات تماس، واتس‌اپ، لینک‌های شبکه‌های اجتماعی و دکمه ذخیره در مخاطبین — که از طریق کود QR یا لمس کارت NFC به اشتراک گذاشته می‌شود. دیزاین و پروفایل دیجیتال کار ماست؛ کارت‌های فزیکی NFC از طریق تأمین‌کنندگان همکار چاپ و برنامه‌ریزی می‌شوند.",
            pa: "موږ ډیجیټل د لیدنې کارتونه ډیزاین کوو — د موبایل سره برابره د پروفایل پاڼه چې ستاسو د اړیکو معلومات، واټس‌اپ، ټولنیز لینکونه او د اړیکو کې د خوندي کولو تڼۍ لري — چې د QR کوډ یا NFC کارت د لمس له لارې شریکیږي. ډیزاین او ډیجیټل پروفایل زموږ کار دی؛ فزیکي NFC کارتونه د همکارو عرضه کوونکو له لارې چاپ او برابریږي."
        },
        features: [
            "Mobile Profile Page",
            "QR Code Sharing",
            "NFC Card Support (via Partners)",
            "Save-to-Contacts Button",
            "WhatsApp & Social Links",
            "Dari, Pashto & English",
            "Easy Profile Updates",
            "Team Card Management"
        ],
        pricing: {
            basic: {
                name: "Personal",
                price: "AFN 3,500",
                features: [
                    "One digital card profile",
                    "QR code file",
                    "Contact & social links",
                    "Save-to-contacts button"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 9,000",
                features: [
                    "Custom-designed profile",
                    "Bilingual content",
                    "Printable card design",
                    "NFC card setup guidance",
                    "Free updates for 6 months"
                ]
            },
            enterprise: {
                name: "Team",
                price: "AFN 25,000+",
                features: [
                    "Cards for up to 20 staff",
                    "Company-branded template",
                    "Admin panel for updates",
                    "NFC cards via partner supplier",
                    "View analytics",
                    "12 Months Support"
                ]
            }
        }
    },
    {
        id: "calligraphy-typography",
        slug: "calligraphy-typography",
        category: "design",
        title: {
            en: "Dari & Pashto Calligraphy and Typography",
            da: "خوشنویسی و تایپوگرافی دری و پشتو",
            pa: "د دري او پښتو ښکلی لیک او ټایپوګرافي"
        },
        shortDesc: {
            en: "Custom Dari and Pashto lettering for logos, titles and campaigns",
            da: "حروف‌نگاری اختصاصی دری و پشتو برای لوگو، عنوان و کمپاین",
            pa: "د لوګو، سرلیکونو او کمپاینونو لپاره ځانګړی دري او پښتو لیک"
        },
        description: {
            en: "We create custom Persian-script lettering for logos, product names, book and film titles, and campaign headlines — in Nastaliq, Naskh, Kufic-inspired or modern geometric styles. We also choose and pair Dari, Pashto and Latin fonts for your brand, making sure Pashto-specific letters like ټ, ډ, ړ, ښ and ځ render correctly.",
            da: "ما حروف‌نگاری اختصاصی با رسم‌الخط فارسی برای لوگو، نام محصول، عنوان کتاب و فلم، و تیترهای کمپاین می‌سازیم — به سبک نستعلیق، نسخ، الهام‌گرفته از کوفی یا هندسی مدرن. همچنین فونت‌های دری، پشتو و لاتین را برای برند شما انتخاب و هماهنگ می‌کنیم و مطمئن می‌شویم حروف خاص پشتو مثل ټ، ډ، ړ، ښ و ځ درست نمایش داده شوند.",
            pa: "موږ د لوګو، د محصول نوم، د کتاب او فلم سرلیکونو، او د کمپاین سرټکو لپاره په عربي-فارسي لیکدود ځانګړی لیک جوړوو — په نستعلیق، نسخ، له کوفي څخه الهام اخیستي یا عصري هندسي سبک. همداراز ستاسو د برانډ لپاره دري، پښتو او لاتین فونټونه ټاکو او سره برابروو، او ډاډ ترلاسه کوو چې د پښتو ځانګړي توري لکه ټ، ډ، ړ، ښ او ځ سم ښکاري."
        },
        features: [
            "Custom Logotype Lettering",
            "Nastaliq & Naskh Styles",
            "Modern Geometric Styles",
            "Bilingual Logo Lockups",
            "Font Selection & Pairing",
            "Correct Pashto Letterforms",
            "Vector Files for Print & Web",
            "Typography Guidelines"
        ],
        pricing: {
            basic: {
                name: "Single Word",
                price: "AFN 5,000",
                features: [
                    "One word or short name",
                    "2 style concepts",
                    "2 revision rounds",
                    "Vector files (AI, SVG, PDF)"
                ]
            },
            professional: {
                name: "Logotype",
                price: "AFN 14,000",
                features: [
                    "Custom brand logotype",
                    "3 style concepts",
                    "Dari/Pashto + English lockup",
                    "Font pairing recommendation",
                    "3 revision rounds"
                ]
            },
            enterprise: {
                name: "Brand Typography",
                price: "AFN 30,000+",
                features: [
                    "Logotype & title lettering set",
                    "Full font system for brand",
                    "Headline lettering for campaigns",
                    "Typography guidelines document",
                    "Web font setup",
                    "Unlimited revisions within scope"
                ]
            }
        }
    },
    {
        id: "infographic-design",
        slug: "infographic-design",
        category: "design",
        title: {
            en: "Infographic Design",
            da: "دیزاین اینفوگرافیک",
            pa: "د انفوګرافیک ډیزاین"
        },
        shortDesc: {
            en: "Clear visual explanations of data, processes and reports",
            da: "توضیح تصویری و روشن داده‌ها، روندها و گزارش‌ها",
            pa: "د ډېټا، پروسو او راپورونو روښانه انځوریز تشریح"
        },
        description: {
            en: "We turn survey results, project data, processes and awareness messages into infographics that people actually read. Designs are made in Dari, Pashto and English, sized for social media, print or reports, and built from the numbers and sources you provide — we don't invent figures.",
            da: "ما نتایج سروی، معلومات پروژه، روندها و پیام‌های آگاهی‌دهی را به اینفوگرافیک‌هایی تبدیل می‌کنیم که مردم واقعاً می‌خوانند. دیزاین‌ها به دری، پشتو و انگلیسی، در اندازه مناسب شبکه‌های اجتماعی، چاپ یا گزارش، و فقط بر اساس ارقام و منابعی که شما می‌دهید ساخته می‌شوند — ما ارقام از خود نمی‌سازیم.",
            pa: "موږ د سروې پایلې، د پروژې معلومات، پروسې او د پوهاوي پیغامونه په داسې انفوګرافیکونو بدلوو چې خلک یې په ریښتیا لولي. ډیزاینونه په دري، پښتو او انګلیسي، د ټولنیزو رسنیو، چاپ یا راپورونو په اندازه، او یوازې د هغو شمېرو او سرچینو پر بنسټ جوړیږي چې تاسو یې راکوئ — موږ له ځانه شمېرې نه جوړوو."
        },
        features: [
            "Data Visualization",
            "Process & Timeline Graphics",
            "Awareness Campaign Visuals",
            "Social Media Formats",
            "Print & Report Versions",
            "Dari, Pashto & English",
            "Custom Icons",
            "Editable Source Files"
        ],
        pricing: {
            basic: {
                name: "Single",
                price: "AFN 4,000",
                features: [
                    "One infographic",
                    "One language",
                    "Social media size",
                    "2 revision rounds"
                ]
            },
            professional: {
                name: "Series",
                price: "AFN 15,000",
                features: [
                    "Up to 5 infographics",
                    "2 languages",
                    "Social & print sizes",
                    "Custom icon set",
                    "Source files included"
                ]
            },
            enterprise: {
                name: "Report Package",
                price: "AFN 35,000+",
                features: [
                    "Up to 15 infographics",
                    "3 languages",
                    "Charts for full report",
                    "Animated versions for social",
                    "Consistent visual style guide",
                    "Source files included"
                ]
            }
        }
    },
    {
        id: "billboard-design",
        slug: "billboard-design",
        category: "design",
        title: {
            en: "Billboard & Outdoor Ad Design",
            da: "دیزاین بیلبورد و تبلیغات بیرونی",
            pa: "د بلبورډ او بهرني اعلان ډیزاین"
        },
        shortDesc: {
            en: "Billboards, banners and outdoor ads that read in three seconds",
            da: "بیلبورد، بنر و تبلیغات بیرونی که در سه ثانیه خوانده شوند",
            pa: "بلبورډونه، بنرونه او بهرني اعلانونه چې په درې ثانیو کې ولوستل شي"
        },
        description: {
            en: "Outdoor ads are seen from a moving car for a few seconds, so they need one message, large type and strong contrast. We design billboards, roadside banners, shop-front panels and vehicle wraps in Dari, Pashto or English, and deliver print-ready files at the exact size and resolution your printer needs. Printing and installation are handled by your printer or our partners.",
            da: "تبلیغات بیرونی برای چند ثانیه از داخل موتر دیده می‌شوند، پس باید یک پیام، حروف بزرگ و تضاد رنگ قوی داشته باشند. ما بیلبورد، بنرهای کنار سرک، تابلوهای جلوی دکان و پوشش موتر را به دری، پشتو یا انگلیسی دیزاین می‌کنیم و فایل‌های آماده چاپ را با اندازه و کیفیت دقیقی که چاپخانه شما نیاز دارد تحویل می‌دهیم. چاپ و نصب توسط چاپخانه شما یا همکاران ما انجام می‌شود.",
            pa: "بهرني اعلانونه د موټر له دننه د څو ثانیو لپاره لیدل کیږي، نو باید یو پیغام، لوی توري او قوي رنګي توپیر ولري. موږ بلبورډونه، د سړک غاړې بنرونه، د دوکان مخکینۍ تختې او د موټرو پوښونه په دري، پښتو یا انګلیسي ډیزاینوو، او د چاپ لپاره چمتو فایلونه هماغه اندازې او کیفیت سره سپارو چې ستاسو چاپخونې ته پکار دي. چاپ او نصب ستاسو د چاپخونې یا زموږ د همکارانو له خوا کیږي."
        },
        features: [
            "Billboard Design",
            "Roadside & Event Banners",
            "Shop-Front Signage Panels",
            "Vehicle Wrap Design",
            "High-Contrast Readability",
            "Dari, Pashto & English",
            "Print-Ready Large-Format Files",
            "Printer Coordination"
        ],
        pricing: {
            basic: {
                name: "Single Design",
                price: "AFN 5,000",
                features: [
                    "One billboard or banner",
                    "2 concepts",
                    "2 revision rounds",
                    "Print-ready file at your size"
                ]
            },
            professional: {
                name: "Campaign",
                price: "AFN 15,000",
                features: [
                    "Main design + 3 size adaptations",
                    "2 languages",
                    "Matching social media version",
                    "3 revision rounds",
                    "Printer file check"
                ]
            },
            enterprise: {
                name: "Full Outdoor Campaign",
                price: "AFN 35,000+",
                features: [
                    "Multiple messages & formats",
                    "Vehicle wrap design",
                    "Shop-front signage",
                    "3 languages",
                    "Coordination with print partner",
                    "Source files included"
                ]
            }
        }
    },
    {
        id: "annual-report-design",
        slug: "annual-report-design",
        category: "design",
        title: {
            en: "Annual Report Design",
            da: "دیزاین گزارش سالانه",
            pa: "د کلني راپور ډیزاین"
        },
        shortDesc: {
            en: "Readable, well-designed annual and donor reports in print and PDF",
            da: "گزارش‌های سالانه و گزارش به تمویل‌کنندگان، خوانا و زیبا در چاپ و PDF",
            pa: "د لوستلو وړ او ښه ډیزاین شوي کلني او د مرسته‌کوونکو راپورونه په چاپ او PDF کې"
        },
        description: {
            en: "We lay out annual reports, donor reports and impact reports for NGOs and companies — turning long Word documents and spreadsheets into clear pages with charts, photos and pull quotes. Reports can be bilingual with Dari or Pashto set correctly right-to-left alongside English, and delivered as print-ready files and a lightweight PDF for email.",
            da: "ما گزارش‌های سالانه، گزارش به تمویل‌کنندگان و گزارش‌های تأثیر را برای NGOها و شرکت‌ها صفحه‌آرایی می‌کنیم — اسناد طولانی Word و جدول‌های Excel را به صفحات روشن با چارت، عکس و نقل‌قول برجسته تبدیل می‌کنیم. گزارش‌ها می‌توانند دوزبانه باشند، با دری یا پشتو به شکل درست راست‌به‌چپ در کنار انگلیسی، و به صورت فایل آماده چاپ و PDF سبک برای ایمیل تحویل داده می‌شوند.",
            pa: "موږ د NGOګانو او شرکتونو لپاره کلني راپورونه، د مرسته‌کوونکو راپورونه او د اغېز راپورونه ترتیبوو — اوږده Word اسناد او Excel جدولونه د چارټونو، انځورونو او برجسته نقل قولونو سره په روښانه پاڼو بدلوو. راپورونه دوه‌ژبي کیدای شي، چې دري یا پښتو په سم ښي‌نه‌کیڼ ډول د انګلیسي تر څنګ وي، او د چاپ لپاره چمتو فایلونو او د ایمیل لپاره د سپک PDF په بڼه سپارل کیږي."
        },
        features: [
            "Annual & Impact Reports",
            "Donor Report Layout",
            "Charts & Data Graphics",
            "Bilingual RTL/LTR Layout",
            "Photo Selection & Editing",
            "Print-Ready Files",
            "Lightweight Email PDF",
            "Reusable Template"
        ],
        pricing: {
            basic: {
                name: "Short Report",
                price: "AFN 12,000",
                features: [
                    "Up to 12 pages",
                    "One language",
                    "Cover & layout design",
                    "Simple charts",
                    "Print & PDF files"
                ]
            },
            professional: {
                name: "Standard Report",
                price: "AFN 30,000",
                features: [
                    "Up to 40 pages",
                    "Bilingual layout",
                    "Custom charts & infographics",
                    "Photo editing",
                    "Print & email PDF",
                    "Reusable InDesign template"
                ]
            },
            enterprise: {
                name: "Full Publication",
                price: "AFN 60,000+",
                features: [
                    "60+ pages",
                    "3 languages",
                    "Interactive PDF or web version",
                    "Full infographic set",
                    "Printer coordination",
                    "Source files included"
                ]
            }
        }
    },
    {
        id: "explainer-video",
        slug: "explainer-video",
        category: "design",
        title: {
            en: "Animated Explainer Videos",
            da: "ویدیوهای انیمیشنی توضیحی",
            pa: "تشریحي انیمیشني ویډیوګانې"
        },
        shortDesc: {
            en: "Short animated videos that explain your product or message simply",
            da: "ویدیوهای کوتاه انیمیشنی که محصول یا پیام شما را ساده توضیح می‌دهند",
            pa: "لنډې انیمیشني ویډیوګانې چې ستاسو محصول یا پیغام په ساده ډول تشریح کوي"
        },
        description: {
            en: "We make 2D animated explainer videos of 60 to 120 seconds for apps, services and awareness campaigns. We write the script with you, design the characters and scenes, record voiceover in Dari, Pashto or English, and deliver versions sized for YouTube, Facebook, Instagram and WhatsApp.",
            da: "ما ویدیوهای توضیحی انیمیشنی دوبعدی ۶۰ تا ۱۲۰ ثانیه‌ای برای اپلیکیشن‌ها، خدمات و کمپاین‌های آگاهی‌دهی می‌سازیم. سناریو را همراه شما می‌نویسیم، کرکترها و صحنه‌ها را دیزاین می‌کنیم، صدا را به دری، پشتو یا انگلیسی ثبت می‌کنیم و نسخه‌هایی مناسب YouTube، Facebook، Instagram و WhatsApp تحویل می‌دهیم.",
            pa: "موږ د اپونو، خدمتونو او د پوهاوي کمپاینونو لپاره له ۶۰ تر ۱۲۰ ثانیو پورې دوه‌اړخیزې (2D) تشریحي انیمیشني ویډیوګانې جوړوو. سناریو له تاسو سره یوځای لیکو، کرکټرونه او صحنې ډیزاینوو، غږ په دري، پښتو یا انګلیسي ثبتوو، او د YouTube، Facebook، Instagram او WhatsApp لپاره برابرې نسخې سپارو."
        },
        features: [
            "Scriptwriting",
            "Storyboard & Character Design",
            "2D Animation",
            "Dari, Pashto & English Voiceover",
            "Background Music & Sound",
            "Subtitles",
            "Social Media Formats",
            "Source Files on Request"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 20,000",
                features: [
                    "Up to 45 seconds",
                    "Motion graphics style",
                    "One language voiceover",
                    "Licensed music",
                    "2 revision rounds"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 45,000",
                features: [
                    "Up to 90 seconds",
                    "Custom characters",
                    "Script & storyboard",
                    "Voiceover + subtitles",
                    "3 social media formats",
                    "3 revision rounds"
                ]
            },
            enterprise: {
                name: "Premium",
                price: "AFN 80,000+",
                features: [
                    "Up to 2 minutes",
                    "Detailed character animation",
                    "3 language versions",
                    "Short cut-downs for ads",
                    "Source project files",
                    "Unlimited revisions within scope"
                ]
            }
        }
    },
    {
        id: "virtual-tour-360",
        slug: "virtual-tour-360",
        category: "design",
        title: {
            en: "360-Degree Virtual Tours",
            da: "تور مجازی ۳۶۰ درجه",
            pa: "۳۶۰ درجه مجازي سفرونه"
        },
        shortDesc: {
            en: "Interactive 360° tours of hotels, venues, schools and properties",
            da: "تورهای تعاملی ۳۶۰ درجه از هوتل، تالار، مکتب و ملکیت",
            pa: "د هوټلونو، تالارونو، ښوونځیو او ملکیتونو تعاملي ۳۶۰ درجه سفرونه"
        },
        description: {
            en: "We build interactive 360° virtual tours that let people walk through a hotel, wedding hall, school, showroom or property from their phone — useful for diaspora customers who can't visit in person. We assemble the tour with clickable hotspots, floor plans and info points and embed it on your website; 360° photography is done by a partner photographer or from photos you supply.",
            da: "ما تورهای مجازی تعاملی ۳۶۰ درجه می‌سازیم که مردم بتوانند از طریق موبایل خود داخل هوتل، تالار عروسی، مکتب، نمایشگاه یا ملکیت را ببینند — مفید برای مشتریان خارج از کشور که نمی‌توانند حضوری بیایند. ما تور را با نقاط قابل کلیک، نقشه طبقات و نقاط معلوماتی آماده می‌کنیم و در ویب‌سایت شما جا می‌دهیم؛ عکاسی ۳۶۰ درجه توسط عکاس همکار یا از عکس‌هایی که شما می‌دهید انجام می‌شود.",
            pa: "موږ تعاملي ۳۶۰ درجه مجازي سفرونه جوړوو چې خلک وکولی شي د خپل موبایل له لارې د هوټل، د واده تالار، ښوونځي، نندارتون یا ملکیت دننه وګوري — د بهر مېشتو پیرودونکو لپاره ګټور چې په حضوري ډول نشي راتلی. موږ سفر د کلیک وړ ټکو، د پوړونو نقشو او معلوماتي ټکو سره جوړوو او ستاسو په ویب پاڼه کې یې ځایوو؛ ۳۶۰ درجه عکاسي د همکار عکاس له خوا یا د هغو انځورونو څخه کیږي چې تاسو یې راکوئ."
        },
        features: [
            "Interactive 360° Tours",
            "Clickable Hotspots & Info Points",
            "Floor Plan Navigation",
            "Website Embedding",
            "Mobile & VR-Headset Viewing",
            "Dari, Pashto & English Labels",
            "Photography via Partners",
            "Shareable Tour Link"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 15,000",
                features: [
                    "Up to 8 scenes",
                    "Navigation between rooms",
                    "Logo branding",
                    "Website embed code",
                    "Uses your 360° photos"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 35,000",
                features: [
                    "Up to 25 scenes",
                    "Info hotspots & images",
                    "Floor plan map",
                    "Bilingual labels",
                    "Partner 360° photography arranged",
                    "12 Months Hosting"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 65,000+",
                features: [
                    "Multiple buildings or locations",
                    "Video & audio hotspots",
                    "Booking or inquiry buttons",
                    "3 languages",
                    "Visitor analytics",
                    "12 Months Hosting & Updates"
                ]
            }
        }
    },
    {
        id: "podcast-production",
        slug: "podcast-production",
        category: "design",
        title: {
            en: "Podcast Production",
            da: "تولید پادکست",
            pa: "د پادکاسټ جوړول"
        },
        shortDesc: {
            en: "Podcast planning, editing and publishing in Dari, Pashto and English",
            da: "برنامه‌ریزی، ادیت و نشر پادکست به دری، پشتو و انگلیسی",
            pa: "د پادکاسټ پلان، اډیټ او خپرول په دري، پښتو او انګلیسي"
        },
        description: {
            en: "We help organizations and individuals start and run a podcast: format planning, cover art, intro music, audio editing and noise cleanup, show notes, and publishing to Spotify, Apple Podcasts and YouTube. You record with a recommended setup or a partner studio; we turn raw recordings into clean, consistent episodes.",
            da: "ما به اداره‌ها و افراد کمک می‌کنیم پادکست شروع و اداره کنند: برنامه‌ریزی قالب، دیزاین کاور، موسیقی شروع، ادیت صدا و پاک‌کردن نویز، یادداشت‌های هر قسمت، و نشر در Spotify، Apple Podcasts و YouTube. شما با تجهیزات پیشنهادی یا در یک استودیوی همکار ثبت می‌کنید؛ ما صداهای خام را به قسمت‌های پاک و یکدست تبدیل می‌کنیم.",
            pa: "موږ ادارو او اشخاصو سره د پادکاسټ په پیل او پرمخ وړلو کې مرسته کوو: د بڼې پلان، د پوښ ډیزاین، د پیل موسیقي، د غږ اډیټ او د شور پاکول، د هرې برخې یادښتونه، او په Spotify، Apple Podcasts او YouTube کې خپرول. تاسو د وړاندیز شویو وسایلو سره یا په یوه همکار سټوډیو کې ثبت کوئ؛ موږ خام غږونه په پاکو او یو شان برخو بدلوو."
        },
        features: [
            "Show Format Planning",
            "Cover Art & Branding",
            "Intro & Outro Music",
            "Audio Editing & Noise Cleanup",
            "Video Podcast Editing",
            "Show Notes & Transcripts",
            "Publishing to All Platforms",
            "Recording Setup Advice"
        ],
        pricing: {
            basic: {
                name: "Per Episode",
                price: "AFN 3,500",
                features: [
                    "Editing of one audio episode",
                    "Noise cleanup & leveling",
                    "Intro/outro added",
                    "Up to 45 minutes"
                ]
            },
            professional: {
                name: "Monthly",
                price: "AFN 15,000/mo",
                features: [
                    "4 edited episodes",
                    "Show notes",
                    "Publishing to platforms",
                    "Audiogram clips for social",
                    "Cover art per episode"
                ]
            },
            enterprise: {
                name: "Full Launch",
                price: "AFN 30,000+",
                features: [
                    "Show concept & branding",
                    "Original intro music",
                    "Hosting & feed setup",
                    "First 4 episodes produced",
                    "Video podcast editing",
                    "Launch promotion plan"
                ]
            }
        }
    },
    {
        id: "live-streaming",
        slug: "live-streaming",
        category: "design",
        title: {
            en: "Event Live Streaming",
            da: "پخش زنده رویدادها",
            pa: "د غونډو ژوندۍ خپرونه"
        },
        shortDesc: {
            en: "Live streaming setup for conferences, launches and ceremonies",
            da: "راه‌اندازی پخش زنده برای کنفرانس، معرفی محصول و مراسم",
            pa: "د کنفرانسونو، محصول معرفي او مراسمو لپاره د ژوندۍ خپرونې جوړښت"
        },
        description: {
            en: "We plan and run live streams of conferences, product launches, graduations and ceremonies to YouTube, Facebook or Zoom — so diaspora family, partners and remote audiences can watch. We handle the streaming software, branded overlays, Dari/Pashto/English titles and the recording afterwards; cameras and on-site crew come through partners, and we plan around the venue's internet with backup options.",
            da: "ما پخش زنده کنفرانس‌ها، معرفی محصولات، فراغت‌ها و مراسم را در YouTube، Facebook یا Zoom برنامه‌ریزی و اجرا می‌کنیم — تا خانواده‌های خارج از کشور، همکاران و مخاطبان دور بتوانند تماشا کنند. نرم‌افزار پخش، گرافیک‌های برند، عنوان‌های دری/پشتو/انگلیسی و ثبت نهایی کار ماست؛ کمره‌ها و تیم محل از طریق همکاران تأمین می‌شوند و ما با در نظر گرفتن انترنت محل، گزینه‌های پشتیبان را آماده می‌کنیم.",
            pa: "موږ د کنفرانسونو، محصول معرفي، فراغتونو او مراسمو ژوندۍ خپرونه په YouTube، Facebook یا Zoom کې پلانوو او پرمخ وړو — څو بهر مېشتې کورنۍ، همکاران او لرې لیدونکي یې وګوري. د خپرونې سافټویر، برانډ شوي ګرافیکونه، دري/پښتو/انګلیسي سرلیکونه او وروستی ثبت زموږ کار دی؛ کمرې او د ځای ټیم د همکارانو له لارې برابریږي، او موږ د ځای انټرنټ ته په پام سره بدیل انتخابونه چمتو کوو."
        },
        features: [
            "YouTube, Facebook & Zoom Streams",
            "Multi-Platform Simulcast",
            "Branded Overlays & Titles",
            "Trilingual Lower Thirds",
            "Internet Backup Planning",
            "Cameras & Crew via Partners",
            "Full Event Recording",
            "Highlight Clips After Event"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 15,000",
                features: [
                    "Single-camera stream",
                    "One platform",
                    "Logo overlay",
                    "Up to 3 hours",
                    "Recording file delivered"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 35,000",
                features: [
                    "Multi-camera via partner crew",
                    "Simulcast to 2-3 platforms",
                    "Branded titles & lower thirds",
                    "Remote speaker integration",
                    "Up to 6 hours",
                    "Edited recording"
                ]
            },
            enterprise: {
                name: "Multi-Day Event",
                price: "AFN 70,000+",
                features: [
                    "Multi-day coverage",
                    "Event landing page with stream",
                    "Bonded or backup internet planning",
                    "Live translation channel support",
                    "Highlight video",
                    "Full archive delivery"
                ]
            }
        }
    },
    {
        id: "office-branding",
        slug: "office-branding",
        category: "design",
        title: {
            en: "Office Branding & Signage Design",
            da: "دیزاین برندینگ و تابلوهای دفتر",
            pa: "د دفتر برانډینګ او تختو ډیزاین"
        },
        shortDesc: {
            en: "Signage, wall graphics and wayfinding designed for your office",
            da: "دیزاین تابلو، گرافیک دیوار و راهنمای مسیر برای دفتر شما",
            pa: "ستاسو د دفتر لپاره د تختو، دیوال ګرافیک او لارښوونې ډیزاین"
        },
        description: {
            en: "We design the branded look of your office, shop or clinic — the main sign, reception wall, room and door signs, wayfinding, glass frosting patterns and motivational wall graphics — all in your brand style and in Dari, Pashto and English. You receive production-ready files and a placement guide; fabrication and installation are done by your contractor or a partner sign maker.",
            da: "ما ظاهر برندشده دفتر، دکان یا کلینیک شما را دیزاین می‌کنیم — تابلوی اصلی، دیوار پذیرش، تابلوهای اتاق و دروازه، راهنمای مسیر، طرح‌های شیشه مات و گرافیک‌های دیواری — همه به سبک برند شما و به دری، پشتو و انگلیسی. شما فایل‌های آماده تولید و راهنمای نصب دریافت می‌کنید؛ ساخت و نصب توسط قراردادی شما یا تابلوساز همکار انجام می‌شود.",
            pa: "موږ ستاسو د دفتر، دوکان یا کلینیک برانډ شوې بڼه ډیزاینوو — اصلي تخته، د پذیرش دیوال، د خونو او دروازو تختې، لارښوونې نښې، د مات ښیښې طرحې او د دیوال ګرافیکونه — ټول ستاسو د برانډ په سبک او په دري، پښتو او انګلیسي. تاسو د تولید لپاره چمتو فایلونه او د نصب لارښود ترلاسه کوئ؛ جوړول او نصب ستاسو د قراردادي یا همکار تخته جوړونکي له خوا کیږي."
        },
        features: [
            "Exterior & Main Signage",
            "Reception Wall Design",
            "Room & Door Signs",
            "Wayfinding System",
            "Glass Frosting Patterns",
            "Wall Graphics & Murals",
            "Trilingual Sign Text",
            "Production Files & Placement Guide"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 10,000",
                features: [
                    "Main sign design",
                    "Reception wall logo layout",
                    "2 revision rounds",
                    "Production-ready files"
                ]
            },
            professional: {
                name: "Office",
                price: "AFN 25,000",
                features: [
                    "Exterior & reception signage",
                    "Up to 15 room/door signs",
                    "Glass frosting design",
                    "2 wall graphics",
                    "Placement guide"
                ]
            },
            enterprise: {
                name: "Full Fit-Out",
                price: "AFN 50,000+",
                features: [
                    "Multi-floor or multi-branch",
                    "Complete wayfinding system",
                    "Large murals",
                    "3 languages",
                    "Coordination with sign maker",
                    "Signage guidelines document"
                ]
            }
        }
    },
    {
        id: "exhibition-booth-design",
        slug: "exhibition-booth-design",
        category: "design",
        title: {
            en: "Exhibition Booth Design",
            da: "دیزاین غرفه نمایشگاه",
            pa: "د نندارتون د غرفې ډیزاین"
        },
        shortDesc: {
            en: "Booth layouts and graphics for trade fairs and exhibitions",
            da: "طرح و گرافیک غرفه برای نمایشگاه‌های تجارتی",
            pa: "د سوداګریزو نندارتونونو لپاره د غرفې طرحه او ګرافیک"
        },
        description: {
            en: "Whether you're showing saffron and carpets at an international fair or exhibiting at a local expo, we design the booth: layout, 3D visualization, back wall, counters, roll-up banners and brochures in one consistent look. We deliver 3D previews and print-ready files to the organizer's specifications; construction and printing are handled by the event contractor or our partners.",
            da: "چه زعفران و قالین را در یک نمایشگاه بین‌المللی عرضه کنید یا در یک نمایشگاه داخلی شرکت کنید، ما غرفه شما را دیزاین می‌کنیم: چیدمان، تصویرسازی سه‌بعدی، دیوار پشت، میزها، رول‌آپ و بروشور با یک ظاهر یکدست. پیش‌نمایش سه‌بعدی و فایل‌های آماده چاپ مطابق مشخصات برگزارکننده تحویل داده می‌شوند؛ ساخت و چاپ توسط قراردادی نمایشگاه یا همکاران ما انجام می‌شود.",
            pa: "که تاسو په یو نړیوال نندارتون کې زعفران او غالۍ ښیئ یا په یو کورني نندارتون کې ګډون کوئ، موږ ستاسو غرفه ډیزاینوو: ترتیب، درې‌اړخیز انځور، شاتنی دیوال، مېزونه، رول‌اپ بنرونه او بروشرونه په یوه یو شان بڼه. درې‌اړخیزې مخکتنې او د چاپ لپاره چمتو فایلونه د تنظیموونکي د مشخصاتو سره سم سپارل کیږي؛ جوړول او چاپ د نندارتون قراردادي یا زموږ د همکارانو له خوا کیږي."
        },
        features: [
            "Booth Layout Planning",
            "3D Booth Visualization",
            "Back Wall & Panel Graphics",
            "Counters & Display Design",
            "Roll-Up Banners",
            "Brochures & Handouts",
            "Organizer Spec Compliance",
            "Print-Ready Files"
        ],
        pricing: {
            basic: {
                name: "Shell Scheme",
                price: "AFN 12,000",
                features: [
                    "Standard booth graphics",
                    "Back wall & fascia design",
                    "One roll-up banner",
                    "Print-ready files"
                ]
            },
            professional: {
                name: "Custom Booth",
                price: "AFN 35,000",
                features: [
                    "Custom booth layout",
                    "3D visualization (2 views)",
                    "All panel graphics",
                    "2 roll-up banners",
                    "Brochure design",
                    "3 revision rounds"
                ]
            },
            enterprise: {
                name: "Pavilion",
                price: "AFN 70,000+",
                features: [
                    "Large or multi-exhibitor pavilion",
                    "Detailed 3D walkthrough",
                    "Product display design",
                    "Digital screen content",
                    "Coordination with build contractor",
                    "Full print collateral set"
                ]
            }
        }
    },
    {
        id: "architectural-visualization",
        slug: "architectural-visualization",
        category: "design",
        title: {
            en: "Architectural 3D Visualization",
            da: "تصویرسازی سه‌بعدی معماری",
            pa: "معماري درې‌اړخیز انځورونه"
        },
        shortDesc: {
            en: "Photo-realistic 3D renders and walkthroughs of buildings and interiors",
            da: "رندرهای سه‌بعدی واقع‌گرایانه و ویدیوی گشت در ساختمان و داخل",
            pa: "د ودانیو او دننه برخو واقعي درې‌اړخیز انځورونه او ګرځنده ویډیوګانې"
        },
        description: {
            en: "We create photo-realistic exterior and interior renders, aerial-style views and animated walkthroughs from your architect's drawings or CAD files. Developers use them to sell apartments before construction finishes — including to diaspora buyers — and architects use them to present designs to clients.",
            da: "ما رندرهای واقع‌گرایانه بیرونی و داخلی، نماهای از بالا و ویدیوهای گشت انیمیشنی را از نقشه‌های معمار یا فایل‌های CAD شما می‌سازیم. شرکت‌های ساختمانی از آن‌ها برای فروش آپارتمان پیش از تکمیل ساخت — از جمله به خریداران خارج از کشور — استفاده می‌کنند و معماران برای معرفی طرح به مشتریان.",
            pa: "موږ ستاسو د معمار له نقشو یا CAD فایلونو څخه د بهر او دننه واقعي انځورونه، له پورته لیدونه او انیمیشني ګرځنده ویډیوګانې جوړوو. ساختماني شرکتونه یې د ودانۍ له بشپړېدو مخکې د اپارتمانونو پلورلو لپاره کاروي — په شمول د بهر مېشتو پېرودونکو — او معماران یې پیرودونکو ته د طرحې وړاندې کولو لپاره کاروي."
        },
        features: [
            "Exterior Renders",
            "Interior Renders",
            "Aerial-Style Views",
            "Animated Walkthroughs",
            "From CAD or Hand Drawings",
            "Material & Lighting Options",
            "Marketing-Ready Images",
            "Floor Plan Renders"
        ],
        pricing: {
            basic: {
                name: "Single View",
                price: "AFN 8,000",
                features: [
                    "One exterior or interior render",
                    "Full HD resolution",
                    "2 revision rounds",
                    "From your drawings"
                ]
            },
            professional: {
                name: "Project Set",
                price: "AFN 35,000",
                features: [
                    "Up to 6 renders",
                    "Exterior & interior views",
                    "3D floor plan",
                    "4K resolution",
                    "3 revision rounds"
                ]
            },
            enterprise: {
                name: "Walkthrough",
                price: "AFN 80,000+",
                features: [
                    "Animated walkthrough video",
                    "Up to 15 still renders",
                    "Day & night views",
                    "Marketing brochure images",
                    "Music & titles",
                    "Unlimited revisions within scope"
                ]
            }
        }
    },
    {
        id: "book-cover-design",
        slug: "book-cover-design",
        category: "design",
        title: {
            en: "Book Cover Design",
            da: "دیزاین جلد کتاب",
            pa: "د کتاب د پوښ ډیزاین"
        },
        shortDesc: {
            en: "Book covers for print and e-books in Dari, Pashto and English",
            da: "جلد کتاب برای چاپ و کتاب الکترونیکی به دری، پشتو و انگلیسی",
            pa: "د چاپي او برېښنايي کتابونو پوښونه په دري، پښتو او انګلیسي"
        },
        description: {
            en: "We design front covers, spines and back covers for novels, poetry collections, textbooks and research publications. Titles can use custom Dari or Pashto lettering, and we set up the full wrap to your printer's page count and paper specs, plus an e-book cover sized for Amazon Kindle and other online stores.",
            da: "ما روی جلد، عطف و پشت جلد را برای رمان، مجموعه شعر، کتاب درسی و نشریات تحقیقی دیزاین می‌کنیم. عنوان‌ها می‌توانند با حروف‌نگاری اختصاصی دری یا پشتو باشند و ما جلد کامل را مطابق تعداد صفحات و نوع کاغذ چاپخانه شما آماده می‌کنیم، همراه با جلد کتاب الکترونیکی مناسب Amazon Kindle و دیگر فروشگاه‌های آنلاین.",
            pa: "موږ د ناولونو، شعري ټولګو، درسي کتابونو او څېړنیزو خپرونو لپاره مخکینی پوښ، شا او وروستی پوښ ډیزاینوو. سرلیکونه کیدای شي په ځانګړي دري یا پښتو لیک وي، او موږ بشپړ پوښ ستاسو د چاپخونې د پاڼو شمېر او د کاغذ مشخصاتو سره سم برابروو، او همداراز د Amazon Kindle او نورو آنلاین پلورنځیو لپاره د برېښنايي کتاب پوښ."
        },
        features: [
            "Front Cover Design",
            "Spine & Back Cover",
            "Custom Title Lettering",
            "Illustration or Photo Covers",
            "Printer-Ready Full Wrap",
            "E-Book Cover (Kindle)",
            "Series Cover Styling",
            "Social Media Promo Images"
        ],
        pricing: {
            basic: {
                name: "E-Book",
                price: "AFN 4,000",
                features: [
                    "Front cover only",
                    "2 concepts",
                    "2 revision rounds",
                    "Kindle & web sizes"
                ]
            },
            professional: {
                name: "Print Book",
                price: "AFN 10,000",
                features: [
                    "Front, spine & back cover",
                    "3 concepts",
                    "Title lettering",
                    "Printer-ready full wrap",
                    "E-book version included"
                ]
            },
            enterprise: {
                name: "Premium",
                price: "AFN 22,000+",
                features: [
                    "Custom illustrated cover",
                    "Custom calligraphic title",
                    "Print & e-book files",
                    "3D mockups for promotion",
                    "Social media promo set",
                    "Unlimited revisions within scope"
                ]
            }
        }
    }
];

export default services;
