import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-between items-end h-[55vh]">
      <div className="w-[45%]">
        <div className="text-3xl uppercase font-light ">
          So, you want to travel to
        </div>
        <div className="uppercase font-light text-[8rem] font-bellefair">
          Space
        </div>
        <div className="font-extralight text-xl">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>
      <Link to="destination">
        <div className="font-bellefair uppercase text-3xl text-center rounded-full py-[6.5rem] text-black bg-white w-64">
          Explore
        </div>
      </Link>
    </div>
  );
};

export default Home;
