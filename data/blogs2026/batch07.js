// Batch 07 — website redesign SEO, PWAs, website security, .af domains and hosting, website maintenance. Generated 2026-10.
const posts = [
    {
        id: "121",
        slug: "website-redesign-without-losing-seo",
        title: {
            en: "Website Redesign SEO: How to Redesign Without Losing Rankings",
            da: "سئو در بازطراحی ویب‌سایت: چگونه بدون از دست دادن رتبه، سایت را بازطراحی کنیم",
            pa: "د ویب پاڼې بیا ډیزاین او SEO: څنګه پرته له دې چې درجه له لاسه ورکړو سایټ بیا ډیزاین کړو"
        },
        excerpt: {
            en: "A practical website redesign SEO guide: crawl the old site, map 301 redirects, keep your best content and test on staging so rankings and traffic survive.",
            da: "راهنمای عملی سئو در بازطراحی ویب‌سایت: سایت قدیمی را بررسی کنید، ریدایرکت‌های 301 را نقشه‌برداری کنید و قبل از انتشار همه چیز را آزمایش کنید.",
            pa: "د ویب پاڼې د بیا ډیزاین لپاره عملي SEO لارښود: زوړ سایټ وڅېړئ، د 301 ریډایرکټونو نقشه جوړه کړئ او له خپرولو مخکې هر څه وازمویئ."
        },
        content: {
            en: `Website redesign SEO comes down to one rule: every page that earns traffic today must either keep its URL or be permanently redirected (301) to its closest new equivalent, with its content, title and internal links preserved. Most ranking losses after a redesign are not caused by the new design itself but by broken URLs, deleted content, and a staging site that was accidentally left blocked from Google. If you plan the migration before the designers start, you can launch a faster, better-looking site and keep your rankings.

**Key Takeaways**

- Crawl and export every URL on your current site before anything changes, and record which pages bring traffic and links.
- Map each old URL to one new URL and use permanent 301 redirects, never a blanket redirect to the homepage.
- Keep the content, headings and title tags of your best pages unless you are deliberately improving them.
- Test the new site on a staging server that is blocked from indexing, then remove that block on launch day.
- Watch Google Search Console daily for the first few weeks and fix 404 errors quickly.

**Why Do Websites Lose Rankings After a Redesign?**

Websites lose rankings after a redesign because Google suddenly finds different URLs, missing content or technical blocks where it used to find pages it trusted. Search engines rank individual pages, not brands. When a page that ranked for "English course Kabul" disappears or moves without a redirect, Google treats the new page as a stranger and the old one as gone.

The most common causes we see are:

- URLs changed from something like /about-us.html to /about with no redirect in place.
- Pages that brought steady traffic were removed because they "looked old".
- Text was replaced with images, sliders or short marketing lines, so the page no longer answers the query.
- The staging site's noindex tag or robots.txt block was copied to the live site.
- A new JavaScript framework rendered content in a way crawlers struggled with.
- Internal links, menus and breadcrumbs were rebuilt and important pages became hard to reach.

None of these are design problems. They are planning problems, which is why SEO needs a seat at the table from the first meeting.

**What Should You Do Before the Redesign Starts?**

Before any design work begins, take a complete snapshot of the current site so you know exactly what you must protect. This is the step most businesses skip, and it is the one that makes everything else possible.

1. **Crawl the whole site.** Use a crawler to list every URL, its status code, title tag, meta description, H1 and canonical tag. Save the export.
2. **Export performance data.** From Google Search Console, download the pages and queries report for the last 12 months. If you need a refresher, our [Google Search Console beginner's guide](/blog/google-search-console-beginners-guide) explains where to find it.
3. **List your linked pages.** Note which pages other websites link to. Those links carry authority you do not want to throw away.
4. **Mark your priority pages.** Combine the data into a short list of pages that bring traffic, enquiries or links. These pages get the most care.
5. **Record a baseline.** Write down current clicks, impressions, top keywords and Core Web Vitals so you can compare after launch.

For a multilingual Afghan business, do this for every language version. A Dari page that ranks well in Herat is just as valuable as the English page that brings diaspora customers from Germany or Canada.

**How Do You Map Old URLs to New Ones?**

You map old URLs to new ones by building a simple spreadsheet with two columns, old URL and new URL, and filling in a match for every page that matters. This redirect map becomes the most important document in the whole project.

Follow these rules when filling it in:

- **Keep URLs where you can.** The safest redirect is the one you never need. If /services/web-design already works, keep it.
- **One to one, not many to one.** Redirect each old page to the most relevant new page. Sending everything to the homepage is treated much like a deleted page.
- **Use 301 redirects.** A 301 tells search engines the move is permanent and passes the old page's signals to the new one. Temporary 302 redirects are the wrong tool here.
- **Avoid chains.** If a page was already redirected in the past, point the oldest URL directly at the final destination.
- **Handle every language.** If your site uses /da/ and /pa/ paths, map those too and keep your hreflang tags consistent.
- **Decide what truly goes.** Pages with no traffic, no links and no business value can be removed and return a 404 or 410. That is fine, as long as it is a decision rather than an accident.

On modern frameworks such as Next.js, redirects can be defined in the project configuration or at the hosting level, so they work instantly and do not depend on a plugin.

**How Do You Protect Content and On-Page SEO?**

You protect on-page SEO by carrying over the elements Google already associates with each page: the main text, the headings, the title tag, the meta description and the internal links pointing to it. A redesign is a good moment to improve weak pages, but change ranking pages deliberately, one decision at a time.

Practical guidance:

- Keep the body copy of your top pages. You can restyle it, split it into sections and add images, but do not cut the substance.
- Keep title tags and H1s close to the originals unless the data shows they are underperforming.
- Preserve structured data such as Organization, LocalBusiness, Product or FAQ markup.
- Keep image alt text and file names meaningful when you replace photos.
- Rebuild internal links so priority pages are no more than a few clicks from the homepage.
- Make sure the new site is faster, not slower. Heavy hero videos and animation libraries can hurt Core Web Vitals, especially on mobile data in Afghanistan. Our guide to [Core Web Vitals and INP in 2026](/blog/core-web-vitals-inp-2026) covers what to measure.

**How Should You Test and Launch the New Site?**

Test the new site on a private staging server, run the same crawl you ran on the old site, and only launch when every priority URL resolves correctly. Treat launch day as a checklist, not a celebration.

Pre-launch checklist:

1. Staging is password-protected or set to noindex, so Google does not index a duplicate site.
2. Every row in the redirect map has been tested and returns a single 301 to a live page.
3. Title tags, meta descriptions, canonicals and hreflang tags are present on every template.
4. The XML sitemap lists only the new, indexable URLs.
5. Analytics and conversion tracking fire on forms, calls and WhatsApp buttons.
6. Pages render their main content in the HTML that crawlers receive.

On launch day, remove the staging noindex and any robots.txt block, submit the new sitemap in Search Console, and spot-check the top 20 old URLs in a browser. Launch early in the week, when your team is available to fix issues, rather than before a holiday.

**What Should You Monitor After Launch?**

After launch, monitor Search Console coverage, 404 errors, rankings for priority keywords and organic conversions every day for two weeks, then weekly for at least two to three months. Some fluctuation in the first weeks is normal while Google recrawls the site; a steady, deep decline usually points to a specific technical issue you can find and fix.

Look for pages reported as "Not found", unexpected "Excluded by noindex tag" warnings, and priority pages that dropped out of the index. Fix redirects as soon as you spot gaps, and keep the redirects in place for the long term rather than removing them after a few months. A full [technical SEO audit](/blog/technical-seo-audit-checklist-2026) around six weeks after launch is a sensible checkpoint.

**Work With Sheen**

Sheen plans redesigns with SEO built in from day one: we crawl your current site, build the redirect map and launch on a fast Next.js build in English, Dari and Pashto. See our [web design service](/services/web-design) and [SEO service](/services/seo), or [contact us](/contact) at info@sheen.af or +93 784 966 018 to plan your redesign.`,
            da: `سئو در بازطراحی ویب‌سایت به یک قاعده خلاصه می‌شود: هر صفحه‌ای که امروز بازدید می‌آورد باید یا آدرس (URL) خود را حفظ کند یا با ریدایرکت دائمی (301) به نزدیک‌ترین صفحه معادل جدید منتقل شود و محتوا، عنوان و لینک‌های داخلی آن حفظ شود. بیشتر افت رتبه پس از بازطراحی به خاطر خود طرح جدید نیست، بلکه به خاطر آدرس‌های شکسته، محتوای حذف‌شده و سایت آزمایشی است که به اشتباه برای گوگل بسته مانده است. اگر انتقال را پیش از شروع کار طراحان برنامه‌ریزی کنید، می‌توانید سایتی سریع‌تر و زیباتر راه‌اندازی کنید و رتبه‌های خود را نگه دارید.

**نکات کلیدی**

- پیش از هر تغییری، تمام آدرس‌های سایت فعلی را بررسی (crawl) و استخراج کنید و ثبت کنید کدام صفحات بازدید و لینک می‌آورند.
- هر آدرس قدیمی را به یک آدرس جدید وصل کنید و از ریدایرکت دائمی 301 استفاده کنید، نه ریدایرکت همه صفحات به صفحه اصلی.
- محتوا، سرتیترها و تگ‌های عنوان بهترین صفحات خود را حفظ کنید، مگر اینکه عمداً آن‌ها را بهتر می‌سازید.
- سایت جدید را روی یک سرور آزمایشی که برای ایندکس بسته است آزمایش کنید و در روز راه‌اندازی این محدودیت را بردارید.
- در چند هفته اول هر روز Google Search Console را بررسی کنید و خطاهای 404 را زود رفع کنید.

**چرا ویب‌سایت‌ها پس از بازطراحی رتبه از دست می‌دهند؟**

ویب‌سایت‌ها پس از بازطراحی رتبه از دست می‌دهند چون گوگل ناگهان به جای صفحاتی که به آن‌ها اعتماد داشت، آدرس‌های متفاوت، محتوای گم‌شده یا موانع فنی پیدا می‌کند. موتورهای جستجو صفحات را رتبه‌بندی می‌کنند، نه برندها را. وقتی صفحه‌ای که برای «کورس انگلیسی کابل» رتبه داشت ناپدید می‌شود یا بدون ریدایرکت جابه‌جا می‌شود، گوگل صفحه جدید را ناآشنا و صفحه قدیمی را حذف‌شده می‌داند.

رایج‌ترین دلایلی که می‌بینیم این‌ها هستند:

- آدرس‌ها از چیزی مانند /about-us.html به /about تغییر کرده‌اند و هیچ ریدایرکتی تنظیم نشده است.
- صفحاتی که بازدید ثابت داشتند حذف شدند چون «کهنه به نظر می‌رسیدند».
- متن با عکس، اسلایدر یا جمله‌های کوتاه تبلیغاتی جایگزین شد و صفحه دیگر به سؤال جستجوگر پاسخ نمی‌دهد.
- تگ noindex یا محدودیت robots.txt سایت آزمایشی به سایت اصلی کاپی شد.
- یک فریم‌ورک جدید JavaScript محتوا را طوری نمایش داد که خزنده‌ها در خواندن آن مشکل داشتند.
- لینک‌های داخلی، منوها و مسیرنماها دوباره ساخته شدند و دسترسی به صفحات مهم سخت شد.

هیچ‌کدام از این‌ها مشکل طراحی نیستند. این‌ها مشکلات برنامه‌ریزی هستند و به همین دلیل سئو باید از نخستین جلسه در پروژه حضور داشته باشد.

**پیش از شروع بازطراحی چه کاری باید انجام دهید؟**

پیش از آغاز هر کار طراحی، یک تصویر کامل از سایت فعلی بگیرید تا دقیقاً بدانید چه چیزی را باید محافظت کنید. این مرحله‌ای است که بیشتر کسب‌وکارها نادیده می‌گیرند، در حالی که همه مراحل بعدی به آن وابسته است.

1. **تمام سایت را بررسی کنید.** با یک ابزار crawler فهرست همه آدرس‌ها، کد وضعیت، تگ عنوان، توضیحات متا، H1 و تگ canonical را بگیرید و ذخیره کنید.
2. **داده‌های عملکرد را استخراج کنید.** از Google Search Console گزارش صفحات و کلیدواژه‌های ۱۲ ماه گذشته را دانلود کنید. اگر نیاز به یادآوری دارید، [راهنمای مبتدیان Google Search Console](/blog/google-search-console-beginners-guide) جای آن را توضیح می‌دهد.
3. **صفحات دارای لینک را فهرست کنید.** یادداشت کنید سایت‌های دیگر به کدام صفحات لینک داده‌اند. این لینک‌ها اعتباری دارند که نباید از دست برود.
4. **صفحات اولویت‌دار را مشخص کنید.** داده‌ها را در یک فهرست کوتاه از صفحاتی که بازدید، درخواست یا لینک می‌آورند جمع کنید. این صفحات بیشترین توجه را می‌خواهند.
5. **وضعیت پایه را ثبت کنید.** کلیک‌ها، نمایش‌ها، کلیدواژه‌های اصلی و Core Web Vitals فعلی را بنویسید تا بعد از راه‌اندازی مقایسه کنید.

برای یک کسب‌وکار چندزبانه افغان، این کار را برای هر نسخه زبانی انجام دهید. یک صفحه دری که در هرات رتبه خوبی دارد به اندازه صفحه انگلیسی که مشتریان مهاجر را از آلمان یا کانادا می‌آورد ارزشمند است.

**چگونه آدرس‌های قدیمی را به آدرس‌های جدید وصل کنیم؟**

آدرس‌های قدیمی را با ساختن یک جدول ساده با دو ستون، آدرس قدیمی و آدرس جدید، و پر کردن یک معادل برای هر صفحه مهم به آدرس‌های جدید وصل می‌کنید. این نقشه ریدایرکت مهم‌ترین سند کل پروژه است.

هنگام پر کردن آن این قواعد را رعایت کنید:

- **هر جا ممکن است آدرس‌ها را نگه دارید.** امن‌ترین ریدایرکت آن است که هرگز به آن نیاز پیدا نکنید. اگر /services/web-design کار می‌کند، آن را نگه دارید.
- **یک به یک، نه چند به یک.** هر صفحه قدیمی را به مرتبط‌ترین صفحه جدید بفرستید. فرستادن همه چیز به صفحه اصلی تقریباً مانند حذف صفحه حساب می‌شود.
- **از ریدایرکت 301 استفاده کنید.** 301 به موتورهای جستجو می‌گوید که انتقال دائمی است و اعتبار صفحه قدیمی را به صفحه جدید منتقل می‌کند. ریدایرکت موقت 302 در اینجا ابزار درستی نیست.
- **از زنجیره پرهیز کنید.** اگر صفحه‌ای قبلاً ریدایرکت شده بود، قدیمی‌ترین آدرس را مستقیماً به مقصد نهایی بفرستید.
- **همه زبان‌ها را در نظر بگیرید.** اگر سایت شما مسیرهای /da/ و /pa/ دارد، آن‌ها را هم نقشه‌برداری کنید و تگ‌های hreflang را یکدست نگه دارید.
- **درباره حذف واقعی تصمیم بگیرید.** صفحاتی که نه بازدید دارند، نه لینک و نه ارزش تجاری، می‌توانند حذف شوند و خطای 404 یا 410 برگردانند. این مشکلی ندارد، به شرطی که تصمیم باشد نه اتفاق.

در فریم‌ورک‌های مدرن مانند Next.js، ریدایرکت‌ها را می‌توان در تنظیمات پروژه یا در سطح هاستینگ تعریف کرد تا فوراً کار کنند و به هیچ افزونه‌ای وابسته نباشند.

**چگونه از محتوا و سئوی درون‌صفحه محافظت کنیم؟**

از سئوی درون‌صفحه با انتقال عناصری محافظت می‌کنید که گوگل از قبل با هر صفحه مرتبط می‌داند: متن اصلی، سرتیترها، تگ عنوان، توضیحات متا و لینک‌های داخلی که به آن اشاره می‌کنند. بازطراحی زمان خوبی برای بهتر کردن صفحات ضعیف است، اما صفحات دارای رتبه را آگاهانه و با یک تصمیم در هر بار تغییر دهید.

راهنمایی‌های عملی:

- متن اصلی صفحات برتر خود را نگه دارید. می‌توانید ظاهرش را تغییر دهید، آن را به بخش‌ها تقسیم کنید و عکس اضافه کنید، اما محتوای اصلی را کم نکنید.
- تگ‌های عنوان و H1 را نزدیک به نسخه اصلی نگه دارید، مگر اینکه داده‌ها نشان دهد عملکرد خوبی ندارند.
- داده‌های ساختاریافته مانند Organization، LocalBusiness، Product یا FAQ را حفظ کنید.
- هنگام تعویض عکس‌ها، متن alt و نام فایل‌ها را معنادار نگه دارید.
- لینک‌های داخلی را طوری بسازید که صفحات اولویت‌دار بیش از چند کلیک از صفحه اصلی فاصله نداشته باشند.
- مطمئن شوید سایت جدید سریع‌تر است، نه کندتر. ویدیوهای سنگین و کتابخانه‌های انیمیشن می‌توانند به Core Web Vitals آسیب بزنند، به‌ویژه با انترنت موبایل در افغانستان. راهنمای ما درباره [Core Web Vitals و INP در سال 2026](/blog/core-web-vitals-inp-2026) توضیح می‌دهد چه چیزی را اندازه بگیرید.

**چگونه سایت جدید را آزمایش و راه‌اندازی کنیم؟**

سایت جدید را روی یک سرور آزمایشی خصوصی آزمایش کنید، همان بررسی‌ای را که روی سایت قدیمی انجام دادید تکرار کنید و فقط زمانی راه‌اندازی کنید که همه آدرس‌های اولویت‌دار درست باز شوند. روز راه‌اندازی را یک چک‌لیست بدانید، نه یک جشن.

چک‌لیست پیش از راه‌اندازی:

1. سایت آزمایشی رمزدار است یا noindex دارد تا گوگل یک سایت تکراری را ایندکس نکند.
2. هر ردیف نقشه ریدایرکت آزمایش شده و فقط یک 301 به یک صفحه فعال برمی‌گرداند.
3. تگ‌های عنوان، توضیحات متا، canonical و hreflang در همه قالب‌ها وجود دارند.
4. نقشه XML سایت فقط آدرس‌های جدید و قابل ایندکس را فهرست می‌کند.
5. ابزار تحلیل و ردیابی تبدیل روی فورم‌ها، تماس‌ها و دکمه‌های WhatsApp کار می‌کنند.
6. محتوای اصلی صفحات در HTML که خزنده‌ها دریافت می‌کنند نمایش داده می‌شود.

در روز راه‌اندازی، noindex سایت آزمایشی و هر محدودیت robots.txt را بردارید، نقشه سایت جدید را در Search Console ثبت کنید و ۲۰ آدرس قدیمی برتر را در مرورگر امتحان کنید. راه‌اندازی را در اوایل هفته انجام دهید که تیم شما برای رفع مشکلات حاضر است، نه پیش از رخصتی.

**پس از راه‌اندازی چه چیزی را زیر نظر بگیریم؟**

پس از راه‌اندازی، وضعیت ایندکس در Search Console، خطاهای 404، رتبه کلیدواژه‌های اولویت‌دار و تبدیل‌های ارگانیک را تا دو هفته هر روز و سپس دست‌کم دو تا سه ماه هر هفته بررسی کنید. کمی نوسان در هفته‌های اول عادی است، چون گوگل سایت را دوباره بررسی می‌کند؛ اما افت عمیق و پیوسته معمولاً نشانه یک مشکل فنی مشخص است که می‌توانید پیدا و رفع کنید.

به دنبال صفحاتی باشید که «Not found» گزارش شده‌اند، هشدارهای غیرمنتظره «Excluded by noindex tag» و صفحات اولویت‌داری که از ایندکس خارج شده‌اند. کمبودهای ریدایرکت را به محض دیدن رفع کنید و ریدایرکت‌ها را برای مدت طولانی نگه دارید، نه اینکه پس از چند ماه حذفشان کنید. یک [بررسی کامل سئوی فنی](/blog/technical-seo-audit-checklist-2026) حدود شش هفته پس از راه‌اندازی نقطه کنترل مناسبی است.

**با شین کار کنید**

شین بازطراحی‌ها را از روز اول با سئو برنامه‌ریزی می‌کند: سایت فعلی شما را بررسی می‌کنیم، نقشه ریدایرکت را می‌سازیم و سایت را با Next.js سریع به زبان‌های انگلیسی، دری و پشتو راه‌اندازی می‌کنیم. [خدمات طراحی ویب‌سایت](/services/web-design) و [خدمات سئو](/services/seo) ما را ببینید یا برای برنامه‌ریزی بازطراحی از طریق info@sheen.af یا +93 784 966 018 [با ما تماس بگیرید](/contact).`,
            pa: `د ویب پاڼې د بیا ډیزاین SEO په یوه قاعده کې لنډېږي: هره پاڼه چې نن ورځ لیدونکي راوړي، باید یا خپل URL وساتي یا په دایمي ډول (301) خپلې تر ټولو نږدې نوې پاڼې ته واستول شي او منځپانګه، سرلیک او داخلي لینکونه یې خوندي پاتې شي. له بیا ډیزاین وروسته ډېری د درجې کمښت د نوي ډیزاین له امله نه وي، بلکې د مات شویو URLونو، ړنګې شوې منځپانګې او هغه ازمېښتي سایټ له امله وي چې په تېروتنه د ګوګل لپاره بند پاتې شوی وي. که د ډیزاینرانو له پیل مخکې د لېږد پلان جوړ کړئ، کولی شئ ګړندی او ښکلی سایټ پیل کړئ او خپلې درجې وساتئ.

**مهم ټکي**

- له هر بدلون مخکې د اوسني سایټ ټول URLونه وڅېړئ او ثبت کړئ چې کومې پاڼې لیدونکي او لینکونه راوړي.
- هر زوړ URL له یوه نوي URL سره وتړئ او دایمي 301 ریډایرکټ وکاروئ، نه دا چې ټولې پاڼې کور پاڼې ته واستوئ.
- د خپلو غوره پاڼو منځپانګه، سرټکي او د سرلیک ټګونه وساتئ، مګر دا چې په قصدي ډول یې ښه کوئ.
- نوی سایټ په داسې ازمېښتي سرور وازمویئ چې د انډکس لپاره بند وي، او د پیل په ورځ دا بندیز لرې کړئ.
- په لومړیو څو اونیو کې هره ورځ Google Search Console وګورئ او د 404 تېروتنې ژر سمې کړئ.

**ولې ویب پاڼې له بیا ډیزاین وروسته درجه له لاسه ورکوي؟**

ویب پاڼې له بیا ډیزاین وروسته درجه له لاسه ورکوي ځکه چې ګوګل ناڅاپه د هغو پاڼو پر ځای چې پرې یې باور درلود، بېل URLونه، ورکه منځپانګه یا تخنیکي خنډونه مومي. لټون انجنونه پاڼې درجه بندي کوي، نه برانډونه. کله چې هغه پاڼه چې د «کابل کې د انګلیسي کورس» لپاره یې درجه درلوده ورکه شي یا پرته له ریډایرکټ ځای بدل کړي، ګوګل نوې پاڼه ناآشنا او زړه پاڼه ړنګه ګڼي.

تر ټولو عام لاملونه چې موږ یې ګورو دا دي:

- URLونه له /about-us.html څخه /about ته بدل شوي او هېڅ ریډایرکټ نه دی جوړ شوی.
- هغه پاڼې چې دوامداره لیدونکي یې درلودل ړنګې شوې ځکه چې «زړې ښکارېدې».
- متن په انځورونو، سلایډرونو یا لنډو اعلاني جملو بدل شو او پاڼه نور د لټونګر پوښتنې ته ځواب نه ورکوي.
- د ازمېښتي سایټ noindex ټګ یا robots.txt بندیز اصلي سایټ ته کاپي شو.
- یوه نوي JavaScript فریم ورک منځپانګه داسې ښکاره کړه چې کرالرانو یې په لوستلو کې ستونزه درلوده.
- داخلي لینکونه، مینوګانې او لارښودونه بیا جوړ شول او مهمو پاڼو ته رسېدل ستونزمن شول.

له دې هېڅ یوه د ډیزاین ستونزه نه ده. دا د پلان جوړونې ستونزې دي، او له همدې امله SEO باید له لومړۍ غونډې په پروژه کې شامل وي.

**د بیا ډیزاین له پیل مخکې څه وکړو؟**

د ډیزاین له هر کار مخکې د اوسني سایټ بشپړ انځور واخلئ ترڅو دقیقاً پوه شئ چې څه باید وساتئ. دا هغه ګام دی چې ډېری سوداګرۍ یې پرېږدي، خو نور ټول ګامونه په همدې پورې تړلي دي.

1. **ټول سایټ وڅېړئ.** د یوه crawler وسیلې په مرسته د هر URL، حالت کوډ، سرلیک ټګ، میټا تشریح، H1 او canonical ټګ لېست واخلئ او خوندي یې کړئ.
2. **د فعالیت معلومات وباسئ.** له Google Search Console څخه د تېرو ۱۲ میاشتو د پاڼو او کلیدي کلمو راپور ډاونلوډ کړئ. که یادونې ته اړتیا لرئ، زموږ [د Google Search Console د پیل کوونکو لارښود](/blog/google-search-console-beginners-guide) یې ځای درښيي.
3. **لینک لرونکې پاڼې لېست کړئ.** ولیکئ چې نورو سایټونو کومو پاڼو ته لینک ورکړی. دا لینکونه اعتبار لري چې باید له لاسه ورنکړل شي.
4. **لومړیتوب لرونکې پاڼې وټاکئ.** معلومات د هغو پاڼو په یوه لنډ لېست کې راټول کړئ چې لیدونکي، غوښتنې یا لینکونه راوړي. دا پاڼې تر ټولو ډېره پاملرنه غواړي.
5. **بنسټیز حالت ثبت کړئ.** اوسني کلیکونه، نندارې، اصلي کلیدي کلمې او Core Web Vitals ولیکئ ترڅو له پیل وروسته پرتله کړئ.

د یوې څو ژبنۍ افغان سوداګرۍ لپاره، دا کار د هرې ژبې نسخې لپاره وکړئ. هغه دري یا پښتو پاڼه چې په هرات یا کندهار کې ښه درجه لري، هومره ارزښت لري لکه هغه انګلیسي پاڼه چې له المان یا کاناډا څخه مهاجر پېرودونکي راوړي.

**زاړه URLونه څنګه له نویو سره وتړو؟**

زاړه URLونه د یوه ساده جدول په جوړولو له نویو سره تړئ چې دوه ستنې لري، زوړ URL او نوی URL، او د هرې مهمې پاڼې لپاره یو برابر پکې ډکوئ. دا د ریډایرکټ نقشه د ټولې پروژې تر ټولو مهم سند دی.

د ډکولو پر مهال دا قواعد مراعات کړئ:

- **هر چېرې چې شونې وي URLونه وساتئ.** تر ټولو خوندي ریډایرکټ هغه دی چې هېڅکله ورته اړتیا پیدا نه کړئ. که /services/web-design کار کوي، وې ساتئ.
- **یو په یو، نه ډېر په یو.** هره زړه پاڼه تر ټولو اړوندې نوې پاڼې ته واستوئ. هر څه کور پاڼې ته لېږل تقریباً د پاڼې د ړنګېدو په څېر ګڼل کېږي.
- **301 ریډایرکټ وکاروئ.** 301 لټون انجنونو ته وايي چې لېږد دایمي دی او د زړې پاڼې اعتبار نوې پاڼې ته لېږدوي. لنډمهاله 302 ریډایرکټ دلته سمه وسیله نه ده.
- **له زنځیرونو ډډه وکړئ.** که یوه پاڼه مخکې هم ریډایرکټ شوې وه، تر ټولو زوړ URL مستقیم وروستي منزل ته واستوئ.
- **ټولې ژبې په پام کې ونیسئ.** که ستاسو سایټ /da/ او /pa/ لارې لري، هغه هم نقشه کړئ او hreflang ټګونه یو ډول وساتئ.
- **د ریښتیني ړنګولو په اړه پرېکړه وکړئ.** هغه پاڼې چې نه لیدونکي لري، نه لینک او نه سوداګریز ارزښت، ړنګېدای شي او 404 یا 410 بېرته ورکړي. دا سمه ده، په دې شرط چې پرېکړه وي نه پېښه.

په عصري فریم ورکونو لکه Next.js کې، ریډایرکټونه د پروژې په تنظیماتو یا د هاسټینګ په کچه تعریفېدای شي، ترڅو سمدستي کار وکړي او په هېڅ پلګ ان پورې تړلي نه وي.

**له منځپانګې او د پاڼې دننه SEO څخه څنګه ساتنه وکړو؟**

د پاڼې دننه SEO د هغو عناصرو په لېږدولو ساتئ چې ګوګل یې دمخه له هرې پاڼې سره تړلي ګڼي: اصلي متن، سرټکي، سرلیک ټګ، میټا تشریح او هغه داخلي لینکونه چې ورته اشاره کوي. بیا ډیزاین د کمزورو پاڼو د ښه کولو لپاره ښه وخت دی، خو درجه لرونکې پاڼې په پوهه او یو ځل یوه پرېکړه بدلې کړئ.

عملي لارښوونې:

- د خپلو غوره پاڼو اصلي متن وساتئ. کولی شئ بڼه یې بدله کړئ، په برخو یې ووېشئ او انځورونه ورزیات کړئ، خو اصلي محتوا مه کموئ.
- د سرلیک ټګونه او H1 اصلي نسخې ته نږدې وساتئ، مګر دا چې معلومات وښيي کمزوری کار کوي.
- جوړښتي معلومات لکه Organization، LocalBusiness، Product یا FAQ وساتئ.
- د انځورونو د بدلولو پر مهال alt متن او د فایلونو نومونه معنادار وساتئ.
- داخلي لینکونه داسې جوړ کړئ چې لومړیتوب لرونکې پاڼې له کور پاڼې څخه له څو کلیکونو ډېر لرې نه وي.
- ډاډ ترلاسه کړئ چې نوی سایټ ګړندی دی، نه ورو. درانه ویډیوګانې او د انیمیشن کتابتونونه Core Web Vitals ته زیان رسولی شي، په ځانګړي ډول په افغانستان کې د موبایل انټرنېټ سره. زموږ لارښود د [Core Web Vitals او INP په 2026 کې](/blog/core-web-vitals-inp-2026) تشریح کوي چې څه اندازه کړئ.

**نوی سایټ څنګه وازمویو او پیل یې کړو؟**

نوی سایټ په یوه خصوصي ازمېښتي سرور وازمویئ، هماغه څېړنه چې پر زاړه سایټ مو کړې وه بیا وکړئ، او یوازې هغه وخت یې پیل کړئ چې ټول لومړیتوب لرونکي URLونه سم خلاصېږي. د پیل ورځ یو چک لېست وګڼئ، نه جشن.

له پیل مخکې چک لېست:

1. ازمېښتي سایټ پټنوم لري یا noindex لري ترڅو ګوګل یو تکراري سایټ انډکس نه کړي.
2. د ریډایرکټ نقشې هر قطار ازمویل شوی او یوازې یو 301 یوې فعالې پاڼې ته ورکوي.
3. د سرلیک ټګونه، میټا تشریحات، canonical او hreflang په ټولو قالبونو کې شته.
4. د سایټ XML نقشه یوازې نوي او د انډکس وړ URLونه لېست کوي.
5. د تحلیل او بدلون تعقیب وسایل په فورمو، تلیفوني اړیکو او WhatsApp تڼیو کار کوي.
6. د پاڼو اصلي منځپانګه په هغه HTML کې ښکاري چې کرالران یې ترلاسه کوي.

د پیل په ورځ د ازمېښتي سایټ noindex او هر robots.txt بندیز لرې کړئ، نوې نقشه په Search Console کې ثبت کړئ او ۲۰ غوره زاړه URLونه په براوزر کې وازمویئ. سایټ د اونۍ په پیل کې پیل کړئ چې ټیم مو د ستونزو د حل لپاره حاضر وي، نه د رخصتۍ مخکې.

**له پیل وروسته څه وڅارو؟**

له پیل وروسته د Search Console د انډکس حالت، 404 تېروتنې، د لومړیتوب لرونکو کلیدي کلمو درجې او عضوي بدلونونه تر دوو اونیو هره ورځ او بیا لږ تر لږه دوه تر درې میاشتې هره اونۍ وڅارئ. په لومړیو اونیو کې لږ بدلون عادي دی ځکه ګوګل سایټ بیا څېړي؛ خو ژور او دوامداره کمښت معمولاً د یوې ځانګړې تخنیکي ستونزې نښه وي چې موندل او سمول یې شونې دي.

هغه پاڼې ولټوئ چې «Not found» راپور شوې، غیرمتوقع «Excluded by noindex tag» خبرتیاوې، او هغه لومړیتوب لرونکې پاڼې چې له انډکس څخه وتلي دي. د ریډایرکټ تشې هماغه وخت سمې کړئ چې یې وینئ، او ریدایرکټونه د اوږدې مودې لپاره وساتئ، نه دا چې له څو میاشتو وروسته یې لرې کړئ. له پیل نه شاوخوا شپږ اونۍ وروسته یوه بشپړه [تخنیکي SEO څېړنه](/blog/technical-seo-audit-checklist-2026) مناسب کنټرول ټکی دی.

**له شین سره کار وکړئ**

شین بیا ډیزاینونه له لومړۍ ورځې د SEO سره پلانوي: ستاسو اوسنی سایټ څېړو، د ریډایرکټ نقشه جوړوو او سایټ د ګړندي Next.js سره په انګلیسي، دري او پښتو ژبو پیلوو. زموږ [د ویب ډیزاین خدمت](/services/web-design) او [د SEO خدمت](/services/seo) وګورئ، یا د خپل بیا ډیزاین د پلان لپاره د info@sheen.af یا +93 784 966 018 له لارې [موږ سره اړیکه ونیسئ](/contact).`
        },
        faqs: [
            {
                q: {
                    en: "How long does it take to recover rankings after a website redesign?",
                    da: "بازگشت رتبه‌ها پس از بازطراحی ویب‌سایت چقدر زمان می‌برد؟",
                    pa: "له بیا ډیزاین وروسته د درجو بېرته راګرځېدل څومره وخت نیسي؟"
                },
                a: {
                    en: "If redirects and content were handled properly, most sites see only small fluctuations that settle within a few weeks as Google recrawls the new URLs. Larger sites can take longer. If traffic is still falling steeply after a month, it usually signals a specific problem such as missing redirects, a leftover noindex tag or removed content, and it should be investigated rather than waited out.",
                    da: "اگر ریدایرکت‌ها و محتوا درست مدیریت شده باشند، بیشتر سایت‌ها فقط نوسان کوچکی می‌بینند که طی چند هفته، همزمان با بررسی دوباره آدرس‌های جدید توسط گوگل، آرام می‌شود. سایت‌های بزرگ‌تر ممکن است بیشتر زمان ببرند. اگر پس از یک ماه بازدید هنوز به شدت کاهش می‌یابد، معمولاً نشانه یک مشکل مشخص مانند ریدایرکت‌های گم‌شده، تگ noindex باقی‌مانده یا محتوای حذف‌شده است و باید بررسی شود، نه اینکه منتظر ماند.",
                    pa: "که ریډایرکټونه او منځپانګه په سمه توګه اداره شوي وي، ډېری سایټونه یوازې لږ بدلون ویني چې په څو اونیو کې، کله چې ګوګل نوي URLونه بیا څېړي، ارام کېږي. لوی سایټونه ښايي ډېر وخت ونیسي. که له یوې میاشتې وروسته هم لیدونکي په چټکۍ کمېږي، معمولاً د یوې ځانګړې ستونزې نښه وي لکه ورک ریډایرکټونه، پاتې noindex ټګ یا ړنګه شوې منځپانګه، او باید وڅېړل شي نه دا چې انتظار وشي."
                }
            },
            {
                q: {
                    en: "Do I need to tell Google that my website was redesigned?",
                    da: "آیا باید به گوگل اطلاع دهم که ویب‌سایتم بازطراحی شده است؟",
                    pa: "ایا اړینه ده ګوګل ته خبر ورکړم چې زما ویب پاڼه بیا ډیزاین شوې؟"
                },
                a: {
                    en: "There is no special notification for a redesign on the same domain. Submit the new XML sitemap in Google Search Console and use URL Inspection to request indexing of your most important pages. If you are also moving to a new domain, set up 301 redirects from the old domain and use the Change of Address tool in Search Console as well.",
                    da: "برای بازطراحی روی همان دامنه، اطلاع‌رسانی خاصی وجود ندارد. نقشه XML جدید سایت را در Google Search Console ثبت کنید و با ابزار URL Inspection درخواست ایندکس مهم‌ترین صفحات خود را بدهید. اگر همزمان به یک دامنه جدید منتقل می‌شوید، ریدایرکت‌های 301 را از دامنه قدیمی تنظیم کنید و از ابزار Change of Address در Search Console نیز استفاده کنید.",
                    pa: "په هماغه ډومین د بیا ډیزاین لپاره کوم ځانګړی خبرتیا نشته. د سایټ نوې XML نقشه په Google Search Console کې ثبت کړئ او د URL Inspection وسیلې په مرسته د خپلو تر ټولو مهمو پاڼو د انډکس غوښتنه وکړئ. که په ورته وخت کې نوي ډومین ته لېږدئ، له زاړه ډومین څخه 301 ریډایرکټونه جوړ کړئ او په Search Console کې د Change of Address وسیله هم وکاروئ."
                }
            },
            {
                q: {
                    en: "Is it safe to change my URL structure during a redesign?",
                    da: "آیا تغییر ساختار آدرس‌ها هنگام بازطراحی امن است؟",
                    pa: "ایا د بیا ډیزاین پر مهال د URL جوړښت بدلول خوندي دي؟"
                },
                a: {
                    en: "It can be done safely, but it adds risk, so only change URLs when there is a clear benefit such as removing file extensions, fixing messy parameters or adding language folders. Every changed URL needs a one-to-one 301 redirect, updated internal links, an updated sitemap and correct canonical tags. If your current URLs are clean and readable, keeping them is usually the better choice.",
                    da: "می‌توان این کار را امن انجام داد، اما خطر را بیشتر می‌کند؛ پس فقط زمانی آدرس‌ها را تغییر دهید که فایده روشنی داشته باشد، مانند حذف پسوند فایل، اصلاح پارامترهای نامرتب یا افزودن پوشه‌های زبان. هر آدرس تغییر یافته به یک ریدایرکت 301 یک به یک، لینک‌های داخلی به‌روز، نقشه سایت به‌روز و تگ‌های canonical درست نیاز دارد. اگر آدرس‌های فعلی شما تمیز و خوانا هستند، نگه داشتن آن‌ها معمولاً انتخاب بهتری است.",
                    pa: "دا کار په خوندي ډول کېدای شي، خو خطر زیاتوي؛ نو URLونه یوازې هغه وخت بدل کړئ چې روښانه ګټه ولري، لکه د فایل د پسوند لرې کول، د ګډوډو پارامترونو سمول یا د ژبې فولډرونو ورزیاتول. هر بدل شوی URL یو په یو 301 ریډایرکټ، تازه داخلي لینکونه، تازه نقشه او سم canonical ټګونه غواړي. که اوسني URLونه مو پاک او د لوستلو وړ وي، ساتل یې معمولاً غوره انتخاب دی."
                }
            },
            {
                q: {
                    en: "Should I redesign and change content at the same time?",
                    da: "آیا باید بازطراحی و تغییر محتوا را همزمان انجام دهم؟",
                    pa: "ایا باید بیا ډیزاین او د منځپانګې بدلون په یو وخت وکړم؟"
                },
                a: {
                    en: "Changing design, URLs and content all at once makes it hard to know what caused any drop in traffic. A safer approach is to migrate your best-performing content largely as it is, launch, confirm rankings are stable, and then improve pages in planned rounds. Weak or thin pages with little traffic can be rewritten or merged during the redesign with less risk.",
                    da: "تغییر همزمان طراحی، آدرس‌ها و محتوا باعث می‌شود نتوانید بفهمید کدام عامل باعث کاهش بازدید شده است. روش امن‌تر این است که محتوای پربازده خود را تقریباً همان‌طور منتقل کنید، سایت را راه‌اندازی کنید، از ثبات رتبه‌ها مطمئن شوید و سپس صفحات را در مرحله‌های برنامه‌ریزی‌شده بهتر کنید. صفحات ضعیف یا کم‌محتوا با بازدید اندک را می‌توان با خطر کمتر در زمان بازطراحی بازنویسی یا ادغام کرد.",
                    pa: "د ډیزاین، URLونو او منځپانګې یوځای بدلول دا ستونزمنوي چې پوه شئ د لیدونکو کمښت د کوم لامل له امله دی. خوندي لاره دا ده چې خپله غوره منځپانګه تقریباً هماغسې ولېږدوئ، سایټ پیل کړئ، د درجو له ثبات ډاډ ترلاسه کړئ او بیا پاڼې په پلان شویو پړاوونو کې ښې کړئ. کمزورې یا لږ منځپانګې لرونکې پاڼې چې لږ لیدونکي لري، د بیا ډیزاین پر مهال په لږ خطر بیا لیکل یا یوځای کېدای شي."
                }
            }
        ],
        category: "web-dev",
        author: "Jawad Hakimi",
        date: "2026-09-28",
        updated: "2026-09-28",
        readTime: "7 min read",
        image: "/logo.png",
        tags: ["website redesign seo", "site migration seo", "redesign without losing rankings", "301 redirects", "Google Search Console", "Next.js 16 migration", "website redesign Afghanistan"]
    },
    {
        id: "120",
        slug: "progressive-web-apps-pwa-afghanistan",
        title: {
            en: "Progressive Web Apps (PWA): App Features Without the App Store",
            da: "اپلیکیشن‌های وب پیشرو (PWA): امکانات اپ بدون اپ استور",
            pa: "پرمختللي ویب اپلیکیشنونه (PWA): د اپ ځانګړتیاوې پرته له اپ سټور"
        },
        excerpt: {
            en: "Learn what a progressive web app is, how it installs, works offline and sends notifications, and when a PWA beats a native app for businesses in Afghanistan.",
            da: "بیاموزید اپلیکیشن وب پیشرو چیست، چگونه نصب می‌شود، بدون انترنت کار می‌کند و اعلان می‌فرستد، و چه زمانی برای کسب‌وکارهای افغان از اپ بومی بهتر است.",
            pa: "زده کړئ چې پرمختللی ویب اپ څه دی، څنګه نصبېږي، پرته له انټرنېټ کار کوي او خبرتیاوې لېږي، او کله د افغان سوداګریو لپاره له اصلي اپ غوره دی."
        },
        content: {
            en: `A progressive web app (PWA) is a website built so it can be installed on a phone's home screen, open in its own full-screen window, keep working with a weak or missing connection, and send push notifications, all without going through the Google Play Store or Apple App Store. You build it once with web technology, and it runs on Android, iPhone and desktop from the same code. For many small and medium businesses in Afghanistan, a PWA delivers most of what they wanted from an app at a fraction of the cost and effort.

**Key Takeaways**

- A PWA is a normal website plus three ingredients: HTTPS, a web app manifest and a service worker.
- Users can install it from the browser, and it can cache pages and data so it still works on slow or interrupted mobile data.
- One codebase serves Android, iOS and desktop, and updates go live instantly without app store review.
- Native apps still win when you need deep hardware access, heavy background processing or strong app store discovery.
- PWAs suit booking, ordering, catalogues, portals and internal business tools especially well.

**What Makes a Website a Progressive Web App?**

A website becomes a progressive web app when it is served over HTTPS, includes a web app manifest, and registers a service worker. Everything else is good design and engineering built on top of those three pieces.

- **HTTPS.** PWAs only work on secure connections. Any modern website should already have this.
- **Web app manifest.** A small file that tells the device the app's name, icons, theme colour and how it should open, for example full screen without the browser address bar.
- **Service worker.** A script that runs in the background between your site and the network. It decides what to cache, serves saved pages when the connection drops, and receives push messages.

Because a PWA is still a website, it can be found on Google, shared as a link on WhatsApp or Facebook, and opened instantly without any installation. Installation is an extra option, not a barrier.

**How Do PWAs Work on Android and iPhone?**

On Android, browsers such as Chrome can prompt users to install a PWA, and once installed it looks and behaves very much like a native app. On iPhone and iPad, users install a PWA from Safari using "Add to Home Screen", and since iOS 16.4 home-screen web apps can receive push notifications once the user grants permission.

There are still differences between platforms. Apple's support for some web features is more limited than Android's, and certain device features such as Bluetooth or NFC are not available to web apps on iOS. Browser support changes over time, so check current capabilities for any specific feature your project depends on before committing to it.

On desktop, Chrome and Edge also let users install PWAs as standalone windows, which is useful for dashboards and internal tools your staff use every day.

**Why Are PWAs a Good Fit for Businesses in Afghanistan?**

PWAs are a good fit in Afghanistan because they are light, work with poor connectivity, and avoid many of the practical hurdles of publishing native apps. Each of these matters more here than in markets with fast, cheap data.

- **Data is expensive and connections drop.** A well-built PWA caches its interface after the first visit, so later visits load from the phone almost instantly and use very little data. Our guide on [website speed on slow internet in Afghanistan](/blog/website-speed-slow-internet-afghanistan) explains why this matters.
- **Small download.** A customer does not need to download tens of megabytes before trying your service. Many phones in use have limited storage, and users often delete apps they rarely open.
- **No app store gatekeeping.** Setting up developer accounts, payment profiles and store listings can be complicated for businesses based in Afghanistan. A PWA can be launched on your own domain without that process.
- **Instant updates.** Fix a price, add a product or change a form and every user has the new version on their next visit, with no store review delay.
- **Reach the diaspora too.** The same link works for a customer in Kabul and a relative in Hamburg or Toronto, in Dari, Pashto or English.

**When Should You Choose a Native App Instead?**

Choose a native app when your product depends on features or performance that the web cannot reliably provide, or when being listed in the app stores is central to how customers find you. A PWA is not a universal replacement.

Native apps are usually the better choice when you need:

- Continuous background tasks, such as live GPS tracking of drivers when the app is closed.
- Hardware features with limited web support on iOS, such as Bluetooth devices or NFC payments.
- Heavy graphics, games or advanced camera and media processing.
- Deep integration with the operating system, widgets or wearables.
- Strong visibility inside Google Play or the App Store as a discovery channel.

It is also possible to start with a PWA and add native apps later, or to package a PWA for Google Play using Trusted Web Activities. If you are weighing the options, our article on [whether to build an app or a website first](/blog/app-vs-website-which-first) walks through the decision.

**How Do You Plan and Build a PWA?**

Plan a PWA by deciding what must work offline, what triggers a notification and what the installed experience should feel like, then build it on a modern framework with careful caching. Here is the process we follow:

1. **Define the core tasks.** List the two or three actions users repeat most, such as checking a schedule, placing an order or viewing a catalogue.
2. **Decide the offline behaviour.** Choose which screens and data should be available without a connection, and how actions taken offline (like a submitted form) should sync later. See our guide to [offline-first mobile apps](/blog/offline-first-mobile-apps) for patterns.
3. **Design for small screens first.** Large tap targets, fast-loading pages and right-to-left layouts for Dari and Pashto.
4. **Create the manifest and icons.** Name, short name, icons in the required sizes, theme colours and display mode.
5. **Write the caching strategy.** Cache the app shell aggressively, cache content with sensible expiry, and never cache private or payment data carelessly.
6. **Add push notifications carefully.** Ask for permission only after the user has a reason to say yes, such as tracking an order.
7. **Test on real devices and weak networks.** Use throttled connections and older Android phones, not just a fast office laptop.

Frameworks such as Next.js work well for PWAs because they combine fast server-rendered pages, good SEO and modern caching.

**What Kinds of Businesses Benefit Most From a PWA?**

Businesses whose customers return regularly to do a simple task benefit most from a PWA. Common examples include:

- Restaurants and shops taking orders or showing a menu or catalogue.
- Schools and training centres giving students access to timetables, results and announcements.
- Clinics handling appointment requests and reminders.
- Service companies managing bookings and quote requests.
- Internal tools for field staff who need forms and checklists that work without a signal.

**Work With Sheen**

Sheen builds fast, installable web apps on Next.js with offline support and Dari, Pashto and English interfaces, and we will tell you honestly when a native app is the better option. Explore our [mobile apps service](/services/mobile-apps), or [book a call](/book) and reach us at info@sheen.af or +93 784 966 018.`,
            da: `اپلیکیشن وب پیشرو (PWA) ویب‌سایتی است که طوری ساخته می‌شود که بتوان آن را روی صفحه اصلی موبایل نصب کرد، در پنجره تمام‌صفحه خودش باز شود، با انترنت ضعیف یا بدون انترنت به کار ادامه دهد و اعلان (نوتیفیکیشن) بفرستد؛ همه این‌ها بدون عبور از Google Play Store یا Apple App Store. آن را یک بار با فناوری وب می‌سازید و از همان کد روی اندروید، آیفون و کمپیوتر اجرا می‌شود. برای بسیاری از کسب‌وکارهای کوچک و متوسط در افغانستان، PWA بیشتر آنچه را از یک اپ می‌خواستند با بخش کوچکی از هزینه و زحمت فراهم می‌کند.

**نکات کلیدی**

- PWA یک ویب‌سایت عادی است با سه جزء اضافی: HTTPS، فایل web app manifest و service worker.
- کاربران می‌توانند آن را از مرورگر نصب کنند و صفحات و داده‌ها را ذخیره می‌کند تا با انترنت کند یا قطع‌شونده هم کار کند.
- یک کد واحد برای اندروید، iOS و کمپیوتر کافی است و به‌روزرسانی‌ها بدون بررسی اپ استور فوراً فعال می‌شوند.
- اپ‌های بومی (native) هنوز زمانی بهتر هستند که به دسترسی عمیق سخت‌افزاری، پردازش سنگین پس‌زمینه یا دیده شدن قوی در اپ استور نیاز دارید.
- PWA به‌ویژه برای رزرو، سفارش، کاتالوگ، پورتال‌ها و ابزارهای داخلی کسب‌وکار مناسب است.

**چه چیزی یک ویب‌سایت را به اپلیکیشن وب پیشرو تبدیل می‌کند؟**

یک ویب‌سایت زمانی به اپلیکیشن وب پیشرو تبدیل می‌شود که از طریق HTTPS ارائه شود، یک web app manifest داشته باشد و یک service worker ثبت کند. هر چیز دیگر طراحی و مهندسی خوبی است که روی این سه جزء ساخته می‌شود.

- **HTTPS.** PWA فقط روی اتصال امن کار می‌کند. هر ویب‌سایت مدرنی باید از قبل این را داشته باشد.
- **Web app manifest.** فایل کوچکی که به دستگاه نام اپ، آیکون‌ها، رنگ اصلی و نحوه باز شدن را می‌گوید، مثلاً تمام‌صفحه بدون نوار آدرس مرورگر.
- **Service worker.** اسکریپتی که در پس‌زمینه میان سایت شما و شبکه کار می‌کند. تصمیم می‌گیرد چه چیزی ذخیره شود، هنگام قطع انترنت صفحات ذخیره‌شده را نشان می‌دهد و پیام‌های push را دریافت می‌کند.

چون PWA هنوز یک ویب‌سایت است، می‌توان آن را در گوگل پیدا کرد، به شکل لینک در WhatsApp یا Facebook شریک ساخت و بدون هیچ نصبی فوراً باز کرد. نصب یک گزینه اضافی است، نه یک مانع.

**PWA روی اندروید و آیفون چگونه کار می‌کند؟**

در اندروید، مرورگرهایی مانند Chrome می‌توانند از کاربر بخواهند PWA را نصب کند و پس از نصب، تقریباً مانند یک اپ بومی دیده می‌شود و رفتار می‌کند. در آیفون و آیپد، کاربران PWA را از Safari با گزینه «Add to Home Screen» نصب می‌کنند و از iOS 16.4 به بعد، اپ‌های وب روی صفحه اصلی می‌توانند پس از اجازه کاربر اعلان push دریافت کنند.

هنوز تفاوت‌هایی میان این پلتفرم‌ها وجود دارد. پشتیبانی Apple از برخی امکانات وب محدودتر از اندروید است و برخی امکانات دستگاه مانند Bluetooth یا NFC برای اپ‌های وب در iOS در دسترس نیستند. پشتیبانی مرورگرها با گذشت زمان تغییر می‌کند، پس پیش از تکیه بر هر امکان خاص، وضعیت فعلی آن را بررسی کنید.

در کمپیوتر، Chrome و Edge نیز به کاربران اجازه می‌دهند PWA را به شکل پنجره مستقل نصب کنند که برای داشبوردها و ابزارهای داخلی که کارمندان هر روز استفاده می‌کنند مفید است.

**چرا PWA برای کسب‌وکارهای افغانستان مناسب است؟**

PWA در افغانستان مناسب است چون سبک است، با اتصال ضعیف کار می‌کند و بسیاری از موانع عملی انتشار اپ‌های بومی را ندارد. هر کدام از این‌ها اینجا مهم‌تر از بازارهایی است که انترنت سریع و ارزان دارند.

- **انترنت گران است و قطع می‌شود.** یک PWA خوب پس از نخستین بازدید رابط کاربری را ذخیره می‌کند، پس بازدیدهای بعدی تقریباً فوراً از خود موبایل بارگذاری می‌شوند و داده بسیار کمی مصرف می‌کنند. راهنمای ما درباره [سرعت ویب‌سایت با انترنت کند در افغانستان](/blog/website-speed-slow-internet-afghanistan) دلیل اهمیت این موضوع را توضیح می‌دهد.
- **حجم کم.** مشتری لازم نیست ده‌ها مگابایت دانلود کند تا خدمات شما را امتحان کند. بسیاری از موبایل‌های در حال استفاده حافظه محدود دارند و کاربران اغلب اپ‌هایی را که کم باز می‌کنند پاک می‌کنند.
- **بدون محدودیت اپ استور.** ساختن حساب توسعه‌دهنده، پروفایل پرداخت و صفحه اپ در استور برای کسب‌وکارهای مستقر در افغانستان می‌تواند پیچیده باشد. PWA را می‌توان بدون این روند روی دامنه خودتان راه‌اندازی کرد.
- **به‌روزرسانی فوری.** قیمتی را اصلاح کنید، محصولی اضافه کنید یا فورمی را تغییر دهید و هر کاربر در بازدید بعدی نسخه جدید را دارد، بدون انتظار برای بررسی استور.
- **دسترسی به مهاجران.** همان لینک برای مشتری در کابل و خویشاوندی در هامبورگ یا تورنتو، به دری، پشتو یا انگلیسی کار می‌کند.

**چه زمانی باید به جای آن اپ بومی انتخاب کنید؟**

زمانی اپ بومی انتخاب کنید که محصول شما به امکانات یا عملکردی وابسته است که وب نمی‌تواند به‌طور قابل اعتماد فراهم کند، یا وقتی حضور در اپ استورها اصلی‌ترین راه پیدا کردن شما توسط مشتریان است. PWA جایگزین همه‌جانبه نیست.

اپ‌های بومی معمولاً زمانی انتخاب بهتری هستند که به این‌ها نیاز دارید:

- کارهای پیوسته پس‌زمینه، مانند ردیابی زنده GPS راننده‌ها هنگامی که اپ بسته است.
- امکانات سخت‌افزاری با پشتیبانی محدود وب در iOS، مانند دستگاه‌های Bluetooth یا پرداخت NFC.
- گرافیک سنگین، بازی‌ها یا پردازش پیشرفته کمره و رسانه.
- ادغام عمیق با سیستم‌عامل، ویجت‌ها یا ساعت‌های هوشمند.
- دیده شدن قوی در Google Play یا App Store به عنوان کانال پیدا شدن.

همچنین می‌توان با PWA شروع کرد و بعداً اپ‌های بومی اضافه کرد، یا PWA را با Trusted Web Activities برای Google Play بسته‌بندی کرد. اگر میان گزینه‌ها مردد هستید، مقاله ما درباره [اینکه اول اپ بسازیم یا ویب‌سایت](/blog/app-vs-website-which-first) این تصمیم را قدم به قدم توضیح می‌دهد.

**چگونه یک PWA را برنامه‌ریزی کنیم و بسازیم؟**

PWA را با تصمیم‌گیری درباره اینکه چه چیزی باید بدون انترنت کار کند، چه چیزی اعلان می‌فرستد و تجربه نسخه نصب‌شده چگونه باشد برنامه‌ریزی کنید، سپس آن را روی یک فریم‌ورک مدرن با ذخیره‌سازی دقیق بسازید. روندی که ما دنبال می‌کنیم این است:

1. **کارهای اصلی را تعریف کنید.** دو یا سه عملی را که کاربران بیشتر تکرار می‌کنند فهرست کنید، مانند دیدن تقسیم اوقات، ثبت سفارش یا دیدن کاتالوگ.
2. **رفتار آفلاین را تعیین کنید.** انتخاب کنید کدام صفحات و داده‌ها بدون انترنت در دسترس باشند و کارهایی که آفلاین انجام می‌شوند (مانند فورم ارسال‌شده) بعداً چگونه همگام شوند. برای الگوها، راهنمای ما درباره [اپ‌های موبایل آفلاین‌محور](/blog/offline-first-mobile-apps) را ببینید.
3. **اول برای صفحه‌های کوچک طراحی کنید.** دکمه‌های بزرگ، صفحات سریع و چیدمان راست به چپ برای دری و پشتو.
4. **Manifest و آیکون‌ها را بسازید.** نام، نام کوتاه، آیکون‌ها در اندازه‌های لازم، رنگ‌ها و حالت نمایش.
5. **استراتژی ذخیره‌سازی را بنویسید.** پوسته اپ را قوی ذخیره کنید، محتوا را با زمان انقضای معقول ذخیره کنید و هرگز داده‌های خصوصی یا پرداخت را بی‌احتیاط ذخیره نکنید.
6. **اعلان‌های push را با دقت اضافه کنید.** فقط زمانی اجازه بخواهید که کاربر دلیلی برای قبول کردن دارد، مانند پیگیری سفارش.
7. **روی دستگاه‌های واقعی و شبکه‌های ضعیف آزمایش کنید.** از اتصال محدودشده و موبایل‌های قدیمی اندروید استفاده کنید، نه فقط لپ‌تاپ سریع دفتر.

فریم‌ورک‌هایی مانند Next.js برای PWA خوب کار می‌کنند چون صفحات سریع رندرشده در سرور، سئوی خوب و ذخیره‌سازی مدرن را با هم ترکیب می‌کنند.

**کدام کسب‌وکارها بیشترین سود را از PWA می‌برند؟**

کسب‌وکارهایی که مشتریانشان به‌طور منظم برای انجام یک کار ساده برمی‌گردند بیشترین سود را از PWA می‌برند. نمونه‌های رایج:

- رستورانت‌ها و فروشگاه‌هایی که سفارش می‌گیرند یا منو و کاتالوگ نشان می‌دهند.
- مکاتب و مراکز آموزشی که به شاگردان دسترسی به تقسیم اوقات، نتایج و اعلان‌ها می‌دهند.
- کلینیک‌هایی که درخواست نوبت و یادآوری را مدیریت می‌کنند.
- شرکت‌های خدماتی که رزروها و درخواست‌های قیمت را مدیریت می‌کنند.
- ابزارهای داخلی برای کارمندان ساحه‌ای که به فورم‌ها و چک‌لیست‌هایی نیاز دارند که بدون آنتن کار کنند.

**با شین کار کنید**

شین اپ‌های وب سریع و قابل نصب را با Next.js، پشتیبانی آفلاین و رابط‌های دری، پشتو و انگلیسی می‌سازد و صادقانه به شما می‌گوید چه زمانی اپ بومی گزینه بهتری است. [خدمات اپلیکیشن موبایل](/services/mobile-apps) ما را ببینید، یا [یک جلسه رزرو کنید](/book) و از طریق info@sheen.af یا +93 784 966 018 با ما در تماس شوید.`,
            pa: `پرمختللی ویب اپ (PWA) هغه ویب پاڼه ده چې داسې جوړېږي چې د موبایل په کور سکرین نصب شي، په خپلې بشپړې کړکۍ کې خلاصه شي، د کمزوري یا نه موجود انټرنېټ سره هم کار وکړي او خبرتیاوې (نوټیفیکېشن) ولېږي؛ دا ټول پرته له دې چې Google Play Store یا Apple App Store ته اړتیا وي. یو ځل یې د ویب ټکنالوژۍ سره جوړوئ او له هماغه کوډ څخه په اندروید، آیفون او کمپیوټر چلېږي. په افغانستان کې د ډېرو کوچنیو او منځنیو سوداګریو لپاره، PWA د هغه څه ډېره برخه چې له اپ څخه یې غوښتل، د لګښت او زحمت په یوه کوچنۍ برخه برابروي.

**مهم ټکي**

- PWA یوه عادي ویب پاڼه ده چې درې اضافي برخې لري: HTTPS، web app manifest او service worker.
- کاروونکي کولی شي له براوزر یې نصب کړي، او پاڼې او معلومات خوندي کوي ترڅو په ورو یا پرې کېدونکي انټرنېټ هم کار وکړي.
- یو کوډ د اندروید، iOS او کمپیوټر لپاره بس دی او تازه کول پرته د اپ سټور له بیاکتنې سمدستي فعالېږي.
- اصلي (native) اپونه لا هم هغه وخت غوره دي چې ژور هارډویري لاسرسي، درانه شاليد پروسس یا په اپ سټور کې قوي لید ته اړتیا ولرئ.
- PWA په ځانګړي ډول د بکینګ، فرمایش، کتلاګ، پورټالونو او د سوداګرۍ د داخلي وسایلو لپاره مناسب دی.

**څه شی یوه ویب پاڼه په پرمختللي ویب اپ بدلوي؟**

یوه ویب پاڼه هغه وخت پرمختللی ویب اپ کېږي چې د HTTPS له لارې وړاندې شي، web app manifest ولري او یو service worker ثبت کړي. نور هر څه ښه ډیزاین او انجنیري ده چې پر دې درېیو برخو جوړېږي.

- **HTTPS.** PWA یوازې په خوندي اړیکه کار کوي. هره عصري ویب پاڼه باید دمخه دا ولري.
- **Web app manifest.** یو کوچنی فایل چې وسیلې ته د اپ نوم، آیکونونه، اصلي رنګ او د خلاصېدو طریقه وايي، د بېلګې په توګه بشپړ سکرین پرته د براوزر د پتې پټۍ.
- **Service worker.** یو سکرېپټ چې ستاسو د سایټ او شبکې ترمنځ په شالید کې کار کوي. پرېکړه کوي چې څه خوندي شي، د انټرنېټ د پرې کېدو پر مهال خوندي پاڼې ښيي او push پیغامونه ترلاسه کوي.

ځکه چې PWA لا هم ویب پاڼه ده، په ګوګل کې موندل کېدای شي، د لینک په توګه په WhatsApp یا Facebook کې شریکېدای شي او پرته له نصب سمدستي خلاصېدای شي. نصب یو اضافي انتخاب دی، نه خنډ.

**PWA په اندروید او آیفون کې څنګه کار کوي؟**

په اندروید کې، براوزرونه لکه Chrome کولی شي کاروونکي ته د PWA د نصب وړاندیز وکړي، او له نصب وروسته تقریباً د اصلي اپ په څېر ښکاري او چلېږي. په آیفون او آیپډ کې، کاروونکي PWA له Safari څخه د «Add to Home Screen» په انتخاب نصبوي، او له iOS 16.4 راهیسې د کور سکرین ویب اپونه د کاروونکي له اجازې وروسته push خبرتیاوې ترلاسه کولی شي.

د دې پلاټفارمونو ترمنځ لا هم توپیرونه شته. د Apple ملاتړ د ځینو ویب ځانګړتیاوو لپاره له اندروید څخه محدود دی، او د وسیلې ځینې ځانګړتیاوې لکه Bluetooth یا NFC په iOS کې ویب اپونو ته نه دي برابرې. د براوزرونو ملاتړ له وخت سره بدلېږي، نو په هره ځانګړې ځانګړتیا له تکیې مخکې یې اوسنی حالت وګورئ.

په کمپیوټر کې، Chrome او Edge هم کاروونکو ته اجازه ورکوي چې PWA د یوې خپلواکې کړکۍ په توګه نصب کړي، چې د ډشبورډونو او هغو داخلي وسایلو لپاره ګټور دی چې کارکوونکي یې هره ورځ کاروي.

**ولې PWA د افغانستان سوداګریو لپاره مناسب دی؟**

PWA په افغانستان کې مناسب دی ځکه چې سپک دی، د کمزورې اړیکې سره کار کوي، او د اصلي اپونو د خپرولو ډېری عملي خنډونه نه لري. هر یو له دې دلته د هغو بازارونو په پرتله ډېر مهم دی چې ګړندی او ارزانه انټرنېټ لري.

- **انټرنېټ ګران دی او پرې کېږي.** یو ښه جوړ PWA له لومړي لیدنې وروسته خپل انٹرفیس خوندي کوي، نو وروستۍ لیدنې تقریباً سمدستي له موبایل څخه بارېږي او ډېر لږ ډېټا لګوي. زموږ لارښود د [افغانستان په ورو انټرنېټ کې د ویب پاڼې سرعت](/blog/website-speed-slow-internet-afghanistan) په اړه تشریح کوي چې ولې دا مهم دی.
- **کوچنی حجم.** پېرودونکی اړتیا نه لري چې ستاسو د خدمت د ازمویلو لپاره لسګونه میګابایټه ډاونلوډ کړي. ډېری کارېدونکي موبایلونه محدود حافظه لري او کاروونکي اکثراً هغه اپونه ړنګوي چې لږ یې خلاصوي.
- **د اپ سټور محدودیت نشته.** د پراختیا ورکوونکي حساب، د تادیې پروفایل او په سټور کې د اپ پاڼې جوړول په افغانستان کې د میشتو سوداګریو لپاره پېچلي کېدای شي. PWA پرته له دې بهیر په خپل ډومین پیلېدای شي.
- **سمدستي تازه کول.** یوه بیه سمه کړئ، محصول ورزیات کړئ یا فورمه بدله کړئ او هر کاروونکی په راتلونکې لیدنه کې نوې نسخه لري، پرته د سټور د بیاکتنې له انتظاره.
- **مهاجرو ته رسېدل.** هماغه لینک په کابل کې د پېرودونکي او په هامبورګ یا ټورنټو کې د خپلوان لپاره، په دري، پښتو یا انګلیسي کار کوي.

**کله باید د دې پر ځای اصلي اپ وټاکئ؟**

اصلي اپ هغه وخت وټاکئ چې ستاسو محصول په داسې ځانګړتیاوو یا فعالیت پورې تړلی وي چې ویب یې په باوري ډول نشي برابرولی، یا کله چې په اپ سټورونو کې شتون د پېرودونکو لپاره ستاسو د موندلو اصلي لاره وي. PWA د هر څه بدیل نه دی.

اصلي اپونه معمولاً هغه وخت غوره انتخاب دي چې دې ته اړتیا ولرئ:

- دوامداره شالید کارونه، لکه د موټر چلوونکو ژوندی GPS تعقیب کله چې اپ تړل شوی وي.
- هارډویري ځانګړتیاوې چې په iOS کې د ویب ملاتړ یې محدود دی، لکه Bluetooth وسایل یا NFC تادیات.
- درانه ګرافیک، لوبې یا پرمختللی د کمرې او رسنیو پروسس.
- له عامل سیسټم، ویجټونو یا هوښیارو ساعتونو سره ژوره یوځای کېدنه.
- په Google Play یا App Store کې د موندلو د چینل په توګه قوي لید.

دا هم شونې ده چې له PWA پیل وکړئ او وروسته اصلي اپونه ورزیات کړئ، یا PWA د Trusted Web Activities په مرسته د Google Play لپاره بسته بندي کړئ. که د انتخابونو ترمنځ په شک کې یاست، زموږ مقاله د دې په اړه چې [لومړی اپ جوړ کړو که ویب پاڼه](/blog/app-vs-website-which-first) دا پرېکړه ګام په ګام تشریح کوي.

**PWA څنګه پلان او جوړ کړو؟**

PWA د دې په پرېکړه پلان کړئ چې څه باید پرته له انټرنېټ کار وکړي، څه خبرتیا لېږي او د نصب شوې نسخې تجربه څنګه وي، بیا یې په یوه عصري فریم ورک د دقیق کیشنګ سره جوړ کړئ. هغه بهیر چې موږ یې تعقیبوو دا دی:

1. **اصلي کارونه وټاکئ.** هغه دوه یا درې کارونه لېست کړئ چې کاروونکي یې ډېر تکراروي، لکه د مهالوېش کتل، د فرمایش ورکول یا د کتلاګ کتل.
2. **د آفلاین چلند پرېکړه وکړئ.** وټاکئ چې کومې پاڼې او معلومات پرته له انټرنېټ د لاسرسي وړ وي، او هغه کارونه چې آفلاین کېږي (لکه لېږل شوې فورمه) وروسته څنګه همغږي شي. د بېلګو لپاره زموږ لارښود د [آفلاین لومړیتوب لرونکو موبایل اپونو](/blog/offline-first-mobile-apps) په اړه وګورئ.
3. **لومړی د کوچنیو سکرینونو لپاره ډیزاین وکړئ.** لویې تڼۍ، ګړندۍ پاڼې او د دري او پښتو لپاره له ښي څخه کیڼ لور ته ترتیب.
4. **Manifest او آیکونونه جوړ کړئ.** نوم، لنډ نوم، په اړینو اندازو آیکونونه، رنګونه او د ښودلو حالت.
5. **د کیشنګ ستراتیژي ولیکئ.** د اپ پوښ په کلکه خوندي کړئ، منځپانګه د معقولې پای نېټې سره خوندي کړئ او هېڅکله شخصي یا د تادیې معلومات بې پروايۍ سره مه خوندي کوئ.
6. **push خبرتیاوې په پام سره ورزیاتې کړئ.** یوازې هغه وخت اجازه وغواړئ چې کاروونکی د منلو دلیل ولري، لکه د فرمایش تعقیب.
7. **په ریښتینو وسایلو او کمزورو شبکو یې وازمویئ.** محدودې اړیکې او زاړه اندروید موبایلونه وکاروئ، نه یوازې د دفتر ګړندی لپټاپ.

فریم ورکونه لکه Next.js د PWA لپاره ښه کار کوي ځکه چې په سرور کې رنډر شوې ګړندۍ پاڼې، ښه SEO او عصري کیشنګ یوځای کوي.

**کومې سوداګرۍ له PWA څخه تر ټولو ډېره ګټه اخلي؟**

هغه سوداګرۍ چې پېرودونکي یې په منظم ډول د یوه ساده کار لپاره بېرته راځي، له PWA څخه تر ټولو ډېره ګټه اخلي. عامې بېلګې:

- رستورانتونه او هټۍ چې فرمایش اخلي یا مینو او کتلاګ ښيي.
- ښوونځي او روزنیز مرکزونه چې زده کوونکو ته مهالوېش، پایلو او اعلانونو ته لاسرسی ورکوي.
- کلینیکونه چې د وخت اخیستلو غوښتنې او یادونې اداره کوي.
- خدماتي شرکتونه چې بکینګونه او د بیې غوښتنې اداره کوي.
- د ساحوي کارکوونکو لپاره داخلي وسایل چې داسې فورمو او چک لېستونو ته اړتیا لري چې پرته له انټن کار وکړي.

**له شین سره کار وکړئ**

شین ګړندي او د نصب وړ ویب اپونه د Next.js، آفلاین ملاتړ او دري، پښتو او انګلیسي انٹرفیسونو سره جوړوي، او په ریښتینولۍ درته وايي چې کله اصلي اپ غوره انتخاب دی. زموږ [د موبایل اپ خدمت](/services/mobile-apps) وګورئ، یا [یوه ناسته بک کړئ](/book) او د info@sheen.af یا +93 784 966 018 له لارې موږ سره اړیکه ونیسئ.`
        },
        faqs: [
            {
                q: {
                    en: "Can a progressive web app be listed on Google Play?",
                    da: "آیا یک اپلیکیشن وب پیشرو را می‌توان در Google Play منتشر کرد؟",
                    pa: "ایا پرمختللی ویب اپ په Google Play کې خپرېدای شي؟"
                },
                a: {
                    en: "Yes. A PWA can be wrapped as an Android app using Trusted Web Activities, often with Google's Bubblewrap tool, and submitted to Google Play like any other app. You still need a Google Play developer account and must follow the store's policies. Many businesses launch the PWA on their own domain first and add a store listing later if discovery in Google Play becomes important.",
                    da: "بله. یک PWA را می‌توان با Trusted Web Activities، اغلب با ابزار Bubblewrap گوگل، به شکل اپ اندروید بسته‌بندی کرد و مانند هر اپ دیگری به Google Play فرستاد. هنوز به حساب توسعه‌دهنده Google Play نیاز دارید و باید از قوانین استور پیروی کنید. بسیاری از کسب‌وکارها اول PWA را روی دامنه خود راه‌اندازی می‌کنند و اگر پیدا شدن در Google Play مهم شد، بعداً آن را در استور ثبت می‌کنند.",
                    pa: "هو. PWA د Trusted Web Activities په مرسته، اکثراً د ګوګل د Bubblewrap وسیلې سره، د اندروید اپ په توګه بسته کېدای شي او د هر بل اپ په څېر Google Play ته لېږل کېدای شي. لا هم د Google Play د پراختیا ورکوونکي حساب ته اړتیا لرئ او باید د سټور پالیسۍ مراعات کړئ. ډېری سوداګرۍ لومړی PWA په خپل ډومین پیلوي او که په Google Play کې موندل مهم شي، وروسته یې په سټور کې ثبتوي."
                }
            },
            {
                q: {
                    en: "Do PWAs work offline on iPhone?",
                    da: "آیا PWA در آیفون بدون انترنت کار می‌کند؟",
                    pa: "ایا PWA په آیفون کې پرته له انټرنېټ کار کوي؟"
                },
                a: {
                    en: "Yes, Safari on iPhone supports service workers, so a PWA can cache pages and data and show them without a connection. Storage limits on iOS can be tighter than on Android, and cached data may be cleared if the app is not used for a while, so important data should always be synced to your server when the connection returns.",
                    da: "بله، Safari در آیفون از service worker پشتیبانی می‌کند، پس PWA می‌تواند صفحات و داده‌ها را ذخیره کند و بدون انترنت نشان دهد. محدودیت‌های حافظه در iOS ممکن است سخت‌تر از اندروید باشد و داده‌های ذخیره‌شده اگر اپ مدتی استفاده نشود ممکن است پاک شوند؛ بنابراین داده‌های مهم همیشه باید هنگام برگشت انترنت با سرور شما همگام شوند.",
                    pa: "هو، په آیفون کې Safari د service worker ملاتړ کوي، نو PWA کولی شي پاڼې او معلومات خوندي کړي او پرته له انټرنېټ یې وښيي. په iOS کې د حافظې محدودیتونه ښايي له اندروید سخت وي او که اپ یوه موده ونه کارول شي، خوندي معلومات ښايي پاک شي؛ نو مهم معلومات باید تل د انټرنېټ د راګرځېدو پر مهال ستاسو له سرور سره همغږي شي."
                }
            },
            {
                q: {
                    en: "Is a PWA cheaper than building a native app?",
                    da: "آیا PWA از ساختن اپ بومی ارزان‌تر است؟",
                    pa: "ایا PWA د اصلي اپ له جوړولو ارزانه دی؟"
                },
                a: {
                    en: "Usually, yes. A PWA is built from one web codebase instead of separate Android and iOS apps, needs no store submissions, and updates instantly, which lowers both build and maintenance costs. The exact cost depends on features such as offline sync, accounts, payments and integrations, so it is best to scope the core tasks first and get a quote based on them.",
                    da: "معمولاً بله. PWA از یک کد وب ساخته می‌شود، نه از اپ‌های جداگانه اندروید و iOS، به ارسال به استور نیاز ندارد و فوراً به‌روز می‌شود؛ این هزینه ساخت و نگهداری را کاهش می‌دهد. هزینه دقیق به امکاناتی مانند همگام‌سازی آفلاین، حساب کاربری، پرداخت و ادغام‌ها بستگی دارد، پس بهتر است اول کارهای اصلی را مشخص کنید و بر اساس آن قیمت بگیرید.",
                    pa: "معمولاً هو. PWA له یوه ویب کوډ څخه جوړېږي، نه د اندروید او iOS له جلا اپونو، سټور ته لېږلو ته اړتیا نه لري او سمدستي تازه کېږي؛ دا د جوړولو او ساتنې لګښت کموي. دقیق لګښت په ځانګړتیاوو لکه آفلاین همغږي، حسابونو، تادیاتو او یوځای کولو پورې اړه لري، نو غوره ده لومړی اصلي کارونه وټاکئ او د هغو پر بنسټ بیه واخلئ."
                }
            },
            {
                q: {
                    en: "Will a PWA still show up in Google search?",
                    da: "آیا PWA هنوز در جستجوی گوگل نشان داده می‌شود؟",
                    pa: "ایا PWA لا هم د ګوګل په لټون کې ښکاري؟"
                },
                a: {
                    en: "Yes. A PWA is a website, so its pages can be crawled and ranked like any other site as long as the content is rendered in the HTML and each page has its own URL, title and description. This is a real advantage over native apps, whose content is generally not visible in normal web search results.",
                    da: "بله. PWA یک ویب‌سایت است، پس صفحات آن مانند هر سایت دیگری بررسی و رتبه‌بندی می‌شوند، به شرطی که محتوا در HTML نمایش داده شود و هر صفحه آدرس، عنوان و توضیحات خودش را داشته باشد. این یک مزیت واقعی نسبت به اپ‌های بومی است که محتوای آن‌ها معمولاً در نتایج عادی جستجوی وب دیده نمی‌شود.",
                    pa: "هو. PWA ویب پاڼه ده، نو پاڼې یې د هر بل سایټ په څېر څېړل کېږي او درجه بندي کېږي، په دې شرط چې منځپانګه په HTML کې ښکاره شي او هره پاڼه خپل URL، سرلیک او تشریح ولري. دا د اصلي اپونو په پرتله یوه ریښتینې ګټه ده چې منځپانګه یې معمولاً د ویب په عادي لټون پایلو کې نه ښکاري."
                }
            }
        ],
        category: "web-dev",
        author: "Jawad Hakimi",
        date: "2026-09-24",
        updated: "2026-09-24",
        readTime: "6 min read",
        image: "/logo.png",
        tags: ["progressive web app", "PWA", "PWA vs native app", "installable web app", "offline web app", "web push notifications iOS", "PWA Afghanistan"]
    },
    {
        id: "119",
        slug: "website-security-checklist-2026",
        title: {
            en: "Website Security Checklist for Small Businesses in 2026",
            da: "چک‌لیست امنیت ویب‌سایت برای کسب‌وکارهای کوچک در سال 2026",
            pa: "د کوچنیو سوداګریو لپاره د ویب پاڼې د امنیت چک لېست په 2026 کې"
        },
        excerpt: {
            en: "A practical website security checklist for 2026: HTTPS, MFA and passkeys, updates, backups, firewalls, secure forms and email protection for small businesses.",
            da: "چک‌لیست عملی امنیت ویب‌سایت برای 2026: HTTPS، تأیید دومرحله‌ای و passkey، به‌روزرسانی، پشتیبان‌گیری، فایروال، فورم‌های امن و محافظت ایمیل.",
            pa: "د 2026 لپاره د ویب پاڼې د امنیت عملي چک لېست: HTTPS، دوه ګامیز تایید او passkey، تازه کول، بیک اپ، فایروال، خوندي فورمې او د برېښنالیک ساتنه."
        },
        content: {
            en: `A website security checklist for a small business in 2026 comes down to a handful of habits: lock down every login with multi-factor authentication, keep software and dependencies updated, serve everything over HTTPS, take automatic off-site backups you have actually tested, and put a firewall or CDN in front of the site. Most attacks on small business websites are automated and opportunistic, not personal. They succeed through weak passwords, outdated plugins and forgotten admin accounts, which means the basics, done consistently, stop the large majority of real-world problems.

**Key Takeaways**

- Protect accounts first: domain registrar, hosting, email and website admin all need strong unique passwords plus MFA or passkeys.
- Updates are security work. Outdated CMS cores, plugins and code packages are a leading way sites get compromised.
- Backups only count if they are automatic, stored somewhere separate, and tested by actually restoring them.
- A web application firewall, rate limiting and spam protection on forms block most automated attacks.
- Write down a simple incident plan before you need it: who to call, where backups are, how to restore.

**Why Would Anyone Attack a Small Business Website?**

Attackers target small business websites because they are easy to find automatically and often poorly maintained, not because the business itself is interesting. Bots scan the internet constantly for known vulnerabilities, default login pages and leaked passwords.

A compromised site can be used to send spam, host phishing pages, inject hidden links for SEO spam, redirect visitors to scams, or steal form submissions such as names and phone numbers. For a company in Kabul or Herat, the visible damage is usually a Google warning on search results, a blocked email domain, or customers reporting strange pop-ups. Cleaning up takes far longer and costs far more than prevention.

**Which Accounts Need Protecting First?**

The accounts that control your domain, hosting, email and website admin need protecting first, because whoever controls them controls your whole online presence. Many businesses secure the website login but forget the domain registrar, which is the most dangerous account to lose.

Account checklist:

1. List every account: domain registrar, DNS provider, hosting or cloud, website admin, email, Google Search Console, analytics and ad accounts.
2. Make sure the business, not a former employee or freelancer, owns each account, using a company email address.
3. Use a password manager and a unique, long password for every account.
4. Turn on multi-factor authentication everywhere. Prefer an authenticator app or passkeys over SMS where the service allows it.
5. Give each person their own login with only the permissions they need, and remove access the day someone leaves.
6. Delete unused admin accounts and change any default usernames such as "admin".

**How Do Updates and Dependencies Affect Security?**

Updates fix known security holes, so running outdated software is one of the most common reasons websites get hacked. Once a vulnerability is published, automated tools start probing for it quickly.

- **WordPress and similar CMS sites:** update the core, themes and plugins regularly, remove plugins you no longer use, and avoid "nulled" or pirated themes, which frequently contain malware.
- **Custom and Next.js sites:** keep the framework and npm packages updated, review dependency audit warnings, and avoid adding packages you do not really need.
- **Server software:** if you manage your own server, keep the operating system, PHP or Node.js runtime and database patched, or use managed hosting that does it for you.

Updates are a core part of [website maintenance](/blog/website-maintenance-plan), and they should be scheduled rather than done only when something breaks. Test major updates on a staging copy first.

**What Technical Protections Should Every Website Have?**

Every website should have HTTPS, a firewall layer, protected forms and sensible security headers. These protections are inexpensive and many are available on standard hosting.

- **HTTPS everywhere.** Use a valid TLS certificate set to renew automatically, redirect all HTTP traffic to HTTPS, and enable HSTS once everything works.
- **Web application firewall and CDN.** A service such as Cloudflare in front of your site filters malicious traffic, absorbs many denial-of-service attacks and also speeds up delivery to visitors on slow connections.
- **Rate limiting.** Limit login attempts and form submissions so bots cannot guess passwords or flood your inbox.
- **Form protection.** Validate all input on the server, use spam protection, and never email full sensitive details in plain text.
- **Security headers.** A Content Security Policy, frame protections and strict referrer settings reduce the impact of injected scripts and clickjacking.
- **Secrets out of code.** API keys and database passwords belong in environment variables, never in the public code or a shared document.
- **Minimal data.** Only collect the customer data you need. Data you never store cannot leak.

Your hosting choice affects many of these. Our guide to [choosing a domain and hosting](/blog/domain-hosting-guide-af-domain) covers what to look for.

**How Should Small Businesses Handle Backups?**

Small businesses should keep automatic, regular backups of both files and database, stored in a separate location from the website, and should test restoring them a few times a year. A backup that has never been restored is a hope, not a plan.

A simple rule is to keep several copies on different systems, with at least one stored away from your main hosting account. Daily backups suit most business sites; online stores and booking systems that change constantly may need more frequent ones. Keep several weeks of history, because some infections are discovered days after they happen.

**How Do You Protect Your Email Domain?**

Protect your email domain by publishing SPF, DKIM and DMARC records, which tell receiving mail servers which services may send email for your domain. Without them, scammers can more easily send messages that appear to come from your business, for example fake invoices to your customers.

Start DMARC in monitoring mode, review the reports, and gradually move to a stricter policy once all your legitimate senders, such as your website's contact form and email marketing tool, are correctly configured.

**What Should You Do If Your Website Is Hacked?**

If your website is hacked, act quickly and in order: contain the damage, restore from a clean backup, close the hole that let the attacker in, and then check search and email reputation.

1. Take the site offline or into maintenance mode if it is harming visitors.
2. Change all passwords and revoke sessions and API keys, starting with hosting and the domain registrar.
3. Restore from a backup taken before the compromise.
4. Update everything and remove the vulnerable plugin, package or account.
5. Check Google Search Console for security issues and request a review once clean.
6. Tell affected customers honestly if their data may have been exposed.

Write this plan down now, with contact details for your developer and hosting provider, so nobody has to improvise under pressure.

**Work With Sheen**

Sheen builds secure-by-default websites on Next.js with HTTPS, firewall protection, protected forms and tested backups, and we can review the security of an existing site. Learn more about our [web design service](/services/web-design) or [contact us](/contact) at info@sheen.af or +93 784 966 018.`,
            da: `چک‌لیست امنیت ویب‌سایت برای یک کسب‌وکار کوچک در سال 2026 به چند عادت خلاصه می‌شود: هر ورود (login) را با تأیید چندمرحله‌ای محافظت کنید، نرم‌افزار و وابستگی‌ها را به‌روز نگه دارید، همه چیز را از طریق HTTPS ارائه کنید، پشتیبان‌های خودکار در جای جداگانه بگیرید که واقعاً آزمایش کرده‌اید، و یک فایروال یا CDN جلوی سایت بگذارید. بیشتر حمله‌ها به ویب‌سایت‌های کسب‌وکارهای کوچک خودکار و فرصت‌طلبانه هستند، نه شخصی. آن‌ها از طریق رمزهای ضعیف، افزونه‌های کهنه و حساب‌های مدیریتی فراموش‌شده موفق می‌شوند؛ یعنی اصول پایه، اگر پیوسته انجام شوند، بخش بزرگی از مشکلات واقعی را متوقف می‌کنند.

**نکات کلیدی**

- اول حساب‌ها را محافظت کنید: ثبت‌کننده دامنه، هاستینگ، ایمیل و مدیریت ویب‌سایت همه به رمزهای قوی و منحصربه‌فرد همراه با MFA یا passkey نیاز دارند.
- به‌روزرسانی کار امنیتی است. هسته‌های CMS، افزونه‌ها و بسته‌های کد کهنه از راه‌های اصلی نفوذ به سایت‌ها هستند.
- پشتیبان‌ها فقط زمانی ارزش دارند که خودکار باشند، در جای جداگانه نگهداری شوند و با بازگردانی واقعی آزمایش شده باشند.
- فایروال وب، محدودیت تعداد درخواست و محافظت در برابر اسپم در فورم‌ها بیشتر حمله‌های خودکار را متوقف می‌کنند.
- پیش از اینکه نیاز پیدا کنید، یک برنامه ساده برای حادثه بنویسید: با چه کسی تماس بگیرید، پشتیبان‌ها کجا هستند و چگونه بازگردانی کنید.

**چرا کسی به ویب‌سایت یک کسب‌وکار کوچک حمله می‌کند؟**

مهاجمان ویب‌سایت‌های کسب‌وکارهای کوچک را هدف قرار می‌دهند چون به‌طور خودکار به آسانی پیدا می‌شوند و اغلب خوب نگهداری نمی‌شوند، نه به این خاطر که خود کسب‌وکار برایشان جالب است. ربات‌ها پیوسته انترنت را برای آسیب‌پذیری‌های شناخته‌شده، صفحات ورود پیش‌فرض و رمزهای افشاشده جستجو می‌کنند.

یک سایت آلوده می‌تواند برای فرستادن اسپم، میزبانی صفحات فیشینگ، تزریق لینک‌های پنهان برای اسپم سئو، فرستادن بازدیدکنندگان به سایت‌های کلاهبرداری یا دزدیدن اطلاعات فورم‌ها مانند نام و شماره تیلفون استفاده شود. برای یک شرکت در کابل یا هرات، آسیب قابل دیدن معمولاً هشدار گوگل در نتایج جستجو، مسدود شدن دامنه ایمیل یا گزارش مشتریان از پنجره‌های عجیب است. پاکسازی بسیار بیشتر از پیشگیری زمان و هزینه می‌برد.

**کدام حساب‌ها اول نیاز به محافظت دارند؟**

حساب‌هایی که دامنه، هاستینگ، ایمیل و مدیریت ویب‌سایت شما را کنترل می‌کنند اول نیاز به محافظت دارند، چون هر کسی آن‌ها را کنترل کند تمام حضور آنلاین شما را کنترل می‌کند. بسیاری از کسب‌وکارها ورود به سایت را امن می‌کنند اما ثبت‌کننده دامنه را فراموش می‌کنند که از دست دادن آن خطرناک‌ترین است.

چک‌لیست حساب‌ها:

1. همه حساب‌ها را فهرست کنید: ثبت‌کننده دامنه، ارائه‌دهنده DNS، هاستینگ یا کلاود، مدیریت ویب‌سایت، ایمیل، Google Search Console، حساب‌های تحلیل و اعلانات.
2. مطمئن شوید هر حساب به نام کسب‌وکار و با ایمیل شرکت است، نه به نام یک کارمند یا فریلنسر سابق.
3. از یک مدیر رمز (password manager) و یک رمز طولانی و منحصربه‌فرد برای هر حساب استفاده کنید.
4. تأیید چندمرحله‌ای را همه جا فعال کنید. هر جا خدمت اجازه می‌دهد، اپ authenticator یا passkey را بر پیامک ترجیح دهید.
5. به هر نفر ورود جداگانه با فقط دسترسی‌های لازم بدهید و همان روزی که کسی کار را ترک می‌کند دسترسی‌اش را بردارید.
6. حساب‌های مدیریتی بی‌استفاده را پاک کنید و نام‌های کاربری پیش‌فرض مانند «admin» را تغییر دهید.

**به‌روزرسانی‌ها و وابستگی‌ها چگونه بر امنیت اثر می‌گذارند؟**

به‌روزرسانی‌ها حفره‌های امنیتی شناخته‌شده را می‌بندند، پس اجرای نرم‌افزار کهنه یکی از رایج‌ترین دلایل هک شدن ویب‌سایت‌هاست. وقتی یک آسیب‌پذیری منتشر می‌شود، ابزارهای خودکار به سرعت شروع به جستجوی آن می‌کنند.

- **سایت‌های WordPress و CMSهای مشابه:** هسته، قالب‌ها و افزونه‌ها را منظم به‌روز کنید، افزونه‌هایی را که دیگر استفاده نمی‌کنید حذف کنید و از قالب‌های «nulled» یا غیرقانونی که اغلب بدافزار دارند پرهیز کنید.
- **سایت‌های سفارشی و Next.js:** فریم‌ورک و بسته‌های npm را به‌روز نگه دارید، هشدارهای بررسی وابستگی‌ها را مرور کنید و بسته‌هایی را که واقعاً لازم ندارید اضافه نکنید.
- **نرم‌افزار سرور:** اگر سرور خودتان را مدیریت می‌کنید، سیستم‌عامل، PHP یا Node.js و دیتابیس را به‌روز نگه دارید یا از هاستینگ مدیریت‌شده که این کار را برایتان انجام می‌دهد استفاده کنید.

به‌روزرسانی‌ها بخش اصلی [نگهداری ویب‌سایت](/blog/website-maintenance-plan) هستند و باید زمان‌بندی شوند، نه اینکه فقط هنگام خراب شدن چیزی انجام شوند. به‌روزرسانی‌های بزرگ را اول روی یک نسخه آزمایشی امتحان کنید.

**هر ویب‌سایت چه محافظت‌های فنی باید داشته باشد؟**

هر ویب‌سایت باید HTTPS، یک لایه فایروال، فورم‌های محافظت‌شده و هدرهای امنیتی معقول داشته باشد. این محافظت‌ها ارزان هستند و بسیاری از آن‌ها در هاستینگ عادی در دسترس‌اند.

- **HTTPS در همه جا.** از گواهی TLS معتبر با تمدید خودکار استفاده کنید، همه ترافیک HTTP را به HTTPS ریدایرکت کنید و وقتی همه چیز درست کار کرد HSTS را فعال کنید.
- **فایروال وب و CDN.** خدمتی مانند Cloudflare جلوی سایت شما ترافیک مخرب را فیلتر می‌کند، بسیاری از حمله‌های اختلال در خدمات را جذب می‌کند و سرعت رسیدن سایت به بازدیدکنندگان با انترنت کند را هم بیشتر می‌کند.
- **محدودیت درخواست.** تلاش‌های ورود و ارسال فورم را محدود کنید تا ربات‌ها نتوانند رمز حدس بزنند یا صندوق ایمیل شما را پر کنند.
- **محافظت فورم‌ها.** همه ورودی‌ها را در سرور بررسی کنید، از محافظت ضد اسپم استفاده کنید و هرگز جزئیات حساس کامل را به شکل متن ساده ایمیل نکنید.
- **هدرهای امنیتی.** Content Security Policy، محافظت در برابر قاب‌گذاری و تنظیمات سخت referrer اثر اسکریپت‌های تزریق‌شده و clickjacking را کم می‌کنند.
- **رازها بیرون از کد.** کلیدهای API و رمزهای دیتابیس جایشان در متغیرهای محیطی است، هرگز در کد عمومی یا یک سند مشترک.
- **داده حداقلی.** فقط داده‌هایی از مشتری جمع کنید که نیاز دارید. داده‌ای که هرگز ذخیره نکنید نمی‌تواند افشا شود.

انتخاب هاستینگ بر بسیاری از این موارد اثر دارد. راهنمای ما درباره [انتخاب دامنه و هاستینگ](/blog/domain-hosting-guide-af-domain) توضیح می‌دهد به چه چیزهایی توجه کنید.

**کسب‌وکارهای کوچک چگونه باید پشتیبان‌گیری کنند؟**

کسب‌وکارهای کوچک باید از فایل‌ها و دیتابیس پشتیبان‌های خودکار و منظم داشته باشند که در جایی جدا از ویب‌سایت نگهداری می‌شوند، و چند بار در سال بازگردانی آن‌ها را آزمایش کنند. پشتیبانی که هرگز بازگردانی نشده یک امید است، نه یک برنامه.

یک قاعده ساده این است که چند نسخه روی سیستم‌های مختلف نگه دارید و دست‌کم یکی از آن‌ها دور از حساب هاستینگ اصلی باشد. پشتیبان روزانه برای بیشتر سایت‌های تجاری مناسب است؛ فروشگاه‌های آنلاین و سیستم‌های رزرو که پیوسته تغییر می‌کنند ممکن است به پشتیبان‌گیری بیشتر نیاز داشته باشند. چند هفته تاریخچه را نگه دارید، چون برخی آلودگی‌ها چند روز پس از وقوع کشف می‌شوند.

**چگونه از دامنه ایمیل خود محافظت کنید؟**

از دامنه ایمیل خود با انتشار رکوردهای SPF، DKIM و DMARC محافظت کنید که به سرورهای دریافت‌کننده ایمیل می‌گویند کدام خدمات اجازه دارند به نام دامنه شما ایمیل بفرستند. بدون آن‌ها، کلاهبرداران آسان‌تر می‌توانند پیام‌هایی بفرستند که به نظر می‌رسد از طرف کسب‌وکار شماست، مثلاً بل‌های جعلی به مشتریانتان.

DMARC را در حالت نظارت شروع کنید، گزارش‌ها را بررسی کنید و وقتی همه فرستنده‌های قانونی شما، مانند فورم تماس ویب‌سایت و ابزار بازاریابی ایمیلی، درست تنظیم شدند، به تدریج به سیاست سخت‌تر بروید.

**اگر ویب‌سایت شما هک شد چه کار کنید؟**

اگر ویب‌سایت شما هک شد، سریع و به ترتیب عمل کنید: آسیب را مهار کنید، از یک پشتیبان پاک بازگردانی کنید، راهی را که مهاجم از آن وارد شد ببندید و سپس اعتبار جستجو و ایمیل را بررسی کنید.

1. اگر سایت به بازدیدکنندگان آسیب می‌رساند، آن را آفلاین یا در حالت نگهداری قرار دهید.
2. همه رمزها را تغییر دهید و جلسات و کلیدهای API را باطل کنید، از هاستینگ و ثبت‌کننده دامنه شروع کنید.
3. از پشتیبانی که پیش از نفوذ گرفته شده بازگردانی کنید.
4. همه چیز را به‌روز کنید و افزونه، بسته یا حساب آسیب‌پذیر را حذف کنید.
5. Google Search Console را برای مشکلات امنیتی بررسی کنید و پس از پاکسازی درخواست بازبینی بدهید.
6. اگر ممکن است داده‌های مشتریان افشا شده باشد، صادقانه به آن‌ها اطلاع دهید.

این برنامه را همین حالا با جزئیات تماس توسعه‌دهنده و ارائه‌دهنده هاستینگ خود بنویسید تا هیچ‌کس مجبور نشود زیر فشار تصمیم بگیرد.

**با شین کار کنید**

شین ویب‌سایت‌هایی می‌سازد که به‌طور پیش‌فرض امن هستند: با Next.js، HTTPS، محافظت فایروال، فورم‌های محافظت‌شده و پشتیبان‌های آزمایش‌شده؛ و می‌توانیم امنیت سایت موجود شما را هم بررسی کنیم. درباره [خدمات طراحی ویب‌سایت](/services/web-design) ما بیشتر بدانید یا از طریق info@sheen.af یا +93 784 966 018 [با ما تماس بگیرید](/contact).`,
            pa: `په 2026 کې د یوې کوچنۍ سوداګرۍ لپاره د ویب پاڼې د امنیت چک لېست په څو عادتونو کې لنډېږي: هر ننوتل (login) د څو ګامیز تایید سره خوندي کړئ، سافټویر او تړلي کتابتونونه تازه وساتئ، هر څه د HTTPS له لارې وړاندې کړئ، په جلا ځای کې اتومات بیک اپونه واخلئ چې په ریښتیا مو ازمویلي وي، او د سایټ مخې ته فایروال یا CDN کېږدئ. پر کوچنیو سوداګریزو ویب پاڼو ډېری بریدونه اتومات او فرصت طلبانه وي، نه شخصي. دوی د کمزورو پټنومونو، زړو پلګ انونو او هېر شویو مدیریتي حسابونو له لارې بریالي کېږي؛ یعنې بنسټیز کارونه، که په دوامداره توګه وشي، د ریښتینو ستونزو لویه برخه دروي.

**مهم ټکي**

- لومړی حسابونه خوندي کړئ: د ډومین ثبتوونکی، هاسټینګ، برېښنالیک او د ویب پاڼې مدیریت ټول قوي او ځانګړي پټنومونو سره MFA یا passkey ته اړتیا لري.
- تازه کول امنیتي کار دی. د CMS زاړه هستې، پلګ انونه او د کوډ بستې د سایټونو د ننوتلو اصلي لارې دي.
- بیک اپونه یوازې هغه وخت ارزښت لري چې اتومات وي، په جلا ځای کې وساتل شي او د ریښتیني بېرته راګرځولو سره ازمویل شوي وي.
- د ویب فایروال، د غوښتنو محدودیت او په فورمو کې د سپم ضد ساتنه ډېری اتومات بریدونه دروي.
- مخکې له دې چې اړتیا پیدا کړئ، د پېښې لپاره یو ساده پلان ولیکئ: چا ته زنګ ووهئ، بیک اپونه چېرې دي او څنګه بېرته راګرځول کېږي.

**ولې څوک پر یوې کوچنۍ سوداګرۍ ویب پاڼې برید کوي؟**

برید کوونکي کوچنۍ سوداګریزې ویب پاڼې په نښه کوي ځکه چې په اتومات ډول په اسانۍ موندل کېږي او اکثراً ښه نه ساتل کېږي، نه دا چې پخپله سوداګري ورته په زړه پورې ده. روبوټونه په دوامداره توګه انټرنېټ د پېژندل شویو کمزوریو، د ننوتلو اصلي پاڼو او افشا شویو پټنومونو لپاره لټوي.

یو ککړ شوی سایټ د سپم لېږلو، د فیشینګ پاڼو کوربه توب، د SEO سپم لپاره د پټو لینکونو ورګډولو، لیدونکو ته د درغلۍ سایټونو ته لېږلو یا د فورمو د معلوماتو لکه نوم او د تلیفون شمېرې د غلا لپاره کارول کېدای شي. په کابل یا هرات کې د یوه شرکت لپاره، ښکاره زیان معمولاً د لټون په پایلو کې د ګوګل خبرداری، د برېښنالیک د ډومین بندېدل یا د پېرودونکو له خوا د عجیبو کړکیو راپور وي. پاکول تر مخنیوي ډېر وخت او لګښت غواړي.

**کوم حسابونه لومړی ساتنې ته اړتیا لري؟**

هغه حسابونه چې ستاسو ډومین، هاسټینګ، برېښنالیک او د ویب پاڼې مدیریت کنټرولوي، لومړی ساتنې ته اړتیا لري، ځکه څوک چې یې کنټرولوي ستاسو ټول آنلاین شتون کنټرولوي. ډېری سوداګرۍ د سایټ ننوتل خوندي کوي خو د ډومین ثبتوونکی هېروي، چې له لاسه ورکول یې تر ټولو خطرناک دي.

د حسابونو چک لېست:

1. ټول حسابونه لېست کړئ: د ډومین ثبتوونکی، د DNS برابروونکی، هاسټینګ یا کلاوډ، د ویب پاڼې مدیریت، برېښنالیک، Google Search Console، د تحلیل او اعلانونو حسابونه.
2. ډاډ ترلاسه کړئ چې هر حساب د سوداګرۍ په نوم او د شرکت برېښنالیک سره دی، نه د یوه پخواني کارکوونکي یا فریلانسر په نوم.
3. د پټنوم مدیر (password manager) او د هر حساب لپاره اوږد او ځانګړی پټنوم وکاروئ.
4. څو ګامیز تایید هر ځای فعال کړئ. هر چېرې چې خدمت اجازه ورکوي، authenticator اپ یا passkey پر SMS غوره وګڼئ.
5. هر چا ته جلا ننوتل یوازې د اړینو اجازو سره ورکړئ او په هماغه ورځ چې څوک کار پرېږدي لاسرسی یې لرې کړئ.
6. بې ګټې مدیریتي حسابونه ړنګ کړئ او اصلي کارن نومونه لکه «admin» بدل کړئ.

**تازه کول او تړلي کتابتونونه پر امنیت څه اغېز لري؟**

تازه کول پېژندل شوي امنیتي سوري بندوي، نو د زاړه سافټویر چلول د ویب پاڼو د هک کېدو یو له تر ټولو عامو لاملونو دی. کله چې یوه کمزوري خپره شي، اتومات وسایل ژر د هغې لټول پیلوي.

- **WordPress او ورته CMS سایټونه:** هسته، قالبونه او پلګ انونه په منظم ډول تازه کړئ، هغه پلګ انونه چې نور یې نه کاروئ لرې کړئ او له «nulled» یا غلا شویو قالبونو ډډه وکړئ چې اکثراً بدافزار لري.
- **ځانګړي او Next.js سایټونه:** فریم ورک او npm بستې تازه وساتئ، د تړلو کتابتونونو د څېړنې خبرداري وګورئ او هغه بستې مه ورزیاتوئ چې ریښتیا ورته اړتیا نه لرئ.
- **د سرور سافټویر:** که خپل سرور اداره کوئ، عامل سیسټم، PHP یا Node.js او ډېټابیس تازه وساتئ یا مدیریت شوی هاسټینګ وکاروئ چې دا کار درته کوي.

تازه کول د [ویب پاڼې د ساتنې](/blog/website-maintenance-plan) اصلي برخه ده او باید مهالوېش ولري، نه دا چې یوازې د یو شي د ماتېدو پر مهال وشي. لوی تازه کول لومړی په ازمېښتي نسخه وازمویئ.

**هره ویب پاڼه باید کوم تخنیکي ساتنې ولري؟**

هره ویب پاڼه باید HTTPS، د فایروال یو پوړ، خوندي فورمې او معقول امنیتي سرلیکونه (headers) ولري. دا ساتنې ارزانه دي او ډېری یې په عادي هاسټینګ کې شته.

- **HTTPS په هر ځای کې.** د اتومات نوي کېدو سره معتبر TLS سند وکاروئ، ټول HTTP ترافیک HTTPS ته ریډایرکټ کړئ او کله چې هر څه سم کار کوي HSTS فعال کړئ.
- **د ویب فایروال او CDN.** یو خدمت لکه Cloudflare ستاسو د سایټ مخې ته زیانمن ترافیک فلټر کوي، د خدماتو د ګډوډولو ډېری بریدونه جذبوي او د ورو انټرنېټ لرونکو لیدونکو ته د سایټ رسېدل هم ګړندي کوي.
- **د غوښتنو محدودیت.** د ننوتلو هڅې او د فورمو لېږل محدود کړئ ترڅو روبوټونه پټنوم اټکل نه کړي یا ستاسو برېښنالیک ډک نه کړي.
- **د فورمو ساتنه.** ټول ننوتي معلومات په سرور کې وڅېړئ، د سپم ضد ساتنه وکاروئ او هېڅکله بشپړ حساس جزئیات په ساده متن برېښنالیک مه کوئ.
- **امنیتي سرلیکونه.** Content Security Policy، د چوکاټ ضد ساتنه او سخت referrer تنظیمات د ورګډ شویو سکرېپټونو او clickjacking اغېز کموي.
- **رازونه له کوډ بهر.** د API کلیدونه او د ډېټابیس پټنومونه په چاپېریالي متغیرونو کې ځای لري، هېڅکله په عامه کوډ یا ګډ سند کې نه.
- **لږ تر لږه معلومات.** یوازې هغه د پېرودونکو معلومات راټول کړئ چې ورته اړتیا لرئ. هغه معلومات چې هېڅکله یې نه ساتئ نشي افشا کېدای.

د هاسټینګ انتخاب پر ډېرو دې مواردو اغېز لري. زموږ لارښود د [ډومین او هاسټینګ د انتخاب](/blog/domain-hosting-guide-af-domain) په اړه تشریح کوي چې څه ته پام وکړئ.

**کوچنۍ سوداګرۍ باید څنګه بیک اپ واخلي؟**

کوچنۍ سوداګرۍ باید د فایلونو او ډېټابیس اتومات او منظم بیک اپونه ولري چې له ویب پاڼې جلا ځای کې ساتل کېږي، او په کال کې څو ځله یې بېرته راګرځول وازمویي. هغه بیک اپ چې هېڅکله بېرته نه وي راګرځول شوی، یوه هیله ده، نه پلان.

یوه ساده قاعده دا ده چې په بېلابېلو سیسټمونو کې څو نسخې وساتئ او لږ تر لږه یوه یې له اصلي هاسټینګ حساب لرې وي. ورځنی بیک اپ د ډېری سوداګریزو سایټونو لپاره مناسب دی؛ آنلاین هټۍ او د بکینګ سیسټمونه چې په دوامداره توګه بدلېږي، ښايي ډېر ځله بیک اپ ته اړتیا ولري. د څو اونیو تاریخچه وساتئ، ځکه ځینې ککړتیاوې له پېښېدو څو ورځې وروسته موندل کېږي.

**له خپل برېښنالیک ډومین څخه څنګه ساتنه وکړئ؟**

له خپل برېښنالیک ډومین څخه د SPF، DKIM او DMARC ریکارډونو په خپرولو ساتنه وکړئ چې ترلاسه کوونکو سرورونو ته وايي کوم خدمتونه ستاسو د ډومین په نوم برېښنالیک لېږلی شي. له دوی پرته، درغلګر په اسانۍ داسې پیغامونه لېږلی شي چې ستاسو د سوداګرۍ له خوا ښکاري، د بېلګې په توګه ستاسو پېرودونکو ته جعلي بلونه.

DMARC د څارنې په حالت کې پیل کړئ، راپورونه وګورئ، او کله چې ټول قانوني لېږونکي، لکه د ویب پاڼې د اړیکې فورمه او د برېښنالیک بازارموندنې وسیله، سم تنظیم شول، ورو ورو سخت پالیسۍ ته لاړ شئ.

**که ستاسو ویب پاڼه هک شي څه وکړئ؟**

که ستاسو ویب پاڼه هک شي، ګړندی او په ترتیب سره عمل وکړئ: زیان کنټرول کړئ، له پاک بیک اپ څخه بېرته راوګرځوئ، هغه لاره وتړئ چې برید کوونکی ترې ننوتی و، او بیا د لټون او برېښنالیک اعتبار وګورئ.

1. که سایټ لیدونکو ته زیان رسوي، آفلاین یا د ساتنې حالت ته یې واړوئ.
2. ټول پټنومونه بدل کړئ او ناستې او د API کلیدونه باطل کړئ، له هاسټینګ او د ډومین ثبتوونکي څخه پیل وکړئ.
3. له هغه بیک اپ څخه بېرته راوګرځوئ چې له ننوتلو مخکې اخیستل شوی.
4. هر څه تازه کړئ او کمزوری پلګ ان، بسته یا حساب لرې کړئ.
5. Google Search Console د امنیتي ستونزو لپاره وګورئ او له پاکولو وروسته د بیاکتنې غوښتنه وکړئ.
6. که ښايي د پېرودونکو معلومات افشا شوي وي، په ریښتینولۍ ورته خبر ورکړئ.

دا پلان همدا اوس د خپل پراختیا ورکوونکي او هاسټینګ برابروونکي د اړیکو جزئیاتو سره ولیکئ ترڅو هېڅوک د فشار لاندې ناڅاپي پرېکړې ته اړ نه شي.

**له شین سره کار وکړئ**

شین داسې ویب پاڼې جوړوي چې په اصل کې خوندي وي: د Next.js، HTTPS، فایروال ساتنې، خوندي فورمو او ازمویل شویو بیک اپونو سره؛ او کولی شو ستاسو د اوسني سایټ امنیت هم وڅېړو. زموږ د [ویب ډیزاین خدمت](/services/web-design) په اړه نور معلومات واخلئ یا د info@sheen.af یا +93 784 966 018 له لارې [موږ سره اړیکه ونیسئ](/contact).`
        },
        faqs: [
            {
                q: {
                    en: "Is an SSL certificate enough to make my website secure?",
                    da: "آیا گواهی SSL برای امن کردن ویب‌سایت من کافی است؟",
                    pa: "ایا SSL سند زما د ویب پاڼې د خوندي کولو لپاره بس دی؟"
                },
                a: {
                    en: "No. An SSL/TLS certificate encrypts data travelling between the visitor and your server, which is essential, but it does nothing to stop weak passwords, outdated plugins or a vulnerable form from being exploited. Think of HTTPS as one item on the checklist alongside multi-factor authentication, regular updates, a firewall, protected forms and tested backups.",
                    da: "خیر. گواهی SSL/TLS داده‌هایی را که میان بازدیدکننده و سرور شما رد و بدل می‌شوند رمزگذاری می‌کند که ضروری است، اما جلوی سوءاستفاده از رمزهای ضعیف، افزونه‌های کهنه یا یک فورم آسیب‌پذیر را نمی‌گیرد. HTTPS را یکی از موارد چک‌لیست بدانید، در کنار تأیید چندمرحله‌ای، به‌روزرسانی منظم، فایروال، فورم‌های محافظت‌شده و پشتیبان‌های آزمایش‌شده.",
                    pa: "نه. SSL/TLS سند هغه معلومات کوډ کوي چې د لیدونکي او ستاسو د سرور ترمنځ تېرېږي، چې اړین دی، خو د کمزورو پټنومونو، زړو پلګ انونو یا کمزورې فورمې څخه د ناوړه ګټې اخیستو مخه نه نیسي. HTTPS د چک لېست یو توکی وګڼئ، د څو ګامیز تایید، منظم تازه کولو، فایروال، خوندي فورمو او ازمویل شویو بیک اپونو تر څنګ."
                }
            },
            {
                q: {
                    en: "How often should a small business website be backed up?",
                    da: "ویب‌سایت یک کسب‌وکار کوچک هر چند وقت یک بار باید پشتیبان‌گیری شود؟",
                    pa: "د یوې کوچنۍ سوداګرۍ ویب پاڼه باید څو ځله بیک اپ شي؟"
                },
                a: {
                    en: "For most business websites, a daily automatic backup of files and database is a sensible baseline, with several weeks of history kept. Online stores, booking systems and sites with frequent updates may need backups several times a day. At least one copy should be stored away from your main hosting account, and you should test a full restore a few times a year.",
                    da: "برای بیشتر ویب‌سایت‌های تجاری، پشتیبان خودکار روزانه از فایل‌ها و دیتابیس با نگهداری چند هفته تاریخچه یک پایه معقول است. فروشگاه‌های آنلاین، سیستم‌های رزرو و سایت‌هایی با به‌روزرسانی مکرر ممکن است روزانه چند بار به پشتیبان نیاز داشته باشند. دست‌کم یک نسخه باید دور از حساب هاستینگ اصلی نگهداری شود و باید چند بار در سال بازگردانی کامل را آزمایش کنید.",
                    pa: "د ډېری سوداګریزو ویب پاڼو لپاره، د فایلونو او ډېټابیس ورځنی اتومات بیک اپ، د څو اونیو تاریخچې ساتلو سره، معقول بنسټ دی. آنلاین هټۍ، د بکینګ سیسټمونه او هغه سایټونه چې ډېر ځله تازه کېږي، ښايي په ورځ کې څو ځله بیک اپ ته اړتیا ولري. لږ تر لږه یوه نسخه باید له اصلي هاسټینګ حساب لرې وساتل شي او باید په کال کې څو ځله بشپړ بېرته راګرځول وازمویئ."
                }
            },
            {
                q: {
                    en: "Are custom-built websites more secure than WordPress?",
                    da: "آیا ویب‌سایت‌های سفارشی از WordPress امن‌تر هستند؟",
                    pa: "ایا ځانګړي جوړ شوي ویب پاڼې له WordPress څخه خوندي دي؟"
                },
                a: {
                    en: "Not automatically. WordPress itself is well maintained, but sites become risky through outdated or poorly written plugins and themes. A custom Next.js site has a smaller attack surface and no public admin plugins, yet it still depends on updated packages, secure forms and careful handling of secrets. Security comes from how a site is built and maintained, not from the platform name alone.",
                    da: "نه به‌طور خودکار. خود WordPress خوب نگهداری می‌شود، اما سایت‌ها از طریق افزونه‌ها و قالب‌های کهنه یا بد نوشته‌شده پرخطر می‌شوند. یک سایت سفارشی Next.js سطح حمله کوچک‌تری دارد و افزونه‌های مدیریتی عمومی ندارد، اما هنوز به بسته‌های به‌روز، فورم‌های امن و مدیریت دقیق رازها وابسته است. امنیت از چگونگی ساخت و نگهداری سایت می‌آید، نه فقط از نام پلتفرم.",
                    pa: "په اتومات ډول نه. پخپله WordPress ښه ساتل کېږي، خو سایټونه د زړو یا بد لیکل شویو پلګ انونو او قالبونو له لارې خطرناک کېږي. یو ځانګړی Next.js سایټ د برید کوچنۍ ساحه لري او عامه مدیریتي پلګ انونه نه لري، خو لا هم په تازه بستو، خوندي فورمو او د رازونو په دقیق مدیریت پورې تړلی دی. امنیت له دې راځي چې سایټ څنګه جوړ او ساتل کېږي، نه یوازې د پلاټفارم له نوم."
                }
            },
            {
                q: {
                    en: "How do I know if my website has been hacked?",
                    da: "از کجا بدانم ویب‌سایتم هک شده است؟",
                    pa: "څنګه پوه شم چې زما ویب پاڼه هک شوې؟"
                },
                a: {
                    en: "Common signs include a security warning from Google in search results or Chrome, unfamiliar pages or links appearing in Search Console, visitors being redirected to other sites, unexpected admin users, a sudden spike in spam sent from your domain, or your host suspending the account. Google Search Console's Security Issues report and regular uptime and malware monitoring help you notice problems early.",
                    da: "نشانه‌های رایج شامل هشدار امنیتی گوگل در نتایج جستجو یا Chrome، ظاهر شدن صفحات یا لینک‌های ناآشنا در Search Console، فرستاده شدن بازدیدکنندگان به سایت‌های دیگر، کاربران مدیریتی غیرمنتظره، افزایش ناگهانی اسپم ارسال‌شده از دامنه شما یا تعلیق حساب توسط هاستینگ است. گزارش Security Issues در Google Search Console و نظارت منظم بر در دسترس بودن سایت و بدافزار کمک می‌کنند مشکلات را زود ببینید.",
                    pa: "عامې نښې دا دي: د لټون په پایلو یا Chrome کې د ګوګل امنیتي خبرداری، په Search Console کې د ناآشنا پاڼو یا لینکونو ښکاره کېدل، لیدونکو ته نورو سایټونو ته لېږل، غیرمتوقع مدیریتي کاروونکي، ستاسو له ډومین څخه د لېږل شوي سپم ناڅاپي زیاتوالی، یا د هاسټینګ له خوا د حساب ځنډول. په Google Search Console کې د Security Issues راپور او د سایټ د فعالیت او بدافزار منظمه څارنه مرسته کوي چې ستونزې ژر ووینئ."
                }
            }
        ],
        category: "web-dev",
        author: "Jawad Hakimi",
        date: "2026-09-21",
        updated: "2026-09-21",
        readTime: "6 min read",
        image: "/logo.png",
        tags: ["website security checklist", "small business website security", "website security 2026", "MFA and passkeys", "website backups", "SPF DKIM DMARC", "website security Afghanistan"]
    },
    {
        id: "118",
        slug: "domain-hosting-guide-af-domain",
        title: {
            en: ".af Domain and Hosting Guide: .af, .com and What to Know",
            da: "راهنمای دامنه .af و هاستینگ: .af، .com و آنچه باید بدانید",
            pa: "د .af ډومین او هاسټینګ لارښود: .af، .com او هغه څه چې باید پوه شئ"
        },
        excerpt: {
            en: "A practical .af domain hosting guide: when to choose .af or .com, how to register and own your domain safely, and which hosting suits Afghan businesses in 2026.",
            da: "راهنمای عملی دامنه .af و هاستینگ: چه زمانی .af یا .com انتخاب کنید، چگونه دامنه را امن ثبت کنید و کدام هاستینگ برای کسب‌وکارهای افغان مناسب است.",
            pa: "د .af ډومین او هاسټینګ عملي لارښود: کله .af یا .com وټاکئ، ډومین څنګه خوندي ثبت کړئ او کوم هاسټینګ د افغان سوداګریو لپاره مناسب دی."
        },
        content: {
            en: `Choosing a .af domain and hosting comes down to who your customers are and who controls the accounts: a .af or .com.af domain signals a local Afghan business, a .com suits international or diaspora audiences, and many businesses register both. Hosting should be fast for your actual visitors, include HTTPS and backups, and be registered in the business's own name. The domain is your permanent address online, so the most important rule is simple: make sure your company, not a freelancer or former employee, owns it.

**Key Takeaways**

- Pick .af or .com.af for a mainly local audience, .com for international reach, and consider registering both to protect your name.
- Register the domain in your company's name with a company email you control, and turn on auto-renewal.
- Keep the domain, DNS, hosting and email logically separate so one problem does not take everything down.
- Choose hosting based on speed for your real visitors, security, backups and support, not just the lowest monthly price.
- A CDN in front of your site helps a lot when visitors are on slow or expensive mobile data.

**Should You Choose a .af or a .com Domain?**

Choose a .af domain if most of your customers are in Afghanistan and you want to look clearly local; choose a .com if you sell internationally or mainly serve the Afghan diaspora. Neither is better for SEO by default, but a country domain is a strong hint to Google that your site targets that country.

Common options include:

- **.af** — Afghanistan's country-code domain, short and clearly local.
- **.com.af, .org.af, .edu.af** — second-level options for companies, organisations and educational institutions.
- **.com** — the global default, widely trusted and easy for customers abroad to remember.
- **A diaspora country domain** — such as .se, .de or .ca, if your business is registered and operates in that country.

Sheen's own projects show the pattern: Etrat Elm Educational Center, which serves students in Afghanistan, uses etrat-elm.af, while Volvera, a company in Sweden, uses volvera.se and Maple Mover uses maple-mover.com. You can read how we approached the [Etrat Elm project](/portfolio/etrat-elm-educational-center) in our portfolio.

If your brand name is available, registering both the .af and the .com and redirecting one to the other protects you from copycats and confused customers.

**How Do You Register a .af Domain?**

You register a .af domain through the national registry or an accredited registrar, providing the requested contact and business details and paying the registration fee. Requirements, documents and prices for .af and its second-level variants have changed over the years, so check the current rules with the registry or your registrar before you start.

Whichever extension you choose, follow these steps:

1. **Check availability** for your preferred name and a couple of alternatives, including the .com.
2. **Keep it short and spellable.** Avoid hyphens and unusual spellings that are hard to say over the phone, and check how the name reads when transliterated from Dari or Pashto.
3. **Register in the business's name**, using an email address on your own domain or one the business permanently controls.
4. **Turn on auto-renewal** and record the expiry date in your calendar. Expired domains can be lost to someone else.
5. **Secure the registrar account** with a strong password and multi-factor authentication, and enable registrar lock where offered.
6. **Keep the login details** in the company's password manager, not in one person's head.

If an agency or developer registers the domain for you, ask for written confirmation that your business is the registrant and that you can access the account.

**What Types of Hosting Are There?**

The main types of hosting are shared hosting, virtual private servers (VPS), managed cloud or platform hosting, and dedicated servers. For most small business websites, the choice is between affordable shared hosting and a modern managed platform.

- **Shared hosting:** many sites share one server. Cheap and simple, fine for small brochure sites, but performance and security depend on your neighbours and the provider's care.
- **VPS:** your own slice of a server with more control and consistent resources. Good for growing sites, but someone has to manage updates and security.
- **Managed cloud and platform hosting:** services built for modern frameworks such as Next.js, often with global CDN, automatic HTTPS and preview deployments built in. Excellent performance with little server management.
- **Dedicated servers:** a whole machine for one customer, usually only needed for heavy, custom workloads.

The right choice depends on your traffic, your technology and who will maintain it. We cover how hosting fits into overall budgets in our guide to [website cost in Afghanistan](/blog/website-cost-afghanistan-2026).

**Where Should Your Website Be Hosted for Afghan Visitors?**

Your website should be hosted where it loads fastest for your real visitors, which for most Afghan businesses means a reliable international data centre combined with a CDN that caches content close to users. Very few large hosting providers operate data centres inside Afghanistan, so the practical question is network distance and quality, not a local server.

A CDN stores copies of your images, scripts and pages at locations around the world and serves each visitor from a nearby point. That matters for a customer in Kandahar on 3G and equally for a diaspora customer in London. Combine a CDN with optimised images and a lean site and you get most of the speed benefit, whatever the origin server's location.

If your audience is mostly abroad, for example Afghans in Europe or North America, choose a data centre near them. Our article on [websites for Afghan businesses abroad](/blog/website-for-afghan-business-abroad) covers this audience in more detail.

**What Should Good Hosting Include?**

Good hosting should include free automatic HTTPS, daily backups, good uptime, current software versions and responsive support. Before you pay, check for:

- Automatic TLS certificates and HTTP to HTTPS redirects.
- Automatic off-site backups and an easy restore process.
- Support for your technology, such as Node.js for Next.js sites or current PHP versions.
- A firewall, DDoS protection and malware scanning, or compatibility with a CDN like Cloudflare.
- Clear pricing for renewal, not just the introductory year.
- Payment methods that work for you. Paying international providers from Afghanistan can be difficult, which is one reason many businesses let their agency handle hosting and billing.

Security basics apply here too; see our [website security checklist](/blog/website-security-checklist-2026).

**Should Email Be Hosted Separately From Your Website?**

Yes, for most businesses professional email is best hosted with a dedicated email provider rather than on the same server as the website. Dedicated services offer better spam filtering and deliverability, and if the website has a problem your email keeps working.

Whatever provider you use, publish SPF, DKIM and DMARC records in your DNS so messages from your domain are trusted and harder to spoof. Use addresses like info@ and sales@ on your own domain instead of free personal accounts, because they look more professional and stay with the business when staff change.

**Work With Sheen**

Sheen helps businesses choose and register the right domain in the company's own name, set up DNS, email records and fast hosting with a CDN, and launch on Next.js. See our [web design service](/services/web-design), or [book a call](/book) and reach us at info@sheen.af or +93 784 966 018.`,
            da: `انتخاب دامنه .af و هاستینگ به این بستگی دارد که مشتریان شما چه کسانی هستند و چه کسی حساب‌ها را کنترل می‌کند: دامنه .af یا .com.af نشان‌دهنده یک کسب‌وکار محلی افغان است، .com برای مخاطبان بین‌المللی یا مهاجر مناسب است و بسیاری از کسب‌وکارها هر دو را ثبت می‌کنند. هاستینگ باید برای بازدیدکنندگان واقعی شما سریع باشد، HTTPS و پشتیبان‌گیری داشته باشد و به نام خود کسب‌وکار ثبت شده باشد. دامنه آدرس دائمی آنلاین شماست، پس مهم‌ترین قاعده ساده است: مطمئن شوید شرکت شما، نه یک فریلنسر یا کارمند سابق، مالک آن است.

**نکات کلیدی**

- برای مخاطبان عمدتاً محلی .af یا .com.af، برای دسترسی بین‌المللی .com را انتخاب کنید و برای محافظت از نام خود ثبت هر دو را در نظر بگیرید.
- دامنه را به نام شرکت و با ایمیل شرکتی که کنترلش با شماست ثبت کنید و تمدید خودکار را فعال کنید.
- دامنه، DNS، هاستینگ و ایمیل را به شکل منطقی جدا نگه دارید تا یک مشکل همه چیز را از کار نیندازد.
- هاستینگ را بر اساس سرعت برای بازدیدکنندگان واقعی، امنیت، پشتیبان‌گیری و پشتیبانی انتخاب کنید، نه فقط پایین‌ترین قیمت ماهانه.
- یک CDN جلوی سایت شما وقتی بازدیدکنندگان انترنت موبایل کند یا گران دارند بسیار کمک می‌کند.

**دامنه .af انتخاب کنیم یا .com؟**

اگر بیشتر مشتریان شما در افغانستان هستند و می‌خواهید آشکارا محلی به نظر برسید دامنه .af انتخاب کنید؛ اگر به‌طور بین‌المللی می‌فروشید یا عمدتاً به افغان‌های مهاجر خدمت می‌کنید .com انتخاب کنید. هیچ‌کدام به‌طور پیش‌فرض برای سئو بهتر نیست، اما دامنه کشوری یک نشانه قوی به گوگل است که سایت شما آن کشور را هدف دارد.

گزینه‌های رایج:

- **.af** — دامنه کشوری افغانستان، کوتاه و آشکارا محلی.
- **.com.af، .org.af، .edu.af** — گزینه‌های سطح دوم برای شرکت‌ها، سازمان‌ها و نهادهای آموزشی.
- **.com** — گزینه پیش‌فرض جهانی، مورد اعتماد گسترده و آسان برای به خاطر سپردن مشتریان خارج از کشور.
- **دامنه کشور محل اقامت** — مانند .se، .de یا .ca، اگر کسب‌وکار شما در آن کشور ثبت شده و فعالیت دارد.

پروژه‌های خود شین این الگو را نشان می‌دهند: مرکز آموزشی عترت علم که به شاگردان در افغانستان خدمت می‌کند از etrat-elm.af استفاده می‌کند، در حالی که Volvera، یک شرکت در سویدن، از volvera.se و Maple Mover از maple-mover.com استفاده می‌کنند. می‌توانید در نمونه‌کارهای ما بخوانید که چگونه با [پروژه عترت علم](/portfolio/etrat-elm-educational-center) کار کردیم.

اگر نام برند شما آزاد است، ثبت هر دو .af و .com و ریدایرکت یکی به دیگری شما را از کپی‌کاران و سردرگمی مشتریان محافظت می‌کند.

**چگونه یک دامنه .af ثبت کنیم؟**

دامنه .af را از طریق اداره ثبت ملی یا یک ثبت‌کننده معتبر، با ارائه جزئیات تماس و کسب‌وکار درخواست‌شده و پرداخت فیس ثبت، ثبت می‌کنید. شرایط، اسناد و قیمت‌های .af و گونه‌های سطح دوم آن در طول سال‌ها تغییر کرده‌اند، پس پیش از شروع، قوانین فعلی را از اداره ثبت یا ثبت‌کننده خود بپرسید.

هر پسوندی را که انتخاب می‌کنید، این مراحل را دنبال کنید:

1. **آزاد بودن نام را بررسی کنید**، برای نام دلخواه و چند گزینه دیگر، از جمله .com.
2. **کوتاه و آسان‌نویس نگهش دارید.** از خط تیره و املاهای غیرعادی که پشت تیلفون گفتنشان سخت است پرهیز کنید و ببینید نام هنگام نوشتن از دری یا پشتو به حروف لاتین چگونه خوانده می‌شود.
3. **به نام کسب‌وکار ثبت کنید**، با آدرس ایمیلی روی دامنه خودتان یا ایمیلی که کسب‌وکار برای همیشه کنترل می‌کند.
4. **تمدید خودکار را فعال کنید** و تاریخ انقضا را در تقویم خود ثبت کنید. دامنه‌های منقضی‌شده ممکن است به دست کس دیگری بیفتند.
5. **حساب ثبت‌کننده را امن کنید** با رمز قوی و تأیید چندمرحله‌ای و هر جا ممکن است قفل ثبت‌کننده (registrar lock) را فعال کنید.
6. **جزئیات ورود را نگه دارید** در مدیر رمز شرکت، نه فقط در ذهن یک نفر.

اگر یک شرکت یا توسعه‌دهنده دامنه را برای شما ثبت می‌کند، تأیید کتبی بخواهید که کسب‌وکار شما مالک ثبت‌شده است و به حساب دسترسی دارید.

**چه نوع هاستینگ‌هایی وجود دارد؟**

انواع اصلی هاستینگ عبارت‌اند از هاستینگ اشتراکی، سرور مجازی خصوصی (VPS)، هاستینگ کلاود یا پلتفرم مدیریت‌شده و سرورهای اختصاصی. برای بیشتر ویب‌سایت‌های کسب‌وکارهای کوچک، انتخاب میان هاستینگ اشتراکی ارزان و یک پلتفرم مدیریت‌شده مدرن است.

- **هاستینگ اشتراکی:** چندین سایت یک سرور را شریک هستند. ارزان و ساده، برای سایت‌های معرفی کوچک خوب است، اما عملکرد و امنیت به همسایگان و دقت ارائه‌دهنده بستگی دارد.
- **VPS:** بخش اختصاصی شما از یک سرور با کنترل بیشتر و منابع ثابت. برای سایت‌های در حال رشد خوب است، اما کسی باید به‌روزرسانی و امنیت را مدیریت کند.
- **هاستینگ کلاود و پلتفرم مدیریت‌شده:** خدماتی که برای فریم‌ورک‌های مدرن مانند Next.js ساخته شده‌اند و اغلب CDN جهانی، HTTPS خودکار و نسخه‌های پیش‌نمایش را از قبل دارند. عملکرد عالی با مدیریت سرور اندک.
- **سرورهای اختصاصی:** یک ماشین کامل برای یک مشتری که معمولاً فقط برای کارهای سنگین و سفارشی لازم است.

انتخاب درست به ترافیک، فناوری و کسی که سایت را نگهداری می‌کند بستگی دارد. در راهنمای ما درباره [هزینه ویب‌سایت در افغانستان](/blog/website-cost-afghanistan-2026) توضیح داده‌ایم که هاستینگ چگونه در بودجه کلی جا می‌گیرد.

**ویب‌سایت برای بازدیدکنندگان افغان کجا هاست شود؟**

ویب‌سایت شما باید جایی هاست شود که برای بازدیدکنندگان واقعی سریع‌تر بارگذاری شود؛ این برای بیشتر کسب‌وکارهای افغان یعنی یک دیتاسنتر بین‌المللی قابل اعتماد همراه با یک CDN که محتوا را نزدیک کاربران ذخیره می‌کند. ارائه‌دهندگان بزرگ هاستینگ بسیار کمی دیتاسنتر داخل افغانستان دارند، پس سؤال عملی فاصله و کیفیت شبکه است، نه سرور محلی.

CDN نسخه‌هایی از عکس‌ها، اسکریپت‌ها و صفحات شما را در نقاط مختلف جهان نگه می‌دارد و هر بازدیدکننده را از نزدیک‌ترین نقطه خدمت می‌کند. این برای مشتری در قندهار با 3G و به همان اندازه برای مشتری مهاجر در لندن مهم است. CDN را با عکس‌های بهینه و یک سایت سبک ترکیب کنید تا بیشتر فایده سرعت را بگیرید، هر جا که سرور اصلی باشد.

اگر مخاطبان شما بیشتر خارج از کشور هستند، مثلاً افغان‌ها در اروپا یا امریکای شمالی، دیتاسنتری نزدیک آن‌ها انتخاب کنید. مقاله ما درباره [ویب‌سایت برای کسب‌وکارهای افغان در خارج](/blog/website-for-afghan-business-abroad) این مخاطبان را با جزئیات بیشتر بررسی می‌کند.

**هاستینگ خوب چه چیزهایی باید داشته باشد؟**

هاستینگ خوب باید HTTPS خودکار رایگان، پشتیبان‌گیری روزانه، در دسترس بودن بالا، نسخه‌های به‌روز نرم‌افزار و پشتیبانی پاسخگو داشته باشد. پیش از پرداخت این موارد را بررسی کنید:

- گواهی‌های TLS خودکار و ریدایرکت HTTP به HTTPS.
- پشتیبان‌گیری خودکار در جای جداگانه و روند ساده بازگردانی.
- پشتیبانی از فناوری شما، مانند Node.js برای سایت‌های Next.js یا نسخه‌های فعلی PHP.
- فایروال، محافظت DDoS و اسکن بدافزار، یا سازگاری با CDNی مانند Cloudflare.
- قیمت روشن برای تمدید، نه فقط برای سال اول.
- روش‌های پرداختی که برای شما کار کند. پرداخت به ارائه‌دهندگان بین‌المللی از افغانستان می‌تواند دشوار باشد و این یکی از دلایلی است که بسیاری از کسب‌وکارها هاستینگ و پرداخت آن را به شرکت طراحی خود می‌سپارند.

اصول امنیتی اینجا هم صدق می‌کند؛ [چک‌لیست امنیت ویب‌سایت](/blog/website-security-checklist-2026) ما را ببینید.

**آیا ایمیل باید جدا از ویب‌سایت هاست شود؟**

بله، برای بیشتر کسب‌وکارها بهتر است ایمیل حرفه‌ای نزد یک ارائه‌دهنده اختصاصی ایمیل هاست شود، نه روی همان سرور ویب‌سایت. خدمات اختصاصی فیلتر اسپم و رسیدن بهتر ایمیل را ارائه می‌دهند و اگر ویب‌سایت مشکل پیدا کند، ایمیل شما به کار ادامه می‌دهد.

هر ارائه‌دهنده‌ای که استفاده می‌کنید، رکوردهای SPF، DKIM و DMARC را در DNS منتشر کنید تا پیام‌های دامنه شما قابل اعتماد باشند و جعل آن‌ها سخت‌تر شود. از آدرس‌هایی مانند info@ و sales@ روی دامنه خودتان به جای حساب‌های شخصی رایگان استفاده کنید، چون حرفه‌ای‌تر به نظر می‌رسند و با تغییر کارمندان نزد کسب‌وکار می‌مانند.

**با شین کار کنید**

شین به کسب‌وکارها کمک می‌کند دامنه درست را انتخاب و به نام خود شرکت ثبت کنند، DNS، رکوردهای ایمیل و هاستینگ سریع با CDN را تنظیم کنند و سایت را با Next.js راه‌اندازی کنند. [خدمات طراحی ویب‌سایت](/services/web-design) ما را ببینید، یا [یک جلسه رزرو کنید](/book) و از طریق info@sheen.af یا +93 784 966 018 با ما در تماس شوید.`,
            pa: `د .af ډومین او هاسټینګ انتخاب په دې پورې اړه لري چې ستاسو پېرودونکي څوک دي او حسابونه څوک کنټرولوي: .af یا .com.af ډومین د یوې محلي افغان سوداګرۍ نښه ده، .com د نړیوالو یا مهاجرو لیدونکو لپاره مناسب دی، او ډېری سوداګرۍ دواړه ثبتوي. هاسټینګ باید ستاسو د ریښتینو لیدونکو لپاره ګړندی وي، HTTPS او بیک اپ ولري، او د پخپله سوداګرۍ په نوم ثبت شوی وي. ډومین ستاسو دایمي آنلاین پته ده، نو تر ټولو مهمه قاعده ساده ده: ډاډ ترلاسه کړئ چې ستاسو شرکت، نه یو فریلانسر یا پخوانی کارکوونکی، د هغه مالک دی.

**مهم ټکي**

- د ډېری محلي لیدونکو لپاره .af یا .com.af، د نړیوال لاسرسي لپاره .com وټاکئ، او د خپل نوم د ساتنې لپاره د دواړو ثبت په پام کې ونیسئ.
- ډومین د شرکت په نوم او د شرکت د هغه برېښنالیک سره ثبت کړئ چې تاسو یې کنټرولوئ، او اتومات نوي کول فعال کړئ.
- ډومین، DNS، هاسټینګ او برېښنالیک په منطقي ډول جلا وساتئ ترڅو یوه ستونزه هر څه له کاره ونه غورځوي.
- هاسټینګ د ریښتینو لیدونکو لپاره د سرعت، امنیت، بیک اپ او ملاتړ پر بنسټ وټاکئ، نه یوازې د میاشتنۍ ټیټې بیې پر بنسټ.
- ستاسو د سایټ مخې ته CDN ډېره مرسته کوي کله چې لیدونکي ورو یا ګران موبایل انټرنېټ لري.

**.af ډومین وټاکو که .com؟**

که ستاسو ډېری پېرودونکي په افغانستان کې وي او غواړئ په ښکاره ډول محلي ښکاره شئ، .af ډومین وټاکئ؛ که په نړیواله کچه پلورئ یا ډېری د مهاجرو افغانانو خدمت کوئ، .com وټاکئ. هېڅ یو په اصل کې د SEO لپاره غوره نه دی، خو هېوادنی ډومین ګوګل ته قوي نښه ده چې ستاسو سایټ هماغه هېواد په نښه کوي.

عام انتخابونه:

- **.af** — د افغانستان هېوادنی ډومین، لنډ او په ښکاره ډول محلي.
- **.com.af، .org.af، .edu.af** — د شرکتونو، سازمانونو او تعلیمي بنسټونو لپاره دویمه کچه انتخابونه.
- **.com** — نړیوال اصلي انتخاب، په پراخه کچه د باور وړ او له هېواده بهر پېرودونکو لپاره د یادولو اسانه.
- **د مېشتېدو هېواد ډومین** — لکه .se، .de یا .ca، که ستاسو سوداګري په هغه هېواد کې ثبت او فعاله وي.

د شین خپلې پروژې دا بېلګه ښيي: د عترت علم تعلیمي مرکز چې په افغانستان کې زده کوونکو ته خدمت کوي etrat-elm.af کاروي، پداسې حال کې چې Volvera، په سویډن کې یو شرکت، volvera.se او Maple Mover maple-mover.com کاروي. تاسو کولی شئ زموږ په پورټفولیو کې ولولئ چې څنګه مو د [عترت علم پروژې](/portfolio/etrat-elm-educational-center) سره کار وکړ.

که ستاسو د برانډ نوم خالي وي، د .af او .com دواړو ثبتول او د یوه بل ته ریډایرکټ کول تاسو له کاپي کوونکو او د پېرودونکو له ګډوډۍ ساتي.

**.af ډومین څنګه ثبت کړو؟**

.af ډومین د ملي ثبت ادارې یا یوه باوري ثبتوونکي له لارې، د غوښتل شویو اړیکو او سوداګرۍ جزئیاتو په ورکولو او د ثبت فیس په ورکولو ثبتوئ. د .af او د هغې د دویمې کچې ډولونو شرطونه، اسناد او بیې د کلونو په اوږدو کې بدلې شوې دي، نو له پیل مخکې اوسني قواعد له ثبت ادارې یا خپل ثبتوونکي وپوښتئ.

هر پسوند چې وټاکئ، دا ګامونه تعقیب کړئ:

1. **د نوم شتون وګورئ**، د خپل خوښ نوم او څو نورو انتخابونو لپاره، د .com په ګډون.
2. **لنډ او د لیکلو اسانه یې وساتئ.** له خط تیره او غیرعادي املا ډډه وکړئ چې په تلیفون یې ویل سخت وي، او وګورئ چې نوم کله له دري یا پښتو لاتیني تورو ته اړول کېږي څنګه لوستل کېږي.
3. **د سوداګرۍ په نوم یې ثبت کړئ**، د داسې برېښنالیک سره چې ستاسو په خپل ډومین وي یا سوداګري یې د تل لپاره کنټرولوي.
4. **اتومات نوي کول فعال کړئ** او د پای نېټه په خپل جنتري کې ثبت کړئ. پای ته رسېدلي ډومینونه ښايي بل چا ته ورسېږي.
5. **د ثبتوونکي حساب خوندي کړئ** د قوي پټنوم او څو ګامیز تایید سره، او هر چېرې چې شونې وي registrar lock فعال کړئ.
6. **د ننوتلو جزئیات وساتئ** د شرکت په پټنوم مدیر کې، نه یوازې د یوه کس په ذهن کې.

که کوم شرکت یا پراختیا ورکوونکی ستاسو لپاره ډومین ثبتوي، لیکلی تایید وغواړئ چې ستاسو سوداګري ثبت شوې مالکه ده او حساب ته لاسرسی لرئ.

**د هاسټینګ کوم ډولونه شته؟**

د هاسټینګ اصلي ډولونه دا دي: ګډ هاسټینګ، مجازي شخصي سرور (VPS)، مدیریت شوی کلاوډ یا پلاټفارم هاسټینګ، او ځانګړي سرورونه. د ډېری کوچنیو سوداګریزو ویب پاڼو لپاره انتخاب د ارزانه ګډ هاسټینګ او یوه عصري مدیریت شوي پلاټفارم ترمنځ دی.

- **ګډ هاسټینګ:** ډېر سایټونه یو سرور شریکوي. ارزانه او ساده، د کوچنیو معرفي سایټونو لپاره ښه، خو فعالیت او امنیت په ګاونډیانو او د برابروونکي په پاملرنې پورې اړه لري.
- **VPS:** د یوه سرور ستاسو ځانګړې برخه د ډېر کنټرول او ثابتو سرچینو سره. د وده کوونکو سایټونو لپاره ښه، خو یو څوک باید تازه کول او امنیت اداره کړي.
- **مدیریت شوی کلاوډ او پلاټفارم هاسټینګ:** هغه خدمتونه چې د عصري فریم ورکونو لکه Next.js لپاره جوړ شوي او اکثراً نړیوال CDN، اتومات HTTPS او د مخکتنې نسخې لري. د لږ سرور مدیریت سره عالي فعالیت.
- **ځانګړي سرورونه:** د یوه پېرودونکي لپاره بشپړ ماشین چې معمولاً یوازې د درنو او ځانګړو کارونو لپاره اړین وي.

سم انتخاب ستاسو په ترافیک، ټکنالوژۍ او هغه چا پورې اړه لري چې سایټ ساتي. زموږ په لارښود کې د [افغانستان کې د ویب پاڼې لګښت](/blog/website-cost-afghanistan-2026) په اړه تشریح شوي چې هاسټینګ په ټولیزه بودیجه کې څنګه ځای نیسي.

**د افغان لیدونکو لپاره ویب پاڼه چېرې هاسټ شي؟**

ستاسو ویب پاڼه باید هلته هاسټ شي چې د ریښتینو لیدونکو لپاره تر ټولو ګړندۍ بار شي؛ د ډېری افغان سوداګریو لپاره دا معنا لري یو باوري نړیوال ډېټا سنټر د یوه CDN سره چې منځپانګه کاروونکو ته نږدې خوندي کوي. د هاسټینګ ډېر لږ لوی برابروونکي په افغانستان کې دننه ډېټا سنټر لري، نو عملي پوښتنه د شبکې واټن او کیفیت دی، نه محلي سرور.

CDN ستاسو د انځورونو، سکرېپټونو او پاڼو نسخې د نړۍ په بېلابېلو ځایونو کې ساتي او هر لیدونکي ته له نږدې ټکي خدمت کوي. دا په کندهار کې د 3G لرونکي پېرودونکي لپاره او په ورته کچه په لندن کې د مهاجر پېرودونکي لپاره مهم دی. CDN د غوره شویو انځورونو او سپک سایټ سره یوځای کړئ ترڅو د سرعت ډېره ګټه ترلاسه کړئ، هر چېرې چې اصلي سرور وي.

که ستاسو لیدونکي ډېری له هېواده بهر وي، د بېلګې په توګه په اروپا یا شمالي امریکا کې افغانان، دوی ته نږدې ډېټا سنټر وټاکئ. زموږ مقاله د [بهر کې د افغان سوداګریو لپاره ویب پاڼې](/blog/website-for-afghan-business-abroad) په اړه دا لیدونکي په ډېر تفصیل څېړي.

**ښه هاسټینګ باید څه ولري؟**

ښه هاسټینګ باید وړیا اتومات HTTPS، ورځنی بیک اپ، لوړ فعال وخت، تازه سافټویر نسخې او ځواب ویونکی ملاتړ ولري. له تادیې مخکې دا وګورئ:

- اتومات TLS سندونه او له HTTP څخه HTTPS ته ریډایرکټ.
- په جلا ځای کې اتومات بیک اپ او د بېرته راګرځولو اسانه بهیر.
- ستاسو د ټکنالوژۍ ملاتړ، لکه د Next.js سایټونو لپاره Node.js یا د PHP اوسنۍ نسخې.
- فایروال، د DDoS ساتنه او د بدافزار سکین، یا د Cloudflare په څېر CDN سره سمون.
- د نوي کولو لپاره روښانه بیه، نه یوازې د لومړي کال لپاره.
- د تادیې داسې لارې چې ستاسو لپاره کار وکړي. له افغانستان څخه نړیوالو برابروونکو ته تادیه ستونزمنه کېدای شي، او دا یو له هغو لاملونو دی چې ډېری سوداګرۍ هاسټینګ او تادیه یې خپل ډیزاین شرکت ته سپاري.

امنیتي اصول دلته هم پلي کېږي؛ زموږ [د ویب پاڼې د امنیت چک لېست](/blog/website-security-checklist-2026) وګورئ.

**ایا برېښنالیک باید له ویب پاڼې جلا هاسټ شي؟**

هو، د ډېری سوداګریو لپاره غوره ده چې مسلکي برېښنالیک د یوه ځانګړي برېښنالیک برابروونکي سره هاسټ شي، نه د ویب پاڼې په هماغه سرور. ځانګړي خدمتونه غوره سپم فلټر او د برېښنالیک غوره رسېدل وړاندې کوي، او که ویب پاڼه ستونزه پیدا کړي، ستاسو برېښنالیک کار ته دوام ورکوي.

هر برابروونکی چې کاروئ، په DNS کې د SPF، DKIM او DMARC ریکارډونه خپاره کړئ ترڅو ستاسو د ډومین پیغامونه د باور وړ وي او جعل یې ستونزمن شي. په خپل ډومین د info@ او sales@ په څېر پتې وکاروئ نه وړیا شخصي حسابونه، ځکه چې ډېر مسلکي ښکاري او د کارکوونکو د بدلون سره د سوداګرۍ سره پاتې کېږي.

**له شین سره کار وکړئ**

شین له سوداګریو سره مرسته کوي چې سم ډومین وټاکي او د شرکت په خپل نوم یې ثبت کړي، DNS، د برېښنالیک ریکارډونه او د CDN سره ګړندی هاسټینګ تنظیم کړي، او سایټ په Next.js پیل کړي. زموږ [د ویب ډیزاین خدمت](/services/web-design) وګورئ، یا [یوه ناسته بک کړئ](/book) او د info@sheen.af یا +93 784 966 018 له لارې موږ سره اړیکه ونیسئ.`
        },
        faqs: [
            {
                q: {
                    en: "Does a .af domain help with SEO in Afghanistan?",
                    da: "آیا دامنه .af در سئوی افغانستان کمک می‌کند؟",
                    pa: "ایا .af ډومین په افغانستان کې د SEO سره مرسته کوي؟"
                },
                a: {
                    en: "A .af domain tells Google your site is aimed at Afghanistan, which can help with local relevance, but it is only one signal among many. Content in Dari and Pashto, a complete Google Business Profile, local links and a fast site matter far more. A .com can rank well in Afghanistan too, and a .af is less suited if you mainly target customers abroad.",
                    da: "دامنه .af به گوگل می‌گوید سایت شما برای افغانستان است که می‌تواند به ارتباط محلی کمک کند، اما فقط یکی از نشانه‌های بسیار است. محتوا به دری و پشتو، یک Google Business Profile کامل، لینک‌های محلی و سایت سریع بسیار مهم‌تر هستند. یک .com هم می‌تواند در افغانستان رتبه خوب بگیرد و اگر عمدتاً مشتریان خارج از کشور را هدف دارید، .af کمتر مناسب است.",
                    pa: ".af ډومین ګوګل ته وايي چې ستاسو سایټ د افغانستان لپاره دی، چې له محلي اړوندتیا سره مرسته کولی شي، خو دا د ډېرو نښو له منځه یوازې یوه ده. په دري او پښتو منځپانګه، بشپړ Google Business Profile، محلي لینکونه او ګړندی سایټ ډېر مهم دي. یو .com هم په افغانستان کې ښه درجه نیولی شي، او که ډېری له هېواده بهر پېرودونکي په نښه کوئ، .af لږ مناسب دی."
                }
            },
            {
                q: {
                    en: "Who should own my business domain name?",
                    da: "مالک نام دامنه کسب‌وکار من چه کسی باید باشد؟",
                    pa: "زما د سوداګرۍ د ډومین مالک باید څوک وي؟"
                },
                a: {
                    en: "Your business should be the registered owner, with the registrar account under a company email address that the business controls permanently. Agencies and developers can manage the technical side, but they should not be the registrant. If a freelancer registered your domain in their name, ask them to transfer it now, while the relationship is good, rather than during a dispute.",
                    da: "کسب‌وکار شما باید مالک ثبت‌شده باشد و حساب ثبت‌کننده زیر یک ایمیل شرکتی باشد که کسب‌وکار برای همیشه کنترل می‌کند. شرکت‌ها و توسعه‌دهندگان می‌توانند بخش فنی را مدیریت کنند، اما نباید ثبت‌کننده باشند. اگر یک فریلنسر دامنه شما را به نام خود ثبت کرده، همین حالا که رابطه خوب است از او بخواهید آن را انتقال دهد، نه در زمان اختلاف.",
                    pa: "ستاسو سوداګري باید ثبت شوې مالکه وي، او د ثبتوونکي حساب د شرکت د داسې برېښنالیک لاندې وي چې سوداګري یې د تل لپاره کنټرولوي. شرکتونه او پراختیا ورکوونکي کولی شي تخنیکي برخه اداره کړي، خو باید ثبتوونکي نه وي. که یوه فریلانسر ستاسو ډومین په خپل نوم ثبت کړی وي، همدا اوس چې اړیکه ښه ده ترې وغواړئ چې ولېږدوي، نه د شخړې پر مهال."
                }
            },
            {
                q: {
                    en: "Can I move my website to a new hosting provider without downtime?",
                    da: "آیا می‌توانم ویب‌سایتم را بدون قطعی به هاستینگ جدید منتقل کنم؟",
                    pa: "ایا کولی شم خپله ویب پاڼه پرته له بندېدو نوي هاسټینګ ته ولېږدوم؟"
                },
                a: {
                    en: "Usually, yes. Set up and test the site on the new host first, lower the DNS TTL a day or two in advance, then switch the DNS records so visitors move over gradually while both servers still work. Keep the old hosting active for a few days, check email records separately, and confirm HTTPS works on the new server before cancelling the old plan.",
                    da: "معمولاً بله. اول سایت را روی هاست جدید تنظیم و آزمایش کنید، یک یا دو روز پیش‌تر TTL رکوردهای DNS را کم کنید، سپس رکوردهای DNS را تغییر دهید تا بازدیدکنندگان به تدریج منتقل شوند در حالی که هر دو سرور هنوز کار می‌کنند. هاستینگ قدیمی را چند روز فعال نگه دارید، رکوردهای ایمیل را جداگانه بررسی کنید و پیش از لغو پلان قدیمی مطمئن شوید HTTPS روی سرور جدید کار می‌کند.",
                    pa: "معمولاً هو. لومړی سایټ په نوي هاسټ جوړ او وازمویئ، یوه یا دوه ورځې مخکې د DNS ریکارډونو TTL کم کړئ، بیا د DNS ریکارډونه بدل کړئ ترڅو لیدونکي ورو ورو ولېږدول شي پداسې حال کې چې دواړه سرورونه لا کار کوي. زوړ هاسټینګ څو ورځې فعال وساتئ، د برېښنالیک ریکارډونه جلا وګورئ او د زاړه پلان له لغوه مخکې ډاډ ترلاسه کړئ چې HTTPS په نوي سرور کار کوي."
                }
            },
            {
                q: {
                    en: "Should my business email use the same domain as my website?",
                    da: "آیا ایمیل کسب‌وکار من باید همان دامنه ویب‌سایت را داشته باشد؟",
                    pa: "ایا زما د سوداګرۍ برېښنالیک باید د ویب پاڼې هماغه ډومین ولري؟"
                },
                a: {
                    en: "Yes. An address like info@yourbusiness.af looks more professional than a free personal account, builds trust with customers and partners, and stays with the company when staff change. The domain can point the website to one host and the email to a dedicated email provider at the same time, as long as the DNS records, including SPF, DKIM and DMARC, are set correctly.",
                    da: "بله. آدرسی مانند info@yourbusiness.af از یک حساب شخصی رایگان حرفه‌ای‌تر به نظر می‌رسد، اعتماد مشتریان و همکاران را جلب می‌کند و با تغییر کارمندان نزد شرکت می‌ماند. دامنه می‌تواند همزمان ویب‌سایت را به یک هاست و ایمیل را به یک ارائه‌دهنده اختصاصی ایمیل وصل کند، به شرطی که رکوردهای DNS از جمله SPF، DKIM و DMARC درست تنظیم شده باشند.",
                    pa: "هو. د info@yourbusiness.af په څېر پته له وړیا شخصي حساب څخه ډېره مسلکي ښکاري، د پېرودونکو او همکارانو باور جلبوي، او د کارکوونکو د بدلون سره له شرکت سره پاتې کېږي. ډومین کولی شي په ورته وخت کې ویب پاڼه یوه هاسټ ته او برېښنالیک یوه ځانګړي برېښنالیک برابروونکي ته وښيي، په دې شرط چې د DNS ریکارډونه، د SPF، DKIM او DMARC په ګډون، سم تنظیم شوي وي."
                }
            }
        ],
        category: "web-dev",
        author: "Jawad Hakimi",
        date: "2026-09-18",
        updated: "2026-09-18",
        readTime: "6 min read",
        image: "/logo.png",
        tags: [".af domain hosting", ".af domain", ".com.af domain registration", "web hosting Afghanistan", "choose domain name", "hosting for Next.js", "CDN for slow internet"]
    },
    {
        id: "117",
        slug: "website-maintenance-plan",
        title: {
            en: "Website Maintenance: What It Includes and Why It Matters",
            da: "نگهداری ویب‌سایت: شامل چه چیزهایی است و چرا مهم است",
            pa: "د ویب پاڼې ساتنه: څه پکې شامل دي او ولې مهمه ده"
        },
        excerpt: {
            en: "What website maintenance includes in 2026: updates, backups, security, speed, SEO and content checks, plus a simple weekly, monthly and yearly plan to follow.",
            da: "نگهداری ویب‌سایت در 2026 شامل چه چیزهایی است: به‌روزرسانی، پشتیبان‌گیری، امنیت، سرعت، سئو و محتوا، همراه با یک برنامه ساده هفتگی، ماهانه و سالانه.",
            pa: "په 2026 کې د ویب پاڼې ساتنه څه پکې لري: تازه کول، بیک اپ، امنیت، سرعت، SEO او منځپانګه، او یو ساده اونیز، میاشتنی او کلنی پلان."
        },
        content: {
            en: `Website maintenance is the routine work that keeps a website secure, fast, accurate and visible after launch: software updates, backups, security monitoring, performance checks, SEO health checks, content updates and renewing the domain and certificates on time. A website is not a one-time project like printing a brochure. Without maintenance it slowly becomes slower, less secure and out of date, and the problems usually surface at the worst moment, such as during a campaign or when a customer is trying to book.

**Key Takeaways**

- Maintenance covers six areas: updates, backups, security, performance, SEO health and content.
- Most tasks are small but must happen on a schedule: weekly, monthly, quarterly and yearly.
- Neglected sites are more likely to be hacked, lose rankings, show wrong prices or simply go offline when a domain expires.
- Decide clearly who is responsible: your own team, your agency, or a mix of both.
- A maintenance log and a shared account list make handovers and emergencies much easier.

**What Does Website Maintenance Include?**

Website maintenance includes keeping the software updated, backing up the site, monitoring security and uptime, checking speed, protecting SEO and keeping content accurate. Each area prevents a different kind of failure.

- **Software updates.** CMS cores, plugins, themes, frameworks such as Next.js and the npm packages they depend on. Updates close security holes and keep things compatible with new browsers.
- **Backups.** Automatic, off-site copies of files and database, plus periodic test restores.
- **Security monitoring.** Watching for malware, suspicious logins, unexpected admin users and Google security warnings. Our [website security checklist](/blog/website-security-checklist-2026) covers the protections to have in place.
- **Uptime and renewals.** Monitoring that the site is online, and making sure the domain, hosting and TLS certificate renew on time.
- **Performance.** Checking Core Web Vitals, image sizes and page weight so the site stays fast on mobile data.
- **SEO health.** Reviewing Google Search Console for crawl errors, indexing problems and broken links.
- **Content.** Updating prices, opening hours, staff, services, photos and blog posts so customers are never misled.
- **Forms and integrations.** Testing that contact forms, booking systems, WhatsApp buttons, payments and analytics still work.

**Why Does Website Maintenance Matter?**

Website maintenance matters because small, unattended issues turn into expensive emergencies, lost customers and lost search visibility. Most of the damage is invisible until it is serious.

Consider what typically goes wrong on an unmaintained site:

- A contact form silently stops sending emails, and enquiries are lost for weeks before anyone notices.
- An outdated plugin is exploited and the site starts redirecting visitors to spam.
- The domain expires because the renewal reminder went to a former employee's inbox.
- Google flags pages as slow or broken, and rankings drift downward.
- Prices, phone numbers or services shown on the site are months out of date, which erodes trust.

For businesses in Afghanistan with customers reaching them mainly through mobile phones, a slow or broken site often means the customer simply calls a competitor. For diaspora-facing businesses, an outdated site looks unprofessional next to well-maintained local competitors in Europe or North America.

**How Often Should You Do Each Maintenance Task?**

Do quick checks weekly, routine updates and reviews monthly, deeper reviews quarterly, and strategic tasks yearly. This schedule works for most small and medium business websites:

**Weekly:** a few minutes of quick checks.

- Confirm the site is online and key pages load correctly on a phone.
- Submit a test enquiry through the main contact or booking form.
- Check that backups ran successfully.
- Review any security or uptime alerts.

**Monthly:** routine updates and reviews.

1. Apply updates to the CMS, plugins, framework and packages, testing major updates on a staging copy first.
2. Review Google Search Console for errors, coverage problems and security issues. Our [Google Search Console beginner's guide](/blog/google-search-console-beginners-guide) explains each report.
3. Check analytics for unusual drops in traffic or conversions.
4. Fix broken links and update any outdated content, prices or contact details.
5. Remove unused plugins, users and files.

**Quarterly:** deeper checks.

1. Test a full restore from backup.
2. Run a speed audit and review Core Web Vitals, focusing on mobile. See our guide to [Core Web Vitals and INP](/blog/core-web-vitals-inp-2026) for what the numbers mean.
3. Review user accounts and permissions, and remove anyone who no longer needs access.
4. Check every form, integration, payment flow and tracking tag end to end.
5. Refresh your most important service pages and older blog posts.

**Yearly:** planning and renewals.

- Confirm domain, hosting and certificate renewal dates and payment details.
- Review whether the design, content and technology still fit your business goals.
- Update legal pages such as privacy policy and terms.
- Plan larger improvements, new sections or a redesign if needed.

**Who Should Maintain Your Website?**

Your website should be maintained by whoever can do it consistently and safely: your own staff for content, and a developer or agency for technical updates, security and backups. Splitting responsibility this way works for most small businesses.

Staff who know the business are best placed to update prices, news and photos, especially if the site has an easy content editor in Dari, Pashto and English. Technical updates are different: a careless plugin or package update can break a booking form or checkout, so they should be done by someone who can test properly and roll back if needed.

Whichever split you choose, write it down. A one-page maintenance plan should list who does each task, how often, where the account logins are kept, and who to contact in an emergency.

**What Should a Maintenance Agreement Include?**

A good maintenance agreement should state exactly which tasks are included, how often they happen, how quickly urgent problems are handled, and what counts as extra work. Vague agreements lead to disappointment on both sides.

Look for clear answers to these questions:

- Which updates are included, and are they tested on staging first?
- How often are backups taken, where are they stored, and how quickly can the site be restored?
- What monitoring is in place, and who is alerted when the site goes down?
- How many hours of content changes or small fixes are included each month?
- What is the expected response time for an urgent issue such as a hacked or offline site?
- Do you receive a short monthly report of what was done?
- Who owns the domain, hosting and code, and will you get full access if you leave?

When it is time for bigger changes rather than routine care, plan them carefully; our guide on [redesigning a website without losing SEO](/blog/website-redesign-without-losing-seo) covers that process.

**Work With Sheen**

Sheen maintains the websites we build and can take over care of existing sites, handling updates, backups, security monitoring, speed and SEO health checks in English, Dari and Pashto. Learn more about our [web design service](/services/web-design), or [contact us](/contact) at info@sheen.af or +93 784 966 018 for a maintenance quote.`,
            da: `نگهداری ویب‌سایت کار منظمی است که ویب‌سایت را پس از راه‌اندازی امن، سریع، دقیق و قابل دیدن نگه می‌دارد: به‌روزرسانی نرم‌افزار، پشتیبان‌گیری، نظارت امنیتی، بررسی سرعت، بررسی سلامت سئو، به‌روزرسانی محتوا و تمدید به‌موقع دامنه و گواهی‌ها. ویب‌سایت یک پروژه یک‌باره مانند چاپ یک بروشور نیست. بدون نگهداری، سایت آهسته‌آهسته کندتر، ناامن‌تر و کهنه‌تر می‌شود و مشکلات معمولاً در بدترین زمان ظاهر می‌شوند، مثلاً در جریان یک کمپاین یا وقتی مشتری می‌خواهد رزرو کند.

**نکات کلیدی**

- نگهداری شش بخش را در بر می‌گیرد: به‌روزرسانی، پشتیبان‌گیری، امنیت، عملکرد، سلامت سئو و محتوا.
- بیشتر کارها کوچک هستند اما باید طبق برنامه انجام شوند: هفتگی، ماهانه، فصلی و سالانه.
- سایت‌های رهاشده بیشتر احتمال دارد هک شوند، رتبه از دست بدهند، قیمت‌های نادرست نشان دهند یا با منقضی شدن دامنه به سادگی از دسترس خارج شوند.
- به روشنی تصمیم بگیرید چه کسی مسئول است: تیم خودتان، شرکت طراحی شما یا ترکیبی از هر دو.
- یک دفتر ثبت نگهداری و یک فهرست مشترک حساب‌ها، تحویل کار و وضعیت‌های اضطراری را بسیار آسان‌تر می‌کند.

**نگهداری ویب‌سایت شامل چه چیزهایی است؟**

نگهداری ویب‌سایت شامل به‌روز نگه داشتن نرم‌افزار، پشتیبان‌گیری از سایت، نظارت بر امنیت و در دسترس بودن، بررسی سرعت، محافظت از سئو و دقیق نگه داشتن محتوا است. هر بخش از نوع متفاوتی از خرابی جلوگیری می‌کند.

- **به‌روزرسانی نرم‌افزار.** هسته‌های CMS، افزونه‌ها، قالب‌ها، فریم‌ورک‌هایی مانند Next.js و بسته‌های npm که به آن‌ها وابسته‌اند. به‌روزرسانی‌ها حفره‌های امنیتی را می‌بندند و سازگاری با مرورگرهای جدید را حفظ می‌کنند.
- **پشتیبان‌گیری.** نسخه‌های خودکار از فایل‌ها و دیتابیس در جای جداگانه، همراه با آزمایش دوره‌ای بازگردانی.
- **نظارت امنیتی.** زیر نظر داشتن بدافزار، ورودهای مشکوک، کاربران مدیریتی غیرمنتظره و هشدارهای امنیتی گوگل. [چک‌لیست امنیت ویب‌سایت](/blog/website-security-checklist-2026) ما محافظت‌های لازم را توضیح می‌دهد.
- **در دسترس بودن و تمدیدها.** نظارت بر آنلاین بودن سایت و اطمینان از تمدید به‌موقع دامنه، هاستینگ و گواهی TLS.
- **عملکرد.** بررسی Core Web Vitals، حجم عکس‌ها و وزن صفحات تا سایت با انترنت موبایل سریع بماند.
- **سلامت سئو.** مرور Google Search Console برای خطاهای بررسی، مشکلات ایندکس و لینک‌های شکسته.
- **محتوا.** به‌روزرسانی قیمت‌ها، ساعات کاری، کارمندان، خدمات، عکس‌ها و مقالات بلاگ تا مشتریان هرگز گمراه نشوند.
- **فورم‌ها و ادغام‌ها.** آزمایش اینکه فورم‌های تماس، سیستم‌های رزرو، دکمه‌های WhatsApp، پرداخت‌ها و ابزار تحلیل هنوز کار می‌کنند.

**چرا نگهداری ویب‌سایت مهم است؟**

نگهداری ویب‌سایت مهم است چون مشکلات کوچک و رهاشده به وضعیت‌های اضطراری پرهزینه، از دست دادن مشتریان و از دست دادن دیده شدن در جستجو تبدیل می‌شوند. بیشتر آسیب‌ها تا زمانی که جدی شوند دیده نمی‌شوند.

ببینید معمولاً در یک سایت بدون نگهداری چه چیزی خراب می‌شود:

- یک فورم تماس بی‌صدا از فرستادن ایمیل باز می‌ماند و درخواست‌ها هفته‌ها پیش از اینکه کسی متوجه شود از دست می‌روند.
- از یک افزونه کهنه سوءاستفاده می‌شود و سایت شروع به فرستادن بازدیدکنندگان به سایت‌های اسپم می‌کند.
- دامنه منقضی می‌شود چون یادآوری تمدید به صندوق ایمیل یک کارمند سابق رفته است.
- گوگل صفحات را کند یا خراب علامت می‌زند و رتبه‌ها به تدریج پایین می‌روند.
- قیمت‌ها، شماره‌های تیلفون یا خدمات نمایش داده‌شده در سایت ماه‌ها کهنه هستند که اعتماد را از بین می‌برد.

برای کسب‌وکارهایی در افغانستان که مشتریانشان عمدتاً از طریق موبایل به آن‌ها می‌رسند، سایت کند یا خراب اغلب یعنی مشتری به سادگی به رقیب زنگ می‌زند. برای کسب‌وکارهایی که به مهاجران خدمت می‌کنند، سایت کهنه در کنار رقبای محلی خوب‌نگهداری‌شده در اروپا یا امریکای شمالی غیرحرفه‌ای به نظر می‌رسد.

**هر کار نگهداری را هر چند وقت یک بار انجام دهیم؟**

بررسی‌های سریع را هفتگی، به‌روزرسانی‌ها و بازبینی‌های معمول را ماهانه، بازبینی‌های عمیق‌تر را فصلی و کارهای راهبردی را سالانه انجام دهید. این برنامه برای بیشتر ویب‌سایت‌های کسب‌وکارهای کوچک و متوسط مناسب است:

**هفتگی:** چند دقیقه بررسی سریع.

- مطمئن شوید سایت آنلاین است و صفحات کلیدی روی موبایل درست باز می‌شوند.
- یک درخواست آزمایشی از طریق فورم اصلی تماس یا رزرو بفرستید.
- بررسی کنید پشتیبان‌گیری‌ها با موفقیت انجام شده‌اند.
- هر هشدار امنیتی یا قطعی را مرور کنید.

**ماهانه:** به‌روزرسانی‌ها و بازبینی‌های معمول.

1. به‌روزرسانی‌های CMS، افزونه‌ها، فریم‌ورک و بسته‌ها را اعمال کنید و به‌روزرسانی‌های بزرگ را اول روی نسخه آزمایشی امتحان کنید.
2. Google Search Console را برای خطاها، مشکلات ایندکس و مسائل امنیتی مرور کنید. [راهنمای مبتدیان Google Search Console](/blog/google-search-console-beginners-guide) ما هر گزارش را توضیح می‌دهد.
3. ابزار تحلیل را برای کاهش غیرعادی بازدید یا تبدیل‌ها بررسی کنید.
4. لینک‌های شکسته را اصلاح کنید و هر محتوا، قیمت یا جزئیات تماس کهنه را به‌روز کنید.
5. افزونه‌ها، کاربران و فایل‌های بی‌استفاده را حذف کنید.

**فصلی:** بررسی‌های عمیق‌تر.

1. یک بازگردانی کامل از پشتیبان را آزمایش کنید.
2. سرعت را بررسی کنید و Core Web Vitals را با تمرکز بر موبایل مرور کنید. برای معنای اعداد، راهنمای ما درباره [Core Web Vitals و INP](/blog/core-web-vitals-inp-2026) را ببینید.
3. حساب‌های کاربری و دسترسی‌ها را مرور کنید و کسانی را که دیگر به دسترسی نیاز ندارند حذف کنید.
4. هر فورم، ادغام، روند پرداخت و تگ ردیابی را از ابتدا تا انتها بررسی کنید.
5. مهم‌ترین صفحات خدمات و مقالات قدیمی بلاگ را تازه کنید.

**سالانه:** برنامه‌ریزی و تمدیدها.

- تاریخ‌های تمدید دامنه، هاستینگ و گواهی و جزئیات پرداخت را تأیید کنید.
- بررسی کنید آیا طراحی، محتوا و فناوری هنوز با اهداف کسب‌وکار شما سازگار است.
- صفحات حقوقی مانند سیاست حفظ حریم خصوصی و شرایط استفاده را به‌روز کنید.
- در صورت نیاز، بهبودهای بزرگ‌تر، بخش‌های جدید یا بازطراحی را برنامه‌ریزی کنید.

**چه کسی باید ویب‌سایت شما را نگهداری کند؟**

ویب‌سایت شما باید توسط کسی نگهداری شود که بتواند این کار را پیوسته و امن انجام دهد: کارمندان خودتان برای محتوا و یک توسعه‌دهنده یا شرکت برای به‌روزرسانی‌های فنی، امنیت و پشتیبان‌گیری. این تقسیم مسئولیت برای بیشتر کسب‌وکارهای کوچک کار می‌کند.

کارمندانی که کسب‌وکار را می‌شناسند بهترین افراد برای به‌روزرسانی قیمت‌ها، اخبار و عکس‌ها هستند، به‌ویژه اگر سایت ویرایشگر محتوای آسانی به دری، پشتو و انگلیسی داشته باشد. به‌روزرسانی‌های فنی فرق دارند: یک به‌روزرسانی بی‌دقت افزونه یا بسته می‌تواند فورم رزرو یا صفحه پرداخت را خراب کند، پس باید توسط کسی انجام شود که بتواند درست آزمایش کند و در صورت نیاز به نسخه قبلی برگردد.

هر تقسیمی که انتخاب می‌کنید، آن را بنویسید. یک برنامه نگهداری یک‌صفحه‌ای باید فهرست کند چه کسی هر کار را انجام می‌دهد، هر چند وقت یک بار، اطلاعات ورود حساب‌ها کجا نگهداری می‌شود و در وضعیت اضطراری با چه کسی تماس گرفته شود.

**قرارداد نگهداری باید شامل چه چیزهایی باشد؟**

یک قرارداد نگهداری خوب باید دقیقاً بگوید کدام کارها شامل است، هر چند وقت یک بار انجام می‌شوند، مشکلات فوری با چه سرعتی رسیدگی می‌شوند و چه چیزی کار اضافی حساب می‌شود. قراردادهای مبهم به ناامیدی هر دو طرف می‌انجامند.

به دنبال پاسخ روشن برای این سؤال‌ها باشید:

- کدام به‌روزرسانی‌ها شامل است و آیا اول روی نسخه آزمایشی امتحان می‌شوند؟
- پشتیبان‌ها هر چند وقت یک بار گرفته می‌شوند، کجا نگهداری می‌شوند و سایت با چه سرعتی بازگردانی می‌شود؟
- چه نظارتی وجود دارد و وقتی سایت از کار می‌افتد به چه کسی هشدار داده می‌شود؟
- هر ماه چند ساعت تغییر محتوا یا اصلاحات کوچک شامل است؟
- زمان پاسخ مورد انتظار برای یک مشکل فوری مانند سایت هک‌شده یا آفلاین چقدر است؟
- آیا یک گزارش کوتاه ماهانه از کارهای انجام‌شده دریافت می‌کنید؟
- مالک دامنه، هاستینگ و کد کیست و اگر همکاری را تمام کنید دسترسی کامل خواهید داشت؟

وقتی زمان تغییرات بزرگ‌تر به جای مراقبت معمول فرا می‌رسد، آن‌ها را با دقت برنامه‌ریزی کنید؛ راهنمای ما درباره [بازطراحی ویب‌سایت بدون از دست دادن سئو](/blog/website-redesign-without-losing-seo) این روند را توضیح می‌دهد.

**با شین کار کنید**

شین ویب‌سایت‌هایی را که می‌سازد نگهداری می‌کند و می‌تواند مراقبت از سایت‌های موجود را هم به عهده بگیرد: به‌روزرسانی‌ها، پشتیبان‌گیری، نظارت امنیتی، سرعت و بررسی سلامت سئو به انگلیسی، دری و پشتو. درباره [خدمات طراحی ویب‌سایت](/services/web-design) ما بیشتر بدانید یا برای دریافت قیمت نگهداری از طریق info@sheen.af یا +93 784 966 018 [با ما تماس بگیرید](/contact).`,
            pa: `د ویب پاڼې ساتنه هغه منظم کار دی چې ویب پاڼه له پیل وروسته خوندي، ګړندۍ، دقیقه او د لیدو وړ ساتي: د سافټویر تازه کول، بیک اپ، امنیتي څارنه، د سرعت کتنه، د SEO روغتیا کتنه، د منځپانګې تازه کول او د ډومین او سندونو په وخت نوي کول. ویب پاڼه د بروشور د چاپولو په څېر یو ځلي پروژه نه ده. له ساتنې پرته سایټ ورو ورو ورو کېږي، لږ خوندي او زوړ کېږي، او ستونزې معمولاً په تر ټولو بد وخت کې راښکاره کېږي، لکه د کمپاین پر مهال یا کله چې پېرودونکی غواړي بکینګ وکړي.

**مهم ټکي**

- ساتنه شپږ برخې لري: تازه کول، بیک اپ، امنیت، فعالیت، د SEO روغتیا او منځپانګه.
- ډېری کارونه کوچني دي خو باید د مهالوېش سره سم وشي: اونیز، میاشتنی، درې میاشتنی او کلنی.
- پرېښودل شوي سایټونه ډېر احتمال لري چې هک شي، درجه له لاسه ورکړي، ناسمې بیې وښيي یا د ډومین د پای ته رسېدو سره په ساده ډول بند شي.
- په روښانه ډول پرېکړه وکړئ چې مسؤل څوک دی: خپل ټیم، ستاسو ډیزاین شرکت، یا د دواړو ګډون.
- د ساتنې یو ثبت کتاب او د حسابونو ګډ لېست د کار سپارل او بیړني حالتونه ډېر اسانه کوي.

**د ویب پاڼې ساتنه څه پکې شامل دي؟**

د ویب پاڼې ساتنه د سافټویر تازه ساتل، د سایټ بیک اپ، د امنیت او فعال وخت څارنه، د سرعت کتنه، د SEO ساتنه او د منځپانګې دقیق ساتل پکې شامل دي. هره برخه د یوه بېل ډول خرابۍ مخه نیسي.

- **د سافټویر تازه کول.** د CMS هستې، پلګ انونه، قالبونه، فریم ورکونه لکه Next.js او هغه npm بستې چې پرې تکیه کوي. تازه کول امنیتي سوري بندوي او له نویو براوزرونو سره سمون ساتي.
- **بیک اپ.** په جلا ځای کې د فایلونو او ډېټابیس اتومات نسخې، د وخت په وخت د بېرته راګرځولو ازمېښت سره.
- **امنیتي څارنه.** د بدافزار، شکمنو ننوتلو، غیرمتوقع مدیریتي کاروونکو او د ګوګل امنیتي خبرداریو څارل. زموږ [د ویب پاڼې د امنیت چک لېست](/blog/website-security-checklist-2026) هغه ساتنې تشریح کوي چې باید شتون ولري.
- **فعال وخت او نوي کول.** څارل چې سایټ آنلاین دی، او ډاډ ترلاسه کول چې ډومین، هاسټینګ او TLS سند په وخت نوي کېږي.
- **فعالیت.** د Core Web Vitals، د انځورونو اندازې او د پاڼو وزن کتل ترڅو سایټ په موبایل انټرنېټ ګړندی پاتې شي.
- **د SEO روغتیا.** د څېړنې تېروتنو، د انډکس ستونزو او مات شویو لینکونو لپاره د Google Search Console کتل.
- **منځپانګه.** د بیو، کاري ساعتونو، کارکوونکو، خدمتونو، انځورونو او بلاګ لیکنو تازه کول ترڅو پېرودونکي هېڅکله ګمراه نشي.
- **فورمې او یوځای کېدنې.** ازمویل چې د اړیکې فورمې، د بکینګ سیسټمونه، د WhatsApp تڼۍ، تادیات او د تحلیل وسایل لا هم کار کوي.

**ولې د ویب پاڼې ساتنه مهمه ده؟**

د ویب پاڼې ساتنه مهمه ده ځکه چې کوچنۍ او پرېښودل شوې ستونزې په ګرانو بیړنیو حالتونو، د پېرودونکو له لاسه ورکولو او په لټون کې د لید له لاسه ورکولو بدلېږي. ډېری زیانونه تر هغه نه ښکاري چې جدي شي.

وګورئ چې معمولاً په یوه نه ساتل شوي سایټ کې څه خرابېږي:

- د اړیکې یوه فورمه په چوپتیا سره د برېښنالیک لېږل بندوي، او غوښتنې د اونیو لپاره ورکېږي مخکې له دې چې څوک پوه شي.
- له یوه زاړه پلګ ان څخه ناوړه ګټه اخیستل کېږي او سایټ لیدونکي سپم سایټونو ته لېږل پیلوي.
- ډومین پای ته رسېږي ځکه چې د نوي کولو یادونه د یوه پخواني کارکوونکي برېښنالیک ته تللې وه.
- ګوګل پاڼې ورو یا ماتې په نښه کوي او درجې ورو ورو ښکته ځي.
- په سایټ کې ښودل شوې بیې، د تلیفون شمېرې یا خدمتونه میاشتې زاړه وي، چې باور له منځه وړي.

په افغانستان کې د هغو سوداګریو لپاره چې پېرودونکي یې ډېری د موبایل له لارې ورته رسېږي، ورو یا مات سایټ اکثراً دا معنا لري چې پېرودونکی په ساده ډول سیال ته زنګ وهي. د هغو سوداګریو لپاره چې مهاجرو ته خدمت کوي، زوړ سایټ په اروپا یا شمالي امریکا کې د ښه ساتل شویو محلي سیالانو تر څنګ غیرمسلکي ښکاري.

**هر د ساتنې کار څو ځله وکړو؟**

ګړندۍ کتنې اونیز، منظم تازه کول او بیاکتنې میاشتنۍ، ژورې بیاکتنې درې میاشتنۍ، او ستراتیژیک کارونه کلني وکړئ. دا مهالوېش د ډېری کوچنیو او منځنیو سوداګریزو ویب پاڼو لپاره کار کوي:

**اونیز:** د څو دقیقو ګړندۍ کتنې.

- ډاډ ترلاسه کړئ چې سایټ آنلاین دی او مهمې پاڼې په موبایل کې سمې خلاصېږي.
- د اصلي اړیکې یا بکینګ فورمې له لارې یوه ازمېښتي غوښتنه ولېږئ.
- وګورئ چې بیک اپونه په بریالیتوب سره شوي دي.
- هر امنیتي یا د بندېدو خبرداری وګورئ.

**میاشتنی:** منظم تازه کول او بیاکتنې.

1. د CMS، پلګ انونو، فریم ورک او بستو تازه کول پلي کړئ، او لوی تازه کول لومړی په ازمېښتي نسخه وازمویئ.
2. Google Search Console د تېروتنو، د انډکس ستونزو او امنیتي مسلو لپاره وګورئ. زموږ [د Google Search Console د پیل کوونکو لارښود](/blog/google-search-console-beginners-guide) هر راپور تشریح کوي.
3. د تحلیل وسایل د لیدونکو یا بدلونونو د غیرعادي کمښت لپاره وګورئ.
4. مات لینکونه سم کړئ او هره زړه منځپانګه، بیه یا د اړیکې جزئیات تازه کړئ.
5. بې ګټې پلګ انونه، کاروونکي او فایلونه لرې کړئ.

**درې میاشتنی:** ژورې کتنې.

1. له بیک اپ څخه بشپړ بېرته راګرځول وازمویئ.
2. د سرعت څېړنه وکړئ او Core Web Vitals د موبایل په تمرکز وګورئ. د شمېرو د معنا لپاره زموږ لارښود د [Core Web Vitals او INP](/blog/core-web-vitals-inp-2026) په اړه وګورئ.
3. د کاروونکو حسابونه او اجازې وګورئ او هغه کسان لرې کړئ چې نور لاسرسي ته اړتیا نه لري.
4. هره فورمه، یوځای کېدنه، د تادیې بهیر او د تعقیب ټګ له پیل تر پایه وازمویئ.
5. خپلې تر ټولو مهمې د خدمتونو پاڼې او زړې بلاګ لیکنې تازه کړئ.

**کلنی:** پلان جوړونه او نوي کول.

- د ډومین، هاسټینګ او سند د نوي کولو نېټې او د تادیې جزئیات تایید کړئ.
- وګورئ چې ایا ډیزاین، منځپانګه او ټکنالوژي لا هم ستاسو د سوداګرۍ له موخو سره سمون لري.
- قانوني پاڼې لکه د محرمیت پالیسي او د کارونې شرطونه تازه کړئ.
- که اړتیا وي، لوی پرمختګونه، نوې برخې یا بیا ډیزاین پلان کړئ.

**ستاسو ویب پاڼه باید څوک وساتي؟**

ستاسو ویب پاڼه باید هغه څوک وساتي چې دا کار په دوامداره او خوندي ډول کولی شي: ستاسو خپل کارکوونکي د منځپانګې لپاره، او یو پراختیا ورکوونکی یا شرکت د تخنیکي تازه کولو، امنیت او بیک اپ لپاره. د مسؤلیت دا وېش د ډېری کوچنیو سوداګریو لپاره کار کوي.

هغه کارکوونکي چې سوداګري پېژني د بیو، خبرونو او انځورونو د تازه کولو لپاره غوره کسان دي، په ځانګړي ډول که سایټ په دري، پښتو او انګلیسي کې اسانه د منځپانګې سمونګر ولري. تخنیکي تازه کول توپیر لري: د پلګ ان یا بستې بې پروا تازه کول کولی شي د بکینګ فورمه یا د تادیې پاڼه خرابه کړي، نو باید د داسې چا له خوا وشي چې سم ازمېښت وکړای شي او د اړتیا پر مهال مخکینۍ نسخې ته ستون شي.

هر وېش چې وټاکئ، ویې لیکئ. د ساتنې یو مخیز پلان باید لېست کړي چې هر کار څوک کوي، څو ځله، د حسابونو د ننوتلو معلومات چېرې ساتل کېږي، او په بیړني حالت کې له چا سره اړیکه ونیول شي.

**د ساتنې تړون باید څه ولري؟**

د ساتنې یو ښه تړون باید په دقیق ډول ووايي چې کوم کارونه پکې شامل دي، څو ځله کېږي، بیړنۍ ستونزې په څومره چټکۍ حل کېږي، او څه اضافي کار ګڼل کېږي. مبهم تړونونه دواړو خواوو ته نهیلي راولي.

د دې پوښتنو روښانه ځوابونه ولټوئ:

- کوم تازه کول پکې شامل دي او ایا لومړی په ازمېښتي نسخه ازمویل کېږي؟
- بیک اپونه څو ځله اخیستل کېږي، چېرې ساتل کېږي او سایټ په څومره چټکۍ بېرته راګرځول کېدای شي؟
- کومه څارنه شته او کله چې سایټ بند شي چا ته خبرداری ورکول کېږي؟
- هره میاشت د منځپانګې د بدلون یا کوچنیو سمونونو څو ساعته پکې شامل دي؟
- د یوې بیړنۍ ستونزې لکه هک شوي یا آفلاین سایټ لپاره د ځواب تمه شوی وخت څومره دی؟
- ایا د ترسره شویو کارونو لنډ میاشتنی راپور ترلاسه کوئ؟
- د ډومین، هاسټینګ او کوډ مالک څوک دی او که همکاري پای ته ورسوئ بشپړ لاسرسی به ولرئ؟

کله چې د منظمې پاملرنې پر ځای د لویو بدلونونو وخت راشي، په دقت یې پلان کړئ؛ زموږ لارښود د [پرته د SEO له لاسه ورکولو د ویب پاڼې بیا ډیزاین](/blog/website-redesign-without-losing-seo) په اړه دا بهیر تشریح کوي.

**له شین سره کار وکړئ**

شین هغه ویب پاڼې ساتي چې جوړوي یې، او د موجوده سایټونو پاملرنه هم په غاړه اخیستلی شي: تازه کول، بیک اپ، امنیتي څارنه، سرعت او د SEO روغتیا کتنې په انګلیسي، دري او پښتو. زموږ د [ویب ډیزاین خدمت](/services/web-design) په اړه نور معلومات واخلئ، یا د ساتنې د بیې لپاره د info@sheen.af یا +93 784 966 018 له لارې [موږ سره اړیکه ونیسئ](/contact).`
        },
        faqs: [
            {
                q: {
                    en: "How much time does website maintenance take each month?",
                    da: "نگهداری ویب‌سایت هر ماه چقدر زمان می‌برد؟",
                    pa: "د ویب پاڼې ساتنه هره میاشت څومره وخت نیسي؟"
                },
                a: {
                    en: "For a typical small business website, routine technical maintenance usually takes a few hours a month: applying and testing updates, checking backups, reviewing Search Console and testing forms. Content updates add time depending on how often prices, services or news change. Online stores, booking systems and sites with many integrations need more attention because there are more moving parts to test.",
                    da: "برای یک ویب‌سایت عادی کسب‌وکار کوچک، نگهداری فنی معمول معمولاً چند ساعت در ماه زمان می‌برد: اعمال و آزمایش به‌روزرسانی‌ها، بررسی پشتیبان‌ها، مرور Search Console و آزمایش فورم‌ها. به‌روزرسانی محتوا بسته به اینکه قیمت‌ها، خدمات یا اخبار هر چند وقت تغییر می‌کنند زمان بیشتری می‌گیرد. فروشگاه‌های آنلاین، سیستم‌های رزرو و سایت‌هایی با ادغام‌های زیاد توجه بیشتری می‌خواهند چون بخش‌های متحرک بیشتری برای آزمایش دارند.",
                    pa: "د یوې عادي کوچنۍ سوداګریزې ویب پاڼې لپاره، منظمه تخنیکي ساتنه معمولاً په میاشت کې څو ساعته وخت نیسي: د تازه کولو پلي کول او ازمویل، د بیک اپونو کتل، د Search Console کتل او د فورمو ازمویل. د منځپانګې تازه کول په دې پورې اړه لري چې بیې، خدمتونه یا خبرونه څو ځله بدلېږي. آنلاین هټۍ، د بکینګ سیسټمونه او ډېرو یوځای کېدنو لرونکي سایټونه ډېرې پاملرنې ته اړتیا لري ځکه چې د ازمویلو لپاره ډېرې برخې لري."
                }
            },
            {
                q: {
                    en: "Do modern Next.js websites still need maintenance?",
                    da: "آیا ویب‌سایت‌های مدرن Next.js هم به نگهداری نیاز دارند؟",
                    pa: "ایا عصري Next.js ویب پاڼې هم ساتنې ته اړتیا لري؟"
                },
                a: {
                    en: "Yes, though usually less than a plugin-heavy CMS site. A Next.js site has no public admin plugins to patch, but the framework and its npm packages still receive security and performance updates, hosting settings and certificates must stay current, and forms, integrations, content and SEO still need regular checks. Planned, tested framework upgrades every so often are much easier than a large jump after years.",
                    da: "بله، هرچند معمولاً کمتر از یک سایت CMS پر از افزونه. یک سایت Next.js افزونه‌های مدیریتی عمومی برای اصلاح ندارد، اما فریم‌ورک و بسته‌های npm آن هنوز به‌روزرسانی‌های امنیتی و عملکردی دریافت می‌کنند، تنظیمات هاستینگ و گواهی‌ها باید به‌روز بمانند و فورم‌ها، ادغام‌ها، محتوا و سئو هنوز به بررسی منظم نیاز دارند. ارتقای برنامه‌ریزی‌شده و آزمایش‌شده فریم‌ورک در فاصله‌های منظم بسیار آسان‌تر از یک جهش بزرگ پس از چند سال است.",
                    pa: "هو، که څه هم معمولاً د پلګ انونو ډک CMS سایټ په پرتله لږ. یو Next.js سایټ د سمولو لپاره عامه مدیریتي پلګ انونه نه لري، خو فریم ورک او د هغه npm بستې لا هم امنیتي او د فعالیت تازه کول ترلاسه کوي، د هاسټینګ تنظیمات او سندونه باید تازه پاتې شي، او فورمې، یوځای کېدنې، منځپانګه او SEO لا هم منظمې کتنې ته اړتیا لري. په منظمو وقفو کې پلان شوی او ازمویل شوی د فریم ورک لوړول له څو کلونو وروسته د یوه لوی ټوپ په پرتله ډېر اسانه دي."
                }
            },
            {
                q: {
                    en: "What happens if I stop maintaining my website?",
                    da: "اگر نگهداری ویب‌سایتم را متوقف کنم چه می‌شود؟",
                    pa: "که د خپلې ویب پاڼې ساتنه ودروم څه به پېښ شي؟"
                },
                a: {
                    en: "Usually nothing obvious at first, which is why it is risky. Over months, software falls behind on security fixes, forms or integrations can break silently, content goes out of date and speed and SEO problems accumulate. Eventually the site may be hacked, flagged by Google, or go offline because a domain or certificate was not renewed. Fixing these issues costs more than preventing them.",
                    da: "معمولاً در ابتدا چیز آشکاری رخ نمی‌دهد و همین آن را خطرناک می‌کند. در طول ماه‌ها، نرم‌افزار از اصلاحات امنیتی عقب می‌ماند، فورم‌ها یا ادغام‌ها ممکن است بی‌صدا خراب شوند، محتوا کهنه می‌شود و مشکلات سرعت و سئو جمع می‌شوند. سرانجام سایت ممکن است هک شود، توسط گوگل علامت‌گذاری شود یا به دلیل تمدید نشدن دامنه یا گواهی از دسترس خارج شود. رفع این مشکلات بیشتر از جلوگیری از آن‌ها هزینه دارد.",
                    pa: "معمولاً په پیل کې کوم ښکاره شی نه پېښېږي، او همدا یې خطرناک کوي. د میاشتو په اوږدو کې سافټویر له امنیتي سمونونو شاته پاتې کېږي، فورمې یا یوځای کېدنې ښايي په چوپتیا خرابې شي، منځپانګه زړه کېږي او د سرعت او SEO ستونزې راټولېږي. په پای کې سایټ ښايي هک شي، د ګوګل له خوا په نښه شي، یا د ډومین یا سند د نه نوي کېدو له امله بند شي. د دې ستونزو سمول د مخنیوي په پرتله ډېر لګښت لري."
                }
            },
            {
                q: {
                    en: "Can I update my website content myself?",
                    da: "آیا می‌توانم محتوای ویب‌سایتم را خودم به‌روز کنم؟",
                    pa: "ایا کولی شم د خپلې ویب پاڼې منځپانګه پخپله تازه کړم؟"
                },
                a: {
                    en: "Yes, if the site is built with an easy content editor or CMS and you have been shown how to use it. Updating text, prices, photos and blog posts is well suited to your own team, including in Dari and Pashto. Leave code changes, framework or plugin updates, DNS and hosting settings to a developer, because mistakes there can take the site offline.",
                    da: "بله، اگر سایت با یک ویرایشگر محتوا یا CMS آسان ساخته شده باشد و طرز استفاده از آن به شما نشان داده شده باشد. به‌روزرسانی متن، قیمت‌ها، عکس‌ها و مقالات بلاگ برای تیم خودتان، از جمله به دری و پشتو، بسیار مناسب است. تغییرات کد، به‌روزرسانی فریم‌ورک یا افزونه، تنظیمات DNS و هاستینگ را به یک توسعه‌دهنده بسپارید، چون اشتباه در آن‌ها می‌تواند سایت را از دسترس خارج کند.",
                    pa: "هو، که سایټ د یوه اسانه منځپانګې سمونګر یا CMS سره جوړ شوی وي او د کارونې طریقه درښودل شوې وي. د متن، بیو، انځورونو او بلاګ لیکنو تازه کول ستاسو د خپل ټیم لپاره، په دري او پښتو کې هم، ښه مناسب دي. د کوډ بدلونونه، د فریم ورک یا پلګ ان تازه کول، د DNS او هاسټینګ تنظیمات پراختیا ورکوونکي ته پرېږدئ، ځکه چې په دې کې تېروتنې کولی شي سایټ بند کړي."
                }
            }
        ],
        category: "web-dev",
        author: "Jawad Hakimi",
        date: "2026-09-16",
        updated: "2026-09-16",
        readTime: "6 min read",
        image: "/logo.png",
        tags: ["website maintenance", "website maintenance plan", "website maintenance checklist", "website care plan", "Next.js 16 updates", "website backups and updates", "website maintenance Afghanistan"]
    },
];

export default posts;
