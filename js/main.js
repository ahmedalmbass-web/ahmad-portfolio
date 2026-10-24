
/* =========================================
   AHMAD PORTFOLIO — INTERACTIONS
========================================= */

"use strict";

const translations = {
  ar: {
    pageTitle: "أحمد | مصمم واجهات ومواقع وهويات رقمية",
    navHome: "الرئيسية",
    navAbout: "من أنا",
    navServices: "خدماتي",
    navProjects: "أعمالي",
    navContact: "لنتحدث",

    heroEyebrow: "تصميم رقمي بفكرة مختلفة",
    heroKicker: "مصمم واجهات ومواقع وهويات رقمية",
    heroTitle: 'أصنع من الأفكار <span class="title-accent">تجارب رقمية</span> تستحق أن تُرى.',
    heroDescription: "أعمل على تصميم تجارب رقمية تجمع بين الهوية البصرية، وسهولة الاستخدام، والتفاصيل التي تصنع الفرق.",
    exploreWork: "استكشف أعمالي",
    startProject: "لنبدأ مشروعك",
    heroNote: "الفكرة الجيدة تستحق تنفيذًا استثنائيًا.",
    portraitLabel: "مساحتي الإبداعية",
    portraitCaption: "التصميم · الإبداع · التجربة",
    floatingCard: "كل تفصيلة لها معنى.",
    scrollText: "اكتشف المزيد",

    stripOne: "هوية بصرية",
    stripTwo: "تجربة مستخدم",
    stripThree: "تصميم مواقع",
    stripFour: "تجارب رقمية",

    aboutIndex: "التعريف",
    aboutEyebrow: "وراء كل واجهة فكرة",
    aboutTitle: 'التصميم ليس مجرد شكل،<br><span class="title-accent">بل تجربة متكاملة.</span>',
    aboutLead: "أنا أحمد، أعمل في مجال تصميم الواجهات والمواقع والهويات الرقمية، وأهتم بتحويل الأفكار إلى تجارب واضحة وجذابة وسهلة الاستخدام.",
    aboutDescription: "أؤمن أن الموقع المميز لا يعتمد على مظهره فقط؛ بل على كيفية تقديم الفكرة، وتنظيم المحتوى، ومساعدة الزائر على الوصول إلى ما يحتاج إليه بسهولة. كل مشروع بالنسبة لي فرصة لصناعة تجربة تناسب هويته وجمهوره.",
    aboutCta: "هل لديك فكرة؟ دعنا نتحدث",

    servicesIndex: "ما أقدمه",
    servicesEyebrow: "من الفكرة إلى الواجهة",
    servicesTitle: 'حلول رقمية بهوية<br><span class="title-accent">لا تشبه غيرها.</span>',
    serviceOneTitle: "تصميم واجهات المستخدم",
    serviceOneDescription: "واجهات منظمة وواضحة تراعي سهولة الاستخدام وتفاصيل التجربة.",
    serviceTwoTitle: "تصميم وتطوير المواقع",
    serviceTwoDescription: "مواقع متجاوبة تقدم نشاطك بصورة احترافية على مختلف الأجهزة.",
    serviceThreeTitle: "الهوية الرقمية",
    serviceThreeDescription: "لغة بصرية متناسقة تساعد العلامة التجارية على تقديم نفسها بوضوح.",
    serviceFourTitle: "تجربة المتاجر والخدمات",
    serviceFourDescription: "تنظيم المنتجات والخدمات والمحتوى لتسهيل رحلة العميل.",

    projectsIndex: "مختارات من أعمالي",
    projectsEyebrow: "أفكار تتحول إلى تجارب",
    projectsTitle: 'مشاريع صنعت<br><span class="title-accent">لكل منها هويته.</span>',
    projectsIntro: "مجموعة من المشاريع الرقمية في مجالات التجارة الإلكترونية والضيافة والخدمات. افتح أي مشروع لاستكشافه.",
    catFashion: "أزياء وتجارة إلكترونية",
    catAccessories: "متجر إكسسوارات",
    catDigital: "مشروع رقمي",
    catResort: "ضيافة وإقامة",
    catRestaurant: "مطاعم ومأكولات",
    catCafe: "مقاهٍ وضيافة",
    catBooking: "منصة حجوزات · قيد التطوير",
    viewProject: "استكشف المشروع ↗",
    projectsFootnote: "الصور المستخدمة حاليًا صور توضيحية مؤقتة، وليست لقطات من المواقع نفسها.",

    statement: "التفاصيل الصغيرة لا تصنع فرقًا صغيرًا؛ إنها ما يجعل التجربة استثنائية.",

    contactIndex: "تواصل",
    contactEyebrow: "كل مشروع يبدأ بمحادثة",
    contactTitle: 'لديك فكرة؟<br><span class="title-accent">دعنا نصنع شيئًا مميزًا.</span>',
    contactDescription: "أخبرني عن فكرتك وما تريد تحقيقه، ولنبدأ بمناقشة الخطوة المناسبة.",
    emailMe: "تواصل عبر البريد",
    whatsappMe: "تواصل عبر واتساب",
    contactNote: "استبدل بيانات البريد ورقم الهاتف ببيانات التواصل الخاصة بك قبل النشر.",

    footerText: "تصميم بفكرة. وتنفيذ باهتمام.",
    languageLabel: "Switch to English",
    themeLabel: "تغيير المظهر",
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
    portraitAlt: "صورة أحمد الشخصية"
  },

  en: {
    pageTitle: "Ahmad | Digital Designer",
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navProjects: "Selected Work",
    navContact: "Let's Talk",

    heroEyebrow: "Digital design with a different perspective",
    heroKicker: "Digital Designer · Web & Visual Identity",
    heroTitle: 'Turning ideas into <span class="title-accent">digital experiences</span> worth seeing.',
    heroDescription: "I design digital experiences that bring together visual identity, usability, and the details that make a difference.",
    exploreWork: "Explore My Work",
    startProject: "Start a Project",
    heroNote: "Good ideas deserve thoughtful execution.",
    portraitLabel: "My Creative Space",
    portraitCaption: "Design · Creativity · Experience",
    floatingCard: "Every detail has meaning.",
    scrollText: "Discover More",

    stripOne: "Visual Identity",
    stripTwo: "User Experience",
    stripThree: "Web Design",
    stripFour: "Digital Experiences",

    aboutIndex: "ABOUT",
    aboutEyebrow: "Every interface starts with an idea",
    aboutTitle: 'Design is more than appearance.<br><span class="title-accent">It is a complete experience.</span>',
    aboutLead: "I'm Ahmad, working in interface design, websites, and digital identity. I focus on turning ideas into clear, engaging, and easy-to-use experiences.",
    aboutDescription: "I believe a great website is defined by more than its appearance. It is also about communicating an idea, organizing content, and helping visitors find what they need. Every project is an opportunity to create an experience suited to its identity and audience.",
    aboutCta: "Have an idea? Let's talk",

    servicesIndex: "WHAT I DO",
    servicesEyebrow: "From concept to interface",
    servicesTitle: 'Digital solutions with<br><span class="title-accent">a distinct identity.</span>',
    serviceOneTitle: "User Interface Design",
    serviceOneDescription: "Clear, organized interfaces focused on usability and the details of the experience.",
    serviceTwoTitle: "Website Design & Development",
    serviceTwoDescription: "Responsive websites that present your business professionally across devices.",
    serviceThreeTitle: "Digital Identity",
    serviceThreeDescription: "A consistent visual language that helps a brand communicate clearly.",
    serviceFourTitle: "Commerce & Service Experiences",
    serviceFourDescription: "Organizing products, services, and content to simplify the customer journey.",

    projectsIndex: "SELECTED WORK",
    projectsEyebrow: "Ideas turned into experiences",
    projectsTitle: 'Selected projects,<br><span class="title-accent">each with its own identity.</span>',
    projectsIntro: "A collection of digital projects across e-commerce, hospitality, and services. Open a project to explore it.",
    catFashion: "Fashion & E-commerce",
    catAccessories: "Accessories Store",
    catDigital: "Digital Project",
    catResort: "Hospitality & Stays",
    catRestaurant: "Restaurant & Dining",
    catCafe: "Cafe & Hospitality",
    catBooking: "Booking Platform · In Development",
    viewProject: "Explore Project ↗",
    projectsFootnote: "The images currently shown are temporary illustrative images, not screenshots of the actual websites.",

    statement: "Small details do not make a small difference. They make an experience exceptional.",

    contactIndex: "CONTACT",
    contactEyebrow: "Every project starts with a conversation",
    contactTitle: 'Have an idea?<br><span class="title-accent">Let’s make something remarkable.</span>',
    contactDescription: "Tell me about your idea and what you want to achieve. Let's discuss the right next step.",
    emailMe: "Get in Touch by Email",
    whatsappMe: "Message on WhatsApp",
    contactNote: "Replace the email address and phone number with your own contact details before publishing.",

    footerText: "Designed with intention. Built with care.",
    languageLabel: "التبديل إلى العربية",
    themeLabel: "Change appearance",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    portraitAlt: "Portrait of Ahmad"
  }
};

