# بحث خارجي — أفضل طريقة لعرض تقييمات جوجل (Perplexity)
> **الخطة المرجعية:** Plan 58 — Live Google Reviews Sync
> **الهدف من البحث:** تحديد أفضل طريقة لعرض تقييمات Google الحقيقية على الموقع من ناحيتين — التصميم/تجربة المستخدم، والتوافق مع سياسات جوجل الرسمية (Places API، caching، attribution)
> **النموذج المستخدم:** Perplexity
> **التاريخ:** 2026-07-10

---

<!-- الصق محتوى نتيجة البحث من Perplexity هنا -->
<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# أنا صاحب موقع مركز الفارس (alfareslab.com) — معمل استعادة بيانات وصيانة كمبيوتر في جدة، السعودية.

عايز بحث خارجي متعمق (مش إجابة عامة) عن "أفضل طريقة لعرض تقييمات جوجل الحقيقية على موقع الويب" — من ناحيتين: التصميم/تجربة المستخدم، والتوافق مع سياسات جوجل الرسمية.

━━━ معطياتنا الحالية (مهم تبني الإجابة عليها بالتحديد، مش نصيحة عامة) ━━━

1. الموقع: HTML/CSS/JS ساكن بالكامل (Static Site) — بدون أي backend أو خادم، مستضاف على Cloudflare Pages.
2. الوضع الحالي: عندنا قسم "آراء العملاء" فيه 21 تقييم مكتوبين يدوياً وثابتين في كود الموقع، آخر تاريخ فيهم من يناير 2025 (يعني قديم وثابت، مش محدّث).
3. رقم التقييم المعروض على الموقع حالياً "4.8" هو نص ثابت مكتوب يدوياً، مش مرتبط ببيانات حقيقية.
4. **تقييمنا الحقيقي الفعلي على Google Business Profile الآن هو 4.8 من 100 تقييم** (Place ID: ChIJUcxYm4vPwxURdM5oL0ZZK7M).
5. الاتجاه التقني اللي بنميل له: أتمتة دورية (مثلاً GitHub Action تشتغل أسبوعياً) تسحب بيانات Google Places API وتحدّث ملف بيانات ثابت في الموقع — بدون أي استدعاء API مباشر من متصفح الزائر (عشان الموقع يفضل سريع وما يتأثرش أداؤه، وعشان الـ API key ميبقاش ظاهر للزوار).
6. الموقع ثنائي اللغة (عربي أساسي RTL + إنجليزي /en/ LTR).
7. نوع النشاط: معمل تقني يعتمد على الثقة (استعادة بيانات حساسة) — التقييمات عنصر ثقة مهم جداً في قرار العميل.

━━━ المطلوب من البحث بالتحديد ━━━

### أولاً: سياسات جوجل الرسمية (Compliance)

- إيه هي شروط استخدام Google Places API الحالية (2026) الخاصة بعرض التقييمات (Reviews) على موقع خارجي؟
- هل فيه حد أقصى لعدد التقييمات اللي ممكن تتعرض (معروف إنه غالباً 5 تقييمات لكل طلب Place Details)؟ هل فيه طريقة رسمية بديلة لعرض أكتر من كده؟
- إيه قواعد "التخزين المؤقت" (Caching) المسموحة؟ هل تحديث أسبوعي عبر أتمتة (زي اللي بنخطط له) متوافق مع الشروط، ولا فيه حد أقصى زمني معين لازم نلتزم بيه (اتقال قبل كده إن جوجل بتطلب عدم تخزين البيانات لأكتر من 30 يوم بدون تحديث — تأكد من هذا الرقم بالتحديد ومصدره الرسمي)؟
- هل مطلوب إظهار شعار "Powered by Google" أو أي attribution إلزامي لما نعرض بيانات من Places API؟ وإيه الشكل الرسمي المطلوب بالظبط؟
- هل فيه فرق قانوني/سياسات بين: (أ) سحب البيانات وتخزينها بأتمتة زي اللي بنخطط له، و(ب) استدعاء مباشر لحظي من متصفح الزائر؟ أينا أكتر أماناً من ناحية الشروط؟
- هل جوجل عندها Widget أو Embed code رسمي جاهز لعرض التقييمات (غير الـ API) يكون أبسط وأكثر توافقاً؟


### ثانياً: أفضل ممارسات التصميم وتجربة المستخدم (UX)

