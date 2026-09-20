<template>
    <AContainer>
        <ASection class="portfolio-section text-5xl mt-8">
            <UIcon name="i-heroicons-briefcase" class="inline-block" />
        </ASection>

        <ASection class="portfolio-section text-2xl my-4">
            <span>Payment Application Developer (Embedded C and Rust) <b>@imark</b></span>
        </ASection>

        <ASection>
            <hr />
        </ASection>

        <ASection class="portfolio-section text-xl my-4">
            <span>{ Software Development, Data Science, and Deep Learning. };</span>
        </ASection>

        <ASection>
            <hr />
        </ASection>

        <!-- Accordion Timelines Section -->
        <ASection class="my-8 w-full max-w-3xl mx-auto flex flex-col gap-4 px-4 text-left">
            <!-- Work Timeline Accordion -->
            <details class="group border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                <summary class="flex justify-between items-center cursor-pointer list-none p-5 text-lg font-bold transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                    <span class="flex items-center gap-2">
                        <UIcon name="i-heroicons-briefcase" class="text-xl" />
                        Work Timeline
                    </span>
                    <span class="transition group-open:rotate-180">
                        <UIcon name="i-heroicons-chevron-down" />
                    </span>
                </summary>
                <div class="p-5 border-t border-gray-200 dark:border-gray-800 space-y-6">
                    <div class="timeline-block">
                        <h4 class="timeline-year">2025 – Present</h4>
                        <ul class="timeline-list">
                            <li>💳 <b>imark Pvt. Ltd.</b> — Payment Applications Developer (Embedded C and Rust)</li>
                        </ul>
                    </div>
                    <div class="timeline-block">
                        <h4 class="timeline-year">2024</h4>
                        <ul class="timeline-list">
                            <li>⚡ <b>FfE e.V.</b> — Data Science Researcher - Python (Reinforcement Learning in HEMS | Energy Consumption Optimization)</li>
                        </ul>
                    </div>
                    <div class="timeline-block">
                        <h4 class="timeline-year">2023</h4>
                        <ul class="timeline-list">
                            <li>⚙️ <b>CloudFluid GmbH</b> — Software Developer (Simulation API Server)</li>
                        </ul>
                    </div>
                    <div class="timeline-block">
                        <h4 class="timeline-year">2022</h4>
                        <ul class="timeline-list">
                            <li>📊 <b>VestiFi GmbH</b> — Python Developer (Data Analytics, Visualization, and Reporting)</li>
                            <li>📡 <b>FuE-Zentrum Kiel</b> — Data ETL (3D LiDAR Data Processing)</li>
                        </ul>
                    </div>
                    <div class="timeline-block">
                        <h4 class="timeline-year">2021</h4>
                        <ul class="timeline-list">
                            <li>🥯 <b>Campus Suite</b> — Werkstudent (Cafe and Bakery)</li>
                            <li>🤖 <b>Rokin GmbH</b> — NLP Developer (Intern-Project Contract)</li>
                        </ul>
                    </div>
                    <div class="timeline-block">
                        <h4 class="timeline-year">2020</h4>
                        <ul class="timeline-list">
                            <li>🐋 <b>Moby Fish Bar</b> — Teilzeit Sommer | Service / BAR / Kitchen</li>
                            <li>🍷 <b>Baltic Catering</b> — Teilzeit Event Organization</li>
                        </ul>
                    </div>
                    <div class="timeline-block">
                        <h4 class="timeline-year">2019</h4>
                        <ul class="timeline-list">
                            <li>🍲 <b>SantaFe</b> — Werkstudent Assistant Cook</li>
                        </ul>
                    </div>
                    <div class="timeline-block">
                        <h4 class="timeline-year">2018</h4>
                        <ul class="timeline-list">
                            <li>🚢 <b>Staff1 Cruise Ship</b> — Werkstudent Provision / Housekeeping</li>
                        </ul>
                    </div>
                    <div class="timeline-block">
                        <h4 class="timeline-year">2017</h4>
                        <ul class="timeline-list">
                            <li>🐍 <b>BI Solutions</b> — Python Odoo Developer</li>
                        </ul>
                    </div>
                </div>
            </details>

            <!-- Academic Timeline Accordion -->
            <details class="group border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                <summary class="flex justify-between items-center cursor-pointer list-none p-5 text-lg font-bold transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                    <span class="flex items-center gap-2">
                        <UIcon name="i-heroicons-academic-cap" class="text-xl" />
                        Academic Timeline
                    </span>
                    <span class="transition group-open:rotate-180">
                        <UIcon name="i-heroicons-chevron-down" />
                    </span>
                </summary>
                <div class="p-5 border-t border-gray-200 dark:border-gray-800 space-y-8">
                    <!-- OpenCampus -->
                    <div>
                        <h4 class="text-xl font-semibold mb-2">
                            OpenCampus.sh
                            <span class="text-sm font-normal opacity-75">| 2021 - 2022</span>
                        </h4>
                        <ul class="list-disc ml-5 space-y-1 opacity-90">
                            <li>
                                Fintech Blockchain
                            </li>
                            <li>Deep Learning</li>
                            <li>Advanced Deep Learning</li>
                        </ul>
                    </div>

                    <!-- Masters -->
                    <div>
                        <h4 class="text-xl font-semibold mb-4">
                            Masters (Partial | W/o Defence)
                            <span class="text-sm font-normal opacity-75">| 2018 - 2024</span>
                        </h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-90">
                            <div>
                                <h5 class="font-bold border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">Software &amp; Process</h5>
                                <ul class="list-disc ml-4 text-sm space-y-1">
                                    <li>Advanced Software Engineering</li>
                                    <li>Business Process Management System</li>
                                    <li>Requirement Engineering</li>
                                    <li>Advanced IT Project Management</li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="font-bold border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">Data &amp; AI</h5>
                                <ul class="list-disc ml-4 text-sm space-y-1">
                                    <li>Machine Learning</li>
                                    <li>Neural Networks and Deep Learning</li>
                                    <li>Automatic Speech Processing</li>
                                    <li>Data Quality Management</li>
                                    <li>Business Analytics</li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="font-bold border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">Security &amp; Systems</h5>
                                <ul class="list-disc ml-4 text-sm space-y-1">
                                    <li>IT-Security</li>
                                    <li>Network Systems and Security</li>
                                    <li>Privacy and Data Protection</li>
                                    <li>Cloud Computing and Security</li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="font-bold border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">Other</h5>
                                <ul class="list-disc ml-4 text-sm space-y-1">
                                    <li>Entrepreneurship and Intrapreneurship</li>
                                    <li>Deutsch als Fremdsprache (DaF - B1)</li>
                                </ul>
                            </div>
                        </div>

                        <ul class="list-none mt-6 space-y-3 opacity-90">
                            <li>
                                <b>Master Project:</b>
                                <code>Exploration of Art Generation using Deep Generative models (GANs).</code>
                                <span class="text-sm italic">
                                    🎨 Series of progressive exploration and experimentation of Deep Generative Models on subset of WikiArt dataset to produce Realistic art Images.
                                </span>
                                <NuxtLink
                                    to="https://github.com/asud3sh/GAN-ArtGeneration"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-blue-500 hover:underline"
                                >
                                    [Code and Docs]
                                </NuxtLink>
                            </li>
                            <li>
                                <b>Master Thesis:</b>
                                <code>Training Prosumer Agents with Reinforcement Learning for Energy and Cost Optimization</code>
                                <span class="text-sm italic">
                                    ⚡ Reinforcement Learning Prosumer Agent to Optimize Household energy/cost with BEV Scenario
                                </span>
                                <NuxtLink
                                    to="https://github.com/asud3sh/Bidirectional-EV-ProsumerRLAgent"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-blue-500 hover:underline"
                                >
                                    [Code and Docs]
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <!-- Bachelors -->
                    <div>
                        <h4 class="text-xl font-semibold mb-4">
                            Bachelors
                            <span class="text-sm font-normal opacity-75">| 2012 - 2016</span>
                        </h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-90">
                            <div>
                                <h5 class="font-bold border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">Semester I</h5>
                                <ul class="list-disc ml-4 text-sm space-y-1">
                                    <li>Engineering Physics</li>
                                    <li>Energy, Environment, Ecology and Society</li>
                                    <li>Basic Mechanical Engineering</li>
                                    <li>Basic Civil Engineering &amp; Mechanics</li>
                                    <li>Basic Computer Engineering</li>
                                    <li>Linguistics</li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="font-bold border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">Semester II</h5>
                                <ul class="list-disc ml-4 text-sm space-y-1">
                                    <li>Engineering Chemistry</li>
                                    <li>Engineering Mathematics - I</li>
                                    <li>Basic Electrical &amp; Electronics</li>
                                    <li>Engineering Graphics</li>
                                    <li>Workshops: Welding, Mudcraft, Woodcraft, Metalcraft</li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="font-bold border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">Semester III</h5>
                                <ul class="list-disc ml-4 text-sm space-y-1">
                                    <li>Engineering Mathematics - II</li>
                                    <li>Discrete Structures</li>
                                    <li>Digital Circuit and System</li>
                                    <li>Electronics Devices and Circuits</li>
                                    <li>Data Structures</li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="font-bold border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">Semester IV</h5>
                                <ul class="list-disc ml-4 text-sm space-y-1">
                                    <li>Engineering Mathematics - III</li>
                                    <li>Computer System Organization</li>
                                    <li>Object Oriented Technology</li>
                                    <li>Analysis and Design of Algorithms</li>
                                    <li>Analog and Digital Communication</li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="font-bold border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">Semester V</h5>
                                <ul class="list-disc ml-4 text-sm space-y-1">
                                    <li>Data Communication</li>
                                    <li>Operating Systems</li>
                                    <li>Database Management System</li>
                                    <li>Computer Graphics and Multimedia</li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="font-bold border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">Semester VI</h5>
                                <ul class="list-disc ml-4 text-sm space-y-1">
                                    <li>Micro Processor and Interfacing</li>
                                    <li>Software Engineering &amp; Project Mgmt</li>
                                    <li>Computer Networking</li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="font-bold border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">Semester VII</h5>
                                <ul class="list-disc ml-4 text-sm space-y-1">
                                    <li>Compiler Design</li>
                                    <li>Distributed System</li>
                                    <li>Cloud Computing</li>
                                    <li>Information Storage and Management</li>
                                    <li>Network and Web Security</li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="font-bold border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">Semester VIII</h5>
                                <ul class="list-disc ml-4 text-sm space-y-1">
                                    <li>Soft Computing</li>
                                    <li>Web Engineering</li>
                                    <li>Network Management</li>
                                    <li>Wireless Networks</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Early Education -->
                    <div>
                        <h4 class="text-xl font-semibold mb-2">Early Education</h4>
                        <ul class="list-none space-y-2 opacity-90">
                            <li>
                                <b>High-School </b>
                                <span class="text-sm">(2010 - 2012)</span>:
                                Physics, Chemistry, Biology, Mathematics, English.
                            </li>
                            <li>
                                <b>School [I - X] </b>
                                <span class="text-sm">(2001 - 2010)</span>
                            </li>
                            <li>
                                <b>Pre-School </b>
                                <span class="text-sm">[ Nursery, LKG, UKG ] (1997 - 2000)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </details>
        </ASection>
        <ASection class="portfolio-section my-4">
            <NuxtLink to="/Resume.pdf" external download="Resume.pdf" class="resume-btn">
                <UIcon name="i-heroicons-arrow-down-tray" class="text-xl" />
                <span>Resume</span>
            </NuxtLink>
        </ASection>
        <ASection>
            <hr />
        </ASection>

        <ASection class="portfolio-section my-4">
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

        <ASection class="portfolio-section my-4">
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

/* Accordion Specific Styling */
details > summary {
    list-style: none;
}
details > summary::-webkit-details-marker {
    display: none;
}

.timeline-block {
    @apply flex flex-col md:flex-row gap-2 md:gap-6;
}

.timeline-year {
    @apply text-lg font-bold min-w-[120px] pt-1 opacity-90;
}

.timeline-list {
    @apply list-none space-y-2 m-0 p-0 opacity-90;
}

code {
    @apply bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm;
}
.resume-btn {
    @apply inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors;
}
hr {
    @apply w-full max-w-md mx-auto my-2 border-t border-gray-200 dark:border-gray-700;
}
</style>