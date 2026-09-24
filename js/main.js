/**
 * Portfolio Interaction & Logic — Reethika Damarla
 * HR Manager | Human Resources | Talent Acquisition | Employee Engagement
 * Handles smooth navigation, modal management, project filtering,
 * form validation, and clipboard utilities.
 */

// Case Studies Details
const caseStudiesData = {
  'turnover-engagement': {
    title: 'Academic Publication: Impact of Turnover Intention on Work Engagement',
    type: 'Academic Publication & Research',
    badgeClass: 'badge-blue',
    category: 'HR Research',
    tools: ['Statistical Analysis', 'Employee Engagement Metrics', 'Survey Methodology', 'Behavioral HR'],
    summary: 'Academic publication investigating the relationship between employee turnover intention and workplace engagement, highlighting key drivers of employee retention.',
    overview: 'This academic research study investigates the empirical relationship between turnover intention and workplace engagement. It examines how cognitive withdrawal behaviours affect daily commitment, productivity, and organizational attachment.',
    problem: 'Organizations frequently battle sudden attrition without understanding the psychological indicators that precede departure. High turnover intention silent erosion of morale and operational stability long before an employee formally resigns.',
    objective: 'Analyze how turnover intention influences the core dimensions of employee work engagement (vigor, dedication, absorption) and identify organizational levers to intervene before talent is lost.',
    approach: 'Conducted rigorous empirical survey research across employee cohorts, evaluating work engagement scores against turnover intention indicators. Applied structured quantitative analysis to model correlations and behavioral dynamics.',
    findings: 'The study demonstrated a strong, statistically significant inverse relationship between turnover intention and employee engagement. Key inflection points included perceived lack of developmental support, delayed recognition, and communication gaps between staff and leadership.',
    recommendations: 'Establish proactive engagement checkpoints, introduce regular two-way feedback mechanisms, and implement meaningful employee recognition initiatives to reinforce workplace belonging.',
    outcomes: 'Published academic findings contributing to the literature on organizational behavior and human resource management, providing actionable frameworks for HR retention strategies.',
    reflection: 'This academic investigation reinforced my core HR philosophy: retention begins with understanding employee sentiments. Listening to people and recognizing their contributions builds lasting commitment.',
    related: ['Standardised Digital Onboarding', 'Specialist Talent Acquisition']
  },
  'specialist-recruitment': {
    title: 'Specialist Technical & Academic Talent Acquisition Campaigns',
    type: 'HR Management & Talent Acquisition at ULEARN India',
    badgeClass: 'badge-green',
    category: 'Talent Acquisition',
    tools: ['Recruitment Campaigns', 'Candidate Screening', 'Interview Coordination', 'Technical Sourcing'],
    summary: 'Coordinating end-to-end hiring campaigns for niche instructors (AI/ML, Programming, Power BI, Medical Coding) and business development professionals.',
    overview: 'Managed full-lifecycle recruitment drives for specialized faculty, technical trainers, and operational roles in a dynamic education and training environment at ULEARN India.',
    problem: 'Sourcing qualified instructors in fast-evolving fields like AI/ML, Data/Power BI, and Medical Coding presents high candidate scarcity, complex screening hurdles, and severe competition from industry employers.',
    objective: 'Design and execute targeted recruitment campaigns that attract high-caliber subject matter experts and streamline the progression from screening to onboarding.',
    approach: 'Collaborated with operational and academic leadership to map role competencies. Promoted vacancies, screened applicant portfolios, conducted preliminary HR interviews, and scheduled panel evaluations while maintaining close candidate communication.',
    findings: 'Maintaining a 48-hour response turnaround and providing crystal-clear role expectations significantly reduced candidate drop-off and boosted offer acceptance rates across competitive instructor roles.',
    recommendations: 'Standardize competency-based evaluation rubrics and institute dedicated interview schedules to accelerate decision-making cycles.',
    outcomes: 'Successfully fulfilled hiring demands across multiple specialist training tracks, enabling timely curriculum launches and seamless batch delivery for corporate and student learners.',
    reflection: 'Effective recruitment is grounded in authentic relationship-building. When candidates feel respected and clearly guided throughout the hiring process, employer brand perception thrives.',
    related: ['Campus Recruitment Partnerships', 'Standardised Digital Onboarding']
  },
  'campus-partnerships': {
    title: 'Campus Recruitment & University Placement Partnerships',
    type: 'Employer Engagement & University Relations',
    badgeClass: 'badge-blue',
    category: 'Campus Recruitment',
    tools: ['Campus Hiring', 'Placement Cell Liaison', 'Stakeholder Engagement', 'Graduate Recruitment'],
    summary: 'Building and nurturing institutional partnerships with colleges and universities across Andhra Pradesh and Telangana to drive student placement and graduate recruitment.',
    overview: 'Spearheaded campus engagement initiatives, working directly with college training and placement cells across educational institutions in Andhra Pradesh and Telangana.',
    problem: 'Connecting student talent with organizational hiring criteria requires seamless coordination, clear application instructions, and sustained relationships with academic placement heads.',
    objective: 'Establish reliable recruitment pipelines with premier educational institutions, organize campus hiring drives, and manage candidate engagement throughout selection stages.',
    approach: 'Established direct partnerships with placement directors. Authored detailed recruitment information packets, job descriptions, and application criteria, and coordinated virtual and on-campus interview schedules.',
    findings: 'Transparent institutional communication and pre-recruitment briefing sessions with students dramatically improved candidate preparedness and selection success rates.',
    recommendations: 'Institutionalize early campus touchpoints such as placement webinars and skill awareness workshops to foster organic student interest prior to formal drives.',
    outcomes: 'Successfully onboarded enthusiastic graduate cohorts and cemented long-term hiring partnerships with key regional institutions, establishing sustainable talent pipelines.',
    reflection: 'Campus recruitment bridges academia and professional enterprise. Clear communication and mentorship-driven interactions leave a lasting positive impression on emerging graduates.',
    related: ['Specialist Talent Acquisition', 'Turnover Intention on Work Engagement']
  },
  'onboarding-experience': {
    title: 'Standardised Digital Onboarding & Employee Experience Framework',
    type: 'People Operations & Employee Engagement',
    badgeClass: 'badge-green',
    category: 'Employee Engagement',
    tools: ['Digital Onboarding', 'HR Documentation', 'Work-Anniversary Recognition', 'Performance Tracking'],
    summary: 'Structuring new-joiner induction workflows, recognition initiatives, and performance monitoring to build positive workplace cultures.',
    overview: 'Designed, implemented, and managed structured employee onboarding, induction procedures, and ongoing engagement programs at ULEARN India.',
    problem: 'In informal onboarding environments, new starters often face delayed resource provisioning, ambiguous process guidelines, and feelings of disconnect during their critical initial weeks.',
    objective: 'Create a standardized, supportive onboarding and engagement ecosystem that accelerates productivity, builds community, and tracks early performance milestones.',
    approach: 'Formulated a comprehensive induction checklist covering organizational policies, role responsibilities, and resource access. Instituted celebration milestones for new joiners and work anniversaries, alongside ongoing performance check-ins.',
    findings: 'New starters who experienced structured Day-One inductions and received proactive first-month check-ins demonstrated faster process adoption and higher long-term engagement.',
    recommendations: 'Integrate automated digital reminders for line managers at 30, 60, and 90-day intervals to ensure continuous dialogue and timely feedback.',
    outcomes: 'Eliminated onboarding oversights, achieved complete HR compliance, and established celebratory recognition traditions that boosted morale across team departments.',
    reflection: 'A great employee experience is built through consistent, thoughtful touchpoints. Every small gesture—from an orderly first day to celebrating milestones—shapes organisational culture.',
    related: ['Turnover Intention on Work Engagement', 'Specialist Talent Acquisition']
  }
};