- إزاي مواقع الشركات الموثوقة (خصوصاً في مجالات تقنية/خدمية حساسة زي استعادة البيانات) بتعرض قسم التقييمات بشكل يبني ثقة فعلية؟
- هل الأفضل عرض عدد قليل من التقييمات الحقيقية اللايف (5 مثلاً) ولا عرض أرشيف أكبر مع تحديث الرقم الكلي بس؟
- إزاي نتعامل تصميمياً مع كون التقييمات بتيجي بلغة واحدة من جوجل (لغة الكاتب الأصلية) مع كون موقعنا ثنائي اللغة؟
- هل فيه معيار متعارف عليه لعرض "Read more reviews on Google" كرابط تكميلي؟
- هل الأفضل Carousel/Slider، ولا Grid ثابت، ولا مزيج؟ وهل فيه بيانات فعلية (مش رأي شخصي) عن تأثير كل شكل على معدل التحويل (Conversion)؟


### ثالثاً: التوصية النهائية

بناءً على كل ما سبق، إيه التوصية العملية الأنسب لموقعنا تحديداً (static site، أتمتة دورية، 4.8/100 تقييم حقيقي)، مع ذكر أي مخاطر أو نقاط لازم ننتبهلها قبل التنفيذ؟

━━━ صيغة الإجابة ━━━
اكتب الإجابة بالكامل باللغة العربية، منظمة في نفس الأقسام الثلاثة أعلاه، مع ذكر المصادر (روابط رسمية من Google Developers/Policies) كل ما أمكن بدل الكلام العام.

أفضل حل لموقعك الساكن هو استخدام **API رسمي من جوجل (Places أو Business Profile)** عبر أتمتة أسبوعية على مستوى الـ CI (GitHub Actions)، لتوليد ملف بيانات ثابت يحتوي على: التقييم الكلي + عدد التقييمات + عينة صغيرة محدثة من المراجعات الحقيقية، ثم عرضها بتصميم واضح مع **إسناد (Attribution) “Google Maps” + رابط “قراءة المزيد على Google”** وفق سياسات جوجل.[^1][^2][^3]

سأنظم الإجابة في الأقسام الثلاثة المطلوبة:

***

## أولاً: سياسات جوجل الرسمية (Compliance)

### 1. شروط استخدام Places API لعرض التقييمات

- جوجل تصرّح بأن تطبيقات تستخدم Places API يجب أن يكون لها **شروط استخدام وسياسة خصوصية منشورة** تشير صراحة إلى شروط خدمة Google Maps Platform وسياسة الخصوصية الخاصة بجوجل.[^1]
- سياسة Places API تنص بوضوح على أنك **لا يجوز لك عمل pre-fetch أو caching أو تخزين لمحتوى Places API** (النتائج، التقييمات، النصوص) إلا في الاستثناءات المسموح بها، بينما **place_id مستثنى ويمكن تخزينه إلى أجل غير مسمى**.[^1]
- ضمن حقول Place Details، يمكن طلب الحقول: `rating`, `user_ratings_total`, و `reviews` عبر معامل `fields` في الطلب؛ هذا هو المسار الرسمي للحصول على التقييمات النصية من Google Maps لعرضها على موقع خارجي.[^2][^3]


### 2. حد أقصى لعدد المراجعات وكيفية عرض أكثر من ذلك

- توثيق Place Details (Legacy) من جوجل يذكر صراحة أن الحقل `reviews[]` عبارة عن **JSON array يحتوي حتى 5 مراجعات**، ويُذكر في الشرح: “a JSON array of up to five reviews”، مع إمكانية التحكم في الترتيب عبر `reviews_sort` (أكثر ملاءمة أو أحدث).[^4]
- مصادر تقنية أخرى حديثة تؤكد أن **حد 5 مراجعات لكل مكان عبر Places API لا يزال قائماً**، ولا توجد حاليًا طريقة رسمية عبر Places API لعمل pagination أو الحصول على أكثر من 5 مراجعات عامة لمكان واحد.[^3][^5]
- للحصول على **كل مراجعات نشاطك أنت** بدون هذا الحد، المسار الرسمي هو **Business Profile API (سابقًا Google My Business API)**، والتي توفر نقاط نهاية مثل `accounts.locations.reviews.list` و `accounts.locations.batchGetReviews` لجلب قائمة مراجعات كاملة مع pagination حتى 50 مراجعة في الصفحة، مع إمكانية الاستعلام عن كل المراجعات لموقعك.[^6][^7]
- أي خدمات خارجية تعدك “بلا حدود” (Outscraper، SerpAPI، إلخ) تعتمد على **scraping لـ Google Maps** وليست جزءًا من Google Maps Platform، واستخدامها يمكن أن يخالف شروط استخدام جوجل لأن جوجل تمنع الاستخلاص الآلي لمحتواها خارج واجهاتها الرسمية.[^8][^9][^10]


### 3. قواعد التخزين المؤقت (Caching) وحد الـ 30 يوم

