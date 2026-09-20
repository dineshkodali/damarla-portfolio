/**
 * Portfolio Interaction & Logic
 * Handles smooth navigation, modal management, project filtering,
 * form validation, and clipboard utilities.
 */

// Case Studies Details
const caseStudiesData = {
  'retail-analytics': {
    title: 'Retail Sales Performance & Profitability Diagnostic',
    type: 'Simulated Business Analytics Project',
    badgeClass: 'badge-blue',
    category: 'Business Analytics',
    tools: ['Power BI', 'Advanced Excel', 'SQL', 'Data Modelling'],
    summary: 'A structured diagnostic of multi-branch retail transactions to uncover low-margin product lines and branch-level performance variations.',
    overview: 'This project analysed an 18-month dataset representing 42,000 retail transactions across multiple UK sales territories. The goal was to establish why revenue growth was not translating into operating profit.',
    problem: 'Management observed an 8% year-on-year revenue increase accompanied by a 3.4% decline in gross operating margin. Branch reporting was fragmented, and sales teams lacked visibility into discount leakage.',
    objective: 'Create an automated diagnostic dashboard to identify the root causes of margin dilution, segment branches by net profitability, and provide actionable discount thresholds for territory managers.',
    approach: 'Cleaned and normalised the raw transaction records using Power Query. Created star-schema data models connecting transactions, product categories, store locations, and seasonal discount promotions. Built interactive visualisations in Power BI highlighting discount vs. margin correlation.',
    findings: 'Three product categories accounted for 64% of promotional discounts but generated negative net margins after accounting for returns. Furthermore, two store locations were routinely applying discretionary markdowns beyond agreed company thresholds.',
    recommendations: 'Implement a structured discount approval tier capping store-level discretion at 10%. Reposition low-margin peripheral inventory into bundled promotional packs rather than standalone discounted sales.',
    outcomes: 'In simulation, applying the recommended discount ceilings projected a 2.8% recovery in net operating margins without dampening transaction volumes.',
    reflection: 'Building this dashboard reinforced that data visualisation is only valuable when tied directly to operational decisions. Clear visual hierarchy allowed non-technical managers to spot margin leaks in seconds.',
    related: ['Workforce Retention Analysis', 'Onboarding Workflow Standardisation']
  },
  'hr-retention': {
    title: 'Workforce Retention & Early-Stage Attrition Study',
    type: 'Academic & HR Analytics Project',
    badgeClass: 'badge-green',
    category: 'HR Analytics',
    tools: ['Excel Pivot Tables', 'Power BI', 'Descriptive Statistics', 'HR Metrics'],
    summary: 'Investigating tenure patterns, departmental turnover rates, and exit survey feedback to pinpoint factors driving first-year attrition.',
    overview: 'An HR analytics investigation into employee departure trends over a 24-month period across a mid-sized services organisation with 650 employees.',
    problem: 'First-year employee turnover had reached 26%, generating substantial replacement recruitment costs and putting strain on team continuity in customer-facing roles.',
    objective: 'Identify specific tenure windows with elevated departure risk, evaluate differences across job roles and onboarding cohorts, and propose targeted retention checkpoints.',
    approach: 'Audited historic headcount datasets, exit interviews, and quarterly pulse surveys. Segmented departures into voluntary vs involuntary and analysed tenure curves in 90-day intervals. Synthesised qualitative exit comments using categorised thematic coding.',
    findings: 'The sharpest departure spike occurred between months 4 and 7. Qualitative exit data revealed that 54% of departing staff cited role ambiguity, inconsistent handover documentation, and delayed onboarding feedback as primary reasons for leaving.',
    recommendations: 'Introduce structured 30-60-90 day performance and satisfaction check-ins owned jointly by line managers and HR. Standardise initial team induction packs to ensure role clarity before probationary reviews.',
    outcomes: 'Presented findings to departmental stakeholders with a streamlined HR retention dashboard tracking 90-day probationary completion and early warning sentiment indicators.',
    reflection: 'People data requires careful, ethical handling and contextual interpretation. Quantitative figures alone cannot tell the full human story without listening to employee feedback.',
    related: ['Onboarding Workflow Standardisation', 'Client Service Intake Review']
  },
  'service-consultancy': {
    title: 'Client Service Intake & Delivery Review',
    type: 'Consultancy & Process Improvement',
    badgeClass: 'badge-blue',
    category: 'Business Consultancy',
    tools: ['Process Mapping', 'BPMN Logic', 'Stakeholder Interviews', 'Root Cause Analysis'],
    summary: 'Evaluating client onboarding bottlenecks to reduce turnaround delays and clarify cross-functional handoffs between sales and delivery.',
    overview: 'A simulated consultancy engagement reviewing the end-to-end service delivery workflow for a professional advisory team handling new business contracts.',
    problem: 'Client onboarding lead times had expanded from an agreed service level of 5 business days to an average of 13.5 days, resulting in client dissatisfaction and delayed revenue recognition.',
    objective: 'Map the current-state workflow, identify bottlenecks and redundant approvals, and design a revised operational process targeting a return to sub-5-day delivery.',
    approach: 'Conducted structured interviews with key stakeholders across business development, compliance, and client delivery. Created current-state BPMN flowcharts, measured handover cycle times, and applied the "5 Whys" method to identify failure points.',
    findings: 'Four separate manual forms requested duplicate client compliance information. Client files were frequently stalled waiting for dual partner sign-offs that could safely occur asynchronously.',
    recommendations: 'Consolidate client data collection into a single standardised intake document. Establish a tiered approval matrix where standard low-risk engagements require only single-manager sign-off.',
    outcomes: 'Simulated workflow modelling showed a 58% reduction in administrative handoffs and projected average onboarding turnaround falling to 4.2 days.',
    reflection: 'Process improvement succeeds or fails on stakeholder buy-in. Engaging team members during the mapping phase ensured recommendations were perceived as helpful rather than disruptive.',
    related: ['Retail Sales Performance', 'Onboarding Workflow Standardisation']
  },
  'onboarding-improvement': {
    title: 'Standardising Early-Stage Candidate Onboarding',
    type: 'HR Operations & Process Improvement',
    badgeClass: 'badge-green',
    category: 'Business Process Improvement',
    tools: ['Workflow Documentation', 'Compliance Checklists', 'Excel Tracker', 'SOP Design'],
    summary: 'Designing a structured, compliant onboarding pathway to eliminate administrative bottlenecks and elevate new starter satisfaction.',
    overview: 'A practical HR operations project focused on transforming an informal, ad-hoc new hire onboarding process into an audited, repeatable operational workflow.',
    problem: 'New employees frequently experienced delayed equipment setup, overdue Right-to-Work documentation checks, and fragmented communication between HR and department heads.',
    objective: 'Establish a reliable end-to-end onboarding checklist, clarify departmental responsibilities, and create a centralized status dashboard for upcoming joiners.',
    approach: 'Reviewed compliance guidelines for Right-to-Work verification. Mapped the 14 days prior to day-one through the first 30 days of employment. Built a shared operational tracking schedule with automated reminder milestones.',
    findings: 'Prior to the redesign, 38% of new starters did not have verified IT permissions on their first day, leading to wasted orientation time and poor first impressions.',
    recommendations: 'Implement a strict "T-minus 7 Days" verification gate requiring all digital identity checks and equipment orders to be signed off before starter confirmation.',
    outcomes: 'Created an accessible Standard Operating Procedure (SOP) and handover template, ensuring complete document compliance and smoother Day One transitions.',
    reflection: 'Effective operations rely on simple, reliable systems that everyone can understand and follow consistently, rather than over-complicated tooling.',
    related: ['Workforce Retention Study', 'Client Service Intake Review']
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
          <h4 class="case-section-title">2. Business Problem</h4>
          <p>${data.problem}</p>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">3. Project Objective</h4>
          <p>${data.objective}</p>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">4. Method & Analytical Approach</h4>
          <p>${data.approach}</p>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">5. Tools & Technologies Applied</h4>
          <div class="project-tools">
            ${data.tools.map(t => `<span class="badge badge-outline">${t}</span>`).join('')}
          </div>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">6. Key Findings</h4>
          <div class="case-key-metrics-box">
            <p><strong>Core Insight:</strong> ${data.findings}</p>
          </div>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">7. Strategic Recommendations</h4>
          <p>${data.recommendations}</p>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">8. Expected Outcome & Business Impact</h4>
          <p>${data.outcomes}</p>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">9. Personal Reflection & Learning</h4>
          <p>${data.reflection}</p>
        </div>

        <div class="case-section-block">
          <h4 class="case-section-title">10. Related Areas of Work</h4>
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
        feedback.textContent = 'Thank you for reaching out. Your message has been received, and I will reply to you promptly.';
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
      const email = btn.getAttribute('data-email') || 'reethika.analytics@example.co.uk';
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
