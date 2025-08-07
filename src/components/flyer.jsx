export default function Flyer({ joke, visible }) {
  return (
    <div
      id="customFlyer"
      style={{ display: visible ? "block" : "none" }}
    >
      <div className="flyer-container">
        <div className="flyer-header">
          <h2 id="flyer-title">🎩</h2>
        </div>
        <div className="flyer-content">
          <div className="comment-place">
            <blockquote id="flyer-comment">{joke}</blockquote>
          </div>
          <div className="flyer-footer">
            <p className="flyer-link">😂 VISTE QUE CHISTE 😂 </p>
          </div>
        </div>
      </div>
    </div>
  );
}