
Today 12:20 PM
006a25da-8b7c-4ac3-9d8e-cb5680694668.png

harshit-device-portfolio-all-devices-fixed(1).zip
Zip Archive
i want to add my photo here instead of full code refer above zip file and hsow me where  to mdofiy it 

WhatsApp Image 2026-08-18 at 12.19.23 PM.jpeg
but the photo   this

98bc72b2-f699-43a1-bde8-de2130e76d3b.png
can we remocve background using css 

WhatsApp Image 2026-08-18 at 12.19.23 PM(1).jpeg
remove hte image backgorund 

Generated image: Confident South Asian Man Portrait

Edit


f52625dd-7888-4b56-ad80-fa296ba8d156.png
i am imporitng the github repository to the vercel but it is giving me this error

c7708a93-06be-4f91-994f-6ab775c044c8.png

b799fd04-b68a-4e08-9b06-45fe4e1d45ab.png

a5dc382e-1578-428a-a95a-d0f9b42d5884.png

8f344292-82a4-4c68-8bf2-f59b4540ffd1.png

23292e80-2885-4e0d-a211-4ee115166a69.png

d444efc3-81b9-43b6-abdf-92c61c8373be.png

Yes. I can see the issue in your code.

The 4-screen animation is implemented in main.jsx, but the mobile version uses a much shorter GSAP scroll distance:

const distance = mobile ? 3000 : 4200;
On a phone, the four transitions are getting compressed, so you don't get the same clear:

DESKTOP → LAPTOP → TABLET → PHONE

effect.

Fix
In src/main.jsx, find:

const distance = mobile ? 3000 : 4200;
const sideMove = mobile ? 150 : 300;
Change it to:

const distance = mobile ? 5200 : 4200;
const sideMove = mobile ? 110 : 300;
Then find:

scrub: mobile ? 0.7 : 1,
and change it to:

scrub: mobile ? 1 : 1,
So this section becomes:

const distance = mobile ? 5200 : 4200;
const sideMove = mobile ? 110 : 300;

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
Also change the mobile device sizes
In styles.css, inside:

@media (max-width: 800px)
use:

.device-stage {
  min-height: 100svh;
  height: 100svh;
  overflow: hidden;
}

.desktop .device-frame {
  width: 92vw;
}

.laptop .device-frame {
  width: 88vw;
}

.tablet .device-frame {
  width: 82vw;
}

.phone .device-frame {
  width: min(58vw, 230px);
  height: min(120vw, 480px);
}

.device {
  will-change: transform, opacity;
}
And I recommend changing the mobile GSAP sequence slightly so the transitions are more obvious:

tl.fromTo(
  q(".stage-title"),
  { opacity: 1, y: 0 },
  { opacity: 0, y: -70, duration: 0.35 }
)

.to(q(".desktop-device"), {
  scale: 0.72,
  y: 40,
  opacity: 0.25,
  duration: 1
})

.to(q(".laptop-device"), {
  opacity: 1,
  scale: 1,
  y: 0,
  duration: 1
}, "<0.2")

.to(q(".desktop-device"), {
  x: -sideMove,
  rotate: -6,
  duration: 0.8
})

.to(q(".laptop-device"), {
  scale: 0.72,
  y: 35,
  opacity: 0.25,
  duration: 1
})

.to(q(".tablet-device"), {
  opacity: 1,
  scale: 1,
  y: 0,
  duration: 1
}, "<0.2")

.to(q(".laptop-device"), {
  x: sideMove,
  rotate: 6,
  duration: 0.8
})

.to(q(".tablet-device"), {
  scale: 0.7,
  y: 30,
  opacity: 0.2,
  duration: 1
})

.to(q(".phone-device"), {
  opacity: 1,
  scale: 1,
  y: 0,
  duration: 1
}, "<0.2")

.to(q(".tablet-device"), {
  x: -sideMove,
  rotate: -8,
  duration: 0.8
})