const root = document.documentElement;
const languageToggle = document.getElementById("languageToggle");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const portraitImage = document.getElementById("portraitImage");
const portraitPlaceholder = document.getElementById("portraitPlaceholder");

let currentLanguage = "ar";
let currentTheme = "dark";

/* Apply language without replacing links or event handlers. */
function setLanguage(language) {
  if (!translations[language]) return;

  currentLanguage = language;

  root.lang = language;
  root.dir = language === "ar" ? "rtl" : "ltr";

  document.title = translations[language].pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[language][key];

    if (typeof value === "string") {
      element.innerHTML = value;
    }
  });

  languageToggle.textContent = language === "ar" ? "EN" : "ع";
  languageToggle.setAttribute(
    "aria-label",
    translations[language].languageLabel
  );

  themeToggle.setAttribute(
    "aria-label",
    translations[language].themeLabel
  );

  menuToggle.setAttribute(
    "aria-label",
    mainNav.classList.contains("is-open")
      ? translations[language].menuClose
      : translations[language].menuOpen
  );

  if (portraitImage) {
    portraitImage.alt = translations[language].portraitAlt;
  }

  try {
    localStorage.setItem("ahmad-portfolio-language", language);
  } catch (_) {
    // The site still works if browser storage is unavailable.
  }
}

