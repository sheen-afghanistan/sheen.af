const services = [
    {
        id: "logo-design",
        slug: "logo-design",
        category: "design",
        title: {
            en: "Logo Design",
            da: "دیزاین لوگو",
            pa: "د لوګو ډیزاین"
        },
        shortDesc: {
            en: "A distinctive logo that works in Latin, Dari and Pashto scripts",
            da: "لوگوی متمایز که با خط لاتین، دری و پشتو به خوبی کار می‌کند",
            pa: "ځانګړی لوګو چې په لاتین، دري او پښتو لیکدود ښه کار کوي"
        },
        description: {
            en: "We design logos from a short brief and a few rounds of concepts, then deliver them in every format you will need — for signboards, stamps, social media and the web. Where your name appears in Dari or Pashto as well as English, we design both versions to sit together properly rather than adding the second script as an afterthought.",
            da: "ما لوگو را بر اساس یک معلومات مختصر و چند مرحله طرح اولیه دیزاین می‌کنیم و سپس در تمام فارمت‌هایی که نیاز دارید تحویل می‌دهیم — برای لوحه، مهر، شبکه‌های اجتماعی و ویب‌سایت. اگر نام شما به دری یا پشتو هم نوشته می‌شود، هر دو نسخه را طوری دیزاین می‌کنیم که به‌درستی در کنار هم قرار بگیرند.",
            pa: "موږ لوګو د یو لنډ معلومات او څو پړاوه لومړنیو طرحو له مخې ډیزاین کوو، بیا یې په ټولو هغو فارمټونو کې سپارو چې تاسو ورته اړتیا لرئ — د تختې، مهر، ټولنیزو رسنیو او ویب پاڼې لپاره. که ستاسو نوم په دري یا پښتو هم لیکل کیږي، دواړه بڼې داسې ډیزاینوو چې په سمه توګه یو له بل سره برابرې وي."
        },
        features: [
            "Multiple Initial Concepts",
            "Bilingual Logo Versions",
            "Vector Source Files",
            "Print & Web Formats",
            "Colour & Monochrome Variants",
            "Favicon & Social Icons",
            "Basic Usage Guide",
            "Full Copyright Transfer"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 5,000",
                features: [
                    "2 Logo Concepts",
                    "2 Revision Rounds",
                    "PNG & JPG Files",
                    "Colour & Black Versions"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 10,000",
                features: [
                    "4 Logo Concepts",
                    "4 Revision Rounds",
                    "English + Dari/Pashto Versions",
                    "Vector Files (AI, SVG, PDF)",
                    "Favicon & Social Media Icons",
                    "1-Page Usage Guide"
                ]
            },
            enterprise: {
                name: "Premium",
                price: "AFN 18,000+",
                features: [
                    "6 Logo Concepts",
                    "Unlimited Revisions",
                    "Trilingual Versions",
                    "Full Vector Package",
                    "Stationery Mockups",
                    "Brand Colour & Font Selection"
                ]
            }
        }
    },
    {
        id: "brand-identity",
        slug: "brand-identity",
        category: "design",
        title: {
            en: "Brand Identity Design",
            da: "دیزاین هویت برند",
            pa: "د برنډ هویت ډیزاین"
        },
        shortDesc: {
            en: "A complete visual identity your team can apply consistently",
            da: "هویت بصری کامل که تیم شما بتواند به‌طور یکسان استفاده کند",
            pa: "بشپړ لیدنیز هویت چې ستاسو ټیم یې په یو شان ډول کارولی شي"
        },
        description: {
            en: "Beyond the logo, we define the colours, typefaces, imagery style and tone that make your business recognisable everywhere it appears. You receive a brand guidelines document and ready-to-use templates, including font pairings that work for Dari and Pashto as well as English.",
            da: "فراتر از لوگو، ما رنگ‌ها، فونت‌ها، سبک تصاویر و لحن را تعریف می‌کنیم تا کسب‌وکار شما در هر جا قابل شناسایی باشد. شما یک رهنمود برند و قالب‌های آماده استفاده دریافت می‌کنید، شامل ترکیب فونت‌هایی که برای دری، پشتو و انگلیسی مناسب‌اند.",
            pa: "له لوګو هاخوا، موږ رنګونه، فونټونه، د انځورونو سبک او لهجه ټاکو ترڅو ستاسو سوداګري په هر ځای کې وپیژندل شي. تاسو د برنډ لارښود او د کارولو لپاره چمتو قالبونه ترلاسه کوئ، په شمول د هغو فونټونو چې د دري، پښتو او انګلیسي لپاره مناسب دي."
        },
        features: [
            "Logo & Logo Variations",
            "Colour Palette",
            "Typography for Latin & Arabic Script",
            "Brand Guidelines Document",
            "Business Card & Letterhead",
            "Social Media Templates",
            "Imagery & Icon Style",
            "Brand Voice Notes"
        ],
        pricing: {
            basic: {
                name: "Essentials",
                price: "AFN 18,000",
                features: [
                    "Logo Design",
                    "Colour Palette & Fonts",
                    "Business Card Design",
                    "Mini Brand Guide (5 Pages)"
                ]
            },
            professional: {
                name: "Complete",
                price: "AFN 35,000",
                features: [
                    "Logo & Variations",
                    "Full Brand Guidelines",
                    "Stationery Set",
                    "Social Media Templates",
                    "Email Signature",
                    "Bilingual Typography"
                ]
            },
            enterprise: {
                name: "Corporate",
                price: "AFN 60,000+",
                features: [
                    "Brand Strategy Workshop",
                    "Complete Identity System",
                    "Signage & Vehicle Graphics",
                    "Presentation & Document Templates",
                    "Icon Set",
                    "Trilingual Brand Guidelines"
                ]
            }
        }
    },
    {
        id: "ui-ux-design",
        slug: "ui-ux-design",
        category: "design",
        title: {
            en: "UI/UX Design",
            da: "دیزاین UI/UX",
            pa: "د UI/UX ډیزاین"
        },
        shortDesc: {
            en: "Clear, usable interfaces for websites and apps, designed in Figma",
            da: "رابط‌های واضح و آسان برای ویب‌سایت و اپلیکیشن، دیزاین‌شده در Figma",
            pa: "د ویب پاڼو او اپونو لپاره روښانه او اسانه انټرفیسونه، په Figma کې ډیزاین شوي"
        },
        description: {
            en: "We map out how people will use your product, build wireframes, then produce clickable high-fidelity designs in Figma ready for developers. Every layout is designed in both left-to-right and right-to-left versions where needed, so Dari and Pashto screens are planned rather than mirrored at the last minute.",
            da: "ما مسیر استفاده مردم از محصول شما را ترسیم می‌کنیم، وایرفریم می‌سازیم و سپس دیزاین‌های دقیق و قابل کلیک در Figma آماده برای پروگرامرها تهیه می‌کنیم. هر صفحه در صورت نیاز به هر دو حالت چپ‌به‌راست و راست‌به‌چپ دیزاین می‌شود تا صفحات دری و پشتو از ابتدا برنامه‌ریزی شوند.",
            pa: "موږ دا ټاکو چې خلک به ستاسو محصول څنګه کاروي، وایرفریمونه جوړوو، بیا په Figma کې د کلیک وړ دقیق ډیزاینونه چمتو کوو چې پروګرامرانو ته چمتو وي. هر پاڼه د اړتیا په صورت کې په دواړو کیڼ نه ښي او ښي نه کیڼ بڼو ډیزاینیږي، ترڅو د دري او پښتو پاڼې له پیله پلان شي."
        },
        features: [
            "User Flows & Wireframes",
            "High-Fidelity Figma Designs",
            "Clickable Prototypes",
            "RTL & LTR Layouts",
            "Mobile & Desktop Screens",
            "Usability Review",
            "Developer Handoff",
            "Reusable Components"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 14,000",
                features: [
                    "Up to 5 Screens",
                    "Wireframes",
                    "High-Fidelity Design",
                    "1 Language Direction",
                    "2 Revision Rounds"
                ]
            },
            professional: {
                name: "Product",
                price: "AFN 35,000",
                features: [
                    "Up to 15 Screens",
                    "User Flows",
                    "Clickable Prototype",
                    "RTL & LTR Versions",
                    "Mobile & Desktop",
                    "Developer Handoff"
                ]
            },
            enterprise: {
                name: "Platform",
                price: "AFN 60,000+",
                features: [
                    "Unlimited Screens",
                    "UX Audit of Existing Product",
                    "User Testing Sessions",
                    "Component Library",
                    "RTL & LTR Versions",
                    "Design Support During Development"
                ]
            }
        }
    },
    {
        id: "graphic-design",
        slug: "graphic-design",
        category: "design",
        title: {
            en: "Graphic Design",
            da: "دیزاین گرافیک",
            pa: "ګرافیک ډیزاین"
        },
        shortDesc: {
            en: "Posters, flyers, ads and everyday visuals for your business",
            da: "پوستر، اعلان، تبلیغات و طرح‌های روزمره برای کسب‌وکار شما",
            pa: "پوسټرونه، اعلانونه، تبلیغات او ورځني لیدنیز ډیزاینونه ستاسو سوداګرۍ لپاره"
        },
        description: {
            en: "We handle the day-to-day design work most businesses need — posters, flyers, menus, certificates, event banners and digital ads. Designs are delivered print-ready or web-ready, with clean Dari and Pashto typesetting that avoids broken letters and wrong text direction.",
            da: "ما کارهای دیزاین روزمره‌ای را که اکثر کسب‌وکارها نیاز دارند انجام می‌دهیم — پوستر، اعلان، مینو، تصدیق‌نامه، بنر محافل و تبلیغات دیجیتال. دیزاین‌ها آماده چاپ یا آماده ویب تحویل داده می‌شوند و متن دری و پشتو بدون حروف شکسته و جهت نادرست تنظیم می‌شود.",
            pa: "موږ هغه ورځني ډیزاین کارونه ترسره کوو چې ډیری سوداګرۍ ورته اړتیا لري — پوسټرونه، اعلانونه، مینوګانې، سندونه، د غونډو بنرونه او ډیجیټل اعلانونه. ډیزاینونه د چاپ یا ویب لپاره چمتو سپارل کیږي، او دري او پښتو متن پرته له ماتو تورو او ناسم لوري تنظیمیږي."
        },
        features: [
            "Posters & Flyers",
            "Digital Ads",
            "Menus & Price Lists",
            "Certificates & Invitations",
            "Correct Dari/Pashto Typesetting",
            "Print-Ready Files",
            "Editable Source Files",
            "Fast Turnaround"
        ],
        pricing: {
            basic: {
                name: "Single",
                price: "AFN 3,500",
                features: [
                    "1 Design",
                    "2 Revision Rounds",
                    "Print or Web File",
                    "1 Language"
                ]
            },
            professional: {
                name: "Pack",
                price: "AFN 12,000",
                features: [
                    "5 Designs",
                    "3 Revision Rounds",
                    "Print & Web Files",
                    "Bilingual Versions",
                    "Editable Source Files"
                ]
            },
            enterprise: {
                name: "Monthly",
                price: "AFN 25,000/mo",
                features: [
                    "Up to 15 Designs per Month",
                    "Priority Turnaround",
                    "Trilingual Versions",
                    "Source Files Included",
                    "Dedicated Designer"
                ]
            }
        }
    },
    {
        id: "social-media-design",
        slug: "social-media-design",
        category: "design",
        title: {
            en: "Social Media Graphics",
            da: "دیزاین گرافیک شبکه‌های اجتماعی",
            pa: "د ټولنیزو رسنیو ګرافیک"
        },
        shortDesc: {
            en: "Posts, stories and covers for Facebook, Instagram and TikTok",
            da: "پست، استوری و کاور برای فیسبوک، انستاگرام و تیک‌تاک",
            pa: "د فېسبوک، انسټاګرام او ټیک ټاک لپاره پوسټونه، سټورۍ او کاورونه"
        },
        description: {
            en: "We create on-brand graphics sized correctly for each platform, from feed posts and stories to page covers and ad creatives. You can order a monthly set or a reusable template pack your own staff can edit in Canva.",
            da: "ما گرافیک‌های هماهنگ با برند شما را با اندازه درست برای هر پلتفورم می‌سازیم، از پست و استوری تا کاور صفحه و تبلیغات. شما می‌توانید یک بسته ماهانه یا یک بسته قالب قابل استفاده مجدد سفارش دهید که کارمندان شما خودشان در Canva تغییر دهند.",
            pa: "موږ ستاسو له برنډ سره برابر ګرافیکونه د هر پلیټفارم لپاره په سم اندازه جوړوو، له پوسټونو او سټوریو نیولې د پاڼې کاور او اعلانونو پورې. تاسو کولی شئ میاشتنی سیټ یا د بیا کارولو وړ قالبونه وغواړئ چې ستاسو کارکوونکي یې پخپله په Canva کې بدلولی شي."
        },
        features: [
            "Feed Posts & Carousels",
            "Stories & Reels Covers",
            "Page Cover Images",
            "Ad Creatives",
            "Editable Canva Templates",
            "Bilingual Captions on Graphics",
            "Platform-Correct Sizes",
            "Consistent Brand Style"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 7,000/mo",
                features: [
                    "12 Post Designs",
                    "1 Platform",
                    "2 Revision Rounds",
                    "1 Language"
                ]
            },
            professional: {
                name: "Growth",
                price: "AFN 14,000/mo",
                features: [
                    "20 Posts + 8 Stories",
                    "Up to 3 Platforms",
                    "Bilingual Designs",
                    "Carousel Posts",
                    "Cover Image Updates"
                ]
            },
            enterprise: {
                name: "Template Kit",
                price: "AFN 20,000+",
                features: [
                    "30 Editable Canva Templates",
                    "Posts, Stories & Covers",
                    "Trilingual Layouts",
                    "Brand Style Sheet",
                    "Training Session for Your Team"
                ]
            }
        }
    },
    {
        id: "print-design",
        slug: "print-design",
        category: "design",
        title: {
            en: "Print Design",
            da: "دیزاین چاپی",
            pa: "د چاپ ډیزاین"
        },
        shortDesc: {
            en: "Brochures, business cards, banners and signage ready for the printer",
            da: "بروشور، کارت ویزیت، بنر و لوحه آماده برای چاپخانه",
            pa: "بروشرونه، د سوداګرۍ کارتونه، بنرونه او تختې د چاپخونې لپاره چمتو"
        },
        description: {
            en: "We design brochures, business cards, roll-up banners, shop signs and catalogues, and prepare files with the correct bleed, colour mode and resolution so local printers can print them without surprises. If you prefer, we can coordinate directly with your printing house in Kabul.",
            da: "ما بروشور، کارت ویزیت، بنر رول‌آپ، لوحه دکان و کتلاگ دیزاین می‌کنیم و فایل‌ها را با حاشیه، حالت رنگ و کیفیت درست آماده می‌سازیم تا چاپخانه‌های محلی بدون مشکل آن‌ها را چاپ کنند. در صورت تمایل، ما مستقیماً با چاپخانه شما در کابل هماهنگی می‌کنیم.",
            pa: "موږ بروشرونه، د سوداګرۍ کارتونه، رول اپ بنرونه، د دوکان تختې او کتلاګونه ډیزاینوو، او فایلونه د سمې څنډې، رنګ حالت او کیفیت سره چمتو کوو ترڅو سیمه ییزې چاپخونې یې پرته له ستونزې چاپ کړي. که وغواړئ، موږ په کابل کې ستاسو له چاپخونې سره مستقیم همغږي کوو."
        },
        features: [
            "Business Cards & Letterheads",
            "Brochures & Catalogues",
            "Roll-Up & Flex Banners",
            "Shop Signage",
            "Print-Ready PDF (CMYK, Bleed)",
            "Dari/Pashto Typesetting",
            "Printer Coordination",
            "Editable Source Files"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 4,000",
                features: [
                    "Business Card or Flyer",
                    "2 Revision Rounds",
                    "Print-Ready PDF",
                    "1 Language"
                ]
            },
            professional: {
                name: "Standard",
                price: "AFN 12,000",
                features: [
                    "Tri-Fold Brochure or Banner Set",
                    "3 Revision Rounds",
                    "Bilingual Layout",
                    "Print-Ready PDF",
                    "Source Files"
                ]
            },
            enterprise: {
                name: "Catalogue",
                price: "AFN 25,000+",
                features: [
                    "Multi-Page Catalogue or Profile",
                    "Product Photo Retouching",
                    "Trilingual Layout",
                    "Printer Coordination",
                    "Source Files",
                    "Proof Check Before Print"
                ]
            }
        }
    },
    {
        id: "packaging-design",
        slug: "packaging-design",
        category: "design",
        title: {
            en: "Packaging Design",
            da: "دیزاین بسته‌بندی",
            pa: "د بسته بندۍ ډیزاین"
        },
        shortDesc: {
            en: "Labels, boxes and bags that sell on local shelves and abroad",
            da: "لیبل، قطی و خریطه که در بازار داخلی و خارجی فروش داشته باشد",
            pa: "لیبلونه، کڅوړې او بکسونه چې په کورني او بهرني بازار کې وپلورل شي"
        },
        description: {
            en: "We design labels, boxes, pouches and bags for products such as saffron, dried fruit, honey, tea and cosmetics. For export, we lay out the English text, ingredients, weight and barcode areas so packaging can be adapted to the labelling rules of the destination market, which you or your importer should confirm.",
            da: "ما لیبل، قطی، پاکت و خریطه برای محصولاتی مانند زعفران، میوه خشک، عسل، چای و لوازم آرایشی دیزاین می‌کنیم. برای صادرات، متن انگلیسی، مواد تشکیل‌دهنده، وزن و جای بارکد را طوری تنظیم می‌کنیم که بسته‌بندی با قوانین لیبل‌گذاری کشور مقصد قابل تطبیق باشد؛ این قوانین باید توسط شما یا واردکننده تأیید شود.",
            pa: "موږ د زعفرانو، وچو مېوو، شاتو، چای او ښکلا توکو په څیر محصولاتو لپاره لیبلونه، بکسونه، پاکټونه او کڅوړې ډیزاینوو. د صادراتو لپاره، انګلیسي متن، اجزا، وزن او د بارکوډ ځای داسې تنظیموو چې بسته بندي د منزل هېواد د لیبل قواعدو سره برابره شي، چې دا قواعد باید تاسو یا ستاسو واردوونکی تایید کړي."
        },
        features: [
            "Product Labels",
            "Boxes & Pouches",
            "Dieline Preparation",
            "Export-Ready English Text Layout",
            "Barcode & Nutrition Areas",
            "3D Packaging Mockups",
            "Print-Ready Files",
            "Product Range Variants"
        ],
        pricing: {
            basic: {
                name: "Label",
                price: "AFN 7,000",
                features: [
                    "1 Product Label",
                    "2 Concepts",
                    "Print-Ready File",
                    "3D Mockup"
                ]
            },
            professional: {
                name: "Product Line",
                price: "AFN 20,000",
                features: [
                    "Box or Pouch Design",
                    "Up to 3 Variants",
                    "Dieline Setup",
                    "Bilingual Text",
                    "3D Mockups",
                    "Printer-Ready Files"
                ]
            },
            enterprise: {
                name: "Export Range",
                price: "AFN 40,000+",
                features: [
                    "Full Product Range",
                    "Outer Carton Design",
                    "Export Label Layout",
                    "Barcode Placement",
                    "Photo-Realistic Renders",
                    "Printer Coordination"
                ]
            }
        }
    },
    {
        id: "motion-graphics",
        slug: "motion-graphics",
        category: "design",
        title: {
            en: "Motion Graphics & Animation",
            da: "موشن گرافیک و انیمیشن",
            pa: "موشن ګرافیک او انیمیشن"
        },
        shortDesc: {
            en: "Animated explainers, logo reveals and social videos",
            da: "ویدیوهای توضیحی انیمیشنی، معرفی لوگو و ویدیوهای شبکه‌های اجتماعی",
            pa: "انیمیشني تشریحي ویډیوګانې، د لوګو معرفي او ټولنیزې ویډیوګانې"
        },
        description: {
            en: "We produce 2D animated videos that explain a product, service or process in under two minutes, along with short animated posts and logo intros. Scripts and on-screen text can be prepared in Dari, Pashto and English, with professional voice-over added if needed.",
            da: "ما ویدیوهای انیمیشنی دوبعدی می‌سازیم که یک محصول، خدمت یا روند را در کمتر از دو دقیقه توضیح دهد، همراه با پست‌های کوتاه انیمیشنی و معرفی لوگو. سناریو و متن روی صفحه به دری، پشتو و انگلیسی آماده می‌شود و در صورت نیاز صداگذاری حرفه‌ای اضافه می‌گردد.",
            pa: "موږ دوه اړخیزې انیمیشني ویډیوګانې جوړوو چې یو محصول، خدمت یا پروسه له دوو دقیقو کم وخت کې تشریح کړي، او همداراز لنډ انیمیشني پوسټونه او د لوګو معرفي. سناریو او پر پرده متن په دري، پښتو او انګلیسي چمتو کیږي، او د اړتیا په صورت کې مسلکي غږ اضافه کیږي."
        },
        features: [
            "2D Explainer Videos",
            "Logo Animation",
            "Animated Social Posts",
            "Scriptwriting",
            "Storyboards",
            "Trilingual Subtitles",
            "Voice-Over & Music",
            "Vertical & Horizontal Formats"
        ],
        pricing: {
            basic: {
                name: "Short",
                price: "AFN 10,000",
                features: [
                    "Logo Animation or 15-Second Clip",
                    "Licensed Music",
                    "2 Revision Rounds",
                    "HD Export"
                ]
            },
            professional: {
                name: "Explainer",
                price: "AFN 35,000",
                features: [
                    "Up to 60 Seconds",
                    "Script & Storyboard",
                    "Custom Illustrations",
                    "Voice-Over (1 Language)",
                    "Subtitles",
                    "Social Media Cuts"
                ]
            },
            enterprise: {
                name: "Premium",
                price: "AFN 70,000+",
                features: [
                    "Up to 2 Minutes",
                    "Character Animation",
                    "Voice-Over in 3 Languages",
                    "Sound Design",
                    "Multiple Format Exports",
                    "Unlimited Minor Revisions"
                ]
            }
        }
    },
    {
        id: "video-production",
        slug: "video-production",
        category: "design",
        title: {
            en: "Video Production",
            da: "تولید ویدیو",
            pa: "د ویډیو تولید"
        },
        shortDesc: {
            en: "On-location filming for ads, company profiles and events",
            da: "فیلم‌برداری در محل برای تبلیغات، معرفی شرکت و محافل",
            pa: "په ځای کې فلم اخیستل د اعلانونو، شرکت معرفي او غونډو لپاره"
        },
        description: {
            en: "Our crew films commercials, company profile videos, interviews and events in Kabul and, by arrangement, in other provinces. We handle planning, filming, sound and editing, and deliver versions sized for TV, YouTube and social media.",
            da: "تیم ما تبلیغات، ویدیوی معرفی شرکت، مصاحبه و محافل را در کابل و با هماهنگی قبلی در ولایات دیگر فیلم‌برداری می‌کند. ما برنامه‌ریزی، فیلم‌برداری، صدا و ایدیت را انجام می‌دهیم و نسخه‌هایی مناسب برای تلویزیون، یوتیوب و شبکه‌های اجتماعی تحویل می‌دهیم.",
            pa: "زموږ ټیم په کابل کې او د مخکینۍ همغږۍ سره په نورو ولایتونو کې اعلانونه، د شرکت معرفي ویډیوګانې، مرکې او غونډې فلم کوي. موږ پلان جوړونه، فلم اخیستل، غږ او ایډیټ ترسره کوو، او د تلویزیون، یوټیوب او ټولنیزو رسنیو لپاره مناسبې بڼې سپارو."
        },
        features: [
            "Commercials & Promo Videos",
            "Company Profile Films",
            "Interviews & Testimonials",
            "Event Coverage",
            "Professional Camera & Sound",
            "Drone Footage (Where Permitted)",
            "Editing & Colour Grading",
            "Multi-Platform Delivery"
        ],
        pricing: {
            basic: {
                name: "Half Day",
                price: "AFN 15,000",
                features: [
                    "4-Hour Shoot",
                    "1 Camera Operator",
                    "Basic Edit (Up to 1 Minute)",
                    "Licensed Music"
                ]
            },
            professional: {
                name: "Full Day",
                price: "AFN 35,000",
                features: [
                    "8-Hour Shoot",
                    "2-Person Crew",
                    "Lighting & Sound Kit",
                    "Edited Video (Up to 3 Minutes)",
                    "Subtitles",
                    "Social Media Cut"
                ]
            },
            enterprise: {
                name: "Production",
                price: "Custom",
                features: [
                    "Multi-Day Shoots",
                    "Script & Storyboard",
                    "Full Crew",
                    "Talent & Location Coordination",
                    "Colour Grading & Sound Mix",
                    "Multiple Deliverables"
                ]
            }
        }
    },
    {
        id: "video-editing",
        slug: "video-editing",
        category: "design",
        title: {
            en: "Video Editing",
            da: "ایدیت ویدیو",
            pa: "د ویډیو ایډیټ"
        },
        shortDesc: {
            en: "Turn raw footage into polished videos, reels and YouTube content",
            da: "تبدیل فیلم خام به ویدیوهای حرفه‌ای، ریلز و محتوای یوتیوب",
            pa: "خام فلم په ښکلو ویډیوګانو، ریلز او یوټیوب منځپانګې بدلول"
        },
        description: {
            en: "Send us your raw footage and we will cut it into finished videos with titles, music, colour correction and subtitles. We work with phone footage as well as camera files, and can accept large uploads in parts if your connection is slow.",
            da: "فیلم خام خود را برای ما بفرستید و ما آن را با عنوان، موسیقی، اصلاح رنگ و زیرنویس به ویدیوی نهایی تبدیل می‌کنیم. ما با فیلم موبایل و کمره هر دو کار می‌کنیم و اگر انترنت شما کند است، فایل‌های بزرگ را به‌صورت چند بخش دریافت می‌کنیم.",
            pa: "خپل خام فلم موږ ته راولېږئ او موږ به یې د سرلیک، موسیقۍ، رنګ سمون او ژباړې سره په بشپړې ویډیو بدل کړو. موږ د موبایل او کمرې دواړو فلمونو سره کار کوو، او که ستاسو انټرنټ ورو وي، لوی فایلونه په څو برخو کې ترلاسه کوو."
        },
        features: [
            "Cutting & Storytelling",
            "Subtitles in Dari, Pashto & English",
            "Colour Correction",
            "Titles & Lower Thirds",
            "Licensed Music & Sound Cleanup",
            "Reels & Shorts Formats",
            "YouTube Thumbnails",
            "Chunked Uploads for Slow Connections"
        ],
        pricing: {
            basic: {
                name: "Reel",
                price: "AFN 3,500",
                features: [
                    "Up to 60-Second Video",
                    "Music & Captions",
                    "Vertical Format",
                    "2 Revision Rounds"
                ]
            },
            professional: {
                name: "Standard",
                price: "AFN 10,000",
                features: [
                    "Up to 10-Minute Video",
                    "Colour Correction",
                    "Subtitles (1 Language)",
                    "Titles & Graphics",
                    "Thumbnail Design"
                ]
            },
            enterprise: {
                name: "Monthly",
                price: "AFN 30,000/mo",
                features: [
                    "Up to 4 Long Videos + 12 Reels",
                    "Subtitles in 3 Languages",
                    "Thumbnails Included",
                    "Priority Turnaround",
                    "Dedicated Editor"
                ]
            }
        }
    },
    {
        id: "product-photography",
        slug: "product-photography",
        category: "design",
        title: {
            en: "Product Photography",
            da: "عکاسی محصولات",
            pa: "د محصولاتو عکاسي"
        },
        shortDesc: {
            en: "Clean product photos for online stores, catalogues and ads",
            da: "عکس‌های تمیز محصولات برای فروشگاه آنلاین، کتلاگ و تبلیغات",
            pa: "د آنلاین پلورنځیو، کتلاګونو او اعلانونو لپاره پاک د محصولاتو انځورونه"
        },
        description: {
            en: "We photograph products on white backgrounds for online marketplaces and in styled settings for social media and catalogues. Images are retouched and exported in the sizes required by Amazon, Etsy, Shopify and Facebook, which matters for carpets, jewellery, saffron and other goods sold to buyers abroad.",
            da: "ما محصولات را با پس‌زمینه سفید برای مارکیت‌های آنلاین و در صحنه‌های آراسته برای شبکه‌های اجتماعی و کتلاگ عکاسی می‌کنیم. عکس‌ها ریتاچ شده و در اندازه‌های مورد نیاز Amazon، Etsy، Shopify و فیسبوک صادر می‌شوند؛ این موضوع برای قالین، زیورات، زعفران و کالاهایی که به مشتریان خارجی فروخته می‌شوند اهمیت دارد.",
            pa: "موږ محصولات د آنلاین بازارونو لپاره په سپینه شالید او د ټولنیزو رسنیو او کتلاګونو لپاره په ښکلو صحنو کې عکسوو. انځورونه ریټچ کیږي او د Amazon، Etsy، Shopify او فېسبوک په غوښتل شوو اندازو صادریږي، چې دا د غالیو، ګاڼو، زعفرانو او نورو هغو توکو لپاره مهم دي چې بهرنیو پیرودونکو ته پلورل کیږي."
        },
        features: [
            "White-Background Photos",
            "Styled Lifestyle Shots",
            "Detail & Texture Close-Ups",
            "Professional Retouching",
            "Marketplace-Ready Sizes",
            "Carpet & Large-Item Photography",
            "360° Product Spins",
            "Studio or On-Site Shoots"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 6,000",
                features: [
                    "Up to 10 Products",
                    "White Background",
                    "2 Angles per Product",
                    "Basic Retouching"
                ]
            },
            professional: {
                name: "Catalogue",
                price: "AFN 18,000",
                features: [
                    "Up to 30 Products",
                    "White Background + Styled Shots",
                    "4 Angles per Product",
                    "Detail Close-Ups",
                    "Marketplace-Ready Exports"
                ]
            },
            enterprise: {
                name: "Full Shoot",
                price: "AFN 35,000+",
                features: [
                    "Large Product Ranges",
                    "Lifestyle Scenes & Models",
                    "Carpet & Large-Item Setup",
                    "360° Spins",
                    "Advanced Retouching",
                    "On-Site Shoot Option"
                ]
            }
        }
    },
    {
        id: "illustration",
        slug: "illustration",
        category: "design",
        title: {
            en: "Custom Illustration",
            da: "تصویرسازی سفارشی",
            pa: "ځانګړی انځورګري"
        },
        shortDesc: {
            en: "Original illustrations for books, brands, apps and campaigns",
            da: "تصاویر اصلی برای کتاب، برند، اپلیکیشن و کمپاین",
            pa: "اصلي انځورونه د کتابونو، برنډونو، اپونو او کمپاینونو لپاره"
        },
        description: {
            en: "We draw original digital illustrations — characters, scenes, icons and infographics — that reflect Afghan people, places and culture authentically rather than relying on generic stock imagery. Typical uses include children's books, educational material, NGO campaigns, app screens and packaging.",
            da: "ما تصاویر دیجیتال اصلی می‌کشیم — کرکتر، صحنه، آیکن و اینفوگرافیک — که مردم، مکان‌ها و فرهنگ افغانستان را به‌طور واقعی نشان دهد، به جای استفاده از تصاویر عمومی آماده. موارد استفاده معمول شامل کتاب کودکان، مواد آموزشی، کمپاین‌های موسسات، صفحات اپلیکیشن و بسته‌بندی است.",
            pa: "موږ اصلي ډیجیټل انځورونه جوړوو — کرکټرونه، صحنې، آیکونونه او انفوګرافیکونه — چې افغان خلک، ځایونه او کلتور په ریښتینې توګه وښيي، نه دا چې په عمومي چمتو انځورونو تکیه وکړي. معمول کارونې یې د ماشومانو کتابونه، تعلیمي مواد، د موسسو کمپاینونه، د اپ پاڼې او بسته بندي دي."
        },
        features: [
            "Character Design",
            "Book & Educational Illustrations",
            "Infographics",
            "Custom Icon Sets",
            "Culturally Accurate Afghan Imagery",
            "Vector & Raster Formats",
            "Print & Digital Use",
            "Commercial Usage Rights"
        ],
        pricing: {
            basic: {
                name: "Single",
                price: "AFN 5,000",
                features: [
                    "1 Spot Illustration",
                    "Sketch Approval Stage",
                    "2 Revision Rounds",
                    "High-Resolution File"
                ]
            },
            professional: {
                name: "Set",
                price: "AFN 20,000",
                features: [
                    "Up to 6 Illustrations",
                    "Consistent Style",
                    "Character Design",
                    "Vector Files",
                    "Commercial Rights"
                ]
            },
            enterprise: {
                name: "Book / Campaign",
                price: "AFN 45,000+",
                features: [
                    "Full Book or Campaign",
                    "Character Sheets",
                    "Layout With Text",
                    "Print-Ready Files",
                    "Full Rights Transfer"
                ]
            }
        }
    },
    {
        id: "presentation-design",
        slug: "presentation-design",
        category: "design",
        title: {
            en: "Presentation Design",
            da: "دیزاین پرزنتیشن",
            pa: "د پریزنټیشن ډیزاین"
        },
        shortDesc: {
            en: "Pitch decks and reports that look professional and read clearly",
            da: "پرزنتیشن و گزارش‌هایی با ظاهر حرفه‌ای و خوانا",
            pa: "پریزنټیشنونه او راپورونه چې مسلکي ښکاري او په اسانۍ لوستل کیږي"
        },
        description: {
            en: "We redesign your slides for investor pitches, donor proposals, conferences and internal reports, turning dense text and tables into clear charts and layouts. Decks are delivered in PowerPoint or Google Slides, with a master template so your team can keep building on it, including RTL slides for Dari and Pashto.",
            da: "ما سلایدهای شما را برای ارائه به سرمایه‌گذاران، پیشنهادهای تمویل‌کنندگان، کنفرانس‌ها و گزارش‌های داخلی دوباره دیزاین می‌کنیم و متن و جدول‌های شلوغ را به چارت و صفحه‌آرایی واضح تبدیل می‌کنیم. فایل‌ها در PowerPoint یا Google Slides همراه با قالب اصلی تحویل داده می‌شوند تا تیم شما ادامه دهد، شامل سلایدهای راست‌به‌چپ برای دری و پشتو.",
            pa: "موږ ستاسو سلایډونه د پانګوالو، تمویلوونکو وړاندیزونو، کنفرانسونو او داخلي راپورونو لپاره بیا ډیزاینوو، او ګڼ متن او جدولونه په روښانه چارټونو او ترتیب بدلوو. فایلونه په PowerPoint یا Google Slides کې له اصلي قالب سره سپارل کیږي ترڅو ستاسو ټیم پرې کار ته دوام ورکړي، په شمول د دري او پښتو لپاره ښي نه کیڼ سلایډونو."
        },
        features: [
            "Pitch Decks",
            "Donor & Grant Proposals",
            "Annual & Project Reports",
            "Charts & Data Visualisation",
            "RTL Slides for Dari & Pashto",
            "Master Slide Templates",
            "PowerPoint & Google Slides",
            "Speaker-Friendly Layouts"
        ],
        pricing: {
            basic: {
                name: "Basic",
                price: "AFN 6,000",
                features: [
                    "Up to 10 Slides",
                    "Redesign of Existing Content",
                    "2 Revision Rounds",
                    "PowerPoint File"
                ]
            },
            professional: {
                name: "Pitch",
                price: "AFN 15,000",
                features: [
                    "Up to 25 Slides",
                    "Custom Charts & Icons",
                    "Master Template",
                    "Bilingual Version",
                    "PPT & Google Slides"
                ]
            },
            enterprise: {
                name: "Corporate",
                price: "AFN 30,000+",
                features: [
                    "Unlimited Slides",
                    "Full Template Library",
                    "Report Layout (PDF)",
                    "Trilingual Versions",
                    "Content Editing",
                    "Team Training"
                ]
            }
        }
    },
    {
        id: "design-systems",
        slug: "design-systems",
        category: "design",
        title: {
            en: "Design Systems",
            da: "سیستم دیزاین",
            pa: "د ډیزاین سیسټم"
        },
        shortDesc: {
            en: "Reusable components and rules that keep your products consistent",
            da: "اجزای قابل استفاده مجدد و قواعدی که محصولات شما را یکدست نگه می‌دارد",
            pa: "د بیا کارولو وړ برخې او قواعد چې ستاسو محصولات یو شان ساتي"
        },
        description: {
            en: "We build a shared library of colours, typography, spacing, icons and UI components in Figma, matched by coded components for your developers where needed. The system covers both LTR and RTL layouts, so new screens in English, Dari or Pashto can be assembled quickly without redesigning from scratch.",
            da: "ما یک کتابخانه مشترک از رنگ‌ها، فونت‌ها، فاصله‌ها، آیکن‌ها و اجزای UI در Figma می‌سازیم و در صورت نیاز اجزای کودشده معادل آن را برای پروگرامرهای شما آماده می‌کنیم. این سیستم هر دو حالت چپ‌به‌راست و راست‌به‌چپ را پوشش می‌دهد تا صفحات جدید به انگلیسی، دری یا پشتو به سرعت ساخته شوند.",
            pa: "موږ په Figma کې د رنګونو، فونټونو، واټنونو، آیکونونو او UI برخو یو ګډ کتابتون جوړوو، او د اړتیا په صورت کې ستاسو پروګرامرانو لپاره ورته کوډ شوې برخې چمتو کوو. دا سیسټم دواړه کیڼ نه ښي او ښي نه کیڼ بڼې پوښي، ترڅو په انګلیسي، دري یا پښتو نوې پاڼې په چټکۍ جوړې شي."
        },
        features: [
            "Design Tokens (Colour, Type, Spacing)",
            "Figma Component Library",
            "RTL & LTR Support",
            "Accessibility Guidelines",
            "Icon Library",
            "Coded Components (React)",
            "Usage Documentation",
            "Team Onboarding"
        ],
        pricing: {
            basic: {
                name: "Foundation",
                price: "AFN 25,000",
                features: [
                    "Design Tokens",
                    "Core Components (Buttons, Forms, Cards)",
                    "Figma Library",
                    "Basic Documentation"
                ]
            },
            professional: {
                name: "Product",
                price: "AFN 60,000",
                features: [
                    "Full Figma Component Library",
                    "RTL & LTR Variants",
                    "Icon Set",
                    "Accessibility Checks",
                    "Usage Documentation",
                    "Team Walkthrough"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Audit of Existing Products",
                    "Figma + Coded Components",
                    "Documentation Site",
                    "Multi-Product Support",
                    "Governance Process",
                    "Ongoing Maintenance"
                ]
            }
        }
    },
    {
        id: "3d-modeling",
        slug: "3d-modeling",
        category: "design",
        title: {
            en: "3D Modeling & Rendering",
            da: "مدل‌سازی و رندرینگ سه‌بعدی",
            pa: "درې اړخیز ماډلینګ او رنډرینګ"
        },
        shortDesc: {
            en: "Realistic 3D renders of products, buildings and interiors",
            da: "رندرهای واقعی سه‌بعدی از محصولات، ساختمان‌ها و داخل خانه",
            pa: "د محصولاتو، ودانیو او داخلي فضا ریښتیني درې اړخیز رنډرونه"
        },
        description: {
            en: "We create 3D models and photo-realistic renders for architecture and interior projects, real-estate marketing and products that are not yet manufactured. Renders let you sell or get approval before anything is built, and models can be reused for animations and AR.",
            da: "ما مدل‌های سه‌بعدی و رندرهای واقعی برای پروژه‌های معماری و دیزاین داخلی، بازاریابی املاک و محصولاتی که هنوز تولید نشده‌اند می‌سازیم. رندرها به شما اجازه می‌دهند پیش از ساخت، فروش کنید یا تأیید بگیرید، و مدل‌ها برای انیمیشن و AR نیز دوباره قابل استفاده‌اند.",
            pa: "موږ د معمارۍ او داخلي ډیزاین پروژو، د املاکو بازار موندنې او هغو محصولاتو لپاره چې لا نه دي تولید شوي درې اړخیز ماډلونه او ریښتیني رنډرونه جوړوو. رنډرونه تاسو ته اجازه درکوي چې له جوړولو مخکې وپلورئ یا تایید واخلئ، او ماډلونه د انیمیشن او AR لپاره هم بیا کارول کیدای شي."
        },
        features: [
            "Architectural Exterior Renders",
            "Interior Design Visualisation",
            "Product Modeling",
            "Photo-Realistic Materials & Lighting",
            "Walkthrough Animations",
            "Floor Plan to 3D",
            "AR-Ready Models",
            "Source Files Included"
        ],
        pricing: {
            basic: {
                name: "Product",
                price: "AFN 8,000",
                features: [
                    "1 Product Model",
                    "3 Rendered Views",
                    "White or Simple Background",
                    "2 Revision Rounds"
                ]
            },
            professional: {
                name: "Interior",
                price: "AFN 25,000",
                features: [
                    "1 Room or Space",
                    "4 Photo-Realistic Views",
                    "Furniture & Materials",
                    "Lighting Variations",
                    "3 Revision Rounds"
                ]
            },
            enterprise: {
                name: "Architecture",
                price: "AFN 60,000+",
                features: [
                    "Full Building Exterior & Interior",
                    "Multiple Views",
                    "Walkthrough Animation",
                    "Landscape & Surroundings",
                    "Marketing-Ready Images",
                    "Source Files"
                ]
            }
        }
    },
    {
        id: "ar-experiences",
        slug: "ar-experiences",
        category: "design",
        title: {
            en: "Augmented Reality (AR) Experiences",
            da: "تجربه‌های واقعیت افزوده (AR)",
            pa: "د زیات شوي واقعیت (AR) تجربې"
        },
        shortDesc: {
            en: "Let customers see products in their own space through their phone",
            da: "مشتریان محصولات را از طریق موبایل در فضای خود ببینند",
            pa: "پیرودونکي دې محصولات د خپل موبایل له لارې په خپل ځای کې وویني"
        },
        description: {
            en: "We build AR experiences that run in the phone's browser or camera app without downloading a separate app — for example, placing a carpet or piece of furniture in a room, or an AR filter for a campaign on Instagram or TikTok. Models are optimised to load on modest phones and mobile data.",
            da: "ما تجربه‌های AR می‌سازیم که در براوزر یا کمره موبایل بدون نصب اپلیکیشن جداگانه اجرا می‌شوند — مثلاً قرار دادن یک قالین یا فرنیچر در اتاق، یا فلتر AR برای یک کمپاین در انستاگرام یا تیک‌تاک. مدل‌ها طوری بهینه می‌شوند که روی موبایل‌های معمولی و انترنت موبایل بارگذاری شوند.",
            pa: "موږ داسې AR تجربې جوړوو چې د موبایل په براوزر یا کمره کې پرته له جلا اپ نصبولو چلیږي — د بېلګې په توګه په کوټه کې د غالۍ یا فرنیچر ایښودل، یا په انسټاګرام یا ټیک ټاک کې د کمپاین لپاره AR فلټر. ماډلونه داسې غوره کیږي چې په عادي موبایلونو او موبایل انټرنټ پورته شي."
        },
        features: [
            "Web-Based AR (No App Download)",
            "Product Placement in Real Rooms",
            "Instagram & TikTok AR Filters",
            "3D Model Creation",
            "Optimised for Mobile Data",
            "QR Code Launch",
            "Analytics Tracking",
            "Integration With Online Stores"
        ],
        pricing: {
            basic: {
                name: "Filter",
                price: "AFN 15,000",
                features: [
                    "1 Instagram or TikTok AR Filter",
                    "Branded Design",
                    "Platform Submission",
                    "1 Revision Round"
                ]
            },
            professional: {
                name: "Product AR",
                price: "AFN 40,000",
                features: [
                    "Up to 5 Product Models",
                    "Web AR Viewer",
                    "QR Code Access",
                    "Store Integration",
                    "Mobile Optimisation"
                ]
            },
            enterprise: {
                name: "Custom",
                price: "Custom",
                features: [
                    "Large Product Catalogues",
                    "Interactive AR Campaigns",
                    "Custom AR App Features",
                    "Analytics Dashboard",
                    "Ongoing Model Updates",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "shopify-development",
        slug: "shopify-development",
        category: "ecommerce",
        title: {
            en: "Shopify Store Development",
            da: "ساخت فروشگاه Shopify",
            pa: "د Shopify پلورنځي جوړول"
        },
        shortDesc: {
            en: "Shopify stores for selling to customers abroad and in the diaspora",
            da: "فروشگاه Shopify برای فروش به مشتریان خارج کشور و مهاجرین",
            pa: "د Shopify پلورنځي د بهرنیو پیرودونکو او مهاجرو افغانانو ته د پلور لپاره"
        },
        description: {
            en: "We set up and customise Shopify stores, from theme design and product import to shipping zones, taxes and apps. Shopify suits exporters and diaspora-facing brands selling internationally; since Shopify Payments is not available for Afghan-registered businesses, we help you choose a workable payment setup such as a partner account abroad or a supported third-party gateway.",
            da: "ما فروشگاه‌های Shopify را راه‌اندازی و سفارشی‌سازی می‌کنیم، از دیزاین قالب و وارد کردن محصولات تا مناطق ارسال، مالیات و اپ‌ها. Shopify برای صادرکنندگان و برندهایی که به مهاجرین افغان در سطح بین‌المللی می‌فروشند مناسب است؛ چون Shopify Payments برای کسب‌وکارهای ثبت‌شده در افغانستان در دسترس نیست، ما در انتخاب یک روش پرداخت عملی مانند حساب همکار در خارج یا یک درگاه پرداخت شخص ثالث کمک می‌کنیم.",
            pa: "موږ د Shopify پلورنځي جوړوو او ځانګړي کوو، د قالب له ډیزاین او محصولاتو له داخلولو نیولې د لیږد سیمو، مالیاتو او اپونو پورې. Shopify د صادروونکو او هغو برنډونو لپاره مناسب دی چې په نړیواله کچه مهاجرو افغانانو ته پلورنه کوي؛ ځکه چې Shopify Payments په افغانستان کې د ثبت شوو سوداګریو لپاره شتون نلري، موږ د یوې عملي تادیې لارې په ټاکلو کې مرسته کوو لکه په بهر کې د همکار حساب یا د دریمګړي تادیې دروازه."
        },
        features: [
            "Theme Setup & Customisation",
            "Product & Collection Setup",
            "Shipping Zones & Rates",
            "Payment Gateway Guidance",
            "Multi-Currency Display",
            "App Integration",
            "SEO Basics",
            "Store Management Training"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 20,000",
                features: [
                    "Free Theme Setup",
                    "Up to 25 Products",
                    "Shipping & Tax Settings",
                    "Payment Setup Guidance",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 40,000",
                features: [
                    "Premium Theme Customisation",
                    "Up to 100 Products",
                    "Custom Homepage Design",
                    "Email Marketing App Setup",
                    "Reviews & Upsell Apps",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Custom",
                price: "AFN 75,000+",
                features: [
                    "Custom Theme Development",
                    "Unlimited Products",
                    "Multi-Language Storefront",
                    "Custom Integrations",
                    "Migration From Another Platform",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "woocommerce-development",
        slug: "woocommerce-development",
        category: "ecommerce",
        title: {
            en: "WooCommerce Development",
            da: "ساخت فروشگاه WooCommerce",
            pa: "د WooCommerce پلورنځي جوړول"
        },
        shortDesc: {
            en: "Self-hosted WordPress stores with full control and local payments",
            da: "فروشگاه WordPress با کنترل کامل و پرداخت‌های محلی",
            pa: "پر WordPress ولاړ پلورنځي له بشپړ کنټرول او سیمه ییزو تادیاتو سره"
        },
        description: {
            en: "WooCommerce runs on WordPress and is a good fit for Afghan businesses that want full ownership, low running costs and flexibility to add local payment options and cash on delivery. We build the store in Dari, Pashto and English with proper RTL support, and set it up to stay fast on slower connections.",
            da: "WooCommerce روی WordPress کار می‌کند و برای کسب‌وکارهای افغان که مالکیت کامل، هزینه کم و انعطاف برای افزودن روش‌های پرداخت محلی و پرداخت هنگام تحویل می‌خواهند مناسب است. ما فروشگاه را به دری، پشتو و انگلیسی با پشتیبانی درست راست‌به‌چپ می‌سازیم و طوری تنظیم می‌کنیم که روی انترنت کند هم سریع بماند.",
            pa: "WooCommerce پر WordPress چلیږي او د هغو افغان سوداګریو لپاره ښه انتخاب دی چې بشپړ ملکیت، لږ لګښت او د سیمه ییزو تادیاتو او د سپارلو پر وخت د نغدو تادیې د اضافه کولو انعطاف غواړي. موږ پلورنځی په دري، پښتو او انګلیسي له سم ښي نه کیڼ ملاتړ سره جوړوو، او داسې یې تنظیموو چې په ورو انټرنټ هم چټک پاتې شي."
        },
        features: [
            "WordPress + WooCommerce Setup",
            "Trilingual Storefront (RTL)",
            "Cash on Delivery",
            "Local & International Payments",
            "Inventory Management",
            "Speed Optimisation",
            "Order Notifications by SMS/WhatsApp",
            "Security & Backups"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 18,000",
                features: [
                    "Theme Setup",
                    "Up to 30 Products",
                    "Cash on Delivery",
                    "1 Language",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 35,000",
                features: [
                    "Custom Design",
                    "Up to 150 Products",
                    "Bilingual (RTL + English)",
                    "Online Payment Integration",
                    "Order Notifications",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Advanced",
                price: "AFN 60,000+",
                features: [
                    "Unlimited Products",
                    "Trilingual Storefront",
                    "Custom Plugins & Features",
                    "ERP or Inventory Integration",
                    "Performance Hardening",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "marketplace-development",
        slug: "marketplace-development",
        category: "ecommerce",
        title: {
            en: "Multi-Vendor Marketplace Development",
            da: "ساخت مارکیت چندفروشنده",
            pa: "د څو پلورونکو بازار جوړول"
        },
        shortDesc: {
            en: "Online marketplaces where many sellers list and sell their products",
            da: "مارکیت آنلاین که فروشندگان متعدد محصولات خود را عرضه و فروش کنند",
            pa: "آنلاین بازارونه چې ډیری پلورونکي پکې خپل محصولات وړاندې او پلوري"
        },
        description: {
            en: "We build marketplaces where independent vendors manage their own products and orders while you control commissions, payouts and approvals. Typical projects include local shopping platforms, handicraft marketplaces and service directories, with vendor dashboards in Dari, Pashto and English.",
            da: "ما مارکیت‌هایی می‌سازیم که فروشندگان مستقل محصولات و سفارش‌های خود را مدیریت می‌کنند، در حالی که شما کمیشن، پرداخت به فروشندگان و تأییدها را کنترل می‌کنید. پروژه‌های معمول شامل پلتفورم‌های خرید محلی، مارکیت صنایع دستی و فهرست خدمات است، با داشبورد فروشنده به دری، پشتو و انگلیسی.",
            pa: "موږ داسې بازارونه جوړوو چې خپلواک پلورونکي خپل محصولات او فرمایشونه اداره کوي، په داسې حال کې چې تاسو کمیشن، پلورونکو ته تادیات او تاییدونه کنټرولوئ. معمول پروژې د سیمه ییزو پیرودلو پلیټفارمونه، د لاسي صنایعو بازارونه او د خدماتو لیستونه دي، د پلورونکي ډشبورډ سره په دري، پښتو او انګلیسي."
        },
        features: [
            "Vendor Registration & Approval",
            "Vendor Dashboards",
            "Commission Management",
            "Vendor Payout Tracking",
            "Product Reviews & Ratings",
            "Trilingual Interface",
            "Admin Control Panel",
            "Mobile-Friendly Design"
        ],
        pricing: {
            basic: {
                name: "Launch",
                price: "AFN 60,000",
                features: [
                    "WordPress Multi-Vendor Setup",
                    "Vendor Registration",
                    "Basic Commission Rules",
                    "Cash on Delivery",
                    "2 Months Support"
                ]
            },
            professional: {
                name: "Growth",
                price: "AFN 120,000",
                features: [
                    "Custom Marketplace Design",
                    "Vendor Dashboards",
                    "Online Payments & Payout Tracking",
                    "Bilingual Interface",
                    "Reviews & Ratings",
                    "4 Months Support"
                ]
            },
            enterprise: {
                name: "Platform",
                price: "Custom",
                features: [
                    "Custom-Built Platform",
                    "Mobile Apps for Buyers & Vendors",
                    "Delivery Integration",
                    "Advanced Analytics",
                    "Trilingual Interface",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "payment-integration",
        slug: "payment-integration",
        category: "ecommerce",
        title: {
            en: "Local & International Payment Integration",
            da: "ادغام پرداخت‌های داخلی و بین‌المللی",
            pa: "د کورنیو او نړیوالو تادیاتو یوځای کول"
        },
        shortDesc: {
            en: "Accept HesabPay, M-Paisa, Stripe and PayPal on your site or app",
            da: "دریافت پرداخت از HesabPay، M-Paisa، Stripe و PayPal در سایت یا اپ شما",
            pa: "په خپله ویب پاڼه یا اپ کې د HesabPay، M-Paisa، Stripe او PayPal تادیات ومنئ"
        },
        description: {
            en: "We connect your website or app to local mobile money services such as HesabPay and M-Paisa, and to international gateways like Stripe and PayPal where your business is eligible to use them. Availability of international gateways depends on where your company and bank account are registered, so we review your options with you before any development begins.",
            da: "ما ویب‌سایت یا اپلیکیشن شما را به خدمات پول موبایلی داخلی مانند HesabPay و M-Paisa، و به درگاه‌های بین‌المللی مانند Stripe و PayPal، در صورتی که کسب‌وکار شما واجد شرایط استفاده از آن‌ها باشد، وصل می‌کنیم. دسترسی به درگاه‌های بین‌المللی بستگی به محل ثبت شرکت و حساب بانکی شما دارد، بنابراین پیش از شروع کار، گزینه‌ها را با شما بررسی می‌کنیم.",
            pa: "موږ ستاسو ویب پاڼه یا اپ له کورنیو موبایل پیسو خدماتو لکه HesabPay او M-Paisa، او له نړیوالو دروازو لکه Stripe او PayPal سره، که ستاسو سوداګري د کارولو وړ وي، نښلوو. د نړیوالو دروازو شتون په دې پورې اړه لري چې ستاسو شرکت او بانکي حساب چیرته ثبت دي، نو له کار پیلولو مخکې له تاسو سره انتخابونه ارزوو."
        },
        features: [
            "HesabPay Integration",
            "M-Paisa Integration",
            "Stripe & PayPal Integration",
            "Cash on Delivery Flows",
            "Payment Status Webhooks",
            "Refund Handling",
            "Transaction Reports",
            "Secure Checkout Practices"
        ],
        pricing: {
            basic: {
                name: "Single Gateway",
                price: "AFN 12,000",
                features: [
                    "1 Payment Method",
                    "Website or WooCommerce Integration",
                    "Test & Live Setup",
                    "Payment Confirmation Emails"
                ]
            },
            professional: {
                name: "Multi-Gateway",
                price: "AFN 30,000",
                features: [
                    "Up to 3 Payment Methods",
                    "Local + International Options",
                    "Webhook Handling",
                    "Refund Workflow",
                    "Admin Transaction Reports",
                    "2 Months Support"
                ]
            },
            enterprise: {
                name: "Custom",
                price: "Custom",
                features: [
                    "Custom Checkout in Web & Mobile Apps",
                    "Wallet & Subscription Billing",
                    "Reconciliation Reports",
                    "Multi-Currency Handling",
                    "Security Review",
                    "Ongoing Support"
                ]
            }
        }
    },
    {
        id: "product-listing",
        slug: "product-listing",
        category: "ecommerce",
        title: {
            en: "Product Listing & Catalog Management",
            da: "ثبت محصولات و مدیریت کتلاگ",
            pa: "د محصولاتو ثبت او د کتلاګ مدیریت"
        },
        shortDesc: {
            en: "Accurate, well-written product listings kept up to date for you",
            da: "ثبت دقیق و خوب‌نوشته محصولات که برای شما به‌روز نگه داشته می‌شود",
            pa: "دقیق او ښه لیکل شوي د محصولاتو لیستونه چې ستاسو لپاره تازه ساتل کیږي"
        },
        description: {
            en: "We upload and maintain your products — titles, descriptions, prices, variants, photos and stock levels — on your website, Shopify, WooCommerce, Amazon, Etsy or Facebook Shop. Descriptions can be written in English for international buyers and in Dari or Pashto for local customers.",
            da: "ما محصولات شما را — عنوان، توضیحات، قیمت، انواع، عکس‌ها و موجودی — در ویب‌سایت، Shopify، WooCommerce، Amazon، Etsy یا فروشگاه فیسبوک بارگذاری و نگهداری می‌کنیم. توضیحات به انگلیسی برای خریداران بین‌المللی و به دری یا پشتو برای مشتریان داخلی نوشته می‌شود.",
            pa: "موږ ستاسو محصولات — سرلیکونه، تشریحات، بیې، ډولونه، انځورونه او موجودي — په ویب پاڼه، Shopify، WooCommerce، Amazon، Etsy یا فېسبوک شاپ کې پورته کوو او ساتو. تشریحات د نړیوالو پیرودونکو لپاره په انګلیسي او د کورنیو پیرودونکو لپاره په دري یا پښتو لیکل کیږي."
        },
        features: [
            "Bulk Product Upload",
            "Product Copywriting",
            "Keyword-Optimised Titles",
            "Variant & Price Setup",
            "Image Editing & Resizing",
            "Stock Level Updates",
            "Multi-Channel Sync",
            "Category Structure Planning"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 5,000",
                features: [
                    "Up to 25 Products",
                    "Titles & Descriptions",
                    "Image Resizing",
                    "1 Sales Channel"
                ]
            },
            professional: {
                name: "Catalog",
                price: "AFN 15,000",
                features: [
                    "Up to 100 Products",
                    "SEO-Friendly Copywriting",
                    "Variants & Pricing",
                    "Category Setup",
                    "2 Sales Channels"
                ]
            },
            enterprise: {
                name: "Managed",
                price: "AFN 20,000/mo",
                features: [
                    "Ongoing Catalog Management",
                    "New Product Uploads",
                    "Price & Stock Updates",
                    "Multi-Channel Sync",
                    "Bilingual Descriptions",
                    "Monthly Report"
                ]
            }
        }
    },
    {
        id: "amazon-etsy-selling",
        slug: "amazon-etsy-selling",
        category: "ecommerce",
        title: {
            en: "Amazon & Etsy Store Setup",
            da: "راه‌اندازی فروشگاه در Amazon و Etsy",
            pa: "په Amazon او Etsy کې د پلورنځي جوړول"
        },
        shortDesc: {
            en: "Sell Afghan carpets, saffron, crafts and dried fruit to global buyers",
            da: "فروش قالین، زعفران، صنایع دستی و میوه خشک افغانستان به خریداران جهانی",
            pa: "افغاني غالۍ، زعفران، لاسي صنایع او وچې مېوې نړیوالو پیرودونکو ته وپلورئ"
        },
        description: {
            en: "We help Afghan exporters and artisans prepare to sell on Amazon and Etsy: reviewing account eligibility, creating listings and shop pages, photography guidance and shipping options. Seller registration rules, supported countries and payout methods change over time and often require a business or partner registered outside Afghanistan, so we check the current requirements with you first and give an honest assessment.",
            da: "ما به صادرکنندگان و صنعتگران افغان کمک می‌کنیم برای فروش در Amazon و Etsy آماده شوند: بررسی شرایط حساب، ساخت لیست محصولات و صفحه فروشگاه، رهنمایی عکاسی و گزینه‌های ارسال. قوانین ثبت فروشنده، کشورهای پشتیبانی‌شده و روش‌های دریافت پول با گذشت زمان تغییر می‌کنند و اغلب به یک کسب‌وکار یا همکار ثبت‌شده در خارج از افغانستان نیاز دارند، بنابراین ابتدا شرایط فعلی را با شما بررسی کرده و ارزیابی صادقانه ارائه می‌دهیم.",
            pa: "موږ له افغان صادروونکو او صنعتګرانو سره مرسته کوو چې په Amazon او Etsy کې د پلور لپاره چمتو شي: د حساب د شرایطو بیاکتنه، د محصولاتو لیستونه او د پلورنځي پاڼې جوړول، د عکاسۍ لارښوونه او د لیږد انتخابونه. د پلورونکي د ثبت قواعد، ملاتړ شوي هېوادونه او د پیسو ترلاسه کولو لارې د وخت په تیریدو بدلیږي او ډیری وخت له افغانستان بهر ثبت شوې سوداګرۍ یا همکار ته اړتیا لري، نو لومړی له تاسو سره اوسني شرایط ګورو او صادقانه ارزونه وړاندې کوو."
        },
        features: [
            "Seller Eligibility Review",
            "Amazon Seller Central Setup",
            "Etsy Shop Setup",
            "Optimised Product Listings",
            "Photography Guidance",
            "Shipping & Fulfilment Options",
            "Pricing & Fee Calculation",
            "Store Management Training"
        ],
        pricing: {
            basic: {
                name: "Etsy Starter",
                price: "AFN 12,000",
                features: [
                    "Eligibility Review",
                    "Etsy Shop Setup",
                    "Up to 15 Listings",
                    "Shop Banner & Logo Placement",
                    "Shipping Profile Setup"
                ]
            },
            professional: {
                name: "Amazon or Etsy",
                price: "AFN 30,000",
                features: [
                    "Eligibility Review",
                    "Full Account Setup on 1 Platform",
                    "Up to 40 Optimised Listings",
                    "Fee & Pricing Calculator",
                    "Fulfilment Options Review",
                    "1 Month Support"
                ]
            },
            enterprise: {
                name: "Both Platforms",
                price: "AFN 55,000+",
                features: [
                    "Amazon & Etsy Setup",
                    "Up to 100 Listings",
                    "Brand Store Pages",
                    "Advertising Setup",
                    "Monthly Performance Review",
                    "3 Months Support"
                ]
            }
        }
    },
    {
        id: "ecommerce-marketing",
        slug: "ecommerce-marketing",
        category: "ecommerce",
        title: {
            en: "E-commerce Marketing",
            da: "بازاریابی فروشگاه آنلاین",
            pa: "د آنلاین پلورنځي بازار موندنه"
        },
        shortDesc: {
            en: "Ads, email and promotions that bring buyers to your online store",
            da: "تبلیغات، ایمیل و پروموشن‌هایی که خریدار را به فروشگاه آنلاین شما می‌آورد",
            pa: "اعلانونه، بریښنالیک او پروموشنونه چې پیرودونکي ستاسو آنلاین پلورنځي ته راولي"
        },
        description: {
            en: "We run marketing focused on online sales: Facebook and Instagram shopping ads, Google Shopping, email campaigns, abandoned-cart reminders and seasonal promotions around Eid and Nowruz. Every campaign is tracked to orders, so you can see what is actually producing sales rather than just clicks.",
            da: "ما بازاریابی متمرکز بر فروش آنلاین انجام می‌دهیم: تبلیغات خرید در فیسبوک و انستاگرام، Google Shopping، کمپاین‌های ایمیلی، یادآوری سبد خرید رهاشده و پروموشن‌های فصلی در عید و نوروز. هر کمپاین تا سطح سفارش ردیابی می‌شود تا ببینید چه چیزی واقعاً فروش می‌آورد، نه فقط کلیک.",
            pa: "موږ په آنلاین پلور متمرکزه بازار موندنه کوو: د فېسبوک او انسټاګرام د پیرودلو اعلانونه، Google Shopping، د بریښنالیک کمپاینونه، د پرېښودل شوې ټوکرۍ یادونې او د اختر او نوروز موسمي پروموشنونه. هر کمپاین تر فرمایش پورې تعقیبیږي، ترڅو وګورئ چې څه په ریښتیا پلور راوړي، نه یوازې کلیکونه."
        },
        features: [
            "Facebook & Instagram Shopping Ads",
            "Google Shopping Campaigns",
            "Email Marketing & Automation",
            "Abandoned Cart Recovery",
            "Seasonal Campaigns (Eid, Nowruz)",
            "Conversion Tracking",
            "Diaspora Audience Targeting",
            "Monthly Sales Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 12,000/mo",
                features: [
                    "1 Ad Platform",
                    "Conversion Tracking Setup",
                    "4 Ad Creatives per Month",
                    "Monthly Report"
                ]
            },
            professional: {
                name: "Growth",
                price: "AFN 25,000/mo",
                features: [
                    "Facebook, Instagram & Google",
                    "Email Campaigns",
                    "Abandoned Cart Automation",
                    "8 Ad Creatives per Month",
                    "Bi-weekly Reports"
                ]
            },
            enterprise: {
                name: "Scale",
                price: "AFN 40,000/mo+",
                features: [
                    "All Channels Managed",
                    "Diaspora Market Targeting",
                    "Retargeting Funnels",
                    "A/B Testing",
                    "Weekly Reports",
                    "Dedicated Account Manager"
                ]
            }
        }
    },
    {
        id: "delivery-app",
        slug: "delivery-app",
        category: "ecommerce",
        title: {
            en: "Delivery & Logistics Apps",
            da: "اپلیکیشن‌های تحویل و لوژستیک",
            pa: "د سپارلو او لوژستیک اپونه"
        },
        shortDesc: {
            en: "Ordering, dispatch and driver apps for delivery businesses",
            da: "اپلیکیشن سفارش، توزیع و راننده برای کسب‌وکارهای تحویل",
            pa: "د فرمایش، لیږد او موټروان اپونه د سپارلو سوداګریو لپاره"
        },
        description: {
            en: "We build delivery systems with a customer ordering app, a driver app and an admin dashboard for dispatch and tracking. Because many Afghan addresses lack street names and numbers, ordering uses map pins, landmarks and phone confirmation, and driver apps keep working when the mobile signal drops.",
            da: "ما سیستم‌های تحویل را با اپلیکیشن سفارش مشتری، اپلیکیشن راننده و داشبورد مدیریت برای توزیع و ردیابی می‌سازیم. از آنجا که بسیاری از آدرس‌ها در افغانستان نام و نمبر سرک ندارند، سفارش با نشانه روی نقشه، نشانی‌های معروف و تأیید تلفنی انجام می‌شود و اپلیکیشن راننده هنگام قطع شدن شبکه موبایل نیز کار می‌کند.",
            pa: "موږ د سپارلو سیسټمونه د پیرودونکي د فرمایش اپ، د موټروان اپ او د لیږد او تعقیب لپاره د مدیریت ډشبورډ سره جوړوو. څرنګه چې په افغانستان کې ډیری پتې د سړک نوم او نمبر نلري، فرمایش د نقشې پر نښه، مشهورو ځایونو او تلیفوني تایید له لارې کیږي، او د موټروان اپ د موبایل شبکې د پرې کیدو پر وخت هم کار کوي."
        },
        features: [
            "Customer Ordering App",
            "Driver App With Navigation",
            "Admin & Dispatch Dashboard",
            "Map-Pin & Landmark Addresses",
            "Live Order Tracking",
            "Cash & Mobile Money Payments",
            "Offline-Tolerant Driver App",
            "SMS Order Updates"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 80,000",
                features: [
                    "Web Ordering Page",
                    "Driver Android App",
                    "Admin Dashboard",
                    "Cash on Delivery",
                    "2 Months Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 180,000",
                features: [
                    "Customer App (Android & iOS)",
                    "Driver App",
                    "Live Tracking",
                    "Mobile Money Payments",
                    "Bilingual Interface",
                    "4 Months Support"
                ]
            },
            enterprise: {
                name: "Platform",
                price: "Custom",
                features: [
                    "Multi-Restaurant or Multi-Store",
                    "Automated Dispatch Rules",
                    "Route Optimisation",
                    "Trilingual Interface",
                    "Reporting & Analytics",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "technical-writing",
        slug: "technical-writing",
        category: "content",
        title: {
            en: "Technical Writing & Documentation",
            da: "نوشتن فنی و مستندسازی",
            pa: "تخنیکي لیکنه او مستند جوړونه"
        },
        shortDesc: {
            en: "User guides, API docs and manuals in English, Dari and Pashto",
            da: "رهنمای کاربر، مستندات API و کتابچه‌ها به انگلیسی، دری و پشتو",
            pa: "د کارونکي لارښودونه، د API اسناد او لارښود کتابونه په انګلیسي، دري او پښتو"
        },
        description: {
            en: "We write clear documentation for software, equipment and internal processes — user manuals, help centres, API references, SOPs and training guides. Content can be produced in English and in plain Dari and Pashto, so staff and customers who are not comfortable in English can still follow it.",
            da: "ما مستندات واضح برای نرم‌افزار، تجهیزات و روندهای داخلی می‌نویسیم — رهنمای کاربر، مرکز کمک، مرجع API، طرزالعمل‌ها و رهنمودهای آموزشی. محتوا به انگلیسی و به دری و پشتوی ساده تهیه می‌شود تا کارمندان و مشتریانی که با انگلیسی راحت نیستند نیز بتوانند از آن استفاده کنند.",
            pa: "موږ د سافټویر، تجهیزاتو او داخلي پروسو لپاره روښانه اسناد لیکو — د کارونکي لارښودونه، د مرستې مرکزونه، د API مراجع، کړنلارې او روزنیز لارښودونه. منځپانګه په انګلیسي او په ساده دري او پښتو چمتو کیږي، ترڅو هغه کارکوونکي او پیرودونکي چې په انګلیسي راحته نه دي هم ورڅخه ګټه واخلي."
        },
        features: [
            "User Manuals & Guides",
            "API Documentation",
            "Help Centre Articles",
            "Standard Operating Procedures",
            "Training Materials",
            "Plain-Language Dari & Pashto",
            "Screenshots & Diagrams",
            "Docs Site Setup"
        ],
        pricing: {
            basic: {
                name: "Short Guide",
                price: "AFN 6,000",
                features: [
                    "Up to 10 Pages",
                    "1 Language",
                    "Screenshots Included",
                    "2 Revision Rounds"
                ]
            },
            professional: {
                name: "Manual",
                price: "AFN 20,000",
                features: [
                    "Up to 40 Pages",
                    "Diagrams & Screenshots",
                    "Bilingual Version",
                    "Formatted PDF & Word",
                    "3 Revision Rounds"
                ]
            },
            enterprise: {
                name: "Documentation Set",
                price: "AFN 45,000+",
                features: [
                    "Full Product Documentation",
                    "API Reference",
                    "Online Docs Site",
                    "Trilingual Content",
                    "Update Plan",
                    "Review With Your Team"
                ]
            }
        }
    },
    {
        id: "voiceover",
        slug: "voiceover",
        category: "content",
        title: {
            en: "Voice-over (Dari, Pashto, English)",
            da: "صداگذاری (دری، پشتو، انگلیسی)",
            pa: "غږ ورکول (دري، پښتو، انګلیسي)"
        },
        shortDesc: {
            en: "Professional voice recordings for ads, videos, IVR and e-learning",
            da: "ضبط صدای حرفه‌ای برای تبلیغات، ویدیو، سیستم تلفنی و آموزش آنلاین",
            pa: "مسلکي غږ ثبتول د اعلانونو، ویډیوګانو، تلیفوني سیسټم او آنلاین زده کړې لپاره"
        },
        description: {
            en: "We record male and female native voices in Dari, Pashto and English for radio and TV ads, explainer videos, phone menus (IVR), e-learning and documentaries. Recordings are made in a treated studio, cleaned and delivered as broadcast-ready files, with optional script translation and adaptation.",
            da: "ما صدای مردانه و زنانه بومی به دری، پشتو و انگلیسی را برای تبلیغات رادیو و تلویزیون، ویدیوهای توضیحی، منوی تلفنی (IVR)، آموزش آنلاین و مستند ضبط می‌کنیم. ضبط در استدیوی مجهز انجام شده، صدا پاک‌سازی می‌شود و به‌صورت فایل آماده پخش تحویل داده می‌شود؛ ترجمه و تطبیق متن نیز در صورت نیاز ارائه می‌شود.",
            pa: "موږ د راډیو او تلویزیون اعلانونو، تشریحي ویډیوګانو، تلیفوني مینو (IVR)، آنلاین زده کړې او مستند فلمونو لپاره په دري، پښتو او انګلیسي کې د نارینه او ښځینه اصلي ویناوالو غږونه ثبتوو. ثبت په مجهز سټوډیو کې کیږي، غږ پاکیږي او د خپرولو لپاره چمتو فایلونه سپارل کیږي؛ د متن ژباړه او برابرول هم د اړتیا په صورت کې وړاندې کیږي."
        },
        features: [
            "Native Dari, Pashto & English Voices",
            "Male & Female Voice Options",
            "Studio-Quality Recording",
            "Script Translation & Adaptation",
            "Audio Cleanup & Mastering",
            "Sync to Video",
            "IVR & Phone Menu Prompts",
            "Broadcast-Ready Files"
        ],
        pricing: {
            basic: {
                name: "Short",
                price: "AFN 3,500",
                features: [
                    "Up to 60 Seconds",
                    "1 Language, 1 Voice",
                    "Audio Cleanup",
                    "1 Retake"
                ]
            },
            professional: {
                name: "Standard",
                price: "AFN 10,000",
                features: [
                    "Up to 5 Minutes",
                    "Choice of Voice",
                    "Script Review",
                    "Sync to Video",
                    "2 Retakes"
                ]
            },
            enterprise: {
                name: "Multilingual",
                price: "AFN 25,000+",
                features: [
                    "Long-Form or Multiple Scripts",
                    "Dari, Pashto & English",
                    "Script Translation",
                    "Multiple Voices",
                    "Music & Sound Mixing",
                    "Broadcast-Ready Masters"
                ]
            }
        }
    }
];

export default services;
