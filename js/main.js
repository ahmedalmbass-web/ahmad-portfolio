
"use strict";

const translations = {
  ar: {
    pageTitle: "أحمد | مصمم واجهات ومواقع وهوية رقمية",
    navHome: "الرئيسية", navAbout: "من أنا", navServices: "خدماتي",
    navProcess: "طريقة العمل", navProjects: "أعمالي", navContact: "تواصل معي",
    heroEyebrow: "تصميم رقمي برؤية مختلفة", heroKicker: "مرحبًا، أنا",
    heroTitle: "أحمد، أصنع حضورك الرقمي", heroAccent: "بأناقة ووضوح.",
    heroDescription: "مصمم واجهات ومواقع وهوية رقمية. أهتم بتحويل الأفكار إلى تجارب رقمية أنيقة وواضحة وسهلة الاستخدام.",
    heroAudience: "أساعد رواد الأعمال، وأصحاب المشاريع الناشئة، والمتاجر والعلامات التجارية، والشركات على بناء حضور رقمي احترافي يعكس قيمة أعمالهم ويصل إلى جمهورهم بوضوح.",
    exploreWork: "استكشف أعمالي", startProject: "لنبدأ مشروعًا",
    heroNote: "كل فكرة تستحق حضورًا رقميًا يليق بها.", scrollText: "اكتشف المزيد",
    stripOne: "واجهات رقمية", stripTwo: "تصميم مواقع", stripThree: "هوية بصرية", stripFour: "تجربة مستخدم",
    servicesIndex: "01 / الخدمات", servicesEyebrow: "ما أقدمه",
    servicesTitle: "حلول رقمية تبدأ من الفكرة.",
    servicesIntro: "أجمع بين التفكير البصري والتنفيذ العملي لبناء تجربة واضحة تخدم هدف المشروع.",
    serviceOneTitle: "تصميم واجهات المستخدم",
    serviceOneDescription: "واجهات واضحة ومتناسقة تساعد الزائر على الوصول لما يحتاجه بسهولة.",
    serviceTwoTitle: "تصميم وتطوير المواقع",
    serviceTwoDescription: "مواقع متجاوبة تعرض الخدمات والمحتوى بصورة منظمة على مختلف الأجهزة.",
    serviceThreeTitle: "الهوية الرقمية",
    serviceThreeDescription: "تنسيق بصري يعبّر عن شخصية المشروع ويحافظ على اتساق حضوره الرقمي.",
    serviceFourTitle: "تحسين تجربة الاستخدام",
    serviceFourDescription: "الاهتمام بوضوح المحتوى وسهولة الحركة بين أقسام الموقع.",
    aboutIndex: "02 / نبذة", aboutEyebrow: "من أنا",
    aboutTitle: "أحوّل الأفكار إلى تجارب رقمية واضحة.",
    aboutLead: "أنا أحمد، مهتم بتصميم الواجهات والمواقع وبناء حضور رقمي يعكس شخصية كل مشروع.",
    aboutDescription: "أركز على التوازن بين الشكل والوظيفة، من ترتيب المحتوى واختيار الألوان إلى سهولة التنقل وتجربة الاستخدام على مختلف الشاشات.",
    aboutCta: "تحدث معي عن فكرتك ↗", portraitLabel: "تصميم • تقنية • إبداع",
    portraitCaption: "مساحة للأفكار الكبيرة", aboutVisualNote: "عقلية إبداعية",
    processIndex: "03 / طريقة العمل", processEyebrow: "من الفكرة إلى الإطلاق",
    processTitle: "خطوات واضحة، ونتيجة مدروسة.",
    processIntro: "لكل مشروع احتياجاته، لكنني أتعامل مع العمل بمراحل منظمة تساعد على وضوح الرؤية من البداية.",
    processOneTitle: "الفهم والاستكشاف",
    processOneDescription: "أتعرف على فكرة المشروع والجمهور والهدف المطلوب قبل البدء بالتصميم.",
    processTwoTitle: "التخطيط والتصميم",
    processTwoDescription: "أرتب المحتوى وأحدد الاتجاه البصري وبنية الصفحات وتجربة التنقل.",
    processThreeTitle: "التنفيذ والتطوير",
    processThreeDescription: "أحوّل التصميم إلى تجربة متجاوبة وأهتم بالتفاصيل عبر أحجام الشاشات.",
    processFourTitle: "المراجعة والإطلاق",
    processFourDescription: "أراجع الصفحات والروابط والتفاصيل الأساسية قبل إتاحة المشروع.",
    projectsIndex: "04 / مختارات من الأعمال", projectsEyebrow: "المشاريع",
    projectsTitle: "أفكار تحولت إلى مشاريع رقمية.",
    projectsIntro: "مجموعة من المواقع والمشاريع التي يمكنك استكشافها عبر روابطها المباشرة.",
    catFashion: "متجر أزياء وعبايات", catAccessories: "متجر إكسسوارات",
    catDigital: "مشروع طلبات رقمي", catResort: "موقع منتجع",
    catRestaurant: "موقع مطعم", catCafe: "موقع كافيه",
    catBooking: "منصة للحجوزات والمواعيد", catBranding: "تصميم جرافيكي وهوية بصرية",
    descKhial: "واجهة متجر لعرض العبايات وتنظيم المنتجات، مع تسهيل إرسال الطلب عبر واتساب.",
    descViora: "تجربة متجر للإكسسوارات تعرض المنتجات وتتيح تجهيز الطلب وإرساله عبر واتساب.",
    descPanda: "مشروع رقمي مخصص للطلبات، مع واجهة تقدم محتواه بطريقة منظمة.",
    descResort: "موقع تعريفي يعرض المنتجع ويقدم للزائر تصورًا عن المكان وخدماته.",
    descRestaurant: "واجهة إلكترونية للمطعم تعرض هويته ومحتواه بصورة مرتبة.",
    descCafe: "موقع للكافيه يقدم محتواه ضمن واجهة متناسقة وسهلة التصفح.",
    descMeead: "منصة لتنظيم المواعيد وتسهيل وصول العملاء إلى مقدمي الخدمات.",
    descOsama: "موقع Portfolio يعرض الأعمال والخدمات ضمن حضور بصري شخصي.",
    viewProject: "استكشف المشروع ↗",
    projectsFootnote: "أوصاف مختصرة للتعريف بطبيعة المشاريع؛ افتح الروابط لمشاهدة المواقع الفعلية.",
    statement: "التصميم الجيد ليس مجرد شكل جميل، بل تجربة تبقى في الذاكرة.",
    contactIndex: "05 / تواصل", contactEyebrow: "لديك فكرة؟",
    contactTitle: "لنجعل فكرتك حاضرة على الإنترنت.",
    contactDescription: "سواء كنت تبدأ مشروعًا جديدًا أو ترغب في تطوير حضورك الرقمي، يمكنك التواصل معي عبر حسابات التواصل التالية.",
    emailMe: "تواصل عبر LinkedIn ↗", whatsappMe: "تواصل عبر واتساب ↗",
    contactNote: "يسعدني الاطلاع على فكرتك ومناقشة تفاصيلها.",
    footerText: "صُنع باهتمام بالتفاصيل.", languageLabel: "تغيير اللغة",
    themeLabel: "تغيير المظهر", menuOpen: "فتح القائمة", menuClose: "إغلاق القائمة",
    portraitAlt: "صورة أحمد"
  },

  en: {
    pageTitle: "Ahmad | UI, Web & Digital Identity Designer",
    navHome: "Home", navAbout: "About", navServices: "Services",
    navProcess: "Process", navProjects: "Projects", navContact: "Contact",
    heroEyebrow: "Digital design with a different perspective", heroKicker: "Hello, I'm",
    heroTitle: "Ahmad, shaping your digital presence", heroAccent: "With clarity and elegance.",
    heroDescription: "A UI, web, and digital identity designer focused on turning ideas into elegant, clear, and user-friendly digital experiences.",
    heroAudience: "I help entrepreneurs, startups, stores, brands, and companies build a professional digital presence that reflects their value and connects clearly with their audience.",
    exploreWork: "Explore My Work", startProject: "Start a Project",
    heroNote: "Every idea deserves a digital presence that reflects its value.", scrollText: "Discover More",
    stripOne: "Digital Interfaces", stripTwo: "Web Design", stripThree: "Visual Identity", stripFour: "User Experience",
    servicesIndex: "01 / SERVICES", servicesEyebrow: "What I Do",
    servicesTitle: "Digital solutions begin with an idea.",
    servicesIntro: "I combine visual thinking with practical execution to create clear experiences built around each project's goals.",
    serviceOneTitle: "User Interface Design",
    serviceOneDescription: "Clear, consistent interfaces that help visitors find what they need with ease.",
    serviceTwoTitle: "Website Design & Development",
    serviceTwoDescription: "Responsive websites that present services and content clearly across devices.",
    serviceThreeTitle: "Digital Identity",
    serviceThreeDescription: "A visual direction that reflects a project's personality and keeps its digital presence consistent.",
    serviceFourTitle: "User Experience",
    serviceFourDescription: "Improving content clarity and making navigation between sections easier.",
    aboutIndex: "02 / ABOUT", aboutEyebrow: "About Me",
    aboutTitle: "Turning ideas into clear digital experiences.",
    aboutLead: "I'm Ahmad, interested in designing interfaces and websites that reflect each project's character.",
    aboutDescription: "I focus on balancing form and function, from content structure and color choices to intuitive navigation and usability across screens.",
    aboutCta: "Let's discuss your idea ↗", portraitLabel: "Design • Technology • Creativity",
    portraitCaption: "A space for big ideas", aboutVisualNote: "A CREATIVE MINDSET",
    processIndex: "03 / THE PROCESS", processEyebrow: "From Idea to Launch",
    processTitle: "Clear steps. Thoughtful outcomes.",
    processIntro: "Every project has its own needs. I use an organized process to establish a clear direction from the start.",
    processOneTitle: "Discovery",
    processOneDescription: "I learn about the project, its audience, and its goals before design begins.",
    processTwoTitle: "Planning & Design",
    processTwoDescription: "I organize the content and define the visual direction, page structure, and navigation.",
    processThreeTitle: "Development",
    processThreeDescription: "I turn the design into a responsive experience and refine details across screen sizes.",
    processFourTitle: "Review & Launch",
    processFourDescription: "I review pages, links, and essential details before the project goes live.",
    projectsIndex: "04 / SELECTED WORK", projectsEyebrow: "Projects",
    projectsTitle: "Ideas transformed into digital projects.",
    projectsIntro: "Explore a selection of websites and digital projects through their direct links.",
    catFashion: "Fashion & Abaya Store", catAccessories: "Accessories Store",
    catDigital: "Digital Ordering Project", catResort: "Resort Website",
    catRestaurant: "Restaurant Website", catCafe: "Cafe Website",
    catBooking: "Booking & Appointment Platform", catBranding: "Graphic Design & Visual Identity",
    descKhial: "An online storefront for presenting abayas and organizing products, with WhatsApp ordering.",
    descViora: "An accessories shopping experience for browsing products and preparing orders through WhatsApp.",
    descPanda: "A digital ordering project with an interface that presents its content in an organized way.",
    descResort: "An informational website introducing the resort and presenting an overview of its place and services.",
    descRestaurant: "A restaurant website presenting its identity and content in a clear layout.",
    descCafe: "A cafe website presenting its content through a consistent, easy-to-browse interface.",
    descMeead: "A booking platform designed to organize appointments and connect customers with service providers.",
    descOsama: "A personal portfolio website presenting work and services through a visual presence.",
    viewProject: "Explore Project ↗",
    projectsFootnote: "Short introductions to each project. Open the links to explore the live websites.",
    statement: "Good design is more than a beautiful look; it is an experience people remember.",
    contactIndex: "05 / CONTACT", contactEyebrow: "Have an Idea?",
    contactTitle: "Let's bring your idea online.",
    contactDescription: "Whether you're starting something new or improving your digital presence, you can reach me through the social links below.",
    emailMe: "Connect on LinkedIn ↗", whatsappMe: "Contact on WhatsApp ↗",
    contactNote: "I'd be glad to learn about your idea and discuss its details.",
    footerText: "Made with attention to detail.", languageLabel: "Change language",
    themeLabel: "Change appearance", menuOpen: "Open menu", menuClose: "Close menu",
    portraitAlt: "Ahmad's portrait"
  }
};