.to(q(".phone-device"), {
  scale: 1.06,
  duration: 0.8
});
Result on mobile
When the user scrolls, it will clearly progress:

        MOBILE SCROLL
             ↓

┌─────────────────────┐
│                     │
│      DESKTOP        │
│                     │
└─────────────────────┘
             ↓
       desktop moves out

┌─────────────────────┐
│                     │
│       LAPTOP        │
│                     │
└─────────────────────┘
             ↓
        laptop moves

       ┌───────────┐
       │           │
       │  TABLET   │
       │           │
       └───────────┘
             ↓
        tablet moves

          ┌──────┐
          │      │
          │PHONE │
          │      │
          └──────┘
So the same four-screen storytelling will work on mobile, rather than the animation feeling like it skips directly from the desktop to the phone.

If you want, I can also modify the complete ZIP you are currently using and give you one new full ZIP, with the mobile 4-screen effect fixed, rather than making you edit these files manually.


show me the full cdeo 

Yes. Since you want the full code, here is the complete src/main.jsx with the mobile 4-screen effect improved.

The important change is inside DeviceStory():

Mobile scroll distance increased from 3000 → 5200

Each device gets more time on screen

Desktop → Laptop → Tablet → Phone transitions are more visible

The animation remains scroll-driven

Your profile photo remains /profile.jpg

Replace your entire src/main.jsx with this:

import React, { useLayoutEffect, useRef } from "react";
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href={`tel:${resume.phone}`}
        >
          {resume.phone}
        </a>

      </div>

      <footer>
        © 2026 Harshit Gujarathi. Built with React.
      </footer>

    </section>

  );
}

/* =====================================================
   APP
===================================================== */

function App() {

  return (
    <>
      <Intro />

      <DeviceStory />

      <Experience />

      <Projects />

      <Skills />

      <Certifications />

      <Contact />
    </>
  );
}

/* =====================================================
   RENDER
===================================================== */

createRoot(
  document.getElementById("root")
).render(
  <App />
);
One important point
This main.jsx controls the animation, but your styles.css also controls whether the four devices are actually visible on mobile.

So after replacing main.jsx, don't immediately deploy. Run:

npm run dev
Then open the site on your phone or Chrome mobile responsive mode and scroll through the device section.

If the desktop → laptop → tablet → phone sequence still isn't visible correctly, the next thing we need to change is the mobile CSS in styles.css, not the React code.



Pasted code(3).js
JavaScript
here is the current main.jsx file 

Yes — now I have your actual current main.jsx, so I would not replace it with the completely different code I gave earlier.

Your current file already has your correct content, including the extra CRM and Google App Script pills and your current photo path /profile (2).png. 


The actual problem is here:

const distance = mobile ? 3000 : 4200;
const sideMove = mobile ? 150 : 300;
and the mobile animation durations are too short. 


I've modified your actual file, changing only the DeviceStory() animation. Your other code remains intact.

Download the updated main.jsx
Download updated main.jsx — Mobile 4-Screen Fix

What I changed
On mobile:

const distance = mobile ? 5200 : 4200;
const sideMove = mobile ? 110 : 300;
instead of:

const distance = mobile ? 3000 : 4200;
const sideMove = mobile ? 150 : 300;
I also increased the animation duration for each device so you can clearly see:

Desktop → Laptop → Tablet → Phone

while scrolling.

Your existing photo is preserved
Your current code uses:

<img src="/profile (2).png" alt="Harshit Gujarathi" />
so I didn't change that. 


Replace your current:

src/main.jsx
with the downloaded file, then run:

npm run dev
and test the mobile view.

Don't change styles.css yet. Let's first see how this version behaves on your phone. 


main-updated-mobile-four-screens.jsx
Code


