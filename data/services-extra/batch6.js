const services = [
    {
        id: "blood-bank-system",
        slug: "blood-bank-system",
        category: "health",
        title: {
            en: "Blood Bank Management System",
            da: "سیستم مدیریت بانک خون",
            pa: "د وینې بانک د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Track donors, blood units, expiry dates and hospital requests in one place",
            da: "ثبت اهداکنندگان، واحدهای خون، تاریخ انقضا و درخواست‌های شفاخانه در یک جا",
            pa: "د وینې ورکوونکو، د وینې واحدونو، د ختمېدو نېټو او د روغتون غوښتنو ثبت په یو ځای کې"
        },
        description: {
            en: "We build software for blood banks and hospital transfusion units to register donors, record each collected unit by blood group and component, and follow it from screening to issue. Staff see stock levels and units close to expiry at a glance, and can send SMS appeals to eligible donors of a needed blood group when stock runs low.",
            da: "ما برای بانک‌های خون و بخش‌های انتقال خون شفاخانه‌ها نرم‌افزاری می‌سازیم که اهداکنندگان را ثبت کند، هر واحد جمع‌آوری‌شده را به اساس گروپ خون و نوع آن ثبت نماید و آن را از مرحله آزمایش تا تحویل دنبال کند. کارمندان موجودی و واحدهای نزدیک به انقضا را فوراً می‌بینند و هنگام کمبود می‌توانند به اهداکنندگان واجد شرایط همان گروپ خون پیام SMS بفرستند.",
            pa: "موږ د وینې بانکونو او د روغتونونو د وینې لېږد برخو لپاره داسې سافټویر جوړوو چې د وینې ورکوونکي ثبت کړي، هر راټول شوی واحد د وینې د ګروپ او ډول له مخې ثبت کړي او له معاینې تر سپارلو پورې یې تعقیب کړي. کارکوونکي موجودي او د ختمېدو ته نږدې واحدونه سمدستي ویني، او د کمښت پر مهال کولی شي د هماغه ګروپ وړ ورکوونکو ته SMS ولېږي."
        },
        features: [
            "Donor Registration & History",
            "Blood Unit Tracking by Group",
            "Expiry & Stock Alerts",
            "Hospital Request Handling",
            "Screening Result Records",
            "SMS Appeals to Donors",
            "Component Separation Records",
            "Dari & Pashto Interface"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 30,000",
                features: [
                    "Donor Registry",
                    "Blood Unit Inventory",
                    "Expiry Alerts",
                    "Basic Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Hospital",
                price: "AFN 55,000",
                features: [
                    "Everything in Starter",
                    "Screening & Cross-Match Records",
                    "Hospital Request Workflow",
                    "SMS Donor Appeals",
                    "Staff Roles & Permissions",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Network",
                price: "Custom",
                features: [
                    "Multiple Blood Banks",
                    "Shared Stock Visibility",
                    "Donor Mobile App",
                    "Barcode Labels for Units",
                    "Custom Reporting",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "dental-clinic-system",
        slug: "dental-clinic-system",
        category: "health",
        title: {
            en: "Dental Clinic Management System",
            da: "سیستم مدیریت کلینیک دندان",
            pa: "د غاښونو د کلینیک د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Appointments, tooth charts, treatment plans and billing for dental clinics",
            da: "نوبت‌دهی، چارت دندان، پلان تداوی و صورت‌حساب برای کلینیک‌های دندان",
            pa: "وخت ټاکل، د غاښونو چارټ، د درملنې پلان او بلونه د غاښونو کلینیکونو لپاره"
        },
        description: {
            en: "A practice management system built around how dental clinics actually work: a visual tooth chart for each patient, multi-visit treatment plans, and payments spread across instalments. Receptionists book chairs and dentists, patients get SMS reminders, and X-ray images and notes stay attached to the patient record.",
            da: "یک سیستم مدیریت کلینیک که به اساس کار واقعی کلینیک‌های دندان ساخته شده است: چارت تصویری دندان برای هر مریض، پلان‌های تداوی چندجلسه‌ای و پرداخت به اقساط. پذیرش چوکی و داکتر را نوبت می‌دهد، مریضان یادآوری SMS می‌گیرند و تصاویر اکسری و یادداشت‌ها به دوسیه مریض وصل می‌مانند.",
            pa: "د کلینیک د مدیریت یو سیسټم چې د غاښونو د کلینیکونو د اصلي کار له مخې جوړ شوی: د هر ناروغ لپاره د غاښونو انځوریز چارټ، څو ناستو درملنې پلانونه او په قسطونو تادیات. پذیرش چوکۍ او ډاکټر ته وخت ورکوي، ناروغان د SMS یادونې ترلاسه کوي، او د اکسرې انځورونه او یادښتونه د ناروغ له دوسیې سره تړلي پاتې کیږي."
        },
        features: [
            "Visual Tooth Chart",
            "Appointment & Chair Scheduling",
            "Multi-Visit Treatment Plans",
            "Instalment Payments & Billing",
            "X-Ray & Photo Attachments",
            "SMS Appointment Reminders",
            "Dentist Commission Reports",
            "Dari, Pashto & English"
        ],
        pricing: {
            basic: {
                name: "Single Dentist",
                price: "AFN 20,000",
                features: [
                    "Patient Records",
                    "Tooth Chart",
                    "Appointment Calendar",
                    "Simple Billing",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Clinic",
                price: "AFN 40,000",
                features: [
                    "Multiple Dentists & Chairs",
                    "Treatment Plans",
                    "Instalment Tracking",
                    "SMS Reminders",
                    "X-Ray Attachments",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Branch",
                price: "AFN 70,000+",
                features: [
                    "Multiple Branches",
                    "Central Reporting",
                    "Lab Order Tracking",
                    "Inventory of Dental Supplies",
                    "Online Booking Page",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "fitness-app",
        slug: "fitness-app",
        category: "health",
        title: {
            en: "Fitness & Workout App",
            da: "اپلیکیشن ورزش و فتنس",
            pa: "د ورزش او فټنس اپلیکیشن"
        },
        shortDesc: {
            en: "Workout and membership apps for gyms, trainers and fitness brands",
            da: "اپلیکیشن تمرین و عضویت برای جمنازیوم‌ها، مربیان و برندهای ورزشی",
            pa: "د تمرین او غړیتوب اپونه د جمونو، روزونکو او ورزشي برانډونو لپاره"
        },
        description: {
            en: "We build fitness apps for gyms and personal trainers: workout plans with exercise videos, progress logging, and membership tracking with renewal reminders. Videos can be downloaded for offline use so sessions don't stall on a weak connection, and gyms can run separate timetables for men's and women's hours.",
            da: "ما برای جمنازیوم‌ها و مربیان شخصی اپلیکیشن ورزشی می‌سازیم: پلان‌های تمرین با ویدیوهای حرکات، ثبت پیشرفت، و پیگیری عضویت با یادآوری تمدید. ویدیوها را می‌توان برای استفاده آفلاین دانلود کرد تا تمرین با انترنت ضعیف متوقف نشود، و جمنازیوم‌ها می‌توانند تقسیم اوقات جداگانه برای ساعات مردانه و زنانه داشته باشند.",
            pa: "موږ د جمونو او شخصي روزونکو لپاره د ورزش اپونه جوړوو: د تمرین پلانونه د حرکتونو له ویډیوګانو سره، د پرمختګ ثبت، او د غړیتوب تعقیب د نوي کولو له یادونو سره. ویډیوګانې د آفلاین کارونې لپاره ډاونلوډ کېدای شي څو تمرین په کمزوري انټرنټ ونه دریږي، او جمونه کولی شي د نارینه او ښځینه وختونو لپاره جلا مهالوېش ولري."
        },
        features: [
            "Workout Plans & Programs",
            "Exercise Video Library",
            "Offline Video Downloads",
            "Progress & Weight Logging",
            "Membership & Renewal Tracking",
            "Class Timetables",
            "Trainer-Client Messaging",
            "Push Notifications"
        ],
        pricing: {
            basic: {
                name: "Trainer",
                price: "AFN 45,000",
                features: [
                    "Android App",
                    "Workout Plans",
                    "Exercise Video Library",
                    "Progress Logging",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Gym",
                price: "AFN 85,000",
                features: [
                    "Android & iOS",
                    "Membership Management",
                    "Class Timetables & Booking",
                    "Offline Video Downloads",
                    "Admin Dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Brand",
                price: "Custom",
                features: [
                    "Multiple Gym Branches",
                    "Paid Programs & Subscriptions",
                    "Trainer Marketplace",
                    "Wearable Data Import",
                    "Custom Branding",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "nutrition-app",
        slug: "nutrition-app",
        category: "health",
        title: {
            en: "Diet & Nutrition App",
            da: "اپلیکیشن رژیم غذایی و تغذیه",
            pa: "د رژیم او تغذیې اپلیکیشن"
        },
        shortDesc: {
            en: "Meal plans and food logging apps for nutritionists and their clients",
            da: "اپلیکیشن پلان غذایی و ثبت غذا برای متخصصان تغذیه و مراجعین شان",
            pa: "د خوړو پلان او د خوړو ثبت اپونه د تغذیې متخصصینو او مراجعینو لپاره"
        },
        description: {
            en: "We build apps that let nutritionists and dietitians send meal plans, track client weight and measurements, and review food diaries between visits. The food database can include local Afghan dishes and portion sizes, entered and approved by the nutritionist — the app records and organises, while the advice itself stays with the professional.",
            da: "ما اپلیکیشن‌هایی می‌سازیم که متخصصان تغذیه بتوانند پلان غذایی بفرستند، وزن و اندازه‌های مراجعین را پیگیری کنند و دفترچه غذایی آن‌ها را بین ملاقات‌ها ببینند. دیتابیس غذا می‌تواند غذاهای محلی افغانی و اندازه‌های پرس را شامل شود که توسط خود متخصص وارد و تأیید می‌شوند — اپلیکیشن فقط ثبت و منظم می‌کند و مشوره به عهده متخصص است.",
            pa: "موږ داسې اپونه جوړوو چې د تغذیې متخصصین پرې د خوړو پلانونه ولېږي، د مراجعینو وزن او اندازې تعقیب کړي او د لیدنو ترمنځ د هغوی د خوړو کتابچه وګوري. د خوړو ډیټابیس کولی شي محلي افغاني خواړه او د خوراک اندازې ولري چې پخپله متخصص یې داخلوي او تاییدوي — اپ یوازې ثبت او تنظیم کوي، او مشوره د متخصص کار دی."
        },
        features: [
            "Personalised Meal Plans",
            "Food Diary & Logging",
            "Weight & Measurement Tracking",
            "Local Afghan Food Database",
            "Nutritionist Dashboard",
            "Client Messaging",
            "Water & Habit Reminders",
            "Dari & Pashto Interface"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 40,000",
                features: [
                    "Android App",
                    "Meal Plan Delivery",
                    "Weight Tracking",
                    "Food Diary",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Practice",
                price: "AFN 75,000",
                features: [
                    "Android & iOS",
                    "Nutritionist Dashboard",
                    "Custom Food Database",
                    "In-App Messaging",
                    "Reminders & Notifications",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Platform",
                price: "Custom",
                features: [
                    "Multiple Nutritionists",
                    "Paid Subscriptions",
                    "Video Consultations",
                    "Clinic System Integration",
                    "Custom Reports",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "online-counseling-platform",
        slug: "online-counseling-platform",
        category: "health",
        title: {
            en: "Online Counseling Platform",
            da: "پلتفورم مشاوره آنلاین",
            pa: "د آنلاین مشورې پلاتفورم"
        },
        shortDesc: {
            en: "Private booking, chat and video sessions for counselors and their clients",
            da: "نوبت‌گیری، چت و جلسات ویدیویی محرمانه برای مشاوران و مراجعین",
            pa: "محرم وخت ټاکل، چټ او ویډیويي ناستې د مشاورینو او مراجعینو لپاره"
        },
        description: {
            en: "We build platforms where counselors and psychologists can publish their availability, take bookings and hold sessions by chat, audio or video. Privacy is designed in: clients can use a display name, session notes are visible only to the counselor, and audio-only mode helps on weak connections. Diaspora clients can book Dari- or Pashto-speaking counselors across time zones.",
            da: "ما پلتفورم‌هایی می‌سازیم که مشاوران و روانشناسان وقت‌های خالی خود را نشر کنند، نوبت بگیرند و جلسات را از طریق چت، صوت یا ویدیو برگزار کنند. محرمیت از ابتدا در نظر گرفته شده: مراجع می‌تواند نام مستعار استفاده کند، یادداشت‌های جلسه فقط برای مشاور قابل دید است و حالت فقط‌صوتی در انترنت ضعیف کمک می‌کند. مراجعین مهاجر می‌توانند در مناطق زمانی مختلف با مشاوران دری‌زبان یا پشتوزبان نوبت بگیرند.",
            pa: "موږ داسې پلاتفورمونه جوړوو چې مشاورین او ارواپوهان پرې خپل خالي وختونه خپاره کړي، وختونه ونیسي او ناستې د چټ، غږ یا ویډیو له لارې ترسره کړي. محرمیت له پیله پکې پام کې نیول شوی: مراجع کولی شي مستعار نوم وکاروي، د ناستې یادښتونه یوازې مشاور ته ښکاري، او یوازې غږیز حالت په کمزوري انټرنټ کې مرسته کوي. په بهر کې مېشت مراجعین کولی شي په بېلابېلو وختي سیمو کې له دري یا پښتو ویونکو مشاورینو سره وخت ونیسي."
        },
        features: [
            "Counselor Profiles & Availability",
            "Online Booking & Payments",
            "Chat, Audio & Video Sessions",
            "Private Session Notes",
            "Anonymous Display Names",
            "Time Zone Handling",
            "Session Reminders",
            "Dari, Pashto & English"
        ],
        pricing: {
            basic: {
                name: "Solo",
                price: "AFN 35,000",
                features: [
                    "Single Counselor Website",
                    "Booking Calendar",
                    "Secure Chat Sessions",
                    "Email & SMS Reminders",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Practice",
                price: "AFN 70,000",
                features: [
                    "Multiple Counselors",
                    "Audio & Video Sessions",
                    "Online Payments",
                    "Private Session Notes",
                    "Admin Dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Platform",
                price: "Custom",
                features: [
                    "Counselor Marketplace",
                    "Android & iOS Apps",
                    "Organisation Accounts (NGOs)",
                    "Anonymous Access Options",
                    "Usage Reporting",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "ambulance-dispatch",
        slug: "ambulance-dispatch",
        category: "health",
        title: {
            en: "Ambulance Dispatch System",
            da: "سیستم اعزام امبولانس",
            pa: "د امبولانس د لېږلو سیسټم"
        },
        shortDesc: {
            en: "Log emergency calls, assign the nearest ambulance and track every trip",
            da: "ثبت تماس‌های عاجل، تعیین نزدیک‌ترین امبولانس و پیگیری هر سفر",
            pa: "د بیړني زنګونو ثبت، نږدې امبولانس ټاکل او د هر سفر تعقیب"
        },
        description: {
            en: "Dispatch software for ambulance services and hospitals: operators log each call with location and patient details, see which vehicles are free on a map, and assign a crew. Drivers update trip status from a phone app, which keeps working with patchy coverage and syncs when signal returns. GPS trackers, if needed, are sourced and installed through partners.",
            da: "نرم‌افزار اعزام برای خدمات امبولانس و شفاخانه‌ها: اپراتور هر تماس را با موقعیت و معلومات مریض ثبت می‌کند، موترهای آزاد را روی نقشه می‌بیند و تیم را تعیین می‌کند. دریوران وضعیت سفر را از طریق اپلیکیشن موبایل به‌روز می‌کنند که با پوشش ضعیف شبکه هم کار می‌کند و با برگشت شبکه همگام می‌شود. دستگاه‌های GPS در صورت ضرورت از طریق شرکای ما تهیه و نصب می‌شوند.",
            pa: "د امبولانس خدماتو او روغتونونو لپاره د لېږلو سافټویر: اپراتور هر زنګ د ځای او ناروغ له معلوماتو سره ثبتوي، په نقشه کې خالي موټرونه ویني او ټیم ټاکي. چلوونکي د سفر حالت د موبایل اپ له لارې تازه کوي چې په کمزورې شبکه کې هم کار کوي او د شبکې په راتګ سره همغږي کیږي. د GPS وسایل که اړتیا وي زموږ د شریکانو له لارې برابریږي او نصبیږي."
        },
        features: [
            "Emergency Call Logging",
            "Live Vehicle Map",
            "Nearest Ambulance Assignment",
            "Driver Mobile App",
            "Offline Status Sync",
            "Hospital Handover Notes",
            "Response Time Reports",
            "Fleet & Shift Management"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 50,000",
                features: [
                    "Call Logging Console",
                    "Up to 5 Vehicles",
                    "Manual Assignment",
                    "Trip History",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Service",
                price: "AFN 95,000",
                features: [
                    "Up to 25 Vehicles",
                    "Live Map with GPS",
                    "Driver Mobile App",
                    "Shift Management",
                    "Response Time Reports",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Regional",
                price: "Custom",
                features: [
                    "Unlimited Vehicles",
                    "Multiple Dispatch Centres",
                    "Hospital Bed Availability",
                    "Hardware via Partners",
                    "Custom Integrations",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "optical-store-system",
        slug: "optical-store-system",
        category: "health",
        title: {
            en: "Optical Store Management System",
            da: "سیستم مدیریت عینک‌فروشی",
            pa: "د عینکو پلورنځي د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Prescriptions, frame stock, lens orders and sales for optical shops",
            da: "نسخه‌ها، موجودی فریم، فرمایش شیشه و فروش برای عینک‌فروشی‌ها",
            pa: "نسخې، د چوکاټونو موجودي، د شیشو فرمایش او پلور د عینکو پلورنځیو لپاره"
        },
        description: {
            en: "Software for optical shops that stores each customer's eye prescription, tracks frames and lenses in stock, and follows lens orders sent to the lab until the glasses are ready. Customers get an SMS when their order can be collected, and the shop sees daily sales, advances paid and balances due.",
            da: "نرم‌افزاری برای عینک‌فروشی‌ها که نسخه چشم هر مشتری را نگه می‌دارد، فریم و شیشه‌های موجود را پیگیری می‌کند و فرمایش‌های شیشه را که به لابراتوار فرستاده شده تا آماده شدن عینک دنبال می‌کند. مشتری هنگام آماده شدن فرمایش پیام SMS می‌گیرد و دوکان فروش روزانه، پیش‌پرداخت‌ها و باقی‌داری‌ها را می‌بیند.",
            pa: "د عینکو پلورنځیو لپاره سافټویر چې د هر پیرودونکي د سترګو نسخه ساتي، په موجودۍ کې چوکاټونه او شیشې تعقیبوي، او لابراتوار ته لېږل شوي د شیشو فرمایشونه د عینکو تر چمتو کېدو پورې څاري. پیرودونکی د فرمایش د چمتو کېدو پر مهال SMS ترلاسه کوي، او دوکان ورځنی پلور، مخکې ورکړل شوې پیسې او پاتې پورونه ویني."
        },
        features: [
            "Customer Prescription Records",
            "Frame & Lens Inventory",
            "Lab Order Tracking",
            "Ready-for-Pickup SMS",
            "Advance & Balance Tracking",
            "Barcode Sales (POS)",
            "Supplier Management",
            "Daily Sales Reports"
        ],
        pricing: {
            basic: {
                name: "Shop",
                price: "AFN 15,000",
                features: [
                    "Prescription Records",
                    "Frame Inventory",
                    "Sales & Receipts",
                    "Basic Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Professional",
                price: "AFN 30,000",
                features: [
                    "Everything in Shop",
                    "Lab Order Tracking",
                    "SMS Notifications",
                    "Barcode POS",
                    "Supplier Accounts",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Chain",
                price: "AFN 55,000+",
                features: [
                    "Multiple Branches",
                    "Stock Transfers",
                    "Central Dashboard",
                    "Online Booking for Eye Tests",
                    "Custom Reports",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "medical-tourism-portal",
        slug: "medical-tourism-portal",
        category: "health",
        title: {
            en: "Medical Travel Portal",
            da: "پورتال سفرهای درمانی",
            pa: "د درملنې سفرونو پورټال"
        },
        shortDesc: {
            en: "Portals for agencies helping Afghan patients arrange treatment abroad",
            da: "پورتال برای شرکت‌هایی که سفر درمانی مریضان افغان به خارج را تنظیم می‌کنند",
            pa: "پورټالونه د هغو شرکتونو لپاره چې بهر ته د افغان ناروغانو درملنه برابروي"
        },
        description: {
            en: "Many Afghan families travel to India, Pakistan, Turkey and elsewhere for treatment, usually through a facilitator. We build portals for these agencies: patients submit reports and scans, the agency collects quotes from partner hospitals, and the case moves through visa, travel and accommodation steps with status updates in Dari or Pashto. The portal organises the process; medical opinions come from the hospitals themselves.",
            da: "بسیاری از خانواده‌های افغان برای تداوی به هند، پاکستان، ترکیه و جاهای دیگر سفر می‌کنند، معمولاً از طریق یک شرکت واسطه. ما برای این شرکت‌ها پورتال می‌سازیم: مریض راپورها و اسکن‌ها را می‌فرستد، شرکت از شفاخانه‌های همکار نرخ می‌گیرد و پرونده مراحل ویزه، سفر و اقامت را با معلومات به‌روز به دری یا پشتو طی می‌کند. پورتال فقط روند را منظم می‌کند؛ نظر طبی از خود شفاخانه‌ها می‌آید.",
            pa: "ډېرې افغان کورنۍ د درملنې لپاره هند، پاکستان، ترکیې او نورو ځایونو ته سفر کوي، معمولاً د یو منځګړي شرکت له لارې. موږ د دې شرکتونو لپاره پورټالونه جوړوو: ناروغ راپورونه او سکینونه لېږي، شرکت له همکارو روغتونونو نرخونه راټولوي، او دوسیه د ویزې، سفر او استوګنې پړاوونه په دري یا پښتو تازه معلوماتو سره تېروي. پورټال یوازې بهیر تنظیموي؛ طبي نظر پخپله له روغتونونو څخه راځي."
        },
        features: [
            "Patient Case Submission",
            "Medical Report Uploads",
            "Hospital Quote Comparison",
            "Visa & Travel Checklist",
            "Case Status Tracking",
            "Hospital & Doctor Directory",
            "WhatsApp & SMS Updates",
            "Dari, Pashto & English"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 35,000",
                features: [
                    "Agency Website",
                    "Hospital Directory",
                    "Case Enquiry Form",
                    "Report Uploads",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Agency",
                price: "AFN 70,000",
                features: [
                    "Patient Accounts",
                    "Case Tracking Workflow",
                    "Quote Management",
                    "Travel & Visa Checklist",
                    "Staff Dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Network",
                price: "Custom",
                features: [
                    "Hospital Partner Portal",
                    "Multi-Country Listings",
                    "Mobile App for Patients",
                    "Payment Tracking",
                    "Custom Integrations",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "online-exam-platform",
        slug: "online-exam-platform",
        category: "education",
        title: {
            en: "Online Exam Platform",
            da: "پلتفورم امتحان آنلاین",
            pa: "د آنلاین ازموینې پلاتفورم"
        },
        shortDesc: {
            en: "Question banks, timed tests and automatic marking for schools and trainers",
            da: "بانک سوالات، امتحانات زمان‌دار و تصحیح خودکار برای مکاتب و مراکز آموزشی",
            pa: "د پوښتنو بانک، وخت لرونکې ازموینې او اتومات نمرې د ښوونځیو او روزنیزو مرکزونو لپاره"
        },
        description: {
            en: "We build exam systems for schools, universities, entrance-exam courses and training centres. Teachers build question banks in Dari, Pashto or English, generate shuffled papers, and get results marked automatically for multiple-choice questions. Answers are saved as students go, so a dropped connection doesn't lose their work.",
            da: "ما سیستم‌های امتحان برای مکاتب، پوهنتون‌ها، کورس‌های آمادگی کانکور و مراکز آموزشی می‌سازیم. استادان بانک سوالات را به دری، پشتو یا انگلیسی می‌سازند، پارچه‌های امتحان با ترتیب مختلف تولید می‌کنند و سوالات چندگزینه‌ای به‌طور خودکار تصحیح می‌شوند. جواب‌ها در جریان امتحان ذخیره می‌شوند تا قطع شدن انترنت کار شاگرد را ضایع نکند.",
            pa: "موږ د ښوونځیو، پوهنتونونو، د کانکور د چمتووالي کورسونو او روزنیزو مرکزونو لپاره د ازموینې سیسټمونه جوړوو. ښوونکي د پوښتنو بانک په دري، پښتو یا انګلیسي جوړوي، ګډې وډې پاڼې جوړوي، او څو ځوابه پوښتنې په اتومات ډول نمرې اخلي. ځوابونه د ازموینې په جریان کې خوندي کیږي څو د انټرنټ پرې کېدل د زده‌کوونکي کار ضایع نه کړي."
        },
        features: [
            "Question Bank Management",
            "Timed Online Tests",
            "Automatic Marking (MCQ)",
            "Shuffled Questions & Answers",
            "Auto-Save on Weak Connections",
            "Result Reports & Rankings",
            "Dari, Pashto & English Questions",
            "Math & Image Questions"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 25,000",
                features: [
                    "Up to 300 Students",
                    "Question Bank",
                    "Timed MCQ Tests",
                    "Automatic Results",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Institute",
                price: "AFN 50,000",
                features: [
                    "Up to 2,000 Students",
                    "Multiple Question Types",
                    "Randomised Papers",
                    "Detailed Analytics",
                    "Teacher Accounts",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "University",
                price: "Custom",
                features: [
                    "Unlimited Students",
                    "Webcam Proctoring Option",
                    "Student Information System Link",
                    "Mobile App",
                    "Dedicated Hosting",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "video-course-production",
        slug: "video-course-production",
        category: "education",
        title: {
            en: "Video Course Production",
            da: "تولید کورس‌های ویدیویی",
            pa: "د ویډیويي کورسونو جوړول"
        },
        shortDesc: {
            en: "Turn your expertise into an edited, subtitled online video course",
            da: "دانش خود را به یک کورس ویدیویی ادیت‌شده و زیرنویس‌دار تبدیل کنید",
            pa: "خپله پوهه په یو اډیټ شوي او ژباړل شوي آنلاین ویډیويي کورس بدله کړئ"
        },
        description: {
            en: "We help teachers, trainers and organisations turn their material into a structured video course: lesson outlines, slides, screen recordings, editing, and subtitles in Dari, Pashto or English. Filming can be recorded by you with our guidance, or arranged with a partner studio. Videos are compressed to stream well on mobile data, and we can upload them to your own platform or an LMS.",
            da: "ما به استادان، مربیان و موسسات کمک می‌کنیم تا مواد خود را به یک کورس ویدیویی منظم تبدیل کنند: سرخط درس‌ها، سلایدها، ثبت صفحه، ادیت و زیرنویس به دری، پشتو یا انگلیسی. فلمبرداری را می‌توانید خودتان با رهنمایی ما انجام دهید یا با یک استودیوی همکار تنظیم شود. ویدیوها طوری فشرده می‌شوند که با انترنت موبایل خوب پخش شوند و می‌توانیم آن‌ها را به پلتفورم خودتان یا یک LMS آپلود کنیم.",
            pa: "موږ له ښوونکو، روزونکو او ادارو سره مرسته کوو چې خپل مواد په یو منظم ویډیويي کورس بدل کړي: د درسونو سرلیکونه، سلایډونه، د سکرین ثبت، اډیټ او په دري، پښتو یا انګلیسي ژبه لاندې لیکونه. فلم اخیستل کولی شئ پخپله زموږ په لارښوونه وکړئ، یا د یو همکار سټوډیو له لارې برابر شي. ویډیوګانې داسې کمپرس کیږي چې په موبایل انټرنټ ښه وچلیږي، او موږ یې ستاسو خپل پلاتفورم یا LMS ته اپلوډ کولی شو."
        },
        features: [
            "Course Structure & Lesson Plans",
            "Slide & Visual Design",
            "Screen Recording Lessons",
            "Professional Video Editing",
            "Dari, Pashto & English Subtitles",
            "Mobile-Friendly Compression",
            "Intro & Branding Animations",
            "LMS Upload & Setup"
        ],
        pricing: {
            basic: {
                name: "Mini Course",
                price: "AFN 20,000",
                features: [
                    "Up to 5 Lessons",
                    "Editing of Your Recordings",
                    "Branded Intro",
                    "One Subtitle Language",
                    "Mobile-Optimised Export"
                ]
            },
            professional: {
                name: "Full Course",
                price: "AFN 50,000",
                features: [
                    "Up to 20 Lessons",
                    "Course Outline Support",
                    "Slide Design",
                    "Two Subtitle Languages",
                    "Quizzes & Worksheets",
                    "LMS Upload"
                ]
            },
            enterprise: {
                name: "Academy",
                price: "Custom",
                features: [
                    "Multi-Course Programs",
                    "Partner Studio Filming",
                    "Animated Explainers",
                    "Dari, Pashto & English",
                    "LMS Setup & Hosting",
                    "Ongoing Content Updates"
                ]
            }
        }
    },
    {
        id: "quran-app",
        slug: "quran-app",
        category: "education",
        title: {
            en: "Quran Learning & Memorisation App",
            da: "اپلیکیشن آموزش و حفظ قرآن",
            pa: "د قرآن د زده‌کړې او حفظ اپلیکیشن"
        },
        shortDesc: {
            en: "Apps for Quran teachers and institutes to follow students' hifz progress",
            da: "اپلیکیشن برای استادان و مراکز قرآنی جهت پیگیری پیشرفت حفظ شاگردان",
            pa: "اپونه د قرآن ښوونکو او مرکزونو لپاره د زده‌کوونکو د حفظ پرمختګ تعقیب"
        },
        description: {
            en: "We build Quran learning apps for institutes, teachers and online academies: Mushaf text with page-by-page navigation, verse-by-verse audio with repeat loops for memorisation, and a teacher dashboard to record each student's daily lesson and revision. Recitations, translations and teaching content are provided or approved by the client's own scholars — we build the software, not the religious content.",
            da: "ما برای مراکز، استادان و اکادمی‌های آنلاین اپلیکیشن آموزش قرآن می‌سازیم: متن مصحف با ورق زدن صفحه به صفحه، صوت آیه به آیه با تکرار برای حفظ، و داشبورد استاد برای ثبت سبق و دور روزانه هر شاگرد. قرائت‌ها، ترجمه‌ها و محتوای آموزشی توسط علمای خود مشتری تهیه یا تأیید می‌شوند — ما نرم‌افزار را می‌سازیم، نه محتوای دینی را.",
            pa: "موږ د مرکزونو، ښوونکو او آنلاین اکاډمیو لپاره د قرآن د زده‌کړې اپونه جوړوو: د مصحف متن د پاڼې پر پاڼې اړولو سره، د آیت پر آیت غږ د حفظ لپاره له تکرار سره، او د ښوونکي ډشبورډ د هر زده‌کوونکي د ورځني سبق او دور د ثبت لپاره. قرائتونه، ژباړې او تعلیمي منځپانګه د پیرودونکي خپل علما برابروي یا تاییدوي — موږ سافټویر جوړوو، نه دیني منځپانګه."
        },
        features: [
            "Mushaf Page View",
            "Verse-by-Verse Audio",
            "Repeat Loops for Memorisation",
            "Daily Lesson & Revision Log",
            "Teacher Dashboard",
            "Offline Audio Downloads",
            "Parent Progress Reports",
            "Dari & Pashto Interface"
        ],
        pricing: {
            basic: {
                name: "Teacher",
                price: "AFN 35,000",
                features: [
                    "Android App",
                    "Mushaf & Audio Player",
                    "Repeat Loops",
                    "Student Progress Log",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Institute",
                price: "AFN 70,000",
                features: [
                    "Android & iOS",
                    "Teacher & Student Accounts",
                    "Offline Downloads",
                    "Parent Reports",
                    "Admin Dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Academy",
                price: "Custom",
                features: [
                    "Online Classes (Audio/Video)",
                    "Recitation Recording & Review",
                    "Multiple Branches",
                    "Paid Subscriptions",
                    "Custom Branding",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "english-learning-app",
        slug: "english-learning-app",
        category: "education",
        title: {
            en: "English Learning App",
            da: "اپلیکیشن آموزش انگلیسی",
            pa: "د انګلیسي زده‌کړې اپلیکیشن"
        },
        shortDesc: {
            en: "English lessons explained in Dari and Pashto, built for your course or brand",
            da: "درس‌های انگلیسی با توضیح به دری و پشتو، برای کورس یا برند شما",
            pa: "د انګلیسي درسونه په دري او پښتو تشریح سره، ستاسو د کورس یا برانډ لپاره"
        },
        description: {
            en: "We build English learning apps for language centres and teachers where grammar and vocabulary are explained in Dari and Pashto, not just in English. Lessons combine short videos, audio for pronunciation, and practice exercises with instant feedback, and lessons can be downloaded for offline study. The app can follow your existing curriculum and levels.",
            da: "ما برای مراکز زبان و استادان اپلیکیشن آموزش انگلیسی می‌سازیم که در آن گرامر و لغات به دری و پشتو توضیح داده می‌شوند، نه فقط به انگلیسی. درس‌ها شامل ویدیوهای کوتاه، صوت برای تلفظ و تمرین‌ها با جواب فوری هستند و می‌توان آن‌ها را برای مطالعه آفلاین دانلود کرد. اپلیکیشن می‌تواند از نصاب و سطوح فعلی شما پیروی کند.",
            pa: "موږ د ژبې مرکزونو او ښوونکو لپاره د انګلیسي زده‌کړې اپونه جوړوو چې ګرامر او لغات پکې په دري او پښتو تشریح کیږي، نه یوازې په انګلیسي. درسونه لنډې ویډیوګانې، د تلفظ لپاره غږ، او له سمدستي ځواب سره تمرینونه لري، او د آفلاین زده‌کړې لپاره ډاونلوډ کېدای شي. اپ کولی شي ستاسو د اوسني نصاب او کچو پیروي وکړي."
        },
        features: [
            "Explanations in Dari & Pashto",
            "Vocabulary with Audio",
            "Interactive Exercises",
            "Offline Lesson Downloads",
            "Level-Based Curriculum",
            "Speaking Practice Recording",
            "Progress Tracking",
            "Teacher Dashboard"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 45,000",
                features: [
                    "Android App",
                    "Up to 30 Lessons",
                    "Vocabulary & Audio",
                    "Basic Exercises",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Language Centre",
                price: "AFN 90,000",
                features: [
                    "Android & iOS",
                    "Multiple Levels",
                    "Offline Downloads",
                    "Student Accounts & Progress",
                    "Teacher Dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Platform",
                price: "Custom",
                features: [
                    "Paid Subscriptions",
                    "Live Online Classes",
                    "Placement Tests",
                    "Certificates",
                    "Content Management System",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "ebook-publishing",
        slug: "ebook-publishing",
        category: "education",
        title: {
            en: "E-book Publishing",
            da: "نشر کتاب الکترونیکی",
            pa: "د برېښنايي کتاب خپرول"
        },
        shortDesc: {
            en: "Convert books into properly typeset Dari, Pashto and English e-books",
            da: "تبدیل کتاب‌ها به کتاب الکترونیکی دری، پشتو و انگلیسی با صفحه‌آرایی درست",
            pa: "د کتابونو بدلول په سم ترتیب شوي دري، پښتو او انګلیسي برېښنايي کتابونو"
        },
        description: {
            en: "We convert manuscripts and printed books into EPUB and PDF e-books with correct right-to-left typesetting, proper Dari and Pashto fonts, a clickable table of contents and a designed cover. We can publish them on your own website with a simple shop, or prepare files for international stores that accept your language. Copyright and distribution rights remain the author's or publisher's responsibility.",
            da: "ما دست‌نویس‌ها و کتاب‌های چاپی را به کتاب الکترونیکی EPUB و PDF با صفحه‌آرایی درست راست‌به‌چپ، فونت‌های مناسب دری و پشتو، فهرست قابل کلیک و جلد دیزاین‌شده تبدیل می‌کنیم. می‌توانیم آن‌ها را در ویب‌سایت خودتان با یک فروشگاه ساده نشر کنیم یا فایل‌ها را برای فروشگاه‌های بین‌المللی که زبان شما را می‌پذیرند آماده کنیم. حق نشر و حقوق توزیع به عهده نویسنده یا ناشر است.",
            pa: "موږ لاسي لیکنې او چاپي کتابونه په EPUB او PDF برېښنايي کتابونو بدلوو چې سم ښي‌نه‌کیڼ ترتیب، د دري او پښتو مناسب فونټونه، د کلیک وړ فهرست او ډیزاین شوی پوښ ولري. موږ یې ستاسو په خپله ویب پاڼه کې له ساده پلورنځي سره خپرولی شو، یا د هغو نړیوالو پلورنځیو لپاره فایلونه چمتو کوو چې ستاسو ژبه مني. د چاپ حق او د وېش حقونه د لیکوال یا خپرونکي مسؤلیت دی."
        },
        features: [
            "EPUB & PDF Conversion",
            "RTL Dari & Pashto Typesetting",
            "Cover Design",
            "Clickable Table of Contents",
            "Image & Table Formatting",
            "Self-Hosted E-book Shop",
            "Store-Ready Files",
            "Preview Sample Chapters"
        ],
        pricing: {
            basic: {
                name: "Single Book",
                price: "AFN 8,000",
                features: [
                    "Up to 150 Pages",
                    "PDF E-book",
                    "RTL Typesetting",
                    "Simple Cover",
                    "One Revision Round"
                ]
            },
            professional: {
                name: "Author",
                price: "AFN 18,000",
                features: [
                    "Up to 400 Pages",
                    "EPUB & PDF",
                    "Custom Cover Design",
                    "Linked Table of Contents",
                    "Images & Tables",
                    "Two Revision Rounds"
                ]
            },
            enterprise: {
                name: "Publisher",
                price: "AFN 45,000+",
                features: [
                    "Multiple Titles",
                    "E-book Shop Website",
                    "Online Payments",
                    "Download Protection",
                    "Sample Chapter Previews",
                    "6 Months Support"
                ]
            }
        }
    },
    {
        id: "tuition-center-system",
        slug: "tuition-center-system",
        category: "education",
        title: {
            en: "Tuition Center Management System",
            da: "سیستم مدیریت مراکز آموزشی و کورس‌ها",
            pa: "د روزنیزو مرکزونو او کورسونو د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Enrolment, class schedules, attendance and fees for courses and tuition centres",
            da: "ثبت‌نام، تقسیم اوقات صنف، حاضری و فیس برای کورس‌ها و مراکز آموزشی",
            pa: "نوم لیکنه، د ټولګیو مهالوېش، حاضري او فیس د کورسونو او روزنیزو مرکزونو لپاره"
        },
        description: {
            en: "Built for English courses, computer institutes and entrance-exam centres: register students, place them in classes and shifts, record attendance, and track monthly fees with printed receipts. Owners see which students owe fees, which classes are full, and how much each teacher has taught, and parents can receive SMS for absences and fee reminders.",
            da: "برای کورس‌های انگلیسی، انستیتوت‌های کمپیوتر و مراکز آمادگی کانکور ساخته شده: شاگردان را ثبت کنید، در صنف‌ها و نوبت‌ها جا دهید، حاضری بگیرید و فیس ماهانه را با رسید چاپی پیگیری کنید. مالک می‌بیند کدام شاگردان فیس باقی دارند، کدام صنف‌ها پر است و هر استاد چند ساعت درس داده، و والدین برای غیرحاضری و یادآوری فیس پیام SMS می‌گیرند.",
            pa: "د انګلیسي کورسونو، د کمپیوټر انسټیټیوټونو او د کانکور د چمتووالي مرکزونو لپاره جوړ شوی: زده‌کوونکي ثبت کړئ، په ټولګیو او شفټونو کې یې ځای پر ځای کړئ، حاضري واخلئ، او میاشتنی فیس له چاپي رسید سره تعقیب کړئ. مالک ویني چې کوم زده‌کوونکي فیس پور لري، کوم ټولګي ډک دي او هر ښوونکي څومره درس ورکړی، او والدین د غیرحاضرۍ او فیس یادونې لپاره SMS ترلاسه کوي."
        },
        features: [
            "Student Registration",
            "Classes, Shifts & Schedules",
            "Attendance Tracking",
            "Monthly Fees & Receipts",
            "SMS to Parents",
            "Teacher Hours & Salaries",
            "Exam Results",
            "Dari & Pashto Interface"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 15,000",
                features: [
                    "Up to 300 Students",
                    "Student & Class Records",
                    "Attendance",
                    "Fee Receipts",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Centre",
                price: "AFN 30,000",
                features: [
                    "Unlimited Students",
                    "Teacher Salaries",
                    "SMS Notifications",
                    "Exam Results",
                    "Owner Dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Branch",
                price: "AFN 55,000+",
                features: [
                    "Multiple Branches",
                    "Parent & Student App",
                    "Online Fee Payments",
                    "Central Reports",
                    "Custom Features",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "webinar-platform",
        slug: "webinar-platform",
        category: "education",
        title: {
            en: "Webinar & Online Meeting Platform",
            da: "پلتفورم وبینار و جلسات آنلاین",
            pa: "د ویبینار او آنلاین غونډو پلاتفورم"
        },
        shortDesc: {
            en: "Branded webinar and live class platforms with registration and recordings",
            da: "پلتفورم وبینار و صنف زنده با برند شما، همراه با ثبت‌نام و ضبط جلسات",
            pa: "ستاسو د برانډ ویبینار او ژوندي ټولګي پلاتفورم، له نوم لیکنې او ثبت سره"
        },
        description: {
            en: "We build branded webinar and live-class platforms on top of proven video technology, rather than reinventing it: registration pages, reminders, live sessions with chat and Q&A, and recordings published afterwards for those who missed it. An audio-and-slides mode keeps attendees on weak connections in the session, and paid events can take payments up front.",
            da: "ما پلتفورم‌های وبینار و صنف زنده را با برند شما و بر پایه فناوری‌های ویدیویی امتحان‌شده می‌سازیم، نه این‌که آن را از صفر اختراع کنیم: صفحات ثبت‌نام، یادآوری‌ها، جلسات زنده با چت و سوال و جواب، و ضبط جلسه که بعداً برای غایبین نشر می‌شود. حالت صوت و سلاید شرکت‌کنندگان با انترنت ضعیف را در جلسه نگه می‌دارد و برنامه‌های پولی می‌توانند پیش‌پرداخت بگیرند.",
            pa: "موږ ستاسو د برانډ ویبینار او ژوندي ټولګي پلاتفورمونه د ازمویل شوې ویډیو ټیکنالوژۍ پر بنسټ جوړوو، نه دا چې له سره یې جوړ کړو: د نوم لیکنې پاڼې، یادونې، له چټ او پوښتنو ځوابونو سره ژوندۍ ناستې، او د ناستې ثبت چې وروسته د غیرحاضرو لپاره خپریږي. د غږ او سلایډ حالت په کمزوري انټرنټ کې ګډونوال په ناسته کې ساتي، او پیسه‌یي پروګرامونه مخکې تادیه اخیستلی شي."
        },
        features: [
            "Branded Registration Pages",
            "Live Video Sessions",
            "Chat, Q&A & Polls",
            "Automatic Recordings",
            "Low-Bandwidth Audio Mode",
            "Email & SMS Reminders",
            "Paid Event Tickets",
            "Attendance Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 30,000",
                features: [
                    "Branded Event Page",
                    "Registration & Reminders",
                    "Integration with Zoom or Meet",
                    "Recording Library",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Academy",
                price: "AFN 65,000",
                features: [
                    "Embedded Live Sessions",
                    "Chat, Q&A & Polls",
                    "Paid Tickets",
                    "Attendance Reports",
                    "Low-Bandwidth Mode",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Organisation",
                price: "Custom",
                features: [
                    "Self-Hosted Video Server",
                    "Multiple Hosts & Rooms",
                    "Interpretation Channels",
                    "Mobile Apps",
                    "Single Sign-On",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "student-information-system",
        slug: "student-information-system",
        category: "education",
        title: {
            en: "University Student Information System",
            da: "سیستم معلومات محصلان پوهنتون",
            pa: "د پوهنتون د محصلینو د معلوماتو سیسټم"
        },
        shortDesc: {
            en: "Admissions, enrolment, grades, transcripts and fees for universities",
            da: "پذیرش، ثبت‌نام، نمرات، ترانسکریپت و فیس برای پوهنتون‌ها",
            pa: "داخله، نوم لیکنه، نمرې، ټرانسکرېپټ او فیس د پوهنتونونو لپاره"
        },
        description: {
            en: "A central system for private universities and higher-education institutes covering the full student lifecycle: admission applications, faculty and semester enrolment, credit-based grading, transcripts and graduation. Lecturers enter marks online, students check results and fees from a portal, and the registrar can print transcripts and reports in the format the institution already uses.",
            da: "یک سیستم مرکزی برای پوهنتون‌ها و موسسات تحصیلات عالی خصوصی که تمام دوره تحصیلی محصل را پوشش می‌دهد: درخواست پذیرش، ثبت‌نام در پوهنځی و سمستر، نمره‌دهی به اساس کریدت، ترانسکریپت و فراغت. استادان نمرات را آنلاین وارد می‌کنند، محصلان نتایج و فیس را از پورتال می‌بینند و مدیریت ثبت می‌تواند ترانسکریپت و راپورها را به همان فورمت فعلی موسسه چاپ کند.",
            pa: "د خصوصي پوهنتونونو او لوړو زده‌کړو موسسو لپاره یو مرکزي سیسټم چې د محصل ټوله دوره پوښي: د داخلې غوښتنلیکونه، په پوهنځي او سمستر کې نوم لیکنه، د کریډیټ پر بنسټ نمرې، ټرانسکرېپټ او فراغت. استادان نمرې آنلاین داخلوي، محصلین پایلې او فیس له پورټال څخه ګوري، او د ثبت مدیریت کولی شي ټرانسکرېپټونه او راپورونه د موسسې په اوسني فورمټ چاپ کړي."
        },
        features: [
            "Online Admissions",
            "Faculty & Semester Enrolment",
            "Credit-Based Grading",
            "Transcripts & Certificates",
            "Student & Lecturer Portals",
            "Fee Management",
            "Timetables & Attendance",
            "Role-Based Access"
        ],
        pricing: {
            basic: {
                name: "Institute",
                price: "AFN 60,000",
                features: [
                    "Student Records",
                    "Enrolment & Grades",
                    "Transcript Printing",
                    "Fee Records",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "University",
                price: "AFN 120,000",
                features: [
                    "Online Admissions",
                    "Student & Lecturer Portals",
                    "Timetables & Attendance",
                    "Credit System",
                    "Data Migration",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Campus",
                price: "Custom",
                features: [
                    "Multiple Campuses",
                    "Mobile App",
                    "Online Fee Payments",
                    "LMS & Exam Integration",
                    "Certificate QR Verification",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "madrasa-management",
        slug: "madrasa-management",
        category: "education",
        title: {
            en: "Madrasa Management System",
            da: "سیستم مدیریت مدرسه دینی",
            pa: "د دیني مدرسې د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Student records, hifz progress, hostel and donations for madrasas",
            da: "سوابق طالبان، پیشرفت حفظ، لیلیه و کمک‌ها برای مدارس دینی",
            pa: "د طالبانو ریکارډ، د حفظ پرمختګ، لیلیه او مرستې د دیني مدرسو لپاره"
        },
        description: {
            en: "A management system shaped around how madrasas are run: student admission and guardian details, class levels by kitab, daily hifz lessons and revision, hostel rooms and meals, and records of donations and expenses. Reports can be printed for the administration, and the interface works fully in Dari and Pashto. The system only records — curriculum and teaching remain the madrasa's own.",
            da: "یک سیستم مدیریت که به اساس شیوه اداره مدارس ساخته شده: ثبت‌نام طالب و معلومات سرپرست، درجه‌های صنف به اساس کتاب، سبق و دور روزانه حفظ، اتاق‌ها و غذای لیلیه، و ثبت کمک‌ها و مصارف. راپورها برای اداره قابل چاپ هستند و صفحه کاربری کاملاً به دری و پشتو کار می‌کند. سیستم فقط ثبت می‌کند — نصاب و تدریس از خود مدرسه است.",
            pa: "د مدیریت یو سیسټم چې د مدرسو د چلولو د طریقې له مخې جوړ شوی: د طالب داخله او د سرپرست معلومات، د کتاب له مخې د درجو ټولګي، ورځنی د حفظ سبق او دور، د لیلیې خونې او خواړه، او د مرستو او لګښتونو ثبت. راپورونه د ادارې لپاره چاپیدای شي، او انټرفیس په بشپړ ډول په دري او پښتو کار کوي. سیسټم یوازې ثبت کوي — نصاب او تدریس د مدرسې خپل دی."
        },
        features: [
            "Student & Guardian Records",
            "Class Levels & Kitab Tracking",
            "Daily Hifz Lesson Log",
            "Attendance",
            "Hostel Rooms & Meals",
            "Donation Receipts",
            "Expense Records",
            "Printable Reports"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 12,000",
                features: [
                    "Student Records",
                    "Attendance",
                    "Hifz Progress Log",
                    "Printable Reports",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Madrasa",
                price: "AFN 25,000",
                features: [
                    "Everything in Starter",
                    "Hostel Management",
                    "Donations & Expenses",
                    "Teacher Records",
                    "SMS to Guardians",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Branch",
                price: "AFN 45,000+",
                features: [
                    "Multiple Branches",
                    "Central Reporting",
                    "Guardian Mobile App",
                    "Online Donation Page",
                    "Data Backup Plan",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "scholarship-portal",
        slug: "scholarship-portal",
        category: "education",
        title: {
            en: "Scholarship Application Portal",
            da: "پورتال درخواست بورسیه",
            pa: "د بورسیې د غوښتنلیک پورټال"
        },
        shortDesc: {
            en: "Online applications, document uploads and review workflow for scholarships",
            da: "درخواست آنلاین، آپلود اسناد و روند بررسی برای بورسیه‌ها",
            pa: "آنلاین غوښتنلیکونه، د اسنادو اپلوډ او د ارزونې بهیر د بورسیو لپاره"
        },
        description: {
            en: "For foundations, NGOs and universities running scholarship programmes: applicants fill in a multi-step form in Dari, Pashto or English, upload transcripts and ID documents, and can save and return later. Reviewers score applications against your criteria, shortlist and schedule interviews, and applicants are notified of decisions by email or SMS.",
            da: "برای بنیادها، موسسات و پوهنتون‌هایی که برنامه‌های بورسیه دارند: متقاضیان یک فورم چندمرحله‌ای را به دری، پشتو یا انگلیسی پر می‌کنند، ترانسکریپت و اسناد هویت را آپلود می‌کنند و می‌توانند ذخیره کرده و بعداً برگردند. بررسی‌کنندگان درخواست‌ها را به اساس معیارهای شما نمره می‌دهند، لست کوتاه می‌سازند و مصاحبه تنظیم می‌کنند و متقاضیان از طریق ایمیل یا SMS از تصمیم باخبر می‌شوند.",
            pa: "د هغو بنسټونو، موسسو او پوهنتونونو لپاره چې د بورسیو پروګرامونه چلوي: غوښتونکي یو څو پړاویز فورمه په دري، پښتو یا انګلیسي ډکوي، ټرانسکرېپټ او د پېژند اسناد اپلوډوي، او کولی شي خوندي یې کړي او وروسته بېرته راشي. ارزونکي غوښتنلیکونه ستاسو د معیارونو له مخې نمره کوي، لنډ لېست جوړوي او مرکې ټاکي، او غوښتونکي د برېښنالیک یا SMS له لارې له پرېکړې خبریږي."
        },
        features: [
            "Multi-Step Application Forms",
            "Document Uploads",
            "Save & Continue Later",
            "Reviewer Scoring",
            "Shortlisting & Interviews",
            "Email & SMS Notifications",
            "Eligibility Checks",
            "Dari, Pashto & English"
        ],
        pricing: {
            basic: {
                name: "Single Programme",
                price: "AFN 30,000",
                features: [
                    "One Scholarship Programme",
                    "Online Application Form",
                    "Document Uploads",
                    "Admin Review Panel",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Foundation",
                price: "AFN 60,000",
                features: [
                    "Multiple Programmes",
                    "Reviewer Scoring",
                    "Shortlist & Interview Scheduling",
                    "Email & SMS Notifications",
                    "Export to Excel",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Institution",
                price: "Custom",
                features: [
                    "Recurring Annual Cycles",
                    "Scholar Progress Tracking",
                    "Stipend Payment Records",
                    "Donor Reports",
                    "Custom Integrations",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "kids-learning-app",
        slug: "kids-learning-app",
        category: "education",
        title: {
            en: "Kids Learning App",
            da: "اپلیکیشن آموزشی برای اطفال",
            pa: "د ماشومانو د زده‌کړې اپلیکیشن"
        },
        shortDesc: {
            en: "Playful learning apps for children in Dari and Pashto",
            da: "اپلیکیشن‌های آموزشی و سرگرم‌کننده برای اطفال به دری و پشتو",
            pa: "د ماشومانو لپاره زده‌کړیز او ساعتېریز اپونه په دري او پښتو"
        },
        description: {
            en: "We build children's learning apps in Dari and Pashto — alphabet, numbers, early reading, colours and simple maths — with native-speaker audio, tap-and-drag games and friendly illustrations. Everything works offline once installed, there are no external ads, and a simple parent area shows what the child has practised.",
            da: "ما اپلیکیشن‌های آموزشی اطفال را به دری و پشتو می‌سازیم — الفبا، اعداد، خواندن ابتدایی، رنگ‌ها و حساب ساده — با صدای گوینده بومی، بازی‌های لمسی و کشیدنی، و نقاشی‌های دوستانه. همه چیز پس از نصب به‌طور آفلاین کار می‌کند، اعلان بیرونی ندارد و یک بخش ساده برای والدین نشان می‌دهد که طفل چه چیزی را تمرین کرده است.",
            pa: "موږ د ماشومانو د زده‌کړې اپونه په دري او پښتو جوړوو — الفبا، شمېرې، لومړنی لوستل، رنګونه او ساده حساب — د اصلي ویونکي غږ، د لمس او کشولو لوبو او دوستانه انځورونو سره. هر څه له نصب وروسته آفلاین کار کوي، بهرني اعلانونه نه لري، او د والدینو یوه ساده برخه ښيي چې ماشوم څه تمرین کړي."
        },
        features: [
            "Dari & Pashto Alphabet",
            "Native-Speaker Audio",
            "Interactive Learning Games",
            "Works Fully Offline",
            "No External Ads",
            "Parent Progress Area",
            "Custom Illustrations",
            "Android & iOS"
        ],
        pricing: {
            basic: {
                name: "Single Topic",
                price: "AFN 40,000",
                features: [
                    "Android App",
                    "One Learning Topic",
                    "Audio & Illustrations",
                    "Offline Use",
                    "Play Store Publishing"
                ]
            },
            professional: {
                name: "Learning Pack",
                price: "AFN 80,000",
                features: [
                    "Android & iOS",
                    "Up to 4 Topics",
                    "Mini-Games",
                    "Parent Progress Area",
                    "Two Languages",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Curriculum",
                price: "Custom",
                features: [
                    "Full Curriculum Coverage",
                    "Content Management System",
                    "School & Classroom Mode",
                    "Animated Characters",
                    "Paid Content Options",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "library-management",
        slug: "library-management",
        category: "education",
        title: {
            en: "Library Management System",
            da: "سیستم مدیریت کتابخانه",
            pa: "د کتابتون د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Cataloguing, borrowing and returns for school, university and public libraries",
            da: "فهرست‌نویسی، امانت و برگشت کتاب برای کتابخانه‌های مکتب، پوهنتون و عامه",
            pa: "فهرست جوړول، پور او بېرته ورکول د ښوونځي، پوهنتون او عامه کتابتونونو لپاره"
        },
        description: {
            en: "A library system that handles Dari, Pashto, Arabic and English titles side by side: catalogue books with author, subject and shelf location, print barcode labels, and issue and return them at the desk. Members can search the catalogue online, librarians see overdue items and fines, and digital copies such as PDFs can be attached to records.",
            da: "یک سیستم کتابخانه که عناوین دری، پشتو، عربی و انگلیسی را در کنار هم مدیریت می‌کند: کتاب‌ها را با نویسنده، موضوع و جای الماری فهرست کنید، برچسب بارکود چاپ کنید و در میز امانت بدهید و پس بگیرید. اعضا می‌توانند فهرست را آنلاین جستجو کنند، کتابدار کتاب‌های معطل و جریمه‌ها را می‌بیند و نسخه‌های دیجیتال مانند PDF به سوابق وصل شده می‌توانند.",
            pa: "د کتابتون یو سیسټم چې دري، پښتو، عربي او انګلیسي سرلیکونه یوځای اداره کوي: کتابونه له لیکوال، موضوع او د المارۍ له ځای سره فهرست کړئ، د بارکوډ لیبلونه چاپ کړئ، او په مېز کې یې پور ورکړئ او بېرته یې واخلئ. غړي کولی شي فهرست آنلاین ولټوي، کتابتون‌پال ځنډېدلي کتابونه او جریمې ویني، او ډیجیټل نسخې لکه PDF له ریکارډونو سره تړل کېدای شي."
        },
        features: [
            "Multilingual Cataloguing",
            "Barcode Labels",
            "Issue & Return Desk",
            "Overdue Alerts & Fines",
            "Online Catalogue Search",
            "Member Management",
            "Digital Copy Attachments",
            "Usage Reports"
        ],
        pricing: {
            basic: {
                name: "School",
                price: "AFN 12,000",
                features: [
                    "Up to 5,000 Titles",
                    "Cataloguing",
                    "Issue & Return",
                    "Overdue List",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "University",
                price: "AFN 30,000",
                features: [
                    "Unlimited Titles",
                    "Barcode Labels",
                    "Online Catalogue",
                    "Fines & Member Cards",
                    "Data Import from Excel",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Digital Library",
                price: "AFN 55,000+",
                features: [
                    "Multiple Branches",
                    "Digital Library (PDF/E-books)",
                    "Member Mobile Access",
                    "Reservation System",
                    "Custom Reports",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "alumni-platform",
        slug: "alumni-platform",
        category: "education",
        title: {
            en: "Alumni Network Platform",
            da: "پلتفورم شبکه فارغ‌التحصیلان",
            pa: "د فارغانو د شبکې پلاتفورم"
        },
        shortDesc: {
            en: "Keep graduates connected — at home and across the diaspora",
            da: "فارغ‌التحصیلان را در داخل و خارج کشور با هم در ارتباط نگه دارید",
            pa: "فارغان په هېواد دننه او بهر کې سره وصل وساتئ"
        },
        description: {
            en: "Many Afghan graduates now live across several countries, and institutions lose touch with them. We build alumni platforms where graduates verify their degree year, keep a profile with current city and work, find classmates, and see jobs, events and mentoring requests. The institution gets an up-to-date directory and can send announcements to everyone at once.",
            da: "بسیاری از فارغ‌التحصیلان افغان اکنون در کشورهای مختلف زندگی می‌کنند و موسسات ارتباط خود را با آن‌ها از دست می‌دهند. ما پلتفورم‌های فارغ‌التحصیلان می‌سازیم که در آن فارغان سال فراغت خود را تأیید می‌کنند، پروفایلی با شهر و کار فعلی دارند، همصنفان را پیدا می‌کنند و وظایف، برنامه‌ها و درخواست‌های رهنمایی را می‌بینند. موسسه یک فهرست به‌روز دارد و می‌تواند اعلان‌ها را یک‌باره به همه بفرستد.",
            pa: "ډېر افغان فارغان اوس په بېلابېلو هېوادونو کې ژوند کوي، او موسسې ورسره اړیکه له لاسه ورکوي. موږ د فارغانو پلاتفورمونه جوړوو چې فارغان پکې د خپل فراغت کال تاییدوي، د اوسني ښار او کار سره پروفایل لري، ټولګیوال پیدا کوي، او دندې، پروګرامونه او د لارښوونې غوښتنې ویني. موسسه یو تازه لارښود لري او کولی شي اعلانونه په یو ځل ټولو ته ولېږي."
        },
        features: [
            "Graduate Profiles & Directory",
            "Graduation Year Verification",
            "Find Classmates by Batch",
            "Jobs Board",
            "Events & Reunions",
            "Mentoring Requests",
            "Announcements & Newsletters",
            "Donation & Giving Page"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 25,000",
                features: [
                    "Alumni Registration",
                    "Searchable Directory",
                    "News & Announcements",
                    "Admin Approval",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Network",
                price: "AFN 50,000",
                features: [
                    "Everything in Starter",
                    "Jobs Board",
                    "Events & RSVPs",
                    "Mentoring Requests",
                    "Email Newsletters",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Institution",
                price: "Custom",
                features: [
                    "Mobile App",
                    "Chapters by Country/City",
                    "Online Donations",
                    "Student Records Integration",
                    "Engagement Reports",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "parent-school-app",
        slug: "parent-school-app",
        category: "education",
        title: {
            en: "Parent-School Communication App",
            da: "اپلیکیشن ارتباط والدین و مکتب",
            pa: "د والدینو او ښوونځي د اړیکې اپلیکیشن"
        },
        shortDesc: {
            en: "Attendance, homework, results and fee notices sent straight to parents",
            da: "حاضری، کارخانگی، نتایج و اطلاعیه فیس مستقیم به والدین",
            pa: "حاضري، کورنی کار، پایلې او د فیس خبرتیاوې مستقیم والدینو ته"
        },
        description: {
            en: "An app that connects schools with parents: daily attendance, homework, exam results, fee balances and school announcements arrive as notifications in Dari or Pashto. For parents without smartphones, the same messages can go out by SMS, and teachers can send a note to one family or a whole class without sharing personal phone numbers.",
            da: "اپلیکیشنی که مکتب را با والدین وصل می‌کند: حاضری روزانه، کارخانگی، نتایج امتحان، باقی‌مانده فیس و اعلان‌های مکتب به شکل نوتیفیکیشن به دری یا پشتو می‌رسند. برای والدینی که گوشی هوشمند ندارند، همین پیام‌ها از طریق SMS فرستاده می‌شوند و استادان می‌توانند بدون شریک ساختن شماره شخصی، به یک خانواده یا تمام صنف پیام بفرستند.",
            pa: "یو اپ چې ښوونځی له والدینو سره وصلوي: ورځنۍ حاضري، کورنی کار، د ازموینې پایلې، پاتې فیس او د ښوونځي اعلانونه د خبرتیا په بڼه په دري یا پښتو رسیږي. د هغو والدینو لپاره چې سمارټ فون نه لري، همدا پیغامونه د SMS له لارې ځي، او ښوونکي کولی شي پرته له دې چې شخصي شمېره شریکه کړي، یوې کورنۍ یا ټول ټولګي ته یادښت ولېږي."
        },
        features: [
            "Attendance Notifications",
            "Homework & Class Diary",
            "Exam Results",
            "Fee Balances & Reminders",
            "School Announcements",
            "SMS Fallback for Basic Phones",
            "Teacher-Parent Messaging",
            "Dari & Pashto Interface"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 30,000",
                features: [
                    "Android App",
                    "Attendance & Announcements",
                    "Homework Notes",
                    "Admin Panel",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "School",
                price: "AFN 60,000",
                features: [
                    "Android & iOS",
                    "Results & Fee Notices",
                    "Teacher-Parent Messaging",
                    "SMS Fallback",
                    "Teacher Accounts",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "School Network",
                price: "Custom",
                features: [
                    "Multiple Schools",
                    "School Management System Link",
                    "Online Fee Payments",
                    "Transport & Bus Alerts",
                    "Custom Branding",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "certificate-verification",
        slug: "certificate-verification",
        category: "education",
        title: {
            en: "Digital Certificates with QR Verification",
            da: "سرتیفیکیت دیجیتال با تأیید QR",
            pa: "ډیجیټل سرټیفیکیټونه د QR تایید سره"
        },
        shortDesc: {
            en: "Issue certificates anyone can verify in seconds by scanning a QR code",
            da: "سرتیفیکیت‌هایی صادر کنید که هر کس با اسکن QR در چند ثانیه تأیید کند",
            pa: "داسې سرټیفیکیټونه صادر کړئ چې هر څوک یې د QR په سکین په څو ثانیو کې تایید کړي"
        },
        description: {
            en: "We set up certificate systems for training centres, universities and NGOs: certificates are generated in bulk from a spreadsheet, each with a unique QR code that links to a verification page on your own domain. Employers and embassies abroad can confirm a certificate is genuine without calling your office, and revoked certificates show as invalid.",
            da: "ما برای مراکز آموزشی، پوهنتون‌ها و موسسات سیستم سرتیفیکیت راه‌اندازی می‌کنیم: سرتیفیکیت‌ها به‌طور یک‌جا از یک فایل اکسل تولید می‌شوند و هرکدام یک کود QR منحصربه‌فرد دارد که به صفحه تأیید در دامنه خودتان وصل است. کارفرمایان و سفارت‌ها در خارج می‌توانند بدون تماس با دفتر شما اصل بودن سرتیفیکیت را تأیید کنند و سرتیفیکیت‌های لغوشده نامعتبر نشان داده می‌شوند.",
            pa: "موږ د روزنیزو مرکزونو، پوهنتونونو او موسسو لپاره د سرټیفیکیټ سیسټمونه جوړوو: سرټیفیکیټونه په یو ځل له یوې اکسل فایل څخه جوړیږي، او هر یو ځانګړی QR کوډ لري چې ستاسو په خپل ډومین کې د تایید پاڼې ته وصل دی. په بهر کې کارګمارونکي او سفارتونه کولی شي ستاسو دفتر ته له زنګ وهلو پرته د سرټیفیکیټ اصلیت تایید کړي، او لغوه شوي سرټیفیکیټونه ناسم ښودل کیږي."
        },
        features: [
            "Bulk Generation from Excel",
            "Unique QR Code per Certificate",
            "Verification Page on Your Domain",
            "Custom Certificate Design",
            "Revocation & Status Control",
            "PDF Download & Email Delivery",
            "Dari, Pashto & English Layouts",
            "Verification Logs"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 15,000",
                features: [
                    "One Certificate Template",
                    "Bulk Generation",
                    "QR Verification Page",
                    "PDF Downloads",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Institute",
                price: "AFN 30,000",
                features: [
                    "Multiple Templates",
                    "Email Delivery to Graduates",
                    "Revocation Control",
                    "Admin Dashboard",
                    "Verification Logs",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "University",
                price: "AFN 55,000+",
                features: [
                    "Transcripts & Diplomas",
                    "Student System Integration",
                    "API for Third-Party Checks",
                    "Multiple Departments",
                    "Custom Domain & Branding",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "driving-school-system",
        slug: "driving-school-system",
        category: "education",
        title: {
            en: "Driving School Management System",
            da: "سیستم مدیریت مکتب رانندگی",
            pa: "د موټر چلولو د ښوونځي د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Lesson booking, instructors, vehicles and fees for driving schools",
            da: "نوبت درس، مربیان، موترها و فیس برای مکاتب رانندگی",
            pa: "د درس وخت، روزونکي، موټرونه او فیس د موټر چلولو ښوونځیو لپاره"
        },
        description: {
            en: "Software for driving schools to register students, book practical lessons with an instructor and car, and track how many hours each student has completed. Theory lessons can be offered with a practice test bank, and owners see vehicle usage, instructor schedules and outstanding fees. Licence exams themselves remain with the traffic authority — the system helps students prepare and keeps your records.",
            da: "نرم‌افزاری برای مکاتب رانندگی تا شاگردان را ثبت کنند، درس عملی را با مربی و موتر مشخص نوبت دهند و پیگیری کنند هر شاگرد چند ساعت تکمیل کرده است. درس‌های نظری با بانک سوالات تمرینی ارائه می‌شود و مالک استفاده موترها، تقسیم اوقات مربیان و فیس‌های باقی‌مانده را می‌بیند. امتحان لایسنس به عهده اداره ترافیک است — سیستم به آمادگی شاگردان کمک می‌کند و سوابق شما را نگه می‌دارد.",
            pa: "د موټر چلولو ښوونځیو لپاره سافټویر چې زده‌کوونکي ثبت کړي، له روزونکي او موټر سره عملي درسونه وټاکي، او تعقیب کړي چې هر زده‌کوونکي څو ساعته بشپړ کړي. نظري درسونه د تمریني پوښتنو له بانک سره وړاندې کېدای شي، او مالک د موټرونو کارونه، د روزونکو مهالوېش او پاتې فیسونه ویني. د جواز ازموینه د ترافیکو ادارې کار دی — سیسټم د زده‌کوونکو په چمتووالي کې مرسته کوي او ستاسو ریکارډ ساتي."
        },
        features: [
            "Student Registration",
            "Practical Lesson Booking",
            "Instructor Schedules",
            "Vehicle Usage & Maintenance",
            "Completed Hours Tracking",
            "Theory Practice Tests",
            "Fee & Instalment Tracking",
            "SMS Lesson Reminders"
        ],
        pricing: {
            basic: {
                name: "Starter",
                price: "AFN 15,000",
                features: [
                    "Student Records",
                    "Lesson Booking",
                    "Fee Receipts",
                    "Hours Tracking",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "School",
                price: "AFN 30,000",
                features: [
                    "Instructor & Vehicle Schedules",
                    "Theory Practice Test Bank",
                    "SMS Reminders",
                    "Vehicle Maintenance Log",
                    "Owner Dashboard",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Multi-Branch",
                price: "AFN 50,000+",
                features: [
                    "Multiple Branches",
                    "Student Mobile App",
                    "Online Booking & Payments",
                    "Instructor App",
                    "Custom Reports",
                    "1 Year Maintenance"
                ]
            }
        }
    },
    {
        id: "hotel-management",
        slug: "hotel-management",
        category: "travel",
        title: {
            en: "Hotel & Guesthouse Management System",
            da: "سیستم مدیریت هوتل و مهمانخانه",
            pa: "د هوټل او مېلمستون د مدیریت سیسټم"
        },
        shortDesc: {
            en: "Room bookings, check-in, housekeeping and billing for hotels and guesthouses",
            da: "رزرو اتاق، پذیرش، نظافت و صورت‌حساب برای هوتل‌ها و مهمانخانه‌ها",
            pa: "د خونو بکنګ، پذیرش، پاکولو او بلونو د هوټلونو او مېلمستونونو لپاره"
        },
        description: {
            en: "A property management system for hotels and guesthouses: a room calendar showing what's free, booked or being cleaned, guest check-in with ID details, and bills that combine room nights, restaurant and laundry. A booking page on your website takes direct reservations, and the system keeps running on the local network if the internet drops, syncing when it returns.",
            da: "یک سیستم مدیریت برای هوتل‌ها و مهمانخانه‌ها: تقویم اتاق‌ها که نشان می‌دهد کدام خالی، رزرو یا در حال نظافت است، پذیرش مهمان با معلومات تذکره یا پاسپورت، و صورت‌حسابی که شب‌های اقامت، رستورانت و لباسشویی را یک‌جا می‌کند. صفحه رزرو در ویب‌سایت شما رزرو مستقیم می‌گیرد و سیستم در صورت قطع انترنت روی شبکه داخلی کار می‌کند و با برگشت انترنت همگام می‌شود.",
            pa: "د هوټلونو او مېلمستونونو لپاره د مدیریت سیسټم: د خونو تقویم چې ښيي کومه خالي، بک شوې یا د پاکولو په حال کې ده، د مېلمه پذیرش د تذکرې یا پاسپورټ له معلوماتو سره، او بل چې د شپو استوګنه، رستورانت او کالي مینځل یوځای کوي. ستاسو په ویب پاڼه کې د بکنګ پاڼه مستقیم بکنګونه اخلي، او سیسټم د انټرنټ د پرې کېدو پر مهال په داخلي شبکه کار کوي او د انټرنټ په راتګ همغږي کیږي."
        },
        features: [
            "Room Availability Calendar",
            "Guest Check-In & Check-Out",
            "Guest ID Records",
            "Combined Billing (Room, Food, Laundry)",
            "Housekeeping Status",
            "Direct Booking Page",
            "Works During Internet Outages",
            "Occupancy & Revenue Reports"
        ],
        pricing: {
            basic: {
                name: "Guesthouse",
                price: "AFN 20,000",
                features: [
                    "Up to 15 Rooms",
                    "Room Calendar",
                    "Check-In & Check-Out",
                    "Guest Billing",
                    "1 Month Support"
                ]
            },
            professional: {
                name: "Hotel",
                price: "AFN 45,000",
                features: [
                    "Up to 80 Rooms",
                    "Housekeeping Module",
                    "Restaurant & Laundry Charges",
                    "Direct Booking Page",
                    "Staff Roles",
                    "3 Months Support"
                ]
            },
            enterprise: {
                name: "Hotel Group",
                price: "AFN 80,000+",
                features: [
                    "Multiple Properties",
                    "Online Payments",
                    "Booking Site Channel Sync",
                    "Central Reporting",
                    "Custom Integrations",
                    "1 Year Maintenance"
                ]
            }
        }
    }
];

export default services;
