document.addEventListener("DOMContentLoaded", () => {
  // Ensure PORTFOLIO_DATA is loaded
  if (typeof PORTFOLIO_DATA === "undefined") {
    console.error("PORTFOLIO_DATA is not defined. Make sure portfolio-data.js is loaded first.");
    return;
  }

  const data = PORTFOLIO_DATA;

  // --- UI Translation Dictionaries ---
  const UI_TRANSLATIONS = {
    en: {
      navHome: "Home",
      navAbout: "About",
      navExperience: "Experience",
      navProjects: "Projects",
      titleAchievements: "Key Achievements",
      titleAbout: "About Me",
      languagesTitle: "Languages",
      enginesTitle: "Engines & Tools",
      specialtiesTitle: "Specialties",
      titleExperience: "Professional Experience",
      titleProjects: "Projects",
      tabAll: "All",
      tabGames: "Games",
      tabTools: "Tools & Engines",
      btnBack: "Back to Portfolio",
      titleProjAbout: "About the Project",
      titleProjFeatures: "Key Features",
      titleProjHistory: "Development History",
      titleProjVideos: "Videos & Trailers",
      titleProjScreenshots: "Screenshots & Gameplay Gifs",
      projSpecsTitle: "Project Specs",
      projLinksTitle: "Links & Releases",
      
      // Factsheet labels
      labelRole: "My Role",
      labelPlatforms: "Platforms",
      labelTech: "Tech Stack & Tools",
      labelCategory: "Category"
    }
  };

  const currentLanguage = "en"; // Default and initial building language
  const trans = UI_TRANSLATIONS[currentLanguage];

  // --- Theme Toggle Manager ---
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("portfolio_theme") || "dark";

  // Initialize theme on document root
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  // --- Background Image Slideshow ---
  // Edit these arrays to change which images/gifs cycle in each theme.
  const bgImagesDark = [
    "images/LAGS2026_Intro_02.gif",
    "images/CameraChange_01.gif",
    "images/RamenAbyss/ramen_06.gif",
    "images/RamenAbyss/ramen_11.gif",
    "images/LAGS2026_GorillaCrawlers_01.gif",
    "images/RoomChanges_03.gif",
    "images/MechaKO/mechako_03.gif",
    "images/Chrimp/chricken_09.gif",
    "images/MechaKO/mechako_01.gif",
    "images/Chrimp/chricken_11.gif",
    "images/Chrimp/chricken_13.gif",
  ];
  const bgImagesLight = [
    "images/LAGS2026_Intro_02.gif",
    "images/CameraChange_01.gif",
    "images/RamenAbyss/ramen_06.gif",
    "images/RamenAbyss/ramen_11.gif",
    "images/LAGS2026_GorillaCrawlers_01.gif",
    "images/RoomChanges_03.gif",
    "images/MechaKO/mechako_03.gif",
    "images/Chrimp/chricken_09.gif",
    "images/MechaKO/mechako_01.gif",
    "images/Chrimp/chricken_11.gif",
    "images/Chrimp/chricken_13.gif",
  ];

  // Two layers: B is inserted before A in the DOM so A is always on top at the same z-index.
  // We alternate fading A/B to create a smooth crossfade without touching z-index.
  const bgLayerA = document.querySelector(".bg-image-overlay");
  const bgLayerB = document.createElement("div");
  bgLayerB.className = "bg-image-overlay";
  bgLayerA.parentNode.insertBefore(bgLayerB, bgLayerA);

  let bgIndex = 0;
  let bgAVisible = true;

  function getCurrentBgList() {
    return document.documentElement.getAttribute("data-theme") === "light"
      ? bgImagesLight : bgImagesDark;
  }

  // Set first image immediately
  bgLayerA.style.backgroundImage = `url(${getCurrentBgList()[0]})`;
  bgLayerA.style.opacity = "1";
  bgLayerB.style.opacity = "0";

  // Preload all images so transitions are instant
  [...bgImagesDark, ...bgImagesLight].forEach(src => { new Image().src = src; });

  function transitionBg(reset) {
    const images = getCurrentBgList();
    bgIndex = reset ? 0 : (bgIndex + 1) % images.length;
    const nextUrl = `url(${images[bgIndex]})`;

    if (bgAVisible) {
      // A is on top and visible — fade it out, reveal B underneath
      bgLayerB.style.backgroundImage = nextUrl;
      bgLayerA.style.opacity = "0";
      bgLayerB.style.opacity = "1";
    } else {
      // B is showing through — fade A back in with new image (A is on top)
      bgLayerA.style.backgroundImage = nextUrl;
      bgLayerA.style.opacity = "1";
      bgLayerB.style.opacity = "0";
    }
    bgAVisible = !bgAVisible;
  }

  let bgTimer = setInterval(transitionBg, 3000);

  function resetBgSlideshow() {
    clearInterval(bgTimer);
    transitionBg(true);
    bgTimer = setInterval(transitionBg, 3000);
  }

  function setBgImage(url) {
    clearInterval(bgTimer);
    const nextUrl = `url(${url})`;
    if (bgAVisible) {
      bgLayerB.style.backgroundImage = nextUrl;
      bgLayerA.style.opacity = "0";
      bgLayerB.style.opacity = "1";
    } else {
      bgLayerA.style.backgroundImage = nextUrl;
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

  window.addEventListener("hashchange", handleRoute);
  window.addEventListener("load", handleRoute);

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
    if (avatarEl) avatarEl.src = profile.avatar;
    
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
      galleryEl.innerHTML = profile.galleryImages.map(url => `
        <div class="mick-photo">
          <img src="${url}" alt="Mick Ordaz" loading="lazy">
        </div>
      `).join("");
    }

    // Render Achievement Spotlight Card
    const achBannerEl = document.getElementById("achievement-banner-wrap");
    if (achBannerEl && profile.achievementBanner) {
      const s = profile.achievementSpotlight || {};
      achBannerEl.innerHTML = `
        <div class="ach-spotlight">
          <div class="ach-spotlight-info">
            <span class="ach-spotlight-badge">🏆 ${s.badge || "Grand Prize"}</span>
            <h3 class="ach-spotlight-event">${(s.event || "").replace("\n", "<br>")}</h3>
            <div class="ach-spotlight-sub">${s.subtitle || ""} &middot; ${s.year || ""}</div>
          </div>
          <div class="ach-spotlight-photo">
            <div class="mick-photo ach-photo-card">
              <img src="${profile.achievementBanner}" alt="Banamex Supernova award photo">
            </div>
          </div>
        </div>
      `;
    }

    // Render Achievements (New Card Layout)
    const achievementsList = document.getElementById("achievements-list");
    if (achievementsList) {
      achievementsList.innerHTML = profile.achievements
        .map(ach => `
          <li>
            <div class="achievement-icon">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div class="achievement-text">
              <strong>${ach.title}</strong>
              <p>${ach.description}</p>
            </div>
          </li>
        `).join("");
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
            <img src="${proj.banner}" alt="${proj.title} Banner" class="carousel-slide-img">
            <div class="carousel-slide-overlay">
              <span class="carousel-slide-tagline">${proj.category}</span>
              <h3 class="carousel-slide-title">${proj.title}</h3>
              <p class="carousel-slide-desc">${proj.description.short}</p>
              <div class="carousel-btn-group">
                <a href="#/project/${proj.id}" class="carousel-slide-btn"><i class="fa-solid fa-circle-info"></i> View Details</a>
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
      const indicatorsContainerHtml = `<div class="carousel-indicators" id="carousel-indicators">${indicatorsHtml}</div>`;

      carouselContainer.innerHTML = slidesHtml + prevBtnHtml + nextBtnHtml + indicatorsContainerHtml;

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
              <h3 class="history-role">${exp.role} <span>at ${exp.company}</span></h3>
              <p class="history-desc">${exp.description}</p>
            </div>
          </div>
        `).join("");
    }

    // Render Heaven Crawler featured showcase + Projects Grid
    renderHeavenCrawlerFeatured();
    renderProjectsGrid("all");
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

    // Slides use data-src — only the active slide gets a real src to avoid
    // all GIFs animating simultaneously. Thumbnails are dot indicators, not images.
    container.innerHTML = `
      <div class="hc-featured-card">
        <div class="hc-featured-slider-wrap">
          ${slides.map((s, i) => `
            <div class="hc-featured-slide ${i === 0 ? "active" : ""}">
              <img ${i === 0 ? `src="${s.url}"` : `data-src="${s.url}"`} alt="${s.caption}">
            </div>
          `).join("")}
        </div>
        <div class="hc-featured-overlay">
          <div class="hc-featured-content">
            <span class="hc-featured-badge"><i class="fa-solid fa-star"></i> Featured Project</span>
            <h3 class="hc-featured-title">${hc.title}</h3>
            <p class="hc-featured-tagline">${hc.tagline}</p>
            <p class="hc-featured-desc">${hc.description.short}</p>
            <div class="hc-featured-actions">
              <a href="#/project/${hc.id}" class="hc-btn-primary"><i class="fa-solid fa-circle-info"></i> View Details</a>
              ${hc.links[0] ? `<a href="${hc.links[0].url}" target="_blank" rel="noopener" class="hc-btn-secondary">${hc.links[0].label} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
            </div>
          </div>
          <div class="hc-featured-indicators">
            ${slides.map((s, i) => `
              <button class="hc-indicator ${i === 0 ? "active" : ""}" data-hc-index="${i}" title="${s.caption}"></button>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    let currentSlide = 0;
    const slideEls = container.querySelectorAll(".hc-featured-slide");
    const dotEls   = container.querySelectorAll(".hc-indicator");

    function loadSlide(index) {
      const img = slideEls[index].querySelector("img");
      if (img.dataset.src) {
        img.src = img.dataset.src;
        delete img.dataset.src;
      }
    }

    function goToSlide(index) {
      slideEls[currentSlide].classList.remove("active");
      dotEls[currentSlide].classList.remove("active");
      currentSlide = (index + slides.length) % slides.length;
      loadSlide(currentSlide);
      // Preload next so the transition is seamless
      loadSlide((currentSlide + 1) % slides.length);
      slideEls[currentSlide].classList.add("active");
      dotEls[currentSlide].classList.add("active");
    }

    dotEls.forEach((dot, i) => {
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(i);
        resetHcTimer();
      });
    });

    container.querySelector(".hc-featured-card").addEventListener("click", (e) => {
      if (!e.target.closest("a") && !e.target.closest(".hc-indicator")) {
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
          <img src="${p.thumbnail}" alt="${p.title} Thumbnail" loading="lazy">
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

  function setupFilterTabEvents() {
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

    // Set Banner Header
    const bannerContainer = document.getElementById("project-banner-container");
    if (bannerContainer) {
      bannerContainer.innerHTML = `
        <img src="${project.banner}" alt="${project.title} Banner" class="banner-img">
        <div class="banner-overlay">
          <h1 class="game-title">${project.title}</h1>
          <p class="game-tagline">${project.tagline}</p>
        </div>
      `;
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
          .map((screenshot, idx) => `
            <div class="screenshot-card" data-index="${idx}">
              <div class="screenshot-img-wrapper">
                <img src="${screenshot.url}" alt="${screenshot.caption}" loading="lazy">
                <div class="screenshot-overlay">
                  <span class="view-btn"><i class="fa-solid fa-expand"></i> View Fullscreen</span>
                </div>
              </div>
              <p class="screenshot-caption">${screenshot.caption}</p>
            </div>
          `).join("");
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
    modalImg.src = screenshot.url;
    modalCaption.textContent = screenshot.caption;
    modalDownload.href = screenshot.url;
    modalDownload.setAttribute("download", `project_screenshot_${currentImgIndex + 1}.jpg`);
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
});
