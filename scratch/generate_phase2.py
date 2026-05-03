import os
import re

# Source template
TEMPLATE_PATH = 'services/hdd-data-recovery.html'

def generate_page(filename, content):
    with open(TEMPLATE_PATH, 'r', encoding='utf-8') as f:
        html = f.read()

    # Replace Metadata
    html = re.sub(r'<title>.*?</title>', f"<title>{content['title']}</title>", html)
    html = re.sub(r'<meta name="title" content=".*?">', f'<meta name="title" content="{content["title"]}">', html)
    html = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="{content["description"]}">', html)
    
    # Replace OG/Twitter Tags
    html = html.replace('https://alfareslab.com/services/hdd-data-recovery.html', f"https://alfareslab.com/services/{filename}")
    html = html.replace('استعادة بيانات هارد ديسك داخلي في جدة', content['h1'])
    
    # Replace Schema.org ID/URL
    html = html.replace('hdd-data-recovery.html#service', f"{filename}#service")
    html = html.replace('hdd-data-recovery.html#faq', f"{filename}#faq")
    html = html.replace('hdd-data-recovery.html#breadcrumb', f"{filename}#breadcrumb")

    # Replace Schema.org Description
    # We search for the first occurrence in Schema (the service description)
    schema_desc_pattern = r'"description": "هل تعطل الهارد ديسك الداخلي لجهازك المكتبي؟.*?",'
    html = re.sub(schema_desc_pattern, f'"description": "{content["description"]}",', html)

    # Replace Breadcrumb Last Item
    breadcrumb_last_pattern = r'{\s*"@type": "ListItem",\s*"position": 3,\s*"name": "استعادة بيانات هارد ديسك داخلي في جدة",\s*"item": "https://alfareslab.com/services/hdd-data-recovery.html"\s*}'
    new_breadcrumb = f'''{{
            "@type": "ListItem",
            "position": 3,
            "name": "{content['h1']}",
            "item": "https://alfareslab.com/services/{filename}"
          }}'''
    html = re.sub(breadcrumb_last_pattern, new_breadcrumb, html)

    # Replace FAQ Schema
    faq_schema_start = html.find('"mainEntity": [')
    faq_schema_end = html.find(']', faq_schema_start) + 1
    
    faq_entities = []
    for q, a in content['faqs']:
        faq_entities.append(f'''{{
            "@type": "Question",
            "name": "{q}",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "{a}"
            }}
          }}''')
    
    new_faq_schema = '"mainEntity": [\n          ' + ',\n          '.join(faq_entities) + '\n        ]'
    html = html[:faq_schema_start] + new_faq_schema + html[faq_schema_end:]

    # Replace Main Content
    # 1. Breadcrumb text
    html = html.replace('<li aria-current="page">استعادة بيانات هارد ديسك داخلي في جدة</li>', f'<li aria-current="page">{content["h1"]}</li>')
    
    # 2. H1
    html = html.replace('<h1>استعادة بيانات هارد ديسك داخلي في جدة</h1>', f'<h1>{content["h1"]}</h1>')
    
    # 3. Intro Paragraph
    intro_pattern = r'<p>تخيل أن تضغط على زر التشغيل.*?</p>'
    html = re.sub(intro_pattern, f"<p>{content['intro']}</p>", html)
    
    # 4. Symptoms Title and List
    html = html.replace('<h2>أعراض شائعة لتلف الهارد ديسك الداخلي</h2>', f"<h2>{content['symptoms_title']}</h2>")
    symptoms_list_start = html.find('<ul>', html.find(f"<h2>{content['symptoms_title']}</h2>"))
    symptoms_list_end = html.find('</ul>', symptoms_list_start) + 5
    
    symptoms_items = ""
    for item in content['symptoms']:
        symptoms_items += f"      <li>{item}</li>\n"
    html = html[:symptoms_list_start] + f"<ul>\n{symptoms_items}    </ul>" + html[symptoms_list_end:]
    
    # 5. Methodology Title and List
    html = html.replace('<h2>كيف نتعامل مع الهارد ديسك الداخلي المعطل؟</h2>', f"<h2>{content['method_title']}</h2>")
    method_intro_pattern = r'<p>استعادة بيانات هارد ديسك جدة لدينا لا تعتمد على البرامج العشوائية.*?</p>'
    html = re.sub(method_intro_pattern, f"<p>{content['method_intro']}</p>", html)
    
    method_list_start = html.find('<ol>', html.find(f"<h2>{content['method_title']}</h2>"))
    method_list_end = html.find('</ol>', method_list_start) + 5
    
    method_items = ""
    for item in content['methods']:
        method_items += f"      <li>{item}</li>\n"
    html = html[:method_list_start] + f"<ol>\n{method_items}    </ol>" + html[method_list_end:]
    
    # 6. Tools Section (Optional change or skip if standard)
    if 'tools' in content:
        html = html.replace('<h2>أدواتنا التقنية: جودة معملية لصيانة هارد ديسك داخلي</h2>', f"<h2>{content['tools_title']}</h2>")
        tools_list_start = html.find('<ul>', html.find(f"<h2>{content['tools_title']}</h2>"))
        tools_list_end = html.find('</ul>', tools_list_start) + 5
        tools_items = ""
        for item in content['tools']:
            tools_items += f"      <li>{item}</li>\n"
        html = html[:tools_list_start] + f"<ul>\n{tools_items}    </ul>" + html[tools_list_end:]

    # 7. FAQ HTML Section
    faq_html_start = html.find('<h2>الأسئلة الشائعة</h2>') + 23
    faq_html_end = html.find('<!-- 6. Final CTA -->')
    
    faq_blocks = ""
    for q, a in content['faqs']:
        faq_blocks += f'''    <details>
      <summary>{q}</summary>
      <p>{a}</p>
    </details>\n'''
    html = html[:faq_html_start] + "\n" + faq_blocks + "    " + html[faq_html_end:]

    # Write file
    target_path = os.path.join('services', filename)
    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Generated: {target_path}")

