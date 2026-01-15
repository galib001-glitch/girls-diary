export default function RingBinding() {
  return (
    <div className="ring-binding">
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>

      {/* Multiple resting butterflies */}
      <div className="ring-butterfly bfly1">
        <span className="wing left">🦋</span>
        <span className="wing right">🦋</span>
      </div>

      <div className="ring-butterfly bfly2">
        <span className="wing left">🦋</span>
        <span className="wing right">🦋</span>
      </div>

      <div className="ring-butterfly bfly3">
        <span className="wing left">🦋</span>
        <span className="wing right">🦋</span>
      </div>
    </div>
  );
}
