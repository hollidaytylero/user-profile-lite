function UserProfile() {
  const name = "Taylor Johnson";

  const bio =
    "Taylor is a computer science student who enjoys coding, learning React, and building creative web applications.";

  const cardStyle = {
    width: "350px",
    margin: "40px auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px gray",
    fontFamily: "Arial",
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  return (
    <div style={cardStyle}>
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
        alt="Profile"
        style={imageStyle}
      />

      <h1>{name}</h1>

      <p>{bio}</p>
    </div>
  );
}

export default UserProfile;

