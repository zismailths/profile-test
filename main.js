/* ==========================================================================
   MAIN PORTFOLIO INTERACTIVITY - REWTERZ CYBER PROFESSIONAL THEME
   ========================================================================== */

// 1. DATA DICTIONARY FOR DEVELOPER STUDENT RESUME
const DEVELOPER_DATA = {
  role: "CS Undergraduate",
  statusText: "DEV_ACTIVE",
  summary: "A motivated Computer Science student at FAST NUCES specializing in software engineering, algorithms, and full-stack web development. High academic achiever with a passion for building clean, efficient, and well-coded applications.",
  badges: ["React / Node.js", "Python / C++", "Database Systems", "Git & CI/CD"],
  metrics: [
    { num: "3.85/4.0", label: "CGPA (FAST-NUCES)" },
    { num: "6/8", label: "Semesters Completed" },
    { num: "12+", label: "Academic Projects" },
    { num: "Dean's List", label: "All Semesters" }
  ],
  biography: [
    "Hello! I am Huzaifa Shahbaz, a Computer Science student at FAST NUCES specializing in software engineering and web development. I focus on creating responsive, intuitive web applications and writing clean, structured code.",
    "Throughout my university semesters, I have built a solid foundation in core computer science areas including Data Structures, Design & Analysis of Algorithms, Object-Oriented Programming (OOP), and Database Management Systems (DBMS). I enjoy solving logical problems and optimizing codebases for speed and readability."
  ],
  skills: {
    web: [
      { name: "React.js", iconPath: "assets/icons/web/react.png", desc: "Component-based declarative library for building interactive user interfaces with Virtual DOM state rendering." },
      { name: "Node.js", iconPath: "assets/icons/web/node.png", desc: "Scalable asynchronous JavaScript backend runtime executing events on a single-threaded system loop." },
      { name: "Next.js", iconPath: "assets/icons/web/next.png", desc: "Full-stack framework offering Server-Side Rendering (SSR), API routing, and optimized SEO structure." },
      { name: "Tailwind CSS", iconPath: "assets/icons/web/tailwindcss.png", desc: "Utility-first CSS tool allowing developers to compose UI styles directly in DOM element class attributes." },
      { name: "TypeScript", iconPath: "assets/icons/web/typescript.png", desc: "Statically typed programming language compiling to clean JavaScript for robust scale application testing." },
      { name: "JavaScript", iconPath: "assets/icons/web/js.png", desc: "Core web systems language powering reactive frontend behaviors and full-stack backend integrations." },
      { name: "HTML5", iconPath: "assets/icons/web/html.png", desc: "Fundamental markup language defining standard viewport layouts, semantic structure, and responsive grids." },
      { name: "CSS3", iconPath: "assets/icons/web/css3.png", desc: "Cascading styles for animations, flexbox/grid layouts, custom properties, and responsive design systems." },
      { name: "Bootstrap", iconPath: "assets/icons/web/bootstrap.png", desc: "Responsive layout grid framework providing modular styles and pre-coded UI container templates." },
      { name: "VS Code", iconPath: "assets/icons/web/vscode.png", desc: "Lightweight extendable source code editor supporting custom plugins, debugging, and terminal integrations." },
      { name: "Git VCS", iconPath: "assets/icons/web/git.png", desc: "Distributed version control managing multi-developer repository tracking, commits, and branching workflows." }
    ],
    software: [
      { name: "Python", iconPath: "assets/icons/software/python.png", desc: "Multi-paradigm scripting language preferred for algorithmic modeling, automated pipelines, and backend routing." },
      { name: "C / C++", iconPath: "assets/icons/software/c++.png", desc: "System-level compiler languages emphasizing pointers, memory allocation, and computational runtime speed." },
      { name: "C# Language", iconPath: "assets/icons/software/csharp.png", desc: "Object-oriented Microsoft programming language for enterprise software and game development workflows." },
      { name: "Java", iconPath: "assets/icons/software/java.png", desc: "Class-based secure language providing cross-platform virtual machine application execution." },
      { name: "MySQL", iconPath: "assets/icons/software/mysql.png", desc: "Relational database querying engine managing data indexing, schemas, integrity, and foreign key relations." },
      { name: "Git", iconPath: "assets/icons/software/git.png", desc: "Distributed version control system managing multi-developer repository tracking, commits, and branching workflows." },
      { name: "GitHub", iconPath: "assets/icons/software/github.png", desc: "Cloud repository service managing remote branches, pull request reviews, and team issue tracking." },
      { name: "Visual Studio", iconPath: "assets/icons/software/visualstudio.png", desc: "Comprehensive Microsoft integrated development environment for compiling heavy desktop applications." },
      { name: "IntelliJ IDEA", iconPath: "assets/icons/software/ij.png", desc: "Premium Java IDE offering advanced code inspections, refactoring, and build tools." },
      { name: "Postman", iconPath: "assets/icons/software/postman.png", desc: "API lifecycle dashboard verifying microservice schemas and testing network responses." },
      { name: "Docker", iconPath: "assets/icons/software/docker.png", desc: "Container virtualization tool packaging software and environmental variables into standard image layers." }
    ],
    cloud: [
      { name: "AWS", iconPath: "assets/icons/cloud/aws.png", desc: "Amazon Web Services cloud platform managing serverless compute, storage containers, and security policies." },
      { name: "MS Azure", iconPath: "assets/icons/cloud/azure.png", desc: "Microsoft public cloud network providing virtual machine instances, active directory, and container services." },
      { name: "Google Cloud", iconPath: "assets/icons/cloud/gcloud.png", desc: "Google Cloud computing services managing analytical databases, container scaling, and APIs." },
      { name: "Docker", iconPath: "assets/icons/cloud/docker.png", desc: "Container virtualization tool packaging software and environmental variables into standard image layers." },
      { name: "Kubernetes", iconPath: "assets/icons/cloud/k8s.png", desc: "Container orchestrator automating cluster deployment, replication management, and system scaling." },
      { name: "Linux", iconPath: "assets/icons/cloud/linux.png", desc: "Open-source OS kernel powering web server environments and shell script automated pipelines." },
      { name: "Terraform", iconPath: "assets/icons/cloud/terraform.png", desc: "Infrastructure as Code tool to provision cloud resources using declarative configuration files." },
      { name: "Jenkins CI", iconPath: "assets/icons/cloud/jenkins.png", desc: "Continuous integration automation server orchestrating build triggers and test suite deployments." },
      { name: "Ansible", iconPath: "assets/icons/cloud/ansible.png", desc: "Automation configuration management tool for remote server setup and modular script execution." },
      { name: "Grafana", iconPath: "assets/icons/cloud/grafana.png", desc: "Open-source observability platform for visualizing metrics, logs, and distributed traces in dashboards." },
      { name: "Prometheus", iconPath: "assets/icons/cloud/prometheus.png", desc: "Time-series monitoring system scraping and storing metrics from containerized and cloud services." },
      { name: "Postman", iconPath: "assets/icons/cloud/postman.png", desc: "API testing client supporting environment parameters, automated mock responses, and header assertions." }
    ]
  },
  projects: [
    {
      title: "AlgoViz (Algorithm Visualizer)",
      category: "webdev",
      tags: ["React.js", "CSS Grid", "Algorithms"],
      desc: "An interactive web app that visualizes sorting algorithms (Merge, Quick, Bubble) and pathfinding algorithms (Dijkstra, A*) in real-time, helping students grasp algorithmic complexities visually.",
      github: "https://github.com/huzaifashahbaz",
      demo: "#"
    },
    {
      title: "DevFlow (Q&A Platform)",
      category: "webdev",
      tags: ["Next.js", "NestJS", "PostgreSQL", "Markdown"],
      desc: "A developer forum featuring markdown post writing, tag categorization, community voting systems, user profile reputations, and an advanced search functionality.",
      github: "https://github.com/huzaifashahbaz",
      demo: "#"
    },
    {
      title: "CampusCart (Student Marketplace)",
      category: "systems",
      tags: ["Node.js", "Express", "PostgreSQL", "CSS"],
      desc: "A local e-commerce platform for university student peer-to-peer trading. Students can buy or sell academic textbooks, lab equipment, and handwritten lecture notes securely.",
      github: "https://github.com/huzaifashahbaz",
      demo: "#"
    },
    {
      title: "GradeTracker (Academic GPA Dashboard)",
      category: "systems",
      tags: ["Python", "SQLite", "Matplotlib"],
      desc: "A desktop dashboard application to track course marks, predict end-of-semester GPAs based on historical study logs, and visualize progress trends through graphs.",
      github: "https://github.com/huzaifashahbaz",
      demo: "#"
    },
    {
      title: "TaskFlow (Collaborative Kanban Board)",
      category: "webdev",
      tags: ["React.js", "WebSockets", "MongoDB", "Node.js"],
      desc: "A real-time workspace for university group projects allowing teammates to assign tasks, drag cards across columns, and chat in real-time with WebSockets integration.",
      github: "https://github.com/huzaifashahbaz",
      demo: "#"
    }
  ],
  timeline: [
    {
      hash: "c8f9a1b",
      branch: "main",
      msg: "feat: compile advanced courses & launch final year project",
      date: "Fall 2025 - Present (Senior Year)",
      org: "FAST NUCES, Karachi",
      desc: "Studying Artificial Intelligence, Distributed Systems, and Software Project Management. Developing a Smart Campus Dashboard as a Final Year Project to optimize class schedules."
    },
    {
      hash: "a4d7c2e",
      branch: "feature/full-stack",
      msg: "feat: merge web engineering and database systems modules",
      date: "Fall 2024 - Spring 2025 (Junior Year)",
      org: "FAST NUCES, Karachi",
      desc: "Explored Design & Analysis of Algorithms, Database Systems, and Web Engineering. Achieved consecutive placements on the Dean's List for academic excellence."
    },
    {
      hash: "b5e9f3a",
      branch: "feature/algorithms",
      msg: "feat: deploy custom CLI database engine & data structures core",
      date: "Fall 2023 - Spring 2024 (Sophomore Year)",
      org: "FAST NUCES, Karachi",
      desc: "Studied Data Structures, Digital Logic Design, and Computer Architecture. Engineered a custom CLI database query engine in C++ and joined the computer society."
    },
    {
      hash: "8a2c1d0",
      branch: "main",
      msg: "initial commit: programming fundamentals & math core",
      date: "Fall 2022 - Spring 2023 (Freshman Year)",
      org: "FAST NUCES, Karachi",
      desc: "Laid groundwork in Programming Fundamentals (C++), Calculus, and English Composition. Coded simple utility command-line scripts and games."
    }
  ],
  certs: [
    {
      title: "AWS Cloud",
      desc: "AWS Academy Graduate with Cloud Practitioner skills.",
      gradStart: "#FF1744",
      gradEnd: "#FF8A80",
      glowColor: "rgba(255, 23, 68, 0.25)",
      svgIcon: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>'
    },
    {
      title: "Dean's List",
      desc: "Consecutive placements on the Academic Honor List.",
      gradStart: "#FF8A80",
      gradEnd: "#D500F9",
      glowColor: "rgba(213, 0, 249, 0.25)",
      svgIcon: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>'
    },
    {
      title: "Full Stack",
      desc: "Certified in Node.js, Express, React, and databases.",
      gradStart: "#D500F9",
      gradEnd: "#3D5AFE",
      glowColor: "rgba(61, 90, 254, 0.25)",
      svgIcon: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>'
    },
    {
      title: "HackerRank Gold",
      desc: "Gold Badge holder in Python and Algorithms core.",
      gradStart: "#3D5AFE",
      gradEnd: "#2979FF",
      glowColor: "rgba(41, 121, 255, 0.25)",
      svgIcon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>'
    },
    {
      title: "ACM Coders",
      desc: "Speed Programming competition winner at FAST.",
      gradStart: "#2979FF",
      gradEnd: "#00E5FF",
      glowColor: "rgba(0, 229, 255, 0.25)",
      svgIcon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>'
    },
    {
      title: "Open Source",
      desc: "Contributed core PRs to public repos and CLI utilities.",
      gradStart: "#00E5FF",
      gradEnd: "#1DE9B6",
      glowColor: "rgba(29, 233, 182, 0.25)",
      svgIcon: '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>'
    },
    {
      title: "Cyber Security",
      desc: "Active head of cybersecurity society projects.",
      gradStart: "#1DE9B6",
      gradEnd: "#00E676",
      glowColor: "rgba(0, 230, 118, 0.25)",
      svgIcon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>'
    }
  ]
};