// Initialise application features on page load
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initScrollspy();
  initProjectFilter();
  initCaseStudyModal();
  initCvModal();
  initContactForm();
  initEmailCopy();
  initBackToTop();
});

/**
 * Sticky Header & Elevation on Scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!menuToggle || !mainNav) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!headerContains(e.target) && mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  function headerContains(element) {
    const header = document.querySelector('.site-header');
    return header && header.contains(element);
  }
}

/**
 * Scrollspy Indicator for Active Section
 */
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * Project Category Filter
 */
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Case Study Modal Deep-Dive
 */
function initCaseStudyModal() {
  const modal = document.getElementById('caseStudyModal');
  const modalTitle = document.getElementById('caseStudyModalTitle');
  const modalBody = document.getElementById('caseStudyModalBody');
  const closeBtns = document.querySelectorAll('[data-dismiss="caseStudyModal"]');
  const viewBtns = document.querySelectorAll('[data-case-study]');

  if (!modal || !modalBody) return;

  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const studyKey = btn.getAttribute('data-case-study');
      const data = caseStudiesData[studyKey];

      if (!data) return;

      modalTitle.textContent = data.title;
      modalBody.innerHTML = `
        <div class="case-study-meta">
          <span class="badge ${data.badgeClass}">${data.category}</span>
          <span class="badge badge-outline">${data.type}</span>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">1. Project Overview</h4>
          <p>${data.overview}</p>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">2. Core Challenge & Context</h4>
          <p>${data.problem}</p>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">3. Objective</h4>
          <p>${data.objective}</p>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">4. Method & HR Approach</h4>
          <p>${data.approach}</p>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">5. Tools & Systems Applied</h4>
          <div class="project-tools">
            ${data.tools.map(t => `<span class="badge badge-outline">${t}</span>`).join('')}
          </div>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">6. Key Findings & Insights</h4>
          <div class="case-key-metrics-box">
            <p><strong>Core Takeaway:</strong> ${data.findings}</p>
          </div>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">7. Recommendations & Solutions</h4>
          <p>${data.recommendations}</p>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">8. Organisational Impact</h4>
          <p>${data.outcomes}</p>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">9. Personal Reflection & Learning</h4>
          <p>${data.reflection}</p>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">10. Related Competencies</h4>
          <p>${data.related.join(' • ')}</p>
        </div>
      `;

      openModal(modal);
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => closeModal(modal));
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(modal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal(modal);
    }
  });
}

