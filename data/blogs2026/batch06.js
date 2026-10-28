// Batch 06 — RTL design, website speed, headless CMS vs WordPress, WCAG 2.2, landing page conversion. Generated 2026-10.
const posts = [
    {
        id: "126",
        slug: "rtl-website-design-best-practices",
        title: {
            en: "RTL Website Design: Best Practices for Dari and Pashto",
            da: "طراحی ویب‌سایت RTL: بهترین روش‌ها برای دری و پشتو",
            pa: "د RTL ویب‌سایټ ډیزاین: د دري او پښتو لپاره غوره لارې"
        },
        excerpt: {
            en: "RTL website design for Dari and Pashto: set lang and dir correctly, use logical CSS, pick Pashto-ready fonts, mirror the right icons, and test before launch.",
            da: "طراحی ویب‌سایت RTL برای دری و پشتو: تنظیم درست lang و dir، استفاده از CSS منطقی، انتخاب فونت مناسب پشتو، قرینه‌سازی درست آیکن‌ها و آزمایش پیش از راه‌اندازی.",
            pa: "د دري او پښتو لپاره د RTL ویب‌سایټ ډیزاین: د lang او dir سم ټاکل، منطقي CSS، د پښتو لپاره چمتو فونټونه، د آیکونونو سم برعکس کول او له پیل مخکې ازموینه."
        },
        content: {
            en: `RTL website design means building a site so that Dari and Pashto read naturally from right to left: the layout mirrors, text aligns to the right, and menus, icons and forms follow the reader's eye. Doing it well takes more than adding dir="rtl" to a page. It needs logical CSS, fonts that render the Persian-Arabic script cleanly, and careful handling of mixed English words, numbers and phone numbers.

**Key Takeaways**

- Set lang and dir on the html element for every language version, not with scattered CSS overrides.
- Use CSS logical properties (start and end instead of left and right) so one stylesheet serves both directions.
- Choose fonts that support every Pashto letter, and give Dari and Pashto text more line height than English.
- Mirror directional icons and layouts, but leave logos, media controls, numbers and Latin text alone.
- Test with real content on real phones before launch, not with English placeholder text.

**What Does RTL Website Design Actually Involve?**

RTL website design is the practice of making the whole interface, not just the paragraphs, behave correctly for right-to-left languages. In Afghanistan that means Dari and Pashto, and often both alongside English on the same site.

A properly built RTL page flips the reading order of the layout. The logo usually moves to the top right, the main navigation starts from the right, the sidebar swaps sides, breadcrumbs run right to left, and "next" arrows point left. Form labels sit to the right of their fields, and error messages appear where a right-to-left reader expects them.

What it is not: translating the English text and right-aligning it. A site that does only that looks broken to native readers. Punctuation lands on the wrong side, phone numbers scramble, and icons point the wrong way. Visitors notice immediately, and many will assume the business is careless. For businesses serving customers in Kabul, Herat, Mazar-i-Sharif or Kandahar, a clean Dari and Pashto experience is often the first signal of trust.

**How Should You Set Direction and Language in the Code?**

Set the language and direction once, at the top of the document, for each language version. On the Dari version the html element should carry lang="fa-AF" and dir="rtl"; on the Pashto version lang="ps" and dir="rtl"; on English, lang="en" and dir="ltr". Browsers, screen readers and search engines all read these attributes.

In a Next.js project this is usually done in the root layout, which reads the current locale from the URL and sets both attributes. Avoid the common shortcut of keeping dir="ltr" on the page and right-aligning text with CSS. It breaks table column order, flexbox order, scrollbars and form behaviour.

Each language should also live at its own URL, such as /fa/ and /ps/ or a subdomain, so search engines can index it. That connects directly to hreflang tags, which we cover in our [guide to hreflang for RTL websites](/blog/hreflang-rtl-websites-guide), and to the wider strategy in [multilingual SEO for Dari, Pashto and English](/blog/multilingual-seo-dari-pashto-english).

**Why Use CSS Logical Properties?**

Logical properties let one stylesheet work in both directions because they describe start and end rather than left and right. Instead of margin-left you write margin-inline-start; instead of text-align: left you write text-align: start. When dir changes, the browser flips everything for you.

Practical rules we follow on every multilingual build:

- Replace left and right in margins, padding, borders and positioning with inline-start and inline-end equivalents.
- In Tailwind CSS, use the ms-, me-, ps- and pe- utilities, and the rtl: variant only for genuine exceptions.
- Let flexbox and grid follow the document direction rather than reversing them by hand.
- Check transforms and animations, such as slide-in menus and carousels, because translateX values do not flip automatically.
- Keep a short list of components that need RTL-specific tweaks and review them each time the design changes.

This approach is cheaper to maintain. Teams that hard-code left and right end up with two diverging stylesheets and bugs that only appear in one language.

**Which Fonts Work Best for Dari and Pashto?**

The best fonts for Dari and Pashto are those that cover the full character set, render cleanly on low-end Android phones, and stay light enough to load on slow mobile data. Open-source families such as Vazirmatn, Noto Naskh Arabic and Noto Sans Arabic are common starting points, but you must check them against your own content.

Pashto is the usual weak point. It uses letters that Persian-focused fonts sometimes miss or draw poorly, including ټ، ډ، ړ، ښ، ږ، ځ، څ، ڼ، ګ and ۍ. Before committing to a font, render a page of real Pashto text and look for empty boxes, fallback glyphs or uneven joins.

Typography rules that help the Persian-Arabic script:

- Give body text more line height than English, typically around 1.7 to 1.9, because the script has tall ascenders and deep descenders.
- Increase font size slightly; text that is readable at 16px in English often feels small in Dari and Pashto.
- Never add letter-spacing to Dari or Pashto text. It breaks the joins between letters.
- Avoid fake italics and all-caps styles, which have no meaning in this script.
- Subset fonts and load only the weights you use, so a page does not wait on several hundred kilobytes of font files.

**What Should Mirror in an RTL Layout, and What Should Not?**

Mirror anything that shows direction or sequence, and leave anything that represents a real-world object or a fixed convention unchanged. Getting this wrong is one of the most visible RTL mistakes.

Mirror: back and forward arrows, chevrons in breadcrumbs and accordions, progress steps, sliders, the side a drawer menu opens from, and the order of columns in a layout.

Do not mirror: logos, photos, video play and pause buttons, checkmarks, clocks, charts with a time axis that your audience reads left to right, and any embedded English text. A search magnifying glass or a phone icon also stays as it is.

**How Do You Handle Mixed English, Numbers and Dates?**

Wrap any run of Latin text, numbers, phone numbers, email addresses and codes so the browser treats it as left-to-right, and let the surrounding sentence stay right-to-left. The HTML bdi element, or a span with dir="ltr", does this reliably. Without it, a number such as +93 784 966 018 can display with its plus sign at the wrong end.

Other details that matter:

- Decide whether to show Western digits or Eastern Arabic-Indic digits, and be consistent. Many Afghan users type both, so forms should accept both and normalise them before saving.
- Normalise the Arabic and Persian forms of the letters ی and ک in search, or users will not find products they can see on the page.
- Show dates in the format your audience expects. Solar Hijri dates are common in Afghanistan, while diaspora visitors may prefer Gregorian; showing both on bookings and invoices avoids confusion.
- Keep brand and product names like WhatsApp or Google in Latin script where that is how people recognise them.

**RTL Testing Checklist Before Launch**

Run this checklist on every language version before going live:

1. Open each page with real Dari and Pashto content, not translated placeholder text.
2. Check that the header, menu, footer and breadcrumbs start from the right.
3. Fill in every form in Dari and Pashto, including error states.
4. Type phone numbers and email addresses into forms and confirm they display correctly.
5. Confirm directional icons are mirrored and logos and media controls are not.
6. Test on a low-cost Android phone over mobile data, not only on office Wi-Fi.
7. Switch languages from every page and confirm you land on the equivalent page.
8. Check page titles, meta descriptions and social sharing previews in each language.
9. Test with a screen reader to confirm the language is announced correctly.

On projects like the [Etrat Elm Educational Center website](/portfolio/etrat-elm-educational-center), admissions forms and course pages had to work equally well in all three languages, and this kind of checklist is what catches the small bugs before parents and students do.

**Work With Sheen**

Sheen designs and builds multilingual Next.js websites with English, Dari and Pashto treated as equals from day one, not bolted on later. If you need a new site or want your current RTL version fixed, see our [web design service](/services/web-design) or [contact us](/contact) at info@sheen.af or +93 784 966 018.`,
            da: `طراحی ویب‌سایت RTL یعنی ساختن ویب‌سایتی که دری و پشتو در آن به‌طور طبیعی از راست به چپ خوانده شوند: صفحه‌آرایی قرینه می‌شود، متن به راست تراز می‌گیرد و منوها، آیکن‌ها و فورم‌ها مسیر چشم خواننده را دنبال می‌کنند. انجام درست این کار چیزی بیشتر از افزودن dir="rtl" به صفحه است. به CSS منطقی، فونت‌هایی که خط فارسی-عربی را تمیز نمایش دهند و مدیریت دقیق کلمات انگلیسی، اعداد و شماره‌های تلفن در میان متن نیاز دارد.

**نکات کلیدی**

- برای هر نسخهٔ زبانی، lang و dir را روی عنصر html تنظیم کنید، نه با تغییرات پراکندهٔ CSS.
- از ویژگی‌های منطقی CSS (start و end به‌جای left و right) استفاده کنید تا یک فایل استایل برای هر دو جهت کار کند.
- فونت‌هایی انتخاب کنید که همهٔ حروف پشتو را پشتیبانی کنند، و به متن دری و پشتو فاصلهٔ سطر بیشتری نسبت به انگلیسی بدهید.
- آیکن‌ها و چیدمان‌های جهت‌دار را قرینه کنید، اما لوگوها، کنترل‌های ویدیو، اعداد و متن لاتین را دست نزنید.
- پیش از راه‌اندازی، با محتوای واقعی روی گوشی‌های واقعی آزمایش کنید، نه با متن نمونهٔ انگلیسی.

**طراحی ویب‌سایت RTL در عمل شامل چه چیزهایی است؟**

طراحی ویب‌سایت RTL یعنی اینکه کل رابط کاربری، نه فقط پاراگراف‌ها، برای زبان‌های راست‌به‌چپ درست رفتار کند. در افغانستان این یعنی دری و پشتو، و اغلب هر دو در کنار انگلیسی در یک ویب‌سایت.

یک صفحهٔ RTL که درست ساخته شده باشد، ترتیب خواندن صفحه‌آرایی را برعکس می‌کند. لوگو معمولاً به بالای سمت راست می‌رود، منوی اصلی از راست شروع می‌شود، ستون کناری جایش را عوض می‌کند، مسیر راهنما (breadcrumb) از راست به چپ می‌رود و فلش‌های «بعدی» به سمت چپ اشاره می‌کنند. برچسب‌های فورم در سمت راست فیلدها قرار می‌گیرند و پیام‌های خطا جایی ظاهر می‌شوند که خوانندهٔ راست‌به‌چپ انتظار دارد.

آنچه طراحی RTL نیست: ترجمهٔ متن انگلیسی و راست‌چین کردن آن. ویب‌سایتی که فقط همین کار را کند، برای خوانندگان بومی خراب به نظر می‌رسد. علامت‌های نگارشی در سمت اشتباه قرار می‌گیرند، شماره‌های تلفن به هم می‌ریزند و آیکن‌ها به جهت غلط اشاره می‌کنند. بازدیدکنندگان فوراً متوجه می‌شوند و بسیاری فکر می‌کنند که آن تجارت بی‌دقت است. برای تجارت‌هایی که به مشتریان در کابل، هرات، مزار شریف یا کندهار خدمت می‌کنند، تجربهٔ تمیز دری و پشتو اغلب نخستین نشانهٔ اعتماد است.

**جهت و زبان را در کد چگونه تنظیم کنیم؟**

زبان و جهت را یک بار، در بالای سند، برای هر نسخهٔ زبانی تنظیم کنید. در نسخهٔ دری، عنصر html باید lang="fa-AF" و dir="rtl" داشته باشد؛ در نسخهٔ پشتو lang="ps" و dir="rtl"؛ و در انگلیسی lang="en" و dir="ltr". مرورگرها، صفحه‌خوان‌ها و موتورهای جستجو همه این ویژگی‌ها را می‌خوانند.

در یک پروژهٔ Next.js این کار معمولاً در layout اصلی انجام می‌شود که زبان فعلی را از URL می‌خواند و هر دو ویژگی را تنظیم می‌کند. از میان‌بر رایجی که dir="ltr" را روی صفحه نگه می‌دارد و متن را با CSS راست‌چین می‌کند پرهیز کنید. این کار ترتیب ستون‌های جدول، ترتیب flexbox، نوارهای پیمایش و رفتار فورم‌ها را خراب می‌کند.

هر زبان همچنین باید URL جداگانهٔ خودش را داشته باشد، مانند /fa/ و /ps/ یا یک زیردامنه، تا موتورهای جستجو بتوانند آن را ایندکس کنند. این موضوع مستقیماً به تگ‌های hreflang مربوط است که در [راهنمای hreflang برای ویب‌سایت‌های RTL](/blog/hreflang-rtl-websites-guide) توضیح داده‌ایم، و همچنین به استراتژی گسترده‌تر در [SEO چندزبانه برای دری، پشتو و انگلیسی](/blog/multilingual-seo-dari-pashto-english).

**چرا از ویژگی‌های منطقی CSS استفاده کنیم؟**

ویژگی‌های منطقی به یک فایل استایل اجازه می‌دهند در هر دو جهت کار کند، چون به‌جای چپ و راست، آغاز و پایان را توصیف می‌کنند. به‌جای margin-left می‌نویسید margin-inline-start؛ به‌جای text-align: left می‌نویسید text-align: start. وقتی dir تغییر کند، مرورگر همه‌چیز را خودش برعکس می‌کند.

قواعد عملی که در هر پروژهٔ چندزبانه رعایت می‌کنیم:

- در margin، padding، border و موقعیت‌دهی، left و right را با معادل‌های inline-start و inline-end جایگزین کنید.
- در Tailwind CSS از کلاس‌های ms-، me-، ps- و pe- استفاده کنید و حالت rtl: را فقط برای استثناهای واقعی به کار ببرید.
- بگذارید flexbox و grid از جهت سند پیروی کنند، به‌جای اینکه دستی برعکسشان کنید.
- transformها و انیمیشن‌ها، مانند منوهای کشویی و اسلایدرها، را بررسی کنید، چون مقادیر translateX خودبه‌خود برعکس نمی‌شوند.
- فهرست کوتاهی از کامپوننت‌هایی که به تنظیمات ویژهٔ RTL نیاز دارند نگه دارید و هر بار که طراحی تغییر می‌کند آن‌ها را مرور کنید.

نگهداری این روش ارزان‌تر است. تیم‌هایی که left و right را مستقیم در کد می‌نویسند، در نهایت دو فایل استایل جدا از هم و باگ‌هایی دارند که فقط در یک زبان ظاهر می‌شوند.

**کدام فونت‌ها برای دری و پشتو بهتر اند؟**

بهترین فونت‌ها برای دری و پشتو آن‌هایی اند که مجموعهٔ کامل حروف را پوشش دهند، روی گوشی‌های اندرویدی ارزان تمیز نمایش داده شوند و آن‌قدر سبک باشند که با انترنت موبایل کند بارگذاری شوند. خانواده‌های متن‌باز مانند Vazirmatn، Noto Naskh Arabic و Noto Sans Arabic نقطهٔ شروع رایجی اند، اما باید آن‌ها را با محتوای خودتان امتحان کنید.

پشتو معمولاً نقطهٔ ضعف است. این زبان حروفی دارد که فونت‌های متمرکز بر فارسی گاهی ندارند یا بد رسم می‌کنند، از جمله ټ، ډ، ړ، ښ، ږ، ځ، څ، ڼ، ګ و ۍ. پیش از انتخاب نهایی فونت، یک صفحه متن واقعی پشتو را نمایش دهید و دنبال مربع‌های خالی، حروف جایگزین یا اتصال‌های ناهموار بگردید.

قواعد تایپوگرافی که به خط فارسی-عربی کمک می‌کنند:

- به متن اصلی فاصلهٔ سطر بیشتری نسبت به انگلیسی بدهید، معمولاً حدود ۱.۷ تا ۱.۹، چون این خط بالارونده‌ها و پایین‌رونده‌های بلندی دارد.
- اندازهٔ فونت را کمی بزرگ‌تر کنید؛ متنی که در انگلیسی با 16px خوانا است، در دری و پشتو اغلب کوچک به نظر می‌رسد.
- هرگز به متن دری یا پشتو letter-spacing ندهید. این کار اتصال میان حروف را می‌شکند.
- از ایتالیک ساختگی و سبک‌های حروف بزرگ پرهیز کنید، چون در این خط معنایی ندارند.
- فونت‌ها را زیرمجموعه‌سازی (subset) کنید و فقط وزن‌هایی را که استفاده می‌کنید بارگذاری کنید، تا صفحه منتظر چند صد کیلوبایت فایل فونت نماند.

**در صفحه‌آرایی RTL چه چیزی باید قرینه شود و چه چیزی نه؟**

هر چیزی را که جهت یا ترتیب نشان می‌دهد قرینه کنید، و هر چیزی را که نمایندهٔ یک شیء واقعی یا یک قرارداد ثابت است تغییر ندهید. اشتباه در این بخش یکی از آشکارترین خطاهای RTL است.

قرینه کنید: فلش‌های برگشت و پیش‌رفت، علامت‌های جهت در breadcrumb و آکاردیون‌ها، مراحل پیشرفت، اسلایدرها، سمتی که منوی کشویی از آن باز می‌شود، و ترتیب ستون‌ها در صفحه‌آرایی.

قرینه نکنید: لوگوها، عکس‌ها، دکمه‌های پخش و توقف ویدیو، علامت تیک، ساعت‌ها، چارت‌هایی با محور زمانی که مخاطب شما از چپ به راست می‌خواند، و هر متن انگلیسی جاسازی‌شده. ذره‌بین جستجو یا آیکن تلفن هم همان‌طور می‌ماند.

**با ترکیب انگلیسی، اعداد و تاریخ‌ها چه کنیم؟**

هر بخش از متن لاتین، اعداد، شماره‌های تلفن، آدرس‌های ایمیل و کدها را طوری بپیچید که مرورگر آن را چپ‌به‌راست در نظر بگیرد، و بگذارید جملهٔ اطراف راست‌به‌چپ بماند. عنصر bdi در HTML، یا یک span با dir="ltr"، این کار را به‌طور مطمئن انجام می‌دهد. بدون آن، شماره‌ای مانند +93 784 966 018 ممکن است با علامت جمع در انتهای اشتباه نمایش داده شود.

جزئیات دیگری که اهمیت دارند:

- تصمیم بگیرید که اعداد لاتین نمایش دهید یا اعداد فارسی، و یکسان عمل کنید. بسیاری از کاربران افغان هر دو را تایپ می‌کنند، پس فورم‌ها باید هر دو را بپذیرند و پیش از ذخیره یکسان‌سازی کنند.
- شکل‌های عربی و فارسی حروف ی و ک را در جستجو یکسان‌سازی کنید، وگرنه کاربران محصولاتی را که روی صفحه می‌بینند پیدا نمی‌کنند.
- تاریخ‌ها را در قالبی نشان دهید که مخاطب شما انتظار دارد. تاریخ هجری شمسی در افغانستان رایج است، در حالی که بازدیدکنندگان مقیم خارج ممکن است میلادی را ترجیح دهند؛ نمایش هر دو در رزروها و بل‌ها از سردرگمی جلوگیری می‌کند.
- نام‌های برند و محصول مانند WhatsApp یا Google را به خط لاتین نگه دارید، اگر مردم آن‌ها را این‌گونه می‌شناسند.

**چک‌لیست آزمایش RTL پیش از راه‌اندازی**

این چک‌لیست را پیش از راه‌اندازی روی هر نسخهٔ زبانی اجرا کنید:

1. هر صفحه را با محتوای واقعی دری و پشتو باز کنید، نه متن نمونهٔ ترجمه‌شده.
2. بررسی کنید که هدر، منو، فوتر و breadcrumb از سمت راست شروع شوند.
3. همهٔ فورم‌ها را به دری و پشتو پر کنید، از جمله حالت‌های خطا.
4. شماره‌های تلفن و آدرس‌های ایمیل را در فورم‌ها تایپ کنید و مطمئن شوید درست نمایش داده می‌شوند.
5. مطمئن شوید آیکن‌های جهت‌دار قرینه شده‌اند و لوگوها و کنترل‌های ویدیو نه.
6. روی یک گوشی اندرویدی ارزان با انترنت موبایل آزمایش کنید، نه فقط با وای‌فای دفتر.
7. از هر صفحه زبان را تغییر دهید و مطمئن شوید به صفحهٔ معادل می‌رسید.
8. عنوان صفحه‌ها، توضیحات متا و پیش‌نمایش اشتراک‌گذاری در شبکه‌های اجتماعی را در هر زبان بررسی کنید.
9. با یک صفحه‌خوان آزمایش کنید تا مطمئن شوید زبان درست اعلام می‌شود.

در پروژه‌هایی مانند [ویب‌سایت مرکز آموزشی عترت علم](/portfolio/etrat-elm-educational-center)، فورم‌های پذیرش و صفحه‌های کورس باید در هر سه زبان به یک اندازه خوب کار می‌کردند، و همین نوع چک‌لیست است که باگ‌های کوچک را پیش از والدین و شاگردان پیدا می‌کند.

**با شین کار کنید**

شین ویب‌سایت‌های چندزبانهٔ Next.js را طراحی می‌کند و می‌سازد که در آن‌ها انگلیسی، دری و پشتو از روز اول برابر در نظر گرفته می‌شوند، نه اینکه بعداً اضافه شوند. اگر به ویب‌سایت تازه نیاز دارید یا می‌خواهید نسخهٔ RTL فعلی‌تان اصلاح شود، [خدمات طراحی ویب‌سایت](/services/web-design) ما را ببینید یا از طریق info@sheen.af یا +93 784 966 018 [با ما تماس بگیرید](/contact).`,
            pa: `د RTL ویب‌سایټ ډیزاین معنا دا ده چې داسې ویب‌سایټ جوړ کړئ چې دري او پښتو پکې په طبیعي ډول له ښي نه کیڼ لور ته ولوستل شي: ترتیب یې برعکس کېږي، متن ښي خوا ته برابرېږي، او مینوګانې، آیکونونه او فورمې د لوستونکي د سترګو لار تعقیبوي. دا کار په سمه توګه کول یوازې پاڼې ته د dir="rtl" ورزیاتول نه دي. منطقي CSS ته، داسې فونټونو ته چې فارسي-عربي لیک پاک ښکاره کړي، او د انګلیسي کلمو، شمېرو او د تلیفون شمېرو د ګډون دقیق مدیریت ته اړتیا لري.

**مهم ټکي**

- د هرې ژبې نسخې لپاره lang او dir د html پر عنصر وټاکئ، نه د CSS له خپرو بدلونونو سره.
- د CSS منطقي ځانګړتیاوې (د left او right پر ځای start او end) وکاروئ ترڅو یو سټایل فایل دواړو لوریو ته کار وکړي.
- داسې فونټونه وټاکئ چې د پښتو ټول توري ملاتړ کړي، او دري او پښتو متن ته د انګلیسي په پرتله د کرښو ترمنځ ډېر واټن ورکړئ.
- لوري لرونکي آیکونونه او ترتیبونه برعکس کړئ، خو لوګو، د ویډیو کنټرولونه، شمېرې او لاتیني متن مه بدلوئ.
- له پیل مخکې په ریښتینو تلیفونونو کې له ریښتینې منځپانګې سره ازموینه وکړئ، نه د انګلیسي نمونه متن سره.

**د RTL ویب‌سایټ ډیزاین په عمل کې څه شی دی؟**

د RTL ویب‌سایټ ډیزاین دا دی چې ټول انټرفېس، نه یوازې پراګرافونه، د ښي نه کیڼ ته ژبو لپاره سم چلند وکړي. په افغانستان کې دا د دري او پښتو معنا لري، او ډېری وخت دواړه له انګلیسي سره په یوه ویب‌سایټ کې.

یوه سمه جوړه شوې RTL پاڼه د ترتیب د لوستلو لړۍ برعکس کوي. لوګو معمولاً پورته ښي لور ته ځي، اصلي مینو له ښي خوا پیلېږي، څنګ ستون خپل ځای بدلوي، breadcrumb له ښي نه کیڼ ته ځي، او د «بل» غشي کیڼ لور ته اشاره کوي. د فورم لیبلونه د فیلډونو ښي خوا ته وي، او د تېروتنې پیغامونه هغه ځای ښکاري چې د ښي نه کیڼ ته لوستونکی یې تمه لري.

څه چې RTL ډیزاین نه دی: د انګلیسي متن ژباړل او ښي خوا ته برابرول. هغه ویب‌سایټ چې یوازې دا کار کوي، اصلي لوستونکو ته مات ښکاري. د لیک نښې په غلط اړخ کې راځي، د تلیفون شمېرې ګډوډېږي، او آیکونونه غلط لوري ته اشاره کوي. لیدونکي سمدلاسه پوهېږي، او ډېری یې فکر کوي چې دا سوداګري بې‌پروا ده. د هغو سوداګریو لپاره چې په کابل، هرات، مزارشریف یا کندهار کې پیرودونکو ته خدمت کوي، پاکه دري او پښتو تجربه ډېری وخت د باور لومړۍ نښه وي.

**په کوډ کې لوری او ژبه څنګه وټاکو؟**

ژبه او لوری یو ځل، د سند په سر کې، د هرې ژبې نسخې لپاره وټاکئ. په دري نسخه کې د html عنصر باید lang="fa-AF" او dir="rtl" ولري؛ په پښتو نسخه کې lang="ps" او dir="rtl"؛ او په انګلیسي کې lang="en" او dir="ltr". براوزرونه، د سکرین لوستونکي او د لټون انجنونه ټول دا ځانګړتیاوې لولي.

په یوه Next.js پروژه کې دا کار معمولاً په اصلي layout کې کېږي چې اوسنۍ ژبه له URL څخه لولي او دواړه ځانګړتیاوې ټاکي. له هغې عامې لنډې لارې ډډه وکړئ چې پر پاڼه dir="ltr" ساتي او متن د CSS په مرسته ښي خوا ته برابروي. دا کار د جدول د ستونونو ترتیب، د flexbox ترتیب، سکرول بارونه او د فورمو چلند خرابوي.

هره ژبه باید خپل جلا URL هم ولري، لکه /fa/ او /ps/ یا یو فرعي ډومېن، ترڅو د لټون انجنونه یې انډکس کړای شي. دا موضوع مستقیماً له hreflang ټګونو سره تړاو لري چې موږ یې د [RTL ویب‌سایټونو لپاره د hreflang لارښود](/blog/hreflang-rtl-websites-guide) کې تشریح کړې، او همداراز له پراخې ستراتیژۍ سره چې په [دري، پښتو او انګلیسي لپاره څوژبیز SEO](/blog/multilingual-seo-dari-pashto-english) کې راغلې.

**ولې د CSS منطقي ځانګړتیاوې وکاروو؟**

منطقي ځانګړتیاوې یو سټایل فایل ته اجازه ورکوي چې دواړو لوریو ته کار وکړي، ځکه چې د کیڼ او ښي پر ځای پیل او پای بیانوي. د margin-left پر ځای margin-inline-start لیکئ؛ د text-align: left پر ځای text-align: start لیکئ. کله چې dir بدل شي، براوزر هر څه پخپله برعکس کوي.

عملي قواعد چې موږ یې په هره څوژبیزه پروژه کې پلي کوو:

- په margin، padding، border او موقعیت ټاکلو کې left او right د inline-start او inline-end په معادلو بدل کړئ.
- په Tailwind CSS کې د ms-، me-، ps- او pe- کلاسونه وکاروئ، او rtl: حالت یوازې د ریښتینو استثناوو لپاره.
- پرېږدئ چې flexbox او grid د سند له لوري پیروي وکړي، پر ځای د دې چې په لاس یې برعکس کړئ.
- transformونه او انیمیشنونه، لکه ښوییدونکي مینوګانې او سلایډرونه، وګورئ، ځکه چې د translateX ارزښتونه پخپله نه برعکس کېږي.
- د هغو کمپوننټونو لنډ لېست وساتئ چې ځانګړو RTL سمونونو ته اړتیا لري، او هر ځل چې ډیزاین بدلېږي هغه بیا وګورئ.

د دې طریقې ساتنه ارزانه ده. هغه ټیمونه چې left او right مستقیم په کوډ کې لیکي، په پای کې دوه جلا سټایل فایلونه او داسې ستونزې لري چې یوازې په یوه ژبه کې ښکاري.

**د دري او پښتو لپاره کوم فونټونه غوره دي؟**

د دري او پښتو لپاره غوره فونټونه هغه دي چې د تورو بشپړ سیټ پوښي، په ارزانه اندرویډ تلیفونونو کې پاک ښکاري، او دومره سپک وي چې په ورو موبایل انټرنېټ پورته شي. خلاصې سرچینې کورنۍ لکه Vazirmatn، Noto Naskh Arabic او Noto Sans Arabic عام پیلامې دي، خو باید یې له خپلې منځپانګې سره وازمویئ.

پښتو معمولاً کمزوری ټکی دی. پښتو داسې توري لري چې هغه فونټونه چې پر فارسي تمرکز لري کله ناکله یې نه لري یا یې بد انځوروي، لکه ټ، ډ، ړ، ښ، ږ، ځ، څ، ڼ، ګ او ۍ. د فونټ له وروستي انتخاب مخکې، د ریښتیني پښتو متن یوه پاڼه ښکاره کړئ او د تشو څلورګوټیو، بدیلو تورو یا ناهوارو نښلونو په لټه کې شئ.

د تایپوګرافۍ قواعد چې له فارسي-عربي لیک سره مرسته کوي:

- اصلي متن ته د انګلیسي په پرتله د کرښو ترمنځ ډېر واټن ورکړئ، معمولاً شاوخوا ۱.۷ تر ۱.۹، ځکه چې دا لیک اوږدې پورته او ښکته برخې لري.
- د فونټ اندازه لږ لویه کړئ؛ هغه متن چې په انګلیسي کې په 16px لوستل کېږي، په دري او پښتو کې ډېری وخت کوچنی ښکاري.
- هېڅکله دري یا پښتو متن ته letter-spacing مه ورکوئ. دا کار د تورو ترمنځ نښلونونه ماتوي.
- له جعلي ایټالیک او لویو تورو له سټایلونو ډډه وکړئ، ځکه چې په دې لیک کې هېڅ معنا نه لري.
- فونټونه subset کړئ او یوازې هغه وزنونه پورته کړئ چې کاروئ یې، ترڅو پاڼه د څو سوه کیلوبایټه فونټ فایلونو انتظار ونه باسي.

**په RTL ترتیب کې څه باید برعکس شي او څه نه؟**

هر هغه څه چې لوری یا ترتیب ښیي برعکس کړئ، او هر هغه څه چې یو ریښتینی شی یا ثابت دود استازیتوب کوي مه بدلوئ. په دې برخه کې تېروتنه د RTL یوه له تر ټولو ښکاره تېروتنو څخه ده.

برعکس یې کړئ: د شاته او مخکې غشي، په breadcrumb او اکاردیونونو کې د لوري نښې، د پرمختګ پړاوونه، سلایډرونه، هغه اړخ چې ښوییدونکی مینو ترې پرانیستل کېږي، او په ترتیب کې د ستونونو لړۍ.

مه یې برعکس کوئ: لوګو، انځورونه، د ویډیو د پلې او ودرولو تڼۍ، د سم نښه، ساعتونه، هغه چارټونه چې د وخت محور یې ستاسو مخاطبان له کیڼ نه ښي ته لولي، او هر ځای پر ځای شوی انګلیسي متن. د لټون ذره‌بین یا د تلیفون آیکون هم همداسې پاتې کېږي.

**له انګلیسي، شمېرو او نېټو سره څه وکړو؟**

د لاتیني متن، شمېرو، د تلیفون شمېرو، برېښنالیک پتو او کوډونو هره برخه داسې ونغاړئ چې براوزر یې له کیڼ نه ښي ته وګڼي، او پرېږدئ چې شاوخوا جمله له ښي نه کیڼ ته پاتې شي. د HTML د bdi عنصر، یا یو span له dir="ltr" سره، دا کار په باوري ډول کوي. له دې پرته، یوه شمېره لکه +93 784 966 018 کېدای شي د جمع نښه یې په غلط پای کې ښکاره شي.

نور جزئیات چې مهم دي:

- پرېکړه وکړئ چې لاتیني شمېرې ښکاره کوئ که ختیځې عربي-هندي شمېرې، او یوشان چلند وکړئ. ډېری افغان کاروونکي دواړه ټایپوي، نو فورمې باید دواړه ومني او له خوندي کولو مخکې یې یوشان کړي.
- په لټون کې د ی او ک عربي او فارسي بڼې یوشان کړئ، کنه کاروونکي به هغه محصولات ونه مومي چې پر پاڼه یې ویني.
- نېټې په هغه بڼه وښایاست چې مخاطبان یې تمه لري. لمریزې هجري نېټې په افغانستان کې عامې دي، په داسې حال کې چې په بهر کې مېشت لیدونکي ښايي میلادي غوره کړي؛ په بوکینګونو او بلونو کې د دواړو ښودل له ګډوډۍ مخنیوی کوي.
- د برانډ او محصول نومونه لکه WhatsApp یا Google په لاتیني لیک وساتئ، که خلک یې همداسې پېژني.

**له پیل مخکې د RTL ازموینې چک‌لیست**

له پیل مخکې دا چک‌لیست د هرې ژبې په نسخه کې پلی کړئ:

1. هره پاڼه له ریښتینې دري او پښتو منځپانګې سره پرانیزئ، نه له ژباړل شوي نمونه متن سره.
2. وګورئ چې سرپاڼه، مینو، فوټر او breadcrumb له ښي خوا پیلېږي.
3. ټولې فورمې په دري او پښتو ډکې کړئ، د تېروتنې حالتونه هم پکې.
4. د تلیفون شمېرې او برېښنالیک پتې په فورمو کې ټایپ کړئ او ډاډ ترلاسه کړئ چې سم ښکاري.
5. ډاډ ترلاسه کړئ چې لوري لرونکي آیکونونه برعکس شوي او لوګو او د ویډیو کنټرولونه نه دي برعکس شوي.
6. په یوه ارزانه اندرویډ تلیفون کې له موبایل انټرنېټ سره ازموینه وکړئ، نه یوازې د دفتر په وای‌فای.
7. له هرې پاڼې ژبه بدله کړئ او ډاډ ترلاسه کړئ چې معادلې پاڼې ته رسېږئ.
8. د پاڼو سرلیکونه، میټا تشریحات او په ټولنیزو شبکو کې د شریکولو مخکتنه په هره ژبه کې وګورئ.
9. د سکرین لوستونکي سره ازموینه وکړئ ترڅو ډاډ ترلاسه کړئ چې ژبه سمه اعلانېږي.

په پروژو لکه د [عترت علم ښوونیز مرکز ویب‌سایټ](/portfolio/etrat-elm-educational-center) کې، د داخلې فورمو او د کورسونو پاڼو باید په درې واړو ژبو کې یو شان ښه کار کړی وای، او همدا ډول چک‌لیست دی چې کوچنۍ ستونزې د والدینو او زده‌کوونکو له لیدو مخکې رابرسېره کوي.

**له شین سره کار وکړئ**

شین څوژبیز Next.js ویب‌سایټونه ډیزاینوي او جوړوي چې پکې انګلیسي، دري او پښتو له لومړۍ ورځې برابر ګڼل کېږي، نه دا چې وروسته ورزیات شي. که نوي ویب‌سایټ ته اړتیا لرئ یا غواړئ ستاسو اوسنۍ RTL نسخه سمه شي، زموږ [د ویب ډیزاین خدمت](/services/web-design) وګورئ یا د info@sheen.af یا +93 784 966 018 له لارې [موږ سره اړیکه ونیسئ](/contact).`
        },
        faqs: [
            {
                q: {
                    en: "Can I translate my English website into Dari first and add RTL support later?",
                    da: "آیا می‌توانم اول ویب‌سایت انگلیسی‌ام را به دری ترجمه کنم و پشتیبانی RTL را بعداً اضافه کنم؟",
                    pa: "ایا کولای شم لومړی خپل انګلیسي ویب‌سایټ دري ته وژباړم او د RTL ملاتړ وروسته ورزیات کړم؟"
                },
                a: {
                    en: "You can, but it usually costs more than planning for it. If the original site hard-codes left and right in its CSS, adding RTL later means reworking most components. Building with logical CSS properties and separate URLs per language from the start lets you launch in English first and add Dari and Pashto later without redesigning the layout.",
                    da: "می‌توانید، اما معمولاً از برنامه‌ریزی از ابتدا گران‌تر تمام می‌شود. اگر ویب‌سایت اصلی left و right را مستقیم در CSS نوشته باشد، افزودن RTL در آینده یعنی بازسازی بیشتر کامپوننت‌ها. ساختن با ویژگی‌های منطقی CSS و URL جداگانه برای هر زبان از همان آغاز، به شما اجازه می‌دهد اول به انگلیسی راه‌اندازی کنید و بعداً دری و پشتو را بدون طراحی دوبارهٔ صفحه‌آرایی اضافه کنید.",
                    pa: "کولای شئ، خو معمولاً له پیله د پلان کولو په پرتله ګرانه تمامېږي. که اصلي ویب‌سایټ left او right مستقیم په CSS کې لیکلي وي، وروسته د RTL ورزیاتول د ډېرو کمپوننټونو بیا جوړول دي. له پیله د منطقي CSS ځانګړتیاوو او د هرې ژبې لپاره د جلا URL سره جوړول تاسو ته اجازه درکوي چې لومړی په انګلیسي پیل وکړئ او وروسته دري او پښتو پرته له دې ورزیاتې کړئ چې ترتیب بیا ډیزاین کړئ."
                }
            },
            {
                q: {
                    en: "Should Dari and Pashto use the same font on my website?",
                    da: "آیا دری و پشتو در ویب‌سایتم باید از یک فونت استفاده کنند؟",
                    pa: "ایا دري او پښتو زما په ویب‌سایټ کې باید یو فونټ وکاروي؟"
                },
                a: {
                    en: "They can, as long as the font fully supports Pashto letters such as ښ, ږ, ځ and ګ. Many sites use one family for both languages to keep the design consistent. If your chosen Dari font lacks Pashto glyphs, the browser substitutes a fallback font for those letters, which looks uneven, so test a page of real Pashto text before deciding.",
                    da: "می‌توانند، به شرطی که فونت حروف پشتو مانند ښ، ږ، ځ و ګ را کاملاً پشتیبانی کند. بسیاری از ویب‌سایت‌ها برای هر دو زبان از یک خانوادهٔ فونت استفاده می‌کنند تا طراحی یکدست بماند. اگر فونت انتخابی دری شما حروف پشتو را نداشته باشد، مرورگر برای آن حروف فونت جایگزین می‌گذارد که ناهموار به نظر می‌رسد؛ پس پیش از تصمیم، یک صفحه متن واقعی پشتو را آزمایش کنید.",
                    pa: "کولای شي، په دې شرط چې فونټ د پښتو توري لکه ښ، ږ، ځ او ګ بشپړ ملاتړ کړي. ډېری ویب‌سایټونه د دواړو ژبو لپاره یوه فونټ کورنۍ کاروي ترڅو ډیزاین یوشان پاتې شي. که ستاسو ټاکل شوی دري فونټ د پښتو توري ونه لري، براوزر د هغو تورو لپاره بدیل فونټ کاروي چې ناهوار ښکاري؛ نو له پرېکړې مخکې د ریښتیني پښتو متن یوه پاڼه وازمویئ."
                }
            },
            {
                q: {
                    en: "Does RTL website design affect SEO?",
                    da: "آیا طراحی ویب‌سایت RTL روی SEO تأثیر دارد؟",
                    pa: "ایا د RTL ویب‌سایټ ډیزاین پر SEO اغېز لري؟"
                },
                a: {
                    en: "Indirectly, yes. Correct lang attributes, separate URLs per language and hreflang tags help Google show the right version to Dari, Pashto and English searchers. A broken RTL layout also hurts engagement and conversions. Text direction itself is not a ranking factor, but the technical setup around it decides whether your Dari and Pashto pages are indexed and shown properly.",
                    da: "به‌طور غیرمستقیم، بله. ویژگی‌های درست lang، URLهای جداگانه برای هر زبان و تگ‌های hreflang به Google کمک می‌کنند نسخهٔ درست را به جستجوگران دری، پشتو و انگلیسی نشان دهد. صفحه‌آرایی خراب RTL همچنین به تعامل و تبدیل آسیب می‌زند. جهت متن به خودی خود عامل رتبه‌بندی نیست، اما تنظیمات فنی اطراف آن تعیین می‌کند که صفحه‌های دری و پشتوی شما درست ایندکس و نمایش داده شوند یا نه.",
                    pa: "په غیرمستقیم ډول، هو. سمې lang ځانګړتیاوې، د هرې ژبې لپاره جلا URLونه او hreflang ټګونه له Google سره مرسته کوي چې دري، پښتو او انګلیسي لټوونکو ته سمه نسخه وښيي. مات RTL ترتیب د کاروونکو ښکیلتیا او بدلون ته هم زیان رسوي. د متن لوری پخپله د درجه‌بندۍ عامل نه دی، خو د هغه شاوخوا تخنیکي تنظیمات ټاکي چې ستاسو دري او پښتو پاڼې سمې انډکس او ښکاره کېږي که نه."
                }
            },
            {
                q: {
                    en: "How much extra does a multilingual RTL website cost?",
                    da: "یک ویب‌سایت چندزبانهٔ RTL چقدر هزینهٔ اضافی دارد؟",
                    pa: "یو څوژبیز RTL ویب‌سایټ څومره اضافي لګښت لري؟"
                },
                a: {
                    en: "When multilingual support is planned from the start, the extra cost is mainly translation, content entry and testing time rather than a separate build. Retrofitting RTL into an existing left-to-right site is usually more expensive. Sheen's web design packages start from AFN 21,000, and we scope Dari and Pashto support in the quote upfront so there are no surprises later.",
                    da: "وقتی پشتیبانی چندزبانه از آغاز برنامه‌ریزی شود، هزینهٔ اضافی بیشتر مربوط به ترجمه، واردکردن محتوا و زمان آزمایش است، نه یک ساخت جداگانه. افزودن RTL به یک ویب‌سایت موجود چپ‌به‌راست معمولاً گران‌تر است. بسته‌های طراحی ویب‌سایت شین از ۲۱٬۰۰۰ افغانی شروع می‌شوند و ما پشتیبانی دری و پشتو را از ابتدا در قیمت‌گذاری مشخص می‌کنیم تا بعداً غافلگیری نباشد.",
                    pa: "کله چې څوژبیز ملاتړ له پیله پلان شي، اضافي لګښت ډېری د ژباړې، د منځپانګې د ننویستلو او د ازموینې د وخت لپاره وي، نه د جلا جوړونې لپاره. یو موجود له کیڼ نه ښي ته ویب‌سایټ ته د RTL ورزیاتول معمولاً ګران وي. د شین د ویب ډیزاین کڅوړې له ۲۱٬۰۰۰ افغانیو پیلېږي، او موږ د دري او پښتو ملاتړ له پیله په بیه کې روښانه کوو ترڅو وروسته هېڅ حیرانتیا نه وي."
                }
            }
        ],
        category: "web-dev",
        author: "Jawad Hakimi",
        date: "2026-10-16",
        updated: "2026-10-16",
        readTime: "7 min read",
        image: "/logo.png",
        tags: ["rtl website design", "rtl web design best practices", "Dari website design", "Pashto website design", "CSS logical properties", "multilingual website Afghanistan", "Next.js 16 i18n", "Kabul web design"]
    },
    {
        id: "125",
        slug: "website-speed-slow-internet-afghanistan",
        title: {
            en: "Website Speed Optimization for Slow Internet in Afghanistan",
            da: "بهینه‌سازی سرعت ویب‌سایت برای انترنت کند در افغانستان",
            pa: "په افغانستان کې د ورو انټرنېټ لپاره د ویب‌سایټ د سرعت ښه کول"
        },
        excerpt: {
            en: "Website speed optimization for slow mobile data in Afghanistan: what makes sites slow, how to measure Core Web Vitals, and an 11-step checklist to fix it.",
            da: "بهینه‌سازی سرعت ویب‌سایت برای انترنت موبایل کند در افغانستان: چه چیزی ویب‌سایت را کند می‌کند، چگونه Core Web Vitals را بسنجیم و یک چک‌لیست ۱۱ مرحله‌ای برای رفع آن.",
            pa: "په افغانستان کې د ورو موبایل انټرنېټ لپاره د ویب‌سایټ د سرعت ښه کول: څه شی ویب‌سایټ ورو کوي، Core Web Vitals څنګه اندازه کړو، او د سمون لپاره ۱۱ ګامیز چک‌لیست."
        },
        content: {
            en: `Website speed optimization for Afghanistan means building pages that load quickly on slow, expensive and unstable mobile data, not just on office broadband. In practice it comes down to three things: send fewer bytes, send them in the right order, and make the page usable before everything has finished downloading.

**Key Takeaways**

- Set a page weight budget; for most business pages, keeping the first load well under 1 MB is a realistic target.
- Images are usually the biggest problem: resize them, compress them and serve modern formats such as WebP or AVIF.
- Remove third-party scripts, chat widgets and heavy sliders that add weight without adding enquiries.
- Measure Core Web Vitals (LCP, INP and CLS) and test on a cheap Android phone over mobile data.
- Use a CDN and caching so returning visitors, and diaspora customers abroad, get fast responses too.

**Why Does Website Speed Matter More in Afghanistan?**

Website speed matters more in Afghanistan because a large share of visitors browse on mobile data that is slower, less stable and more expensive relative to income than in many other markets. Every extra megabyte costs the visitor money and time, and a page that stalls on a weak 3G or 4G signal is often abandoned before the offer even appears.

Power cuts and patchy coverage outside city centres make it worse. Someone checking your prices from a shop in Kandahar or a minibus in Kabul does not have the patience, or the data allowance, for a 6 MB homepage with an autoplay video.

Speed also affects visibility. Google uses page experience signals, including Core Web Vitals, as part of how it evaluates pages, and fast sites are easier for both search engines and AI assistants to crawl. A slow site rarely ranks well for long, and it converts worse even when it does.

**What Makes a Website Slow on Mobile Data?**

Most slow websites are slow for the same handful of reasons, and very few of them are about the server. The common culprits:

- Oversized images uploaded straight from a phone or camera, often several megabytes each.
- Too much JavaScript, especially from page builders, animation libraries and themes that load everything on every page.
- Several web fonts and weights, often for Latin, Dari and Pashto at once.
- Third-party scripts: chat widgets, social media embeds, multiple analytics tools and advertising pixels.
- Autoplay background videos and image sliders on the homepage.
- No caching, so every visit downloads everything again.
- Cheap shared hosting with slow response times and no CDN.

**How Do You Measure Website Speed Properly?**

Measure with both lab tools and real-user data, and always test under conditions that match your audience. Google PageSpeed Insights shows Lighthouse lab results alongside field data from real Chrome users when your site has enough traffic. The Core Web Vitals report in Search Console groups problem pages across the whole site.

Focus on three metrics. Google's "good" thresholds are an LCP (Largest Contentful Paint) of 2.5 seconds or less, an INP (Interaction to Next Paint) of 200 milliseconds or less, and a CLS (Cumulative Layout Shift) of 0.1 or less. We explain INP in detail in our [Core Web Vitals and INP guide](/blog/core-web-vitals-inp-2026).

Lab scores on a fast laptop are misleading. Use Chrome DevTools to throttle the network to a slow 4G profile and the CPU to a mid-range phone, then watch what the visitor sees in the first few seconds. Better still, open the site on a low-cost Android phone using a local SIM.

**Website Speed Optimization Checklist**

Work through these steps in order; the first few usually deliver most of the gain:

1. Set a budget: decide the maximum page weight and number of requests for key pages, and check it before every release.
2. Resize every image to the size it is displayed at, and serve WebP or AVIF with responsive sizes.
3. Lazy-load images and embeds below the fold, but never the main hero image.
4. Replace autoplay videos and sliders with a single strong image and a clear call to action.
5. Audit third-party scripts and remove anything nobody uses; load the rest after the page is interactive.
6. Limit fonts to one or two families and the weights you actually use, subset them and self-host them.
7. Ship less JavaScript: render content on the server and send interactive code only where it is needed.
8. Enable compression (Brotli or gzip) and long cache lifetimes for static files.
9. Serve the site through a CDN so files are delivered from a location near the visitor.
10. Reserve space for images, ads and embeds so the layout does not jump while loading.
11. Re-test on a real phone over mobile data after every significant change.

**How Should Images and Fonts Be Handled?**

Images should be resized, compressed and served in modern formats automatically, so editors cannot accidentally upload a 5 MB photo to the homepage. Frameworks like Next.js include an image component that generates responsive sizes and modern formats, and a CMS can enforce maximum upload sizes.

For product and gallery pages, show small thumbnails first and load the full-size image only when someone taps it. For hero images, choose a photo that still looks good when compressed hard, and give it priority loading because it usually determines LCP.

Fonts deserve the same discipline. A multilingual site can easily load six or more font files. Pick one family that covers Latin, Dari and Pashto where possible, subset it to the characters you need, and use font-display: swap so text appears immediately in a system font while the web font loads. Our guide to [RTL website design](/blog/rtl-website-design-best-practices) covers choosing fonts that support every Pashto letter.

**Does Hosting Location Matter for Afghan Websites?**

Hosting location matters less than it used to, because a good CDN serves your static files from edge locations close to each visitor. What matters more is that the origin server responds quickly and that most pages can be cached.

Many Afghan businesses host abroad for reliability and payment reasons, and that works well when a CDN sits in front. It also helps your diaspora customers in Europe, North America and Australia, who receive the same cached files from nearby. If you are choosing a domain and host, our [guide to .af domains and hosting](/blog/domain-hosting-guide-af-domain) covers the practical options.

**Should You Build a Lighter Website or a PWA?**

Start with a lighter website; a progressive web app is a useful next step when visitors return often or need parts of the site offline. A PWA uses a service worker to cache pages and assets, so repeat visits load almost instantly and some content still works when the connection drops.

That suits catalogues, course materials, menus and booking pages. It does not fix a heavy site on the first visit, so the fundamentals above come first. We cover when it is worth it in our article on [progressive web apps in Afghanistan](/blog/progressive-web-apps-pwa-afghanistan).

**Work With Sheen**

Sheen builds fast, multilingual Next.js websites designed for real Afghan connections, and we can audit and speed up an existing site. See our [web design service](/services/web-design), or [book a call](/book) and reach us at info@sheen.af or +93 784 966 018.`,
            da: `بهینه‌سازی سرعت ویب‌سایت برای افغانستان یعنی ساختن صفحه‌هایی که روی انترنت موبایل کند، گران و ناپایدار سریع بارگذاری شوند، نه فقط روی انترنت پرسرعت دفتر. در عمل این کار به سه چیز خلاصه می‌شود: بایت‌های کمتر بفرستید، آن‌ها را به ترتیب درست بفرستید، و صفحه را پیش از اینکه همه‌چیز کاملاً دانلود شود قابل استفاده کنید.

**نکات کلیدی**

- برای وزن صفحه بودجه تعیین کنید؛ برای بیشتر صفحه‌های تجاری، نگه داشتن بارگذاری اول بسیار کمتر از ۱ مگابایت هدفی واقع‌بینانه است.
- تصاویر معمولاً بزرگ‌ترین مشکل اند: اندازه‌شان را کوچک کنید، فشرده‌شان کنید و آن‌ها را در فارمت‌های جدید مانند WebP یا AVIF ارائه دهید.
- اسکریپت‌های شخص ثالث، ویجت‌های چت و اسلایدرهای سنگینی را که وزن اضافه می‌کنند اما درخواست مشتری نمی‌آورند حذف کنید.
- Core Web Vitals (یعنی LCP، INP و CLS) را اندازه بگیرید و روی یک گوشی اندرویدی ارزان با انترنت موبایل آزمایش کنید.
- از CDN و کش استفاده کنید تا بازدیدکنندگان تکراری و مشتریان مقیم خارج هم پاسخ سریع بگیرند.

**چرا سرعت ویب‌سایت در افغانستان اهمیت بیشتری دارد؟**

سرعت ویب‌سایت در افغانستان مهم‌تر است، چون بخش بزرگی از بازدیدکنندگان با انترنت موبایلی وب‌گردی می‌کنند که نسبت به بسیاری از بازارهای دیگر کندتر، ناپایدارتر و در مقایسه با درآمد گران‌تر است. هر مگابایت اضافی برای بازدیدکننده پول و وقت هزینه دارد، و صفحه‌ای که روی سیگنال ضعیف 3G یا 4G گیر می‌کند، اغلب پیش از اینکه پیشنهاد شما حتی ظاهر شود رها می‌شود.

قطع برق و پوشش ضعیف شبکه بیرون از مرکز شهرها وضع را بدتر می‌کند. کسی که از یک دکان در کندهار یا از داخل یک موتر مسافربری در کابل قیمت‌های شما را می‌بیند، حوصله یا بستهٔ انترنت کافی برای یک صفحهٔ اصلی ۶ مگابایتی با ویدیوی خودکار ندارد.

سرعت روی دیده‌شدن هم تأثیر دارد. Google از سیگنال‌های تجربهٔ صفحه، از جمله Core Web Vitals، به‌عنوان بخشی از ارزیابی صفحه‌ها استفاده می‌کند، و خزیدن در ویب‌سایت‌های سریع برای موتورهای جستجو و دستیارهای هوش مصنوعی آسان‌تر است. یک ویب‌سایت کند به ندرت برای مدت طولانی رتبهٔ خوب می‌گیرد، و حتی وقتی بگیرد، مشتری کمتری جذب می‌کند.

**چه چیزی ویب‌سایت را روی انترنت موبایل کند می‌کند؟**

بیشتر ویب‌سایت‌های کند به چند دلیل مشابه کند اند، و تعداد کمی از این دلایل به سرور مربوط است. مقصران رایج:

- تصاویر بیش از حد بزرگ که مستقیم از گوشی یا کمره آپلود شده‌اند و اغلب هر کدام چند مگابایت اند.
- جاوااسکریپت زیاد، به‌ویژه از صفحه‌سازها، کتابخانه‌های انیمیشن و قالب‌هایی که همه‌چیز را در هر صفحه بارگذاری می‌کنند.
- چندین فونت وب و وزن مختلف، اغلب برای لاتین، دری و پشتو به‌طور هم‌زمان.
- اسکریپت‌های شخص ثالث: ویجت‌های چت، محتوای جاسازی‌شدهٔ شبکه‌های اجتماعی، چند ابزار تحلیل و پیکسل‌های اعلانات.
- ویدیوهای پس‌زمینهٔ خودکار و اسلایدرهای تصویر در صفحهٔ اصلی.
- نبود کش، که باعث می‌شود هر بازدید همه‌چیز را دوباره دانلود کند.
- هاستینگ اشتراکی ارزان با زمان پاسخ کند و بدون CDN.

**سرعت ویب‌سایت را چگونه درست اندازه بگیریم؟**

هم با ابزارهای آزمایشگاهی و هم با داده‌های کاربران واقعی اندازه بگیرید، و همیشه در شرایطی آزمایش کنید که با مخاطب شما همخوانی داشته باشد. Google PageSpeed Insights نتایج آزمایشگاهی Lighthouse را در کنار داده‌های میدانی کاربران واقعی Chrome نشان می‌دهد، به شرطی که ویب‌سایت شما ترافیک کافی داشته باشد. گزارش Core Web Vitals در Search Console صفحه‌های مشکل‌دار را در کل ویب‌سایت دسته‌بندی می‌کند.

روی سه معیار تمرکز کنید. آستانه‌های «خوب» Google عبارت اند از LCP (بزرگ‌ترین نمایش محتوا) ۲.۵ ثانیه یا کمتر، INP (تعامل تا نمایش بعدی) ۲۰۰ میلی‌ثانیه یا کمتر، و CLS (جابه‌جایی تجمعی صفحه‌آرایی) ۰.۱ یا کمتر. INP را به تفصیل در [راهنمای Core Web Vitals و INP](/blog/core-web-vitals-inp-2026) توضیح داده‌ایم.

نمره‌های آزمایشگاهی روی یک لپ‌تاپ سریع گمراه‌کننده اند. با Chrome DevTools سرعت شبکه را روی پروفایل 4G کند و پردازنده را روی سطح یک گوشی متوسط محدود کنید، سپس ببینید بازدیدکننده در چند ثانیهٔ اول چه می‌بیند. بهتر از آن، ویب‌سایت را روی یک گوشی اندرویدی ارزان با سیم‌کارت محلی باز کنید.

**چک‌لیست بهینه‌سازی سرعت ویب‌سایت**

این مراحل را به ترتیب انجام دهید؛ چند مرحلهٔ اول معمولاً بیشترین بهبود را می‌آورند:

1. بودجه تعیین کنید: حداکثر وزن صفحه و تعداد درخواست‌ها را برای صفحه‌های کلیدی مشخص کنید و پیش از هر انتشار آن را بررسی کنید.
2. هر تصویر را به اندازه‌ای که نمایش داده می‌شود کوچک کنید و آن را به فارمت WebP یا AVIF با اندازه‌های واکنش‌گرا ارائه دهید.
3. تصاویر و محتوای جاسازی‌شدهٔ پایین صفحه را با تأخیر (lazy-load) بارگذاری کنید، اما هرگز تصویر اصلی بالای صفحه را.
4. ویدیوهای خودکار و اسلایدرها را با یک تصویر قوی و یک دعوت به اقدام روشن جایگزین کنید.
5. اسکریپت‌های شخص ثالث را بازبینی کنید و هر چیزی را که کسی استفاده نمی‌کند حذف کنید؛ بقیه را پس از تعاملی شدن صفحه بارگذاری کنید.
6. فونت‌ها را به یک یا دو خانواده و فقط وزن‌هایی که واقعاً استفاده می‌کنید محدود کنید، آن‌ها را subset کنید و روی سرور خودتان میزبانی کنید.
7. جاوااسکریپت کمتری بفرستید: محتوا را روی سرور رندر کنید و کد تعاملی را فقط جایی بفرستید که لازم است.
8. فشرده‌سازی (Brotli یا gzip) و مدت طولانی کش را برای فایل‌های ثابت فعال کنید.
9. ویب‌سایت را از طریق CDN ارائه دهید تا فایل‌ها از نزدیک‌ترین مکان به بازدیدکننده تحویل داده شوند.
10. برای تصاویر، اعلانات و محتوای جاسازی‌شده جا رزرو کنید تا صفحه‌آرایی هنگام بارگذاری جابه‌جا نشود.
11. پس از هر تغییر مهم، دوباره روی یک گوشی واقعی با انترنت موبایل آزمایش کنید.

**با تصاویر و فونت‌ها چگونه برخورد کنیم؟**

تصاویر باید به‌طور خودکار کوچک، فشرده و در فارمت‌های جدید ارائه شوند، تا ویرایشگران نتوانند به اشتباه یک عکس ۵ مگابایتی را در صفحهٔ اصلی آپلود کنند. فریم‌ورک‌هایی مانند Next.js یک کامپوننت تصویر دارند که اندازه‌های واکنش‌گرا و فارمت‌های جدید تولید می‌کند، و یک CMS می‌تواند حداکثر اندازهٔ آپلود را اجباری کند.

برای صفحه‌های محصول و گالری، اول تصاویر کوچک نمونه را نشان دهید و تصویر با اندازهٔ کامل را فقط وقتی بارگذاری کنید که کسی روی آن بزند. برای تصاویر اصلی بالای صفحه، عکسی انتخاب کنید که با فشرده‌سازی زیاد هم خوب به نظر برسد، و به آن اولویت بارگذاری بدهید، چون معمولاً LCP را تعیین می‌کند.

فونت‌ها هم همین انضباط را لازم دارند. یک ویب‌سایت چندزبانه به آسانی شش فایل فونت یا بیشتر بارگذاری می‌کند. در صورت امکان یک خانوادهٔ فونت انتخاب کنید که لاتین، دری و پشتو را پوشش دهد، آن را به حروف مورد نیاز محدود کنید، و از font-display: swap استفاده کنید تا متن فوراً با فونت سیستم ظاهر شود و فونت وب در این میان بارگذاری شود. [راهنمای طراحی ویب‌سایت RTL](/blog/rtl-website-design-best-practices) ما انتخاب فونت‌هایی را که همهٔ حروف پشتو را پشتیبانی می‌کنند توضیح می‌دهد.

**آیا محل هاستینگ برای ویب‌سایت‌های افغان مهم است؟**

محل هاستینگ کمتر از گذشته اهمیت دارد، چون یک CDN خوب فایل‌های ثابت شما را از مکان‌هایی نزدیک به هر بازدیدکننده ارائه می‌کند. آنچه مهم‌تر است این است که سرور اصلی سریع پاسخ دهد و بیشتر صفحه‌ها قابل کش باشند.

بسیاری از تجارت‌های افغان به دلیل پایداری و مسائل پرداخت در خارج هاست می‌کنند، و این روش وقتی یک CDN در جلوی آن باشد به خوبی کار می‌کند. این کار به مشتریان مقیم شما در اروپا، امریکای شمالی و استرالیا هم کمک می‌کند که همان فایل‌های کش‌شده را از نزدیک دریافت می‌کنند. اگر در حال انتخاب دامنه و هاست هستید، [راهنمای دامنه‌های .af و هاستینگ](/blog/domain-hosting-guide-af-domain) ما گزینه‌های عملی را توضیح می‌دهد.

**ویب‌سایت سبک‌تر بسازیم یا PWA؟**

با یک ویب‌سایت سبک‌تر شروع کنید؛ اپلیکیشن وب پیش‌رونده (PWA) گام بعدی مفیدی است وقتی بازدیدکنندگان زیاد برمی‌گردند یا به بخش‌هایی از ویب‌سایت به‌صورت آفلاین نیاز دارند. PWA با استفاده از service worker صفحه‌ها و فایل‌ها را کش می‌کند، پس بازدیدهای بعدی تقریباً فوری بارگذاری می‌شوند و برخی محتواها حتی هنگام قطع اتصال کار می‌کنند.

این روش برای کاتالوگ‌ها، مواد درسی، منوها و صفحه‌های رزرو مناسب است. اما ویب‌سایت سنگین را در بازدید اول درست نمی‌کند، پس اصول بالا در اولویت اند. اینکه چه زمانی ارزشش را دارد در مقالهٔ ما دربارهٔ [اپلیکیشن‌های وب پیش‌رونده در افغانستان](/blog/progressive-web-apps-pwa-afghanistan) آمده است.

**با شین کار کنید**

شین ویب‌سایت‌های سریع و چندزبانهٔ Next.js می‌سازد که برای اتصال‌های واقعی افغانستان طراحی شده‌اند، و می‌توانیم یک ویب‌سایت موجود را بررسی و سریع‌تر کنیم. [خدمات طراحی ویب‌سایت](/services/web-design) ما را ببینید، یا [یک جلسه رزرو کنید](/book) و از طریق info@sheen.af یا +93 784 966 018 با ما در تماس شوید.`,
            pa: `د افغانستان لپاره د ویب‌سایټ د سرعت ښه کول دا معنا لري چې داسې پاڼې جوړې کړئ چې په ورو، ګران او بې‌ثباته موبایل انټرنېټ کې ژر پورته شي، نه یوازې د دفتر په چټک انټرنېټ کې. په عمل کې دا کار درې شیانو ته راټولېږي: لږ بایټونه ولېږئ، په سم ترتیب یې ولېږئ، او پاڼه مخکې له دې د کارولو وړ کړئ چې هر څه بشپړ ډاونلوډ شي.

**مهم ټکي**

- د پاڼې د وزن لپاره بودیجه وټاکئ؛ د ډېرو سوداګریزو پاڼو لپاره، د لومړي ځل پورته کېدو له ۱ مېګابایټ څخه ډېر کم ساتل یو واقعي هدف دی.
- انځورونه معمولاً تر ټولو لویه ستونزه وي: اندازه یې کمه کړئ، فشرده یې کړئ او په نویو بڼو لکه WebP یا AVIF کې یې وړاندې کړئ.
- د درېیمګړو سکرېپټونه، د چټ ویجټونه او درانه سلایډرونه لرې کړئ چې وزن زیاتوي خو د پیرودونکو غوښتنې نه زیاتوي.
- Core Web Vitals (یعنې LCP، INP او CLS) اندازه کړئ او په یوه ارزانه اندرویډ تلیفون کې له موبایل انټرنېټ سره ازموینه وکړئ.
- له CDN او کش څخه کار واخلئ ترڅو بېرته راتلونکي لیدونکي او په بهر کې مېشت پیرودونکي هم چټک ځواب ترلاسه کړي.

**ولې په افغانستان کې د ویب‌سایټ سرعت ډېر مهم دی؟**

په افغانستان کې د ویب‌سایټ سرعت ځکه ډېر مهم دی چې د لیدونکو لویه برخه په داسې موبایل انټرنېټ کار کوي چې د ډېرو نورو بازارونو په پرتله ورو، بې‌ثباته او د عاید په پرتله ګران دی. هر اضافي مېګابایټ لیدونکي ته پیسې او وخت لګوي، او هغه پاڼه چې په کمزوري 3G یا 4G سیګنال کې بنده پاتې شي، ډېری وخت مخکې له دې پرېښودل کېږي چې ستاسو وړاندیز ښکاره شي.

د برېښنا پرې کېدل او د ښارونو له مرکز بهر کمزوری پوښښ وضعیت نور هم خرابوي. هغه څوک چې په کندهار کې له یوه دوکان یا په کابل کې د یوې مسافر وړونکې موټرې دننه ستاسو بیې ګوري، د یوې ۶ مېګابایټه اصلي پاڼې لپاره چې خپلکاره ویډیو لري حوصله یا کافي انټرنېټ کڅوړه نه لري.

سرعت پر لیدل کېدو هم اغېز لري. Google د پاڼې د تجربې نښې، په شمول د Core Web Vitals، د پاڼو د ارزونې د یوې برخې په توګه کاروي، او چټک ویب‌سایټونه د لټون انجنونو او د مصنوعي ځیرکتیا مرستیالانو لپاره په اسانۍ کتل کېږي. ورو ویب‌سایټ ډېر کم د اوږدې مودې لپاره ښه درجه اخلي، او حتی کله چې یې واخلي، لږ پیرودونکي راجلبوي.

**څه شی ویب‌سایټ په موبایل انټرنېټ کې ورو کوي؟**

ډېری ورو ویب‌سایټونه د څو ورته لاملونو له امله ورو وي، او ډېر لږ یې له سرور سره تړاو لري. عام لاملونه:

- ډېر لوی انځورونه چې مستقیم له تلیفون یا کمرې پورته شوي، او ډېری وخت هر یو یې څو مېګابایټه وي.
- ډېر جاواسکرېپټ، په ځانګړي ډول د پاڼې جوړونکو، د انیمیشن کتابتونونو او هغو تیمونو څخه چې په هره پاڼه کې هر څه پورته کوي.
- څو ویب فونټونه او وزنونه، ډېری وخت په یو وخت د لاتیني، دري او پښتو لپاره.
- د درېیمګړو سکرېپټونه: د چټ ویجټونه، د ټولنیزو رسنیو ځای پر ځای شوې منځپانګه، څو د تحلیل وسایل او د اعلاناتو پیکسلونه.
- په اصلي پاڼه کې د شالید خپلکاره ویډیوګانې او د انځورونو سلایډرونه.
- د کش نشتوالی، چې له امله یې هر لیدنه بیا هر څه ډاونلوډ کوي.
- ارزانه ګډ هاسټینګ چې ځواب یې ورو وي او CDN نه لري.

**د ویب‌سایټ سرعت څنګه په سمه توګه اندازه کړو؟**

هم د لابراتواري وسایلو او هم د ریښتینو کاروونکو له معلوماتو سره یې اندازه کړئ، او تل په داسې شرایطو کې ازموینه وکړئ چې ستاسو له مخاطبانو سره سمون ولري. Google PageSpeed Insights د Lighthouse لابراتواري پایلې د Chrome د ریښتینو کاروونکو د ساحوي معلوماتو تر څنګ ښیي، په دې شرط چې ستاسو ویب‌سایټ کافي ترافیک ولري. په Search Console کې د Core Web Vitals راپور په ټول ویب‌سایټ کې ستونزمنې پاڼې ډلبندي کوي.

پر درې معیارونو تمرکز وکړئ. د Google «ښه» حدونه دا دي: LCP (تر ټولو لویې منځپانګې ښکاره کېدل) ۲.۵ ثانیې یا لږ، INP (له تعامل نه تر راتلونکي ښکاره کېدو) ۲۰۰ ملي ثانیې یا لږ، او CLS (د ترتیب ټولیز ځای بدلون) ۰.۱ یا لږ. موږ INP په تفصیل سره د [Core Web Vitals او INP په لارښود](/blog/core-web-vitals-inp-2026) کې تشریح کړی دی.

په یوه چټک لپ‌ټاپ کې لابراتواري نمرې غلطې لارې ته بیایي. د Chrome DevTools په مرسته شبکه د ورو 4G پروفایل او پروسسر د یوه منځني تلیفون کچې ته محدود کړئ، بیا وګورئ چې لیدونکی په لومړیو څو ثانیو کې څه ویني. له دې هم ښه دا ده چې ویب‌سایټ په یوه ارزانه اندرویډ تلیفون کې د محلي سیم کارت سره پرانیزئ.

**د ویب‌سایټ د سرعت د ښه کولو چک‌لیست**

دا ګامونه په ترتیب سره ترسره کړئ؛ لومړي څو ګامونه معمولاً تر ټولو ډېر ښه والی راولي:

1. بودیجه وټاکئ: د مهمو پاڼو لپاره د پاڼې اعظمي وزن او د غوښتنو شمېر وټاکئ، او د هرې خپرونې مخکې یې وګورئ.
2. هر انځور هغې اندازې ته کوچنی کړئ چې پکې ښودل کېږي، او په WebP یا AVIF بڼه د غبرګوني اندازو سره یې وړاندې کړئ.
3. د پاڼې لاندې برخې انځورونه او ځای پر ځای شوې منځپانګه په ځنډ (lazy-load) پورته کړئ، خو هېڅکله د پاڼې د سر اصلي انځور نه.
4. خپلکاره ویډیوګانې او سلایډرونه د یوه قوي انځور او یوې روښانه بلنې سره بدل کړئ.
5. د درېیمګړو سکرېپټونه وڅېړئ او هر هغه څه لرې کړئ چې څوک یې نه کاروي؛ پاتې یې وروسته له دې پورته کړئ چې پاڼه د تعامل وړ شي.
6. فونټونه یوې یا دوو کورنیو او یوازې هغو وزنونو ته محدود کړئ چې په ریښتیا یې کاروئ، subset یې کړئ او په خپل سرور یې کېږدئ.
7. لږ جاواسکرېپټ ولېږئ: منځپانګه په سرور کې رنډر کړئ او تعاملي کوډ یوازې هلته ولېږئ چې اړتیا ورته وي.
8. د ثابتو فایلونو لپاره فشرده کول (Brotli یا gzip) او د کش اوږده موده فعاله کړئ.
9. ویب‌سایټ د CDN له لارې وړاندې کړئ ترڅو فایلونه لیدونکي ته تر ټولو نږدې ځای څخه ورسېږي.
10. د انځورونو، اعلاناتو او ځای پر ځای شوې منځپانګې لپاره ځای خوندي کړئ ترڅو ترتیب د پورته کېدو پر مهال ونه ښوري.
11. له هر مهم بدلون وروسته، بیا په ریښتیني تلیفون کې له موبایل انټرنېټ سره ازموینه وکړئ.

**له انځورونو او فونټونو سره څنګه چلند وکړو؟**

انځورونه باید په اتومات ډول کوچني، فشرده او په نویو بڼو کې وړاندې شي، ترڅو ایډیټران په تېروتنه اصلي پاڼې ته ۵ مېګابایټه انځور پورته نه کړي. فریم‌ورکونه لکه Next.js د انځور کمپوننټ لري چې غبرګونې اندازې او نوې بڼې جوړوي، او یو CMS کولای شي د پورته کولو اعظمي اندازه اجباري کړي.

د محصول او ګالرۍ پاڼو لپاره، لومړی کوچني نمونه انځورونه وښایاست او بشپړ انځور یوازې هغه وخت پورته کړئ چې څوک پرې ټک وکړي. د پاڼې د سر انځورونو لپاره داسې عکس وټاکئ چې له ډېر فشرده کېدو وروسته هم ښه ښکاري، او هغه ته د پورته کېدو لومړیتوب ورکړئ، ځکه چې معمولاً LCP ټاکي.

فونټونه هم همدې ډسپلین ته اړتیا لري. یو څوژبیز ویب‌سایټ په اسانۍ شپږ یا ډېر فونټ فایلونه پورته کوي. که امکان ولري یوه فونټ کورنۍ وټاکئ چې لاتیني، دري او پښتو پوښي، هغه اړینو تورو ته محدوده کړئ، او له font-display: swap څخه کار واخلئ ترڅو متن سمدلاسه د سیسټم په فونټ ښکاره شي او په همدې وخت کې ویب فونټ پورته شي. زموږ د [RTL ویب‌سایټ ډیزاین لارښود](/blog/rtl-website-design-best-practices) د داسې فونټونو ټاکل تشریح کوي چې د پښتو ټول توري ملاتړ کوي.

**ایا د هاسټینګ ځای د افغان ویب‌سایټونو لپاره مهم دی؟**

د هاسټینګ ځای د پخوا په پرتله لږ اهمیت لري، ځکه چې یو ښه CDN ستاسو ثابت فایلونه هر لیدونکي ته له نږدې ځایونو وړاندې کوي. هغه څه چې ډېر مهم دي دا دي چې اصلي سرور ژر ځواب ورکړي او ډېری پاڼې د کش وړ وي.

ډېرې افغان سوداګرۍ د باور وړتیا او د تادیاتو د ستونزو له امله په بهر کې هاسټینګ کوي، او دا طریقه هغه وخت ښه کار کوي چې CDN یې مخې ته وي. دا ستاسو هغو پیرودونکو ته هم ګټه رسوي چې په اروپا، شمالي امریکا او استرالیا کې مېشت دي او همغه کش شوي فایلونه له نږدې ترلاسه کوي. که ډومېن او هاسټ ټاکئ، زموږ د [.af ډومېنونو او هاسټینګ لارښود](/blog/domain-hosting-guide-af-domain) عملي انتخابونه تشریح کوي.

**سپک ویب‌سایټ جوړ کړو که PWA؟**

له یوه سپک ویب‌سایټ څخه پیل وکړئ؛ پرمختللی ویب اپلیکیشن (PWA) هغه وخت ګټور بل ګام دی چې لیدونکي ډېر بېرته راځي یا د ویب‌سایټ ځینو برخو ته پرته له انټرنېټه اړتیا لري. PWA د service worker په مرسته پاڼې او فایلونه کش کوي، نو راتلونکې لیدنې نږدې سمدلاسه پورته کېږي او ځینې منځپانګه حتی د اړیکې د پرې کېدو پر مهال هم کار کوي.

دا طریقه د کتلاګونو، درسي موادو، مینوګانو او د بوکینګ پاڼو لپاره مناسبه ده. خو په لومړۍ لیدنه کې دروند ویب‌سایټ نه سموي، نو پورته اصول لومړیتوب لري. دا چې کله ارزښت لري، زموږ په هغه لیکنه کې راغلي چې د [افغانستان کې پرمختللو ویب اپلیکیشنونو](/blog/progressive-web-apps-pwa-afghanistan) په اړه ده.

**له شین سره کار وکړئ**

شین چټک او څوژبیز Next.js ویب‌سایټونه جوړوي چې د افغانستان د ریښتینو اړیکو لپاره ډیزاین شوي، او موږ کولای شو یو موجود ویب‌سایټ وڅېړو او چټک یې کړو. زموږ [د ویب ډیزاین خدمت](/services/web-design) وګورئ، یا [یوه غونډه بوک کړئ](/book) او د info@sheen.af یا +93 784 966 018 له لارې موږ سره اړیکه ونیسئ.`
        },
        faqs: [
            {
                q: {
                    en: "What is a good page size for a website in Afghanistan?",
                    da: "اندازهٔ مناسب صفحه برای یک ویب‌سایت در افغانستان چقدر است؟",
                    pa: "په افغانستان کې د یوه ویب‌سایټ لپاره د پاڼې مناسبه اندازه څومره ده؟"
                },
                a: {
                    en: "There is no official standard, but keeping key pages well under 1 MB on first load is a sensible target, and simple pages can be much lighter. Every kilobyte costs mobile users data and time. Check the total transferred size in the Network tab of Chrome DevTools, and look first at images, fonts and third-party scripts, which usually make up most of the weight.",
                    da: "معیار رسمی وجود ندارد، اما نگه داشتن صفحه‌های کلیدی بسیار کمتر از ۱ مگابایت در بارگذاری اول هدفی معقول است، و صفحه‌های ساده می‌توانند بسیار سبک‌تر باشند. هر کیلوبایت برای کاربران موبایل بستهٔ انترنت و وقت مصرف می‌کند. اندازهٔ کل انتقال‌یافته را در بخش Network ابزار Chrome DevTools بررسی کنید، و اول به تصاویر، فونت‌ها و اسکریپت‌های شخص ثالث نگاه کنید که معمولاً بیشتر وزن را تشکیل می‌دهند.",
                    pa: "رسمي معیار نشته، خو د مهمو پاڼو ساتل په لومړي ځل پورته کېدو کې له ۱ مېګابایټ څخه ډېر کم یو معقول هدف دی، او ساده پاڼې کولای شي ډېرې سپکې وي. هر کیلوبایټ د موبایل کاروونکو انټرنېټ او وخت لګوي. ټوله لېږدول شوې اندازه د Chrome DevTools د Network برخه کې وګورئ، او لومړی انځورونو، فونټونو او د درېیمګړو سکرېپټونو ته پام وکړئ چې معمولاً د وزن ډېره برخه جوړوي."
                }
            },
            {
                q: {
                    en: "Will a faster website improve my Google ranking?",
                    da: "آیا ویب‌سایت سریع‌تر رتبهٔ من در Google را بهتر می‌کند؟",
                    pa: "ایا چټک ویب‌سایټ په Google کې زما درجه ښه کوي؟"
                },
                a: {
                    en: "Speed helps, but it is one signal among many. Google uses page experience, including Core Web Vitals, as part of its evaluation, yet relevant, helpful content still matters most. The bigger effect is often on behaviour: faster pages keep visitors from leaving, which leads to more enquiries and sales. A fast site with weak content will not outrank a slower site with much better answers.",
                    da: "سرعت کمک می‌کند، اما یکی از سیگنال‌های بسیار است. Google تجربهٔ صفحه، از جمله Core Web Vitals، را بخشی از ارزیابی خود می‌داند، اما محتوای مرتبط و مفید هنوز مهم‌ترین عامل است. تأثیر بزرگ‌تر اغلب روی رفتار کاربران است: صفحه‌های سریع‌تر جلوی ترک بازدیدکنندگان را می‌گیرند و به درخواست‌ها و فروش بیشتر منجر می‌شوند. ویب‌سایت سریع با محتوای ضعیف از ویب‌سایت کندتری که پاسخ‌های بسیار بهتری دارد جلو نمی‌زند.",
                    pa: "سرعت مرسته کوي، خو د ډېرو نښو له منځه یوه ده. Google د پاڼې تجربه، په شمول د Core Web Vitals، د خپلې ارزونې برخه ګڼي، خو اړونده او ګټوره منځپانګه لا هم تر ټولو مهمه ده. لوی اغېز ډېری وخت د کاروونکو پر چلند وي: چټکې پاڼې لیدونکي له وتلو ساتي، چې ډېرو غوښتنو او پلور ته لار هواروي. یو چټک ویب‌سایټ چې کمزورې منځپانګه لري، له هغه ورو ویب‌سایټ څخه نه مخکې کېږي چې ډېر ښه ځوابونه لري."
                }
            },
            {
                q: {
                    en: "Is WordPress too slow for users in Afghanistan?",
                    da: "آیا WordPress برای کاربران در افغانستان بیش از حد کند است؟",
                    pa: "ایا WordPress په افغانستان کې د کاروونکو لپاره ډېر ورو دی؟"
                },
                a: {
                    en: "Not by itself. WordPress sites become slow mainly because of heavy themes, page builders, too many plugins and unoptimised images. A lean theme, careful plugin choices, image optimisation, caching and a CDN can make WordPress reasonably fast. Frameworks like Next.js make it easier to ship less JavaScript by default, which is why we often use them for performance-critical sites.",
                    da: "به خودی خود نه. ویب‌سایت‌های WordPress بیشتر به دلیل قالب‌های سنگین، صفحه‌سازها، افزونه‌های زیاد و تصاویر بهینه‌نشده کند می‌شوند. یک قالب سبک، انتخاب دقیق افزونه‌ها، بهینه‌سازی تصاویر، کش و CDN می‌توانند WordPress را به اندازهٔ کافی سریع کنند. فریم‌ورک‌هایی مانند Next.js فرستادن جاوااسکریپت کمتر را به‌طور پیش‌فرض آسان‌تر می‌کنند، و به همین دلیل ما اغلب برای ویب‌سایت‌هایی که سرعت در آن‌ها حیاتی است از آن‌ها استفاده می‌کنیم.",
                    pa: "پخپله نه. د WordPress ویب‌سایټونه ډېری د درانه تیمونو، د پاڼې جوړونکو، ډېرو پلګینونو او ناسم شویو انځورونو له امله ورو کېږي. یو سپک تیم، د پلګینونو دقیق انتخاب، د انځورونو ښه کول، کش او CDN کولای شي WordPress په کافي اندازه چټک کړي. فریم‌ورکونه لکه Next.js په ډیفالټ ډول د لږ جاواسکرېپټ لېږل اسانه کوي، او له همدې امله موږ ډېری وخت د هغو ویب‌سایټونو لپاره کاروو چې سرعت پکې حیاتي وي."
                }
            },
            {
                q: {
                    en: "How long does it take to speed up an existing website?",
                    da: "سریع‌تر کردن یک ویب‌سایت موجود چقدر زمان می‌برد؟",
                    pa: "د یوه موجود ویب‌سایټ چټکول څومره وخت نیسي؟"
                },
                a: {
                    en: "Quick wins such as compressing images, removing unused scripts and enabling caching can often be done within days. Deeper problems, like a heavy theme or page builder that loads large amounts of JavaScript everywhere, may need a partial or full rebuild, which takes weeks. Start with an audit of your key pages on a real phone so you fix the biggest problems first.",
                    da: "بهبودهای سریع مانند فشرده‌سازی تصاویر، حذف اسکریپت‌های بی‌استفاده و فعال کردن کش اغلب در چند روز انجام می‌شوند. مشکلات عمیق‌تر، مانند یک قالب سنگین یا صفحه‌سازی که حجم زیادی جاوااسکریپت را همه‌جا بارگذاری می‌کند، ممکن است به بازسازی جزئی یا کامل نیاز داشته باشند که چند هفته طول می‌کشد. با بررسی صفحه‌های کلیدی روی یک گوشی واقعی شروع کنید تا اول بزرگ‌ترین مشکلات را حل کنید.",
                    pa: "چټک سمونونه لکه د انځورونو فشرده کول، د نه کارېدونکو سکرېپټونو لرې کول او د کش فعالول ډېری وخت په څو ورځو کې ترسره کېږي. ژورې ستونزې، لکه یو دروند تیم یا د پاڼې جوړونکی چې هر ځای ډېر جاواسکرېپټ پورته کوي، کېدای شي نیمګړې یا بشپړې بیا جوړونې ته اړتیا ولري چې څو اونۍ وخت نیسي. په یوه ریښتیني تلیفون کې د خپلو مهمو پاڼو له څېړنې پیل وکړئ ترڅو لومړی تر ټولو لویې ستونزې حل کړئ."
                }
            }
        ],
        category: "web-dev",
        author: "Jawad Hakimi",
        date: "2026-10-12",
        updated: "2026-10-12",
        readTime: "6 min read",
        image: "/logo.png",
        tags: ["website speed optimization", "website speed Afghanistan", "slow internet website", "Core Web Vitals", "INP", "page speed mobile data", "image optimization WebP AVIF", "Next.js 16 performance"]
    },
    {
        id: "124",
        slug: "headless-cms-vs-wordpress-2026",
        title: {
            en: "Headless CMS vs WordPress in 2026: Which Should You Choose?",
            da: "Headless CMS در برابر WordPress در ۲۰۲۶: کدام را انتخاب کنیم؟",
            pa: "Headless CMS او WordPress په ۲۰۲۶ کې: کوم یو وټاکو؟"
        },
        excerpt: {
            en: "Headless CMS vs WordPress in 2026: compare cost, speed, security and editing, learn when each fits, and use a 7-step checklist to choose for your business.",
            da: "Headless CMS در برابر WordPress در ۲۰۲۶: مقایسهٔ هزینه، سرعت، امنیت و ویرایش، اینکه هر کدام کی مناسب است، و یک چک‌لیست ۷ مرحله‌ای برای انتخاب.",
            pa: "Headless CMS او WordPress په ۲۰۲۶ کې: د لګښت، سرعت، امنیت او سمون پرتله، دا چې هر یو کله مناسب دی، او د انتخاب لپاره ۷ ګامیز چک‌لیست."
        },
        content: {
            en: `The headless CMS vs WordPress choice comes down to who will run the site and what it needs to do. WordPress is the faster, cheaper route for a standard business website that non-technical staff will edit, while a headless CMS paired with a framework like Next.js suits sites that need top performance, strong security, several languages or content shared between a website and an app.

**Key Takeaways**

- WordPress is a complete system: content, design and plugins in one place, with a huge ecosystem and many developers.
- A headless CMS only manages content and delivers it through an API; the front end is built separately, often in Next.js.
- Headless sites are usually faster and expose less to attackers, but cost more to build and depend more on developers.
- WordPress can also run headless, giving editors a familiar dashboard and developers a modern front end.
- Choose based on budget, editing needs, languages, performance requirements and who will maintain the site.

**What Is the Difference Between a Headless CMS and WordPress?**

The difference is that WordPress controls both your content and how it is displayed, while a headless CMS manages content only and leaves the display to a separate front end. In traditional WordPress, a theme turns your posts and pages into HTML on the same server where you edit them, and plugins add features such as forms, SEO fields, translations and shops.

A headless CMS, such as Sanity, Strapi, Contentful or Payload, stores structured content and serves it through an API. Developers then build the website, and possibly a mobile app, that fetches that content. The "head", meaning the visible site, is decoupled from the "body", meaning the content store.

**When Is WordPress the Better Choice?**

WordPress is the better choice when you need a capable website quickly, on a modest budget, and your team wants to edit pages without calling a developer. It powers a very large share of the web, so themes, plugins, tutorials and freelancers are easy to find, including in Afghanistan.

It fits well for:

- Brochure sites for small businesses, clinics, schools and NGOs.
- Blogs and news sites where editors publish often.
- Small online stores using WooCommerce.
- Projects where the client wants to be able to switch developers easily later.

The trade-offs are real. Every plugin adds code, and many sites end up slow and hard to update. WordPress is a frequent target for automated attacks, mostly through outdated plugins and weak passwords, so it needs regular updates, backups and monitoring. Our [website security checklist](/blog/website-security-checklist-2026) covers the basics.

**When Is a Headless CMS the Better Choice?**

A headless CMS is the better choice when performance, security, flexibility or multi-channel content matter more than the lowest upfront cost. Because the public site can be pre-rendered and served from a CDN, there is no database or admin panel exposed on the same server, and pages load quickly even on slow connections.

It fits well for:

- Multilingual sites where the English, Dari and Pashto versions of each page need clean structure and field-level translation.
- Businesses that want the same content on a website, a mobile app and other channels.
- Brands that want a fully custom design without fighting a theme.
- Sites that must score well on Core Web Vitals and cope with traffic spikes.

The trade-offs: a headless build costs more and takes longer, because the front end is custom code. Editors can lose some of the live, visual editing they are used to unless preview is set up properly. And you will need a developer for layout changes that a WordPress page builder would let you make yourself. Many headless CMS platforms offer free tiers and paid plans that change over time, so check current pricing before you commit.

**How Do Cost, Speed and Security Compare?**

In short, WordPress usually wins on upfront cost and the size of its ecosystem, while headless usually wins on speed, security and long-term flexibility. A fair comparison looks at several factors:

- **Build cost:** WordPress with a ready-made theme is cheapest; a custom WordPress theme and a headless build are closer in price than many people expect.
- **Running cost:** WordPress needs PHP hosting, plugin licences and regular maintenance; headless needs CMS hosting or a SaaS plan plus front-end hosting, which can be very cheap for static pages.
- **Speed:** a well-built headless site on Next.js is fast by default; WordPress can be fast but needs discipline.
- **Security:** headless separates the editing system from the public site; WordPress needs constant updates.
- **Editing:** WordPress is familiar to many editors; headless editing depends on how well the content model and preview are designed.

If you are leaning towards headless with Next.js, our article on [Next.js 16 for business websites](/blog/nextjs-16-for-business-websites) explains what the framework brings.

**What About Headless WordPress?**

Headless WordPress uses WordPress only as the content editor and serves the public site from a separate front end, usually built with Next.js. It is a practical middle ground when your team already knows WordPress, you have years of content in it, or you want its editorial tools together with a faster, more secure public site.

The downside is complexity. You maintain both a WordPress installation and a front-end application, and many plugins that output HTML, such as page builders and some form or SEO plugins, do not work the same way when WordPress runs headless.

**How Should You Decide? A Step-by-Step Checklist**

Answer these questions in order before choosing a platform:

1. Who will edit content, how often, and how technical are they?
2. How many languages do you need now and in two years, and is RTL required?
3. Will the same content appear in a mobile app or other channels?
4. How important are speed and Core Web Vitals for your audience and your SEO?
5. What is your realistic budget for the build and for yearly maintenance?
6. Who will maintain the site, and could you easily find another developer if needed?
7. Do you need features like booking, e-commerce or member areas, and are good plugins or APIs available for them?

If most of your answers point to simple pages, a small budget and frequent edits by non-technical staff, start with WordPress. If they point to several languages, an app, high performance or a custom design, a headless setup will serve you better over time. Whichever you choose, plan for ongoing care; our [website maintenance plan guide](/blog/website-maintenance-plan) explains what that should include.

**Work With Sheen**

Sheen builds business websites on Next.js, with a headless content setup where it fits, and we will tell you plainly when WordPress is the better option for your budget. See our [web design service](/services/web-design), with packages from AFN 21,000, or [contact us](/contact) at info@sheen.af or +93 784 966 018.`,
            da: `انتخاب میان Headless CMS و WordPress به این برمی‌گردد که چه کسی ویب‌سایت را اداره می‌کند و ویب‌سایت باید چه کاری انجام دهد. WordPress راه سریع‌تر و ارزان‌تری برای یک ویب‌سایت تجاری معمولی است که کارمندان غیرفنی آن را ویرایش می‌کنند، در حالی که یک Headless CMS همراه با فریم‌ورکی مانند Next.js برای ویب‌سایت‌هایی مناسب است که به بالاترین کارایی، امنیت قوی، چند زبان یا محتوای مشترک میان ویب‌سایت و اپلیکیشن نیاز دارند.

**نکات کلیدی**

- WordPress یک سیستم کامل است: محتوا، طراحی و افزونه‌ها در یک جا، با یک اکوسیستم بزرگ و توسعه‌دهندگان فراوان.
- Headless CMS فقط محتوا را مدیریت می‌کند و آن را از طریق API تحویل می‌دهد؛ بخش نمایشی جداگانه ساخته می‌شود، اغلب با Next.js.
- ویب‌سایت‌های Headless معمولاً سریع‌تر اند و کمتر در معرض حمله قرار می‌گیرند، اما ساختشان گران‌تر است و بیشتر به توسعه‌دهنده وابسته اند.
- WordPress هم می‌تواند به‌صورت Headless کار کند و به ویرایشگران داشبورد آشنا و به توسعه‌دهندگان بخش نمایشی مدرن بدهد.
- بر اساس بودجه، نیازهای ویرایش، زبان‌ها، نیازهای کارایی و اینکه چه کسی ویب‌سایت را نگهداری می‌کند انتخاب کنید.

**تفاوت میان Headless CMS و WordPress چیست؟**

تفاوت در این است که WordPress هم محتوای شما و هم نحوهٔ نمایش آن را کنترل می‌کند، در حالی که Headless CMS فقط محتوا را مدیریت می‌کند و نمایش را به یک بخش نمایشی جداگانه می‌سپارد. در WordPress سنتی، یک قالب (theme) نوشته‌ها و صفحه‌های شما را روی همان سروری که در آن ویرایش می‌کنید به HTML تبدیل می‌کند، و افزونه‌ها قابلیت‌هایی مانند فورم‌ها، فیلدهای SEO، ترجمه و فروشگاه اضافه می‌کنند.

یک Headless CMS، مانند Sanity، Strapi، Contentful یا Payload، محتوای ساختاریافته را ذخیره می‌کند و آن را از طریق API ارائه می‌دهد. سپس توسعه‌دهندگان ویب‌سایت، و شاید یک اپلیکیشن موبایل، را می‌سازند که آن محتوا را دریافت می‌کند. «سر»، یعنی ویب‌سایت قابل دیدن، از «بدنه»، یعنی محل ذخیرهٔ محتوا، جدا شده است.

**WordPress چه زمانی انتخاب بهتری است؟**

WordPress زمانی انتخاب بهتری است که به یک ویب‌سایت توانا به‌سرعت و با بودجهٔ متوسط نیاز دارید، و تیم شما می‌خواهد صفحه‌ها را بدون تماس با توسعه‌دهنده ویرایش کند. بخش بسیار بزرگی از وب با WordPress کار می‌کند، پس قالب‌ها، افزونه‌ها، آموزش‌ها و فریلنسرها به آسانی پیدا می‌شوند، از جمله در افغانستان.

برای این موارد مناسب است:

- ویب‌سایت‌های معرفی برای تجارت‌های کوچک، کلینیک‌ها، مکاتب و NGOها.
- بلاگ‌ها و ویب‌سایت‌های خبری که ویرایشگران زیاد در آن‌ها نشر می‌کنند.
- فروشگاه‌های آنلاین کوچک با WooCommerce.
- پروژه‌هایی که مشتری می‌خواهد بعداً بتواند به آسانی توسعه‌دهنده را عوض کند.

معایب آن واقعی اند. هر افزونه کد اضافه می‌کند و بسیاری از ویب‌سایت‌ها در نهایت کند و سخت‌به‌روزشدنی می‌شوند. WordPress هدف رایج حملات خودکار است، بیشتر از طریق افزونه‌های کهنه و رمزهای ضعیف، پس به به‌روزرسانی منظم، پشتیبان‌گیری و نظارت نیاز دارد. [چک‌لیست امنیت ویب‌سایت](/blog/website-security-checklist-2026) ما اصول پایه را توضیح می‌دهد.

**Headless CMS چه زمانی انتخاب بهتری است؟**

Headless CMS زمانی انتخاب بهتری است که کارایی، امنیت، انعطاف‌پذیری یا محتوای چندکاناله از کمترین هزینهٔ اولیه مهم‌تر باشد. چون ویب‌سایت عمومی می‌تواند از پیش رندر شود و از طریق CDN ارائه گردد، هیچ دیتابیس یا پنل مدیریتی روی همان سرور در معرض دید نیست، و صفحه‌ها حتی روی اتصال‌های کند هم سریع بارگذاری می‌شوند.

برای این موارد مناسب است:

- ویب‌سایت‌های چندزبانه که نسخه‌های انگلیسی، دری و پشتوی هر صفحه به ساختار تمیز و ترجمه در سطح فیلد نیاز دارند.
- تجارت‌هایی که می‌خواهند همان محتوا را در ویب‌سایت، اپلیکیشن موبایل و کانال‌های دیگر داشته باشند.
- برندهایی که طراحی کاملاً اختصاصی می‌خواهند بدون اینکه با محدودیت‌های یک قالب درگیر شوند.
- ویب‌سایت‌هایی که باید در Core Web Vitals نمرهٔ خوب بگیرند و افزایش ناگهانی ترافیک را تحمل کنند.

معایب: ساخت Headless گران‌تر است و زمان بیشتری می‌برد، چون بخش نمایشی کد اختصاصی است. ویرایشگران ممکن است بخشی از ویرایش زنده و تصویری را که به آن عادت دارند از دست بدهند، مگر اینکه پیش‌نمایش درست تنظیم شود. و برای تغییرات صفحه‌آرایی که صفحه‌ساز WordPress اجازه می‌داد خودتان انجام دهید، به توسعه‌دهنده نیاز خواهید داشت. بسیاری از پلتفرم‌های Headless CMS پلان‌های رایگان و پولی دارند که با گذشت زمان تغییر می‌کنند، پس پیش از تصمیم نهایی قیمت‌های فعلی را بررسی کنید.

**هزینه، سرعت و امنیت چگونه مقایسه می‌شوند؟**

به‌طور خلاصه، WordPress معمولاً در هزینهٔ اولیه و اندازهٔ اکوسیستم برنده است، در حالی که Headless معمولاً در سرعت، امنیت و انعطاف‌پذیری بلندمدت برتری دارد. یک مقایسهٔ منصفانه چند عامل را در نظر می‌گیرد:

- **هزینهٔ ساخت:** WordPress با قالب آماده ارزان‌ترین است؛ قالب اختصاصی WordPress و ساخت Headless از نظر قیمت به هم نزدیک‌تر از آن اند که بسیاری فکر می‌کنند.
- **هزینهٔ جاری:** WordPress به هاستینگ PHP، لایسنس افزونه‌ها و نگهداری منظم نیاز دارد؛ Headless به هاستینگ CMS یا یک پلان SaaS به‌علاوهٔ هاستینگ بخش نمایشی نیاز دارد که برای صفحه‌های ثابت می‌تواند بسیار ارزان باشد.
- **سرعت:** یک ویب‌سایت Headless که خوب با Next.js ساخته شده به‌طور پیش‌فرض سریع است؛ WordPress هم می‌تواند سریع باشد اما انضباط می‌خواهد.
- **امنیت:** Headless سیستم ویرایش را از ویب‌سایت عمومی جدا می‌کند؛ WordPress به به‌روزرسانی دائمی نیاز دارد.
- **ویرایش:** WordPress برای بسیاری از ویرایشگران آشنا است؛ ویرایش در Headless به این بستگی دارد که مدل محتوا و پیش‌نمایش چقدر خوب طراحی شده باشند.

اگر به سمت Headless با Next.js تمایل دارید، مقالهٔ ما دربارهٔ [Next.js 16 برای ویب‌سایت‌های تجاری](/blog/nextjs-16-for-business-websites) توضیح می‌دهد که این فریم‌ورک چه چیزهایی به همراه دارد.

**Headless WordPress چطور؟**

Headless WordPress فقط از WordPress به‌عنوان ویرایشگر محتوا استفاده می‌کند و ویب‌سایت عمومی را از یک بخش نمایشی جداگانه ارائه می‌دهد که معمولاً با Next.js ساخته می‌شود. این یک راه میانهٔ عملی است وقتی تیم شما WordPress را می‌شناسد، سال‌ها محتوا در آن دارید، یا می‌خواهید ابزارهای ویرایشی آن را همراه با یک ویب‌سایت عمومی سریع‌تر و امن‌تر داشته باشید.

عیب آن پیچیدگی است. شما هم یک نصب WordPress و هم یک اپلیکیشن بخش نمایشی را نگهداری می‌کنید، و بسیاری از افزونه‌هایی که HTML تولید می‌کنند، مانند صفحه‌سازها و برخی افزونه‌های فورم یا SEO، وقتی WordPress به‌صورت Headless کار می‌کند به همان شکل کار نمی‌کنند.

**چگونه تصمیم بگیریم؟ چک‌لیست گام‌به‌گام**

پیش از انتخاب پلتفرم، به این پرسش‌ها به ترتیب پاسخ دهید:

1. چه کسی محتوا را ویرایش می‌کند، هر چند وقت یک بار، و چقدر با مسائل فنی آشنا است؟
2. اکنون و در دو سال آینده به چند زبان نیاز دارید، و آیا RTL لازم است؟
3. آیا همین محتوا در یک اپلیکیشن موبایل یا کانال‌های دیگر نمایش داده خواهد شد؟
4. سرعت و Core Web Vitals برای مخاطبان و SEO شما چقدر مهم اند؟
5. بودجهٔ واقع‌بینانهٔ شما برای ساخت و نگهداری سالانه چقدر است؟
6. چه کسی ویب‌سایت را نگهداری می‌کند، و در صورت نیاز آیا به آسانی می‌توانید توسعه‌دهندهٔ دیگری پیدا کنید؟
7. آیا به قابلیت‌هایی مانند رزرو، تجارت الکترونیکی یا بخش اعضا نیاز دارید، و آیا افزونه‌ها یا APIهای خوبی برای آن‌ها موجود است؟

اگر بیشتر پاسخ‌های شما به صفحه‌های ساده، بودجهٔ کم و ویرایش مکرر توسط کارمندان غیرفنی اشاره دارند، با WordPress شروع کنید. اگر به چند زبان، اپلیکیشن، کارایی بالا یا طراحی اختصاصی اشاره دارند، یک ساختار Headless در درازمدت بهتر به شما خدمت خواهد کرد. هر کدام را انتخاب کنید، برای مراقبت مداوم برنامه بریزید؛ [راهنمای پلان نگهداری ویب‌سایت](/blog/website-maintenance-plan) ما توضیح می‌دهد که این پلان باید شامل چه چیزهایی باشد.

**با شین کار کنید**

شین ویب‌سایت‌های تجاری را با Next.js می‌سازد، و هر جا مناسب باشد با یک ساختار محتوای Headless، و اگر WordPress برای بودجهٔ شما گزینهٔ بهتری باشد صادقانه به شما می‌گوییم. [خدمات طراحی ویب‌سایت](/services/web-design) ما را با بسته‌هایی از ۲۱٬۰۰۰ افغانی ببینید، یا از طریق info@sheen.af یا +93 784 966 018 [با ما تماس بگیرید](/contact).`,
            pa: `د Headless CMS او WordPress ترمنځ انتخاب دې ته راګرځي چې ویب‌سایټ به څوک چلوي او ویب‌سایټ باید څه وکړي. WordPress د هغه عادي سوداګریز ویب‌سایټ لپاره چټکه او ارزانه لار ده چې غیرتخنیکي کارکوونکي یې سموي، په داسې حال کې چې Headless CMS د Next.js په څېر له یوه فریم‌ورک سره د هغو ویب‌سایټونو لپاره مناسب دی چې لوړ فعالیت، قوي امنیت، څو ژبې یا د ویب‌سایټ او اپلیکیشن ترمنځ ګډې منځپانګې ته اړتیا لري.

**مهم ټکي**

- WordPress یو بشپړ سیسټم دی: منځپانګه، ډیزاین او پلګینونه په یوه ځای کې، له یوه لوی اکوسیسټم او ډېرو پراختیاکوونکو سره.
- Headless CMS یوازې منځپانګه مدیریت کوي او د API له لارې یې وړاندې کوي؛ ښکاره برخه جلا جوړېږي، ډېری وخت په Next.js.
- Headless ویب‌سایټونه معمولاً چټک وي او بریدګرو ته لږ لاره ورکوي، خو جوړول یې ګران دي او پر پراختیاکوونکو ډېر تکیه کوي.
- WordPress هم کولای شي په Headless بڼه کار وکړي، چې ایډیټرانو ته پېژندل شوی ډشبورډ او پراختیاکوونکو ته عصري ښکاره برخه ورکوي.
- د بودیجې، د سمون د اړتیاوو، ژبو، د فعالیت د غوښتنو او دا چې ویب‌سایټ به څوک ساتي پر بنسټ انتخاب وکړئ.

**د Headless CMS او WordPress ترمنځ توپیر څه دی؟**

توپیر دا دی چې WordPress هم ستاسو منځپانګه او هم د هغې د ښودلو طریقه کنټرولوي، په داسې حال کې چې Headless CMS یوازې منځپانګه مدیریت کوي او ښودل یوې جلا ښکاره برخې ته پرېږدي. په دودیز WordPress کې، یو تیم ستاسو لیکنې او پاڼې په همغه سرور کې HTML ته اړوي چې تاسو پکې سمون کوئ، او پلګینونه ځانګړتیاوې لکه فورمې، د SEO فیلډونه، ژباړې او هټۍ ورزیاتوي.

یو Headless CMS، لکه Sanity، Strapi، Contentful یا Payload، جوړښت لرونکې منځپانګه ساتي او د API له لارې یې وړاندې کوي. بیا پراختیاکوونکي ویب‌سایټ، او ښايي یو موبایل اپلیکیشن، جوړوي چې هغه منځپانګه ترلاسه کوي. «سر»، یعنې د لیدو وړ ویب‌سایټ، له «بدن»، یعنې د منځپانګې له زېرمې، جلا شوی دی.

**WordPress کله غوره انتخاب دی؟**

WordPress هغه وخت غوره انتخاب دی چې تاسو ژر او په منځنۍ بودیجه یو وړ ویب‌سایټ ته اړتیا لرئ، او ستاسو ټیم غواړي پرته له دې چې پراختیاکوونکي ته زنګ ووهي پاڼې سمې کړي. د ویب ډېره لویه برخه په WordPress چلېږي، نو تیمونه، پلګینونه، زده‌کړې او فریلانسران په اسانۍ موندل کېږي، په افغانستان کې هم.

د دې مواردو لپاره مناسب دی:

- د کوچنیو سوداګریو، کلینیکونو، ښوونځیو او NGOګانو د معرفي ویب‌سایټونه.
- بلاګونه او خبري ویب‌سایټونه چې ایډیټران پکې ډېر څه خپروي.
- کوچنۍ آنلاین هټۍ د WooCommerce سره.
- هغه پروژې چې پیرودونکی غواړي وروسته په اسانۍ پراختیاکوونکی بدل کړای شي.

نیمګړتیاوې یې ریښتینې دي. هر پلګین کوډ ورزیاتوي، او ډېری ویب‌سایټونه په پای کې ورو او د تازه کولو لپاره ستونزمن کېږي. WordPress د اتوماتو بریدونو عام هدف دی، ډېری د زړو پلګینونو او کمزورو پاسورډونو له لارې، نو منظم تازه کولو، بیک‌اپ او څارنې ته اړتیا لري. زموږ د [ویب‌سایټ د امنیت چک‌لیست](/blog/website-security-checklist-2026) بنسټیز ټکي تشریح کوي.

**Headless CMS کله غوره انتخاب دی؟**

Headless CMS هغه وخت غوره انتخاب دی چې فعالیت، امنیت، انعطاف یا څوچینله منځپانګه تر ټولو ټیټ لومړني لګښت څخه ډېر مهم وي. څرنګه چې عامه ویب‌سایټ له مخکې رنډر کېدای شي او د CDN له لارې وړاندې کېږي، په همغه سرور کې هېڅ ډیټابیس یا د مدیریت پینل ښکاره نه وي، او پاڼې حتی په ورو اړیکو کې هم ژر پورته کېږي.

د دې مواردو لپاره مناسب دی:

- څوژبیز ویب‌سایټونه چې د هرې پاڼې انګلیسي، دري او پښتو نسخې پاک جوړښت او د فیلډ په کچه ژباړې ته اړتیا لري.
- هغه سوداګرۍ چې غواړي همغه منځپانګه په ویب‌سایټ، موبایل اپلیکیشن او نورو چینلونو کې ولري.
- هغه برانډونه چې بشپړ ځانګړی ډیزاین غواړي پرته له دې چې د یوه تیم له محدودیتونو سره وجنګېږي.
- هغه ویب‌سایټونه چې باید په Core Web Vitals کې ښه نمرې واخلي او د ترافیک ناڅاپي زیاتوالی وزغمي.

نیمګړتیاوې: د Headless جوړونه ګرانه ده او ډېر وخت نیسي، ځکه چې ښکاره برخه ځانګړی کوډ دی. ایډیټران کېدای شي د ژوندي او انځوریز سمون یوه برخه له لاسه ورکړي چې ورسره عادت دي، مګر دا چې مخکتنه په سمه توګه تنظیم شي. او د ترتیب د هغو بدلونونو لپاره به پراختیاکوونکي ته اړتیا ولرئ چې د WordPress د پاڼې جوړونکي سره یې تاسو پخپله کولای شول. ډېری Headless CMS پلیټفارمونه وړیا او پیسې لرونکي پلانونه لري چې د وخت په تېرېدو بدلېږي، نو له وروستۍ پرېکړې مخکې اوسنۍ بیې وګورئ.

**لګښت، سرعت او امنیت څنګه پرتله کېږي؟**

په لنډه توګه، WordPress معمولاً په لومړني لګښت او د اکوسیسټم په اندازه کې ګټونکی دی، په داسې حال کې چې Headless معمولاً په سرعت، امنیت او اوږدمهاله انعطاف کې مخکې دی. یوه عادلانه پرتله څو عوامل په پام کې نیسي:

- **د جوړونې لګښت:** WordPress له چمتو تیم سره تر ټولو ارزان دی؛ د WordPress ځانګړی تیم او د Headless جوړونه د بیې له پلوه تر هغه نږدې دي چې ډېری خلک یې فکر کوي.
- **روان لګښت:** WordPress د PHP هاسټینګ، د پلګینونو جوازونو او منظمې ساتنې ته اړتیا لري؛ Headless د CMS هاسټینګ یا SaaS پلان او د ښکاره برخې هاسټینګ ته اړتیا لري چې د ثابتو پاڼو لپاره ډېر ارزان کېدای شي.
- **سرعت:** یو Headless ویب‌سایټ چې په Next.js ښه جوړ شوی وي په ډیفالټ ډول چټک دی؛ WordPress هم چټک کېدای شي خو ډسپلین غواړي.
- **امنیت:** Headless د سمون سیسټم له عامه ویب‌سایټ څخه جلا کوي؛ WordPress دوامداره تازه کولو ته اړتیا لري.
- **سمون:** WordPress ډېرو ایډیټرانو ته پېژندل شوی دی؛ په Headless کې سمون پر دې پورې اړه لري چې د منځپانګې ماډل او مخکتنه څومره ښه ډیزاین شوي.

که Headless او Next.js ته لېوالتیا لرئ، زموږ لیکنه د [سوداګریزو ویب‌سایټونو لپاره Next.js 16](/blog/nextjs-16-for-business-websites) تشریح کوي چې دا فریم‌ورک څه راوړي.

**د Headless WordPress په اړه څه؟**

Headless WordPress یوازې WordPress د منځپانګې د ایډیټر په توګه کاروي او عامه ویب‌سایټ له یوې جلا ښکاره برخې وړاندې کوي چې معمولاً په Next.js جوړېږي. دا یوه عملي منځنۍ لار ده کله چې ستاسو ټیم WordPress پېژني، کلونه منځپانګه پکې لرئ، یا غواړئ د هغه د سمون وسایل له یوه چټک او خوندي عامه ویب‌سایټ سره یوځای ولرئ.

نیمګړتیا یې پېچلتیا ده. تاسو هم د WordPress یو نصب او هم د ښکاره برخې یو اپلیکیشن ساتئ، او ډېری هغه پلګینونه چې HTML جوړوي، لکه د پاڼې جوړونکي او د فورم یا SEO ځینې پلګینونه، کله چې WordPress په Headless بڼه کار کوي، په همغه ډول کار نه کوي.

**څنګه پرېکړه وکړو؟ ګام په ګام چک‌لیست**

د پلیټفارم له ټاکلو مخکې، دې پوښتنو ته په ترتیب سره ځواب ورکړئ:

1. منځپانګه به څوک سموي، څو ځله، او له تخنیکي مسایلو سره څومره بلد دی؟
2. اوس او په راتلونکو دوو کلونو کې څو ژبو ته اړتیا لرئ، او ایا RTL اړین دی؟
3. ایا همغه منځپانګه به په یوه موبایل اپلیکیشن یا نورو چینلونو کې ښکاره شي؟
4. سرعت او Core Web Vitals ستاسو د مخاطبانو او SEO لپاره څومره مهم دي؟
5. د جوړونې او کلنۍ ساتنې لپاره ستاسو واقعي بودیجه څومره ده؟
6. ویب‌سایټ به څوک ساتي، او که اړتیا وي ایا په اسانۍ بل پراختیاکوونکی موندلای شئ؟
7. ایا ځانګړتیاوو لکه بوکینګ، برېښنایي سوداګرۍ یا د غړو برخې ته اړتیا لرئ، او ایا د هغو لپاره ښه پلګینونه یا APIګانې شته؟

که ستاسو ډېری ځوابونه ساده پاڼو، کمې بودیجې او د غیرتخنیکي کارکوونکو له خوا پرلپسې سمون ته اشاره کوي، له WordPress څخه پیل وکړئ. که څو ژبو، اپلیکیشن، لوړ فعالیت یا ځانګړي ډیزاین ته اشاره کوي، یو Headless جوړښت به په اوږده موده کې تاسو ته ښه خدمت وکړي. هر یو چې وټاکئ، د دوامداره پاملرنې لپاره پلان جوړ کړئ؛ زموږ [د ویب‌سایټ د ساتنې د پلان لارښود](/blog/website-maintenance-plan) تشریح کوي چې دا پلان باید څه ولري.

**له شین سره کار وکړئ**

شین سوداګریز ویب‌سایټونه په Next.js جوړوي، او چېرته چې مناسب وي د Headless منځپانګې له جوړښت سره، او که WordPress ستاسو د بودیجې لپاره غوره انتخاب وي، موږ یې تاسو ته په ښکاره وایو. زموږ [د ویب ډیزاین خدمت](/services/web-design) له ۲۱٬۰۰۰ افغانیو څخه پیلېدونکو کڅوړو سره وګورئ، یا د info@sheen.af یا +93 784 966 018 له لارې [موږ سره اړیکه ونیسئ](/contact).`
        },
        faqs: [
            {
                q: {
                    en: "Is a headless CMS more expensive than WordPress?",
                    da: "آیا Headless CMS از WordPress گران‌تر است؟",
                    pa: "ایا Headless CMS له WordPress څخه ګران دی؟"
                },
                a: {
                    en: "Usually it costs more to build, because the front end is custom-developed rather than based on a ready-made theme. Running costs can be similar or lower, since static pages served from a CDN are cheap to host and need fewer security updates. The real comparison is total cost over several years, including maintenance, plugin licences, fixes and how often you redesign.",
                    da: "معمولاً ساخت آن گران‌تر است، چون بخش نمایشی به‌طور اختصاصی توسعه داده می‌شود نه بر اساس یک قالب آماده. هزینه‌های جاری می‌توانند مشابه یا کمتر باشند، چون میزبانی صفحه‌های ثابت از طریق CDN ارزان است و به به‌روزرسانی‌های امنیتی کمتری نیاز دارد. مقایسهٔ واقعی، هزینهٔ کل در طول چند سال است، شامل نگهداری، لایسنس افزونه‌ها، رفع مشکلات و اینکه هر چند وقت یک بار طراحی را عوض می‌کنید.",
                    pa: "معمولاً جوړول یې ګران وي، ځکه چې ښکاره برخه په ځانګړي ډول جوړېږي نه د یوه چمتو تیم پر بنسټ. روان لګښتونه کېدای شي ورته یا ټیټ وي، ځکه چې د CDN له لارې د ثابتو پاڼو هاسټینګ ارزان دی او لږو امنیتي تازه کولو ته اړتیا لري. ریښتینې پرتله د څو کلونو ټول لګښت دی، په شمول د ساتنې، د پلګینونو جوازونو، سمونونو او دا چې څو ځله ډیزاین بدلوئ."
                }
            },
            {
                q: {
                    en: "Can I move from WordPress to a headless CMS without losing SEO?",
                    da: "آیا می‌توانم بدون از دست دادن SEO از WordPress به Headless CMS منتقل شوم؟",
                    pa: "ایا کولای شم پرته له دې چې SEO له لاسه ورکړم له WordPress څخه Headless CMS ته ولاړ شم؟"
                },
                a: {
                    en: "Yes, if the migration is planned carefully. Keep the same URLs where possible, set up 301 redirects for any that change, and migrate titles, meta descriptions, structured data, images and internal links. Submit an updated sitemap in Search Console and monitor indexing and traffic for several weeks after launch. Most ranking losses after a migration come from missing redirects or lost content.",
                    da: "بله، اگر انتقال با دقت برنامه‌ریزی شود. تا جای ممکن همان URLها را نگه دارید، برای هر URL که تغییر می‌کند ریدایرکت 301 تنظیم کنید، و عنوان‌ها، توضیحات متا، داده‌های ساختاریافته، تصاویر و لینک‌های داخلی را منتقل کنید. نقشهٔ سایت به‌روزشده را در Search Console ثبت کنید و ایندکس و ترافیک را چند هفته پس از راه‌اندازی زیر نظر بگیرید. بیشتر افت رتبه پس از انتقال، ناشی از ریدایرکت‌های فراموش‌شده یا محتوای از دست رفته است.",
                    pa: "هو، که لېږد په دقت سره پلان شي. تر کومه ځایه چې کېږي همغه URLونه وساتئ، د هر هغه URL لپاره چې بدلېږي 301 ریډایرکټ جوړ کړئ، او سرلیکونه، میټا تشریحات، جوړښت لرونکي معلومات، انځورونه او داخلي لینکونه ولېږدوئ. تازه سایټ‌مپ په Search Console کې ثبت کړئ او له پیل وروسته څو اونۍ انډکس او ترافیک وڅارئ. له لېږد وروسته د درجې ډېری کمښت د هېر شویو ریډایرکټونو یا ورکې شوې منځپانګې له امله وي."
                }
            },
            {
                q: {
                    en: "Which headless CMS is best for a small business?",
                    da: "کدام Headless CMS برای یک تجارت کوچک بهتر است؟",
                    pa: "د یوې کوچنۍ سوداګرۍ لپاره کوم Headless CMS غوره دی؟"
                },
                a: {
                    en: "There is no single best option. Sanity and Contentful are hosted services with polished editors; Strapi and Payload are open source and can be self-hosted, with Payload able to run inside a Next.js app. Compare editing experience, localisation support for Dari and Pashto, hosting needs and current pricing, and choose one your developer knows well and can support long term.",
                    da: "یک گزینهٔ واحد بهترین وجود ندارد. Sanity و Contentful خدمات میزبانی‌شده با ویرایشگرهای پیشرفته اند؛ Strapi و Payload متن‌باز اند و می‌توانند روی سرور خودتان میزبانی شوند، و Payload می‌تواند داخل یک اپلیکیشن Next.js اجرا شود. تجربهٔ ویرایش، پشتیبانی از ترجمهٔ دری و پشتو، نیازهای میزبانی و قیمت‌های فعلی را مقایسه کنید، و گزینه‌ای را انتخاب کنید که توسعه‌دهندهٔ شما آن را خوب می‌شناسد و می‌تواند در درازمدت پشتیبانی کند.",
                    pa: "یو واحد غوره انتخاب نشته. Sanity او Contentful کوربه شوي خدمتونه دي چې پرمختللي ایډیټرونه لري؛ Strapi او Payload خلاصې سرچینې دي او په خپل سرور کې کېښودل کېدای شي، او Payload کولای شي د Next.js اپلیکیشن دننه وچلېږي. د سمون تجربه، د دري او پښتو د ژباړې ملاتړ، د هاسټینګ اړتیاوې او اوسنۍ بیې پرتله کړئ، او هغه یو وټاکئ چې ستاسو پراختیاکوونکی یې ښه پېژني او په اوږده موده کې یې ملاتړ کولای شي."
                }
            },
            {
                q: {
                    en: "Can non-technical staff edit a headless website?",
                    da: "آیا کارمندان غیرفنی می‌توانند یک ویب‌سایت Headless را ویرایش کنند؟",
                    pa: "ایا غیرتخنیکي کارکوونکي کولای شي یو Headless ویب‌سایټ سم کړي؟"
                },
                a: {
                    en: "Yes. Modern headless CMS platforms have friendly editors for text, images and structured fields, and many support live preview. The key is a well-designed content model with clear field names, sensible page sections and instructions in the editor. Staff can then update content safely, while the design stays consistent because layouts are controlled in code rather than dragged around by hand.",
                    da: "بله. پلتفرم‌های مدرن Headless CMS ویرایشگرهای ساده برای متن، تصاویر و فیلدهای ساختاریافته دارند و بسیاری از آن‌ها پیش‌نمایش زنده را پشتیبانی می‌کنند. نکتهٔ کلیدی یک مدل محتوای خوب طراحی‌شده با نام‌های روشن برای فیلدها، بخش‌های منطقی صفحه و راهنما در داخل ویرایشگر است. آنگاه کارمندان می‌توانند محتوا را با اطمینان به‌روز کنند، در حالی که طراحی یکدست می‌ماند، چون صفحه‌آرایی در کد کنترل می‌شود نه با کشیدن دستی.",
                    pa: "هو. عصري Headless CMS پلیټفارمونه د متن، انځورونو او جوړښت لرونکو فیلډونو لپاره اسانه ایډیټرونه لري او ډېری یې ژوندۍ مخکتنه ملاتړ کوي. مهم ټکی د منځپانګې یو ښه ډیزاین شوی ماډل دی چې د فیلډونو روښانه نومونه، د پاڼې منطقي برخې او په ایډیټر کې لارښوونې ولري. بیا کارکوونکي کولای شي منځپانګه په ډاډ سره تازه کړي، په داسې حال کې چې ډیزاین یوشان پاتې کېږي، ځکه چې ترتیب په کوډ کې کنټرولېږي نه په لاس د کشولو له لارې."
                }
            }
        ],
        category: "web-dev",
        author: "Jawad Hakimi",
        date: "2026-10-08",
        updated: "2026-10-08",
        readTime: "6 min read",
        image: "/logo.png",
        tags: ["headless cms vs wordpress", "headless CMS", "WordPress vs Next.js", "headless WordPress", "best CMS 2026", "Sanity vs Strapi", "Next.js 16", "website platform Afghanistan"]
    },
    {
        id: "123",
        slug: "website-accessibility-wcag-22",
        title: {
            en: "WCAG 2.2 Accessibility: A Practical Guide for Websites",
            da: "دسترسی‌پذیری WCAG 2.2: راهنمای عملی برای ویب‌سایت‌ها",
            pa: "د WCAG 2.2 لاسرسی: د ویب‌سایټونو لپاره عملي لارښود"
        },
        excerpt: {
            en: "WCAG 2.2 accessibility explained: what is new, the most common website problems, how to test for Level AA, and where a small business should start fixing.",
            da: "دسترسی‌پذیری WCAG 2.2 به زبان ساده: چه چیزی تازه است، رایج‌ترین مشکلات ویب‌سایت‌ها، چگونه سطح AA را آزمایش کنیم و یک تجارت کوچک از کجا شروع کند.",
            pa: "د WCAG 2.2 لاسرسی په ساده ژبه: څه نوي دي، د ویب‌سایټونو تر ټولو عامې ستونزې، د AA کچې ازموینه څنګه وکړو، او یوه کوچنۍ سوداګري له کومه ځایه پیل وکړي."
        },
        content: {
            en: `WCAG 2.2 accessibility means meeting the current version of the Web Content Accessibility Guidelines, the W3C standard that defines how to make websites usable for people with disabilities, including those who rely on screen readers, keyboards, magnification or voice control. Most organisations aim for Level AA, which covers the practical basics: readable contrast, keyboard access, clear forms, text alternatives for images and predictable navigation.

**Key Takeaways**

- WCAG 2.2 became a W3C Recommendation in October 2023 and adds nine success criteria to WCAG 2.1.
- Level AA is the realistic target for business websites and the level most laws and procurement rules refer to.
- The new criteria focus on visible focus, target size, alternatives to dragging, consistent help, and easier forms and logins.
- Many fixes are cheap when built in from the start: semantic HTML, labels, contrast and keyboard testing.
- Accessibility also helps SEO, mobile usability and conversions, especially for older users and low-cost devices.

**What Is WCAG 2.2 and Who Needs to Follow It?**

WCAG 2.2 is the latest stable version of the Web Content Accessibility Guidelines published by the World Wide Web Consortium (W3C). It is organised around four principles, that content must be perceivable, operable, understandable and robust, and it sets testable success criteria at three levels: A, AA and AAA.

Legal requirements depend on where you operate and who your customers are. In the European Union, the European Accessibility Act has applied since June 2025 to many consumer-facing digital services, including e-commerce, with some exemptions for micro-enterprises. In the United States, accessibility claims against websites are common under the Americans with Disabilities Act. If you are an Afghan business selling to customers in Europe or North America, or a diaspora business based there, check your obligations with a local adviser.

For businesses serving customers inside Afghanistan, accessibility is less a legal question and more a matter of reaching everyone, including older customers, people with low vision and anyone using a small, cheap phone in bright sunlight.

**What Is New in WCAG 2.2?**

WCAG 2.2 adds nine success criteria and removes one obsolete criterion, 4.1.1 Parsing. The additions most relevant to typical business sites are:

- **Focus Not Obscured (Minimum), AA:** when an element receives keyboard focus, it must not be completely hidden by sticky headers, cookie banners or chat widgets.
- **Dragging Movements, AA:** anything that requires dragging, such as sliders or sortable lists, must also work with a simple tap or click.
- **Target Size (Minimum), AA:** clickable targets should be at least 24 by 24 CSS pixels, or have enough spacing around them, with some exceptions.
- **Consistent Help, A:** if you offer help such as a phone number, WhatsApp link or contact form, it should appear in the same place across pages.
- **Redundant Entry, A:** do not make users type the same information twice in one process; pre-fill it or let them select it.
- **Accessible Authentication (Minimum), AA:** logins should not depend on cognitive tests such as remembering or retyping codes, unless an alternative exists, for example allowing paste and password managers.

The remaining three, Focus Not Obscured (Enhanced), Focus Appearance and Accessible Authentication (Enhanced), are Level AAA.

**What Are the Most Common Accessibility Problems on Business Websites?**

The most common problems are the basic ones, and they are usually quick to fix. When we review sites, the same issues come up again and again:

- Low colour contrast, especially light grey text on white and text over photos. Level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.
- Images without meaningful alternative text, or decorative images that screen readers announce as file names.
- Form fields without visible labels, relying on placeholder text that disappears when typing starts.
- Menus, sliders and pop-ups that cannot be used with a keyboard.
- Focus outlines removed in CSS, so keyboard users cannot see where they are.
- Headings chosen for size rather than structure, which breaks navigation for screen reader users.
- Videos without captions.
- Missing or wrong lang attributes, which make screen readers pronounce Dari or Pashto with English rules.

That last point matters in Afghanistan. Screen reader and text-to-speech support for Pashto is more limited than for English or Dari, so correct lang attributes, clear structure and plain language help even more. Our guide to [RTL website design](/blog/rtl-website-design-best-practices) covers setting language and direction correctly.

**How Do You Test a Website for WCAG 2.2?**

Combine automated tools with manual checks, because automated scanners only catch part of the problems. Tools such as Lighthouse, axe DevTools and WAVE quickly find missing alt text, contrast failures and missing labels. They cannot judge whether alt text is meaningful or whether a process makes sense with a keyboard.

A practical testing routine:

1. Run an automated scan on your key templates: home, service or product page, article, contact form and checkout.
2. Put the mouse aside and complete the main tasks using only Tab, Shift+Tab, Enter, Space and the arrow keys.
3. Check that the focus indicator is always visible and never hidden behind sticky headers or banners.
4. Zoom the browser to 200 percent and confirm nothing overlaps or disappears.
5. Turn on a screen reader, such as NVDA on Windows, VoiceOver on Apple devices or TalkBack on Android, and listen to a page from top to bottom.
6. Check every form for visible labels, clear error messages and the ability to paste into password and code fields.
7. Measure tap targets on mobile and make sure buttons and links are large enough and not crowded together.
8. Fix the issues, re-test and record what you checked, so the next update does not undo the work.

**How Does Accessibility Help SEO and Conversions?**

Accessible websites tend to perform better in search and convert better, because many accessibility practices are also good SEO and usability practices. Descriptive alt text helps image search. A proper heading structure helps search engines and AI assistants understand the page. Clear labels and error messages reduce form abandonment, which is often exactly where enquiries are lost.

Larger tap targets and readable contrast also help everyone using a phone outdoors, in bright light or on a small, low-cost screen, which describes a lot of mobile traffic in Afghanistan. Our [landing page conversion checklist](/blog/landing-page-conversion-checklist) includes several of these points.

**Where Should a Small Business Start?**

Start with your most important user journeys rather than trying to fix every page at once. For most businesses that means the homepage, the main service or product pages, and the contact, booking or checkout process.

Fix contrast, labels, alt text and keyboard access first, then work through the WCAG 2.2 additions. Build accessibility into your design system and components so new pages are accessible by default instead of being fixed after launch. If you serve customers abroad, our guide to [websites for Afghan businesses abroad](/blog/website-for-afghan-business-abroad) covers other things those markets expect.

**Work With Sheen**

Sheen designs websites with accessibility built in, from contrast and keyboard support to correct language settings for screen readers in English, Dari and Pashto, and we can review an existing site against WCAG 2.2. See our [web design service](/services/web-design) or [contact us](/contact) at info@sheen.af or +93 784 966 018.`,
            da: `دسترسی‌پذیری WCAG 2.2 یعنی رعایت نسخهٔ فعلی رهنمودهای دسترسی‌پذیری محتوای وب (WCAG)، استاندارد W3C که مشخص می‌کند چگونه ویب‌سایت‌ها را برای افراد دارای معلولیت قابل استفاده کنیم، از جمله کسانی که به صفحه‌خوان، کیبورد، بزرگ‌نمایی یا کنترل صوتی متکی اند. بیشتر سازمان‌ها سطح AA را هدف می‌گیرند که اصول عملی را پوشش می‌دهد: کنتراست خوانا، دسترسی با کیبورد، فورم‌های روشن، متن جایگزین برای تصاویر و ناوبری قابل پیش‌بینی.

**نکات کلیدی**

- WCAG 2.2 در اکتوبر ۲۰۲۳ به توصیه‌نامهٔ رسمی W3C تبدیل شد و نُه معیار موفقیت به WCAG 2.1 اضافه می‌کند.
- سطح AA هدف واقع‌بینانه برای ویب‌سایت‌های تجاری است و سطحی است که بیشتر قوانین و مقررات خرید به آن اشاره می‌کنند.
- معیارهای تازه روی تمرکز قابل دیدن، اندازهٔ هدف‌های کلیک، جایگزین برای کشیدن، کمک یکسان، و فورم‌ها و ورود آسان‌تر تمرکز دارند.
- بسیاری از اصلاحات وقتی از آغاز در نظر گرفته شوند ارزان اند: HTML معنایی، برچسب‌ها، کنتراست و آزمایش با کیبورد.
- دسترسی‌پذیری به SEO، استفاده‌پذیری در موبایل و تبدیل بازدیدکننده به مشتری هم کمک می‌کند، به‌ویژه برای کاربران مسن و دستگاه‌های ارزان.

**WCAG 2.2 چیست و چه کسانی باید از آن پیروی کنند؟**

WCAG 2.2 جدیدترین نسخهٔ پایدار رهنمودهای دسترسی‌پذیری محتوای وب است که کنسرسیوم وب جهانی (W3C) منتشر کرده است. این رهنمودها بر اساس چهار اصل سازمان یافته اند، اینکه محتوا باید قابل درک حسی، قابل کارکرد، قابل فهم و استوار باشد، و معیارهای موفقیت قابل آزمایش را در سه سطح A، AA و AAA تعیین می‌کنند.

الزامات قانونی به این بستگی دارد که کجا فعالیت می‌کنید و مشتریان شما چه کسانی اند. در اتحادیهٔ اروپا، قانون دسترسی‌پذیری اروپا (European Accessibility Act) از جون ۲۰۲۵ بر بسیاری از خدمات دیجیتال مصرف‌کننده، از جمله تجارت الکترونیکی، اعمال می‌شود و برای شرکت‌های بسیار کوچک برخی معافیت‌ها دارد. در ایالات متحده، شکایت‌های دسترسی‌پذیری علیه ویب‌سایت‌ها بر اساس قانون امریکایی‌های دارای معلولیت (ADA) رایج است. اگر یک تجارت افغان هستید که به مشتریان اروپا یا امریکای شمالی می‌فروشید، یا یک تجارت مهاجر مستقر در آنجا، تعهدات خود را با یک مشاور محلی بررسی کنید.

برای تجارت‌هایی که به مشتریان داخل افغانستان خدمت می‌کنند، دسترسی‌پذیری کمتر یک مسئلهٔ قانونی و بیشتر موضوع رسیدن به همه است، از جمله مشتریان مسن، افراد کم‌بینا و هر کسی که در نور شدید آفتاب از یک گوشی کوچک و ارزان استفاده می‌کند.

**در WCAG 2.2 چه چیزی تازه است؟**

WCAG 2.2 نُه معیار موفقیت اضافه می‌کند و یک معیار منسوخ، یعنی 4.1.1 Parsing، را حذف می‌کند. افزوده‌هایی که برای ویب‌سایت‌های تجاری معمولی بیشترین ارتباط را دارند:

- **Focus Not Obscured (Minimum)، سطح AA:** وقتی یک عنصر تمرکز کیبورد را می‌گیرد، نباید کاملاً زیر هدرهای چسبان، بنرهای کوکی یا ویجت‌های چت پنهان شود.
- **Dragging Movements، سطح AA:** هر چیزی که نیاز به کشیدن دارد، مانند اسلایدرها یا فهرست‌های قابل مرتب‌سازی، باید با یک لمس یا کلیک ساده هم کار کند.
- **Target Size (Minimum)، سطح AA:** هدف‌های قابل کلیک باید دست‌کم ۲۴ در ۲۴ پیکسل CSS باشند، یا فاصلهٔ کافی در اطرافشان داشته باشند، با برخی استثناها.
- **Consistent Help، سطح A:** اگر کمکی مانند شمارهٔ تلفن، لینک WhatsApp یا فورم تماس ارائه می‌دهید، باید در همه صفحه‌ها در یک جا ظاهر شود.
- **Redundant Entry، سطح A:** کاربران را مجبور نکنید در یک فرایند یک معلومات را دو بار تایپ کنند؛ آن را از پیش پر کنید یا اجازه دهید انتخابش کنند.
- **Accessible Authentication (Minimum)، سطح AA:** ورود نباید به آزمون‌های ذهنی مانند به خاطر سپردن یا دوباره تایپ کردن کدها وابسته باشد، مگر اینکه جایگزینی وجود داشته باشد، برای نمونه اجازهٔ paste و استفاده از مدیر رمز عبور.

سه معیار باقی‌مانده، یعنی Focus Not Obscured (Enhanced)، Focus Appearance و Accessible Authentication (Enhanced)، در سطح AAA قرار دارند.

**رایج‌ترین مشکلات دسترسی‌پذیری در ویب‌سایت‌های تجاری چیست؟**

رایج‌ترین مشکلات همان مشکلات پایه اند و معمولاً به‌سرعت رفع می‌شوند. وقتی ویب‌سایت‌ها را بررسی می‌کنیم، همان مسائل بارها و بارها تکرار می‌شوند:

- کنتراست رنگ پایین، به‌ویژه متن خاکستری روشن روی زمینهٔ سفید و متن روی عکس‌ها. سطح AA نسبت کنتراست دست‌کم ۴.۵ به ۱ برای متن معمولی و ۳ به ۱ برای متن بزرگ را الزامی می‌کند.
- تصاویر بدون متن جایگزین معنادار، یا تصاویر تزئینی که صفحه‌خوان‌ها نام فایلشان را می‌خوانند.
- فیلدهای فورم بدون برچسب قابل دیدن که به متن راهنمای داخل فیلد تکیه دارند که با شروع تایپ ناپدید می‌شود.
- منوها، اسلایدرها و پنجره‌های بازشو که با کیبورد قابل استفاده نیستند.
- خطوط نشان‌دهندهٔ تمرکز که در CSS حذف شده‌اند، پس کاربران کیبورد نمی‌بینند کجا هستند.
- سرعنوان‌هایی که بر اساس اندازه انتخاب شده‌اند نه ساختار، که ناوبری را برای کاربران صفحه‌خوان خراب می‌کند.
- ویدیوهای بدون زیرنویس.
- ویژگی lang که وجود ندارد یا اشتباه است، و باعث می‌شود صفحه‌خوان‌ها دری یا پشتو را با قواعد انگلیسی تلفظ کنند.

نکتهٔ آخر در افغانستان اهمیت دارد. پشتیبانی صفحه‌خوان‌ها و تبدیل متن به گفتار برای پشتو محدودتر از انگلیسی یا دری است، پس ویژگی‌های درست lang، ساختار روشن و زبان ساده حتی بیشتر کمک می‌کنند. [راهنمای طراحی ویب‌سایت RTL](/blog/rtl-website-design-best-practices) ما تنظیم درست زبان و جهت را توضیح می‌دهد.

**یک ویب‌سایت را برای WCAG 2.2 چگونه آزمایش کنیم؟**

ابزارهای خودکار را با بررسی‌های دستی ترکیب کنید، چون اسکنرهای خودکار فقط بخشی از مشکلات را پیدا می‌کنند. ابزارهایی مانند Lighthouse، axe DevTools و WAVE به‌سرعت متن جایگزین گم‌شده، کنتراست ناکافی و برچسب‌های ناموجود را پیدا می‌کنند. اما نمی‌توانند قضاوت کنند که آیا متن جایگزین معنادار است یا اینکه یک فرایند با کیبورد منطقی کار می‌کند.

یک روال عملی آزمایش:

1. روی قالب‌های کلیدی خود یک اسکن خودکار اجرا کنید: صفحهٔ اصلی، صفحهٔ خدمت یا محصول، مقاله، فورم تماس و صفحهٔ پرداخت.
2. ماوس را کنار بگذارید و کارهای اصلی را فقط با کلیدهای Tab، Shift+Tab، Enter، Space و کلیدهای جهت‌نما انجام دهید.
3. بررسی کنید که نشانگر تمرکز همیشه دیده شود و هرگز پشت هدرهای چسبان یا بنرها پنهان نشود.
4. مرورگر را تا ۲۰۰ درصد بزرگ‌نمایی کنید و مطمئن شوید چیزی روی هم نمی‌افتد یا ناپدید نمی‌شود.
5. یک صفحه‌خوان روشن کنید، مانند NVDA در ویندوز، VoiceOver در دستگاه‌های Apple یا TalkBack در اندروید، و یک صفحه را از بالا تا پایین گوش دهید.
6. هر فورم را از نظر برچسب‌های قابل دیدن، پیام‌های خطای روشن و امکان paste در فیلدهای رمز و کد بررسی کنید.
7. هدف‌های لمسی را در موبایل اندازه بگیرید و مطمئن شوید دکمه‌ها و لینک‌ها به اندازهٔ کافی بزرگ اند و به هم چسبیده نیستند.
8. مشکلات را رفع کنید، دوباره آزمایش کنید و آنچه را بررسی کرده‌اید ثبت کنید تا به‌روزرسانی بعدی کار را خراب نکند.

**دسترسی‌پذیری چگونه به SEO و تبدیل کمک می‌کند؟**

ویب‌سایت‌های دسترسی‌پذیر معمولاً در جستجو بهتر عمل می‌کنند و مشتری بیشتری جذب می‌کنند، چون بسیاری از روش‌های دسترسی‌پذیری همزمان روش‌های خوب SEO و استفاده‌پذیری هم هستند. متن جایگزین توصیفی به جستجوی تصویری کمک می‌کند. ساختار درست سرعنوان‌ها به موتورهای جستجو و دستیارهای هوش مصنوعی کمک می‌کند صفحه را بفهمند. برچسب‌ها و پیام‌های خطای روشن، رها کردن فورم را کاهش می‌دهند، و اغلب دقیقاً همین‌جا است که درخواست‌های مشتریان از دست می‌رود.

هدف‌های لمسی بزرگ‌تر و کنتراست خوانا به همهٔ کسانی هم کمک می‌کند که در بیرون، در نور شدید یا روی یک صفحهٔ کوچک و ارزان از گوشی استفاده می‌کنند، که توصیف بخش بزرگی از ترافیک موبایل در افغانستان است. [چک‌لیست تبدیل صفحهٔ فرود](/blog/landing-page-conversion-checklist) ما چند مورد از این نکات را در بر دارد.

**یک تجارت کوچک از کجا شروع کند؟**

به‌جای تلاش برای اصلاح همه صفحه‌ها به‌یک‌باره، با مهم‌ترین مسیرهای کاربران شروع کنید. برای بیشتر تجارت‌ها این یعنی صفحهٔ اصلی، صفحه‌های اصلی خدمات یا محصولات، و فرایند تماس، رزرو یا پرداخت.

اول کنتراست، برچسب‌ها، متن جایگزین و دسترسی با کیبورد را اصلاح کنید، سپس افزوده‌های WCAG 2.2 را یکی‌یکی بررسی کنید. دسترسی‌پذیری را در سیستم طراحی و کامپوننت‌های خود بگنجانید تا صفحه‌های تازه به‌طور پیش‌فرض دسترسی‌پذیر باشند، نه اینکه پس از راه‌اندازی اصلاح شوند. اگر به مشتریان خارج از کشور خدمت می‌کنید، [راهنمای ویب‌سایت برای تجارت‌های افغان در خارج](/blog/website-for-afghan-business-abroad) ما چیزهای دیگری را که آن بازارها انتظار دارند توضیح می‌دهد.

**با شین کار کنید**

شین ویب‌سایت‌هایی طراحی می‌کند که دسترسی‌پذیری از ابتدا در آن‌ها گنجانده شده است، از کنتراست و پشتیبانی کیبورد تا تنظیمات درست زبان برای صفحه‌خوان‌ها به انگلیسی، دری و پشتو، و می‌توانیم یک ویب‌سایت موجود را بر اساس WCAG 2.2 بررسی کنیم. [خدمات طراحی ویب‌سایت](/services/web-design) ما را ببینید یا از طریق info@sheen.af یا +93 784 966 018 [با ما تماس بگیرید](/contact).`,
            pa: `د WCAG 2.2 لاسرسی معنا دا ده چې د ویب منځپانګې د لاسرسي لارښوونو (WCAG) اوسنۍ نسخه پوره کړئ، چې د W3C هغه معیار دی چې ټاکي څنګه ویب‌سایټونه د معلولیت لرونکو خلکو لپاره د کارولو وړ کړو، په شمول د هغو کسانو چې پر سکرین لوستونکي، کیبورډ، لویولو یا غږیز کنټرول تکیه کوي. ډېری ادارې د AA کچه هدف ګرځوي چې عملي بنسټونه پوښي: د لوستلو وړ کنټراسټ، د کیبورډ لاسرسی، روښانه فورمې، د انځورونو لپاره بدیل متن او د وړاندوینې وړ ګرځېدنه.

**مهم ټکي**

- WCAG 2.2 په اکتوبر ۲۰۲۳ کې د W3C رسمي سپارښتنه شوه او WCAG 2.1 ته نهه د بریالیتوب معیارونه ورزیاتوي.
- د AA کچه د سوداګریزو ویب‌سایټونو لپاره واقعي هدف دی او هغه کچه ده چې ډېری قوانین او د پېرلو مقررات ورته اشاره کوي.
- نوي معیارونه پر ښکاره تمرکز، د کلیک د هدفونو اندازې، د کشولو بدیلونو، یوشان مرستې، او اسانه فورمو او ننوتلو تمرکز کوي.
- ډېری سمونونه هغه وخت ارزانه وي چې له پیله په پام کې ونیول شي: معنایي HTML، لیبلونه، کنټراسټ او د کیبورډ ازموینه.
- لاسرسی له SEO، په موبایل کې د کارونې له اسانتیا او د لیدونکو پیرودونکو ته د بدلولو سره هم مرسته کوي، په ځانګړي ډول د زړو کاروونکو او ارزانه وسایلو لپاره.

**WCAG 2.2 څه شی دی او څوک باید پیروي ترې وکړي؟**

WCAG 2.2 د ویب منځپانګې د لاسرسي لارښوونو تر ټولو نوې باثباته نسخه ده چې د نړیوال ویب کنسرسیوم (W3C) له خوا خپره شوې. دا لارښوونې پر څلورو اصولو ولاړې دي، دا چې منځپانګه باید د حس وړ، د کارولو وړ، د پوهېدو وړ او پیاوړې وي، او د بریالیتوب د ازموینې وړ معیارونه په درېیو کچو A، AA او AAA کې ټاکي.

قانوني اړتیاوې پر دې پورې اړه لري چې چېرته فعالیت کوئ او ستاسو پیرودونکي څوک دي. په اروپايي اتحادیه کې، د اروپا د لاسرسي قانون (European Accessibility Act) د ۲۰۲۵ له جون راهیسې پر ډېرو مصرفي ډیجیټل خدمتونو، په شمول د برېښنایي سوداګرۍ، پلي کېږي او د ډېرو کوچنیو شرکتونو لپاره ځینې معافیتونه لري. په متحده ایالاتو کې، د معلولیت لرونکو امریکایانو د قانون (ADA) پر بنسټ د ویب‌سایټونو پر وړاندې د لاسرسي شکایتونه عام دي. که تاسو یوه افغان سوداګري یاست چې په اروپا یا شمالي امریکا کې پیرودونکو ته پلورئ، یا هلته مېشته کډواله سوداګري یاست، خپلې دندې له یوه محلي سلاکار سره وڅېړئ.

د هغو سوداګریو لپاره چې د افغانستان دننه پیرودونکو ته خدمت کوي، لاسرسی لږ قانوني پوښتنه او ډېر د ټولو خلکو ته د رسېدو موضوع ده، په شمول د زړو پیرودونکو، کمزوري لید لرونکو خلکو او هر هغه چا چې د لمر په تېزه رڼا کې له کوچني او ارزانه تلیفون څخه کار اخلي.

**په WCAG 2.2 کې څه نوي دي؟**

WCAG 2.2 نهه د بریالیتوب معیارونه ورزیاتوي او یو زوړ معیار، یعنې 4.1.1 Parsing، لرې کوي. هغه ورزیاتونې چې د عادي سوداګریزو ویب‌سایټونو سره ډېره اړیکه لري دا دي:

- **Focus Not Obscured (Minimum)، د AA کچه:** کله چې یو عنصر د کیبورډ تمرکز ترلاسه کړي، باید د نښتو سرپاڼو، د کوکي بینرونو یا د چټ ویجټونو تر شا بشپړ پټ نه شي.
- **Dragging Movements، د AA کچه:** هر هغه څه چې کشولو ته اړتیا لري، لکه سلایډرونه یا د ترتیب وړ لېستونه، باید په یوه ساده ټک یا کلیک هم کار وکړي.
- **Target Size (Minimum)، د AA کچه:** د کلیک وړ هدفونه باید لږ تر لږه ۲۴ په ۲۴ CSS پیکسله وي، یا شاوخوا یې کافي واټن وي، له ځینو استثناوو سره.
- **Consistent Help، د A کچه:** که مرسته لکه د تلیفون شمېره، د WhatsApp لینک یا د اړیکې فورمه وړاندې کوئ، باید په ټولو پاڼو کې په یوه ځای کې ښکاره شي.
- **Redundant Entry، د A کچه:** کاروونکي مه مجبوروئ چې په یوه پروسه کې یو معلومات دوه ځله ټایپ کړي؛ له مخکې یې ډک کړئ یا پرېږدئ چې ویې ټاکي.
- **Accessible Authentication (Minimum)، د AA کچه:** ننوتل باید په ذهني ازموینو لکه د کوډونو یادولو یا بیا ټایپولو پورې تړلي نه وي، مګر دا چې بدیل شتون ولري، د بېلګې په توګه د paste اجازه او د پاسورډ مدیر کارول.

پاتې درې معیارونه، یعنې Focus Not Obscured (Enhanced)، Focus Appearance او Accessible Authentication (Enhanced)، د AAA په کچه کې دي.

**په سوداګریزو ویب‌سایټونو کې د لاسرسي تر ټولو عامې ستونزې کومې دي؟**

تر ټولو عامې ستونزې همغه بنسټیزې دي، او معمولاً ژر سمېږي. کله چې موږ ویب‌سایټونه کتو، همغه ستونزې بیا بیا راڅرګندېږي:

- د رنګ ټیټ کنټراسټ، په ځانګړي ډول په سپین شالید روښانه خړ متن او پر انځورونو متن. د AA کچه د عادي متن لپاره لږ تر لږه ۴.۵ په ۱ او د لوی متن لپاره ۳ په ۱ کنټراسټ نسبت غواړي.
- هغه انځورونه چې معنا لرونکی بدیل متن نه لري، یا ښکلا لپاره انځورونه چې سکرین لوستونکي یې د فایل نوم لولي.
- د فورم هغه فیلډونه چې د لیدو وړ لیبل نه لري او د فیلډ دننه پر لارښود متن تکیه کوي چې د ټایپ په پیل سره ورکېږي.
- مینوګانې، سلایډرونه او پاپ‌اپونه چې په کیبورډ نه شي کارول کېدای.
- د تمرکز کرښې چې په CSS کې لرې شوې، نو د کیبورډ کاروونکي نه ویني چې چېرته دي.
- سرلیکونه چې د اندازې له مخې ټاکل شوي نه د جوړښت له مخې، چې د سکرین لوستونکو کاروونکو لپاره ګرځېدنه خرابوي.
- ویډیوګانې پرته له لاندې لیکنو.
- د lang ځانګړتیا چې نشته یا غلطه ده، او له امله یې سکرین لوستونکي دري یا پښتو د انګلیسي په قواعدو تلفظ کوي.

وروستی ټکی په افغانستان کې مهم دی. د پښتو لپاره د سکرین لوستونکو او له متن نه غږ ته د اړولو ملاتړ د انګلیسي یا دري په پرتله محدود دی، نو سمې lang ځانګړتیاوې، روښانه جوړښت او ساده ژبه نوره هم مرسته کوي. زموږ د [RTL ویب‌سایټ ډیزاین لارښود](/blog/rtl-website-design-best-practices) د ژبې او لوري سم تنظیم تشریح کوي.

**یو ویب‌سایټ د WCAG 2.2 لپاره څنګه وازمویو؟**

اتومات وسایل له لاسي کتنو سره یوځای کړئ، ځکه چې اتومات سکینرونه یوازې د ستونزو یوه برخه مومي. وسایل لکه Lighthouse، axe DevTools او WAVE ژر ورک بدیل متن، ناکافي کنټراسټ او نشتوالي لیبلونه پیدا کوي. خو دا قضاوت نه شي کولای چې ایا بدیل متن معنا لري یا دا چې یوه پروسه له کیبورډ سره منطقي کار کوي.

د ازموینې یوه عملي لړۍ:

1. په خپلو مهمو قالبونو کې اتومات سکین وچلوئ: اصلي پاڼه، د خدمت یا محصول پاڼه، لیکنه، د اړیکې فورمه او د تادیې پاڼه.
2. موږک یو طرف ته کړئ او اصلي کارونه یوازې د Tab، Shift+Tab، Enter، Space او د لوري کیلیو په مرسته ترسره کړئ.
3. وګورئ چې د تمرکز نښه تل ښکاري او هېڅکله د نښتو سرپاڼو یا بینرونو تر شا نه پټېږي.
4. براوزر تر ۲۰۰ سلنې لوی کړئ او ډاډ ترلاسه کړئ چې هېڅ شی پر یو بل نه لوېږي یا نه ورکېږي.
5. یو سکرین لوستونکی چالان کړئ، لکه په وینډوز کې NVDA، د Apple په وسایلو کې VoiceOver یا په اندرویډ کې TalkBack، او یوه پاڼه له سره تر پایه واورئ.
6. هره فورمه د لیدو وړ لیبلونو، د تېروتنې روښانه پیغامونو او د پاسورډ او کوډ په فیلډونو کې د paste د امکان له پلوه وګورئ.
7. په موبایل کې د ټک هدفونه اندازه کړئ او ډاډ ترلاسه کړئ چې تڼۍ او لینکونه کافي لوی دي او یو له بل سره نښتي نه دي.
8. ستونزې حل کړئ، بیا یې وازمویئ او هغه څه ثبت کړئ چې کتلي مو دي، ترڅو راتلونکی تازه کول کار خراب نه کړي.

**لاسرسی څنګه له SEO او بدلون سره مرسته کوي؟**

د لاسرسي وړ ویب‌سایټونه معمولاً په لټون کې ښه کار کوي او ډېر پیرودونکي راجلبوي، ځکه چې د لاسرسي ډېرې طریقې په عین وخت کې د SEO او د کارونې د اسانتیا ښې طریقې هم دي. تشریحي بدیل متن د انځورونو له لټون سره مرسته کوي. د سرلیکونو سم جوړښت له لټون انجنونو او د مصنوعي ځیرکتیا له مرستیالانو سره مرسته کوي چې پاڼه وپوهېږي. روښانه لیبلونه او د تېروتنې پیغامونه د فورم پرېښودل کموي، او ډېری وخت همدا ځای دی چې د پیرودونکو غوښتنې له لاسه ځي.

لوی د ټک هدفونه او د لوستلو وړ کنټراسټ له ټولو هغو کسانو سره هم مرسته کوي چې بهر، په تېزه رڼا کې یا په کوچني او ارزانه سکرین تلیفون کاروي، چې په افغانستان کې د موبایل ترافیک لویه برخه همداسې ده. زموږ [د لینډینګ پاڼې د بدلون چک‌لیست](/blog/landing-page-conversion-checklist) د دې ټکو څو برخې لري.

**یوه کوچنۍ سوداګري له کومه ځایه پیل وکړي؟**

پر ځای د دې چې ټولې پاڼې په یو ځل سمې کړئ، د کاروونکو له تر ټولو مهمو لارو پیل وکړئ. د ډېرو سوداګریو لپاره دا اصلي پاڼه، د خدمتونو یا محصولاتو اصلي پاڼې، او د اړیکې، بوکینګ یا تادیې پروسه ده.

لومړی کنټراسټ، لیبلونه، بدیل متن او د کیبورډ لاسرسی سم کړئ، بیا د WCAG 2.2 ورزیاتونې یو په یو وڅېړئ. لاسرسی په خپل ډیزاین سیسټم او کمپوننټونو کې ځای کړئ ترڅو نوې پاڼې په ډیفالټ ډول د لاسرسي وړ وي، نه دا چې له پیل وروسته سمې شي. که بهر پیرودونکو ته خدمت کوئ، زموږ [په بهر کې د افغان سوداګریو لپاره د ویب‌سایټ لارښود](/blog/website-for-afghan-business-abroad) نور هغه شیان تشریح کوي چې دا بازارونه یې تمه لري.

**له شین سره کار وکړئ**

شین داسې ویب‌سایټونه ډیزاینوي چې لاسرسی له پیله پکې ځای شوی وي، له کنټراسټ او د کیبورډ ملاتړ نه نیولې په انګلیسي، دري او پښتو کې د سکرین لوستونکو لپاره د ژبې تر سم تنظیم پورې، او موږ کولای شو یو موجود ویب‌سایټ د WCAG 2.2 پر بنسټ وڅېړو. زموږ [د ویب ډیزاین خدمت](/services/web-design) وګورئ یا د info@sheen.af یا +93 784 966 018 له لارې [موږ سره اړیکه ونیسئ](/contact).`
        },
        faqs: [
            {
                q: {
                    en: "Is WCAG 2.2 a legal requirement for my website?",
                    da: "آیا WCAG 2.2 برای ویب‌سایت من یک الزام قانونی است؟",
                    pa: "ایا WCAG 2.2 زما د ویب‌سایټ لپاره قانوني اړتیا ده؟"
                },
                a: {
                    en: "It depends on where you operate and sell. WCAG itself is a technical standard, not a law, but many laws and regulations point to it, such as accessibility rules in the European Union and court cases under the ADA in the United States. Businesses selling into those markets should check their obligations with a local adviser. Elsewhere, following WCAG is good practice rather than a legal duty.",
                    da: "به این بستگی دارد که کجا فعالیت می‌کنید و می‌فروشید. WCAG خودش یک استاندارد فنی است نه قانون، اما بسیاری از قوانین و مقررات به آن اشاره می‌کنند، مانند قواعد دسترسی‌پذیری در اتحادیهٔ اروپا و پرونده‌های قضایی بر اساس ADA در ایالات متحده. تجارت‌هایی که در این بازارها می‌فروشند باید تعهدات خود را با یک مشاور محلی بررسی کنند. در جاهای دیگر، پیروی از WCAG یک روش خوب کاری است نه یک وظیفهٔ قانونی.",
                    pa: "پر دې پورې اړه لري چې چېرته فعالیت کوئ او پلورئ. WCAG پخپله یو تخنیکي معیار دی نه قانون، خو ډېر قوانین او مقررات ورته اشاره کوي، لکه په اروپايي اتحادیه کې د لاسرسي قواعد او په متحده ایالاتو کې د ADA پر بنسټ محکمې قضیې. هغه سوداګرۍ چې په دې بازارونو کې پلورل کوي باید خپلې دندې له یوه محلي سلاکار سره وڅېړي. په نورو ځایونو کې، د WCAG پیروي یوه ښه کاري طریقه ده نه قانوني دنده."
                }
            },
            {
                q: {
                    en: "What is the difference between WCAG 2.1 and WCAG 2.2?",
                    da: "تفاوت میان WCAG 2.1 و WCAG 2.2 چیست؟",
                    pa: "د WCAG 2.1 او WCAG 2.2 ترمنځ توپیر څه دی؟"
                },
                a: {
                    en: "WCAG 2.2 keeps almost everything in WCAG 2.1 and adds nine new success criteria, mostly helping keyboard users, people with motor difficulties and people with cognitive disabilities. Examples include minimum target sizes, keeping focused elements visible, alternatives to dragging and easier logins. It also removes the outdated 4.1.1 Parsing criterion. A site that meets WCAG 2.2 AA also meets WCAG 2.1 AA.",
                    da: "WCAG 2.2 تقریباً همهٔ موارد WCAG 2.1 را نگه می‌دارد و نُه معیار موفقیت تازه اضافه می‌کند که بیشتر به کاربران کیبورد، افراد دارای مشکلات حرکتی و افراد دارای معلولیت‌های ذهنی کمک می‌کند. نمونه‌ها شامل حداقل اندازهٔ هدف‌های کلیک، دیده‌شدن عناصر دارای تمرکز، جایگزین برای کشیدن و ورود آسان‌تر است. همچنین معیار منسوخ 4.1.1 Parsing را حذف می‌کند. ویب‌سایتی که WCAG 2.2 AA را رعایت کند، WCAG 2.1 AA را هم رعایت کرده است.",
                    pa: "WCAG 2.2 د WCAG 2.1 نږدې ټول توکي ساتي او نهه نوي د بریالیتوب معیارونه ورزیاتوي چې ډېری د کیبورډ کاروونکو، د حرکتي ستونزو لرونکو او د ذهني معلولیت لرونکو خلکو سره مرسته کوي. بېلګې یې د کلیک د هدفونو لږترلږه اندازه، د تمرکز لرونکو عناصرو ښکاره ساتل، د کشولو بدیلونه او اسانه ننوتل دي. همداراز زوړ 4.1.1 Parsing معیار لرې کوي. هغه ویب‌سایټ چې WCAG 2.2 AA پوره کړي، WCAG 2.1 AA یې هم پوره کړی دی."
                }
            },
            {
                q: {
                    en: "Can an accessibility overlay or widget make my website compliant?",
                    da: "آیا یک ابزار یا ویجت دسترسی‌پذیری می‌تواند ویب‌سایت من را مطابق معیار کند؟",
                    pa: "ایا د لاسرسي یوه وسیله یا ویجټ کولای شي زما ویب‌سایټ له معیار سره برابر کړي؟"
                },
                a: {
                    en: "Not on its own. Overlay widgets add a toolbar for changing font size or contrast, but they cannot fix missing form labels, poor heading structure, keyboard traps or meaningless alt text in your actual code. Many accessibility specialists and disabled users criticise them for this reason. The reliable approach is to fix the underlying HTML, CSS and content, then test with real assistive technology.",
                    da: "به تنهایی نه. ویجت‌های overlay یک نوار ابزار برای تغییر اندازهٔ فونت یا کنتراست اضافه می‌کنند، اما نمی‌توانند برچسب‌های گم‌شدهٔ فورم، ساختار ضعیف سرعنوان‌ها، گیر افتادن کیبورد یا متن جایگزین بی‌معنا را در کد واقعی شما اصلاح کنند. بسیاری از متخصصان دسترسی‌پذیری و کاربران دارای معلولیت به همین دلیل از آن‌ها انتقاد می‌کنند. راه مطمئن، اصلاح HTML، CSS و محتوای اصلی و سپس آزمایش با فناوری‌های کمکی واقعی است.",
                    pa: "یوازې پخپله نه. د overlay ویجټونه د فونټ اندازې یا کنټراسټ د بدلولو لپاره یوه وسیله پټه ورزیاتوي، خو ستاسو په اصلي کوډ کې ورک شوي د فورم لیبلونه، د سرلیکونو کمزوری جوړښت، د کیبورډ بندېدل یا بې‌معنا بدیل متن نه شي سمولای. ډېری د لاسرسي متخصصین او معلولیت لرونکي کاروونکي له همدې امله پرې نیوکه کوي. باوري لار دا ده چې اصلي HTML، CSS او منځپانګه سمه کړئ، بیا یې له ریښتینې مرستندویه ټکنالوژۍ سره وازمویئ."
                }
            },
            {
                q: {
                    en: "How much does it cost to make a website accessible?",
                    da: "دسترسی‌پذیر کردن یک ویب‌سایت چقدر هزینه دارد؟",
                    pa: "د یوه ویب‌سایټ د لاسرسي وړ کول څومره لګښت لري؟"
                },
                a: {
                    en: "For a new website, building to WCAG 2.2 AA from the start adds little cost, because it mostly means using correct HTML, good contrast and proper testing. Fixing an existing site varies widely: a simple brochure site may need a few days of work, while a complex shop or web app with custom components can take much longer. A review of your key pages gives a realistic estimate.",
                    da: "برای یک ویب‌سایت تازه، ساختن بر اساس WCAG 2.2 AA از ابتدا هزینهٔ کمی اضافه می‌کند، چون بیشتر به معنای استفاده از HTML درست، کنتراست خوب و آزمایش مناسب است. اصلاح یک ویب‌سایت موجود بسیار متفاوت است: یک ویب‌سایت معرفی ساده ممکن است به چند روز کار نیاز داشته باشد، در حالی که یک فروشگاه پیچیده یا اپلیکیشن وب با کامپوننت‌های اختصاصی می‌تواند بسیار بیشتر طول بکشد. بررسی صفحه‌های کلیدی شما یک برآورد واقع‌بینانه می‌دهد.",
                    pa: "د یوه نوي ویب‌سایټ لپاره، له پیله د WCAG 2.2 AA پر بنسټ جوړول لږ لګښت ورزیاتوي، ځکه چې ډېری د سم HTML، ښه کنټراسټ او مناسبې ازموینې کارول دي. د یوه موجود ویب‌سایټ سمول ډېر توپیر لري: یو ساده معرفي ویب‌سایټ کېدای شي څو ورځو کار ته اړتیا ولري، په داسې حال کې چې یوه پېچلې هټۍ یا ویب اپلیکیشن له ځانګړو کمپوننټونو سره ډېر وخت نیولی شي. ستاسو د مهمو پاڼو کتنه یو واقعي اټکل درکوي."
                }
            }
        ],
        category: "web-dev",
        author: "Jawad Hakimi",
        date: "2026-10-05",
        updated: "2026-10-05",
        readTime: "6 min read",
        image: "/logo.png",
        tags: ["wcag 2.2 accessibility", "WCAG 2.2", "website accessibility", "European Accessibility Act", "accessibility checklist", "ADA website compliance", "accessible web design", "screen reader Dari Pashto"]
    },
    {
        id: "122",
        slug: "landing-page-conversion-checklist",
        title: {
            en: "Landing Page Conversion Checklist: 20 Things to Check",
            da: "چک‌لیست تبدیل صفحهٔ فرود: ۲۰ موردی که باید بررسی کنید",
            pa: "د لینډینګ پاڼې د بدلون چک‌لیست: ۲۰ شیان چې باید یې وګورئ"
        },
        excerpt: {
            en: "Landing page conversion checklist: 20 checks for message, design, forms, speed, trust and tracking, plus a simple process to audit and improve any page.",
            da: "چک‌لیست تبدیل صفحهٔ فرود: ۲۰ بررسی برای پیام، طراحی، فورم‌ها، سرعت، اعتماد و ردیابی، همراه با یک روش ساده برای بررسی و بهبود هر صفحه.",
            pa: "د لینډینګ پاڼې د بدلون چک‌لیست: د پیغام، ډیزاین، فورمو، سرعت، باور او تعقیب لپاره ۲۰ کتنې، او د هرې پاڼې د څېړلو او ښه کولو یوه ساده لار."
        },
        content: {
            en: `Landing page conversion depends on a few things done well: one clear offer that matches the ad or link that brought the visitor, a page that loads fast and reads easily on a phone, a simple way to act, and enough proof to trust you. The 20-point checklist below covers what to check before you spend another afghani on ads.

**Key Takeaways**

- Give every landing page one goal and one primary call to action, and remove anything that competes with it.
- Match the headline to the ad, keyword or post that sent the visitor, in the same language they used.
- Keep forms short, mobile-friendly and honest about what happens next.
- Speed, trust signals and working conversion tracking matter as much as the copy.
- Change one thing at a time and judge by real conversions, not opinions.

**What Makes a Landing Page Convert?**

A landing page converts when a specific visitor instantly understands what you offer, believes it is right for them and can act with little effort. Unlike a homepage, which serves many audiences, a landing page exists for one campaign, one audience and one action: a call, a WhatsApp message, a quote request, a booking or a purchase.

Most underperforming pages fail on the basics rather than on clever design. Use the 20 checks below as a pre-launch review for every campaign page, and again whenever results drop.

**Message and Offer: Checks 1 to 5**

The first five checks make sure the visitor knows within seconds that they are in the right place.

- **1. One goal per page.** Decide the single action you want, and make every section support it.
- **2. Message match.** The headline should repeat the promise of the ad, keyword or social post. If the ad says "Same-day AC repair in Kabul", the page should say that, not "Welcome to our company".
- **3. A specific headline.** State the outcome and who it is for. Vague slogans make visitors work too hard.
- **4. A clear offer and price signal.** Say what is included and, where possible, a starting price or range. Hidden pricing often creates doubt.
- **5. The visitor's language.** If the ad ran in Dari or Pashto, the landing page should be in Dari or Pashto too, with a correct right-to-left layout. Diaspora campaigns may need English with Dari or Pashto options.

**Design and Layout: Checks 6 to 10**

Design should make the page easy to scan on a small phone screen, which is where most of your visitors will see it.

- **6. Mobile first.** Review the page on a real phone. Most social media traffic is mobile, and much search traffic is too.
- **7. Call to action visible early.** The primary button should appear in the first screen on mobile, and again after key sections.
- **8. No main navigation.** Remove the full site menu so visitors are not pulled away; a logo and a contact option are enough.
- **9. Scannable structure.** Use short paragraphs, clear subheadings and bullet points for benefits.
- **10. Real images.** Photos of your actual team, premises, work or product build more trust than generic stock photos.

**Forms and Calls to Action: Checks 11 to 15**

The form or button is where the conversion actually happens, so it deserves the most attention and testing.

- **11. Specific button text.** "Get my free quote" or "Book a consultation" works better than "Submit".
- **12. Minimum form fields.** Ask only for what you need for the first contact; name and phone number are often enough.
- **13. Alternative contact options.** Many Afghan customers prefer to call or send a WhatsApp message rather than fill in a form, so offer click-to-call and WhatsApp buttons.
- **14. A clear next step.** Tell people what happens after they submit, such as "We will call you within one working day".
- **15. A working thank-you state.** Show a confirmation page or message, and make sure the enquiry actually reaches someone who responds.

On the [Maple Mover website](/portfolio/maple-mover), the quote request form is the core of the site, which is exactly where checks 11 to 15 matter most.

**Speed, Trust and Tracking: Checks 16 to 20**

The last five checks remove the hidden reasons people leave, and make sure you can measure what works.

- **16. Fast loading.** Aim for the main content to appear within about two and a half seconds on mobile data. Our guide to [website speed for slow connections](/blog/website-speed-slow-internet-afghanistan) explains how.
- **17. Social proof.** Show genuine reviews, client logos you have permission to use, or real project examples. Never invent testimonials.
- **18. Trust details.** A physical address, phone number, business hours and a clear privacy note reassure first-time visitors.
- **19. Accessible and readable.** Good contrast, large tap targets and readable font sizes help every visitor, especially on cheap screens.
- **20. Conversion tracking.** Track form submissions, calls and WhatsApp clicks as conversions in GA4 and your ad platforms. See our [conversion tracking setup guide](/blog/conversion-tracking-setup-2026).

**How Do You Run This Audit and Improve Results?**

Run the audit with fresh eyes, ideally with someone who did not build the page, and fix the biggest gaps before testing small details. A simple process:

1. Open the ad or post and the landing page side by side on a phone and check the message match.
2. Score each of the 20 checks as pass, weak or fail.
3. Fix every fail, starting with tracking, speed and form problems.
4. Confirm conversions are being recorded correctly before changing anything else.
5. Pick one weak area, such as the headline or the offer, and test a single change.
6. Let the test run long enough to collect meaningful data before deciding.
7. Keep the winner, record what you learned, and move on to the next test.

Changing one thing at a time is what makes results trustworthy. Our [ad creative testing framework](/blog/ad-creative-testing-framework) applies the same discipline to the ads that send traffic to the page.

**Work With Sheen**

Sheen builds landing pages and manages Google Ads campaigns together, so the ad, the page and the tracking work as one system. Google Ads management starts from AFN 7,000 per month (ad spend separate), with a one-off setup from $149. See our [Google Ads service](/services/google-ads) or [book a call](/book), and reach us at info@sheen.af or +93 784 966 018.`,
            da: `تبدیل در صفحهٔ فرود به چند کار بستگی دارد که باید خوب انجام شوند: یک پیشنهاد روشن که با اعلان یا لینکی که بازدیدکننده را آورده همخوان باشد، صفحه‌ای که سریع بارگذاری شود و روی گوشی به آسانی خوانده شود، راهی ساده برای اقدام، و شواهد کافی برای اعتماد به شما. چک‌لیست ۲۰ مورده‌ای که در ادامه می‌آید نشان می‌دهد پیش از اینکه یک افغانی دیگر برای اعلانات خرج کنید چه چیزهایی را باید بررسی کنید.

**نکات کلیدی**

- به هر صفحهٔ فرود یک هدف و یک دعوت به اقدام اصلی بدهید، و هر چیزی را که با آن رقابت می‌کند حذف کنید.
- سرعنوان را با اعلان، کلمهٔ کلیدی یا پستی که بازدیدکننده را فرستاده، و به همان زبانی که استفاده کرده، همخوان کنید.
- فورم‌ها را کوتاه، مناسب موبایل و صادق دربارهٔ مرحلهٔ بعد نگه دارید.
- سرعت، نشانه‌های اعتماد و ردیابی درست تبدیل به اندازهٔ متن صفحه اهمیت دارند.
- هر بار فقط یک چیز را تغییر دهید و بر اساس تبدیل‌های واقعی قضاوت کنید، نه نظرها.

**چه چیزی یک صفحهٔ فرود را موفق می‌کند؟**

یک صفحهٔ فرود زمانی موفق است که یک بازدیدکنندهٔ مشخص فوراً بفهمد شما چه پیشنهادی دارید، باور کند که برای او مناسب است و بتواند با کمترین زحمت اقدام کند. برخلاف صفحهٔ اصلی که به مخاطبان زیادی خدمت می‌کند، صفحهٔ فرود برای یک کمپاین، یک مخاطب و یک اقدام ساخته می‌شود: یک تماس، یک پیام WhatsApp، درخواست قیمت، رزرو یا خرید.

بیشتر صفحه‌هایی که نتیجهٔ خوب نمی‌دهند در اصول پایه شکست می‌خورند، نه در طراحی هوشمندانه. ۲۰ بررسی زیر را به‌عنوان مرور پیش از راه‌اندازی برای هر صفحهٔ کمپاین به کار ببرید، و هر بار که نتایج پایین آمد دوباره تکرار کنید.

**پیام و پیشنهاد: بررسی‌های ۱ تا ۵**

پنج بررسی اول اطمینان می‌دهند که بازدیدکننده در چند ثانیه بفهمد در جای درست آمده است.

- **۱. یک هدف برای هر صفحه.** اقدام واحدی را که می‌خواهید مشخص کنید و هر بخش صفحه را در خدمت آن قرار دهید.
- **۲. همخوانی پیام.** سرعنوان باید وعدهٔ اعلان، کلمهٔ کلیدی یا پست شبکهٔ اجتماعی را تکرار کند. اگر اعلان می‌گوید «ترمیم ایرکاندیشن در همان روز در کابل»، صفحه هم باید همین را بگوید، نه «به شرکت ما خوش آمدید».
- **۳. سرعنوان مشخص.** نتیجه و مخاطب را بیان کنید. شعارهای مبهم بازدیدکننده را به زحمت می‌اندازند.
- **۴. پیشنهاد روشن و نشانه‌ای از قیمت.** بگویید چه چیزهایی شامل است و در صورت امکان قیمت شروع یا یک محدوده بدهید. قیمت پنهان اغلب تردید ایجاد می‌کند.
- **۵. زبان بازدیدکننده.** اگر اعلان به دری یا پشتو نشر شده، صفحهٔ فرود هم باید به دری یا پشتو و با صفحه‌آرایی درست راست‌به‌چپ باشد. کمپاین‌های مخصوص افغان‌های مقیم خارج ممکن است به انگلیسی همراه با گزینه‌های دری یا پشتو نیاز داشته باشند.

**طراحی و صفحه‌آرایی: بررسی‌های ۶ تا ۱۰**

طراحی باید مرور صفحه را روی صفحهٔ کوچک گوشی آسان کند، چون بیشتر بازدیدکنندگان شما صفحه را همان‌جا می‌بینند.

- **۶. اول موبایل.** صفحه را روی یک گوشی واقعی بررسی کنید. بیشتر ترافیک شبکه‌های اجتماعی از موبایل است و بخش زیادی از ترافیک جستجو هم همین‌طور.
- **۷. دعوت به اقدام در ابتدای صفحه.** دکمهٔ اصلی باید در اولین صفحهٔ نمایش موبایل دیده شود و پس از بخش‌های کلیدی دوباره تکرار شود.
- **۸. بدون منوی اصلی.** منوی کامل ویب‌سایت را حذف کنید تا بازدیدکنندگان به جای دیگر کشیده نشوند؛ یک لوگو و یک گزینهٔ تماس کافی است.
- **۹. ساختار قابل مرور.** از پاراگراف‌های کوتاه، سرعنوان‌های فرعی روشن و فهرست‌های نقطه‌ای برای مزایا استفاده کنید.
- **۱۰. تصاویر واقعی.** عکس‌های تیم، محل کار، کارها یا محصول واقعی شما بیشتر از عکس‌های آمادهٔ عمومی اعتماد می‌سازند.

**فورم‌ها و دعوت به اقدام: بررسی‌های ۱۱ تا ۱۵**

فورم یا دکمه جایی است که تبدیل واقعاً اتفاق می‌افتد، پس بیشترین توجه و آزمایش را لازم دارد.

- **۱۱. متن مشخص دکمه.** «قیمت رایگانم را بگیرم» یا «یک مشاوره رزرو کنید» بهتر از «ارسال» کار می‌کند.
- **۱۲. کمترین تعداد فیلد.** فقط آنچه را برای تماس اول لازم دارید بپرسید؛ نام و شمارهٔ تلفن اغلب کافی است.
- **۱۳. گزینه‌های تماس جایگزین.** بسیاری از مشتریان افغان ترجیح می‌دهند زنگ بزنند یا پیام WhatsApp بفرستند تا اینکه فورم پر کنند، پس دکمه‌های تماس مستقیم و WhatsApp بگذارید.
- **۱۴. مرحلهٔ بعدی روشن.** به مردم بگویید پس از ارسال چه اتفاقی می‌افتد، مثلاً «ما در یک روز کاری با شما تماس می‌گیریم».
- **۱۵. صفحهٔ تشکر که کار کند.** یک صفحه یا پیام تأیید نشان دهید، و مطمئن شوید درخواست واقعاً به کسی می‌رسد که پاسخ می‌دهد.

در [ویب‌سایت Maple Mover](/portfolio/maple-mover)، فورم درخواست قیمت هستهٔ ویب‌سایت است، و دقیقاً همین‌جا است که بررسی‌های ۱۱ تا ۱۵ بیشترین اهمیت را دارند.

**سرعت، اعتماد و ردیابی: بررسی‌های ۱۶ تا ۲۰**

پنج بررسی آخر دلایل پنهان ترک صفحه را از میان برمی‌دارند و اطمینان می‌دهند که می‌توانید بسنجید چه چیزی کار می‌کند.

- **۱۶. بارگذاری سریع.** هدف این باشد که محتوای اصلی در حدود دو و نیم ثانیه روی انترنت موبایل ظاهر شود. [راهنمای سرعت ویب‌سایت برای اتصال‌های کند](/blog/website-speed-slow-internet-afghanistan) ما روش آن را توضیح می‌دهد.
- **۱۷. شواهد اجتماعی.** نظرهای واقعی، لوگوی مشتریانی که اجازهٔ استفاده‌اش را دارید، یا نمونه‌های واقعی پروژه نشان دهید. هرگز توصیه‌نامهٔ ساختگی ننویسید.
- **۱۸. جزئیات اعتمادساز.** آدرس فزیکی، شمارهٔ تلفن، ساعات کاری و یک یادداشت روشن دربارهٔ حریم خصوصی، بازدیدکنندگان تازه را مطمئن می‌کند.
- **۱۹. دسترسی‌پذیر و خوانا.** کنتراست خوب، هدف‌های لمسی بزرگ و اندازهٔ فونت خوانا به همهٔ بازدیدکنندگان کمک می‌کند، به‌ویژه روی صفحه‌های ارزان.
- **۲۰. ردیابی تبدیل.** ارسال فورم‌ها، تماس‌ها و کلیک‌های WhatsApp را به‌عنوان تبدیل در GA4 و پلتفرم‌های اعلانات خود ردیابی کنید. [راهنمای تنظیم ردیابی تبدیل](/blog/conversion-tracking-setup-2026) ما را ببینید.

**این بررسی را چگونه انجام دهیم و نتایج را بهتر کنیم؟**

بررسی را با نگاه تازه انجام دهید، بهتر است توسط کسی که صفحه را نساخته، و پیش از آزمایش جزئیات کوچک، بزرگ‌ترین کمبودها را رفع کنید. یک روش ساده:

1. اعلان یا پست و صفحهٔ فرود را کنار هم روی یک گوشی باز کنید و همخوانی پیام را بررسی کنید.
2. به هر یک از ۲۰ بررسی نمرهٔ قبول، ضعیف یا رد بدهید.
3. همهٔ موارد رد را اصلاح کنید و با مشکلات ردیابی، سرعت و فورم شروع کنید.
4. پیش از تغییر هر چیز دیگر، مطمئن شوید تبدیل‌ها درست ثبت می‌شوند.
5. یک بخش ضعیف، مانند سرعنوان یا پیشنهاد، را انتخاب کنید و فقط یک تغییر را آزمایش کنید.
6. بگذارید آزمایش به اندازهٔ کافی ادامه یابد تا پیش از تصمیم‌گیری دادهٔ معنادار جمع شود.
7. گزینهٔ برنده را نگه دارید، آنچه را یاد گرفتید ثبت کنید و به آزمایش بعدی بروید.

تغییر یک چیز در هر بار است که نتایج را قابل اعتماد می‌کند. [چارچوب آزمایش محتوای اعلانات](/blog/ad-creative-testing-framework) ما همین انضباط را برای اعلاناتی به کار می‌برد که بازدیدکننده را به صفحه می‌فرستند.

**با شین کار کنید**

شین صفحه‌های فرود را می‌سازد و کمپاین‌های Google Ads را هم‌زمان مدیریت می‌کند، تا اعلان، صفحه و ردیابی مانند یک سیستم واحد کار کنند. مدیریت Google Ads از ماهانه ۷٬۰۰۰ افغانی شروع می‌شود (هزینهٔ اعلانات جداگانه)، و تنظیم یک‌باره از ۱۴۹ دالر. [خدمات Google Ads](/services/google-ads) ما را ببینید یا [یک جلسه رزرو کنید](/book)، و از طریق info@sheen.af یا +93 784 966 018 با ما در تماس شوید.`,
            pa: `په لینډینګ پاڼه کې بدلون په څو داسې کارونو پورې اړه لري چې باید ښه ترسره شي: یو روښانه وړاندیز چې له هغه اعلان یا لینک سره سمون ولري چې لیدونکی یې راوستی، داسې پاڼه چې ژر پورته شي او په تلیفون کې په اسانۍ ولوستل شي، د عمل یوه ساده لار، او په تاسو د باور لپاره کافي ثبوت. لاندې ۲۰ ټکیز چک‌لیست ښيي چې مخکې له دې چې پر اعلاناتو بله افغانۍ ولګوئ، څه باید وګورئ.

**مهم ټکي**

- هرې لینډینګ پاڼې ته یو هدف او د عمل یوه اصلي بلنه ورکړئ، او هر هغه څه لرې کړئ چې ورسره سیالي کوي.
- سرلیک له هغه اعلان، کلیدي کلمې یا پوسټ سره برابر کړئ چې لیدونکی یې رالېږلی، او په همغه ژبه چې هغه کارولې.
- فورمې لنډې، د موبایل لپاره مناسبې او د راتلونکي ګام په اړه رښتینې وساتئ.
- سرعت، د باور نښې او د بدلون سم تعقیب د پاڼې د متن هومره اهمیت لري.
- هر ځل یوازې یو شی بدل کړئ او د ریښتینو بدلونونو پر بنسټ قضاوت وکړئ، نه د نظرونو.

**څه شی یوه لینډینګ پاڼه بریالۍ کوي؟**

یوه لینډینګ پاڼه هغه وخت بریالۍ ده چې یو ټاکلی لیدونکی سمدلاسه پوه شي چې تاسو څه وړاندې کوئ، باور وکړي چې د هغه لپاره مناسب دی، او په لږ زحمت عمل وکړای شي. د اصلي پاڼې برعکس چې ډېرو مخاطبانو ته خدمت کوي، لینډینګ پاڼه د یوه کمپاین، یوه مخاطب او یوه عمل لپاره جوړېږي: یو زنګ، د WhatsApp پیغام، د بیې غوښتنه، بوکینګ یا پېرود.

ډېری هغه پاڼې چې ښې پایلې نه ورکوي په بنسټیزو برخو کې پاتې راځي، نه په هوښیار ډیزاین کې. لاندې ۲۰ کتنې د هرې کمپاین پاڼې لپاره له پیل مخکې د بیاکتنې په توګه وکاروئ، او هر ځل چې پایلې ښکته شي بیا یې تکرار کړئ.

**پیغام او وړاندیز: کتنې ۱ تر ۵**

لومړۍ پنځه کتنې ډاډ ورکوي چې لیدونکی په څو ثانیو کې پوه شي چې سم ځای ته راغلی دی.

- **۱. د هرې پاڼې لپاره یو هدف.** هغه یو عمل چې غواړئ یې وټاکئ، او د پاڼې هره برخه د هغه په خدمت کې کړئ.
- **۲. د پیغام سمون.** سرلیک باید د اعلان، کلیدي کلمې یا ټولنیز پوسټ ژمنه تکرار کړي. که اعلان وايي «په کابل کې په همغه ورځ د ایرکنډیشن ترمیم»، پاڼه هم باید همدا ووايي، نه «زموږ شرکت ته ښه راغلاست».
- **۳. ځانګړی سرلیک.** پایله او دا چې د چا لپاره ده بیان کړئ. مبهم شعارونه لیدونکي په زحمت اچوي.
- **۴. روښانه وړاندیز او د بیې نښه.** ووایاست چې څه پکې شامل دي او که امکان ولري د پیل بیه یا یو حد ورکړئ. پټه بیه ډېری وخت شک پیدا کوي.
- **۵. د لیدونکي ژبه.** که اعلان په دري یا پښتو خپور شوی، لینډینګ پاڼه هم باید په دري یا پښتو او له ښي نه کیڼ ته له سم ترتیب سره وي. په بهر کې د مېشتو افغانانو کمپاینونه کېدای شي انګلیسي ته د دري یا پښتو له انتخابونو سره اړتیا ولري.

**ډیزاین او ترتیب: کتنې ۶ تر ۱۰**

ډیزاین باید په کوچني تلیفون سکرین کې د پاڼې کتل اسانه کړي، ځکه چې ستاسو ډېری لیدونکي پاڼه همالته ویني.

- **۶. لومړی موبایل.** پاڼه په یوه ریښتیني تلیفون کې وګورئ. د ټولنیزو رسنیو ډېری ترافیک له موبایل څخه دی، او د لټون د ترافیک لویه برخه هم همداسې ده.
- **۷. د عمل بلنه په پیل کې ښکاره وي.** اصلي تڼۍ باید په موبایل کې په لومړي سکرین کې ښکاره شي او له مهمو برخو وروسته بیا تکرار شي.
- **۸. اصلي مینو نه وي.** د ویب‌سایټ بشپړ مینو لرې کړئ ترڅو لیدونکي بل ځای ته ونه کشول شي؛ یو لوګو او د اړیکې یو انتخاب بس دی.
- **۹. د کتلو وړ جوړښت.** لنډ پراګرافونه، روښانه فرعي سرلیکونه او د ګټو لپاره ټکي لرونکي لېستونه وکاروئ.
- **۱۰. ریښتیني انځورونه.** ستاسو د ریښتیني ټیم، ځای، کارونو یا محصول انځورونه د عمومي چمتو انځورونو په پرتله ډېر باور جوړوي.

**فورمې او د عمل بلنې: کتنې ۱۱ تر ۱۵**

فورمه یا تڼۍ هغه ځای دی چې بدلون په ریښتیا پکې پېښېږي، نو تر ټولو ډېرې پاملرنې او ازموینې ته اړتیا لري.

- **۱۱. د تڼۍ ځانګړی متن.** «زما وړیا بیه راکړئ» یا «یوه مشوره بوک کړئ» له «لېږل» څخه ښه کار کوي.
- **۱۲. د فیلډونو لږ شمېر.** یوازې هغه څه وپوښتئ چې د لومړۍ اړیکې لپاره ورته اړتیا لرئ؛ نوم او د تلیفون شمېره ډېری وخت بس دي.
- **۱۳. د اړیکې بدیل انتخابونه.** ډېری افغان پیرودونکي غوره ګڼي چې زنګ ووهي یا د WhatsApp پیغام ولېږي نه دا چې فورمه ډکه کړي، نو د مستقیم زنګ او WhatsApp تڼۍ کېږدئ.
- **۱۴. روښانه راتلونکی ګام.** خلکو ته ووایاست چې له لېږلو وروسته څه کېږي، د بېلګې په توګه «موږ به په یوه کاري ورځ کې تاسو ته زنګ ووهو».
- **۱۵. د مننې حالت چې کار وکړي.** د تایید پاڼه یا پیغام وښایاست، او ډاډ ترلاسه کړئ چې غوښتنه په ریښتیا هغه چا ته رسېږي چې ځواب ورکوي.

د [Maple Mover په ویب‌سایټ](/portfolio/maple-mover) کې، د بیې د غوښتنې فورمه د ویب‌سایټ زړه ده، او همدا هغه ځای دی چې کتنې ۱۱ تر ۱۵ پکې تر ټولو ډېر اهمیت لري.

**سرعت، باور او تعقیب: کتنې ۱۶ تر ۲۰**

وروستۍ پنځه کتنې د پاڼې د پرېښودلو پټ لاملونه لرې کوي او ډاډ ورکوي چې تاسو اندازه کولای شئ څه کار کوي.

- **۱۶. چټک پورته کېدل.** هدف دا وي چې اصلي منځپانګه په موبایل انټرنېټ کې شاوخوا په دوه نیمو ثانیو کې ښکاره شي. زموږ [د ورو اړیکو لپاره د ویب‌سایټ د سرعت لارښود](/blog/website-speed-slow-internet-afghanistan) یې طریقه تشریح کوي.
- **۱۷. ټولنیز ثبوت.** ریښتیني نظرونه، د هغو پیرودونکو لوګو چې د کارولو اجازه یې لرئ، یا د پروژو ریښتینې بېلګې وښایاست. هېڅکله جعلي سپارښتنې مه لیکئ.
- **۱۸. د باور جزئیات.** فزیکي پته، د تلیفون شمېره، کاري ساعتونه او د محرمیت په اړه روښانه یادونه نوي لیدونکي ډاډمن کوي.
- **۱۹. د لاسرسي او لوستلو وړ.** ښه کنټراسټ، لوی د ټک هدفونه او د لوستلو وړ فونټ اندازه له ټولو لیدونکو سره مرسته کوي، په ځانګړي ډول په ارزانه سکرینونو کې.
- **۲۰. د بدلون تعقیب.** د فورمو لېږل، زنګونه او د WhatsApp کلیکونه په GA4 او د اعلاناتو په پلیټفارمونو کې د بدلون په توګه تعقیب کړئ. زموږ [د بدلون د تعقیب د تنظیم لارښود](/blog/conversion-tracking-setup-2026) وګورئ.

**دا کتنه څنګه ترسره کړو او پایلې ښې کړو؟**

کتنه په تازه نظر ترسره کړئ، غوره دا ده چې د هغه چا له خوا وي چې پاڼه یې نه وي جوړه کړې، او د کوچنیو جزئیاتو له ازموینې مخکې تر ټولو لویې نیمګړتیاوې سمې کړئ. یوه ساده لار:

1. اعلان یا پوسټ او لینډینګ پاڼه په یوه تلیفون کې یو د بل تر څنګ پرانیزئ او د پیغام سمون وګورئ.
2. هرې یوې له ۲۰ کتنو ته د منل شوي، کمزوري یا رد شوي نمره ورکړئ.
3. ټول رد شوي موارد سم کړئ، او د تعقیب، سرعت او فورم له ستونزو پیل وکړئ.
4. د بل هر څه له بدلولو مخکې ډاډ ترلاسه کړئ چې بدلونونه سم ثبتېږي.
5. یوه کمزورې برخه، لکه سرلیک یا وړاندیز، وټاکئ او یوازې یو بدلون وازمویئ.
6. پرېږدئ چې ازموینه دومره دوام وکړي چې له پرېکړې مخکې معنا لرونکي معلومات راټول شي.
7. ګټونکی انتخاب وساتئ، هغه څه چې مو زده کړل ثبت کړئ، او راتلونکې ازموینې ته لاړ شئ.

هر ځل یوازې د یوه شي بدلول دي چې پایلې د باور وړ کوي. زموږ [د اعلاناتو د منځپانګې د ازموینې چوکاټ](/blog/ad-creative-testing-framework) همدا ډسپلین پر هغو اعلاناتو پلي کوي چې لیدونکي پاڼې ته لېږي.

**له شین سره کار وکړئ**

شین لینډینګ پاڼې جوړوي او د Google Ads کمپاینونه په ورته وخت کې مدیریت کوي، ترڅو اعلان، پاڼه او تعقیب د یوه واحد سیسټم په څېر کار وکړي. د Google Ads مدیریت په میاشت کې له ۷٬۰۰۰ افغانیو پیلېږي (د اعلاناتو لګښت جلا دی)، او یو ځلی تنظیم له ۱۴۹ ډالرو. زموږ [د Google Ads خدمت](/services/google-ads) وګورئ یا [یوه غونډه بوک کړئ](/book)، او د info@sheen.af یا +93 784 966 018 له لارې موږ سره اړیکه ونیسئ.`
        },
        faqs: [
            {
                q: {
                    en: "What is a good landing page conversion rate?",
                    da: "نرخ تبدیل خوب برای یک صفحهٔ فرود چقدر است؟",
                    pa: "د یوې لینډینګ پاڼې لپاره د بدلون ښه کچه څومره ده؟"
                },
                a: {
                    en: "There is no single good number, because conversion rates vary widely by industry, offer, price, traffic source and what counts as a conversion. A phone call request converts very differently from a high-value purchase. The most useful benchmark is your own baseline: measure your current rate accurately, then improve it through tested changes, and compare cost per lead or sale rather than rates alone.",
                    da: "یک عدد واحد خوب وجود ندارد، چون نرخ تبدیل بر اساس صنعت، پیشنهاد، قیمت، منبع ترافیک و آنچه تبدیل حساب می‌شود بسیار متفاوت است. درخواست تماس تلفنی بسیار متفاوت از یک خرید گران‌قیمت تبدیل می‌شود. مفیدترین معیار، مبنای خود شما است: نرخ فعلی‌تان را دقیق اندازه بگیرید، سپس آن را با تغییرات آزمایش‌شده بهتر کنید، و به‌جای تنها نرخ‌ها، هزینهٔ هر مشتری بالقوه یا فروش را مقایسه کنید.",
                    pa: "یوه واحده ښه شمېره نشته، ځکه چې د بدلون کچه د صنعت، وړاندیز، بیې، د ترافیک سرچینې او دا چې څه شی بدلون ګڼل کېږي له مخې ډېر توپیر لري. د تلیفوني زنګ غوښتنه د یوه ګران پېرود په پرتله بېل ډول بدلېږي. تر ټولو ګټور معیار ستاسو خپل بنسټ دی: خپله اوسنۍ کچه دقیقه اندازه کړئ، بیا یې د ازمول شویو بدلونونو له لارې ښه کړئ، او یوازې د کچو پر ځای د هر احتمالي پیرودونکي یا پلور لګښت پرتله کړئ."
                }
            },
            {
                q: {
                    en: "Should a landing page be part of my main website or separate?",
                    da: "آیا صفحهٔ فرود باید بخشی از ویب‌سایت اصلی من باشد یا جداگانه؟",
                    pa: "ایا لینډینګ پاڼه باید زما د اصلي ویب‌سایټ برخه وي که جلا؟"
                },
                a: {
                    en: "Usually it is best on your main domain, for example a dedicated page under your website, because it builds trust, keeps tracking simple and lets search engines associate it with your brand. Hide it from the main navigation and remove the site menu on the page itself. Separate tools or domains can work for quick tests, but they often complicate tracking and maintenance.",
                    da: "معمولاً بهتر است روی دامنهٔ اصلی شما باشد، مثلاً یک صفحهٔ اختصاصی زیر ویب‌سایت‌تان، چون اعتماد می‌سازد، ردیابی را ساده نگه می‌دارد و به موتورهای جستجو اجازه می‌دهد آن را به برند شما مرتبط کنند. آن را از منوی اصلی پنهان کنید و منوی ویب‌سایت را در خود صفحه حذف کنید. ابزارها یا دامنه‌های جداگانه برای آزمایش‌های سریع می‌توانند کار کنند، اما اغلب ردیابی و نگهداری را پیچیده می‌کنند.",
                    pa: "معمولاً غوره دا ده چې ستاسو په اصلي ډومېن کې وي، د بېلګې په توګه ستاسو د ویب‌سایټ لاندې یوه ځانګړې پاڼه، ځکه چې باور جوړوي، تعقیب ساده ساتي او د لټون انجنونو ته اجازه ورکوي چې ستاسو له برانډ سره یې وتړي. له اصلي مینو یې پټه کړئ او په پخپله پاڼه کې د ویب‌سایټ مینو لرې کړئ. جلا وسایل یا ډومېنونه د چټکو ازموینو لپاره کار کولای شي، خو ډېری وخت تعقیب او ساتنه پېچلې کوي."
                }
            },
            {
                q: {
                    en: "How long should a landing page be?",
                    da: "یک صفحهٔ فرود چقدر باید طولانی باشد؟",
                    pa: "یوه لینډینګ پاڼه باید څومره اوږده وي؟"
                },
                a: {
                    en: "As long as it needs to be to answer the visitor's questions, and no longer. A simple, low-cost offer such as a free call-back can work with a short page. A higher-priced or unfamiliar service usually needs more detail, proof and answers to objections. Whatever the length, put the core offer and call to action at the top so ready visitors can act immediately.",
                    da: "به اندازه‌ای که برای پاسخ به پرسش‌های بازدیدکننده لازم است، نه بیشتر. یک پیشنهاد ساده و کم‌هزینه مانند تماس رایگان با یک صفحهٔ کوتاه هم کار می‌کند. یک خدمت گران‌تر یا ناآشنا معمولاً به جزئیات، شواهد و پاسخ به نگرانی‌های بیشتر نیاز دارد. طول هر چه باشد، پیشنهاد اصلی و دعوت به اقدام را در بالای صفحه بگذارید تا بازدیدکنندگان آماده بتوانند فوراً اقدام کنند.",
                    pa: "دومره اوږده چې د لیدونکي پوښتنو ته ځواب ورکړي، نه تر هغه زیاته. یو ساده او کم لګښته وړاندیز لکه وړیا بېرته زنګ له لنډې پاڼې سره هم کار کوي. یو ګران یا نااشنا خدمت معمولاً ډېرو جزئیاتو، ثبوتونو او د اندېښنو ځوابونو ته اړتیا لري. اوږدوالی هر څومره چې وي، اصلي وړاندیز او د عمل بلنه د پاڼې په سر کې کېږدئ ترڅو چمتو لیدونکي سمدلاسه عمل وکړای شي."
                }
            },
            {
                q: {
                    en: "Do I need a separate landing page for every ad campaign?",
                    da: "آیا برای هر کمپاین اعلاناتی به یک صفحهٔ فرود جداگانه نیاز دارم؟",
                    pa: "ایا د هر اعلاني کمپاین لپاره جلا لینډینګ پاڼې ته اړتیا لرم؟"
                },
                a: {
                    en: "Not for every ad, but you should have a dedicated page for each distinct offer, audience or language. If one campaign targets families in Kabul in Dari and another targets diaspora customers in English, they need different pages. Sending all ads to your homepage almost always lowers conversions, because visitors have to search for the offer they clicked on.",
                    da: "برای هر اعلان نه، اما برای هر پیشنهاد، مخاطب یا زبان متفاوت باید یک صفحهٔ اختصاصی داشته باشید. اگر یک کمپاین خانواده‌های کابل را به دری هدف می‌گیرد و دیگری مشتریان مقیم خارج را به انگلیسی، به صفحه‌های متفاوت نیاز دارند. فرستادن همهٔ اعلانات به صفحهٔ اصلی تقریباً همیشه تبدیل را کاهش می‌دهد، چون بازدیدکنندگان باید دنبال پیشنهادی بگردند که روی آن کلیک کرده‌اند.",
                    pa: "د هر اعلان لپاره نه، خو د هر جلا وړاندیز، مخاطب یا ژبې لپاره باید ځانګړې پاڼه ولرئ. که یو کمپاین په کابل کې کورنۍ په دري هدف ګرځوي او بل په بهر کې مېشت پیرودونکي په انګلیسي، نو جلا پاڼو ته اړتیا لري. ټول اعلانات اصلي پاڼې ته لېږل نږدې تل بدلون کموي، ځکه چې لیدونکي باید د هغه وړاندیز لټون وکړي چې پرې یې کلیک کړی."
                }
            }
        ],
        category: "web-dev",
        author: "Jawad Hakimi",
        date: "2026-10-01",
        updated: "2026-10-01",
        readTime: "5 min read",
        image: "/logo.png",
        tags: ["landing page conversion", "landing page checklist", "conversion rate optimization", "CRO", "Google Ads landing page", "landing page best practices 2026", "lead generation Afghanistan", "GA4 conversion tracking"]
    },
];

export default posts;