// 2. DOM EVENT CONTROLLER
document.addEventListener('DOMContentLoaded', () => {
  initTimeAndTelemetry();
  initMobileMenu();
  initCanvasGrid();
  initContactForm();

  // Load Developer Profile data
  loadDeveloperProfile();

  // Initialize Terminal Shell
  initTerminal();

  // Initialize 3D Certificate Carousel
  initCertCarousel();

  // Initialize Theme Toggle
  initThemeToggle();

  // Initialize Scroll Observer after all dynamic content is populated
  initScrollObserver();
});

/* ==========================================================================
   TIME & TELEMETRY CLOCK
   ========================================================================== */
function initTimeAndTelemetry() {
  const timeSpan = document.getElementById('current-time');

  function updateClock() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const pktDate = new Date(utc + (3600000 * 5));

    let hours = pktDate.getHours();
    const minutes = String(pktDate.getMinutes()).padStart(2, '0');
    const seconds = String(pktDate.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    const hoursStr = String(hours).padStart(2, '0');

    const timeStr = `${hoursStr}:${minutes}:${seconds} ${ampm} PKT`;
    if (timeSpan) timeSpan.textContent = timeStr;
  }
  setInterval(updateClock, 1000);
  updateClock();
}

/* ==========================================================================
   MOBILE NAV MENU
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  // Create overlay element for mobile nav backdrop
  let navOverlay = document.querySelector('.nav-overlay');
  if (!navOverlay) {
    navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
  }

  function openMenu() {
    navLinks.classList.add('open');
    navOverlay.classList.add('visible');
    menuToggle.innerHTML = '&#10005;'; // X icon
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navLinks.classList.remove('open');
    navOverlay.classList.remove('visible');
    menuToggle.innerHTML = '&#9776;'; // Hamburger icon
    document.body.style.overflow = '';
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking overlay
    navOverlay.addEventListener('click', closeMenu);

    // Close menu when clicking a nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

/* ==========================================================================
   PARTICLES CANVAS NODE GRID
   ========================================================================== */
