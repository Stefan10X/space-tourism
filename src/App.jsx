import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import backgroundHome from "./assets/home/background-home-desktop.jpg";
import backgroundDestination from "./assets/destination/background-destination-desktop.jpg";
import backgroundCrew from "./assets/crew/background-crew-desktop.jpg";
import backgroundTechnology from "./assets/technology/background-technology-desktop.jpg";

function App() {
  const location = useLocation();

  const getBackgroundImage = () => {
    switch (location.pathname) {
      case "/":
        return backgroundHome;
      case "/destination":
        return backgroundDestination;
      case "/crew":
        return backgroundCrew;
      case "/technology":
        return backgroundTechnology;
      default:
        return backgroundHome;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Navbar />

      <div className="max-w-[70%] mx-auto text-gray-200 mt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
