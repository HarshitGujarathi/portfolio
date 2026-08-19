import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [device, setDevice] = useState("desktop");
  const stageRef = useRef(null);
  const monitorRef = useRef(null);

  useEffect(() => {
    // Responsive GSAP Context using matchMedia
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        const { isMobile } = context.conditions;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stageRef.current,
            start: "top top",
            end: isMobile ? "+=150%" : "+=300%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true, // Recalculates dynamically when mobile URL bar changes size
          },
        });

        tl.fromTo(
          monitorRef.current,
          {
            scale: isMobile ? 0.85 : 0.65,
            opacity: 0.8,
          },
          {
            scale: 1,
            opacity: 1,
            ease: "power1.out",
          }
        );
      }
    );

    // Ensure ScrollTrigger recalculates once all images and styles load
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    window.addEventListener("resize", handleLoad);

    return () => {
      mm.revert();
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleLoad);
    };
  }, []);

  return (
    <div className="portfolio-root">
      <section className="stage" ref={stageRef}>
        <div className={`monitor-frame ${device}`} ref={monitorRef}>
          {/* Top Webcam / Camera Dot */}
          <div className="monitor-cam-dot"></div>

          <div className="display-bezel">
            <div className="screen-content">
              {/* Header Meta Info */}
              <div className="header-meta">
                <span className="role-title">SOFTWARE DEVELOPER</span>
                <span className="separator">-</span>
                <span className="location">INDIA</span>
              </div>

              {/* Main Content Grid */}
              <div className="hero-grid">
                <div className="text-col">
                  <h1 className="name">
                    HARSHIT
                    <br />
                    <span className="accent-name">GUJARATHI</span>
                  </h1>
                  <p className="bio">
                    I build data-driven e-commerce platforms, CRM automation
                    pipelines, behavioural analytics systems and interactive web
                    products.
                  </p>

                  {/* All Technology Tags */}
                  <div className="tech-tags">
                    <span className="tag">REACT</span>
                    <span className="tag">NODE.JS</span>
                    <span className="tag">PYTHON</span>
                    <span className="tag">SHOPIFY</span>
                    <span className="tag">CRM</span>
                    <span className="tag">Google App Script</span>
                  </div>
                </div>

                {/* Profile Card / Avatar Column */}
                <div className="media-col">
                  <div className="avatar-card">
                    <img
                      src="/profile.jpg"
                      alt="Harshit Gujarathi"
                      className="avatar-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stand Components */}
          <div className="stand-neck"></div>
          <div className="stand-foot"></div>
        </div>

        {/* Bottom Device Switcher Navigation */}
        <div className="device-nav">
          <button
            className={`nav-item ${device === "desktop" ? "active" : ""}`}
            onClick={() => setDevice("desktop")}
          >
            DESKTOP
          </button>
          <span className="nav-divider">—</span>
          <button
            className={`nav-item ${device === "laptop" ? "active" : ""}`}
            onClick={() => setDevice("laptop")}
          >
            LAPTOP
          </button>
          <span className="nav-divider">—</span>
          <button
            className={`nav-item ${device === "tablet" ? "active" : ""}`}
            onClick={() => setDevice("tablet")}
          >
            TABLET
          </button>
          <span className="nav-divider">—</span>
          <button
            className={`nav-item ${device === "phone" ? "active" : ""}`}
            onClick={() => setDevice("phone")}
          >
            PHONE
          </button>
        </div>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 