- شروط خدمة Google Maps Platform (Service Specific Terms) تنص أن العميل يمكنه **تخزين مؤقت لقيم الإحداثيات (lat/lng) الناتجة من Places API لمدة تصل إلى 30 يومًا متتالية** ثم يجب حذف هذه القيم بعد ذلك.[^11][^12][^13]
- نفس الشروط تسمح بتخزين **place_id بشكل دائم** لأنه معرف فقط، بينما باقي “Google Maps Content” (مثل النصوص، الصور، التقييمات) لا يُسمح بعمل caching أو تخزين إلا في الحالات المحددة (وغالبًا لا تشمل مراجعات Places).[^11][^1]
- سياسة Places API نفسها تؤكد أن **كل المحتوى (باستثناء place_id) لا يجوز تخزينه**، وأنه يجب عرض نتائج Places مباشرة أو عبر تخزين مؤقت قصير لأغراض الأداء ضمن القيود المذكورة، مع عدم استخدام المحتوى كبديل دائم عن استدعاء الـ API.[^12][^1]
- بناءً عليه:
    - أتمتة أسبوعية عبر GitHub Action تقوم بطلب Place Details ثم **تكتب ملف JSON جديد في كل مرة (overwrite)** بدون الاحتفاظ بأرشيف قديم، تعتبر **تخزينًا مؤقتًا قصيرًا أقل من 30 يومًا** لكائن واحد (مكان واحد)، وهي أقرب ما تكون للامتثال العملية لسياسات التخزين، خاصة أنك لا تستخدم البيانات في تطبيق آخر خارج موقعك.[^14][^11]
    - ما يجب تجنّبه هو **بناء قاعدة بيانات طويلة الأمد لمحتوى مراجعات جوجل (نصوص، صور)** واستخدامها على المدى البعيد بدون تحديث أو بدون اعتماد على API؛ هذا يدخل في نطاق “pre-fetching / caching / storage” الممنوع لمحتوى Places.[^1]


### 4. الـ Attribution وعبارات "Powered by Google"

- سياسات Maps JavaScript API وPlaces API تُلزم أن أي محتوى مصدره Google Maps Platform (بما في ذلك التقييمات والمراجعات) يجب أن يكون عليه **إسناد واضح إلى Google Maps** عبر أحد الشكلين:[^15][^1]
    - شعار Google Maps الرسمي (بأبعاد محددة: ارتفاع 16–19dp ومساحة فارغة حوله).[^1]
    - أو نص “Google Maps” بنمط typographic محدد إذا كان الشعار غير مناسب، مع عدم تغيير الحروف أو ترجمة النص أو فصله لأسطر متعددة، واستخدام `translate="no"` لمنع ترجمة المتصفح.[^16][^15][^1]
- عند عرض **مراجعات Places API أو Business Profile API** يجب:
    - إسناد كل مراجعة إلى صاحبها باستخدام اسم صاحب المراجعة وصورته ورابط ملفه (إن توفر) كما هو في حقل author attribution.[^17][^1]
    - توفير رابط `googleMapsUri` لكل مراجعة يمكّن المستخدم من مشاهدة المراجعة الأصلية مباشرة على Google Maps؛ هذا مطلوب صراحة في سياسات Places.[^1]
    - يفضَّل (ويوصى به في السياسات) عرض تاريخ النشر النسبي (`relativePublishTimeDescription`) وإتاحة رابط الإبلاغ عن المحتوى `flagContentUri` حتى يستطيع المستخدم الإبلاغ عن مخالفة مباشرة لدى جوجل.[^1]


### 5. الفرق بين التخزين المؤقت عبر أتمتة (Server‑side) والاستدعاء المباشر من المتصفح

- شروط جوجل تُعامل “العميل” و“تطبيق العميل” بشكل عام، ولا تفرق قانونيًا بين كون الاستدعاء من المتصفح أو من الخادم؛ المهم هو **كيف تستخدم المحتوى بعد الحصول عليه**: هل تُخزِّنه خارج الحدود المسموح بها أم لا.[^11][^1]
- **الاستدعاء المباشر من المتصفح** يجنّبك مسألة التخزين المؤقت، لكنه يتطلب وضع مفتاح API في الواجهة مع حمايته بقواعد قيود (حصر النطاقات، البرمجيات، إلخ)، وهو ما تحذر منه الأدلة الأمنية التي تنصح بعدم كشف الـ API key في الكود العام.[^2][^3]
- **الأتمتة الأسبوعية عبر GitHub Action/CI** مع تخزين مؤقت قصير (أقل من 30 يوم) لنتيجة Place Details في ملف ثابت واستخدامها فقط ضمن موقعك يمكن اعتبارها ممارسة مقبولة عمليًا، بشرط:[^12][^14][^11]
    - ألا تحتفظ بنسخ تاريخية من JSON لأكثر من 30 يوم.
    - ألا تعيد استخدام المحتوى في تطبيقات أو تقارير خارج سياق الموقع دون الرجوع إلى الـ API.
