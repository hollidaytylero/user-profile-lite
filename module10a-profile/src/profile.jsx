import { useState } from "react";

function Profile({ name, occupation, funFact }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((previousValue) => !previousValue);
  };

  const cardStyle = {
    width: "90%",
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    fontFamily: "Arial, sans-serif",
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid #4f46e5",
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const detailStyle = {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#eef2ff",
    borderRadius: "8px",
    color: "#333333",
  };

  return (
    <div style={cardStyle}>
      <img
        src="https://images.unsplash.com/photo-1530137073520-4ea6e2f10a48?w=400"
        alt={`${name} profile`}
        style={imageStyle}
      />

      <h1>{name}</h1>

      <h2>{occupation}</h2>

      <p>
        <strong>Fun Fact:</strong> {funFact}
      </p>

      <button style={buttonStyle} onClick={toggleDetails}>
        {showDetails ? "Hide Bio" : "Show Bio"}
      </button>

      {showDetails && (
        <div style={detailStyle}>
          <p>
            Jordan is a dedicated athlete who trains several times each week
            and encourages younger students to stay active and confident.
          </p>

          <blockquote>
            “Success comes from preparation, consistency, and believing in
            yourself.”
          </blockquote>
        </div>
      )}
    </div>
  );
}

export default Profile;
