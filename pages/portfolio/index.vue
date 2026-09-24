<template>
    <AContainer>
        <!-- ============ HEADER ============ -->
        <ASection class="portfolio-section text-5xl mt-8">
            <UIcon name="i-heroicons-briefcase" class="inline-block" />
        </ASection>

        <ASection class="portfolio-section text-2xl my-4">
            <span>Payment Application Developer ( Embedded C and Rust ) <b>@imark</b></span>
        </ASection>

        <ASection>
            <hr />
        </ASection>

        <ASection class="portfolio-section text-xl my-4">
            <span>{ Software Engineering, Fintech, Data Science, and Deep Learning. };</span>
        </ASection>

        <ASection>
            <hr />
        </ASection>

        <!-- ============ SKILLS (timeline-style rows) ============ -->
        <ASection class="w-full max-w-3xl mx-auto px-4 my-6 text-left">
            <div class="skill-rows">
                <div class="skill-row">
                    <div class="skill-key">Stacks</div>
                    <div class="skill-content">
                        <span class="chip">C</span>
                        <span class="chip">Rust</span>
                        <span class="chip">Python3</span>
                        <span class="chip">HTML5</span>
                        <span class="chip">CSS3</span>
                        <span class="chip">TS</span>
                        <span class="chip">PostgreSQL</span>
                    </div>
                </div>

                <div class="skill-row">
                    <div class="skill-key">Utils</div>
                    <div class="skill-content">
                        <span class="chip">RTOS</span>
                        <span class="chip">Flask</span>
                        <span class="chip">Django | DjangoREST</span>
                        <span class="chip">EMV Card | QR Payments</span>
                        <span class="chip">NumPy</span>
                        <span class="chip">Pandas</span>
                        <span class="chip">Matplotlib</span>
                        <span class="chip">PyTorch</span>
                        <span class="chip">TensorFlow</span>
                        <span class="chip">TensorBoard</span>
                        <span class="chip">OpenCV</span>
                        <span class="chip">Google Cloud Platform</span>
                        <span class="chip">Amazon Web Services</span>
                        <span class="chip">Azure DevOps</span>
                        <span class="chip">Linux</span>
                        <span class="chip">Git</span>
                        <span class="chip">Docker</span>
                        <span class="chip">ROS</span>
                    </div>
                </div>

                <div class="skill-row">
                    <div class="skill-key">Enjoys</div>
                    <div class="skill-content">
                        <span class="chip">Knowledge Sharing</span>
                        <span class="chip">Automation</span>
                        <span class="chip">Music</span>
                        <span class="chip">Outdoor Activities</span>
                    </div>
                </div>
                <div class="skill-row">
                    <div class="skill-key">Languages</div>
                    <div class="skill-content">
                        <span class="chip">Nepali: Native</span>
                        <span class="chip">English: Fluent</span>
                        <span class="chip">Deutsch: B1</span>
                        <span class="chip">Français: A1</span>
                        <span class="chip">Русский: A1</span>
                    </div>
                </div>
            </div>
        </ASection>

        <!-- ============ TIMELINES ============ -->
        <ASection class="w-full max-w-3xl mx-auto flex flex-col gap-6 px-4 my-6 text-left">
            <!-- Work Timeline -->
            <details class="acc" open>
                <summary class="acc-summary">
                    <span class="acc-summary-left">
                        <span class="acc-icon">
                            <UIcon name="i-heroicons-briefcase" />
                        </span>
                        <span>Work Timeline</span>
                    </span>
                    <UIcon name="i-heroicons-chevron-down" class="acc-chevron" />
                </summary>

                <div class="acc-body">
                    <div class="tl-row">
                        <div class="tl-year">
                            <span class="tl-year-dot tl-year-dot--active" />
                            2025 — Now
                        </div>
                        <div class="tl-content">
                            <div class="tl-card tl-card--active">
                                <div class="tl-head">
                                    <h4>imark Pvt. Ltd.</h4>
                                    <span class="tl-loc">Kathmandu, Nepal · Onsite</span>
                                </div>
                                <p class="tl-role">Payment Application Developer · Embedded C &amp; Rust</p>
                                <ul class="tl-details">
                                    <li>Engineered PCI-compliant applications for PoS and payment processing ecosystems.</li>
                                    <li>Integrated multi-modal payment engines (QR, IC Chip, Contactless) with resilient HTTP, MQTT, and secure network stacks in C/Rust.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="tl-row">
                        <div class="tl-year">
                            <span class="tl-year-dot" />
                            2023 — 2024
                        </div>
                        <div class="tl-content">
                            <div class="tl-card">
                                <div class="tl-head">
                                    <h4>FfE e.V.</h4>
                                    <span class="tl-loc">München, Germany · Remote</span>
                                </div>
                                <p class="tl-role">Data Science Researcher · Python</p>
                                <ul class="tl-details">
                                    <li>Developed a prosumer reinforcement learning agent for dynamic energy cost optimization.</li>
                                    <li>Implemented deep RL algorithms (PPO, SAC, TD3) using Gymnasium and Stable-Baselines3.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="tl-row">
                        <div class="tl-year">
                            <span class="tl-year-dot" />
                            2022 — 2023
                        </div>
                        <div class="tl-content">
                            <div class="tl-card">
                                <div class="tl-head">
                                    <h4>CloudFluid GmbH</h4>
                                    <span class="tl-loc">Karlsruhe, Germany · Remote</span>
                                </div>
                                <p class="tl-role">Software Developer · Simulation API Server</p>
                                <ul class="tl-details">
                                    <li>Developed multi-cloud interface APIs (AWS, GCP) powering fluid simulation services.</li>
                                    <li>Implemented Django REST backends with custom auth, structlog, and PyTest suites.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="tl-row">
                        <div class="tl-year">
                            <span class="tl-year-dot" />
                            2021 — 2022
                        </div>
                        <div class="tl-content">
                            <div class="tl-card">
                                <div class="tl-head">
                                    <h4>VestiFi GmbH</h4>
                                    <span class="tl-loc">Rostock, Germany · Remote</span>
                                </div>
                                <p class="tl-role">Python Developer · Data Analytics &amp; Reporting</p>
                                <ul class="tl-details">
                                    <li>Generated visualizations (Matplotlib, Seaborn) and reporting (LaTeX, Jinja).</li>
                                    <li>Built ETL pipeline (MonetDB → NumPy → MongoDB) for Wi-Fi radio PCAPs.</li>
                                </ul>
                            </div>

                            <div class="tl-card">
                                <div class="tl-head">
                                    <h4>FuE-Zentrum Kiel</h4>
                                    <span class="tl-loc">Kiel, Germany · Onsite</span>
                                </div>
                                <p class="tl-role">Data ETL Research Assistant · 3D LiDAR</p>
                                <ul class="tl-details">
                                    <li>Collected and managed raw maritime 3D LiDAR data within Kiel Förde.</li>
                                    <li>Transformed raw LiDAR data into point cloud formats (.pcd, .npy).</li>
                                </ul>
                            </div>

                            <div class="tl-card">
                                <div class="tl-head">
                                    <h4>Rokin GmbH</h4>
                                    <span class="tl-loc">München, Germany · Remote</span>
                                </div>
                                <p class="tl-role">NLP / NLU Developer · Intern</p>
                                <ul class="tl-details">
                                    <li>Document classification / tagging with BERT and derivatives.</li>
                                    <li>NLP model development, evaluation, and testing using GCP.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="tl-row">
                        <div class="tl-year">
                            <span class="tl-year-dot" />
                            2021
                        </div>
                        <div class="tl-content">
                            <div class="tl-card tl-card--muted">
                                <div class="tl-head">
                                    <h4>Campus Suite</h4>
                                    <span class="tl-loc">Kiel, Germany</span>
                                </div>
                                <p class="tl-role">Werkstudent · Cafe &amp; Bakery</p>
                            </div>
                        </div>
                    </div>

                    <div class="tl-row">
                        <div class="tl-year">
                            <span class="tl-year-dot" />
                            2020
                        </div>
                        <div class="tl-content">
                            <div class="tl-card tl-card--muted">
                                <div class="tl-head">
                                    <h4>Moby Fish Bar</h4>
                                    <span class="tl-loc">Kiel, Germany</span>
                                </div>
                                <p class="tl-role">Teilzeit Sommer · Service / Bar / Kitchen</p>
                            </div>
                            <div class="tl-card tl-card--muted">
                                <div class="tl-head">
                                    <h4>Baltic Catering</h4>
                                    <span class="tl-loc">Kiel, Germany</span>
                                </div>
                                <p class="tl-role">Teilzeit · Event Organization</p>
                            </div>
                        </div>
                    </div>

                    <div class="tl-row">
                        <div class="tl-year">
                            <span class="tl-year-dot" />
                            2019
                        </div>
                        <div class="tl-content">
                            <div class="tl-card tl-card--muted">
                                <div class="tl-head">
                                    <h4>SantaFe</h4>
                                    <span class="tl-loc">Kiel, Germany</span>
                                </div>
                                <p class="tl-role">Werkstudent · Assistant Cook</p>
                            </div>
                        </div>
                    </div>

                    <div class="tl-row">
                        <div class="tl-year">
                            <span class="tl-year-dot" />
                            2018
                        </div>
                        <div class="tl-content">
                            <div class="tl-card tl-card--muted">
                                <div class="tl-head">
                                    <h4>Staff1 Cruise Ship</h4>
                                    <span class="tl-loc">Kiel, Germany</span>
                                </div>
                                <p class="tl-role">Werkstudent · Provision &amp; Housekeeping</p>
                            </div>
                        </div>
                    </div>

                    <div class="tl-row">
                        <div class="tl-year">
                            <span class="tl-year-dot" />
                            2017
                        </div>
                        <div class="tl-content">
                            <div class="tl-card">
                                <div class="tl-head">
                                    <h4>BI Solutions Pvt. Ltd.</h4>
                                    <span class="tl-loc">Lalitpur, Nepal · Onsite</span>
                                </div>
                                <p class="tl-role">ODOO Module Programmer</p>
                                <ul class="tl-details">
                                    <li>ODOO ERP and CRM custom module development.</li>
                                    <li>Python / ORM / MVC, PostgreSQL, Scrum / Kanban.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </details>

            <!-- Academic Timeline -->
            <details class="acc">
                <summary class="acc-summary">
                    <span class="acc-summary-left">
                        <span class="acc-icon">
                            <UIcon name="i-heroicons-academic-cap" />
                        </span>
                        <span>Academic Timeline</span>
                    </span>
                    <UIcon name="i-heroicons-chevron-down" class="acc-chevron" />
                </summary>

                <div class="acc-body">
                    <!-- OpenCampus -->
                    <div class="edu-block">
                        <div class="edu-head">
                            <div>
                                <h4 class="edu-title">Open Certification · Deep Learning</h4>
                                <p class="edu-sub">OpenCampus.sh · Kiel, Germany</p>
                            </div>
                            <span class="edu-year">2021 — 2022</span>
                        </div>
                        <p class="edu-desc">
                            Foundational deep learning covering network architectures and optimization.
                            Hands-on advanced models on computer vision, NLP / NLU, and hyperparameter tuning.
                        </p>
                        <div class="chip-row">
                            <span class="chip">Fintech Blockchain</span>
                            <span class="chip">Deep Learning</span>
                            <span class="chip">Advanced Deep Learning</span>
                        </div>
                    </div>

                    <!-- Masters -->
                    <div class="edu-block">
                        <div class="edu-head">
                            <div>
                                <h4 class="edu-title">MSc. Information Engineering</h4>
                                <p class="edu-sub">FH Kiel, Germany · Specialization: Intelligent Systems</p>
                            </div>
                            <span class="edu-year">2018 — 2024</span>
                        </div>
                        <p class="edu-desc">Partial Master's Degree (w/o Defence).</p>

                        <div class="edu-grid">
                            <div class="edu-col">
                                <h5>Software &amp; Process</h5>
                                <ul>
                                    <li>Advanced Software Engineering</li>
                                    <li>Business Process Management</li>
                                    <li>Requirement Engineering</li>
                                    <li>Advanced IT Project Management</li>
                                </ul>
                            </div>
                            <div class="edu-col">
                                <h5>Data &amp; AI</h5>
                                <ul>
                                    <li>Machine Learning</li>
                                    <li>Neural Networks &amp; Deep Learning</li>
                                    <li>Automatic Speech Processing</li>
                                    <li>Data Quality Management</li>
                                    <li>Business Analytics</li>
                                </ul>
                            </div>
                            <div class="edu-col">
                                <h5>Security &amp; Systems</h5>
                                <ul>
                                    <li>IT-Security</li>
                                    <li>Network Systems &amp; Security</li>
                                    <li>Privacy &amp; Data Protection</li>
                                    <li>Cloud Computing &amp; Security</li>
                                </ul>
                            </div>
                            <div class="edu-col">
                                <h5>Other</h5>
                                <ul>
                                    <li>Entrepreneurship &amp; Intrapreneurship</li>
                                    <li>Deutsch als Fremdsprache (B1)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="project-list">
                            <div class="project-card">
                                <div class="project-head">
                                    <span class="project-icon">🎨</span>
                                    <b>Master Project</b>
                                </div>
                                <p class="project-title">
                                    Exploration of Art Generation using Deep Generative Models (GANs)
                                </p>
                                <p class="project-desc">
                                    Progressive exploration of Deep Generative Models on a subset of WikiArt to produce realistic art images.
                                </p>
                                <NuxtLink
                                    to="https://github.com/asud3sh/GAN-ArtGeneration"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="project-link"
                                >
                                    Code &amp; Docs
                                    <UIcon name="i-heroicons-arrow-up-right" />
                                </NuxtLink>
                            </div>

                            <div class="project-card">
                                <div class="project-head">
                                    <span class="project-icon">⚡</span>
                                    <b>Master Thesis</b>
                                </div>
                                <p class="project-title">
                                    Training Prosumer Agents with RL for Energy &amp; Cost Optimization
                                </p>
                                <p class="project-desc">
                                    Reinforcement Learning prosumer agent to optimize household energy / cost with BEV scenario.
                                </p>
                                <NuxtLink
                                    to="https://github.com/asud3sh/Bidirectional-EV-ProsumerRLAgent"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="project-link"
                                >
                                    Code &amp; Docs
                                    <UIcon name="i-heroicons-arrow-up-right" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- Bachelors -->
                    <div class="edu-block">
                        <div class="edu-head">
                            <div>
                                <h4 class="edu-title">B.Tech Computer Science &amp; Engineering</h4>
                                <p class="edu-sub">RGPV University, India</p>
                            </div>
                            <span class="edu-year">2012 — 2016</span>
                        </div>

                        <div class="edu-grid">
                            <div class="edu-col">
                                <h5>Sem I</h5>
                                <ul>
                                    <li>Engineering Physics</li>
                                    <li>Energy &amp; Environment</li>
                                    <li>Basic Mechanical Engg.</li>
                                    <li>Basic Civil Engg. &amp; Mechanics</li>
                                    <li>Basic Computer Engg.</li>
                                    <li>Linguistics</li>
                                </ul>
                            </div>
                            <div class="edu-col">
                                <h5>Sem II</h5>
                                <ul>
                                    <li>Engineering Chemistry</li>
                                    <li>Engineering Mathematics I</li>
                                    <li>Basic Electrical &amp; Electronics</li>
                                    <li>Engineering Graphics</li>
                                    <li>Workshops: Welding, Woodcraft…</li>
                                </ul>
                            </div>
                            <div class="edu-col">
                                <h5>Sem III</h5>
                                <ul>
                                    <li>Engineering Mathematics II</li>
                                    <li>Discrete Structures</li>
                                    <li>Digital Circuit &amp; System</li>
                                    <li>Electronics Devices &amp; Circuits</li>
                                    <li>Data Structures</li>
                                </ul>
                            </div>
                            <div class="edu-col">
                                <h5>Sem IV</h5>
                                <ul>
                                    <li>Engineering Mathematics III</li>
                                    <li>Computer System Organization</li>
                                    <li>Object Oriented Technology</li>
                                    <li>Analysis &amp; Design of Algorithms</li>
                                    <li>Analog &amp; Digital Communication</li>
                                </ul>
                            </div>
                            <div class="edu-col">
                                <h5>Sem V</h5>
                                <ul>
                                    <li>Data Communication</li>
                                    <li>Operating Systems</li>
                                    <li>Database Management System</li>
                                    <li>Computer Graphics &amp; Multimedia</li>
                                </ul>
                            </div>
                            <div class="edu-col">
                                <h5>Sem VI</h5>
                                <ul>
                                    <li>Micro Processor &amp; Interfacing</li>
                                    <li>Software Engineering &amp; PM</li>
                                    <li>Computer Networking</li>
                                </ul>
                            </div>
                            <div class="edu-col">
                                <h5>Sem VII</h5>
                                <ul>
                                    <li>Compiler Design</li>
                                    <li>Distributed System</li>
                                    <li>Cloud Computing</li>
                                    <li>Information Storage &amp; Management</li>
                                    <li>Network &amp; Web Security</li>
                                </ul>
                            </div>
                            <div class="edu-col">
                                <h5>Sem VIII</h5>
                                <ul>
                                    <li>Soft Computing</li>
                                    <li>Web Engineering</li>
                                    <li>Network Management</li>
                                    <li>Wireless Networks</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Early Education -->
                    <div class="edu-block">
                        <div class="edu-head">
                            <div>
                                <h4 class="edu-title">Early Education</h4>
                            </div>
                        </div>
                        <ul class="early-list">
                            <li>
                                <b>High School · Caribbean HSS, Nepal</b>
                                <span>2010 — 2012 · Physics, Chemistry, Biology, Mathematics</span>
                            </li>
                            <li>
                                <b>School [ I — X ]</b>
                                <span>2001 — 2010</span>
                            </li>
                            <li>
                                <b>Pre-School [ Nursery · LKG · UKG ]</b>
                                <span>1997 — 2000</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </details>
        </ASection>

        <!-- ============ RESUME ============ -->
        <ASection class="portfolio-section my-6">
            <NuxtLink to="/Resume.pdf" external download="Resume.pdf" class="resume-btn">
                <UIcon name="i-heroicons-arrow-down-tray" class="text-xl" />
                <span>Resumé</span>
            </NuxtLink>
        </ASection>

        <ASection>
            <hr />
        </ASection>

        <!-- ============ SOCIALS ============ -->
        <ASection class="portfolio-section my-6">
            <div class="text-3xl">
                <NuxtLink
                    to="https://github.com/asud3sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="out-link mx-2"
                    aria-label="GitHub"
                >
                    <UIcon name="i-simple-icons-github" />
                </NuxtLink>

                <NuxtLink
                    to="https://www.linkedin.com/in/sud3sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="out-link mx-2"
                    aria-label="LinkedIn"
                >
                    <UIcon name="i-simple-icons-linkedin" />
                </NuxtLink>

                <NuxtLink
                    to="mailto:sudesh.contact@gmail.com"
                    class="out-link mx-2"
                    aria-label="Email"
                >
                    <UIcon name="i-simple-icons-gmail" />
                </NuxtLink>
            </div>
        </ASection>

        <ASection>
            <hr />
        </ASection>

        <!-- ============ CAUSES ============ -->
        <ASection class="portfolio-section my-6">
            <p class="text-xs text-center">
                <i>
                    <b>Causes:</b> Environment • Fintech • Arts and Culture • Libéré src &amp; Decentralized systems.
                </i>
            </p>
        </ASection>
    </AContainer>