function initCanvasGrid() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const mouse = { x: null, y: null, radius: 220 };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  document.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  const hexRadius = 45; // Size of each hexagon
  const hexWidth = hexRadius * Math.sqrt(3);
  const hexHeight = hexRadius * 1.5;

  const symbolsList = ["JS", "PY", "C++", "TS", "SQL", "GIT", "GO", "RUST", "HTML", "CSS", "K8s", "Docker", "React", "Node"];

  function drawHexagon(x, y, r, glowVal, c, rIdx) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i + Math.PI / 6;
      const px = x + r * Math.cos(angle);
      const py = y + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();

    // 1. Draw solid face — adapt fill for light/dark mode
    const isColorful = document.body.classList.contains('theme-colorful');
    // Light mode: warm honey-white hexagon faces; Dark mode: deep obsidian
    ctx.fillStyle = isColorful
      ? `rgba(245, 248, 252, ${0.65 + glowVal * 0.2})`
      : `rgba(18, 20, 26, ${0.85 + glowVal * 0.1})`;
    ctx.fill();

    // 2. Draw border
    const alpha = 0.08 + glowVal * 0.55;
    let strokeColor, shadowColor;

    if (isColorful) {
      // Azure blue strokes — visible against the light off-white background
      strokeColor = `rgba(29, 114, 212, ${alpha * 0.55})`;
      shadowColor = `rgba(29, 114, 212, 0.2)`;
    } else {
      strokeColor = `rgba(0, 240, 255, ${alpha})`;
      shadowColor = 'rgba(0, 240, 255, 0.4)';
    }

    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1 + glowVal * 1.5;

    // Add shadow glow for highly active borders
    if (glowVal > 0.3) {
      ctx.shadowColor = shadowColor;
      ctx.shadowBlur = glowVal * 8;
    } else {
      ctx.shadowBlur = 0;
    }

    ctx.stroke();
    ctx.shadowBlur = 0; // reset

    // 3. Draw programming language symbol in center
    const symIdx = Math.abs((rIdx * 3 + c * 5)) % symbolsList.length;
    const symbol = symbolsList[symIdx];

    ctx.font = "10px 'Fira Code', Courier, monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // Light mode: azure-blue tinted text; Dark mode: cyan text
    ctx.fillStyle = isColorful
      ? `rgba(29, 114, 212, ${0.12 + glowVal * 0.6})`
      : `rgba(0, 240, 255, ${0.08 + glowVal * 0.65})`;
    ctx.fillText(symbol, x, y);
  }

  let time = 0;
  function animate() {
    time += 0.015;
    ctx.clearRect(0, 0, width, height);

    // Calculate grid rows and cols to fill screen plus padding
    const cols = Math.ceil(width / hexWidth) + 2;
    const rows = Math.ceil(height / hexHeight) + 2;

    for (let r = -1; r < rows; r++) {
      for (let c = -1; c < cols; c++) {
        // Position of hexagon center
        let cx = c * hexWidth;
        const cy = r * hexHeight;

        // Shift odd rows
        if (r % 2 !== 0) {
          cx += hexWidth / 2;
        }

        // Calculate distance to mouse
        let dist = mouse.radius;
        if (mouse.x !== null && mouse.y !== null) {
          dist = Math.hypot(cx - mouse.x, cy - mouse.y);
        }

        // Calculate wave breathing effect based on coordinates
        const breathe = Math.sin(time + (cx * 0.003) + (cy * 0.003)) * 0.5 + 0.5;

        // Calculate local glow level
        let glowVal = 0;
        if (dist < mouse.radius) {
          // mouse proximity override
          glowVal = (1 - dist / mouse.radius);
          glowVal = Math.pow(glowVal, 1.8); // make peak steeper
        }

        // combine with breathing background waves
        glowVal = Math.max(glowVal, breathe * 0.08);

        drawHexagon(cx, cy, hexRadius - 2, glowVal, c, r); // leaves a small 2px gap between cells
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   MATRIX DECRYPT / SCRAMBLE EFFECT
   ========================================================================== */
function runMatrixDecrypt(element) {
  const target = element.dataset.value;
  if (!target) return;
  element.innerText = '';
  element.classList.add('typing-cursor');

  let currentText = '';
  let i = 0;

  function typeNextChar() {
    if (i < target.length) {
      const targetChar = target[i];
      let scrambleCount = 0;
      const chars = '01<>/#$@%&{}[];+=-*?';

      const scrambleInterval = setInterval(() => {
        if (scrambleCount < 2) {
          element.innerText = currentText + chars[Math.floor(Math.random() * chars.length)];
          scrambleCount++;
        } else {
          clearInterval(scrambleInterval);
          currentText += targetChar;
          element.innerText = currentText;
          i++;
          setTimeout(typeNextChar, Math.random() * 30 + 15);
        }
      }, 15);
    } else {
      setTimeout(() => {
        element.classList.remove('typing-cursor');
      }, 800);
    }
  }

  typeNextChar();
}

// Function to trigger scrambler on visible element markers
function initMatrixDecrypt() {
  const decryptElements = document.querySelectorAll('.matrix-decrypt');
  decryptElements.forEach(el => {
    if (!el.dataset.value) {
      el.dataset.value = el.innerText;
    }
    runMatrixDecrypt(el);
  });
}

/* ==========================================================================
   SCROLL OBSERVATION & ACTIVE STATE
   ========================================================================== */
function initScrollObserver() {
  const reveals = document.querySelectorAll('.reveal, .info-item');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => revealObserver.observe(el));

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   DEVELOPER PROFILE RENDERER
   ========================================================================== */
function loadDeveloperProfile() {
  const data = DEVELOPER_DATA;

  // 1. Telemetry indicator text
  const statusLightText = document.getElementById('protocol-status-text');
  if (statusLightText) {
    statusLightText.textContent = data.statusText;
  }

  // 2. Update Hero Title (Role) & Bio
  const dynamicRole = document.getElementById('dynamic-role');
  if (dynamicRole) {
    dynamicRole.textContent = data.role;
    dynamicRole.dataset.value = data.role;
  }

  const dynamicSummary = document.getElementById('dynamic-summary');
  if (dynamicSummary) {
    dynamicSummary.textContent = data.summary;
  }

  // 3. Update badges
  const badgesContainer = document.getElementById('dynamic-badges');
  if (badgesContainer) {
    badgesContainer.innerHTML = data.badges
      .map(b => `<span class="hero-badge">${b}</span>`)
      .join('');
  }

  // 4. Update Biography
  const bioContainer = document.getElementById('about-biography');
  if (bioContainer) {
    bioContainer.innerHTML = data.biography
      .map(para => `<p>${para}</p>`)
      .join('');
  }

  // 5. Update Metrics
  const metricsContainer = document.getElementById('about-metrics');
  if (metricsContainer) {
    metricsContainer.innerHTML = data.metrics
      .map(m => `
        <div class="metric-card">
          <div class="metric-num">${m.num}</div>
          <div class="metric-label">${m.label}</div>
        </div>
      `).join('');
  }

  // 6. U-Shaped Semicircle Skills Area logic (Invisible Floating Tube)
  const skillsTrainItems = document.getElementById('skills-train-items');
  const skillsToggleBtns = document.querySelectorAll('.skills-toggle-btn');
  const detailIconWrap = document.getElementById('detail-icon-wrap');
  const detailTitle = document.getElementById('detail-title');
  const detailDesc = document.getElementById('detail-desc');

  // Semicircle coordinates: Center (325, 40), Radius 280
  const cx = 325;
  const cy = 40;
  const radius = 280;

  let runningAnimationId = null;

  function animateSkillsTrain(categoryKey) {
    if (!skillsTrainItems) return;

    if (runningAnimationId) {
      cancelAnimationFrame(runningAnimationId);
    }

    skillsTrainItems.innerHTML = '';

    const categorySkills = data.skills[categoryKey] || [];
    const N = categorySkills.length;
    if (N === 0) return;

    const angleStep = Math.PI / (N - 1);

    const nodes = categorySkills.map((skill, index) => {
      const node = document.createElement('div');
      node.className = 'skill-carriage-node';
      node.style.left = '45px'; // Start coordinates (325 - 280 = 45px)
      node.style.top = '40px';
      node.style.opacity = '0';
      node.innerHTML = `<img src="${skill.iconPath}" class="skill-carriage-img" alt="${skill.name} icon" />`;
      skillsTrainItems.appendChild(node);

      return {
        element: node,
        skill: skill,
        targetAngle: Math.PI - (index * angleStep), // angles from Math.PI (left) down to 0 (right)
        currentAngle: Math.PI,
        staggerDelay: index * 90, // staggered delay per carriage
        duration: 850, // slide duration
        index: index
      };
    });

    nodes.forEach(n => {
      n.element.addEventListener('mouseenter', () => {
        nodes.forEach(other => other.element.classList.remove('active'));
        n.element.classList.add('active');

        if (detailTitle) detailTitle.textContent = n.skill.name;
        if (detailDesc) detailDesc.textContent = n.skill.desc;
      });
    });

    const midIdx = Math.floor(N / 2);
    if (categorySkills[midIdx]) {
      const initialSkill = categorySkills[midIdx];
      if (detailTitle) detailTitle.textContent = initialSkill.name;
      if (detailDesc) detailDesc.textContent = initialSkill.desc;

      setTimeout(() => {
        if (nodes[midIdx] && nodes[midIdx].element) {
          nodes[midIdx].element.classList.add('active');
        }
      }, midIdx * 90 + 850);
    }

    let animationStartTime = null;

    function renderFrame(timestamp) {
      if (!animationStartTime) animationStartTime = timestamp;
      const elapsed = timestamp - animationStartTime;

      const floatTime = timestamp * 0.0022; // continuous wave speed

      nodes.forEach(n => {
        let progress = 0;
        if (elapsed >= n.staggerDelay) {
          const moveElapsed = elapsed - n.staggerDelay;
          progress = Math.min(1, moveElapsed / n.duration);

          const ease = 1 - Math.pow(1 - progress, 3);
          n.currentAngle = Math.PI - (ease * (Math.PI - n.targetAngle));
        } else {
          n.currentAngle = Math.PI;
        }

        // 1. Base coordinate calculation
        let x = cx + radius * Math.cos(n.currentAngle);
        let y = cy + radius * Math.sin(n.currentAngle);

        // 2. Add continuous floating offset (once carriage starts moving)
        if (progress > 0) {
          const floatAmp = progress * 6; // scale float amplitude as it slides in
          x += Math.sin(floatTime + n.index * 1.6) * floatAmp;
          y += Math.cos(floatTime * 0.85 + n.index * 2.3) * floatAmp;
        }

        n.element.style.left = `${x}px`;
        n.element.style.top = `${y}px`;

        const fadeProgress = Math.max(0, elapsed - n.staggerDelay) / 300;
        n.element.style.opacity = Math.min(1, fadeProgress);
      });

      // Run continuously to maintain floating effect
      runningAnimationId = requestAnimationFrame(renderFrame);
    }

    runningAnimationId = requestAnimationFrame(renderFrame);
  }

  skillsToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillsToggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category;
      animateSkillsTrain(category);
    });
  });

  animateSkillsTrain('web');

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 7. Update Projects (With Filter Navigation Buttons)
  const filterCategories = new Set(['all']);
  data.projects.forEach(p => filterCategories.add(p.category));

  const filterBar = document.getElementById('projects-filter-bar');
  if (filterBar) {
    filterBar.innerHTML = Array.from(filterCategories).map(cat => {
      const activeClass = cat === 'all' ? 'active' : '';
      const label = cat === 'all' ? 'All' : cat === 'webdev' ? 'Web Dev' : cat === 'systems' ? 'Systems' : cat;
      return `<button class="filter-btn ${activeClass}" data-filter="${cat}">${label}</button>`;
    }).join('');
  }

  // Build a reusable card-HTML generator
  function buildCardHTML(p) {
    return `
      <div class="project-card" data-category="${p.category}">
        <div class="project-image-wrapper">
          <img src="${getProjectThumbnail(p.title)}" alt="${p.title} thumbnail" class="project-image" style="cursor: zoom-in;" onclick="openImageModal(this.src)" />
        </div>
        <div class="project-info">
          <div class="project-tags">
            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-links">
            <a href="${p.github}" target="_blank" class="project-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
            ${p.demo && p.demo !== '#' ? `
              <a href="${p.demo}" target="_blank" class="project-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Live Demo
              </a>
            ` : ''}
          </div>
        </div>
      </div>`;
  }

  const projectsContainer = document.getElementById('projects-container');
  const projectsViewport = projectsContainer ? projectsContainer.parentElement : null;

  // Render projects for a given filter and conditionally enable marquee
  function renderFilteredProjects(filterVal) {
    if (!projectsContainer) return;

    const filtered = filterVal === 'all'
      ? data.projects
      : data.projects.filter(p => p.category === filterVal);

    const cardsHTML = filtered.map(p => buildCardHTML(p)).join('');

    // Temporarily render single set to measure total width
    projectsContainer.innerHTML = cardsHTML;
    projectsContainer.style.animation = 'none';
    projectsContainer.classList.remove('marquee-active');
    projectsContainer.classList.remove('marquee-static');

    // Force layout to measure
    requestAnimationFrame(() => {
      const viewportWidth = projectsViewport ? projectsViewport.offsetWidth : window.innerWidth;
      const contentWidth = projectsContainer.scrollWidth;

      if (contentWidth > viewportWidth) {
        // Cards overflow → duplicate for seamless marquee
        projectsContainer.innerHTML = cardsHTML + cardsHTML;
        projectsContainer.classList.add('marquee-active');
        projectsContainer.classList.remove('marquee-static');
        projectsContainer.style.animation = '';
      } else {
        // Cards fit → center-align, no animation
        projectsContainer.classList.add('marquee-static');
        projectsContainer.classList.remove('marquee-active');
        projectsContainer.style.animation = 'none';
      }
    });
  }

  // Initial render with all projects
  renderFilteredProjects('all');

  // Wire up filter buttons
  initProjectFilter(renderFilteredProjects);

  // 8. Update Timeline (Premium Academic Progression Infographic)
  const timelineContainer = document.getElementById('experience-timeline');
  if (timelineContainer) {
    const timelineColors = [
      { accent: '#F26419', glow: 'rgba(242, 100, 25, 0.2)' },  // Coral (Top, Freshman)
      { accent: '#D81159', glow: 'rgba(216, 17, 89, 0.2)' },   // Pink (Sophomore)
      { accent: '#3A86C8', glow: 'rgba(58, 134, 200, 0.2)' },   // Sky Blue (Junior)
      { accent: '#0D9488', glow: 'rgba(13, 148, 136, 0.2)' }   // Teal (Bottom, Senior FYP)
    ];

    const timelineIcons = [
      // Book (Freshman Year)
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
      // Database (Sophomore Year)
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info-icon"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>`,
      // Code Brackets (Junior Year)
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info-icon"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      // Graduation Cap (Senior Year)
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info-icon"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>`
    ];

    timelineContainer.innerHTML = [...data.timeline].reverse()
      .map((t, idx) => {
        const side = idx % 2 === 0 ? 'left' : 'right';
        const colorSet = timelineColors[idx] || timelineColors[0];
        const iconSVG = timelineIcons[idx] || timelineIcons[0];

        // Extract Year and Subtitle
        const yearMatch = t.date.match(/\d{4}/);
        const year = yearMatch ? yearMatch[0] : '';
        const titleMatch = t.date.match(/\(([^)]+)\)/);
        const subTitle = titleMatch ? titleMatch[1].toUpperCase() : t.org.toUpperCase();

        const badgeHTML = `
          <div class="info-badge-wrap">
            <div class="info-badge">
              ${iconSVG}
            </div>
          </div>
        `;

        const cardHTML = `
          <div class="info-card-wrap">
            <div class="info-card">
              <div class="info-card-header">
                <span class="info-year">${year}</span>
                <div class="info-card-divider"></div>
                <span class="info-title">${subTitle}</span>
              </div>
              <p class="info-desc">${t.desc}</p>
              <div class="info-card-footer">
                <span class="info-org">${t.org}</span>
              </div>
            </div>
          </div>
        `;

        const prevColor = idx === 0 ? '#00A896' : timelineColors[idx - 1].accent;

        return `
          <div class="info-item info-item-${side}" style="--accent-color: ${colorSet.accent}; --accent-glow: ${colorSet.glow}; --prev-accent-color: ${prevColor};">
            <!-- Left Column -->
            <div class="info-col info-col-left">
              ${side === 'left' ? badgeHTML : cardHTML}
            </div>
            
            <!-- Center Column (Timeline Node & Segment) -->
            <div class="info-col info-col-center">
              <div class="info-segment-line-top"></div>
              <div class="info-segment-line-bottom"></div>
              <div class="info-node">
                <div class="info-node-dot"></div>
              </div>
            </div>
            
            <!-- Right Column -->
            <div class="info-col info-col-right">
              ${side === 'left' ? cardHTML : badgeHTML}
            </div>
            
            <!-- Horizontal Connector Line -->
            <div class="info-connector"></div>
          </div>
        `;
      }).join('');
  }

  // 9. Update Certs / Courses
  const certContainer = document.getElementById('certifications-container');
  const certHeading = document.getElementById('certifications-heading');
  if (certContainer) {
    if (certHeading) {
      certHeading.textContent = "Certifications";
      certHeading.dataset.value = "Certifications";
    }
    const achieveHeading = document.getElementById('achievements-heading');
    if (achieveHeading) {
      achieveHeading.textContent = "Achievements";
      achieveHeading.dataset.value = "Achievements";
    }

    // Render the cards with tails
    const cardsHTML = data.certs.map((c, idx) => {
      const stepNum = idx + 1;

      // Define tail SVG based on odd/even step
      let tailSVG = '';
      if (stepNum < 7) {
        if (stepNum % 2 !== 0) {
          // Odd step: points down-right (centered on bottom-right side of card) with 90 degree angle (30px tail)
          tailSVG = `
            <svg class="achieve-tail-svg tail-down" viewBox="0 0 40 80">
              <path d="M 0,10 L 30,40 L 0,70" fill="#ffffff" stroke="${c.gradEnd}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          `;
        } else {
          // Even step: points up-right (centered on top-right side of card) with 90 degree angle (30px tail)
          tailSVG = `
            <svg class="achieve-tail-svg tail-up" viewBox="0 0 80 40">
              <path d="M 10,40 L 40,10 L 70,40" fill="#ffffff" stroke="${c.gradEnd}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          `;
        }
      }

      return `
        <div class="achieve-step-wrapper achieve-step-${stepNum}" style="--grad-start: ${c.gradStart}; --grad-end: ${c.gradEnd}; --glow-color: ${c.glowColor};">
          <div class="achieve-card-outer">
            <div class="achieve-card-inner">
              <div class="achieve-card-content">
                <div class="achieve-step-badge">${stepNum}</div>
                <h3 class="achieve-title">${c.title}</h3>
                <p class="achieve-desc">${c.desc}</p>
                <div class="achieve-icon-box">
                  <svg class="achieve-svg" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    ${c.svgIcon}
                  </svg>
                </div>
              </div>
              ${tailSVG}
              ${stepNum < 7 ? `<div class="achieve-mask-div"></div>` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');

    certContainer.innerHTML = cardsHTML;
  }

  // Trigger Matrix Scramble Reveal on text fields
  initMatrixDecrypt();
  initProjectFilter();
}

/* ==========================================================================
   PROJECT FILTER ENGINE
   ========================================================================== */
function initProjectFilter(renderCallback) {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.dataset.filter;
      renderCallback(filterVal);
    });
  });
}

/* ==========================================================================
   CLI TERMINAL PANEL
   ========================================================================== */
function initTerminal() {
  const trigger = document.getElementById('terminal-trigger');
  const widget = document.getElementById('terminal-widget');
  const closeBtn = document.getElementById('terminal-close');
  const minBtn = document.getElementById('terminal-minimize');
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  const minimizedHandle = document.getElementById('terminal-minimized-handle');

  if (!widget || !trigger) return;

  trigger.addEventListener('click', () => {
    widget.classList.add('open');
    if (minimizedHandle) minimizedHandle.style.display = 'none';
    input.focus();
  });

  closeBtn.addEventListener('click', () => {
    if (typeTimeout) clearTimeout(typeTimeout);
    terminalQueue = [];
    isPrinting = false;
    output.innerHTML = '';
    widget.classList.remove('open');
    if (minimizedHandle) minimizedHandle.style.display = 'none';
  });

  minBtn.addEventListener('click', () => {
    widget.classList.remove('open');
    if (minimizedHandle) minimizedHandle.style.display = 'flex';
  });

  if (minimizedHandle) {
    minimizedHandle.addEventListener('click', () => {
      widget.classList.add('open');
      minimizedHandle.style.display = 'none';
      input.focus();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === '`' || e.key === '~') {
      e.preventDefault();
      widget.classList.toggle('open');
      if (widget.classList.contains('open')) {
        if (minimizedHandle) minimizedHandle.style.display = 'none';
        input.focus();
      }
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCommand = input.value.trim();
      input.value = '';
      if (rawCommand) {
        handleCommand(rawCommand);
      }
    }
  });

  let terminalQueue = [];
  let isPrinting = false;
  let typeTimeout = null;

  function printLine(text, type = '', speed = 4) {
    terminalQueue.push({ text, type, speed });
    processTerminalQueue();
  }

  function processTerminalQueue() {
    if (isPrinting || terminalQueue.length === 0) return;
    isPrinting = true;

    const { text, type, speed } = terminalQueue.shift();

    const line = document.createElement('div');
    line.className = `terminal-line ${type}`;
    line.innerHTML = text;
    output.appendChild(line);
    output.parentElement.scrollTop = output.parentElement.scrollHeight;

    const textNodes = [];
    function collect(n) {
      if (n.nodeType === Node.TEXT_NODE) {
        textNodes.push({ node: n, content: n.nodeValue });
        n.nodeValue = '';
      } else {
        for (let child of n.childNodes) {
          collect(child);
        }
      }
    }
    collect(line);

    if (speed === 0) {
      for (let item of textNodes) {
        item.node.nodeValue = item.content;
      }
      isPrinting = false;
      output.parentElement.scrollTop = output.parentElement.scrollHeight;
      processTerminalQueue();
      return;
    }

    let nodeIdx = 0;
    let charIdx = 0;

    function typeChar() {
      if (nodeIdx >= textNodes.length) {
        isPrinting = false;
        typeTimeout = setTimeout(processTerminalQueue, 30);
        return;
      }

      const currentItem = textNodes[nodeIdx];
      if (charIdx < currentItem.content.length) {
        currentItem.node.nodeValue += currentItem.content[charIdx];
        charIdx++;
        output.parentElement.scrollTop = output.parentElement.scrollHeight;
        typeTimeout = setTimeout(typeChar, speed);
      } else {
        nodeIdx++;
        charIdx = 0;
        typeChar();
      }
    }

    typeChar();
  }

  function handleCommand(cmd) {
    printLine(`guest@huzaifa-shahbaz-shell:~$ <span class="command">${cmd}</span>`, '', 0);
    const parts = cmd.toLowerCase().split(' ');
    const primaryCmd = parts[0];

    switch (primaryCmd) {
      case 'help':
        printLine(`System Commands Available:
  - <span class="info">about</span>              : Display developer biographical packet
  - <span class="info">skills</span>             : List technical stacks in order
  - <span class="info">projects</span>           : Output highlighted student projects
  - <span class="info">contact</span>            : Display communication endpoints
  - <span class="info">theme</span>              : Toggle terminal text coloration
  - <span class="info">matrix</span>             : Launch a visual matrix rain sequence
  - <span class="info">clear</span>              : Wipe local output buffer`);
        break;

      case 'about':
        printLine(`Subject: Huzaifa Shahbaz
Status: CS Undergraduate (FAST NUCES, Academic Achiever)
DOB: 20 February 2004
Focus: Software Engineering, Full-Stack Web Development, Computer Science Foundations.`);
        break;

      case 'skills':
        printLine(`* Technical Stack:
  - Languages: JavaScript, TypeScript, Python, C++, SQL, HTML/CSS
  - Web Dev  : React.js, Node.js, Express, Next.js, Django, REST APIs
  - Core CS  : Data Structures, Algorithms, OOP, Database Systems, Git`);
        break;

      case 'projects':
        printLine(`* Highlighted Student Projects:
  - AlgoViz     : Sorting & pathfinding algorithm visualizer in React.
  - DevFlow     : Full-stack Q&A developer forum (Next.js/NestJS).
  - CampusCart  : Peer-to-peer student marketplace (Node.js/PostgreSQL).
  - GradeTracker: GPA prediction and study logs dashboard (Python).
  - TaskFlow    : WebSockets real-time team Kanban board (React/MongoDB).`);
        break;

      case 'contact':
        printLine(`* Communication Endpoints:
  - Mail       : huzaifa.shahbaz@gmail.com
  - Phone      : +92 319 9238727
  - LinkedIn   : linkedin.com/in/huzaifa-shahbaz
  - GitHub     : github.com/huzaifashahbaz`);
        break;

      case 'theme':
        const curColor = window.getComputedStyle(output).color;
        if (curColor.includes('224') || curColor.includes('e0e0e0') || curColor.includes('248')) {
          output.style.color = '#39FF14';
          input.style.color = '#39FF14';
          printLine('Theme set to: DIGITAL_GREEN', 'success');
        } else {
          output.style.color = '#F8FAFC';
          input.style.color = '#F8FAFC';
          printLine('Theme set to: WHITE_SMOKE', 'success');
        }
        break;

      case 'matrix':
        runMatrixRain();
        break;

      case 'clear':
        if (typeTimeout) clearTimeout(typeTimeout);
        terminalQueue = [];
        isPrinting = false;
        output.innerHTML = '';
        break;

      default:
        printLine(`command not found: ${primaryCmd}. Type <span class="error">'help'</span> for reference.`, 'error');
    }
  }

  function runMatrixRain() {
    printLine('Launching simulated matrix decryption stream...', 'info');
    let frames = 0;
    const matrixInterval = setInterval(() => {
      let rainLine = '';
      for (let i = 0; i < 40; i++) {
        rainLine += Math.random() > 0.5 ? Math.floor(Math.random() * 2).toString() : String.fromCharCode(Math.floor(Math.random() * 93) + 33);
      }
      printLine(rainLine);
      frames++;
      if (frames > 20) {
        clearInterval(matrixInterval);
        printLine('--- STREAM DISCONNECTED: SAFE MODE RESTORED ---', 'success');
      }
    }, 100);
  }
}