Library
/
main-updated-mobile-four-screens.jsx


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

      if (reduced) {
        gsap.set(q(".desktop-device"), {
          opacity: 1,
          scale: mobile ? 0.9 : 1
        });

        gsap.set(q(".laptop-device"), {
          opacity: 1,
          scale: mobile ? 0.82 : 0.92,
          y: 0
        });

        gsap.set(q(".tablet-device"), {
          opacity: 1,
          scale: mobile ? 0.82 : 0.92,
          y: 0
        });

        gsap.set(q(".phone-device"), {
          opacity: 1,
          scale: mobile ? 0.86 : 0.92,
          y: 0
        });

        return;
      }

      /*
       * Mobile gets a longer scroll distance so each of the
       * four devices has enough time to be clearly visible:
       *
       * DESKTOP -> LAPTOP -> TABLET -> PHONE
       */
      const distance = mobile ? 5200 : 4200;

      /*
       * Keep the side movement smaller on phones so the
       * devices don't disappear too quickly.
       */
      const sideMove = mobile ? 110 : 300;

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
       * INTRO TITLE
       */
      tl.fromTo(
        q(".stage-title"),
        {
          opacity: 1,
          y: 0
        },
        {
          opacity: 0,
          y: -70,
          duration: mobile ? 0.55 : 0.35
        }
      );

      /*
       * DESKTOP
       * Keep desktop visible longer on mobile.
       */
      .to(
        q(".desktop-device"),
        {
          scale: mobile ? 0.74 : 0.72,
          y: mobile ? 25 : 40,
          opacity: mobile ? 0.35 : 0.25,
          duration: mobile ? 1.35 : 0.8
        }
      )

      /*
       * LAPTOP
       */
      .to(
        q(".laptop-device"),
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: mobile ? 1.35 : 0.8
        },
        "<0.25"
      )

      /*
       * DESKTOP EXITS
       */
      .to(
        q(".desktop-device"),
        {
          x: -sideMove,
          rotate: mobile ? -5 : -8,
          duration: mobile ? 0.9 : 0.7
        }
      )

      /*
       * LAPTOP SHRINKS
       */
      .to(
        q(".laptop-device"),
        {
          scale: mobile ? 0.74 : 0.72,
          y: mobile ? 25 : 35,
          opacity: mobile ? 0.35 : 0.25,
          duration: mobile ? 1.25 : 0.7
        }
      )

      /*
       * TABLET
       */
      .to(
        q(".tablet-device"),
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: mobile ? 1.35 : 0.8
        },
        "<0.25"
      )

      /*
       * LAPTOP EXITS
       */
      .to(
        q(".laptop-device"),
        {
          x: sideMove,
          rotate: mobile ? 5 : 7,
          duration: mobile ? 0.9 : 0.7
        }
      )

      /*
       * TABLET SHRINKS
       */
      .to(
        q(".tablet-device"),
        {
          scale: mobile ? 0.72 : 0.7,
          y: mobile ? 25 : 30,
          opacity: mobile ? 0.30 : 0.2,
          duration: mobile ? 1.25 : 0.7
        }
      )

      /*
       * PHONE
       */
      .to(
        q(".phone-device"),
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: mobile ? 1.45 : 0.8
        },
        "<0.25"
      )

      /*
       * TABLET EXITS
       */
      .to(
        q(".tablet-device"),
        {
          x: -sideMove * 0.85,
          rotate: mobile ? -7 : -10,
          duration: mobile ? 0.9 : 0.7
        }
      )

      /*
       * PHONE FINAL EMPHASIS
       */
      .to(
        q(".phone-device"),
        {
          scale: mobile ? 1.04 : 1.06,
          duration: mobile ? 0.9 : 0.7
        }
      )

      /*
       * PHONE SETTLES
       */
      .to(
        q(".phone-device"),
        {
          scale: mobile ? 0.96 : 0.9,
          y: mobile ? -15 : -30,
          duration: mobile ? 0.75 : 0.6
        }
      );

      /*
       * Refresh ScrollTrigger after the layout has settled.
       * This helps on real phones where viewport height can
       * change because of the browser address bar.
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

Mr E
