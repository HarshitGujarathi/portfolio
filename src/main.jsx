 import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const monitorRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isMobile } = context.conditions;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: isMobile ? "+=120%" : "+=250%",
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          monitorRef.current,
          {
            scale: isMobile ? 0.85 : 0.45,
            opacity: 0.3,
            y: isMobile ? 40 : 100,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          }
        );

        tl.fromTo(
          contentRef.current,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.4 },
          "-=0.5"
        );
      }
    );

    const handleRefresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleRefresh);
    window.addEventListener("load", handleRefresh);

    return () => {
      mm.revert();
      window.removeEventListener("resize", handleRefresh);
      window.removeEventListener("load", handleRefresh);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <section className="hero-scroll-container" ref={containerRef}>
        <div className="monitor-container" ref={monitorRef}>
          {/* Monitor Screen Bezel */}
          <div className="monitor-bezel">
            <div className="screen-inner" ref={contentRef}>
              <div className="content-left">
                <span className="badge-tag">INDIA</span>
                <h1 className="name-title">
                  HARSHIT <br />
                  <span>GUJARATHI</span>
                </h1>
                <p className="bio-text">
                  I build data-driven e-commerce platforms, CRM automation
                  pipelines, behavioural analytics systems and interactive web
                  products.
                </p>
                <div className="skill-pills">
                  <span className="pill">REACT</span>
                  <span className="pill">NODE.JS</span>
                  <span className="pill">PYTHON</span>
                </div>
              </div>
              <div className="content-right">
                <div className="profile-photo-wrapper">
                  <img
                    src="/profile.jpg"
                    alt="Harshit Gujarathi"
                    className="profile-photo"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Monitor Stand Base */}
          <div className="monitor-neck"></div>
          <div className="monitor-base"></div>
        </div>
      </section>

      {/* Extra space for scrolling */}
      <section className="next-section">
        <h2>Scroll Continued Content</h2>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