</template>

<style scoped>
.portfolio-section {
    @apply flex justify-center items-center;
}

.out-link {
    @apply text-2xl mr-1 inline-flex items-center;
}

/* ============ SKILLS (timeline-style rows) ============ */
.skill-rows {
    @apply flex flex-col;
}

.skill-row {
    @apply grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6
           py-4 border-b border-gray-200 dark:border-gray-800 last:border-b-0;
}

.skill-key {
    @apply text-xs font-bold uppercase tracking-wider opacity-60 pt-1;
}

.skill-content {
    @apply flex flex-wrap gap-1.5;
}

.skill-content--langs {
    @apply flex-col gap-1.5 items-start;
}

.chip {
    @apply inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium
           bg-gray-100 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300
           border border-gray-200 dark:border-gray-800
           transition-colors hover:border-gray-300 dark:hover:border-gray-700;
}

.chip-row {
    @apply flex flex-wrap gap-1.5;
}

.lang-row {
    @apply flex items-baseline justify-between w-full max-w-xs text-sm;
}

.lang-name {
    @apply opacity-80;
}

.lang-level {
    @apply text-xs font-bold uppercase tracking-wide text-blue-500 dark:text-blue-400;
}

/* ============ TIMELINES ============ */
.acc {
    @apply rounded-lg border border-gray-200 dark:border-gray-800
           bg-gray-50 dark:bg-gray-900/50 overflow-hidden;
}

