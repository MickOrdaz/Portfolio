document.addEventListener("DOMContentLoaded", () => {
  // Ensure PORTFOLIO_DATA is loaded
  if (typeof PORTFOLIO_DATA === "undefined") {
    console.error("PORTFOLIO_DATA is not defined. Make sure portfolio-data.js is loaded first.");
    return;
  }

  let data = PORTFOLIO_DATA;

  function mediaEl(url, alt, cls) {
    const isVid = /\.mp4$/i.test(url);
    const clsAttr = cls ? ` class="${cls}"` : "";
    if (isVid) {
      return `<video${clsAttr} autoplay loop muted playsinline preload="metadata" src="${url}"></video>`;
    }
    return `<img${clsAttr} src="${url}" alt="${alt}" loading="lazy">`;
  }

  // --- UI Translation Dictionaries ---
  const UI_TRANSLATIONS = {
    en: {
      navHome: "Home",
      navAbout: "About",
      navExperience: "Experience",
      navProjects: "Projects",
      navFeatured: "Featured",
      navAchievements: "Achievements",
      navProjectsSide: "All Projects",
      titleFeatured: "Featured Projects",
      titleFeaturedProject: "Featured Project",
      linkAllProjects: "All Projects",
      titleAchievements: "Key Achievements",
      titleAbout: "About Me",
      languagesTitle: "Languages",
      enginesTitle: "Engines & Tools",
      specialtiesTitle: "Specialties",
      titleExperience: "Professional Experience",
      titleProjects: "All Projects",
      tabAll: "All",
      tabGames: "Games",
      tabTools: "Tools & Engines",
      btnBack: "Back to Portfolio",
      titleProjAbout: "About the Project",
      titleProjFeatures: "Key Features",
      titleProjHistory: "Development History",
      titleProjVideos: "Videos & Trailers",
      titleProjScreenshots: "Screenshots & Gameplay Gifs",
      titleProjAwards: "Awards & Recognition",
      projSpecsTitle: "Project Specs",
      projLinksTitle: "Links & Releases",
      labelRole: "My Role",
      labelPlatforms: "Platforms",
      labelTech: "Tech Stack & Tools",
      labelCategory: "Category",
      atCompany: "at",
      cardViewDetails: "View Details",
      cvDownload: "Download CV"
    },
    es: {
      navHome: "Inicio",
      navAbout: "Sobre Mí",
      navExperience: "Experiencia",
      navProjects: "Proyectos",
      navFeatured: "Destacado",
      navAchievements: "Logros",
      navProjectsSide: "Todos los Proyectos",
      titleFeatured: "Proyectos Destacados",
      titleFeaturedProject: "Proyecto Destacado",
      linkAllProjects: "Todos los Proyectos",
      titleAchievements: "Logros Destacados",
      titleAbout: "Sobre Mí",
      languagesTitle: "Lenguajes",
      enginesTitle: "Motores y Herramientas",
      specialtiesTitle: "Especialidades",
      titleExperience: "Experiencia Profesional",
      titleProjects: "Todos los Proyectos",
      tabAll: "Todos",
      tabGames: "Juegos",
      tabTools: "Herramientas y Motores",
      btnBack: "Volver al Portafolio",
      titleProjAbout: "Sobre el Proyecto",
      titleProjFeatures: "Características Clave",
      titleProjHistory: "Historia de Desarrollo",
      titleProjVideos: "Videos y Trailers",
      titleProjScreenshots: "Capturas y Gifs de Gameplay",
      titleProjAwards: "Premios y Reconocimientos",
      projSpecsTitle: "Especificaciones",
      projLinksTitle: "Links y Lanzamientos",
      labelRole: "Mi Rol",
      labelPlatforms: "Plataformas",
      labelTech: "Stack Tecnológico",
      labelCategory: "Categoría",
      atCompany: "en",
      cardViewDetails: "Ver Detalles",
      cvDownload: "Descargar CV"
    }
  };

  let currentLanguage = localStorage.getItem("portfolio_lang") || "en";
  let trans = UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS.en;

  // --- Translation Merge Logic ---
  function mergeTranslations(base, t) {
    const r = JSON.parse(JSON.stringify(base));
    if (t.profile) {
      const tp = t.profile;
      if (tp.title) r.profile.title = tp.title;
      if (tp.bio) r.profile.bio = tp.bio;
      if (tp.achievementSpotlight) Object.assign(r.profile.achievementSpotlight, tp.achievementSpotlight);
      if (tp.skills) Object.assign(r.profile.skills, tp.skills);
      if (tp.achievements) {
        r.profile.achievements = base.profile.achievements.map((a, i) =>
          ({ ...a, ...(tp.achievements[i] || {}) })
        );
      }
      if (tp.experience) {
        r.profile.experience = base.profile.experience.map((e, i) =>
          ({ ...e, ...(tp.experience[i] || {}) })
        );
      }
    }
    if (t.projects) {
      r.projects = base.projects.map(p => {
        const tp = t.projects[p.id];
        if (!tp) return p;
        const merged = { ...p };
        if (tp.tagline) merged.tagline = tp.tagline;
        if (tp.description) merged.description = { ...p.description, ...tp.description };
        if (tp.features) merged.features = tp.features;
        if (tp.timeline) {
          merged.timeline = p.timeline.map((tl, i) =>
            tp.timeline[i] ? { ...tl, description: tp.timeline[i] } : tl
          );
        }
        return merged;
      });
    }
    return r;
  }

  function applyUITranslations() {
    const t = UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS.en;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
    const langLabel = document.getElementById("lang-label");
    if (langLabel) langLabel.textContent = currentLanguage.toUpperCase();
    const langOptions = document.querySelectorAll(".lang-option");
    langOptions.forEach(btn => btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLanguage));
  }

  function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("portfolio_lang", lang);
    trans = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.en;
    data = (lang === "es" && typeof TRANSLATIONS_ES !== "undefined")
      ? mergeTranslations(PORTFOLIO_DATA, TRANSLATIONS_ES)
      : PORTFOLIO_DATA;
    applyUITranslations();
    homeRendered = false;
    handleRoute();
  }

  // --- Theme Toggle Manager ---
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("portfolio_theme") || "dark";

  // Initialize theme on document root
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  // --- Background Image/Video Slideshow ---
  const bgImagesDark = [
    "images/LAGS2026_Intro_02.mp4",
    "images/CameraChange_01.mp4",
    "images/RamenAbyss/ramen_01.mp4",
    "images/RamenAbyss/ramen_06.mp4",
    "images/RamenAbyss/ramen_11.mp4",
    "images/RoomChanges_03.mp4",
    "images/MechaKO/mechako_03.mp4",
    "images/Chrimp/chricken_09.mp4",
  ];
  const bgImagesLight = [
    "images/LAGS2026_Intro_02.mp4",
    "images/CameraChange_01.mp4",
    "images/RamenAbyss/ramen_01.mp4",
    "images/RamenAbyss/ramen_06.mp4",
    "images/RamenAbyss/ramen_11.mp4",
    "images/RoomChanges_03.mp4",
    "images/MechaKO/mechako_03.mp4",
    "images/Chrimp/chricken_09.mp4",
  ];

  const bgLayerA = document.querySelector(".bg-image-overlay");
  const bgLayerB = document.createElement("div");
  bgLayerB.className = "bg-image-overlay";
  bgLayerA.parentNode.insertBefore(bgLayerB, bgLayerA);

  function makeBgVideo() {
    const v = document.createElement("video");
    v.className = "bg-video";
    v.autoplay = true; v.loop = true; v.muted = true;
    v.setAttribute("playsinline", "");
    return v;
  }
  bgLayerA.appendChild(makeBgVideo());
  bgLayerB.appendChild(makeBgVideo());

  let bgIndex = 0;
  let bgAVisible = true;

  function getCurrentBgList() {
    return document.documentElement.getAttribute("data-theme") === "light"
      ? bgImagesLight : bgImagesDark;
  }

  function setBgLayer(layer, url) {
    const vid = layer.querySelector(".bg-video");
    const isVidUrl = /\.mp4$/i.test(url);
    if (isVidUrl && vid) {
      layer.style.backgroundImage = "";
      vid.style.display = "block";
      vid.src = url;
      vid.load();
      vid.play().catch(() => {});
    } else {
      if (vid) { vid.style.display = "none"; vid.src = ""; }
      layer.style.backgroundImage = `url(${url})`;
    }
  }

  const PORTRAIT_BG = "images/HeavenScreenshot_2026-06-02_20-24-06.png";

  function isPortraitMobile() {
    return window.matchMedia("(orientation: portrait) and (max-width: 768px)").matches;
  }

  function transitionBg(reset) {
    const images = getCurrentBgList();
    bgIndex = reset ? 0 : (bgIndex + 1) % images.length;
    const nextUrl = images[bgIndex];
    if (bgAVisible) {
      setBgLayer(bgLayerB, nextUrl);
      bgLayerA.style.opacity = "0";
      bgLayerB.style.opacity = "1";
    } else {
      setBgLayer(bgLayerA, nextUrl);
      bgLayerA.style.opacity = "1";
      bgLayerB.style.opacity = "0";
    }
    bgAVisible = !bgAVisible;
  }

  let bgTimer = null;

  function startBgSlideshow() {
    if (bgTimer) clearInterval(bgTimer);
    bgTimer = setInterval(transitionBg, 3000);
  }

  function stopBgSlideshow() {
    if (bgTimer) { clearInterval(bgTimer); bgTimer = null; }
  }

  function initBackground() {
    if (isPortraitMobile()) {
      stopBgSlideshow();
      const vid = bgLayerA.querySelector(".bg-video");
      if (vid) { vid.style.display = "none"; vid.src = ""; }
      bgLayerA.style.backgroundImage = `url(${PORTRAIT_BG})`;
      bgLayerA.style.opacity = "1";
      bgLayerB.style.opacity = "0";
      bgAVisible = true;
    } else {
      setBgLayer(bgLayerA, getCurrentBgList()[0]);
      bgLayerA.style.opacity = "1";
      bgLayerB.style.opacity = "0";
      startBgSlideshow();
    }
  }

  initBackground();

  let _bgResizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(_bgResizeTimer);
    _bgResizeTimer = setTimeout(initBackground, 250);
  });

  function resetBgSlideshow() {
    if (isPortraitMobile()) return;
    stopBgSlideshow();
    transitionBg(true);
    startBgSlideshow();
  }

  function setBgImage(url) {
    clearInterval(bgTimer);
    if (bgAVisible) {
      setBgLayer(bgLayerB, url);
      bgLayerA.style.opacity = "0";
      bgLayerB.style.opacity = "1";
    } else {
      setBgLayer(bgLayerA, url);
      bgLayerA.style.opacity = "1";
      bgLayerB.style.opacity = "0";
    }
    bgAVisible = !bgAVisible;
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      let theme = document.documentElement.getAttribute("data-theme");
      let newTheme = theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("portfolio_theme", newTheme);
      updateThemeIcon(newTheme);
      resetBgSlideshow();
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    if (theme === "dark") {
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      themeToggle.setAttribute("aria-label", "Switch to Light Mode");
    } else {
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      themeToggle.setAttribute("aria-label", "Switch to Dark Mode");
    }
  }

  // --- SPA Hash Router ---
  const homeView = document.getElementById("home-view");
  const projectView = document.getElementById("project-view");
  
  function handleRoute() {
    const hash = window.location.hash || "#/";
    
    // Smooth transition fade-out
    document.body.style.opacity = "0.7";
    
    setTimeout(() => {
      if (hash.startsWith("#/project/")) {
        // Project Detail Route
        const projectId = hash.replace("#/project/", "");
        const project = data.projects.find(p => p.id === projectId);
        
        if (project) {
          homeView.style.display = "none";
          projectView.style.display = "block";
          renderProjectDetail(project);
          setBgImage(project.backgroundImage || project.banner);
          window.scrollTo(0, 0);
        } else {
          // Fallback to Home if project not found
          window.location.hash = "#/";
        }
      } else {
        // Home Route
        projectView.style.display = "none";
        homeView.style.display = "block";
        renderHome();
        resetBgSlideshow();
        
        // Handle scroll spy and offset for in-page anchors on home page
        if (hash.includes("#")) {
          const anchor = hash.split("#")[2] || hash.split("#")[1];
          if (anchor && anchor !== "/") {
            const targetEl = document.getElementById(anchor);
            if (targetEl) {
              setTimeout(() => {
                const yOffset = -90; // account for fixed top bar
                const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
              }, 100);
            }
          }
        }
      }
      
      // Update top menu active states
      updateActiveMenuLinks(hash);
      
      // Smooth fade-in
      document.body.style.opacity = "1";
    }, 150);
  }

  // Initialize data with stored language (e.g. if user previously chose Spanish)
  if (currentLanguage === "es" && typeof TRANSLATIONS_ES !== "undefined") {
    data = mergeTranslations(PORTFOLIO_DATA, TRANSLATIONS_ES);
  }

  window.addEventListener("hashchange", handleRoute);
  window.addEventListener("load", () => {
    handleRoute();
    applyUITranslations();
  });

  function updateActiveMenuLinks(hash) {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => item.classList.remove("active"));
    
    const sidebarItems = document.querySelectorAll(".sidebar-nav-item");
    sidebarItems.forEach(item => item.classList.remove("active"));
    
    const anchors = ["featured", "about", "achievements", "experience", "projects"];
    let matched = false;
    
    anchors.forEach(anchor => {
      if (hash.includes(anchor)) {
        matched = true;
        const topLink = document.querySelector(`.nav-menu a[href*="${anchor}"]`);
        if (topLink) topLink.classList.add("active");
        
        const sideLink = document.querySelector(`.sidebar-nav a[href*="${anchor}"]`);
        if (sideLink) sideLink.classList.add("active");
      }
    });
    
    if (!matched && (hash === "#/" || hash === "")) {
      const homeLink = document.querySelector('a[href="#/"]');
      if (homeLink) homeLink.classList.add("active");
      const sideFeatured = document.querySelector('.sidebar-nav a[href*="featured"]');
      if (sideFeatured) sideFeatured.classList.add("active");
    }
  }

  // --- Render Home Page Content ---
  let homeRendered = false;
  
  function renderHome() {
    if (homeRendered) return; // Prevent double rendering static CV content

    const profile = data.profile;
    
    // Set Profile Header details
    const avatarEl = document.getElementById("profile-avatar");
    const avatarSpinner = document.getElementById("avatar-spinner");
    if (avatarEl) {
      avatarEl.src = profile.avatar;
      avatarEl.addEventListener("load", () => {
        if (avatarSpinner) avatarSpinner.style.display = "none";
      }, { once: true });
    }
    
    document.getElementById("profile-name").textContent = profile.fullName;
    document.getElementById("profile-tagline").textContent = profile.title;
    
    // Set Contact links
    const emailEl = document.getElementById("contact-email");
    if (emailEl) {
      emailEl.href = `mailto:${profile.email}`;
      emailEl.textContent = profile.email;
    }
    
    const phoneEl = document.getElementById("contact-phone");
    if (phoneEl) phoneEl.textContent = profile.phone;
    
    const linkedinEl = document.getElementById("contact-linkedin");
    if (linkedinEl && profile.linkedinUrl) {
      linkedinEl.href = profile.linkedinUrl;
      linkedinEl.textContent = profile.linkedin;
    }
    
    const githubEl = document.getElementById("contact-github");
    if (githubEl && profile.githubUrl) {
      githubEl.href = profile.githubUrl;
      githubEl.textContent = profile.fullName;
    }

    const cvBtn = document.getElementById("cv-download-btn");
    if (cvBtn && profile.cvUrl) {
      cvBtn.href = profile.cvUrl;
    }

    // Set Bio
    const bioEl = document.getElementById("profile-bio");
    if (bioEl) {
      bioEl.innerHTML = profile.bio
        .split("\n\n")
        .map(para => `<p class="desc-text">${para}</p>`)
        .join("");
    }

    // Render About Gallery
    const galleryEl = document.getElementById("mick-gallery");
    if (galleryEl && profile.galleryImages && profile.galleryImages.length) {
      galleryEl.innerHTML = profile.galleryImages.map(url => {
        const isVid = /\.mp4$/i.test(url);
        const media = isVid
          ? `<video autoplay loop muted playsinline preload="none" src="${url}"></video>`
          : `<img src="${url}" alt="Mick Ordaz" loading="lazy">`;
        return `<div class="mick-photo">${media}</div>`;
      }).join("");
    }

    // Render Achievement Spotlight Card
    const achBannerEl = document.getElementById("achievement-banner-wrap");
    if (achBannerEl && profile.achievementBanner) {
      const s = profile.achievementSpotlight || {};
      const spotlightDesc = profile.achievements[0] ? profile.achievements[0].description : "";
      achBannerEl.innerHTML = `
        <div class="ach-spotlight">
          <div class="ach-spotlight-info">
            <span class="ach-spotlight-badge"><i class="fa-solid fa-trophy"></i> ${s.badge || "Grand Prize"}</span>
            <h3 class="ach-spotlight-event">${(s.event || "").replace("\n", "<br>")}</h3>
            <div class="ach-spotlight-sub">${s.subtitle || ""} &middot; ${s.year || ""}</div>
            ${spotlightDesc ? `<p class="ach-spotlight-desc">${spotlightDesc}</p>` : ""}
          </div>
          <div class="ach-spotlight-photo">
            <div class="mick-photo ach-photo-card">
              <img src="${profile.achievementBanner}" alt="Banamex Supernova award photo">
            </div>
          </div>
        </div>
      `;
    }

    // Render Achievements (skip first entry — already shown in spotlight)
    const achievementsList = document.getElementById("achievements-list");
    if (achievementsList) {
      achievementsList.innerHTML = profile.achievements
        .slice(1)
        .map(ach => `
          <li class="ach-collapsible" tabindex="0" role="button" aria-expanded="false">
            <div class="achievement-icon">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div class="achievement-text">
              <strong>${ach.title}</strong>
              <p class="ach-desc">${ach.description}</p>
            </div>
            <i class="fa-solid fa-chevron-down ach-chevron"></i>
          </li>
        `).join("");

      achievementsList.querySelectorAll(".ach-collapsible").forEach(li => {
        li.addEventListener("click", () => {
          const expanded = li.getAttribute("aria-expanded") === "true";
          li.setAttribute("aria-expanded", String(!expanded));
          li.classList.toggle("expanded", !expanded);
        });
        li.addEventListener("keydown", e => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); li.click(); }
        });
      });
    }

    // Render Featured Projects Carousel
    const carouselContainer = document.getElementById("featured-carousel-container");
    if (carouselContainer) {
      const featuredIds = ["heaven-crawler", "chicken-desktop-pet", "mecha-ko", "ramen-abyss", "vivarium-engine", "docs-slayer"];
      const featuredProjects = data.projects
        .filter(p => featuredIds.includes(p.id))
        .sort((a, b) => featuredIds.indexOf(a.id) - featuredIds.indexOf(b.id));

      let slidesHtml = '<div class="carousel-slides-wrapper">';
      let indicatorsHtml = '';

      featuredProjects.forEach((proj, idx) => {
        const isActive = idx === 0 ? 'active' : '';
        slidesHtml += `
          <div class="carousel-slide ${isActive}" data-slide-index="${idx}">
            ${mediaEl(proj.banner, proj.title + " Banner", "carousel-slide-img")}
            <div class="carousel-slide-overlay">
              <span class="carousel-slide-tagline">${proj.category}</span>
              <h3 class="carousel-slide-title">${proj.title}</h3>
              <p class="carousel-slide-desc">${proj.description.short}</p>
              <div class="carousel-btn-group">
                <a href="#/project/${proj.id}" class="carousel-slide-btn"><i class="fa-solid fa-circle-info"></i> ${trans.cardViewDetails}</a>
                <a href="#/#projects" class="carousel-slide-btn btn-secondary"><span data-i18n="linkAllProjects">All Projects</span> <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        `;
        indicatorsHtml += `<span class="carousel-dot ${isActive}" data-dot-index="${idx}"></span>`;
      });

      slidesHtml += '</div>';

      const prevBtnHtml = `<button class="carousel-nav prev" id="carousel-prev" aria-label="Previous Slide"><i class="fa-solid fa-chevron-left"></i></button>`;
      const nextBtnHtml = `<button class="carousel-nav next" id="carousel-next" aria-label="Next Slide"><i class="fa-solid fa-chevron-right"></i></button>`;
      carouselContainer.innerHTML = slidesHtml + prevBtnHtml + nextBtnHtml;

      // Render dots outside the clipped container
      const featuredDotsWrap = document.getElementById("featured-carousel-dots-wrap");
      if (featuredDotsWrap) {
        featuredDotsWrap.innerHTML = `<div class="carousel-indicators" id="carousel-indicators">${indicatorsHtml}</div>`;
      }

      // Initialize Carousel Logic
      initCarousel(featuredProjects.length);
    }

    // Render Skills lists
    renderSkillTags(profile.skills.languages, "skills-languages");
    renderSkillTags(profile.skills.engines, "skills-engines");
    renderSkillTags(profile.skills.specialties, "skills-specialties");

    // Render Experience timeline
    const experienceTimeline = document.getElementById("experience-timeline");
    if (experienceTimeline) {
      experienceTimeline.innerHTML = profile.experience
        .map(exp => `
          <div class="history-item">
            <div class="history-marker"></div>
            <div class="history-content">
              <span class="history-date">${exp.date}</span>
              <h3 class="history-role">${exp.role} <span>${trans.atCompany} ${exp.company}</span></h3>
              <p class="history-desc">${exp.description}</p>
            </div>
          </div>
        `).join("");
    }

    // Render Heaven Crawler featured showcase + Projects Grid
    renderHeavenCrawlerFeatured();
    activeFilter = "all";
    renderProjectsGrid("all");
    // Reset filter tab visual state
    document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
    const allTab = document.querySelector(".filter-tab[data-filter='all']");
    if (allTab) allTab.classList.add("active");
    setupFilterTabEvents();

    homeRendered = true;
  }

  let carouselInterval = null;

  function initCarousel(slideCount) {
    if (slideCount <= 1) return;

    let currentIndex = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".carousel-dot");
    const container = document.getElementById("featured-carousel-container");

    function goToSlide(index) {
      slides[currentIndex].classList.remove("active");
      dots[currentIndex].classList.remove("active");

      currentIndex = (index + slideCount) % slideCount;

      slides[currentIndex].classList.add("active");
      dots[currentIndex].classList.add("active");

      const wrapper = document.querySelector(".carousel-slides-wrapper");
      if (wrapper) {
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }

    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(currentIndex - 1);
        resetAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(currentIndex + 1);
        resetAutoPlay();
      });
    }

    dots.forEach(dot => {
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        const index = parseInt(e.target.getAttribute("data-dot-index"), 10);
        goToSlide(index);
        resetAutoPlay();
      });
    });

    // Auto Play
    function startAutoPlay() {
      if (carouselInterval) clearInterval(carouselInterval);
      carouselInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 5000);
    }

    function stopAutoPlay() {
      if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
      }
    }

    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    // Start auto slide
    startAutoPlay();

    // Pause on hover
    if (container) {
      container.addEventListener("mouseenter", stopAutoPlay);
      container.addEventListener("mouseleave", startAutoPlay);
    }
  }

  function renderSkillTags(tags, elementId) {
    const container = document.getElementById(elementId);
    if (container) {
      container.innerHTML = tags.map(tag => `<span class="skill-tag">${tag}</span>`).join("");
    }
  }

  // --- Heaven Crawler Featured Showcase ---
  function renderHeavenCrawlerFeatured() {
    const container = document.getElementById("hc-featured-section");
    if (!container) return;

    const hc = data.projects.find(p => p.id === "heaven-crawler");
    if (!hc || !hc.screenshots.length) return;

    const slides = hc.screenshots;

    function hcMediaTag(s, eager) {
      const isVid = /\.mp4$/i.test(s.url);
      if (isVid) {
        return eager
          ? `<video src="${s.url}" autoplay loop muted playsinline></video>`
          : `<video data-src="${s.url}" loop muted playsinline></video>`;
      }
      return eager
        ? `<img src="${s.url}" alt="${s.caption}">`
        : `<img data-src="${s.url}" alt="${s.caption}">`;
    }

    container.innerHTML = `
      <h2 class="section-title"><i class="fa-solid fa-star"></i> ${trans.titleFeaturedProject}</h2>
      <div class="hc-featured-card">
        <div class="hc-featured-slider-wrap">
          ${slides.map((s, i) => `
            <div class="hc-featured-slide ${i === 0 ? "active" : ""}">
              ${hcMediaTag(s, i === 0)}
            </div>
          `).join("")}
        </div>
        <button class="hc-nav-btn hc-nav-prev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="hc-nav-btn hc-nav-next" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>
        <div class="hc-featured-overlay">
          <div class="hc-featured-content">
            <h3 class="hc-featured-title">${hc.title}</h3>
            <p class="hc-featured-tagline">${hc.tagline}</p>
            <p class="hc-featured-desc">${hc.description.short}</p>
            <div class="hc-featured-actions">
              <a href="#/project/${hc.id}" class="hc-btn-primary"><i class="fa-solid fa-circle-info"></i> ${trans.cardViewDetails}</a>
              ${hc.links[0] ? `<a href="${hc.links[0].url}" target="_blank" rel="noopener" class="hc-btn-secondary">${hc.links[0].label} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
            </div>
          </div>
        </div>
      </div>
      <div class="detail-carousel-dots-wrap hc-dots-wrap">
        ${slides.map((_, i) => `<button class="detail-dot-ext ${i === 0 ? "active" : ""}" data-idx="${i}"></button>`).join("")}
      </div>
    `;

    let currentSlide = 0;
    const slideEls = container.querySelectorAll(".hc-featured-slide");
    const hcDotEls = container.querySelectorAll(".hc-dots-wrap .detail-dot-ext");

    function loadSlide(index) {
      const el = slideEls[index];
      const media = el.querySelector("[data-src]");
      if (!media) return;
      media.src = media.dataset.src;
      delete media.dataset.src;
      if (media.tagName === "VIDEO") { media.load(); media.play().catch(() => {}); }
    }

    function goToSlide(index) {
      slideEls[currentSlide].classList.remove("active");
      if (hcDotEls[currentSlide]) hcDotEls[currentSlide].classList.remove("active");
      currentSlide = (index + slides.length) % slides.length;
      loadSlide(currentSlide);
      loadSlide((currentSlide + 1) % slides.length);
      slideEls[currentSlide].classList.add("active");
      if (hcDotEls[currentSlide]) hcDotEls[currentSlide].classList.add("active");
    }

    hcDotEls.forEach((dot, i) => dot.addEventListener("click", (e) => {
      e.stopPropagation();
      goToSlide(i);
      resetHcTimer();
    }));

    container.querySelector(".hc-nav-prev").addEventListener("click", (e) => {
      e.stopPropagation();
      goToSlide(currentSlide - 1);
      resetHcTimer();
    });

    container.querySelector(".hc-nav-next").addEventListener("click", (e) => {
      e.stopPropagation();
      goToSlide(currentSlide + 1);
      resetHcTimer();
    });

    container.querySelector(".hc-featured-card").addEventListener("click", (e) => {
      if (!e.target.closest("a") && !e.target.closest(".hc-nav-btn")) {
        window.location.hash = `#/project/${hc.id}`;
      }
    });

    let hcTimer = setInterval(() => goToSlide(currentSlide + 1), 4000);
    function resetHcTimer() {
      clearInterval(hcTimer);
      hcTimer = setInterval(() => goToSlide(currentSlide + 1), 4000);
    }
  }

  // --- Projects Filter & Grid Rendering ---
  let activeFilter = "all";

  const PERSONAL_IDS = new Set([
    "heaven-crawler", "chicken-desktop-pet", "ramen-abyss",
    "vivarium-engine", "skate-slash", /* "sprinter-slayer", */
    "slug-slayer", "docs-slayer"
  ]);

  function renderProjectsGrid(filter) {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    let filtered = data.projects;
    if (filter !== "all") {
      filtered = data.projects.filter(p => p.category === filter);
    }

    grid.innerHTML = filtered.map(p => `
      <article class="project-card-item" onclick="window.location.hash='#/project/${p.id}'">
        <div class="project-thumb-wrapper">
          ${mediaEl(p.thumbnail, p.title + " Thumbnail", "")}
          ${PERSONAL_IDS.has(p.id) ? `<span class="project-card-badge-personal">Personal</span>` : ""}
          <span class="project-card-badge">${p.category}</span>
        </div>
        <div class="project-card-info">
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-card-tagline">${p.description.short}</p>
          <div class="project-card-footer">
            ${p.techStack.slice(0, 3).map(tech => `<span class="project-card-tech">${tech}</span>`).join("")}
            ${p.techStack.length > 3 ? `<span class="project-card-tech">+${p.techStack.length - 3}</span>` : ""}
          </div>
        </div>
      </article>
    `).join("");
  }

  let filterTabsInitialized = false;
  function setupFilterTabEvents() {
    if (filterTabsInitialized) return;
    filterTabsInitialized = true;
    const tabs = document.querySelectorAll(".filter-tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", (e) => {
        tabs.forEach(t => t.classList.remove("active"));
        e.target.classList.add("active");

        activeFilter = e.target.getAttribute("data-filter");
        renderProjectsGrid(activeFilter);
      });
    });
  }

  // --- Render Detailed Project Page ---
  let activeProjectScreenshots = [];

  function renderProjectDetail(project) {
    activeProjectScreenshots = project.screenshots || [];

    // Set Project Hero Title (above carousel)
    const heroTitle = document.getElementById("project-hero-title");
    const heroTagline = document.getElementById("project-hero-tagline");
    if (heroTitle) heroTitle.textContent = project.title;
    if (heroTagline) heroTagline.textContent = project.tagline;

    // Set Banner Carousel
    const bannerContainer = document.getElementById("project-banner-container");
    if (bannerContainer) {
      const shots = (project.screenshots && project.screenshots.length > 0)
        ? project.screenshots
        : [{ url: project.banner, caption: project.title }];

      bannerContainer.innerHTML = `
        <div class="detail-carousel-track">
          ${shots.map((s, i) => `
            <div class="detail-carousel-slide ${i === 0 ? "active" : ""}">
              ${mediaEl(s.url, s.caption, "banner-img")}
            </div>
          `).join("")}
        </div>
        ${shots.length > 1 ? `
          <button class="detail-nav-btn detail-nav-prev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>
          <button class="detail-nav-btn detail-nav-next" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>
        ` : ""}
        <div class="banner-overlay">
          <p class="game-tagline">${project.tagline}</p>
        </div>
      `;

      const slideEls = bannerContainer.querySelectorAll(".detail-carousel-slide");
      let curSlide = 0;

      // Render external dots
      const dotsWrap = document.getElementById("detail-carousel-dots-wrap");
      if (dotsWrap) {
        dotsWrap.innerHTML = shots.length > 1
          ? shots.map((_, i) => `<button class="detail-dot-ext ${i === 0 ? "active" : ""}" data-idx="${i}"></button>`).join("")
          : "";
      }
      const dotEls = dotsWrap ? dotsWrap.querySelectorAll(".detail-dot-ext") : [];

      function goDetailSlide(idx) {
        const prevVid = slideEls[curSlide].querySelector("video");
        if (prevVid) prevVid.pause();
        slideEls[curSlide].classList.remove("active");
        if (dotEls[curSlide]) dotEls[curSlide].classList.remove("active");
        curSlide = (idx + shots.length) % shots.length;
        slideEls[curSlide].classList.add("active");
        if (dotEls[curSlide]) dotEls[curSlide].classList.add("active");
        const vid = slideEls[curSlide].querySelector("video");
        if (vid) vid.play().catch(() => {});
      }

      if (shots.length > 1) {
        bannerContainer.querySelector(".detail-nav-prev").addEventListener("click", (e) => { e.stopPropagation(); goDetailSlide(curSlide - 1); });
        bannerContainer.querySelector(".detail-nav-next").addEventListener("click", (e) => { e.stopPropagation(); goDetailSlide(curSlide + 1); });
        dotEls.forEach((dot, i) => dot.addEventListener("click", () => goDetailSlide(i)));
      }

      // Click any slide to open lightbox at that index
      if (project.screenshots && project.screenshots.length > 0) {
        slideEls.forEach((slide, i) => {
          slide.style.cursor = "zoom-in";
          slide.addEventListener("click", (e) => {
            if (!e.target.closest(".detail-nav-btn")) {
              currentImgIndex = i;
              openLightbox();
            }
          });
        });
      }
    }

    // Set Description
    document.getElementById("project-full-desc").textContent = project.description.full;

    // Render Features
    const featuresSection = document.getElementById("project-features-section");
    const featuresList = document.getElementById("project-features-list");
    if (featuresList && featuresSection) {
      if (!project.features || project.features.length === 0) {
        featuresSection.style.display = "none";
      } else {
        featuresSection.style.display = "block";
        featuresList.innerHTML = project.features
          .map(feat => `<li><i class="fa-solid fa-angle-right feature-icon"></i> <span>${feat}</span></li>`)
          .join("");
      }
    }

    // Render Awards
    const awardsSection = document.getElementById("project-awards-section");
    const awardsGrid = document.getElementById("project-awards-grid");
    if (awardsGrid && awardsSection) {
      if (!project.awards || project.awards.length === 0) {
        awardsSection.style.display = "none";
      } else {
        awardsSection.style.display = "block";
        awardsGrid.innerHTML = project.awards.map(a => `
          <div class="project-award-card">
            <i class="fa-solid fa-trophy project-award-icon"></i>
            <div class="project-award-info">
              <span class="project-award-title">${a.title}</span>
              <span class="project-award-event">${a.event} · ${a.year}</span>
            </div>
          </div>
        `).join("");
      }
    }

    // Render History Timeline
    const historySection = document.getElementById("project-history-section");
    const historyList = document.getElementById("project-timeline-list");
    if (historyList && historySection) {
      if (project.id !== "heaven-crawler" || !project.timeline || project.timeline.length === 0) {
        historySection.style.display = "none";
      } else {
        historySection.style.display = "block";
        historyList.innerHTML = project.timeline
          .map(item => `
            <div class="history-item">
              <div class="history-marker"></div>
              <div class="history-content">
                <span class="history-date">${item.date}</span>
                <p class="history-desc">${item.description}</p>
              </div>
            </div>
          `).join("");
      }
    }

    // Render Videos
    const videosSection = document.getElementById("project-videos-section");
    const videosGrid = document.getElementById("project-videos-grid");
    if (videosGrid && videosSection) {
      if (!project.videos || project.videos.length === 0) {
        videosSection.style.display = "none";
      } else {
        videosSection.style.display = "block";
        videosGrid.innerHTML = project.videos
          .map(video => `
            <div class="video-card">
              <h4 class="video-title">${video.title}</h4>
              <div class="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/${video.youtubeId}" 
                  title="${video.title}" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen>
                </iframe>
              </div>
            </div>
          `).join("");
      }
    }

    // Render Screenshots Gallery
    const screenshotsSection = document.getElementById("project-screenshots-section");
    const screenshotsGrid = document.getElementById("project-screenshots-grid");
    if (screenshotsGrid && screenshotsSection) {
      if (!project.screenshots || project.screenshots.length === 0) {
        screenshotsSection.style.display = "none";
      } else {
        screenshotsSection.style.display = "block";
        screenshotsGrid.innerHTML = project.screenshots
          .map((screenshot, idx) => {
            const isVid = /\.mp4$/i.test(screenshot.url);
            const media = isVid
              ? `<video autoplay loop muted playsinline preload="metadata" src="${screenshot.url}"></video>`
              : `<img src="${screenshot.url}" alt="${screenshot.caption}" loading="lazy">`;
            return `
              <div class="screenshot-card" data-index="${idx}">
                <div class="screenshot-img-wrapper">
                  ${media}
                  <div class="screenshot-overlay">
                    <span class="view-btn"><i class="fa-solid fa-expand"></i> View Fullscreen</span>
                  </div>
                </div>
                <p class="screenshot-caption">${screenshot.caption}</p>
              </div>`;
          }).join("");
      }
    }

    // Render Specs Factsheet Sidebar
    const specsList = document.getElementById("project-specs-list");
    if (specsList) {
      let platforms = "Cross-platform";
      if (project.techStack.includes("Windows Win32 API") || project.techStack.includes("C++")) {
        platforms = "PC / Windows";
      } else if (project.techStack.includes("Niantic 8th Wall") || project.techStack.includes("WebXR")) {
        platforms = "Web AR (Mobile / Desktop)";
      } else if (project.techStack.includes("React") || project.techStack.includes("HTML5")) {
        platforms = "Web Browser";
      }

      const fsItems = [
        { label: trans.labelRole, value: project.role },
        { label: trans.labelCategory, value: project.category },
        { label: trans.labelPlatforms, value: platforms },
        { label: trans.labelTech, value: project.techStack.join(", ") }
      ];

      specsList.innerHTML = fsItems
        .map(item => `
          <div class="factsheet-item">
            <span class="factsheet-label">${item.label}</span>
            <span class="factsheet-value">${item.value}</span>
          </div>
        `).join("");
    }

    // Render Action Link Buttons
    const linksCard = document.getElementById("project-links-card");
    const linksList = document.getElementById("project-links-list");
    if (linksList && linksCard) {
      if (!project.links || project.links.length === 0) {
        linksCard.style.display = "none";
      } else {
        linksCard.style.display = "block";
        linksList.innerHTML = project.links
          .map(link => `<a href="${link.url}" target="_blank" rel="noopener" class="btn-project-action">${link.label}</a>`)
          .join("");
      }
    }
  }

  // --- Screenshot Lightbox / Modal ---
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("modal-img");
  const modalVideo = document.getElementById("modal-video");
  const modalCaption = document.getElementById("modal-caption");
  const modalDownload = document.getElementById("modal-download");
  const modalPrev = document.getElementById("modal-prev");
  const modalNext = document.getElementById("modal-next");
  const modalClose = document.getElementById("modal-close");
  const screenshotsGrid = document.getElementById("project-screenshots-grid");

  let currentImgIndex = 0;

  if (modal && screenshotsGrid) {
    // Open Modal on card click
    screenshotsGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".screenshot-card");
      if (!card) return;

      currentImgIndex = parseInt(card.getAttribute("data-index"), 10);
      openLightbox();
    });

    // Close Modal actions
    modalClose.addEventListener("click", closeLightbox);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeLightbox();
    });

    // Navigation buttons
    modalPrev.addEventListener("click", (e) => {
      e.stopPropagation();
      showPrevImage();
    });
    modalNext.addEventListener("click", (e) => {
      e.stopPropagation();
      showNextImage();
    });

    // Keyboard controls
    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrevImage();
      if (e.key === "ArrowRight") showNextImage();
    });
  }

  function openLightbox() {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable background page scroll
    updateLightboxImage();
  }

  function closeLightbox() {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Enable page scroll
  }

  function updateLightboxImage() {
    if (activeProjectScreenshots.length === 0) return;
    const screenshot = activeProjectScreenshots[currentImgIndex];
    const url = screenshot.url;
    const isVid = /\.mp4$/i.test(url);
    if (isVid) {
      modalImg.style.display = "none";
      modalVideo.style.display = "block";
      modalVideo.src = url;
      modalVideo.load();
      modalVideo.play().catch(() => {});
    } else {
      modalVideo.style.display = "none";
      modalVideo.src = "";
      modalImg.style.display = "block";
      modalImg.src = url;
    }
    modalCaption.textContent = screenshot.caption;
    modalDownload.href = url;
    modalDownload.setAttribute("download", `screenshot_${currentImgIndex + 1}`);
  }

  function showPrevImage() {
    if (activeProjectScreenshots.length === 0) return;
    currentImgIndex = (currentImgIndex - 1 + activeProjectScreenshots.length) % activeProjectScreenshots.length;
    updateLightboxImage();
  }

  function showNextImage() {
    if (activeProjectScreenshots.length === 0) return;
    currentImgIndex = (currentImgIndex + 1) % activeProjectScreenshots.length;
    updateLightboxImage();
  }

  // --- Language Selector Dropdown ---
  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");

  if (langBtn && langMenu) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenu.classList.toggle("open");
    });

    document.addEventListener("click", () => langMenu.classList.remove("open"));

    langMenu.querySelectorAll(".lang-option").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const lang = btn.getAttribute("data-lang");
        langMenu.classList.remove("open");
        if (lang !== currentLanguage) setLanguage(lang);
      });
    });
  }
});
