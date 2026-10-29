const services = [
    {
        id: "cctv-installation",
        slug: "cctv-installation",
        category: "cloud",
        title: {
            en: "CCTV Installation & Remote Viewing",
            da: "نصب کمره‌های مداربسته و نظارت از راه دور",
            pa: "د CCTV کمرو لګول او له لرې کتل"
        },
        shortDesc: {
            en: "Watch your shop or office cameras securely from your phone, anywhere",
            da: "کمره‌های دکان یا دفتر خود را از هر جا و به‌طور امن روی موبایل ببینید",
            pa: "د خپل دوکان یا دفتر کمرې له هر ځایه په خوندي ډول په موبایل کې وګورئ"
        },
        description: {
            en: "We plan your camera layout and set up secure remote viewing, recording schedules and user access, so owners in Kabul or abroad can check their premises from a phone. Cameras, recorders and physical installation are supplied through our installation partners; we handle the planning, network configuration and the viewing setup, and tune it to work over slow connections.",
            da: "ما نقشه جای‌گذاری کمره‌ها را آماده می‌کنیم و نظارت امن از راه دور، زمان‌بندی ثبت ویدیو و دسترسی کاربران را تنظیم می‌کنیم تا مالکان در کابل یا خارج از کشور بتوانند محل کار خود را از موبایل ببینند. کمره، دستگاه ثبت و نصب فزیکی از طریق شرکای نصب ما فراهم می‌شود؛ برنامه‌ریزی، تنظیم شبکه و راه‌اندازی نظارت را ما انجام می‌دهیم و آن را برای انترنت کند تنظیم می‌کنیم.",
            pa: "موږ د کمرو د ځای پر ځای کولو نقشه چمتو کوو او له لرې خوندي کتل، د ثبت مهال‌ویش او د کاروونکو لاسرسی تنظیموو، څو مالکان په کابل یا بهر کې د خپل کار ځای له موبایل څخه وګوري. کمرې، د ثبت وسایل او فزیکي لګول زموږ د نصب له شریکانو له لارې برابریږي؛ پلان، د شبکې تنظیم او د کتلو جوړول موږ کوو او د ورو انټرنټ لپاره یې برابروو."
        },
        features: [
            "Camera Layout Planning",
            "Mobile Remote Viewing",
            "Recording & Retention Setup",
            "Multi-User Access Control",
            "Hardware & Installation via Partners",
            "Low-Bandwidth Stream Settings",
            "Motion Alerts to Phone",
            "Staff Handover Training"
        ],
        pricing: {
            basic: {
                name: "Remote View",
                price: "AFN 6,000",
                features: [
                    "Existing System, Up to 8 Cameras",
                    "Mobile App Remote Viewing",
                    "Password & Access Hardening",
                    "Recording Schedule Setup",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "New Site",
                price: "AFN 18,000",
                features: [
                    "Site Survey & Camera Plan",
                    "Up to 16 Cameras Configured",
                    "Installation Coordinated with Partner",
                    "Remote Viewing for Several Users",
                    "Motion Alerts",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Site",
                price: "Custom",
                features: [
                    "Several Branches in One View",
                    "Separate Camera Network (VLAN)",
                    "Role-Based Access per Branch",
                    "Off-Site Backup of Key Footage",
                    "Partner Hardware Sourcing",
                    "Ongoing Maintenance Plan"
                ]
            }
        }
    },
    {
        id: "cdn-setup",
        slug: "cdn-setup",
        category: "cloud",
        title: {
            en: "CDN Setup",
            da: "راه‌اندازی CDN",
            pa: "د CDN جوړول"
        },
        shortDesc: {
            en: "Faster pages for visitors in Afghanistan and the diaspora alike",
            da: "صفحات سریع‌تر برای بازدیدکنندگان در افغانستان و خارج از کشور",
            pa: "په افغانستان او بهر کې د لیدونکو لپاره چټکې پاڼې"
        },
        description: {
            en: "We put your website behind a content delivery network such as Cloudflare or BunnyCDN, so images, scripts and pages are served from locations close to each visitor. We configure caching rules, image compression and HTTPS, and test load times from Kabul and from typical diaspora locations before and after the change.",
            da: "ما ویب‌سایت شما را پشت یک شبکه توزیع محتوا مانند Cloudflare یا BunnyCDN قرار می‌دهیم تا عکس‌ها، اسکریپت‌ها و صفحات از نزدیک‌ترین محل به هر بازدیدکننده ارائه شوند. قوانین کش، فشرده‌سازی عکس و HTTPS را تنظیم می‌کنیم و سرعت بارگذاری را پیش و پس از تغییر از کابل و از کشورهای محل زندگی مهاجرین آزمایش می‌کنیم.",
            pa: "موږ ستاسو ویب پاڼه د Cloudflare یا BunnyCDN په څېر د منځپانګې د وېش شبکې شاته ږدو، څو انځورونه، سکرېپټونه او پاڼې هر لیدونکي ته له نږدې ځای څخه ورسیږي. د کش قواعد، د انځورونو کمپرس او HTTPS تنظیموو، او د بدلون نه مخکې او وروسته له کابل او د کډوالو له عامو هېوادونو څخه د پاڼې سرعت ازمویو."
        },
        features: [
            "Cloudflare / BunnyCDN Setup",
            "Caching Rules Tuned per Page",
            "Image Compression & WebP",
            "Free HTTPS Certificates",
            "Before/After Speed Testing",
            "DNS Migration Without Downtime",
            "Basic Bot & Attack Filtering",
            "Cache Purge Training"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 5,000",
                features: [
                    "One Website",
                    "Free-Tier CDN Setup",
                    "DNS & HTTPS Configuration",
                    "Standard Caching Rules",
                    "Speed Test Report"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 12,000",
                features: [
                    "Up to 3 Websites",
                    "Custom Caching per Page Type",
                    "Image Optimization & WebP",
                    "Firewall Rules for Bots",
                    "Before/After Speed Report",
                    "1 Month Support"
                ]
            },
            enterprise: {
                name: "Advanced",
                price: "AFN 25,000+",
                features: [
                    "Web Apps & APIs Behind CDN",
                    "Video & Large File Delivery",
                    "Cache Rules for Logged-In Users",
                    "Multi-Region Origin Setup",
                    "Monitoring & Alerts",
                    "3 Months Support"
                ]
            }
        }
    },
    {
        id: "it-policy-documentation",
        slug: "it-policy-documentation",
        category: "cloud",
        title: {
            en: "IT Policy & Procedure Documentation",
            da: "تهیه پالیسی‌ها و طرزالعمل‌های IT",
            pa: "د IT پالیسیو او کړنلارو لیکل"
        },
        shortDesc: {
            en: "Clear IT rules your staff can actually follow, in their own language",
            da: "قوانین روشن IT که کارمندان به زبان خودشان واقعاً دنبال کنند",
            pa: "د IT روښانه قواعد چې کارکوونکي یې په خپله ژبه پلي کولی شي"
        },
        description: {
            en: "We write the practical IT documents most organisations are missing: acceptable use, passwords, backups, device handling, onboarding and offboarding, and what to do when something goes wrong. Each policy is short, matched to how your team really works, and can be delivered in English, Dari and Pashto so every staff member can read it.",
            da: "ما اسناد عملی IT را که بیشتر نهادها ندارند می‌نویسیم: استفاده مجاز، رمزها، بکاپ، نگهداری دستگاه‌ها، شروع و ختم کار کارمندان، و اقدامات هنگام بروز مشکل. هر پالیسی کوتاه است، با شیوه واقعی کار تیم شما مطابقت دارد و می‌تواند به انگلیسی، دری و پشتو ارائه شود تا هر کارمند آن را بخواند.",
            pa: "موږ هغه عملي IT اسناد لیکو چې ډیری ادارې یې نه لري: مجاز کارونه، پاسورډونه، بیک‌اپ، د وسایلو ساتنه، د کارکوونکو پیل او پای، او د ستونزې پر مهال څه وکړو. هره پالیسي لنډه ده، ستاسو د ټیم د اصلي کار له طریقې سره سمون لري، او په انګلیسي، دري او پښتو برابریدای شي څو هر کارکوونکی یې ولولي."
        },
        features: [
            "Acceptable Use Policy",
            "Password & Account Policy",
            "Backup & Recovery Procedures",
            "Staff Onboarding/Offboarding Checklists",
            "Device & Laptop Handling Rules",
            "Incident Response Steps",
            "English, Dari & Pashto Versions",
            "Staff Briefing Session"
        ],
        pricing: {
            basic: {
                name: "Essentials",
                price: "AFN 10,000",
                features: [
                    "3 Core Policies",
                    "Short Interview with Your Team",
                    "One Language",
                    "Editable Word/Google Docs Files",
                    "One Revision Round"
                ]
            },
            professional: {
                name: "Complete Set",
                price: "AFN 25,000",
                features: [
                    "Up to 8 Policies & Procedures",
                    "Current Setup Review",
                    "Two Languages",
                    "Onboarding/Offboarding Checklists",
                    "Staff Briefing Session",
                    "Two Revision Rounds"
                ]
            },
            enterprise: {
                name: "Organisation-Wide",
                price: "AFN 45,000+",
                features: [
                    "Full Policy Framework",
                    "Aligned to Donor or Partner Requirements",
                    "English, Dari & Pashto",
                    "Incident Response Playbook",
                    "Training for Managers",
                    "Annual Review & Update"
                ]
            }
        }
    },
    {
        id: "face-recognition-access",
        slug: "face-recognition-access",
        category: "security",
        title: {
            en: "Face Recognition Access Control",
            da: "کنترول ورود با تشخیص چهره",
            pa: "د مخ پېژندنې له لارې د ننوتو کنټرول"
        },
        shortDesc: {
            en: "Door access and staff attendance by face, with records you control",
            da: "ورود به دروازه و حاضری کارمندان با چهره، با سوابقی در اختیار شما",
            pa: "د مخ په واسطه دروازې ته ننوتل او حاضري، د ستاسو په واک کې ریکارډ سره"
        },
        description: {
            en: "We build and configure the software side of face-recognition entry: enrolling staff, setting who can open which door and when, and connecting entry logs to attendance or payroll reports. Terminals, locks and installation come through our hardware partners. We set up clear consent for staff and keep face data on systems you own, not on a third-party service you can't inspect.",
            da: "ما بخش نرم‌افزاری ورود با تشخیص چهره را می‌سازیم و تنظیم می‌کنیم: ثبت کارمندان، تعیین اینکه چه کسی کدام دروازه را در چه زمانی باز کند، و وصل کردن سوابق ورود به گزارش‌های حاضری یا معاش. دستگاه‌ها، قفل‌ها و نصب از طریق شرکای سخت‌افزاری ما فراهم می‌شود. برای کارمندان رضایت‌نامه روشن تنظیم می‌کنیم و معلومات چهره را روی سیستم‌های متعلق به خود شما نگه می‌داریم.",
            pa: "موږ د مخ پېژندنې د ننوتو سافټویري برخه جوړوو او تنظیموو: د کارکوونکو ثبت، دا ټاکل چې څوک کومه دروازه په کوم وخت پرانیستلی شي، او د ننوتو ریکارډ له حاضرۍ یا معاش راپورونو سره نښلول. وسایل، قلفونه او لګول زموږ د هارډویر شریکانو له لارې برابریږي. د کارکوونکو لپاره روښانه رضایت تنظیموو او د مخ معلومات ستاسو په خپلو سیسټمونو کې ساتو."
        },
        features: [
            "Staff Face Enrollment",
            "Door Access Rules by Time & Role",
            "Attendance Reports from Entry Logs",
            "Terminals & Locks via Partners",
            "Payroll / HR System Export",
            "Visitor Temporary Access",
            "Staff Consent & Data Policy",
            "Data Kept on Your Own Systems"
        ],
        pricing: {
            basic: {
                name: "Single Door",
                price: "AFN 25,000",
                features: [
                    "1 Entry Point",
                    "Up to 50 Staff Enrolled",
                    "Daily Attendance Report",
                    "Consent Form Template",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Office",
                price: "AFN 50,000",
                features: [
                    "Up to 5 Entry Points",
                    "Up to 200 Staff",
                    "Time & Role-Based Door Rules",
                    "Attendance Export to Excel/HR",
                    "Visitor Access Module",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Site",
                price: "Custom",
                features: [
                    "Multiple Branches, One Dashboard",
                    "Integration with Payroll System",
                    "Offline Operation When Internet Drops",
                    "Admin Audit Logs",
                    "Partner Hardware Coordination",
                    "Annual Maintenance Plan"
                ]
            }
        }
    },
    {
        id: "security-awareness-training",
        slug: "security-awareness-training",
        category: "security",
        title: {
            en: "Cybersecurity Awareness Training",
            da: "آموزش آگاهی از امنیت سایبری",
            pa: "د سایبري امنیت د پوهاوي روزنه"
        },
        shortDesc: {
            en: "Teach staff to spot scams, phishing and fake messages before they click",
            da: "به کارمندان یاد دهید کلاه‌برداری و پیام‌های جعلی را پیش از کلیک بشناسند",
            pa: "کارکوونکو ته وښیئ چې درغلۍ او جعلي پیغامونه د کلیک نه مخکې وپېژني"
        },
        description: {
            en: "Most breaches start with a person, not a server. We run practical sessions in Dari, Pashto or English using examples staff actually see: fake WhatsApp and Facebook messages, hijacked accounts, phishing emails and phone scams. Sessions can be followed by a simulated phishing test so you can see what improved.",
            da: "بیشتر رخنه‌ها از یک انسان شروع می‌شود، نه از سرور. ما جلسات عملی به دری، پشتو یا انگلیسی با نمونه‌هایی برگزار می‌کنیم که کارمندان واقعاً می‌بینند: پیام‌های جعلی واتس‌اپ و فیسبوک، حساب‌های هک‌شده، ایمیل‌های فیشینگ و کلاه‌برداری تلفونی. پس از جلسات می‌توان یک آزمون فیشینگ شبیه‌سازی‌شده انجام داد تا پیشرفت را ببینید.",
            pa: "ډیری نقضونه له یو انسان څخه پیلیږي، نه له سرور څخه. موږ په دري، پښتو یا انګلیسي عملي غونډې د هغو بېلګو سره جوړوو چې کارکوونکي یې په رښتیا ویني: د واټس‌اپ او فیسبوک جعلي پیغامونه، هک شوي حسابونه، فیشینګ بریښنالیکونه او د تلیفون درغلۍ. له غونډو وروسته د فیشینګ یوه ازمایښتي ازموینه کیدای شي څو پرمختګ وګورئ."
        },
        features: [
            "Sessions in Dari, Pashto or English",
            "Real Local Scam Examples",
            "Phishing Email Recognition",
            "Social Media Account Protection",
            "Simulated Phishing Test",
            "Password & 2FA Habits",
            "Printable Staff Cheat Sheet",
            "Follow-Up Results Report"
        ],
        pricing: {
            basic: {
                name: "Single Session",
                price: "AFN 8,000",
                features: [
                    "One 2-Hour Session",
                    "Up to 15 Staff",
                    "In-Person in Kabul or Online",
                    "Printable Cheat Sheet",
                    "Q&A Time"
                ]
            },
            professional: {
                name: "Programme",
                price: "AFN 20,000",
                features: [
                    "Three Sessions Over a Month",
                    "Up to 40 Staff",
                    "Simulated Phishing Test",
                    "Results Report for Management",
                    "Separate Session for Managers",
                    "Printed & Digital Materials"
                ]
            },
            enterprise: {
                name: "Ongoing",
                price: "AFN 40,000+",
                features: [
                    "Quarterly Sessions for a Year",
                    "Unlimited Staff",
                    "Regular Phishing Simulations",
                    "Onboarding Module for New Hires",
                    "Progress Tracking per Department",
                    "Incident Reporting Process Setup"
                ]
            }
        }
    },
    {
        id: "secure-remote-access",
        slug: "secure-remote-access",
        category: "security",
        title: {
            en: "VPN & Secure Remote Access",
            da: "VPN و دسترسی امن از راه دور",
            pa: "VPN او له لرې خوندي لاسرسی"
        },
        shortDesc: {
            en: "Let staff reach office systems safely from home, branches or abroad",
            da: "کارمندان از خانه، شعبه یا خارج به‌طور امن به سیستم‌های دفتر وصل شوند",
            pa: "کارکوونکي دې له کوره، څانګو یا بهر څخه په خوندي ډول د دفتر سیسټمونو ته ورسیږي"
        },
        description: {
            en: "We set up private, encrypted access to your office files, accounting software and internal systems using tools like WireGuard or OpenVPN, instead of risky shortcuts such as open remote-desktop ports. Each person gets their own access that can be revoked when they leave, and connections are tuned to stay stable on mobile data and weak links.",
            da: "ما دسترسی خصوصی و رمزگذاری‌شده به فایل‌های دفتر، نرم‌افزار حسابداری و سیستم‌های داخلی شما را با ابزارهایی مثل WireGuard یا OpenVPN تنظیم می‌کنیم، به جای راه‌های پرخطر مانند باز گذاشتن پورت ریموت دسکتاپ. هر شخص دسترسی جداگانه دارد که هنگام ترک کار قطع می‌شود، و اتصال‌ها طوری تنظیم می‌شوند که روی انترنت موبایل و ارتباط ضعیف پایدار بمانند.",
            pa: "موږ ستاسو د دفتر فایلونو، حسابدارۍ سافټویر او داخلي سیسټمونو ته خصوصي او کوډ شوی لاسرسی د WireGuard یا OpenVPN په څېر وسیلو سره جوړوو، د خطرناکو لارو پر ځای لکه د ریموټ ډیسکټاپ خلاص پورټونه. هر کس ځانګړی لاسرسی لري چې د وتلو پر مهال لغوه کیدای شي، او اتصالونه داسې برابریږي چې په موبایل انټرنټ او کمزورو لینکونو ثابت پاتې شي."
        },
        features: [
            "WireGuard / OpenVPN Setup",
            "Individual Staff Access Keys",
            "Instant Access Revocation",
            "Branch-to-Office Links",
            "Stable on Mobile Data",
            "Closing Exposed Remote Desktop Ports",
            "Access Logs",
            "Setup Guides for Staff Devices"
        ],
        pricing: {
            basic: {
                name: "Small Team",
                price: "AFN 10,000",
                features: [
                    "Up to 10 Users",
                    "One Office Network",
                    "Windows, Android & iPhone Setup",
                    "Staff Setup Guide",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 22,000",
                features: [
                    "Up to 40 Users",
                    "Access Limited by Role",
                    "Two-Factor Login",
                    "Access Logs",
                    "Exposed Port Review & Closure",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Branch",
                price: "AFN 40,000+",
                features: [
                    "Site-to-Site Links Between Branches",
                    "Unlimited Users",
                    "Central User Management",
                    "Failover When a Link Drops",
                    "Monitoring & Alerts",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "ddos-protection",
        slug: "ddos-protection",
        category: "security",
        title: {
            en: "DDoS Protection",
            da: "محافظت در برابر حملات DDoS",
            pa: "د DDoS بریدونو په وړاندې ساتنه"
        },
        shortDesc: {
            en: "Keep your website and APIs online when someone floods them with traffic",
            da: "ویب‌سایت و API خود را هنگام سیل ترافیک مهاجم آنلاین نگه دارید",
            pa: "خپله ویب پاڼه او API د برید کوونکي ټرافیک پر وړاندې آنلاین وساتئ"
        },
        description: {
            en: "We place your website, app backend and APIs behind a protection service such as Cloudflare, hide your real server address, and set rate limits and firewall rules for the pages attackers target most, like login and search. We also prepare a short plan for what to do during an attack. Protection service fees, where a paid plan is needed, are billed by the provider directly to you.",
            da: "ما ویب‌سایت، بک‌اند اپ و API شما را پشت یک سرویس محافظتی مانند Cloudflare قرار می‌دهیم، آدرس واقعی سرور را پنهان می‌کنیم، و برای صفحاتی که بیشتر هدف حمله‌اند مانند ورود و جستجو محدودیت درخواست و قوانین فایروال تنظیم می‌کنیم. یک پلان کوتاه برای زمان حمله نیز آماده می‌کنیم. اگر پلان پولی لازم باشد، فیس آن مستقیماً توسط ارائه‌کننده از شما گرفته می‌شود.",
            pa: "موږ ستاسو ویب پاڼه، د اپ بیک‌اېنډ او API د Cloudflare په څېر د ساتنې خدمت شاته ږدو، د سرور اصلي پته پټوو، او د هغو پاڼو لپاره چې ډیر برید پرې کیږي لکه ننوتل او لټون، د غوښتنو محدودیت او د فایروال قواعد ټاکو. د برید پر مهال لپاره یو لنډ پلان هم چمتو کوو. که پیسې لرونکی پلان اړین وي، فیس یې مستقیم د خدمت وړاندې کوونکي له خوا ستاسو نه اخیستل کیږي."
        },
        features: [
            "Cloudflare or Similar Protection",
            "Origin Server IP Hiding",
            "Rate Limiting on Login & Forms",
            "Web Application Firewall Rules",
            "Bot Traffic Filtering",
            "Attack Response Plan",
            "Traffic Monitoring & Alerts",
            "Provider Fees Billed Directly"
        ],
        pricing: {
            basic: {
                name: "Website",
                price: "AFN 6,000",
                features: [
                    "One Website",
                    "Protection Service Setup",
                    "Origin IP Hidden",
                    "Basic Firewall Rules",
                    "Short Response Checklist"
                ]
            },
            professional: {
                name: "App & API",
                price: "AFN 15,000",
                features: [
                    "Website plus API/Backend",
                    "Rate Limits on Sensitive Endpoints",
                    "Custom Firewall Rules",
                    "Bot Filtering",
                    "Monitoring Alerts",
                    "1 Month Support"
                ]
            },
            enterprise: {
                name: "Critical Services",
                price: "AFN 30,000+",
                features: [
                    "Multiple Domains & Services",
                    "Server Hardening Review",
                    "Detailed Attack Response Plan",
                    "Load Testing of Defences",
                    "On-Call Help During Attacks",
                    "3 Months Support"
                ]
            }
        }
    },
    {
        id: "firewall-setup",
        slug: "firewall-setup",
        category: "security",
        title: {
            en: "Firewall Setup & Configuration",
            da: "نصب و تنظیم فایروال",
            pa: "د فایروال جوړول او تنظیمول"
        },
        shortDesc: {
            en: "Control what comes in and out of your office network and servers",
            da: "کنترول کنید چه چیزی وارد و خارج شبکه دفتر و سرورهای شما می‌شود",
            pa: "کنټرول کړئ چې ستاسو د دفتر شبکې او سرورونو ته څه ننوځي او وځي"
        },
        description: {
            en: "We configure firewalls for office networks and cloud servers: closing unused ports, separating guest Wi-Fi from staff systems, blocking unwanted traffic and logging what matters. We work with your existing router or firewall, or with equipment supplied through our hardware partners, and leave you with a written record of every rule and why it exists.",
            da: "ما فایروال‌ها را برای شبکه‌های دفتر و سرورهای کلاود تنظیم می‌کنیم: بستن پورت‌های بی‌استفاده، جدا کردن وای‌فای مهمانان از سیستم‌های کارمندان، مسدود کردن ترافیک ناخواسته و ثبت رویدادهای مهم. با روتر یا فایروال موجود شما یا تجهیزاتی که از طریق شرکای سخت‌افزاری ما فراهم می‌شود کار می‌کنیم، و برای هر قانون یک سند نوشتاری با دلیل آن به شما می‌دهیم.",
            pa: "موږ د دفتر شبکو او کلاوډ سرورونو لپاره فایروالونه تنظیموو: نه کارېدونکي پورټونه تړل، د میلمنو وای‌فای د کارکوونکو له سیسټمونو جلا کول، ناغوښتی ټرافیک بندول او مهمې پېښې ثبتول. ستاسو له موجوده روټر یا فایروال، یا زموږ د هارډویر شریکانو له لارې برابر شوو وسایلو سره کار کوو، او د هر قاعدې لیکلی ریکارډ له دلیل سره درکوو."
        },
        features: [
            "Office Network Firewall Rules",
            "Cloud Server Firewall Setup",
            "Guest Wi-Fi Separation",
            "Unused Port Closure",
            "Works with Existing Equipment",
            "Hardware via Partners if Needed",
            "Logging & Alerts",
            "Documented Rule Set"
        ],
        pricing: {
            basic: {
                name: "Office",
                price: "AFN 8,000",
                features: [
                    "One Office Router/Firewall",
                    "Port & Rule Clean-Up",
                    "Guest Wi-Fi Separation",
                    "Admin Password Hardening",
                    "Written Rule Summary"
                ]
            },
            professional: {
                name: "Office & Servers",
                price: "AFN 20,000",
                features: [
                    "Office Network plus Up to 3 Servers",
                    "Network Segments for Departments",
                    "Logging Setup",
                    "Remote Access Rules",
                    "Full Rule Documentation",
                    "1 Month Support"
                ]
            },
            enterprise: {
                name: "Multi-Site",
                price: "AFN 40,000+",
                features: [
                    "Several Offices & Cloud Servers",
                    "Central Firewall Management",
                    "Intrusion Alerting",
                    "Partner Hardware Sourcing",
                    "Quarterly Rule Review",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "mfa-rollout",
        slug: "mfa-rollout",
        category: "security",
        title: {
            en: "Two-Factor Authentication Rollout",
            da: "فعال‌سازی تأیید دومرحله‌ای",
            pa: "د دوه پړاوي تایید پلي کول"
        },
        shortDesc: {
            en: "Turn on two-step login for email, social and business accounts, team-wide",
            da: "ورود دومرحله‌ای برای ایمیل، شبکه‌های اجتماعی و حساب‌های کاری کل تیم",
            pa: "د ټول ټیم لپاره د بریښنالیک، ټولنیزو رسنیو او کاري حسابونو دوه پړاوي ننوتل"
        },
        description: {
            en: "A stolen password is the most common way business accounts are lost. We switch on two-factor authentication across email, Google Workspace or Microsoft 365, Facebook pages, WhatsApp Business, hosting and banking-portal logins, sit with each staff member to set it up, and store recovery codes safely so nobody gets locked out when they change phones.",
            da: "رمز دزدیده‌شده رایج‌ترین راه از دست رفتن حساب‌های کاری است. ما تأیید دومرحله‌ای را در ایمیل، Google Workspace یا Microsoft 365، صفحات فیسبوک، WhatsApp Business، هاستینگ و پورتال‌های بانکی فعال می‌کنیم، با هر کارمند برای تنظیم آن می‌نشینیم، و کودهای بازیابی را به‌طور امن نگه می‌داریم تا هنگام تبدیل موبایل کسی از حساب خود بیرون نماند.",
            pa: "غلا شوی پاسورډ د کاري حسابونو د له لاسه ورکولو تر ټولو عامه لار ده. موږ دوه پړاوی تایید په بریښنالیک، Google Workspace یا Microsoft 365، د فیسبوک پاڼو، WhatsApp Business، هوسټینګ او د بانکي پورټالونو په ننوتو کې فعالوو، له هر کارکوونکي سره یې د تنظیم لپاره کینو، او د بیا راګرځولو کوډونه خوندي ساتو څو د موبایل بدلولو پر مهال څوک له حساب نه بهر پاتې نشي."
        },
        features: [
            "Email & Workspace 2FA",
            "Facebook Page & Instagram Protection",
            "WhatsApp Business Two-Step PIN",
            "Authenticator App Setup",
            "One-on-One Staff Setup",
            "Secure Recovery Code Storage",
            "Lost Phone Procedure",
            "Shared Account Clean-Up"
        ],
        pricing: {
            basic: {
                name: "Small Team",
                price: "AFN 6,000",
                features: [
                    "Up to 10 Staff",
                    "Email & Social Accounts",
                    "Authenticator App Setup",
                    "Recovery Codes Stored Safely",
                    "Lost Phone Guide"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 15,000",
                features: [
                    "Up to 40 Staff",
                    "Workspace-Wide 2FA Enforcement",
                    "Hosting, Domain & Admin Logins",
                    "Shared Account Review",
                    "Staff Briefing Session",
                    "1 Month Support"
                ]
            },
            enterprise: {
                name: "Organisation",
                price: "AFN 30,000+",
                features: [
                    "Unlimited Staff",
                    "Hardware Security Keys for Admins",
                    "Single Sign-On Where Supported",
                    "Account Access Policy",
                    "Offboarding Procedure",
                    "3 Months Support"
                ]
            }
        }
    },
    {
        id: "field-data-collection",
        slug: "field-data-collection",
        category: "ai-data",
        title: {
            en: "Field Data Collection & Mobile Surveys",
            da: "جمع‌آوری معلومات میدانی و سروی‌های موبایلی",
            pa: "ساحوي معلومات راټولول او موبایلي سروې ګانې"
        },
        shortDesc: {
            en: "Offline mobile forms for surveys and field teams, synced when online",
            da: "فورم‌های موبایلی آفلاین برای سروی و تیم‌های میدانی، همگام‌سازی هنگام اتصال",
            pa: "د سروې او ساحوي ټیمونو لپاره آفلاین موبایلي فورمې، د انټرنټ پر مهال همغږي"
        },
        description: {
            en: "We build mobile data-collection forms using tools like KoboToolbox or ODK, or a custom app when needed, so enumerators can work offline in districts with no signal and upload when they reach a connection. Forms support Dari and Pashto, GPS, photos and skip logic, and the results flow into a dashboard or spreadsheet your team can use straight away.",
            da: "ما فورم‌های موبایلی جمع‌آوری معلومات را با ابزارهایی مانند KoboToolbox یا ODK، یا در صورت نیاز با اپ اختصاصی، می‌سازیم تا سروی‌کنندگان در ولسوالی‌های بدون شبکه آفلاین کار کنند و هنگام دسترسی به انترنت معلومات را بفرستند. فورم‌ها از دری و پشتو، GPS، عکس و منطق پرش پشتیبانی می‌کنند و نتایج به داشبورد یا جدولی می‌رود که تیم شما فوراً استفاده کند.",
            pa: "موږ د معلوماتو راټولولو موبایلي فورمې د KoboToolbox یا ODK په څېر وسیلو، یا د اړتیا پر مهال د ځانګړي اپ سره جوړوو، څو سروې کوونکي په هغو ولسوالیو کې چې شبکه نه لري آفلاین کار وکړي او د انټرنټ په موندلو معلومات ولېږي. فورمې د دري او پښتو، GPS، انځورونو او د ټوپ منطق ملاتړ کوي او پایلې یو ډشبورډ یا جدول ته ځي چې ستاسو ټیم یې سمدستي کارولی شي."
        },
        features: [
            "Works Fully Offline",
            "Dari & Pashto Forms",
            "GPS & Photo Capture",
            "Skip Logic & Validation",
            "KoboToolbox / ODK or Custom App",
            "Live Results Dashboard",
            "Enumerator Training",
            "Export to Excel, SPSS or CSV"
        ],
        pricing: {
            basic: {
                name: "Single Survey",
                price: "AFN 12,000",
                features: [
                    "One Form, Up to 60 Questions",
                    "Offline Mobile Collection",
                    "Dari or Pashto plus English",
                    "Excel/CSV Export",
                    "Remote Enumerator Briefing"
                ]
            },
            professional: {
                name: "Programme",
                price: "AFN 30,000",
                features: [
                    "Up to 5 Linked Forms",
                    "GPS, Photos & Signatures",
                    "Data Quality Checks",
                    "Results Dashboard",
                    "Enumerator Training Session",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Custom System",
                price: "Custom",
                features: [
                    "Custom Offline Mobile App",
                    "Case Management & Follow-Ups",
                    "Role-Based Data Access",
                    "Integration with Your Systems",
                    "Self-Hosted Server Option",
                    "Ongoing Support Plan"
                ]
            }
        }
    },
    {
        id: "customer-surveys",
        slug: "customer-surveys",
        category: "ai-data",
        title: {
            en: "Customer Surveys & Satisfaction Tracking",
            da: "سروی مشتریان و پیگیری رضایت",
            pa: "د پیرودونکو سروې او د رضایت تعقیب"
        },
        shortDesc: {
            en: "Hear from customers by link, QR or WhatsApp and track it over time",
            da: "نظر مشتریان را از طریق لینک، QR یا واتس‌اپ بگیرید و در طول زمان پیگیری کنید",
            pa: "د پیرودونکو نظر د لینک، QR یا واټس‌اپ له لارې واخلئ او په وخت سره یې تعقیب کړئ"
        },
        description: {
            en: "We design short customer surveys in Dari, Pashto and English and put them where customers already are: a QR code at the counter, a link after delivery, or a WhatsApp message. Responses feed a simple dashboard showing satisfaction scores, common complaints and trends by branch or month, with alerts when an unhappy customer needs a call back.",
            da: "ما سروی‌های کوتاه مشتریان را به دری، پشتو و انگلیسی دیزاین می‌کنیم و آن‌ها را جایی قرار می‌دهیم که مشتریان حضور دارند: کود QR روی میز، لینک پس از تحویل، یا پیام واتس‌اپ. پاسخ‌ها به یک داشبورد ساده می‌روند که نمره رضایت، شکایت‌های رایج و روندها را بر اساس شعبه یا ماه نشان می‌دهد، و هنگامی که مشتری ناراضی نیاز به تماس دارد هشدار می‌دهد.",
            pa: "موږ د پیرودونکو لنډې سروې ګانې په دري، پښتو او انګلیسي ډیزاینوو او هلته یې ږدو چې پیرودونکي شته: په مېز باندې QR کوډ، له سپارلو وروسته لینک، یا د واټس‌اپ پیغام. ځوابونه یو ساده ډشبورډ ته ځي چې د رضایت نمرې، عامې شکایتونه او د څانګې یا میاشتې له مخې رجحانونه ښیي، او کله چې ناراضه پیرودونکي ته زنګ ته اړتیا وي خبرتیا ورکوي."
        },
        features: [
            "Trilingual Survey Design",
            "QR Code, Link & WhatsApp Delivery",
            "Satisfaction Score Dashboard",
            "Unhappy Customer Alerts",
            "Results by Branch or Product",
            "Monthly Trend Reports",
            "Open Comment Summaries",
            "Export to Excel"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 7,000",
                features: [
                    "One Survey, Up to 10 Questions",
                    "Two Languages",
                    "QR Code & Link",
                    "Simple Results Sheet",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Tracking",
                price: "AFN 18,000",
                features: [
                    "Up to 3 Surveys",
                    "Dari, Pashto & English",
                    "Satisfaction Dashboard",
                    "Unhappy Customer Alerts",
                    "Monthly Summary Report",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Branch",
                price: "AFN 35,000+",
                features: [
                    "Unlimited Surveys",
                    "Comparison Across Branches",
                    "WhatsApp Survey Automation",
                    "Integration with CRM or POS",
                    "Quarterly Insight Review",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "ai-content-generation",
        slug: "ai-content-generation",
        category: "ai-data",
        title: {
            en: "AI Content Generation",
            da: "تولید محتوا با هوش مصنوعی",
            pa: "د مصنوعي ځیرکتیا په مرسته منځپانګه جوړول"
        },
        shortDesc: {
            en: "AI-drafted posts and product text, checked by people who speak the language",
            da: "پست‌ها و متن محصولات با هوش مصنوعی، بازبینی‌شده توسط افراد مسلط به زبان",
            pa: "د مصنوعي ځیرکتیا لیکل شوي پوسټونه او د محصول متن، د ژبې پوهانو له خوا کتل شوي"
        },
        description: {
            en: "We set up AI-assisted workflows that draft social posts, product descriptions, blog outlines and ad variations in your brand voice. AI output in Dari and Pashto is often awkward, so every piece is reviewed and corrected by a human editor before you see it. We can also set the workflow up inside your own team so they can generate drafts themselves.",
            da: "ما روند کاری با کمک هوش مصنوعی را تنظیم می‌کنیم که پست‌های شبکه‌های اجتماعی، توضیحات محصول، طرح مقاله و نسخه‌های مختلف اعلان را با لحن برند شما پیش‌نویس می‌کند. متن هوش مصنوعی به دری و پشتو اغلب نادرست است، بنابراین هر متن پیش از رسیدن به شما توسط یک ویراستار انسانی بازبینی و اصلاح می‌شود. همچنین می‌توانیم این روند را در تیم خودتان راه‌اندازی کنیم.",
            pa: "موږ د مصنوعي ځیرکتیا په مرسته داسې کاري بهیر جوړوو چې د ټولنیزو رسنیو پوسټونه، د محصول تشریحات، د مقالو طرحې او د اعلان بېلابېلې بڼې ستاسو د برانډ په لهجه لیکي. په دري او پښتو کې د مصنوعي ځیرکتیا متن اکثره نیمګړی وي، نو هره برخه تاسو ته د رسیدو نه مخکې د یو انساني اېډیټر له خوا کتل او سمیږي. دا بهیر ستاسو په خپل ټیم کې هم جوړولی شو."
        },
        features: [
            "Social Media Post Drafts",
            "Product Descriptions at Scale",
            "Brand Voice Prompt Library",
            "Human Review in Dari & Pashto",
            "Blog & Article Outlines",
            "Ad Copy Variations",
            "In-House Workflow Setup",
            "Monthly Content Calendar"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 6,000/mo",
                features: [
                    "20 Social Posts per Month",
                    "One Language plus English",
                    "Human-Edited Drafts",
                    "Monthly Content Calendar",
                    "One Revision Round"
                ]
            },
            professional: {
                name: "Growth",
                price: "AFN 14,000/mo",
                features: [
                    "40 Posts per Month",
                    "Dari, Pashto & English",
                    "Up to 50 Product Descriptions",
                    "Ad Copy Variations",
                    "Brand Voice Guide",
                    "Two Revision Rounds"
                ]
            },
            enterprise: {
                name: "In-House Setup",
                price: "AFN 25,000+/mo",
                features: [
                    "Custom AI Workflow for Your Team",
                    "Prompt Library & Templates",
                    "Bulk Catalogue Content",
                    "Staff Training",
                    "Ongoing Human Quality Review",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "speech-to-text",
        slug: "speech-to-text",
        category: "ai-data",
        title: {
            en: "Dari & Pashto Speech-to-Text",
            da: "تبدیل گفتار دری و پشتو به متن",
            pa: "د دري او پښتو غږ په متن اړول"
        },
        shortDesc: {
            en: "Turn Dari and Pashto recordings into searchable, editable text",
            da: "صداهای ضبط‌شده دری و پشتو را به متن قابل جستجو و ویرایش تبدیل کنید",
            pa: "د دري او پښتو ثبت شوي غږونه د لټون او سمون وړ متن ته واړوئ"
        },
        description: {
            en: "We build transcription workflows for interviews, call recordings, meetings and voice notes in Dari and Pashto, using current speech-recognition models with a human correction step. Accuracy depends heavily on audio quality, accents and background noise, so we start with a pilot on your own recordings and show you honest results before you commit to a larger setup.",
            da: "ما روند کاری برای تبدیل مصاحبه‌ها، تماس‌های ضبط‌شده، جلسات و پیام‌های صوتی دری و پشتو به متن می‌سازیم، با استفاده از مدل‌های فعلی تشخیص گفتار و یک مرحله اصلاح انسانی. دقت آن به کیفیت صدا، لهجه و سر و صدای پس‌زمینه بستگی زیاد دارد، پس با یک آزمایش روی صداهای خود شما شروع می‌کنیم و نتایج واقعی را پیش از تعهد به پروژه بزرگ‌تر نشان می‌دهیم.",
            pa: "موږ د دري او پښتو مرکو، ثبت شویو زنګونو، غونډو او غږیزو پیغامونو د متن کولو بهیرونه جوړوو، د غږ پېژندنې د اوسنیو ماډلونو او د انساني سمون د یو پړاو په کارولو سره. دقت یې ډیر د غږ په کیفیت، لهجو او شاوخوا شور پورې اړه لري، نو د ستاسو په خپلو ثبتونو یوه ازمایښتي پروژه پیلوو او د لویې پروژې نه مخکې ریښتینې پایلې درښیو."
        },
        features: [
            "Dari & Pashto Transcription",
            "Pilot on Your Own Recordings",
            "Human Correction Step",
            "Speaker Labels & Timestamps",
            "Subtitle Files (SRT)",
            "Batch Upload of Audio Files",
            "Searchable Transcript Archive",
            "Private Processing Options"
        ],
        pricing: {
            basic: {
                name: "Pilot",
                price: "AFN 10,000",
                features: [
                    "Up to 3 Hours of Audio",
                    "Machine Draft plus Human Check",
                    "Accuracy Report on Your Audio",
                    "Word & SRT Output",
                    "Recommendations for Next Steps"
                ]
            },
            professional: {
                name: "Workflow",
                price: "AFN 35,000",
                features: [
                    "Upload Portal for Your Team",
                    "Batch Transcription",
                    "Speaker Labels & Timestamps",
                    "Correction Editor",
                    "Searchable Archive",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Integrated",
                price: "Custom",
                features: [
                    "Call Centre or App Integration",
                    "API Access",
                    "Vocabulary Tuning for Your Field",
                    "Self-Hosted Option for Sensitive Audio",
                    "Volume-Based Processing",
                    "Ongoing Support Plan"
                ]
            }
        }
    },
    {
        id: "blockchain-development",
        slug: "blockchain-development",
        category: "ai-data",
        title: {
            en: "Blockchain & Smart Contracts",
            da: "بلاکچین و قراردادهای هوشمند",
            pa: "بلاکچین او هوښیار تړونونه"
        },
        shortDesc: {
            en: "Smart contracts and tamper-evident records, where blockchain truly fits",
            da: "قراردادهای هوشمند و سوابق غیرقابل دستکاری، جایی که بلاکچین واقعاً مناسب است",
            pa: "هوښیار تړونونه او د لاسوهنې پر وړاندې خوندي ریکارډونه، هلته چې بلاکچین ریښتیا وړ وي"
        },
        description: {
            en: "We start by checking whether blockchain actually solves your problem, because a regular database is often simpler and cheaper. Where it fits, such as tamper-evident certificates, supply-chain records or token logic, we write and test smart contracts and build the web or mobile app around them. We build the technology only; financial, legal and regulatory questions remain the client's responsibility.",
            da: "ما ابتدا بررسی می‌کنیم که آیا بلاکچین واقعاً مشکل شما را حل می‌کند، زیرا دیتابیس عادی اغلب ساده‌تر و ارزان‌تر است. جایی که مناسب باشد، مانند تصدیق‌نامه‌های غیرقابل دستکاری، سوابق زنجیره تأمین یا منطق توکن، قراردادهای هوشمند را می‌نویسیم و آزمایش می‌کنیم و اپ ویب یا موبایل را دور آن می‌سازیم. ما فقط تکنالوژی را می‌سازیم؛ مسائل مالی، حقوقی و مقرراتی مسئولیت مشتری است.",
            pa: "موږ لومړی ګورو چې آیا بلاکچین په رښتیا ستاسو ستونزه حل کوي، ځکه عادي ډیټابیس اکثره ساده او ارزانه وي. چېرې چې وړ وي، لکه د لاسوهنې پر وړاندې خوندي سندونه، د اکمالاتو ځنځیر ریکارډونه یا د ټوکن منطق، هوښیار تړونونه لیکو او ازمویو او د هغوی شاوخوا ویب یا موبایل اپ جوړوو. موږ یوازې ټیکنالوژي جوړوو؛ مالي، حقوقي او مقرراتي پوښتنې د پیرودونکي مسؤلیت دی."
        },
        features: [
            "Honest Fit Assessment First",
            "Smart Contract Development",
            "Automated Contract Testing",
            "Tamper-Evident Record Systems",
            "Web & Mobile App Front-Ends",
            "Wallet Integration",
            "Testnet Prototype Before Launch",
            "Third-Party Audit Coordination"
        ],
        pricing: {
            basic: {
                name: "Assessment & Prototype",
                price: "AFN 25,000",
                features: [
                    "Use-Case Fit Assessment",
                    "Architecture Recommendation",
                    "Simple Testnet Prototype",
                    "Written Findings Report",
                    "Cost Estimate for Full Build"
                ]
            },
            professional: {
                name: "Build",
                price: "AFN 70,000",
                features: [
                    "Production Smart Contracts",
                    "Automated Test Suite",
                    "Web Front-End",
                    "Wallet Connection",
                    "Deployment Support",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Platform",
                price: "Custom",
                features: [
                    "Multi-Contract Systems",
                    "Mobile & Web Apps",
                    "Admin Dashboard",
                    "External Security Audit Coordination",
                    "Integration with Existing Systems",
                    "Ongoing Maintenance"
                ]
            }
        }
    },
    {
        id: "recommendation-engine",
        slug: "recommendation-engine",
        category: "ai-data",
        title: {
            en: "Product Recommendation Engine",
            da: "سیستم پیشنهاد محصولات",
            pa: "د محصولاتو د وړاندیز سیسټم"
        },
        shortDesc: {
            en: "Show each shopper the products they are most likely to want next",
            da: "به هر خریدار محصولاتی را نشان دهید که احتمالاً بعداً می‌خواهد",
            pa: "هر پیرودونکي ته هغه محصولات وښیئ چې ډیر احتمال یې غواړي"
        },
        description: {
            en: "We add recommendations to your online store or app, such as \"customers also bought\", \"similar items\" and personalised picks on the home page, based on your own order and browsing data. We start with simple rules that work on small catalogues and move to machine-learning models once there is enough data, and we measure the effect with A/B tests rather than guesses.",
            da: "ما پیشنهادها را به فروشگاه آنلاین یا اپ شما اضافه می‌کنیم، مانند «مشتریان این را هم خریدند»، «اقلام مشابه» و انتخاب‌های شخصی در صفحه اصلی، بر اساس معلومات فرمایش و بازدید خود شما. با قوانین ساده که برای کتلاگ‌های کوچک کار می‌کنند شروع می‌کنیم و وقتی معلومات کافی جمع شد به مدل‌های یادگیری ماشینی می‌رویم، و اثر آن را با آزمایش A/B اندازه می‌گیریم نه با حدس.",
            pa: "موږ ستاسو آنلاین پلورنځي یا اپ ته وړاندیزونه ور زیاتوو، لکه «پیرودونکو دا هم اخیستي»، «ورته توکي» او په لومړۍ پاڼه کې شخصي انتخابونه، ستاسو د خپلو فرمایشونو او لیدنو معلوماتو پر بنسټ. له ساده قواعدو پیل کوو چې په کوچنیو کتلاګونو کار کوي او کله چې کافي معلومات راټول شي د ماشین زده‌کړې ماډلونو ته ځو، او اغېز یې د A/B ازموینو سره اندازه کوو، نه په اټکل."
        },
        features: [
            "\"Customers Also Bought\" Widgets",
            "Similar Product Suggestions",
            "Personalised Home Page Picks",
            "Works with Small Catalogues",
            "Email & Push Recommendations",
            "A/B Testing of Results",
            "WooCommerce, Shopify or Custom Stores",
            "Performance Dashboard"
        ],
        pricing: {
            basic: {
                name: "Rule-Based",
                price: "AFN 20,000",
                features: [
                    "Related & Similar Products",
                    "Best-Sellers by Category",
                    "Product Page Widget",
                    "Integration with One Store",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Personalised",
                price: "AFN 45,000",
                features: [
                    "Behaviour-Based Recommendations",
                    "Home Page & Cart Suggestions",
                    "Recommendation Emails",
                    "A/B Test Setup",
                    "Results Dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Machine Learning",
                price: "Custom",
                features: [
                    "Custom ML Model on Your Data",
                    "Real-Time API",
                    "Mobile App Integration",
                    "Regular Model Retraining",
                    "Multi-Store Support",
                    "Ongoing Optimisation"
                ]
            }
        }
    },
    {
        id: "ai-agents",
        slug: "ai-agents",
        category: "ai-data",
        title: {
            en: "Custom AI Agents",
            da: "ایجنت‌های هوش مصنوعی اختصاصی",
            pa: "ځانګړي د مصنوعي ځیرکتیا اېجنټان"
        },
        shortDesc: {
            en: "AI assistants that complete real tasks inside your own systems",
            da: "دستیاران هوش مصنوعی که کارهای واقعی را در سیستم‌های خود شما انجام می‌دهند",
            pa: "د مصنوعي ځیرکتیا مرستیالان چې ستاسو په خپلو سیسټمونو کې ریښتیني کارونه کوي"
        },
        description: {
            en: "We build AI agents that do more than chat: they look up orders, draft replies, fill forms, summarise documents and update records in your existing tools through their APIs. Each agent works within clear limits you set, asks a person to approve sensitive actions, and keeps a log of everything it did so you can check its work.",
            da: "ما ایجنت‌های هوش مصنوعی می‌سازیم که بیش از گفتگو کار می‌کنند: فرمایش‌ها را جستجو می‌کنند، پاسخ پیش‌نویس می‌کنند، فورم پر می‌کنند، اسناد را خلاصه می‌کنند و سوابق را در ابزارهای موجود شما از طریق API به‌روز می‌کنند. هر ایجنت در حدود روشنی که شما تعیین می‌کنید کار می‌کند، برای کارهای حساس از یک انسان تأیید می‌گیرد، و از همه کارهایش ثبت نگه می‌دارد تا بتوانید آن را بررسی کنید.",
            pa: "موږ د مصنوعي ځیرکتیا داسې اېجنټان جوړوو چې له خبرو اترو زیات کار کوي: فرمایشونه لټوي، ځوابونه لیکي، فورمې ډکوي، اسناد لنډوي او ستاسو په موجوده وسیلو کې د API له لارې ریکارډونه تازه کوي. هر اېجنټ د هغو روښانه پولو دننه کار کوي چې تاسو یې ټاکئ، د حساسو کارونو لپاره له یو انسان نه تایید غواړي، او د خپلو ټولو کارونو ثبت ساتي څو یې وڅېړئ."
        },
        features: [
            "Task Automation via Your APIs",
            "Document Summaries & Drafting",
            "Order & Record Lookups",
            "Human Approval for Sensitive Steps",
            "Full Action Logs",
            "Dari, Pashto & English Prompts",
            "WhatsApp, Web or Internal Interface",
            "Usage & Cost Monitoring"
        ],
        pricing: {
            basic: {
                name: "Single Task",
                price: "AFN 25,000",
                features: [
                    "One Well-Defined Task",
                    "Up to 2 System Connections",
                    "Approval Step for Actions",
                    "Action Log",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Team Assistant",
                price: "AFN 60,000",
                features: [
                    "Several Related Tasks",
                    "Up to 5 System Connections",
                    "Document & Knowledge Base Access",
                    "Web or WhatsApp Interface",
                    "Usage Dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Agent Platform",
                price: "Custom",
                features: [
                    "Multiple Coordinated Agents",
                    "Role-Based Permissions",
                    "Private Model Hosting Options",
                    "Evaluation & Testing Suite",
                    "Staff Training",
                    "Ongoing Improvement Plan"
                ]
            }
        }
    },
    {
        id: "computer-vision",
        slug: "computer-vision",
        category: "ai-data",
        title: {
            en: "Computer Vision Solutions",
            da: "راه‌حل‌های بینایی کمپیوتری",
            pa: "د کمپیوټري لید حلونه"
        },
        shortDesc: {
            en: "Software that reads images and video: counting, inspection, documents",
            da: "نرم‌افزاری که عکس و ویدیو را می‌خواند: شمارش، بازرسی، اسناد",
            pa: "سافټویر چې انځورونه او ویډیو لولي: شمېرنه، معاینه، اسناد"
        },
        description: {
            en: "We build software that extracts useful information from photos and camera feeds: counting people or vehicles, checking products for defects, reading forms and ID-style documents, or detecting when an area is occupied. Every project begins with a proof of concept on your own images to show real accuracy. Cameras and on-site hardware, if needed, are sourced through our partners.",
            da: "ما نرم‌افزاری می‌سازیم که از عکس‌ها و تصاویر کمره معلومات مفید استخراج می‌کند: شمارش افراد یا موترها، بررسی عیب محصولات، خواندن فورم‌ها و اسناد، یا تشخیص اشغال بودن یک محل. هر پروژه با یک نمونه آزمایشی روی عکس‌های خود شما شروع می‌شود تا دقت واقعی نشان داده شود. کمره و سخت‌افزار محلی، در صورت نیاز، از طریق شرکای ما فراهم می‌شود.",
            pa: "موږ داسې سافټویر جوړوو چې له انځورونو او د کمرې له تصویرونو ګټور معلومات راباسي: د خلکو یا موټرو شمېرل، د محصولاتو د عیب کتل، د فورمو او اسنادو لوستل، یا د یو ځای د نیول کېدو پېژندل. هره پروژه ستاسو په خپلو انځورونو د یوې ازمایښتي بېلګې سره پیلیږي څو ریښتینی دقت وښودل شي. کمرې او ځایي هارډویر، که اړین وي، زموږ د شریکانو له لارې برابریږي."
        },
        features: [
            "People & Vehicle Counting",
            "Product Defect Detection",
            "Document & Form Reading (OCR)",
            "Dari & Pashto Text Recognition",
            "Proof of Concept on Your Images",
            "Works with Existing Cameras",
            "Alerts & Reporting Dashboard",
            "Hardware via Partners if Needed"
        ],
        pricing: {
            basic: {
                name: "Proof of Concept",
                price: "AFN 30,000",
                features: [
                    "One Use Case",
                    "Tested on Your Sample Images",
                    "Accuracy Report",
                    "Demo Application",
                    "Plan & Estimate for Full Build"
                ]
            },
            professional: {
                name: "Production",
                price: "AFN 70,000",
                features: [
                    "Trained Model for Your Use Case",
                    "Web Dashboard & Reports",
                    "Integration with Existing Cameras",
                    "Alerts by Email or WhatsApp",
                    "Cloud or On-Site Deployment",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Site",
                price: "Custom",
                features: [
                    "Several Use Cases or Locations",
                    "Edge Devices via Partners",
                    "Offline Processing on Site",
                    "API for Your Systems",
                    "Model Retraining Plan",
                    "Ongoing Support"
                ]
            }
        }
    },
    {
        id: "social-listening",
        slug: "social-listening",
        category: "ai-data",
        title: {
            en: "Social Listening & Sentiment Analysis",
            da: "پایش شبکه‌های اجتماعی و تحلیل احساسات",
            pa: "د ټولنیزو رسنیو څارنه او د احساساتو تحلیل"
        },
        shortDesc: {
            en: "Know what people say about your brand online, in all three languages",
            da: "بدانید مردم آنلاین درباره برند شما به هر سه زبان چه می‌گویند",
            pa: "پوه شئ چې خلک آنلاین ستاسو د برانډ په اړه په دریو ژبو څه وايي"
        },
        description: {
            en: "We track public mentions of your brand, products and competitors on Facebook, Instagram, X, YouTube and news sites, and sort them by topic and tone. Automated sentiment tools are much weaker in Dari and Pashto than in English, so our analysts review the results before they reach your monthly report, and urgent complaints are flagged quickly.",
            da: "ما اشاره‌های عمومی به برند، محصولات و رقبای شما را در فیسبوک، انستاگرام، X، یوتیوب و سایت‌های خبری پیگیری می‌کنیم و بر اساس موضوع و لحن دسته‌بندی می‌کنیم. ابزارهای خودکار تحلیل احساسات در دری و پشتو بسیار ضعیف‌تر از انگلیسی هستند، بنابراین تحلیلگران ما نتایج را پیش از رسیدن به گزارش ماهانه بازبینی می‌کنند و شکایت‌های فوری به سرعت مشخص می‌شوند.",
            pa: "موږ ستاسو د برانډ، محصولاتو او سیالانو په اړه عامې یادونې په فیسبوک، انسټاګرام، X، یوټیوب او خبري سایټونو کې څارو او د موضوع او لهجې له مخې یې ډلبندي کوو. د احساساتو اتومات وسایل په دري او پښتو کې تر انګلیسي ډیر کمزوري دي، نو زموږ شنونکي پایلې د میاشتني راپور نه مخکې ګوري، او بیړني شکایتونه ژر په ګوته کیږي."
        },
        features: [
            "Brand & Competitor Mention Tracking",
            "Facebook, Instagram, X & YouTube",
            "Dari, Pashto & English Coverage",
            "Human-Checked Sentiment",
            "Urgent Complaint Alerts",
            "Topic & Trend Breakdown",
            "Monthly Insight Report",
            "Campaign Reaction Tracking"
        ],
        pricing: {
            basic: {
                name: "Brand Watch",
                price: "AFN 8,000/mo",
                features: [
                    "Your Brand Name & 3 Keywords",
                    "Main Social Platforms",
                    "Monthly Summary Report",
                    "Human-Checked Sentiment",
                    "Email Alerts for Spikes"
                ]
            },
            professional: {
                name: "Insight",
                price: "AFN 18,000/mo",
                features: [
                    "Brand, Products & 3 Competitors",
                    "Social plus News Sites",
                    "Topic & Trend Analysis",
                    "Urgent Complaint Alerts",
                    "Monthly Review Call",
                    "Campaign Reaction Reports"
                ]
            },
            enterprise: {
                name: "Full Monitoring",
                price: "AFN 30,000+/mo",
                features: [
                    "Unlimited Keywords",
                    "Live Dashboard",
                    "Weekly Reports",
                    "Crisis Response Support",
                    "Custom Topic Models",
                    "Dedicated Analyst"
                ]
            }
        }
    },
    {
        id: "sales-forecasting",
        slug: "sales-forecasting",
        category: "ai-data",
        title: {
            en: "Sales Forecasting",
            da: "پیش‌بینی فروش",
            pa: "د پلور وړاندوینه"
        },
        shortDesc: {
            en: "Estimate next month's demand from your own sales history",
            da: "تقاضای ماه آینده را از سوابق فروش خودتان تخمین بزنید",
            pa: "د راتلونکې میاشتې غوښتنه د خپل پلور له تاریخچې اټکل کړئ"
        },
        description: {
            en: "We build forecasting models from your sales, stock and calendar data, accounting for patterns that matter locally such as Ramadan, Eid, Nowruz, winter and school seasons. Forecasts come as ranges, not single numbers, and appear in a dashboard your team can use to plan stock and staffing. They are planning estimates, not financial advice, and we show how accurate past forecasts turned out.",
            da: "ما مدل‌های پیش‌بینی را از معلومات فروش، موجودی و تقویم شما می‌سازیم، با در نظر گرفتن الگوهای محلی مهم مانند رمضان، عید، نوروز، زمستان و فصل مکاتب. پیش‌بینی‌ها به شکل محدوده ارائه می‌شوند نه یک عدد، و در داشبوردی نمایش داده می‌شوند که تیم شما برای برنامه‌ریزی موجودی و کارمندان استفاده کند. این‌ها تخمین برای برنامه‌ریزی‌اند نه مشوره مالی، و ما نشان می‌دهیم پیش‌بینی‌های گذشته چقدر دقیق بوده‌اند.",
            pa: "موږ ستاسو د پلور، ګدام او کلیز له معلوماتو د وړاندوینې ماډلونه جوړوو، د هغو ځایي بڼو په پام کې نیولو سره لکه روژه، اختر، نوروز، ژمی او د ښوونځیو موسم. وړاندوینې د یوې لړۍ په بڼه وي نه یوه شمېره، او په یو ډشبورډ کې ښودل کیږي چې ستاسو ټیم یې د ګدام او کارکوونکو د پلان لپاره کاروي. دا د پلان اټکلونه دي نه مالي مشوره، او موږ ښیو چې تېرې وړاندوینې څومره دقیقې وې."
        },
        features: [
            "Forecasts from Your Sales History",
            "Ramadan, Eid & Seasonal Patterns",
            "Ranges, Not Just Single Numbers",
            "Forecast by Product or Branch",
            "Stock Planning Dashboard",
            "Accuracy Tracking Over Time",
            "Excel, POS or ERP Data Import",
            "Monthly Model Refresh"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 15,000",
                features: [
                    "Up to 2 Years of Sales Data",
                    "Monthly Forecast by Category",
                    "Seasonal Pattern Analysis",
                    "Excel Report",
                    "Walkthrough Session"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 35,000",
                features: [
                    "Forecast by Product & Branch",
                    "Weekly Forecasts",
                    "Interactive Dashboard",
                    "Accuracy Tracking",
                    "Data Import from POS/ERP",
                    "3 Months of Model Updates"
                ]
            },
            enterprise: {
                name: "Integrated",
                price: "Custom",
                features: [
                    "Automated Daily Data Feed",
                    "Stock Reorder Suggestions",
                    "Promotion & Price Effects",
                    "Integration with Your ERP",
                    "Scenario Planning",
                    "Ongoing Model Maintenance"
                ]
            }
        }
    },
    {
        id: "data-warehouse",
        slug: "data-warehouse",
        category: "ai-data",
        title: {
            en: "Data Warehouse Setup",
            da: "راه‌اندازی انبار داده",
            pa: "د ډېټا ګودام جوړول"
        },
        shortDesc: {
            en: "Bring sales, accounts and app data into one place for reporting",
            da: "معلومات فروش، حسابات و اپ را برای گزارش‌دهی در یک جا جمع کنید",
            pa: "د پلور، حساباتو او اپ معلومات د راپور لپاره په یو ځای کې راټول کړئ"
        },
        description: {
            en: "When data is spread across Excel files, a POS, accounting software and an app, reports take days and numbers disagree. We set up a central data warehouse, using tools such as PostgreSQL, BigQuery or ClickHouse, with automated pipelines that pull from each source on a schedule, clean and join the data, and feed dashboards everyone reads from.",
            da: "وقتی معلومات در فایل‌های Excel، سیستم POS، نرم‌افزار حسابداری و اپ پراکنده باشد، گزارش‌ها روزها طول می‌کشد و اعداد با هم نمی‌خوانند. ما یک انبار داده مرکزی با ابزارهایی مانند PostgreSQL، BigQuery یا ClickHouse راه‌اندازی می‌کنیم، با پایپ‌لاین‌های خودکار که طبق زمان‌بندی از هر منبع معلومات می‌گیرند، آن را پاک و یکجا می‌کنند و به داشبوردهایی می‌فرستند که همه از آن استفاده می‌کنند.",
            pa: "کله چې معلومات په Excel فایلونو، POS سیسټم، د حسابدارۍ سافټویر او یو اپ کې خواره وي، راپورونه ورځې نیسي او شمېرې سره سمون نه خوري. موږ د PostgreSQL، BigQuery یا ClickHouse په څېر وسیلو سره یو مرکزي ډېټا ګودام جوړوو، د اتومات پایپ‌لاینونو سره چې د مهال‌ویش له مخې له هرې سرچینې معلومات راوړي، پاکوي یې او یو ځای کوي یې، او هغو ډشبورډونو ته یې لېږي چې ټول ترې کار اخلي."
        },
        features: [
            "Central Data Warehouse",
            "Automated Data Pipelines",
            "Excel, POS & Accounting Connectors",
            "Data Cleaning & Matching",
            "Dashboards on One Source of Truth",
            "Scheduled Refresh",
            "Access Control by Role",
            "Data Dictionary & Documentation"
        ],
        pricing: {
            basic: {
                name: "Foundation",
                price: "AFN 30,000",
                features: [
                    "Up to 3 Data Sources",
                    "Daily Automated Refresh",
                    "Cleaned Core Tables",
                    "One Reporting Dashboard",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 70,000",
                features: [
                    "Up to 8 Data Sources",
                    "Hourly or Daily Pipelines",
                    "Data Model for Sales, Finance & Ops",
                    "Up to 5 Dashboards",
                    "Role-Based Access",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Unlimited Sources",
                    "Near Real-Time Data",
                    "Data Quality Monitoring",
                    "Self-Hosted or Cloud Options",
                    "Analyst Training",
                    "Ongoing Data Engineering Support"
                ]
            }
        }
    },
    {
        id: "market-research",
        slug: "market-research",
        category: "consulting",
        title: {
            en: "Online Market Research",
            da: "تحقیق بازار آنلاین",
            pa: "آنلاین د بازار څېړنه"
        },
        shortDesc: {
            en: "Understand demand, competitors and prices before you invest",
            da: "پیش از سرمایه‌گذاری تقاضا، رقبا و قیمت‌ها را بشناسید",
            pa: "د پانګونې نه مخکې غوښتنه، سیالان او بیې وپېژنئ"
        },
        description: {
            en: "We research your market using online sources: competitor websites and social pages, pricing, search demand, reviews and public reports, plus online surveys or interviews with target customers in Afghanistan or the diaspora. You get a clear report on who your customers are, what competitors offer and where the gaps are, with sources listed so you can judge the evidence yourself.",
            da: "ما بازار شما را با استفاده از منابع آنلاین تحقیق می‌کنیم: ویب‌سایت‌ها و صفحات اجتماعی رقبا، قیمت‌ها، تقاضای جستجو، نظرات و گزارش‌های عمومی، همراه با سروی آنلاین یا مصاحبه با مشتریان هدف در افغانستان یا خارج از کشور. یک گزارش روشن دریافت می‌کنید درباره اینکه مشتریان شما کیستند، رقبا چه ارائه می‌کنند و خلاها کجاست، همراه با فهرست منابع تا خودتان شواهد را قضاوت کنید.",
            pa: "موږ ستاسو بازار د آنلاین سرچینو په کارولو څېړو: د سیالانو ویب پاڼې او ټولنیزې پاڼې، بیې، د لټون غوښتنه، نظرونه او عامه راپورونه، او په افغانستان یا بهر کې د هدف پیرودونکو سره آنلاین سروې یا مرکې. تاسو یو روښانه راپور ترلاسه کوئ چې ستاسو پیرودونکي څوک دي، سیالان څه وړاندې کوي او تشې چېرې دي، د سرچینو له لېست سره څو پخپله شواهد وارزوئ."
        },
        features: [
            "Competitor Website & Social Review",
            "Price Comparison",
            "Search Demand Analysis",
            "Online Customer Surveys",
            "Customer Interviews",
            "Diaspora Market Research",
            "Sourced, Written Report",
            "Findings Presentation"
        ],
        pricing: {
            basic: {
                name: "Snapshot",
                price: "AFN 12,000",
                features: [
                    "Up to 5 Competitors Reviewed",
                    "Price & Offer Comparison",
                    "Search Demand Overview",
                    "Short Written Report",
                    "1-Hour Findings Call"
                ]
            },
            professional: {
                name: "Standard",
                price: "AFN 28,000",
                features: [
                    "Up to 10 Competitors",
                    "Online Survey (Up to 200 Responses)",
                    "Customer Profile Summary",
                    "Gap & Opportunity Analysis",
                    "Full Written Report",
                    "Findings Presentation"
                ]
            },
            enterprise: {
                name: "In-Depth",
                price: "AFN 50,000+",
                features: [
                    "Multiple Segments or Regions",
                    "Larger Online Survey",
                    "Up to 10 Customer Interviews",
                    "Diaspora Market Coverage",
                    "Go-to-Market Recommendations",
                    "Follow-Up Workshop"
                ]
            }
        }
    },
    {
        id: "fractional-cto",
        slug: "fractional-cto",
        category: "consulting",
        title: {
            en: "Fractional CTO Service",
            da: "خدمات مدیر ارشد فناوری پاره‌وقت (CTO)",
            pa: "د نیم وخته CTO خدمت"
        },
        shortDesc: {
            en: "Senior tech leadership a few days a month, without a full-time hire",
            da: "رهبری ارشد فناوری چند روز در ماه، بدون استخدام تمام‌وقت",
            pa: "په میاشت کې څو ورځې لوړ پوړی ټیکنالوژیک رهبري، پرته له بشپړ وخته ګمارنې"
        },
        description: {
            en: "Many growing businesses need someone to make technology decisions but cannot yet justify a full-time CTO. Our fractional CTO joins your leadership for a set number of days each month to plan your technology roadmap, review vendors and developers' work, help hire and guide a tech team, and keep projects on budget.",
            da: "بسیاری از کسب‌وکارهای در حال رشد به کسی نیاز دارند که تصمیم‌های فناوری را بگیرد، اما هنوز توان استخدام یک CTO تمام‌وقت را ندارند. CTO پاره‌وقت ما برای تعداد معین روز در هر ماه به رهبری شما می‌پیوندد تا نقشه راه فناوری را برنامه‌ریزی کند، کار فروشندگان و پروگرامرها را بررسی کند، در استخدام و رهنمایی تیم فنی کمک کند و پروژه‌ها را در حدود بودجه نگه دارد.",
            pa: "ډیری وده کوونکي سوداګرۍ داسې چا ته اړتیا لري چې د ټیکنالوژۍ پرېکړې وکړي، خو لا د بشپړ وخته CTO توان نه لري. زموږ نیم وخته CTO په هره میاشت کې د ټاکلو ورځو لپاره ستاسو له مشرتابه سره یوځای کیږي څو د ټیکنالوژۍ نقشه پلان کړي، د پلورونکو او پروګرامرانو کار وڅېړي، د تخنیکي ټیم په ګمارلو او لارښوونه کې مرسته وکړي او پروژې د بودیجې دننه وساتي."
        },
        features: [
            "Technology Roadmap",
            "Vendor & Developer Review",
            "Tech Hiring Support",
            "Architecture Decisions",
            "Budget & Project Oversight",
            "Security & Backup Basics",
            "Board / Investor Tech Updates",
            "Remote or In-Person in Kabul"
        ],
        pricing: {
            basic: {
                name: "Advisor",
                price: "AFN 25,000/mo",
                features: [
                    "2 Days per Month",
                    "Monthly Strategy Session",
                    "Vendor & Quote Reviews",
                    "Chat Access for Quick Questions",
                    "3-Month Minimum"
                ]
            },
            professional: {
                name: "Part-Time CTO",
                price: "AFN 50,000/mo",
                features: [
                    "4-5 Days per Month",
                    "Technology Roadmap",
                    "Team Hiring & Guidance",
                    "Code & Architecture Reviews",
                    "Weekly Check-Ins",
                    "Leadership Meeting Attendance"
                ]
            },
            enterprise: {
                name: "Embedded",
                price: "Custom",
                features: [
                    "8+ Days per Month",
                    "Leads Tech Team Day-to-Day",
                    "Investor & Board Reporting",
                    "Security & Compliance Planning",
                    "Hand-Over to Permanent CTO",
                    "Flexible Engagement Terms"
                ]
            }
        }
    },
    {
        id: "software-selection",
        slug: "software-selection",
        category: "consulting",
        title: {
            en: "Software Selection Consulting",
            da: "مشاوره انتخاب نرم‌افزار",
            pa: "د سافټویر د انتخاب مشوره"
        },
        shortDesc: {
            en: "Choose the right accounting, POS, ERP or CRM before you pay for it",
            da: "پیش از پرداخت، نرم‌افزار درست حسابداری، POS، ERP یا CRM را انتخاب کنید",
            pa: "د پیسو ورکولو نه مخکې سم د حسابدارۍ، POS، ERP یا CRM سافټویر وټاکئ"
        },
        description: {
            en: "We help you pick software that fits how you work and what is realistic in Afghanistan: Dari and Pashto support, afghani currency, offline use, local payment options and whether the vendor can actually be paid and reached. We list your requirements, shortlist options, run demos with your team and compare total costs. We are vendor-neutral and take no commissions.",
            da: "ما به شما کمک می‌کنیم نرم‌افزاری انتخاب کنید که با شیوه کار شما و واقعیت‌های افغانستان بخواند: پشتیبانی دری و پشتو، پول افغانی، استفاده آفلاین، گزینه‌های پرداخت محلی، و اینکه آیا واقعاً می‌توان به فروشنده پول پرداخت و با او تماس گرفت. نیازهای شما را فهرست می‌کنیم، گزینه‌ها را محدود می‌کنیم، با تیم شما دمو می‌گیریم و هزینه کامل را مقایسه می‌کنیم. ما بی‌طرف هستیم و از هیچ فروشنده‌ای کمیشن نمی‌گیریم.",
            pa: "موږ مرسته کوو چې داسې سافټویر وټاکئ چې ستاسو د کار له طریقې او د افغانستان له واقعیتونو سره سمون ولري: د دري او پښتو ملاتړ، افغانۍ، آفلاین کارول، ځایي د تادیې لارې، او دا چې پلورونکي ته په رښتیا پیسې ورکول کیدای شي او اړیکه ورسره نیول کیدای شي. ستاسو اړتیاوې لیکو، انتخابونه لنډوو، ستاسو له ټیم سره ډیمو کوو او ټول لګښت پرتله کوو. موږ بې‌طرفه یو او له هیڅ پلورونکي کمیشن نه اخلو."
        },
        features: [
            "Requirements Workshop",
            "Vendor-Neutral Shortlist",
            "Dari/Pashto & Afghani Currency Check",
            "Offline & Local Payment Fit",
            "Guided Demos with Your Team",
            "Total Cost Comparison",
            "Contract & Data Export Checks",
            "Rollout Plan"
        ],
        pricing: {
            basic: {
                name: "Shortlist",
                price: "AFN 10,000",
                features: [
                    "One Software Category",
                    "Requirements Checklist",
                    "Shortlist of 3 Options",
                    "Comparison Table",
                    "Recommendation Call"
                ]
            },
            professional: {
                name: "Full Selection",
                price: "AFN 25,000",
                features: [
                    "Requirements Workshop",
                    "Up to 5 Vendors Evaluated",
                    "Guided Demos",
                    "Total Cost of Ownership Comparison",
                    "Written Recommendation",
                    "Rollout Plan"
                ]
            },
            enterprise: {
                name: "Selection & Rollout",
                price: "AFN 45,000+",
                features: [
                    "Several Systems or Departments",
                    "Vendor Negotiation Support",
                    "Data Migration Planning",
                    "Implementation Oversight",
                    "Staff Training Coordination",
                    "3 Months Follow-Up"
                ]
            }
        }
    },
    {
        id: "tech-due-diligence",
        slug: "tech-due-diligence",
        category: "consulting",
        title: {
            en: "Technical Due Diligence",
            da: "ارزیابی فنی پیش از سرمایه‌گذاری",
            pa: "د پانګونې نه مخکې تخنیکي ارزونه"
        },
        shortDesc: {
            en: "An independent look at a product's code and tech before you invest or buy",
            da: "بررسی مستقل کود و فناوری یک محصول پیش از سرمایه‌گذاری یا خرید",
            pa: "د پانګونې یا پیرلو نه مخکې د یو محصول د کوډ او ټیکنالوژۍ خپلواکه کتنه"
        },
        description: {
            en: "Before you invest in, acquire or take over a software product, we review what you are really getting: code quality, architecture, security, hosting costs, third-party dependencies, documentation and how much depends on one or two people. You receive a plain-language report with risks ranked by severity and rough costs to fix them. This is a technical assessment only, not legal or financial advice.",
            da: "پیش از اینکه در یک محصول نرم‌افزاری سرمایه‌گذاری کنید، آن را بخرید یا تحویل بگیرید، ما بررسی می‌کنیم که واقعاً چه چیزی دریافت می‌کنید: کیفیت کود، ساختار، امنیت، هزینه هاستینگ، وابستگی‌های بیرونی، اسناد، و اینکه چقدر به یک یا دو نفر وابسته است. گزارشی به زبان ساده با خطرات درجه‌بندی‌شده بر اساس شدت و هزینه تقریبی رفع آن‌ها دریافت می‌کنید. این تنها یک ارزیابی فنی است، نه مشوره حقوقی یا مالی.",
            pa: "مخکې له دې چې په یو سافټویري محصول کې پانګونه وکړئ، یې واخلئ یا یې تر لاسه کړئ، موږ ګورو چې په رښتیا څه ترلاسه کوئ: د کوډ کیفیت، جوړښت، امنیت، د هوسټینګ لګښت، بهرنۍ تړاوونه، اسناد، او دا چې څومره په یو یا دوو کسانو پورې تړلی دی. تاسو په ساده ژبه یو راپور ترلاسه کوئ چې خطرونه یې د شدت له مخې درجه‌بندي شوي او د سمولو اټکلي لګښت یې ښودل شوی. دا یوازې تخنیکي ارزونه ده، نه حقوقي یا مالي مشوره."
        },
        features: [
            "Code Quality Review",
            "Architecture & Scalability Assessment",
            "Security Review",
            "Hosting & Running Cost Analysis",
            "Third-Party Dependency Check",
            "Key-Person Risk Assessment",
            "Risks Ranked by Severity",
            "Plain-Language Report"
        ],
        pricing: {
            basic: {
                name: "Quick Scan",
                price: "AFN 20,000",
                features: [
                    "Small App or Website",
                    "Code & Architecture Overview",
                    "Basic Security Check",
                    "Top Risks Summary",
                    "Findings Call"
                ]
            },
            professional: {
                name: "Standard Review",
                price: "AFN 45,000",
                features: [
                    "Full Code Review",
                    "Security & Dependency Audit",
                    "Hosting Cost Analysis",
                    "Team & Process Interviews",
                    "Ranked Risk Report with Fix Costs",
                    "Findings Presentation"
                ]
            },
            enterprise: {
                name: "Deep Dive",
                price: "Custom",
                features: [
                    "Multiple Products or Platforms",
                    "Penetration-Style Security Testing",
                    "Scalability & Load Assessment",
                    "Integration & Migration Risks",
                    "Post-Deal Improvement Plan",
                    "Follow-Up Support"
                ]
            }
        }
    },
    {
        id: "startup-mentoring",
        slug: "startup-mentoring",
        category: "consulting",
        title: {
            en: "Tech Startup Mentoring",
            da: "رهنمایی استارتاپ‌های فناوری",
            pa: "د ټیکنالوژۍ نويو شرکتونو ته لارښوونه"
        },
        shortDesc: {
            en: "Practical guidance for founders building a tech product in Afghanistan",
            da: "رهنمایی عملی برای بنیان‌گذارانی که در افغانستان محصول فناوری می‌سازند",
            pa: "د هغو بنسټ ایښودونکو لپاره عملي لارښوونه چې په افغانستان کې ټیکنالوژیک محصول جوړوي"
        },
        description: {
            en: "We mentor founders on the technical and product side of building a startup: turning an idea into a small first version, choosing a sensible tech stack, working with freelance developers, testing with real users and planning the next build. Sessions draw on our experience of shipping software for Afghan users. We advise on product and technology, not on investment, legal or financial matters.",
            da: "ما بنیان‌گذاران را در بخش فنی و محصول ساخت یک استارتاپ رهنمایی می‌کنیم: تبدیل یک ایده به نسخه اول کوچک، انتخاب فناوری معقول، کار با پروگرامرهای آزادکار، آزمایش با کاربران واقعی و برنامه‌ریزی مرحله بعد. جلسات بر تجربه ما در ساخت نرم‌افزار برای کاربران افغان استوار است. مشوره ما درباره محصول و فناوری است، نه سرمایه‌گذاری، مسائل حقوقی یا مالی.",
            pa: "موږ بنسټ ایښودونکو ته د نوي شرکت د جوړولو په تخنیکي او محصول برخه کې لارښوونه کوو: د یوې مفکورې کوچنۍ لومړۍ نسخې ته اړول، معقوله ټیکنالوژي ټاکل، له آزادو پروګرامرانو سره کار کول، له ریښتینو کاروونکو سره ازموینه او د راتلونکي پړاو پلان. غونډې د افغان کاروونکو لپاره د سافټویر جوړولو زموږ په تجربه ولاړې دي. زموږ مشوره د محصول او ټیکنالوژۍ په اړه ده، نه د پانګونې، حقوقي یا مالي مسایلو."
        },
        features: [
            "Idea to First Version (MVP) Planning",
            "Tech Stack Advice",
            "Working with Freelance Developers",
            "User Testing Methods",
            "Product Roadmap Reviews",
            "Pitch Deck Tech Section Review",
            "Sessions in Dari, Pashto or English",
            "Online or In-Person in Kabul"
        ],
        pricing: {
            basic: {
                name: "Single Session",
                price: "AFN 3,500",
                features: [
                    "One 90-Minute Session",
                    "Review of Your Idea or Product",
                    "Written Action Points",
                    "Online or In Person",
                    "One Follow-Up Message"
                ]
            },
            professional: {
                name: "Monthly",
                price: "AFN 12,000/mo",
                features: [
                    "Four Sessions per Month",
                    "Roadmap & Priority Reviews",
                    "Developer Work Reviews",
                    "Chat Support Between Sessions",
                    "Progress Notes",
                    "Cancel Any Month"
                ]
            },
            enterprise: {
                name: "Programme",
                price: "AFN 30,000+",
                features: [
                    "3-Month Structured Programme",
                    "Weekly Sessions",
                    "MVP Scope & Build Plan",
                    "User Testing Support",
                    "Introductions to Local Tech Talent",
                    "Final Readiness Review"
                ]
            }
        }
    }
];

export default services;