- من ناحية الامتثال، **لا يوجد نص يقول إن التخزين المؤقت على الخادم أقل أو أكثر أمانًا من الاستدعاء من المتصفح**؛ المهم الالتزام بقيود التخزين وتقديم الـ attribution الصحيح وعدم إعادة استخدام البيانات بما يخالف شروط Google Maps Platform.[^18][^1]


### 6. هل يوجد Widget رسمي لعرض التقييمات؟

- جوجل توفر **Places UI Kit** كـ “component library” جاهزة لمواقع الويب، تتضمن مكوّنات Place Details تعرض معلومات المكان بما فيها التقييمات باستخدام نفس بيانات Places API وبقليل من الكود، مع تطبيق كل قواعد الـ attribution تلقائيًا.[^19][^20]
- كما توجد أمثلة رسمية في Maps JavaScript API لعرض “Place Reviews” حيث يمكن استدعاء الحقل `reviews` وعرض أول مراجعة أو أكثر داخل واجهة جاهزة.[^17]
- مع ذلك، لا توجد حالياً **أداة embed بسيطة على شكل iframe رسمي مستقل للتقييمات فقط** مثل “شريط تقييمات جاهز”، لذا أغلب حلول “Google Reviews Widget” في السوق هي حلول طرف ثالث تعتمد على Places API أو Business Profile API أو scraping، وليست منتجات رسمية من جوجل نفسها.[^21][^22][^3]
- إذا أردت أبسط مسار رسمي دون بناء UI بنفسك، يمكنك استخدام **Places UI Kit** أو مثال Place Reviews ضمن Maps JS، لكن هذا يتطلب تحميل سكربت جوجل على الموقع (غير مناسب أحيانًا مع موقع ساكن خفيف جدًا على Cloudflare Pages).[^19][^17]

***

## ثانياً: أفضل ممارسات التصميم وتجربة المستخدم (UX)

### 1. كيف تستخدم الشركات الموثوقة التقييمات لبناء الثقة

- دراسات UX/Conversion تشير إلى أن **تفاعل الزائر مع التقييمات والمراجعات على صفحة المنتج أو الخدمة يمكن أن يرفع معدل التحويل بأكثر من 100%**؛ إحدى الدراسات رصدت ارتفاعًا بمقدار 120.3% في التحويل عندما استخدم الزائر قسم التقييمات.[^23]
- دراسات أخرى عن “social proof” توضح أن **وجود مراجعات وتقييمات حقيقية يمكن أن يزيد احتمالية الشراء أو اتخاذ قرار خدمة بنسبة 23–270%** بحسب حجم ووضوح الشهادات، مع متوسط حول 37% عندما تُستخدم مراجعات مكتوبة + شهادات فيديو + إشعارات实时.[^24][^25]
- في القطاعات الحساسة (مثل خدمات طبية أو مالية أو استعادة بيانات)، المواقع الناجحة عادةً:[^26][^27][^28]
    - تضع **ملخص التقييم (النجوم + عدد المراجعات)** بالقرب من الـ CTA الأساسي (زر “حجز موعد” أو “طلب استعادة البيانات”).
    - تعرض **عدة مراجعات مختارة واضحة** تحتوي على تفاصيل الخدمة ونتيجة الاستعادة أو تجربتهم مع الأمان والخصوصية.
    - توفر رابط واضح إلى **كل المراجعات على Google Maps** أو صفحة مخصصة للمراجعات داخل الموقع لزرع إحساس بالشفافية.


### 2. عدد المراجعات المناسب: قليل متجدد أم أرشيف كبير؟

- أبحاث حول social proof تشير إلى أن **عرض 3–5 شهادات قوية في الصفحة الرئيسية** يحقق توازنًا جيدًا بين بناء الثقة وعدم إرهاق الزائر بالمحتوى.[^24]
- في نفس الوقت، وجود **مكتبة أكبر (100+ مراجعة) في الخلفية** – حتى لو لم تُعرض كلها دفعة واحدة – يرتبط بمعدلات تحويل أعلى لأن الزائر الذي يريد التعمق يستطيع أن يرى أن حجم التجربة مع النشاط كبير وموثوق.[^28][^24]
- لموقعك بالذات (معمل استعادة بيانات):
    - الأنسب أن تعرض في الصفحة الرئيسية **خلاصة تقييم Google (4.8 من 100 تقييم)** + **3–6 مراجعات حقيقية محدثة من Google** (من Places/Business Profile API).
    - يمكن أن تحتفظ بقسم داخلي (صفحة “آراء العملاء”) به **أرشيف أكبر** (مراجعات مختارة يدويًا و/أو ناتجة من Business Profile API) مع توضيح أن الأرقام الرسمية تأتي من Google وتُحدّث دوريًا.


