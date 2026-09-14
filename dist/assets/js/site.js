const pageName = document.body.dataset.page || "home";
const isEnglish = document.documentElement.lang.toLowerCase().startsWith("en");
const englishTargetByPage = {
  home: "en.html",
  about: "en.html#about",
  services: "en.html#training",
  training: "en.html#training",
  academy: "en.html#individual-courses",
  consulting: "en.html#solutions",
  deployment: "en.html#solutions",
  solutions: "en.html#solutions",
  projects: "en.html#projects",
  blog: "en.html#insights",
  resources: "en.html#resources",
  contact: "en.html#consultation-form",
  faq: "en.html#consultation-form",
};

const navItems = isEnglish ? [
  { key: "home", label: "HOME", href: "en.html" },
  { key: "about", label: "ABOUT US", href: "en.html#about" },
  { key: "solutions", label: "SOLUTIONS", href: "en.html#solutions" },
  { key: "projects", label: "PROJECTS", href: "en.html#projects" },
  { key: "blog", label: "INSIGHTS", href: "en.html#insights" },
  { key: "contact", label: "CONTACT", href: "en.html#consultation-form" },
] : [
  { key: "home", label: "TRANG CHỦ", href: "index.html" },
  { key: "about", label: "VỀ CHÚNG TÔI", href: "gioi-thieu.html" },
  { key: "solutions", label: "GIẢI PHÁP", href: "giai-phap.html" },
  { key: "projects", label: "DỰ ÁN", href: "du-an.html" },
  { key: "blog", label: "BLOG", href: "blog.html" },
  { key: "resources", label: "TÀI NGUYÊN", href: "tai-nguyen.html" },
  { key: "contact", label: "LIÊN HỆ", href: "lien-he.html#consultation-form" },
];

const trainingLinks = isEnglish ? [
  ["CORPORATE AI TRAINING", "en.html#training"],
  ["AI COURSES FOR INDIVIDUALS", "en.html#individual-courses"],
  ["E-LEARNING COURSES", "en.html#elearning"],
  ["DIGITAL LEARNING RESOURCES", "en.html#resources"],
] : [
  ["ĐÀO TẠO DOANH NGHIỆP", "dao-tao-ai-doanh-nghiep.html"],
  ["KHÓA HỌC AI CHO CÁ NHÂN", "hoc-vien.html#khoa-hoc-ca-nhan"],
  ["KHÓA HỌC E-LEARNING", "hoc-vien.html#e-learning"],
  ["HỌC LIỆU SỐ", "tai-nguyen.html#hoc-lieu-so"],
];

