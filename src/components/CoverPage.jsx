export default function CoverPage({ title, subtitle, onTap }) {
  return (
    <div className="cover cinematic" onClick={onTap}>
      {/* ⭐ STARS */}
      <div className="stars">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={`star-${i}`}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* ✨ PARTICLES */}
      <div className="particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* 🌙 MOON + CLOUDS */}
      <div className="moon-wrapper">
        <div className="moon"></div>
        <div className="moon-glow"></div>

        {/* Clouds */}
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
      </div>

      <h1 className="cover-title">{title}</h1>
      <p className="cover-subtitle">{subtitle}</p>

      <span className="cover-hint">
        Tap anywhere to open diary ✨
      </span>
    </div>
  );
}