/* Change between light and dark themes. */
function setTheme(theme) {
  if (!["dark", "light"].includes(theme)) return;

  currentTheme = theme;
  root.dataset.theme = theme;

  themeIcon.textContent = theme === "dark" ? "☼" : "☾";

  const themeColor = document.querySelector('meta[name="theme-color"]');

  if (themeColor) {
    themeColor.setAttribute(
      "content",
      theme === "dark" ? "#10130f" : "#f5f3ec"
    );
  }

  try {
    localStorage.setItem("ahmad-portfolio-theme", theme);
  } catch (_) {
    // Theme remains active for the current page session.
  }
}

/* Mobile navigation. */
function closeMenu() {
  mainNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute(
    "aria-label",
    translations[currentLanguage].menuOpen
  );
}

function toggleMenu() {
  const isOpen = mainNav.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen
      ? translations[currentLanguage].menuClose
      : translations[currentLanguage].menuOpen
  );
}

/* Load the personal portrait only when the file exists. */
function loadPortrait() {
  if (!portraitImage) return;

  portraitImage.addEventListener("load", () => {
    portraitImage.hidden = false;

    if (portraitPlaceholder) {
      portraitPlaceholder.hidden = true;
    }
  });

  portraitImage.addEventListener("error", () => {
    portraitImage.hidden = true;

    if (portraitPlaceholder) {
      portraitPlaceholder.hidden = false;
    }
  });

  if (portraitImage.complete) {
    if (portraitImage.naturalWidth > 0) {
      portraitImage.hidden = false;

      if (portraitPlaceholder) {
        portraitPlaceholder.hidden = true;
      }
    } else {
      portraitImage.hidden = true;
    }
  }
}

/* Footer year. */
function setCurrentYear() {
  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

/* Bind interactive controls. */
languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "ar" ? "en" : "ar");
});

themeToggle.addEventListener("click", () => {
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

menuToggle.addEventListener("click", toggleMenu);

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    closeMenu();
  }
});

/* Initialize the site. */
function initializePortfolio() {
  let savedLanguage = "ar";
  let savedTheme = "dark";

  try {
    const languagePreference = localStorage.getItem(
      "ahmad-portfolio-language"
    );
    const themePreference = localStorage.getItem(
      "ahmad-portfolio-theme"
    );

    if (["ar", "en"].includes(languagePreference)) {
      savedLanguage = languagePreference;
    }

    if (["dark", "light"].includes(themePreference)) {
      savedTheme = themePreference;
    }
  } catch (_) {
    // Use the defaults when browser storage is unavailable.
  }

  setTheme(savedTheme);
  setLanguage(savedLanguage);
  loadPortrait();
  setCurrentYear();
}

initializePortfolio();