/* ==========================================================================
   CONTACT FORM SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    feedback.style.display = 'block';
    feedback.style.color = 'var(--color-primary)';
    feedback.innerHTML = 'Initializing Handshake...';

    setTimeout(() => {
      feedback.innerHTML = 'Generating AES-GCM Key Pair...';
      setTimeout(() => {
        feedback.innerHTML = 'Encrypting Packet Data...';
        setTimeout(() => {
          feedback.innerHTML = 'Transmitting Payload to Secure Node...';
          setTimeout(() => {
            feedback.style.color = '#4CAF50';
            feedback.innerHTML = 'SUCCESS: Packet Received. (HTTP 200 OK)';
            form.reset();
            setTimeout(() => {
              feedback.style.display = 'none';
            }, 6000);
          }, 1200);
        }, 1000);
      }, 1000);
    }, 1000);
  });
}

/* ==========================================================================
   TOOL ICONS RETRIEVER
   ========================================================================== */
function getToolIcon(name) {
  const n = name.toLowerCase().trim();
  let file = '';

  // Specific tool icon filenames mapping (Developer Stacks)
  if (n.includes('python')) file = 'python.png';
  else if (n.includes('c/c++') || n.includes('c++')) file = 'c_c++.png';
  else if (n.includes('mongodb')) file = 'mongodb.png';
  else if (n.includes('git') || n.includes('github')) file = 'git_github.png';
  else if (n.includes('rest api') || n.includes('api')) file = 'rest_api.png';
  else if (n.includes('sql') || n.includes('postgresql')) file = 'sql.png';
  else if (n.includes('docker')) file = 'docker.png';
  else if (n.includes('kubernetes') || n.includes('k8s')) file = 'k8s.png';
  else if (n.includes('excel')) file = 'excel.png';
  else if (n.includes('oop')) file = 'oop.png';
  else if (n.includes('automated testing')) file = 'automated_test.png';
  else if (n.includes('load & performance testing')) file = 'load_perf.png';
  else if (n.includes('ai/ml')) file = 'ai_ml.png';
  else if (n.includes('bash')) file = 'bash.png';

  let html = '';
  if (file) {
    html = `<img src="assets/icons/${file}" alt="${name} logo" class="tool-icon-img" style="object-fit: contain; transition: all 0.3s ease;" />`;
  } else {
    // Clean Code Brackets SVG fallback for developer skills
    html = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool-icon-svg" style="color: var(--color-primary); width: 60%; height: 60%;"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
  }

  let bgColor = ''; // Omit background color override to allow style.css theme to apply
  return { html, bgColor };
}

