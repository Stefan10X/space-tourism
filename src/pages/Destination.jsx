import moon from "../assets/destination/image-moon.png";
import { useState } from "react";

const destinations = [
  {
    name: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
  },
  {
    name: "Mars",
    description:
      "Explore the red planet with its breathtaking landscape and mysterious history. A perfect getaway for those who love adventure and the unknown.",
    distance: "225 MIL KM",
    travelTime: "9 MONTHS",
  },
  {
    name: "Europa",
    description:
      "Visit one of Jupiter's moons where icy oceans meet alien landscapes. Perfect for those seeking an adventure like no other.",
    distance: "628 MIL KM",
    travelTime: "6 YEARS",
  },
  {
    name: "Titan",
    description:
      "Explore Saturn's largest moon, with its unique, Earth-like atmosphere. Perfect for long expeditions.",
    distance: "1.2 BIL KM",
    travelTime: "7 YEARS",
  },
];

const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(0);

  return (
    <div>
      <div className="text-3xl flex gap-4 text-white font-extralight uppercase">
        <div className="text-gray-700 font-semibold">01</div>
        <div className="mb-32">Pick your Destination</div>
      </div>
      <div className="flex justify-between">
        <img src={moon} alt="moon" />
        <div className="text-white max-w-lg mx-auto">
          <nav className="flex justify-around mb-8 text-lg">
            {destinations.map((destination, index) => (
              <button
                key={index}
                className={`uppercase tracking-widest ${
                  currentDestination === index ? "underline" : ""
                }`}
                onClick={() => setCurrentDestination(index)}
              >
                {destination.name}
              </button>
            ))}
          </nav>

          {/* Content */}
          <div className="text-center">
            <h2 className="text-6xl font-bold uppercase">
              {destinations[currentDestination].name}
            </h2>
            <p className="mt-6 mb-8 text-gray-400">
              {destinations[currentDestination].description}
            </p>
            <div className="border-t border-gray-500 py-4">
              <div className="flex justify-around text-sm">
                <div>
                  <span className="block uppercase tracking-widest text-gray-400">
                    Avg. Distance
                  </span>
                  <span className="block text-2xl font-bold">
                    {destinations[currentDestination].distance}
                  </span>
                </div>
                <div>
                  <span className="block uppercase tracking-widest text-gray-400">
                    Est. Travel Time
                  </span>
                  <span className="block text-2xl font-bold">
                    {destinations[currentDestination].travelTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
