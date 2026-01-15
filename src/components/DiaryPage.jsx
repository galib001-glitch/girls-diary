import RingBinding from "./RingBinding";

import { useEffect, useState } from "react";

export default function DiaryPage({ data, showContent, isFlipping }) {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (showContent) {
      const timer = setTimeout(() => setShowImage(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowImage(false);
    }
  }, [showContent]);

  return (
    <div className={`book ${isFlipping ? "flip" : ""}`}>
      <div className="page">
        <RingBinding />
        {showContent && (
        
          <>
            <h1>{data.title}</h1>
            <p className="handwritten">{data.text}</p>

            {showImage && data.images.length > 0 && (
              <div className="images fade-in">
                {data.images.map((img, i) => (
                  <img key={i} src={img} alt="Diary memory" />
                ))}
              </div>
            )}
          </>
        )}

        <span className="hint">Tap anywhere to turn the page</span>
      </div>
    </div>
  );
}
