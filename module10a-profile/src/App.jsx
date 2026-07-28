import Profile from "./Profile";

function App() {
  const appStyle = {
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#e0e7ff",
  };

  return (
    <div style={appStyle}>
      <Profile
        name="Tyler Holliday"
        occupation="Track and Field High School Athlete"
        funFact="Tyler can complete the long jump at over 20 feet."
      />
    </div>
  );
}

export default App;