/**
 * CV Modal & Print Trigger
 */
function initCvModal() {
  const cvModal = document.getElementById('cvModal');
  const openCvBtns = document.querySelectorAll('[data-action="view-cv"]');
  const closeCvBtns = document.querySelectorAll('[data-dismiss="cvModal"]');
  const printBtn = document.getElementById('printCvBtn');

  if (!cvModal) return;

  openCvBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(cvModal);
    });
  });

  closeCvBtns.forEach(btn => {
    btn.addEventListener('click', () => closeModal(cvModal));
  });

  cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) closeModal(cvModal);
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

function openModal(modal) {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/**
 * Accessible Contact Form Validation
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('contactFeedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;

    const formGroups = form.querySelectorAll('.form-group');
    formGroups.forEach(group => group.classList.remove('has-error'));
    if (feedback) feedback.style.display = 'none';

    // Name check
    const nameInput = document.getElementById('senderName');
    const nameError = document.getElementById('nameError');
    if (!nameInput.value.trim()) {
      showFieldError(nameInput, nameError, 'Please enter your name.');
      hasError = true;
    }

    // Email check
    const emailInput = document.getElementById('senderEmail');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      showFieldError(emailInput, emailError, 'Please enter your email address.');
      hasError = true;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      showFieldError(emailInput, emailError, 'Please enter a valid email address.');
      hasError = true;
    }

    // Subject check
    const subjectInput = document.getElementById('senderSubject');
    const subjectError = document.getElementById('subjectError');
    if (!subjectInput.value.trim()) {
      showFieldError(subjectInput, subjectError, 'Please provide a subject line.');
      hasError = true;
    }

    // Message check
    const messageInput = document.getElementById('senderMessage');
    const messageError = document.getElementById('messageError');
    if (!messageInput.value.trim()) {
      showFieldError(messageInput, messageError, 'Please write a brief message.');
      hasError = true;
    } else if (messageInput.value.trim().length < 15) {
      showFieldError(messageInput, messageError, 'Please include at least 15 characters in your message.');
      hasError = true;
    }

    if (!hasError) {
      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.textContent = 'Thank you for reaching out, Reethika has received your message and will respond promptly.';
        feedback.style.display = 'block';
      }
      form.reset();
      showToast('Message sent successfully!');
    }
  });

  function showFieldError(input, errorElement, message) {
    const parent = input.closest('.form-group');
    if (parent) parent.classList.add('has-error');
    if (errorElement) errorElement.textContent = message;
  }
}

/**
 * Copy Email Utility & Toast Notification
 */
function initEmailCopy() {
  const copyBtns = document.querySelectorAll('[data-action="copy-email"]');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'damarlareethika@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Email copied: ${email}`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  });
}

/**
 * Back to Top Smooth Scroll
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Toast Notice Helper
 */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
