// Batch 10 — MVP apps, offline-first apps, delivery apps in Kabul, AI app features, publishing to Google Play/App Store. Generated 2026-10.
const posts = [
    {
        id: "106",
        slug: "mvp-app-development-guide",
        title: {
            en: "MVP App Development: What to Include and What to Skip",
            da: "ساخت اپلیکیشن MVP: چه چیزی را شامل کنید و از چه چیزی بگذرید",
            pa: "د MVP اپلیکیشن جوړول: څه پکې شامل کړئ او له څه تېر شئ"
        },
        excerpt: {
            en: "An MVP app development guide: which features your first version needs, what to skip, how to plan it step by step, and how to test demand before spending more.",
            da: "راهنمای ساخت اپلیکیشن MVP: نسخه اول شما به کدام ویژگی‌ها نیاز دارد، از چه چیزهایی بگذرید، چگونه گام به گام برنامه‌ریزی کنید و پیش از هزینه بیشتر، تقاضا را بسنجید.",
            pa: "د MVP اپلیکیشن جوړولو لارښود: ستاسو لومړۍ نسخه کومو ځانګړتیاوو ته اړتیا لري، له څه تېر شئ، څنګه ګام په ګام پلان کړئ او د زیات لګښت مخکې غوښتنه وازمویئ."
        },
        content: {
            en: `MVP app development means building the smallest version of your app that solves one real problem for one clear group of users, so you can learn whether people will use it before you pay for everything else. A good MVP is not a cheap, broken app; it is a focused one that does a few things well and collects the evidence you need for the next decision.

**Key Takeaways**

- An MVP should solve one core problem end to end, not half-solve five problems.
- Keep sign-in, the core action, basic notifications and analytics; skip loyalty programs, in-app chat, rich dashboards and extra languages you do not need yet.
- Decide in advance which result would tell you to continue, change direction or stop.
- In Afghanistan, test on low-end Android phones and slow connections from day one.
- A web app or PWA is sometimes a faster and cheaper MVP than a native app.

**What Is an MVP App, Really?**

An MVP (minimum viable product) is the first release of an app that delivers its main value to real users with the fewest features possible. The word "viable" matters: users must be able to complete the core task without a workaround, and the experience must be reliable enough that their behaviour tells you something true about demand.

For a tutoring marketplace, the core task might be "a parent finds a tutor and books a first lesson." For a pharmacy app, it might be "a customer uploads a prescription and gets a price and a delivery time." Everything that does not directly serve that one journey is a candidate for later.

Many founders treat the MVP as version one of the final product and try to fit the whole roadmap into it. That usually doubles the timeline, and when the app finally launches nobody can tell which feature is working and which is noise.

**Which Features Should an MVP Include?**

An MVP should include only the features a user needs to complete the core journey once, plus the tools you need to measure what happened. In practice that list is short:

- **Simple onboarding:** phone number sign-in with a one-time code is often enough. Social logins and detailed profiles can wait.
- **The core action:** booking, ordering, requesting a quote or submitting a form, whatever your app exists to do. This part deserves most of the design and testing time.
- **A basic admin view:** someone on your team must be able to see and manage requests. A simple web panel is acceptable at this stage.
- **Essential notifications:** a confirmation that the request was received and an update when its status changes.
- **Analytics and crash reporting:** without events for each step of the journey, you cannot learn anything from the launch.
- **One payment path, if payment is core:** for many Afghan businesses, cash on delivery or a manually confirmed bank or mobile money transfer is a realistic starting point.

**What Should You Skip in Version One?**

You should skip anything that improves an experience users have not yet proven they want. Common features that can wait:

- Loyalty points, referral programs and coupons
- In-app chat (a WhatsApp button does the job at first)
- Advanced search filters and recommendation engines
- Detailed user dashboards and history exports
- Multiple user roles beyond customer and admin
- Full translation into three languages if your first users mostly speak one
- Dark mode, heavy animations and custom illustrations

Skipping is not the same as forgetting. Keep a written "later" list, and design the data model so these features can be added without a rebuild. That is the difference between a thoughtful MVP and a throwaway prototype.

**How Do You Plan an MVP Step by Step?**

You plan an MVP by working backwards from the one question the launch must answer. A practical sequence:

1. Write the problem in one sentence and name the user who has it.
2. Map the core journey as five to eight screens, from opening the app to completing the task.
3. Mark every feature as "must have for the journey" or "later", and be strict.
4. Define success in numbers you can measure, such as completed bookings in the first month or the share of users who come back a second time.
5. Choose the platform: Android first is common in Afghanistan, while diaspora audiences often need iOS too. A cross-platform framework covers both from one codebase.
6. Build in short cycles and put the app in front of five to ten real users before the public launch.
7. Launch, watch the analytics for a few weeks, talk to users, then decide: continue, adjust or stop.

**Is a Web App or PWA a Better MVP Than a Native App?**

Sometimes, yes: if your core journey does not depend on the camera, background location or heavy use of push notifications, a web app can test demand faster and for less money. People can open a link from WhatsApp or Facebook without installing anything, which removes a real barrier when phone storage is limited and data is expensive.

A [progressive web app](/blog/progressive-web-apps-pwa-afghanistan) can be added to the home screen and can work partly offline, and many businesses start this way. If the idea proves itself, you then build a native app with real usage data guiding the design. If you are unsure, our guide on whether to build an [app or a website first](/blog/app-vs-website-which-first) walks through the decision.

**How Long Does an MVP Take and What Does It Cost?**

A focused MVP typically takes somewhere between a few weeks and three months, depending on how many screens, integrations and user types it has. Cost follows the same drivers: the number of screens, payment or map integrations, the admin panel, and whether you need Android and iOS at the same time.

Because scope varies so much, Sheen quotes mobile apps on request rather than as a fixed package. For rough market ranges in Afghanistan and what moves the price, see our breakdown of [mobile app cost in 2026](/blog/mobile-app-cost-afghanistan-2026). The biggest saving almost always comes from cutting features, not from choosing a cheaper developer.

**Local Realities to Design For**

Building an MVP for users in Kabul, Herat or Mazar-i-Sharif means testing on the phones people actually carry. Many users have mid-range or older Android devices with limited storage, and mobile data can be slow or costly. Keep the app size small, compress images, and make sure the core journey survives a connection that drops halfway.

Language matters too. Even if you launch in one language, build the interface so Dari and Pashto right-to-left layouts will not break it later. If you are targeting Afghans in Europe, North America or Australia, plan for different payment methods and time zones from the start.

**Mistakes That Sink MVPs**

The most common mistake is building too much, but it is not the only one. Other patterns that come up often:

- Launching without analytics, so there is nothing to learn from
- Skipping the admin side, which leaves staff unable to fulfil orders
- Polishing visuals for weeks while the core flow is still confusing
- Waiting for perfection instead of releasing to a small group early
- Treating the first round of feedback as final instead of running a second one

**Work With Sheen**

Sheen's mobile team, led by Layla Wakily, helps founders cut an idea down to a testable MVP, design it for Dari, Pashto and English users, and build it for Android and iOS. See our [mobile app development service](/services/mobile-apps), then [book a call](/book) or reach us at info@sheen.af or +93 784 966 018.`,
            da: `ساخت اپلیکیشن MVP یعنی ساختن کوچک‌ترین نسخه اپلیکیشن شما که یک مشکل واقعی را برای یک گروه مشخص از کاربران حل کند، تا پیش از پرداخت هزینه برای همه چیز دیگر بفهمید که آیا مردم از آن استفاده می‌کنند یا نه. یک MVP خوب اپلیکیشن ارزان و ناقص نیست؛ بلکه اپلیکیشن متمرکزی است که چند کار را به خوبی انجام می‌دهد و شواهد لازم برای تصمیم بعدی را جمع‌آوری می‌کند.

**نکات کلیدی**

- MVP باید یک مشکل اصلی را از آغاز تا پایان حل کند، نه اینکه پنج مشکل را نیمه‌کاره حل کند.
- ورود، عمل اصلی، اعلان‌های ساده و تحلیل داده را نگه دارید؛ از برنامه‌های وفاداری، چت داخل اپ، داشبوردهای مفصل و زبان‌های اضافی که هنوز لازم ندارید، بگذرید.
- از قبل مشخص کنید که کدام نتیجه به شما می‌گوید ادامه دهید، مسیر را تغییر دهید یا متوقف شوید.
- در افغانستان، از روز اول روی گوشی‌های اندروید ارزان و اتصال‌های کند آزمایش کنید.
- گاهی یک وب‌اپ یا PWA نسبت به اپلیکیشن native یک MVP سریع‌تر و ارزان‌تر است.

**اپلیکیشن MVP در اصل چیست؟**

MVP (محصول حداقلی قابل استفاده) نخستین نسخه یک اپلیکیشن است که ارزش اصلی خود را با کمترین ویژگی‌های ممکن به کاربران واقعی می‌رساند. کلمه «قابل استفاده» مهم است: کاربران باید بتوانند کار اصلی را بدون راه‌حل‌های جانبی انجام دهند، و تجربه باید به اندازه کافی قابل اعتماد باشد که رفتار کاربران چیزی واقعی درباره تقاضا به شما بگوید.

برای یک بازار آنلاین تدریس خصوصی، کار اصلی شاید این باشد: «یک والد معلم پیدا می‌کند و نخستین درس را رزرو می‌کند.» برای یک اپلیکیشن دواخانه، شاید این باشد: «مشتری نسخه داکتر را آپلود می‌کند و قیمت و زمان تحویل را دریافت می‌کند.» هر چیزی که مستقیماً به همین یک مسیر خدمت نکند، می‌تواند به بعد موکول شود.

بسیاری از بنیان‌گذاران MVP را نسخه اول محصول نهایی می‌دانند و تلاش می‌کنند تمام نقشه راه را در آن جا دهند. این کار معمولاً زمان‌بندی را دو برابر می‌کند، و وقتی اپلیکیشن بالاخره راه‌اندازی می‌شود، هیچ‌کس نمی‌داند کدام ویژگی کار می‌کند و کدام فقط سر و صدا است.

**یک MVP باید کدام ویژگی‌ها را داشته باشد؟**

MVP باید تنها ویژگی‌هایی را داشته باشد که کاربر برای یک بار تکمیل مسیر اصلی لازم دارد، به اضافه ابزارهایی که برای اندازه‌گیری آنچه اتفاق افتاده نیاز دارید. در عمل این فهرست کوتاه است:

- **ثبت‌نام ساده:** ورود با شماره تلفن و یک کد یک‌بار مصرف اغلب کافی است. ورود با شبکه‌های اجتماعی و پروفایل‌های مفصل می‌تواند منتظر بماند.
- **عمل اصلی:** رزرو، سفارش، درخواست قیمت یا ارسال فورم؛ هر کاری که اپلیکیشن شما برای آن ساخته شده است. بیشترین وقت طراحی و آزمایش باید صرف همین بخش شود.
- **یک بخش مدیریت ساده:** یک نفر در تیم شما باید بتواند درخواست‌ها را ببیند و مدیریت کند. یک پنل وب ساده در این مرحله کافی است.
- **اعلان‌های ضروری:** تأیید اینکه درخواست دریافت شده و اطلاع‌رسانی هنگام تغییر وضعیت آن.
- **تحلیل داده و گزارش خرابی:** بدون ثبت رویداد برای هر مرحله از مسیر، از راه‌اندازی هیچ چیزی یاد نمی‌گیرید.
- **یک روش پرداخت، اگر پرداخت بخش اصلی است:** برای بسیاری از تجارت‌های افغان، پرداخت هنگام تحویل یا انتقال بانکی یا پول موبایلی که دستی تأیید می‌شود، نقطه شروع واقع‌بینانه‌ای است.

**در نسخه اول از چه چیزهایی بگذرید؟**

از هر چیزی که تجربه‌ای را بهتر می‌کند که کاربران هنوز ثابت نکرده‌اند آن را می‌خواهند، بگذرید. ویژگی‌های رایجی که می‌توانند منتظر بمانند:

- امتیازهای وفاداری، برنامه‌های معرفی و کوپن‌ها
- چت داخل اپ (در آغاز یک دکمه WhatsApp همین کار را انجام می‌دهد)
- فلترهای جستجوی پیشرفته و سیستم‌های پیشنهاددهی
- داشبوردهای مفصل کاربر و خروجی گرفتن از تاریخچه
- نقش‌های متعدد کاربری فراتر از مشتری و مدیر
- ترجمه کامل به سه زبان، اگر بیشتر کاربران نخست شما به یک زبان صحبت می‌کنند
- حالت تاریک، انیمیشن‌های سنگین و تصویرسازی‌های سفارشی

گذشتن به معنای فراموش کردن نیست. یک فهرست نوشته‌شده «برای بعد» نگه دارید، و ساختار داده را طوری طراحی کنید که این ویژگی‌ها بدون بازسازی کامل اضافه شوند. تفاوت یک MVP سنجیده با یک نمونه اولیه دورانداختنی همین است.

**چگونه گام به گام یک MVP را برنامه‌ریزی کنیم؟**

MVP را با حرکت از آخر به اول، از همان یک پرسشی که راه‌اندازی باید به آن پاسخ دهد، برنامه‌ریزی می‌کنید. یک ترتیب عملی:

1. مشکل را در یک جمله بنویسید و کاربری را که این مشکل را دارد نام ببرید.
2. مسیر اصلی را در پنج تا هشت صفحه ترسیم کنید، از باز کردن اپلیکیشن تا تکمیل کار.
3. هر ویژگی را به عنوان «ضروری برای مسیر» یا «برای بعد» علامت بزنید و سخت‌گیر باشید.
4. موفقیت را با اعدادی که قابل اندازه‌گیری‌اند تعریف کنید، مانند تعداد رزروهای تکمیل‌شده در ماه اول یا سهم کاربرانی که بار دوم برمی‌گردند.
5. پلتفورم را انتخاب کنید: در افغانستان معمولاً اول اندروید ساخته می‌شود، اما مخاطبان مهاجر اغلب به iOS هم نیاز دارند. یک فریم‌ورک چندپلتفورمی هر دو را با یک کد پوشش می‌دهد.
6. در دوره‌های کوتاه بسازید و پیش از راه‌اندازی عمومی، اپلیکیشن را در اختیار پنج تا ده کاربر واقعی قرار دهید.
7. راه‌اندازی کنید، چند هفته تحلیل‌ها را دنبال کنید، با کاربران صحبت کنید، سپس تصمیم بگیرید: ادامه، تغییر یا توقف.

**آیا وب‌اپ یا PWA نسبت به اپلیکیشن native یک MVP بهتر است؟**

گاهی بله: اگر مسیر اصلی شما به کمره، موقعیت مکانی در پس‌زمینه یا استفاده زیاد از اعلان‌های push وابسته نیست، یک وب‌اپ می‌تواند تقاضا را سریع‌تر و با هزینه کمتر بیازماید. مردم می‌توانند لینکی را از WhatsApp یا Facebook بدون نصب هیچ چیزی باز کنند، و این یک مانع واقعی را برمی‌دارد، به ویژه وقتی حافظه گوشی محدود و انترنت گران است.

یک [اپلیکیشن وب پیشرفته (PWA)](/blog/progressive-web-apps-pwa-afghanistan) را می‌توان به صفحه اصلی گوشی اضافه کرد و تا حدی به صورت آفلاین کار می‌کند، و بسیاری از تجارت‌ها از همین راه شروع می‌کنند. اگر ایده موفق شد، سپس یک اپلیکیشن native می‌سازید که داده‌های واقعی استفاده، طراحی آن را هدایت می‌کند. اگر مطمئن نیستید، راهنمای ما درباره اینکه [اول اپلیکیشن بسازید یا ویب‌سایت](/blog/app-vs-website-which-first) این تصمیم را قدم به قدم توضیح می‌دهد.

**ساخت MVP چقدر وقت می‌گیرد و چقدر هزینه دارد؟**

یک MVP متمرکز معمولاً بین چند هفته تا سه ماه زمان می‌برد، بسته به اینکه چند صفحه، چند اتصال به سیستم‌های دیگر و چند نوع کاربر دارد. هزینه هم از همین عوامل پیروی می‌کند: تعداد صفحات، اتصال پرداخت یا نقشه، پنل مدیریت، و اینکه آیا همزمان به اندروید و iOS نیاز دارید یا نه.

چون دامنه کار بسیار متفاوت است، شین قیمت اپلیکیشن‌های موبایل را بر اساس درخواست ارائه می‌کند، نه به صورت بسته ثابت. برای دامنه‌های تقریبی بازار در افغانستان و عواملی که قیمت را تغییر می‌دهند، تحلیل ما درباره [هزینه اپلیکیشن موبایل در ۲۰۲۶](/blog/mobile-app-cost-afghanistan-2026) را ببینید. بزرگ‌ترین صرفه‌جویی تقریباً همیشه از حذف ویژگی‌ها می‌آید، نه از انتخاب یک برنامه‌نویس ارزان‌تر.

**واقعیت‌های محلی که باید برایشان طراحی کنید**

ساختن MVP برای کاربران کابل، هرات یا مزار شریف یعنی آزمایش روی گوشی‌هایی که مردم واقعاً با خود دارند. بسیاری از کاربران گوشی‌های اندروید متوسط یا قدیمی با حافظه محدود دارند، و انترنت موبایل ممکن است کند یا پرهزینه باشد. حجم اپلیکیشن را کم نگه دارید، تصاویر را فشرده کنید، و مطمئن شوید که مسیر اصلی حتی وقتی اتصال در میانه کار قطع می‌شود، از کار نمی‌افتد.

زبان هم مهم است. حتی اگر با یک زبان راه‌اندازی می‌کنید، رابط کاربری را طوری بسازید که چیدمان راست به چپ دری و پشتو بعداً آن را خراب نکند. اگر افغان‌های مقیم اروپا، امریکای شمالی یا آسترالیا را هدف گرفته‌اید، از همان آغاز برای روش‌های پرداخت و منطقه‌های زمانی متفاوت برنامه بریزید.

**اشتباهاتی که MVPها را شکست می‌دهند**

رایج‌ترین اشتباه ساختن بیش از حد است، اما تنها اشتباه نیست. الگوهای دیگری که زیاد دیده می‌شوند:

- راه‌اندازی بدون تحلیل داده، که در نتیجه چیزی برای یاد گرفتن باقی نمی‌ماند
- نادیده گرفتن بخش مدیریت، که کارکنان را از انجام سفارش‌ها ناتوان می‌کند
- هفته‌ها صیقل دادن ظاهر در حالی که مسیر اصلی هنوز گیج‌کننده است
- منتظر کمال ماندن به جای عرضه زودهنگام به یک گروه کوچک
- نهایی دانستن نخستین دور بازخورد به جای انجام دور دوم

**با شین کار کنید**

تیم موبایل شین به رهبری لیلا وکیلی به بنیان‌گذاران کمک می‌کند تا یک ایده را به یک MVP قابل آزمایش کوچک کنند، آن را برای کاربران دری، پشتو و انگلیسی طراحی کنند و برای اندروید و iOS بسازند. [خدمات ساخت اپلیکیشن موبایل](/services/mobile-apps) ما را ببینید، سپس [یک جلسه رزرو کنید](/book) یا از طریق info@sheen.af یا ‎+93 784 966 018 با ما در تماس شوید.`,
            pa: `د MVP اپلیکیشن جوړول یعنې د خپل اپلیکیشن تر ټولو کوچنۍ نسخه جوړول چې د کاروونکو د یوې روښانه ډلې لپاره یوه رښتینې ستونزه حل کړي، څو مخکې له دې چې د نورو ټولو شیانو لپاره پیسې ورکړئ، پوه شئ چې خلک به یې کاروي که نه. یو ښه MVP ارزانه او نیمګړی اپلیکیشن نه دی؛ بلکې متمرکز اپلیکیشن دی چې څو کارونه ښه ترسره کوي او د راتلونکې پرېکړې لپاره اړین شواهد راټولوي.

**مهم ټکي**

- MVP باید یوه اصلي ستونزه له پیله تر پایه حل کړي، نه دا چې پنځه ستونزې نیمګړې حل کړي.
- ننوتل، اصلي کړنه، ساده خبرتیاوې او تحلیل وساتئ؛ د وفادارۍ پروګرامونه، د اپ دننه چټ، مفصل ډشبورډونه او اضافي ژبې چې لا اړتیا ورته نه لرئ، پرېږدئ.
- له مخکې وټاکئ چې کومه پایله به تاسو ته ووايي چې دوام ورکړئ، لوری بدل کړئ یا ودرېږئ.
- په افغانستان کې له لومړۍ ورځې په ارزانه اندرویډ ټیلیفونونو او ورو اتصالونو ازموینه وکړئ.
- کله کله وېب‌اپ یا PWA د native اپلیکیشن په پرتله ګړندی او ارزانه MVP وي.

**MVP اپلیکیشن په اصل کې څه شی دی؟**

MVP (لږ تر لږه د کارونې وړ محصول) د اپلیکیشن لومړۍ نسخه ده چې خپل اصلي ارزښت د امکان تر حده په لږو ځانګړتیاوو سره رښتیني کاروونکو ته رسوي. د «کارونې وړ» کلمه مهمه ده: کاروونکي باید وکولی شي اصلي کار پرته له بدیلو لارو ترسره کړي، او تجربه باید دومره د باور وړ وي چې د کاروونکو چلند تاسو ته د غوښتنې په اړه یو رښتینی شی ووايي.

د خصوصي تدریس د آنلاین بازار لپاره، اصلي کار کېدای شي دا وي: «یو مور یا پلار ښوونکی پیدا کوي او لومړی درس بک کوي.» د درملتون د اپلیکیشن لپاره کېدای شي دا وي: «پېرودونکی د ډاکټر نسخه اپلوډ کوي او بیه او د سپارلو وخت ترلاسه کوي.» هر هغه څه چې په مستقیم ډول همدې یوې لارې ته خدمت نه کوي، وروسته ته پرېښودل کېدای شي.

ډېر بنسټ‌ایښودونکي MVP د وروستي محصول لومړۍ نسخه ګڼي او هڅه کوي ټوله نقشه پکې ځای کړي. دا کار معمولاً مهال‌وېش دوه چنده کوي، او کله چې اپلیکیشن بالاخره پیل شي، هېڅوک نه پوهېږي چې کومه ځانګړتیا کار کوي او کومه یوازې شور دی.

**MVP باید کومې ځانګړتیاوې ولري؟**

MVP باید یوازې هغه ځانګړتیاوې ولري چې کاروونکی یې د اصلي لارې د یو ځل بشپړولو لپاره اړتیا لري، او هغه وسایل چې تاسو یې د پېښو د اندازه کولو لپاره اړتیا لرئ. په عمل کې دا لړلیک لنډ دی:

- **ساده نوم‌لیکنه:** د ټیلیفون شمېرې او یو ځلي کوډ په واسطه ننوتل اکثراً بس دي. د ټولنیزو شبکو له لارې ننوتل او مفصل پروفایلونه انتظار کولی شي.
- **اصلي کړنه:** بکینګ، فرمایش، د بیې غوښتنه یا د فورم لېږل؛ هر هغه کار چې ستاسو اپلیکیشن ورته جوړ شوی. د ډیزاین او ازموینې ډېر وخت باید همدې برخې ته ورکړل شي.
- **د مدیریت ساده برخه:** ستاسو د ټیم یو کس باید وکولی شي غوښتنې وویني او اداره یې کړي. په دې پړاو کې یو ساده وېب پینل بس دی.
- **اړینې خبرتیاوې:** دا تایید چې غوښتنه ترلاسه شوې، او د حالت د بدلون پر مهال خبرتیا.
- **تحلیل او د خرابۍ راپور:** که د لارې د هر ګام لپاره پېښې ثبت نه شي، له پیل څخه هېڅ نه زده کوئ.
- **د تادیې یوه لاره، که تادیه اصلي برخه وي:** د ډېرو افغان سوداګریو لپاره، د سپارلو پر مهال نغدي تادیه یا بانکي او موبایلي پیسې چې په لاس تایید شي، د پیل واقع‌بینه ټکی دی.

**په لومړۍ نسخه کې له کومو شیانو تېر شئ؟**

له هر هغه شي تېر شئ چې داسې تجربه ښه کوي چې کاروونکو لا ثابته کړې نه ده چې غواړي یې. عامې ځانګړتیاوې چې انتظار کولی شي:

- د وفادارۍ نمرې، د معرفي پروګرامونه او کوپونونه
- د اپ دننه چټ (په پیل کې د WhatsApp یوه تڼۍ همدا کار کوي)
- د لټون پرمختللي فلټرونه او د وړاندیز سیستمونه
- د کاروونکي مفصل ډشبورډونه او د تاریخچې ایستل
- له پېرودونکي او مدیر پرته ډېر کاروونکي رولونه
- په درېیو ژبو بشپړه ژباړه، که ستاسو ډېری لومړني کاروونکي په یوه ژبه خبرې کوي
- تیاره حالت، درانه انیمیشنونه او ځانګړي انځورونه

تېرېدل د هېرولو معنا نه لري. یو لیکلی «وروسته لپاره» لړلیک وساتئ، او د معلوماتو جوړښت داسې ډیزاین کړئ چې دا ځانګړتیاوې پرته له بیا جوړولو اضافه شي. د یو سنجیده MVP او د غورځولو وړ لومړني نمونې ترمنځ توپیر همدا دی.

**MVP څنګه ګام په ګام پلان کړو؟**

MVP له هغې یوې پوښتنې څخه شاته حرکت سره پلان کوئ چې پیل باید ځواب ورکړي. یو عملي ترتیب:

1. ستونزه په یوه جمله کې ولیکئ او هغه کاروونکی ونوموئ چې دا ستونزه لري.
2. اصلي لار په پنځو تر اتو پاڼو کې رسم کړئ، د اپلیکیشن له پرانیستلو تر کار بشپړېدو پورې.
3. هره ځانګړتیا د «لارې لپاره اړینه» یا «وروسته لپاره» په توګه نښه کړئ، او سخت‌ګیر اوسئ.
4. بریا په داسې شمېرو تعریف کړئ چې اندازه کېدای شي، لکه په لومړۍ میاشت کې بشپړ شوي بکینګونه یا د هغو کاروونکو برخه چې دوهم ځل راګرځي.
5. پلاتفورم وټاکئ: په افغانستان کې معمولاً لومړی اندرویډ جوړېږي، خو په بهر کې مېشت افغانان اکثراً iOS ته هم اړتیا لري. یو څو پلاتفورمي فریم‌ورک دواړه له یو کوډ سره پوښي.
6. په لنډو دورو کې یې جوړ کړئ او له عمومي پیل مخکې اپلیکیشن پنځو تر لسو رښتیني کاروونکو ته ورکړئ.
7. پیل یې کړئ، څو اونۍ تحلیلونه وڅارئ، له کاروونکو سره خبرې وکړئ، بیا پرېکړه وکړئ: دوام، بدلون یا درېدل.

**ایا وېب‌اپ یا PWA د native اپلیکیشن په پرتله ښه MVP دی؟**

کله کله هو: که ستاسو اصلي لار په کمره، په شالید کې موقعیت یا د push خبرتیاوو په ډېره کارونه پورې تړلې نه وي، وېب‌اپ کولی شي غوښتنه ګړندۍ او په لږو پیسو وازمويي. خلک کولی شي له WhatsApp یا Facebook څخه یو لینک پرته له کوم نصب پرانیزي، چې دا یو رښتینی خنډ لرې کوي، په ځانګړي ډول کله چې د ټیلیفون حافظه محدوده او انټرنېټ ګران وي.

یو [پرمختللی وېب اپلیکیشن (PWA)](/blog/progressive-web-apps-pwa-afghanistan) د ټیلیفون اصلي پاڼې ته اضافه کېدای شي او تر یوه حده آفلاین کار کوي، او ډېرې سوداګرۍ له همدې لارې پیل کوي. که مفکوره بریالۍ شوه، بیا یو native اپلیکیشن جوړوئ چې د کارونې رښتیني معلومات یې ډیزاین لارښوونه کوي. که ډاډه نه یاست، زموږ لارښود چې [لومړی اپلیکیشن جوړ کړئ که وېب‌سایټ](/blog/app-vs-website-which-first) دا پرېکړه ګام په ګام تشریح کوي.

**د MVP جوړول څومره وخت نیسي او څومره لګښت لري؟**

یو متمرکز MVP معمولاً له څو اونیو تر درې میاشتو پورې وخت نیسي، دا پدې پورې اړه لري چې څومره پاڼې، له نورو سیستمونو سره څومره اتصالونه او څومره ډوله کاروونکي لري. لګښت هم د همدې عواملو پیروي کوي: د پاڼو شمېر، د تادیې یا نقشې اتصال، د مدیریت پینل، او دا چې ایا په یو وخت اندرویډ او iOS ته اړتیا لرئ.

ځکه چې د کار ساحه ډېره توپیر لري، شین د موبایل اپلیکیشنونو بیه د غوښتنې پر بنسټ ورکوي، نه د ثابتې کڅوړې په توګه. په افغانستان کې د بازار د نږدې بیو او هغو عواملو لپاره چې بیه بدلوي، زموږ تحلیل د [۲۰۲۶ کال کې د موبایل اپلیکیشن لګښت](/blog/mobile-app-cost-afghanistan-2026) په اړه وګورئ. تر ټولو لویه سپما تقریباً تل د ځانګړتیاوو له کمولو راځي، نه د ارزانه پروګرامر له ټاکلو.

**سیمه‌ییز واقعیتونه چې باید ورته ډیزاین وکړئ**

د کابل، هرات یا مزار شریف د کاروونکو لپاره د MVP جوړول یعنې په هغو ټیلیفونونو ازموینه چې خلک یې په رښتیا لري. ډېری کاروونکي منځني یا زاړه اندرویډ ټیلیفونونه د محدودې حافظې سره لري، او موبایل انټرنېټ کېدای شي ورو یا ګران وي. د اپلیکیشن حجم کم وساتئ، انځورونه فشرده کړئ، او ډاډ ترلاسه کړئ چې اصلي لار هغه وخت هم کار کوي کله چې اتصال د کار په منځ کې پرې شي.

ژبه هم مهمه ده. حتی که په یوه ژبه پیل کوئ، د کاروونکي انٹرفېس داسې جوړ کړئ چې د دري او پښتو له ښي نه کیڼ لوري ته ترتیب یې وروسته خراب نه کړي. که په اروپا، شمالي امریکا یا اسټرالیا کې مېشت افغانان مو هدف وي، له پیل څخه د تادیې د بېلابېلو لارو او وخت سیمو لپاره پلان جوړ کړئ.

**هغه تېروتنې چې MVPګانې ناکاموي**

تر ټولو عامه تېروتنه ډېر جوړول دي، خو یوازینۍ تېروتنه نه ده. نورې بڼې چې ډېر لیدل کېږي:

- له تحلیل پرته پیل، چې په پایله کې د زده کړې لپاره څه نه پاتې کېږي
- د مدیریت برخې نه پامه غورځول، چې کارکوونکي د فرمایشونو له پوره کولو عاجزوي
- د اونیو لپاره د بڼې ښکلي کول په داسې حال کې چې اصلي لار لا هم ګډوډه ده
- د بشپړتیا انتظار د دې پر ځای چې یوې کوچنۍ ډلې ته ژر خپور شي
- د نظرونو لومړی پړاو وروستی ګڼل د دې پر ځای چې دوهم پړاو ترسره شي

**له شین سره کار وکړئ**

د شین موبایل ټیم د لیلا وکیلي په مشرۍ له بنسټ‌ایښودونکو سره مرسته کوي چې یوه مفکوره د ازموینې وړ MVP ته راکمه کړي، د دري، پښتو او انګلیسي کاروونکو لپاره یې ډیزاین کړي او د اندرویډ او iOS لپاره یې جوړ کړي. زموږ [د موبایل اپلیکیشن جوړولو خدمت](/services/mobile-apps) وګورئ، بیا [یوه ناسته بک کړئ](/book) یا موږ سره د info@sheen.af یا ‎+93 784 966 018 له لارې اړیکه ونیسئ.`
        },
        faqs: [
            {
                q: { en: "What does MVP mean in app development?", da: "MVP در ساخت اپلیکیشن به چه معناست؟", pa: "MVP د اپلیکیشن په جوړولو کې څه معنا لري؟" },
                a: {
                    en: "MVP stands for minimum viable product. In app development it is the first release that lets real users complete the app's main task with the fewest features possible. Its purpose is learning: you launch it to see whether people use it, where they get stuck and what they ask for, then use that evidence to decide what to build next.",
                    da: "MVP مخفف «محصول حداقلی قابل استفاده» است. در ساخت اپلیکیشن، این نخستین نسخه‌ای است که به کاربران واقعی اجازه می‌دهد کار اصلی اپلیکیشن را با کمترین ویژگی‌های ممکن انجام دهند. هدف آن یادگیری است: آن را راه‌اندازی می‌کنید تا ببینید آیا مردم از آن استفاده می‌کنند، کجا گیر می‌مانند و چه چیزی می‌خواهند، سپس از این شواهد برای تصمیم درباره گام بعدی استفاده می‌کنید.",
                    pa: "MVP د «لږ تر لږه د کارونې وړ محصول» لنډیز دی. د اپلیکیشن په جوړولو کې دا لومړۍ نسخه ده چې رښتیني کاروونکو ته اجازه ورکوي د اپلیکیشن اصلي کار په لږو ځانګړتیاوو ترسره کړي. موخه یې زده کړه ده: پیلوئ یې څو وګورئ چې ایا خلک یې کاروي، چېرته بندېږي او څه غواړي، بیا له دې شواهدو د راتلونکي ګام د پرېکړې لپاره کار اخلئ."
                }
            },
            {
                q: { en: "Can I build an MVP without a technical co-founder?", da: "آیا بدون شریک فنی می‌توانم MVP بسازم؟", pa: "ایا له تخنیکي شریک پرته MVP جوړولی شم؟" },
                a: {
                    en: "Yes. Many founders work with an agency or freelance team instead. What you cannot outsource is clarity: you need to define the user, the core journey and what success looks like. Ask the developer to keep the code and accounts in your name, to document the setup, and to build on a common framework so another team can continue the work later if needed.",
                    da: "بله. بسیاری از بنیان‌گذاران به جای آن با یک شرکت یا تیم آزادکار کار می‌کنند. آنچه را نمی‌توانید به دیگران بسپارید وضوح است: باید کاربر، مسیر اصلی و معیار موفقیت را خودتان تعریف کنید. از برنامه‌نویس بخواهید کد و حساب‌ها را به نام شما نگه دارد، تنظیمات را مستند کند و روی یک فریم‌ورک رایج بسازد تا در صورت نیاز تیم دیگری بتواند کار را ادامه دهد.",
                    pa: "هو. ډېر بنسټ‌ایښودونکي د دې پر ځای له یوې ادارې یا آزاد ټیم سره کار کوي. هغه څه چې نورو ته یې نه شئ سپارلی وضاحت دی: باید کاروونکی، اصلي لار او د بریا معیار پخپله تعریف کړئ. له پروګرامر وغواړئ چې کوډ او حسابونه ستاسو په نوم وساتي، تنظیمات مستند کړي او په یو عام فریم‌ورک یې جوړ کړي څو د اړتیا پر مهال بل ټیم کار ته دوام ورکړای شي."
                }
            },
            {
                q: { en: "Should my MVP launch on Android or iOS first?", da: "آیا MVP من اول روی اندروید راه‌اندازی شود یا iOS؟", pa: "ایا زما MVP باید لومړی په اندرویډ پیل شي که iOS؟" },
                a: {
                    en: "It depends on where your users are. Inside Afghanistan, Android phones are far more common, so an Android-first launch usually makes sense. If you target Afghans in Europe, the US, Canada or Australia, many will use iPhones. A cross-platform framework such as React Native or Flutter lets you release on both from one codebase without doubling the work.",
                    da: "این بستگی دارد که کاربران شما کجا هستند. در داخل افغانستان، گوشی‌های اندروید بسیار رایج‌ترند، بنابراین راه‌اندازی اول روی اندروید معمولاً منطقی است. اگر افغان‌های مقیم اروپا، امریکا، کانادا یا آسترالیا را هدف گرفته‌اید، بسیاری از آن‌ها از iPhone استفاده می‌کنند. یک فریم‌ورک چندپلتفورمی مانند React Native یا Flutter به شما اجازه می‌دهد با یک کد روی هر دو عرضه کنید، بدون اینکه کار دو برابر شود.",
                    pa: "دا پدې پورې اړه لري چې ستاسو کاروونکي چېرته دي. د افغانستان دننه اندرویډ ټیلیفونونه ډېر عام دي، نو لومړی په اندرویډ پیل معمولاً معقول دی. که په اروپا، امریکا، کاناډا یا اسټرالیا کې مېشت افغانان مو هدف وي، ډېری یې iPhone کاروي. یو څو پلاتفورمي فریم‌ورک لکه React Native یا Flutter اجازه درکوي چې له یو کوډ سره په دواړو خپور کړئ، پرته له دې چې کار دوه چنده شي."
                }
            },
            {
                q: { en: "What should happen after an MVP launches?", da: "پس از راه‌اندازی MVP چه باید کرد؟", pa: "د MVP له پیل وروسته باید څه وشي؟" },
                a: {
                    en: "After launch, measure the core journey step by step, talk to early users and fix the biggest points where people drop off. Give it a few weeks of real use before judging. Then compare the results with the success numbers you set in advance and decide whether to invest in the next features, change the approach or stop before spending more.",
                    da: "پس از راه‌اندازی، مسیر اصلی را گام به گام اندازه‌گیری کنید، با کاربران نخستین صحبت کنید و بزرگ‌ترین نقاطی را که مردم در آن‌ها کار را رها می‌کنند، اصلاح کنید. پیش از قضاوت، چند هفته استفاده واقعی را فرصت دهید. سپس نتایج را با اعداد موفقیتی که از قبل تعیین کرده بودید مقایسه کنید و تصمیم بگیرید که روی ویژگی‌های بعدی سرمایه‌گذاری کنید، رویکرد را تغییر دهید یا پیش از هزینه بیشتر متوقف شوید.",
                    pa: "له پیل وروسته، اصلي لار ګام په ګام اندازه کړئ، له لومړنیو کاروونکو سره خبرې وکړئ او هغه لوی ځایونه سم کړئ چې خلک پکې کار پرېږدي. له قضاوت مخکې څو اونۍ رښتینې کارونې ته وخت ورکړئ. بیا پایلې له هغو د بریا شمېرو سره پرتله کړئ چې مخکې مو ټاکلې وې، او پرېکړه وکړئ چې په راتلونکو ځانګړتیاوو پانګونه وکړئ، تګلاره بدله کړئ یا له زیات لګښت مخکې ودرېږئ."
                }
            }
        ],
        category: "mobile-apps",
        author: "Layla Wakily",
        date: "2026-10-15",
        updated: "2026-10-15",
        readTime: "6 min read",
        image: "/logo.png",
        tags: ["mvp app development", "minimum viable product app", "mvp features", "app development Afghanistan", "startup app Kabul", "PWA vs native app", "cross-platform app 2026"]
    },
    {
        id: "105",
        slug: "offline-first-mobile-apps",
        title: {
            en: "Offline-First Apps: Building for Unreliable Connections",
            da: "اپلیکیشن‌های آفلاین‌محور: ساختن برای اتصال‌های ناپایدار",
            pa: "آفلاین‌محوره اپلیکیشنونه: د بې‌ثباته اتصالونو لپاره جوړول"
        },
        excerpt: {
            en: "How an offline-first app keeps working without internet: local storage, data sync, conflict rules, honest UX and testing for unreliable networks in Afghanistan.",
            da: "یک اپلیکیشن آفلاین‌محور چگونه بدون انترنت کار می‌کند: ذخیره محلی، همگام‌سازی داده، قواعد تعارض، تجربه کاربری شفاف و آزمایش برای شبکه‌های ناپایدار در افغانستان.",
            pa: "آفلاین‌محوره اپلیکیشن څنګه پرته له انټرنېټه کار کوي: محلي ذخیره، د معلوماتو همغږي، د ټکر قواعد، روښانه کاروونکي تجربه او په افغانستان کې د بې‌ثباته شبکو لپاره ازموینه."
        },
        content: {
            en: `An offline-first app is a mobile app designed to work from the phone's own storage and to sync with the server whenever a connection is available, instead of failing the moment the network drops. For users in Afghanistan, where coverage, electricity and data costs are all unpredictable, offline-first design is often the difference between an app people rely on and one they uninstall.

**Key Takeaways**

- Offline-first means screens read from local data; the network is used to sync, not to draw every screen.
- Decide feature by feature what must work offline: viewing, creating, editing, or nothing.
- Queue user actions on the device and sync them with retries, clear status and conflict rules.
- Small payloads, cached images and incremental sync cut data costs for users.
- Test with airplane mode, throttled networks and devices that stay offline for days.

**What Does Offline-First Actually Mean?**

Offline-first means the app reads and writes to a local database on the phone first, and treats the server as a place to sync with later. When the user opens a screen, it appears immediately from local data. When they submit a form, it is saved locally, marked as pending, and sent when the connection allows.

This differs from offline support bolted on at the end, where an app is built to call the server for every action and then given a cache. Bolted-on caching usually shows old lists but blocks the user as soon as they try to do anything. Offline-first is an architecture decision, and it is far cheaper to make at the start than halfway through a project.

**Which Apps Need Offline-First Design?**

Any app used in the field, on the move, or by people paying for every megabyte benefits from offline-first design. Typical cases:

- Field data collection: surveys, inspections, health outreach and agricultural extension work
- Sales and delivery apps where agents record orders, payments and proof of delivery on the road
- School and training apps where students download lessons once and study later
- Inventory and point-of-sale tools in shops where power and internet cut out
- Catalogues, menus and guides whose content changes rarely

If your users sit in an office with stable Wi-Fi all day, a lighter approach may be enough. In Kabul, and even more so in provincial towns and rural districts, that is rarely the whole audience.

**How Does Data Sync Work in an Offline-First App?**

Sync works by keeping a queue of local changes and a record of what the device last received, then exchanging only the differences when the phone is online. A typical design:

1. Store data in an on-device database; SQLite-based options are common in both React Native and Flutter.
2. Give each record a unique ID created on the device, so it can be saved before the server knows about it.
3. Write every user action to an outbox queue with a timestamp.
4. When a connection appears, send queued actions in order, with automatic retries and increasing wait times.
5. Ask the server only for changes since the last successful sync, not the full dataset.
6. Mark records as synced, pending or failed, and show that status to the user.
7. Apply agreed conflict rules when the same record changed in two places.

**How Should You Handle Sync Conflicts?**

You handle conflicts by deciding a rule for each type of data before writing code, because there is no single right answer. Common rules:

- **Last write wins:** simple, and acceptable for things like personal settings.
- **Server wins for sensitive fields:** prices, stock levels and payment status should come from the server.
- **Merge:** for lists such as notes or order items, combine changes instead of overwriting them.
- **Ask a person:** for rare but important clashes, show both versions and let someone choose.

Also make operations safe to receive twice. On a poor connection the server may get a request while the phone never receives the reply, so the phone sends it again. Because each record carries its device-generated ID, the server can recognise the duplicate and ignore it instead of creating a second order.

**Designing the Experience for Unreliable Connections**

Good offline UX is honest: it tells users what is saved, what is waiting and what failed, without blocking them. Practical patterns:

- A small, calm offline indicator instead of a full-screen error
- A "saved on this phone, will send when online" message after submitting
- A pending-items screen so staff can see what has not synced yet
- A "sync now" button for people who know they have a signal for a moment
- Download controls for large content, with file sizes shown, so users decide when to spend data

Language and layout matter here as well. Status messages should read naturally in Dari and Pashto and work properly in right-to-left layouts, because these are exactly the messages people read when something is going wrong.

**How Do You Keep Data Usage and App Size Low?**

You keep usage low by sending only what changed and by never downloading the same thing twice. Compress responses, resize images on the server before they reach the phone, cache them on the device, and let users choose Wi-Fi-only downloads for heavy files such as videos.

Watch the install size too. Many users have phones with little free storage, and a large app is often the first thing they delete. For simpler needs such as catalogues and forms, a [progressive web app](/blog/progressive-web-apps-pwa-afghanistan) with a service worker can also work offline and avoids an app store install entirely.

**Security and Testing for Offline Apps**

Data stored on the phone needs protection: encrypt sensitive local data, clear it on logout, and never keep secrets such as private API keys inside the app. Our guide to [mobile app security best practices](/blog/mobile-app-security-best-practices) covers this in more detail.

Testing an offline-first app means breaking the network on purpose. A useful checklist:

1. Create and edit records in airplane mode, then reconnect.
2. Close the app while a sync is half finished and reopen it.
3. Throttle the connection to a slow mobile profile.
4. Edit the same record on two devices while both are offline.
5. Leave a device offline for several days with many pending changes.
6. Check what happens when a user logs out with unsynced data.

**Work With Sheen**

Sheen builds Android and iOS apps designed for real Afghan network conditions, with local storage, reliable sync and Dari, Pashto and English interfaces. Learn more on our [mobile apps page](/services/mobile-apps) or [contact us](/contact) at info@sheen.af or +93 784 966 018.`,
            da: `اپلیکیشن آفلاین‌محور یک اپلیکیشن موبایل است که طوری طراحی شده تا از حافظه خود گوشی کار کند و هر زمان اتصال در دسترس بود با سرور همگام شود، به جای اینکه با قطع شدن شبکه از کار بیفتد. برای کاربران در افغانستان، جایی که پوشش شبکه، برق و هزینه انترنت همه غیرقابل پیش‌بینی‌اند، طراحی آفلاین‌محور اغلب تفاوت میان اپلیکیشنی است که مردم به آن تکیه می‌کنند و اپلیکیشنی که آن را پاک می‌کنند.

**نکات کلیدی**

- آفلاین‌محور یعنی صفحات از داده‌های محلی خوانده می‌شوند؛ شبکه برای همگام‌سازی استفاده می‌شود، نه برای نمایش هر صفحه.
- برای هر ویژگی جداگانه تصمیم بگیرید که چه چیزی باید آفلاین کار کند: دیدن، ایجاد کردن، ویرایش، یا هیچ‌کدام.
- اقدامات کاربر را روی دستگاه در صف بگذارید و با تلاش مجدد، وضعیت روشن و قواعد تعارض همگام کنید.
- داده‌های کم‌حجم، تصاویر ذخیره‌شده و همگام‌سازی تدریجی هزینه انترنت کاربران را کاهش می‌دهد.
- با حالت پرواز، شبکه‌های کندشده و دستگاه‌هایی که چند روز آفلاین می‌مانند آزمایش کنید.

**آفلاین‌محور در عمل به چه معناست؟**

آفلاین‌محور یعنی اپلیکیشن اول در یک دیتابیس محلی روی گوشی می‌خواند و می‌نویسد، و سرور را جایی می‌داند که بعداً با آن همگام شود. وقتی کاربر صفحه‌ای را باز می‌کند، فوراً از داده‌های محلی نمایش داده می‌شود. وقتی فورمی را ارسال می‌کند، به صورت محلی ذخیره می‌شود، به عنوان «در انتظار» علامت می‌خورد و هر وقت اتصال اجازه داد، فرستاده می‌شود.

این با پشتیبانی آفلاین که در پایان کار به اپلیکیشن چسپانده می‌شود فرق دارد؛ در آن حالت اپلیکیشن طوری ساخته شده که برای هر اقدام با سرور تماس بگیرد و بعد یک حافظه موقت به آن داده می‌شود. چنین حافظه موقتی معمولاً فهرست‌های قدیمی را نشان می‌دهد اما به محض اینکه کاربر بخواهد کاری انجام دهد، او را متوقف می‌کند. آفلاین‌محور بودن یک تصمیم معماری است و گرفتن آن در آغاز پروژه بسیار ارزان‌تر از میانه کار است.

**کدام اپلیکیشن‌ها به طراحی آفلاین‌محور نیاز دارند؟**

هر اپلیکیشنی که در میدان، در حال حرکت یا توسط کسانی استفاده می‌شود که برای هر مگابایت پول می‌پردازند، از طراحی آفلاین‌محور سود می‌برد. نمونه‌های رایج:

- جمع‌آوری داده در میدان: سروی‌ها، بازرسی‌ها، کارهای صحی ساحوی و ترویج زراعتی
- اپلیکیشن‌های فروش و تحویل که نمایندگان در راه سفارش‌ها، پرداخت‌ها و تأیید تحویل را ثبت می‌کنند
- اپلیکیشن‌های مکتب و آموزش که شاگردان درس‌ها را یک بار دانلود می‌کنند و بعداً مطالعه می‌کنند
- ابزارهای موجودی و فروش در دکان‌هایی که برق و انترنت قطع می‌شود
- کاتالوگ‌ها، مینوها و راهنماهایی که محتوای آن‌ها کم تغییر می‌کند

اگر کاربران شما تمام روز در دفتری با Wi-Fi پایدار می‌نشینند، شاید یک رویکرد ساده‌تر کافی باشد. در کابل، و حتی بیشتر در شهرهای ولایتی و ولسوالی‌ها، این به ندرت تمام مخاطبان شماست.

**همگام‌سازی داده در اپلیکیشن آفلاین‌محور چگونه کار می‌کند؟**

همگام‌سازی با نگه‌داشتن صفی از تغییرات محلی و ثبت آخرین چیزی که دستگاه دریافت کرده کار می‌کند، و وقتی گوشی آنلاین است تنها تفاوت‌ها رد و بدل می‌شوند. یک طراحی معمول:

1. داده‌ها را در یک دیتابیس روی دستگاه ذخیره کنید؛ گزینه‌های مبتنی بر SQLite هم در React Native و هم در Flutter رایج‌اند.
2. به هر رکورد یک شناسه یکتا بدهید که روی دستگاه ساخته شود، تا پیش از اینکه سرور از آن خبر داشته باشد ذخیره شود.
3. هر اقدام کاربر را با زمان آن در یک صف ارسال بنویسید.
4. وقتی اتصال پیدا شد، اقدامات صف‌شده را به ترتیب بفرستید، با تلاش مجدد خودکار و فاصله‌های انتظار افزایشی.
5. از سرور فقط تغییرات پس از آخرین همگام‌سازی موفق را بخواهید، نه تمام داده‌ها را.
6. رکوردها را به عنوان همگام‌شده، در انتظار یا ناموفق علامت بزنید و این وضعیت را به کاربر نشان دهید.
7. وقتی یک رکورد در دو جا تغییر کرده، قواعد توافق‌شده برای تعارض را اعمال کنید.

**تعارض‌های همگام‌سازی را چگونه مدیریت کنیم؟**

تعارض‌ها را با تعیین یک قاعده برای هر نوع داده پیش از نوشتن کد مدیریت می‌کنید، زیرا یک پاسخ درست واحد وجود ندارد. قواعد رایج:

- **آخرین نوشته برنده است:** ساده، و برای چیزهایی مانند تنظیمات شخصی قابل قبول.
- **سرور برای فیلدهای حساس برنده است:** قیمت‌ها، موجودی و وضعیت پرداخت باید از سرور بیایند.
- **ادغام:** برای فهرست‌هایی مانند یادداشت‌ها یا اقلام سفارش، تغییرات را با هم ترکیب کنید به جای اینکه رونویسی شوند.
- **از یک انسان بپرسید:** برای تعارض‌های نادر اما مهم، هر دو نسخه را نشان دهید و بگذارید کسی انتخاب کند.

همچنین عملیات را طوری بسازید که دو بار دریافت شدن آن مشکلی ایجاد نکند. در یک اتصال ضعیف ممکن است سرور درخواستی را دریافت کند اما پاسخ هرگز به گوشی نرسد، و گوشی دوباره آن را بفرستد. چون هر رکورد شناسه ساخته‌شده روی دستگاه را دارد، سرور می‌تواند تکراری بودن آن را تشخیص دهد و به جای ساختن سفارش دوم، آن را نادیده بگیرد.

**طراحی تجربه کاربری برای اتصال‌های ناپایدار**

تجربه آفلاین خوب صادق است: به کاربر می‌گوید چه چیزی ذخیره شده، چه چیزی در انتظار است و چه چیزی ناموفق بوده، بدون اینکه او را متوقف کند. الگوهای عملی:

- یک نشانگر کوچک و آرام آفلاین به جای پیام خطای تمام‌صفحه
- پیامی مانند «روی این گوشی ذخیره شد، وقتی آنلاین شوید فرستاده می‌شود» پس از ارسال
- صفحه‌ای برای موارد در انتظار تا کارکنان ببینند چه چیزی هنوز همگام نشده است
- دکمه «اکنون همگام کن» برای کسانی که می‌دانند برای لحظه‌ای سیگنال دارند
- کنترل دانلود برای محتوای حجیم با نمایش اندازه فایل، تا کاربران خودشان تصمیم بگیرند کی انترنت مصرف کنند

زبان و چیدمان هم در اینجا مهم است. پیام‌های وضعیت باید به دری و پشتو طبیعی خوانده شوند و در چیدمان راست به چپ درست کار کنند، زیرا دقیقاً همین پیام‌ها هستند که مردم هنگام بروز مشکل می‌خوانند.

**چگونه مصرف انترنت و حجم اپلیکیشن را کم نگه داریم؟**

مصرف را با فرستادن تنها آنچه تغییر کرده و با هرگز دو بار دانلود نکردن یک چیز کم نگه می‌دارید. پاسخ‌ها را فشرده کنید، تصاویر را پیش از رسیدن به گوشی روی سرور کوچک کنید، آن‌ها را روی دستگاه ذخیره کنید و به کاربران اجازه دهید فایل‌های سنگین مانند ویدیوها را تنها با Wi-Fi دانلود کنند.

حجم نصب را هم زیر نظر داشته باشید. بسیاری از کاربران گوشی‌هایی با فضای خالی کم دارند، و یک اپلیکیشن بزرگ اغلب نخستین چیزی است که پاک می‌کنند. برای نیازهای ساده‌تر مانند کاتالوگ‌ها و فورم‌ها، یک [اپلیکیشن وب پیشرفته (PWA)](/blog/progressive-web-apps-pwa-afghanistan) با service worker هم می‌تواند آفلاین کار کند و اصلاً نیازی به نصب از فروشگاه اپلیکیشن ندارد.

**امنیت و آزمایش اپلیکیشن‌های آفلاین**

داده‌هایی که روی گوشی ذخیره می‌شوند به محافظت نیاز دارند: داده‌های حساس محلی را رمزگذاری کنید، هنگام خروج کاربر آن‌ها را پاک کنید و هرگز رازهایی مانند کلیدهای خصوصی API را داخل اپلیکیشن نگه ندارید. راهنمای ما درباره [بهترین شیوه‌های امنیت اپلیکیشن موبایل](/blog/mobile-app-security-best-practices) این موضوع را با جزئیات بیشتر توضیح می‌دهد.

آزمایش یک اپلیکیشن آفلاین‌محور یعنی عمداً شبکه را قطع کنید. یک فهرست بررسی مفید:

1. در حالت پرواز رکوردها را ایجاد و ویرایش کنید، سپس دوباره وصل شوید.
2. اپلیکیشن را در حالی که همگام‌سازی نیمه‌کاره است ببندید و دوباره باز کنید.
3. سرعت اتصال را تا یک پروفایل کند موبایل پایین بیاورید.
4. یک رکورد را روی دو دستگاه در حالی که هر دو آفلاین‌اند ویرایش کنید.
5. یک دستگاه را چند روز با تغییرات زیاد در انتظار آفلاین بگذارید.
6. بررسی کنید وقتی کاربری با داده‌های همگام‌نشده خارج می‌شود چه اتفاقی می‌افتد.

**با شین کار کنید**

شین اپلیکیشن‌های اندروید و iOS را می‌سازد که برای شرایط واقعی شبکه در افغانستان طراحی شده‌اند، با ذخیره محلی، همگام‌سازی قابل اعتماد و رابط‌های دری، پشتو و انگلیسی. در [صفحه اپلیکیشن‌های موبایل](/services/mobile-apps) ما بیشتر بخوانید یا از طریق info@sheen.af یا ‎+93 784 966 018 [با ما تماس بگیرید](/contact).`,
            pa: `آفلاین‌محوره اپلیکیشن هغه موبایل اپلیکیشن دی چې داسې ډیزاین شوی څو د ټیلیفون له خپلې حافظې کار وکړي او هر کله چې اتصال شتون ولري له سرور سره همغږی شي، د دې پر ځای چې د شبکې په پرې کېدو سره له کاره ولوېږي. په افغانستان کې د کاروونکو لپاره، چېرې چې د شبکې پوښښ، برېښنا او د انټرنېټ لګښت ټول د اټکل وړ نه دي، آفلاین‌محوره ډیزاین اکثراً د هغه اپلیکیشن ترمنځ توپیر دی چې خلک پرې تکیه کوي او هغه چې یې پاکوي.

**مهم ټکي**

- آفلاین‌محوره یعنې پاڼې له محلي معلوماتو لوستل کېږي؛ شبکه د همغږۍ لپاره کارول کېږي، نه د هرې پاڼې د ښودلو لپاره.
- د هرې ځانګړتیا لپاره جلا پرېکړه وکړئ چې څه باید آفلاین کار وکړي: لیدل، جوړول، سمول، یا هېڅ.
- د کاروونکي کړنې په وسیله کې په کتار کې کېږدئ او له بیا هڅې، روښانه حالت او د ټکر له قواعدو سره یې همغږي کړئ.
- کم حجمه معلومات، ساتل شوي انځورونه او تدریجي همغږي د کاروونکو د انټرنېټ لګښت کموي.
- د الوتکې حالت، ورو شوې شبکې او هغه وسایل چې څو ورځې آفلاین پاتې کېږي، وازمویئ.

**آفلاین‌محوره په عمل کې څه معنا لري؟**

آفلاین‌محوره یعنې اپلیکیشن لومړی د ټیلیفون په یو محلي ډیټابېس کې لولي او لیکي، او سرور داسې ځای ګڼي چې وروسته ورسره همغږی شي. کله چې کاروونکی یوه پاڼه پرانیزي، سمدستي له محلي معلوماتو ښکاري. کله چې یو فورم لېږي، په محلي توګه ساتل کېږي، د «په انتظار» په توګه نښه کېږي، او هر کله چې اتصال اجازه ورکړي لېږل کېږي.

دا له هغه آفلاین ملاتړ سره توپیر لري چې د کار په پای کې اپلیکیشن ته نښلول کېږي؛ په هغه حالت کې اپلیکیشن داسې جوړ شوی چې د هرې کړنې لپاره له سرور سره اړیکه ونیسي، او بیا ورته یوه لنډمهاله حافظه ورکول کېږي. داسې حافظه معمولاً زاړه لړلیکونه ښيي، خو کله چې کاروونکی وغواړي کوم کار وکړي، هغه دروي. آفلاین‌محوره کېدل د معمارۍ پرېکړه ده، او د پروژې په پیل کې یې نیول د کار له منځ څخه ډېر ارزانه دي.

**کوم اپلیکیشنونه آفلاین‌محوره ډیزاین ته اړتیا لري؟**

هر هغه اپلیکیشن چې په ساحه کې، د حرکت پر مهال یا د هغو خلکو لخوا کارول کېږي چې د هر مېګابایټ لپاره پیسې ورکوي، له آفلاین‌محوره ډیزاین ګټه اخلي. عام مثالونه:

- په ساحه کې د معلوماتو راټولول: سروې‌ګانې، تفتیشونه، ساحوي روغتیایي کارونه او کرنیز ترویج
- د پلور او سپارلو اپلیکیشنونه چې استازي یې په لاره کې فرمایشونه، تادیې او د سپارلو ثبوت ثبتوي
- د ښوونځي او زده کړې اپلیکیشنونه چې زده کوونکي درسونه یو ځل ډاونلوډ کوي او وروسته یې لولي
- په هغو دوکانونو کې د زېرمې او پلور وسایل چې برېښنا او انټرنېټ پکې پرې کېږي
- کاتالوګونه، مینوګانې او لارښودونه چې منځپانګه یې لږ بدلېږي

که ستاسو کاروونکي ټوله ورځ په داسې دفتر کې ناست وي چې ثابت Wi-Fi لري، کېدای شي یوه ساده تګلاره بس وي. په کابل کې، او تر دې هم ډېر په ولایتي ښارونو او ولسوالیو کې، دا په ندرت سره ستاسو ټول مخاطبین وي.

**په آفلاین‌محوره اپلیکیشن کې د معلوماتو همغږي څنګه کار کوي؟**

همغږي د محلي بدلونونو د یو کتار او د هغه څه د ثبت په ساتلو کار کوي چې وسیلې وروستی ځل ترلاسه کړي، او کله چې ټیلیفون آنلاین وي یوازې توپیرونه تبادله کېږي. یو عام ډیزاین:

1. معلومات په وسیله کې په یو ډیټابېس کې وساتئ؛ د SQLite پر بنسټ انتخابونه په React Native او Flutter دواړو کې عام دي.
2. هر ریکارډ ته یو بې‌ساري پېژندنه ورکړئ چې په وسیله کې جوړه شي، څو مخکې له دې چې سرور ورباندې خبر شي، وساتل شي.
3. د کاروونکي هره کړنه د خپل وخت سره د لېږلو په یو کتار کې ولیکئ.
4. کله چې اتصال پیدا شو، په کتار کې کړنې په ترتیب سره ولېږئ، له اتوماتیک بیا هڅې او زیاتېدونکو انتظاري وقفو سره.
5. له سرور یوازې د وروستۍ بریالۍ همغږۍ وروسته بدلونونه وغواړئ، نه ټول معلومات.
6. ریکارډونه د همغږي شوي، په انتظار یا ناکام په توګه نښه کړئ او دا حالت کاروونکي ته وښایئ.
7. کله چې یو ریکارډ په دوو ځایونو کې بدل شوی وي، د ټکر لپاره موافقه شوي قواعد پلي کړئ.

**د همغږۍ ټکرونه څنګه اداره کړو؟**

ټکرونه د کوډ لیکلو مخکې د هر ډول معلوماتو لپاره د یو قاعدې په ټاکلو اداره کوئ، ځکه چې یو واحد سم ځواب نشته. عام قواعد:

- **وروستی لیکل ګټونکی دی:** ساده، او د شخصي تنظیماتو په څېر شیانو لپاره د منلو وړ.
- **د حساسو برخو لپاره سرور ګټونکی دی:** بیې، زېرمه او د تادیې حالت باید له سرور راشي.
- **یوځای کول:** د لړلیکونو لپاره لکه یادښتونه یا د فرمایش توکي، بدلونونه سره یوځای کړئ د دې پر ځای چې یو بل له منځه یوسي.
- **له یو انسان وپوښتئ:** د نادرو خو مهمو ټکرونو لپاره، دواړه نسخې وښایئ او پرېږدئ چې څوک انتخاب وکړي.

همدارنګه عملیات داسې جوړ کړئ چې دوه ځله ترلاسه کېدل یې ستونزه جوړه نه کړي. په کمزوري اتصال کې کېدای شي سرور غوښتنه ترلاسه کړي خو ځواب هېڅکله ټیلیفون ته ونه رسېږي، او ټیلیفون یې بیا ولېږي. ځکه چې هر ریکارډ په وسیله کې جوړه شوې پېژندنه لري، سرور کولی شي تکرار وپېژني او د دوهم فرمایش جوړولو پر ځای یې له پامه وغورځوي.

**د بې‌ثباته اتصالونو لپاره د کاروونکي تجربې ډیزاین**

ښه آفلاین تجربه صادقه ده: کاروونکي ته وايي چې څه ساتل شوي، څه په انتظار دي او څه ناکام شوي، پرته له دې چې هغه ودروي. عملي بڼې:

- د بشپړې پاڼې د تېروتنې پیغام پر ځای یو کوچنی او آرام آفلاین نښه‌ګر
- د لېږلو وروسته داسې پیغام: «په دې ټیلیفون کې وساتل شو، کله چې آنلاین شئ لېږل کېږي»
- د انتظار شویو توکو پاڼه څو کارکوونکي وویني چې څه لا همغږي شوي نه دي
- د «اوس همغږي کړه» تڼۍ د هغو خلکو لپاره چې پوهېږي د یوې شېبې لپاره سیګنال لري
- د درنې منځپانګې لپاره د ډاونلوډ کنټرول د فایل د اندازې په ښودلو سره، څو کاروونکي پخپله پرېکړه وکړي چې کله انټرنېټ مصرف کړي

ژبه او ترتیب هم دلته مهم دي. د حالت پیغامونه باید په دري او پښتو کې طبیعي ولوستل شي او له ښي نه کیڼ لوري ته په ترتیب کې سم کار وکړي، ځکه چې همدا پیغامونه دي چې خلک یې د ستونزې پر مهال لولي.

**د انټرنېټ مصرف او د اپلیکیشن حجم څنګه کم وساتو؟**

مصرف د یوازې بدل شوي شي په لېږلو او د یو شي د دوه ځله نه ډاونلوډ کولو په واسطه کم ساتئ. ځوابونه فشرده کړئ، انځورونه مخکې له دې چې ټیلیفون ته ورسېږي په سرور کې کوچني کړئ، په وسیله کې یې وساتئ، او کاروونکو ته اجازه ورکړئ چې درانه فایلونه لکه ویډیوګانې یوازې په Wi-Fi ډاونلوډ کړي.

د نصب حجم ته هم پام وکړئ. ډېر کاروونکي داسې ټیلیفونونه لري چې لږ خالي ځای لري، او یو لوی اپلیکیشن اکثراً لومړی شی دی چې پاکوي یې. د ساده اړتیاوو لپاره لکه کاتالوګونه او فورمونه، یو [پرمختللی وېب اپلیکیشن (PWA)](/blog/progressive-web-apps-pwa-afghanistan) د service worker سره هم آفلاین کار کولی شي او د اپلیکیشن پلورنځي څخه نصب ته هېڅ اړتیا نه لري.

**د آفلاین اپلیکیشنونو امنیت او ازموینه**

هغه معلومات چې په ټیلیفون کې ساتل کېږي ساتنې ته اړتیا لري: حساس محلي معلومات کوډ کړئ، د کاروونکي د وتلو پر مهال یې پاک کړئ، او هېڅکله رازونه لکه د API خصوصي کلیګانې د اپلیکیشن دننه مه ساتئ. زموږ لارښود د [موبایل اپلیکیشن د امنیت غوره کړنو](/blog/mobile-app-security-best-practices) په اړه دا موضوع په ډېرو جزئیاتو تشریح کوي.

د آفلاین‌محوره اپلیکیشن ازموینه یعنې په قصدي توګه شبکه پرې کول. یو ګټور چک‌لیست:

1. د الوتکې په حالت کې ریکارډونه جوړ او سم کړئ، بیا وصل شئ.
2. اپلیکیشن په داسې حال کې وتړئ چې همغږي نیمګړې وي او بیا یې پرانیزئ.
3. د اتصال سرعت تر یو ورو موبایل پروفایل پورې راکم کړئ.
4. یو ریکارډ په دوو وسیلو کې په داسې حال کې سم کړئ چې دواړه آفلاین وي.
5. یوه وسیله څو ورځې د ډېرو انتظاري بدلونونو سره آفلاین پرېږدئ.
6. وګورئ چې کله یو کاروونکی د نا همغږي شویو معلوماتو سره وځي څه پېښېږي.

**له شین سره کار وکړئ**

شین د اندرویډ او iOS اپلیکیشنونه جوړوي چې د افغانستان د شبکې د رښتینو شرایطو لپاره ډیزاین شوي، له محلي ذخیرې، د باور وړ همغږۍ او د دري، پښتو او انګلیسي انٹرفېسونو سره. زموږ په [موبایل اپلیکیشنونو پاڼه](/services/mobile-apps) کې نور ولولئ یا د info@sheen.af یا ‎+93 784 966 018 له لارې [موږ سره اړیکه ونیسئ](/contact).`
        },
        faqs: [
            {
                q: { en: "Can a web app work offline, or do I need a native app?", da: "آیا یک وب‌اپ هم می‌تواند آفلاین کار کند یا به اپلیکیشن native نیاز دارم؟", pa: "ایا وېب‌اپ هم آفلاین کار کولی شي که native اپلیکیشن ته اړتیا لرم؟" },
                a: {
                    en: "A web app can work offline using a service worker and browser storage, which is how progressive web apps cache pages and save forms. This suits catalogues, simple forms and content apps. For large local databases, background sync that runs reliably, heavy media or deep device features, a native or cross-platform app built with React Native or Flutter is usually the more robust choice.",
                    da: "یک وب‌اپ می‌تواند با استفاده از service worker و حافظه مرورگر آفلاین کار کند؛ اپلیکیشن‌های وب پیشرفته (PWA) به همین روش صفحات را ذخیره و فورم‌ها را نگه می‌دارند. این برای کاتالوگ‌ها، فورم‌های ساده و اپلیکیشن‌های محتوایی مناسب است. برای دیتابیس‌های محلی بزرگ، همگام‌سازی پس‌زمینه‌ای قابل اعتماد، رسانه‌های سنگین یا استفاده عمیق از امکانات دستگاه، یک اپلیکیشن native یا چندپلتفورمی ساخته‌شده با React Native یا Flutter معمولاً انتخاب مطمئن‌تری است.",
                    pa: "وېب‌اپ کولی شي د service worker او د براوزر د حافظې په کارولو آفلاین کار وکړي؛ پرمختللي وېب اپلیکیشنونه (PWA) په همدې لاره پاڼې ساتي او فورمونه خوندي کوي. دا د کاتالوګونو، ساده فورمونو او منځپانګیزو اپلیکیشنونو لپاره مناسب دی. د لویو محلي ډیټابېسونو، د باور وړ شالیدي همغږۍ، درنو رسنیو یا د وسیلې د ژورو امکاناتو لپاره، یو native یا څو پلاتفورمي اپلیکیشن چې په React Native یا Flutter جوړ شوی وي معمولاً ډاډمن انتخاب دی."
                }
            },
            {
                q: { en: "Does offline-first design make an app more expensive?", da: "آیا طراحی آفلاین‌محور ساخت اپلیکیشن را گران‌تر می‌کند؟", pa: "ایا آفلاین‌محوره ډیزاین اپلیکیشن ګران کوي؟" },
                a: {
                    en: "It adds work, mainly in the sync logic, conflict handling and testing, so the first build costs more than a simple online-only app. Adding offline support to an existing online-only app later usually costs even more, because core screens and data flows must be rebuilt. If your users regularly lose connection, planning offline-first from the start is normally the cheaper path overall.",
                    da: "این کار را بیشتر می‌کند، به ویژه در منطق همگام‌سازی، مدیریت تعارض و آزمایش، بنابراین ساخت اول نسبت به یک اپلیکیشن ساده فقط‌آنلاین هزینه بیشتری دارد. افزودن پشتیبانی آفلاین به یک اپلیکیشن فقط‌آنلاین موجود در آینده معمولاً حتی گران‌تر تمام می‌شود، زیرا صفحات اصلی و جریان داده‌ها باید دوباره ساخته شوند. اگر کاربران شما مرتب اتصال را از دست می‌دهند، برنامه‌ریزی آفلاین‌محور از آغاز معمولاً در مجموع راه ارزان‌تری است.",
                    pa: "دا کار زیاتوي، په ځانګړي ډول د همغږۍ په منطق، د ټکر په اداره کولو او ازموینه کې، نو لومړنی جوړول د یو ساده یوازې‌آنلاین اپلیکیشن په پرتله ډېر لګښت لري. وروسته یو موجود یوازې‌آنلاین اپلیکیشن ته د آفلاین ملاتړ اضافه کول معمولاً تر دې هم ګران تمامېږي، ځکه چې اصلي پاڼې او د معلوماتو بهیرونه باید بیا جوړ شي. که ستاسو کاروونکي په منظم ډول اتصال له لاسه ورکوي، له پیل څخه آفلاین‌محوره پلان معمولاً په ټولیز ډول ارزانه لار ده."
                }
            },
            {
                q: { en: "How much data can an app store offline on a phone?", da: "یک اپلیکیشن چه مقدار داده را می‌تواند روی گوشی به صورت آفلاین نگه دارد؟", pa: "یو اپلیکیشن څومره معلومات کولی شي په ټیلیفون کې آفلاین وساتي؟" },
                a: {
                    en: "It depends mainly on the free storage on the user's phone. Text records are small, so a local database can comfortably hold many thousands of orders, customers or survey entries. Images, audio and video are what fill storage, so store them at reduced sizes, let users choose what to download, and clean up old cached files automatically to avoid crowding low-storage devices.",
                    da: "این بیشتر به فضای خالی گوشی کاربر بستگی دارد. رکوردهای متنی کم‌حجم‌اند، بنابراین یک دیتابیس محلی به راحتی می‌تواند هزاران سفارش، مشتری یا پاسخ سروی را نگه دارد. تصاویر، صدا و ویدیو هستند که حافظه را پر می‌کنند، پس آن‌ها را با اندازه کوچک‌تر ذخیره کنید، بگذارید کاربران انتخاب کنند چه چیزی دانلود شود، و فایل‌های ذخیره‌شده قدیمی را خودکار پاک کنید تا گوشی‌های کم‌حافظه پر نشوند.",
                    pa: "دا تر ډېره د کاروونکي د ټیلیفون په خالي ځای پورې اړه لري. متني ریکارډونه کم حجمه دي، نو یو محلي ډیټابېس په اسانۍ سره زرګونه فرمایشونه، پېرودونکي یا د سروې ځوابونه ساتلی شي. انځورونه، غږ او ویډیو دي چې حافظه ډکوي، نو په کوچنۍ اندازه یې وساتئ، کاروونکو ته اجازه ورکړئ چې څه ډاونلوډ کړي، او زاړه ساتل شوي فایلونه په اتوماتیک ډول پاک کړئ څو کم‌حافظې ټیلیفونونه ډک نه شي."
                }
            },
            {
                q: { en: "What happens if two people edit the same record offline?", da: "اگر دو نفر یک رکورد را به صورت آفلاین ویرایش کنند چه می‌شود؟", pa: "که دوه کسان یو ریکارډ آفلاین سم کړي څه پېښېږي؟" },
                a: {
                    en: "When both devices reconnect, the app applies the conflict rule you chose for that kind of data. Common options are keeping the latest change, letting the server decide for sensitive fields such as prices or stock, merging list items, or flagging the clash for a person to resolve. The important part is choosing these rules deliberately during design rather than discovering problems after launch.",
                    da: "وقتی هر دو دستگاه دوباره وصل می‌شوند، اپلیکیشن قاعده تعارضی را که برای آن نوع داده انتخاب کرده‌اید اعمال می‌کند. گزینه‌های رایج عبارتند از نگه‌داشتن آخرین تغییر، تصمیم‌گیری سرور برای فیلدهای حساس مانند قیمت یا موجودی، ادغام اقلام فهرست، یا علامت‌گذاری تعارض تا یک انسان آن را حل کند. نکته مهم این است که این قواعد را آگاهانه در مرحله طراحی انتخاب کنید، نه اینکه مشکلات را پس از راه‌اندازی کشف کنید.",
                    pa: "کله چې دواړه وسیلې بیا وصل شي، اپلیکیشن د ټکر هغه قاعده پلي کوي چې تاسو د هغه ډول معلوماتو لپاره ټاکلې وه. عام انتخابونه دا دي: وروستی بدلون ساتل، د حساسو برخو لکه بیې یا زېرمې لپاره د سرور پرېکړه، د لړلیک د توکو یوځای کول، یا د ټکر نښه کول څو یو انسان یې حل کړي. مهم ټکی دا دی چې دا قواعد د ډیزاین په پړاو کې په پوهه وټاکئ، نه دا چې ستونزې له پیل وروسته کشف کړئ."
                }
            }
        ],
        category: "mobile-apps",
        author: "Layla Wakily",
        date: "2026-10-11",
        updated: "2026-10-11",
        readTime: "5 min read",
        image: "/logo.png",
        tags: ["offline-first app", "offline mobile app", "data sync mobile app", "apps for slow internet", "React Native offline", "Flutter offline storage", "app development Afghanistan"]
    },
    {
        id: "104",
        slug: "delivery-app-development-kabul",
        title: {
            en: "Delivery App Development in Kabul: Features and Challenges",
            da: "ساخت اپلیکیشن تحویل در کابل: ویژگی‌ها و چالش‌ها",
            pa: "په کابل کې د سپارلو اپلیکیشن جوړول: ځانګړتیاوې او ننګونې"
        },
        excerpt: {
            en: "Delivery app development in Kabul: the customer, rider and admin features you need, how to handle landmark addresses and cash, and how to launch step by step.",
            da: "ساخت اپلیکیشن تحویل در کابل: ویژگی‌های لازم برای مشتری، راننده و مدیر، چگونگی مدیریت آدرس‌های مبتنی بر نشانی و پول نقد، و راه‌اندازی گام به گام.",
            pa: "په کابل کې د سپارلو اپلیکیشن جوړول: د پېرودونکي، چلوونکي او مدیر لپاره اړینې ځانګړتیاوې، د نښو پر بنسټ پتو او نغدو پیسو اداره، او ګام په ګام پیل."
        },
        content: {
            en: `Delivery app development in Kabul means building a system, not a single app: a customer app for ordering, a rider app for drivers, and an admin or merchant panel that ties them together, all designed around landmark-based addresses, cash payments and patchy mobile data. Getting those local details right matters more than copying the feature list of a global delivery platform.

**Key Takeaways**

- A delivery service needs three parts: a customer app, a rider app and an admin or merchant dashboard.
- Many Kabul addresses are described by landmarks, so combine a map pin, a written description and a phone number.
- Cash on delivery is normal; design rider cash reconciliation from day one.
- Rider apps must work on budget Android phones with intermittent data.
- Start with one category in a few districts before expanding.

**What Does a Delivery App System Include?**

A working delivery service needs at least three connected pieces, each with different users and priorities:

- **Customer app:** browse, order, choose a payment method, track status, contact support and reorder.
- **Rider app:** receive and accept jobs, see pickup and drop-off points, navigate, call the customer, mark orders as picked up and delivered, and record cash collected.
- **Admin and merchant panel:** manage menus or products, prices and stock, see incoming orders, assign riders, handle cancellations and refunds, and view reports.

Many projects underestimate the third part. The customer app is what people see, but the admin panel is where the business actually runs, and a weak one creates chaos as soon as order volume grows.

**How Do You Handle Addresses in Kabul?**

You handle addresses by combining a map pin with a free-text description and a verified phone number, because many locations are known by landmarks rather than formal street addresses. A customer might describe their home as near a particular mosque, school or bakery in a district such as Karte Char or Khair Khana, and the rider needs both the description and the pin.

Features that help in practice:

- Let customers drop a pin on the map and adjust it, instead of relying only on GPS, which can be inaccurate indoors
- A required directions field for landmarks, gate colour or floor number
- Saved addresses such as "Home" and "Shop" for repeat orders
- One-tap calling from the rider app to the customer, without showing personal numbers to more people than necessary
- Letting riders correct a pin after a delivery so the next order to that address goes smoothly

**Which Payment Methods Should a Kabul Delivery App Support?**

Most delivery apps in Afghanistan need to support cash on delivery first, with digital options added where customers already use them. Card payments are limited locally, while mobile money and bank transfers are used by part of the market; providers and terms change, so check what is currently available before you commit.

Cash creates its own workflow. The rider app should record the amount collected for each order, the admin panel should show how much cash each rider is holding, and there should be a daily settlement step. Our article on [cash on delivery for online stores](/blog/cash-on-delivery-ecommerce) explains how to reduce refused orders and cash-handling risk.

If you serve Afghans abroad who send groceries or gifts to family at home, you will also need international payment options, which usually means a payment provider operating outside the country.

**Designing the Rider App for Real Conditions**

The rider app should be simple, fast and tolerant of poor connections, because riders use budget Android phones while moving through the city. Large buttons, few screens and clear status steps matter far more than visual polish.

Key design choices:

- Store the active job on the phone so a rider can still see the address and phone number when data drops
- Queue status updates and send them when the signal returns, as described in our guide to [offline-first mobile apps](/blog/offline-first-mobile-apps)
- Send location updates sparingly to save battery and data
- Support Dari and Pashto with right-to-left layouts, and pair text with simple icons
- Keep proof of delivery light: a confirmation tap and an optional photo, not heavy uploads

**What Are the Main Challenges?**

The main challenges are operational rather than technical: reliable riders, accurate addresses, cash control and consistent preparation times at merchants. Software can support each of these, but it cannot replace the process behind them.

Other issues to plan for:

- Traffic and road closures that make delivery estimates unreliable, so show time ranges rather than exact minutes
- Power cuts at merchants, which affect tablets and receipt printers
- Customer trust in a new service, built through phone confirmation and responsive support
- Peak periods such as Ramadan evenings and the days before Eid, when demand jumps
- Data costs for customers, so keep images light and the app small

**How Should You Launch a Delivery App Step by Step?**

You should launch narrowly and expand once operations are stable. A practical sequence:

1. Pick one category, such as food, groceries, pharmacy items or parcels, and a small set of districts.
2. Run orders manually through WhatsApp and a spreadsheet for a few weeks to learn real demand and real problems.
3. Build the admin panel and rider app first, then the customer app.
4. Bring on a small number of merchants and riders and train them in person.
5. Open to a limited group of customers and track delivery times and failed orders.
6. Fix the operational issues, then add districts and categories.

Some businesses start with a website and WhatsApp ordering and add native apps later. For background on couriers and routes, see our guide to [ecommerce delivery in Afghanistan](/blog/ecommerce-delivery-logistics-afghanistan).

**How Much Does a Delivery App Cost?**

A delivery system costs considerably more than a single app because it involves three interfaces, live status updates, maps and payments. The budget depends on how many of those parts are custom-built versus kept simple at first, and on whether you need Android and iOS together.

Sheen quotes mobile apps on request after a scoping session. If you start with a web-based ordering store instead, our e-commerce packages begin from AFN 21,000, which can be a lower-risk first step before committing to native apps.

**Work With Sheen**

Sheen designs and builds delivery systems for Afghan conditions: customer and rider apps, admin dashboards, Dari and Pashto interfaces and offline-tolerant workflows. Explore our [mobile app development service](/services/mobile-apps) or [book a consultation](/book), or reach us at info@sheen.af or +93 784 966 018.`,
            da: `ساخت اپلیکیشن تحویل در کابل یعنی ساختن یک سیستم، نه یک اپلیکیشن تنها: یک اپلیکیشن مشتری برای سفارش، یک اپلیکیشن راننده برای تحویل‌دهندگان، و یک پنل مدیریت یا فروشنده که این‌ها را به هم وصل می‌کند؛ همه بر اساس آدرس‌های مبتنی بر نشانی، پرداخت نقدی و انترنت موبایل ناپایدار طراحی می‌شوند. درست کردن همین جزئیات محلی مهم‌تر از کپی کردن فهرست ویژگی‌های یک پلتفورم جهانی تحویل است.

**نکات کلیدی**

- یک خدمت تحویل به سه بخش نیاز دارد: اپلیکیشن مشتری، اپلیکیشن راننده و داشبورد مدیریت یا فروشنده.
- بسیاری از آدرس‌ها در کابل با نشانی‌ها توصیف می‌شوند، پس نقطه روی نقشه، توضیح نوشتاری و شماره تلفن را با هم ترکیب کنید.
- پرداخت هنگام تحویل امری عادی است؛ تسویه پول نقد رانندگان را از روز اول طراحی کنید.
- اپلیکیشن راننده باید روی گوشی‌های اندروید ارزان با انترنت قطع و وصل کار کند.
- پیش از گسترش، با یک دسته محصول در چند ناحیه شروع کنید.

**یک سیستم اپلیکیشن تحویل شامل چه چیزهایی است؟**

یک خدمت تحویل کارآمد دست‌کم به سه بخش متصل نیاز دارد که هر کدام کاربران و اولویت‌های متفاوتی دارند:

- **اپلیکیشن مشتری:** مرور، سفارش، انتخاب روش پرداخت، پیگیری وضعیت، تماس با پشتیبانی و سفارش دوباره.
- **اپلیکیشن راننده:** دریافت و پذیرش کارها، دیدن محل برداشت و تحویل، مسیریابی، تماس با مشتری، علامت‌گذاری سفارش‌ها به عنوان برداشته‌شده و تحویل‌شده، و ثبت پول نقد دریافتی.
- **پنل مدیریت و فروشنده:** مدیریت مینو یا محصولات، قیمت‌ها و موجودی، دیدن سفارش‌های ورودی، تعیین راننده، رسیدگی به لغو و بازپرداخت، و دیدن گزارش‌ها.

بسیاری از پروژه‌ها بخش سوم را دست‌کم می‌گیرند. اپلیکیشن مشتری چیزی است که مردم می‌بینند، اما پنل مدیریت جایی است که تجارت در واقع اداره می‌شود، و یک پنل ضعیف به محض افزایش سفارش‌ها هرج و مرج ایجاد می‌کند.

**آدرس‌ها را در کابل چگونه مدیریت کنیم؟**

آدرس‌ها را با ترکیب یک نقطه روی نقشه، یک توضیح متنی آزاد و یک شماره تلفن تأییدشده مدیریت می‌کنید، زیرا بسیاری از مکان‌ها با نشانی‌ها شناخته می‌شوند نه با آدرس رسمی سرک. یک مشتری ممکن است خانه‌اش را نزدیک یک مسجد، مکتب یا نانوایی مشخص در ناحیه‌ای مانند کارته چهار یا خیرخانه توصیف کند، و راننده هم به توضیح و هم به نقطه روی نقشه نیاز دارد.

ویژگی‌هایی که در عمل کمک می‌کنند:

- اجازه دهید مشتریان نقطه‌ای روی نقشه بگذارند و آن را تنظیم کنند، به جای اینکه تنها به GPS تکیه شود که داخل خانه ممکن است دقیق نباشد
- یک بخش اجباری برای راهنمایی، مانند نشانی‌ها، رنگ دروازه یا شماره منزل
- آدرس‌های ذخیره‌شده مانند «خانه» و «دکان» برای سفارش‌های تکراری
- تماس با یک لمس از اپلیکیشن راننده با مشتری، بدون اینکه شماره‌های شخصی بیش از حد لازم به دیگران نشان داده شود
- اجازه به رانندگان برای اصلاح نقطه پس از تحویل، تا سفارش بعدی به همان آدرس روان‌تر انجام شود

**یک اپلیکیشن تحویل در کابل باید کدام روش‌های پرداخت را پشتیبانی کند؟**

بیشتر اپلیکیشن‌های تحویل در افغانستان باید اول پرداخت هنگام تحویل را پشتیبانی کنند، و گزینه‌های دیجیتل را جایی اضافه کنند که مشتریان از قبل از آن‌ها استفاده می‌کنند. پرداخت با کارت در داخل کشور محدود است، در حالی که پول موبایلی و انتقال بانکی توسط بخشی از بازار استفاده می‌شود؛ ارائه‌دهندگان و شرایط تغییر می‌کنند، پس پیش از تصمیم، بررسی کنید چه چیزی فعلاً در دسترس است.

پول نقد روند کاری خاص خود را دارد. اپلیکیشن راننده باید مبلغ دریافتی هر سفارش را ثبت کند، پنل مدیریت باید نشان دهد هر راننده چه مقدار پول نقد در دست دارد، و باید یک مرحله تسویه روزانه وجود داشته باشد. مقاله ما درباره [پرداخت هنگام تحویل برای فروشگاه‌های آنلاین](/blog/cash-on-delivery-ecommerce) توضیح می‌دهد که چگونه سفارش‌های ردشده و خطرهای مدیریت پول نقد را کاهش دهید.

اگر به افغان‌های خارج از کشور خدمت می‌کنید که برای خانواده‌شان در وطن سودا یا تحفه می‌فرستند، به گزینه‌های پرداخت بین‌المللی هم نیاز دارید، که معمولاً به معنای یک ارائه‌دهنده پرداخت فعال در بیرون از کشور است.

**طراحی اپلیکیشن راننده برای شرایط واقعی**

اپلیکیشن راننده باید ساده، سریع و در برابر اتصال ضعیف مقاوم باشد، زیرا رانندگان هنگام حرکت در شهر از گوشی‌های اندروید ارزان استفاده می‌کنند. دکمه‌های بزرگ، صفحات کم و مراحل وضعیت روشن بسیار مهم‌تر از زیبایی ظاهری‌اند.

انتخاب‌های کلیدی طراحی:

- کار فعال را روی گوشی ذخیره کنید تا راننده حتی وقتی انترنت قطع می‌شود آدرس و شماره تلفن را ببیند
- به‌روزرسانی‌های وضعیت را در صف بگذارید و وقتی سیگنال برگشت بفرستید، همان‌طور که در راهنمای ما درباره [اپلیکیشن‌های موبایل آفلاین‌محور](/blog/offline-first-mobile-apps) توضیح داده شده است
- به‌روزرسانی موقعیت را کم بفرستید تا باتری و انترنت صرفه‌جویی شود
- از دری و پشتو با چیدمان راست به چپ پشتیبانی کنید و متن را با آیکن‌های ساده همراه کنید
- تأیید تحویل را سبک نگه دارید: یک لمس تأیید و یک عکس اختیاری، نه آپلودهای سنگین

**چالش‌های اصلی کدام‌اند؟**

چالش‌های اصلی بیشتر عملیاتی‌اند تا فنی: رانندگان قابل اعتماد، آدرس‌های دقیق، کنترل پول نقد و زمان آماده‌سازی ثابت نزد فروشندگان. نرم‌افزار می‌تواند از هر کدام پشتیبانی کند، اما نمی‌تواند جای روند پشت آن‌ها را بگیرد.

مسائل دیگری که باید برایشان برنامه بریزید:

- ترافیک و بسته شدن سرک‌ها که تخمین زمان تحویل را غیرقابل اعتماد می‌کند، پس به جای دقیقه دقیق، بازه زمانی نشان دهید
- قطع برق نزد فروشندگان که روی تبلت‌ها و پرینترهای رسید اثر می‌گذارد
- اعتماد مشتریان به یک خدمت تازه، که با تأیید تلفنی و پشتیبانی پاسخ‌گو ساخته می‌شود
- دوره‌های اوج مانند شام‌های رمضان و روزهای پیش از عید، که تقاضا ناگهان بالا می‌رود
- هزینه انترنت مشتریان، پس تصاویر را سبک و اپلیکیشن را کوچک نگه دارید

**چگونه گام به گام یک اپلیکیشن تحویل را راه‌اندازی کنیم؟**

باید محدود شروع کنید و وقتی عملیات پایدار شد گسترش دهید. یک ترتیب عملی:

1. یک دسته را انتخاب کنید، مانند غذا، سودا، اقلام دواخانه یا بسته‌ها، همراه با چند ناحیه محدود.
2. برای چند هفته سفارش‌ها را دستی از طریق WhatsApp و یک جدول اکسل اداره کنید تا تقاضای واقعی و مشکلات واقعی را بشناسید.
3. اول پنل مدیریت و اپلیکیشن راننده را بسازید، سپس اپلیکیشن مشتری را.
4. تعداد کمی فروشنده و راننده را جذب کنید و آن‌ها را حضوری آموزش دهید.
5. خدمت را برای گروه محدودی از مشتریان باز کنید و زمان‌های تحویل و سفارش‌های ناموفق را پیگیری کنید.
6. مشکلات عملیاتی را حل کنید، سپس ناحیه‌ها و دسته‌های بیشتری اضافه کنید.

برخی تجارت‌ها با یک ویب‌سایت و سفارش از طریق WhatsApp شروع می‌کنند و بعداً اپلیکیشن‌های native اضافه می‌کنند. برای اطلاعات بیشتر درباره شرکت‌های پستی و مسیرها، راهنمای ما درباره [تحویل در تجارت آنلاین در افغانستان](/blog/ecommerce-delivery-logistics-afghanistan) را ببینید.

**ساخت اپلیکیشن تحویل چقدر هزینه دارد؟**

یک سیستم تحویل به مراتب بیشتر از یک اپلیکیشن تنها هزینه دارد، زیرا شامل سه رابط کاربری، به‌روزرسانی زنده وضعیت، نقشه و پرداخت است. بودجه بستگی دارد که چه تعداد از این بخش‌ها سفارشی ساخته شوند و چه تعداد در آغاز ساده نگه داشته شوند، و اینکه آیا همزمان به اندروید و iOS نیاز دارید.

شین قیمت اپلیکیشن‌های موبایل را پس از یک جلسه تعیین دامنه کار، بر اساس درخواست ارائه می‌کند. اگر به جای آن با یک فروشگاه سفارش‌گیری مبتنی بر وب شروع کنید، بسته‌های تجارت الکترونیک ما از ۲۱٬۰۰۰ افغانی آغاز می‌شوند، که می‌تواند پیش از تعهد به اپلیکیشن‌های native، گام نخست کم‌خطرتری باشد.

**با شین کار کنید**

شین سیستم‌های تحویل را برای شرایط افغانستان طراحی و می‌سازد: اپلیکیشن‌های مشتری و راننده، داشبوردهای مدیریت، رابط‌های دری و پشتو و روندهای کاری مقاوم در برابر قطع انترنت. [خدمات ساخت اپلیکیشن موبایل](/services/mobile-apps) ما را ببینید یا [یک مشوره رزرو کنید](/book)، یا از طریق info@sheen.af یا ‎+93 784 966 018 با ما در تماس شوید.`,
            pa: `په کابل کې د سپارلو اپلیکیشن جوړول یعنې د یو سیستم جوړول، نه یوازې یو اپلیکیشن: د فرمایش لپاره د پېرودونکي اپلیکیشن، د سپارونکو لپاره د چلوونکي اپلیکیشن، او د مدیریت یا پلورونکي پینل چې دا ټول سره نښلوي؛ ټول د نښو پر بنسټ پتو، نغدو تادیو او بې‌ثباته موبایل انټرنېټ ته په پام ډیزاین کېږي. د همدې سیمه‌ییزو جزئیاتو سمول د یوې نړیوالې سپارلو پلاتفورم د ځانګړتیاوو د لړلیک له کاپي کولو ډېر مهم دي.

**مهم ټکي**

- د سپارلو یو خدمت درې برخو ته اړتیا لري: د پېرودونکي اپلیکیشن، د چلوونکي اپلیکیشن او د مدیریت یا پلورونکي ډشبورډ.
- په کابل کې ډېرې پتې د نښو له مخې بیانېږي، نو په نقشه کې ټکی، لیکلی تشریح او د ټیلیفون شمېره سره یوځای کړئ.
- د سپارلو پر مهال نغدي تادیه عادي ده؛ د چلوونکو د نغدو پیسو تصفیه له لومړۍ ورځې ډیزاین کړئ.
- د چلوونکي اپلیکیشن باید په ارزانه اندرویډ ټیلیفونونو کې د پرې کېدونکي انټرنېټ سره کار وکړي.
- له پراختیا مخکې، په څو ناحیو کې له یوې کټګورۍ پیل وکړئ.

**د سپارلو اپلیکیشن سیستم څه شی لري؟**

یو فعال د سپارلو خدمت لږ تر لږه درې نښلول شوو برخو ته اړتیا لري چې هره یوه یې بېل کاروونکي او لومړیتوبونه لري:

- **د پېرودونکي اپلیکیشن:** کتل، فرمایش، د تادیې د لارې ټاکل، د حالت تعقیب، له ملاتړ سره اړیکه او بیا فرمایش.
- **د چلوونکي اپلیکیشن:** د دندو ترلاسه کول او منل، د اخیستلو او سپارلو ځایونه لیدل، لارښوونه، پېرودونکي ته زنګ وهل، فرمایشونه د اخیستل شوي او سپارل شوي په توګه نښه کول، او د ترلاسه شویو نغدو پیسو ثبتول.
- **د مدیریت او پلورونکي پینل:** د مینو یا محصولاتو، بیو او زېرمې اداره، راتلونکي فرمایشونه لیدل، چلوونکی ټاکل، د لغوه کولو او بیرته ورکړې اداره، او راپورونه لیدل.

ډېرې پروژې درېیمه برخه کمه ګڼي. د پېرودونکي اپلیکیشن هغه څه دي چې خلک یې ویني، خو د مدیریت پینل هغه ځای دی چې سوداګري په رښتیا پکې چلېږي، او کمزوری پینل د فرمایشونو د زیاتېدو سره سم ګډوډي جوړوي.

**په کابل کې پتې څنګه اداره کړو؟**

پتې د نقشې پر سر د یو ټکي، د آزاد متني تشریح او د تایید شوې ټیلیفون شمېرې د یوځای کولو له لارې اداره کوئ، ځکه چې ډېر ځایونه د نښو له مخې پېژندل کېږي نه د سړک د رسمي پتې له مخې. یو پېرودونکی کېدای شي خپل کور د یوې ټاکلې جوماتې، ښوونځي یا نانوايي ترڅنګ د کارته چار یا خیرخانې په څېر ناحیه کې بیان کړي، او چلوونکی هم تشریح ته او هم په نقشه کې ټکي ته اړتیا لري.

هغه ځانګړتیاوې چې په عمل کې مرسته کوي:

- پېرودونکو ته اجازه ورکړئ چې په نقشه کې ټکی کېږدي او سم یې کړي، د دې پر ځای چې یوازې په GPS تکیه وشي چې د کور دننه کېدای شي دقیق نه وي
- د لارښوونې لپاره اجباري برخه، لکه نښې، د دروازې رنګ یا د پوړ شمېره
- ساتل شوې پتې لکه «کور» او «دوکان» د تکراري فرمایشونو لپاره
- د چلوونکي له اپلیکیشن څخه پېرودونکي ته په یوه ټک زنګ، پرته له دې چې شخصي شمېرې له اړتیا ډېرو خلکو ته وښودل شي
- چلوونکو ته اجازه چې د سپارلو وروسته ټکی سم کړي، څو همغې پتې ته راتلونکی فرمایش اسانه ترسره شي

**په کابل کې د سپارلو اپلیکیشن باید د تادیې کومې لارې ملاتړ کړي؟**

په افغانستان کې ډېری د سپارلو اپلیکیشنونه باید لومړی د سپارلو پر مهال نغدي تادیې ملاتړ وکړي، او ډیجیټل انتخابونه هلته اضافه کړي چې پېرودونکي یې له وړاندې کاروي. د کارت تادیه د هېواد دننه محدوده ده، په داسې حال کې چې موبایلي پیسې او بانکي لېږد د بازار د یوې برخې لخوا کارول کېږي؛ چمتو کوونکي او شرایط بدلېږي، نو له ژمنې مخکې وګورئ چې اوس څه شتون لري.

نغدې پیسې خپل کاري بهیر لري. د چلوونکي اپلیکیشن باید د هر فرمایش ترلاسه شوې اندازه ثبت کړي، د مدیریت پینل باید وښيي چې هر چلوونکی څومره نغدې پیسې لري، او باید د ورځني تصفیې یو پړاو موجود وي. زموږ مقاله د [آنلاین پلورنځیو لپاره د سپارلو پر مهال نغدي تادیې](/blog/cash-on-delivery-ecommerce) په اړه تشریح کوي چې څنګه رد شوي فرمایشونه او د نغدو پیسو د اداره کولو خطرونه کم کړئ.

که په بهر کې مېشتو افغانانو ته خدمت کوئ چې په هېواد کې خپلې کورنۍ ته سودا یا ډالۍ لېږي، نو نړیوالو تادیه‌یي انتخابونو ته هم اړتیا لرئ، چې معمولاً د هېواد بهر فعال د تادیې یو چمتو کوونکی معنا لري.

**د رښتینو شرایطو لپاره د چلوونکي اپلیکیشن ډیزاین**

د چلوونکي اپلیکیشن باید ساده، ګړندی او د کمزوري اتصال په وړاندې ټینګ وي، ځکه چې چلوونکي په ښار کې د حرکت پر مهال ارزانه اندرویډ ټیلیفونونه کاروي. لویې تڼۍ، لږې پاڼې او د حالت روښانه پړاوونه د ظاهري ښکلا څخه ډېر مهم دي.

د ډیزاین مهم انتخابونه:

- فعاله دنده په ټیلیفون کې وساتئ څو چلوونکی هغه وخت هم پته او د ټیلیفون شمېره وویني کله چې انټرنېټ پرې شي
- د حالت تازه معلومات په کتار کې کېږدئ او کله چې سیګنال بیرته راغی ویې لېږئ، لکه څنګه چې زموږ په لارښود کې د [آفلاین‌محوره موبایل اپلیکیشنونو](/blog/offline-first-mobile-apps) په اړه تشریح شوي
- د موقعیت تازه معلومات لږ ولېږئ څو بیټرۍ او انټرنېټ وسپمول شي
- له دري او پښتو څخه د ښي نه کیڼ لوري ته ترتیب سره ملاتړ وکړئ او متن له ساده آیکونونو سره یوځای کړئ
- د سپارلو ثبوت سپک وساتئ: د تایید یو ټک او یو اختیاري انځور، نه درانه اپلوډونه

**اصلي ننګونې کومې دي؟**

اصلي ننګونې تر تخنیکي ډېر عملیاتي دي: د باور وړ چلوونکي، دقیقې پتې، د نغدو پیسو کنټرول او د پلورونکو په ځای کې د چمتو کولو ثابت وخت. سافټویر کولی شي له هرې یوې ملاتړ وکړي، خو د هغو تر شا بهیر نه شي ځای ناستی کېدای.

نورې مسلې چې باید ورته پلان جوړ کړئ:

- ترافیک او د سړکونو بندېدل چې د سپارلو اټکل د باور وړ نه پرېږدي، نو د دقیقې دقیقو پر ځای د وخت حدونه وښایئ
- د پلورونکو په ځای کې د برېښنا پرې کېدل چې په ټابلېټونو او د رسید په پرنټرونو اغېز کوي
- په یو نوي خدمت د پېرودونکو باور، چې د ټیلیفوني تایید او ځواب‌ویونکي ملاتړ له لارې جوړېږي
- د لوړې غوښتنې دورې لکه د روژې ماښامونه او د اختر مخکې ورځې، چې غوښتنه ناڅاپه لوړېږي
- د پېرودونکو د انټرنېټ لګښت، نو انځورونه سپک او اپلیکیشن کوچنی وساتئ

**د سپارلو اپلیکیشن څنګه ګام په ګام پیل کړو؟**

باید محدود پیل وکړئ او کله چې عملیات ثابت شول پراختیا ورکړئ. یو عملي ترتیب:

1. یوه کټګوري وټاکئ، لکه خواړه، سودا، د درملتون توکي یا پارسلونه، له څو محدودو ناحیو سره.
2. د څو اونیو لپاره فرمایشونه په لاس د WhatsApp او یو جدول له لارې اداره کړئ څو رښتینې غوښتنه او رښتینې ستونزې وپېژنئ.
3. لومړی د مدیریت پینل او د چلوونکي اپلیکیشن جوړ کړئ، بیا د پېرودونکي اپلیکیشن.
4. لږ شمېر پلورونکي او چلوونکي راجلب کړئ او په حضوري ډول یې وروزئ.
5. خدمت د پېرودونکو یوې محدودې ډلې ته پرانیزئ او د سپارلو وختونه او ناکام فرمایشونه وڅارئ.
6. عملیاتي ستونزې حل کړئ، بیا نورې ناحیې او کټګورۍ اضافه کړئ.

ځینې سوداګرۍ له یو وېب‌سایټ او د WhatsApp له لارې فرمایش سره پیل کوي او وروسته native اپلیکیشنونه اضافه کوي. د پستي شرکتونو او لارو په اړه د نورو معلوماتو لپاره، زموږ لارښود د [افغانستان کې د آنلاین سوداګرۍ د سپارلو](/blog/ecommerce-delivery-logistics-afghanistan) په اړه وګورئ.

**د سپارلو اپلیکیشن جوړول څومره لګښت لري؟**

د سپارلو سیستم د یو یوازیني اپلیکیشن په پرتله ډېر لګښت لري، ځکه چې درې انٹرفېسونه، د حالت ژوندي تازه معلومات، نقشې او تادیې پکې شاملې دي. بودیجه پدې پورې اړه لري چې له دې برخو څومره یې ځانګړې جوړې شي او څومره یې په پیل کې ساده وساتل شي، او دا چې ایا په یو وخت اندرویډ او iOS ته اړتیا لرئ.

شین د موبایل اپلیکیشنونو بیه د کار د ساحې د ټاکلو له ناستې وروسته د غوښتنې پر بنسټ ورکوي. که د دې پر ځای له یو وېب‌پر بنسټ د فرمایش پلورنځي پیل وکړئ، زموږ د آنلاین سوداګرۍ کڅوړې له ۲۱٬۰۰۰ افغانیو پیلېږي، چې کېدای شي native اپلیکیشنونو ته له ژمنې مخکې د لږ خطر لومړی ګام وي.

**له شین سره کار وکړئ**

شین د افغانستان د شرایطو لپاره د سپارلو سیستمونه ډیزاین او جوړوي: د پېرودونکي او چلوونکي اپلیکیشنونه، د مدیریت ډشبورډونه، د دري او پښتو انٹرفېسونه او د انټرنېټ د پرې کېدو په وړاندې ټینګ کاري بهیرونه. زموږ [د موبایل اپلیکیشن جوړولو خدمت](/services/mobile-apps) وګورئ یا [یوه مشوره بک کړئ](/book)، یا موږ سره د info@sheen.af یا ‎+93 784 966 018 له لارې اړیکه ونیسئ.`
        },
        faqs: [
            {
                q: { en: "Do I need separate apps for customers and riders?", da: "آیا برای مشتریان و رانندگان به اپلیکیشن‌های جداگانه نیاز دارم؟", pa: "ایا د پېرودونکو او چلوونکو لپاره بېلو اپلیکیشنونو ته اړتیا لرم؟" },
                a: {
                    en: "Usually yes. Customers and riders need very different screens, permissions and notifications, and mixing them in one app makes both experiences confusing. Some teams build one codebase with separate login roles to save effort, but the interfaces still need to be designed separately. The admin or merchant side is normally a web dashboard rather than a mobile app, since staff use it at a desk or on a tablet.",
                    da: "معمولاً بله. مشتریان و رانندگان به صفحات، دسترسی‌ها و اعلان‌های بسیار متفاوتی نیاز دارند، و ترکیب آن‌ها در یک اپلیکیشن هر دو تجربه را گیج‌کننده می‌کند. برخی تیم‌ها برای صرفه‌جویی، یک کد با نقش‌های ورود جداگانه می‌سازند، اما رابط‌ها همچنان باید جداگانه طراحی شوند. بخش مدیریت یا فروشنده معمولاً یک داشبورد وب است نه اپلیکیشن موبایل، چون کارکنان از آن پشت میز یا روی تبلت استفاده می‌کنند.",
                    pa: "معمولاً هو. پېرودونکي او چلوونکي ډېرو بېلو پاڼو، اجازو او خبرتیاوو ته اړتیا لري، او په یو اپلیکیشن کې یې ګډول دواړه تجربې ګډوډې کوي. ځینې ټیمونه د سپما لپاره یو کوډ د ننوتلو له بېلو رولونو سره جوړوي، خو انٹرفېسونه بیا هم باید جلا ډیزاین شي. د مدیریت یا پلورونکي برخه معمولاً یو وېب ډشبورډ وي نه موبایل اپلیکیشن، ځکه چې کارکوونکي یې د مېز شاته یا په ټابلېټ کې کاروي."
                }
            },
            {
                q: { en: "Can a delivery app work without formal street addresses?", da: "آیا اپلیکیشن تحویل بدون آدرس رسمی سرک می‌تواند کار کند؟", pa: "ایا د سپارلو اپلیکیشن د سړک له رسمي پتې پرته کار کولی شي؟" },
                a: {
                    en: "Yes. Delivery apps in cities without consistent street addressing rely on a combination of a map pin the customer can adjust, a written description with landmarks, and a phone number the rider can call. Saving corrected pins after each delivery steadily improves accuracy for repeat customers. The phone call remains an important backup, so make it one tap away in the rider app.",
                    da: "بله. اپلیکیشن‌های تحویل در شهرهایی که آدرس‌دهی منظم سرک ندارند، بر ترکیبی از یک نقطه قابل تنظیم روی نقشه، یک توضیح نوشتاری با نشانی‌ها، و یک شماره تلفن که راننده بتواند تماس بگیرد تکیه می‌کنند. ذخیره نقطه‌های اصلاح‌شده پس از هر تحویل، دقت را برای مشتریان تکراری به تدریج بهتر می‌کند. تماس تلفنی همچنان یک پشتوانه مهم است، پس آن را در اپلیکیشن راننده با یک لمس در دسترس قرار دهید.",
                    pa: "هو. په هغو ښارونو کې چې د سړکونو منظمه پته نه لري، د سپارلو اپلیکیشنونه د نقشې پر سر د سمېدونکي ټکي، د نښو سره لیکلي تشریح، او د داسې ټیلیفون شمېرې په ترکیب تکیه کوي چې چلوونکی ورته زنګ وهلی شي. د هرې سپارنې وروسته د سم شویو ټکو ساتل د تکراري پېرودونکو لپاره دقت ورو ورو ښه کوي. ټیلیفوني زنګ لا هم یو مهم ملاتړ دی، نو د چلوونکي په اپلیکیشن کې یې په یوه ټک لاسرسي وړ کړئ."
                }
            },
            {
                q: { en: "How long does it take to build a delivery app?", da: "ساخت یک اپلیکیشن تحویل چقدر وقت می‌گیرد؟", pa: "د سپارلو اپلیکیشن جوړول څومره وخت نیسي؟" },
                a: {
                    en: "A focused first version with a customer app, rider app and admin panel typically takes a few months, depending on features such as live tracking, digital payments and merchant self-service. Starting with manual operations and a simple web ordering page can get you trading within weeks while the full system is built, and gives you real data to shape it.",
                    da: "یک نسخه نخست متمرکز با اپلیکیشن مشتری، اپلیکیشن راننده و پنل مدیریت معمولاً چند ماه زمان می‌برد، بسته به ویژگی‌هایی مانند پیگیری زنده، پرداخت دیجیتل و خدمات خودکار برای فروشندگان. شروع با عملیات دستی و یک صفحه سفارش ساده در وب می‌تواند شما را در چند هفته وارد بازار کند، در حالی که سیستم کامل ساخته می‌شود، و داده‌های واقعی برای شکل دادن به آن به شما می‌دهد.",
                    pa: "یوه متمرکزه لومړۍ نسخه د پېرودونکي اپلیکیشن، د چلوونکي اپلیکیشن او د مدیریت پینل سره معمولاً څو میاشتې وخت نیسي، دا د ځانګړتیاوو لکه ژوندي تعقیب، ډیجیټل تادیې او د پلورونکو لپاره د ځان خدمت پورې اړه لري. د لاسي عملیاتو او یوې ساده وېب فرمایش پاڼې سره پیل کولی شي تاسو په څو اونیو کې بازار ته ورسوي، په داسې حال کې چې بشپړ سیستم جوړېږي، او د هغه د شکل ورکولو لپاره رښتیني معلومات درکوي."
                }
            },
            {
                q: { en: "Should I build my own delivery app or join an existing platform?", da: "آیا اپلیکیشن تحویل خودم را بسازم یا به یک پلتفورم موجود بپیوندم؟", pa: "ایا خپل د سپارلو اپلیکیشن جوړ کړم که له یو موجود پلاتفورم سره یوځای شم؟" },
                a: {
                    en: "Joining an existing platform is faster and cheaper to start, but you share revenue, follow its rules and do not own the customer relationship. Building your own makes sense when delivery is central to your business, you have steady order volume, or you need features the platforms do not offer. Many businesses start on a platform or WhatsApp, then build their own system once demand is proven.",
                    da: "پیوستن به یک پلتفورم موجود برای شروع سریع‌تر و ارزان‌تر است، اما درآمد را شریک می‌شوید، از قواعد آن پیروی می‌کنید و رابطه با مشتری از آن شما نیست. ساختن اپلیکیشن خودتان زمانی منطقی است که تحویل بخش اصلی تجارت شما باشد، حجم سفارش ثابت داشته باشید، یا به ویژگی‌هایی نیاز داشته باشید که پلتفورم‌ها ارائه نمی‌کنند. بسیاری از تجارت‌ها روی یک پلتفورم یا WhatsApp شروع می‌کنند و پس از اثبات تقاضا، سیستم خود را می‌سازند.",
                    pa: "له یو موجود پلاتفورم سره یوځای کېدل د پیل لپاره ګړندي او ارزانه دي، خو عاید شریکوئ، د هغه قواعد منئ او له پېرودونکي سره اړیکه ستاسو نه ده. د خپل اپلیکیشن جوړول هغه وخت معقول دي چې سپارل ستاسو د سوداګرۍ اصلي برخه وي، ثابت شمېر فرمایشونه ولرئ، یا داسې ځانګړتیاوو ته اړتیا ولرئ چې پلاتفورمونه یې نه وړاندې کوي. ډېرې سوداګرۍ په یو پلاتفورم یا WhatsApp پیل کوي او د غوښتنې له ثابتېدو وروسته خپل سیستم جوړوي."
                }
            }
        ],
        category: "mobile-apps",
        author: "Layla Wakily",
        date: "2026-10-08",
        updated: "2026-10-08",
        readTime: "5 min read",
        image: "/logo.png",
        tags: ["delivery app development", "food delivery app Kabul", "rider app features", "delivery app Afghanistan", "cash on delivery app", "on-demand app development", "logistics app 2026"]
    },
    {
        id: "103",
        slug: "ai-features-in-mobile-apps",
        title: {
            en: "AI Mobile App Features Worth Adding in 2026",
            da: "ویژگی‌های هوش مصنوعی که ارزش افزودن به اپلیکیشن موبایل را در ۲۰۲۶ دارند",
            pa: "د مصنوعي ځیرکتیا هغه ځانګړتیاوې چې په ۲۰۲۶ کې موبایل اپلیکیشن ته د اضافه کولو وړ دي"
        },
        excerpt: {
            en: "Which AI mobile app features are worth building in 2026, on-device vs cloud AI, how to add them securely, Dari and Pashto quality, and keeping costs low.",
            da: "کدام ویژگی‌های هوش مصنوعی در اپلیکیشن موبایل در ۲۰۲۶ ارزش ساختن دارند، هوش مصنوعی روی دستگاه یا ابری، افزودن امن، کیفیت دری و پشتو، و کنترل هزینه‌ها.",
            pa: "په ۲۰۲۶ کې د موبایل اپلیکیشن کومې AI ځانګړتیاوې د جوړولو وړ دي، په وسیله کې یا ورېځني AI، خوندي اضافه کول، د دري او پښتو کیفیت، او د لګښتونو کنټرول."
        },
        content: {
            en: `Adding AI mobile app features in 2026 is mostly about choosing a few tasks where AI clearly saves users time, such as search that understands plain language, summaries, reading photos of documents or a support assistant, and building them with the right mix of on-device and cloud models. The hard parts are not the AI itself but cost control, privacy, language quality and handling wrong answers gracefully.

**Key Takeaways**

- Start from a user task that AI makes faster, not from a general wish to "have AI".
- Cloud models are more capable; on-device models are faster, more private and free per use, but more limited.
- Never call an AI provider from the app with a secret key; route requests through your own server.
- Test Dari and Pashto quality with native speakers, because it varies by model and task.
- Budget for usage-based costs, set limits, and design for wrong answers.

**Which AI Features Actually Help Users?**

The AI features that help most are the ones that remove typing, searching or waiting from a task users already do. Patterns that work well in 2026:

- **Natural-language search:** a user types "black shoes size 42 under 3,000 afghani" instead of working through filters.
- **Support assistant:** answers questions using your own policies, FAQs and order status.
- **Summaries:** long messages, reports, reviews or lessons condensed into key points.
- **Photo understanding:** reading receipts, invoices or product labels from the camera.
- **Voice input:** speaking a request instead of typing, which helps users who are less comfortable with a keyboard.
- **Translation:** moving user-generated content between English, Dari and Pashto.
- **Recommendations:** suggesting products, lessons or content based on behaviour.
- **Writing help:** drafting product descriptions or replies for sellers inside a marketplace app.

Features that rarely justify their cost include a generic chatbot with no access to your data, and AI-generated images added only for novelty.

**On-Device or Cloud AI: Which Should You Use?**

Use on-device AI for small, frequent or privacy-sensitive tasks, and cloud AI for complex reasoning or knowledge-heavy tasks. Apple and Google both give developers access to on-device models on recent phones, and small open models can also be bundled into an app, at the cost of a larger download.

- **On-device:** works offline, has no per-request fee and keeps data on the phone, but capability is limited and support depends on newer hardware.
- **Cloud:** the strongest models, available on any phone with internet, but every request costs money, needs a connection and sends data off the device.

Many users in Afghanistan carry older or mid-range phones, so on-device features will not reach everyone. Plan a cloud fallback or make the feature optional. A hybrid approach, with simple tasks on the phone and harder ones in the cloud, is now common.

**How Do You Add AI to an App Safely?**

You add AI safely by placing your own backend between the app and the AI provider, and by limiting what the model can see and do. A practical sequence:

1. Define the task, the input and the expected output precisely.
2. Choose a model and test it on real examples, including Dari and Pashto inputs.
3. Build a server endpoint that holds the API key, adds your instructions and calls the provider.
4. Send only the data the task needs, and remove personal details where you can.
5. Add per-user rate limits and a monthly spending cap.
6. Ground factual answers in your own data rather than the model's general knowledge.
7. Log requests and responses, within your privacy policy, so you can review quality.
8. Give users a way to report bad output and to reach a human.

Keys shipped inside an app can be extracted, so they must never live there. Our guide to [mobile app security best practices](/blog/mobile-app-security-best-practices) explains why in more detail.

**How Good Is AI in Dari and Pashto?**

AI quality in Dari has improved considerably, while Pashto is generally weaker and less consistent, and both vary by model and task. Large models usually understand Dari questions well, but they may drift into Iranian Persian vocabulary. Pashto output can contain grammar mistakes and unnatural phrasing, and speech recognition for both languages is less mature than for English.

Practical advice:

- Test with native speakers before launch, using questions real users ask
- Give the model vocabulary preferences and example answers in your instructions
- Pull critical text such as prices, policies and legal terms from your own data instead of generating it
- Let users switch to English or reach a person when the answer is not good enough

Our guide to an [AI chatbot in Dari and Pashto](/blog/ai-chatbot-website-dari-pashto) covers language handling in more depth.

**How Do You Keep AI Answers Accurate?**

You keep answers accurate by connecting the model to your own content with retrieval-augmented generation (RAG): the app searches your documents and passes the relevant parts to the model along with the question. This reduces invented answers and keeps information current without retraining a model. Our explainer on [RAG chatbots](/blog/rag-knowledge-base-chatbot) shows how this works.

Even with RAG, design for mistakes. Show where an answer came from, label AI-generated responses clearly, and for actions such as refunds, bookings or cancellations, ask the user to confirm before anything happens.

**What Do AI Features Cost to Run?**

Cloud AI is billed by usage, so the cost grows with the number of users and the length of each request; provider prices change often, so check current rates before you plan. Ways to keep costs predictable:

- Use smaller, cheaper models for simple tasks and reserve large ones for hard cases
- Cache answers to common questions
- Limit conversation length and the amount of context sent
- Set daily limits per user
- Review spending every week during the first months

Check app store rules as well. Both Google Play and the App Store have policies covering AI-generated content, including expectations that users can report offensive output. Read the current versions before you submit; our guide to [publishing on Google Play from Afghanistan](/blog/publish-app-google-play-from-afghanistan) covers the submission process.

**Work With Sheen**

Sheen adds practical AI features to Android and iOS apps, from smart search and support assistants to document scanning, with secure backends and Dari, Pashto and English support. See our [mobile app development service](/services/mobile-apps) and [automation service](/services/automation), or [contact us](/contact) at info@sheen.af or +93 784 966 018.`,
            da: `افزودن ویژگی‌های هوش مصنوعی به اپلیکیشن موبایل در ۲۰۲۶ بیشتر به این معناست که چند کاری را انتخاب کنید که هوش مصنوعی به وضوح در آن‌ها وقت کاربران را صرفه‌جویی می‌کند، مانند جستجویی که زبان ساده را می‌فهمد، خلاصه‌سازی، خواندن عکس اسناد یا یک دستیار پشتیبانی، و آن‌ها را با ترکیب درستی از مدل‌های روی دستگاه و ابری بسازید. بخش‌های دشوار خود هوش مصنوعی نیست، بلکه کنترل هزینه، حریم خصوصی، کیفیت زبان و برخورد درست با پاسخ‌های اشتباه است.

**نکات کلیدی**

- از کاری شروع کنید که هوش مصنوعی آن را برای کاربر سریع‌تر می‌کند، نه از یک آرزوی کلی برای «داشتن AI».
- مدل‌های ابری توانمندترند؛ مدل‌های روی دستگاه سریع‌تر، خصوصی‌تر و بدون هزینه برای هر استفاده‌اند، اما محدودترند.
- هرگز از داخل اپلیکیشن با یک کلید محرمانه مستقیماً با ارائه‌دهنده AI تماس نگیرید؛ درخواست‌ها را از طریق سرور خودتان بفرستید.
- کیفیت دری و پشتو را با گویندگان بومی آزمایش کنید، زیرا بسته به مدل و نوع کار فرق می‌کند.
- برای هزینه‌های مبتنی بر مصرف بودجه بگذارید، محدودیت تعیین کنید و برای پاسخ‌های اشتباه طراحی کنید.

**کدام ویژگی‌های هوش مصنوعی واقعاً به کاربران کمک می‌کنند؟**

ویژگی‌هایی که بیشترین کمک را می‌کنند، آن‌هایی‌اند که تایپ کردن، جستجو یا انتظار را از کاری که کاربران از قبل انجام می‌دهند حذف می‌کنند. الگوهایی که در ۲۰۲۶ خوب کار می‌کنند:

- **جستجو با زبان طبیعی:** کاربر می‌نویسد «بوت سیاه سایز ۴۲ زیر ۳٬۰۰۰ افغانی» به جای اینکه فلترها را یکی یکی انتخاب کند.
- **دستیار پشتیبانی:** با استفاده از پالیسی‌ها، پرسش‌های متداول و وضعیت سفارش‌های خودتان به پرسش‌ها پاسخ می‌دهد.
- **خلاصه‌سازی:** پیام‌ها، گزارش‌ها، نظرات یا درس‌های طولانی در چند نکته اصلی خلاصه می‌شوند.
- **فهم عکس:** خواندن رسیدها، بل‌ها یا برچسب محصولات از طریق کمره.
- **ورودی صوتی:** گفتن درخواست به جای تایپ، که به کاربرانی که با کیبورد راحت نیستند کمک می‌کند.
- **ترجمه:** انتقال محتوای تولیدشده توسط کاربران میان انگلیسی، دری و پشتو.
- **پیشنهادها:** پیشنهاد محصولات، درس‌ها یا محتوا بر اساس رفتار کاربر.
- **کمک در نوشتن:** پیش‌نویس توضیحات محصول یا پاسخ‌ها برای فروشندگان در یک اپلیکیشن بازار آنلاین.

ویژگی‌هایی که به ندرت ارزش هزینه خود را دارند شامل یک چت‌بات عمومی بدون دسترسی به داده‌های شما، و تصاویر ساخته‌شده با AI که فقط برای تازگی اضافه شده‌اند، می‌شوند.

**هوش مصنوعی روی دستگاه یا ابری: کدام را استفاده کنیم؟**

از هوش مصنوعی روی دستگاه برای کارهای کوچک، پرتکرار یا حساس از نظر حریم خصوصی استفاده کنید، و از هوش مصنوعی ابری برای استدلال پیچیده یا کارهایی که به دانش زیاد نیاز دارند. هم Apple و هم Google به برنامه‌نویسان امکان دسترسی به مدل‌های روی دستگاه را در گوشی‌های جدید می‌دهند، و مدل‌های باز کوچک را هم می‌توان داخل اپلیکیشن گنجاند، البته به قیمت حجم دانلود بزرگ‌تر.

- **روی دستگاه:** آفلاین کار می‌کند، هزینه‌ای برای هر درخواست ندارد و داده‌ها را روی گوشی نگه می‌دارد، اما توانایی آن محدود است و پشتیبانی آن به سخت‌افزار جدیدتر وابسته است.
- **ابری:** قوی‌ترین مدل‌ها، روی هر گوشی دارای انترنت در دسترس است، اما هر درخواست هزینه دارد، به اتصال نیاز دارد و داده‌ها را از دستگاه بیرون می‌فرستد.

بسیاری از کاربران در افغانستان گوشی‌های قدیمی یا متوسط دارند، پس ویژگی‌های روی دستگاه به همه نمی‌رسند. یک جایگزین ابری برنامه‌ریزی کنید یا ویژگی را اختیاری بگذارید. رویکرد ترکیبی، یعنی کارهای ساده روی گوشی و کارهای دشوارتر در ابر، اکنون رایج است.

**چگونه هوش مصنوعی را به صورت امن به اپلیکیشن اضافه کنیم؟**

هوش مصنوعی را با قرار دادن سرور خودتان میان اپلیکیشن و ارائه‌دهنده AI، و با محدود کردن آنچه مدل می‌تواند ببیند و انجام دهد، به صورت امن اضافه می‌کنید. یک ترتیب عملی:

1. کار، ورودی و خروجی مورد انتظار را دقیق تعریف کنید.
2. یک مدل انتخاب کنید و آن را روی نمونه‌های واقعی، از جمله ورودی‌های دری و پشتو، آزمایش کنید.
3. یک نقطه پایانی روی سرور بسازید که کلید API را نگه دارد، دستورالعمل‌های شما را اضافه کند و با ارائه‌دهنده تماس بگیرد.
4. تنها داده‌هایی را بفرستید که کار به آن نیاز دارد، و تا جایی که ممکن است جزئیات شخصی را حذف کنید.
5. برای هر کاربر محدودیت تعداد درخواست و یک سقف هزینه ماهانه بگذارید.
6. پاسخ‌های مبتنی بر واقعیت را بر داده‌های خودتان استوار کنید، نه بر دانش عمومی مدل.
7. درخواست‌ها و پاسخ‌ها را در چارچوب پالیسی حریم خصوصی خود ثبت کنید تا بتوانید کیفیت را بررسی کنید.
8. به کاربران راهی بدهید تا خروجی نادرست را گزارش دهند و به یک انسان دسترسی پیدا کنند.

کلیدهایی که داخل اپلیکیشن قرار داده می‌شوند قابل استخراج‌اند، پس هرگز نباید آنجا باشند. راهنمای ما درباره [بهترین شیوه‌های امنیت اپلیکیشن موبایل](/blog/mobile-app-security-best-practices) دلیل آن را با جزئیات بیشتر توضیح می‌دهد.

**کیفیت هوش مصنوعی در دری و پشتو چقدر خوب است؟**

کیفیت هوش مصنوعی در دری به طور قابل توجهی بهتر شده، در حالی که پشتو عموماً ضعیف‌تر و ناپایدارتر است، و هر دو بسته به مدل و نوع کار فرق می‌کنند. مدل‌های بزرگ معمولاً پرسش‌های دری را خوب می‌فهمند، اما ممکن است به سمت واژگان فارسی ایرانی بروند. خروجی پشتو ممکن است اشتباهات دستوری و جمله‌بندی غیرطبیعی داشته باشد، و تشخیص گفتار برای هر دو زبان نسبت به انگلیسی کمتر پخته است.

توصیه‌های عملی:

- پیش از راه‌اندازی با گویندگان بومی و با پرسش‌هایی که کاربران واقعی می‌پرسند آزمایش کنید
- در دستورالعمل‌ها ترجیحات واژگانی و نمونه پاسخ‌ها را به مدل بدهید
- متن‌های حیاتی مانند قیمت‌ها، پالیسی‌ها و شرایط حقوقی را از داده‌های خودتان بیاورید، نه اینکه تولید شوند
- وقتی پاسخ به اندازه کافی خوب نیست، اجازه دهید کاربران به انگلیسی بروند یا با یک انسان تماس بگیرند

راهنمای ما درباره [چت‌بات هوش مصنوعی به دری و پشتو](/blog/ai-chatbot-website-dari-pashto) مدیریت زبان را با عمق بیشتری بررسی می‌کند.

**چگونه پاسخ‌های هوش مصنوعی را دقیق نگه داریم؟**

پاسخ‌ها را با وصل کردن مدل به محتوای خودتان از طریق تولید تقویت‌شده با بازیابی (RAG) دقیق نگه می‌دارید: اپلیکیشن در اسناد شما جستجو می‌کند و بخش‌های مرتبط را همراه با پرسش به مدل می‌دهد. این کار پاسخ‌های ساختگی را کاهش می‌دهد و اطلاعات را بدون آموزش دوباره مدل به‌روز نگه می‌دارد. توضیح ما درباره [چت‌بات‌های RAG](/blog/rag-knowledge-base-chatbot) نشان می‌دهد که این روش چگونه کار می‌کند.

حتی با RAG، برای اشتباهات طراحی کنید. نشان دهید پاسخ از کجا آمده، پاسخ‌های تولیدشده با AI را به روشنی علامت بزنید، و برای اقداماتی مانند بازپرداخت، رزرو یا لغو، پیش از انجام هر کاری از کاربر تأیید بگیرید.

**هزینه اجرای ویژگی‌های هوش مصنوعی چقدر است؟**

هوش مصنوعی ابری بر اساس مصرف محاسبه می‌شود، پس هزینه با تعداد کاربران و طول هر درخواست بالا می‌رود؛ قیمت‌های ارائه‌دهندگان زیاد تغییر می‌کند، پس پیش از برنامه‌ریزی نرخ‌های فعلی را بررسی کنید. راه‌هایی برای قابل پیش‌بینی نگه‌داشتن هزینه‌ها:

- برای کارهای ساده از مدل‌های کوچک‌تر و ارزان‌تر استفاده کنید و مدل‌های بزرگ را برای موارد دشوار نگه دارید
- پاسخ پرسش‌های رایج را ذخیره کنید
- طول گفتگو و مقدار متن زمینه‌ای ارسالی را محدود کنید
- برای هر کاربر محدودیت روزانه بگذارید
- در ماه‌های نخست هر هفته هزینه‌ها را بررسی کنید

قواعد فروشگاه‌های اپلیکیشن را هم بررسی کنید. هم Google Play و هم App Store پالیسی‌هایی درباره محتوای تولیدشده با AI دارند، از جمله این انتظار که کاربران بتوانند خروجی توهین‌آمیز را گزارش دهند. پیش از ارسال، نسخه‌های فعلی را بخوانید؛ راهنمای ما درباره [نشر اپلیکیشن در Google Play از افغانستان](/blog/publish-app-google-play-from-afghanistan) روند ارسال را توضیح می‌دهد.

**با شین کار کنید**

شین ویژگی‌های کاربردی هوش مصنوعی را به اپلیکیشن‌های اندروید و iOS اضافه می‌کند، از جستجوی هوشمند و دستیارهای پشتیبانی تا اسکن اسناد، با سرورهای امن و پشتیبانی از دری، پشتو و انگلیسی. [خدمات ساخت اپلیکیشن موبایل](/services/mobile-apps) و [خدمات اتوماسیون](/services/automation) ما را ببینید، یا از طریق info@sheen.af یا ‎+93 784 966 018 [با ما تماس بگیرید](/contact).`,
            pa: `په ۲۰۲۶ کې موبایل اپلیکیشن ته د مصنوعي ځیرکتیا (AI) ځانګړتیاوو اضافه کول تر ډېره دا معنا لري چې څو داسې کارونه وټاکئ چې AI په ښکاره ډول پکې د کاروونکو وخت سپموي، لکه هغه لټون چې ساده ژبه پوهېږي، لنډیزونه، د اسنادو د انځورونو لوستل یا د ملاتړ مرستیال، او هغه د وسیلې دننه او ورېځنیو ماډلونو له سم ترکیب سره جوړ کړئ. سخته برخه پخپله AI نه ده، بلکې د لګښت کنټرول، محرمیت، د ژبې کیفیت او له غلطو ځوابونو سره سم چلند دی.

**مهم ټکي**

- له داسې کار پیل وکړئ چې AI یې کاروونکي ته ګړندی کوي، نه د «AI درلودلو» له یوې عمومي هیلې.
- ورېځني ماډلونه ډېر وړ دي؛ د وسیلې دننه ماډلونه ګړندي، ډېر خصوصي او د هرې کارونې لپاره وړیا دي، خو محدود دي.
- هېڅکله د اپلیکیشن له دننه د یوې پټې کلي سره مستقیم د AI چمتو کوونکي ته غوښتنه مه کوئ؛ غوښتنې د خپل سرور له لارې ولېږئ.
- د دري او پښتو کیفیت له ځایي ویونکو سره وازمویئ، ځکه چې د ماډل او کار له مخې توپیر لري.
- د کارونې پر بنسټ لګښتونو لپاره بودیجه کېږدئ، حدونه وټاکئ او د غلطو ځوابونو لپاره ډیزاین وکړئ.

**د AI کومې ځانګړتیاوې په رښتیا له کاروونکو سره مرسته کوي؟**

هغه ځانګړتیاوې چې تر ټولو ډېره مرسته کوي هغه دي چې ټایپ کول، لټون یا انتظار له داسې کار څخه لرې کوي چې کاروونکي یې له وړاندې کوي. هغه بڼې چې په ۲۰۲۶ کې ښه کار کوي:

- **په طبیعي ژبه لټون:** کاروونکی لیکي «تور بوټونه ۴۲ نمبر تر ۳٬۰۰۰ افغانیو لاندې» د دې پر ځای چې فلټرونه یو په یو وټاکي.
- **د ملاتړ مرستیال:** ستاسو د خپلو پالیسیو، عامو پوښتنو او د فرمایش د حالت په کارولو سره پوښتنو ته ځواب ورکوي.
- **لنډیزونه:** اوږده پیغامونه، راپورونه، نظرونه یا درسونه په څو اصلي ټکو کې لنډېږي.
- **د انځور پوهه:** د کمرې له لارې د رسیدونو، بلونو یا د محصولاتو د لیبلونو لوستل.
- **غږیز ورودي:** د ټایپ پر ځای د غوښتنې ویل، چې له هغو کاروونکو سره مرسته کوي چې له کیبورډ سره اسانه نه دي.
- **ژباړه:** د کاروونکو لخوا جوړې شوې منځپانګې لېږد د انګلیسي، دري او پښتو ترمنځ.
- **وړاندیزونه:** د کاروونکي د چلند پر بنسټ د محصولاتو، درسونو یا منځپانګې وړاندیز.
- **په لیکلو کې مرسته:** د آنلاین بازار په اپلیکیشن کې د پلورونکو لپاره د محصول د تشریح یا ځوابونو مسوده.

هغه ځانګړتیاوې چې په ندرت سره د خپل لګښت ارزښت لري یو عمومي چټ‌بوټ دی چې ستاسو معلوماتو ته لاسرسی نه لري، او د AI لخوا جوړ شوي انځورونه چې یوازې د نوښت لپاره اضافه شوي وي.

**د وسیلې دننه AI که ورېځنی AI: کوم یو وکاروو؟**

د وسیلې دننه AI د کوچنیو، تکراري یا د محرمیت له پلوه حساسو کارونو لپاره وکاروئ، او ورېځنی AI د پېچلي استدلال یا هغو کارونو لپاره چې ډېرې پوهې ته اړتیا لري. Apple او Google دواړه پروګرامرانو ته په نویو ټیلیفونونو کې د وسیلې دننه ماډلونو ته لاسرسی ورکوي، او کوچني خلاص ماډلونه هم د اپلیکیشن دننه ځای کېدای شي، خو د لوی ډاونلوډ په بیه.

- **د وسیلې دننه:** آفلاین کار کوي، د هرې غوښتنې لګښت نه لري او معلومات په ټیلیفون کې ساتي، خو وړتیا یې محدوده ده او ملاتړ یې په نوي هارډویر پورې تړلی دی.
- **ورېځنی:** تر ټولو قوي ماډلونه، په هر هغه ټیلیفون کې چې انټرنېټ لري شتون لري، خو هره غوښتنه لګښت لري، اتصال ته اړتیا لري او معلومات له وسیلې بهر لېږي.

په افغانستان کې ډېر کاروونکي زاړه یا منځني ټیلیفونونه لري، نو د وسیلې دننه ځانګړتیاوې ټولو ته نه رسېږي. ورېځنی بدیل پلان کړئ یا ځانګړتیا اختیاري کړئ. ترکیبي تګلاره، یعنې ساده کارونه په ټیلیفون کې او سخت کارونه په ورېځ کې، اوس عامه ده.

**AI څنګه په خوندي ډول اپلیکیشن ته اضافه کړو؟**

AI د اپلیکیشن او د AI چمتو کوونکي ترمنځ د خپل سرور په ځای کولو، او د هغه څه په محدودولو چې ماډل یې لیدلی او کولی شي، په خوندي ډول اضافه کوئ. یو عملي ترتیب:

1. کار، ورودي او تمه شوې پایله په دقیق ډول تعریف کړئ.
2. یو ماډل وټاکئ او په رښتینو مثالونو یې وازمویئ، په شمول د دري او پښتو ورودیو.
3. په سرور کې یو پای‌ټکی جوړ کړئ چې د API کلي وساتي، ستاسو لارښوونې اضافه کړي او چمتو کوونکي ته غوښتنه وکړي.
4. یوازې هغه معلومات ولېږئ چې کار ورته اړتیا لري، او تر هغه ځایه چې کولی شئ شخصي جزئیات لرې کړئ.
5. د هر کاروونکي لپاره د غوښتنو حد او د میاشتني لګښت سقف وټاکئ.
6. واقعي ځوابونه په خپلو معلوماتو ولاړ کړئ، نه د ماډل په عمومي پوهه.
7. غوښتنې او ځوابونه د خپل محرمیت د پالیسۍ په چوکاټ کې ثبت کړئ څو کیفیت وڅېړلی شئ.
8. کاروونکو ته لاره ورکړئ چې غلطه پایله راپور کړي او یو انسان ته لاسرسی ومومي.

هغه کلیګانې چې د اپلیکیشن دننه ځای کېږي د ایستلو وړ دي، نو هېڅکله باید هلته نه وي. زموږ لارښود د [موبایل اپلیکیشن د امنیت غوره کړنو](/blog/mobile-app-security-best-practices) په اړه یې علت په ډېرو جزئیاتو تشریح کوي.

**په دري او پښتو کې د AI کیفیت څومره ښه دی؟**

په دري کې د AI کیفیت د پام وړ ښه شوی، په داسې حال کې چې پښتو عموماً کمزورې او بې‌ثباته ده، او دواړه د ماډل او کار له مخې توپیر لري. لوی ماډلونه معمولاً دري پوښتنې ښې پوهېږي، خو کېدای شي د ایراني فارسي لغاتو لوري ته ولاړ شي. د پښتو پایله کېدای شي ګرامري تېروتنې او غیرطبیعي جمله‌بندي ولري، او د دواړو ژبو لپاره د وینا پېژندنه د انګلیسي په پرتله لږ پخه ده.

عملي مشورې:

- له پیل مخکې له ځایي ویونکو سره او په هغو پوښتنو ازموینه وکړئ چې رښتیني کاروونکي یې پوښتي
- په لارښوونو کې ماډل ته د لغاتو غوره‌توبونه او د ځوابونو مثالونه ورکړئ
- حیاتي متنونه لکه بیې، پالیسۍ او حقوقي شرایط له خپلو معلوماتو راوړئ، نه دا چې جوړ شي
- کله چې ځواب کافي ښه نه وي، کاروونکو ته اجازه ورکړئ چې انګلیسي ته واوړي یا له یو انسان سره اړیکه ونیسي

زموږ لارښود د [دري او پښتو په ژبه د AI چټ‌بوټ](/blog/ai-chatbot-website-dari-pashto) په اړه د ژبې اداره په ډېر ژور ډول څېړي.

**د AI ځوابونه څنګه دقیق وساتو؟**

ځوابونه د ماډل له خپلې منځپانګې سره د بیا ترلاسه کولو پر بنسټ تولید (RAG) له لارې په نښلولو دقیق ساتئ: اپلیکیشن ستاسو په اسنادو کې لټون کوي او اړونده برخې د پوښتنې سره یوځای ماډل ته ورکوي. دا کار جوړ شوي ځوابونه کموي او معلومات د ماډل له بیا روزلو پرته تازه ساتي. زموږ تشریح د [RAG چټ‌بوټونو](/blog/rag-knowledge-base-chatbot) په اړه ښيي چې دا طریقه څنګه کار کوي.

حتی د RAG سره هم، د تېروتنو لپاره ډیزاین وکړئ. وښایئ چې ځواب له کومه راغلی، د AI لخوا جوړ شوي ځوابونه په روښانه ډول نښه کړئ، او د کړنو لکه بیرته ورکړې، بکینګ یا لغوه کولو لپاره، د هر کار له ترسره کېدو مخکې له کاروونکي تایید واخلئ.

**د AI ځانګړتیاوو چلول څومره لګښت لري؟**

ورېځنی AI د کارونې پر بنسټ حسابېږي، نو لګښت د کاروونکو له شمېر او د هرې غوښتنې له اوږدوالي سره لوړېږي؛ د چمتو کوونکو بیې ډېرې بدلېږي، نو له پلان مخکې اوسنۍ نرخونه وګورئ. د لګښتونو د اټکل وړ ساتلو لارې:

- د ساده کارونو لپاره کوچني او ارزانه ماډلونه وکاروئ او لوی ماډلونه د سختو مواردو لپاره وساتئ
- د عامو پوښتنو ځوابونه وساتئ
- د خبرو اوږدوالی او د لېږل شوي شالیدي متن اندازه محدوده کړئ
- د هر کاروونکي لپاره ورځنی حد وټاکئ
- په لومړیو میاشتو کې هره اونۍ لګښتونه وڅېړئ

د اپلیکیشن پلورنځیو قواعد هم وګورئ. Google Play او App Store دواړه د AI لخوا جوړې شوې منځپانګې په اړه پالیسۍ لري، په شمول د دې تمې چې کاروونکي وکولی شي سپکاوی لرونکې پایله راپور کړي. له لېږلو مخکې یې اوسنۍ نسخې ولولئ؛ زموږ لارښود د [افغانستان څخه په Google Play کې د اپلیکیشن خپرول](/blog/publish-app-google-play-from-afghanistan) د لېږلو بهیر تشریح کوي.

**له شین سره کار وکړئ**

شین د اندرویډ او iOS اپلیکیشنونو ته د AI عملي ځانګړتیاوې اضافه کوي، له هوښیار لټون او د ملاتړ له مرستیالانو نیولې تر د اسنادو سکن پورې، د خوندي سرورونو او د دري، پښتو او انګلیسي له ملاتړ سره. زموږ [د موبایل اپلیکیشن جوړولو خدمت](/services/mobile-apps) او [د اتومات کولو خدمت](/services/automation) وګورئ، یا د info@sheen.af یا ‎+93 784 966 018 له لارې [موږ سره اړیکه ونیسئ](/contact).`
        },
        faqs: [
            {
                q: { en: "Can AI features be added to an app that already exists?", da: "آیا می‌توان ویژگی‌های هوش مصنوعی را به اپلیکیشنی که از قبل وجود دارد اضافه کرد؟", pa: "ایا د AI ځانګړتیاوې یو داسې اپلیکیشن ته اضافه کېدای شي چې له وړاندې شتون لري؟" },
                a: {
                    en: "Yes, in most cases. AI features are usually added as a new backend service that the existing app calls, plus new screens or buttons in the app. The main work is preparing your data, such as product information or help articles, building the secure server layer, and testing answer quality. A large redesign is rarely needed unless the app's current backend is very limited.",
                    da: "بله، در بیشتر موارد. ویژگی‌های هوش مصنوعی معمولاً به عنوان یک خدمت سرور تازه اضافه می‌شوند که اپلیکیشن موجود با آن تماس می‌گیرد، به اضافه صفحات یا دکمه‌های تازه در اپلیکیشن. کار اصلی آماده کردن داده‌های شما مانند معلومات محصولات یا مقالات راهنما، ساختن لایه امن سرور و آزمایش کیفیت پاسخ‌هاست. به ندرت به بازطراحی بزرگ نیاز است، مگر اینکه سرور فعلی اپلیکیشن بسیار محدود باشد.",
                    pa: "هو، په ډېرو مواردو کې. د AI ځانګړتیاوې معمولاً د یو نوي سرور خدمت په توګه اضافه کېږي چې موجود اپلیکیشن ورته غوښتنه کوي، او په اپلیکیشن کې نوې پاڼې یا تڼۍ. اصلي کار ستاسو د معلوماتو چمتو کول دي لکه د محصولاتو معلومات یا د مرستې مقالې، د سرور د خوندي پوړ جوړول او د ځوابونو د کیفیت ازموینه. په ندرت سره لوی بیا ډیزاین ته اړتیا وي، مګر دا چې د اپلیکیشن اوسنی سرور ډېر محدود وي."
                }
            },
            {
                q: { en: "Will AI features work when users are offline?", da: "آیا ویژگی‌های هوش مصنوعی وقتی کاربران آفلاین‌اند کار می‌کنند؟", pa: "ایا د AI ځانګړتیاوې هغه وخت کار کوي چې کاروونکي آفلاین وي؟" },
                a: {
                    en: "Only features that run on the device will work offline, such as some text recognition, simple classification or on-device language models on newer phones. Anything that uses a cloud model needs a connection. For users with unreliable internet, design AI features as helpful extras rather than required steps, and make sure the core task can still be completed without them.",
                    da: "تنها ویژگی‌هایی که روی دستگاه اجرا می‌شوند آفلاین کار می‌کنند، مانند برخی از تشخیص متن، دسته‌بندی ساده یا مدل‌های زبانی روی دستگاه در گوشی‌های جدیدتر. هر چیزی که از مدل ابری استفاده کند به اتصال نیاز دارد. برای کاربرانی که انترنت ناپایدار دارند، ویژگی‌های هوش مصنوعی را به عنوان امکانات کمکی طراحی کنید نه مراحل اجباری، و مطمئن شوید که کار اصلی بدون آن‌ها هم انجام‌پذیر است.",
                    pa: "یوازې هغه ځانګړتیاوې آفلاین کار کوي چې په وسیله کې چلېږي، لکه د متن ځینې پېژندنه، ساده ډلبندي یا په نویو ټیلیفونونو کې د وسیلې دننه ژبني ماډلونه. هر هغه څه چې ورېځنی ماډل کاروي اتصال ته اړتیا لري. د هغو کاروونکو لپاره چې بې‌ثباته انټرنېټ لري، د AI ځانګړتیاوې د مرستندویه امکاناتو په توګه ډیزاین کړئ نه د اجباري ګامونو په توګه، او ډاډ ترلاسه کړئ چې اصلي کار له هغو پرته هم ترسره کېدای شي."
                }
            },
            {
                q: { en: "Is user data safe when an app uses AI services?", da: "آیا داده‌های کاربران وقتی اپلیکیشن از خدمات هوش مصنوعی استفاده می‌کند امن است؟", pa: "ایا د کاروونکو معلومات هغه وخت خوندي دي چې اپلیکیشن د AI خدمتونه کاروي؟" },
                a: {
                    en: "It can be, if the app is designed carefully. Send only the data a task needs, remove personal details where possible, keep API keys on your server, and choose providers whose business terms state how they store and use submitted data. Explain AI data use in your privacy policy, and keep highly sensitive information, such as health or financial details, out of AI requests unless you have reviewed the risks.",
                    da: "می‌تواند امن باشد، اگر اپلیکیشن با دقت طراحی شود. تنها داده‌هایی را بفرستید که کار به آن نیاز دارد، جزئیات شخصی را تا جای ممکن حذف کنید، کلیدهای API را روی سرور خودتان نگه دارید، و ارائه‌دهندگانی را انتخاب کنید که شرایط تجاری‌شان مشخص می‌کند داده‌های ارسالی را چگونه ذخیره و استفاده می‌کنند. استفاده از داده‌ها برای AI را در پالیسی حریم خصوصی توضیح دهید، و معلومات بسیار حساس مانند جزئیات صحی یا مالی را از درخواست‌های AI دور نگه دارید، مگر اینکه خطرها را بررسی کرده باشید.",
                    pa: "خوندي کېدای شي، که اپلیکیشن په دقت ډیزاین شي. یوازې هغه معلومات ولېږئ چې کار ورته اړتیا لري، شخصي جزئیات تر وسه لرې کړئ، د API کلیګانې په خپل سرور کې وساتئ، او هغه چمتو کوونکي وټاکئ چې سوداګریز شرایط یې روښانه کوي چې لېږل شوي معلومات څنګه ساتي او کاروي. د AI لپاره د معلوماتو کارول د خپل محرمیت په پالیسۍ کې تشریح کړئ، او ډېر حساس معلومات لکه روغتیایي یا مالي جزئیات د AI له غوښتنو لرې وساتئ، مګر دا چې خطرونه مو څېړلي وي."
                }
            },
            {
                q: { en: "Do I need to tell users that a feature uses AI?", da: "آیا باید به کاربران بگویم که یک ویژگی از هوش مصنوعی استفاده می‌کند؟", pa: "ایا باید کاروونکو ته ووایم چې یوه ځانګړتیا AI کاروي؟" },
                a: {
                    en: "It is good practice and increasingly expected. Labelling AI-generated answers helps users judge how much to trust them, and app store policies and privacy laws in some markets, including the EU, require transparency about AI and data use in certain cases. A short label, a note in your privacy policy and a way to reach a human are a sensible baseline.",
                    da: "این یک روش خوب است و روز به روز بیشتر انتظار می‌رود. علامت‌گذاری پاسخ‌های تولیدشده با AI به کاربران کمک می‌کند تشخیص دهند چقدر به آن‌ها اعتماد کنند، و پالیسی‌های فروشگاه‌های اپلیکیشن و قوانین حریم خصوصی در برخی بازارها، از جمله اتحادیه اروپا، در موارد خاص شفافیت درباره AI و استفاده از داده‌ها را لازم می‌دانند. یک برچسب کوتاه، یک یادداشت در پالیسی حریم خصوصی و راهی برای تماس با یک انسان، حداقل معقول است.",
                    pa: "دا ښه کړنه ده او ورځ تر بلې ډېره تمه ترې کېږي. د AI لخوا جوړ شویو ځوابونو نښه کول له کاروونکو سره مرسته کوي چې پرېکړه وکړي پرې څومره باور وکړي، او د اپلیکیشن پلورنځیو پالیسۍ او په ځینو بازارونو کې د محرمیت قوانین، په شمول د اروپايي اتحادیې، په ځینو مواردو کې د AI او معلوماتو د کارونې په اړه روڼتیا غواړي. یو لنډ لیبل، د محرمیت په پالیسۍ کې یو یادښت او له یو انسان سره د اړیکې لاره یو معقول لږ تر لږه حد دی."
                }
            }
        ],
        category: "mobile-apps",
        author: "Layla Wakily",
        date: "2026-10-04",
        updated: "2026-10-04",
        readTime: "5 min read",
        image: "/logo.png",
        tags: ["ai mobile app features", "AI in mobile apps 2026", "on-device AI", "AI chatbot app", "RAG", "Dari Pashto AI", "app development Afghanistan"]
    },
    {
        id: "102",
        slug: "publish-app-google-play-from-afghanistan",
        title: {
            en: "Publish an App on Google Play and the App Store from Afghanistan",
            da: "نشر اپلیکیشن در Google Play و App Store از افغانستان",
            pa: "له افغانستان څخه په Google Play او App Store کې د اپلیکیشن خپرول"
        },
        excerpt: {
            en: "How to publish an app on Google Play and the App Store from Afghanistan: accounts, fees, verification, testing rules, store policies and rejection reasons.",
            da: "چگونه از افغانستان اپلیکیشن را در Google Play و App Store نشر کنیم: حساب‌ها، فیس‌ها، تأیید هویت، قواعد آزمایش، پالیسی‌های فروشگاه و دلایل رایج رد شدن.",
            pa: "له افغانستان څخه په Google Play او App Store کې اپلیکیشن څنګه خپور کړو: حسابونه، فیسونه، د هویت تایید، د ازموینې قواعد، د پلورنځي پالیسۍ او د ردېدو عام لاملونه."
        },
        content: {
            en: `To publish an app on Google Play from Afghanistan, you need a Google Play developer account, a signed Android App Bundle, a privacy policy, a completed store listing and policy forms, and, for new personal accounts, a closed test with real testers before production access. The App Store adds an annual Apple Developer Program membership, a build made with Xcode and a stricter human review. For Afghan businesses the hard parts are usually account registration, paying fees and identity verification, not the technical steps.

**Key Takeaways**

- Google Play charges a one-time registration fee; the Apple Developer Program is an annual membership.
- Register in the name of whoever owns the app, and keep the login yourself rather than leaving it with a developer.
- New personal Google Play accounts must complete closed testing before going live; organisation accounts need documents such as a D-U-N-S number.
- Both stores require a privacy policy, accurate data disclosures and in-app account deletion if users can sign up.
- Free apps, and apps selling physical goods or real-world services, are far simpler to publish than apps selling digital content.

**Personal or Organisation Account: Which Should You Choose?**

Choose an organisation account if the app represents a business, because it shows your company as the publisher and avoids some requirements placed on new personal accounts. Organisation accounts on both stores generally need a registered legal entity and a D-U-N-S number, a free business identifier issued by Dun & Bradstreet, along with a website and verifiable contact details.

A personal account is quicker to open and suits individual developers or early experiments, but your own name appears as the developer, and Google applies extra testing rules to new personal accounts.

Whichever you choose, the account should belong to the app's owner. A common problem is a freelancer publishing a client's app under the freelancer's account; moving it later is possible but slow, and until then the business does not control its own app.

**What Are the Challenges for Publishers in Afghanistan?**

The main challenges are paying the fees, passing identity verification and, for paid apps, receiving payouts. Fees are paid by international card, which many people inside Afghanistan do not have. Verification may require official ID and documents whose name and address exactly match the account. Google and Apple set which countries are supported for developer registration and for merchant payouts, and those lists can change, so check the current versions before you begin.

Approaches Afghan businesses use:

- Start with a free app. Apps that sell physical goods or real-world services, such as deliveries, bookings or in-person courses, can generally take payment outside the store's billing system, so no store merchant account is needed.
- Businesses run by Afghans abroad that have a registered company in Europe, North America or Australia can open the organisation account there, as long as every detail is genuine.
- Never borrow someone else's identity or account. Stores close accounts for misrepresentation, and you can lose the app and its reviews.

**How Do You Publish on Google Play Step by Step?**

Publishing on Google Play follows a fixed sequence in the Play Console:

1. Create the developer account, pay the one-time fee (25 US dollars at the time of writing) and complete identity verification.
2. Create the app in the Play Console: name, default language, and free or paid.
3. Build a signed Android App Bundle that targets the API level Google currently requires, and use Play App Signing.
4. Prepare the store listing: title, short and full description, icon, feature graphic and screenshots. Add Dari and Pashto translations if you target users in Afghanistan.
5. Complete the policy sections: privacy policy link, Data safety form, content rating questionnaire, target audience and ads declaration.
6. Run internal testing, then closed testing. New personal accounts must run a closed test with a minimum number of testers for a set period, at the time of writing 12 testers for 14 continuous days, before applying for production access.
7. Submit for review and release to production, ideally as a staged rollout to a percentage of users first.

**How Do You Publish on the Apple App Store?**

App Store publishing goes through App Store Connect and requires an Apple Developer Program membership, which costs 99 US dollars a year at the time of writing and must be renewed. The app must be built with Xcode on a Mac, or by a cloud build service, which is common for React Native and Flutter projects.

The usual steps:

1. Enrol in the Apple Developer Program as an individual or an organisation.
2. Create the app record in App Store Connect and set the bundle ID, price and availability.
3. Upload a build and test it with TestFlight.
4. Complete the App Privacy details, age rating, description and screenshots for the required device sizes.
5. Provide a demo account for reviewers if the app needs a login.
6. Submit for App Review.

Apple's reviewers test apps by hand against the App Review Guidelines. Common rejection reasons include crashes, broken links, placeholder content, a missing demo login, apps that are only a wrapped website with little added value, and incomplete privacy information.

**Which Store Policies Catch First-Time Publishers?**

Several policy requirements catch first-time publishers on both stores:

- **Privacy policy:** it must be on a public web page and match what the app really collects.
- **Account deletion:** if users can create an account, they must be able to start deleting it from inside the app.
- **Permissions:** ask for location, camera or contacts only when needed, and explain why.
- **Payments:** digital content usually has to use the store's billing; physical goods and real-world services usually do not.
- **User content and AI:** apps with chat, posts or generative AI need reporting and moderation tools.
- **Accurate listings:** screenshots and descriptions must reflect the real app.

Security problems can also lead to removal, and users lose trust quickly when data leaks. Our guide to [mobile app security best practices](/blog/mobile-app-security-best-practices) covers the basics to check before submission.

**What Happens After Your App Is Live?**

After launch, the work shifts to visibility, ratings and updates. Improve your listing with relevant keywords and clear screenshots, as explained in our [app store optimization guide](/blog/app-store-optimization-aso-guide). Reply to reviews, watch crash reports in the Play Console and App Store Connect, and ship updates regularly. Google raises the required target API level every year, and apps that fall behind can stop being offered to users on newer Android versions.

If you are still deciding what the first release should contain, our guide to [MVP app development](/blog/mvp-app-development-guide) helps you keep version one small enough to reach the stores quickly.

**Work With Sheen**

Sheen's mobile team guides Afghan businesses and diaspora founders through the whole process: account setup, builds, store listings in English, Dari and Pashto, policy forms and responses to reviewers. See our [mobile app development service](/services/mobile-apps) or [contact us](/contact) at info@sheen.af or +93 784 966 018.`,
            da: `برای نشر اپلیکیشن در Google Play از افغانستان، به یک حساب برنامه‌نویس Google Play، یک Android App Bundle امضاشده، یک پالیسی حریم خصوصی، صفحه فروشگاه و فورم‌های پالیسی تکمیل‌شده، و برای حساب‌های شخصی تازه، یک آزمایش بسته با آزمایش‌کنندگان واقعی پیش از دسترسی به نشر عمومی نیاز دارید. App Store علاوه بر این به عضویت سالانه در Apple Developer Program، یک نسخه ساخته‌شده با Xcode و بررسی انسانی سخت‌گیرانه‌تر نیاز دارد. برای تجارت‌های افغان، بخش‌های دشوار معمولاً ثبت حساب، پرداخت فیس‌ها و تأیید هویت است، نه مراحل فنی.

**نکات کلیدی**

- Google Play یک فیس ثبت یک‌باره می‌گیرد؛ Apple Developer Program یک عضویت سالانه است.
- حساب را به نام مالک اپلیکیشن ثبت کنید و اطلاعات ورود را خودتان نگه دارید، نه اینکه نزد برنامه‌نویس بماند.
- حساب‌های شخصی تازه در Google Play باید پیش از نشر عمومی آزمایش بسته را کامل کنند؛ حساب‌های سازمانی به اسنادی مانند شماره D-U-N-S نیاز دارند.
- هر دو فروشگاه پالیسی حریم خصوصی، افشای دقیق استفاده از داده‌ها و امکان حذف حساب در داخل اپلیکیشن را، اگر کاربران بتوانند ثبت‌نام کنند، لازم می‌دانند.
- نشر اپلیکیشن‌های رایگان، و اپلیکیشن‌هایی که کالای فزیکی یا خدمات واقعی می‌فروشند، بسیار ساده‌تر از اپلیکیشن‌هایی است که محتوای دیجیتل می‌فروشند.

**حساب شخصی یا سازمانی: کدام را انتخاب کنیم؟**

اگر اپلیکیشن نماینده یک تجارت است، حساب سازمانی را انتخاب کنید، زیرا نام شرکت شما را به عنوان ناشر نشان می‌دهد و از برخی الزاماتی که برای حساب‌های شخصی تازه وضع شده جلوگیری می‌کند. حساب‌های سازمانی در هر دو فروشگاه عموماً به یک نهاد حقوقی ثبت‌شده و یک شماره D-U-N-S نیاز دارند، که یک شناسه تجاری رایگان صادرشده توسط Dun & Bradstreet است، همراه با یک ویب‌سایت و معلومات تماس قابل تأیید.

حساب شخصی سریع‌تر باز می‌شود و برای برنامه‌نویسان انفرادی یا آزمایش‌های اولیه مناسب است، اما نام خود شما به عنوان برنامه‌نویس نمایش داده می‌شود، و Google قواعد آزمایش اضافی را برای حساب‌های شخصی تازه اعمال می‌کند.

هر کدام را انتخاب کنید، حساب باید به مالک اپلیکیشن تعلق داشته باشد. یک مشکل رایج این است که یک برنامه‌نویس آزادکار اپلیکیشن مشتری را زیر حساب خودش نشر می‌کند؛ انتقال آن بعداً ممکن است اما کند است، و تا آن زمان تجارت کنترل اپلیکیشن خود را ندارد.

**چالش‌های نشرکنندگان در افغانستان کدام‌اند؟**

چالش‌های اصلی پرداخت فیس‌ها، گذشتن از تأیید هویت و، برای اپلیکیشن‌های پولی، دریافت درآمد است. فیس‌ها با کارت بین‌المللی پرداخت می‌شوند، که بسیاری از مردم در داخل افغانستان ندارند. تأیید هویت ممکن است به اسناد رسمی هویتی و مدارکی نیاز داشته باشد که نام و آدرس آن‌ها دقیقاً با حساب مطابقت کند. Google و Apple تعیین می‌کنند کدام کشورها برای ثبت برنامه‌نویس و دریافت درآمد فروشنده پشتیبانی می‌شوند، و این فهرست‌ها ممکن است تغییر کنند، پس پیش از شروع نسخه‌های فعلی را بررسی کنید.

رویکردهایی که تجارت‌های افغان استفاده می‌کنند:

- با یک اپلیکیشن رایگان شروع کنید. اپلیکیشن‌هایی که کالای فزیکی یا خدمات واقعی می‌فروشند، مانند تحویل، رزرو یا کورس‌های حضوری، عموماً می‌توانند پرداخت را بیرون از سیستم پرداخت فروشگاه دریافت کنند، پس به حساب فروشنده در فروشگاه نیازی نیست.
- تجارت‌هایی که توسط افغان‌های مقیم خارج اداره می‌شوند و یک شرکت ثبت‌شده در اروپا، امریکای شمالی یا آسترالیا دارند، می‌توانند حساب سازمانی را همان‌جا باز کنند، به شرطی که همه جزئیات واقعی باشد.
- هرگز هویت یا حساب کس دیگری را قرض نگیرید. فروشگاه‌ها حساب‌ها را به دلیل ارائه معلومات نادرست می‌بندند، و ممکن است اپلیکیشن و نظرات آن را از دست بدهید.

**چگونه گام به گام در Google Play نشر کنیم؟**

نشر در Google Play در Play Console یک ترتیب ثابت دارد:

1. حساب برنامه‌نویس را بسازید، فیس یک‌باره (در زمان نگارش این مطلب ۲۵ دالر امریکایی) را بپردازید و تأیید هویت را کامل کنید.
2. اپلیکیشن را در Play Console بسازید: نام، زبان پیش‌فرض، و رایگان یا پولی بودن.
3. یک Android App Bundle امضاشده بسازید که سطح API مورد نیاز فعلی Google را هدف بگیرد، و از Play App Signing استفاده کنید.
4. صفحه فروشگاه را آماده کنید: عنوان، توضیح کوتاه و کامل، آیکن، تصویر ویژه و تصاویر صفحه. اگر کاربران داخل افغانستان را هدف گرفته‌اید، ترجمه‌های دری و پشتو را اضافه کنید.
5. بخش‌های پالیسی را تکمیل کنید: لینک پالیسی حریم خصوصی، فورم Data safety، پرسشنامه رده‌بندی محتوا، مخاطبان هدف و اعلام اعلانات.
6. اول آزمایش داخلی و سپس آزمایش بسته را اجرا کنید. حساب‌های شخصی تازه باید پیش از درخواست دسترسی به نشر عمومی، یک آزمایش بسته با حداقل تعداد آزمایش‌کننده برای مدت مشخصی اجرا کنند؛ در زمان نگارش این مطلب، ۱۲ آزمایش‌کننده برای ۱۴ روز پیاپی.
7. برای بررسی ارسال کنید و به نشر عمومی برسانید، ترجیحاً به صورت تدریجی و اول برای درصدی از کاربران.

**چگونه در Apple App Store نشر کنیم؟**

نشر در App Store از طریق App Store Connect انجام می‌شود و به عضویت در Apple Developer Program نیاز دارد، که در زمان نگارش این مطلب سالانه ۹۹ دالر امریکایی است و باید تمدید شود. اپلیکیشن باید با Xcode روی یک Mac ساخته شود، یا توسط یک خدمت ساخت ابری، که برای پروژه‌های React Native و Flutter رایج است.

مراحل معمول:

1. به عنوان فرد یا سازمان در Apple Developer Program ثبت‌نام کنید.
2. رکورد اپلیکیشن را در App Store Connect بسازید و bundle ID، قیمت و دسترس‌پذیری را تنظیم کنید.
3. یک نسخه آپلود کنید و آن را با TestFlight آزمایش کنید.
4. جزئیات App Privacy، رده سنی، توضیحات و تصاویر صفحه را برای اندازه‌های لازم دستگاه‌ها تکمیل کنید.
5. اگر اپلیکیشن به ورود نیاز دارد، یک حساب نمایشی برای بررسی‌کنندگان فراهم کنید.
6. برای App Review ارسال کنید.

بررسی‌کنندگان Apple اپلیکیشن‌ها را دستی و بر اساس App Review Guidelines آزمایش می‌کنند. دلایل رایج رد شدن شامل خراب شدن اپلیکیشن، لینک‌های خراب، محتوای موقتی، نبود حساب نمایشی، اپلیکیشن‌هایی که تنها یک ویب‌سایت بسته‌بندی‌شده با ارزش افزوده کم‌اند، و معلومات ناقص حریم خصوصی است.

**کدام پالیسی‌های فروشگاه نشرکنندگان تازه‌کار را گیر می‌اندازند؟**

چند الزام پالیسی در هر دو فروشگاه نشرکنندگان تازه‌کار را گیر می‌اندازد:

- **پالیسی حریم خصوصی:** باید روی یک صفحه عمومی وب باشد و با آنچه اپلیکیشن واقعاً جمع‌آوری می‌کند مطابقت داشته باشد.
- **حذف حساب:** اگر کاربران می‌توانند حساب بسازند، باید بتوانند حذف آن را از داخل اپلیکیشن آغاز کنند.
- **دسترسی‌ها:** موقعیت مکانی، کمره یا مخاطبین را تنها هنگام نیاز درخواست کنید و دلیل آن را توضیح دهید.
- **پرداخت‌ها:** محتوای دیجیتل معمولاً باید از سیستم پرداخت فروشگاه استفاده کند؛ کالای فزیکی و خدمات واقعی معمولاً نه.
- **محتوای کاربران و AI:** اپلیکیشن‌های دارای چت، پست یا هوش مصنوعی تولیدی به ابزارهای گزارش‌دهی و نظارت نیاز دارند.
- **صفحات دقیق فروشگاه:** تصاویر و توضیحات باید اپلیکیشن واقعی را نشان دهند.

مشکلات امنیتی هم می‌تواند به حذف اپلیکیشن منجر شود، و کاربران وقتی داده‌ها افشا شوند به سرعت اعتماد خود را از دست می‌دهند. راهنمای ما درباره [بهترین شیوه‌های امنیت اپلیکیشن موبایل](/blog/mobile-app-security-best-practices) اصول پایه‌ای را که باید پیش از ارسال بررسی کنید پوشش می‌دهد.

**پس از نشر اپلیکیشن چه اتفاقی می‌افتد؟**

پس از راه‌اندازی، کار به سمت دیده شدن، امتیازها و به‌روزرسانی‌ها می‌رود. صفحه فروشگاه خود را با کلمات کلیدی مرتبط و تصاویر روشن بهتر کنید، همان‌طور که در [راهنمای بهینه‌سازی فروشگاه اپلیکیشن](/blog/app-store-optimization-aso-guide) ما توضیح داده شده است. به نظرات پاسخ دهید، گزارش‌های خرابی را در Play Console و App Store Connect دنبال کنید و به طور منظم به‌روزرسانی منتشر کنید. Google هر سال سطح API هدف مورد نیاز را بالا می‌برد، و اپلیکیشن‌هایی که عقب بمانند ممکن است دیگر به کاربران نسخه‌های جدیدتر اندروید پیشنهاد نشوند.

اگر هنوز تصمیم می‌گیرید که نسخه اول چه چیزهایی داشته باشد، راهنمای ما درباره [ساخت اپلیکیشن MVP](/blog/mvp-app-development-guide) به شما کمک می‌کند نسخه اول را به اندازه کافی کوچک نگه دارید تا سریع به فروشگاه‌ها برسد.

**با شین کار کنید**

تیم موبایل شین تجارت‌های افغان و بنیان‌گذاران مهاجر را در تمام این روند راهنمایی می‌کند: تنظیم حساب، ساخت نسخه‌ها، صفحات فروشگاه به انگلیسی، دری و پشتو، فورم‌های پالیسی و پاسخ به بررسی‌کنندگان. [خدمات ساخت اپلیکیشن موبایل](/services/mobile-apps) ما را ببینید یا از طریق info@sheen.af یا ‎+93 784 966 018 [با ما تماس بگیرید](/contact).`,
            pa: `له افغانستان څخه په Google Play کې د اپلیکیشن د خپرولو لپاره، د Google Play د پروګرامر حساب، لاسلیک شوی Android App Bundle، د محرمیت پالیسي، بشپړه شوې د پلورنځي پاڼه او د پالیسۍ فورمونه، او د نویو شخصي حسابونو لپاره، د عمومي خپرېدو له لاسرسي مخکې له رښتینو ازموونکو سره تړلې ازموینې ته اړتیا لرئ. App Store پر دې سربېره د Apple Developer Program کلنۍ غړیتوب، په Xcode جوړې شوې نسخې او سختې انساني بیاکتنې ته اړتیا لري. د افغان سوداګریو لپاره سختې برخې معمولاً د حساب ثبتول، د فیسونو ورکول او د هویت تایید دي، نه تخنیکي ګامونه.

**مهم ټکي**

- Google Play یو ځلی د ثبت فیس اخلي؛ Apple Developer Program کلنی غړیتوب دی.
- حساب د اپلیکیشن د مالک په نوم ثبت کړئ او د ننوتلو معلومات پخپله وساتئ، نه دا چې له پروګرامر سره پاتې شي.
- په Google Play کې نوي شخصي حسابونه باید له عمومي خپرېدو مخکې تړلې ازموینه بشپړه کړي؛ سازماني حسابونه اسنادو ته اړتیا لري لکه D-U-N-S شمېره.
- دواړه پلورنځي د محرمیت پالیسي، د معلوماتو د کارونې دقیق افشا، او که کاروونکي نوم‌لیکنه کولی شي، د اپلیکیشن دننه د حساب د ړنګولو امکان غواړي.
- وړیا اپلیکیشنونه، او هغه اپلیکیشنونه چې فزیکي توکي یا رښتیني خدمتونه پلوري، د هغو اپلیکیشنونو په پرتله چې ډیجیټل منځپانګه پلوري، خپرول یې ډېر اسانه دي.

**شخصي که سازماني حساب: کوم یو وټاکو؟**

که اپلیکیشن د یوې سوداګرۍ استازیتوب کوي، سازماني حساب وټاکئ، ځکه چې ستاسو د شرکت نوم د خپروونکي په توګه ښيي او د هغو ځینو اړتیاوو مخه نیسي چې د نویو شخصي حسابونو لپاره ټاکل شوې. په دواړو پلورنځیو کې سازماني حسابونه عموماً یو ثبت شوي حقوقي ارګان او یوې D-U-N-S شمېرې ته اړتیا لري، چې د Dun & Bradstreet لخوا ورکړل شوې وړیا سوداګریزه پېژندنه ده، له یو وېب‌سایټ او د تایید وړ اړیکو معلوماتو سره.

شخصي حساب ګړندی پرانیستل کېږي او د انفرادي پروګرامرانو یا لومړنیو ازموینو لپاره مناسب دی، خو ستاسو خپل نوم د پروګرامر په توګه ښکاري، او Google د نویو شخصي حسابونو لپاره د ازموینې اضافي قواعد پلي کوي.

هر یو چې وټاکئ، حساب باید د اپلیکیشن مالک ته ورپورې اړه ولري. یوه عامه ستونزه دا ده چې یو آزاد پروګرامر د پېرودونکي اپلیکیشن د خپل حساب لاندې خپروي؛ وروسته یې لېږدول ممکن دي خو ورو دي، او تر هغه وخته سوداګري پر خپل اپلیکیشن کنټرول نه لري.

**په افغانستان کې د خپروونکو ننګونې کومې دي؟**

اصلي ننګونې د فیسونو ورکول، د هویت له تایید تېرېدل او، د پیسو لرونکو اپلیکیشنونو لپاره، د عاید ترلاسه کول دي. فیسونه د نړیوال کارت په واسطه ورکول کېږي، چې د افغانستان دننه ډېر خلک یې نه لري. د هویت تایید کېدای شي رسمي پېژند پاڼې او داسې اسنادو ته اړتیا ولري چې نوم او پته یې په دقیق ډول له حساب سره سمون ولري. Google او Apple ټاکي چې کوم هېوادونه د پروګرامر د ثبت او د پلورونکي د عاید ترلاسه کولو لپاره ملاتړ کېږي، او دا لړلیکونه کېدای شي بدل شي، نو له پیل مخکې یې اوسنۍ نسخې وګورئ.

هغه تګلارې چې افغان سوداګرۍ یې کاروي:

- له یو وړیا اپلیکیشن پیل وکړئ. هغه اپلیکیشنونه چې فزیکي توکي یا رښتیني خدمتونه پلوري، لکه سپارل، بکینګ یا حضوري کورسونه، عموماً کولی شي تادیه د پلورنځي د تادیې له سیستم بهر ترلاسه کړي، نو په پلورنځي کې د پلورونکي حساب ته اړتیا نشته.
- هغه سوداګرۍ چې په بهر کې مېشت افغانان یې چلوي او په اروپا، شمالي امریکا یا اسټرالیا کې ثبت شوی شرکت لري، کولی شي سازماني حساب هلته پرانیزي، په دې شرط چې ټول جزئیات رښتیني وي.
- هېڅکله د بل چا هویت یا حساب په پور مه اخلئ. پلورنځي حسابونه د غلطو معلوماتو د وړاندې کولو له امله تړي، او کېدای شي اپلیکیشن او د هغه نظرونه له لاسه ورکړئ.

**په Google Play کې څنګه ګام په ګام خپرول وکړو؟**

په Google Play کې خپرول په Play Console کې یو ثابت ترتیب لري:

1. د پروګرامر حساب جوړ کړئ، یو ځلی فیس (د دې لیکنې پر مهال ۲۵ امریکايي ډالره) ورکړئ او د هویت تایید بشپړ کړئ.
2. اپلیکیشن په Play Console کې جوړ کړئ: نوم، اصلي ژبه، او وړیا یا د پیسو لرونکی.
3. یو لاسلیک شوی Android App Bundle جوړ کړئ چې د Google اوسنۍ اړینه API کچه په نښه کړي، او Play App Signing وکاروئ.
4. د پلورنځي پاڼه چمتو کړئ: سرلیک، لنډ او بشپړ تشریح، آیکون، ځانګړی انځور او د پاڼې انځورونه. که د افغانستان دننه کاروونکي مو هدف وي، دري او پښتو ژباړې اضافه کړئ.
5. د پالیسۍ برخې بشپړې کړئ: د محرمیت د پالیسۍ لینک، د Data safety فورم، د منځپانګې د درجه‌بندۍ پوښتنلیک، هدف مخاطبین او د اعلاناتو اعلان.
6. لومړی داخلي ازموینه او بیا تړلې ازموینه وچلوئ. نوي شخصي حسابونه باید د عمومي خپرېدو د لاسرسي له غوښتنې مخکې، د ټاکلې مودې لپاره له لږ تر لږه شمېر ازموونکو سره تړلې ازموینه وچلوي؛ د دې لیکنې پر مهال، ۱۲ ازموونکي د ۱۴ پرلپسې ورځو لپاره.
7. د بیاکتنې لپاره یې ولېږئ او عمومي خپرېدو ته یې ورسوئ، غوره دا ده چې په تدریجي ډول او لومړی د کاروونکو یوې سلنې ته.

**په Apple App Store کې څنګه خپرول وکړو؟**

په App Store کې خپرول د App Store Connect له لارې ترسره کېږي او د Apple Developer Program غړیتوب ته اړتیا لري، چې د دې لیکنې پر مهال په کال کې ۹۹ امریکايي ډالره دی او باید تمدید شي. اپلیکیشن باید په یو Mac کې د Xcode په واسطه جوړ شي، یا د یو ورېځني جوړونې خدمت لخوا، چې د React Native او Flutter پروژو لپاره عام دی.

معمول ګامونه:

1. د یو فرد یا سازمان په توګه په Apple Developer Program کې نوم‌لیکنه وکړئ.
2. په App Store Connect کې د اپلیکیشن ریکارډ جوړ کړئ او bundle ID، بیه او شتون تنظیم کړئ.
3. یوه نسخه اپلوډ کړئ او د TestFlight سره یې وازمویئ.
4. د App Privacy جزئیات، د عمر درجه، تشریح او د اړینو وسیلو د اندازو لپاره د پاڼې انځورونه بشپړ کړئ.
5. که اپلیکیشن ننوتلو ته اړتیا لري، د بیاکتونکو لپاره یو نمایشي حساب برابر کړئ.
6. د App Review لپاره یې ولېږئ.

د Apple بیاکتونکي اپلیکیشنونه په لاس او د App Review Guidelines پر بنسټ ازمويي. د ردېدو عام لاملونه دا دي: د اپلیکیشن ماتېدل، مات لینکونه، لنډمهاله منځپانګه، د نمایشي حساب نشتوالی، هغه اپلیکیشنونه چې یوازې یو بسته‌بندي شوی وېب‌سایټ وي او لږ اضافي ارزښت لري، او د محرمیت نیمګړي معلومات.

**د پلورنځي کومې پالیسۍ نوي خپروونکي ګیروي؟**

په دواړو پلورنځیو کې څو پالیسي اړتیاوې نوي خپروونکي ګیروي:

- **د محرمیت پالیسي:** باید په یوه عامه وېب پاڼه کې وي او له هغه څه سره سمون ولري چې اپلیکیشن په رښتیا راټولوي.
- **د حساب ړنګول:** که کاروونکي حساب جوړولی شي، باید وکولی شي د هغه ړنګول د اپلیکیشن له دننه پیل کړي.
- **اجازې:** موقعیت، کمره یا اړیکې یوازې د اړتیا پر مهال وغواړئ او علت یې تشریح کړئ.
- **تادیې:** ډیجیټل منځپانګه معمولاً باید د پلورنځي د تادیې سیستم وکاروي؛ فزیکي توکي او رښتیني خدمتونه معمولاً نه.
- **د کاروونکو منځپانګه او AI:** هغه اپلیکیشنونه چې چټ، پوسټونه یا تولیدي AI لري د راپور ورکولو او څارنې وسایلو ته اړتیا لري.
- **دقیقې د پلورنځي پاڼې:** انځورونه او تشریحات باید رښتینی اپلیکیشن وښيي.

امنیتي ستونزې هم کېدای شي د اپلیکیشن د لرې کېدو لامل شي، او کله چې معلومات افشا شي کاروونکي ژر باور له لاسه ورکوي. زموږ لارښود د [موبایل اپلیکیشن د امنیت غوره کړنو](/blog/mobile-app-security-best-practices) په اړه هغه بنسټیز ټکي پوښي چې باید له لېږلو مخکې یې وګورئ.

**کله چې اپلیکیشن خپور شي څه پېښېږي؟**

له پیل وروسته، کار د لیدل کېدو، نمرو او تازه کولو لوري ته ځي. د پلورنځي خپله پاڼه له اړوندو کلیدي کلمو او روښانه انځورونو سره ښه کړئ، لکه څنګه چې زموږ په [د اپلیکیشن پلورنځي د غوره کولو لارښود](/blog/app-store-optimization-aso-guide) کې تشریح شوي. نظرونو ته ځواب ورکړئ، د خرابۍ راپورونه په Play Console او App Store Connect کې وڅارئ، او په منظم ډول تازه نسخې خپرې کړئ. Google هر کال اړینه هدف API کچه لوړوي، او هغه اپلیکیشنونه چې شاته پاتې شي کېدای شي نور د اندرویډ د نویو نسخو کاروونکو ته وړاندې نه شي.

که لا هم پرېکړه کوئ چې لومړۍ نسخه باید څه ولري، زموږ لارښود د [MVP اپلیکیشن جوړولو](/blog/mvp-app-development-guide) په اړه درسره مرسته کوي چې لومړۍ نسخه دومره کوچنۍ وساتئ چې ژر پلورنځیو ته ورسېږي.

**له شین سره کار وکړئ**

د شین موبایل ټیم افغان سوداګرۍ او په بهر کې مېشت بنسټ‌ایښودونکي په دې ټول بهیر کې لارښوونه کوي: د حساب تنظیم، د نسخو جوړول، په انګلیسي، دري او پښتو د پلورنځي پاڼې، د پالیسۍ فورمونه او بیاکتونکو ته ځوابونه. زموږ [د موبایل اپلیکیشن جوړولو خدمت](/services/mobile-apps) وګورئ یا د info@sheen.af یا ‎+93 784 966 018 له لارې [موږ سره اړیکه ونیسئ](/contact).`
        },
        faqs: [
            {
                q: { en: "How much does it cost to publish an app on Google Play and the App Store?", da: "نشر اپلیکیشن در Google Play و App Store چقدر هزینه دارد؟", pa: "په Google Play او App Store کې د اپلیکیشن خپرول څومره لګښت لري؟" },
                a: {
                    en: "At the time of writing, Google Play charges a one-time registration fee of 25 US dollars, and the Apple Developer Program costs 99 US dollars per year. Both are paid by international card. Stores also take a commission on paid apps and in-app purchases of digital content. Development, design, testing and ongoing updates are separate costs and usually far larger than the store fees themselves.",
                    da: "در زمان نگارش این مطلب، Google Play یک فیس ثبت یک‌باره ۲۵ دالر امریکایی می‌گیرد، و Apple Developer Program سالانه ۹۹ دالر امریکایی هزینه دارد. هر دو با کارت بین‌المللی پرداخت می‌شوند. فروشگاه‌ها از اپلیکیشن‌های پولی و خریدهای داخل اپ برای محتوای دیجیتل هم کمیشن می‌گیرند. ساخت، طراحی، آزمایش و به‌روزرسانی‌های مداوم هزینه‌های جداگانه‌اند و معمولاً بسیار بیشتر از خود فیس‌های فروشگاه‌اند.",
                    pa: "د دې لیکنې پر مهال، Google Play یو ځلی د ثبت ۲۵ امریکايي ډالره فیس اخلي، او Apple Developer Program په کال کې ۹۹ امریکايي ډالره لګښت لري. دواړه د نړیوال کارت په واسطه ورکول کېږي. پلورنځي د پیسو لرونکو اپلیکیشنونو او د ډیجیټل منځپانګې د اپ دننه پېرودونو څخه کمیشن هم اخلي. جوړول، ډیزاین، ازموینه او دوامداره تازه کول بېل لګښتونه دي او معمولاً د پلورنځي له فیسونو ډېر زیات وي."
                }
            },
            {
                q: { en: "How long does app store review take?", da: "بررسی فروشگاه اپلیکیشن چقدر وقت می‌گیرد؟", pa: "د اپلیکیشن پلورنځي بیاکتنه څومره وخت نیسي؟" },
                a: {
                    en: "Review times vary. Many apps are reviewed within a few days on both stores, but first submissions, new developer accounts and apps in sensitive categories can take longer. On Google Play, new personal accounts must also finish the required closed testing period before they can even apply for production. Plan at least a few weeks between a finished build and public launch for your first app.",
                    da: "زمان بررسی متفاوت است. بسیاری از اپلیکیشن‌ها در هر دو فروشگاه در چند روز بررسی می‌شوند، اما ارسال‌های نخست، حساب‌های برنامه‌نویس تازه و اپلیکیشن‌های دسته‌های حساس ممکن است بیشتر طول بکشند. در Google Play، حساب‌های شخصی تازه باید پیش از اینکه حتی بتوانند برای نشر عمومی درخواست دهند، دوره آزمایش بسته لازم را تمام کنند. برای نخستین اپلیکیشن خود، دست‌کم چند هفته میان نسخه آماده و راه‌اندازی عمومی در نظر بگیرید.",
                    pa: "د بیاکتنې وخت توپیر لري. ډېر اپلیکیشنونه په دواړو پلورنځیو کې په څو ورځو کې بیاکتل کېږي، خو لومړنۍ لېږنې، د پروګرامر نوي حسابونه او د حساسو کټګوریو اپلیکیشنونه کېدای شي ډېر وخت ونیسي. په Google Play کې، نوي شخصي حسابونه باید مخکې له دې چې حتی د عمومي خپرېدو غوښتنه وکړي، د تړلې ازموینې اړینه موده پای ته ورسوي. د خپل لومړي اپلیکیشن لپاره، د چمتو نسخې او عمومي پیل ترمنځ لږ تر لږه څو اونۍ په پام کې ونیسئ."
                }
            },
            {
                q: { en: "Can I publish an iPhone app without owning a Mac?", da: "آیا بدون داشتن Mac می‌توانم اپلیکیشن iPhone نشر کنم؟", pa: "ایا له Mac پرته د iPhone اپلیکیشن خپرولی شم؟" },
                a: {
                    en: "Yes. iOS apps must be compiled with Apple's tools, but you do not have to own a Mac yourself. Cloud build services can compile and upload React Native and Flutter apps for you, and many agencies use their own Macs. You still need an Apple Developer Program membership, and you should test on real iPhones or through TestFlight before submitting.",
                    da: "بله. اپلیکیشن‌های iOS باید با ابزارهای Apple کامپایل شوند، اما لازم نیست خودتان Mac داشته باشید. خدمات ساخت ابری می‌توانند اپلیکیشن‌های React Native و Flutter را برای شما کامپایل و آپلود کنند، و بسیاری از شرکت‌ها از Macهای خودشان استفاده می‌کنند. با این حال به عضویت Apple Developer Program نیاز دارید، و باید پیش از ارسال روی iPhoneهای واقعی یا از طریق TestFlight آزمایش کنید.",
                    pa: "هو. د iOS اپلیکیشنونه باید د Apple په وسایلو کمپایل شي، خو اړینه نه ده چې پخپله Mac ولرئ. ورېځني جوړونې خدمتونه کولی شي د React Native او Flutter اپلیکیشنونه ستاسو لپاره کمپایل او اپلوډ کړي، او ډېرې ادارې خپل Macونه کاروي. بیا هم د Apple Developer Program غړیتوب ته اړتیا لرئ، او باید له لېږلو مخکې په رښتینو iPhoneونو یا د TestFlight له لارې ازموینه وکړئ."
                }
            },
            {
                q: { en: "Should my developer publish the app under their own account?", da: "آیا برنامه‌نویس من باید اپلیکیشن را زیر حساب خودش نشر کند؟", pa: "ایا زما پروګرامر باید اپلیکیشن د خپل حساب لاندې خپور کړي؟" },
                a: {
                    en: "It is better not to. Publish under an account registered to your business so you control the listing, reviews, data and future updates. Your developer can be added as a user with limited permissions in the Play Console and App Store Connect. If an app is already on someone else's account, both stores offer transfer processes, but they take time and require cooperation from the current owner.",
                    da: "بهتر است این کار را نکنید. اپلیکیشن را زیر حسابی نشر کنید که به نام تجارت شما ثبت شده، تا کنترل صفحه فروشگاه، نظرات، داده‌ها و به‌روزرسانی‌های آینده در دست شما باشد. برنامه‌نویس شما می‌تواند به عنوان کاربری با دسترسی محدود در Play Console و App Store Connect اضافه شود. اگر اپلیکیشنی از قبل روی حساب کس دیگری است، هر دو فروشگاه روند انتقال دارند، اما وقت‌گیر است و به همکاری مالک فعلی نیاز دارد.",
                    pa: "غوره ده چې دا کار ونه کړئ. اپلیکیشن د داسې حساب لاندې خپور کړئ چې ستاسو د سوداګرۍ په نوم ثبت شوی وي، څو د پلورنځي پاڼه، نظرونه، معلومات او راتلونکي تازه کول ستاسو په کنټرول کې وي. ستاسو پروګرامر کولی شي په Play Console او App Store Connect کې د محدودو اجازو لرونکي کاروونکي په توګه اضافه شي. که یو اپلیکیشن له وړاندې د بل چا په حساب وي، دواړه پلورنځي د لېږد بهیرونه لري، خو وخت نیسي او د اوسني مالک همکارۍ ته اړتیا لري."
                }
            }
        ],
        category: "mobile-apps",
        author: "Layla Wakily",
        date: "2026-10-01",
        updated: "2026-10-01",
        readTime: "6 min read",
        image: "/logo.png",
        tags: ["publish app google play", "publish app on App Store", "Google Play developer account", "Play Console closed testing", "App Store review", "app publishing Afghanistan", "D-U-N-S number"]
    },
];

export default posts;
