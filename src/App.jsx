import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Technologies", href: "#technologies" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white transition-colors duration-500">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Services />
      <Technologies />
      <Process />
      <Projects />
      <Engagement />
      <Contact />
      <Footer />
    </div>
  );
}

const Navbar = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white/80 dark:bg-slate-950/70 backdrop-blur border-b border-slate-200 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="AP Software Logo"
            className="h-9 w-auto rounded-md shadow-sm animate-float"
          />
          <div>
            <div className="text-sm font-semibold leading-tight">
              AP Software
            </div>
            <div className="text-[11px] text-slate-500 dark:text-gray-400 leading-tight">
              PHP &amp; React Development
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-100 border border-slate-300/70 dark:border-slate-600/70 hover:scale-105 transition-all"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>

          <a
            href="#contact"
            className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md shadow-primary-500/30 hover:shadow-lg hover:shadow-primary-500/40 hover:opacity-95 transition-all"
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-300 dark:border-white/20"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1">
            <div className="w-5 h-0.5 bg-slate-800 dark:bg-white" />
            <div className="w-5 h-0.5 bg-slate-800 dark:bg-white" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-white/10">
          <nav className="flex flex-col px-4 pb-4 gap-2 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-700 dark:text-gray-300 py-1"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                }}
                className="flex-1 px-3 py-2 rounded-full text-xs font-medium bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-100 border border-slate-300/70 dark:border-slate-600/70"
              >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
              <a
                href="#contact"
                className="flex-1 px-4 py-2 text-xs text-center rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white"
                onClick={() => setOpen(false)}
              >
                Get Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 md:pt-28 pb-16 md:pb-24 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.22),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 animate-fade-in">
        {/* Left text */}
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 dark:bg-slate-800/70 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-gray-200 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            PHP · React · MySQL · Laravel · Node.js
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
            We build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              modern web &amp; software
            </span>{" "}
            that grows your business.
          </h1>

          <p className="mt-4 text-slate-700 dark:text-gray-300 max-w-xl text-sm md:text-base">
            AP Software is a full-stack development company specialising in PHP,
            Laravel, React and modern JavaScript. We create websites, web apps,
            CRMs, ERPs and custom software tailored for your business.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-sm font-medium text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:translate-y-[1px] transition-all"
            >
              Discuss a Project
            </a>
            <a
              href="#projects"
              className="px-4 py-2 rounded-full border border-slate-300 dark:border-white/20 text-sm text-slate-700 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-white/5 transition"
            >
              View Our Work
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-5 text-xs text-slate-500 dark:text-gray-400">
            <div>
              <div className="font-semibold text-slate-900 dark:text-gray-100">
                3+ years
              </div>
              <div>Real project experience</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 dark:text-gray-100">
                10+ projects
              </div>
              <div>Delivered successfully</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 dark:text-gray-100">
                End-to-end
              </div>
              <div>Design to deployment</div>
            </div>
          </div>
        </div>

        {/* Right card: tech stack showcase */}
        <div className="flex-1 max-w-md w-full">
          <div className="rounded-3xl bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 p-4 md:p-5 shadow-xl shadow-slate-300/50 dark:shadow-black/40 animate-fade-in">
            <div className="flex items-center justify-between mb-4 text-xs text-slate-500 dark:text-gray-400">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <span>Stack · Production ready</span>
            </div>

            <h3 className="text-sm font-semibold mb-3 text-slate-900 dark:text-gray-100">
              Typical project architecture
            </h3>

            <div className="grid grid-cols-2 gap-3 text-xs mb-4">
              <TechTag title="Frontend" items={["React", "Next.js", "Tailwind"]} />
              <TechTag title="Backend" items={["PHP", "Laravel", "Node.js"]} />
              <TechTag title="Database" items={["MySQL", "PostgreSQL"]} />
              <TechTag title="Tools" items={["Git", "Docker", "CI/CD"]} />
            </div>

            <div className="rounded-2xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-white/10 p-3 text-[11px] text-slate-700 dark:text-gray-300">
              “We focus on clean architecture, reusable components and scalable
              APIs, so your software is easy to maintain and extend in future.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechTag = ({ title, items }) => (
  <div className="rounded-2xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 p-3">
    <div className="text-[11px] text-slate-500 dark:text-gray-400 mb-1">
      {title}
    </div>
    <div className="flex flex-wrap gap-1">
      {items.map((i) => (
        <span
          key={i}
          className="px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-900 text-[10px] text-slate-800 dark:text-gray-200"
        >
          {i}
        </span>
      ))}
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Custom Web Applications",
      desc: "End-to-end web apps using PHP/Laravel and React for dashboards, portals and internal tools.",
    },
    {
      title: "Website Design & Development",
      desc: "Modern, responsive, SEO-friendly websites built with React, Next.js and Tailwind CSS.",
    },
    {
      title: "CRM & ERP Solutions",
      desc: "Custom business solutions for sales, HR, loans, finance or operations with role-based access.",
    },
    {
      title: "API & Backend Development",
      desc: "REST APIs, third-party integrations, secure authentication and scalable backend systems.",
    },
    {
      title: "Maintenance & Support",
      desc: "Bug fixing, feature upgrades, performance optimisation and server monitoring.",
    },
    {
      title: "Consulting & Code Review",
      desc: "Architecture guidance, best practices, refactoring and migration from legacy systems.",
    },
  ];

  return (
    <section
      id="services"
      className="py-14 md:py-20 bg-slate-50 dark:bg-slate-950/60 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Services we provide as your tech partner</h2>
          <p className="section-subtitle">
            From idea to deployment, we support you with modern PHP &amp; React
            solutions tailored to your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-xs">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 p-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/25 transition-all"
            >
              <h3 className="text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                {s.title}
              </h3>
              <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Technologies = () => {
  const categories = [
    {
      title: "Frontend",
      items: ["React", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Material UI"],
    },
    {
      title: "Backend",
      items: ["PHP", "Laravel", "Node.js", "Express.js"],
    },
    {
      title: "Database",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      title: "DevOps & Tools",
      items: ["Git & GitHub", "Docker", "CI/CD", "REST APIs"],
    },
  ];

  return (
    <section id="technologies" className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Technologies we work with</h2>
          <p className="section-subtitle">
            We choose the right stack based on your use-case, scalability needs
            and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 text-xs">
          {categories.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 p-4 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-300/40 dark:hover:shadow-black/30 transition-all"
            >
              <h3 className="font-semibold text-sm mb-3 text-primary-600 dark:text-primary-100">
                {c.title}
              </h3>
              <ul className="space-y-1.5 text-slate-700 dark:text-gray-300">
                {c.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-500" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      tag: "Step 1",
      title: "Understand & plan",
      desc: "We discuss requirements, workflows and expectations, then prepare a clear scope and timeline.",
    },
    {
      tag: "Step 2",
      title: "Design & architecture",
      desc: "UI wireframes, database design and system architecture are finalised before coding.",
    },
    {
      tag: "Step 3",
      title: "Development",
      desc: "Agile sprints with regular updates, staging builds and feedback cycles.",
    },
    {
      tag: "Step 4",
      title: "Testing & launch",
      desc: "Functional, performance and security checks before going live on production.",
    },
    {
      tag: "Step 5",
      title: "Support & improvements",
      desc: "Ongoing maintenance, enhancements and monitoring as your business grows.",
    },
  ];

  return (
    <section
      id="process"
      className="py-14 md:py-20 bg-slate-50 dark:bg-slate-950/70 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <h2 className="section-title">
              Our development process – transparent &amp; collaborative
            </h2>
            <p className="section-subtitle text-left">
              We keep you involved at every stage with clear communication,
              demos and progress tracking.
            </p>

            <div className="mt-6 space-y-3 text-xs">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="flex gap-3 items-start bg-white/90 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 rounded-2xl p-3"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-[11px] font-semibold text-white shadow">
                      {i + 1}
                    </div>
                    {i !== steps.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-primary-500/60 to-transparent mt-1" />
                    )}
                  </div>
                  <div>
                    <div className="text-[11px] text-primary-600 dark:text-primary-200">
                      {s.tag}
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-gray-100">
                      {s.title}
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-gray-400">
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-primary-500/40 bg-white/90 dark:bg-slate-900/80 p-5 text-xs shadow-xl shadow-primary-500/20 dark:shadow-primary-900/40">
            <h3 className="text-sm font-semibold mb-2 text-slate-900 dark:text-white">
              Why clients like working with us
            </h3>
            <ul className="space-y-1 text-slate-700 dark:text-gray-200">
              <li>• Direct communication with developer</li>
              <li>• Regular progress updates &amp; demo links</li>
              <li>• Clean, readable code with comments</li>
              <li>• Documentation &amp; handover support</li>
              <li>• Understanding of real business workflows</li>
            </ul>

            <div className="mt-5 p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10">
              <div className="text-[11px] text-slate-700 dark:text-gray-300">
                “From dashboards to staff tracking and multilingual exam
                systems, we have worked on real, production-grade applications
                end-to-end.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "Devrit India",
      type: "Software Company Website & Admin",
      stack: "React, Tailwind, Node.js, MySQL",
      desc: "Corporate website and internal admin panel for managing services, clients and content.",
    },
    {
      name: "Shivkrupa Shakti Pathpedhi",
      type: "Staff Tracking & Loan Dashboard",
      stack: "React, Leaflet, Charts, API",
      desc: "Location tracking of staff on map, leads & recovery dashboards with multiple charts.",
    },
    {
      name: "Sampda Bank",
      type: "Loan Application System",
      stack: "React, Node.js, PDF generation",
      desc: "Multilingual loan application and business application with PDF export in Marathi.",
    },
  ];

  return (
    <section id="projects" className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Selected projects</h2>
          <p className="section-subtitle">
            Here are some examples of real applications we have worked on using
            React and backend technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-xs">
          {projects.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 p-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/25 transition-all"
            >
              <div className="text-[11px] text-primary-700 dark:text-primary-200 mb-1">
                {p.type}
              </div>
              <h3 className="text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                {p.name}
              </h3>
              <p className="text-slate-700 dark:text-gray-300 mb-3">
                {p.desc}
              </p>
              <div className="text-[11px] text-slate-500 dark:text-gray-400">
                Tech stack: {p.stack}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Engagement = () => {
  const models = [
    {
      name: "Fixed-price project",
      desc: "Best when requirements are clear. We agree on scope, timeline and a fixed cost.",
      goodFor: "Websites, small web apps, landing pages, MVPs.",
    },
    {
      name: "Monthly dedicated developer",
      desc: "Hire us like an in-house developer for continuous work every month.",
      goodFor: "Ongoing product development, startups, agencies.",
    },
    {
      name: "Hourly / task-based",
      desc: "Pay only for the hours spent. Perfect for bug fixes or small enhancements.",
      goodFor: "Maintenance, refactoring, feature updates.",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-slate-50 dark:bg-slate-950/70 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Flexible engagement models</h2>
          <p className="section-subtitle">
            Choose how you want to work with us based on your budget and type
            of project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-xs">
          {models.map((m, i) => (
            <div
              key={m.name}
              className={`rounded-3xl border p-5 bg-white/90 dark:bg-slate-900/80 transition-all ${
                i === 1
                  ? "border-primary-500 shadow-xl shadow-primary-500/25 scale-[1.02]"
                  : "border-slate-200 dark:border-white/10"
              }`}
            >
              <h3 className="text-sm font-semibold mb-1 text-slate-900 dark:text-white">
                {m.name}
              </h3>
              <p className="text-slate-700 dark:text-gray-300 mb-3">
                {m.desc}
              </p>
              <div className="text-[11px] text-slate-500 dark:text-gray-400">
                Best for: {m.goodFor}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.2fr_1fr] gap-10">
        <div>
          <h2 className="section-title">Let’s talk about your project</h2>
          <p className="section-subtitle text-left mb-5">
            Share a few details and we’ll get back with a rough plan, timeline
            and estimated cost. No obligation.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-3 text-xs"
          >
            <div className="grid md:grid-cols-2 gap-3">
              <Input label="Full Name" type="text" required />
              <Input label="Company / Brand Name" type="text" />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <Input label="Mobile Number" type="tel" required />
              <Input label="Email" type="email" required />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-700 dark:text-gray-300">
                  Budget range (approx.)
                </label>
                <select className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/20 rounded-xl px-3 py-2 text-[11px] text-slate-800 dark:text-gray-200 focus:outline-none focus:border-primary-500">
                  <option value="not-sure">Not sure yet</option>
                  <option value="25k-50k">₹25,000 - ₹50,000</option>
                  <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                  <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                  <option value="3l+">₹3,00,000+</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-700 dark:text-gray-300">
                  What do you need?
                </label>
                <select className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/20 rounded-xl px-3 py-2 text-[11px] text-slate-800 dark:text-gray-200 focus:outline-none focus:border-primary-500">
                  <option>Website</option>
                  <option>Web application</option>
                  <option>CRM / ERP</option>
                  <option>API / backend</option>
                  <option>Maintenance / bug fixes</option>
                  <option>Other / not sure</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-[11px] text-slate-700 dark:text-gray-300 mb-1 block">
                Short description of your project
              </label>
              <textarea
                rows="3"
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/20 rounded-xl px-3 py-2 text-[11px] text-slate-800 dark:text-gray-200 focus:outline-none focus:border-primary-500 resize-none"
                placeholder="Example: We need a loan management system for our finance company with different roles and reports..."
              />
            </div>

            <button
              type="submit"
              className="mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-xs font-medium text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:translate-y-[1px] transition-all"
            >
              Send Enquiry
            </button>

            <p className="text-[11px] text-slate-600 dark:text-gray-400 mt-2">
              You can also WhatsApp or call us directly if you prefer.
            </p>
          </form>
        </div>

        <div className="space-y-4 text-xs">
          <div className="rounded-3xl bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 p-4">
            <h3 className="text-sm font-semibold mb-2 text-slate-900 dark:text-white">
              Contact Details
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              📞 +91-98765 43210
              <br />
              ✉ contact@apsoftware.com
              <br />
              📍 Pune, Maharashtra, India
            </p>
          </div>

          <div className="rounded-3xl bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 p-4">
            <h3 className="text-sm font-semibold mb-2 text-slate-900 dark:text-white">
              Prefer backend in PHP?
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              We can build your backend and APIs in PHP or Laravel and frontend
              in React. We also integrate with your existing PHP projects and
              migrate screens to React step by step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Input = ({ label, type = "text", ...rest }) => (
  <div className="flex flex-col gap-1">
    <label className="text-[11px] text-slate-700 dark:text-gray-300">
      {label}
    </label>
    <input
      type={type}
      className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/20 rounded-xl px-3 py-2 text-[11px] text-slate-800 dark:text-gray-200 focus:outline-none focus:border-primary-500"
      {...rest}
    />
  </div>
);

const Footer = () => (
  <footer className="border-t border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-950/90">
    <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 dark:text-gray-400">
      <div>
        © {new Date().getFullYear()} AP Software. All rights reserved.
      </div>
      <div className="flex gap-4">
        <a href="#home" className="hover:text-primary-600 dark:hover:text-gray-200">
          Home
        </a>
        <a
          href="#services"
          className="hover:text-primary-600 dark:hover:text-gray-200"
        >
          Services
        </a>
        <a
          href="#contact"
          className="hover:text-primary-600 dark:hover:text-gray-200"
        >
          Contact
        </a>
      </div>
    </div>
  </footer>
);

export default App;
