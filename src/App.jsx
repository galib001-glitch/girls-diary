import { useState, useEffect } from "react";
import diaryPages from "./data/diaryPages";
import DiaryPage from "./components/DiaryPage";
import CoverPage from "./components/CoverPage";
import Butterflies from "./components/Butterflies";
import LoveBirds from "./components/LoveBirds";
import FountainPen from "./components/FountainPen";

import music from "./assets/audio/music.mp3";
import "./styles/global.css";
import "./styles/diary.css";
import "./styles/animations.css";

export default function App() {
  const [page, setPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [sparkles, setSparkles] = useState([]);

  /* 🎵 Background music */
  useEffect(() => {
    const audio = document.getElementById("bg-music");
    const play = () => {
      audio.play().catch(() => {});
      document.removeEventListener("click", play);
    };
    document.addEventListener("click", play);
  }, []);

  /* ✨ Sparkle effect */
  const addSparkle = (e) => {
    const sparkle = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY
    };

    setSparkles((prev) => [...prev, sparkle]);

    setTimeout(() => {
      setSparkles((prev) =>
        prev.filter((s) => s.id !== sparkle.id)
      );
    }, 800);
  };

  /* 📖 Handle page turn */
  const handleClick = (e) => {
    addSparkle(e);

    if (isFlipping) return;

    setIsFlipping(true);
    setShowContent(false);

    setTimeout(() => {
      setPage((prev) =>
        prev + 1 >= diaryPages.length ? 0 : prev + 1
      );
    }, 600);

    setTimeout(() => {
      setShowContent(true);
      setIsFlipping(false);
    }, 1200);
  };

  const current = diaryPages[page];

  return (
    <div className="viewport" onClick={handleClick}>
      <audio id="bg-music" src={music} loop />

      {/* 🦋 Flying animations */}
      <Butterflies />
      <LoveBirds />

      {/* 📖 Diary / Cover */}
<div className="center-wrapper">
  {current.type === "cover" ? (
    <CoverPage
      title={current.title}
      subtitle={current.subtitle}
    />
  ) : (
    <>
      <DiaryPage
        data={current}
        showContent={showContent}
        isFlipping={isFlipping}
      />
    </>
  )}
</div>
{/* ✒️ FLOATING PEN LAYER */}
{current.type !== "cover" && <FountainPen />}


      {/* ✨ Sparkles */}
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            left: s.x,
            top: s.y
          }}
        >
          ✨
        </span>
      ))}
    </div>
  );
}
