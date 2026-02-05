// src/App.jsx
import "./App.css";

// ✅ Branding assets (add these files to src/assets/)
import logo from "./assets/wings-logo.png";

// ✅ Hero image
import heroImg from "./assets/hockey-hero.jpg";

// ✅ Hero title image (Hockey)
import heroTitleImg from "./assets/hockey-programs.png";

// ✅ Card images (add these files to src/assets/cards/)
import imgInhouse from "./assets/cards/inhouse.jpg";
import imgLearnTo from "./assets/cards/learnto.png";
import imgLunchtime from "./assets/cards/lunchtime.png";
import imgAdultLeague from "./assets/cards/adultleague.png";
import imgPrivateLessons from "./assets/cards/privatelessons.jpg";
import imgStickPuck from "./assets/cards/stickpuck.jpg";
import imgMites from "./assets/cards/mites.jpg";

const CARDS = [
  {
    title: "In-House Spring League",
    description: "Season details, divisions, rules, and registration.",
    image: imgInhouse,
    alt: "In-House Spring League",
    pos: "50% 35%",
  },
  {
    title: "Learn to Play",
    description: "Beginner-friendly programs for new skaters & players.",
    image: imgLearnTo,
    alt: "Learn to Play & Skate",
    pos: "70% 40%",
  },
  {
    title: "Lunchtime Adult Drop-In Hockey",
    description: "Midday skate—fast, fun, and easy to join.",
    image: imgLunchtime,
    alt: "Lunchtime Adult Drop-In Hockey",
    pos: "50% 0%",
  },
  {
    title: "Wings Arena Adult Hockey League",
    description: "Multiple skill levels. Competitive, organized league play.",
    image: imgAdultLeague,
    alt: "Adult Hockey League",
    fit: "cover",
    scale: 1,
  },
  {
    title: "Private Lessons",
    description: "One-on-one coaching for skating and hockey development.",
    image: imgPrivateLessons,
    alt: "Private Lessons",
    pos: "50% 30%",
  },
  {
    title: "Stick & Puck",
    description: "Sharpen your skills—shooting, puckhandling, and reps.",
    image: imgStickPuck,
    alt: "Stick & Puck",
    pos: "50% 45%",
  },
  {
    title: "Mites B/C Schedule",
    description: "Quick access to the latest schedule and updates.",
    image: imgMites,
    alt: "Mites B/C Schedule",
    pos: "50% 35%",
  },
];

function getCardCtaText(title) {
  // Map exactly to what you requested (by the visible card title)
  if (title === "In-House Spring League") return "Click for Info & Registration";
  if (title === "Learn to Play") return "Click for Info & Registration";
  if (title === "Lunchtime Adult Drop-In Hockey") return "Click for Info & RSVP";
  if (title === "Private Lessons") return "Click for Info";
  if (title === "Stick & Puck") return "Click for Info";
  if (title === "Mites B/C Schedule") return "Click for Schedule";

  // fallback (in case you add new cards later)
  return "Click for Info";
}

function HockeyCard({ title, description, image, alt, pos, fit, scale }) {
  const isContain = fit === "contain";
  const imgScale = isContain ? 1 : typeof scale === "number" ? scale : 1;

  return (
    <div className="card" role="group" aria-label={title}>
      <div className={`cardMedia ${isContain ? "cardMedia--contain" : ""}`}>
        <img
          className={`cardImg ${isContain ? "cardImg--contain" : ""}`}
          src={image}
          alt={alt}
          loading="lazy"
          style={{
            objectPosition: pos || "50% 50%",
            transform: `scale(${imgScale})`,
          }}
        />
      </div>

      <div className="cardTop">
        <div className="cardText">
          <h3 className="cardTitle">{title}</h3>
          <p className="cardDesc">{description}</p>
        </div>
      </div>

      {/* ✅ Divider + CTA helper text pinned to bottom */}
      <div className="cardBtnSlot" aria-label={getCardCtaText(title)}>
        <div className="cardDivider" aria-hidden="true" />
        <span className="cardCtaText">{getCardCtaText(title)}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="hero" style={{ "--hero-image": `url(${heroImg})` }}>
        <div className="heroOverlay" />

        <div className="heroInner">
          {/* ✅ STACKED HERO HEADER: Hockey / at / Wings Arena (all views) */}
          <div className="brandStack" aria-label="Hockey at Wings Arena">
            <img
              className="heroTitleImg"
              src={heroTitleImg}
              alt="Hockey"
              loading="eager"
              draggable="false"
            />
            <span className="heroAtText">at</span>
            <img className="logo" src={logo} alt="Wings Arena" />
          </div>

          <h1 className="srOnly">Hockey at Wings Arena</h1>

          <p className="heroSubtitle">
            Find leagues, development, drop-ins, lessons, and sessions — all in one place.
          </p>
        </div>
      </header>

      <main className="content">
        <section className="grid" aria-label="Hockey links">
          {CARDS.map((c) => (
            <HockeyCard key={c.title} {...c} />
          ))}
        </section>

        {/* ✅ centered Ice Rentals button UNDER the cards */}
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
