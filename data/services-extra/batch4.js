const services = [
    {
        id: "web-hosting",
        slug: "web-hosting",
        category: "cloud",
        title: {
            en: "Managed Web Hosting",
            da: "هاستینگ مدیریت‌شده وب",
            pa: "مدیریت شوې ویب هاستینګ"
        },
        shortDesc: {
            en: "Fast, secure hosting with backups, SSL and updates handled for you",
            da: "هاستینگ سریع و امن با بکاپ، SSL و آپدیت‌ها که ما مدیریت می‌کنیم",
            pa: "چټک او خوندي هاستینګ چې بیک اپ، SSL او اپډیټونه یې موږ سمبالوو"
        },
        description: {
            en: "We host your website on reliable servers and take care of the technical side: SSL certificates, daily backups, software updates and uptime checks. Servers are chosen for good speed to both Afghanistan and the diaspora, and you get one local contact who answers in Dari, Pashto or English when something goes wrong.",
            da: "ما وب‌سایت شما را روی سرورهای قابل اعتماد هاست می‌کنیم و بخش تخنیکی را به عهده می‌گیریم: تصدیق‌نامه SSL، بکاپ روزانه، آپدیت نرم‌افزار و نظارت بر فعال بودن سایت. سرورها طوری انتخاب می‌شوند که هم در افغانستان و هم برای افغان‌های خارج از کشور سرعت خوب داشته باشند، و شما یک شخص تماس محلی دارید که در صورت مشکل به دری، پشتو یا انگلیسی جواب می‌دهد.",
            pa: "موږ ستاسو ویب پاڼه په باوري سرورونو هاسټ کوو او تخنیکي برخه پر غاړه اخلو: د SSL سند، ورځنی بیک اپ، د سافټویر اپډیټونه او د ویب پاڼې د فعالیت څارنه. سرورونه داسې ټاکل کیږي چې په افغانستان او بهر میشتو افغانانو دواړو ته ښه سرعت ولري، او تاسو یو محلي اړیکه لرئ چې د ستونزې پر وخت په پښتو، دري یا انګلیسي ځواب درکوي."
        },
        features: [
            "Free SSL Certificate",
            "Daily Automated Backups",
            "Uptime Monitoring",
            "Software & Security Updates",
            "CDN for Faster Loading",
            "WordPress & Next.js Hosting",
            "Staging Environment",
            "Local Support in Dari & Pashto"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 1,500/mo",
                features: [
                    "1 Website",
                    "10 GB Storage",
                    "Free SSL",
                    "Weekly Backups",
                    "Email Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 3,500/mo",
                features: [
                    "Up to 5 Websites",
                    "40 GB Storage",
                    "Daily Backups",
                    "CDN Included",
                    "Staging Site",
                    "Priority Support"
                ]
            },
            enterprise: {
                name: "Dedicated",
                price: "AFN 10,000+/mo",
                features: [
                    "Dedicated Server Resources",
                    "Custom Server Configuration",
                    "Hourly Backups",
                    "Uptime Monitoring & Alerts",
                    "Security Hardening",
                    "Dedicated Technical Contact"
                ]
            }
        }
    },
    {
        id: "domain-email",
        slug: "domain-email",
        category: "cloud",
        title: {
            en: "Domain & Business Email Setup",
            da: "راه‌اندازی دومین و ایمیل تجارتی",
            pa: "د ډومین او سوداګریز بریښنالیک جوړول"
        },
        shortDesc: {
            en: "Your own domain and professional email addresses like name@yourbusiness.af",
            da: "دومین خودتان و ایمیل‌های حرفه‌ای مانند name@yourbusiness.af",
            pa: "خپل ډومین او مسلکي بریښنالیکونه لکه name@yourbusiness.af"
        },
        description: {
            en: "We register your domain (.af, .com or others) and set up business email so your team stops using personal Gmail addresses with customers. DNS records like SPF, DKIM and DMARC are configured correctly so your emails reach inboxes instead of spam folders, and everything is registered in your name.",
            da: "ما دومین شما (.af، .com یا دیگر) را ثبت می‌کنیم و ایمیل تجارتی راه‌اندازی می‌کنیم تا تیم شما دیگر با مشتریان از آدرس‌های شخصی Gmail استفاده نکند. ریکاردهای DNS مانند SPF، DKIM و DMARC درست تنظیم می‌شوند تا ایمیل‌های شما به صندوق ورودی برسند نه به پوشه اسپم، و همه چیز به نام خود شما ثبت می‌شود.",
            pa: "موږ ستاسو ډومین (.af، .com یا نور) ثبتوو او سوداګریز بریښنالیک جوړوو څو ستاسو ټیم له پیرودونکو سره د شخصي Gmail پتو کارول بند کړي. د DNS ریکارډونه لکه SPF، DKIM او DMARC په سمه توګه تنظیمیږي څو ستاسو بریښنالیکونه د سپیم پر ځای ان باکس ته ورسیږي، او هرڅه ستاسو په نوم ثبتیږي."
        },
        features: [
            "Domain Registration (.af, .com & more)",
            "Professional Email Addresses",
            "SPF, DKIM & DMARC Setup",
            "Registered in Your Name",
            "Email Migration from Old Accounts",
            "Mobile & Outlook Configuration",
            "Shared Mailboxes & Aliases",
            "Renewal Reminders"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 3,500",
                features: [
                    "1 Domain Registration (first year)",
                    "Up to 3 Email Accounts",
                    "DNS & Spam Protection Setup",
                    "Phone Setup Guide"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 8,000",
                features: [
                    "1 Domain Registration (first year)",
                    "Up to 15 Email Accounts",
                    "Email Migration",
                    "Shared Mailboxes & Aliases",
                    "Email Signatures",
                    "1 Month Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 15,000+",
                features: [
                    "Multiple Domains",
                    "Unlimited Email Accounts Setup",
                    "Full Mailbox Migration",
                    "Google Workspace or Microsoft 365",
                    "Staff Training Session",
                    "3 Months Support"
                ]
            }
        }
    },
    {
        id: "cloud-migration",
        slug: "cloud-migration",
        category: "cloud",
        title: {
            en: "Cloud Migration",
            da: "انتقال به کلاود",
            pa: "کلاوډ ته لیږد"
        },
        shortDesc: {
            en: "Move your systems from office PCs and old servers to the cloud safely",
            da: "انتقال امن سیستم‌های شما از کمپیوترهای دفتر و سرورهای قدیمی به کلاود",
            pa: "ستاسو سیسټمونه د دفتر له کمپیوټرونو او زړو سرورونو څخه کلاوډ ته په خوندي ډول لیږدول"
        },
        description: {
            en: "We move your files, databases and applications from local machines or aging servers to cloud platforms such as AWS, Google Cloud, Azure or DigitalOcean. The migration is planned step by step with backups and a rollback plan, so your business keeps running while it happens — and data is no longer lost when an office computer fails or power cuts out.",
            da: "ما فایل‌ها، دیتابیس‌ها و اپلیکیشن‌های شما را از کمپیوترهای محلی یا سرورهای کهنه به پلتفورم‌های کلاود مانند AWS، Google Cloud، Azure یا DigitalOcean منتقل می‌کنیم. انتقال قدم به قدم با بکاپ و پلان برگشت انجام می‌شود تا کار شما در این مدت متوقف نشود — و دیگر با خراب شدن کمپیوتر دفتر یا قطع برق، معلومات از بین نرود.",
            pa: "موږ ستاسو فایلونه، ډیټابیسونه او اپلیکیشنونه له محلي کمپیوټرونو یا زړو سرورونو څخه کلاوډ پلیټفارمونو لکه AWS، Google Cloud، Azure یا DigitalOcean ته لیږدوو. لیږد ګام په ګام د بیک اپ او بیرته ګرځیدو د پلان سره ترسره کیږي څو ستاسو کار په دې موده کې ونه دریږي — او نور د دفتر د کمپیوټر د خرابیدو یا برېښنا د تګ له امله معلومات له منځه نه ځي."
        },
        features: [
            "Current System Assessment",
            "Step-by-Step Migration Plan",
            "Database & File Migration",
            "Zero-Data-Loss Approach",
            "AWS, Google Cloud, Azure & DigitalOcean",
            "Rollback Plan",
            "Cost Optimization",
            "Post-Migration Support"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 15,000",
                features: [
                    "Assessment & Migration Plan",
                    "1 Website or Small App",
                    "File & Database Transfer",
                    "Basic Cloud Setup",
                    "2 Weeks Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 40,000",
                features: [
                    "Up to 3 Applications",
                    "Database Migration",
                    "Automated Backups",
                    "Security Configuration",
                    "Staff Handover Session",
                    "1 Month Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multi-System Migration",
                    "Phased Migration Schedule",
                    "High-Availability Setup",
                    "Cost Optimization Review",
                    "Documentation & Runbooks",
                    "3 Months Support"
                ]
            }
        }
    },
    {
        id: "devops",
        slug: "devops",
        category: "cloud",
        title: {
            en: "DevOps & CI/CD",
            da: "DevOps و CI/CD",
            pa: "DevOps او CI/CD"
        },
        shortDesc: {
            en: "Automated testing and deployment so releases are fast and predictable",
            da: "تست و نشر خودکار تا نسخه‌های جدید سریع و بدون دردسر منتشر شوند",
            pa: "اتومات ازموینه او خپرونه څو نوې نسخې چټکې او بې ستونزې خپرې شي"
        },
        description: {
            en: "We set up pipelines that test and deploy your code automatically every time your team pushes changes, using tools like GitHub Actions, GitLab CI and Docker. This replaces manual uploads over FTP, reduces broken releases, and makes it easy to roll back if something goes wrong.",
            da: "ما پایپ‌لاین‌هایی راه‌اندازی می‌کنیم که هر بار تیم شما تغییری می‌فرستد، کود را به طور خودکار تست و نشر کنند، با استفاده از ابزارهایی مانند GitHub Actions، GitLab CI و Docker. این کار جای آپلود دستی از طریق FTP را می‌گیرد، نشرهای خراب را کم می‌کند و در صورت مشکل، برگشت به نسخه قبلی را آسان می‌سازد.",
            pa: "موږ داسې پایپ لاینونه جوړوو چې هر ځل چې ستاسو ټیم بدلون ولیږي، کوډ په اتومات ډول ازموي او خپروي، د GitHub Actions، GitLab CI او Docker په څیر وسیلو په کارولو سره. دا د FTP له لارې لاسي اپلوډ ځای نیسي، خراب خپرونې کموي، او که ستونزه پیدا شي پخوانۍ نسخې ته ستنیدل اسانه کوي."
        },
        features: [
            "CI/CD Pipelines",
            "Automated Testing",
            "Docker Containerization",
            "One-Click Rollbacks",
            "GitHub Actions & GitLab CI",
            "Staging & Production Environments",
            "Infrastructure as Code",
            "Secrets Management"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 14,000",
                features: [
                    "1 Project Pipeline",
                    "Automated Build & Deploy",
                    "Staging Environment",
                    "Setup Documentation"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 35,000",
                features: [
                    "Up to 3 Project Pipelines",
                    "Automated Testing Integration",
                    "Docker Setup",
                    "Rollback Process",
                    "Secrets Management",
                    "1 Month Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multiple Teams & Projects",
                    "Infrastructure as Code",
                    "Container Orchestration",
                    "Monitoring Integration",
                    "Team Training",
                    "Ongoing DevOps Support"
                ]
            }
        }
    },
    {
        id: "server-management",
        slug: "server-management",
        category: "cloud",
        title: {
            en: "Server Management",
            da: "مدیریت سرور",
            pa: "د سرور مدیریت"
        },
        shortDesc: {
            en: "Ongoing care for your servers: updates, security, backups and monitoring",
            da: "مراقبت دوامدار از سرورهای شما: آپدیت، امنیت، بکاپ و نظارت",
            pa: "ستاسو د سرورونو دوامداره پاملرنه: اپډیټ، امنیت، بیک اپ او څارنه"
        },
        description: {
            en: "We look after your Linux or Windows servers so your team doesn't have to: applying security patches, watching disk and memory usage, checking backups actually restore, and fixing problems before they cause downtime. You receive a short monthly report of what was done and what needs attention.",
            da: "ما از سرورهای Linux یا Windows شما مراقبت می‌کنیم تا تیم شما مجبور نباشد: نصب پچ‌های امنیتی، نظارت بر حافظه و دیسک، اطمینان از اینکه بکاپ‌ها واقعاً بازیابی می‌شوند، و حل مشکلات پیش از اینکه سبب توقف شوند. شما هر ماه یک گزارش کوتاه از کارهای انجام‌شده و مواردی که توجه لازم دارند دریافت می‌کنید.",
            pa: "موږ ستاسو د Linux یا Windows سرورونو پاملرنه کوو څو ستاسو ټیم ورته اړتیا ونلري: امنیتي پیچونه لګول، د ډیسک او حافظې څارنه، دا ډاډ ترلاسه کول چې بیک اپونه په رښتیا بیرته راګرځي، او د ستونزو حل مخکې له دې چې د کار د دریدو لامل شي. تاسو هره میاشت د ترسره شویو کارونو او پاملرنې ته اړ مسایلو لنډ راپور ترلاسه کوئ."
        },
        features: [
            "Security Patching",
            "Resource Monitoring",
            "Backup Verification",
            "Monthly Health Reports",
            "Linux & Windows Servers",
            "Firewall Configuration",
            "Performance Tuning",
            "Emergency Troubleshooting"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 5,000/mo",
                features: [
                    "1 Server",
                    "Monthly Security Updates",
                    "Backup Checks",
                    "Monthly Report"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 12,000/mo",
                features: [
                    "Up to 3 Servers",
                    "Weekly Security Updates",
                    "24/7 Monitoring & Alerts",
                    "Firewall Management",
                    "Performance Tuning",
                    "Priority Response"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 25,000+/mo",
                features: [
                    "Unlimited Servers",
                    "Proactive Maintenance",
                    "Disaster Recovery Drills",
                    "Security Hardening",
                    "Dedicated Engineer",
                    "Fastest Response Time"
                ]
            }
        }
    },
    {
        id: "google-workspace-setup",
        slug: "google-workspace-setup",
        category: "cloud",
        title: {
            en: "Google Workspace & Microsoft 365 Setup",
            da: "راه‌اندازی Google Workspace و Microsoft 365",
            pa: "د Google Workspace او Microsoft 365 جوړول"
        },
        shortDesc: {
            en: "Email, shared drives and calendars set up properly for your whole team",
            da: "ایمیل، درایوهای مشترک و تقویم‌ها برای تمام تیم شما به درستی تنظیم می‌شوند",
            pa: "بریښنالیک، ګډ ډرایوونه او کلیزې ستاسو ټول ټیم ته په سمه توګه جوړیږي"
        },
        description: {
            en: "We set up Google Workspace or Microsoft 365 for your organization, including email, shared drives, calendars, user accounts and permissions. Existing email and files are migrated, two-step verification is enabled to protect accounts, and your staff get a short practical training in Dari or Pashto.",
            da: "ما Google Workspace یا Microsoft 365 را برای سازمان شما راه‌اندازی می‌کنیم، شامل ایمیل، درایوهای مشترک، تقویم‌ها، حساب‌های کاربری و صلاحیت‌ها. ایمیل‌ها و فایل‌های موجود منتقل می‌شوند، تایید دومرحله‌ای برای محافظت از حساب‌ها فعال می‌شود، و کارمندان شما یک آموزش کوتاه و عملی به دری یا پشتو می‌بینند.",
            pa: "موږ ستاسو سازمان ته Google Workspace یا Microsoft 365 جوړوو، چې بریښنالیک، ګډ ډرایوونه، کلیزې، د کارونکو حسابونه او اجازې پکې شاملې دي. موجوده بریښنالیکونه او فایلونه لیږدول کیږي، د حسابونو د ساتنې لپاره دوه ګامیز تایید فعالیږي، او ستاسو کارکوونکي په پښتو یا دري لنډه عملي روزنه ترلاسه کوي."
        },
        features: [
            "Account & User Setup",
            "Email & File Migration",
            "Shared Drives & Permissions",
            "Two-Step Verification",
            "Calendar & Meeting Setup",
            "Device Configuration",
            "Admin Security Policies",
            "Staff Training in Dari & Pashto"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 6,000",
                features: [
                    "Up to 5 Users",
                    "Domain Verification",
                    "Email Setup",
                    "Two-Step Verification",
                    "Quick-Start Guide"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 15,000",
                features: [
                    "Up to 25 Users",
                    "Email & File Migration",
                    "Shared Drives & Groups",
                    "Security Policies",
                    "Staff Training Session",
                    "1 Month Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 30,000+",
                features: [
                    "Unlimited Users",
                    "Full Data Migration",
                    "Device Management",
                    "Custom Access Policies",
                    "Multiple Training Sessions",
                    "3 Months Support"
                ]
            }
        }
    },
    {
        id: "backup-recovery",
        slug: "backup-recovery",
        category: "cloud",
        title: {
            en: "Backup & Disaster Recovery",
            da: "بکاپ و بازیابی پس از حادثه",
            pa: "بیک اپ او له پیښې وروسته بیا رغونه"
        },
        shortDesc: {
            en: "Automatic backups and a tested plan to restore your data when things fail",
            da: "بکاپ خودکار و یک پلان آزمایش‌شده برای بازیابی معلومات هنگام بروز مشکل",
            pa: "اتومات بیک اپ او ازمول شوی پلان څو د ستونزې پر وخت معلومات بیرته راوګرځي"
        },
        description: {
            en: "Hardware failures, power surges, theft and ransomware can wipe out years of records in a moment. We set up automatic, encrypted backups of your files, databases and websites to a separate off-site location, and we regularly test that they can actually be restored. You also get a written recovery plan that says exactly what to do and how long it takes.",
            da: "خرابی سخت‌افزار، نوسان برق، دزدی و باج‌افزار می‌توانند سال‌ها معلومات را در یک لحظه از بین ببرند. ما بکاپ‌های خودکار و رمزگذاری‌شده از فایل‌ها، دیتابیس‌ها و وب‌سایت‌های شما در یک مکان جداگانه بیرون از دفتر تنظیم می‌کنیم و به طور منظم آزمایش می‌کنیم که واقعاً قابل بازیابی باشند. همچنین یک پلان بازیابی نوشته‌شده دریافت می‌کنید که دقیقاً می‌گوید چه باید کرد و چقدر وقت می‌گیرد.",
            pa: "د هارډویر خرابي، د برېښنا ټکانونه، غلا او باج غوښتونکي سافټویر کولی شي د کلونو ریکارډونه په یوه شیبه کې له منځه یوسي. موږ ستاسو د فایلونو، ډیټابیسونو او ویب پاڼو اتومات او کوډ شوي بیک اپونه له دفتر بهر په جلا ځای کې جوړوو، او په منظم ډول ازمویو چې په رښتیا بیرته راګرځیدای شي. تاسو یو لیکلی د بیا رغونې پلان هم ترلاسه کوئ چې په دقیق ډول وایي څه باید وشي او څومره وخت نیسي."
        },
        features: [
            "Automated Daily Backups",
            "Encrypted Off-Site Storage",
            "Regular Restore Testing",
            "Written Recovery Plan",
            "File, Database & Website Backups",
            "Version History",
            "Ransomware Protection",
            "Fast Restore Support"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 2,500/mo",
                features: [
                    "Up to 100 GB",
                    "Daily Automated Backups",
                    "30-Day Version History",
                    "Quarterly Restore Test"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 6,000/mo",
                features: [
                    "Up to 500 GB",
                    "Files, Databases & Websites",
                    "90-Day Version History",
                    "Monthly Restore Test",
                    "Written Recovery Plan"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 15,000+/mo",
                features: [
                    "Custom Storage Volume",
                    "Multiple Backup Locations",
                    "Hourly Backups",
                    "Full Disaster Recovery Drills",
                    "Defined Recovery Times",
                    "Priority Restore Support"
                ]
            }
        }
    },
    {
        id: "performance-monitoring",
        slug: "performance-monitoring",
        category: "cloud",
        title: {
            en: "Uptime & Performance Monitoring",
            da: "نظارت بر فعالیت و کارکرد سایت",
            pa: "د فعالیت او کړنو څارنه"
        },
        shortDesc: {
            en: "Know immediately when your website or app goes down or slows down",
            da: "فوراً بفهمید که وب‌سایت یا اپلیکیشن شما از کار افتاده یا کند شده است",
            pa: "سمدستي خبر شئ کله چې ستاسو ویب پاڼه یا اپ ودریږي یا ورو شي"
        },
        description: {
            en: "We monitor your websites, APIs and servers around the clock and alert you by SMS, email or Telegram the moment something stops responding or becomes slow. Monthly reports show uptime, page speed and error trends, so you can fix the real causes instead of hearing about problems from customers.",
            da: "ما وب‌سایت‌ها، API‌ها و سرورهای شما را شبانه‌روز نظارت می‌کنیم و به محض اینکه چیزی جواب ندهد یا کند شود، از طریق SMS، ایمیل یا تلگرام به شما خبر می‌دهیم. گزارش‌های ماهانه فعال بودن، سرعت صفحات و روند خطاها را نشان می‌دهند تا بتوانید علت‌های اصلی را حل کنید، نه اینکه از مشتریان درباره مشکلات بشنوید.",
            pa: "موږ ستاسو ویب پاڼې، API ګانې او سرورونه شپه او ورځ څارو او هماغه شیبه چې کوم شی ځواب ورنه کړي یا ورو شي، تاسو ته د SMS، بریښنالیک یا ټیلیګرام له لارې خبر درکوو. میاشتني راپورونه د فعالیت وخت، د پاڼو سرعت او د تیروتنو بهیر ښیي، څو تاسو اصلي لاملونه حل کړئ نه دا چې له پیرودونکو د ستونزو په اړه واورئ."
        },
        features: [
            "24/7 Uptime Checks",
            "Instant SMS, Email & Telegram Alerts",
            "Page Speed Tracking",
            "Monthly Performance Reports",
            "API & Server Monitoring",
            "SSL & Domain Expiry Alerts",
            "Error Tracking",
            "Public Status Page"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 1,500/mo",
                features: [
                    "Up to 3 Websites",
                    "5-Minute Checks",
                    "Email & Telegram Alerts",
                    "SSL Expiry Alerts"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 4,000/mo",
                features: [
                    "Up to 10 Websites or APIs",
                    "1-Minute Checks",
                    "SMS Alerts",
                    "Page Speed Tracking",
                    "Monthly Reports",
                    "Public Status Page"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 10,000+/mo",
                features: [
                    "Unlimited Endpoints",
                    "Server Resource Monitoring",
                    "Error Tracking Integration",
                    "Custom Dashboards",
                    "Incident Response Support",
                    "Weekly Reports"
                ]
            }
        }
    },
    {
        id: "it-support",
        slug: "it-support",
        category: "cloud",
        title: {
            en: "IT Support & Helpdesk",
            da: "پشتیبانی IT و میز کمک",
            pa: "د IT ملاتړ او مرستندویه ډیسک"
        },
        shortDesc: {
            en: "Reliable help for your staff's computers, printers, email and software",
            da: "کمک قابل اعتماد برای کمپیوترها، پرینترها، ایمیل و نرم‌افزارهای کارمندان شما",
            pa: "ستاسو د کارکوونکو د کمپیوټرونو، پرنټرونو، بریښنالیک او سافټویر لپاره باوري مرسته"
        },
        description: {
            en: "We act as your IT department: your staff can reach us by phone, WhatsApp or email when a computer won't start, email stops syncing or a printer goes offline. Most issues are fixed remotely, and for offices in Kabul we can come on site. We also keep a simple record of your devices, licenses and accounts so nothing is lost when staff change.",
            da: "ما به حیث بخش IT شما کار می‌کنیم: کارمندان شما می‌توانند وقتی کمپیوتر روشن نمی‌شود، ایمیل همگام نمی‌شود یا پرینتر قطع می‌شود، از طریق تلفون، واتساپ یا ایمیل با ما تماس بگیرند. بیشتر مشکلات از راه دور حل می‌شوند و برای دفترهای داخل کابل می‌توانیم حضوری بیاییم. ما همچنین یک ریکارد ساده از دستگاه‌ها، لایسنس‌ها و حساب‌های شما نگه می‌داریم تا با تغییر کارمندان چیزی گم نشود.",
            pa: "موږ ستاسو د IT څانګې په توګه کار کوو: ستاسو کارکوونکي کولی شي کله چې کمپیوټر روښانه نشي، بریښنالیک همغږی نشي یا پرنټر قطع شي، موږ سره د تلیفون، واټساپ یا بریښنالیک له لارې اړیکه ونیسي. ډیری ستونزې له لرې حل کیږي، او په کابل کې دفترونو ته حضوري راتلی شو. موږ ستاسو د وسیلو، جوازونو او حسابونو ساده ریکارډ هم ساتو څو د کارکوونکو د بدلون پر وخت څه ورک نشي."
        },
        features: [
            "Remote Support",
            "On-Site Visits in Kabul",
            "Phone, WhatsApp & Email Helpdesk",
            "Device & License Inventory",
            "Computer & Printer Setup",
            "Email & Software Troubleshooting",
            "Staff Onboarding & Offboarding",
            "Antivirus Management"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 5,000/mo",
                features: [
                    "Up to 5 Users",
                    "Remote Support (Business Hours)",
                    "Device Inventory",
                    "Antivirus Management"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 12,000/mo",
                features: [
                    "Up to 20 Users",
                    "Remote Support",
                    "2 On-Site Visits per Month",
                    "Staff Onboarding & Offboarding",
                    "Monthly IT Report",
                    "Priority Response"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 25,000+/mo",
                features: [
                    "Unlimited Users",
                    "Extended Support Hours",
                    "Weekly On-Site Visits",
                    "IT Policy & Documentation",
                    "Dedicated Support Contact",
                    "Quarterly IT Review"
                ]
            }
        }
    },
    {
        id: "network-setup",
        slug: "network-setup",
        category: "cloud",
        title: {
            en: "Office Network Setup",
            da: "راه‌اندازی شبکه دفتر",
            pa: "د دفتر د شبکې جوړول"
        },
        shortDesc: {
            en: "Stable Wi-Fi, cabling and internet sharing for offices of any size",
            da: "وای‌فای پایدار، کیبل‌کشی و اشتراک انترنت برای دفترهای هر اندازه",
            pa: "ثابت وای فای، کیبل کښي او د انټرنټ شریکول د هر کچې دفترونو لپاره"
        },
        description: {
            en: "We plan and install office networks: structured cabling, routers, switches and Wi-Fi access points that cover every room. Where internet is unreliable, we can combine two providers with automatic failover and a UPS so connections survive outages. Networks are secured with separate guest Wi-Fi and documented so the next technician knows what's there.",
            da: "ما شبکه‌های دفتری را پلان‌گذاری و نصب می‌کنیم: کیبل‌کشی منظم، روتر، سویچ و نقاط دسترسی وای‌فای که هر اتاق را پوشش دهند. جایی که انترنت قابل اعتماد نیست، می‌توانیم دو شرکت انترنت را با انتقال خودکار و یک UPS ترکیب کنیم تا اتصال هنگام قطعی ادامه یابد. شبکه‌ها با وای‌فای جداگانه برای مهمانان امن شده و مستندسازی می‌شوند تا تخنیکر بعدی بداند چه چیزی موجود است.",
            pa: "موږ د دفتر شبکې پلان او نصبوو: منظم کیبل کښي، روټرونه، سویچونه او د وای فای د لاسرسي ټکي چې هره کوټه پوښي. چیرې چې انټرنټ باوري نه وي، کولی شو دوه انټرنټ چمتو کوونکي د اتومات بدلون او UPS سره یوځای کړو څو اړیکه د قطع پر وخت دوام وکړي. شبکې د میلمنو لپاره د جلا وای فای سره خوندي کیږي او مستند کیږي څو راتلونکی تخنیکر پوه شي چې څه شته."
        },
        features: [
            "Full-Coverage Wi-Fi",
            "Structured Cabling",
            "Dual Internet Failover",
            "Separate Guest Network",
            "Router & Switch Configuration",
            "UPS & Power Backup Planning",
            "Firewall & Content Filtering",
            "Network Documentation"
        ],
        pricing: {
            basic: {
                name: "Small Office",
                price: "AFN 10,000",
                features: [
                    "Up to 10 Devices",
                    "Router & Wi-Fi Setup",
                    "Guest Network",
                    "Basic Security Configuration",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 30,000",
                features: [
                    "Up to 40 Devices",
                    "Structured Cabling",
                    "Multiple Access Points",
                    "Dual Internet Failover",
                    "Firewall Setup",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 60,000+",
                features: [
                    "Multi-Floor or Multi-Site",
                    "Managed Switches & VLANs",
                    "Site-to-Site VPN",
                    "Content Filtering",
                    "Full Network Documentation",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "website-security",
        slug: "website-security",
        category: "security",
        title: {
            en: "Website Security & Hardening",
            da: "امنیت و مستحکم‌سازی وب‌سایت",
            pa: "د ویب پاڼې امنیت او پیاوړتیا"
        },
        shortDesc: {
            en: "Protect your website from hackers, spam and data theft",
            da: "وب‌سایت خود را از هکرها، اسپم و دزدی معلومات محافظت کنید",
            pa: "خپله ویب پاڼه له هیکرانو، سپیم او د معلوماتو له غلا څخه وساتئ"
        },
        description: {
            en: "We lock down your website so it's much harder to break into: firewall rules, secure login with two-factor authentication, updated plugins and themes, correct file permissions and security headers. We also add protection against spam and brute-force attacks, and set up alerts if files change unexpectedly.",
            da: "ما وب‌سایت شما را طوری محکم می‌کنیم که نفوذ به آن بسیار سخت‌تر شود: قوانین فایروال، ورود امن با تایید دومرحله‌ای، آپدیت پلاگین‌ها و تیم‌ها، صلاحیت‌های درست فایل‌ها و هدرهای امنیتی. همچنین محافظت در برابر اسپم و حملات حدس رمز اضافه می‌کنیم و اگر فایل‌ها به طور غیرمنتظره تغییر کنند، هشدار تنظیم می‌کنیم.",
            pa: "موږ ستاسو ویب پاڼه داسې پیاوړې کوو چې ننوتل پکې ډیر ستونزمن شي: د فایروال قواعد، د دوه ګامیز تایید سره خوندي ننوتل، تازه شوي پلګینونه او تیمونه، د فایلونو سمې اجازې او امنیتي هیډرونه. موږ د سپیم او د پټنوم اټکل کولو بریدونو پر وړاندې ساتنه هم زیاتوو، او که فایلونه ناڅاپه بدل شي خبرتیاوې تنظیموو."
        },
        features: [
            "Web Application Firewall",
            "Two-Factor Login",
            "Plugin & Core Updates",
            "Brute-Force & Spam Protection",
            "Security Headers & HTTPS",
            "File Change Monitoring",
            "Secure Backups",
            "Security Report"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 7,000",
                features: [
                    "1 Website Hardening",
                    "HTTPS & Security Headers",
                    "Two-Factor Login",
                    "Plugin Updates",
                    "Security Report"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 18,000",
                features: [
                    "Full Hardening",
                    "Web Application Firewall",
                    "Spam & Brute-Force Protection",
                    "File Change Monitoring",
                    "Secure Backup Setup",
                    "3 Months Monitoring"
                ]
            },
            enterprise: {
                name: "Managed Security",
                price: "AFN 8,000/mo",
                features: [
                    "Multiple Websites",
                    "Continuous Monitoring",
                    "Monthly Updates & Patches",
                    "Incident Response",
                    "Monthly Security Reports",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "security-audit",
        slug: "security-audit",
        category: "security",
        title: {
            en: "Security Audit & Penetration Testing",
            da: "بررسی امنیتی و تست نفوذ",
            pa: "امنیتي پلټنه او د ننوتلو ازموینه"
        },
        shortDesc: {
            en: "Find the weaknesses in your systems before attackers do",
            da: "نقاط ضعف سیستم‌های خود را پیش از حمله‌کنندگان پیدا کنید",
            pa: "د خپلو سیسټمونو کمزورۍ مخکې له بریدګرو ومومئ"
        },
        description: {
            en: "With your written permission, we test your website, app or network the way an attacker would, looking for weaknesses such as injection flaws, broken access controls and exposed data. You receive a clear report that ranks each issue by risk and explains how to fix it, and we retest after the fixes are made.",
            da: "با اجازه کتبی شما، ما وب‌سایت، اپلیکیشن یا شبکه شما را همان‌طور که یک حمله‌کننده می‌کند تست می‌کنیم و دنبال نقاط ضعف مانند حفره‌های تزریق، کنترل دسترسی ناقص و معلومات افشا‌شده می‌گردیم. شما یک گزارش روشن دریافت می‌کنید که هر مشکل را بر اساس خطر درجه‌بندی کرده و طریقه حل آن را توضیح می‌دهد، و پس از رفع مشکلات دوباره تست می‌کنیم.",
            pa: "ستاسو د لیکلي اجازې سره، موږ ستاسو ویب پاڼه، اپ یا شبکه هغسې ازمویو لکه یو بریدګر یې چې ازمویي، او د کمزوریو لټون کوو لکه د انجکشن نیمګړتیاوې، مات شوي د لاسرسي کنټرولونه او ښکاره شوي معلومات. تاسو یو روښانه راپور ترلاسه کوئ چې هره ستونزه د خطر له مخې درجه بندي کوي او د حل لاره یې تشریح کوي، او د سمونو وروسته بیا ازموینه کوو."
        },
        features: [
            "Web Application Testing",
            "API Security Testing",
            "Network Vulnerability Scan",
            "Risk-Ranked Findings Report",
            "OWASP Top 10 Coverage",
            "Access Control Review",
            "Fix Recommendations",
            "Retest After Fixes"
        ],
        pricing: {
            basic: {
                name: "Scan",
                price: "AFN 12,000",
                features: [
                    "1 Website",
                    "Automated Vulnerability Scan",
                    "Manual Review of Findings",
                    "Summary Report"
                ]
            },
            professional: {
                name: "Audit",
                price: "AFN 35,000",
                features: [
                    "Website or Web App",
                    "Manual Penetration Testing",
                    "OWASP Top 10 Coverage",
                    "Detailed Findings Report",
                    "Fix Recommendations",
                    "1 Retest"
                ]
            },
            enterprise: {
                name: "Comprehensive",
                price: "Custom",
                features: [
                    "Web, API & Network Scope",
                    "Authenticated Testing",
                    "Internal Network Review",
                    "Executive Summary",
                    "Remediation Support",
                    "Multiple Retests"
                ]
            }
        }
    },
    {
        id: "malware-removal",
        slug: "malware-removal",
        category: "security",
        title: {
            en: "Malware Removal & Hacked Site Recovery",
            da: "حذف بدافزار و بازیابی سایت هک‌شده",
            pa: "د ناوړه سافټویر لرې کول او د هک شوې ویب پاڼې بیا رغونه"
        },
        shortDesc: {
            en: "Hacked website? We clean it, restore it and close the hole they used",
            da: "وب‌سایت شما هک شده؟ ما آن را پاک، بازیابی و راه نفوذ را مسدود می‌کنیم",
            pa: "ویب پاڼه مو هک شوې؟ موږ یې پاکوو، بیرته رغوو او د ننوتلو لاره یې بندوو"
        },
        description: {
            en: "If your site is redirecting to spam, showing a Google warning or has been defaced, we remove the malicious code, restore clean files and find how the attackers got in so it doesn't happen again. We then help you request removal from Google and other blocklists and change all exposed passwords.",
            da: "اگر سایت شما به اسپم ریدایرکت می‌شود، هشدار گوگل نشان می‌دهد یا ظاهرش تخریب شده است، ما کود مخرب را حذف می‌کنیم، فایل‌های پاک را بازیابی می‌کنیم و پیدا می‌کنیم که حمله‌کنندگان از کجا وارد شده‌اند تا دوباره تکرار نشود. سپس در درخواست حذف از لیست‌های سیاه گوگل و دیگران کمک می‌کنیم و همه رمزهای افشاشده را تغییر می‌دهیم.",
            pa: "که ستاسو ویب پاڼه سپیم ته لیږدول کیږي، د ګوګل خبرداری ښیي یا بڼه یې خرابه شوې وي، موږ ناوړه کوډ لرې کوو، پاک فایلونه بیرته راګرځوو او موندو چې بریدګر له کومې لارې ننوتي څو بیا تکرار نشي. بیا تاسو سره د ګوګل او نورو تور لیستونو څخه د لرې کیدو په غوښتنه کې مرسته کوو او ټول ښکاره شوي پټنومونه بدلوو."
        },
        features: [
            "Malware & Backdoor Removal",
            "Clean File Restoration",
            "Entry Point Investigation",
            "Google Blocklist Removal Request",
            "Password & Key Rotation",
            "Spam Redirect Cleanup",
            "Post-Cleanup Hardening",
            "Incident Report"
        ],
        pricing: {
            basic: {
                name: "Cleanup",
                price: "AFN 8,000",
                features: [
                    "1 Website",
                    "Malware Removal",
                    "Password Reset",
                    "Basic Hardening",
                    "Incident Summary"
                ]
            },
            professional: {
                name: "Recovery",
                price: "AFN 18,000",
                features: [
                    "Full Malware & Backdoor Removal",
                    "Entry Point Investigation",
                    "Blocklist Removal Requests",
                    "Database Cleanup",
                    "Full Hardening",
                    "1 Month Monitoring"
                ]
            },
            enterprise: {
                name: "Emergency",
                price: "AFN 30,000+",
                features: [
                    "Same-Day Response",
                    "Multiple Sites or Servers",
                    "Forensic Investigation",
                    "Data Exposure Assessment",
                    "Full Rebuild if Needed",
                    "3 Months Monitoring"
                ]
            }
        }
    },
    {
        id: "data-privacy",
        slug: "data-privacy",
        category: "security",
        title: {
            en: "Data Protection & Privacy Compliance",
            da: "حفاظت معلومات و رعایت حریم خصوصی",
            pa: "د معلوماتو ساتنه او د محرمیت رعایت"
        },
        shortDesc: {
            en: "Handle customer data responsibly, including GDPR for EU-facing businesses",
            da: "مدیریت مسئولانه معلومات مشتریان، شامل GDPR برای تجارت‌های مرتبط با اروپا",
            pa: "د پیرودونکو معلوماتو مسؤلانه سمبالول، د اروپا سره تړلو سوداګریو لپاره GDPR په ګډون"
        },
        description: {
            en: "If you sell to customers in Europe or the UK — common for diaspora businesses — rules like GDPR apply to how you collect and store their data. We map what personal data you hold, write a clear privacy policy and cookie notice, set up consent and data request processes, and tighten who can access what. This is practical technical and documentation work, not legal advice; for formal legal opinions we recommend consulting a qualified lawyer.",
            da: "اگر به مشتریانی در اروپا یا بریتانیا می‌فروشید — که برای تجارت‌های افغان‌های خارج از کشور معمول است — قوانینی مانند GDPR بر نحوه جمع‌آوری و نگهداری معلومات آن‌ها اعمال می‌شود. ما مشخص می‌کنیم چه معلومات شخصی نزد شما است، یک پالیسی حریم خصوصی و اطلاعیه کوکی واضح می‌نویسیم، روند رضایت و درخواست معلومات را تنظیم می‌کنیم و دسترسی‌ها را محدود می‌سازیم. این یک کار عملی تخنیکی و مستندسازی است، نه مشوره حقوقی؛ برای نظر رسمی حقوقی توصیه می‌کنیم با یک وکیل واجد شرایط مشوره کنید.",
            pa: "که تاسو اروپا یا بریتانیا کې پیرودونکو ته پلورئ — چې د بهر میشتو افغانانو سوداګریو لپاره عام دي — نو د GDPR په څیر قوانین د هغوی د معلوماتو په راټولولو او ساتلو پلي کیږي. موږ معلوموو چې کوم شخصي معلومات لرئ، روښانه د محرمیت پالیسي او د کوکي خبرتیا لیکو، د رضایت او د معلوماتو د غوښتنې بهیرونه جوړوو، او لاسرسی محدودوو. دا عملي تخنیکي او مستند کولو کار دی، حقوقي مشوره نه ده؛ د رسمي حقوقي نظر لپاره وړاندیز کوو چې له یو وړ وکیل سره مشوره وکړئ."
        },
        features: [
            "Personal Data Mapping",
            "Privacy Policy & Cookie Notice",
            "Consent Management Setup",
            "Data Request Process",
            "GDPR Readiness Review",
            "Access Control Review",
            "Data Retention Rules",
            "Staff Awareness Training"
        ],
        pricing: {
            basic: {
                name: "Essentials",
                price: "AFN 10,000",
                features: [
                    "Website Privacy Review",
                    "Privacy Policy Draft",
                    "Cookie Consent Banner",
                    "Contact Form Data Review"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 28,000",
                features: [
                    "Full Personal Data Mapping",
                    "GDPR Readiness Review",
                    "Consent & Data Request Processes",
                    "Access Control Review",
                    "Data Retention Rules",
                    "Staff Training Session"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multiple Systems & Vendors",
                    "Vendor Data Agreements Review",
                    "Data Breach Response Plan",
                    "Technical Security Measures",
                    "Ongoing Compliance Support",
                    "Coordination with Your Lawyer"
                ]
            }
        }
    },
    {
        id: "ai-chatbots",
        slug: "ai-chatbots",
        category: "ai-data",
        title: {
            en: "AI Chatbots",
            da: "چت‌بات‌های هوش مصنوعی",
            pa: "د مصنوعي ځیرکتیا چټ بوټونه"
        },
        shortDesc: {
            en: "Chatbots that answer customer questions in Dari, Pashto and English",
            da: "چت‌بات‌هایی که به سوالات مشتریان به دری، پشتو و انگلیسی جواب می‌دهند",
            pa: "چټ بوټونه چې د پیرودونکو پوښتنو ته په پښتو، دري او انګلیسي ځواب ورکوي"
        },
        description: {
            en: "We build AI chatbots for your website or app that answer questions from your own content — prices, opening hours, policies, product details — instead of making things up. The bot can reply in Dari, Pashto and English, hands complex conversations to a real person, and you can review every conversation to keep improving it.",
            da: "ما برای وب‌سایت یا اپلیکیشن شما چت‌بات‌های هوش مصنوعی می‌سازیم که از روی محتوای خود شما — قیمت‌ها، ساعات کاری، پالیسی‌ها، جزئیات محصولات — جواب بدهند، نه اینکه چیزی از خود بسازند. بات می‌تواند به دری، پشتو و انگلیسی جواب بدهد، گفتگوهای پیچیده را به یک شخص واقعی بسپارد، و شما می‌توانید هر گفتگو را مرور کنید تا آن را بهتر سازید.",
            pa: "موږ ستاسو ویب پاڼې یا اپ ته د مصنوعي ځیرکتیا چټ بوټونه جوړوو چې ستاسو د خپل محتوا له مخې — بیې، د کار ساعتونه، پالیسۍ، د محصولاتو جزییات — ځواب ورکوي، نه دا چې له ځانه څه جوړ کړي. بوټ کولی شي په پښتو، دري او انګلیسي ځواب ورکړي، پیچلې خبرې اترې یو ریښتیني کس ته وسپاري، او تاسو کولی شئ هره خبره اتره وګورئ څو یې ښه کړئ."
        },
        features: [
            "Trained on Your Own Content",
            "Dari, Pashto & English Replies",
            "Handoff to Human Staff",
            "Conversation History & Review",
            "Website & App Widget",
            "Lead Capture",
            "FAQ & Policy Answers",
            "Usage Analytics"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 15,000",
                features: [
                    "Website Chat Widget",
                    "Up to 50 Pages of Content",
                    "1 Language",
                    "Conversation Log",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 35,000",
                features: [
                    "Website & App Integration",
                    "Dari, Pashto & English",
                    "Human Handoff",
                    "Lead Capture to Email or CRM",
                    "Usage Analytics",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 60,000+",
                features: [
                    "Multiple Channels",
                    "Connected to Your Systems via API",
                    "Order & Booking Lookups",
                    "Custom Guardrails",
                    "Staff Dashboard",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "ai-integration",
        slug: "ai-integration",
        category: "ai-data",
        title: {
            en: "AI Integration",
            da: "ادغام هوش مصنوعی",
            pa: "د مصنوعي ځیرکتیا ادغام"
        },
        shortDesc: {
            en: "Bring large language models into your products and daily workflows",
            da: "مدل‌های بزرگ زبانی را وارد محصولات و کارهای روزمره خود کنید",
            pa: "لوی ژبني ماډلونه خپلو محصولاتو او ورځنیو کارونو ته راوړئ"
        },
        description: {
            en: "We connect large language models (LLMs) to your software and processes for tasks like summarizing reports, drafting replies, classifying requests, translating between Dari, Pashto and English, and searching your internal documents. We start with a small pilot on one real task, measure whether it saves time, and only then build it into your systems with proper data handling and human review.",
            da: "ما مدل‌های بزرگ زبانی (LLM) را به نرم‌افزار و روندهای کاری شما وصل می‌کنیم برای کارهایی مانند خلاصه‌سازی گزارش‌ها، نوشتن پیش‌نویس جواب‌ها، دسته‌بندی درخواست‌ها، ترجمه بین دری، پشتو و انگلیسی، و جستجو در اسناد داخلی. ما با یک آزمایش کوچک روی یک کار واقعی شروع می‌کنیم، می‌سنجیم که آیا وقت را صرفه‌جویی می‌کند، و فقط بعد از آن، آن را با مدیریت درست معلومات و بررسی انسانی در سیستم‌های شما می‌سازیم.",
            pa: "موږ لوی ژبني ماډلونه (LLM) ستاسو سافټویر او کاري بهیرونو سره نښلوو د داسې کارونو لپاره لکه د راپورونو لنډیز، د ځوابونو مسوده، د غوښتنو ډلبندي، د پښتو، دري او انګلیسي ترمنځ ژباړه، او په داخلي اسنادو کې لټون. موږ په یوه ریښتیني کار د کوچنۍ ازمایښتي پروژې سره پیل کوو، اندازه کوو چې ایا وخت سپموي، او یوازې وروسته یې ستاسو په سیسټمونو کې د معلوماتو د سم سمبالښت او انساني بیاکتنې سره جوړوو."
        },
        features: [
            "LLM API Integration",
            "Document Search (RAG)",
            "Summarization & Drafting",
            "Dari, Pashto & English Support",
            "Request Classification",
            "Pilot Before Full Rollout",
            "Human Review Steps",
            "Data Privacy Controls"
        ],
        pricing: {
            basic: {
                name: "Pilot",
                price: "AFN 20,000",
                features: [
                    "1 Use Case",
                    "Working Prototype",
                    "Time-Savings Assessment",
                    "Recommendations Report"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 50,000",
                features: [
                    "Up to 3 Use Cases",
                    "Integration with Your Software",
                    "Internal Document Search",
                    "Human Review Workflow",
                    "Usage & Cost Monitoring",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Organization-Wide Rollout",
                    "Multiple Systems Integration",
                    "Access Controls & Audit Logs",
                    "Model Evaluation & Testing",
                    "Staff Training",
                    "Ongoing Support"
                ]
            }
        }
    },
    {
        id: "whatsapp-chatbot",
        slug: "whatsapp-chatbot",
        category: "ai-data",
        title: {
            en: "WhatsApp Business Chatbots",
            da: "چت‌بات‌های واتساپ بزنس",
            pa: "د واټساپ بزنس چټ بوټونه"
        },
        shortDesc: {
            en: "Automated WhatsApp replies, orders and bookings for your customers",
            da: "جواب‌های خودکار، سفارش‌ها و رزرو از طریق واتساپ برای مشتریان شما",
            pa: "ستاسو پیرودونکو ته په واټساپ کې اتومات ځوابونه، فرمایشونه او بکنګ"
        },
        description: {
            en: "Many Afghan customers prefer WhatsApp to websites, so we build chatbots on the official WhatsApp Business Platform that answer common questions, take orders, book appointments and send updates automatically. Menus work in Dari, Pashto and English, and your staff can step into any conversation from a shared inbox.",
            da: "بسیاری از مشتریان افغان واتساپ را بر وب‌سایت ترجیح می‌دهند، بنابراین ما روی پلتفورم رسمی WhatsApp Business چت‌بات‌هایی می‌سازیم که به سوالات معمول جواب بدهند، سفارش بگیرند، وقت ملاقات رزرو کنند و به طور خودکار معلومات تازه بفرستند. منوها به دری، پشتو و انگلیسی کار می‌کنند و کارمندان شما می‌توانند از یک صندوق مشترک وارد هر گفتگو شوند.",
            pa: "ډیری افغان پیرودونکي واټساپ پر ویب پاڼو غوره ګڼي، نو موږ د WhatsApp Business پر رسمي پلیټفارم چټ بوټونه جوړوو چې عامو پوښتنو ته ځواب ورکوي، فرمایشونه اخلي، د لیدنې وختونه ټاکي او په اتومات ډول تازه معلومات لیږي. مینوګانې په پښتو، دري او انګلیسي کار کوي، او ستاسو کارکوونکي کولی شي له ګډ ان باکس څخه هرې خبرې اترې ته ورګډ شي."
        },
        features: [
            "Official WhatsApp Business API",
            "Automated FAQ Replies",
            "Orders & Bookings via Chat",
            "Dari, Pashto & English Menus",
            "Shared Team Inbox",
            "Order & Delivery Notifications",
            "Catalog Integration",
            "Optional AI-Powered Answers"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 12,000",
                features: [
                    "WhatsApp Business API Setup",
                    "Menu-Based Bot",
                    "Up to 10 FAQ Flows",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 30,000",
                features: [
                    "Order or Booking Flow",
                    "Multilingual Menus",
                    "Shared Team Inbox",
                    "Automated Notifications",
                    "Catalog Integration",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 55,000+",
                features: [
                    "AI-Powered Answers",
                    "Integration with Your Systems",
                    "Payment Links",
                    "Broadcast Campaigns (Opt-In)",
                    "Analytics Dashboard",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "telegram-bots",
        slug: "telegram-bots",
        category: "ai-data",
        title: {
            en: "Telegram Bots",
            da: "بات‌های تلگرام",
            pa: "د ټیلیګرام بوټونه"
        },
        shortDesc: {
            en: "Custom Telegram bots for orders, notifications, support and team tasks",
            da: "بات‌های اختصاصی تلگرام برای سفارش‌ها، اطلاع‌رسانی، پشتیبانی و کارهای تیمی",
            pa: "د ټیلیګرام ځانګړي بوټونه د فرمایشونو، خبرتیاوو، ملاتړ او ټیمي کارونو لپاره"
        },
        description: {
            en: "Telegram works well on slow connections and is widely used in Afghanistan, which makes it a practical channel for customers and staff. We build bots that take orders, send alerts, answer questions, collect forms, manage channel posts or report data from your systems — all with Dari and Pashto support and a simple admin panel.",
            da: "تلگرام روی انترنت کند خوب کار می‌کند و در افغانستان به طور گسترده استفاده می‌شود، که آن را یک کانال عملی برای مشتریان و کارمندان می‌سازد. ما بات‌هایی می‌سازیم که سفارش بگیرند، هشدار بفرستند، به سوالات جواب بدهند، فورم جمع کنند، پست‌های کانال را مدیریت کنند یا از سیستم‌های شما گزارش بدهند — همه با پشتیبانی دری و پشتو و یک پنل ساده مدیریت.",
            pa: "ټیلیګرام په ورو انټرنټ ښه کار کوي او په افغانستان کې په پراخه کچه کارول کیږي، چې دا یې د پیرودونکو او کارکوونکو لپاره یو عملي چینل ګرځوي. موږ داسې بوټونه جوړوو چې فرمایشونه اخلي، خبرتیاوې لیږي، پوښتنو ته ځواب ورکوي، فورمې راټولوي، د چینل پوسټونه اداره کوي یا ستاسو له سیسټمونو راپور ورکوي — ټول د پښتو او دري ملاتړ او یوه ساده اداري پینل سره."
        },
        features: [
            "Custom Bot Commands & Menus",
            "Order & Request Collection",
            "Automated Notifications",
            "Dari & Pashto Support",
            "Admin Panel",
            "Channel & Group Management",
            "Integration with Your Systems",
            "Optional AI Responses"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 8,000",
                features: [
                    "Simple Menu Bot",
                    "Up to 10 Commands",
                    "Form Collection",
                    "Bot Hosting Setup",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 22,000",
                features: [
                    "Orders or Bookings",
                    "Database Storage",
                    "Admin Panel",
                    "Automated Notifications",
                    "Multilingual Support",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 45,000+",
                features: [
                    "Integration with Your Systems",
                    "Payment Integration",
                    "AI-Powered Answers",
                    "Role-Based Admin Access",
                    "Reporting Dashboard",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "data-analytics",
        slug: "data-analytics",
        category: "ai-data",
        title: {
            en: "Data Analytics & Dashboards",
            da: "تحلیل معلومات و داشبوردها",
            pa: "د معلوماتو تحلیل او ډشبورډونه"
        },
        shortDesc: {
            en: "Turn spreadsheets and sales records into clear, live dashboards",
            da: "جدول‌ها و ریکاردهای فروش را به داشبوردهای واضح و زنده تبدیل کنید",
            pa: "سپریډشیټونه او د پلور ریکارډونه په روښانه، ژوندیو ډشبورډونو بدل کړئ"
        },
        description: {
            en: "We pull your data from Excel files, accounting software, websites and databases into dashboards that show what matters: sales by product and branch, stock levels, expenses and customer trends. Dashboards update automatically and can be viewed on a phone, so owners — including those abroad — can see how the business is doing without waiting for reports.",
            da: "ما معلومات شما را از فایل‌های Excel، نرم‌افزار حسابداری، وب‌سایت‌ها و دیتابیس‌ها به داشبوردهایی می‌آوریم که موارد مهم را نشان می‌دهند: فروش بر اساس محصول و شعبه، سطح موجودی، مصارف و روند مشتریان. داشبوردها به طور خودکار آپدیت می‌شوند و روی موبایل قابل دیدن هستند، تا مالکان — حتی آنهایی که خارج از کشور هستند — بدون انتظار برای گزارش ببینند کار چطور پیش می‌رود.",
            pa: "موږ ستاسو معلومات د Excel فایلونو، حسابدارۍ سافټویر، ویب پاڼو او ډیټابیسونو څخه داسې ډشبورډونو ته راوړو چې مهم شیان ښیي: د محصول او څانګې له مخې پلور، د ګودام کچه، لګښتونه او د پیرودونکو بهیر. ډشبورډونه په اتومات ډول تازه کیږي او په موبایل لیدل کیدی شي، څو مالکان — حتی هغه چې بهر دي — پرته له راپور انتظاره وګوري چې کار څنګه روان دی."
        },
        features: [
            "Live Business Dashboards",
            "Excel & Database Connections",
            "Mobile-Friendly Reports",
            "Automatic Data Refresh",
            "Sales, Stock & Expense Tracking",
            "Data Cleaning & Preparation",
            "Power BI, Looker Studio & Metabase",
            "Scheduled Email Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 12,000",
                features: [
                    "1 Dashboard",
                    "Up to 2 Data Sources",
                    "Data Cleaning",
                    "Mobile Access",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 30,000",
                features: [
                    "Up to 4 Dashboards",
                    "Up to 5 Data Sources",
                    "Automatic Refresh",
                    "Scheduled Email Reports",
                    "User Access Controls",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 60,000+",
                features: [
                    "Unlimited Dashboards",
                    "Central Data Warehouse",
                    "Multi-Branch Reporting",
                    "Custom KPIs & Alerts",
                    "Staff Training",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "business-intelligence",
        slug: "business-intelligence",
        category: "ai-data",
        title: {
            en: "Business Intelligence",
            da: "هوش تجارتی",
            pa: "سوداګریزه ځیرکتیا"
        },
        shortDesc: {
            en: "One trusted source of numbers for planning and decision-making",
            da: "یک منبع معتبر از ارقام برای پلان‌گذاری و تصمیم‌گیری",
            pa: "د پلان جوړونې او پریکړو لپاره د شمیرو یوه باوري سرچینه"
        },
        description: {
            en: "When every department keeps its own spreadsheets, the numbers rarely agree. We bring data from sales, finance, inventory and operations into a single, structured data warehouse, define key figures consistently, and build reports that management can rely on for budgeting, forecasting and comparing branches over time.",
            da: "وقتی هر بخش جدول‌های خودش را نگه می‌دارد، ارقام کمتر با هم توافق دارند. ما معلومات فروش، مالی، موجودی و عملیات را در یک انبار معلومات منظم و واحد جمع می‌کنیم، شاخص‌های کلیدی را به شکل یکسان تعریف می‌کنیم، و گزارش‌هایی می‌سازیم که مدیریت بتواند برای بودجه‌بندی، پیش‌بینی و مقایسه شعبه‌ها در طول زمان به آن‌ها اعتماد کند.",
            pa: "کله چې هره څانګه خپل سپریډشیټونه ساتي، شمیرې لږ سره سمون خوري. موږ د پلور، مالي، ګودام او عملیاتو معلومات په یوه منظم او واحد د معلوماتو ګودام کې راټولوو، کلیدي شاخصونه په یو شان ډول تعریفوو، او داسې راپورونه جوړوو چې مدیریت پرې د بودیجې، وړاندوینې او د وخت په تیریدو د څانګو د پرتلې لپاره باور وکړای شي."
        },
        features: [
            "Central Data Warehouse",
            "Consistent KPI Definitions",
            "Management Reports",
            "Branch & Period Comparisons",
            "Automated Data Pipelines (ETL)",
            "Forecasting & Trend Analysis",
            "Role-Based Report Access",
            "Data Quality Checks"
        ],
        pricing: {
            basic: {
                name: "Assessment",
                price: "AFN 15,000",
                features: [
                    "Data Sources Review",
                    "KPI Definition Workshop",
                    "Reporting Roadmap",
                    "Sample Management Report"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 50,000",
                features: [
                    "Data Warehouse Setup",
                    "Up to 6 Data Sources",
                    "Automated Data Pipelines",
                    "Management Report Pack",
                    "Data Quality Checks",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Organization-Wide BI Platform",
                    "Unlimited Data Sources",
                    "Forecasting Models",
                    "Role-Based Access",
                    "Analyst Training",
                    "Ongoing Support"
                ]
            }
        }
    },
    {
        id: "web-scraping",
        slug: "web-scraping",
        category: "ai-data",
        title: {
            en: "Data Collection & Web Scraping",
            da: "جمع‌آوری معلومات و استخراج از وب",
            pa: "د معلوماتو راټولول او له ویب څخه ایستل"
        },
        shortDesc: {
            en: "Collect lawful, publicly available data automatically and keep it current",
            da: "جمع‌آوری خودکار معلومات عمومی و قانونی و تازه نگه‌داشتن آن",
            pa: "قانوني او عامه شته معلومات په اتومات ډول راټولول او تازه ساتل"
        },
        description: {
            en: "We build tools that collect publicly available information — such as prices, product listings, exchange rates, tenders or public announcements — and deliver it as clean spreadsheets, a database or an API. We only collect data that is lawful to gather, respect each site's terms and rate limits, and do not collect personal data or anything behind a login without permission.",
            da: "ما ابزارهایی می‌سازیم که معلومات عمومی در دسترس — مانند قیمت‌ها، لیست محصولات، نرخ اسعار، داوطلبی‌ها یا اعلانات عمومی — را جمع کرده و به شکل جدول‌های پاک، دیتابیس یا API تحویل می‌دهند. ما فقط معلوماتی را جمع می‌کنیم که جمع‌آوری آن قانونی باشد، شرایط و محدودیت‌های هر سایت را رعایت می‌کنیم، و معلومات شخصی یا چیزی که پشت ورود با رمز باشد را بدون اجازه جمع نمی‌کنیم.",
            pa: "موږ داسې وسیلې جوړوو چې عامه شته معلومات — لکه بیې، د محصولاتو لیستونه، د اسعارو نرخونه، داوطلبۍ یا عامه اعلانونه — راټولوي او د پاکو سپریډشیټونو، ډیټابیس یا API په بڼه یې سپاري. موږ یوازې هغه معلومات راټولوو چې راټولول یې قانوني وي، د هرې ویب پاڼې شرایط او محدودیتونه درناوی کوو، او شخصي معلومات یا هر هغه څه چې د ننوتلو شاته وي پرته له اجازې نه راټولوو."
        },
        features: [
            "Public Data Collection",
            "Scheduled Automatic Updates",
            "Clean Excel, CSV or Database Output",
            "Price & Listing Tracking",
            "Respects Site Terms & Rate Limits",
            "No Personal Data Collection",
            "Change Alerts",
            "Data API Delivery"
        ],
        pricing: {
            basic: {
                name: "One-Time",
                price: "AFN 7,000",
                features: [
                    "1 Public Source",
                    "One-Time Data Collection",
                    "Excel or CSV Delivery",
                    "Data Cleaning"
                ]
            },
            professional: {
                name: "Scheduled",
                price: "AFN 20,000",
                features: [
                    "Up to 5 Public Sources",
                    "Daily or Weekly Updates",
                    "Database Storage",
                    "Change Alerts",
                    "Monitoring & Fixes",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 45,000+",
                features: [
                    "Many Sources",
                    "Near Real-Time Updates",
                    "Data API",
                    "Dashboard Integration",
                    "Compliance Review of Sources",
                    "Ongoing Maintenance"
                ]
            }
        }
    },
    {
        id: "machine-learning",
        slug: "machine-learning",
        category: "ai-data",
        title: {
            en: "Machine Learning Solutions",
            da: "راه‌حل‌های یادگیری ماشین",
            pa: "د ماشین زده کړې حلونه"
        },
        shortDesc: {
            en: "Models that predict demand, flag risks and spot patterns in your data",
            da: "مدل‌هایی که تقاضا را پیش‌بینی، خطرات را شناسایی و الگوها را در معلومات شما پیدا می‌کنند",
            pa: "ماډلونه چې غوښتنه وړاندوینه کوي، خطرونه په ګوته کوي او ستاسو په معلوماتو کې بڼې مومي"
        },
        description: {
            en: "We build machine learning models for specific business problems, such as forecasting stock demand, scoring loan or credit risk, detecting unusual transactions, or recommending products. Each project starts by checking whether your data is good enough to support a useful model, and results are measured against simple baselines so you can see whether the model actually helps.",
            da: "ما مدل‌های یادگیری ماشین را برای مشکلات مشخص تجارتی می‌سازیم، مانند پیش‌بینی تقاضای موجودی، سنجش خطر قرضه یا اعتبار، شناسایی معاملات غیرعادی، یا پیشنهاد محصولات. هر پروژه با بررسی اینکه آیا معلومات شما برای یک مدل مفید کافی است شروع می‌شود، و نتایج با معیارهای ساده مقایسه می‌شوند تا ببینید آیا مدل واقعاً کمک می‌کند.",
            pa: "موږ د ځانګړو سوداګریزو ستونزو لپاره د ماشین زده کړې ماډلونه جوړوو، لکه د ګودام د غوښتنې وړاندوینه، د پور یا اعتبار د خطر اندازه کول، د غیر عادي معاملو موندل، یا د محصولاتو وړاندیز. هره پروژه په دې پیل کیږي چې ایا ستاسو معلومات د یو ګټور ماډل لپاره بسنه کوي، او پایلې له ساده معیارونو سره پرتله کیږي څو وګورئ چې ماډل په رښتیا مرسته کوي."
        },
        features: [
            "Demand Forecasting",
            "Risk Scoring",
            "Anomaly & Fraud Detection",
            "Product Recommendations",
            "Data Readiness Assessment",
            "Measured Against Baselines",
            "Model Deployment via API",
            "Ongoing Model Monitoring"
        ],
        pricing: {
            basic: {
                name: "Feasibility",
                price: "AFN 18,000",
                features: [
                    "Data Readiness Assessment",
                    "Problem Definition",
                    "Baseline Analysis",
                    "Go / No-Go Report"
                ]
            },
            professional: {
                name: "Model",
                price: "AFN 55,000",
                features: [
                    "1 Production Model",
                    "Data Preparation",
                    "Model Training & Evaluation",
                    "API Deployment",
                    "Results Dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multiple Models",
                    "Automated Retraining",
                    "Integration with Your Systems",
                    "Model Monitoring & Alerts",
                    "Team Knowledge Transfer",
                    "Ongoing Support"
                ]
            }
        }
    },
    {
        id: "document-digitization",
        slug: "document-digitization",
        category: "ai-data",
        title: {
            en: "Document Digitization & OCR",
            da: "دیجیتل‌سازی اسناد و OCR",
            pa: "د اسنادو ډیجیټل کول او OCR"
        },
        shortDesc: {
            en: "Turn paper records, including Dari and Pashto, into searchable digital files",
            da: "اسناد کاغذی، شامل دری و پشتو، را به فایل‌های دیجیتل قابل جستجو تبدیل کنید",
            pa: "کاغذي ریکارډونه، د پښتو او دري په ګډون، د لټون وړ ډیجیټل فایلونو بدل کړئ"
        },
        description: {
            en: "We scan paper archives — contracts, invoices, forms, registers — and use OCR to make the text searchable, including Dari and Pashto documents. Because OCR for Perso-Arabic script, handwriting and old stamps is less accurate than for English, we check results and correct important fields by hand. Files are organized with clear naming and indexes so your team can find any document in seconds.",
            da: "ما آرشیف‌های کاغذی — قراردادها، بل‌ها، فورم‌ها، دفترها — را اسکن می‌کنیم و با OCR متن آن‌ها را قابل جستجو می‌سازیم، شامل اسناد دری و پشتو. چون OCR برای خط عربی‌فارسی، دست‌نویس و مهرهای قدیمی نسبت به انگلیسی دقت کمتری دارد، نتایج را بررسی کرده و ساحه‌های مهم را دستی اصلاح می‌کنیم. فایل‌ها با نام‌گذاری و فهرست واضح منظم می‌شوند تا تیم شما بتواند هر سند را در چند ثانیه پیدا کند.",
            pa: "موږ کاغذي آرشیفونه — قراردادونه، بلونه، فورمې، دفترونه — سکن کوو او د OCR په مرسته یې متن د لټون وړ ګرځوو، د پښتو او دري اسنادو په ګډون. ځکه چې د عربي-فارسي لیک، لاسي لیکنې او زړو مهرونو لپاره OCR د انګلیسي په پرتله لږ دقیق دی، موږ پایلې ګورو او مهمې برخې په لاس سموو. فایلونه د روښانه نومونو او فهرستونو سره منظمیږي څو ستاسو ټیم هر سند په څو ثانیو کې ومومي."
        },
        features: [
            "Bulk Document Scanning",
            "Dari & Pashto OCR",
            "Searchable PDF Output",
            "Manual Check of Key Fields",
            "Invoice & Form Data Extraction",
            "Organized Folders & Indexes",
            "Secure Handling of Originals",
            "Document Management System Setup"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 6,000",
                features: [
                    "Up to 500 Pages",
                    "Scanning & OCR",
                    "Searchable PDFs",
                    "Basic Folder Structure"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 20,000",
                features: [
                    "Up to 3,000 Pages",
                    "Dari, Pashto & English OCR",
                    "Key Field Extraction to Excel",
                    "Manual Accuracy Checks",
                    "Indexed Archive",
                    "Cloud Storage Setup"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Large Archives",
                    "On-Site Scanning",
                    "Automated Processing Pipeline",
                    "Document Management System",
                    "Access Controls",
                    "Ongoing Digitization"
                ]
            }
        }
    },
    {
        id: "crm-setup",
        slug: "crm-setup",
        category: "ai-data",
        title: {
            en: "CRM Setup & Customization",
            da: "راه‌اندازی و تنظیم CRM",
            pa: "د CRM جوړول او ځانګړي کول"
        },
        shortDesc: {
            en: "Track customers, leads and follow-ups in one place instead of notebooks",
            da: "مشتریان، مشتریان احتمالی و پیگیری‌ها را در یک جا ثبت کنید نه در کتابچه‌ها",
            pa: "پیرودونکي، احتمالي پیرودونکي او تعقیبونه په یوه ځای کې ثبت کړئ نه په کتابچو کې"
        },
        description: {
            en: "We set up and customize a CRM such as HubSpot, Zoho or Odoo so your team can track every customer, lead, call and deal in one shared system. We import your existing contacts from Excel or phones, design pipelines that match how you actually sell, and connect it to your website forms, email and WhatsApp where possible.",
            da: "ما یک CRM مانند HubSpot، Zoho یا Odoo را راه‌اندازی و مطابق نیاز شما تنظیم می‌کنیم تا تیم شما بتواند هر مشتری، مشتری احتمالی، تماس و معامله را در یک سیستم مشترک ثبت کند. مخاطبین موجود شما را از Excel یا موبایل‌ها وارد می‌کنیم، مراحل فروش را مطابق روش واقعی فروش شما دیزاین می‌کنیم، و در صورت امکان آن را با فورم‌های وب‌سایت، ایمیل و واتساپ وصل می‌کنیم.",
            pa: "موږ یو CRM لکه HubSpot، Zoho یا Odoo جوړوو او ستاسو اړتیا سره سم یې برابروو څو ستاسو ټیم هر پیرودونکی، احتمالي پیرودونکی، زنګ او معامله په یوه ګډ سیسټم کې ثبت کړي. ستاسو موجوده اړیکې له Excel یا موبایلونو څخه واردوو، د پلور پړاوونه ستاسو د پلور د ریښتیني طریقې سره سم ډیزاینوو، او د امکان په صورت کې یې د ویب پاڼې فورمو، بریښنالیک او واټساپ سره نښلوو."
        },
        features: [
            "HubSpot, Zoho & Odoo Setup",
            "Contact Import from Excel & Phones",
            "Custom Sales Pipelines",
            "Website Form Integration",
            "Follow-Up Reminders",
            "Email & WhatsApp Integration",
            "Sales Reports",
            "Team Training"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 10,000",
                features: [
                    "CRM Account Setup",
                    "Contact Import",
                    "1 Sales Pipeline",
                    "Up to 5 Users",
                    "Training Session"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 28,000",
                features: [
                    "Custom Fields & Pipelines",
                    "Website Form Integration",
                    "Email Integration",
                    "Automated Reminders",
                    "Sales Reports",
                    "1 Month Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 55,000+",
                features: [
                    "Multi-Team Setup",
                    "WhatsApp Integration",
                    "Custom Automations",
                    "Integration with Accounting or ERP",
                    "Role-Based Permissions",
                    "3 Months Support"
                ]
            }
        }
    },
    {
        id: "it-consulting",
        slug: "it-consulting",
        category: "consulting",
        title: {
            en: "IT Consulting",
            da: "مشاوره IT",
            pa: "د IT مشوره"
        },
        shortDesc: {
            en: "Independent advice on what technology to use, buy or build",
            da: "مشوره مستقل درباره اینکه از کدام تکنالوژی استفاده کنید، بخرید یا بسازید",
            pa: "خپلواکه مشوره چې کومه ټیکنالوژي وکاروئ، واخلئ یا جوړه کړئ"
        },
        description: {
            en: "Before spending on software, hardware or a large development project, it helps to get an honest second opinion. We review your current systems and goals, compare options including off-the-shelf tools, and give you a written recommendation with realistic costs and timelines — even when the right answer is not to build anything new.",
            da: "پیش از مصرف پول روی نرم‌افزار، سخت‌افزار یا یک پروژه بزرگ انکشافی، داشتن یک نظر دوم صادقانه کمک می‌کند. ما سیستم‌ها و اهداف فعلی شما را بررسی می‌کنیم، گزینه‌ها را شامل ابزارهای آماده مقایسه می‌کنیم، و یک توصیه نوشته‌شده با هزینه‌ها و جدول زمانی واقع‌بینانه به شما می‌دهیم — حتی وقتی جواب درست این باشد که چیز جدیدی ساخته نشود.",
            pa: "مخکې له دې چې پر سافټویر، هارډویر یا یوې لویې پراختیایي پروژې پیسې ولګوئ، یو صادقانه دوهم نظر ګټور دی. موږ ستاسو اوسني سیسټمونه او موخې ګورو، د چمتو وسیلو په ګډون اختیارونه پرتله کوو، او تاسو ته د واقعي لګښتونو او مهال ویش سره لیکلی وړاندیز درکوو — حتی کله چې سم ځواب دا وي چې هیڅ نوی شی جوړ نشي."
        },
        features: [
            "Technology Assessment",
            "Build vs. Buy Analysis",
            "Vendor & Tool Comparison",
            "Written Recommendations",
            "Realistic Cost Estimates",
            "IT Roadmap",
            "Project Requirements Writing",
            "Vendor Proposal Review"
        ],
        pricing: {
            basic: {
                name: "Session",
                price: "AFN 4,000",
                features: [
                    "2-Hour Consultation",
                    "Remote or In-Person (Kabul)",
                    "Written Summary",
                    "Follow-Up Questions by Email"
                ]
            },
            professional: {
                name: "Assessment",
                price: "AFN 20,000",
                features: [
                    "Current Systems Review",
                    "Stakeholder Interviews",
                    "Options Comparison",
                    "Cost Estimates",
                    "Written Recommendations Report"
                ]
            },
            enterprise: {
                name: "Retainer",
                price: "AFN 25,000/mo",
                features: [
                    "Ongoing Advisory",
                    "IT Roadmap & Budget Planning",
                    "Vendor Selection Support",
                    "Project Oversight",
                    "Monthly Review Meetings",
                    "Priority Access"
                ]
            }
        }
    },
    {
        id: "digital-transformation",
        slug: "digital-transformation",
        category: "consulting",
        title: {
            en: "Digital Transformation",
            da: "تحول دیجیتل",
            pa: "ډیجیټل بدلون"
        },
        shortDesc: {
            en: "Move from paper and manual work to simple, connected digital processes",
            da: "از کاغذ و کار دستی به روندهای دیجیتل ساده و به هم پیوسته بروید",
            pa: "له کاغذ او لاسي کار څخه ساده او سره نښلول شویو ډیجیټل بهیرونو ته ولاړ شئ"
        },
        description: {
            en: "We help organizations replace paper forms, scattered spreadsheets and manual approvals with digital processes that fit the way they work. The work is done in stages — map how things are done today, fix the processes that cost the most time, choose suitable tools and train staff — so changes actually get adopted instead of abandoned after launch.",
            da: "ما به سازمان‌ها کمک می‌کنیم تا فورم‌های کاغذی، جدول‌های پراکنده و تاییدهای دستی را با روندهای دیجیتل که با روش کار آن‌ها سازگار است جایگزین کنند. کار مرحله به مرحله انجام می‌شود — نقشه‌برداری از روش فعلی کار، اصلاح روندهایی که بیشترین وقت را می‌گیرند، انتخاب ابزارهای مناسب و آموزش کارمندان — تا تغییرات واقعاً پذیرفته شوند و پس از شروع کنار گذاشته نشوند.",
            pa: "موږ له سازمانونو سره مرسته کوو چې کاغذي فورمې، خپاره سپریډشیټونه او لاسي تاییدونه د داسې ډیجیټل بهیرونو سره بدل کړي چې د دوی د کار له طریقې سره سمون ولري. کار پړاو په پړاو ترسره کیږي — د اوسني کار د طریقې نقشه، د هغو بهیرونو سمول چې ډیر وخت نیسي، د مناسبو وسیلو ټاکل او د کارکوونکو روزنه — څو بدلونونه په رښتیا ومنل شي او له پیل وروسته پریښودل نشي."
        },
        features: [
            "Current Process Mapping",
            "Paper-to-Digital Workflows",
            "Tool Selection",
            "Phased Rollout Plan",
            "Staff Training & Change Support",
            "Digital Forms & Approvals",
            "Systems Integration",
            "Progress Measurement"
        ],
        pricing: {
            basic: {
                name: "Discovery",
                price: "AFN 15,000",
                features: [
                    "Process Mapping Workshop",
                    "Top Priorities Report",
                    "Tool Recommendations",
                    "Rollout Roadmap"
                ]
            },
            professional: {
                name: "Implementation",
                price: "AFN 50,000",
                features: [
                    "Up to 3 Processes Digitized",
                    "Digital Forms & Approvals",
                    "Tool Setup & Configuration",
                    "Staff Training",
                    "Adoption Check-Ins",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Organization-Wide Program",
                    "Custom Software Where Needed",
                    "Systems Integration",
                    "Change Management Support",
                    "Progress Reporting",
                    "Ongoing Partnership"
                ]
            }
        }
    },
    {
        id: "tech-training",
        slug: "tech-training",
        category: "consulting",
        title: {
            en: "Digital Skills Training for Teams",
            da: "آموزش مهارت‌های دیجیتل برای تیم‌ها",
            pa: "د ټیمونو لپاره د ډیجیټل مهارتونو روزنه"
        },
        shortDesc: {
            en: "Practical training in Dari and Pashto on the tools your team uses daily",
            da: "آموزش عملی به دری و پشتو روی ابزارهایی که تیم شما هر روز استفاده می‌کند",
            pa: "په پښتو او دري عملي روزنه هغو وسیلو ته چې ستاسو ټیم یې هره ورځ کاروي"
        },
        description: {
            en: "We run hands-on training sessions for your staff in Dari, Pashto or English, built around the tools they actually use: Excel and Google Sheets, email and file sharing, online security, your CRM or website admin, and safe use of AI tools. Sessions can be in person in Kabul or online, and each participant gets short reference guides to keep.",
            da: "ما جلسات آموزشی عملی برای کارمندان شما به دری، پشتو یا انگلیسی برگزار می‌کنیم که بر اساس ابزارهایی که واقعاً استفاده می‌کنند طرح شده است: Excel و Google Sheets، ایمیل و اشتراک فایل، امنیت آنلاین، CRM یا پنل مدیریت وب‌سایت شما، و استفاده امن از ابزارهای هوش مصنوعی. جلسات می‌توانند حضوری در کابل یا آنلاین باشند و هر اشتراک‌کننده رهنمودهای کوتاه برای نگهداری دریافت می‌کند.",
            pa: "موږ ستاسو کارکوونکو ته په پښتو، دري یا انګلیسي عملي روزنیزې غونډې جوړوو چې د هغو وسیلو پر بنسټ دي چې دوی یې په رښتیا کاروي: Excel او Google Sheets، بریښنالیک او د فایلونو شریکول، آنلاین امنیت، ستاسو CRM یا د ویب پاڼې اداري پینل، او د مصنوعي ځیرکتیا وسیلو خوندي کارول. غونډې په کابل کې حضوري یا آنلاین کیدی شي، او هر ګډونوال د ساتلو لپاره لنډ لارښودونه ترلاسه کوي."
        },
        features: [
            "Training in Dari, Pashto & English",
            "Excel & Google Sheets",
            "Online Security Awareness",
            "Safe Use of AI Tools",
            "Email & File Sharing",
            "CRM & Website Admin Training",
            "In-Person (Kabul) or Online",
            "Reference Guides for Participants"
        ],
        pricing: {
            basic: {
                name: "Workshop",
                price: "AFN 8,000",
                features: [
                    "1 Half-Day Session",
                    "Up to 10 Participants",
                    "1 Topic",
                    "Reference Guide"
                ]
            },
            professional: {
                name: "Program",
                price: "AFN 25,000",
                features: [
                    "4 Sessions",
                    "Up to 20 Participants",
                    "Up to 3 Topics",
                    "Tailored to Your Tools",
                    "Practical Exercises",
                    "Reference Guides"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multi-Week Curriculum",
                    "Multiple Groups or Branches",
                    "Skills Assessment Before & After",
                    "Recorded Sessions",
                    "Custom Training Materials",
                    "Follow-Up Support"
                ]
            }
        }
    },
    {
        id: "accessibility-audit",
        slug: "accessibility-audit",
        category: "consulting",
        title: {
            en: "Web Accessibility Audit (WCAG)",
            da: "بررسی دسترسی‌پذیری وب (WCAG)",
            pa: "د ویب لاسرسي وړتیا پلټنه (WCAG)"
        },
        shortDesc: {
            en: "Make your website usable for people with disabilities, following WCAG",
            da: "وب‌سایت خود را برای افراد دارای معلولیت، مطابق WCAG، قابل استفاده بسازید",
            pa: "خپله ویب پاڼه د معلولیت لرونکو کسانو لپاره د WCAG سره سم د کارولو وړ کړئ"
        },
        description: {
            en: "We check your website against the WCAG 2.2 guidelines using automated tools and manual testing with keyboard-only navigation and screen readers, including how right-to-left Dari and Pashto content is read aloud. You receive a prioritized list of issues — such as low contrast, missing image descriptions and unlabeled forms — with clear fixes, and we can make the fixes for you.",
            da: "ما وب‌سایت شما را بر اساس رهنمودهای WCAG 2.2 با ابزارهای خودکار و تست دستی با پیمایش فقط با کیبورد و صفحه‌خوان‌ها بررسی می‌کنیم، شامل اینکه محتوای راست‌به‌چپ دری و پشتو چگونه خوانده می‌شود. شما یک لیست اولویت‌بندی‌شده از مشکلات — مانند کنتراست کم، نبود توضیح تصاویر و فورم‌های بدون برچسب — با راه‌حل‌های روشن دریافت می‌کنید، و ما می‌توانیم اصلاحات را برای شما انجام دهیم.",
            pa: "موږ ستاسو ویب پاڼه د WCAG 2.2 لارښوونو له مخې د اتوماتو وسیلو او لاسي ازموینې سره ګورو، چې یوازې د کیبورډ په مرسته ګرځیدل او سکرین ریډرونه پکې شامل دي، او دا هم چې د ښي څخه کیڼ ته پښتو او دري محتوا څنګه لوستل کیږي. تاسو د ستونزو یو لومړیتوب لرونکی لیست — لکه ټیټ کنټراسټ، د انځورونو نشتوالی تشریح او بې لیبله فورمې — د روښانه حلونو سره ترلاسه کوئ، او موږ کولی شو سمونې ستاسو لپاره ترسره کړو."
        },
        features: [
            "WCAG 2.2 Review",
            "Screen Reader Testing",
            "Keyboard Navigation Testing",
            "Prioritized Issues Report",
            "RTL Dari & Pashto Checks",
            "Color Contrast Review",
            "Form & Image Accessibility",
            "Fix Implementation Option"
        ],
        pricing: {
            basic: {
                name: "Quick Check",
                price: "AFN 6,000",
                features: [
                    "Up to 5 Key Pages",
                    "Automated Scan",
                    "Manual Spot Checks",
                    "Summary of Main Issues"
                ]
            },
            professional: {
                name: "Full Audit",
                price: "AFN 20,000",
                features: [
                    "Up to 20 Pages",
                    "WCAG 2.2 AA Review",
                    "Screen Reader & Keyboard Testing",
                    "Prioritized Issues Report",
                    "Fix Guidance for Developers",
                    "Retest After Fixes"
                ]
            },
            enterprise: {
                name: "Audit + Fixes",
                price: "AFN 45,000+",
                features: [
                    "Full Site or Web App",
                    "Complete WCAG 2.2 AA Review",
                    "We Implement the Fixes",
                    "Accessibility Statement",
                    "Developer Training",
                    "Final Verification Report"
                ]
            }
        }
    }
];

export default services;