### 3. التعامل مع لغات المراجعات في موقع ثنائي اللغة

- Places API وسياسات جوجل توصيك أن **تُبيِّن للمستخدم عند ترجمة مراجعة من لغتها الأصلية** باستخدام حقل `originalText` مع عرض النص المترجم، وأن تتيح للمستخدم رؤية النص الأصلي غير المترجم أو الانتقال للمراجعة على Google Maps.[^1]
- هذا يتماشى تمامًا مع موقعك الثنائي اللغة:
    - في النسخة العربية `/` يمكنك عرض المراجعات العربية أولًا، ثم المراجعات الإنجليزية أو لغات أخرى مع إما ترجمة عربية بجانبها تحمل تنبيه “تمت ترجمة هذا النص من الإنجليزية”.
    - في النسخة الإنجليزية `/en/` يمكنك عكس الترتيب: إبراز المراجعات الإنجليزية، ثم عرض المراجعات العربية مع ترجمة إنجليزية تحمل تنبيه مشابه، مع زر “View original review” ينتقل إلى Google Maps عبر `googleMapsUri`.[^1]
- من الناحية العملية، سواء استخدمت **ترجمة جوجل الآلية أو ترجمتها بنفسك**، المهم الالتزام بسياسة جوجل التي تطلب توضيح أن النص مترجم وإتاحة النص الأصلي.[^1]


### 4. رابط "Read more reviews on Google" والمعيار المتعارف عليه

- سياسات Places API تطلب صراحة أن تُعطي المستخدم **وصولًا مباشرًا للمحتوى على Google Maps** لكل مراجعة وصورة عبر `googleMapsUri`؛ وهذا عمليًا يتجسد في زر أو رابط “قراءة هذه المراجعة على Google Maps”.[^1]
- أبحاث UX حول عرض التقييمات تنصح أن يكون هناك **اختصار سريع (shortcut) لقسم المراجعات الكامل** مثل رابط على عدد التقييمات أو على عبارة “Read more reviews”.[^23]
- لذلك من الأفضل استخدام نمط واضح مثل:
    - في العربية: “قراءة المزيد من التقييمات على Google Maps” مع أيقونة صغيرة لشعار Google أو نص “Google Maps”.
    - في الإنجليزية: “Read more reviews on Google Maps”.
- هذا يحقق شرط الشفافية ويوصل رسالة ضمنية أن **المصدر خارجي وموثوق (جوجل)** وليس شهادات مفبركة داخلية.[^16][^1]


### 5. Carousel أم Grid ثابت؟ وتأثيرهما على التحويل

- أبحاث UX حول الـ carousels تشير إلى أن **الـ sliders الأوتوماتيكية لديها معدل نقر منخفض (low click‑through)**، وغالبًا ما تكون مزعجة وتسبب مشاكل وصولية (accessibility)، لذلك الكثير من فرق UX الحديثة تنصح بتجنّبها أو استخدامها بحذر.[^29][^30]
- جامعات ومؤسسات كبيرة (مثل YaleSites) توصي باستخدام **صور ثابتة أو grids من البلوكات** بدل carousels، وتعتبر أن إخفاء المحتوى وراء السلايدر يقلل من وضوح الرسالة ويؤثر سلبًا على التجربة.[^31]
- بالمقابل، عرض التقييمات في **قائمة أو Grid ثابتة يمكن مسحها بالنظر (scannable)** يعطي المستخدم إحساسًا بأن المحتوى صريح ومتَّسق، وهو أفضل في سياق بناء الثقة لخدمات حساسة.[^27][^26]
- بناءً على ذلك لمركز الفارس:
    - في نسخة سطح المكتب، الأفضل أن تعرض **Grid أو قائمة ثابتة لـ 3–6 مراجعات** مع أزرار تنقل “عرض المزيد” أو “صفحة أخرى”، بدون auto‑rotate.
    - في الموبايل، يمكنك استخدام **Slider يدوي** (بأسهم أو سحب بالإصبع) لكنه لا يتحرك تلقائيًا، مع الحفاظ على قابلية القراءة وسهولة التنقل.[^30][^29]

***

## ثالثاً: التوصية العملية الأنسب لموقع مركز الفارس (Static، أتمتة دورية، 4.8/100 تقييم)

