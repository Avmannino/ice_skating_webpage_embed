// src/App.jsx
import { useEffect, useRef, useState } from "react";
import "./App.css";

// ✅ Branding assets (add these files to src/assets/)
import logo from "./assets/wings-logo.png";

// ✅ Hero image (swap to a skating hero when you have it)
import heroImg from "./assets/hockey-hero.jpeg";

// ✅ Card images (add these files to src/assets/cards/)
import imgPublicSkate from "./assets/cards/publicskate.png";
import imgCosmicSkate from "./assets/cards/cosmicskate.png";
import imgLearnToSkate from "./assets/cards/learntoskate.jpg";
import imgPrivateLessons from "./assets/cards/privatelessons.jpg";
import imgFreestyle from "./assets/cards/freestyle.jpeg";

const CARDS = [
  {
    title: "Public Skate",
    description: "Open skate sessions for all ages—check times, pricing, and guidelines.",
    image: imgPublicSkate,
    alt: "Public Skate at Wings Arena",
    pos: "50% 45%",
    href: "https://www.wingsarena.com/publicskate",
  },
  {
    title: "Cosmic Skate",
    description:
      "Lights down, music up—our signature glow-style public skate experience. Friday and Saturday nights.",
    image: imgCosmicSkate,
    alt: "Cosmic Skate at Wings Arena",
    pos: "50% 40%",
    href: "https://www.wingsarena.com/cosmic-skate",
  },
  {
    title: "Learn To Skate",
    description: "Skill-building classes for new and developing skaters—structured sessions with great coaching.",
    image: imgLearnToSkate,
    alt: "Learn To Skate at Wings Arena",
    pos: "50% 40%",
    href: "https://www.wingsarena.com/learntoskate",
    videoSrc: `${import.meta.env.BASE_URL}videos/learntoskate.mp4`,
    videoDelayMs: 2500,
  },
  {
    title: "Private Lessons",
    description: "One-on-one coaching for skating development—kids, teens, and adults welcome.",
    image: imgPrivateLessons,
    alt: "Private skating lessons at Wings Arena",
    pos: "50% 30%",
    href: "https://www.wingsarena.com/private-lessons",
  },
  {
    title: "Freestyle Figure Skating",
    description: "Dedicated ice time for figure skaters to train, practice, and refine skills.",
    image: imgFreestyle,
    alt: "Freestyle Figure Skating at Wings Arena",
    pos: "50% 40%",
    href: "https://www.wingsarena.com/figureskating",
  },
];

function getCardCtaText(title) {
  if (title === "Public Skate") return "Info & Sessions";
  if (title === "Cosmic Skate") return "Info & Sessions";
  if (title === "Learn To Skate") return "Learn More";
  if (title === "Private Lessons") return "Learn More";
  if (title === "Freestyle Figure Skating") return "Learn More";
  return "Learn More";
}

function HockeyCard({
  title,
  description,
  image,
  alt,
  pos,
  fit,
  scale,
  href,
  videoSrc,
  videoDelayMs = 2500,
}) {
  const isContain = fit === "contain";
  const imgScale = isContain ? 1 : typeof scale === "number" ? scale : 1;

  const ctaText = getCardCtaText(title);

  const titleClassName = title === "Cosmic Skate" ? "cardTitle cardTitle--justSugar" : "cardTitle";
  const descClassName = title === "Cosmic Skate" ? "cardDesc cardDesc--justSugar" : "cardDesc";
  const ctaTextClassName =
    title === "Cosmic Skate" ? "cardCtaBtnText cardCtaBtnText--justSugar" : "cardCtaBtnText";

  const hasVideo = Boolean(videoSrc);
  const videoRef = useRef(null);
  const [swapToVideo, setSwapToVideo] = useState(false);

  useEffect(() => {
    if (!hasVideo) return;

    const v = videoRef.current;
    if (v) {
      try {
        v.load();
      } catch {
        // ignore
      }
    }

    const t = window.setTimeout(async () => {
      setSwapToVideo(true);
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch {
          // autoplay can be blocked
        }
      }
    }, videoDelayMs);

    return () => window.clearTimeout(t);
  }, [hasVideo, videoDelayMs]);

  return (
    <div className="card" role="group" aria-label={title}>
      <div
        className={[
          "cardMedia",
          isContain ? "cardMedia--contain" : "",
          hasVideo ? "cardMedia--swap" : "",
          swapToVideo ? "isVideoActive" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <img
          className={[
            "cardImg",
            isContain ? "cardImg--contain" : "",
            hasVideo ? "cardImg--swap" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          src={image}
          alt={alt}
          loading="lazy"
          style={{
            objectPosition: pos || "50% 50%",
            transform: `scale(${imgScale})`,
          }}
        />

        {hasVideo ? (
          <video
            ref={videoRef}
            className="cardVid"
            src={videoSrc}
            muted
            playsInline
            loop
            preload="metadata"
            aria-hidden="true"
          />
        ) : null}
      </div>

      <div className="cardTop">
        <div className="cardText">
          <h3 className={titleClassName}>{title}</h3>
          <p className={descClassName}>{description}</p>
        </div>
      </div>

      <div className="cardBtnSlot" aria-label={ctaText}>
        <div className="cardDivider" aria-hidden="true" />
        <a className="cardCtaBtn" href={href} target="_top" rel="noreferrer" aria-label={ctaText}>
          <span className={ctaTextClassName}>{ctaText}</span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      {/* ✅ NEW: full-bleed wrapper that forces the hero to viewport width */}
      <div className="fullBleed">
        <header className="hero" style={{ "--hero-image": `url(${heroImg})` }}>
          <div className="heroOverlay" />

          <div className="heroInner">
            <div className="brandStack" aria-label="Wings Arena Skating">
              <img className="logo" src={logo} alt="Wings Arena" />
            </div>

            <h1 className="srOnly">Wings Arena Skating</h1>

            <p className="heroSubtitle">
              Explore public sessions, cosmic nights, private instruction, and freestyle ice—everything skating in one
              place.
            </p>
          </div>
        </header>
      </div>

      <main className="content">
        <section className="grid" aria-label="Skating links">
          {CARDS.map((c) => (
            <HockeyCard key={c.title} {...c} />
          ))}
        </section>

        <div className="ctaRow" aria-label="Ice rentals">
          <a
            className="heroBtn heroBtn--primary"
            href="https://www.catchcorner.com/facility-page/embedded/rental/wings-arena"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ice Rentals
          </a>
        </div>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Wings Arena</span>
      </footer>
    </div>
  );
}