.acc-summary {
    @apply flex justify-between items-center cursor-pointer list-none p-5
           text-lg font-bold transition-colors
           hover:bg-gray-100 dark:hover:bg-gray-800;
}

.acc-summary-left {
    @apply flex items-center gap-3;
}

.acc-icon {
    @apply inline-flex items-center justify-center w-9 h-9 rounded-lg text-lg
           bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300;
}

.acc-chevron {
    @apply transition-transform duration-300;
}

.acc[open] .acc-chevron {
    @apply rotate-180;
}

.acc-body {
    @apply px-5 pb-6 pt-2 border-t border-gray-200 dark:border-gray-800;
}

/* Timeline rows */
.tl-row {
    @apply grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-6 py-4;
}

.tl-year {
    @apply flex items-center gap-2 text-sm font-semibold opacity-80 pt-1;
}

.tl-year-dot {
    @apply w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0;
}

.tl-year-dot--active {
    @apply bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)];
}

.tl-content {
    @apply flex flex-col gap-3;
}

.tl-card {
    @apply rounded-xl p-4 border border-gray-100 dark:border-gray-800
           bg-white/60 dark:bg-gray-900/40
           hover:border-gray-300 dark:hover:border-gray-700
           transition-colors;
}

.tl-card--active {
    @apply border-emerald-200 dark:border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-500/5;
}