### 1. بنية تقنية مقترحة (محترمة لسياسات جوجل ومتوافقة مع موقعك الساكن)

**الهدف:**

- إبقاء الموقع ساكن وسريع على Cloudflare Pages.
- عدم كشف API key للزوار.
- عرض تقييم جوجل الحقيقي (4.8 من 100 تقييم) + مراجعات حقيقية محدثة.
- الالتزام بقواعد عدم التخزين الطويل للمحتوى + الـ attribution.

**الخطوات المقترحة:**

1. **إنشاء GitHub Action أسبوعي (أو يومي):**
    - يستدعي Places API (Place Details New/Legacy) لمكان مركز الفارس باستخدام الـ Place ID الذي ذكرتَه.[^3][^2]
    - يطلب الحقول:
        - `name`
        - `rating`
        - `user_ratings_total`
        - `reviews` (مع `reviews_sort=most_recent` أو `most_relevant`).[^4][^2]
    - يكتب النتيجة في ملف ثابت (مثلاً `data/google-reviews.json`) في مستودع الموقع، مع **استبدال الملف بالكامل في كل تشغيل** (لا تحتفظ بإصدارات قديمة لأكثر من 30 يوم).[^14][^11]
2. **اختياري – تمكين Business Profile API للنشاط:**
    - بما أنك مالك النشاط، يمكنك التقدم لتمكين **Business Profile API** لمشروع Google Cloud المرتبط بحسابك، ثم استخدام `accounts.locations.reviews.list` لجلب **كل مراجعات نشاطك** مع pagination.[^32][^6]
    - أتمتة منفصلة (أسبوعية أو شهرية) يمكنها كتابة ملف أرشيف أكبر (مثلاً `data/google-reviews-archive.json`) يحتوي على المزيد من المراجعات (حتى 50 في الصفحة مع تدوير أو دمج).[^6]
    - هذا المسار أكثر قوة إذا أردت إظهار أكثر من 5 مراجعات، لكنه يتطلب إعداد OAuth وموافقة جوجل على استخدام Business Profile API.[^33][^32]
3. **بناء الموقع الساكن (Cloudflare Pages):**
    - أثناء عملية الـ build، تقرأ سكربت بسيط (Node/JS) ملف `google-reviews.json` وتولّد HTML ثابت لقسم التقييمات في النسختين `/` و`/en/`.
    - لا يوجد أي استدعاء API من المتصفح؛ كل شيء أصبح HTML ثابت مبني حديثًا، وهذا يناسب أداء الموقع بشكل ممتاز.

### 2. تصميم واجهة التقييمات لمركز الفارس

**في الصفحة الرئيسية (العربية):**

- بلوك في الـ hero أو أعلى الصفحة بعنوان واضح مثل:
    - “تقييم مركز الفارس على Google: 4.8 من 100 عميل” – القيمة والعدد مأخوذان مباشرة من الحقول `rating` و`user_ratings_total` في JSON المحدث.[^2][^3]
- إظهار نجوم التقييم مع عدد التقييمات بجانب CTA الأساسي (زر “طلب استعادة بيانات”).[^23][^24]
- أسفل البلوك، عرض **3–6 مراجعات حقيقية** من مصفوفة `reviews[]` (من Places أو Business Profile) تحتوي على:
    - اسم صاحب المراجعة + صورة avatar إن وجدت.[^17][^1]
    - عدد النجوم الفردي (4/5، 5/5).
    - نص مختصر للمراجعة (مع إمكانية توسيع/قراءة المزيد).
    - تاريخ النشر النسبي (مثلاً: “منذ شهرين”) باستخدام `relativePublishTimeDescription`.[^1]
    - زر صغير “عرض هذه المراجعة على Google Maps” يستخدم `googleMapsUri` لكل مراجعة.[^1]
- وضع شعار Google Maps أو نص “Google Maps” صغير واضح بجوار عنوان البلوك، مع تطبيق نمط الـ attribution الرسمي (عدم تغيير الشعار، الحفاظ على التباين).[^15][^16][^1]

**في صفحة “آراء العملاء” العربية:**

- قسم أول يعرض نفس **التقييم الكلي + عدد التقييمات** مع إشارة واضحة أن المصدر هو Google Maps.[^3][^24]
- قسم ثانٍ يعرض:
    - آخر 5–10 مراجعات حقيقية محدثة من API.
    - أسفلها **أرشيف مختار يدويًا** من المراجعات الأقدم (يمكن الاستمرار في استخدام بعض الـ 21 مراجعة التي لديك، لكن من الأفضل أن تربطها برابط Google الأصلي أو تذكر بوضوح أنها مقتبسة من جوجل في تاريخ معين).[^28][^14]
