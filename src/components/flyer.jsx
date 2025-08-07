export default function Flyer({ joke, visible }) {
  return (
    <div
      id="customFlyer"
      className="min-w-full min-h-screen flex items-center justify-center fixed top-0 left-0 z-50"
      style={{ display: visible ? "block" : "none" } }
    >
      <div className="flyer-container">
        <div className="flyer-header">
          <h2 id="flyer-title" className="text-center">🎩</h2>
        </div>
        <div className="flyer-content">
          <div className="comment-place">
            <blockquote id="flyer-comment" className="text-center">{joke}</blockquote>
          </div>
          <div className="flyer-footer">
            <p className="flyer-link text-center">😂 VISTE QUE CHISTE APP😂 </p>
          </div>
        </div>
      </div>
    </div>
  );
}