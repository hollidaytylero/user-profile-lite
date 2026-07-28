function ContactCard() {
  const cardStyle = {
    width: "350px",
    margin: "20px auto",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px lightgray",
    fontFamily: "Arial",
  };

  return (
    <div style={cardStyle}>
      <h2>Contact</h2>
      <p>Email: taylor@email.com</p>
      <p>Location: California</p>
    </div>
  );
}

export default ContactCard;