/* ==========================================================================
   PROJECT THUMBNAIL MAPPER
   ========================================================================== */
function getProjectThumbnail(title) {
  const t = title.toLowerCase();
  if (t.includes('algoviz') || t.includes('visualizer')) return 'assets/thumbnails/nuclogem.png';
  if (t.includes('devflow')) return 'assets/thumbnails/grc.png';
  if (t.includes('campuscart') || t.includes('marketplace')) return 'assets/thumbnails/ecom.png';
  if (t.includes('gradetracker') || t.includes('gpa')) return 'assets/thumbnails/anonymizer.png';
  if (t.includes('taskflow') || t.includes('kanban')) return 'assets/thumbnails/fyp.png';
  return 'assets/thumbnails/nuclogem.png';
}

/* ==========================================================================
   IMAGE LIGHTBOX MODAL TRIGGER
   ========================================================================== */
function openImageModal(src, isCertificate = false) {
  const modal = document.createElement('div');
  modal.className = 'project-image-modal';

  let modalHTML = `
    <div class="project-image-modal-content">
      <img src="${src}" alt="Preview Image" />
    </div>
    <button class="project-image-modal-close" aria-label="Close Modal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
    </button>
  `;

  if (isCertificate) {
    modalHTML += `
      <button class="modal-nav-btn prev-cert-btn" aria-label="Previous Certificate">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button class="modal-nav-btn next-cert-btn" aria-label="Next Certificate">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    `;
  }
  modal.innerHTML = modalHTML;
  document.body.appendChild(modal);

  // Close triggers
  modal.addEventListener('click', () => {
    modal.remove();
  });

  const contentElement = modal.querySelector('.project-image-modal-content');
  if (contentElement) {
    contentElement.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
  const imgElement = modal.querySelector('img');

  const closeBtn = modal.querySelector('.project-image-modal-close');
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.remove();
  });

  if (isCertificate) {
    const certImages = Array.from(document.querySelectorAll('#carousel-track img')).map(img => img.src);
    let currentIndex = certImages.indexOf(src);
    if (currentIndex === -1) {
      currentIndex = certImages.findIndex(s => s.includes(src) || src.includes(s));
    }
    if (currentIndex === -1) currentIndex = 0;

    const prevBtn = modal.querySelector('.prev-cert-btn');
    const nextBtn = modal.querySelector('.next-cert-btn');

    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + certImages.length) % certImages.length;
      imgElement.src = certImages[currentIndex];
    });

    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % certImages.length;
      imgElement.src = certImages[currentIndex];
    });
  }
}