# ==========================================
# CONTENT DATA
# ==========================================

pages_data = [
    {
        'filename': 'raid-server-recovery.html',
        'title': 'استعادة بيانات سيرفرات RAID و NAS في جدة | مركز الفارس',
        'description': 'هل تعطل خادم شركتك؟ يقدم مركز الفارس استعادة بيانات سيرفرات جدة بأمان تام. نعالج أعطال خوادم NAS ومصفوفات RAID ونتجنب أخطاء الـ Rebuild المدمرة.',
        'h1': 'استعادة بيانات خوادم سيرفرات RAID و NAS في جدة',
        'intro': 'تُعد خوادم البيانات ومحطات التخزين الشبكي العمود الفقري لأي شركة أو مؤسسة، بل وحتى للأفراد الذين يمتلكون أرشيفاً ضخماً من الملفات المهمة. عندما تتعطل هذه الخوادم، تتوقف الأعمال وتصبح قواعد البيانات المحاسبية أو ملفات العملاء في خطر حقيقي. انهيار المصفوفة (RAID failure) يمثل كابوساً تقنياً، سواء حدث بسبب فقدان إعدادات المصفوفة (Metadata) أو تعطل أكثر من قرص صلب في نفس الوقت. في "مركز الفارس لصيانة الكمبيوتر واستعادة البيانات" في جدة، نتفهم تماماً حساسية هذا الموقف، ونمتلك الخبرة والأدوات المتقدمة لإجراء استرجاع ملفات RAID بأعلى درجات الأمان والسرية.',
        'symptoms_title': 'أعراض انهيار مصفوفة الـ RAID وخوادم الـ NAS',
        'symptoms': [
            '<strong>صوت إنذار مستمر:</strong> سماع صوت تنبيه (Beeping) من جهاز السيرفر أو وحدة التخزين الشبكي، مما يدل على تعطل أحد الأقراص.',
            '<strong>فقدان الاتصال بالشبكة:</strong> اختفاء مجلدات السيرفر فجأة من أجهزة الموظفين وعدم القدرة على الوصول إليها.',
            '<strong>ظهور رسالة (Degraded):</strong> لوحة تحكم النظام تظهر رسالة تفيد بتدهور حالة المصفوفة وحاجتها للتدخل.',
            '<strong>توقف النظام فجأة:</strong> تجمد نظام التشغيل بشكل كامل وعدم القدرة على إعادة الإقلاع من جديد.'
        ],
        'method_title': 'كيف نتعامل مع أعطال الـ RAID و NAS؟',
        'method_intro': 'عملية إصلاح مصفوفة RAID واستخراج البيانات تتطلب دقة متناهية، ونحن في مركز الفارس نتبع منهجية علمية صارمة:',
        'methods': [
            '<strong>الاستنساخ الآمن (Imaging):</strong> لا نعمل أبداً على الأقراص الأصلية بشكل مباشر. نقوم أولاً بإنشاء صورة مطابقة (Sector-by-sector Image) لكل قرص على حدة لضمان عدم المساس بالبيانات الأصلية إطلاقاً.',
            '<strong>التحليل المتقدم وتحديد المعايير:</strong> لا نعتمد على التخمين؛ بل نستخدم أدوات تحليل متقدمة ومحررات برمجية (Hex Viewers) لقراءة تركيبة البيانات، وتحديد المعايير المخفية يدوياً مثل حجم الكتلة (Block size)، الترتيب الصحيح للأقراص (Drive order)، ومقدار التأخير (Delay).',
            '<strong>البناء الافتراضي (Virtual Assembly):</strong> نقوم بتجميع المصفوفة برمجياً في وضع القراءة فقط (Read-only mode) باستخدام تقنيات PC-3000 RAID Systems، مما يسمح لنا بمحاكاة السيرفر واستخراج ملفاتك بأمان تام دون تشغيل متحكم الأقراص الأصلي الذي قد يزيد من تلفها.'
        ],
        'tools_title': 'الأنواع والأنظمة التي ندعمها',
        'tools': [
            '<strong>مصفوفات RAID بمختلف أنواعها:</strong> مثل (RAID 0, RAID 1, RAID 5, RAID 6, RAID 10, RAID 50).',
            '<strong>خوادم التخزين الشبكي NAS:</strong> من كافة العلامات التجارية الرائدة مثل Synology, QNAP, WD MyCloud, LaCie, Buffalo.'
        ],
        'faqs': [
            ('المصفوفة لدي من نوع RAID 5 (أو RAID 1)، لماذا فقدت البيانات رغم وجود خاصية الحماية؟', 'رغم أن هذه المصفوفات مصممة لتحمل تعطل قرص واحد، إلا أن البيانات تُفقد في حال تعطل قرصين أو أكثر في نفس الوقت، أو في حال حدوث تلف في إعدادات المصفوفة (Metadata) بسبب انقطاع مفاجئ للتيار الكهربائي، أو بسبب محاولة "إعادة بناء" خاطئة أدت لتخريب التسلسل المنطقي للبيانات.'),
            ('هل يجب أن أجلب جهاز الـ NAS بالكامل أم الأقراص فقط؟', 'يفضل جلب الأقراص فقط، مع التأكد التام من ترقيمها بقلم (مثلاً: 1, 2, 3, 4) بحسب ترتيبها الأصلي داخل الجهاز. نحن لا نحتاج للجهاز نفسه، بل سنقوم بالتعامل مع الأقراص مباشرة في معملنا لإجراء استعادة بيانات سيرفرات جدة باحترافية.'),
            ('قرصان تعطلا في مصفوفة RAID 5، هل يمكن استرجاع البيانات؟', 'نعم، يمكن ذلك. سنقوم أولاً بإصلاح الأقراص المعطلة داخل الغرفة النظيفة (Clean Room) لعمل نسخة مطابقة منها، ثم نقوم بتجميع المصفوفة افتراضياً باستخدام أجهزة PC-3000 وتصحيح التلفيات لاستخراج بياناتك.'),
            ('كم تستغرق عملية NAS Data Recovery Jeddah لديكم؟', 'استعادة بيانات السيرفرات لها أولوية قصوى لدينا. تستغرق العملية وقتاً يعتمد على سعة الأقراص الإجمالية ومستوى الضرر. يتم تحديد الوقت المتوقع بدقة بعد التشخيص المبدئي.')
        ]
    },
    {
        'filename': 'dvr-data-recovery.html',
        'title': 'استعادة بيانات كاميرات المراقبة DVR و NVR في جدة | مركز الفارس',
        'description': 'هل فقدت تسجيلات أمنية هامة؟ نقدم في مركز الفارس خدمة استعادة بيانات كاميرات المراقبة جدة واسترجاع تسجيلات DVR و NVR المحذوفة بتقنيات PC-3000 المتقدمة.',
        'h1': 'استعادة بيانات كاميرات المراقبة DVR و NVR في جدة',
        'intro': 'تعتبر تسجيلات كاميرات المراقبة الدليل الأمني والجنائي الأهم للشركات والأفراد على حد سواء. فقدان مقطع فيديو يوثق حادثة أو سرقة أو موقفاً حساساً قد يتسبب في أزمة حقيقية وشعور بقلة الحيلة. نحن في "مركز الفارس لصيانة الكمبيوتر واستعادة البيانات" بجدة ندرك تماماً حساسية الموقف وأهمية الوقت بالنسبة لك. بفضل أجهزتنا المتقدمة وخبرتنا الطويلة، نقدم لك خدمة موثوقة وآمنة في استرجاع تسجيلات DVR محذوفة واستعادة فيديوهات الـ NVR التالفة بأعلى معايير السرية التامة.',
        'symptoms_title': 'أسباب شائعة لفقدان تسجيلات كاميرات المراقبة',
        'symptoms': [
            '<strong>الحذف المتعمد (Sabotage):</strong> قيام شخص بمسح مقاطع معينة لإخفاء أدلة جنائية أو أمنية.',
            '<strong>تهيئة القرص (Format):</strong> عمل "فورمات" لقرص التخزين داخل جهاز الـ DVR عن طريق الخطأ.',
            '<strong>عطل ميكانيكي في القرص الصلب:</strong> توقف القرص الذي يسجل الفيديوهات عن العمل، أو إصداره لأصوات طقطقة، مما يمنع الجهاز من عرض التسجيلات.',
            '<strong>احتراق جهاز الـ DVR/NVR:</strong> تعرض جهاز المراقبة نفسه لتلف كهربائي أو حريق أو كسر، مما يجعله غير قابل للتشغيل.'
        ],
        'method_title': 'منهجية الفارس: كيف نستخرج الفيديوهات بأمان؟',
        'method_intro': 'نحن لا نعتمد على البرامج التجارية، بل نستخدم نظام PC-3000 المتقدم للقيام بعمليات دقيقة تتجاوز نظام التشغيل التقليدي:',
        'methods': [
            '<strong>التعامل مع الأعطال المادية:</strong> إذا كان الهارد ديسك الخاص بالكاميرات معطلاً، نقوم بصيانته داخل الغرفة النظيفة لضمان استخراج صورة مطابقة للقرص أولاً.',
            '<strong>فك تشفير نظام الملفات:</strong> نتعامل مع أشهر العلامات التجارية العالمية (مثل Hikvision, Dahua, CP Plus) ونقوم بقراءة بنيتها البرمجية المعقدة.',
            '<strong>إعادة تجميع الفيديو (Video Carving):</strong> نستخدم خوارزميات متقدمة للبحث عن أجزاء الفيديو المحذوفة (الـ Header والـ Body) وربطها معاً من جديد، مما يضمن استعادة فيديو بصيغته السليمة.'
        ],
        'tools_title': 'تحديات أنظمة المراقبة التي نحلها',
        'tools': [
            '<strong>أنظمة ملفات مغلقة:</strong> أجهزة المراقبة تستخدم أنظمة ملفات مخصصة مثل (WFS, DHFS, HIKVISION FS) لا يراها الكمبيوتر العادي.',
            '<strong>تجزئة الفيديو (Fragmentation):</strong> يتم تسجيل الفيديوهات بشكل مجزأ ومعقد؛ نقوم بإعادة بناء هذه الهيكلة بدقة.'
        ],
        'faqs': [
            ('تم مسح فيديو حدث قبل شهر والجهاز استمر بالتسجيل، هل يمكن استرجاعه؟', 'أجهزة الـ DVR تقوم تلقائياً بالتسجيل فوق البيانات القديمة (Overwrite). إذا كانت المساحة التخزينية للقرص تكفي لأسبوعين فقط، فإن الفيديو القديم قد تم الكتابة فوقه فعلياً، وتكون نسبة استرجاعه ضعيفة جداً. لذلك ننصح دائماً بإطفاء الجهاز فور وقوع الحادثة.'),
            ('جهاز الكاميرات الخاص بي (DVR) احترق بالكامل، هل ضاعت الفيديوهات؟', 'في الغالب لا. الفيديوهات مخزنة على الهارد ديسك الموجود داخل الجهاز. طالما لم يتعرض الهارد ديسك نفسه لحريق مباشر أو تلف شديد في الأسطوانات، يمكننا استخراج الهارد واستعادة كافة التسجيلات منه بنجاح.')
        ]
    },
    {
        'filename': 'ransomware-database-recovery.html',
        'title': 'استرجاع بيانات فيروس الفدية وفك تشفير قواعد البيانات في جدة | مركز الفارس',
        'description': 'هل أصيبت بياناتك بفيروس الفدية أو تعطلت قاعدة البيانات؟ مركز الفارس يقدم استرجاع ملفات مشفرة Ransomware وإصلاح داتابيز SQL بأمان وسرية تامة في جدة.',
        'h1': 'استرجاع بيانات فيروس الفدية وإصلاح قواعد البيانات في جدة',
        'intro': 'أن تستيقظ لتجد أرشيف عملك، قواعد بيانات شركتك، أو صورك العائلية مغلقة تماماً ومستبدلة برسالة ابتزاز، هو كابوس رقمي مرعب. فيروسات الفدية (Ransomware) وتلف قواعد البيانات (Databases) هي من أخطر الأزمات التي تواجه الشركات اليوم. في "مركز الفارس لصيانة الكمبيوتر واستعادة البيانات" بجدة، نحن نتعامل مع هذه الأزمات بحذر شديد، لنوفر لك حلول استرجاع بيانات الشركات وإصلاح داتابيز SQL التالفة بأعلى معايير الأمان والسرية الممكنة.',
        'symptoms_title': 'أعراض الإصابة بفيروس الفدية وأعطال قواعد البيانات',
        'symptoms': [
            '<strong>تغيير امتداد الملفات:</strong> تحول الملفات إلى امتدادات غريبة (مثل .djvu, .makop, .locked) وظهور رسالة ابتزاز.',
            '<strong>وضع الاشتباه (Suspect Mode):</strong> توقف قاعدة البيانات SQL عن العمل تماماً ورفضها الاتصال بالنظام بسبب تلف مفاجئ.',
            '<strong>شلل النظام المحاسبي:</strong> عدم القدرة المطلقة على فتح أي مستند أو قاعدة بيانات مالية للشركة.',
            '<strong>تلف ميكانيكي للسيرفر:</strong> انهيار مصفوفة الأقراص (RAID Failure) التي تحمل السيرفر المحاسبي مما يؤدي لفقدان الوصول.'
        ],
        'method_title': 'كيف نعالج حالات التشفير وتلف قواعد البيانات؟',
        'method_intro': 'التعامل مع هذه الحالات يتطلب بيئة معزولة ومنهجية تحليل عميق للبنية الداخلية للملفات:',
        'methods': [
            '<strong>التحليل والبيئة المعزولة:</strong> نقوم بفحص عائلة الفيروس وبصمة التشفير في بيئة (Sandboxed) آمنة لمنع انتقال العدوى.',
            '<strong>تقنية الاستخراج الخام (Raw Recovery):</strong> نبحث في المساحات غير المستخدمة من القرص لاستخراج النسخ الأصلية للملفات قبل التشفير باستخدام PC-3000.',
            '<strong>إصلاح البنية (Hex Analysis):</strong> نتدخل برمجياً لإصلاح التلف المنطقي داخل الجداول والصفحات (Pages) لقواعد البيانات SQL لتعود للعمل بسلاسة.',
            '<strong>الربط الناجح (Attach):</strong> نسلمك قاعدة بيانات جاهزة لتعمل فوراً عند ربطها بمحرك الـ SQL وبدون أخطاء.'
        ],
        'tools_title': 'الأنظمة والبرامج التي ندعمها',
        'tools': [
            '<strong>قواعد البيانات:</strong> (MS SQL Server), (MySQL), (Oracle) بملفاتها الأساسية (.mdf / .ldf).',
            '<strong>أنظمة الـ ERP:</strong> استعادة بيانات البرامج المحاسبية الشهيرة مثل (Smacc, QuickBooks, Tally).'
        ],
        'faqs': [
            ('هل نسبة فك تشفير فيروس الفدية مضمونة 100%؟', 'لا توجد جهة تقنية تضمن ذلك 100% لكل أنواع الفيروسات. الأمر يعتمد على نوع المفتاح (Online أو Offline). دورنا هو استخدام كافة الثغرات وتقنيات الاستخراج الخام (Raw Recovery) لإنقاذ ما يمكن إنقاذه بأمان.'),
            ('هل يمكنكم تنظيف اللابتوب من الفيروس لأتمكن من استخدامه مجدداً؟', 'هدفنا هو استخراج بياناتك أولاً. بعد نجاح الاسترجاع ونقل الملفات لهارد نظيف، ننصحك بعمل فورمات كامل للجهاز المصاب وإعادة تثبيت ويندوز جديد.'),
            ('توقف نظامي المحاسبي فجأة وتظهر رسالة Suspect Mode، هل ضاعت الحسابات؟', 'في الغالب لا. هذه الحالة تعني تلفاً في ملف السجل أو هيكل الملف. يمكننا إصلاح هذا التلف وربط قاعدة البيانات مجدداً ليعود النظام للعمل بكامل بياناته القديمة.')
        ]
    }
]

for data in pages_data:
    generate_page(data['filename'], data)