const ui = isEnglish ? {
  logoLabel: "VISUN AI - DIGITAL WORKFORCE - Home",
  openMenu: "Open menu",
  navLabel: "Primary navigation",
  training: "TRAINING",
  consult: "Book a consultation",
  languageLabel: "Chuyển sang tiếng Việt",
  languageText: "VI",
  languageHref: document.body.dataset.altLang || "index.html",
  company: "VISUN HOLDINGS JOINT STOCK COMPANY",
  tagline: "Recruit a digital workforce for Vietnamese businesses",
  footerNote: "Training, consulting and transferring digital workforce solutions into real operations.",
  explore: "EXPLORE",
  contact: "CONTACT",
  legal: "LEGAL",
  about: "About us",
  blog: "Insights",
  resources: "Resources",
  faq: "Frequently asked questions",
  location: "Address: No. 46, Alley 162/29 Le Trong Tan Street, Phuong Liet Ward, Hanoi, Vietnam",
  privacy: "Personal data protection",
  terms: "Terms of use",
  cookies: "Cookie policy",
  copyright: "© 2026 VISUN AI - DIGITAL WORKFORCE. All rights reserved.",
  principle: "AI for real work · Clear scope · Human accountability",
  socialLabel: "VISUN AI social channels",
  quickLabel: "Quick contact",
  messenger: "Facebook inbox",
  zalo: "Chat on Zalo",
  phone: "Call VISUN AI",
} : {
  logoLabel: "VISUN AI - ĐỘI NHÂN SỰ SỐ - Trang chủ",
  openMenu: "Mở menu",
  navLabel: "Điều hướng chính",
  training: "KHÓA ĐÀO TẠO",
  consult: "Đăng ký tư vấn",
  languageLabel: "Switch to English",
  languageText: "EN",
  languageHref: document.body.dataset.altLang || englishTargetByPage[pageName] || "en.html",
  company: "CÔNG TY CỔ PHẦN VISUN HOLDINGS",
  tagline: "Tuyển dụng Đội nhân sự số cho doanh nghiệp Việt",
  footerNote: "Đào tạo, tư vấn và chuyển giao đội nhân sự số vào công việc thật.",
  explore: "KHÁM PHÁ",
  contact: "LIÊN HỆ",
  legal: "PHÁP LÝ",
  about: "Về chúng tôi",
  blog: "Blog",
  resources: "Tài nguyên",
  faq: "Câu hỏi thường gặp",
  location: "Địa chỉ: Số 46 Ngõ 162/29 Đường Lê Trọng Tấn, Phường Phương Liệt, TP Hà Nội, Việt Nam",
  privacy: "Bảo vệ dữ liệu cá nhân",
  terms: "Điều khoản sử dụng",
  cookies: "Chính sách cookie",
  copyright: "© 2026 VISUN AI - ĐỘI NHÂN SỰ SỐ. Bảo lưu mọi quyền.",
  principle: "AI vào việc thật · Có phạm vi · Có người chịu trách nhiệm",
  socialLabel: "Mạng xã hội VISUN AI",
  quickLabel: "Liên hệ nhanh",
  messenger: "Inbox Facebook",
  zalo: "Chat Zalo",
  phone: "Gọi VISUN AI",
};

const headerTarget = document.querySelector("[data-site-header]");
if (headerTarget) {
  const links = navItems.map((item) => `
    <a class="nav-link ${pageName === item.key ? "is-current" : ""}" href="${item.href}">${item.label}</a>
  `);

  const trainingActive = ["services", "training", "academy"].includes(pageName);
  headerTarget.innerHTML = `
    <header class="site-header" id="top">
      <div class="container header-inner">
        <a class="brand" href="${isEnglish ? "en.html" : "index.html"}" aria-label="${ui.logoLabel}">
          <img src="assets/images/visunai-logo-transparent.png" alt="${isEnglish ? "VISUN AI - Digital Workforce" : "VISUN AI - Đội Nhân Sự Số"}" width="178" height="122">
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
          <span class="sr-only">${ui.openMenu}</span><span></span><span></span><span></span>
        </button>
        <nav class="primary-nav" id="primary-nav" aria-label="${ui.navLabel}">
          ${links.slice(0, 2).join("")}
          <details class="nav-dropdown ${trainingActive ? "is-current" : ""}">
            <summary>${ui.training} <span aria-hidden="true">⌄</span></summary>
            <div class="dropdown-panel">
              ${trainingLinks.map(([label, href]) => `<a href="${href}">${label}<span aria-hidden="true">↗</span></a>`).join("")}
            </div>
          </details>
          ${links.slice(2).join("")}
          <a class="language-switch" href="${ui.languageHref}" hreflang="${isEnglish ? "vi" : "en"}" aria-label="${ui.languageLabel}">${ui.languageText}</a>
          <a class="button button-small header-cta" href="${isEnglish ? "en.html#consultation-form" : "lien-he.html#consultation-form"}">${ui.consult}</a>
        </nav>
      </div>
    </header>
  `;
}

