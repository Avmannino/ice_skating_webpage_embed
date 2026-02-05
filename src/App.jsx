import "./App.css";

// ✅ Branding assets (add these files to src/assets/)
import logo from "./assets/wings-logo.png";

// ✅ Hero image
import heroImg from "./assets/hockey-hero.jpg";

// ✅ NEW: Hero title image (put your file here)
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
    href: "https://www.wingsarena.com/inhouse-spring-league",
    description: "Season details, divisions, rules, and registration.",
    image: imgInhouse,
    alt: "In-House Spring League",
    pos: "50% 35%",
    springLowerButton: true, // ✅ only this card (30px)
  },
  {
    title: "Learn to Play",
    href: "https://www.wingsarena.com/learnto",
    description: "Beginner-friendly programs for new skaters & players.",
    image: imgLearnTo,
    alt: "Learn to Play & Skate",
    pos: "70% 40%",
  },
  {
    title: "Lunchtime Adult Drop-In Hockey",
    href: "https://www.wingsarena.com/lunchtime-hockey",
    description: "Midday skate—fast, fun, and easy to join.",
    image: imgLunchtime,
    alt: "Lunchtime Adult Drop-In Hockey",
    pos: "50% 0%",
    lowerButton: true, // ✅ only this card (kept)
  },
  {
    title: "Wings Arena Adult Hockey League (WAAHL)",
    href: "https://www.wingsarena.com/adulthockey",
    description: "Multiple skill levels. Competitive, organized league play.",
    image: imgAdultLeague,
    alt: "Adult Hockey League",
    fit: "cover",
    scale: 1,
  },
  {
    title: "Private Lessons",
    href: "https://www.wingsarena.com/private-lessons",
    description: "One-on-one coaching for skating and hockey development.",
    image: imgPrivateLessons,
    alt: "Private Lessons",
    pos: "50% 30%",
  },
  {
    title: "Stick & Puck",
    href: "https://www.wingsarena.com/stickandpuck",
    description: "Sharpen your skills—shooting, puckhandling, and reps.",
    image: imgStickPuck,
    alt: "Stick & Puck",
    pos: "50% 45%",
  },
  {
    title: "Mites B/C Schedule",
    href: "https://www.wingsarena.com/mites-bcschedule",
    description: "Quick access to the latest schedule and updates.",
    image: imgMites,
    alt: "Mites B/C Schedule",
    pos: "50% 35%",
  },
];

function Icon({ name }) {
  switch (name) {
    case "league":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 4h10v3a5 5 0 0 1-10 0V4Z" />
          <path d="M5 6H3v1a6 6 0 0 0 6 6" />
          <path d="M19 6h2v1a6 6 0 0 1-6 6" />
          <path d="M12 13v4" />
          <path d="M8 21h8" />
          <path d="M9 17h6" />
        </svg>
      );
    case "learn":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 2 8l10 5 10-5-10-5Z" />
          <path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
          <path d="M22 8v7" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 8v5l3 2" />
          <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" />
        </svg>
      );
    case "trophy":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 4h10v3a5 5 0 0 1-10 0V4Z" />
          <path d="M9 21h6" />
          <path d="M12 12v4" />
          <path d="M4 6h3v1a5 5 0 0 1-3-1Z" />
          <path d="M20 6h-3v1a5 5 0 0 0 3-1Z" />
        </svg>
      );
    case "coach":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
          <path d="M4 21a8 8 0 0 1 16 0" />
          <path d="M18 9h4" />
        </svg>
      );
    case "puck":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 14c0 3 3.1 6 6 6s6-3 6-6-3.1-6-6-6-6 3-6 6Z" />
          <path d="M6.5 14h11" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 3v3" />
          <path d="M16 3v3" />
          <path d="M4 7h16" />
          <path d="M5 5h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
          <path d="M8 11h3" />
          <path d="M8 15h3" />
          <path d="M13 11h3" />
          <path d="M13 15h3" />
        </svg>
      );
    default:
      return null;
  }
}

function HockeyCard({
  title,
  href,
  description,
  icon,
  image,
  alt,
  pos,
  fit,
  scale,
  lowerButton,
  springLowerButton,
}) {
  const isContain = fit === "contain";

  // ✅ Scale only applies to "cover" images. Contain ignores scale (so nothing gets clipped).
  const imgScale = isContain ? 1 : typeof scale === "number" ? scale : 1;

  return (
    <a className="card" href={href}>
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
        {icon ? (
          <div className="icon" aria-hidden="true">
            <Icon name={icon} />
          </div>
        ) : null}

        <div className="cardText">
          <h3 className="cardTitle">{title}</h3>
          <p className="cardDesc">{description}</p>
        </div>
      </div>

      <div className="cardBottom">
        <span
          className={`cardLink ${
            lowerButton ? "cardLink--lower" : springLowerButton ? "cardLink--springLower" : ""
          }`}
        >
          View details
        </span>
      </div>
    </a>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="hero" style={{ "--hero-image": `url(${heroImg})` }}>
        <div className="heroOverlay" />

        <div className="heroInner">
          {/* ✅ NEW: Left/Center/Right header controls */}
          <div className="heroNav" aria-label="Header navigation">
            <div className="heroNavSide heroNavSide--left">
              <a
                className="heroBtn"
                href="https://www.wingsarena.com/schedule"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule
              </a>
            </div>

            <div className="brandRow">
              <a
                className="brand"
                href="https://www.wingsarena.com/"
                aria-label="Wings Arena Home"
              >
                <img className="logo" src={logo} alt="Wings Arena" />
              </a>
            </div>

            <div className="heroNavSide heroNavSide--right">
              <a
                className="heroBtn heroBtn--primary"
                href="https://www.catchcorner.com/facility-page/embedded/rental/wings-arena"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ice Rentals
              </a>
            </div>
          </div>

          {/* ✅ Keep a real H1 for SEO/accessibility, but hide it visually */}
          <h1 className="srOnly">Hockey Programs</h1>

          {/* ✅ Visible image title (replaces the text) */}
          <img
            className="heroTitleImg"
            src={heroTitleImg}
            alt="Hockey Programs"
            loading="eager"
            draggable="false"
          />

          <p className="heroSubtitle">
            Find leagues, development, drop-ins, lessons, and sessions — all in one place.
          </p>
        </div>
      </header>

      <main className="content">
        <section className="grid" aria-label="Hockey links">
          {CARDS.map((c) => (
            <HockeyCard key={c.href} {...c} />
          ))}
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Wings Arena</span>
      </footer>
    </div>
  );
}
