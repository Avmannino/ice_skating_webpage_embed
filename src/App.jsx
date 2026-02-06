// src/App.jsx
import "./App.css";

// ✅ Branding assets (add these files to src/assets/)
import logo from "./assets/wings-logo.png";

// ✅ Hero image (swap to a skating hero when you have it)
import heroImg from "./assets/hockey-hero.jpeg";

// ✅ Card images (add these files to src/assets/cards/)
import imgPublicSkate from "./assets/cards/publicskate.png";
import imgCosmicSkate from "./assets/cards/cosmicskate.png";
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
    description: "Lights down, music up—our signature glow-style public skate experience. Fridays and Saturdays.",
    image: imgCosmicSkate,
    alt: "Cosmic Skate at Wings Arena",
    pos: "50% 40%",
    href: "https://www.wingsarena.com/cosmic-skate",
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
  // You can tweak these if you want different CTAs per card
  if (title === "Public Skate") return "View Schedule";
  if (title === "Cosmic Skate") return "View Details";
  if (title === "Private Lessons") return "Learn More";
  if (title === "Freestyle Figure Skating") return "View Info";
  return "Learn More";
}

function HockeyCard({ title, description, image, alt, pos, fit, scale, href }) {
  const isContain = fit === "contain";
  const imgScale = isContain ? 1 : typeof scale === "number" ? scale : 1;

  const ctaText = getCardCtaText(title);

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

      <div className="cardBtnSlot" aria-label={ctaText}>
        <div className="cardDivider" aria-hidden="true" />

        {/* ✅ Link navigates TOP window (avoids loading inside an iframe) */}
        <a className="cardCtaBtn" href={href} target="_top" rel="noreferrer" aria-label={ctaText}>
          <span className="cardCtaBtnText">{ctaText}</span>
        </a>
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
          <div className="brandStack" aria-label="Wings Arena Skating">
            <img className="logo" src={logo} alt="Wings Arena" />
          </div>

          <h1 className="srOnly">Wings Arena Skating</h1>

          <p className="heroSubtitle">
            Explore public sessions, cosmic nights, private instruction, and freestyle ice—everything skating in one place.
          </p>
        </div>
      </header>

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