- زر رئيسي في نهاية الصفحة: “قراءة كل التقييمات على Google Maps” ينقل مباشرة إلى صفحة نشاطك على Google Maps باستخدام رابط المكان.[^16][^1]

**في النسخة الإنجليزية `/en/`:**

- نفس البنية، مع ترجمة النصوص العامة، و:**
    - إبراز المراجعات الإنجليزية أولًا.
    - للمراجعات العربية، عرض ترجمة إنجليزية مع تنبيه “Translated from Arabic” وخيار “View original on Google Maps”.[^1]


### 3. نقاط يجب الانتباه لها (مخاطر محتملة قبل التنفيذ)

1. **التخزين المؤقت والسياسات:**
    - تأكد أن الـ GitHub Action لا يحتفظ بسجلات تاريخية JSON لأكثر من 30 يوم، وأنك لا تستخدم هذه البيانات خارج موقعك (مثلاً في Dashboards أو تقارير داخلية) بدون اعتبار أنها “Google Maps Content” خاضعة لنفس القيود.[^11][^1]
    - إذا قررت تخزين المزيد من المراجعات عبر Business Profile API، راجع مستندات وسياسات هذه الـ API للتأكد من عدم وجود قيود إضافية على التخزين؛ لكنها في العادة مصممة لأصحاب الأنشطة لإدارة مراجعاتهم بشكل مستمر.[^32][^6]
2. **تجنّب خدمات scraping:**
    - لا تستخدم خدمات مثل Outscraper أو SerpAPI للحصول على “عدد غير محدود من المراجعات”؛ فهي تعتمد على scraping لموقع Google Maps وقد تعرض نشاطك لخطر مخالفة شروط جوجل القانونية، خاصة إذا قمت بعرض هذه البيانات علنًا على موقعك.[^9][^10][^8]
3. **الـ attribution:**
    - أي قسم يعرض تقييمات أو مراجعات مستمدة من Google يجب أن يكون عليه شعار أو نص “Google Maps” وفقًا لنمط جوجل الرسمي، وألا يتم دمج هذه المراجعات مع شهادات أخرى دون توضيح مصدر كل منها.[^18][^15][^1]
4. **الشفافية:**
    - تجنب تمامًا الاستمرار في كتابة رقم التقييم يدويًا؛ بدلاً من ذلك، اقرأ قيمة `rating` و`user_ratings_total` من ملف JSON المحدث لتضمن التوافق بين الموقع وملف نشاطك على Google.[^2][^3]
5. **الأداء والتجربة:**
    - حافظ على أن قسم التقييمات خفيف: HTML ثابت + CSS فقط (بدون جافاسكربت ثقيلة)، مع Grid أو قائمة بسيطة بدل carousels أو animations زائدة، لتتناسب مع طبيعة الموقع الساكن وسرعة التحميل.[^26][^31][^30]

بهذه البنية، ستحصل على:

- **امتثال جيد لسياسات جوجل** (عدم تخزين محتوى أكثر من 30 يوم، place_id مخزّن دائمًا، attribution صحيح).
- **قسم تقييمات قوي بصريًا ومقنع** يعتمد على بيانات حقيقية من Google Business Profile ويُحدّث تلقائيًا أسبوعيًا، بدون التأثير على سرعة الموقع أو كشف الـ API key.
<span style="display:none">[^34][^35][^36][^37][^38][^39][^40][^41][^42][^43][^44][^45][^46][^47][^48][^49][^50][^51][^52][^53][^54][^55][^56][^57][^58][^59][^60][^61][^62][^63]</span>

<div align="center">⁂</div>

[^1]: https://dev.to/geoapify-maps-api/google-places-api-alternatives-which-poi-api-should-you-use-in-2026-hd4

[^2]: https://blog.afi.io/blog/google-place-details-and-place-photos-api/

[^3]: https://wiserreview.com/blog/google-maps-reviews-api/

[^4]: https://developers.google.com/maps/documentation/places/web-service/legacy/details

[^5]: https://community.latenode.com/t/is-there-a-way-to-get-more-than-5-reviews-from-the-google-places-api/13971

[^6]: https://developers.google.com/my-business/content/review-data

[^7]: https://featurable.com/blog/google-places-more-than-5-reviews

[^8]: https://outscraper.com/limitless-google-business-reviews-api/

[^9]: https://blog.apify.com/google-places-api-limits/

[^10]: https://outscraper.com/google-maps-reviews-api/

[^11]: https://developers.google.com/maps/documentation/places/web-service/policies

[^12]: https://stackoverflow.com/questions/10837048/caching-of-google-places-api-results

[^13]: https://www.drupal.org/project/geolocation/issues/3603405