.tl-card--muted {
    @apply opacity-80;
}

.tl-head {
    @apply flex flex-wrap items-baseline justify-between gap-2 mb-1;
}

.tl-head h4 {
    @apply font-bold text-base;
}

.tl-loc {
    @apply text-xs opacity-60 font-medium;
}

.tl-role {
    @apply text-sm font-medium opacity-90 mb-2;
}

.tl-details {
    @apply list-disc ml-4 space-y-1 text-sm opacity-80;
}

/* ============ EDUCATION ============ */
.edu-block {
    @apply py-6 border-b border-gray-200 dark:border-gray-800 last:border-0;
}

.edu-head {
    @apply flex flex-wrap items-start justify-between gap-2 mb-3;
}

.edu-title {
    @apply text-lg font-bold;
}

.edu-sub {
    @apply text-sm opacity-60 mt-0.5;
}

.edu-year {
    @apply text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg
           bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300
           border border-gray-200 dark:border-gray-700;
}

.edu-desc {
    @apply text-sm opacity-80 mb-3;
}

.edu-grid {
    @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4;
}

.edu-col h5 {
    @apply text-xs font-bold uppercase tracking-wider mb-2 opacity-70
           pb-1 border-b border-gray-200 dark:border-gray-800;
}

.edu-col ul {
    @apply space-y-1 text-xs opacity-80;
}

