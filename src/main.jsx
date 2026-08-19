import React, { useLayoutEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const resume = {
  name: "Harshit Gujarathi",
  role: "Software Developer",
  experience: "1.8+ years",
  email: "harshitguju20@gmail.com",
  phone: "8007893743",
  github: "https://github.com/HarshitGujarathi",
  linkedin: "https://linkedin.com/in/HarshitGujarathi",
  ardra: "https://www.ardracraft.com/",
  clinderma: "https://www.theclinderma.com/",
  dataLineage: "https://data-model-diagram.vercel.app/",
  audioVideo: "https://github.com/HarshitGujarathi/AUDIOVIDEOHUB.git",
  intro:
    "I build data-driven e-commerce platforms, CRM automation pipelines, behavioural analytics systems and interactive web products."
};

const skills = [
  ["JavaScript / Node.js", "Advanced"],
  ["Python", "Advanced"],
  ["PHP", "Advanced"],
  ["React.js", "Intermediate"],
  ["Django", "Intermediate"],
  ["MySQL / SQL Server", "Advanced"],
  ["Shopify", "Advanced"],
  ["CRM Automation", "Advanced"],
  ["HTML5 / CSS3", "Advanced"],
  ["SEO / Analytics", "Advanced"]
];

const projects = [
  {
    title: "Data Lineage & Modeling Tool",
    tag: "React · React Flow",
    text: "Interactive database schema designer supporting 1:1, 1:N and N:M relationships, live table setup, JSON import/export and SVG download.",
    link: resume.dataLineage
  },
  {
    title: "Complaint Register System",
    tag: "React",
    text: "Responsive complaint registration and tracking frontend with reusable components, accessibility-first design and smooth UX across devices.",
    link: "#"
  },
  {
    title: "Polyglot Software",
    tag: "Python · JavaScript",
    text: "Research and development project focused on multilingual data cleaning and feature analysis for NLP solution pathways.",
    link: "https://youtu.be/WkupLsba"
  },
  {
    title: "Audio Video Hub",
    tag: "Django · HTML · CSS",
    text: "Media platform enabling creators to upload meme content and users to download content in audio or video formats.",
    link: resume.audioVideo
  }
];

const certifications = [
  "AI Fundamentals — 2026",
  "Project Management Fundamentals — 2026",
  "Cloud Computing — IBM",
  "Job Application Essentials",
  "Techsaksham × Microsoft — Full Stack Web Development",
  "Techsaksham × Microsoft — Cloud Computing",
  "Techsaksham × Microsoft — AI",
  "Python Training — IIT Bombay Spoken Tutorial",
  "Java Test — IIT Bombay Spoken Tutorial",
  "C Test — IIT Bombay Spoken Tutorial"
];

function BrowserBar({ label = "harshit.dev" }) {
  return (
    <div className="browser-bar">
      <div className="browser-dots"><i/><i/><i/></div>
      <span>{label}</span>
      <div className="browser-actions">— □ ×</div>
    </div>
  );
}

function ScreenContent({ mode }) {
  if (mode === "hero") {
    return (
      <div className="screen hero-screen">
        <div className="screen-grid"/>
        <div className="hero-info">
          <p className="eyebrow">SOFTWARE DEVELOPER · INDIA</p>
          <h1>HARSHIT<br/><span>GUJARATHI</span></h1>
          <p className="hero-copy">{resume.intro}</p>
          <div className="screen-pills">
            <b>REACT</b><b>NODE.JS</b><b>PYTHON</b><b>SHOPIFY</b><b>CRM</b><b>Google App Script</b>
          </div>
        </div>
        <div className="hero-photo" aria-label="Harshit Gujarathi profile photo">
          <img src="/profile (2).png" alt="Harshit Gujarathi" />
        </div>
      </div>
    );
  }

  if (mode === "ardra") {
    return (
      <div className="screen project-screen">
        <BrowserBar label="ardracraft.com / experience"/>
        <div className="screen-content">
          <span className="screen-label">01 / EXPERIENCE</span>
          <h2>ARDRA</h2>
          <p>Shopify e-commerce platform engineered for mobile-first UX and high-conversion product flows.</p>
          <div className="mini-metrics">
            <span><strong>100+</strong> SKUs</span>
            <span><strong>Custom</strong> sizing</span>
            <span><strong>Dynamic</strong> pricing</span>
          </div>
        </div>
      </div>
    );
  }

  if (mode === "clinderma") {
    return (
      <div className="screen project-screen">
        <BrowserBar label="theclinderma.com / recommendation"/>
        <div className="screen-content">
          <span className="screen-label">02 / EXPERIENCE</span>
          <h2>CLINDERMA</h2>
          <div className="flow">
            <span>User Assessment</span><b>↓</b><span>Recommendation Engine</span><b>↓</b><span>Treatment Plan</span><b>↓</b><span>CRM Automation</span>
          </div>
        </div>
      </div>
    );
  }

  if (mode === "projects") {
    return (
      <div className="screen project-screen">
        <BrowserBar label="projects / data-model"/>
        <div className="screen-content">
          <span className="screen-label">03 / PROJECTS</span>
          <h2>DATA LINEAGE</h2>
          <div className="schema">
            <span>USERS</span><em>1:N</em><span>ORDERS</span>
            <div className="schema-line"/>
            <span>PRODUCTS</span><em>N:M</em><span>ORDERS</span>
          </div>
          <small>React Flow · JSON Import/Export · SVG Download</small>
        </div>
      </div>
    );
  }

  if (mode === "skills") {
    return (
      <div className="screen project-screen">
        <BrowserBar label="harshit.dev / skills"/>
        <div className="screen-content">
          <span className="screen-label">04 / STACK</span>
          <h2>BUILDING BLOCKS</h2>
          <div className="skill-wall">
            {skills.slice(0, 8).map(([name], i) => <span key={i}>{name}</span>)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="screen contact-screen">
      <span className="screen-label">05 / CONTACT</span>
      <h2>LET'S<br/>BUILD<br/>SOMETHING<br/><span>USEFUL.</span></h2>
      <a href={`mailto:${resume.email}`}>{resume.email}</a>
    </div>
  );
}

function Device({ type, mode, className = "" }) {
  return (
    <div className={`device ${type} ${className}`}>
      {type === "desktop" && <div className="monitor-camera"/>}
      <div className="device-frame">
        <ScreenContent mode={mode}/>
      </div>
      {type === "laptop" && <div className="laptop-base"><div/></div>}
      {type === "tablet" && <div className="tablet-camera"/>}
      {type === "phone" && <div className="phone-speaker"/>}
    </div>
  );
}

function Intro() {
  return (
    <section className="intro">
      <nav>
        <a className="brand" href="#top">HG<span>.</span></a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href={`mailto:${resume.email}`}>Let's talk ↗</a>
      </nav>
      <div className="intro-copy" id="top">
        <p className="eyebrow">PORTFOLIO / 2026</p>
        <h1>Software that<br/><em>moves.</em></h1>
        <p>{resume.intro}</p>
        <a className="scroll-hint" href="#device-story">Scroll to explore <span>↓</span></a>
      </div>
    </section>
  );
}

function DeviceStory() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(ref);
      const mobile = window.matchMedia("(max-width: 800px)").matches;
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /*
       * IMPORTANT:
       * Explicitly define the starting state.
       * Only the desktop is visible when the section starts.
       */
      gsap.set(q(".desktop-device"), {
        opacity: 1,
        scale: mobile ? 0.88 : 1,
        x: 0,
        y: 0,
        rotate: 0,
        zIndex: 4
      });

      gsap.set(q(".laptop-device"), {
        opacity: 0,
        scale: mobile ? 0.76 : 0.8,
        x: 0,
        y: 45,
        rotate: 0,
        zIndex: 3
      });

      gsap.set(q(".tablet-device"), {
        opacity: 0,
        scale: mobile ? 0.76 : 0.8,
        x: 0,
        y: 45,
        rotate: 0,
        zIndex: 2
      });

      gsap.set(q(".phone-device"), {
        opacity: 0,
        scale: mobile ? 0.76 : 0.8,
        x: 0,
        y: 45,
        rotate: 0,
        zIndex: 1
      });

      if (reduced) {
        /*
         * If the user prefers reduced motion, show the
         * devices in a readable stacked state instead of
         * running the scroll animation.
         */
        gsap.set(q(".desktop-device"), {
          opacity: 1,
          scale: mobile ? 0.88 : 1,
          x: 0,
          y: 0,
          rotate: 0,
          zIndex: 4
        });

        gsap.set(q(".laptop-device"), {
          opacity: 0.25,
          scale: mobile ? 0.76 : 0.8,
          x: mobile ? -55 : -120,
          y: 30,
          rotate: -4,
          zIndex: 3
        });

        gsap.set(q(".tablet-device"), {
          opacity: 0.18,
          scale: mobile ? 0.72 : 0.78,
          x: mobile ? 55 : 120,
          y: 45,
          rotate: 4,
          zIndex: 2
        });

        gsap.set(q(".phone-device"), {
          opacity: 0.12,
          scale: mobile ? 0.68 : 0.74,
          x: 0,
          y: 55,
          rotate: 0,
          zIndex: 1
        });

        return;
      }

      /*
       * Mobile needs considerably more scroll distance.
       * This gives the user enough time to see every device.
       */
      const distance = mobile ? 5200 : 4200;

      /*
       * Keep the horizontal exit movement smaller on phones.
       */
      const sideMove = mobile ? 105 : 300;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: q(".device-stage"),
          start: "top top",
          end: `+=${distance}`,
          scrub: mobile ? 1 : 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      /*
       * TITLE
       */
      tl.to(q(".stage-title"), {
        opacity: 0,
        y: -70,
        duration: mobile ? 0.55 : 0.35
      });

      /*
       * =============================================
       * DESKTOP -> LAPTOP
       * =============================================
       */

      tl.to(q(".desktop-device"), {
        scale: mobile ? 0.72 : 0.72,
        y: mobile ? 25 : 40,
        opacity: mobile ? 0.28 : 0.25,
        duration: mobile ? 1.2 : 0.8
      });

      tl.to(
        q(".laptop-device"),
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
          zIndex: 5,
          duration: mobile ? 1.25 : 0.8
        },
        "<0.2"
      );

      /*
       * HOLD LAPTOP
       * This creates a clear pause on mobile.
       */
      tl.to(q(".laptop-device"), {
        duration: mobile ? 0.7 : 0.35
      });

      /*
       * Desktop exits.
       */
      tl.to(q(".desktop-device"), {
        x: -sideMove,
        rotate: mobile ? -5 : -8,
        opacity: 0,
        duration: mobile ? 0.8 : 0.7
      });

      /*
       * =============================================
       * LAPTOP -> TABLET
       * =============================================
       */

      tl.to(q(".laptop-device"), {
        scale: mobile ? 0.72 : 0.72,
        y: 25,
        opacity: mobile ? 0.28 : 0.25,
        duration: mobile ? 1.1 : 0.7
      });

      tl.to(
        q(".tablet-device"),
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
          zIndex: 5,
          duration: mobile ? 1.25 : 0.8
        },
        "<0.2"
      );

      /*
       * HOLD TABLET
       */
      tl.to(q(".tablet-device"), {
        duration: mobile ? 0.7 : 0.35
      });

      /*
       * Laptop exits.
       */
      tl.to(q(".laptop-device"), {
        x: sideMove,
        rotate: mobile ? 5 : 7,
        opacity: 0,
        duration: mobile ? 0.8 : 0.7
      });

      /*
       * =============================================
       * TABLET -> PHONE
       * =============================================
       */

      tl.to(q(".tablet-device"), {
        scale: mobile ? 0.70 : 0.70,
        y: 25,
        opacity: mobile ? 0.25 : 0.2,
        duration: mobile ? 1.1 : 0.7
      });

      tl.to(
        q(".phone-device"),
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
          zIndex: 6,
          duration: mobile ? 1.35 : 0.8
        },
        "<0.2"
      );

      /*
       * HOLD PHONE
       */
      tl.to(q(".phone-device"), {
        duration: mobile ? 0.9 : 0.4
      });

      /*
       * Tablet exits.
       */
      tl.to(q(".tablet-device"), {
        x: -sideMove,
        rotate: mobile ? -7 : -10,
        opacity: 0,
        duration: mobile ? 0.8 : 0.7
      });

      /*
       * Final phone emphasis.
       */
      tl.to(q(".phone-device"), {
        scale: mobile ? 1.04 : 1.06,
        duration: mobile ? 0.8 : 0.7
      });

      tl.to(q(".phone-device"), {
        scale: mobile ? 0.96 : 0.9,
        y: mobile ? -15 : -30,
        duration: mobile ? 0.65 : 0.6
      });

      /*
       * Mobile browsers can change viewport height when
       * their address bar appears/disappears.
       */
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="device-story"
      ref={ref}
      id="device-story"
    >
      <div className="device-stage">

        <div className="stage-title">
          <span>SCROLL-DRIVEN PORTFOLIO</span>

          <h2>
            One career.
            <br />
            <em>Four screens.</em>
          </h2>

          <p>
            Scroll through my work as the interface moves
            from desktop to laptop, tablet and phone.
          </p>
        </div>

        <Device
          type="desktop"
          mode="hero"
          className="desktop-device"
        />

        <Device
          type="laptop"
          mode="ardra"
          className="laptop-device"
        />

        <Device
          type="tablet"
          mode="clinderma"
          className="tablet-device"
        />

        <Device
          type="phone"
          mode="contact"
          className="phone-device"
        />

        <div className="device-progress">
          <span>DESKTOP</span>
          <i />
          <span>LAPTOP</span>
          <i />
          <span>TABLET</span>
          <i />
          <span>PHONE</span>
        </div>

      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="content-section" id="experience">
      <div className="section-head">
        <span>01 / EXPERIENCE</span>
        <h2>Production work,<br/><em>real outcomes.</em></h2>
      </div>
      <article className="experience-card">
        <div>
          <span>JAN 2026 — PRESENT</span>
          <h3>Ardra</h3>
          <p>Software Developer · Clothing Brand</p>
          <a href={resume.ardra} target="_blank" rel="noreferrer">Visit website ↗</a>
        </div>
        <ul>
          <li>Architected a fully responsive Shopify e-commerce platform from scratch.</li>
          <li>Engineered custom sizing and checkout flows for personalised orders.</li>
          <li>Built dynamic variant pricing across 100+ product SKUs.</li>
          <li>Unified standard and bespoke orders in a single cart session.</li>
          <li>Redesigned product-entry workflows to improve catalogue consistency.</li>
        </ul>
      </article>
      <article className="experience-card">
        <div>
          <span>DEC 2024 — AUG 2026</span>
          <h3>Clinderma</h3>
          <p>Software Developer · Skin Care Brand</p>
          <a href={resume.clinderma} target="_blank" rel="noreferrer">Visit website ↗</a>
        </div>
        <ul>
          <li>Built a personalised skincare platform and treatment-plan experience.</li>
          <li>Created a product recommendation algorithm based on assessment inputs.</li>
          <li>Integrated Zoho CRM workflows for lead capture and segmentation.</li>
          <li>Captured high-intent Buy Now drop-offs with Google Apps Script.</li>
          <li>Managed 1,000+ product records in Zoho Inventory.</li>
          <li>Executed technical and on-page SEO across the site.</li>
        </ul>
      </article>
    </section>
  );
}

