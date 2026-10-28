// Batch 03 — multilingual SEO, hreflang/RTL, Core Web Vitals, technical SEO audit, Dari/Pashto keyword research. Generated 2026-10.
const posts = [
    {
        id: "141",
        slug: "multilingual-seo-dari-pashto-english",
        title: {
            en: "Multilingual SEO for Dari, Pashto and English Websites",
            da: "سئوی چندزبانه برای ویب‌سایت‌های دری، پشتو و انگلیسی",
            pa: "د دري، پښتو او انګلیسي ویب‌سایټونو لپاره څو ژبنی SEO"
        },
        excerpt: {
            en: "Learn how multilingual SEO works for Dari, Pashto and English websites: URL structure, keyword research, translation, hreflang and measuring each language.",
            da: "بیاموزید سئوی چندزبانه برای ویب‌سایت‌های دری، پشتو و انگلیسی چگونه کار می‌کند: ساختار URL، تحقیق کلمات کلیدی، ترجمه، hreflang و اندازه‌گیری هر زبان.",
            pa: "زده کړئ چې د دري، پښتو او انګلیسي ویب‌سایټونو لپاره څو ژبنی SEO څنګه کار کوي: د URL جوړښت، د کلیدي کلمو څېړنه، ژباړه، hreflang او د هرې ژبې اندازه کول."
        },
        content: {
            en: `Multilingual SEO is the practice of making each language version of your website, which for an Afghan business usually means Dari, Pashto and English, separately discoverable, so a person searching in their own language lands on a page written in that language. It works when every language has its own crawlable URL, properly translated content, hreflang annotations that link the versions together, and keyword research done in each language rather than translated from English.

**Key Takeaways**

- Give every language its own URL (for example /en/, /fa/, /ps/); a language switcher that only changes text in the browser is invisible to most search crawlers.
- Research keywords separately in Dari, Pashto and English, because people phrase the same need differently in each language.
- Translate fully and naturally; thin or machine-only translations rarely rank and can hurt trust.
- Connect versions with hreflang and keep metadata, schema and internal links consistent per language.
- Measure each language separately in Google Search Console so you know which one is actually earning traffic.

**What Is Multilingual SEO and Why Does It Matter in Afghanistan?**

Multilingual SEO means search engines can find, understand and rank each language version of your site for the people who search in that language. In Afghanistan this is not a niche concern. A clinic in Kabul, a school in Herat or a trading company in Mazar-i-Sharif may have customers who search in Dari, others who search in Pashto, and partners, donors or diaspora relatives who search in English from Europe, North America or Australia.

If your site exists only in English, you are invisible for most local searches. If it exists in three languages but all three share one URL, search engines generally index just one version, often the English default. Either way, you lose people who were actively looking for what you sell.

There is also less competition than in English. Many Dari and Pashto queries return thin results, forum posts or pages from outside Afghanistan. A well-structured local page in the searcher's language can stand out quickly.

**How Should You Structure URLs for Dari, Pashto and English?**

Use a separate, stable URL for each language; subdirectories are the simplest choice for most businesses. The three common options are:

- **Subdirectories** (example.af/en/, example.af/fa/, example.af/ps/): one domain, shared authority, easy to manage. This is what we recommend for most clients.
- **Subdomains** (en.example.af): workable, but each subdomain tends to be treated more like a separate site.
- **Separate domains**: only make sense when you run distinct businesses per country.

Avoid language detection that silently redirects visitors based on their IP address or browser language. Googlebot mostly crawls from the United States, so automatic redirects can hide your Dari and Pashto pages from it entirely. Instead, show a clear language switcher and let people choose. Remember that a diaspora user in Germany may still prefer Dari.

One technical detail matters a lot for Afghan sites: the language code. Dari is usually marked as fa-AF (Persian as used in Afghanistan) and Pashto as ps or ps-AF. We explain these codes, plus right-to-left layout, in our [hreflang and RTL guide](/blog/hreflang-rtl-websites-guide).

**Why Can't You Just Translate English Keywords?**

Because people do not search by translating English in their heads; they type the words they use every day. A Kabul resident looking for a private English course may type a Dari phrase, a mixed phrase, or even Dari written in Latin letters. A Pashto speaker in Kandahar may use different vocabulary from a Pashto speaker in Peshawar.

Literal translations often produce phrases that are grammatically correct but that nobody searches. Start from the customer's language instead: listen to how customers describe their problem on the phone, in WhatsApp messages and in Facebook comments, then check Google autocomplete and Search Console data for each language. Our [Dari and Pashto keyword research method](/blog/keyword-research-dari-pashto) walks through this in detail, including spelling variants such as the Arabic and Persian forms of the same letter.

**How Do You Translate Content So It Ranks?**

Translate the full page, adapt it to the reader, and have a native speaker review it before it goes live. Practical rules:

1. Translate titles, meta descriptions, headings, image alt text and button labels, not just body text.
2. Localise examples, prices (AFN versus USD), phone formats and addresses for the audience of each version.
3. Keep the same depth in every language. A 1,200-word English guide with a 150-word Dari summary signals that the Dari page is an afterthought.
4. Use AI translation tools for a first draft if you like, but always edit with a fluent human. Machine output in Pashto in particular is still uneven.
5. Write a unique title tag in each language with the keyword the local searcher actually uses.
6. Translate structured data (for example the description in your LocalBusiness or FAQ schema) so it matches the visible page.

**What Technical Pieces Tie the Language Versions Together?**

Hreflang annotations, self-referencing canonical tags, correct lang and dir attributes, and a sitemap that lists every language URL. Each page should list all of its language alternates, including itself, and each alternate must link back. The canonical tag on the Dari page should point to the Dari page, not to the English one; pointing all versions to English tells search engines to ignore the translations.

Internal links matter too. Link Dari pages to other Dari pages so search engines and readers stay within one language. Navigation menus, breadcrumbs and footers should be translated, not left in English.

Speed is part of the picture as well. Persian and Pashto web fonts can be heavy, and many visitors in Afghanistan browse on mobile data. Subset your fonts and load only the weights you need; our article on [Core Web Vitals and INP](/blog/core-web-vitals-inp-2026) covers the performance side.

**How Do You Measure Multilingual SEO Results?**

Measure each language as its own market. In Google Search Console, filter the Performance report by page path (for example URLs containing /fa/) to see impressions, clicks and queries for that language. In GA4, segment traffic by page language or path. Watch for these signals:

- The Dari or Pashto version receives impressions but few clicks, which usually means titles and descriptions need work.
- One language is barely indexed, which often points to missing hreflang, wrong canonicals or pages blocked from crawling.
- Queries in Latin-script Dari or Pashto appear, which tells you to include those spellings naturally in your content.

Review these monthly. Multilingual SEO compounds: every well-translated page adds coverage in a language where competitors are often thin.

**Work With Sheen**

Sheen builds and optimises websites in English, Dari and Pashto, with proper language URLs, hreflang and RTL layouts from day one. See our [SEO services](/services/seo) (from AFN 10,000 per month) or [book a consultation](/book). You can also reach us at info@sheen.af or +93 784 966 018.`,
            da: `سئوی چندزبانه (Multilingual SEO) یعنی هر نسخهٔ زبانی ویب‌سایت شما، که برای یک تجارت افغان معمولاً دری، پشتو و انگلیسی است، به‌طور جداگانه در جستجو پیدا شود، تا کسی که به زبان خودش جستجو می‌کند به صفحه‌ای برسد که به همان زبان نوشته شده است. این کار زمانی نتیجه می‌دهد که هر زبان آدرس (URL) جداگانه و قابل خزش داشته باشد، محتوا به‌درستی ترجمه شده باشد، برچسب‌های hreflang نسخه‌ها را به هم وصل کنند و تحقیق کلمات کلیدی برای هر زبان جداگانه انجام شود، نه این‌که از انگلیسی ترجمه شود.

**نکات کلیدی**

- برای هر زبان یک URL جداگانه بسازید (مثلاً /en/، /fa/، /ps/)؛ دکمهٔ تغییر زبان که فقط متن را در مرورگر عوض می‌کند، برای بیشتر خزنده‌های جستجو دیده نمی‌شود.
- تحقیق کلمات کلیدی را جداگانه به دری، پشتو و انگلیسی انجام دهید، چون مردم یک نیاز واحد را در هر زبان به شکل متفاوت بیان می‌کنند.
- کامل و طبیعی ترجمه کنید؛ ترجمه‌های ناقص یا صرفاً ماشینی به‌ندرت رتبه می‌گیرند و می‌توانند به اعتماد مشتری آسیب بزنند.
- نسخه‌ها را با hreflang به هم وصل کنید و متادیتا، اسکیما و لینک‌های داخلی را برای هر زبان یک‌دست نگه دارید.
- هر زبان را جداگانه در Google Search Console اندازه بگیرید تا بدانید کدام زبان واقعاً ترافیک می‌آورد.

**سئوی چندزبانه چیست و چرا در افغانستان مهم است؟**

سئوی چندزبانه یعنی موتورهای جستجو بتوانند هر نسخهٔ زبانی سایت شما را پیدا کنند، بفهمند و برای کسانی که به همان زبان جستجو می‌کنند رتبه بدهند. در افغانستان این یک موضوع حاشیه‌ای نیست. یک کلینیک در کابل، یک مکتب در هرات یا یک شرکت تجارتی در مزارشریف ممکن است مشتریانی داشته باشد که به دری جستجو می‌کنند، عده‌ای که به پشتو جستجو می‌کنند، و شرکا، تمویل‌کنندگان یا اقارب مهاجری که از اروپا، امریکای شمالی یا آسترالیا به انگلیسی جستجو می‌کنند.

اگر سایت شما فقط به انگلیسی باشد، در بیشتر جستجوهای محلی دیده نمی‌شوید. اگر به سه زبان باشد اما هر سه یک URL مشترک داشته باشند، موتورهای جستجو معمولاً تنها یک نسخه را ایندکس می‌کنند که اغلب همان نسخهٔ پیش‌فرض انگلیسی است. در هر دو حالت، کسانی را از دست می‌دهید که فعالانه دنبال محصول یا خدمات شما بودند.

رقابت هم نسبت به انگلیسی کمتر است. بسیاری از جستجوهای دری و پشتو نتایج ضعیف، پست‌های انجمن‌ها یا صفحاتی از بیرون افغانستان نشان می‌دهند. یک صفحهٔ محلی با ساختار درست به زبان جستجوکننده می‌تواند به‌سرعت برجسته شود.

**ساختار URL برای دری، پشتو و انگلیسی چگونه باشد؟**

برای هر زبان یک URL جداگانه و ثابت استفاده کنید؛ برای بیشتر کسب‌وکارها زیرپوشه‌ها (subdirectories) ساده‌ترین انتخاب است. سه گزینهٔ رایج این‌ها هستند:

- **زیرپوشه‌ها** (example.af/en/، example.af/fa/، example.af/ps/): یک دامنه، اعتبار مشترک و مدیریت آسان. این همان چیزی است که ما برای بیشتر مشتریان پیشنهاد می‌کنیم.
- **زیردامنه‌ها** (en.example.af): قابل استفاده است، اما هر زیردامنه بیشتر مانند یک سایت جداگانه دیده می‌شود.
- **دامنه‌های جداگانه**: فقط زمانی معنا دارد که در هر کشور یک تجارت جداگانه داشته باشید.

از تشخیص خودکار زبان که بازدیدکننده را بر اساس IP یا زبان مرورگر بی‌صدا ریدایرکت می‌کند پرهیز کنید. Googlebot بیشتر از ایالات متحده خزش می‌کند، بنابراین ریدایرکت خودکار می‌تواند صفحات دری و پشتوی شما را کاملاً از دید آن پنهان کند. به جای آن، یک دکمهٔ واضح تغییر زبان بگذارید و انتخاب را به مردم بسپارید. به یاد داشته باشید که یک کاربر مهاجر در آلمان ممکن است هنوز دری را ترجیح دهد.

یک جزئیات فنی برای سایت‌های افغان اهمیت زیادی دارد: کد زبان. دری معمولاً با fa-AF (فارسی رایج در افغانستان) و پشتو با ps یا ps-AF مشخص می‌شود. این کدها و همچنین طرح راست‌به‌چپ را در [راهنمای hreflang و RTL](/blog/hreflang-rtl-websites-guide) توضیح داده‌ایم.

**چرا نمی‌توان کلمات کلیدی انگلیسی را فقط ترجمه کرد؟**

چون مردم با ترجمهٔ ذهنی از انگلیسی جستجو نمی‌کنند؛ آن‌ها کلماتی را تایپ می‌کنند که هر روز به کار می‌برند. یک باشندهٔ کابل که دنبال کورس خصوصی انگلیسی است ممکن است یک عبارت دری، یک عبارت مخلوط یا حتی دری با حروف لاتین بنویسد. یک پشتوزبان در کندهار ممکن است واژه‌هایی متفاوت از یک پشتوزبان در پشاور به کار ببرد.

ترجمه‌های تحت‌اللفظی اغلب عباراتی می‌سازند که از نظر دستوری درست‌اند اما هیچ‌کس آن‌ها را جستجو نمی‌کند. به جای آن از زبان خود مشتری شروع کنید: گوش دهید که مشتریان مشکل خود را در تلفن، پیام‌های WhatsApp و کامنت‌های فیسبوک چگونه بیان می‌کنند، سپس پیشنهادهای خودکار گوگل و داده‌های Search Console را برای هر زبان بررسی کنید. [روش تحقیق کلمات کلیدی دری و پشتو](/blog/keyword-research-dari-pashto) این کار را با جزئیات توضیح می‌دهد، از جمله شکل‌های املایی مختلف مانند صورت عربی و فارسی یک حرف.

**محتوا را چگونه ترجمه کنیم که رتبه بگیرد؟**

کل صفحه را ترجمه کنید، آن را با خواننده سازگار سازید و پیش از نشر توسط یک گویندهٔ بومی بازبینی کنید. قواعد عملی:

1. عنوان‌ها، توضیحات متا، سرخط‌ها، متن جایگزین تصاویر و نوشته‌های دکمه‌ها را ترجمه کنید، نه فقط متن اصلی را.
2. مثال‌ها، قیمت‌ها (افغانی در برابر دالر)، شکل شماره‌های تلفن و آدرس‌ها را برای مخاطب هر نسخه محلی‌سازی کنید.
3. عمق محتوا را در همهٔ زبان‌ها یکسان نگه دارید. یک راهنمای ۱۲۰۰ کلمه‌ای انگلیسی با یک خلاصهٔ ۱۵۰ کلمه‌ای دری نشان می‌دهد که صفحهٔ دری کار فرعی بوده است.
4. اگر بخواهید، از ابزارهای ترجمهٔ هوش مصنوعی برای پیش‌نویس اول استفاده کنید، اما همیشه با یک انسان مسلط ویرایش کنید. خروجی ماشینی به‌ویژه در پشتو هنوز ناهموار است.
5. در هر زبان یک تگ عنوان منحصربه‌فرد بنویسید که کلمهٔ کلیدی واقعی جستجوکنندهٔ محلی را داشته باشد.
6. داده‌های ساختاریافته (مثلاً توضیحات در اسکیمای LocalBusiness یا FAQ) را ترجمه کنید تا با صفحهٔ قابل مشاهده هماهنگ باشد.

**کدام اجزای فنی نسخه‌های زبانی را به هم وصل می‌کنند؟**

برچسب‌های hreflang، تگ‌های canonical خودارجاع، ویژگی‌های درست lang و dir، و یک نقشهٔ سایت (sitemap) که همهٔ URLهای زبانی را فهرست کند. هر صفحه باید همهٔ نسخه‌های زبانی خود، از جمله خودش، را فهرست کند و هر نسخه باید متقابلاً به آن لینک بدهد. تگ canonical در صفحهٔ دری باید به همان صفحهٔ دری اشاره کند، نه به صفحهٔ انگلیسی؛ اشارهٔ همهٔ نسخه‌ها به انگلیسی به موتورهای جستجو می‌گوید که ترجمه‌ها را نادیده بگیرند.

لینک‌های داخلی هم مهم‌اند. صفحات دری را به صفحات دری دیگر لینک کنید تا موتورهای جستجو و خوانندگان در یک زبان باقی بمانند. منوهای ناوبری، مسیرنماها (breadcrumbs) و فوترها باید ترجمه شوند، نه این‌که به انگلیسی باقی بمانند.

سرعت هم بخشی از این تصویر است. فونت‌های وب فارسی و پشتو می‌توانند سنگین باشند و بسیاری از بازدیدکنندگان در افغانستان با انترنت موبایل گشت‌وگذار می‌کنند. فونت‌ها را زیرمجموعه (subset) کنید و فقط وزن‌هایی را بارگذاری کنید که نیاز دارید؛ مقالهٔ ما دربارهٔ [Core Web Vitals و INP](/blog/core-web-vitals-inp-2026) جنبهٔ کارایی را پوشش می‌دهد.

**نتایج سئوی چندزبانه را چگونه اندازه بگیریم؟**

هر زبان را به‌عنوان یک بازار جداگانه اندازه بگیرید. در Google Search Console، گزارش Performance را بر اساس مسیر صفحه فیلتر کنید (مثلاً URLهایی که /fa/ دارند) تا نمایش‌ها، کلیک‌ها و جستجوهای آن زبان را ببینید. در GA4 ترافیک را بر اساس زبان یا مسیر صفحه تقسیم کنید. به این نشانه‌ها توجه کنید:

- نسخهٔ دری یا پشتو نمایش می‌گیرد اما کلیک کمی دارد؛ این معمولاً یعنی عنوان‌ها و توضیحات نیاز به بهبود دارند.
- یک زبان به‌سختی ایندکس شده است؛ این اغلب نشانهٔ نبودن hreflang، canonical نادرست یا صفحات مسدود برای خزش است.
- جستجوهایی به دری یا پشتو با حروف لاتین ظاهر می‌شوند؛ این به شما می‌گوید که آن املاها را به شکل طبیعی در محتوا بگنجانید.

این موارد را ماهانه بررسی کنید. سئوی چندزبانه به مرور انباشته می‌شود: هر صفحهٔ خوب ترجمه‌شده پوشش شما را در زبانی بیشتر می‌کند که رقبا اغلب در آن ضعیف‌اند.

**با شین کار کنید**

شین ویب‌سایت‌ها را به انگلیسی، دری و پشتو می‌سازد و بهینه می‌کند، با URLهای زبانی درست، hreflang و طرح راست‌به‌چپ از روز اول. [خدمات سئوی](/services/seo) ما (از ۱۰٬۰۰۰ افغانی در ماه) را ببینید یا [یک جلسهٔ مشوره رزرو کنید](/book). همچنین می‌توانید از طریق info@sheen.af یا +93 784 966 018 با ما در تماس شوید.`,
            pa: `څو ژبنی SEO (Multilingual SEO) دا معنا لري چې ستاسو د ویب‌سایټ هره ژبنۍ نسخه، چې د یوې افغان سوداګرۍ لپاره معمولاً دري، پښتو او انګلیسي وي، په جلا توګه په لټون کې وموندل شي، څو هغه کس چې په خپله ژبه لټون کوي داسې پاڼې ته ورسېږي چې په همغه ژبه لیکل شوې وي. دا کار هغه وخت پایله ورکوي چې هره ژبه خپل جلا او د کرال وړ URL ولري، منځپانګه په سمه توګه ژباړل شوې وي، د hreflang نښې نسخې سره ونښلوي، او د کلیدي کلمو څېړنه د هرې ژبې لپاره جلا ترسره شي، نه دا چې له انګلیسي څخه وژباړل شي.

**مهم ټکي**

- هرې ژبې ته جلا URL ورکړئ (د بېلګې په توګه /en/، /fa/، /ps/)؛ د ژبې بدلولو هغه تڼۍ چې یوازې په براوزر کې متن بدلوي، د لټون ډېری کرالرانو ته نه ښکاري.
- د کلیدي کلمو څېړنه په دري، پښتو او انګلیسي کې جلا جلا وکړئ، ځکه خلک یوه اړتیا په هره ژبه کې په بل ډول بیانوي.
- بشپړه او طبیعي ژباړه وکړئ؛ نیمګړې یا یوازې ماشیني ژباړې ډېر کم رتبه اخلي او د پېرودونکي باور ته زیان رسولای شي.
- نسخې د hreflang له لارې سره وتړئ او د هرې ژبې لپاره میټاډېټا، سکیما او داخلي لینکونه یو شان وساتئ.
- هره ژبه په Google Search Console کې جلا اندازه کړئ څو پوه شئ چې کومه ژبه په رښتیا ترافیک راوړي.

**څو ژبنی SEO څه شی دی او په افغانستان کې ولې مهم دی؟**

څو ژبنی SEO دا معنا لري چې د لټون انجنونه ستاسو د سایټ هره ژبنۍ نسخه وموندلای شي، پوه یې شي او هغو خلکو ته یې رتبه ورکړي چې په همغه ژبه لټون کوي. په افغانستان کې دا یوه حاشیه‌يي موضوع نه ده. په کابل کې یو کلینیک، په هرات کې یو ښوونځی یا په مزارشریف کې یو سوداګریز شرکت ښايي داسې پېرودونکي ولري چې په دري لټون کوي، ځینې نور چې په پښتو لټون کوي، او شریکان، مرسته‌کوونکي یا مهاجر خپلوان چې له اروپا، شمالي امریکا یا اسټرالیا څخه په انګلیسي لټون کوي.

که ستاسو سایټ یوازې په انګلیسي وي، په ډېری محلي لټونونو کې نه ښکارئ. که په درې ژبو وي خو درې واړه یو ګډ URL ولري، د لټون انجنونه معمولاً یوازې یوه نسخه انډکس کوي چې ډېری وخت د انګلیسي اصلي نسخه وي. په دواړو حالتونو کې هغه خلک له لاسه ورکوئ چې په فعاله توګه ستاسو د محصول یا خدمت په لټه کې وو.

سیالي هم د انګلیسي په پرتله لږه ده. د دري او پښتو ډېری لټونونه کمزورې پایلې، د فورمونو پوسټونه یا له افغانستان بهر پاڼې ښيي. د لټونکي په ژبه یوه ښه جوړه شوې محلي پاڼه کولای شي ژر وځلېږي.

**د دري، پښتو او انګلیسي لپاره د URL جوړښت څنګه وي؟**

د هرې ژبې لپاره جلا او ثابت URL وکاروئ؛ د ډېرو سوداګریو لپاره فرعي فولډرونه (subdirectories) تر ټولو ساده انتخاب دی. درې عام انتخابونه دا دي:

- **فرعي فولډرونه** (example.af/en/، example.af/fa/، example.af/ps/): یو ډومېن، ګډ اعتبار او اسانه مدیریت. موږ همدا د ډېری پېرودونکو لپاره وړاندیز کوو.
- **فرعي ډومېنونه** (en.example.af): د کارولو وړ دي، خو هر فرعي ډومېن ډېر د یو جلا سایټ په څېر ګڼل کېږي.
- **جلا ډومېنونه**: یوازې هغه وخت معنا لري چې په هر هېواد کې جلا سوداګري ولرئ.

له اتوماتيک ژبې پېژندنې ډډه وکړئ چې لیدونکی د IP یا براوزر د ژبې پر بنسټ په چوپه خوله بل ځای ته لېږدوي. Googlebot ډېری له متحده ایالاتو کرال کوي، نو اتوماتيک لېږد ستاسو دري او پښتو پاڼې ترې بشپړې پټولای شي. پر ځای یې د ژبې بدلولو یوه روښانه تڼۍ کېږدئ او انتخاب خلکو ته پرېږدئ. په یاد ولرئ چې په آلمان کې یو مهاجر کارن ښايي لا هم دري غوره کړي.

یو تخنیکي جزئیات د افغان سایټونو لپاره ډېر مهم دی: د ژبې کوډ. دري معمولاً د fa-AF (هغه فارسي چې په افغانستان کې کارېږي) او پښتو د ps یا ps-AF په توګه نښه کېږي. دا کوډونه او له ښي نه کیڼ لور ته ډیزاین مو په [د hreflang او RTL لارښود](/blog/hreflang-rtl-websites-guide) کې تشریح کړي دي.

**ولې یوازې د انګلیسي کلیدي کلمو ژباړه بس نه ده؟**

ځکه خلک په ذهن کې له انګلیسي ژباړې سره لټون نه کوي؛ هغه کلمې ټایپ کوي چې هره ورځ یې کاروي. د کابل یو اوسېدونکی چې د انګلیسي خصوصي کورس په لټه کې دی ښايي دري عبارت، ګډ عبارت یا حتی په لاتیني تورو دري ولیکي. په کندهار کې یو پښتو ویونکی ښايي د پېښور د پښتو ویونکي په پرتله بېلې کلمې وکاروي.

لفظي ژباړې ډېری وخت داسې عبارتونه جوړوي چې له ګرامري پلوه سم وي خو هیڅوک یې نه لټوي. پر ځای یې د پېرودونکي له ژبې پیل وکړئ: غوږ ونیسئ چې پېرودونکي خپله ستونزه په تلیفون، د WhatsApp په پیغامونو او د فیسبوک په کمنټونو کې څنګه بیانوي، بیا د ګوګل اتوماتيک وړاندیزونه او د Search Console معلومات د هرې ژبې لپاره وګورئ. [د دري او پښتو کلیدي کلمو د څېړنې طریقه](/blog/keyword-research-dari-pashto) دا کار په تفصیل سره تشریح کوي، په شمول د یو توري د عربي او فارسي بڼو په څېر املايي توپیرونو.

**منځپانګه څنګه وژباړو چې رتبه واخلي؟**

ټوله پاڼه وژباړئ، له لوستونکي سره یې برابره کړئ او له خپرېدو مخکې یې د یو اصلي ویناوال له خوا وکتل شي. عملي قواعد:

1. سرلیکونه، میټا توضیحات، فرعي سرلیکونه، د انځورونو بدیل متن او د تڼیو لیکنې وژباړئ، نه یوازې اصلي متن.
2. بېلګې، بیې (افغانۍ او ډالر)، د تلیفون شمېرو بڼه او پتې د هرې نسخې د مخاطبینو لپاره محلي کړئ.
3. په ټولو ژبو کې د منځپانګې ژوروالی یو شان وساتئ. یو ۱۲۰۰ کلمه‌يي انګلیسي لارښود چې ۱۵۰ کلمه‌يي دري لنډیز ولري، ښيي چې دري پاڼه یو فرعي کار و.
4. که غواړئ، د لومړۍ مسودې لپاره د مصنوعي ځیرکتیا ژباړې وسایل وکاروئ، خو تل یې د یو ماهر انسان په واسطه سم کړئ. ماشیني ژباړه په ځانګړې توګه په پښتو کې لا هم ناهواره ده.
5. په هره ژبه کې یو ځانګړی د سرلیک ټګ ولیکئ چې د محلي لټونکي رښتینې کلیدي کلمه پکې وي.
6. جوړښت لرونکي معلومات (د بېلګې په توګه د LocalBusiness یا FAQ سکیما توضیحات) وژباړئ څو له لیدل کېدونکې پاڼې سره برابر وي.

**کومې تخنیکي برخې ژبنۍ نسخې سره نښلوي؟**

د hreflang نښې، ځان ته اشاره کوونکي canonical ټګونه، سمې lang او dir ځانګړتیاوې، او یو sitemap چې ټول ژبني URLونه پکې لست شوي وي. هره پاڼه باید خپلې ټولې ژبنۍ نسخې، په شمول د ځان، لست کړي او هره نسخه باید بېرته ورته لینک ورکړي. په دري پاڼه کې canonical ټګ باید همغه دري پاڼې ته اشاره وکړي، نه انګلیسي ته؛ که ټولې نسخې انګلیسي ته اشاره وکړي، د لټون انجنونو ته وايي چې ژباړې له پامه وغورځوي.

داخلي لینکونه هم مهم دي. دري پاڼې نورو دري پاڼو ته لینک کړئ څو د لټون انجنونه او لوستونکي په یوه ژبه کې پاتې شي. د نیویګېشن مینو، breadcrumbs او فوټرونه باید وژباړل شي، نه دا چې په انګلیسي پاتې شي.

سرعت هم د دې انځور برخه ده. فارسي او پښتو ویب فونټونه دروند کېدای شي او په افغانستان کې ډېر لیدونکي د موبایل انټرنېټ له لارې ګرځي. فونټونه subset کړئ او یوازې هغه وزنونه بار کړئ چې اړتیا ورته لرئ؛ زموږ لیکنه د [Core Web Vitals او INP](/blog/core-web-vitals-inp-2026) په اړه د فعالیت اړخ تشریح کوي.

**د څو ژبني SEO پایلې څنګه اندازه کړو؟**

هره ژبه د یو جلا بازار په توګه اندازه کړئ. په Google Search Console کې د Performance راپور د پاڼې د لارې پر بنسټ فلټر کړئ (د بېلګې په توګه هغه URLونه چې /fa/ لري) څو د هغې ژبې ښودنې، کلیکونه او لټونونه وګورئ. په GA4 کې ترافیک د پاڼې د ژبې یا لارې له مخې ووېشئ. دې نښو ته پام وکړئ:

- دري یا پښتو نسخه ښودنې ترلاسه کوي خو کلیکونه یې لږ دي؛ دا معمولاً په دې مانا ده چې سرلیکونه او توضیحات ښه کولو ته اړتیا لري.
- یوه ژبه په سختۍ انډکس شوې ده؛ دا ډېری وخت د hreflang نشتوالي، ناسم canonical یا د کرال لپاره بندو پاڼو نښه ده.
- په لاتیني تورو دري یا پښتو لټونونه ښکاري؛ دا درته وايي چې دا املاوې په طبیعي ډول په منځپانګه کې ځای کړئ.

دا شیان میاشتنی وګورئ. څو ژبنی SEO په تدریج سره راټولېږي: هره ښه ژباړل شوې پاڼه په داسې ژبه کې ستاسو پوښښ زیاتوي چې سیالان پکې ډېری وخت کمزوري دي.

**له شین سره کار وکړئ**

شین په انګلیسي، دري او پښتو ویب‌سایټونه جوړوي او ښه کوي، له لومړۍ ورځې د سمو ژبنیو URLونو، hreflang او له ښي نه کیڼ لور ته ډیزاین سره. زموږ [د SEO خدمات](/services/seo) (له ۱۰٬۰۰۰ افغانیو په میاشت کې) وګورئ یا [د مشورې یوه ناسته بوک کړئ](/book). همدارنګه کولای شئ له info@sheen.af یا +93 784 966 018 له لارې موږ سره اړیکه ونیسئ.`
        },
        faqs: [
            {
                q: { en: "Do I need a separate website for each language?", da: "آیا برای هر زبان به یک ویب‌سایت جداگانه نیاز دارم؟", pa: "ایا د هرې ژبې لپاره جلا ویب‌سایټ ته اړتیا لرم؟" },
                a: {
                    en: "No. Most Afghan businesses are best served by one domain with a subdirectory per language, such as /en/, /fa/ and /ps/. This keeps all your authority on one site, makes hosting and maintenance simpler, and still gives each language its own indexable URL. Separate domains only make sense when you run genuinely different businesses in different countries.",
                    da: "نه. برای بیشتر تجارت‌های افغان بهترین راه یک دامنه با یک زیرپوشه برای هر زبان است، مانند /en/، /fa/ و /ps/. این کار همهٔ اعتبار شما را روی یک سایت نگه می‌دارد، میزبانی و نگهداری را ساده‌تر می‌کند و باز هم به هر زبان یک URL قابل ایندکس می‌دهد. دامنه‌های جداگانه فقط زمانی معنا دارند که در کشورهای مختلف واقعاً تجارت‌های متفاوت داشته باشید.",
                    pa: "نه. د ډېری افغان سوداګریو لپاره غوره لاره یو ډومېن دی چې د هرې ژبې لپاره پکې یو فرعي فولډر وي، لکه /en/، /fa/ او /ps/. دا کار ستاسو ټول اعتبار په یوه سایټ کې ساتي، کوربه‌توب او ساتنه اسانه کوي او بیا هم هرې ژبې ته د انډکس وړ جلا URL ورکوي. جلا ډومېنونه یوازې هغه وخت معنا لري چې په بېلابېلو هېوادونو کې په رښتیا بېلې سوداګرۍ ولرئ."
                }
            },
            {
                q: { en: "Does Google understand and rank Pashto content?", da: "آیا گوگل محتوای پشتو را می‌فهمد و رتبه می‌دهد؟", pa: "ایا ګوګل پښتو منځپانګه پېژني او رتبه ورکوي؟" },
                a: {
                    en: "Yes. Google indexes and ranks Pashto pages and offers its interface in Pashto. The main obstacles are on the website side: pages hidden behind a JavaScript language switcher, missing lang attributes, wrong canonicals or low-quality machine translation. When a Pashto page has its own URL, a clear title in Pashto and genuinely useful content, it can rank well, often against weaker competition than in English.",
                    da: "بله. گوگل صفحات پشتو را ایندکس می‌کند و رتبه می‌دهد و رابط کاربری خود را هم به پشتو ارائه می‌کند. موانع اصلی در خود ویب‌سایت است: صفحاتی که پشت یک دکمهٔ تغییر زبان جاوااسکریپتی پنهان‌اند، نبودن ویژگی lang، canonical نادرست یا ترجمهٔ ماشینی بی‌کیفیت. وقتی یک صفحهٔ پشتو URL خودش، عنوان روشن به پشتو و محتوای واقعاً مفید داشته باشد، می‌تواند رتبهٔ خوب بگیرد، اغلب در برابر رقابتی ضعیف‌تر از انگلیسی.",
                    pa: "هو. ګوګل پښتو پاڼې انډکس کوي، رتبه ورکوي یې او خپل انټرفېس هم په پښتو وړاندې کوي. اصلي خنډونه د ویب‌سایټ په خوا کې دي: هغه پاڼې چې د جاوااسکریپټ د ژبې بدلولو تڼۍ تر شا پټې وي، د lang ځانګړتیا نشتوالی، ناسم canonical یا بې کیفیته ماشیني ژباړه. کله چې یوه پښتو پاڼه خپل URL، په پښتو روښانه سرلیک او رښتیا ګټوره منځپانګه ولري، ښه رتبه اخیستلای شي، ډېری وخت د انګلیسي په پرتله د کمزورې سیالۍ پر وړاندې."
                }
            },
            {
                q: { en: "Can I use AI or machine translation for my Dari and Pashto pages?", da: "آیا می‌توانم برای صفحات دری و پشتوی خود از ترجمهٔ ماشینی یا هوش مصنوعی استفاده کنم؟", pa: "ایا کولای شم د خپلو دري او پښتو پاڼو لپاره ماشیني یا د مصنوعي ځیرکتیا ژباړه وکاروم؟" },
                a: {
                    en: "You can use it to produce a first draft, but a fluent human should edit every page before publishing. AI tools handle Dari reasonably well and Pashto less consistently, and they often miss local vocabulary, tone and the exact phrases people search. Unedited machine translation can read awkwardly, reduce trust and add little value compared with the original page.",
                    da: "می‌توانید برای تهیهٔ پیش‌نویس اول از آن استفاده کنید، اما یک انسان مسلط باید هر صفحه را پیش از نشر ویرایش کند. ابزارهای هوش مصنوعی دری را نسبتاً خوب و پشتو را کمتر یکنواخت ترجمه می‌کنند و اغلب واژه‌های محلی، لحن و عبارات دقیقی را که مردم جستجو می‌کنند از دست می‌دهند. ترجمهٔ ماشینی ویرایش‌نشده می‌تواند ناهموار خوانده شود، اعتماد را کم کند و در مقایسه با صفحهٔ اصلی ارزش کمی بیفزاید.",
                    pa: "کولای شئ د لومړۍ مسودې لپاره یې وکاروئ، خو یو ماهر انسان باید هره پاڼه له خپرېدو مخکې سمه کړي. د مصنوعي ځیرکتیا وسایل دري نسبتاً ښه او پښتو لږ یو شان ژباړي، او ډېری وخت محلي کلمې، لهجه او هغه دقیق عبارتونه له لاسه ورکوي چې خلک یې لټوي. سم نه شوې ماشیني ژباړه ناهواره لوستل کېږي، باور کموي او د اصلي پاڼې په پرتله لږ ارزښت زیاتوي."
                }
            },
            {
                q: { en: "How long does multilingual SEO take to show results?", da: "سئوی چندزبانه چقدر وقت می‌گیرد تا نتیجه بدهد؟", pa: "څو ژبنی SEO څومره وخت نیسي چې پایله ورکړي؟" },
                a: {
                    en: "Expect several months rather than weeks. New language URLs first need to be crawled and indexed, which you can track in Google Search Console, and rankings then build as pages earn clicks and links. Dari and Pashto pages sometimes move faster than English because competition is thinner, but timing depends on your niche, site quality and how consistently you publish.",
                    da: "انتظار چند ماه را داشته باشید، نه چند هفته. URLهای زبانی جدید ابتدا باید خزش و ایندکس شوند که می‌توانید آن را در Google Search Console دنبال کنید، و سپس رتبه‌ها با گرفتن کلیک و لینک به‌تدریج بالا می‌روند. صفحات دری و پشتو گاهی سریع‌تر از انگلیسی پیش می‌روند چون رقابت کمتر است، اما زمان آن به حوزهٔ کاری، کیفیت سایت و میزان منظم‌بودن نشر شما بستگی دارد.",
                    pa: "د څو اونیو پر ځای د څو میاشتو تمه ولرئ. نوي ژبني URLونه لومړی باید کرال او انډکس شي چې په Google Search Console کې یې تعقیبولای شئ، او بیا رتبې په تدریج سره د کلیکونو او لینکونو په ترلاسه کولو جوړېږي. دري او پښتو پاڼې ځینې وخت له انګلیسي ګړندۍ مخکې ځي ځکه سیالي لږه ده، خو وخت ستاسو په برخه، د سایټ په کیفیت او د خپرونو په منظموالي پورې اړه لري."
                }
            }
        ],
        category: "seo",
        author: "Suliman Hakimi",
        date: "2026-09-21",
        updated: "2026-09-21",
        readTime: "6 min read",
        image: "/logo.png",
        tags: ["multilingual seo", "multilingual website seo", "Dari SEO", "Pashto SEO", "hreflang", "AI Overviews", "SEO Afghanistan", "Kabul SEO"]
    },
    {
        id: "140",
        slug: "hreflang-rtl-websites-guide",
        title: {
            en: "Hreflang and RTL: Technical SEO for Persian and Pashto Sites",
            da: "Hreflang و RTL: سئوی فنی برای سایت‌های فارسی و پشتو",
            pa: "Hreflang او RTL: د فارسي او پښتو سایټونو لپاره تخنیکي SEO"
        },
        excerpt: {
            en: "A practical hreflang RTL SEO guide for Dari and Pashto sites: the right language codes, reciprocal tags, lang and dir markup, RTL layout and how to test it.",
            da: "راهنمای عملی سئوی hreflang و RTL برای سایت‌های دری و پشتو: کدهای زبان درست، برچسب‌های متقابل، نشانه‌گذاری lang و dir، طرح راست‌به‌چپ و روش آزمایش آن.",
            pa: "د دري او پښتو سایټونو لپاره د hreflang او RTL SEO عملي لارښود: سم ژبني کوډونه، متقابل ټګونه، د lang او dir نښه‌ګذاري، RTL ډیزاین او د ازموینې لاره."
        },
        content: {
            en: `Hreflang and RTL SEO for Persian and Pashto sites comes down to two jobs: telling search engines which language and region each page is for (hreflang), and making sure right-to-left pages are marked up and laid out correctly (lang and dir attributes plus RTL-aware CSS). Get both right and Google can show your Dari page to Dari searchers, your Pashto page to Pashto searchers, and a clean, readable layout to all of them.

**Key Takeaways**

- Use fa-AF for Dari, ps (or ps-AF) for Pashto, en for English, and add an x-default fallback.
- Every hreflang set must be complete and reciprocal: each page lists all versions, including itself.
- Set lang and dir="rtl" on the html element of Dari and Pashto pages, not just on a wrapper div.
- Use CSS logical properties so one stylesheet works for both left-to-right and right-to-left layouts.
- Validate with Google Search Console and a crawler after every release.

**What Does Hreflang Actually Do?**

Hreflang tells search engines that several URLs are equivalent pages in different languages, so they can show the right one to each searcher. It is a hint, not a ranking factor: it will not push a weak page up, but it helps prevent the wrong language version from appearing and stops your translations from being treated as near-duplicates competing with each other.

You can declare hreflang in three places: link elements in the page head, HTTP headers (useful for PDFs), or the XML sitemap. Pick one method and use it consistently. For most Next.js and similar sites, the page head or the sitemap is easiest to generate automatically from your routing.

**Which Language Codes Should You Use for Dari and Pashto?**

Use ISO 639-1 language codes, optionally followed by an ISO 3166-1 region code. For Afghan sites that usually means:

- **English**: en (or en-US, en-GB if you genuinely target one country)
- **Dari**: fa-AF, which means Persian as used in Afghanistan. Dari has its own three-letter code (prs), but hreflang expects the two-letter code, so fa-AF is the safe choice.
- **Pashto**: ps, or ps-AF if you want to signal Afghanistan specifically.
- **x-default**: the page to show when no language matches, usually your English version or a language-selection page.

A common mistake is using "af" for Afghanistan. In language codes, af means Afrikaans. Another is using a region code alone, such as "AF", which is invalid. The language always comes first, then the region.

**How Do You Write a Correct Hreflang Set?**

Each page in a group must list every member of the group, including itself, using absolute URLs. If the English page points to the Dari page, the Dari page must point back. Missing return links are the most common error, and when they occur search engines may ignore the annotations.

A complete set for a services page would include four entries: en pointing to the English URL, fa-AF pointing to the Dari URL, ps pointing to the Pashto URL, and x-default pointing to the English URL. All three pages carry the same four entries.

Also check that:

- Every URL in the set returns a 200 status code, not a redirect or a 404.
- Each page's canonical tag points to itself. A Dari page canonicalised to the English page cancels its own hreflang.
- The URLs are not blocked by robots.txt or marked noindex.
- Only pages that genuinely exist in a language are listed; do not point a Pashto hreflang at an English fallback page.

**What Is the Right Way to Mark Up an RTL Page?**

Put lang and dir on the html element: lang="fa-AF" dir="rtl" for Dari, lang="ps" dir="rtl" for Pashto. Setting direction on the root means browsers, screen readers and translation tools understand the page correctly from the start. If a single page mixes languages, for example an English product name inside Dari text, mark that span with its own lang, and use dir="auto" or bidi isolation for user-generated content such as reviews and comments.

Google has said it determines a page's language from the visible content rather than the lang attribute, but lang still matters for accessibility, correct font rendering and hyphenation, and it costs nothing to get right.

**How Should RTL Layout Be Built?**

Build one layout that mirrors itself, using CSS logical properties rather than separate stylesheets. Instead of margin-left and padding-right, use margin-inline-start and padding-inline-end; these flip automatically when dir changes. Flexbox and grid also follow the document direction by default.

A practical RTL checklist:

1. Mirror navigation, breadcrumbs, sidebars and icons that imply direction, such as arrows and "next" chevrons.
2. Do not mirror logos, media play buttons, charts with time axes, or phone numbers.
3. Keep Latin numerals or Eastern Arabic numerals consistent within a page; mixing both looks careless.
4. Test form fields with mixed content, such as an email address typed into an RTL form.
5. Choose a web font that supports all Pashto letters, including ښ, ږ, ځ and څ, and subset it for speed.
6. Check line height: Persian and Pashto script often needs more vertical space than Latin text.

For more on the design side, see our guide to [RTL website design best practices](/blog/rtl-website-design-best-practices).

**How Do You Test Hreflang and RTL After Launch?**

Crawl the site with an SEO crawler that reports hreflang errors, then confirm in Google Search Console that each language version is indexed. Use URL Inspection on a sample of Dari and Pashto pages to see the canonical Google selected; if it picked the English page instead of the one you declared, your signals are conflicting.

Search a few target queries in each language, ideally from a device in Afghanistan or using a VPN for diaspora markets, and confirm the right version appears. Repeat these checks after every redesign or CMS change, because templates are where hreflang usually breaks. Our [technical SEO audit checklist](/blog/technical-seo-audit-checklist-2026) includes these steps alongside the rest of a full audit, and the broader strategy is covered in [multilingual SEO for Dari, Pashto and English](/blog/multilingual-seo-dari-pashto-english).

**Work With Sheen**

Sheen builds trilingual websites on Next.js with hreflang, canonicals and RTL layouts generated correctly from the start. Explore our [web design services](/services/web-design) or our [SEO services](/services/seo), or [contact us](/contact) at info@sheen.af or +93 784 966 018.`,
            da: `سئوی hreflang و RTL برای سایت‌های فارسی و پشتو به دو کار خلاصه می‌شود: به موتورهای جستجو بگویید هر صفحه برای کدام زبان و منطقه است (hreflang)، و مطمئن شوید که صفحات راست‌به‌چپ درست نشانه‌گذاری و طراحی شده‌اند (ویژگی‌های lang و dir همراه با CSS سازگار با RTL). اگر هر دو را درست انجام دهید، گوگل می‌تواند صفحهٔ دری شما را به جستجوکنندگان دری، صفحهٔ پشتو را به جستجوکنندگان پشتو و یک طرح تمیز و خوانا را به همهٔ آن‌ها نشان دهد.

**نکات کلیدی**

- برای دری از fa-AF، برای پشتو از ps (یا ps-AF)، برای انگلیسی از en استفاده کنید و یک گزینهٔ پشتیبان x-default هم اضافه کنید.
- هر مجموعهٔ hreflang باید کامل و متقابل باشد: هر صفحه همهٔ نسخه‌ها، از جمله خودش، را فهرست می‌کند.
- ویژگی lang و dir="rtl" را روی عنصر html صفحات دری و پشتو بگذارید، نه فقط روی یک div بیرونی.
- از ویژگی‌های منطقی CSS استفاده کنید تا یک فایل استایل هم برای طرح چپ‌به‌راست و هم راست‌به‌چپ کار کند.
- پس از هر انتشار، با Google Search Console و یک ابزار خزش آن را بررسی کنید.

**Hreflang در واقع چه کاری انجام می‌دهد؟**

Hreflang به موتورهای جستجو می‌گوید که چند URL صفحات معادل به زبان‌های مختلف هستند، تا بتوانند صفحهٔ درست را به هر جستجوکننده نشان دهند. این یک اشاره است، نه یک عامل رتبه‌بندی: یک صفحهٔ ضعیف را بالا نمی‌برد، اما کمک می‌کند نسخهٔ زبانی نادرست نمایش داده نشود و ترجمه‌های شما مانند صفحات تقریباً تکراری که با هم رقابت می‌کنند دیده نشوند.

می‌توانید hreflang را در سه جا اعلام کنید: عناصر link در بخش head صفحه، هدرهای HTTP (برای فایل‌های PDF مفید است) یا نقشهٔ سایت XML. یک روش را انتخاب کنید و به‌طور یکسان به کار ببرید. برای بیشتر سایت‌های Next.js و مشابه آن، بخش head صفحه یا نقشهٔ سایت آسان‌ترین گزینه برای تولید خودکار از روی مسیرهای سایت است.

**برای دری و پشتو از کدام کدهای زبان استفاده کنیم؟**

از کدهای زبان ISO 639-1 استفاده کنید که در صورت نیاز یک کد منطقهٔ ISO 3166-1 به دنبال آن می‌آید. برای سایت‌های افغان معمولاً این‌طور است:

- **انگلیسی**: en (یا en-US و en-GB اگر واقعاً یک کشور مشخص را هدف گرفته‌اید)
- **دری**: fa-AF، یعنی فارسی رایج در افغانستان. دری کد سه‌حرفی خودش (prs) را دارد، اما hreflang کد دوحرفی را انتظار دارد، بنابراین fa-AF انتخاب مطمئن است.
- **پشتو**: ps، یا ps-AF اگر می‌خواهید مشخصاً افغانستان را نشان دهید.
- **x-default**: صفحه‌ای که وقتی هیچ زبانی مطابقت ندارد نمایش داده می‌شود، معمولاً نسخهٔ انگلیسی یا صفحهٔ انتخاب زبان.

یک اشتباه رایج استفاده از "af" برای افغانستان است. در کدهای زبان، af یعنی زبان آفریکانس. اشتباه دیگر استفاده از کد منطقه به‌تنهایی است، مانند "AF"، که نامعتبر است. همیشه اول زبان می‌آید و سپس منطقه.

**یک مجموعهٔ درست hreflang را چگونه بنویسیم؟**

هر صفحه در یک گروه باید همهٔ اعضای گروه، از جمله خودش، را با URLهای کامل فهرست کند. اگر صفحهٔ انگلیسی به صفحهٔ دری اشاره می‌کند، صفحهٔ دری هم باید به آن برگردد. نبودن لینک برگشتی رایج‌ترین خطاست و وقتی رخ دهد، موتورهای جستجو ممکن است این برچسب‌ها را نادیده بگیرند.

یک مجموعهٔ کامل برای صفحهٔ خدمات چهار مورد دارد: en که به URL انگلیسی اشاره می‌کند، fa-AF به URL دری، ps به URL پشتو و x-default به URL انگلیسی. هر سه صفحه همین چهار مورد را دارند.

همچنین بررسی کنید که:

- هر URL در مجموعه کد وضعیت 200 برگرداند، نه ریدایرکت یا 404.
- تگ canonical هر صفحه به خودش اشاره کند. صفحهٔ دری که canonical آن صفحهٔ انگلیسی باشد، hreflang خودش را بی‌اثر می‌کند.
- URLها توسط robots.txt مسدود نشده یا noindex نباشند.
- فقط صفحاتی فهرست شوند که واقعاً به آن زبان وجود دارند؛ hreflang پشتو را به یک صفحهٔ جایگزین انگلیسی اشاره ندهید.

**روش درست نشانه‌گذاری یک صفحهٔ RTL چیست؟**

lang و dir را روی عنصر html بگذارید: lang="fa-AF" dir="rtl" برای دری و lang="ps" dir="rtl" برای پشتو. تنظیم جهت در ریشهٔ صفحه یعنی مرورگرها، صفحه‌خوان‌ها و ابزارهای ترجمه از همان ابتدا صفحه را درست می‌فهمند. اگر یک صفحه زبان‌ها را مخلوط می‌کند، مثلاً نام یک محصول انگلیسی در میان متن دری، آن بخش را با lang خودش نشانه‌گذاری کنید و برای محتوای کاربران مانند نظرها و کامنت‌ها از dir="auto" یا جداسازی bidi استفاده کنید.

گوگل گفته است که زبان صفحه را از محتوای قابل مشاهده تشخیص می‌دهد نه از ویژگی lang، اما lang هنوز برای دسترسی‌پذیری، نمایش درست فونت و شکستن کلمات مهم است و درست‌کردن آن هزینه‌ای ندارد.

**طرح RTL را چگونه بسازیم؟**

یک طرح بسازید که خودش را قرینه کند و به جای فایل‌های استایل جداگانه از ویژگی‌های منطقی CSS استفاده کنید. به جای margin-left و padding-right از margin-inline-start و padding-inline-end استفاده کنید؛ این‌ها با تغییر dir به‌طور خودکار برعکس می‌شوند. Flexbox و grid هم به‌طور پیش‌فرض از جهت سند پیروی می‌کنند.

یک چک‌لیست عملی RTL:

1. ناوبری، مسیرنماها، ستون‌های کناری و آیکون‌هایی را که جهت را نشان می‌دهند، مانند پیکان‌ها و علامت «بعدی»، قرینه کنید.
2. لوگوها، دکمه‌های پخش رسانه، نمودارهای دارای محور زمان یا شماره‌های تلفن را قرینه نکنید.
3. اعداد لاتین یا اعداد شرقی را در یک صفحه یک‌دست نگه دارید؛ مخلوط‌کردن هر دو بی‌دقت به نظر می‌رسد.
4. فیلدهای فرم را با محتوای مخلوط آزمایش کنید، مانند یک آدرس ایمیل که در یک فرم RTL تایپ می‌شود.
5. فونتی انتخاب کنید که همهٔ حروف پشتو، از جمله ښ، ږ، ځ و څ را پشتیبانی کند و برای سرعت آن را زیرمجموعه کنید.
6. ارتفاع خط را بررسی کنید: خط فارسی و پشتو اغلب نسبت به متن لاتین به فضای عمودی بیشتری نیاز دارد.

برای جنبهٔ طراحی، راهنمای ما دربارهٔ [بهترین شیوه‌های طراحی ویب‌سایت RTL](/blog/rtl-website-design-best-practices) را ببینید.

**پس از راه‌اندازی، hreflang و RTL را چگونه آزمایش کنیم؟**

سایت را با یک ابزار خزش سئو که خطاهای hreflang را گزارش می‌دهد بررسی کنید، سپس در Google Search Console مطمئن شوید که هر نسخهٔ زبانی ایندکس شده است. با URL Inspection روی نمونه‌ای از صفحات دری و پشتو ببینید گوگل کدام canonical را انتخاب کرده است؛ اگر صفحهٔ انگلیسی را به جای صفحه‌ای که شما اعلام کرده‌اید برگزیده، یعنی نشانه‌های شما با هم در تضادند.

چند جستجوی هدف را به هر زبان انجام دهید، بهتر است از یک دستگاه در افغانستان یا با VPN برای بازارهای مهاجر، و مطمئن شوید نسخهٔ درست نمایش داده می‌شود. این بررسی‌ها را پس از هر بازطراحی یا تغییر CMS تکرار کنید، چون قالب‌ها جایی هستند که hreflang معمولاً خراب می‌شود. [چک‌لیست بررسی سئوی فنی](/blog/technical-seo-audit-checklist-2026) ما این مراحل را همراه با بقیهٔ یک بررسی کامل شامل می‌شود و راهبرد کلی‌تر در [سئوی چندزبانه برای دری، پشتو و انگلیسی](/blog/multilingual-seo-dari-pashto-english) آمده است.

**با شین کار کنید**

شین ویب‌سایت‌های سه‌زبانه را روی Next.js می‌سازد و hreflang، canonical و طرح RTL را از ابتدا درست تولید می‌کند. [خدمات طراحی ویب‌سایت](/services/web-design) یا [خدمات سئوی](/services/seo) ما را ببینید، یا از طریق info@sheen.af یا +93 784 966 018 [با ما تماس بگیرید](/contact).`,
            pa: `د فارسي او پښتو سایټونو لپاره د hreflang او RTL SEO په دوو کارونو کې راټولېږي: د لټون انجنونو ته ووایئ چې هره پاڼه د کومې ژبې او سیمې لپاره ده (hreflang)، او ډاډ ترلاسه کړئ چې له ښي نه کیڼ لور ته پاڼې په سمه توګه نښه‌ګذاري او ډیزاین شوې دي (د lang او dir ځانګړتیاوې او RTL سره برابر CSS). که دواړه سم کړئ، ګوګل کولای شي ستاسو دري پاڼه دري لټونکو ته، پښتو پاڼه پښتو لټونکو ته او یو پاک او د لوستلو وړ ډیزاین ټولو ته وښيي.

**مهم ټکي**

- د دري لپاره fa-AF، د پښتو لپاره ps (یا ps-AF)، د انګلیسي لپاره en وکاروئ او یو x-default بدیل هم زیات کړئ.
- د hreflang هره ډله باید بشپړه او متقابله وي: هره پاڼه ټولې نسخې، په شمول د ځان، لست کوي.
- lang او dir="rtl" د دري او پښتو پاڼو د html پر عنصر کېږدئ، نه یوازې پر یوه بهرني div.
- د CSS منطقي ځانګړتیاوې وکاروئ څو یو سټایل فایل د کیڼ نه ښي او ښي نه کیڼ دواړو ډیزاینونو لپاره کار وکړي.
- له هرې خپرونې وروسته یې د Google Search Console او یو کرالر په مرسته وڅېړئ.

**Hreflang په اصل کې څه کار کوي؟**

Hreflang د لټون انجنونو ته وايي چې څو URLونه په بېلابېلو ژبو کې سره برابرې پاڼې دي، څو هر لټونکي ته سمه پاڼه وښيي. دا یوه اشاره ده، د رتبې فکتور نه دی: یوه کمزورې پاڼه نه پورته کوي، خو مرسته کوي چې ناسمه ژبنۍ نسخه ونه ښودل شي او ستاسو ژباړې د هغو نږدې تکراري پاڼو په توګه ونه ګڼل شي چې یو له بل سره سیالي کوي.

hreflang په درېیو ځایونو کې اعلانولای شئ: د پاڼې په head کې د link عناصر، د HTTP هېډرونه (د PDF فایلونو لپاره ګټور) یا XML sitemap. یوه طریقه وټاکئ او په یو شان یې وکاروئ. د ډېری Next.js او ورته سایټونو لپاره، د پاڼې head یا sitemap له لارو (routing) څخه په اتوماتيک ډول جوړول تر ټولو اسانه دي.

**د دري او پښتو لپاره کوم ژبني کوډونه وکاروو؟**

د ISO 639-1 ژبني کوډونه وکاروئ چې که اړتیا وي ورپسې د ISO 3166-1 د سیمې کوډ راځي. د افغان سایټونو لپاره معمولاً دا ډول دی:

- **انګلیسي**: en (یا en-US او en-GB که په رښتیا یو ټاکلی هېواد په نښه کوئ)
- **دري**: fa-AF، یعنې هغه فارسي چې په افغانستان کې کارېږي. دري خپل درې توریز کوډ (prs) لري، خو hreflang دوه توریز کوډ غواړي، نو fa-AF خوندي انتخاب دی.
- **پښتو**: ps، یا ps-AF که غواړئ په ځانګړې توګه افغانستان وښیئ.
- **x-default**: هغه پاڼه چې کله هیڅ ژبه برابره نه وي ښودل کېږي، معمولاً انګلیسي نسخه یا د ژبې د ټاکلو پاڼه.

یوه عامه تېروتنه د افغانستان لپاره د "af" کارول دي. په ژبنیو کوډونو کې af د افریکانس ژبه ده. بله تېروتنه یوازې د سیمې کوډ کارول دي، لکه "AF"، چې ناسم دی. تل لومړی ژبه راځي او بیا سیمه.

**د hreflang سمه ډله څنګه ولیکو؟**

په یوه ډله کې هره پاڼه باید د ډلې ټول غړي، په شمول د ځان، د بشپړو URLونو سره لست کړي. که انګلیسي پاڼه دري پاڼې ته اشاره کوي، دري پاڼه هم باید بېرته ورته اشاره وکړي. د بېرته راګرځېدونکي لینک نشتوالی تر ټولو عامه تېروتنه ده او کله چې پېښ شي، د لټون انجنونه ښايي دا نښې له پامه وغورځوي.

د خدماتو د یوې پاڼې لپاره بشپړه ډله څلور توکي لري: en چې انګلیسي URL ته اشاره کوي، fa-AF دري URL ته، ps پښتو URL ته او x-default انګلیسي URL ته. درې واړه پاڼې همدا څلور توکي لري.

همدارنګه وګورئ چې:

- په ډله کې هر URL د 200 حالت کوډ ورکوي، نه ریډایرکټ یا 404.
- د هرې پاڼې canonical ټګ ځان ته اشاره کوي. هغه دري پاڼه چې canonical یې انګلیسي پاڼه وي، خپل hreflang بې اغېزې کوي.
- URLونه د robots.txt له خوا بند شوي یا noindex نه وي.
- یوازې هغه پاڼې لست شي چې په رښتیا په هغه ژبه شته؛ د پښتو hreflang یوې انګلیسي بدیلې پاڼې ته مه ورکوئ.

**د RTL پاڼې د نښه‌ګذارۍ سمه لاره کومه ده؟**

lang او dir د html پر عنصر کېږدئ: د دري لپاره lang="fa-AF" dir="rtl" او د پښتو لپاره lang="ps" dir="rtl". په ریښه کې د لوري ټاکل په دې مانا دي چې براوزرونه، سکرین لوستونکي او د ژباړې وسایل له پیل څخه پاڼه سمه پېژني. که یوه پاڼه ژبې سره ګډوي، د بېلګې په توګه د دري متن په منځ کې د یو محصول انګلیسي نوم، هغه برخه په خپل lang نښه کړئ او د کاروونکو منځپانګې لکه نظرونو او کمنټونو لپاره dir="auto" یا د bidi جلا کول وکاروئ.

ګوګل ویلي دي چې د پاڼې ژبه د لیدل کېدونکې منځپانګې له مخې پېژني نه د lang ځانګړتیا له مخې، خو lang لا هم د لاسرسي، د فونټ د سم ښودلو او د کلمو د ماتولو لپاره مهم دی او سمول یې هیڅ لګښت نه لري.

**RTL ډیزاین څنګه جوړ کړو؟**

یو داسې ډیزاین جوړ کړئ چې ځان سرچپه کړي، او د جلا سټایل فایلونو پر ځای د CSS منطقي ځانګړتیاوې وکاروئ. د margin-left او padding-right پر ځای margin-inline-start او padding-inline-end وکاروئ؛ دا د dir له بدلون سره په اتوماتيک ډول اوړي. Flexbox او grid هم په ډیفالټ ډول د سند لوری تعقیبوي.

د RTL یو عملي چک‌لېسټ:

1. نیویګېشن، breadcrumbs، څنګ ستنې او هغه آیکونونه چې لوری ښيي، لکه غشي او د «بل» نښې، سرچپه کړئ.
2. لوګوګانې، د رسنیو د پلې تڼۍ، د وخت محور لرونکي چارټونه یا د تلیفون شمېرې مه سرچپه کوئ.
3. په یوه پاڼه کې لاتیني یا ختیځې عربي شمېرې یو شان وساتئ؛ د دواړو ګډول بې پروا ښکاري.
4. د فورم ساحې له ګډې منځپانګې سره وازمویئ، لکه یو ایمیل پته چې په RTL فورم کې ټایپ کېږي.
5. داسې فونټ وټاکئ چې ټول پښتو توري، په شمول د ښ، ږ، ځ او څ، ملاتړ کړي او د سرعت لپاره یې subset کړئ.
6. د کرښې لوړوالی وګورئ: فارسي او پښتو لیک ډېری وخت د لاتیني متن په پرتله ډېر عمودي ځای ته اړتیا لري.

د ډیزاین اړخ لپاره زموږ لارښود [د RTL ویب‌سایټ ډیزاین غوره کړنې](/blog/rtl-website-design-best-practices) وګورئ.

**له پیل وروسته hreflang او RTL څنګه وازمویو؟**

سایټ د داسې SEO کرالر سره وڅېړئ چې د hreflang تېروتنې راپور کوي، بیا په Google Search Console کې ډاډ ترلاسه کړئ چې هره ژبنۍ نسخه انډکس شوې ده. د دري او پښتو پاڼو په یوه نمونه URL Inspection وکاروئ څو وګورئ ګوګل کوم canonical غوره کړی دی؛ که یې د هغې پاڼې پر ځای چې تاسو اعلان کړې انګلیسي پاڼه غوره کړې وي، ستاسو نښې یو له بل سره ټکر لري.

په هره ژبه کې څو هدفي لټونونه وکړئ، غوره دا ده چې په افغانستان کې له یوې وسیلې یا د مهاجرو بازارونو لپاره د VPN په مرسته، او ډاډ ترلاسه کړئ چې سمه نسخه ښکاري. دا ازموینې له هر بیا ډیزاین یا د CMS له بدلون وروسته تکرار کړئ، ځکه کینډۍ هغه ځای دی چې hreflang معمولاً پکې ماتېږي. زموږ [د تخنیکي SEO د پلټنې چک‌لېسټ](/blog/technical-seo-audit-checklist-2026) دا ګامونه د یوې بشپړې پلټنې له نورو برخو سره لري، او پراخه ستراتیژي په [د دري، پښتو او انګلیسي لپاره څو ژبني SEO](/blog/multilingual-seo-dari-pashto-english) کې راغلې ده.

**له شین سره کار وکړئ**

شین په Next.js درې ژبني ویب‌سایټونه جوړوي او hreflang، canonical او RTL ډیزاین له پیله په سمه توګه جوړوي. زموږ [د ویب ډیزاین خدمات](/services/web-design) یا [د SEO خدمات](/services/seo) وګورئ، یا له info@sheen.af یا +93 784 966 018 له لارې [موږ سره اړیکه ونیسئ](/contact).`
        },
        faqs: [
            {
                q: { en: "Is hreflang a ranking factor?", da: "آیا hreflang یک عامل رتبه‌بندی است؟", pa: "ایا hreflang د رتبې فکتور دی؟" },
                a: {
                    en: "Not directly. Hreflang does not make a page rank higher; it helps search engines swap in the correct language or regional version of a page that already ranks. The benefit is indirect but real: Dari and Pashto searchers see a page in their own language, which tends to earn more clicks, and your translations stop competing with each other as near-duplicates.",
                    da: "نه به‌طور مستقیم. hreflang صفحه را بالاتر رتبه نمی‌دهد؛ به موتورهای جستجو کمک می‌کند نسخهٔ زبانی یا منطقه‌ای درست صفحه‌ای را که از قبل رتبه دارد نمایش دهند. فایدهٔ آن غیرمستقیم اما واقعی است: جستجوکنندگان دری و پشتو صفحه‌ای به زبان خود می‌بینند که معمولاً کلیک بیشتری می‌گیرد، و ترجمه‌های شما دیگر مانند صفحات تقریباً تکراری با هم رقابت نمی‌کنند.",
                    pa: "په مستقیم ډول نه. hreflang پاڼه په لوړه رتبه نه رسوي؛ د لټون انجنونو سره مرسته کوي چې د هغې پاڼې سمه ژبنۍ یا سیمه‌ییزه نسخه وښيي چې دمخه رتبه لري. ګټه یې غیر مستقیمه خو رښتینې ده: دري او پښتو لټونکي په خپله ژبه پاڼه ویني چې معمولاً ډېر کلیکونه ترلاسه کوي، او ستاسو ژباړې نور د نږدې تکراري پاڼو په توګه یو له بل سره سیالي نه کوي."
                }
            },
            {
                q: { en: "Should I use fa or fa-AF for a Dari website?", da: "برای ویب‌سایت دری از fa استفاده کنم یا fa-AF؟", pa: "د دري ویب‌سایټ لپاره fa وکاروم که fa-AF؟" },
                a: {
                    en: "Use fa-AF if your Dari content is written for Afghan readers, which is almost always the case for Afghan businesses. It tells search engines the content is Persian as used in Afghanistan. If you also publish a separate Iranian Persian version, label that one fa-IR. Plain fa works as a general fallback, but fa-AF is the more precise and accurate signal.",
                    da: "اگر محتوای دری شما برای خوانندگان افغان نوشته شده، که تقریباً همیشه برای تجارت‌های افغان همین‌طور است، از fa-AF استفاده کنید. این به موتورهای جستجو می‌گوید که محتوا فارسی رایج در افغانستان است. اگر یک نسخهٔ جداگانهٔ فارسی ایرانی هم دارید، آن را fa-IR بنامید. fa ساده به‌عنوان پشتیبان عمومی کار می‌کند، اما fa-AF نشانهٔ دقیق‌تر و درست‌تری است.",
                    pa: "که ستاسو دري منځپانګه د افغان لوستونکو لپاره لیکل شوې وي، چې د افغان سوداګریو لپاره تقریباً تل همداسې وي، fa-AF وکاروئ. دا د لټون انجنونو ته وايي چې منځپانګه هغه فارسي ده چې په افغانستان کې کارېږي. که د ایراني فارسي جلا نسخه هم خپروئ، هغې ته fa-IR ووایئ. ساده fa د عمومي بدیل په توګه کار کوي، خو fa-AF دقیقه او سمه نښه ده."
                }
            },
            {
                q: { en: "Do I need an x-default hreflang tag?", da: "آیا به برچسب hreflang از نوع x-default نیاز دارم؟", pa: "ایا د x-default hreflang ټګ ته اړتیا لرم؟" },
                a: {
                    en: "It is optional but recommended. x-default tells search engines which page to show when a searcher's language does not match any of your versions, for example someone searching in Turkish or Urdu. Most trilingual Afghan sites point x-default to the English version, or to a simple language-selection page if the homepage asks visitors to choose a language.",
                    da: "اختیاری است اما توصیه می‌شود. x-default به موتورهای جستجو می‌گوید وقتی زبان جستجوکننده با هیچ‌یک از نسخه‌های شما مطابقت ندارد، مثلاً کسی که به ترکی یا اردو جستجو می‌کند، کدام صفحه را نشان دهند. بیشتر سایت‌های سه‌زبانهٔ افغان x-default را به نسخهٔ انگلیسی اشاره می‌دهند، یا به یک صفحهٔ سادهٔ انتخاب زبان اگر صفحهٔ اصلی از بازدیدکننده می‌خواهد زبان را انتخاب کند.",
                    pa: "اختیاري دی خو سپارښتنه یې کېږي. x-default د لټون انجنونو ته وايي چې کله د لټونکي ژبه ستاسو له هیڅ نسخې سره برابره نه وي، د بېلګې په توګه څوک چې په ترکي یا اردو لټون کوي، کومه پاڼه وښيي. ډېری درې ژبني افغان سایټونه x-default انګلیسي نسخې ته ورکوي، یا یوې ساده د ژبې د ټاکلو پاڼې ته که کورپاڼه له لیدونکو غواړي چې ژبه وټاکي."
                }
            },
            {
                q: { en: "Can one stylesheet handle both English and RTL pages?", da: "آیا یک فایل استایل می‌تواند هم صفحات انگلیسی و هم صفحات RTL را مدیریت کند؟", pa: "ایا یو سټایل فایل کولای شي انګلیسي او RTL پاڼې دواړه اداره کړي؟" },
                a: {
                    en: "Yes, if you write it with CSS logical properties such as margin-inline-start, padding-inline-end and inset-inline-start instead of left and right. These follow the dir attribute automatically, so the same rules produce a left-to-right English page and a right-to-left Dari or Pashto page. You will still need small overrides for icons, fonts and line height.",
                    da: "بله، اگر آن را با ویژگی‌های منطقی CSS مانند margin-inline-start، padding-inline-end و inset-inline-start به جای left و right بنویسید. این‌ها به‌طور خودکار از ویژگی dir پیروی می‌کنند، بنابراین همان قواعد یک صفحهٔ انگلیسی چپ‌به‌راست و یک صفحهٔ دری یا پشتوی راست‌به‌چپ می‌سازند. با این حال برای آیکون‌ها، فونت‌ها و ارتفاع خط به تنظیمات کوچک جداگانه نیاز خواهید داشت.",
                    pa: "هو، که یې د left او right پر ځای د CSS په منطقي ځانګړتیاوو لکه margin-inline-start، padding-inline-end او inset-inline-start ولیکئ. دا په اتوماتيک ډول د dir ځانګړتیا تعقیبوي، نو همغه قواعد یوه کیڼ نه ښي انګلیسي پاڼه او یوه ښي نه کیڼ دري یا پښتو پاڼه جوړوي. خو بیا هم د آیکونونو، فونټونو او د کرښې د لوړوالي لپاره کوچنیو جلا سمونونو ته اړتیا لرئ."
                }
            }
        ],
        category: "seo",
        author: "Suliman Hakimi",
        date: "2026-09-19",
        updated: "2026-09-19",
        readTime: "5 min read",
        image: "/logo.png",
        tags: ["hreflang rtl seo", "hreflang for Persian", "Pashto hreflang", "fa-AF hreflang", "RTL website SEO", "technical SEO", "CSS logical properties", "Afghanistan"]
    },
    {
        id: "139",
        slug: "core-web-vitals-inp-2026",
        title: {
            en: "Core Web Vitals in 2026: Fixing INP, LCP and CLS",
            da: "Core Web Vitals در ۲۰۲۶: رفع مشکلات INP، LCP و CLS",
            pa: "Core Web Vitals په ۲۰۲۶ کې: د INP، LCP او CLS سمول"
        },
        excerpt: {
            en: "Core Web Vitals INP, LCP and CLS explained for 2026: the thresholds, why INP fails, and step-by-step fixes for faster, more responsive websites in Afghanistan.",
            da: "توضیح Core Web Vitals یعنی INP، LCP و CLS برای ۲۰۲۶: آستانه‌ها، دلیل ناکامی INP و راه‌حل‌های گام‌به‌گام برای ویب‌سایت‌های سریع‌تر و پاسخ‌گوتر در افغانستان.",
            pa: "د ۲۰۲۶ لپاره د Core Web Vitals یعنې INP، LCP او CLS تشریح: حدونه، د INP د ناکامۍ لامل او په افغانستان کې د ګړندیو او ځواب ویونکو ویب‌سایټونو لپاره ګام په ګام حلونه."
        },
        content: {
            en: `Core Web Vitals are Google's three user-experience metrics, and in 2026 INP (Interaction to Next Paint) is the one most sites struggle with: it measures how quickly a page responds when someone taps or clicks. To pass, a page needs an LCP of 2.5 seconds or less, an INP of 200 milliseconds or less, and a CLS of 0.1 or less, measured at the 75th percentile of real visits.

**Key Takeaways**

- INP replaced First Input Delay as a Core Web Vital in March 2024 and is stricter, because it looks at interactions throughout the visit, not only the first.
- Most INP problems come from too much JavaScript running on the main thread: heavy frameworks, third-party scripts and large event handlers.
- LCP is usually fixed by serving a smaller, prioritised hero image and a faster server response.
- CLS is fixed by reserving space for images, ads, embeds and web fonts.
- Judge your site by field data from real users, not only by a lab score.

**What Are the Core Web Vitals Thresholds in 2026?**

The three metrics and their "good" thresholds are:

- **LCP (Largest Contentful Paint)**: the main content appears within 2.5 seconds.
- **INP (Interaction to Next Paint)**: the page visibly responds to taps, clicks and key presses within 200 milliseconds.
- **CLS (Cumulative Layout Shift)**: the layout shift score stays at 0.1 or below, so buttons do not jump under people's fingers.

A URL passes when at least 75 percent of real page loads meet each threshold. Google collects this data through the Chrome User Experience Report (CrUX), and you see it in Search Console's Core Web Vitals report and in PageSpeed Insights. Core Web Vitals are part of Google's page experience signals; they rarely outweigh relevance, but between two similar pages the faster one has an edge, and the conversion benefits of a fast site are real regardless of rankings.

**Why Is INP Harder to Pass Than FID Was?**

INP measures the full delay of interactions throughout the visit, while FID only measured the input delay of the first one. A page could pass FID simply because nothing was busy when the user first tapped, then freeze for half a second when they opened a menu or added an item to the cart. INP catches that.

An interaction has three parts: input delay (waiting for the main thread to be free), processing time (your event handlers running), and presentation delay (the browser calculating layout and painting the new frame). INP reports roughly the slowest interaction on the page, so a single sluggish filter or accordion can fail the whole URL.

**How Do You Fix a Poor INP Score?**

Reduce the work the main thread must do around each interaction, and give it chances to breathe. In rough order of impact for most business sites:

1. **Audit third-party scripts.** Chat widgets, tag managers, heatmaps and social embeds often add the most main-thread work. Remove what you do not use and load the rest after interaction or when the browser is idle.
2. **Ship less JavaScript.** Frameworks like Next.js with React Server Components let you render most of a page on the server and send JavaScript only for the parts that are truly interactive.
3. **Break up long tasks.** Split heavy event handlers so the browser can paint between chunks; yielding to the main thread (for example with scheduler.yield where supported, or a setTimeout fallback) lets the visual response appear first.
4. **Update the UI before doing the expensive work.** Show the menu opening or the button state change immediately, then run analytics calls and data processing afterwards.
5. **Avoid large DOM updates.** Re-rendering a 2,000-row table on every keystroke will fail INP; virtualise long lists and debounce search inputs.
6. **Watch CSS and layout cost.** Very large pages with complex selectors make the presentation phase slow.

Use the Performance panel in Chrome DevTools with CPU throttling enabled to reproduce the problem. Many visitors in Afghanistan use mid-range Android phones, which are much slower than a developer's laptop.

**How Do You Improve LCP on Slow Connections?**

Make the largest element, usually a hero image or headline, arrive and render as early as possible. Serve images in AVIF or WebP at the size actually displayed, mark the hero image with fetchpriority="high", and never lazy-load it. Use a CDN so files come from a location near the visitor; a server in Europe or the Gulf is typically closer to users in Kabul than one in the United States. Cache HTML where you can, and preload the one web font your headline uses.

On expensive mobile data, page weight matters as much as speed. We cover this in detail in our article on [website speed for slow internet in Afghanistan](/blog/website-speed-slow-internet-afghanistan).

**How Do You Stop Layout Shifts (CLS)?**

Reserve space for everything that loads late. Set width and height (or aspect-ratio) on images and video, give ad slots and embeds a fixed minimum height, and avoid inserting banners above existing content after the page has rendered. Web fonts cause shifts when the fallback font has different metrics; use font-display: swap together with size-adjusted fallbacks, or preload the font. Persian and Pashto fonts are a frequent source of CLS on Afghan sites because they are large and their metrics differ a lot from system fonts.

**How Should You Measure and Monitor Core Web Vitals?**

Start with field data, then use lab tools to debug. Check Search Console's Core Web Vitals report, which groups similar URLs, and PageSpeed Insights for individual pages. If your site has too little traffic to appear in CrUX, add real-user monitoring with the open-source web-vitals library and send the results to GA4 or your own analytics.

Treat performance as a budget: set limits on JavaScript size and third-party tags, and re-check after every release. Core Web Vitals are one section of our [technical SEO audit checklist](/blog/technical-seo-audit-checklist-2026), and if you are choosing a stack, our guide to [Next.js 16 for business websites](/blog/nextjs-16-for-business-websites) explains why server rendering helps INP.

**Work With Sheen**

Sheen builds fast Next.js websites and fixes Core Web Vitals on existing sites as part of our [SEO services](/services/seo) and [web design](/services/web-design) work. [Book a call](/book), or email info@sheen.af or phone +93 784 966 018.`,
            da: `Core Web Vitals سه معیار تجربهٔ کاربری گوگل هستند و در سال ۲۰۲۶، INP (Interaction to Next Paint) همان معیاری است که بیشتر سایت‌ها با آن مشکل دارند: این معیار اندازه می‌گیرد که وقتی کسی لمس یا کلیک می‌کند، صفحه چقدر سریع پاسخ می‌دهد. برای قبول‌شدن، صفحه باید LCP برابر ۲٫۵ ثانیه یا کمتر، INP برابر ۲۰۰ میلی‌ثانیه یا کمتر و CLS برابر ۰٫۱ یا کمتر داشته باشد که در صدک ۷۵ بازدیدهای واقعی اندازه‌گیری می‌شود.

**نکات کلیدی**

- INP در مارچ ۲۰۲۴ جای First Input Delay را به‌عنوان یکی از Core Web Vitals گرفت و سخت‌گیرتر است، چون تعامل‌ها را در سراسر بازدید بررسی می‌کند، نه فقط اولین تعامل را.
- بیشتر مشکلات INP از اجرای بیش از حد جاوااسکریپت روی رشتهٔ اصلی می‌آید: فریم‌ورک‌های سنگین، اسکریپت‌های شخص ثالث و رویدادگردان‌های بزرگ.
- LCP معمولاً با ارائهٔ یک تصویر اصلی کوچک‌تر و اولویت‌دار و پاسخ سریع‌تر سرور درست می‌شود.
- CLS با رزرو فضا برای تصاویر، اعلانات، محتوای جاسازی‌شده و فونت‌های وب درست می‌شود.
- سایت خود را با داده‌های میدانی از کاربران واقعی بسنجید، نه فقط با نمرهٔ آزمایشگاهی.

**آستانه‌های Core Web Vitals در ۲۰۲۶ چیست؟**

سه معیار و آستانه‌های «خوب» آن‌ها این‌ها هستند:

- **LCP (Largest Contentful Paint)**: محتوای اصلی در ۲٫۵ ثانیه ظاهر شود.
- **INP (Interaction to Next Paint)**: صفحه در ۲۰۰ میلی‌ثانیه به لمس، کلیک و فشردن کلید پاسخ قابل مشاهده بدهد.
- **CLS (Cumulative Layout Shift)**: نمرهٔ جابه‌جایی طرح ۰٫۱ یا کمتر بماند تا دکمه‌ها زیر انگشت مردم جابه‌جا نشوند.

یک URL زمانی قبول می‌شود که دست‌کم ۷۵ درصد بارگذاری‌های واقعی صفحه هر آستانه را برآورده کنند. گوگل این داده‌ها را از طریق Chrome User Experience Report (CrUX) جمع می‌کند و شما آن را در گزارش Core Web Vitals در Search Console و در PageSpeed Insights می‌بینید. Core Web Vitals بخشی از نشانه‌های تجربهٔ صفحهٔ گوگل هستند؛ به‌ندرت از مرتبط‌بودن محتوا مهم‌تر می‌شوند، اما میان دو صفحهٔ مشابه، صفحهٔ سریع‌تر برتری دارد و فایده‌های یک سایت سریع برای تبدیل بازدیدکننده به مشتری، صرف‌نظر از رتبه، واقعی است.

**چرا قبول‌شدن در INP سخت‌تر از FID است؟**

INP تأخیر کامل تعامل‌ها را در سراسر بازدید اندازه می‌گیرد، در حالی که FID فقط تأخیر ورودی اولین تعامل را می‌سنجید. یک صفحه می‌توانست در FID قبول شود فقط به این دلیل که هنگام اولین لمس کاربر چیزی مشغول نبود، و سپس هنگام بازکردن منو یا افزودن جنس به سبد خرید نیم ثانیه قفل شود. INP این را می‌گیرد.

هر تعامل سه بخش دارد: تأخیر ورودی (انتظار برای آزادشدن رشتهٔ اصلی)، زمان پردازش (اجرای رویدادگردان‌های شما) و تأخیر نمایش (محاسبهٔ طرح و رسم فریم جدید توسط مرورگر). INP تقریباً کندترین تعامل صفحه را گزارش می‌دهد، بنابراین یک فیلتر یا آکاردئون کند می‌تواند کل URL را ناکام کند.

**نمرهٔ ضعیف INP را چگونه درست کنیم؟**

کاری را که رشتهٔ اصلی در اطراف هر تعامل باید انجام دهد کم کنید و به آن فرصت نفس‌کشیدن بدهید. به ترتیب تقریبی اثرگذاری برای بیشتر سایت‌های تجارتی:

1. **اسکریپت‌های شخص ثالث را بررسی کنید.** ویجت‌های چت، مدیران تگ، نقشه‌های حرارتی و محتوای جاسازی‌شدهٔ شبکه‌های اجتماعی اغلب بیشترین کار را به رشتهٔ اصلی اضافه می‌کنند. آنچه را استفاده نمی‌کنید حذف کنید و بقیه را پس از تعامل یا هنگام بیکاری مرورگر بارگذاری کنید.
2. **جاوااسکریپت کمتری بفرستید.** فریم‌ورک‌هایی مانند Next.js با React Server Components به شما اجازه می‌دهند بیشتر صفحه را روی سرور بسازید و فقط برای بخش‌های واقعاً تعاملی جاوااسکریپت بفرستید.
3. **کارهای طولانی را بشکنید.** رویدادگردان‌های سنگین را تقسیم کنید تا مرورگر بتواند میان بخش‌ها صفحه را رسم کند؛ واگذاری نوبت به رشتهٔ اصلی (مثلاً با scheduler.yield در جایی که پشتیبانی می‌شود، یا setTimeout به‌عنوان جایگزین) اجازه می‌دهد پاسخ بصری اول نمایش داده شود.
4. **پیش از کار سنگین، رابط کاربری را به‌روز کنید.** بازشدن منو یا تغییر حالت دکمه را فوراً نشان دهید، سپس فراخوانی‌های تحلیلی و پردازش داده را اجرا کنید.
5. **از به‌روزرسانی‌های بزرگ DOM پرهیز کنید.** بازسازی یک جدول ۲۰۰۰ ردیفی با هر فشار کلید در INP ناکام می‌شود؛ فهرست‌های طولانی را مجازی‌سازی کنید و ورودی‌های جستجو را با تأخیر (debounce) پردازش کنید.
6. **هزینهٔ CSS و طرح را زیر نظر بگیرید.** صفحات بسیار بزرگ با انتخاب‌گرهای پیچیده مرحلهٔ نمایش را کند می‌کنند.

برای بازتولید مشکل از پنل Performance در Chrome DevTools با فعال‌کردن کاهش سرعت CPU استفاده کنید. بسیاری از بازدیدکنندگان در افغانستان از گوشی‌های اندروید میان‌رده استفاده می‌کنند که بسیار کندتر از لپ‌تاپ یک برنامه‌نویس هستند.

**LCP را در اتصال‌های کند چگونه بهتر کنیم؟**

کاری کنید بزرگ‌ترین عنصر، که معمولاً تصویر اصلی یا سرخط است، هرچه زودتر برسد و نمایش داده شود. تصاویر را با فرمت AVIF یا WebP و به اندازه‌ای که واقعاً نمایش داده می‌شوند ارائه کنید، تصویر اصلی را با fetchpriority="high" مشخص کنید و هرگز آن را lazy-load نکنید. از CDN استفاده کنید تا فایل‌ها از مکانی نزدیک به بازدیدکننده بیایند؛ سروری در اروپا یا خلیج معمولاً به کاربران کابل نزدیک‌تر از سروری در ایالات متحده است. هر جا ممکن است HTML را کش کنید و آن یک فونت وبی را که سرخط شما استفاده می‌کند پیش‌بارگذاری کنید.

در انترنت موبایل گران، وزن صفحه به اندازهٔ سرعت مهم است. این موضوع را با جزئیات در مقالهٔ ما دربارهٔ [سرعت ویب‌سایت برای انترنت کند در افغانستان](/blog/website-speed-slow-internet-afghanistan) پوشش داده‌ایم.

**جابه‌جایی طرح (CLS) را چگونه متوقف کنیم؟**

برای هر چیزی که دیر بارگذاری می‌شود فضا رزرو کنید. برای تصاویر و ویدیوها width و height (یا aspect-ratio) تعیین کنید، به جای اعلانات و محتوای جاسازی‌شده حداقل ارتفاع ثابت بدهید و پس از نمایش صفحه، بنرها را بالای محتوای موجود اضافه نکنید. فونت‌های وب زمانی باعث جابه‌جایی می‌شوند که فونت جایگزین ابعاد متفاوت داشته باشد؛ از font-display: swap همراه با فونت‌های جایگزین تنظیم‌شده استفاده کنید یا فونت را پیش‌بارگذاری کنید. فونت‌های فارسی و پشتو یکی از منابع رایج CLS در سایت‌های افغان هستند، چون حجم زیادی دارند و ابعادشان با فونت‌های سیستم بسیار فرق دارد.

**Core Web Vitals را چگونه اندازه بگیریم و زیر نظر داشته باشیم؟**

با داده‌های میدانی شروع کنید و سپس برای رفع اشکال از ابزارهای آزمایشگاهی استفاده کنید. گزارش Core Web Vitals در Search Console را که URLهای مشابه را گروه‌بندی می‌کند و PageSpeed Insights را برای صفحات جداگانه بررسی کنید. اگر سایت شما ترافیک کافی برای نمایش در CrUX ندارد، با کتابخانهٔ متن‌باز web-vitals نظارت بر کاربران واقعی را اضافه کنید و نتایج را به GA4 یا ابزار تحلیلی خودتان بفرستید.

کارایی را مانند یک بودجه ببینید: برای حجم جاوااسکریپت و تگ‌های شخص ثالث حد تعیین کنید و پس از هر انتشار دوباره بررسی کنید. Core Web Vitals یکی از بخش‌های [چک‌لیست بررسی سئوی فنی](/blog/technical-seo-audit-checklist-2026) ماست، و اگر در حال انتخاب فناوری هستید، راهنمای ما دربارهٔ [Next.js 16 برای ویب‌سایت‌های تجارتی](/blog/nextjs-16-for-business-websites) توضیح می‌دهد که چرا ساخت صفحه روی سرور به INP کمک می‌کند.

**با شین کار کنید**

شین ویب‌سایت‌های سریع Next.js می‌سازد و Core Web Vitals سایت‌های موجود را به‌عنوان بخشی از [خدمات سئو](/services/seo) و [طراحی ویب‌سایت](/services/web-design) درست می‌کند. [یک تماس رزرو کنید](/book)، یا به info@sheen.af ایمیل بزنید یا با +93 784 966 018 تماس بگیرید.`,
            pa: `Core Web Vitals د ګوګل درې د کاروونکي د تجربې معیارونه دي او په ۲۰۲۶ کې INP (Interaction to Next Paint) هغه معیار دی چې ډېری سایټونه ورسره ستونزه لري: دا اندازه کوي چې کله څوک ټچ یا کلیک کوي، پاڼه څومره ژر ځواب ورکوي. د بریالیتوب لپاره پاڼه باید ۲٫۵ ثانیې یا لږ LCP، ۲۰۰ ملي ثانیې یا لږ INP او ۰٫۱ یا لږ CLS ولري چې د رښتینو لیدنو په ۷۵م سلنیز کې اندازه کېږي.

**مهم ټکي**

- INP د ۲۰۲۴ په مارچ کې د Core Web Vital په توګه د First Input Delay ځای ونیو او سخت دی، ځکه د لیدنې په اوږدو کې ټول تعاملونه ګوري، نه یوازې لومړی.
- د INP ډېری ستونزې په اصلي تار (main thread) د ډېر جاوااسکریپټ له چلېدو راځي: درانه فریم‌ورکونه، د دریمې ډلې سکریپټونه او لوی پېښه‌چلوونکي.
- LCP معمولاً د یو کوچني او لومړیتوب لرونکي اصلي انځور او د سرور د ګړندي ځواب په مرسته سمېږي.
- CLS د انځورونو، اعلانونو، ځای پر ځای شوې منځپانګې او ویب فونټونو لپاره د ځای په ساتلو سمېږي.
- خپل سایټ د رښتینو کاروونکو د ساحوي معلوماتو له مخې وارزوئ، نه یوازې د لابراتواري نمرې له مخې.

**په ۲۰۲۶ کې د Core Web Vitals حدونه څه دي؟**

درې معیارونه او د هغوی «ښه» حدونه دا دي:

- **LCP (Largest Contentful Paint)**: اصلي منځپانګه په ۲٫۵ ثانیو کې ښکاره شي.
- **INP (Interaction to Next Paint)**: پاڼه په ۲۰۰ ملي ثانیو کې ټچ، کلیک او د کیلي فشار ته د لیدو وړ ځواب ورکړي.
- **CLS (Cumulative Layout Shift)**: د ډیزاین د ښوریدو نمره ۰٫۱ یا لږه پاتې شي څو تڼۍ د خلکو د ګوتو لاندې ځای بدل نه کړي.

یو URL هغه وخت بریالی کېږي چې لږ تر لږه ۷۵ سلنه د پاڼې رښتیني بارېدنې هر حد پوره کړي. ګوګل دا معلومات د Chrome User Experience Report (CrUX) له لارې راټولوي او تاسو یې د Search Console د Core Web Vitals په راپور او PageSpeed Insights کې وینئ. Core Web Vitals د ګوګل د پاڼې د تجربې د نښو برخه ده؛ ډېر کم د منځپانګې له اړوندوالي ډېر وزن لري، خو د دوو ورته پاڼو ترمنځ ګړندۍ پاڼه برترې لري، او د ګړندي سایټ ګټې د پېرودونکو د جذب لپاره، د رتبې پرته، رښتینې دي.

**ولې په INP کې بریالي کېدل د FID په پرتله سخت دي؟**

INP د لیدنې په اوږدو کې د تعاملونو بشپړ ځنډ اندازه کوي، په داسې حال کې چې FID یوازې د لومړي تعامل د ننوتو ځنډ اندازه کاوه. یوه پاڼه کولای شوای په FID کې یوازې په دې بریالۍ شي چې د کاروونکي د لومړي ټچ پر مهال هیڅ شی بوخت نه و، او بیا د مینو د خلاصولو یا ټوکرۍ ته د توکي د اچولو پر مهال نیمه ثانیه ودرېږي. INP دا نیسي.

هر تعامل درې برخې لري: د ننوتو ځنډ (د اصلي تار د خلاصېدو انتظار)، د پروسس وخت (ستاسو د پېښه‌چلوونکو چلېدل) او د ښودنې ځنډ (د براوزر له خوا د ډیزاین محاسبه او د نوي فریم انځورول). INP تقریباً د پاڼې تر ټولو ورو تعامل راپور کوي، نو یو ورو فلټر یا اکاردیون کولای شي ټول URL ناکام کړي.

**د INP کمزورې نمره څنګه سمه کړو؟**

هغه کار کم کړئ چې اصلي تار یې باید د هر تعامل په شاوخوا کې وکړي، او هغه ته د ساه اخیستلو فرصت ورکړئ. د ډېری سوداګریزو سایټونو لپاره د اغېز د تقریبي ترتیب له مخې:

1. **د دریمې ډلې سکریپټونه وڅېړئ.** د چټ ویجټونه، ټګ مدیران، تودوخې نقشې او د ټولنیزو رسنیو ځای پر ځای شوې منځپانګه ډېری وخت اصلي تار ته تر ټولو ډېر کار زیاتوي. هغه څه لرې کړئ چې نه یې کاروئ او پاتې یې له تعامل وروسته یا د براوزر د وزګارتیا پر مهال بار کړئ.
2. **لږ جاوااسکریپټ ولېږئ.** فریم‌ورکونه لکه Next.js د React Server Components سره اجازه درکوي چې د پاڼې ډېره برخه پر سرور جوړه کړئ او یوازې د رښتیا تعاملي برخو لپاره جاوااسکریپټ ولېږئ.
3. **اوږدې دندې ماتې کړئ.** درانه پېښه‌چلوونکي ووېشئ څو براوزر وکولای شي د ټوټو ترمنځ پاڼه انځور کړي؛ اصلي تار ته د نوبت ورکول (د بېلګې په توګه د scheduler.yield په مرسته هلته چې ملاتړ کېږي، یا د setTimeout بدیل) اجازه ورکوي چې لیدنیز ځواب لومړی ښکاره شي.
4. **له دروند کار مخکې کارن انټرفېس تازه کړئ.** د مینو خلاصېدل یا د تڼۍ د حالت بدلون سمدستي وښیئ، بیا د تحلیل غوښتنې او د معلوماتو پروسس وروسته وچلوئ.
5. **د DOM له لویو تازه کولو ډډه وکړئ.** د هر کیلي په فشار د ۲۰۰۰ قطاره جدول بیا جوړول به په INP کې ناکام شي؛ اوږده لستونه مجازي کړئ او د لټون ننوتې په ځنډ (debounce) پروسس کړئ.
6. **د CSS او ډیزاین لګښت ته پام وکړئ.** ډېرې لویې پاڼې د پېچلو ټاکونکو سره د ښودنې پړاو ورو کوي.

د ستونزې د بیا رامنځته کولو لپاره په Chrome DevTools کې د Performance پینل د CPU د ورو کولو سره وکاروئ. په افغانستان کې ډېر لیدونکي منځنۍ کچې اندرایډ تلیفونونه کاروي چې د یو پروګرامر له لپ‌ټاپ ډېر ورو دي.

**په ورو اتصالونو کې LCP څنګه ښه کړو؟**

داسې وکړئ چې تر ټولو لوی عنصر، چې معمولاً اصلي انځور یا سرلیک وي، ژر تر ژره ورسېږي او وښودل شي. انځورونه په AVIF یا WebP بڼه او په هغه اندازه وړاندې کړئ چې په رښتیا ښودل کېږي، اصلي انځور په fetchpriority="high" نښه کړئ او هېڅکله یې lazy-load مه کوئ. CDN وکاروئ څو فایلونه لیدونکي ته له نږدې ځای راشي؛ په اروپا یا خلیج کې سرور معمولاً د کابل کاروونکو ته په متحده ایالاتو کې د سرور په پرتله نږدې دی. هر چېرې چې کېږي HTML کش کړئ او هغه یو ویب فونټ مخکې له مخکې بار کړئ چې ستاسو سرلیک یې کاروي.

په ګران موبایل انټرنېټ کې د پاڼې وزن د سرعت په اندازه مهم دی. دا موضوع مو په تفصیل سره په خپله لیکنه [په افغانستان کې د ورو انټرنېټ لپاره د ویب‌سایټ سرعت](/blog/website-speed-slow-internet-afghanistan) کې څېړلې ده.

**د ډیزاین ښوریدل (CLS) څنګه ودروو؟**

د هر هغه څه لپاره ځای وساتئ چې ناوخته بارېږي. د انځورونو او ویډیوګانو لپاره width او height (یا aspect-ratio) وټاکئ، د اعلانونو او ځای پر ځای شوې منځپانګې ځایونو ته ثابت لږ تر لږه لوړوالی ورکړئ، او د پاڼې له ښودلو وروسته د موجودې منځپانګې پورته بنرونه مه ورزیاتوئ. ویب فونټونه هغه وخت د ښوریدو لامل کېږي چې بدیل فونټ بېل ابعاد ولري؛ font-display: swap له برابر شویو بدیلو فونټونو سره وکاروئ یا فونټ مخکې له مخکې بار کړئ. فارسي او پښتو فونټونه په افغان سایټونو کې د CLS یوه عامه سرچینه ده، ځکه لوی دي او ابعاد یې د سیسټم له فونټونو ډېر توپیر لري.

**Core Web Vitals څنګه اندازه او وڅارو؟**

له ساحوي معلوماتو پیل وکړئ، بیا د ستونزو د موندلو لپاره لابراتواري وسایل وکاروئ. په Search Console کې د Core Web Vitals راپور چې ورته URLونه ډله‌بندي کوي، او د جلا پاڼو لپاره PageSpeed Insights وګورئ. که ستاسو سایټ په CrUX کې د ښودلو لپاره کافي ترافیک نه لري، د خلاصې سرچینې web-vitals کتابتون په مرسته د رښتینو کاروونکو څارنه زیاته کړئ او پایلې GA4 یا خپل تحلیلي سیسټم ته ولېږئ.

فعالیت د یوې بودیجې په څېر وګورئ: د جاوااسکریپټ د اندازې او د دریمې ډلې ټګونو لپاره حدونه وټاکئ او له هرې خپرونې وروسته یې بیا وګورئ. Core Web Vitals زموږ د [تخنیکي SEO د پلټنې چک‌لېسټ](/blog/technical-seo-audit-checklist-2026) یوه برخه ده، او که د ټیکنالوژۍ په ټاکلو بوخت یاست، زموږ لارښود [د سوداګریزو ویب‌سایټونو لپاره Next.js 16](/blog/nextjs-16-for-business-websites) تشریح کوي چې پر سرور د پاڼې جوړول ولې INP سره مرسته کوي.

**له شین سره کار وکړئ**

شین ګړندي Next.js ویب‌سایټونه جوړوي او د موجودو سایټونو Core Web Vitals زموږ د [SEO خدماتو](/services/seo) او [ویب ډیزاین](/services/web-design) د کار د یوې برخې په توګه سموي. [یوه اړیکه بوک کړئ](/book)، یا info@sheen.af ته ایمیل ولېږئ یا +93 784 966 018 ته زنګ ووهئ.`
        },
        faqs: [
            {
                q: { en: "What is a good INP score?", da: "نمرهٔ خوب INP چقدر است؟", pa: "د INP ښه نمره څومره ده؟" },
                a: {
                    en: "An INP of 200 milliseconds or less is rated good. Between 200 and 500 milliseconds needs improvement, and anything above 500 milliseconds is poor. Google evaluates the 75th percentile of real visits, so a page passes only when at least three out of four page loads respond within 200 milliseconds, measured separately for mobile and desktop users.",
                    da: "INP برابر ۲۰۰ میلی‌ثانیه یا کمتر خوب شمرده می‌شود. بین ۲۰۰ تا ۵۰۰ میلی‌ثانیه نیاز به بهبود دارد و بالاتر از ۵۰۰ میلی‌ثانیه ضعیف است. گوگل صدک ۷۵ بازدیدهای واقعی را ارزیابی می‌کند، پس یک صفحه فقط زمانی قبول می‌شود که دست‌کم سه از هر چهار بارگذاری صفحه در ۲۰۰ میلی‌ثانیه پاسخ بدهند، و این برای کاربران موبایل و دسکتاپ جداگانه سنجیده می‌شود.",
                    pa: "۲۰۰ ملي ثانیې یا لږ INP ښه ګڼل کېږي. له ۲۰۰ تر ۵۰۰ ملي ثانیو پورې ښه کولو ته اړتیا لري او له ۵۰۰ ملي ثانیو پورته کمزوری دی. ګوګل د رښتینو لیدنو ۷۵م سلنیز ارزوي، نو یوه پاڼه یوازې هغه وخت بریالۍ کېږي چې لږ تر لږه له هرو څلورو بارېدنو درې یې په ۲۰۰ ملي ثانیو کې ځواب ورکړي، او دا د موبایل او ډیسکټاپ کاروونکو لپاره جلا اندازه کېږي."
                }
            },
            {
                q: { en: "Do Core Web Vitals directly affect Google rankings?", da: "آیا Core Web Vitals مستقیماً بر رتبه‌های گوگل اثر دارند؟", pa: "ایا Core Web Vitals په مستقیم ډول د ګوګل په رتبو اغېز لري؟" },
                a: {
                    en: "They are a confirmed but modest ranking signal within Google's page experience systems. Relevant, helpful content still matters far more, so a fast page with weak content will not outrank a slower page that answers the query better. Their bigger impact is on users: faster, more responsive pages tend to keep visitors longer and turn more of them into enquiries and sales.",
                    da: "این‌ها یک نشانهٔ رتبه‌بندی تأییدشده اما محدود در سیستم‌های تجربهٔ صفحهٔ گوگل هستند. محتوای مرتبط و مفید هنوز بسیار مهم‌تر است، پس یک صفحهٔ سریع با محتوای ضعیف از صفحهٔ کندتری که به پرسش بهتر پاسخ می‌دهد بالاتر نمی‌رود. اثر بزرگ‌تر آن‌ها روی کاربران است: صفحات سریع‌تر و پاسخ‌گوتر معمولاً بازدیدکنندگان را بیشتر نگه می‌دارند و تعداد بیشتری از آن‌ها را به درخواست و فروش تبدیل می‌کنند.",
                    pa: "دا د ګوګل د پاڼې د تجربې په سیسټمونو کې د رتبې یوه تایید شوې خو محدوده نښه ده. اړونده او ګټوره منځپانګه لا هم ډېره مهمه ده، نو یوه ګړندۍ پاڼه د کمزورې منځپانګې سره د هغې ورو پاڼې څخه پورته نه ځي چې پوښتنې ته ښه ځواب ورکوي. د دوی لوی اغېز پر کاروونکو دی: ګړندۍ او ځواب ویونکې پاڼې معمولاً لیدونکي ډېر ساتي او ډېر یې په غوښتنو او پلور بدلوي."
                }
            },
            {
                q: { en: "Why does PageSpeed Insights show a different score from Search Console?", da: "چرا PageSpeed Insights نمره‌ای متفاوت از Search Console نشان می‌دهد؟", pa: "ولې PageSpeed Insights د Search Console په پرتله بېله نمره ښيي؟" },
                a: {
                    en: "PageSpeed Insights shows two things: field data from real Chrome users over the previous 28 days, and a lab test (Lighthouse) run once on a simulated device. Search Console only uses field data, grouped across similar URLs. The lab score is useful for debugging, but the field data is what counts for Core Web Vitals, and it changes slowly as new visits replace old ones.",
                    da: "PageSpeed Insights دو چیز نشان می‌دهد: داده‌های میدانی از کاربران واقعی Chrome در ۲۸ روز گذشته، و یک آزمایش آزمایشگاهی (Lighthouse) که یک بار روی یک دستگاه شبیه‌سازی‌شده اجرا می‌شود. Search Console فقط از داده‌های میدانی استفاده می‌کند که در میان URLهای مشابه گروه‌بندی شده‌اند. نمرهٔ آزمایشگاهی برای رفع اشکال مفید است، اما برای Core Web Vitals داده‌های میدانی ملاک است و با جایگزین‌شدن بازدیدهای قدیمی با بازدیدهای جدید، به‌آهستگی تغییر می‌کند.",
                    pa: "PageSpeed Insights دوه شیان ښيي: د تېرو ۲۸ ورځو د Chrome د رښتینو کاروونکو ساحوي معلومات، او یوه لابراتواري ازموینه (Lighthouse) چې یو ځل پر یوې شبیه‌سازي شوې وسیلې چلېږي. Search Console یوازې ساحوي معلومات کاروي چې د ورته URLونو ترمنځ ډله‌بندي شوي وي. لابراتواري نمره د ستونزو د موندلو لپاره ګټوره ده، خو د Core Web Vitals لپاره ساحوي معلومات معیار دي او د زړو لیدنو پر ځای د نویو لیدنو په راتګ ورو ورو بدلېږي."
                }
            },
            {
                q: { en: "Does hosting location affect Core Web Vitals for visitors in Afghanistan?", da: "آیا محل میزبانی بر Core Web Vitals برای بازدیدکنندگان در افغانستان اثر دارد؟", pa: "ایا د کوربه‌توب ځای په افغانستان کې د لیدونکو لپاره پر Core Web Vitals اغېز لري؟" },
                a: {
                    en: "Yes, mainly through LCP. Every request has to travel to the server and back, so a distant server adds delay before anything appears. Using a CDN with locations in Europe, the Gulf or South Asia, caching pages at the edge, and keeping pages light usually helps visitors in Kabul, Herat and other cities far more than upgrading to a bigger server.",
                    da: "بله، بیشتر از طریق LCP. هر درخواست باید تا سرور برود و برگردد، پس یک سرور دور پیش از نمایش هر چیزی تأخیر اضافه می‌کند. استفاده از CDN با مراکزی در اروپا، خلیج یا جنوب آسیا، کش‌کردن صفحات در لبهٔ شبکه و سبک نگه‌داشتن صفحات معمولاً بسیار بیشتر از ارتقا به یک سرور بزرگ‌تر به بازدیدکنندگان کابل، هرات و دیگر شهرها کمک می‌کند.",
                    pa: "هو، په عمده توګه د LCP له لارې. هره غوښتنه باید سرور ته ولاړه شي او بېرته راشي، نو لرې سرور د هر څه له ښکارېدو مخکې ځنډ زیاتوي. په اروپا، خلیج یا سویلي اسیا کې د مرکزونو لرونکي CDN کارول، د شبکې په څنډه کې د پاڼو کش کول او د پاڼو سپک ساتل معمولاً د کابل، هرات او نورو ښارونو لیدونکو سره د یو لوی سرور د اخیستلو په پرتله ډېره مرسته کوي."
                }
            }
        ],
        category: "seo",
        author: "Suliman Hakimi",
        date: "2026-09-16",
        updated: "2026-09-16",
        readTime: "5 min read",
        image: "/logo.png",
        tags: ["core web vitals inp", "Interaction to Next Paint", "INP optimization", "LCP", "CLS", "Core Web Vitals 2026", "page speed", "Next.js 16"]
    },
    {
        id: "138",
        slug: "technical-seo-audit-checklist-2026",
        title: {
            en: "Technical SEO Audit Checklist for 2026",
            da: "چک‌لیست بررسی سئوی فنی برای ۲۰۲۶",
            pa: "د ۲۰۲۶ لپاره د تخنیکي SEO د پلټنې چک‌لېسټ"
        },
        excerpt: {
            en: "A technical SEO audit checklist for 2026: step-by-step checks for crawling, indexing, rendering, Core Web Vitals, schema, security and AI crawler access.",
            da: "چک‌لیست بررسی سئوی فنی برای ۲۰۲۶: بررسی‌های گام‌به‌گام برای خزش، ایندکس، رندر، Core Web Vitals، اسکیما، امنیت و دسترسی خزنده‌های هوش مصنوعی.",
            pa: "د ۲۰۲۶ لپاره د تخنیکي SEO د پلټنې چک‌لېسټ: د کرال، انډکس، رنډر، Core Web Vitals، سکیما، امنیت او د مصنوعي ځیرکتیا د کرالرانو د لاسرسي ګام په ګام ازموینې."
        },
        content: {
            en: `A technical SEO audit checklist is a structured list of checks that confirms search engines can crawl, render, index and understand your website, and that nothing in its setup is holding rankings back. In 2026 that means covering the classic basics (crawling, indexing, redirects, sitemaps) plus newer areas: Core Web Vitals with INP, structured data, JavaScript rendering, and whether AI search crawlers can access your content.

**Key Takeaways**

- Start with Google Search Console: its indexing and Core Web Vitals reports reveal most serious problems in minutes.
- Check crawlability first; if pages cannot be crawled or are set to noindex, nothing else matters.
- Make sure important content is in the server-rendered HTML, not only added by JavaScript.
- Review robots.txt rules for AI crawlers deliberately, based on whether you want to appear in AI answers.
- Re-audit after every redesign, migration or CMS change.

**What Should a Technical SEO Audit Cover in 2026?**

A complete audit covers seven areas: crawling, indexing, site architecture, rendering, performance, structured data and security. The goal is not a perfect score from a tool; it is to find the issues that stop important pages from being found or trusted, and fix them in order of impact.

You need three tools at minimum: Google Search Console (free, authoritative data on how Google sees your site), a crawler that walks your site the way a search engine does (several good desktop and cloud options exist), and PageSpeed Insights for performance. Bing Webmaster Tools is worth adding too, because Bing's index also feeds some AI assistants' search features.

**Step 1: Can Search Engines Crawl Your Site?**

Confirm that search engines can reach every page you want ranked. Check that:

1. robots.txt is reachable at /robots.txt, does not block important folders, CSS or JavaScript, and lists your sitemap.
2. Your XML sitemap contains only indexable, 200-status, canonical URLs, and is submitted in Search Console.
3. No important pages are orphaned; every page should be reachable through internal links within a few clicks of the homepage.
4. Server errors (5xx) and timeouts are rare. Check the Crawl Stats report under Settings in Search Console.
5. Redirects go directly to the final URL in one hop, with no chains or loops.

**Step 2: Are the Right Pages Indexed?**

Make sure Google indexes the pages that matter and skips the ones that do not. Open the Page indexing report in Search Console and read the reasons pages are not indexed. "Crawled, currently not indexed" on important pages usually signals thin or duplicate content; "Duplicate, Google chose different canonical than user" means your canonical signals conflict.

Look for accidental noindex tags left over from a staging site, parameter URLs (filters, sorting, tracking codes) that create thousands of duplicates, and HTTP versus HTTPS or www versus non-www duplicates. Each page should have one self-referencing canonical URL.

For multilingual sites, verify hreflang here as well: each language version indexed, reciprocal tags, correct codes. Our [hreflang and RTL guide](/blog/hreflang-rtl-websites-guide) lists the common errors on Dari and Pashto sites.

**Step 3: Is Your Site Architecture Logical?**

A clear structure helps both users and crawlers understand which pages matter most. Check that URLs are short, readable and consistent, that categories group related content, and that key service or product pages receive the most internal links. Use descriptive anchor text rather than "click here". Breadcrumbs help, and they can be marked up with structured data.

**Step 4: Does Your Content Render Without JavaScript Problems?**

Important text, links and metadata should be present in the HTML the server sends, not only injected by client-side JavaScript. Google can render JavaScript, but it adds delay and failure points, and many AI crawlers do not run JavaScript at all. Use the URL Inspection tool to view the crawled page and see what Google actually received. Frameworks like Next.js that render on the server avoid most of these problems by default.

Also check title tags and meta descriptions: unique per page, descriptive, and with the primary keyword near the start.

**Step 5: How Fast and Stable Is the Site?**

Review the Core Web Vitals report for LCP, INP and CLS on mobile and desktop. Group failing URLs by template, because one fix to a template often fixes hundreds of pages. Our guide to [Core Web Vitals and INP in 2026](/blog/core-web-vitals-inp-2026) explains the fixes. Also check usability by hand on a real mid-range phone, since Google indexes the mobile version of your site.

**Step 6: Is Structured Data Valid and Useful?**

Validate schema markup with Google's Rich Results Test and the Schema Markup Validator. Typical business sites should have Organization or LocalBusiness, BreadcrumbList, and Article or Product markup where relevant. Marked-up content must match what is visible on the page. Structured data also helps AI systems understand who you are and what you offer; see our guide to [schema markup for rich results in 2026](/blog/schema-markup-rich-results-2026).

**Step 7: Security, AI Crawlers and Final Checks**

Finish with the items that are easy to overlook:

- HTTPS everywhere, with a valid certificate and no mixed-content warnings.
- No security issues or manual actions reported in Search Console.
- robots.txt rules for AI crawlers and tokens (such as GPTBot, ClaudeBot, PerplexityBot and Google-Extended) reflect a deliberate decision. Blocking them may keep your content out of some AI answers; allowing them makes it eligible to be used and cited.
- A custom 404 page that returns a real 404 status, not a 200.
- Analytics (GA4) and Search Console are both verified and collecting data.

Prioritise what you find: fix anything blocking indexing first, then issues affecting many pages through shared templates, then individual page improvements. Write each issue down with the affected URLs, the fix and an owner, so the audit turns into work rather than a report that sits in a folder.

**Work With Sheen**

Sheen runs one-off SEO audits for $149, with a prioritised fix list in plain language, and ongoing [SEO services](/services/seo) from AFN 10,000 per month. [Contact us](/contact) or [book a call](/book): info@sheen.af, +93 784 966 018.`,
            da: `چک‌لیست بررسی سئوی فنی فهرستی منظم از بررسی‌هاست که تأیید می‌کند موتورهای جستجو می‌توانند ویب‌سایت شما را خزش، رندر، ایندکس و درک کنند و هیچ چیزی در تنظیمات آن مانع رتبه‌گرفتن نیست. در سال ۲۰۲۶ این یعنی پوشش اصول کلاسیک (خزش، ایندکس، ریدایرکت‌ها، نقشهٔ سایت) به‌علاوهٔ حوزه‌های جدیدتر: Core Web Vitals با INP، داده‌های ساختاریافته، رندر جاوااسکریپت و این‌که آیا خزنده‌های جستجوی هوش مصنوعی به محتوای شما دسترسی دارند یا نه.

**نکات کلیدی**

- با Google Search Console شروع کنید: گزارش‌های ایندکس و Core Web Vitals آن بیشتر مشکلات جدی را در چند دقیقه نشان می‌دهند.
- اول قابلیت خزش را بررسی کنید؛ اگر صفحات قابل خزش نباشند یا noindex شده باشند، هیچ چیز دیگری اهمیت ندارد.
- مطمئن شوید محتوای مهم در HTML ساخته‌شده روی سرور وجود دارد، نه این‌که فقط با جاوااسکریپت اضافه شود.
- قواعد robots.txt برای خزنده‌های هوش مصنوعی را آگاهانه و بر اساس این‌که آیا می‌خواهید در پاسخ‌های هوش مصنوعی ظاهر شوید یا نه، بازبینی کنید.
- پس از هر بازطراحی، انتقال سایت یا تغییر CMS دوباره بررسی کنید.

**بررسی سئوی فنی در ۲۰۲۶ چه چیزهایی را باید پوشش دهد؟**

یک بررسی کامل هفت حوزه را پوشش می‌دهد: خزش، ایندکس، ساختار سایت، رندر، کارایی، داده‌های ساختاریافته و امنیت. هدف گرفتن نمرهٔ کامل از یک ابزار نیست؛ هدف پیدا کردن مشکلاتی است که مانع پیدا شدن یا اعتماد به صفحات مهم می‌شوند و رفع آن‌ها به ترتیب اثرگذاری.

دست‌کم به سه ابزار نیاز دارید: Google Search Console (رایگان، با داده‌های معتبر دربارهٔ این‌که گوگل سایت شما را چگونه می‌بیند)، یک ابزار خزش که مانند موتور جستجو در سایت شما حرکت می‌کند (چند گزینهٔ خوب دسکتاپ و ابری وجود دارد)، و PageSpeed Insights برای کارایی. افزودن Bing Webmaster Tools هم ارزش دارد، چون ایندکس Bing به برخی قابلیت‌های جستجوی دستیارهای هوش مصنوعی هم داده می‌دهد.

**گام ۱: آیا موتورهای جستجو می‌توانند سایت شما را خزش کنند؟**

مطمئن شوید موتورهای جستجو به هر صفحه‌ای که می‌خواهید رتبه بگیرد دسترسی دارند. بررسی کنید که:

1. فایل robots.txt در آدرس /robots.txt در دسترس است، پوشه‌های مهم، CSS یا جاوااسکریپت را مسدود نمی‌کند و نقشهٔ سایت شما را فهرست می‌کند.
2. نقشهٔ سایت XML فقط URLهای قابل ایندکس، با وضعیت 200 و canonical را دارد و در Search Console ثبت شده است.
3. هیچ صفحهٔ مهمی یتیم نیست؛ هر صفحه باید از طریق لینک‌های داخلی در چند کلیک از صفحهٔ اصلی قابل دسترسی باشد.
4. خطاهای سرور (5xx) و وقفه‌ها نادر هستند. گزارش Crawl Stats را در بخش Settings در Search Console بررسی کنید.
5. ریدایرکت‌ها مستقیم و در یک گام به URL نهایی می‌روند، بدون زنجیره یا حلقه.

**گام ۲: آیا صفحات درست ایندکس شده‌اند؟**

مطمئن شوید گوگل صفحات مهم را ایندکس می‌کند و صفحات بی‌اهمیت را کنار می‌گذارد. گزارش Page indexing را در Search Console باز کنید و دلایل ایندکس‌نشدن صفحات را بخوانید. وضعیت «Crawled, currently not indexed» روی صفحات مهم معمولاً نشانهٔ محتوای ضعیف یا تکراری است؛ «Duplicate, Google chose different canonical than user» یعنی نشانه‌های canonical شما با هم در تضادند.

دنبال تگ‌های noindex تصادفی که از سایت آزمایشی باقی مانده‌اند، URLهای پارامتردار (فیلترها، مرتب‌سازی، کدهای ردیابی) که هزاران نسخهٔ تکراری می‌سازند، و نسخه‌های تکراری HTTP و HTTPS یا www و بدون www بگردید. هر صفحه باید یک URL canonical خودارجاع داشته باشد.

برای سایت‌های چندزبانه، hreflang را هم در همین مرحله بررسی کنید: هر نسخهٔ زبانی ایندکس شده باشد، برچسب‌ها متقابل باشند و کدها درست باشند. [راهنمای hreflang و RTL](/blog/hreflang-rtl-websites-guide) ما خطاهای رایج سایت‌های دری و پشتو را فهرست می‌کند.

**گام ۳: آیا ساختار سایت شما منطقی است؟**

یک ساختار روشن به کاربران و خزنده‌ها کمک می‌کند بفهمند کدام صفحات مهم‌ترند. بررسی کنید که URLها کوتاه، خوانا و یک‌دست باشند، دسته‌بندی‌ها محتوای مرتبط را گروه‌بندی کنند و صفحات کلیدی خدمات یا محصولات بیشترین لینک داخلی را بگیرند. به جای «اینجا کلیک کنید» از متن لینک توصیفی استفاده کنید. مسیرنماها (breadcrumbs) کمک می‌کنند و می‌توان آن‌ها را با داده‌های ساختاریافته نشانه‌گذاری کرد.

**گام ۴: آیا محتوای شما بدون مشکلات جاوااسکریپت رندر می‌شود؟**

متن، لینک‌ها و متادیتای مهم باید در HTML که سرور می‌فرستد وجود داشته باشند، نه این‌که فقط با جاوااسکریپت سمت کاربر اضافه شوند. گوگل می‌تواند جاوااسکریپت را رندر کند، اما این کار تأخیر و احتمال خطا اضافه می‌کند و بسیاری از خزنده‌های هوش مصنوعی اصلاً جاوااسکریپت اجرا نمی‌کنند. با ابزار URL Inspection صفحهٔ خزش‌شده را ببینید تا بدانید گوگل واقعاً چه دریافت کرده است. فریم‌ورک‌هایی مانند Next.js که صفحه را روی سرور می‌سازند به‌طور پیش‌فرض از بیشتر این مشکلات جلوگیری می‌کنند.

تگ‌های عنوان و توضیحات متا را هم بررسی کنید: برای هر صفحه منحصربه‌فرد، توصیفی و با کلمهٔ کلیدی اصلی نزدیک به ابتدای آن.

**گام ۵: سایت چقدر سریع و پایدار است؟**

گزارش Core Web Vitals را برای LCP، INP و CLS در موبایل و دسکتاپ بازبینی کنید. URLهای ناموفق را بر اساس قالب گروه‌بندی کنید، چون یک اصلاح در قالب اغلب صدها صفحه را درست می‌کند. راهنمای ما دربارهٔ [Core Web Vitals و INP در ۲۰۲۶](/blog/core-web-vitals-inp-2026) راه‌حل‌ها را توضیح می‌دهد. قابلیت استفاده را هم به‌صورت دستی روی یک گوشی میان‌ردهٔ واقعی بررسی کنید، چون گوگل نسخهٔ موبایل سایت شما را ایندکس می‌کند.

**گام ۶: آیا داده‌های ساختاریافته معتبر و مفید هستند؟**

نشانه‌گذاری اسکیما را با Rich Results Test گوگل و Schema Markup Validator اعتبارسنجی کنید. سایت‌های تجارتی معمولی باید Organization یا LocalBusiness، BreadcrumbList و در صورت لزوم Article یا Product داشته باشند. محتوای نشانه‌گذاری‌شده باید با آنچه در صفحه دیده می‌شود مطابقت داشته باشد. داده‌های ساختاریافته به سیستم‌های هوش مصنوعی هم کمک می‌کنند بفهمند شما کی هستید و چه ارائه می‌دهید؛ راهنمای ما دربارهٔ [نشانه‌گذاری اسکیما برای نتایج غنی در ۲۰۲۶](/blog/schema-markup-rich-results-2026) را ببینید.

**گام ۷: امنیت، خزنده‌های هوش مصنوعی و بررسی‌های نهایی**

با مواردی تمام کنید که به‌آسانی نادیده گرفته می‌شوند:

- HTTPS در همه جا، با گواهی معتبر و بدون هشدار محتوای مخلوط.
- هیچ مشکل امنیتی یا اقدام دستی (manual action) در Search Console گزارش نشده باشد.
- قواعد robots.txt برای خزنده‌ها و توکن‌های هوش مصنوعی (مانند GPTBot، ClaudeBot، PerplexityBot و Google-Extended) بازتاب یک تصمیم آگاهانه باشد. مسدود کردن آن‌ها ممکن است محتوای شما را از برخی پاسخ‌های هوش مصنوعی دور نگه دارد؛ اجازه دادن به آن‌ها محتوای شما را واجد استفاده و ارجاع می‌کند.
- یک صفحهٔ 404 سفارشی که وضعیت واقعی 404 برمی‌گرداند، نه 200.
- Analytics (GA4) و Search Console هر دو تأیید شده‌اند و داده جمع می‌کنند.

یافته‌های خود را اولویت‌بندی کنید: اول هر چیزی را که مانع ایندکس می‌شود درست کنید، سپس مشکلاتی را که از طریق قالب‌های مشترک روی صفحات زیادی اثر دارند، و بعد بهبودهای صفحات جداگانه را. هر مشکل را با URLهای متأثر، راه‌حل و مسئول آن یادداشت کنید تا بررسی به کار عملی تبدیل شود، نه گزارشی که در یک پوشه بماند.

**با شین کار کنید**

شین بررسی‌های یک‌بارهٔ سئو را با هزینهٔ ۱۴۹ دالر و همراه با فهرست اولویت‌بندی‌شدهٔ اصلاحات به زبان ساده انجام می‌دهد و [خدمات مداوم سئو](/services/seo) را از ۱۰٬۰۰۰ افغانی در ماه ارائه می‌کند. [با ما تماس بگیرید](/contact) یا [یک تماس رزرو کنید](/book): info@sheen.af، +93 784 966 018.`,
            pa: `د تخنیکي SEO د پلټنې چک‌لېسټ د ازموینو یو منظم لست دی چې تاییدوي د لټون انجنونه ستاسو ویب‌سایټ کرال، رنډر، انډکس او درک کولای شي او د هغه په تنظیماتو کې هیڅ شی د رتبې مخه نه نیسي. په ۲۰۲۶ کې دا په دې مانا دی چې کلاسیک بنسټونه (کرال، انډکس، ریډایرکټونه، sitemap) او ورسره نوې برخې پوښل شي: Core Web Vitals له INP سره، جوړښت لرونکي معلومات، د جاوااسکریپټ رنډر او دا چې ایا د مصنوعي ځیرکتیا د لټون کرالران ستاسو منځپانګې ته لاسرسی لري که نه.

**مهم ټکي**

- له Google Search Console پیل وکړئ: د انډکس او Core Web Vitals راپورونه یې ډېری جدي ستونزې په څو دقیقو کې ښيي.
- لومړی د کرال وړتیا وګورئ؛ که پاڼې د کرال وړ نه وي یا noindex شوې وي، بل هیڅ شی ارزښت نه لري.
- ډاډ ترلاسه کړئ چې مهمه منځپانګه پر سرور جوړ شوي HTML کې شته، نه دا چې یوازې د جاوااسکریپټ له لارې زیاته شي.
- د مصنوعي ځیرکتیا کرالرانو لپاره د robots.txt قواعد په پوهه سره وڅېړئ، د دې پر بنسټ چې غواړئ د مصنوعي ځیرکتیا په ځوابونو کې راشئ که نه.
- له هر بیا ډیزاین، د سایټ له لېږد یا د CMS له بدلون وروسته بیا پلټنه وکړئ.

**په ۲۰۲۶ کې تخنیکي SEO پلټنه باید څه شي وپوښي؟**

یوه بشپړه پلټنه اووه برخې پوښي: کرال، انډکس، د سایټ جوړښت، رنډر، فعالیت، جوړښت لرونکي معلومات او امنیت. موخه د یوې وسیلې څخه بشپړه نمره اخیستل نه دي؛ موخه د هغو ستونزو موندل دي چې د مهمو پاڼو د موندلو یا پر هغو د باور مخه نیسي، او د اغېز په ترتیب د هغوی سمول.

لږ تر لږه درېیو وسایلو ته اړتیا لرئ: Google Search Console (وړیا، د دې په اړه باوري معلومات چې ګوګل ستاسو سایټ څنګه ویني)، یو کرالر چې ستاسو په سایټ کې د لټون انجن په څېر ګرځي (څو ښه ډیسکټاپ او کلاوډ انتخابونه شته)، او د فعالیت لپاره PageSpeed Insights. د Bing Webmaster Tools زیاتول هم ارزښت لري، ځکه د Bing انډکس د مصنوعي ځیرکتیا د ځینو مرستیالانو د لټون ځانګړتیاوو ته هم معلومات ورکوي.

**لومړی ګام: ایا د لټون انجنونه ستاسو سایټ کرال کولای شي؟**

ډاډ ترلاسه کړئ چې د لټون انجنونه هرې هغې پاڼې ته رسېدای شي چې غواړئ رتبه واخلي. وګورئ چې:

1. robots.txt په /robots.txt کې د لاسرسي وړ دی، مهم فولډرونه، CSS یا جاوااسکریپټ نه بندوي او ستاسو sitemap پکې لست شوی دی.
2. ستاسو XML sitemap یوازې د انډکس وړ، د 200 حالت لرونکي او canonical URLونه لري او په Search Console کې سپارل شوی دی.
3. هیڅ مهمه پاڼه یتیمه نه ده؛ هره پاڼه باید د داخلي لینکونو له لارې له کورپاڼې څو کلیکه لرې د لاسرسي وړ وي.
4. د سرور تېروتنې (5xx) او وخت ختمېدل لږ دي. په Search Console کې د Settings لاندې د Crawl Stats راپور وګورئ.
5. ریډایرکټونه په یوه ګام کې مستقیم وروستي URL ته ځي، پرته له ځنځیر یا کړۍ.

**دویم ګام: ایا سمې پاڼې انډکس شوې دي؟**

ډاډ ترلاسه کړئ چې ګوګل مهمې پاڼې انډکس کوي او بې ارزښته پاڼې پرېږدي. په Search Console کې د Page indexing راپور خلاص کړئ او د پاڼو د نه انډکس کېدو لاملونه ولولئ. پر مهمو پاڼو «Crawled, currently not indexed» حالت معمولاً د کمزورې یا تکراري منځپانګې نښه ده؛ «Duplicate, Google chose different canonical than user» په دې مانا دی چې ستاسو د canonical نښې یو له بل سره ټکر لري.

د هغو تصادفي noindex ټګونو په لټه کې شئ چې له ازمایښتي سایټ پاتې دي، د پارامټر لرونکو URLونو (فلټرونه، ترتیب، د تعقیب کوډونه) چې زرګونه تکراري نسخې جوړوي، او د HTTP او HTTPS یا www او بې www تکراري نسخو. هره پاڼه باید یو ځان ته اشاره کوونکی canonical URL ولري.

د څو ژبنیو سایټونو لپاره hreflang هم په همدې ګام کې وګورئ: هره ژبنۍ نسخه انډکس شوې وي، ټګونه متقابل وي او کوډونه سم وي. زموږ [د hreflang او RTL لارښود](/blog/hreflang-rtl-websites-guide) د دري او پښتو سایټونو عامې تېروتنې لست کوي.

**درېیم ګام: ایا ستاسو د سایټ جوړښت منطقي دی؟**

روښانه جوړښت له کاروونکو او کرالرانو سره مرسته کوي چې پوه شي کومې پاڼې ډېرې مهمې دي. وګورئ چې URLونه لنډ، د لوستلو وړ او یو شان وي، کټګورۍ اړونده منځپانګه ډله‌بندي کړي او د خدماتو یا محصولاتو کلیدي پاڼې تر ټولو ډېر داخلي لینکونه ترلاسه کړي. د «دلته کلیک وکړئ» پر ځای تشریحي لینک متن وکاروئ. breadcrumbs مرسته کوي او د جوړښت لرونکو معلوماتو په مرسته نښه کېدای شي.

**څلورم ګام: ایا ستاسو منځپانګه د جاوااسکریپټ له ستونزو پرته رنډر کېږي؟**

مهم متن، لینکونه او میټاډېټا باید په هغه HTML کې وي چې سرور یې لېږي، نه دا چې یوازې د کاروونکي په خوا جاوااسکریپټ زیات شي. ګوګل کولای شي جاوااسکریپټ رنډر کړي، خو دا کار ځنډ او د تېروتنې ځایونه زیاتوي او د مصنوعي ځیرکتیا ډېر کرالران هیڅ جاوااسکریپټ نه چلوي. د URL Inspection وسیلې په مرسته کرال شوې پاڼه وګورئ څو پوه شئ چې ګوګل په رښتیا څه ترلاسه کړي. فریم‌ورکونه لکه Next.js چې پاڼه پر سرور جوړوي، په ډیفالټ ډول د دې ډېرو ستونزو مخه نیسي.

د سرلیک ټګونه او میټا توضیحات هم وګورئ: د هرې پاڼې لپاره ځانګړي، تشریحي او اصلي کلیدي کلمه یې پیل ته نږدې وي.

**پنځم ګام: سایټ څومره ګړندی او ثابت دی؟**

د موبایل او ډیسکټاپ لپاره د LCP، INP او CLS د Core Web Vitals راپور وڅېړئ. ناکام URLونه د کینډۍ له مخې ډله‌بندي کړئ، ځکه په کینډۍ کې یو سمون ډېری وخت سلګونه پاڼې سموي. زموږ لارښود [په ۲۰۲۶ کې Core Web Vitals او INP](/blog/core-web-vitals-inp-2026) حلونه تشریح کوي. د کارونې اسانتیا هم په لاس پر یو رښتیني منځنۍ کچې تلیفون وازمویئ، ځکه ګوګل ستاسو د سایټ موبایل نسخه انډکس کوي.

**شپږم ګام: ایا جوړښت لرونکي معلومات سم او ګټور دي؟**

د سکیما نښه‌ګذاري د ګوګل د Rich Results Test او Schema Markup Validator په مرسته تایید کړئ. عادي سوداګریز سایټونه باید Organization یا LocalBusiness، BreadcrumbList او د اړتیا پر مهال Article یا Product ولري. نښه شوې منځپانګه باید له هغه څه سره برابره وي چې په پاڼه کې ښکاري. جوړښت لرونکي معلومات د مصنوعي ځیرکتیا سیسټمونو سره هم مرسته کوي چې پوه شي تاسو څوک یاست او څه وړاندې کوئ؛ زموږ لارښود [په ۲۰۲۶ کې د بډایه پایلو لپاره د سکیما نښه‌ګذاري](/blog/schema-markup-rich-results-2026) وګورئ.

**اووم ګام: امنیت، د مصنوعي ځیرکتیا کرالران او وروستۍ ازموینې**

په هغو توکو پای ته ورسوئ چې په اسانۍ له پامه غورځي:

- هر ځای کې HTTPS، د باوري سند سره او د ګډې منځپانګې له خبرداریو پرته.
- په Search Console کې هیڅ امنیتي ستونزه یا لاسي اقدام (manual action) راپور شوی نه وي.
- د مصنوعي ځیرکتیا کرالرانو او ټوکنونو لپاره د robots.txt قواعد (لکه GPTBot، ClaudeBot، PerplexityBot او Google-Extended) د یوې په پوهه شوې پرېکړې ښکارندوي وکړي. د دوی بندول ښايي ستاسو منځپانګه د مصنوعي ځیرکتیا له ځینو ځوابونو لرې وساتي؛ اجازه ورکول یې ستاسو منځپانګه د کارونې او حوالې وړ ګرځوي.
- یوه ځانګړې 404 پاڼه چې رښتینی 404 حالت ورکوي، نه 200.
- Analytics (GA4) او Search Console دواړه تایید شوي وي او معلومات راټولوي.

خپلې موندنې لومړیتوب‌بندي کړئ: لومړی هر هغه څه سم کړئ چې د انډکس مخه نیسي، بیا هغه ستونزې چې د ګډو کینډیو له لارې پر ډېرو پاڼو اغېز کوي، او بیا د جلا پاڼو ښه والی. هره ستونزه د اغېزمنو URLونو، حل او مسؤول کس سره ولیکئ څو پلټنه په عملي کار بدله شي، نه په داسې راپور چې په یوه فولډر کې پاتې شي.

**له شین سره کار وکړئ**

شین یو ځلي SEO پلټنې په ۱۴۹ ډالرو ترسره کوي چې په ساده ژبه د سمونونو لومړیتوب‌بندي شوی لست لري، او [دوامداره SEO خدمات](/services/seo) له ۱۰٬۰۰۰ افغانیو په میاشت کې وړاندې کوي. [موږ سره اړیکه ونیسئ](/contact) یا [یوه اړیکه بوک کړئ](/book): info@sheen.af، +93 784 966 018.`
        },
        faqs: [
            {
                q: { en: "How often should I run a technical SEO audit?", da: "هر چند وقت یک بار باید بررسی سئوی فنی انجام دهم؟", pa: "څو څو وخت وروسته باید تخنیکي SEO پلټنه وکړم؟" },
                a: {
                    en: "Run a full technical audit at least once or twice a year, and always after a redesign, domain change, CMS migration or major template update. Between audits, check Google Search Console every month for new indexing errors, Core Web Vitals problems and security warnings. Small sites change slowly, but one broken template or stray noindex tag can remove many pages from search quickly.",
                    da: "دست‌کم سالی یک یا دو بار یک بررسی فنی کامل انجام دهید و همیشه پس از بازطراحی، تغییر دامنه، انتقال CMS یا به‌روزرسانی بزرگ قالب. میان بررسی‌ها، هر ماه Google Search Console را برای خطاهای جدید ایندکس، مشکلات Core Web Vitals و هشدارهای امنیتی بررسی کنید. سایت‌های کوچک آهسته تغییر می‌کنند، اما یک قالب خراب یا یک تگ noindex اشتباهی می‌تواند به‌سرعت صفحات زیادی را از جستجو حذف کند.",
                    pa: "لږ تر لږه په کال کې یو یا دوه ځله بشپړه تخنیکي پلټنه وکړئ او تل له بیا ډیزاین، د ډومېن له بدلون، د CMS له لېږد یا د کینډۍ له لوی تازه کولو وروسته. د پلټنو ترمنځ هره میاشت Google Search Console د انډکس د نویو تېروتنو، د Core Web Vitals ستونزو او امنیتي خبرداریو لپاره وګورئ. کوچني سایټونه ورو بدلېږي، خو یوه ماته کینډۍ یا یو ناسم noindex ټګ کولای شي ژر ډېرې پاڼې له لټون څخه لرې کړي."
                }
            },
            {
                q: { en: "What is the difference between a technical SEO audit and a full SEO audit?", da: "تفاوت بررسی سئوی فنی با بررسی کامل سئو چیست؟", pa: "د تخنیکي SEO پلټنې او بشپړې SEO پلټنې ترمنځ څه توپیر دی؟" },
                a: {
                    en: "A technical audit checks the infrastructure: crawling, indexing, rendering, speed, structured data and security. A full SEO audit adds content quality, keyword targeting, competitor comparison, backlinks and local SEO factors such as your Google Business Profile. Technical issues usually come first, because strong content cannot rank if search engines cannot reach or index the pages it sits on.",
                    da: "بررسی فنی زیرساخت را بررسی می‌کند: خزش، ایندکس، رندر، سرعت، داده‌های ساختاریافته و امنیت. بررسی کامل سئو کیفیت محتوا، هدف‌گیری کلمات کلیدی، مقایسه با رقبا، بک‌لینک‌ها و عوامل سئوی محلی مانند Google Business Profile شما را هم اضافه می‌کند. مشکلات فنی معمولاً در اولویت هستند، چون محتوای قوی اگر موتورهای جستجو نتوانند به صفحاتش برسند یا آن‌ها را ایندکس کنند، رتبه نمی‌گیرد.",
                    pa: "تخنیکي پلټنه زیربنا ګوري: کرال، انډکس، رنډر، سرعت، جوړښت لرونکي معلومات او امنیت. بشپړه SEO پلټنه د منځپانګې کیفیت، د کلیدي کلمو هدف ټاکل، له سیالانو سره پرتله، بیک‌لینکونه او د محلي SEO فکتورونه لکه ستاسو Google Business Profile هم ورزیاتوي. تخنیکي ستونزې معمولاً لومړیتوب لري، ځکه قوي منځپانګه رتبه نه شي اخیستلای که د لټون انجنونه د هغې پاڼو ته ونه رسېږي یا یې انډکس نه کړي."
                }
            },
            {
                q: { en: "Can I do a technical SEO audit myself?", da: "آیا خودم می‌توانم بررسی سئوی فنی انجام دهم؟", pa: "ایا زه پخپله تخنیکي SEO پلټنه کولای شم؟" },
                a: {
                    en: "Yes, for a small site you can cover the basics yourself with Google Search Console, PageSpeed Insights and a free or low-cost crawler, following a checklist like this one. The harder part is interpreting results and fixing them, especially JavaScript rendering, canonical conflicts, hreflang and performance problems, which often need a developer. Many owners do a first pass and then hire help for the fixes.",
                    da: "بله، برای یک سایت کوچک می‌توانید اصول را خودتان با Google Search Console، PageSpeed Insights و یک ابزار خزش رایگان یا ارزان و با پیروی از چک‌لیستی مانند همین پوشش دهید. بخش دشوارتر تفسیر نتایج و رفع آن‌هاست، به‌ویژه رندر جاوااسکریپت، تضاد canonical، hreflang و مشکلات کارایی که اغلب به یک برنامه‌نویس نیاز دارند. بسیاری از صاحبان سایت یک بررسی اولیه انجام می‌دهند و سپس برای اصلاحات کمک می‌گیرند.",
                    pa: "هو، د یو کوچني سایټ لپاره کولای شئ بنسټونه پخپله د Google Search Console، PageSpeed Insights او یو وړیا یا ارزانه کرالر په مرسته او د همدې په څېر یو چک‌لېسټ په تعقیب وپوښئ. سخته برخه د پایلو تفسیر او سمول دي، په ځانګړې توګه د جاوااسکریپټ رنډر، د canonical ټکر، hreflang او د فعالیت ستونزې چې ډېری وخت پروګرامر ته اړتیا لري. ډېر خاوندان لومړنۍ پلټنه پخپله کوي او بیا د سمونونو لپاره مرسته اخلي."
                }
            },
            {
                q: { en: "Should I block AI crawlers in robots.txt?", da: "آیا باید خزنده‌های هوش مصنوعی را در robots.txt مسدود کنم؟", pa: "ایا باید د مصنوعي ځیرکتیا کرالران په robots.txt کې بند کړم؟" },
                a: {
                    en: "For most businesses that want customers to find them, no. AI search tools can only cite and recommend sites they are able to read, so blocking their crawlers may reduce your visibility in AI answers. Publishers with paid or exclusive content sometimes block training crawlers while allowing search crawlers. Whatever you choose, make it a deliberate decision and review it as these tools change.",
                    da: "برای بیشتر کسب‌وکارهایی که می‌خواهند مشتریان آن‌ها را پیدا کنند، نه. ابزارهای جستجوی هوش مصنوعی فقط می‌توانند به سایت‌هایی ارجاع دهند و آن‌ها را پیشنهاد کنند که قادر به خواندنشان باشند، پس مسدود کردن خزنده‌ها ممکن است دیده‌شدن شما را در پاسخ‌های هوش مصنوعی کم کند. ناشرانی که محتوای پولی یا انحصاری دارند گاهی خزنده‌های آموزشی را مسدود می‌کنند و به خزنده‌های جستجو اجازه می‌دهند. هر تصمیمی بگیرید، آن را آگاهانه بگیرید و با تغییر این ابزارها بازبینی کنید.",
                    pa: "د ډېری هغو سوداګریو لپاره چې غواړي پېرودونکي یې ومومي، نه. د مصنوعي ځیرکتیا د لټون وسایل یوازې هغو سایټونو ته حواله ورکولای او وړاندیز یې کولای شي چې لوستلای یې شي، نو د دوی د کرالرانو بندول ښايي د مصنوعي ځیرکتیا په ځوابونو کې ستاسو لیدل کېدل کم کړي. هغه خپرونکي چې پیسې لرونکې یا ځانګړې منځپانګه لري ځینې وخت د روزنې کرالران بندوي او د لټون کرالرانو ته اجازه ورکوي. هره پرېکړه چې کوئ، په پوهه یې وکړئ او د دې وسایلو له بدلون سره یې بیا وګورئ."
                }
            }
        ],
        category: "seo",
        author: "Suliman Hakimi",
        date: "2026-09-14",
        updated: "2026-09-14",
        readTime: "5 min read",
        image: "/logo.png",
        tags: ["technical seo audit checklist", "technical SEO audit", "SEO audit 2026", "site audit checklist", "Google Search Console", "INP", "AI crawlers robots.txt", "SEO audit Afghanistan"]
    },
    {
        id: "137",
        slug: "keyword-research-dari-pashto",
        title: {
            en: "Keyword Research in Dari and Pashto: A Practical Method",
            da: "تحقیق کلمات کلیدی به دری و پشتو: یک روش عملی",
            pa: "په دري او پښتو کې د کلیدي کلمو څېړنه: یوه عملي طریقه"
        },
        excerpt: {
            en: "A practical Dari Pashto keyword research method: find real search terms, handle spelling variants, work without volume data and map keywords to pages.",
            da: "یک روش عملی تحقیق کلمات کلیدی دری و پشتو: یافتن عبارات جستجوی واقعی، مدیریت شکل‌های املایی، کار بدون دادهٔ حجم جستجو و تخصیص کلمات کلیدی به صفحات.",
            pa: "د دري او پښتو کلیدي کلمو د څېړنې عملي طریقه: د لټون رښتیني عبارتونه موندل، د املا توپیرونه اداره کول، د لټون د حجم له معلوماتو پرته کار او پاڼو ته د کلمو ټاکل."
        },
        content: {
            en: `Dari and Pashto keyword research means finding the exact words Afghans type into Google when they look for your product or service, in their own language and script, rather than translating English keywords. Because standard keyword tools show little or no volume for most Dari and Pashto phrases, the practical method combines customer language, Google autocomplete, Search Console data and careful handling of spelling variants.

**Key Takeaways**

- Keyword tools under-report Dari and Pashto searches; treat "zero volume" as "unknown", not "nobody searches".
- Collect seed terms from real customer conversations: calls, WhatsApp, Facebook comments and questions at the shop counter.
- Expand with Google autocomplete and "People also ask" in each language, and check results on mobile.
- Account for spelling variants: Arabic versus Persian letters, Pashto-specific letters, spacing, and Latin-script spellings.
- Validate with your own Google Search Console data once pages are live.

**Why Is Keyword Research in Dari and Pashto Different?**

It is different because the data is thinner and the writing is less standardised. Most keyword tools are built around large markets; for Afghan languages they often show no volume at all, even for queries that people clearly type. Search behaviour also mixes languages: a Kabul user might search a Dari phrase with an English brand name, type Dari in Latin letters on a phone without a Persian keyboard, or switch to English for technical topics.

Spelling adds another layer. The same word can be typed with Arabic ي and ك or Persian ی and ک, depending on the keyboard. Pashto has letters such as ښ, ږ, ځ, څ, ډ, ټ, ړ and ڼ that some keyboards lack, so users substitute similar letters. Google often treats these variants as related, but not always identically, so your research should capture them.

**Step 1: Where Do You Find Seed Keywords?**

Start with the words your customers already use. Seed keywords are the short, core phrases that describe your offer, and the best source in Afghanistan is real conversations, not a tool. A practical method:

1. List your main products or services in plain language, in all three languages.
2. Ask the staff who answer phones and WhatsApp to note the exact words customers use when they ask about each service, for two or three weeks.
3. Read the comments and messages on your Facebook page and on competitors' pages; note recurring phrases and questions.
4. Write down the place names customers combine with services, such as Kabul neighbourhoods (Karte Char, Shahr-e Naw, Khair Khana) or cities like Herat, Mazar-i-Sharif, Kandahar and Jalalabad.
5. Note how diaspora customers phrase things, because they often mix English and Dari, for example a service word in English plus "Kabul" or "Afghanistan".

Twenty to forty solid seed terms per language is a good start.

**Step 2: How Do You Expand Keywords Without Volume Data?**

Use Google itself as the research tool. Type each seed term into Google on a phone and note the autocomplete suggestions; these are drawn from real searches. Add letters after the seed term to trigger more suggestions. Look at the "People also ask" boxes and the related searches at the bottom of the page. Repeat with Persian and Arabic letter variants and with Latin spellings.

Google Keyword Planner and paid tools are still useful for the English side and for occasional larger Dari queries; just don't discard terms that show zero. For relative interest, Google Trends can compare a few terms over time in Afghanistan, though for small queries it may have too little data to show anything.

If you already run ads, the search terms report in [Google Ads](/services/google-ads) is one of the richest sources of real Dari and Pashto queries, because it shows exactly what people typed before they clicked.

**Step 3: How Should You Handle Spelling Variants and Script?**

Pick one standard spelling for visible content, then cover common variants naturally. Practical rules:

- Use Persian ی and ک in Dari content, which is the standard for Afghan Dari, but expect some searches with Arabic forms. Google usually normalises these, so you rarely need both on the page.
- Use correct Pashto letters in Pashto content; do not replace ښ or ږ with Dari equivalents to match a guess about keyboards.
- Use the zero-width non-joiner where standard spelling requires it (for example in ویب‌سایت), but be aware that some users type a space or join the parts; check how your important terms appear in autocomplete.
- If Latin-script searches show up, mention the transliterated term once in natural context, such as with a brand or place name, rather than stuffing it.

**Step 4: How Do You Group Keywords and Map Them to Pages?**

Group keywords by search intent, then assign each group to one page. Intent usually falls into four types: informational ("how to", "what is"), commercial investigation ("best", "price", "compare"), transactional ("buy", "book", "order") and local ("near me", a city name). One page should target one main intent and its close variants in one language.

For a trilingual site, keep a simple spreadsheet with columns for the English, Dari and Pashto keyword of each page. They will not be literal translations of each other, and that is the point. Our guide to [multilingual SEO for Dari, Pashto and English](/blog/multilingual-seo-dari-pashto-english) explains how the pages connect through hreflang.

**Step 5: How Do You Check Whether Your Keywords Work?**

Publish, wait for indexing, then read the queries report in Google Search Console. After a few weeks you will see the real Dari and Pashto queries that triggered your pages, including variants you did not predict. Add the strongest ones to titles, headings and copy where they fit naturally, and create new pages for intents you are not yet covering. Repeat every few months. If you are new to the tool, start with our [Google Search Console beginner's guide](/blog/google-search-console-beginners-guide).

**Work With Sheen**

Sheen's team works natively in English, Dari and Pashto, so our keyword research reflects how Afghan customers actually search. See our [SEO services](/services/seo) or [book a consultation](/book), or contact info@sheen.af or +93 784 966 018.`,
            da: `تحقیق کلمات کلیدی دری و پشتو یعنی پیدا کردن دقیق همان کلماتی که افغان‌ها هنگام جستجوی محصول یا خدمات شما، به زبان و خط خودشان، در گوگل تایپ می‌کنند، نه ترجمهٔ کلمات کلیدی انگلیسی. چون ابزارهای معمول کلمات کلیدی برای بیشتر عبارات دری و پشتو حجم جستجوی کم یا هیچ نشان نمی‌دهند، روش عملی ترکیبی از زبان مشتری، پیشنهادهای خودکار گوگل، داده‌های Search Console و مدیریت دقیق شکل‌های املایی است.

**نکات کلیدی**

- ابزارهای کلمات کلیدی جستجوهای دری و پشتو را کمتر از واقع نشان می‌دهند؛ «حجم صفر» را به معنای «نامعلوم» بگیرید، نه «هیچ‌کس جستجو نمی‌کند».
- کلمات پایه را از گفتگوهای واقعی مشتریان جمع کنید: تماس‌ها، WhatsApp، کامنت‌های فیسبوک و پرسش‌هایی که در دکان مطرح می‌شوند.
- با پیشنهادهای خودکار گوگل و بخش «People also ask» در هر زبان فهرست را گسترش دهید و نتایج را روی موبایل بررسی کنید.
- شکل‌های املایی را در نظر بگیرید: حروف عربی در برابر فارسی، حروف خاص پشتو، فاصله‌گذاری و املای لاتین.
- پس از فعال‌شدن صفحات، با داده‌های Google Search Console خودتان درستی کار را تأیید کنید.

**چرا تحقیق کلمات کلیدی به دری و پشتو متفاوت است؟**

متفاوت است چون داده‌ها کمتر و نوشتار کمتر یک‌دست است. بیشتر ابزارهای کلمات کلیدی برای بازارهای بزرگ ساخته شده‌اند؛ برای زبان‌های افغانستان اغلب هیچ حجمی نشان نمی‌دهند، حتی برای جستجوهایی که روشن است مردم تایپ می‌کنند. رفتار جستجو هم زبان‌ها را مخلوط می‌کند: یک کاربر کابلی ممکن است یک عبارت دری را با نام یک برند انگلیسی جستجو کند، روی گوشی‌ای که کیبورد فارسی ندارد دری را با حروف لاتین بنویسد، یا برای موضوعات فنی به انگلیسی روی بیاورد.

املا لایهٔ دیگری اضافه می‌کند. یک کلمه بسته به کیبورد می‌تواند با ي و ك عربی یا ی و ک فارسی تایپ شود. پشتو حروفی مانند ښ، ږ، ځ، څ، ډ، ټ، ړ و ڼ دارد که برخی کیبوردها ندارند، بنابراین کاربران حروف مشابه را جایگزین می‌کنند. گوگل اغلب این شکل‌ها را مرتبط می‌داند، اما نه همیشه کاملاً یکسان، پس تحقیق شما باید آن‌ها را هم در بر بگیرد.

**گام ۱: کلمات کلیدی پایه را از کجا پیدا کنیم؟**

با کلماتی شروع کنید که مشتریان شما از قبل به کار می‌برند. کلمات کلیدی پایه عبارات کوتاه و اصلی هستند که پیشنهاد شما را توصیف می‌کنند، و بهترین منبع آن در افغانستان گفتگوهای واقعی است، نه یک ابزار. یک روش عملی:

1. محصولات یا خدمات اصلی خود را با زبان ساده و به هر سه زبان فهرست کنید.
2. از کارمندانی که به تلفن‌ها و WhatsApp پاسخ می‌دهند بخواهید برای دو یا سه هفته کلمات دقیقی را که مشتریان هنگام پرسیدن دربارهٔ هر خدمت به کار می‌برند یادداشت کنند.
3. کامنت‌ها و پیام‌های صفحهٔ فیسبوک خود و صفحات رقبا را بخوانید و عبارات و پرسش‌های تکراری را یادداشت کنید.
4. نام مکان‌هایی را که مشتریان با خدمات ترکیب می‌کنند بنویسید، مانند ساحات کابل (کارته چهار، شهر نو، خیرخانه) یا شهرهایی مانند هرات، مزارشریف، کندهار و جلال‌آباد.
5. یادداشت کنید که مشتریان مهاجر چگونه حرف می‌زنند، چون اغلب انگلیسی و دری را مخلوط می‌کنند، مثلاً یک کلمهٔ خدماتی به انگلیسی همراه با «Kabul» یا «Afghanistan».

بیست تا چهل کلمهٔ پایهٔ محکم برای هر زبان شروع خوبی است.

**گام ۲: بدون دادهٔ حجم جستجو، کلمات کلیدی را چگونه گسترش دهیم؟**

از خود گوگل به‌عنوان ابزار تحقیق استفاده کنید. هر کلمهٔ پایه را روی گوشی در گوگل تایپ کنید و پیشنهادهای خودکار را یادداشت کنید؛ این‌ها از جستجوهای واقعی گرفته می‌شوند. پس از کلمهٔ پایه حروف اضافه کنید تا پیشنهادهای بیشتری ظاهر شوند. به بخش‌های «People also ask» و جستجوهای مرتبط در پایین صفحه نگاه کنید. همین کار را با شکل‌های حروف فارسی و عربی و با املای لاتین تکرار کنید.

Google Keyword Planner و ابزارهای پولی هنوز برای بخش انگلیسی و گاهی برای جستجوهای بزرگ‌تر دری مفیدند؛ فقط کلماتی را که صفر نشان می‌دهند دور نیندازید. برای مقایسهٔ نسبی علاقه، Google Trends می‌تواند چند کلمه را در طول زمان در افغانستان مقایسه کند، هرچند برای جستجوهای کوچک ممکن است دادهٔ کافی برای نشان دادن چیزی نداشته باشد.

اگر از قبل اعلان اجرا می‌کنید، گزارش search terms در [Google Ads](/services/google-ads) یکی از غنی‌ترین منابع جستجوهای واقعی دری و پشتو است، چون دقیقاً نشان می‌دهد مردم پیش از کلیک چه تایپ کرده‌اند.

**گام ۳: با شکل‌های املایی و خط چگونه برخورد کنیم؟**

برای محتوای قابل مشاهده یک املای استاندارد انتخاب کنید و سپس شکل‌های رایج را به‌طور طبیعی پوشش دهید. قواعد عملی:

- در محتوای دری از ی و ک فارسی استفاده کنید که استاندارد دری افغانستان است، اما انتظار داشته باشید برخی جستجوها با شکل‌های عربی باشند. گوگل معمولاً این‌ها را یکسان‌سازی می‌کند، پس به‌ندرت لازم است هر دو را در صفحه داشته باشید.
- در محتوای پشتو از حروف درست پشتو استفاده کنید؛ ښ یا ږ را بر اساس حدس دربارهٔ کیبوردها با معادل‌های دری جایگزین نکنید.
- هر جا املای استاندارد نیاز دارد از نیم‌فاصله (zero-width non-joiner) استفاده کنید (مثلاً در ویب‌سایت)، اما بدانید که برخی کاربران فاصلهٔ کامل می‌گذارند یا بخش‌ها را به هم می‌چسبانند؛ بررسی کنید کلمات مهم شما در پیشنهادهای خودکار چگونه ظاهر می‌شوند.
- اگر جستجوهایی با خط لاتین دیده می‌شود، شکل آوانویسی‌شده را یک بار در بافتی طبیعی، مثلاً همراه با نام برند یا مکان، بیاورید، نه این‌که آن را انباشته کنید.

**گام ۴: کلمات کلیدی را چگونه گروه‌بندی و به صفحات تخصیص دهیم؟**

کلمات کلیدی را بر اساس هدف جستجو گروه‌بندی کنید و سپس هر گروه را به یک صفحه بدهید. هدف جستجو معمولاً چهار نوع است: اطلاعاتی («چگونه»، «چیست»)، بررسی تجارتی («بهترین»، «قیمت»، «مقایسه»)، معامله‌ای («خرید»، «رزرو»، «فرمایش») و محلی («نزدیک من»، نام یک شهر). هر صفحه باید یک هدف اصلی و شکل‌های نزدیک آن را در یک زبان هدف بگیرد.

برای یک سایت سه‌زبانه، یک جدول ساده با ستون‌هایی برای کلمهٔ کلیدی انگلیسی، دری و پشتوی هر صفحه نگه دارید. این کلمات ترجمهٔ تحت‌اللفظی یکدیگر نخواهند بود و نکتهٔ اصلی همین است. راهنمای ما دربارهٔ [سئوی چندزبانه برای دری، پشتو و انگلیسی](/blog/multilingual-seo-dari-pashto-english) توضیح می‌دهد که صفحات چگونه از طریق hreflang به هم وصل می‌شوند.

**گام ۵: چگونه بفهمیم کلمات کلیدی ما کار می‌کنند؟**

صفحه را نشر کنید، منتظر ایندکس بمانید و سپس گزارش جستجوها (queries) را در Google Search Console بخوانید. پس از چند هفته جستجوهای واقعی دری و پشتو را که صفحات شما را نمایش داده‌اند خواهید دید، از جمله شکل‌هایی که پیش‌بینی نکرده بودید. قوی‌ترین آن‌ها را هر جا به‌طور طبیعی جا می‌افتند به عنوان‌ها، سرخط‌ها و متن اضافه کنید و برای هدف‌هایی که هنوز پوشش نداده‌اید صفحات جدید بسازید. این کار را هر چند ماه یک بار تکرار کنید. اگر با این ابزار تازه آشنا شده‌اید، از [راهنمای مبتدیان Google Search Console](/blog/google-search-console-beginners-guide) ما شروع کنید.

**با شین کار کنید**

تیم شین به‌طور بومی به انگلیسی، دری و پشتو کار می‌کند، بنابراین تحقیق کلمات کلیدی ما بازتاب‌دهندهٔ شیوهٔ واقعی جستجوی مشتریان افغان است. [خدمات سئوی](/services/seo) ما را ببینید یا [یک جلسهٔ مشوره رزرو کنید](/book)، یا با info@sheen.af یا +93 784 966 018 تماس بگیرید.`,
            pa: `د دري او پښتو کلیدي کلمو څېړنه په دې مانا ده چې هغه دقیقې کلمې ومومئ چې افغانان یې ستاسو د محصول یا خدمت د لټون پر مهال، په خپله ژبه او لیک، په ګوګل کې ټایپ کوي، نه دا چې انګلیسي کلیدي کلمې وژباړئ. ځکه چې د کلیدي کلمو عادي وسایل د دري او پښتو د ډېرو عبارتونو لپاره د لټون لږ یا هیڅ حجم نه ښيي، عملي طریقه د پېرودونکي ژبه، د ګوګل اتوماتيک وړاندیزونه، د Search Console معلومات او د املايي بڼو په دقیق مدیریت سره یوځای کوي.

**مهم ټکي**

- د کلیدي کلمو وسایل د دري او پښتو لټونونه له حقیقت لږ ښيي؛ «صفر حجم» د «نامعلوم» په مانا وګڼئ، نه «هیڅوک یې نه لټوي».
- بنسټیزې کلمې د پېرودونکو له رښتینو خبرو راټولې کړئ: زنګونه، WhatsApp، د فیسبوک کمنټونه او هغه پوښتنې چې په دوکان کې کېږي.
- په هره ژبه کې د ګوګل د اتوماتيک وړاندیزونو او «People also ask» په مرسته لست پراخ کړئ او پایلې په موبایل کې وګورئ.
- املايي بڼې په پام کې ونیسئ: عربي او فارسي توري، د پښتو ځانګړي توري، فاصله او په لاتیني تورو املا.
- کله چې پاڼې فعالې شوې، د خپل Google Search Console په معلوماتو یې سموالی تایید کړئ.

**ولې په دري او پښتو کې د کلیدي کلمو څېړنه توپیر لري؟**

توپیر لري ځکه معلومات لږ دي او لیکنه لږ یو شان ده. د کلیدي کلمو ډېری وسایل د لویو بازارونو لپاره جوړ شوي؛ د افغانستان د ژبو لپاره ډېری وخت هیڅ حجم نه ښيي، حتی د هغو لټونونو لپاره چې څرګنده ده خلک یې ټایپ کوي. د لټون چلند هم ژبې سره ګډوي: د کابل یو کاروونکی ښايي یو دري عبارت د یوې انګلیسي برنډ له نوم سره ولټوي، په داسې تلیفون چې فارسي کیبورډ نه لري دري په لاتیني تورو ولیکي، یا د تخنیکي موضوعاتو لپاره انګلیسي ته واوړي.

املا بل پوړ زیاتوي. یوه کلمه د کیبورډ له مخې کېدای شي په عربي ي او ك یا فارسي ی او ک ټایپ شي. پښتو داسې توري لري لکه ښ، ږ، ځ، څ، ډ، ټ، ړ او ڼ چې ځینې کیبورډونه یې نه لري، نو کاروونکي ورته توري پر ځای کاروي. ګوګل ډېری وخت دا بڼې اړوندې ګڼي، خو تل بالکل یو شان نه، نو ستاسو څېړنه باید دا هم ونیسي.

**لومړی ګام: بنسټیزې کلیدي کلمې له کومه ومومو؟**

له هغو کلمو پیل وکړئ چې ستاسو پېرودونکي یې دمخه کاروي. بنسټیزې کلیدي کلمې هغه لنډ او اصلي عبارتونه دي چې ستاسو وړاندیز بیانوي، او په افغانستان کې یې غوره سرچینه رښتینې خبرې دي، نه یوه وسیله. یوه عملي طریقه:

1. خپل اصلي محصولات یا خدمات په ساده ژبه او په درې واړو ژبو لست کړئ.
2. له هغو کارکوونکو چې تلیفونونو او WhatsApp ته ځواب ورکوي وغواړئ چې د دوو یا درېیو اونیو لپاره هغه دقیقې کلمې ولیکي چې پېرودونکي یې د هر خدمت په اړه د پوښتنې پر مهال کاروي.
3. د خپلې فیسبوک پاڼې او د سیالانو د پاڼو کمنټونه او پیغامونه ولولئ؛ تکرارېدونکي عبارتونه او پوښتنې ولیکئ.
4. د هغو ځایونو نومونه ولیکئ چې پېرودونکي یې له خدماتو سره یوځای کوي، لکه د کابل سیمې (کارته چهار، شهر نو، خیرخانه) یا ښارونه لکه هرات، مزارشریف، کندهار او جلال‌آباد.
5. ولیکئ چې مهاجر پېرودونکي څنګه خبرې کوي، ځکه هغوی ډېری وخت انګلیسي او دري ګډوي، د بېلګې په توګه د یو خدمت کلمه په انګلیسي او ورسره «Kabul» یا «Afghanistan».

د هرې ژبې لپاره له شلو تر څلوېښتو پورې پیاوړې بنسټیزې کلمې یو ښه پیل دی.

**دویم ګام: د لټون د حجم له معلوماتو پرته کلیدي کلمې څنګه پراخې کړو؟**

پخپله ګوګل د څېړنې د وسیلې په توګه وکاروئ. هره بنسټیزه کلمه په تلیفون کې په ګوګل کې ټایپ کړئ او اتوماتيک وړاندیزونه ولیکئ؛ دا له رښتینو لټونونو اخیستل کېږي. له بنسټیزې کلمې وروسته توري زیات کړئ څو نور وړاندیزونه راښکاره شي. د «People also ask» برخو او د پاڼې په لاندې برخه کې اړوندو لټونونو ته وګورئ. همدا کار د فارسي او عربي تورو په بڼو او د لاتیني املا سره تکرار کړئ.

Google Keyword Planner او پیسې لرونکي وسایل لا هم د انګلیسي برخې لپاره او کله ناکله د دري د لویو لټونونو لپاره ګټور دي؛ یوازې هغه کلمې مه غورځوئ چې صفر ښيي. د علاقې د نسبي پرتلې لپاره، Google Trends کولای شي په افغانستان کې د وخت په اوږدو کې څو کلمې سره پرتله کړي، که څه هم د کوچنیو لټونونو لپاره ښايي د ښودلو لپاره کافي معلومات ونه لري.

که دمخه اعلانونه چلوئ، په [Google Ads](/services/google-ads) کې د search terms راپور د دري او پښتو د رښتینو لټونونو یوه تر ټولو بډایه سرچینه ده، ځکه په دقیق ډول ښيي چې خلکو له کلیک مخکې څه ټایپ کړي وو.

**درېیم ګام: له املايي بڼو او لیک سره څنګه چلند وکړو؟**

د لیدل کېدونکې منځپانګې لپاره یوه معیاري املا وټاکئ، بیا عامې بڼې په طبیعي ډول وپوښئ. عملي قواعد:

- په دري منځپانګه کې فارسي ی او ک وکاروئ چې د افغانستان د دري معیار دی، خو تمه ولرئ چې ځینې لټونونه به په عربي بڼو وي. ګوګل معمولاً دا یو شان کوي، نو ډېر کم اړتیا ده چې دواړه په پاڼه کې ولرئ.
- په پښتو منځپانګه کې سم پښتو توري وکاروئ؛ ښ یا ږ د کیبورډونو په اړه د اټکل پر بنسټ په دري معادلو مه بدلوئ.
- هر چېرې چې معیاري املا اړتیا لري نیم فاصله (zero-width non-joiner) وکاروئ (د بېلګې په توګه په ویب‌سایټ کې)، خو پوه شئ چې ځینې کاروونکي بشپړه فاصله ږدي یا برخې سره نښلوي؛ وګورئ چې ستاسو مهمې کلمې په اتوماتيک وړاندیزونو کې څنګه ښکاري.
- که په لاتیني لیک لټونونه ښکاري، د تلفظ پر بنسټ لیکل شوې بڼه یو ځل په طبیعي متن کې، لکه د برنډ یا ځای له نوم سره، راوړئ، نه دا چې ډېره یې تکرار کړئ.

**څلورم ګام: کلیدي کلمې څنګه ډله‌بندي او پاڼو ته وټاکو؟**

کلیدي کلمې د لټون د موخې له مخې ډله‌بندي کړئ، بیا هره ډله یوې پاڼې ته ورکړئ. د لټون موخه معمولاً څلور ډوله وي: معلوماتي («څنګه»، «څه شی دی»)، سوداګریزه څېړنه («غوره»، «بیه»، «پرتله»)، معاملوي («پېرل»، «بوک کول»، «فرمایش») او محلي («ما ته نږدې»، د یو ښار نوم). هره پاڼه باید یوه اصلي موخه او د هغې نږدې بڼې په یوه ژبه کې په نښه کړي.

د یو درې ژبني سایټ لپاره یو ساده جدول وساتئ چې د هرې پاڼې د انګلیسي، دري او پښتو کلیدي کلمې لپاره ستنې ولري. دا کلمې به د یو بل لفظي ژباړه نه وي، او اصلي ټکی همدا دی. زموږ لارښود [د دري، پښتو او انګلیسي لپاره څو ژبنی SEO](/blog/multilingual-seo-dari-pashto-english) تشریح کوي چې پاڼې د hreflang له لارې څنګه سره نښلي.

**پنځم ګام: څنګه پوه شو چې زموږ کلیدي کلمې کار کوي؟**

پاڼه خپره کړئ، د انډکس انتظار وباسئ او بیا په Google Search Console کې د لټونونو (queries) راپور ولولئ. له څو اونیو وروسته به هغه رښتیني دري او پښتو لټونونه وګورئ چې ستاسو پاڼې یې ښودلې دي، په شمول د هغو بڼو چې تاسو وړاندوینه نه وه کړې. پیاوړي یې هر چېرې چې په طبیعي ډول ځای کېږي سرلیکونو، فرعي سرلیکونو او متن ته ور زیات کړئ او د هغو موخو لپاره چې لا مو نه دي پوښلې نوې پاڼې جوړې کړئ. دا کار هرو څو میاشتو کې تکرار کړئ. که له دې وسیلې سره نوي اشنا شوي یاست، زموږ له [د Google Search Console د پیل کوونکو لارښود](/blog/google-search-console-beginners-guide) پیل وکړئ.

**له شین سره کار وکړئ**

د شین ټیم په انګلیسي، دري او پښتو کې په اصلي ډول کار کوي، نو زموږ د کلیدي کلمو څېړنه دا ښيي چې افغان پېرودونکي په رښتیا څنګه لټون کوي. زموږ [د SEO خدمات](/services/seo) وګورئ یا [د مشورې یوه ناسته بوک کړئ](/book)، یا له info@sheen.af یا +93 784 966 018 سره اړیکه ونیسئ.`
        },
        faqs: [
            {
                q: { en: "Why does Google Keyword Planner show zero searches for my Dari keywords?", da: "چرا Google Keyword Planner برای کلمات کلیدی دری من صفر جستجو نشان می‌دهد؟", pa: "ولې Google Keyword Planner زما د دري کلیدي کلمو لپاره صفر لټون ښيي؟" },
                a: {
                    en: "Keyword Planner rounds and groups data, and it is designed mainly for advertisers in larger markets, so low-volume queries in smaller languages often show as zero or are missing entirely. That does not mean nobody searches them. Use Google autocomplete, your Google Ads search terms report and Search Console queries to confirm which Dari phrases real people are typing.",
                    da: "Keyword Planner داده‌ها را گرد و گروه‌بندی می‌کند و عمدتاً برای اعلان‌دهندگان در بازارهای بزرگ‌تر طراحی شده است، بنابراین جستجوهای کم‌حجم در زبان‌های کوچک‌تر اغلب صفر نشان داده می‌شوند یا اصلاً وجود ندارند. این به آن معنا نیست که هیچ‌کس آن‌ها را جستجو نمی‌کند. از پیشنهادهای خودکار گوگل، گزارش search terms در Google Ads و جستجوهای Search Console استفاده کنید تا ببینید مردم واقعاً کدام عبارات دری را تایپ می‌کنند.",
                    pa: "Keyword Planner معلومات ګردوي او ډله‌بندي کوي او په عمده توګه د لویو بازارونو د اعلان ورکوونکو لپاره جوړ شوی دی، نو په کوچنیو ژبو کې د لږ حجم لټونونه ډېری وخت صفر ښودل کېږي یا هیڅ نه وي. دا په دې مانا نه ده چې هیڅوک یې نه لټوي. د ګوګل اتوماتيک وړاندیزونه، د Google Ads د search terms راپور او د Search Console لټونونه وکاروئ څو تایید کړئ چې رښتیني خلک کوم دري عبارتونه ټایپ کوي."
                }
            },
            {
                q: { en: "Should I target Dari or Pashto keywords first?", da: "اول باید کلمات کلیدی دری را هدف بگیرم یا پشتو؟", pa: "لومړی باید دري کلیدي کلمې په نښه کړم که پښتو؟" },
                a: {
                    en: "Start with the language most of your customers use. A business in Kabul, Herat or Mazar-i-Sharif will often see more Dari searches, while one serving Kandahar, Jalalabad or Pashto-speaking regions may find Pashto more valuable. Check your phone and WhatsApp enquiries and existing Search Console data. Ideally cover both, because Pashto search results are often less competitive.",
                    da: "با زبانی شروع کنید که بیشتر مشتریان شما به کار می‌برند. یک تجارت در کابل، هرات یا مزارشریف اغلب جستجوهای دری بیشتری می‌بیند، در حالی که تجارتی که به کندهار، جلال‌آباد یا مناطق پشتوزبان خدمت می‌کند ممکن است پشتو را ارزشمندتر بیابد. درخواست‌های تلفنی و WhatsApp و داده‌های موجود Search Console خود را بررسی کنید. بهتر است هر دو را پوشش دهید، چون نتایج جستجوی پشتو اغلب رقابت کمتری دارند.",
                    pa: "له هغې ژبې پیل وکړئ چې ستاسو ډېری پېرودونکي یې کاروي. په کابل، هرات یا مزارشریف کې یوه سوداګري ډېری وخت ډېر دري لټونونه ویني، په داسې حال کې چې هغه سوداګري چې کندهار، جلال‌آباد یا پښتو ژبو سیمو ته خدمت کوي ښايي پښتو ډېره ارزښتناکه ومومي. خپلې د تلیفون او WhatsApp غوښتنې او د Search Console موجود معلومات وګورئ. غوره دا ده چې دواړه وپوښئ، ځکه د پښتو د لټون پایلې ډېری وخت لږه سیالي لري."
                }
            },
            {
                q: { en: "Do people in Afghanistan search in English?", da: "آیا مردم در افغانستان به انگلیسی جستجو می‌کنند؟", pa: "ایا په افغانستان کې خلک په انګلیسي لټون کوي؟" },
                a: {
                    en: "Yes, for some topics. English is common for technology, software, brand names, education abroad, jobs with international organisations and professional services, and many queries mix English words with Dari or Pashto. Everyday local needs such as clinics, shops, restaurants and home services are more often searched in Dari or Pashto. Your keyword research should reveal the mix for your specific business.",
                    da: "بله، برای برخی موضوعات. انگلیسی برای فناوری، نرم‌افزار، نام برندها، تحصیل در خارج، وظایف در سازمان‌های بین‌المللی و خدمات مسلکی رایج است و بسیاری از جستجوها کلمات انگلیسی را با دری یا پشتو مخلوط می‌کنند. نیازهای روزمرهٔ محلی مانند کلینیک، دکان، رستورانت و خدمات خانگی بیشتر به دری یا پشتو جستجو می‌شوند. تحقیق کلمات کلیدی شما باید این ترکیب را برای تجارت مشخص شما روشن کند.",
                    pa: "هو، د ځینو موضوعاتو لپاره. انګلیسي د ټیکنالوژۍ، سافټویر، د برنډونو نومونو، په بهر کې زده کړو، په نړیوالو سازمانونو کې دندو او مسلکي خدماتو لپاره عامه ده، او ډېری لټونونه انګلیسي کلمې له دري یا پښتو سره ګډوي. ورځنۍ محلي اړتیاوې لکه کلینیکونه، دوکانونه، رستورانتونه او کورني خدمات ډېری وخت په دري یا پښتو لټول کېږي. ستاسو د کلیدي کلمو څېړنه باید ستاسو د ځانګړې سوداګرۍ لپاره دا ګډوله روښانه کړي."
                }
            },
            {
                q: { en: "How many keywords should one page target?", da: "یک صفحه چند کلمهٔ کلیدی را باید هدف بگیرد؟", pa: "یوه پاڼه باید څو کلیدي کلمې په نښه کړي؟" },
                a: {
                    en: "One main keyword or topic per page, plus its close variants and related questions in the same language. A Dari service page might target one core phrase, its common spelling variants and a few related questions about price or location. If two keywords need different answers, such as a price question and a how-to question, they usually deserve separate pages.",
                    da: "برای هر صفحه یک کلمهٔ کلیدی یا موضوع اصلی، به‌علاوهٔ شکل‌های نزدیک و پرسش‌های مرتبط آن در همان زبان. یک صفحهٔ خدمات دری ممکن است یک عبارت اصلی، شکل‌های املایی رایج آن و چند پرسش مرتبط دربارهٔ قیمت یا مکان را هدف بگیرد. اگر دو کلمهٔ کلیدی به پاسخ‌های متفاوت نیاز دارند، مانند یک پرسش دربارهٔ قیمت و یک پرسش «چگونه»، معمولاً هر کدام سزاوار صفحهٔ جداگانه است.",
                    pa: "د هرې پاڼې لپاره یوه اصلي کلیدي کلمه یا موضوع، او ورسره د هغې نږدې بڼې او اړوندې پوښتنې په همغه ژبه کې. د خدماتو یوه دري پاڼه ښايي یو اصلي عبارت، د هغه عامې املايي بڼې او د بیې یا ځای په اړه څو اړوندې پوښتنې په نښه کړي. که دوه کلیدي کلمې بېلو ځوابونو ته اړتیا ولري، لکه د بیې پوښتنه او د «څنګه» پوښتنه، معمولاً هره یوه د جلا پاڼې وړ ده."
                }
            }
        ],
        category: "seo",
        author: "Suliman Hakimi",
        date: "2026-09-12",
        updated: "2026-09-12",
        readTime: "5 min read",
        image: "/logo.png",
        tags: ["dari pashto keyword research", "Dari keyword research", "Pashto keywords", "Persian keyword research", "keyword research 2026", "Google autocomplete", "SEO Afghanistan", "Kabul"]
    },
];

export default posts;
