import UserProfile from "./UserProfile";

function App() {
  const appStyle = {
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#f0f2f5",
  };

  return (
    <div style={appStyle}>
      <UserProfile />
    </div>
  );
}

export default App;