function Projects() {
  return (
    <section className="content-section projects-section" id="projects">
      <div className="section-head">
        <span>02 / SELECTED PROJECTS</span>
        <h2>Things I've<br/><em>built.</em></h2>
      </div>
      <div className="project-grid">
        {projects.map((p, i) => (
          <article className="project-card" key={p.title}>
            <div className="project-number">0{i + 1}</div>
            <span>{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            {p.link !== "#" && <a href={p.link} target="_blank" rel="noreferrer">Open project ↗</a>}
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-section">
      <div className="section-head">
        <span>03 / TECHNICAL SKILLS</span>
        <h2>The stack<br/><em>behind it.</em></h2>
      </div>
      <div className="skills-grid">
        {skills.map(([name, level]) => (
          <div className="skill-row" key={name}>
            <strong>{name}</strong>
            <span>{level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="content-section cert-section">
      <div className="section-head">
        <span>04 / CERTIFICATIONS</span>
        <h2>Always<br/><em>learning.</em></h2>
      </div>
      <div className="cert-grid">
        {certifications.map((c, i) => <div key={i}><span>0{i + 1}</span><p>{c}</p></div>)}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <span>05 / CONTACT</span>
      <h2>Have a product<br/>worth <em>building?</em></h2>
      <a className="email-link" href={`mailto:${resume.email}`}>{resume.email} ↗</a>
      <div className="socials">
        <a href={resume.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={resume.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`tel:${resume.phone}`}>{resume.phone}</a>
      </div>
      <footer>© 2026 Harshit Gujarathi. Built with React.</footer>
    </section>
  );
}

function App() {
  return (
    <>
      <Intro/>
      <DeviceStory/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Certifications/>
      <Contact/>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App/>);