const footerTarget = document.querySelector("[data-site-footer]");
if (footerTarget) {
  footerTarget.innerHTML = `
    <footer class="site-footer" id="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <p class="footer-company">${ui.company}</p>
          <div class="footer-logo"><img src="assets/images/visunai-logo-white.png" alt="${isEnglish ? "VISUN AI - Digital Workforce" : "VISUN AI - Đội Nhân Sự Số"}" width="1278" height="658"></div>
          <p>${ui.tagline}</p>
          <p class="footer-note">${ui.footerNote}</p>
          <div class="social-links" aria-label="${ui.socialLabel}">
            <a class="social-icon social-facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.6 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6H17V3.8c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2V10H7.8v3h2.7v8h3.1Z"/></svg></a>
            <a class="social-icon social-youtube" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.5 7.1a2.8 2.8 0 0 0-2-2C17.8 4.6 12 4.6 12 4.6s-5.8 0-7.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .5 4.9 2.8 2.8 0 0 0 2 2c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.5-4.9ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z"/></svg></a>
            <a class="social-icon social-linkedin social-icon-text" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a class="social-icon social-tiktok" href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3c.4 2.1 1.6 3.4 3.7 3.8v3.1a8.2 8.2 0 0 1-3.7-1.1v6.4a5.5 5.5 0 1 1-4.8-5.4v3.1a2.5 2.5 0 1 0 1.7 2.3V3H16Z"/></svg></a>
          </div>
        </div>
        <div>
          <h2>${ui.training}</h2>
          ${trainingLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
        </div>
        <div>
          <h2>${ui.explore}</h2>
          <a href="${isEnglish ? "en.html#about" : "gioi-thieu.html"}">${ui.about}</a>
          <a href="${isEnglish ? "en.html#insights" : "blog.html"}">${ui.blog}</a>
          <a href="${isEnglish ? "en.html#resources" : "tai-nguyen.html"}">${ui.resources}</a>
          <a href="${isEnglish ? "en.html#consultation-form" : "cau-hoi-thuong-gap.html"}">${ui.faq}</a>
        </div>
        <div class="footer-contact">
          <h2>${ui.contact}</h2>
          <a class="footer-contact-phone" href="tel:+84986315286">${isEnglish ? "Phone" : "Điện thoại"}: 0986 315 286</a>
          <a class="footer-contact-email" href="mailto:infor.visun@gmail.com">Email: infor.visun@gmail.com</a>
          <p>${ui.location}</p>
          <a href="${isEnglish ? "en.html#consultation-form" : "lien-he.html#consultation-form"}"><strong>${ui.consult} →</strong></a>
        </div>
        <div>
          <h2>${ui.legal}</h2>
          <a href="${isEnglish ? "en-privacy.html" : "bao-ve-du-lieu.html"}">${ui.privacy}</a>
          <a href="${isEnglish ? "en-terms.html" : "dieu-khoan-su-dung.html"}">${ui.terms}</a>
          <a href="${isEnglish ? "en-cookies.html" : "chinh-sach-cookie.html"}">${ui.cookies}</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>${ui.copyright}</span>
        <span>${ui.principle}</span>
      </div>
    </footer>
  `;
}

document.body.insertAdjacentHTML("beforeend", `
  <aside class="quick-contact" aria-label="${ui.quickLabel}">
    <a class="quick-contact-item quick-messenger" href="https://www.facebook.com/messages/" target="_blank" rel="noopener noreferrer" aria-label="${ui.messenger}" title="${ui.messenger}">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.4 2 2 6.1 2 11.4c0 3 1.4 5.6 3.7 7.3V22l3.2-1.8c1 .3 2 .5 3.1.5 5.6 0 10-4.1 10-9.3S17.6 2 12 2Zm1 12-2.5-2.6-4.8 2.6 5.3-5.6 2.6 2.6 4.7-2.6L13 14Z"/></svg>
      <span>${ui.messenger}</span>
    </a>
    <a class="quick-contact-item quick-zalo" href="https://zalo.me/0986315286" target="_blank" rel="noopener noreferrer" aria-label="${ui.zalo}" title="${ui.zalo}">
      <b aria-hidden="true">Zalo</b><span>${ui.zalo}</span>
    </a>
    <a class="quick-contact-item quick-phone" href="tel:+84986315286" aria-label="${ui.phone}" title="${ui.phone}">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.27.54 3.45.54.64 0 1.15.51 1.15 1.15V20A1 1 0 0 1 20 21C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.35c.64 0 1.15.51 1.15 1.15 0 1.18.18 2.35.54 3.45a1 1 0 0 1-.24 1l-2.2 2.2Z"/></svg>
      <span>0986 315 286</span>
    </a>
  </aside>
`);

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
    document.body.classList.toggle("menu-open", !open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }));
}