const root = document.documentElement;

function safeGet(key) {
  try { return localStorage.getItem(key); }
  catch { return null; }
}

function safeSet(key, value) {
  try { localStorage.setItem(key, value); }
  catch { /* Keep the site usable when storage is unavailable. */ }
}

function setLanguage(language) {
  const lang = translations[language] ? language : "ar";
  const dictionary = translations[lang];

  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = dictionary.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.textContent = dictionary[key];
    }
  });

  const languageButton = document.getElementById("languageToggle");
  if (languageButton) {
    languageButton.textContent = lang === "ar" ? "EN" : "ع";
    languageButton.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    languageButton.title = lang === "ar" ? "English" : "العربية";
  }

  const portrait = document.getElementById("portraitImage");
  if (portrait) portrait.alt = dictionary.portraitAlt;

  const menuButton = document.getElementById("menuToggle");
  if (menuButton) {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-label", isOpen ? dictionary.menuClose : dictionary.menuOpen);
  }

  safeSet("ahmad-portfolio-language", lang);
}

function setTheme(theme) {
  const selectedTheme = theme === "light" ? "light" : "dark";
  root.setAttribute("data-theme", selectedTheme);

  const themeIcon = document.getElementById("themeIcon");
  const themeButton = document.getElementById("themeToggle");
  const lang = root.lang || "ar";

  if (themeIcon) themeIcon.textContent = selectedTheme === "dark" ? "☼" : "☾";
  if (themeButton) {
    themeButton.setAttribute("aria-label", translations[lang].themeLabel);
    themeButton.title = selectedTheme === "dark"
      ? (lang === "ar" ? "الوضع الفاتح" : "Light mode")
      : (lang === "ar" ? "الوضع الداكن" : "Dark mode");
  }

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.setAttribute("content", selectedTheme === "dark" ? "#0B100E" : "#F4F8F5");

  safeSet("ahmad-portfolio-theme", selectedTheme);
}

