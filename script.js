const themeBtn = document.getElementById("theme-btn");
const photoBtn = document.getElementById("photo-btn");
const profileImg = document.getElementById("profile-img");
const langBtn = document.getElementById("lang-btn");

// Bounce
const translations = {
    en: {
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navHobbies: "Hobbies",
        navContact: "Contact",
        themeBtn: "Switch Theme",
        aboutTitle: "About Me",
        photoBtn: "Switch Photo",
        aboutText: "Cybersecurity and Network Security graduate with a strong foundation in fintech security standards (ISO 8583). Skilled at using AI tools to solve complex problems and optimize workflows through clear and meticulous documentation. Based in Amman, Jordan.",
        skillsTitle: "Skills",
        skill1: "Linux",
        skill1Desc: "Command line, file systems, and user permissions.",
        skill2: "Networking",
        skill2Desc: "TCP/IP, protocols, and network fundamentals.",
        skill3: "AI for Problem Solving",
        skill3Desc: "Using AI tools to solve complex technical problems.",
        skill4: "Technical Documentation",
        skill4Desc: "Writing clear specs, reports, and system models.",
        skill5: "Incident Reporting",
        skill5Desc: "Logging, tracking, and documenting security incidents.",
        skill6: "HTML",
        skill6Desc: "Semantic structure and accessible markup.",
        skill7: "CSS",
        skill7Desc: "Flexbox, responsive layouts, and modern styling.",
        skill8: "JavaScript",
        skill8Desc: "DOM manipulation and event-driven interactivity.",
        projectsTitle: "Projects",
        proj1Title: "Project 00 — Linux + Git + GitHub",
        proj1Desc: "Terminal navigation, file manipulation, Git workflows, and GitHub remote hosting.",
        proj2Title: "Project 01 — HTML Fundamentals",
        proj2Desc: "Semantic HTML5 structure, text hierarchy, media embedding, tables, and forms.",
        proj3Title: "Project 02 — CSS & Visual Presentation",
        proj3Desc: "Flexbox layouts, positioning, pure CSS shapes, color models, and the box model.",
        proj4Title: "Project 03 — JavaScript & Interactivity",
        proj4Desc: "DOM manipulation, event-driven architecture, and dynamic UI logic.",
        hobbiesTitle: "Hobbies",
        hobby1: "Football",
        hobby2: "Swimming",
        hobby3: "Gaming",
        contactTitle: "Contact",
        contactName: "Your Name",
        contactEmail: "Your Email",
        contactMessage: "Your Message",
        contactBtn: "Send",
        footer: "© 2026 Khaled Al-Aghbar. All rights reserved.",
        langBtn: "العربية"
    },
    ar: {
        navAbout: "من أنا",
        navSkills: "المهارات",
        navProjects: "المشاريع",
        navHobbies: "الهوايات",
        navContact: "التواصل",
        themeBtn: "تبديل الثيم",
        aboutTitle: "من أنا",
        photoBtn: "تبديل الصورة",
        aboutText: "خريج أمن سيبراني وأمن شبكات، أمتلك أساساً قوياً في معايير أمن التقنية المالية (ISO 8583). ماهر في استخدام أدوات الذكاء الاصطناعي لحل المشاكل المعقدة وتحسين سير العمل من خلال توثيق واضح ودقيق. مقيم في عمّان، الأردن.",
        skillsTitle: "المهارات",
        skill1: "لينكس",
        skill1Desc: "سطر الأوامر، أنظمة الملفات، وصلاحيات المستخدمين.",
        skill2: "الشبكات",
        skill2Desc: "بروتوكولات TCP/IP وأساسيات الشبكات.",
        skill3: "الذكاء الاصطناعي لحل المشاكل",
        skill3Desc: "استخدام أدوات الذكاء الاصطناعي لحل المشاكل التقنية المعقدة.",
        skill4: "التوثيق التقني",
        skill4Desc: "كتابة المواصفات والتقارير والنماذج بوضوح.",
        skill5: "الإبلاغ عن الحوادث",
        skill5Desc: "تسجيل وتتبع وتوثيق الحوادث الأمنية.",
        skill6: "HTML",
        skill6Desc: "البنية الدلالية والترميز الميسّر.",
        skill7: "CSS",
        skill7Desc: "فليكس بوكس، التصميم المتجاوب، والتنسيق الحديث.",
        skill8: "JavaScript",
        skill8Desc: "التعامل مع DOM والتفاعل المدفوع بالأحداث.",
        projectsTitle: "المشاريع",
        proj1Title: "المشروع 00 — لينكس + Git + GitHub",
        proj1Desc: "التنقل في الطرفية، التعامل مع الملفات، وسير عمل Git، والاستضافة على GitHub.",
        proj2Title: "المشروع 01 — أساسيات HTML",
        proj2Desc: "بنية HTML5 الدلالية، التسلسل النصي، تضمين الوسائط، الجداول، والنماذج.",
        proj3Title: "المشروع 02 — CSS والعرض البصري",
        proj3Desc: "تخطيطات Flexbox، التموضع، الأشكال بـ CSS، نماذج الألوان، ونموذج الصندوق.",
        proj4Title: "المشروع 03 — JavaScript والتفاعل",
        proj4Desc: "التعامل مع DOM، البنية المدفوعة بالأحداث، ومنطق الواجهة الديناميكي.",
        hobbiesTitle: "الهوايات",
        hobby1: "كرة القدم",
        hobby2: "السباحة",
        hobby3: "الألعاب",
        contactTitle: "تواصل معي",
        contactName: "اسمك",
        contactEmail: "بريدك الإلكتروني",
        contactMessage: "رسالتك",
        contactBtn: "إرسال",
        footer: "© 2026 خالد الأغبر. جميع الحقوق محفوظة.",
        langBtn: "English"
    }
};

// Bounce
let currentLang = "en";

// Bounce
function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function (el) {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach(function (el) {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    langBtn.textContent = translations[lang].langBtn;
}

// Bounce
langBtn.addEventListener("click", function () {
    currentLang = currentLang === "en" ? "ar" : "en";
    applyTranslations(currentLang);
});

// Bounce
const photos = [
    { src: "assets/profile.jpg", alt: "Khaled Al-Aghbar" },
    { src: "assets/profile2.jpg", alt: "Khaled Al-Aghbar casual" }
];

// Bounce
let photoIndex = 0;

// Bounce
photoBtn.addEventListener("click", function () {
    profileImg.classList.add("spin");

    setTimeout(function () {
        photoIndex = (photoIndex + 1) % photos.length;
        profileImg.src = photos[photoIndex].src;
        profileImg.alt = photos[photoIndex].alt;
    }, 750);

    setTimeout(function () {
        profileImg.classList.remove("spin");
    }, 1500);
});

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = currentLang === "ar" ? "الوضع الفاتح" : "Light Mode";
    } else {
        themeBtn.textContent = currentLang === "ar" ? "الوضع الغامق" : "Dark Mode";
    }
});

document.querySelector(".back-to-top").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});