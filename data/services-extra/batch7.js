const services = [
    {
        id: "fleet-tracking",
        slug: "fleet-tracking",
        category: "travel",
        title: {
            en: "Fleet Management & GPS Tracking",
            da: "مدیریت ناوگان و ردیابی GPS",
            pa: "د موټرو د ناوګان مدیریت او GPS تعقیب"
        },
        shortDesc: {
            en: "See where every vehicle is, how it is driven and what it costs to run",
            da: "ببینید هر موتر کجاست، چطور رانده می‌شود و چقدر مصرف دارد",
            pa: "وګورئ چې هر موټر چېرته دی، څنګه چلول کیږي او څومره لګښت لري"
        },
        description: {
            en: "We build fleet software that shows your trucks, vans or company cars on a live map, records trips and stops, and tracks fuel, maintenance and driver hours. Positions come from GPS trackers supplied and fitted by our hardware partners, or from a driver phone app where trackers are not practical. Data is buffered on the device when the signal drops and uploaded once the vehicle is back in coverage.",
            da: "ما نرم‌افزار مدیریت ناوگان می‌سازیم که لاری‌ها، وَن‌ها یا موترهای شرکت شما را روی نقشهٔ زنده نشان می‌دهد، سفرها و توقف‌ها را ثبت می‌کند و تیل، ترمیمات و ساعات کاری دریورها را پیگیری می‌کند. موقعیت‌ها از دستگاه‌های GPS که توسط همکاران سخت‌افزاری ما تهیه و نصب می‌شوند، یا از اپلیکیشن موبایل دریور به دست می‌آید. وقتی آنتن قطع شود، معلومات روی دستگاه ذخیره و بعد از وصل شدن دوباره ارسال می‌شود.",
            pa: "موږ د ناوګان سافټویر جوړوو چې ستاسو لارۍ، وینونه یا د شرکت موټر په ژوندي نقشه ښیي، سفرونه او تمځایونه ثبتوي، او تېل، ترمیم او د ډرېورانو کاري ساعتونه تعقیبوي. موقعیتونه د GPS له هغو آلو راځي چې زموږ د هارډویر ملګري یې برابروي او لګوي، یا د ډرېور له موبایل اپ څخه. کله چې انټن پرې شي، معلومات په آله کې ساتل کیږي او د بیا وصل کېدو وروسته لیږل کیږي."
        },
        features: [
            "Live Vehicle Map",
            "Trip & Stop History",
            "Fuel & Maintenance Logs",
            "Driver App Option",
            "Geofence & Speed Alerts",
            "Offline Data Buffering",
            "Daily & Monthly Reports",
            "GPS Hardware via Partners"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 25,000",
                features: [
                    "Up to 15 Vehicles",
                    "Live Map & Trip History",
                    "Driver Phone App Tracking",
                    "Basic Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Fleet",
                price: "AFN 55,000",
                features: [
                    "Up to 100 Vehicles",
                    "GPS Tracker Integration",
                    "Fuel & Maintenance Module",
                    "Geofence & Speed Alerts",
                    "Dari, Pashto & English",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Unlimited Vehicles",
                    "Multi-Branch Management",
                    "Custom Reports & Dashboards",
                    "API for Your Other Systems",
                    "Self-Hosted Option",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "cargo-tracking",
        slug: "cargo-tracking",
        category: "travel",
        title: {
            en: "Cargo & Shipment Tracking",
            da: "ردیابی بار و محموله",
            pa: "د بار او محمولې تعقیب"
        },
        shortDesc: {
            en: "Tracking numbers and status updates your customers can check themselves",
            da: "کد ردیابی و وضعیت محموله که مشتریان خودشان چک می‌کنند",
            pa: "د تعقیب کوډ او د محمولې حالت چې پېرودونکي یې پخپله ګوري"
        },
        description: {
            en: "We build shipment tracking for cargo and courier companies: each consignment gets a tracking number, staff update its status at each warehouse, border point or handover, and customers check progress online or receive an SMS or WhatsApp message. It suits domestic transport as well as cargo sent between Afghanistan and the diaspora.",
            da: "ما سیستم ردیابی محموله برای شرکت‌های کارگو و پُست می‌سازیم: هر محموله یک کد ردیابی می‌گیرد، کارمندان در هر گدام، سرحد یا نقطهٔ تحویل وضعیت آن را به‌روز می‌کنند، و مشتریان پیشرفت را آنلاین چک می‌کنند یا پیام SMS و WhatsApp دریافت می‌کنند. این سیستم برای ترانسپورت داخلی و همچنین کارگو میان افغانستان و افغان‌های خارج از کشور مناسب است.",
            pa: "موږ د کارګو او پوستي شرکتونو لپاره د محمولې د تعقیب سیسټم جوړوو: هره محموله د تعقیب کوډ اخلي، کارکوونکي یې په هر ګودام، سرحد یا د سپارلو ځای کې حالت تازه کوي، او پېرودونکي پرمختګ آنلاین ګوري یا SMS او WhatsApp پیغام ترلاسه کوي. دا سیسټم د کورني ټرانسپورټ او همداراز د افغانستان او بهر مېشتو افغانانو ترمنځ کارګو لپاره مناسب دی."
        },
        features: [
            "Tracking Numbers & Labels",
            "Customer Tracking Page",
            "SMS & WhatsApp Updates",
            "Status Scans by Staff App",
            "Warehouse & Branch Views",
            "Proof of Delivery Photos",
            "Charges & Payment Records",
            "Dari, Pashto & English"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 20,000",
                features: [
                    "Tracking Numbers & Labels",
                    "Public Tracking Page",
                    "Staff Status Updates",
                    "1 Branch",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 45,000",
                features: [
                    "Multiple Branches & Warehouses",
                    "Staff Scanning App",
                    "SMS & WhatsApp Notifications",
                    "Proof of Delivery Photos",
                    "Charges & Payment Records",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 90,000+",
                features: [
                    "International Routes & Agents",
                    "Customer Accounts & Invoicing",
                    "API for Partner Companies",
                    "Custom Reports",
                    "Data Migration",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "ride-hailing-app",
        slug: "ride-hailing-app",
        category: "travel",
        title: {
            en: "Ride-Hailing (Online Taxi) App",
            da: "اپلیکیشن تکسی آنلاین",
            pa: "د آنلاین ټکسي اپلیکیشن"
        },
        shortDesc: {
            en: "Passenger app, driver app and dispatch panel for your taxi service",
            da: "اپ مسافر، اپ دریور و پنل مدیریت برای سرویس تکسی شما",
            pa: "د مسافر اپ، د ډرېور اپ او د مدیریت پینل ستاسو د ټکسي خدمت لپاره"
        },
        description: {
            en: "We build the full set for an online taxi service: a passenger app to request rides, a driver app to accept them, and an admin panel to manage drivers, fares and disputes. Fares can be fixed by zone or calculated by distance, payment can be cash or local mobile money, and an operator can also book rides by phone for customers without smartphones. Licensing and permits for operating the service remain the client's responsibility.",
            da: "ما مجموعهٔ کامل یک سرویس تکسی آنلاین را می‌سازیم: اپ مسافر برای درخواست سفر، اپ دریور برای قبول آن، و پنل مدیریت برای دریورها، کرایه‌ها و شکایات. کرایه می‌تواند بر اساس ساحه ثابت یا بر اساس مسافه محاسبه شود، پرداخت نقدی یا با پول موبایلی محلی باشد، و اپراتور می‌تواند برای مشتریان بدون گوشی هوشمند از طریق تلفون سفر ثبت کند. جواز و مجوزهای فعالیت این سرویس به عهدهٔ خود مشتری است.",
            pa: "موږ د آنلاین ټکسي خدمت بشپړه ټولګه جوړوو: د مسافر اپ د سفر غوښتلو لپاره، د ډرېور اپ د منلو لپاره، او د ډرېورانو، کرایو او شکایتونو د مدیریت پینل. کرایه د سیمې له مخې ثابته یا د واټن له مخې محاسبه کېدای شي، پیسې نغدې یا د ځایي موبایلي پیسو له لارې ورکول کیږي، او اپرېټر کولی شي د هغو پېرودونکو لپاره چې سمارټ فون نه لري د تلیفون له لارې سفر ثبت کړي. د دې خدمت د چلولو جواز او اجازې د پېرودونکي مسؤلیت دی."
        },
        features: [
            "Passenger App",
            "Driver App",
            "Admin & Dispatch Panel",
            "Zone or Distance Fares",
            "Cash & Mobile Money Payments",
            "Phone Booking by Operator",
            "Ratings & Complaints",
            "Driver Earnings Reports"
        ],
        pricing: {
            basic: {
                name: "Launch",
                price: "AFN 120,000",
                features: [
                    "Android Passenger & Driver Apps",
                    "Admin Panel",
                    "Fixed Zone Fares",
                    "Cash Payments",
                    "2 Months Support"
                ]
            },
            professional: {
                name: "Growth",
                price: "AFN 220,000",
                features: [
                    "Android & iOS Apps",
                    "Distance-Based Fares",
                    "Mobile Money Integration",
                    "Operator Phone Booking",
                    "Dari, Pashto & English",
                    "4 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multiple Cities",
                    "Delivery or Rental Add-ons",
                    "Corporate Accounts",
                    "Advanced Analytics",
                    "Store Publishing & Source Code",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "car-rental-system",
        slug: "car-rental-system",
        category: "travel",
        title: {
            en: "Car Rental System",
            da: "سیستم کرایهٔ موتر",
            pa: "د موټرو د کرایې سیسټم"
        },
        shortDesc: {
            en: "Online bookings, availability calendar and contracts for rental agencies",
            da: "رزرو آنلاین، تقویم موترهای موجود و قراردادها برای شرکت‌های کرایه",
            pa: "آنلاین بکینګ، د شته موټرو کلیز او قراردادونه د کرایې شرکتونو لپاره"
        },
        description: {
            en: "We build rental software that shows which cars are free on which dates, takes bookings from your website or by phone, and records deposits, contracts and the condition of each car at pick-up and return. Rentals with a driver and self-drive rentals are both supported, and owners can see income and costs per vehicle.",
            da: "ما نرم‌افزار کرایهٔ موتر می‌سازیم که نشان می‌دهد کدام موتر در کدام تاریخ آزاد است، رزرو را از ویب‌سایت یا تلفون می‌گیرد، و پیش‌پرداخت، قرارداد و حالت هر موتر را هنگام تحویل و بازگشت ثبت می‌کند. کرایه با دریور و بدون دریور هر دو پشتیبانی می‌شود و مالک می‌تواند عاید و مصرف هر موتر را ببیند.",
            pa: "موږ د موټرو د کرایې سافټویر جوړوو چې ښیي کوم موټر په کومه نېټه وزګار دی، له ویب پاڼې یا تلیفون څخه بکینګ اخلي، او د هر موټر پېشکي، قرارداد او د سپارلو او بېرته راوړلو پر وخت حالت ثبتوي. له ډرېور سره او پرته له ډرېوره کرایه دواړه ملاتړ کیږي، او مالک کولی شي د هر موټر عاید او لګښت وګوري."
        },
        features: [
            "Availability Calendar",
            "Online Booking Page",
            "Rental Contracts & Deposits",
            "Pick-Up & Return Checklists",
            "With-Driver & Self-Drive",
            "Damage Photos",
            "Income per Vehicle",
            "Customer History"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 18,000",
                features: [
                    "Up to 20 Vehicles",
                    "Availability Calendar",
                    "Booking & Contract Records",
                    "Basic Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 38,000",
                features: [
                    "Online Booking Website",
                    "Pick-Up & Return Checklists",
                    "Damage Photos",
                    "Income & Cost per Vehicle",
                    "SMS Booking Confirmations",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 70,000+",
                features: [
                    "Multiple Branches",
                    "Online Payments",
                    "GPS Tracking Integration",
                    "Driver Scheduling",
                    "Custom Reports",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "ticket-booking-system",
        slug: "ticket-booking-system",
        category: "travel",
        title: {
            en: "Bus & Flight Ticket Booking System",
            da: "سیستم فروش تکت بس و طیاره",
            pa: "د بس او الوتکې د ټکټ پلور سیسټم"
        },
        shortDesc: {
            en: "Seat selection, ticket sales and passenger lists for bus and travel companies",
            da: "انتخاب چوکی، فروش تکت و لست مسافران برای شرکت‌های بس و سفر",
            pa: "د څوکۍ ټاکل، د ټکټ پلور او د مسافرو لست د بس او سفر شرکتونو لپاره"
        },
        description: {
            en: "We build ticketing for bus companies and travel agents: routes and departure times, a seat map, sales at the counter and online, and printed or SMS tickets. Each departure produces a passenger list for the driver or check-in desk. For flights we build the agency side — bookings, passenger records and payments — and connect to airline or GDS systems where the agency has access.",
            da: "ما سیستم تکت فروشی برای شرکت‌های بس و نمایندگی‌های سفر می‌سازیم: مسیرها و ساعات حرکت، نقشهٔ چوکی‌ها، فروش در کونتر و آنلاین، و تکت چاپی یا SMS. برای هر حرکت لست مسافران برای دریور یا میز چک‌این آماده می‌شود. برای پروازها، بخش نمایندگی را می‌سازیم — رزرو، معلومات مسافر و پرداخت‌ها — و در صورتی که نمایندگی دسترسی داشته باشد، با سیستم شرکت هوایی یا GDS وصل می‌کنیم.",
            pa: "موږ د بس شرکتونو او سفري اجنټانو لپاره د ټکټ سیسټم جوړوو: لارې او د حرکت وختونه، د څوکیو نقشه، په کاونټر او آنلاین پلور، او چاپي یا SMS ټکټ. د هر حرکت لپاره د ډرېور یا چک‌اېن مېز لپاره د مسافرو لست جوړیږي. د الوتنو لپاره د اجنسۍ برخه جوړوو — بکینګ، د مسافرو معلومات او پیسې — او که اجنسي لاسرسی ولري، د هوایي شرکت یا GDS له سیسټم سره یې نښلوو."
        },
        features: [
            "Routes & Departure Schedules",
            "Seat Map Selection",
            "Counter & Online Sales",
            "Printed & SMS Tickets",
            "Passenger Lists per Departure",
            "Agent & Branch Accounts",
            "Daily Sales Reports",
            "Airline / GDS Connection Where Available"
        ],
        pricing: {
            basic: {
                name: "Counter",
                price: "AFN 25,000",
                features: [
                    "Routes & Schedules",
                    "Seat Map",
                    "Counter Ticket Sales",
                    "Passenger Lists",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Online",
                price: "AFN 55,000",
                features: [
                    "Online Booking Website",
                    "SMS Tickets",
                    "Multiple Branches & Agents",
                    "Mobile Money Payments",
                    "Sales & Commission Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Booking Mobile App",
                    "Airline / GDS Integration",
                    "Multi-Company Marketplace",
                    "Custom Reports",
                    "API Access",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "tourism-platform",
        slug: "tourism-platform",
        category: "travel",
        title: {
            en: "Tourism Platform",
            da: "پلتفورم گردشگری",
            pa: "د ګرځندوی پلاتفورم"
        },
        shortDesc: {
            en: "A site to present destinations, tours and guesthouses and take enquiries",
            da: "سایتی برای معرفی مکان‌ها، تورها و مهمان‌خانه‌ها و دریافت درخواست‌ها",
            pa: "یوه ویب پاڼه د ځایونو، سفرونو او مېلمستونونو د معرفي او غوښتنو د اخیستو لپاره"
        },
        description: {
            en: "We build tourism platforms for tour operators, guesthouses and regional tourism groups: destination pages with photos and practical information, tour packages with dates and prices, and enquiry or booking forms. Pages load quickly on mobile, work in Dari, Pashto and English, and can list several local providers so visitors compare options in one place.",
            da: "ما پلتفورم‌های گردشگری برای شرکت‌های تور، مهمان‌خانه‌ها و گروه‌های گردشگری محلی می‌سازیم: صفحات معرفی مکان‌ها با عکس و معلومات کاربردی، بسته‌های تور با تاریخ و قیمت، و فورم درخواست یا رزرو. صفحات روی موبایل سریع باز می‌شوند، به دری، پشتو و انگلیسی کار می‌کنند و می‌توانند چندین ارائه‌کنندهٔ محلی را نشان دهند تا بازدیدکننده گزینه‌ها را یک‌جا مقایسه کند.",
            pa: "موږ د سفري شرکتونو، مېلمستونونو او سیمه‌ییزو ګرځندوی ډلو لپاره ګرځندوی پلاتفورمونه جوړوو: د ځایونو پاڼې له انځورونو او ګټورو معلوماتو سره، د سفر بستې له نېټو او بیو سره، او د غوښتنې یا بکینګ فورمونه. پاڼې په موبایل کې ژر خلاصیږي، په دري، پښتو او انګلیسي کار کوي، او کولی شي څو ځایي خدمت وړاندې کوونکي وښیي څو لیدونکي انتخابونه په یو ځای کې پرتله کړي."
        },
        features: [
            "Destination Pages",
            "Tour Packages & Dates",
            "Enquiry & Booking Forms",
            "Dari, Pashto & English",
            "Guesthouse & Provider Listings",
            "Photo Galleries",
            "Mobile-Friendly & Fast",
            "Basic SEO Setup"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 18,000",
                features: [
                    "Up to 10 Destination / Tour Pages",
                    "Enquiry Form",
                    "Photo Galleries",
                    "Basic SEO Setup",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Operator",
                price: "AFN 40,000",
                features: [
                    "Tour Packages with Dates & Prices",
                    "Booking Requests & Admin Panel",
                    "Three Languages",
                    "Blog / Travel Guides",
                    "WhatsApp Enquiry Button",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Platform",
                price: "AFN 85,000+",
                features: [
                    "Multiple Providers & Listings",
                    "Provider Dashboards",
                    "Online Payments",
                    "Reviews & Ratings",
                    "Custom Features",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "car-marketplace",
        slug: "car-marketplace",
        category: "travel",
        title: {
            en: "Car Marketplace",
            da: "بازار آنلاین موتر",
            pa: "د موټرو آنلاین بازار"
        },
        shortDesc: {
            en: "A listing site where dealers and owners post cars and buyers filter and call",
            da: "سایت آگهی که نمایشگاه‌ها و مالکان موتر ثبت می‌کنند و خریداران فلتر و تماس می‌گیرند",
            pa: "د اعلانونو ویب پاڼه چې پلورنځي او مالکان موټر ثبتوي او پېرودونکي فلټر او اړیکه نیسي"
        },
        description: {
            en: "We build car listing marketplaces: sellers post a car with photos, make, model, year, mileage and price, and buyers filter by city, budget and type, then call or message the seller directly. Dealer accounts can manage many listings, and an admin panel handles moderation and paid featured listings. Photos are compressed so listings load on slow mobile connections.",
            da: "ما بازارهای آنلاین موتر می‌سازیم: فروشنده موتر را با عکس، کمپنی، مودل، سال، کیلومتر و قیمت ثبت می‌کند و خریدار بر اساس شهر، بودجه و نوع فلتر کرده و مستقیم با فروشنده تماس یا پیام می‌دهد. حساب‌های نمایشگاه می‌توانند آگهی‌های زیاد را مدیریت کنند و پنل مدیریت بررسی آگهی‌ها و آگهی‌های ویژهٔ پولی را انجام می‌دهد. عکس‌ها فشرده می‌شوند تا آگهی‌ها با انترنت کند موبایل هم باز شوند.",
            pa: "موږ د موټرو آنلاین بازارونه جوړوو: پلورونکی موټر له انځورونو، کمپنۍ، ماډل، کال، کیلومتر او بیې سره ثبتوي، او پېرودونکی د ښار، بودیجې او ډول له مخې فلټر کوي او بیا مستقیم له پلورونکي سره اړیکه نیسي یا پیغام ورکوي. د پلورنځیو حسابونه کولی شي ډېر اعلانونه اداره کړي، او د مدیریت پینل د اعلانونو کتنه او پیسه‌یي ځانګړي اعلانونه اداره کوي. انځورونه کمپرس کیږي څو اعلانونه په ورو موبایلي انټرنټ هم خلاص شي."
        },
        features: [
            "Car Listings with Photos",
            "Filters by City, Price & Model",
            "Call & WhatsApp Contact Buttons",
            "Dealer Accounts",
            "Featured (Paid) Listings",
            "Listing Moderation Panel",
            "Compressed Images for Slow Networks",
            "Dari, Pashto & English"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 35,000",
                features: [
                    "Listing Website",
                    "Search Filters",
                    "Seller Contact Buttons",
                    "Admin Moderation",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Marketplace",
                price: "AFN 75,000",
                features: [
                    "Dealer Accounts & Dashboards",
                    "Featured Listings",
                    "Saved Searches & Alerts",
                    "Three Languages",
                    "Basic SEO Setup",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Android & iOS Apps",
                    "Online Payments for Featured Ads",
                    "Spare Parts or Rental Sections",
                    "Analytics Dashboard",
                    "API Access",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "hajj-umrah-system",
        slug: "hajj-umrah-system",
        category: "travel",
        title: {
            en: "Hajj & Umrah Travel Agency System",
            da: "سیستم شرکت‌های سفر حج و عمره",
            pa: "د حج او عمرې د سفري شرکتونو سیسټم"
        },
        shortDesc: {
            en: "Pilgrim records, groups, documents and payments for Hajj and Umrah agencies",
            da: "معلومات زائران، گروه‌ها، اسناد و پرداخت‌ها برای شرکت‌های حج و عمره",
            pa: "د زائرینو معلومات، ډلې، اسناد او پیسې د حج او عمرې شرکتونو لپاره"
        },
        description: {
            en: "We build management software for Hajj and Umrah travel agencies: pilgrim registration, passport and document checklists, group assignment, flights and hotel rooms, and instalment payments with receipts. Families can be kept together in groups and rooms, and staff can send group updates by SMS or WhatsApp. The system handles the agency's operations; quotas, licences and visa approvals stay with the agency and the relevant authorities.",
            da: "ما نرم‌افزار مدیریت برای شرکت‌های سفر حج و عمره می‌سازیم: ثبت زائران، چک‌لست پاسپورت و اسناد، تقسیم به گروه‌ها، پرواز و اتاق‌های هوتل، و پرداخت قسطی با رسید. خانواده‌ها در یک گروه و اتاق نگه داشته می‌شوند و کارمندان می‌توانند معلومات گروه را از طریق SMS یا WhatsApp بفرستند. سیستم کارهای اداری شرکت را مدیریت می‌کند؛ سهمیه، جواز و تأیید ویزا به عهدهٔ شرکت و مراجع مربوطه است.",
            pa: "موږ د حج او عمرې سفري شرکتونو لپاره د مدیریت سافټویر جوړوو: د زائرینو ثبت، د پاسپورټ او اسنادو چک‌لسټ، په ډلو وېشل، الوتنې او د هوټل کوټې، او په قسطونو پیسې له رسید سره. کورنۍ په یوه ډله او کوټه کې ساتل کیږي او کارکوونکي کولی شي د ډلې معلومات د SMS یا WhatsApp له لارې ولیږي. سیسټم د شرکت اداري کارونه اداره کوي؛ سهمیه، جواز او د ویزې تایید د شرکت او اړوندو ادارو مسؤلیت دی."
        },
        features: [
            "Pilgrim Registration",
            "Passport & Document Checklists",
            "Group & Room Assignment",
            "Instalment Payments & Receipts",
            "Flight & Hotel Records",
            "SMS & WhatsApp Group Updates",
            "Printable Pilgrim Lists",
            "Dari & Pashto Interface"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 22,000",
                features: [
                    "Pilgrim Registration",
                    "Document Checklists",
                    "Payments & Receipts",
                    "Printable Lists",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Agency",
                price: "AFN 45,000",
                features: [
                    "Groups, Flights & Rooms",
                    "Instalment Tracking",
                    "SMS & WhatsApp Updates",
                    "Agency Website with Packages",
                    "Staff Roles & Permissions",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 80,000+",
                features: [
                    "Multiple Branches & Sub-Agents",
                    "Pilgrim Mobile App",
                    "Online Payments",
                    "Custom Reports",
                    "Data Migration",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "travel-agency-website",
        slug: "travel-agency-website",
        category: "travel",
        title: {
            en: "Travel Agency Website",
            da: "ویب‌سایت شرکت سفر",
            pa: "د سفري شرکت ویب پاڼه"
        },
        shortDesc: {
            en: "A clear website for your tickets, visas and packages, with quick enquiry",
            da: "ویب‌سایت واضح برای تکت، ویزا و بسته‌های سفر شما با درخواست سریع",
            pa: "ستاسو د ټکټ، ویزې او سفري بستو لپاره روښانه ویب پاڼه له چټکې غوښتنې سره"
        },
        description: {
            en: "We build websites for travel agencies that explain your services clearly — air tickets, visa support, tour and pilgrimage packages — and make it easy to ask for a quote by form, phone or WhatsApp. You can update package prices and offers yourself from a simple admin panel. The site is set up in Dari, Pashto and English, so it serves customers in Afghanistan and relatives abroad booking for them.",
            da: "ما برای شرکت‌های سفر ویب‌سایت‌هایی می‌سازیم که خدمات شما را واضح معرفی می‌کند — تکت طیاره، کمک ویزا، بسته‌های تور و زیارت — و درخواست قیمت از طریق فورم، تلفون یا WhatsApp را آسان می‌سازد. قیمت بسته‌ها و پیشنهادها را خودتان از یک پنل ساده به‌روز می‌کنید. سایت به دری، پشتو و انگلیسی آماده می‌شود تا هم مشتریان داخل افغانستان و هم اقارب خارج از کشور که برایشان تکت می‌گیرند از آن استفاده کنند.",
            pa: "موږ د سفري شرکتونو لپاره داسې ویب پاڼې جوړوو چې ستاسو خدمتونه په روښانه ډول معرفي کوي — د الوتکې ټکټ، د ویزې مرسته، د سفر او زیارت بستې — او د فورم، تلیفون یا WhatsApp له لارې د بیې غوښتل اسانه کوي. د بستو بیې او وړاندیزونه پخپله له یو ساده پینل څخه تازه کولی شئ. ویب پاڼه په دري، پښتو او انګلیسي جوړیږي څو په افغانستان کې پېرودونکو او هغو خپلوانو ته چې له بهر څخه ورته ټکټ اخلي، خدمت وکړي."
        },
        features: [
            "Service & Package Pages",
            "Quote Request Forms",
            "WhatsApp & Call Buttons",
            "Editable Prices & Offers",
            "Dari, Pashto & English",
            "Mobile-Friendly Design",
            "Google Business Profile Setup",
            "Basic SEO Setup"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 14,000",
                features: [
                    "Up to 6 Pages",
                    "Quote Request Form",
                    "WhatsApp & Call Buttons",
                    "Basic SEO Setup",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Agency",
                price: "AFN 28,000",
                features: [
                    "Up to 15 Pages",
                    "Package Manager (Admin Panel)",
                    "Three Languages",
                    "Google Business Profile Setup",
                    "Offers & News Section",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Advanced",
                price: "AFN 50,000+",
                features: [
                    "Booking Requests with Admin Tracking",
                    "Online Payments",
                    "Customer Accounts",
                    "Ticket Search Integration Where Available",
                    "Custom Design",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "visa-consultancy-crm",
        slug: "visa-consultancy-crm",
        category: "travel",
        title: {
            en: "Visa & Immigration Consultancy CRM",
            da: "سیستم CRM برای دفاتر مشاورهٔ ویزا و مهاجرت",
            pa: "د ویزې او مهاجرت مشورتي دفترونو لپاره CRM"
        },
        shortDesc: {
            en: "Track every applicant, document, deadline and payment in one place",
            da: "هر متقاضی، سند، مهلت و پرداخت را در یک جا پیگیری کنید",
            pa: "هر غوښتونکی، سند، نېټه او پیسې په یو ځای کې تعقیب کړئ"
        },
        description: {
            en: "We build a CRM for visa and immigration consultancies: each applicant has a case file with uploaded documents, a checklist per visa type, appointment and deadline reminders, and a record of fees paid. Staff see which cases are waiting on whom, and applicants can receive status updates by SMS or WhatsApp. The software organises your work — it does not give legal or immigration advice.",
            da: "ما برای دفاتر مشاورهٔ ویزا و مهاجرت سیستم CRM می‌سازیم: هر متقاضی یک دوسیه با اسناد آپلود شده، چک‌لست برای هر نوع ویزا، یادآوری وقت ملاقات و مهلت‌ها، و ثبت فیس‌های پرداخت شده دارد. کارمندان می‌بینند کدام دوسیه منتظر چه کسی است و متقاضیان می‌توانند وضعیت را از طریق SMS یا WhatsApp دریافت کنند. این نرم‌افزار کار شما را منظم می‌کند — مشورهٔ حقوقی یا مهاجرتی نمی‌دهد.",
            pa: "موږ د ویزې او مهاجرت مشورتي دفترونو لپاره CRM جوړوو: هر غوښتونکی یو دوسیه لري چې پکې اپلوډ شوي اسناد، د هر ډول ویزې لپاره چک‌لسټ، د ملاقات او نېټو یادونې، او د ورکړل شوو فیسونو ثبت وي. کارکوونکي ګوري چې کومه دوسیه د چا انتظار باسي، او غوښتونکي کولی شي حالت د SMS یا WhatsApp له لارې ترلاسه کړي. دا سافټویر ستاسو کار منظموي — حقوقي یا مهاجرتي مشوره نه ورکوي."
        },
        features: [
            "Applicant Case Files",
            "Document Upload & Checklists",
            "Deadline & Appointment Reminders",
            "Fee & Payment Tracking",
            "SMS & WhatsApp Status Updates",
            "Staff Task Assignment",
            "Lead Capture from Website",
            "Role-Based Access"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 20,000",
                features: [
                    "Applicant Case Files",
                    "Document Checklists",
                    "Payment Records",
                    "Up to 3 Staff Users",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Office",
                price: "AFN 42,000",
                features: [
                    "Deadline Reminders",
                    "SMS & WhatsApp Updates",
                    "Website Lead Capture",
                    "Task Assignment",
                    "Up to 15 Staff Users",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 75,000+",
                features: [
                    "Multiple Offices",
                    "Applicant Self-Service Portal",
                    "Custom Workflows per Visa Type",
                    "Reports & Dashboards",
                    "Data Migration",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "parking-management",
        slug: "parking-management",
        category: "travel",
        title: {
            en: "Parking Management System",
            da: "سیستم مدیریت پارکینگ",
            pa: "د پارکینګ د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Entry tickets, time-based fees and monthly passes for parking operators",
            da: "تکت ورود، فیس بر اساس زمان و کارت ماهانه برای پارکینگ‌ها",
            pa: "د ننوتلو ټکټ، د وخت له مخې فیس او میاشتني کارتونه د پارکینګونو لپاره"
        },
        description: {
            en: "We build parking software that issues an entry ticket or QR code, calculates the fee by time on exit, and records every payment so cash at the gate can be reconciled at the end of each shift. Monthly passes, free spaces and occupancy are shown on a dashboard. Barriers, ticket printers and number-plate cameras are supplied and installed through our hardware partners; we integrate the software with them.",
            da: "ما نرم‌افزار پارکینگ می‌سازیم که تکت ورود یا کود QR صادر می‌کند، فیس را هنگام خروج بر اساس زمان حساب می‌کند و هر پرداخت را ثبت می‌کند تا پول نقد دروازه در پایان هر شیفت حساب شود. کارت‌های ماهانه، جاهای خالی و میزان پُر بودن روی داشبورد نمایش داده می‌شود. مانع‌ها، پرنتر تکت و کمره‌های پلیت توسط همکاران سخت‌افزاری ما تهیه و نصب می‌شوند و ما نرم‌افزار را با آن‌ها وصل می‌کنیم.",
            pa: "موږ د پارکینګ سافټویر جوړوو چې د ننوتلو ټکټ یا QR کوډ صادروي، د وتلو پر وخت د وخت له مخې فیس محاسبه کوي، او هره ورکړه ثبتوي څو د دروازې نغدې پیسې د هر شفټ په پای کې حساب شي. میاشتني کارتونه، خالي ځایونه او ډکوالی په ډشبورډ کې ښودل کیږي. خنډونه، د ټکټ پرنټرونه او د پلېټ کمرې زموږ د هارډویر ملګرو له لارې برابرېږي او لګول کیږي؛ موږ سافټویر ورسره نښلوو."
        },
        features: [
            "Entry Tickets & QR Codes",
            "Time-Based Fee Calculation",
            "Monthly Passes",
            "Shift Cash Reconciliation",
            "Live Occupancy Dashboard",
            "Daily Revenue Reports",
            "Barrier & Camera Integration",
            "Hardware via Partners"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 18,000",
                features: [
                    "Single Entry / Exit Point",
                    "Printed or QR Tickets",
                    "Time-Based Fees",
                    "Shift Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Operator",
                price: "AFN 40,000",
                features: [
                    "Multiple Gates",
                    "Monthly Passes",
                    "Occupancy Dashboard",
                    "Barrier Integration",
                    "Owner Revenue Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Multiple Sites",
                    "Number-Plate Camera Integration",
                    "Mobile Money Payments",
                    "Customer Mobile App",
                    "Custom Reports",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "school-bus-tracking",
        slug: "school-bus-tracking",
        category: "travel",
        title: {
            en: "School Bus Tracking",
            da: "ردیابی سرویس مکتب",
            pa: "د ښوونځي د سرویس تعقیب"
        },
        shortDesc: {
            en: "Parents see where the school bus is and get a message when children board",
            da: "والدین می‌بینند سرویس مکتب کجاست و هنگام سوار شدن فرزندشان پیام می‌گیرند",
            pa: "والدین ګوري چې د ښوونځي سرویس چېرته دی او د ماشوم د سپرېدو پر وخت پیغام اخلي"
        },
        description: {
            en: "We build school transport tracking: the bus position is shown on a map for the school office and for parents, and the driver or bus assistant marks each child as boarded or dropped off in a simple app. Parents receive an SMS or app notification, which also works for families without smartphones. Location comes from the driver's phone or from GPS trackers fitted by our hardware partners.",
            da: "ما سیستم ردیابی سرویس مکتب می‌سازیم: موقعیت سرویس برای دفتر مکتب و والدین روی نقشه نشان داده می‌شود، و دریور یا همکار سرویس در یک اپ ساده سوار شدن یا پیاده شدن هر شاگرد را ثبت می‌کند. والدین پیام SMS یا اطلاعیهٔ اپ دریافت می‌کنند که برای خانواده‌های بدون گوشی هوشمند هم کار می‌کند. موقعیت از گوشی دریور یا از دستگاه GPS که توسط همکاران سخت‌افزاری ما نصب می‌شود به دست می‌آید.",
            pa: "موږ د ښوونځي د ټرانسپورټ د تعقیب سیسټم جوړوو: د سرویس موقعیت د ښوونځي دفتر او والدینو ته په نقشه کې ښودل کیږي، او ډرېور یا د سرویس مرستیال په یو ساده اپ کې د هر زده‌کوونکي سپرېدل یا کښته کېدل ثبتوي. والدین SMS یا د اپ خبرتیا ترلاسه کوي، چې د هغو کورنیو لپاره هم کار کوي چې سمارټ فون نه لري. موقعیت د ډرېور له موبایل یا د GPS له هغو آلو راځي چې زموږ د هارډویر ملګري یې لګوي."
        },
        features: [
            "Live Bus Map",
            "Boarding & Drop-Off Check-In",
            "SMS Alerts for Parents",
            "Parent Mobile App",
            "Routes & Stops Setup",
            "School Office Dashboard",
            "Trip History",
            "GPS Hardware via Partners"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 20,000",
                features: [
                    "Up to 5 Buses",
                    "Driver Phone Tracking",
                    "Boarding Check-In",
                    "SMS Alerts",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "School",
                price: "AFN 45,000",
                features: [
                    "Up to 30 Buses",
                    "Parent Mobile App",
                    "Routes & Stops Management",
                    "GPS Tracker Integration",
                    "Dari, Pashto & English",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Network",
                price: "Custom",
                features: [
                    "Multiple Campuses",
                    "School Management System Integration",
                    "Transport Fee Billing",
                    "Custom Reports",
                    "API Access",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "freight-matching-platform",
        slug: "freight-matching-platform",
        category: "travel",
        title: {
            en: "Freight & Truck Load Matching Platform",
            da: "پلتفورم پیدا کردن بار و لاری",
            pa: "د بار او لارۍ د موندلو پلاتفورم"
        },
        shortDesc: {
            en: "Shippers post loads, truck owners offer prices, both sides save calls",
            da: "صاحبان بار، بار ثبت می‌کنند و صاحبان لاری قیمت پیشنهاد می‌دهند",
            pa: "د بار خاوندان بار ثبتوي او د لارۍ خاوندان بیه وړاندې کوي"
        },
        description: {
            en: "We build load-matching platforms where traders post a load with route, weight, goods type and date, and truck owners or transport companies respond with a price and available vehicle. Both sides have ratings and a history of completed jobs, and a dispatcher can manage everything by phone for users who prefer not to use the app. Trucks returning empty are a common cost in Afghan road freight, so return-trip loads are easy to search.",
            da: "ما پلتفورم‌های پیدا کردن بار می‌سازیم که در آن تاجران بار را با مسیر، وزن، نوع جنس و تاریخ ثبت می‌کنند و صاحبان لاری یا شرکت‌های ترانسپورتی با قیمت و موتر موجود جواب می‌دهند. هر دو طرف امتیاز و سابقهٔ کارهای انجام شده دارند و یک اپراتور می‌تواند برای کسانی که اپ استفاده نمی‌کنند همه چیز را از طریق تلفون مدیریت کند. چون برگشت خالی لاری‌ها در ترانسپورت جاده‌ای افغانستان یک مصرف عام است، جستجوی بار برای مسیر برگشت آسان ساخته شده است.",
            pa: "موږ د بار موندلو پلاتفورمونه جوړوو چې سوداګر پکې بار له لارې، وزن، د جنس ډول او نېټې سره ثبتوي، او د لارۍ خاوندان یا ټرانسپورټي شرکتونه له بیې او شته موټر سره ځواب ورکوي. دواړه خواوې درجه بندي او د بشپړو شویو کارونو تاریخچه لري، او یو اپرېټر کولی شي د هغو کسانو لپاره چې اپ نه کاروي ټول کار د تلیفون له لارې اداره کړي. څرنګه چې د لاریو خالي بېرته راتګ د افغانستان په سړکي ټرانسپورټ کې عام لګښت دی، د بېرته راتګ لپاره د بار لټول اسانه شوي دي."
        },
        features: [
            "Load Posting by Shippers",
            "Price Offers from Truckers",
            "Return-Trip Load Search",
            "Ratings & Job History",
            "Phone Dispatcher Panel",
            "SMS & WhatsApp Notifications",
            "Trip Status Updates",
            "Commission & Payment Records"
        ],
        pricing: {
            basic: {
                name: "Pilot",
                price: "AFN 60,000",
                features: [
                    "Load Board Website",
                    "Shipper & Trucker Accounts",
                    "Price Offers",
                    "Dispatcher Panel",
                    "2 Months Support"
                ]
            },
            professional: {
                name: "Platform",
                price: "AFN 140,000",
                features: [
                    "Android Apps for Both Sides",
                    "Ratings & Job History",
                    "SMS & WhatsApp Notifications",
                    "Commission Tracking",
                    "Dari, Pashto & English",
                    "4 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Cross-Border Routes",
                    "GPS Tracking Integration",
                    "Mobile Money Payments",
                    "Analytics Dashboard",
                    "API for Logistics Partners",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "fuel-station-system",
        slug: "fuel-station-system",
        category: "travel",
        title: {
            en: "Fuel Station Management System",
            da: "سیستم مدیریت تانک تیل",
            pa: "د تېلو د تانک (پمپ سټېشن) د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Shift sales, tank stock, credit customers and daily cash for fuel stations",
            da: "فروش هر شیفت، موجودی ذخایر، مشتریان قرضه و پول نقد روزانه",
            pa: "د هر شفټ پلور، د زېرمو موجودي، پور اخیستونکي پېرودونکي او ورځنۍ نغدې پیسې"
        },
        description: {
            en: "We build software for fuel stations that records pump meter readings and sales per shift, tracks stock in each tank against deliveries, and manages credit customers such as transport companies with monthly statements. Owners of several stations see sales, stock and cash differences in one dashboard. Automatic pump or tank-gauge connection is possible with compatible equipment, installed through our hardware partners; otherwise readings are entered by staff.",
            da: "ما برای تانک‌های تیل نرم‌افزاری می‌سازیم که خوانش میتر پمپ‌ها و فروش هر شیفت را ثبت می‌کند، موجودی هر ذخیره را در برابر بارهای رسیده پیگیری می‌کند، و مشتریان قرضه مثل شرکت‌های ترانسپورتی را با صورت‌حساب ماهانه مدیریت می‌کند. صاحبان چند تانک، فروش، موجودی و تفاوت پول نقد را در یک داشبورد می‌بینند. اتصال خودکار با پمپ یا میترهای ذخیره با تجهیزات سازگار و نصب از طریق همکاران سخت‌افزاری ما ممکن است؛ در غیر آن کارمندان خوانش‌ها را ثبت می‌کنند.",
            pa: "موږ د تېلو د تانکونو لپاره سافټویر جوړوو چې د پمپونو د میټر لوستل او د هر شفټ پلور ثبتوي، د هرې زېرمې موجودي د راغلو بارونو په پرتله تعقیبوي، او پور اخیستونکي پېرودونکي لکه ټرانسپورټي شرکتونه له میاشتني حساب سره اداره کوي. د څو تانکونو خاوندان پلور، موجودي او د نغدو پیسو توپیر په یو ډشبورډ کې ګوري. د پمپ یا د زېرمې له میټر سره اتومات نښلول له مناسبو وسایلو سره او زموږ د هارډویر ملګرو له لارې د نصب سره ممکن دي؛ که نه، کارکوونکي لوستنې ثبتوي."
        },
        features: [
            "Shift Meter Readings & Sales",
            "Tank Stock vs Deliveries",
            "Credit Customer Accounts",
            "Monthly Customer Statements",
            "Cash Difference Alerts",
            "Multi-Station Dashboard",
            "Expense Tracking",
            "Pump Integration via Partners"
        ],
        pricing: {
            basic: {
                name: "Single Station",
                price: "AFN 18,000",
                features: [
                    "Shift Readings & Sales",
                    "Tank Stock Tracking",
                    "Daily Cash Report",
                    "Dari & Pashto Interface",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 38,000",
                features: [
                    "Credit Customer Accounts",
                    "Monthly Statements",
                    "Expense Tracking",
                    "Owner Mobile Dashboard",
                    "Up to 3 Stations",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Network",
                price: "AFN 75,000+",
                features: [
                    "Unlimited Stations",
                    "Pump / Tank-Gauge Integration",
                    "Fleet Fuel Cards or QR",
                    "Accounting Export",
                    "Custom Reports",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "agri-cooperative-system",
        slug: "agri-cooperative-system",
        category: "agri-energy",
        title: {
            en: "Agricultural Cooperative System",
            da: "سیستم کوپراتیف زراعتی",
            pa: "د کرهنیز کوپراتیف سیسټم"
        },
        shortDesc: {
            en: "Member records, produce intake, shared sales and payouts for cooperatives",
            da: "ثبت اعضا، دریافت محصول، فروش مشترک و پرداخت سهم اعضا",
            pa: "د غړو ثبت، د حاصلاتو راټولول، ګډ پلور او د غړو د برخې ورکړه"
        },
        description: {
            en: "We build software for farmer cooperatives: a member register, records of what each member delivers (weight, grade, date), pooled sales to traders or exporters, and a clear calculation of each member's share after costs. Members can receive a receipt by SMS when they deliver produce, and the board gets simple reports for meetings. The interface works in Dari and Pashto and can be used offline at collection points, syncing when a connection is available.",
            da: "ما برای کوپراتیف‌های دهقانان نرم‌افزار می‌سازیم: ثبت اعضا، ثبت محصولی که هر عضو تحویل می‌دهد (وزن، درجه، تاریخ)، فروش مشترک به تاجران یا صادرکنندگان، و محاسبهٔ واضح سهم هر عضو بعد از کسر مصارف. اعضا هنگام تحویل محصول رسید SMS دریافت می‌کنند و هیئت مدیره گزارش‌های ساده برای جلسات می‌گیرد. رابط به دری و پشتو کار می‌کند و در نقاط جمع‌آوری بدون انترنت هم قابل استفاده است و هنگام وصل شدن همگام‌سازی می‌شود.",
            pa: "موږ د بزګرو کوپراتیفونو لپاره سافټویر جوړوو: د غړو ثبت، د هغه حاصل ثبت چې هر غړی یې سپاري (وزن، درجه، نېټه)، سوداګرو یا صادرونکو ته ګډ پلور، او له لګښتونو وروسته د هر غړي د برخې روښانه محاسبه. غړي د حاصل د سپارلو پر وخت د SMS رسید ترلاسه کوي، او اداري بورډ د غونډو لپاره ساده راپورونه اخلي. انټرفیس په دري او پښتو کار کوي او د راټولولو په ځایونو کې پرته له انټرنټه هم کارول کېدای شي او د وصل کېدو پر وخت همغږی کیږي."
        },
        features: [
            "Member Register",
            "Produce Intake Records",
            "Pooled Sales Tracking",
            "Member Share Calculation",
            "SMS Delivery Receipts",
            "Offline Collection Point App",
            "Input & Loan Records",
            "Board Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 18,000",
                features: [
                    "Member Register",
                    "Produce Intake Records",
                    "Basic Sales Records",
                    "Dari & Pashto Interface",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Cooperative",
                price: "AFN 40,000",
                features: [
                    "Member Share Calculation",
                    "SMS Receipts",
                    "Offline Collection App",
                    "Input & Loan Records",
                    "Board Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Union",
                price: "AFN 80,000+",
                features: [
                    "Multiple Cooperatives / Union Level",
                    "Buyer & Exporter Portal",
                    "Mobile Money Payouts",
                    "Donor / Programme Reporting",
                    "Data Migration",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "market-prices-app",
        slug: "market-prices-app",
        category: "agri-energy",
        title: {
            en: "Daily Market Prices App",
            da: "اپلیکیشن نرخ روزانهٔ بازار",
            pa: "د بازار د ورځنیو نرخونو اپلیکیشن"
        },
        shortDesc: {
            en: "Publish daily prices from local markets to farmers and traders by app and SMS",
            da: "نشر نرخ روزانهٔ بازارهای محلی برای دهقانان و تاجران از طریق اپ و SMS",
            pa: "د ځایي بازارونو ورځني نرخونه د اپ او SMS له لارې بزګرو او سوداګرو ته"
        },
        description: {
            en: "We build price information services for organisations, cooperatives or traders' groups that collect market prices. Your field staff enter the day's prices for each product and market in a simple app, and users see them in an Android app, on a web page, or by SMS for basic phones. The app shows price history over weeks and months, and it is built to load on weak connections. We build the platform; the price data comes from your collectors.",
            da: "ما خدمات معلومات نرخ برای سازمان‌ها، کوپراتیف‌ها یا اتحادیه‌های تاجران که نرخ بازار را جمع‌آوری می‌کنند می‌سازیم. کارمندان ساحوی شما نرخ روز هر جنس و هر بازار را در یک اپ ساده ثبت می‌کنند و کاربران آن را در اپ اندروید، صفحهٔ وب یا از طریق SMS برای گوشی‌های ساده می‌بینند. اپ تاریخچهٔ نرخ‌ها را در هفته‌ها و ماه‌ها نشان می‌دهد و طوری ساخته شده که با انترنت ضعیف هم باز شود. ما پلتفورم را می‌سازیم؛ معلومات نرخ از جمع‌آوری‌کنندگان شما می‌آید.",
            pa: "موږ د هغو ادارو، کوپراتیفونو یا سوداګریزو اتحادیو لپاره چې د بازار نرخونه راټولوي، د نرخونو د معلوماتو خدمتونه جوړوو. ستاسو ساحوي کارکوونکي د هر جنس او هر بازار د ورځې نرخ په یو ساده اپ کې ثبتوي، او کاروونکي یې په اندروید اپ، ویب پاڼه یا د ساده موبایلونو لپاره د SMS له لارې ګوري. اپ د اونیو او میاشتو د نرخونو تاریخچه ښیي او داسې جوړ شوی چې په کمزوري انټرنټ هم خلاص شي. موږ پلاتفورم جوړوو؛ د نرخونو معلومات ستاسو له راټولوونکو راځي."
        },
        features: [
            "Daily Price Entry App",
            "Android App for Users",
            "SMS Prices for Basic Phones",
            "Price History Charts",
            "Multiple Markets & Provinces",
            "Dari & Pashto Interface",
            "Low-Bandwidth Design",
            "Admin Review Before Publishing"
        ],
        pricing: {
            basic: {
                name: "Web",
                price: "AFN 22,000",
                features: [
                    "Price Entry Panel",
                    "Public Price Web Page",
                    "Up to 5 Markets",
                    "Price History",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "App",
                price: "AFN 55,000",
                features: [
                    "Android App",
                    "Field Collector App",
                    "Unlimited Markets & Products",
                    "Price Change Alerts",
                    "Admin Review Workflow",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "National",
                price: "Custom",
                features: [
                    "SMS Subscription Service",
                    "Data Export & API",
                    "Analytics for Programme Teams",
                    "iOS App",
                    "Custom Reports",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "livestock-management",
        slug: "livestock-management",
        category: "agri-energy",
        title: {
            en: "Livestock Management System",
            da: "سیستم مدیریت مالداری",
            pa: "د څارویو د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Records for each animal: births, vaccinations, milk, weight and sales",
            da: "ثبت هر حیوان: تولد، واکسین، شیر، وزن و فروش",
            pa: "د هر څاروي ثبت: زېږون، واکسین، شیدې، وزن او پلور"
        },
        description: {
            en: "We build livestock software for dairy farms, fattening units and herders' groups: each cow, sheep or goat has a record with tag number, parents, births, vaccinations and treatments entered by your vet, milk yield or weight gains, and sale. Reminders flag upcoming vaccinations and expected calvings, and reports show feed costs and income per group. The software keeps your records; it does not give veterinary advice.",
            da: "ما نرم‌افزار مالداری برای فارم‌های لبنیات، فارم‌های چاق‌سازی و گروه‌های مالداران می‌سازیم: هر گاو، گوسفند یا بز یک ریکارد با نمبر گوشواره، والدین، تولد، واکسین‌ها و تداوی‌های ثبت شده توسط داکتر حیوانات شما، مقدار شیر یا افزایش وزن، و فروش دارد. یادآوری‌ها واکسین‌های پیش‌رو و زایمان‌های متوقع را نشان می‌دهند و گزارش‌ها مصرف علوفه و عاید هر گروه را نشان می‌دهند. این نرم‌افزار ریکاردهای شما را نگه می‌دارد؛ مشورهٔ وترنری نمی‌دهد.",
            pa: "موږ د لبنیاتو فارمونو، د څربولو فارمونو او د مالدارو ډلو لپاره د څارویو سافټویر جوړوو: هره غوا، پسه یا وزه یو ریکارډ لري چې پکې د غوږوالۍ نمبر، مور او پلار، زېږون، واکسینونه او درملنې چې ستاسو د څارویو ډاکټر ثبتوي، د شیدو اندازه یا د وزن زیاتوالی، او پلور وي. یادونې راتلونکي واکسینونه او تمه شوي زېږونونه ښیي، او راپورونه د هرې ډلې د واښو لګښت او عاید ښیي. دا سافټویر ستاسو ریکارډونه ساتي؛ وترنري مشوره نه ورکوي."
        },
        features: [
            "Animal Records by Tag",
            "Births & Lineage",
            "Vaccination & Treatment Log",
            "Milk Yield Tracking",
            "Weight Gain Tracking",
            "Reminders & Alerts",
            "Feed Cost & Income Reports",
            "Offline Mobile Entry"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 15,000",
                features: [
                    "Up to 150 Animals",
                    "Animal Records",
                    "Vaccination Log",
                    "Reminders",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Farm",
                price: "AFN 35,000",
                features: [
                    "Unlimited Animals",
                    "Milk & Weight Tracking",
                    "Feed Cost Reports",
                    "Offline Mobile Entry",
                    "Dari & Pashto Interface",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 65,000+",
                features: [
                    "Multiple Farms or Herder Groups",
                    "Milk Collection Centre Module",
                    "Sales & Buyer Records",
                    "Programme / Donor Reporting",
                    "Custom Reports",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "smart-greenhouse",
        slug: "smart-greenhouse",
        category: "agri-energy",
        title: {
            en: "Smart Greenhouse",
            da: "گلخانهٔ هوشمند",
            pa: "هوښیار ګلخانه (شنه خونه)"
        },
        shortDesc: {
            en: "Monitor temperature, humidity and soil moisture in your greenhouse by phone",
            da: "حرارت، رطوبت و نم خاک گلخانه را از گوشی خود نظارت کنید",
            pa: "د ګلخانې تودوخه، لندبل او د خاورې نمجن والی په موبایل کې وڅارئ"
        },
        description: {
            en: "We build the software side of greenhouse monitoring: a dashboard and mobile app that show temperature, humidity and soil moisture from sensors, send alerts when readings go out of range — for example on frost nights — and can switch irrigation or fans on a schedule or by threshold. Sensors, controllers and installation are provided by our hardware partners; we configure and connect them. Readings are stored locally when the internet drops and sent once it returns.",
            da: "ما بخش نرم‌افزاری نظارت گلخانه را می‌سازیم: داشبورد و اپ موبایل که حرارت، رطوبت و نم خاک را از سنسورها نشان می‌دهد، هنگام خارج شدن از حد مجاز — مثلاً در شب‌های یخبندان — هشدار می‌فرستد و می‌تواند آبیاری یا پکه‌ها را بر اساس زمان یا حد معین روشن کند. سنسورها، کنترولرها و نصب آن‌ها توسط همکاران سخت‌افزاری ما فراهم می‌شود؛ ما آن‌ها را تنظیم و وصل می‌کنیم. وقتی انترنت قطع شود، معلومات محلی ذخیره و بعد از وصل شدن ارسال می‌شود.",
            pa: "موږ د ګلخانې د څارنې سافټویري برخه جوړوو: ډشبورډ او موبایل اپ چې له سینسرونو تودوخه، لندبل او د خاورې نمجن والی ښیي، کله چې لوستنې له حد ووځي — د بېلګې په توګه د کنګل په شپو کې — خبرتیا لیږي، او کولی شي اوبه لګول یا پکې د وخت یا ټاکلي حد له مخې چالانې کړي. سینسرونه، کنټرولرونه او نصب یې زموږ د هارډویر ملګري برابروي؛ موږ یې تنظیموو او نښلوو. کله چې انټرنټ پرې شي، لوستنې په ځای کې ساتل کیږي او د بیا وصل کېدو وروسته لیږل کیږي."
        },
        features: [
            "Temperature & Humidity Monitoring",
            "Soil Moisture Readings",
            "Frost & Heat Alerts",
            "Scheduled Irrigation Control",
            "Mobile App & Dashboard",
            "Offline Data Buffering",
            "History Charts",
            "Sensors & Installation via Partners"
        ],
        pricing: {
            basic: {
                name: "Monitor",
                price: "AFN 20,000",
                features: [
                    "1 Greenhouse",
                    "Temperature & Humidity Dashboard",
                    "SMS / App Alerts",
                    "History Charts",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Control",
                price: "AFN 45,000",
                features: [
                    "Up to 5 Greenhouses",
                    "Soil Moisture Readings",
                    "Irrigation & Fan Control",
                    "Threshold Automation",
                    "Dari & Pashto App",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Commercial",
                price: "Custom",
                features: [
                    "Unlimited Greenhouses",
                    "Custom Sensor Integration",
                    "Water & Energy Reports",
                    "Multi-User Roles",
                    "API Access",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "solar-monitoring",
        slug: "solar-monitoring",
        category: "agri-energy",
        title: {
            en: "Solar System Monitoring",
            da: "نظارت سیستم‌های سولری",
            pa: "د سولري سیسټمونو څارنه"
        },
        shortDesc: {
            en: "One dashboard for output, battery level and faults across your solar sites",
            da: "یک داشبورد برای تولید برق، سطح بتری و خرابی‌های سایت‌های سولری",
            pa: "یو ډشبورډ د برېښنا تولید، د بیټرۍ کچې او خرابیو لپاره"
        },
        description: {
            en: "We build monitoring dashboards for solar installers, businesses and organisations running several solar systems. The software reads data from inverters and battery systems — through the manufacturer's cloud API where one exists, or through data loggers installed by our hardware partners — and shows daily output, battery state and faults in one place. Installers can see all their customer sites and get an alert when a system stops producing.",
            da: "ما داشبوردهای نظارت برای نصب‌کنندگان سولر، تجارت‌ها و سازمان‌هایی که چندین سیستم سولری دارند می‌سازیم. نرم‌افزار معلومات را از انورترها و سیستم‌های بتری می‌خواند — از طریق API ابری تولیدکننده در صورت موجودیت، یا از طریق دیتالاگرهایی که همکاران سخت‌افزاری ما نصب می‌کنند — و تولید روزانه، حالت بتری و خرابی‌ها را در یک جا نشان می‌دهد. نصب‌کنندگان همهٔ سایت‌های مشتریان خود را می‌بینند و وقتی یک سیستم از تولید باز ایستد هشدار می‌گیرند.",
            pa: "موږ د سولر لګوونکو، سوداګریو او هغو ادارو لپاره چې څو سولري سیسټمونه چلوي، د څارنې ډشبورډونه جوړوو. سافټویر له انورټرونو او بیټرۍ سیسټمونو معلومات لولي — که شتون ولري د تولیدوونکي د کلاوډ API له لارې، یا د هغو ډېټا لاګرونو له لارې چې زموږ د هارډویر ملګري یې لګوي — او ورځنی تولید، د بیټرۍ حالت او خرابۍ په یو ځای کې ښیي. لګوونکي د خپلو ټولو پېرودونکو سایټونه ګوري او کله چې یو سیسټم له تولید ودرېږي خبرتیا ترلاسه کوي."
        },
        features: [
            "Daily & Monthly Output",
            "Battery State Monitoring",
            "Fault & Offline Alerts",
            "Multi-Site Dashboard",
            "Inverter Cloud API Integration",
            "Customer View for Installers",
            "Energy Reports Export",
            "Data Loggers via Partners"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 22,000",
                features: [
                    "Up to 10 Sites",
                    "One Inverter Brand",
                    "Output & Battery Dashboard",
                    "Offline Alerts",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Installer",
                price: "AFN 50,000",
                features: [
                    "Up to 100 Sites",
                    "Multiple Inverter Brands",
                    "Customer Login per Site",
                    "Fault Alerts by SMS / App",
                    "Monthly Energy Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Unlimited Sites",
                    "Data Logger Integration",
                    "Maintenance Ticketing",
                    "Diesel Generator Data",
                    "API Access",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "iot-solutions",
        slug: "iot-solutions",
        category: "agri-energy",
        title: {
            en: "IoT Solutions",
            da: "راه‌حل‌های اینترنت اشیا (IoT)",
            pa: "د IoT (د شیانو انټرنټ) حلونه"
        },
        shortDesc: {
            en: "Dashboards, alerts and apps for sensors and connected devices",
            da: "داشبورد، هشدار و اپلیکیشن برای سنسورها و دستگاه‌های وصل شده",
            pa: "ډشبورډونه، خبرتیاوې او اپونه د سینسرونو او نښلول شوو وسایلو لپاره"
        },
        description: {
            en: "We build the software for connected devices: collecting data from sensors and meters, storing it, showing it on dashboards and mobile apps, and sending alerts by SMS or app when something needs attention — a cold store getting warm, a water tank running low, a generator stopping. We work with common protocols such as MQTT and HTTP over GSM or Wi-Fi, and design for unreliable networks. Devices and installation come through our hardware partners or your existing supplier.",
            da: "ما نرم‌افزار دستگاه‌های وصل شده را می‌سازیم: جمع‌آوری معلومات از سنسورها و میترها، ذخیرهٔ آن، نمایش در داشبورد و اپ موبایل، و ارسال هشدار از طریق SMS یا اپ وقتی چیزی نیاز به توجه دارد — سردخانه‌ای که گرم می‌شود، ذخیرهٔ آبی که خالی می‌شود، جنراتوری که خاموش می‌شود. ما با پروتوکول‌های رایج مثل MQTT و HTTP روی GSM یا Wi-Fi کار می‌کنیم و برای شبکه‌های ناپایدار دیزاین می‌کنیم. دستگاه‌ها و نصب آن‌ها از طریق همکاران سخت‌افزاری ما یا تأمین‌کنندهٔ فعلی شما فراهم می‌شود.",
            pa: "موږ د نښلول شوو وسایلو سافټویر جوړوو: له سینسرونو او میټرونو معلومات راټولول، ساتل، په ډشبورډ او موبایل اپ کې ښودل، او کله چې یو شی پاملرنې ته اړتیا ولري د SMS یا اپ له لارې خبرتیا لیږل — یخچال چې ګرمیږي، د اوبو زېرمه چې خالي کیږي، جنراتور چې ودریږي. موږ له عامو پروتوکولونو لکه MQTT او HTTP سره د GSM یا Wi-Fi له لارې کار کوو او د بې‌ثباته شبکو لپاره ډیزاین کوو. وسایل او نصب یې زموږ د هارډویر ملګرو یا ستاسو د اوسني عرضه کوونکي له لارې برابرېږي."
        },
        features: [
            "Sensor Data Collection",
            "Real-Time Dashboards",
            "SMS & App Alerts",
            "MQTT / HTTP Integration",
            "Offline Buffering & Sync",
            "Mobile App",
            "Historical Reports",
            "Hardware via Partners"
        ],
        pricing: {
            basic: {
                name: "Prototype",
                price: "AFN 25,000",
                features: [
                    "1 Device Type",
                    "Data Collection & Storage",
                    "Web Dashboard",
                    "Threshold Alerts",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Deployment",
                price: "AFN 65,000",
                features: [
                    "Multiple Device Types",
                    "Mobile App",
                    "SMS Alerts",
                    "User Roles & Sites",
                    "Historical Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom",
                features: [
                    "Large Device Fleets",
                    "Remote Device Control",
                    "Integration with Your Systems",
                    "Self-Hosted Option",
                    "Custom Analytics",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "farm-management-app",
        slug: "farm-management-app",
        category: "agri-energy",
        title: {
            en: "Farm Management App",
            da: "اپلیکیشن مدیریت فارم",
            pa: "د فارم د مدیریت اپلیکیشن"
        },
        shortDesc: {
            en: "Plan fields, record work and costs, and see profit per crop",
            da: "پلان زمین‌ها، ثبت کار و مصارف، و دیدن مفاد هر محصول",
            pa: "د ځمکو پلان، د کار او لګښتونو ثبت، او د هر فصل ګټه"
        },
        description: {
            en: "We build farm management apps for orchards, vineyards and larger farms: map each field or plot, record planting, irrigation, spraying and harvest with dates and workers, and log costs for seed, fertiliser, labour and water. At the end of the season you see yield and profit per crop and per field. Data can be entered offline in the field and syncs when the phone has signal; the app records your decisions rather than prescribing them.",
            da: "ما اپلیکیشن‌های مدیریت فارم برای باغ‌ها، تاکستان‌ها و فارم‌های بزرگ‌تر می‌سازیم: هر زمین یا قطعه را روی نقشه ثبت کنید، کشت، آبیاری، دوا‌پاشی و حاصل‌برداری را با تاریخ و کارگران ثبت کنید، و مصارف تخم، کود، مزدوری و آب را درج کنید. در پایان فصل حاصل و مفاد هر محصول و هر زمین را می‌بینید. معلومات در مزرعه بدون انترنت ثبت و هنگام وصل شدن گوشی همگام‌سازی می‌شود؛ اپ تصمیم‌های شما را ثبت می‌کند، نه این‌که برایتان نسخه بدهد.",
            pa: "موږ د باغونو، د انګورو باغونو او لویو فارمونو لپاره د فارم د مدیریت اپونه جوړوو: هره ځمکه یا ټوټه په نقشه کې ثبت کړئ، کرنه، اوبه لګول، درمل پاشل او حاصل ټولول له نېټو او کارګرو سره ثبت کړئ، او د تخم، سرې، مزدورۍ او اوبو لګښتونه ولیکئ. د فصل په پای کې د هر فصل او هرې ځمکې حاصل او ګټه ګورئ. معلومات په ځمکه کې پرته له انټرنټه ثبتیږي او کله چې موبایل انټن ولري همغږي کیږي؛ اپ ستاسو پرېکړې ثبتوي، تاسو ته نسخه نه ورکوي."
        },
        features: [
            "Field & Plot Mapping",
            "Activity Log (Planting to Harvest)",
            "Input & Labour Costs",
            "Yield Records",
            "Profit per Crop & Field",
            "Worker Attendance & Wages",
            "Offline Field Entry",
            "Dari & Pashto Interface"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 15,000",
                features: [
                    "Up to 10 Fields",
                    "Activity Log",
                    "Cost Records",
                    "Season Summary",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Farm",
                price: "AFN 35,000",
                features: [
                    "Unlimited Fields",
                    "Field Mapping",
                    "Worker Attendance & Wages",
                    "Profit per Crop & Field",
                    "Offline Mobile App",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Agribusiness",
                price: "AFN 70,000+",
                features: [
                    "Multiple Farms & Managers",
                    "Storage & Sales Module",
                    "Sensor / Weather Data Integration",
                    "Export & Buyer Records",
                    "Custom Reports",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "weather-alert-app",
        slug: "weather-alert-app",
        category: "agri-energy",
        title: {
            en: "Weather & Frost Alert App for Farmers",
            da: "اپلیکیشن هشدار آب‌وهوا و یخبندان برای دهقانان",
            pa: "د بزګرو لپاره د هوا او کنګل د خبرتیا اپلیکیشن"
        },
        shortDesc: {
            en: "Local forecasts and frost warnings sent by app and SMS to farmers",
            da: "پیش‌بینی محلی و هشدار یخبندان از طریق اپ و SMS برای دهقانان",
            pa: "سیمه‌ییز وړاندوینې او د کنګل خبرتیاوې د اپ او SMS له لارې بزګرو ته"
        },
        description: {
            en: "We build alert services that send farmers local forecasts and warnings — frost during blossom, heavy rain, heat — by app and by SMS for basic phones. Forecasts come from established weather data providers, and organisations can add their own advisory messages written by their agronomists. Farmers register their district and crops so they only receive relevant alerts. Forecasts are estimates from the data provider, so alerts are presented as warnings, not certainties.",
            da: "ما خدمات هشدار می‌سازیم که پیش‌بینی و هشدارهای محلی — یخبندان در وقت گل‌کردن، باران شدید، گرمی — را از طریق اپ و برای گوشی‌های ساده از طریق SMS به دهقانان می‌فرستد. پیش‌بینی‌ها از ارائه‌کنندگان معتبر معلومات هواشناسی گرفته می‌شود و سازمان‌ها می‌توانند پیام‌های رهنمایی نوشته شده توسط متخصصان زراعتی خود را اضافه کنند. دهقانان ولسوالی و محصولات خود را ثبت می‌کنند تا فقط هشدارهای مربوط را دریافت کنند. پیش‌بینی‌ها تخمین ارائه‌کنندهٔ معلومات است، بنابراین هشدارها به عنوان احتمال نشان داده می‌شوند، نه قطعیت.",
            pa: "موږ د خبرتیا خدمتونه جوړوو چې بزګرو ته سیمه‌ییزې وړاندوینې او خبرتیاوې — د ګل کولو پر وخت کنګل، سخت باران، ګرمي — د اپ او د ساده موبایلونو لپاره د SMS له لارې لیږي. وړاندوینې د باوري هوا پېژندنې معلوماتو له برابروونکو اخیستل کیږي، او ادارې کولی شي د خپلو کرنیزو متخصصینو لیکلي لارښوونیز پیغامونه ور زیات کړي. بزګر خپله ولسوالي او فصلونه ثبتوي څو یوازې اړوندې خبرتیاوې ترلاسه کړي. وړاندوینې د معلوماتو د برابروونکي اټکل دی، نو خبرتیاوې د احتمال په توګه ښودل کیږي، نه د یقین."
        },
        features: [
            "Local Forecasts by District",
            "Frost & Extreme Weather Alerts",
            "SMS for Basic Phones",
            "Android App",
            "Crop-Based Alert Settings",
            "Advisory Messages from Your Experts",
            "Dari & Pashto Content",
            "Admin Panel for Broadcasts"
        ],
        pricing: {
            basic: {
                name: "SMS Alerts",
                price: "AFN 25,000",
                features: [
                    "Farmer Registration",
                    "Automated Frost Alerts",
                    "SMS Broadcasts",
                    "Admin Panel",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "App + SMS",
                price: "AFN 60,000",
                features: [
                    "Android App with Forecasts",
                    "Crop-Based Alert Settings",
                    "Advisory Message Editor",
                    "Dari & Pashto Content",
                    "Delivery Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Programme",
                price: "Custom",
                features: [
                    "Multiple Provinces & Partners",
                    "Voice Message Option",
                    "Farmer Feedback Collection",
                    "Programme Reporting",
                    "API Access",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "product-traceability",
        slug: "product-traceability",
        category: "agri-energy",
        title: {
            en: "Product Origin Traceability with QR",
            da: "ردیابی منشأ محصول با QR",
            pa: "د QR له لارې د محصول د اصل تعقیب"
        },
        shortDesc: {
            en: "A QR code on each pack shows buyers where and when the product was made",
            da: "کود QR روی هر بسته به خریدار نشان می‌دهد محصول کجا و کی تولید شده",
            pa: "په هره بسته QR کوډ پېرودونکي ته ښیي چې محصول چېرته او کله تولید شوی"
        },
        description: {
            en: "We build traceability systems for products such as saffron, dried fruit, nuts and honey: each batch is recorded from farm or collection point through processing and packing, and a QR code printed on the pack opens a page showing origin, harvest date, batch details and any test reports you choose to share. This helps exporters and brands answer buyers who ask where a product comes from. We provide the software and QR codes; certifications and lab tests remain with the producer.",
            da: "ما سیستم‌های ردیابی برای محصولاتی مثل زعفران، میوهٔ خشک، مغزیجات و عسل می‌سازیم: هر بچ از مزرعه یا نقطهٔ جمع‌آوری تا پروسس و بسته‌بندی ثبت می‌شود، و کود QR چاپ شده روی بسته صفحه‌ای را باز می‌کند که منشأ، تاریخ حاصل‌برداری، جزئیات بچ و گزارش‌های آزمایشی که شما شریک می‌سازید را نشان می‌دهد. این کار به صادرکنندگان و برندها کمک می‌کند به خریدارانی که می‌پرسند محصول از کجا آمده جواب بدهند. ما نرم‌افزار و کودهای QR را فراهم می‌کنیم؛ تصدیق‌نامه‌ها و آزمایش‌های لابراتواری به عهدهٔ تولیدکننده است.",
            pa: "موږ د محصولاتو لکه زعفران، وچې مېوې، مغزیات او شاتو لپاره د تعقیب سیسټمونه جوړوو: هر بچ له فارم یا د راټولولو له ځایه تر پروسس او بسته بندۍ پورې ثبتیږي، او په بسته چاپ شوی QR کوډ یوه پاڼه خلاصوي چې اصل، د حاصل ټولولو نېټه، د بچ جزئیات او هغه ازموینیز راپورونه ښیي چې تاسو یې شریکول غواړئ. دا صادرونکو او برانډونو سره مرسته کوي چې هغو پېرودونکو ته ځواب ورکړي چې پوښتنه کوي محصول له کومه راغلی. موږ سافټویر او QR کوډونه برابروو؛ تصدیقنامې او لابراتواري ازموینې د تولیدوونکي مسؤلیت دی."
        },
        features: [
            "Batch Records from Farm to Pack",
            "Printable QR Codes",
            "Public Origin Page per Batch",
            "Harvest & Processing Dates",
            "Optional Test Report Uploads",
            "English, Dari & Pashto Pages",
            "Scan Statistics",
            "Exporter & Brand Dashboard"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 20,000",
                features: [
                    "Batch Records",
                    "QR Code Generation",
                    "Public Origin Pages",
                    "1 Product Line",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Exporter",
                price: "AFN 45,000",
                features: [
                    "Multiple Product Lines",
                    "Farm-to-Pack Steps",
                    "Test Report Uploads",
                    "Scan Statistics",
                    "Branded Origin Pages",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 90,000+",
                features: [
                    "Farmer / Supplier Records",
                    "Warehouse & Stock Integration",
                    "Buyer Portal",
                    "Anti-Counterfeit Unique Codes",
                    "API Access",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "poultry-farm-system",
        slug: "poultry-farm-system",
        category: "agri-energy",
        title: {
            en: "Poultry Farm Management System",
            da: "سیستم مدیریت فارم مرغداری",
            pa: "د چرګانو د فارم د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Track each flock's feed, mortality, eggs or weight, and profit",
            da: "ثبت دانه، تلفات، تخم یا وزن و مفاد هر دسته مرغ",
            pa: "د هرې ډلې چرګانو دانه، مړینه، هګۍ یا وزن او ګټه تعقیب کړئ"
        },
        description: {
            en: "We build software for broiler and layer farms: each flock is recorded from arrival of chicks to sale, with daily feed, water, mortality, egg collection or weight checks, and the vaccinations your vet schedules. Reports show feed conversion, cost per bird or per tray of eggs, and profit per flock, so you can compare batches. Daily entries take a few minutes on a phone, even offline, and sync later.",
            da: "ما برای فارم‌های مرغ گوشتی و تخمی نرم‌افزار می‌سازیم: هر دسته از رسیدن چوچه‌ها تا فروش ثبت می‌شود، با دانه، آب، تلفات، جمع‌آوری تخم یا وزن‌کشی روزانه، و واکسین‌هایی که داکتر حیوانات شما تعیین می‌کند. گزارش‌ها نسبت تبدیل دانه، مصرف هر مرغ یا هر شانهٔ تخم، و مفاد هر دسته را نشان می‌دهند تا بتوانید دسته‌ها را مقایسه کنید. ثبت روزانه چند دقیقه روی گوشی، حتی بدون انترنت، وقت می‌گیرد و بعداً همگام‌سازی می‌شود.",
            pa: "موږ د غوښې او هګیو د چرګانو فارمونو لپاره سافټویر جوړوو: هره ډله د چرګوړو له راتګ تر پلور پورې ثبتیږي، له ورځنۍ دانې، اوبو، مړینې، د هګیو راټولولو یا وزن کولو سره، او هغه واکسینونه چې ستاسو د څارویو ډاکټر یې ټاکي. راپورونه د دانې د بدلون نسبت، د هر چرګ یا د هګیو د هرې شانې لګښت، او د هرې ډلې ګټه ښیي څو ډلې سره پرتله کړئ. ورځنی ثبت په موبایل کې څو دقیقې نیسي، حتی پرته له انټرنټه، او وروسته همغږی کیږي."
        },
        features: [
            "Flock Records (Broiler & Layer)",
            "Daily Feed & Water Log",
            "Mortality Tracking",
            "Egg Collection Records",
            "Vaccination Schedule",
            "Feed Conversion & Cost Reports",
            "Profit per Flock",
            "Offline Mobile Entry"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 14,000",
                features: [
                    "1 Farm",
                    "Flock Records",
                    "Daily Feed & Mortality Log",
                    "Basic Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Farm",
                price: "AFN 32,000",
                features: [
                    "Multiple Sheds",
                    "Egg or Weight Tracking",
                    "Vaccination Reminders",
                    "Cost & Profit per Flock",
                    "Offline Mobile App",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "AFN 60,000+",
                features: [
                    "Multiple Farms",
                    "Feed Stock & Purchases",
                    "Sales & Customer Accounts",
                    "Owner Dashboard",
                    "Custom Reports",
                    "Priority Support"
                ]
            }
        }
    },
    {
        id: "carpet-workshop-system",
        slug: "carpet-workshop-system",
        category: "agri-energy",
        title: {
            en: "Carpet Weaving Workshop Management",
            da: "سیستم مدیریت کارگاه قالین‌بافی",
            pa: "د غالیو اوبدلو د کارخونې مدیریت"
        },
        shortDesc: {
            en: "Track looms, weavers, wool, progress and payments for every carpet",
            da: "پیگیری دار، بافنده، پشم، پیشرفت و پرداخت هر قالین",
            pa: "د هرې غالۍ دار، اوبدونکي، وړۍ، پرمختګ او ورکړې تعقیب کړئ"
        },
        description: {
            en: "We build software for carpet workshops and traders who give out work to home weavers: each carpet has a record with design, size, knot density, loom and weaver, wool and dye issued, progress checks and the agreed payment. You can see which carpets are on which looms, what each weaver is owed, and when orders will be ready. Finished carpets go into a stock list with photos, ready for sales to local buyers or exporters.",
            da: "ما برای کارگاه‌های قالین‌بافی و تاجرانی که کار را به بافندگان خانگی می‌دهند نرم‌افزار می‌سازیم: هر قالین یک ریکارد با نقشه، اندازه، تراکم گره، دار و بافنده، پشم و رنگ داده شده، بررسی پیشرفت و مزد توافق شده دارد. می‌توانید ببینید کدام قالین روی کدام دار است، طلب هر بافنده چقدر است و سفارش‌ها کی آماده می‌شوند. قالین‌های تکمیل شده با عکس در لست موجودی قرار می‌گیرند و برای فروش به خریداران محلی یا صادرکنندگان آماده‌اند.",
            pa: "موږ د غالیو اوبدلو کارخونو او هغو سوداګرو لپاره چې کار کورنیو اوبدونکو ته ورکوي سافټویر جوړوو: هره غالۍ یو ریکارډ لري چې پکې نقشه، اندازه، د غوټو ګڼوالی، دار او اوبدونکی، ورکړل شوې وړۍ او رنګ، د پرمختګ کتنې او موافقه شوې مزدوري وي. تاسو لیدلی شئ چې کومه غالۍ په کوم دار ده، هر اوبدونکي ته څومره پور دی، او فرمایشونه به کله چمتو وي. بشپړې شوې غالۍ له انځورونو سره د موجودي په لست کې ځای نیسي، چې ځایي پېرودونکو یا صادرونکو ته د پلور لپاره چمتو وي."
        },
        features: [
            "Carpet Records by Design & Size",
            "Loom & Weaver Assignment",
            "Wool & Dye Issued",
            "Progress Checks with Photos",
            "Weaver Payments & Advances",
            "Finished Stock with Photos",
            "Order Delivery Dates",
            "Dari & Pashto Interface"
        ],
        pricing: {
            basic: {
                name: "Workshop",
                price: "AFN 15,000",
                features: [
                    "Up to 30 Looms",
                    "Carpet & Weaver Records",
                    "Wool Issued Log",
                    "Weaver Payments",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Business",
                price: "AFN 35,000",
                features: [
                    "Unlimited Looms & Home Weavers",
                    "Progress Photos",
                    "Order Tracking",
                    "Finished Stock Catalogue",
                    "Owner Mobile Dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Exporter",
                price: "AFN 65,000+",
                features: [
                    "Multiple Workshops & Villages",
                    "Online Catalogue for Buyers",
                    "Washing & Finishing Stages",
                    "Export Order Records",
                    "Custom Reports",
                    "Priority Support"
                ]
            }
        }
    }
];

export default services;