function closeMenu() {
  const nav = document.getElementById("mainNav");
  const button = document.getElementById("menuToggle");
  if (!nav || !button) return;

  nav.classList.remove("is-open");
  button.classList.remove("is-active");
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-label", translations[root.lang || "ar"].menuOpen);
}

function toggleMenu() {
  const nav = document.getElementById("mainNav");
  const button = document.getElementById("menuToggle");
  if (!nav || !button) return;

  const shouldOpen = !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", shouldOpen);
  button.classList.toggle("is-active", shouldOpen);
  button.setAttribute("aria-expanded", String(shouldOpen));
  button.setAttribute("aria-label", translations[root.lang || "ar"][shouldOpen ? "menuClose" : "menuOpen"]);
}

function setupPortrait() {
  const image = document.getElementById("portraitImage");
  const placeholder = document.getElementById("portraitPlaceholder");
  if (!image || !placeholder) return;

  const showPlaceholder = () => {
    image.hidden = true;
    placeholder.hidden = false;
  };
  const showImage = () => {
    image.hidden = false;
    placeholder.hidden = true;
  };

  image.addEventListener("load", showImage);
  image.addEventListener("error", showPlaceholder);

  if (image.complete) {
    image.naturalWidth > 0 ? showImage() : showPlaceholder();
  } else {
    placeholder.hidden = false;
  }
}

function setupNavigation() {
  const nav = document.getElementById("mainNav");
  const menuButton = document.getElementById("menuToggle");

  if (menuButton) menuButton.addEventListener("click", toggleMenu);
  if (nav) nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!nav || !menuButton || !nav.classList.contains("is-open")) return;
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
}

function setupControls() {
  const languageButton = document.getElementById("languageToggle");
  const themeButton = document.getElementById("themeToggle");

  if (languageButton) {
    languageButton.addEventListener("click", () => setLanguage(root.lang === "ar" ? "en" : "ar"));
  }
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }
}

function setupFooterYear() {
  const yearElement = document.getElementById("currentYear");
  if (yearElement) yearElement.textContent = String(new Date().getFullYear());
}

function initializePortfolio() {
  setLanguage(safeGet("ahmad-portfolio-language") || "ar");
  setTheme(safeGet("ahmad-portfolio-theme") || "dark");
  setupControls();
  setupNavigation();
  setupPortrait();
  setupFooterYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePortfolio);
} else {
  initializePortfolio();
}