[^14]: https://processwire.com/talk/topic/27953-strategies-for-including-google-places-reviews/

[^15]: https://developers.google.com/maps/documentation/javascript/policies

[^16]: https://about.google/brand-resource-center/products-and-services/geo-guidelines

[^17]: https://developers.google.com/maps/documentation/javascript/place-reviews

[^18]: https://cloud.google.com/maps-platform/terms

[^19]: https://developers.google.com/maps/documentation/javascript/places-ui-kit/overview

[^20]: https://www.ditoweb.com/2025/06/a-partners-guide-to-the-new-google-maps-places-ui-kit/

[^21]: https://www.jotform.com/help/how-to-add-google-reviews-to-your-website/

[^22]: https://www.review-widget.net/

[^23]: https://uxdesign.cc/ux-tips-featuring-customer-reviews-to-increase-conversion-rates-5b86cd34fe86

[^24]: https://genesysgrowth.com/blog/social-proof-conversion-stats-for-marketing-leaders

[^25]: https://www.linkmobility.com/en-gb/blog/why-collecting-business-reviews-matters-for-social-proof

[^26]: https://tubikstudio.com/blog/7-factors-that-influence-webpage-conversion-rates/

[^27]: https://thegood.com/insights/social-proof/

[^28]: https://www.logicommerce.com/blog/social-proof-el-poder-de-las-resenas-y-testimonios-en-la-conversion-online/

[^29]: https://www.linkedin.com/pulse/usability-guidelines-better-carousels-ux-vitaly-friedman

[^30]: https://www.smashingmagazine.com/2022/04/designing-better-carousel-ux/

[^31]: https://yalesites.yale.edu/community/requests/better-alternatives-to-carousels-how-yalesites-prioritizes-user-experience

[^32]: https://wiserreview.com/blog/google-business-reviews-api/

[^33]: https://groups.google.com/g/adwords-api/c/ox2GitjH08k

[^34]: https://stackoverflow.com/questions/11623912/google-places-api-place-details-limited-to-5-reviews

[^35]: https://mapsplatform.google.com/resources/blog/help-users-discover-more-new-places-api-updates/

[^36]: https://www.safegraph.com/guides/google-places-api-pricing/

[^37]: https://www.reddit.com/r/divi/comments/1dcy87b/free_google_review_widget/

[^38]: https://mapatlas.eu/blog/google-places-api-legacy-deprecation-eu

[^39]: https://dev.to/golangch/avoid-high-costs-with-google-places-api-go-react-54b2

[^40]: https://google.globema.com/2026/03/24/google-places-api-which-solution-should-you-choose-for-your-business/

[^41]: https://cloud.google.com/maps-platform/terms/maps-service-terms

[^42]: https://developers.google.com/maps/documentation/places/web-service/overview

[^43]: https://developers.google.com/maps/documentation/places/web-service/data-fields

[^44]: https://www.postman.com/zapata32/googleplaces/request/4wu452a/place-details

[^45]: https://www.youtube.com/watch?v=HTK7lzdwANU

[^46]: https://googleapis.dev/python/places/latest/places_v1/types_.html

[^47]: https://www.searchapi.io/docs/google-maps-place

[^48]: https://mapsplatform.google.com/lp/maps-apis/

[^49]: https://review.yogsoft.com/google-business-profile-integration

[^50]: https://www.linkedin.com/posts/mediaproresearch_logosays-brandevolution-googlemaps-activity-7435680596733009920-U_Dw

[^51]: https://support.google.com/maps/thread/281815867/fetching-response-to-reviews-via-places-api?hl=en

[^52]: https://mapsplatform.google.com/

[^53]: https://partnermarketinghub.withgoogle.com/brands/google/trademarks-and-terms/google-trademarks-list/

[^54]: https://link.springer.com/chapter/10.1007/978-3-032-12968-0_37

[^55]: https://www.facebook.com/AnnexCloud/posts/have-you-ever-thought-about-how-the-design-and-ui-of-your-product-reviews-could-/1752728901424638/

[^56]: https://www.gwsmedia.com/articles/how-ux-design-improves-conversion-rates

[^57]: https://landingi.com/conversion-optimization/ux/

[^58]: https://wisernotify.com/blog/optimize-cro-with-ux-design/

[^59]: https://ixdf.org/literature/topics/conversion-rates

[^60]: https://issuetracker.google.com/issues/35825957

[^61]: https://support.google.com/maps/thread/228420973/google-places-api-only-returns-5-reviews-when-google-my-business-account-has-62-reviews-in-tot?hl=en

[^62]: https://serpapi.com/google-maps-reviews-api

[^63]: https://www.searchapi.io/docs/google-maps-reviews