/* ============ PROJECTS ============ */
.project-list {
    @apply grid grid-cols-1 md:grid-cols-2 gap-4 mt-6;
}

.project-card {
    @apply rounded-xl p-4 border border-gray-100 dark:border-gray-800
           bg-white/60 dark:bg-gray-900/40
           hover:border-gray-300 dark:hover:border-gray-700
           transition-colors;
}

.project-head {
    @apply flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-70 mb-2;
}

.project-icon {
    @apply text-base;
}

.project-title {
    @apply text-sm font-semibold mb-1.5;
}

.project-desc {
    @apply text-xs opacity-75 mb-3 leading-relaxed;
}

.project-link {
    @apply inline-flex items-center gap-1 text-xs font-semibold
           text-blue-500 dark:text-blue-400 hover:gap-2 transition-all;
}

/* ============ EARLY EDUCATION ============ */
.early-list {
    @apply space-y-3;
}

.early-list li {
    @apply flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1
           py-2 border-b border-gray-200 dark:border-gray-800 last:border-0;
}

.early-list li b {
    @apply text-sm font-semibold;
}

.early-list li span {
    @apply text-xs opacity-60;
}

/* ============ MISC ============ */
code {
    @apply bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm;
}

.resume-btn {
    @apply inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg
           hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors;
}

hr {
    @apply w-full max-w-md mx-auto my-2 border-t border-gray-200 dark:border-gray-700;
}

details > summary {
    list-style: none;
}

details > summary::-webkit-details-marker {
    display: none;
}
</style>