const header = document.querySelector(".site-header");
let scrollFrame = 0;
const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
  if (header) {
    const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
    header.style.setProperty("--scroll-progress", progress.toFixed(4));
  }
  scrollFrame = 0;
};
const scheduleHeaderSync = () => {
  if (!scrollFrame) scrollFrame = window.requestAnimationFrame(syncHeader);
};
syncHeader();
window.addEventListener("scroll", scheduleHeaderSync, { passive: true });
window.addEventListener("resize", scheduleHeaderSync, { passive: true });

document.querySelectorAll(".process-step").forEach((item) => item.setAttribute("data-reveal", ""));
document.querySelectorAll(".page-hero-inner > *, .cta-inner > *").forEach((item) => item.setAttribute("data-reveal", ""));
document.querySelectorAll(".section-head, .form-shell, .faq-list").forEach((item) => {
  if (!item.hasAttribute("data-reveal")) item.setAttribute("data-reveal", "");
});

const motionCards = document.querySelectorAll(".service-card, .solution-card, .proof-card, .resource-card, .pricing-card, .article-card, .metric");
motionCards.forEach((card) => {
  card.classList.add("motion-card");
  if (!card.hasAttribute("data-reveal")) card.setAttribute("data-reveal", "");
});

const staggerGroups = document.querySelectorAll(".hero-grid, .service-grid, .solution-grid, .proof-grid, .resource-grid, .pricing-grid, .process-rail, .activity-grid, .blog-grid, .metric-row, .page-hero-inner, .cta-inner");
staggerGroups.forEach((group) => {
  [...group.children]
    .filter((item) => item.matches("[data-reveal]"))
    .forEach((item, index) => item.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 65}ms`));
});

const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;
if (!prefersReducedMotion && hasFinePointer) {
  motionCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
    }, { passive: true });
  });
}

const revealItems = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -34px" });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("[data-contact-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    const data = new FormData(form);
    const subject = encodeURIComponent(`${isEnglish ? "Consultation request" : "Yêu cầu tư vấn"} - VISUN AI - ${data.get("company") || data.get("name")}`);
    const body = encodeURIComponent((isEnglish ? [
      `Name: ${data.get("name") || ""}`,
      `Role: ${data.get("role") || ""}`,
      `Company: ${data.get("company") || ""}`,
      `Contact: ${data.get("contact") || ""}`,
      `Primary need: ${data.get("need") || ""}`,
      "",
      "Problem or workflow to improve:",
      data.get("problem") || "",
    ] : [
      `Họ tên: ${data.get("name") || ""}`,
      `Vai trò: ${data.get("role") || ""}`,
      `Doanh nghiệp: ${data.get("company") || ""}`,
      `Liên hệ: ${data.get("contact") || ""}`,
      `Nhu cầu: ${data.get("need") || ""}`,
      "",
      "Bài toán cần cải thiện:",
      data.get("problem") || "",
    ]).join("\n"));
    status.textContent = isEnglish
      ? "Your email application is opening with the completed details. Please review and send the message."
      : "Ứng dụng email đang được mở với nội dung đã điền. Anh/chị vui lòng kiểm tra và bấm Gửi.";
    status.hidden = false;
    status.focus();
    window.location.href = `mailto:infor.visun@gmail.com?subject=${subject}&body=${body}`;
  });
});

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const floatingCta = document.querySelector(".floating-cta");
const quickContact = document.querySelector(".quick-contact");
const siteFooter = document.querySelector(".site-footer");
if (siteFooter && "IntersectionObserver" in window) {
  const footerObserver = new IntersectionObserver(([entry]) => {
    floatingCta?.classList.toggle("is-hidden", entry.isIntersecting);
    quickContact?.classList.toggle("is-hidden", entry.isIntersecting);
  }, { threshold: 0.08 });
  footerObserver.observe(siteFooter);
}