/* ==========================================================================
   3D COVERFLOW CERTIFICATE CAROUSEL ENGINE
   ========================================================================== */
function initCertCarousel() {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let activeIndex = 0;

  function updateCarousel() {
    const n = slides.length;
    const isMobile = window.innerWidth <= 480;
    const isTablet = window.innerWidth <= 768 && window.innerWidth > 480;

    let translateStep = 180;
    let sideOffset = 30;
    let zOffset = -120;
    let centerZ = 50;

    if (isMobile) {
      translateStep = 80;
      sideOffset = 15;
      zOffset = -80;
      centerZ = 20;
    } else if (isTablet) {
      translateStep = 120;
      sideOffset = 20;
      zOffset = -100;
      centerZ = 30;
    }

    slides.forEach((slide, index) => {
      let offset = index - activeIndex;

      // Shortest circular distance wrap
      while (offset < -n / 2) offset += n;
      while (offset > n / 2) offset -= n;

      const absOffset = Math.abs(offset);

      // Hide slides that are too far away
      if (absOffset > 2) {
        slide.style.opacity = '0';
        slide.style.pointerEvents = 'none';
        slide.style.transform = `translateX(${offset * (translateStep - 20)}px) scale(0.5) rotateY(${offset > 0 ? -45 : 45}deg) translateZ(-300px)`;
        return;
      }

      slide.style.opacity = '1';
      slide.style.pointerEvents = 'auto';

      let translateX = offset * translateStep;
      let rotateY = 0;
      let translateZ = zOffset * absOffset;
      let scale = 1 - absOffset * 0.15;

      if (offset < 0) {
        rotateY = 25;
        translateX -= sideOffset;
      } else if (offset > 0) {
        rotateY = -25;
        translateX += sideOffset;
      } else {
        // Active center slide
        rotateY = 0;
        translateZ = centerZ;
        scale = 1.05;
      }

      slide.style.transform = `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
      slide.style.zIndex = 10 - absOffset;

      if (index === activeIndex) {
        slide.classList.add('active');
        slide.style.borderColor = 'var(--color-primary)';
        slide.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.4)';
        const img = slide.querySelector('img');
        if (img) img.style.cursor = 'zoom-in';
      } else {
        slide.classList.remove('active');
        slide.style.borderColor = 'var(--color-border)';
        slide.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5)';
        const img = slide.querySelector('img');
        if (img) img.style.cursor = 'pointer';
      }
    });
  }

  // Go to slide on click
  slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      if (activeIndex === index) {
        const img = slide.querySelector('img');
        if (img && img.src) {
          openImageModal(img.src, true);
        }
      } else {
        activeIndex = index;
        updateCarousel();
      }
    });
  });

  // Prev / Next button click handlers
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      activeIndex = (activeIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      activeIndex = (activeIndex + 1) % slides.length;
      updateCarousel();
    });
  }

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
}

/* ==========================================================================
   THEME TOGGLE MODE CONTROLLER
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeBtnText = document.getElementById('theme-btn-text');

  if (!themeToggleBtn || !themeBtnText) return;

  const savedTheme = localStorage.getItem('theme-mode');

  function setTheme(theme) {
    if (theme === 'colorful') {
      document.body.classList.add('theme-colorful');
      themeBtnText.textContent = 'Colorful';
      localStorage.setItem('theme-mode', 'colorful');
    } else {
      document.body.classList.remove('theme-colorful');
      themeBtnText.textContent = 'Dark';
      localStorage.setItem('theme-mode', 'dark');
    }
  }

  // Apply saved preference on load
  if (savedTheme === 'colorful') {
    setTheme('colorful');
  } else {
    setTheme('dark');
  }

  // Toggle on click
  themeToggleBtn.addEventListener('click', () => {
    const isColorful = document.body.classList.contains('theme-colorful');
    setTheme(isColorful ? 'dark' : 'colorful');
  });
}

