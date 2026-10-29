const services = [
    {
        id: "merchandise-design",
        slug: "merchandise-design",
        category: "design",
        title: {
            en: "Merchandise & Apparel Design",
            da: "دیزاین اجناس تبلیغاتی و لباس",
            pa: "د تبلیغاتي توکو او جامو ډیزاین"
        },
        shortDesc: {
            en: "Print-ready designs for T-shirts, caps, mugs, bags and branded gifts",
            da: "دیزاین‌های آماده چاپ برای تی‌شرت، کلاه، گیلاس، بکس و تحفه‌های برند",
            pa: "د چاپ لپاره چمتو ډیزاینونه د ټي شرټ، خولۍ، ګیلاس، بکس او برنډ ډالیو لپاره"
        },
        description: {
            en: "We design T-shirts, uniforms, caps, mugs, tote bags and corporate gift sets that carry your brand consistently. You receive print-ready files prepared for screen printing, embroidery or sublimation; the printing itself is done by your print shop or one of our partner printers in Kabul.",
            da: "ما تی‌شرت، یونیفورم، کلاه، گیلاس، بکس دستی و بسته‌های تحفه شرکتی را طوری دیزاین می‌کنیم که برند شما را یکسان نشان دهند. فایل‌های آماده چاپ برای اسکرین پرینت، گلدوزی یا سبلیمیشن تحویل می‌گیرید؛ خود چاپ توسط چاپخانه شما یا یکی از چاپخانه‌های همکار ما در کابل انجام می‌شود.",
            pa: "موږ ټي شرټونه، یونیفورمونه، خولۍ، ګیلاسونه، لاسي بکسونه او د شرکت ډالۍ داسې ډیزاینوو چې ستاسو برنډ یو شان وښيي. د سکرین پرنټ، ګنډلو یا سبلیمیشن لپاره د چاپ چمتو فایلونه ترلاسه کوئ؛ چاپ پخپله ستاسو چاپخونه یا په کابل کې زموږ کومه همکاره چاپخونه کوي."
        },
        features: [
            "T-Shirt & Uniform Design",
            "Caps, Mugs & Tote Bags",
            "Print-Ready Files",
            "Embroidery-Friendly Artwork",
            "Corporate Gift Sets",
            "Event & Campaign Merchandise",
            "Mockups for Approval",
            "Partner Print Shop Referrals"
        ],
        pricing: {
            basic: {
                name: "Single Item",
                price: "AFN 4,000",
                features: [
                    "1 Product Design",
                    "2 Concept Options",
                    "Product Mockup",
                    "Print-Ready Files",
                    "2 Revision Rounds"
                ]
            },
            professional: {
                name: "Merch Set",
                price: "AFN 12,000",
                features: [
                    "Up to 5 Product Designs",
                    "Consistent Collection Style",
                    "Mockups for Each Item",
                    "Files for Print & Embroidery",
                    "Color Specifications",
                    "3 Revision Rounds"
                ]
            },
            enterprise: {
                name: "Full Collection",
                price: "AFN 25,000+",
                features: [
                    "Uniforms & Staff Apparel",
                    "Corporate Gift Range",
                    "Packaging & Label Design",
                    "Coordination with Partner Printers",
                    "Sample Review Support",
                    "Unlimited Revisions (within scope)"
                ]
            }
        }
    },
    {
        id: "icon-design",
        slug: "icon-design",
        category: "design",
        title: {
            en: "Icon Design",
            da: "دیزاین آیکن",
            pa: "د آیکن ډیزاین"
        },
        shortDesc: {
            en: "Custom icon sets for apps, websites and signage in one consistent style",
            da: "مجموعه آیکن‌های اختصاصی برای اپ، ویب‌سایت و تابلو با یک سبک یکسان",
            pa: "د اپ، ویب پاڼې او لوحو لپاره ځانګړې آیکن ټولګې په یو شان سټایل"
        },
        description: {
            en: "We draw custom icon sets so your app, website and printed material speak the same visual language. Icons are delivered as SVG, PNG and icon-font files on a consistent grid, and we check that directional icons such as arrows read correctly in right-to-left Dari and Pashto layouts.",
            da: "ما مجموعه آیکن‌های اختصاصی می‌کشیم تا اپ، ویب‌سایت و مواد چاپی شما یک زبان بصری داشته باشند. آیکن‌ها با فارمت‌های SVG، PNG و icon font روی یک گرید یکسان تحویل داده می‌شوند و بررسی می‌کنیم که آیکن‌های جهت‌دار مانند تیرها در چیدمان راست‌به‌چپ دری و پشتو درست خوانده شوند.",
            pa: "موږ ځانګړې آیکن ټولګې رسموو څو ستاسو اپ، ویب پاڼه او چاپي توکي یوه لیدنیزه ژبه ولري. آیکنونه د SVG، PNG او icon font په بڼه په یو شان ګرید سپارل کیږي او ګورو چې لوري لرونکي آیکنونه لکه غشي د دري او پښتو په ښي‌نه‌کیڼ جوړښت کې سم ولوستل شي."
        },
        features: [
            "Custom Icon Sets",
            "App & Web Icons",
            "SVG, PNG & Icon Font",
            "RTL-Aware Directional Icons",
            "Consistent Grid & Stroke",
            "App Launcher Icons",
            "Outline & Filled Variants",
            "Source Files Included"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 5,000",
                features: [
                    "Up to 10 Icons",
                    "One Style (Outline or Filled)",
                    "SVG & PNG Export",
                    "2 Revision Rounds"
                ]
            },
            professional: {
                name: "Product Set",
                price: "AFN 14,000",
                features: [
                    "Up to 30 Icons",
                    "Outline & Filled Variants",
                    "App Launcher Icon",
                    "SVG, PNG & Icon Font",
                    "RTL Direction Checks",
                    "3 Revision Rounds"
                ]
            },
            enterprise: {
                name: "Icon Library",
                price: "AFN 30,000+",
                features: [
                    "60+ Icons",
                    "Multiple Sizes & Weights",
                    "Figma Component Library",
                    "Usage Guidelines",
                    "Developer Handoff",
                    "Additions on Request"
                ]
            }
        }
    },
    {
        id: "email-template-design",
        slug: "email-template-design",
        category: "design",
        title: {
            en: "Email Template Design",
            da: "دیزاین قالب ایمیل",
            pa: "د ایمیل قالب ډیزاین"
        },
        shortDesc: {
            en: "Branded email templates that render properly in Gmail, Outlook and phones",
            da: "قالب‌های ایمیل برندشده که در Gmail، Outlook و موبایل درست نمایش داده شوند",
            pa: "برنډ لرونکي ایمیل قالبونه چې په Gmail، Outlook او موبایل کې سم ښکاره شي"
        },
        description: {
            en: "We design and code HTML email templates for newsletters, promotions and system emails such as receipts and booking confirmations. Templates are tested across common email clients and phones, support Dari and Pashto right-to-left text, and can be loaded into Mailchimp, Brevo or your own system.",
            da: "ما قالب‌های ایمیل HTML را برای خبرنامه، تبلیغات و ایمیل‌های سیستمی مانند رسید و تأیید رزرو دیزاین و کدنویسی می‌کنیم. قالب‌ها در برنامه‌های رایج ایمیل و موبایل آزمایش می‌شوند، از متن راست‌به‌چپ دری و پشتو پشتیبانی می‌کنند و می‌توانند در Mailchimp، Brevo یا سیستم خودتان استفاده شوند.",
            pa: "موږ د خبرلیکونو، تبلیغاتو او سیسټمي ایمیلونو لکه رسیدونو او د بکینګ تایید لپاره HTML ایمیل قالبونه ډیزاین او کوډ کوو. قالبونه په عامو ایمیل پروګرامونو او موبایلونو کې ازمویل کیږي، د دري او پښتو ښي‌نه‌کیڼ متن ملاتړ کوي او په Mailchimp، Brevo یا ستاسو خپل سیسټم کې کارېدلی شي."
        },
        features: [
            "Newsletter Templates",
            "Responsive HTML Emails",
            "Dari & Pashto RTL Support",
            "Gmail & Outlook Testing",
            "Transactional Email Design",
            "Mailchimp & Brevo Ready",
            "Reusable Content Blocks",
            "Dark Mode Checks"
        ],
        pricing: {
            basic: {
                name: "Single Template",
                price: "AFN 6,000",
                features: [
                    "1 Responsive Template",
                    "One Language",
                    "Client Testing",
                    "Upload to Your Platform",
                    "2 Revision Rounds"
                ]
            },
            professional: {
                name: "Template Kit",
                price: "AFN 16,000",
                features: [
                    "Up to 4 Templates",
                    "Reusable Content Blocks",
                    "English + Dari or Pashto (RTL)",
                    "Gmail, Outlook & Mobile Testing",
                    "Dark Mode Checks",
                    "Platform Setup"
                ]
            },
            enterprise: {
                name: "Full System",
                price: "AFN 32,000+",
                features: [
                    "Marketing & Transactional Templates",
                    "Three Languages",
                    "Modular Design System",
                    "Integration with Your App",
                    "Team Training",
                    "3 Months Support"
                ]
            }
        }
    },
    {
        id: "ux-audit",
        slug: "ux-audit",
        category: "design",
        title: {
            en: "UX Audit",
            da: "بررسی تجربه کاربری (UX)",
            pa: "د کارونکي تجربې (UX) ارزونه"
        },
        shortDesc: {
            en: "Find where users get stuck in your website or app, with a prioritized fix list",
            da: "پیدا کردن جاهایی که کاربران در ویب‌سایت یا اپ شما گیر می‌مانند، با لیست اصلاحات",
            pa: "هغه ځایونه پیدا کړئ چې کارونکي ستاسو په ویب پاڼه یا اپ کې ودریږي، د سمون لړلیک سره"
        },
        description: {
            en: "We review your website or app screen by screen against usability heuristics, accessibility basics and your analytics, and where possible watch real users try key tasks. You get a written report with annotated screenshots and a prioritized list of fixes, including issues specific to Dari and Pashto interfaces and slow mobile connections.",
            da: "ما ویب‌سایت یا اپ شما را صفحه به صفحه بر اساس اصول کاربردپذیری، اصول اولیه دسترسی‌پذیری و آمار شما بررسی می‌کنیم و در صورت امکان کاربران واقعی را هنگام انجام کارهای اصلی مشاهده می‌کنیم. یک گزارش کتبی با اسکرین‌شات‌های توضیح‌دار و لیست اولویت‌بندی‌شده اصلاحات می‌گیرید، شامل مشکلات خاص رابط‌های دری و پشتو و انترنت کند موبایل.",
            pa: "موږ ستاسو ویب پاڼه یا اپ پاڼه په پاڼه د کارونې اصولو، د لاسرسي لومړنیو اصولو او ستاسو د احصایې پر بنسټ ارزوو او که امکان ولري، اصلي کارونکي د مهمو کارونو پر مهال ګورو. یو لیکلی راپور د تشریح شویو سکرین شاټونو او د سمونونو د لومړیتوب لړلیک سره ترلاسه کوئ، په ګډون د دري او پښتو انټرفیسونو او ورو موبایل انټرنټ ځانګړې ستونزې."
        },
        features: [
            "Heuristic Usability Review",
            "Prioritized Fix List",
            "Annotated Screenshots",
            "RTL & Localization Checks",
            "Accessibility Basics",
            "Analytics & Funnel Review",
            "User Testing Sessions",
            "Redesign Recommendations"
        ],
        pricing: {
            basic: {
                name: "Quick Review",
                price: "AFN 10,000",
                features: [
                    "Up to 10 Key Screens",
                    "Heuristic Review",
                    "Written Findings",
                    "Top 10 Priority Fixes"
                ]
            },
            professional: {
                name: "Full Audit",
                price: "AFN 28,000",
                features: [
                    "Full Website or App",
                    "Analytics & Funnel Review",
                    "Accessibility Basics",
                    "RTL & Language Checks",
                    "Annotated Report",
                    "Walkthrough Meeting"
                ]
            },
            enterprise: {
                name: "Audit + Testing",
                price: "AFN 50,000+",
                features: [
                    "Everything in Full Audit",
                    "Moderated User Testing",
                    "Competitor Comparison",
                    "Redesigned Key Screens",
                    "Implementation Support",
                    "Follow-Up Review"
                ]
            }
        }
    },
    {
        id: "mascot-design",
        slug: "mascot-design",
        category: "design",
        title: {
            en: "Mascot & Character Design",
            da: "دیزاین مسکات و کرکتر",
            pa: "د مسکاټ او کرکټر ډیزاین"
        },
        shortDesc: {
            en: "A memorable brand character with poses and expressions ready for any channel",
            da: "یک کرکتر به‌یادماندنی برای برند با حالت‌ها و احساسات آماده برای هر کانال",
            pa: "یو د یادولو وړ برنډ کرکټر د بېلابېلو حالتونو او احساساتو سره د هر چینل لپاره"
        },
        description: {
            en: "We create a brand mascot or character that fits your audience and culture, from first sketches to a final illustrated character. You get a character sheet with poses and expressions, ready for social media posts, packaging, stickers and children's materials, with full rights to the artwork.",
            da: "ما یک مسکات یا کرکتر برند می‌سازیم که با مخاطبان و فرهنگ شما سازگار باشد، از اسکیچ‌های اول تا کرکتر نهایی رسم‌شده. یک شیت کرکتر با حالت‌ها و احساسات مختلف می‌گیرید که برای پست‌های شبکه‌های اجتماعی، بسته‌بندی، استیکر و مواد کودکان آماده است، همراه با حقوق کامل اثر.",
            pa: "موږ یو برنډ مسکاټ یا کرکټر جوړوو چې ستاسو له مخاطبینو او کلتور سره سمون ولري، له لومړنیو سکیچونو تر وروستي انځور شوي کرکټر پورې. د بېلابېلو حالتونو او احساساتو سره د کرکټر شیټ ترلاسه کوئ چې د ټولنیزو رسنیو پوسټونو، بسته بندۍ، سټیکرونو او د ماشومانو توکو لپاره چمتو دی، د اثر بشپړ حقونه هم ستاسو دي."
        },
        features: [
            "Original Character Concepts",
            "Character Sheet & Poses",
            "Facial Expressions Set",
            "Culturally Fitting Design",
            "Social Media Ready Files",
            "Sticker & Packaging Use",
            "Simple Animation-Ready Layers",
            "Full Artwork Rights"
        ],
        pricing: {
            basic: {
                name: "Character",
                price: "AFN 10,000",
                features: [
                    "2 Initial Concepts",
                    "1 Final Character",
                    "3 Poses",
                    "PNG & Vector Files",
                    "2 Revision Rounds"
                ]
            },
            professional: {
                name: "Brand Mascot",
                price: "AFN 24,000",
                features: [
                    "3 Initial Concepts",
                    "Full Character Sheet",
                    "8 Poses & Expressions",
                    "Layered Source Files",
                    "Usage Guide",
                    "3 Revision Rounds"
                ]
            },
            enterprise: {
                name: "Character Family",
                price: "AFN 45,000+",
                features: [
                    "Main Mascot + Supporting Characters",
                    "15+ Poses & Expressions",
                    "Animation-Ready Layers",
                    "Sticker Pack Included",
                    "Brand Story Outline",
                    "Extended Revisions"
                ]
            }
        }
    },
    {
        id: "sticker-pack-design",
        slug: "sticker-pack-design",
        category: "design",
        title: {
            en: "Telegram & WhatsApp Sticker Packs",
            da: "بسته‌های استیکر تلگرام و واتس‌اپ",
            pa: "د ټلګرام او واټس اپ سټیکر کڅوړې"
        },
        shortDesc: {
            en: "Branded sticker packs your customers will actually use in chats",
            da: "بسته‌های استیکر برندشده که مشتریان واقعاً در چت‌ها استفاده کنند",
            pa: "برنډ لرونکې سټیکر کڅوړې چې پیرودونکي یې په رښتیا په چټونو کې کاروي"
        },
        description: {
            en: "We design sticker packs with everyday Dari and Pashto phrases, greetings and reactions featuring your mascot, logo or products. Stickers are exported in the exact formats Telegram and WhatsApp require, and we publish the Telegram pack for you and prepare WhatsApp files ready to share.",
            da: "ما بسته‌های استیکر با جمله‌های روزمره دری و پشتو، تبریکات و واکنش‌ها همراه با مسکات، لوگو یا محصولات شما دیزاین می‌کنیم. استیکرها دقیقاً با فارمت‌های لازم تلگرام و واتس‌اپ آماده می‌شوند؛ بسته تلگرام را برایتان نشر می‌کنیم و فایل‌های واتس‌اپ را آماده اشتراک تحویل می‌دهیم.",
            pa: "موږ د ورځني دري او پښتو جملو، مبارکیو او غبرګونونو سره سټیکر کڅوړې ډیزاینوو چې ستاسو مسکاټ، لوګو یا محصولات پکې وي. سټیکرونه په هماغه بڼه چمتو کیږي چې ټلګرام او واټس اپ یې غواړي؛ د ټلګرام کڅوړه ستاسو لپاره خپروو او د واټس اپ فایلونه د شریکولو لپاره چمتو سپارو."
        },
        features: [
            "Telegram Sticker Packs",
            "WhatsApp Sticker Files",
            "Dari & Pashto Phrases",
            "Mascot or Logo Based",
            "Eid & Nowruz Greetings",
            "Animated Sticker Option",
            "Correct Format & Size Export",
            "Telegram Publishing"
        ],
        pricing: {
            basic: {
                name: "Mini Pack",
                price: "AFN 6,000",
                features: [
                    "8 Static Stickers",
                    "One Language",
                    "Telegram Format",
                    "Pack Publishing",
                    "1 Revision Round"
                ]
            },
            professional: {
                name: "Standard Pack",
                price: "AFN 14,000",
                features: [
                    "20 Static Stickers",
                    "Dari & Pashto Phrases",
                    "Telegram & WhatsApp Formats",
                    "Seasonal Greetings",
                    "Pack Publishing",
                    "2 Revision Rounds"
                ]
            },
            enterprise: {
                name: "Animated Pack",
                price: "AFN 30,000+",
                features: [
                    "20+ Stickers",
                    "Animated Telegram Stickers",
                    "Three Languages",
                    "Custom Mascot Design",
                    "Seasonal Add-On Packs",
                    "Launch Post Assets"
                ]
            }
        }
    },
    {
        id: "digital-invitations",
        slug: "digital-invitations",
        category: "design",
        title: {
            en: "Digital Wedding & Event Invitations",
            da: "دعوت‌نامه‌های دیجیتال عروسی و مراسم",
            pa: "د واده او مراسمو ډیجیټل بلنلیکونه"
        },
        shortDesc: {
            en: "Elegant invitations to send on WhatsApp, with an RSVP page for guests abroad",
            da: "دعوت‌نامه‌های زیبا برای ارسال در واتس‌اپ، با صفحه تأیید حضور برای مهمانان خارج",
            pa: "ښکلي بلنلیکونه د واټس اپ لپاره، د بهر مېلمنو لپاره د ګډون تایید پاڼې سره"
        },
        description: {
            en: "We design invitations for weddings, engagements, nikah ceremonies and corporate events as images, short animated videos or a simple web page. The web version can include a map, schedule and RSVP form, which helps families with relatives in Europe, North America and the Gulf confirm who is coming.",
            da: "ما دعوت‌نامه‌های عروسی، نامزدی، نکاح و مراسم شرکتی را به شکل تصویر، ویدیوی کوتاه متحرک یا یک صفحه ساده ویب دیزاین می‌کنیم. نسخه ویب می‌تواند نقشه، برنامه مراسم و فورم تأیید حضور داشته باشد که به خانواده‌هایی با اقارب در اروپا، امریکای شمالی و خلیج کمک می‌کند بدانند چه کسانی می‌آیند.",
            pa: "موږ د واده، کوژدې، نکاح او شرکتي مراسمو بلنلیکونه د انځور، لنډې خوځنده ویډیو یا یوې ساده ویب پاڼې په بڼه ډیزاینوو. ویب نسخه کولی شي نقشه، د مراسمو مهال‌وېش او د ګډون تایید فورمه ولري، چې له هغو کورنیو سره مرسته کوي چې خپلوان یې په اروپا، شمالي امریکا او خلیج کې دي."
        },
        features: [
            "Wedding & Engagement Invitations",
            "Animated Video Invitations",
            "RSVP Web Page",
            "Dari, Pashto & English",
            "Venue Map & Schedule",
            "WhatsApp-Ready Formats",
            "Corporate Event Invitations",
            "Matching Print Version"
        ],
        pricing: {
            basic: {
                name: "Image Card",
                price: "AFN 3,500",
                features: [
                    "1 Invitation Design",
                    "One Language",
                    "WhatsApp-Ready Image",
                    "2 Revision Rounds"
                ]
            },
            professional: {
                name: "Animated",
                price: "AFN 9,000",
                features: [
                    "Animated Video Invitation",
                    "Two Languages",
                    "Background Music or Nasheed",
                    "Static Image Version",
                    "Print-Ready File",
                    "3 Revision Rounds"
                ]
            },
            enterprise: {
                name: "Invitation Site",
                price: "AFN 20,000+",
                features: [
                    "Event Web Page",
                    "RSVP Form & Guest List",
                    "Venue Map & Schedule",
                    "Animated Invitation",
                    "Photo Gallery After Event",
                    "Three Languages"
                ]
            }
        }
    },
    {
        id: "photo-retouching",
        slug: "photo-retouching",
        category: "design",
        title: {
            en: "Photo Retouching",
            da: "روتوش و ویرایش عکس",
            pa: "د انځورونو روتوش او سمون"
        },
        shortDesc: {
            en: "Clean product, portrait and event photos ready for web and print",
            da: "عکس‌های تمیز محصول، پرتره و مراسم آماده برای ویب و چاپ",
            pa: "د محصول، پورټریټ او مراسمو پاک انځورونه د ویب او چاپ لپاره چمتو"
        },
        description: {
            en: "We retouch photos you already have: background removal for product listings, colour correction, skin and blemish cleanup kept natural, and restoration of old family photos. Files are delivered sized for your online store, social media or print, and we work from your originals without keeping copies after delivery unless you ask.",
            da: "ما عکس‌هایی را که دارید روتوش می‌کنیم: حذف پس‌زمینه برای لیست محصولات، اصلاح رنگ، پاک‌سازی طبیعی پوست و لکه‌ها، و ترمیم عکس‌های قدیمی خانوادگی. فایل‌ها با اندازه مناسب فروشگاه آنلاین، شبکه‌های اجتماعی یا چاپ تحویل داده می‌شوند و پس از تحویل، بدون درخواست شما کاپی نگه نمی‌داریم.",
            pa: "موږ هغه انځورونه روتوش کوو چې تاسو یې لرئ: د محصول لړلیکونو لپاره د شالید لرې کول، د رنګ سمون، د پوستکي او داغونو طبیعي پاکول، او د زړو کورنیو انځورونو بیا رغول. فایلونه د آنلاین پلورنځي، ټولنیزو رسنیو یا چاپ لپاره په مناسب اندازه سپارل کیږي او له سپارلو وروسته، پرته له ستاسو غوښتنې کاپي نه ساتو."
        },
        features: [
            "Background Removal",
            "Product Photo Cleanup",
            "Color Correction",
            "Natural Portrait Retouching",
            "Old Photo Restoration",
            "Batch Editing",
            "Web & Print Sizing",
            "Private Handling of Files"
        ],
        pricing: {
            basic: {
                name: "Small Batch",
                price: "AFN 3,500",
                features: [
                    "Up to 15 Photos",
                    "Background Removal",
                    "Basic Color Correction",
                    "Web-Sized Export"
                ]
            },
            professional: {
                name: "Catalog",
                price: "AFN 12,000",
                features: [
                    "Up to 60 Photos",
                    "Consistent Catalog Style",
                    "Shadows & Reflections",
                    "Marketplace Sizes",
                    "Print-Ready Versions",
                    "1 Revision Round"
                ]
            },
            enterprise: {
                name: "Ongoing",
                price: "AFN 20,000/mo",
                features: [
                    "Monthly Photo Allowance",
                    "Advanced Retouching",
                    "Photo Restoration",
                    "48-Hour Turnaround",
                    "Shared Delivery Folder",
                    "Dedicated Editor"
                ]
            }
        }
    },
    {
        id: "subtitling",
        slug: "subtitling",
        category: "design",
        title: {
            en: "Video Subtitling",
            da: "زیرنویس ویدیو",
            pa: "د ویډیو لاندې لیک (سبټایټل)"
        },
        shortDesc: {
            en: "Accurate Dari, Pashto and English subtitles, timed and styled",
            da: "زیرنویس دقیق دری، پشتو و انگلیسی با زمان‌بندی و ظاهر مناسب",
            pa: "دقیق دري، پښتو او انګلیسي سبټایټلونه، د وخت او بڼې سره"
        },
        description: {
            en: "We transcribe, translate and time subtitles for videos in Dari, Pashto and English, done by people who speak the languages rather than raw machine output. You receive SRT or VTT files for YouTube and Facebook, or subtitles burned into the video with proper right-to-left rendering for Instagram and TikTok.",
            da: "ما زیرنویس ویدیوها را به دری، پشتو و انگلیسی پیاده، ترجمه و زمان‌بندی می‌کنیم؛ این کار توسط افرادی انجام می‌شود که این زبان‌ها را می‌دانند، نه خروجی خام ماشینی. فایل‌های SRT یا VTT برای یوتیوب و فیسبوک، یا زیرنویس چسپیده به ویدیو با نمایش درست راست‌به‌چپ برای انستاگرام و تیک‌تاک تحویل می‌گیرید.",
            pa: "موږ د ویډیوګانو سبټایټلونه په دري، پښتو او انګلیسي لیکو، ژباړو او وخت ورکوو؛ دا کار هغه کسان کوي چې دا ژبې پېژني، نه خام ماشیني محصول. د یوټیوب او فیسبوک لپاره SRT یا VTT فایلونه، یا په ویډیو کې نښتي سبټایټلونه د سم ښي‌نه‌کیڼ ښودنې سره د انسټاګرام او ټیک ټاک لپاره ترلاسه کوئ."
        },
        features: [
            "Dari, Pashto & English",
            "Human Transcription",
            "Subtitle Translation",
            "SRT & VTT Files",
            "Burned-In Subtitles",
            "Correct RTL Rendering",
            "Branded Caption Styles",
            "Social Video Formats"
        ],
        pricing: {
            basic: {
                name: "Single Language",
                price: "AFN 1,500/min",
                features: [
                    "Transcription in One Language",
                    "Timed SRT File",
                    "Proofreading",
                    "Videos up to 10 Minutes"
                ]
            },
            professional: {
                name: "Translated",
                price: "AFN 3,000/min",
                features: [
                    "Transcription + 1 Translation",
                    "SRT & VTT Files",
                    "Burned-In Version",
                    "Branded Caption Style",
                    "RTL Rendering Check",
                    "1 Revision Round"
                ]
            },
            enterprise: {
                name: "Series & Archive",
                price: "Custom",
                features: [
                    "All Three Languages",
                    "Long Videos & Series",
                    "Glossary for Consistent Terms",
                    "Bulk Turnaround Schedule",
                    "Platform Upload",
                    "Dedicated Editor"
                ]
            }
        }
    },
    {
        id: "audio-branding",
        slug: "audio-branding",
        category: "design",
        title: {
            en: "Audio Branding & Jingles",
            da: "برندینگ صوتی و جینگل",
            pa: "غږیز برنډینګ او جینګل"
        },
        shortDesc: {
            en: "Short jingles, sound logos and voice-overs that make your brand recognizable",
            da: "جینگل‌های کوتاه، لوگوی صوتی و صداگذاری که برند شما را آشنا می‌سازد",
            pa: "لنډ جینګلونه، غږیز لوګو او غږ ورکول چې ستاسو برنډ د پېژندلو وړ کوي"
        },
        description: {
            en: "We write and produce short jingles, sound logos, on-hold messages and radio or video spots in Dari, Pashto and English. We handle the concept, script and production; voice artists and recording studio time come through our partner network, and you receive the final files with clear usage rights.",
            da: "ما جینگل‌های کوتاه، لوگوی صوتی، پیام‌های انتظار تلفن و اعلان‌های رادیویی یا ویدیویی را به دری، پشتو و انگلیسی می‌نویسیم و تولید می‌کنیم. ایده، متن و تولید با ماست؛ گویندگان و استودیوی ضبط از طریق شبکه همکاران ما تأمین می‌شوند و فایل‌های نهایی را با حقوق استفاده روشن تحویل می‌گیرید.",
            pa: "موږ لنډ جینګلونه، غږیز لوګو، د تلیفون انتظار پیغامونه او د راډیو یا ویډیو اعلانونه په دري، پښتو او انګلیسي لیکو او جوړوو. مفکوره، متن او تولید زموږ دنده ده؛ غږ ورکوونکي او د ثبت سټوډیو د همکارانو له لارې برابریږي او وروستي فایلونه د کارونې روښانه حقونو سره ترلاسه کوئ."
        },
        features: [
            "Jingles & Sound Logos",
            "Dari, Pashto & English Scripts",
            "Professional Voice-Over",
            "Radio & Video Spots",
            "Phone On-Hold Messages",
            "Licensed Background Music",
            "Partner Studio Recording",
            "Clear Usage Rights"
        ],
        pricing: {
            basic: {
                name: "Voice-Over",
                price: "AFN 6,000",
                features: [
                    "Script Up to 60 Seconds",
                    "One Voice, One Language",
                    "Licensed Music Bed",
                    "MP3 & WAV Files",
                    "1 Revision Round"
                ]
            },
            professional: {
                name: "Jingle",
                price: "AFN 22,000",
                features: [
                    "Original Jingle (15-30 Seconds)",
                    "Sound Logo Version",
                    "Lyrics in One Language",
                    "Partner Studio Recording",
                    "Radio & Social Cuts",
                    "2 Revision Rounds"
                ]
            },
            enterprise: {
                name: "Sonic Identity",
                price: "AFN 50,000+",
                features: [
                    "Jingle in Three Languages",
                    "Sound Logo & Notification Sounds",
                    "On-Hold Messages",
                    "Multiple Voice Artists",
                    "Audio Brand Guide",
                    "Full Usage Rights"
                ]
            }
        }
    },
    {
        id: "documentary-production",
        slug: "documentary-production",
        category: "design",
        title: {
            en: "Documentary Production",
            da: "تولید مستند",
            pa: "د مستند فلم جوړول"
        },
        shortDesc: {
            en: "Research, scripting and editing of short documentaries and impact films",
            da: "تحقیق، نوشتن متن و تدوین مستندهای کوتاه و فلم‌های گزارش اثرگذاری",
            pa: "د لنډو مستندونو او اغېزو فلمونو څېړنه، متن لیکنه او اډیټ"
        },
        description: {
            en: "We produce short documentaries and impact films for NGOs, businesses and institutions, covering research, interview planning, scripting, editing, colour, sound and subtitles. Filming is done with freelance camera operators from our partner network or with footage you provide, and every film goes through your review for accuracy and consent before release.",
            da: "ما مستندهای کوتاه و فلم‌های گزارش اثرگذاری را برای مؤسسات، شرکت‌ها و نهادها تولید می‌کنیم؛ شامل تحقیق، برنامه‌ریزی مصاحبه، نوشتن متن، تدوین، رنگ، صدا و زیرنویس. فلم‌برداری توسط فلم‌برداران آزادکار شبکه همکاران ما یا با فوتیج خودتان انجام می‌شود و هر فلم پیش از نشر برای دقت و رضایت افراد توسط شما بررسی می‌شود.",
            pa: "موږ د موسسو، شرکتونو او ادارو لپاره لنډ مستندونه او د اغېزو فلمونه جوړوو؛ په ګډون د څېړنې، د مرکو پلان، متن لیکنې، اډیټ، رنګ، غږ او سبټایټل. فلم اخیستل زموږ د همکارانو شبکې آزادو کمره والو یا ستاسو له خپلو فوټیجونو کیږي او هر فلم له خپرېدو مخکې د دقت او د خلکو د رضایت لپاره ستاسو له خوا کتل کیږي."
        },
        features: [
            "Research & Story Development",
            "Interview Planning",
            "Scriptwriting",
            "Professional Editing",
            "Color & Sound Finishing",
            "Dari, Pashto & English Subtitles",
            "Partner Camera Crews",
            "Consent & Review Process"
        ],
        pricing: {
            basic: {
                name: "Edit Only",
                price: "AFN 25,000",
                features: [
                    "Edit Your Existing Footage",
                    "Up to 5 Minutes",
                    "Music & Titles",
                    "Subtitles in One Language",
                    "2 Revision Rounds"
                ]
            },
            professional: {
                name: "Short Film",
                price: "AFN 70,000",
                features: [
                    "Research & Script",
                    "Partner Crew, Up to 2 Shoot Days",
                    "Up to 10 Minutes",
                    "Color & Sound Finishing",
                    "Subtitles in Two Languages",
                    "Social Media Cutdowns"
                ]
            },
            enterprise: {
                name: "Documentary",
                price: "Custom",
                features: [
                    "Multi-Location Production",
                    "Longer Format",
                    "Three Languages",
                    "Festival & Broadcast Versions",
                    "Trailer & Teasers",
                    "Archive Footage Sourcing"
                ]
            }
        }
    },
    {
        id: "short-video-reels",
        slug: "short-video-reels",
        category: "design",
        title: {
            en: "Short-Form Video & Reels Production",
            da: "تولید ویدیوهای کوتاه و ریلز",
            pa: "د لنډو ویډیوګانو او ریلز جوړول"
        },
        shortDesc: {
            en: "Vertical videos for Instagram, TikTok, YouTube Shorts and Facebook",
            da: "ویدیوهای عمودی برای انستاگرام، تیک‌تاک، یوتیوب شورتس و فیسبوک",
            pa: "عمودي ویډیوګانې د انسټاګرام، ټیک ټاک، یوټیوب شارټس او فیسبوک لپاره"
        },
        description: {
            en: "We plan, script and edit short vertical videos built for the first three seconds, with captions in Dari, Pashto or English for people watching without sound. You can film on your phone using our shot lists, or we arrange a partner videographer, and we deliver a steady monthly batch ready to post.",
            da: "ما ویدیوهای کوتاه عمودی را برنامه‌ریزی، متن‌نویسی و تدوین می‌کنیم که برای سه ثانیه اول ساخته شده‌اند، با زیرنویس دری، پشتو یا انگلیسی برای کسانی که بدون صدا تماشا می‌کنند. می‌توانید با لیست شات‌های ما با موبایل خود فلم بگیرید یا ما یک فلم‌بردار همکار ترتیب می‌دهیم و هر ماه یک بسته منظم آماده نشر تحویل می‌دهیم.",
            pa: "موږ لنډې عمودي ویډیوګانې پلانوو، متن یې لیکو او اډیټ کوو چې د لومړیو درې ثانیو لپاره جوړې شوې وي، د دري، پښتو یا انګلیسي سبټایټل سره د هغو کسانو لپاره چې بې غږه یې ګوري. تاسو کولی شئ زموږ د شاټ لړلیک په مرسته په خپل موبایل فلم واخلئ یا موږ یو همکار ویډیوګرافر برابروو، او هره میاشت د خپرولو لپاره چمتو منظمه کڅوړه سپارو."
        },
        features: [
            "Reels, TikTok & Shorts",
            "Hook-First Scripting",
            "Burned-In Captions",
            "Phone Filming Shot Lists",
            "Partner Videographers",
            "Trending Audio & Formats",
            "Monthly Content Batches",
            "Cover Thumbnails"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 10,000/mo",
                features: [
                    "4 Edited Reels per Month",
                    "Your Footage",
                    "Captions in One Language",
                    "Cover Thumbnails",
                    "1 Revision per Video"
                ]
            },
            professional: {
                name: "Growth",
                price: "AFN 22,000/mo",
                features: [
                    "10 Reels per Month",
                    "Content Ideas & Scripts",
                    "Shot Lists for Phone Filming",
                    "Captions in Two Languages",
                    "Platform-Specific Versions",
                    "Monthly Performance Notes"
                ]
            },
            enterprise: {
                name: "Full Production",
                price: "AFN 45,000+/mo",
                features: [
                    "16+ Reels per Month",
                    "Partner Videographer Shoot Days",
                    "Three Languages",
                    "Motion Graphics",
                    "Posting & Scheduling",
                    "Monthly Strategy Call"
                ]
            }
        }
    },
    {
        id: "telegram-channel-management",
        slug: "telegram-channel-management",
        category: "marketing",
        title: {
            en: "Telegram Channel Management",
            da: "مدیریت کانال تلگرام",
            pa: "د ټلګرام چینل مدیریت"
        },
        shortDesc: {
            en: "Regular posts, polls and moderation for your Telegram channel or group",
            da: "پست‌های منظم، نظرسنجی و نظارت برای کانال یا گروپ تلگرام شما",
            pa: "منظم پوسټونه، نظرپوښتنې او څارنه ستاسو د ټلګرام چینل یا ګروپ لپاره"
        },
        description: {
            en: "Telegram is where many Afghan customers follow news, prices and offers, and it works reasonably well on weak connections. We plan and publish posts in Dari and Pashto, moderate group discussions, set up simple bots for FAQs or orders, and report monthly on subscriber growth and post reach.",
            da: "تلگرام جایی است که بسیاری از مشتریان افغان اخبار، قیمت‌ها و پیشنهادها را دنبال می‌کنند و روی انترنت ضعیف هم نسبتاً خوب کار می‌کند. ما پست‌ها را به دری و پشتو برنامه‌ریزی و نشر می‌کنیم، بحث‌های گروپ را نظارت می‌کنیم، ربات‌های ساده برای سوالات رایج یا سفارش راه‌اندازی می‌کنیم و هر ماه درباره رشد اعضا و دسترسی پست‌ها گزارش می‌دهیم.",
            pa: "ټلګرام هغه ځای دی چې ډیری افغان پیرودونکي پکې خبرونه، بیې او وړاندیزونه تعقیبوي او په کمزوري انټرنټ هم نسبتاً ښه کار کوي. موږ پوسټونه په دري او پښتو پلانوو او خپروو، د ګروپ بحثونه څارو، د عامو پوښتنو یا فرمایشونو لپاره ساده بوټونه جوړوو او هره میاشت د غړو د زیاتوالي او د پوسټونو د رسېدو راپور ورکوو."
        },
        features: [
            "Content Calendar",
            "Dari & Pashto Posts",
            "Group Moderation",
            "FAQ & Order Bots",
            "Polls & Engagement Posts",
            "Branded Post Graphics",
            "Channel Growth Tactics",
            "Monthly Analytics Report"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 8,000/mo",
                features: [
                    "12 Posts per Month",
                    "One Language",
                    "Post Graphics",
                    "Monthly Report"
                ]
            },
            professional: {
                name: "Active",
                price: "AFN 16,000/mo",
                features: [
                    "Daily Posts",
                    "Dari & Pashto",
                    "Group Moderation",
                    "Polls & Engagement",
                    "Simple FAQ Bot",
                    "Monthly Report"
                ]
            },
            enterprise: {
                name: "Managed",
                price: "AFN 30,000+/mo",
                features: [
                    "Multiple Channels & Groups",
                    "Three Languages",
                    "Custom Order or Support Bot",
                    "Short Video Content",
                    "Cross-Promotion Planning",
                    "Weekly Reporting"
                ]
            }
        }
    },
    {
        id: "linkedin-marketing",
        slug: "linkedin-marketing",
        category: "marketing",
        title: {
            en: "LinkedIn Marketing",
            da: "بازاریابی در LinkedIn",
            pa: "په LinkedIn کې بازار موندنه"
        },
        shortDesc: {
            en: "Company page, content and outreach to reach partners, donors and B2B clients",
            da: "صفحه شرکت، محتوا و ارتباط برای رسیدن به شرکا، تمویل‌کنندگان و مشتریان تجاری",
            pa: "د شرکت پاڼه، منځپانګه او اړیکې د همکارانو، تمویلوونکو او سوداګریزو پیرودونکو لپاره"
        },
        description: {
            en: "LinkedIn is where international partners, donors and B2B buyers check whether an Afghan company is credible. We set up or refresh your company page, write regular posts in English about your projects and team, and run targeted ads or outreach to the people you want to reach.",
            da: "LinkedIn جایی است که شرکای بین‌المللی، تمویل‌کنندگان و خریداران تجاری بررسی می‌کنند که آیا یک شرکت افغان معتبر است یا نه. ما صفحه شرکت شما را راه‌اندازی یا تازه می‌کنیم، پست‌های منظم به انگلیسی درباره پروژه‌ها و تیم شما می‌نویسیم و تبلیغات هدفمند یا ارتباط مستقیم با افراد مورد نظرتان اجرا می‌کنیم.",
            pa: "LinkedIn هغه ځای دی چې نړیوال همکاران، تمویلوونکي او سوداګریز پېرودونکي ګوري چې آیا یو افغان شرکت د باور وړ دی. موږ ستاسو د شرکت پاڼه جوړوو یا تازه کوو، ستاسو د پروژو او ټیم په اړه په انګلیسي منظم پوسټونه لیکو او هدفمند اعلانونه یا مستقیمې اړیکې د هغو کسانو سره پرمخ وړو چې تاسو یې غواړئ."
        },
        features: [
            "Company Page Setup",
            "Regular English Posts",
            "Project & Case Stories",
            "Targeted LinkedIn Ads",
            "B2B Outreach Campaigns",
            "Employee Advocacy Guide",
            "Banner & Post Design",
            "Monthly Analytics"
        ],
        pricing: {
            basic: {
                name: "Page Setup",
                price: "AFN 8,000",
                features: [
                    "Company Page Setup or Refresh",
                    "Banner & Logo Sizing",
                    "About Section Copy",
                    "4 Starter Posts"
                ]
            },
            professional: {
                name: "Content",
                price: "AFN 18,000/mo",
                features: [
                    "8 Posts per Month",
                    "Post Graphics",
                    "Project & Team Stories",
                    "Engagement Management",
                    "Employee Sharing Guide",
                    "Monthly Report"
                ]
            },
            enterprise: {
                name: "Lead Generation",
                price: "AFN 35,000+/mo",
                features: [
                    "Everything in Content",
                    "LinkedIn Ads Management",
                    "Targeted Outreach Lists",
                    "Lead Tracking Sheet",
                    "Executive Profile Support",
                    "Biweekly Review Calls"
                ]
            }
        }
    },
    {
        id: "personal-branding",
        slug: "personal-branding",
        category: "marketing",
        title: {
            en: "Personal Branding for Executives",
            da: "برندینگ شخصی برای مدیران",
            pa: "د مدیرانو لپاره شخصي برنډینګ"
        },
        shortDesc: {
            en: "A clear, credible online presence for founders, directors and professionals",
            da: "حضور آنلاین روشن و معتبر برای مؤسسان، رؤسا و متخصصان",
            pa: "د بنسټګرو، رییسانو او متخصصینو لپاره روښانه او د باور وړ آنلاین شتون"
        },
        description: {
            en: "We help founders, directors and professionals present their expertise consistently online. That means a professional bio in your chosen languages, updated LinkedIn and social profiles, a simple personal website, photo guidance, and a steady posting plan, with all content written in your voice and approved by you.",
            da: "ما به مؤسسان، رؤسا و متخصصان کمک می‌کنیم تا تخصص خود را به‌صورت یکسان در انترنت معرفی کنند. این شامل بیوگرافی حرفه‌ای به زبان‌های دلخواه، پروفایل‌های LinkedIn و شبکه‌های اجتماعی تازه‌شده، یک ویب‌سایت شخصی ساده، رهنمایی برای عکس و برنامه منظم نشر است؛ همه محتوا با لحن خود شما نوشته و توسط شما تأیید می‌شود.",
            pa: "موږ له بنسټګرو، رییسانو او متخصصینو سره مرسته کوو چې خپل تخصص په انټرنټ کې په یو شان ډول وړاندې کړي. په دې کې په غوره ژبو مسلکي بیوګرافي، تازه شوي LinkedIn او ټولنیز پروفایلونه، یوه ساده شخصي ویب پاڼه، د انځور لارښوونه او د خپرولو منظم پلان شامل دي؛ ټوله منځپانګه ستاسو په لهجه لیکل کیږي او ستاسو له خوا تاییدیږي."
        },
        features: [
            "Professional Bio Writing",
            "LinkedIn Profile Optimization",
            "Personal Website",
            "Content in Your Voice",
            "Photo & Headshot Guidance",
            "Speaking & Media Kit",
            "Posting Plan",
            "Approval Before Publishing"
        ],
        pricing: {
            basic: {
                name: "Profile",
                price: "AFN 9,000",
                features: [
                    "Professional Bio (2 Lengths)",
                    "LinkedIn Profile Rewrite",
                    "Headshot Guidance",
                    "One Language",
                    "1 Revision Round"
                ]
            },
            professional: {
                name: "Presence",
                price: "AFN 25,000",
                features: [
                    "Bio in Two Languages",
                    "LinkedIn & Social Profiles",
                    "One-Page Personal Website",
                    "Media Kit PDF",
                    "3-Month Posting Plan",
                    "2 Revision Rounds"
                ]
            },
            enterprise: {
                name: "Ongoing",
                price: "AFN 30,000/mo",
                features: [
                    "Ghostwritten Posts Weekly",
                    "Article Writing",
                    "Profile Management",
                    "Media & Event Opportunities List",
                    "Three Languages",
                    "Monthly Review"
                ]
            }
        }
    },
    {
        id: "digital-pr",
        slug: "digital-pr",
        category: "marketing",
        title: {
            en: "Digital PR & Press Releases",
            da: "روابط عمومی دیجیتال و اعلامیه‌های خبری",
            pa: "ډیجیټل عامه اړیکې او خبري اعلامیې"
        },
        shortDesc: {
            en: "Well-written press releases and media outreach in Dari, Pashto and English",
            da: "اعلامیه‌های خبری خوب‌نوشته‌شده و ارتباط با رسانه‌ها به دری، پشتو و انگلیسی",
            pa: "ښه لیکل شوې خبري اعلامیې او له رسنیو سره اړیکه په دري، پښتو او انګلیسي"
        },
        description: {
            en: "We write press releases and news stories about your launches, partnerships and milestones, and send them to relevant journalists, news websites and diaspora outlets. We also set up an online press page with your media kit; coverage is decided by editors, so we focus on making stories newsworthy rather than promising placements.",
            da: "ما اعلامیه‌های خبری و داستان‌های خبری درباره راه‌اندازی‌ها، همکاری‌ها و دستاوردهای شما می‌نویسیم و آن‌ها را به خبرنگاران، ویب‌سایت‌های خبری و رسانه‌های مهاجرین مرتبط می‌فرستیم. یک صفحه خبری آنلاین همراه با بسته رسانه‌ای شما نیز می‌سازیم؛ نشر خبر به تصمیم ویراستاران است، پس تمرکز ما روی خبرساز کردن داستان است نه وعده نشر.",
            pa: "موږ ستاسو د پیلونو، همکاریو او لاسته راوړنو په اړه خبري اعلامیې او خبري کیسې لیکو او اړوندو خبریالانو، خبري ویب پاڼو او د مهاجرو رسنیو ته یې لیږو. ستاسو د رسنیزې کڅوړې سره یوه آنلاین خبري پاڼه هم جوړوو؛ د خبر خپرول د ایډیټرانو پرېکړه ده، نو زموږ تمرکز په کیسه کې د خبري ارزښت پیدا کولو دی نه د خپرېدو ژمنه."
        },
        features: [
            "Press Release Writing",
            "Dari, Pashto & English",
            "Media List Building",
            "Journalist Outreach",
            "Online Press Room",
            "Media Kit Design",
            "Diaspora Media Outreach",
            "Coverage Tracking"
        ],
        pricing: {
            basic: {
                name: "Release",
                price: "AFN 6,000",
                features: [
                    "1 Press Release",
                    "One Language",
                    "Distribution to Media List",
                    "Coverage Summary"
                ]
            },
            professional: {
                name: "Campaign",
                price: "AFN 20,000",
                features: [
                    "Release in Two Languages",
                    "Tailored Media List",
                    "Personal Journalist Pitches",
                    "Online Press Room",
                    "Follow-Up Outreach",
                    "Coverage Report"
                ]
            },
            enterprise: {
                name: "Retainer",
                price: "AFN 35,000+/mo",
                features: [
                    "Monthly Stories & Releases",
                    "Three Languages",
                    "Media Kit & Fact Sheets",
                    "Interview Preparation Notes",
                    "International & Diaspora Outlets",
                    "Monthly Coverage Report"
                ]
            }
        }
    },
    {
        id: "competitor-analysis",
        slug: "competitor-analysis",
        category: "marketing",
        title: {
            en: "Competitor Analysis",
            da: "تحلیل رقبا",
            pa: "د سیالانو تحلیل"
        },
        shortDesc: {
            en: "See how competitors price, market and position themselves online",
            da: "ببینید رقبا چگونه قیمت‌گذاری، بازاریابی و خود را آنلاین معرفی می‌کنند",
            pa: "وګورئ چې سیالان څنګه بیه ټاکي، بازار موندنه کوي او ځان آنلاین وړاندې کوي"
        },
        description: {
            en: "We study your main competitors' websites, social media, ads, pricing, reviews and search visibility using public information and standard SEO tools. You receive a clear report on where they are strong, where they leave gaps, and practical opportunities for your own marketing.",
            da: "ما ویب‌سایت‌ها، شبکه‌های اجتماعی، تبلیغات، قیمت‌ها، نظرات مشتریان و دیده‌شدن رقبای اصلی شما در جستجو را با استفاده از معلومات عمومی و ابزارهای استاندارد SEO بررسی می‌کنیم. یک گزارش روشن درباره نقاط قوت آن‌ها، خلاهایی که باقی گذاشته‌اند و فرصت‌های عملی برای بازاریابی خودتان دریافت می‌کنید.",
            pa: "موږ ستاسو د اصلي سیالانو ویب پاڼې، ټولنیزې رسنۍ، اعلانونه، بیې، د پیرودونکو نظرونه او په لټون کې د هغوی لیدل کېدل د عامه معلوماتو او معیاري SEO وسیلو په مرسته څېړو. یو روښانه راپور ترلاسه کوئ چې هغوی چېرته قوي دي، چېرته تشې پرېږدي او ستاسو د خپلې بازار موندنې لپاره عملي فرصتونه کوم دي."
        },
        features: [
            "Website & UX Comparison",
            "Social Media Benchmarking",
            "Ad Library Review",
            "Pricing & Offer Comparison",
            "SEO Keyword Gaps",
            "Customer Review Analysis",
            "SWOT Summary",
            "Actionable Opportunities"
        ],
        pricing: {
            basic: {
                name: "Snapshot",
                price: "AFN 8,000",
                features: [
                    "Up to 3 Competitors",
                    "Website & Social Review",
                    "Summary Table",
                    "Top Recommendations"
                ]
            },
            professional: {
                name: "Full Report",
                price: "AFN 22,000",
                features: [
                    "Up to 6 Competitors",
                    "SEO & Keyword Gaps",
                    "Ads & Offers Review",
                    "Customer Review Analysis",
                    "SWOT Summary",
                    "Presentation Meeting"
                ]
            },
            enterprise: {
                name: "Ongoing Watch",
                price: "AFN 15,000/mo",
                features: [
                    "Full Report to Start",
                    "Monthly Competitor Updates",
                    "New Campaign Alerts",
                    "Price Change Tracking",
                    "Quarterly Strategy Review",
                    "Regional & Diaspora Competitors"
                ]
            }
        }
    },
    {
        id: "affiliate-program",
        slug: "affiliate-program",
        category: "marketing",
        title: {
            en: "Affiliate Program Setup",
            da: "راه‌اندازی برنامه همکاری در فروش (Affiliate)",
            pa: "د افلیټ (همکار پلور) پروګرام جوړول"
        },
        shortDesc: {
            en: "Let partners and influencers sell for you, with tracked links and commissions",
            da: "بگذارید شرکا و اینفلوئنسرها برای شما بفروشند، با لینک‌های ردیابی‌شده و کمیشن",
            pa: "پرېږدئ چې همکاران او اغېزمن کسان ستاسو لپاره وپلوري، د تعقیب شویو لینکونو او کمیشن سره"
        },
        description: {
            en: "We set up an affiliate program on your website or online store so bloggers, influencers and partner shops can earn a commission on the sales they bring. This includes tracked links or coupon codes, a partner dashboard, commission rules you decide, and payout reports you can settle by bank, HesabPay or other methods you choose.",
            da: "ما یک برنامه affiliate روی ویب‌سایت یا فروشگاه آنلاین شما راه‌اندازی می‌کنیم تا بلاگرها، اینفلوئنسرها و دکان‌های همکار از فروشی که می‌آورند کمیشن بگیرند. این شامل لینک‌های ردیابی‌شده یا کود تخفیف، داشبورد همکاران، قوانین کمیشن به تصمیم خودتان و گزارش‌های پرداخت است که می‌توانید از طریق بانک، HesabPay یا روش دلخواه دیگر تسویه کنید.",
            pa: "موږ ستاسو په ویب پاڼه یا آنلاین پلورنځي کې د affiliate پروګرام جوړوو څو بلاګران، اغېزمن کسان او همکار دوکانونه د هغه پلور کمیشن واخلي چې دوی یې راوړي. په دې کې تعقیب شوي لینکونه یا د تخفیف کوډونه، د همکارانو ډشبورډ، ستاسو په خوښه د کمیشن قواعد او د تادیې راپورونه شامل دي چې د بانک، HesabPay یا بلې خوښې لارې تسویه کولی شئ."
        },
        features: [
            "Tracked Affiliate Links",
            "Coupon Code Tracking",
            "Partner Dashboard",
            "Custom Commission Rules",
            "Payout Reports",
            "Partner Sign-Up Page",
            "Promo Material Kit",
            "WooCommerce & Shopify Support"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 12,000",
                features: [
                    "Affiliate Plugin Setup",
                    "Coupon-Based Tracking",
                    "Commission Rules",
                    "Simple Monthly Report",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Program",
                price: "AFN 30,000",
                features: [
                    "Tracked Links & Coupons",
                    "Partner Dashboard",
                    "Partner Sign-Up Page",
                    "Promo Material Kit",
                    "Program Terms Draft for Your Review",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Managed",
                price: "AFN 50,000+",
                features: [
                    "Custom Tracking Integration",
                    "Multi-Tier Commissions",
                    "Partner Recruitment Outreach",
                    "Fraud & Duplicate Checks",
                    "Ongoing Program Management",
                    "Monthly Performance Review"
                ]
            }
        }
    },
    {
        id: "referral-program",
        slug: "referral-program",
        category: "marketing",
        title: {
            en: "Referral Program Setup",
            da: "راه‌اندازی برنامه معرفی مشتری",
            pa: "د پیرودونکي معرفي کولو پروګرام جوړول"
        },
        shortDesc: {
            en: "Reward customers for bringing friends and family, tracked automatically",
            da: "پاداش به مشتریانی که دوستان و خانواده را معرفی می‌کنند، با ردیابی خودکار",
            pa: "هغو پیرودونکو ته انعام چې ملګري او کورنۍ معرفي کوي، په اتومات تعقیب"
        },
        description: {
            en: "Word of mouth already drives much of business in Afghanistan; a referral program makes it measurable. We set up personal referral links or codes, shareable WhatsApp and Telegram messages, and automatic rewards such as discounts, credit or gifts, with a simple report showing who referred whom.",
            da: "معرفی دهان‌به‌دهان همین حالا بخش بزرگی از تجارت را در افغانستان پیش می‌برد؛ برنامه معرفی آن را قابل اندازه‌گیری می‌سازد. ما لینک‌ها یا کودهای شخصی معرفی، پیام‌های قابل اشتراک واتس‌اپ و تلگرام و پاداش‌های خودکار مانند تخفیف، اعتبار یا تحفه را راه‌اندازی می‌کنیم، همراه با گزارشی ساده که نشان می‌دهد چه کسی چه کسی را معرفی کرده است.",
            pa: "خوله په خوله معرفي کول اوس هم په افغانستان کې د سوداګرۍ لویه برخه پرمخ وړي؛ د معرفي پروګرام یې د اندازه کولو وړ ګرځوي. موږ شخصي معرفي لینکونه یا کوډونه، د واټس اپ او ټلګرام د شریکولو وړ پیغامونه او اتومات انعامونه لکه تخفیف، کریډیټ یا ډالۍ جوړوو، د یو ساده راپور سره چې ښيي چا څوک معرفي کړی."
        },
        features: [
            "Personal Referral Links",
            "Referral Codes",
            "WhatsApp & Telegram Sharing",
            "Automatic Rewards",
            "Discounts, Credit or Gifts",
            "Referral Tracking Report",
            "Abuse Prevention Rules",
            "Website & App Integration"
        ],
        pricing: {
            basic: {
                name: "Simple",
                price: "AFN 9,000",
                features: [
                    "Referral Codes",
                    "One Reward Type",
                    "Share Message Templates",
                    "Tracking Spreadsheet",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Automated",
                price: "AFN 24,000",
                features: [
                    "Personal Referral Links",
                    "Automatic Reward Delivery",
                    "Customer Referral Page",
                    "WhatsApp & Telegram Sharing",
                    "Abuse Prevention Rules",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Integrated",
                price: "AFN 45,000+",
                features: [
                    "Integration with Your App or POS",
                    "Tiered Rewards",
                    "Referral Leaderboards",
                    "SMS Notifications",
                    "Custom Reporting",
                    "Launch Campaign"
                ]
            }
        }
    },
    {
        id: "diaspora-marketing",
        slug: "diaspora-marketing",
        category: "marketing",
        title: {
            en: "Diaspora Marketing",
            da: "بازاریابی برای افغان‌های خارج کشور",
            pa: "د بهر مېشتو افغانانو لپاره بازار موندنه"
        },
        shortDesc: {
            en: "Reach Afghans in Europe, North America, the Gulf and beyond",
            da: "رسیدن به افغان‌ها در اروپا، امریکای شمالی، خلیج و دیگر کشورها",
            pa: "په اروپا، شمالي امریکا، خلیج او نورو هېوادونو کې افغانانو ته رسېدل"
        },
        description: {
            en: "Many Afghan businesses sell to families abroad: gifts and money sent home, dried fruit, carpets, clothing and services paid for from overseas. We run targeted ads in the countries and cities where Afghan communities live, adjust messaging and timing to their time zones, and set up payment and delivery information that makes sense for buyers abroad.",
            da: "بسیاری از تجارت‌های افغان به خانواده‌های خارج کشور می‌فروشند: تحفه‌هایی که به خانه فرستاده می‌شود، میوه خشک، قالین، لباس و خدماتی که از خارج پرداخت می‌شود. ما تبلیغات هدفمند را در کشورها و شهرهایی که جامعه افغان زندگی می‌کند اجرا می‌کنیم، پیام و زمان‌بندی را با ساعت آن‌ها تنظیم می‌کنیم و معلومات پرداخت و تحویل را طوری آماده می‌کنیم که برای خریداران خارج روشن باشد.",
            pa: "ډیری افغان سوداګرۍ بهر مېشتو کورنیو ته پلورنه کوي: هغه ډالۍ چې کور ته لیږل کیږي، وچه مېوه، غالۍ، جامې او هغه خدمتونه چې له بهر څخه یې پیسې ورکول کیږي. موږ په هغو هېوادونو او ښارونو کې هدفمند اعلانونه چلوو چې افغان ټولنې پکې اوسیږي، پیغام او وخت د هغوی له ساعت سره برابروو او د تادیې او سپارنې معلومات داسې چمتو کوو چې بهرنیو پېرودونکو ته روښانه وي."
        },
        features: [
            "Country & City Targeting",
            "Facebook & Instagram Ads",
            "Google Ads Abroad",
            "Time-Zone Aware Scheduling",
            "Dari, Pashto & English Messaging",
            "Gift & Delivery Offer Pages",
            "Diaspora Community Outreach",
            "Campaign Reporting by Country"
        ],
        pricing: {
            basic: {
                name: "Test Campaign",
                price: "AFN 12,000",
                features: [
                    "1 Campaign, 2 Countries",
                    "Ad Creative in One Language",
                    "Audience Setup",
                    "Results Report",
                    "Ad Budget Paid Separately"
                ]
            },
            professional: {
                name: "Growth",
                price: "AFN 25,000/mo",
                features: [
                    "Up to 5 Countries",
                    "Facebook, Instagram & Google",
                    "Two Languages",
                    "Landing Page for Buyers Abroad",
                    "Monthly Optimization",
                    "Report by Country"
                ]
            },
            enterprise: {
                name: "Global",
                price: "AFN 45,000+/mo",
                features: [
                    "Unlimited Countries",
                    "Three Languages",
                    "Community & Influencer Outreach",
                    "Seasonal Gift Campaigns",
                    "Payment & Delivery Page Setup",
                    "Biweekly Strategy Calls"
                ]
            }
        }
    },
    {
        id: "seasonal-campaigns",
        slug: "seasonal-campaigns",
        category: "marketing",
        title: {
            en: "Ramadan & Eid Seasonal Campaigns",
            da: "کمپاین‌های فصلی رمضان و عید",
            pa: "د روژې او اختر موسمي کمپاینونه"
        },
        shortDesc: {
            en: "Respectful, well-timed campaigns for Ramadan, Eid, Nowruz and other seasons",
            da: "کمپاین‌های محترمانه و به‌موقع برای رمضان، عید، نوروز و دیگر مناسبت‌ها",
            pa: "درناوي لرونکي او په وخت کمپاینونه د روژې، اختر، نوروز او نورو مناسبتونو لپاره"
        },
        description: {
            en: "The weeks around Ramadan and Eid are when many Afghan businesses make a large share of their sales, at home and among families abroad. We plan the campaign calendar weeks in advance, design greetings and offers in a tone that suits the season, and run ads, posts and messages timed around iftar, Eid shopping days and gift-sending deadlines for the diaspora.",
            da: "هفته‌های رمضان و عید زمانی است که بسیاری از تجارت‌های افغان بخش بزرگی از فروش خود را در داخل و میان خانواده‌های خارج کشور انجام می‌دهند. ما تقویم کمپاین را هفته‌ها پیش برنامه‌ریزی می‌کنیم، تبریکات و پیشنهادها را با لحنی مناسب این ایام دیزاین می‌کنیم و تبلیغات، پست‌ها و پیام‌ها را مطابق زمان افطار، روزهای خرید عید و آخرین مهلت ارسال تحفه برای مهاجرین اجرا می‌کنیم.",
            pa: "د روژې او اختر اونۍ هغه وخت دی چې ډیری افغان سوداګرۍ په کور دننه او د بهر مېشتو کورنیو ترمنځ د خپل پلور لویه برخه کوي. موږ د کمپاین مهال‌وېش اونۍ مخکې پلانوو، مبارکۍ او وړاندیزونه د دې ورځو سره سم په لهجه ډیزاینوو او اعلانونه، پوسټونه او پیغامونه د افطار، د اختر د پېرودلو ورځو او د مهاجرو لپاره د ډالیو لیږلو د وروستۍ نېټې سره سم چلوو."
        },
        features: [
            "Seasonal Campaign Calendar",
            "Ramadan & Eid Creatives",
            "Nowruz & Year-End Campaigns",
            "Offer & Bundle Planning",
            "Iftar-Timed Posting",
            "Diaspora Gift Deadlines",
            "Ads Across Platforms",
            "Post-Campaign Report"
        ],
        pricing: {
            basic: {
                name: "Greetings",
                price: "AFN 7,000",
                features: [
                    "5 Greeting Designs",
                    "Ramadan & Eid Posts",
                    "Two Languages",
                    "Posting Schedule"
                ]
            },
            professional: {
                name: "Campaign",
                price: "AFN 25,000",
                features: [
                    "Full Season Calendar",
                    "15 Posts & Stories",
                    "Offer Landing Page",
                    "Paid Ads Setup & Management",
                    "Diaspora Targeting",
                    "Results Report"
                ]
            },
            enterprise: {
                name: "Full Season",
                price: "AFN 50,000+",
                features: [
                    "Everything in Campaign",
                    "Short Video Ads",
                    "Email & SMS Messages",
                    "Influencer Coordination",
                    "Three Languages",
                    "Daily Monitoring During Peak Days"
                ]
            }
        }
    },
    {
        id: "google-shopping-ads",
        slug: "google-shopping-ads",
        category: "marketing",
        title: {
            en: "Google Shopping Ads",
            da: "تبلیغات Google Shopping",
            pa: "د Google Shopping اعلانونه"
        },
        shortDesc: {
            en: "Show your products with price and photo in Google search results",
            da: "نمایش محصولات شما با قیمت و عکس در نتایج جستجوی Google",
            pa: "خپل محصولات د بیې او انځور سره د Google لټون په پایلو کې وښایاست"
        },
        description: {
            en: "Shopping ads put your product photo, price and store name directly in Google results, which suits online stores selling to customers abroad. We set up Merchant Center and your product feed, fix feed errors, structure campaigns by product group, and adjust bids based on which products actually sell. Merchant Center eligibility depends on the target country and Google's policies, which we check before starting.",
            da: "تبلیغات Shopping عکس محصول، قیمت و نام فروشگاه شما را مستقیماً در نتایج Google نشان می‌دهد که برای فروشگاه‌های آنلاینی که به مشتریان خارج کشور می‌فروشند مناسب است. ما Merchant Center و فید محصولات شما را راه‌اندازی می‌کنیم، خطاهای فید را رفع می‌کنیم، کمپاین‌ها را بر اساس گروپ محصول ترتیب می‌دهیم و قیمت پیشنهادی را بر اساس محصولاتی که واقعاً فروخته می‌شوند تنظیم می‌کنیم. واجد شرایط بودن Merchant Center به کشور هدف و پالیسی‌های Google بستگی دارد که پیش از شروع بررسی می‌کنیم.",
            pa: "د Shopping اعلانونه ستاسو د محصول انځور، بیه او د پلورنځي نوم مستقیم د Google په پایلو کې ښيي، چې د هغو آنلاین پلورنځیو لپاره مناسب دي چې بهرنیو پېرودونکو ته پلورنه کوي. موږ Merchant Center او ستاسو د محصولاتو فید جوړوو، د فید تېروتنې سموو، کمپاینونه د محصول ګروپونو له مخې ترتیبوو او بیډونه د هغو محصولاتو پر بنسټ برابروو چې په رښتیا پلورل کیږي. د Merchant Center وړتیا د هدف هېواد او د Google پالیسیو پورې اړه لري چې له پیل مخکې یې ګورو."
        },
        features: [
            "Merchant Center Setup",
            "Product Feed Creation",
            "Feed Error Fixes",
            "Shopping & Performance Max",
            "Product Group Structure",
            "Conversion Tracking",
            "Bid Optimization",
            "Monthly Sales Report"
        ],
        pricing: {
            basic: {
                name: "Setup",
                price: "AFN 14,000",
                features: [
                    "Merchant Center Setup",
                    "Feed for Up to 100 Products",
                    "Conversion Tracking",
                    "First Campaign Launch",
                    "Ad Budget Paid Separately"
                ]
            },
            professional: {
                name: "Managed",
                price: "AFN 20,000/mo",
                features: [
                    "Feed for Up to 1,000 Products",
                    "Ongoing Feed Fixes",
                    "Product Group Bidding",
                    "Performance Max Campaigns",
                    "Search Term Review",
                    "Monthly Report"
                ]
            },
            enterprise: {
                name: "Scale",
                price: "AFN 40,000+/mo",
                features: [
                    "Large Catalogs",
                    "Multiple Countries",
                    "Automated Feed Rules",
                    "Profit-Based Bidding",
                    "Remarketing Campaigns",
                    "Biweekly Review Calls"
                ]
            }
        }
    },
    {
        id: "product-launch-campaign",
        slug: "product-launch-campaign",
        category: "marketing",
        title: {
            en: "Product Launch Campaigns",
            da: "کمپاین‌های معرفی محصول جدید",
            pa: "د نوي محصول د پیل کمپاینونه"
        },
        shortDesc: {
            en: "Plan and run the launch of a new product, branch or service from start to finish",
            da: "برنامه‌ریزی و اجرای معرفی محصول، شعبه یا خدمت جدید از ابتدا تا انتها",
            pa: "د نوي محصول، څانګې یا خدمت د پیل پلان او اجرا له پیل تر پایه"
        },
        description: {
            en: "We plan a launch in three phases: building interest before, making noise on launch day, and keeping momentum after. That covers the launch page, teaser content, ads, influencer and media outreach, and email or SMS messages, coordinated on one timeline so everything goes out when your product is actually ready.",
            da: "ما معرفی را در سه مرحله برنامه‌ریزی می‌کنیم: ایجاد علاقه پیش از معرفی، سروصدا در روز معرفی و حفظ تحرک پس از آن. این شامل صفحه معرفی، محتوای تیزر، تبلیغات، ارتباط با اینفلوئنسرها و رسانه‌ها و پیام‌های ایمیل یا SMS است که روی یک جدول زمانی هماهنگ می‌شوند تا همه‌چیز زمانی نشر شود که محصول شما واقعاً آماده است.",
            pa: "موږ پیل په درېیو پړاوونو کې پلانوو: له پیل مخکې لیوالتیا جوړول، د پیل په ورځ غږ پورته کول او وروسته یې حرکت ساتل. په دې کې د پیل پاڼه، د ټیزر منځپانګه، اعلانونه، له اغېزمنو کسانو او رسنیو سره اړیکه او د ایمیل یا SMS پیغامونه شامل دي چې په یو مهال‌وېش برابریږي څو هر څه هغه وخت خپاره شي چې ستاسو محصول په رښتیا چمتو وي."
        },
        features: [
            "Launch Strategy & Timeline",
            "Teaser Content",
            "Launch Landing Page",
            "Paid Ads Campaign",
            "Influencer Coordination",
            "Press & Media Outreach",
            "Email & SMS Announcements",
            "Post-Launch Report"
        ],
        pricing: {
            basic: {
                name: "Soft Launch",
                price: "AFN 15,000",
                features: [
                    "Launch Plan & Timeline",
                    "6 Social Posts",
                    "Announcement Graphics",
                    "One Language",
                    "Results Summary"
                ]
            },
            professional: {
                name: "Launch",
                price: "AFN 40,000",
                features: [
                    "3-Phase Launch Plan",
                    "Launch Landing Page",
                    "Teaser & Launch Videos",
                    "Paid Ads Management",
                    "Press Release",
                    "Two Languages"
                ]
            },
            enterprise: {
                name: "Major Launch",
                price: "Custom",
                features: [
                    "Multi-Channel Campaign",
                    "Influencer Program",
                    "Launch Event Support via Partners",
                    "Diaspora Market Targeting",
                    "Three Languages",
                    "Daily Reporting During Launch"
                ]
            }
        }
    },
    {
        id: "market-entry-afghanistan",
        slug: "market-entry-afghanistan",
        category: "marketing",
        title: {
            en: "Afghan Market Entry Support for Foreign Brands",
            da: "پشتیبانی ورود برندهای خارجی به بازار افغانستان",
            pa: "د بهرنیو برنډونو لپاره افغان بازار ته د ننوتلو ملاتړ"
        },
        shortDesc: {
            en: "Local research, localization and digital launch for brands entering Afghanistan",
            da: "تحقیق محلی، بومی‌سازی و معرفی دیجیتال برای برندهایی که وارد افغانستان می‌شوند",
            pa: "محلي څېړنه، ځایی کول او ډیجیټل پیل د هغو برنډونو لپاره چې افغانستان ته راځي"
        },
        description: {
            en: "We help foreign brands understand and reach Afghan customers: desk and field-informed market research, translating and adapting messaging into Dari and Pashto, a localized website and social presence, and launch campaigns on the channels people here actually use. Business registration, import permits and other licences remain the client's responsibility with their own legal advisers; our role is research, localization and marketing.",
            da: "ما به برندهای خارجی کمک می‌کنیم مشتریان افغان را بشناسند و به آن‌ها برسند: تحقیق بازار بر اساس منابع و معلومات محلی، ترجمه و تطبیق پیام‌ها به دری و پشتو، ویب‌سایت و حضور بومی‌شده در شبکه‌های اجتماعی و کمپاین‌های معرفی در کانال‌هایی که مردم اینجا واقعاً استفاده می‌کنند. ثبت تجارت، جواز واردات و دیگر جوازها به عهده خود مشتری و مشاوران حقوقی‌اش است؛ نقش ما تحقیق، بومی‌سازی و بازاریابی است.",
            pa: "موږ له بهرنیو برنډونو سره مرسته کوو چې افغان پېرودونکي وپېژني او ورته ورسېږي: د سرچینو او محلي معلوماتو پر بنسټ د بازار څېړنه، پیغامونه دري او پښتو ته ژباړل او برابرول، ځایی شوې ویب پاڼه او په ټولنیزو رسنیو کې شتون، او په هغو چینلونو کې د پیل کمپاینونه چې دلته خلک یې په رښتیا کاروي. د سوداګرۍ ثبت، د واردولو جواز او نور جوازونه د پېرودونکي او د هغه د حقوقي سلاکارانو مسؤلیت دی؛ زموږ رول څېړنه، ځایی کول او بازار موندنه ده."
        },
        features: [
            "Market & Audience Research",
            "Competitor Landscape",
            "Dari & Pashto Localization",
            "Localized Website",
            "Local Social Media Setup",
            "Channel & Media Recommendations",
            "Launch Campaign",
            "Local Partner Introductions"
        ],
        pricing: {
            basic: {
                name: "Research Brief",
                price: "AFN 35,000",
                features: [
                    "Market Overview Report",
                    "Audience & Channel Insights",
                    "Competitor Snapshot",
                    "Localization Notes",
                    "Briefing Call"
                ]
            },
            professional: {
                name: "Localize & Launch",
                price: "AFN 90,000+",
                features: [
                    "Everything in Research Brief",
                    "Brand Message Localization",
                    "Localized Website or Landing Page",
                    "Social Media Setup",
                    "3-Month Launch Campaign",
                    "Monthly Reporting"
                ]
            },
            enterprise: {
                name: "Market Partner",
                price: "Custom",
                features: [
                    "Ongoing Marketing Operations",
                    "Three Languages",
                    "Distributor & Partner Introductions",
                    "Customer Feedback Research",
                    "Dedicated Account Manager",
                    "Quarterly Strategy Reviews"
                ]
            }
        }
    },
    {
        id: "proposal-grant-writing",
        slug: "proposal-grant-writing",
        category: "content",
        title: {
            en: "Proposal & Grant Writing",
            da: "نوشتن پروپوزل و درخواست کمک مالی",
            pa: "د پروپوزل او مرستې غوښتنلیک لیکل"
        },
        shortDesc: {
            en: "Clear, well-structured proposals for donors, tenders and business clients",
            da: "پروپوزل‌های روشن و منظم برای تمویل‌کنندگان، داوطلبی‌ها و مشتریان تجاری",
            pa: "روښانه او منظم پروپوزلونه د تمویلوونکو، داوطلبیو او سوداګریزو پیرودونکو لپاره"
        },
        description: {
            en: "We help NGOs, social enterprises and companies write proposals for donor calls, tenders and business pitches in clear English, with Dari or Pashto versions where needed. Working from your project details and data, we draft the narrative, logframe, budget notes and annexes to the funder's template; funding decisions rest with the donor, so we focus on a complete, well-argued submission.",
            da: "ما به مؤسسات، شرکت‌های اجتماعی و شرکت‌ها کمک می‌کنیم پروپوزل‌هایی برای فراخوان‌های تمویل‌کنندگان، داوطلبی‌ها و پیشنهادهای تجاری به انگلیسی روشن بنویسند، همراه با نسخه دری یا پشتو در صورت نیاز. بر اساس جزئیات و معلومات پروژه شما، روایت، چارچوب منطقی (logframe)، یادداشت‌های بودجه و ضمیمه‌ها را مطابق قالب تمویل‌کننده آماده می‌کنیم؛ تصمیم تمویل با تمویل‌کننده است، پس تمرکز ما روی یک درخواست کامل و مستدل است.",
            pa: "موږ له موسسو، ټولنیزو شرکتونو او شرکتونو سره مرسته کوو چې د تمویلوونکو بلنو، داوطلبیو او سوداګریزو وړاندیزونو لپاره په روښانه انګلیسي پروپوزلونه ولیکي، او که اړتیا وي دري یا پښتو نسخه هم. ستاسو د پروژې د جزییاتو او معلوماتو پر بنسټ، روایت، منطقي چوکاټ (logframe)، د بودیجې یادښتونه او ضمیمې د تمویلوونکي د قالب سره سم چمتو کوو؛ د تمویل پرېکړه د تمویلوونکي ده، نو زموږ تمرکز په یو بشپړ او مستدل غوښتنلیک دی."
        },
        features: [
            "Donor & Grant Proposals",
            "Tender Responses",
            "Business Proposals",
            "Logframe & Theory of Change",
            "Budget Narrative Support",
            "Funder Template Compliance",
            "Dari & Pashto Versions",
            "Editing & Proofreading"
        ],
        pricing: {
            basic: {
                name: "Review & Edit",
                price: "AFN 8,000",
                features: [
                    "Review of Your Draft",
                    "Structure & Clarity Edits",
                    "Proofreading",
                    "Written Feedback Notes"
                ]
            },
            professional: {
                name: "Full Proposal",
                price: "AFN 30,000",
                features: [
                    "Concept Note or Full Proposal",
                    "Narrative Writing",
                    "Logframe or Results Framework",
                    "Budget Narrative",
                    "Funder Template Formatting",
                    "2 Revision Rounds"
                ]
            },
            enterprise: {
                name: "Major Bid",
                price: "AFN 60,000+",
                features: [
                    "Large Multi-Section Proposals",
                    "Tender Compliance Checklist",
                    "Annexes & Capacity Statements",
                    "Translated Versions",
                    "Tight-Deadline Support",
                    "Submission Readiness Review"
                ]
            }
        }
    }
];

export default services;
