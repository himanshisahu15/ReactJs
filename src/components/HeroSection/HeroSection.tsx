import { movieImages } from "../../data/HeroImages";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate();

  return (
    <section className="  flex flex-col md:flex-row text-white min-h-screen bg-gradient-to-r from-black via-black to-[#0f0f93]">

      {/* Left Text Section */}
      <div className="flex-1 px-10 py-20 space-y-6 mt-72 mx-6">
        <h1 className="text-5xl font-bold">Welcome to Prime Video</h1>
        <p className="text-xl font-medium py-6 mr-8">
          Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals
        </p>
        <button
          onClick={() => navigate('/login')}
          className="mt-8 bg-white text-xl text-black font-semibold px-7 py-4 rounded-lg shadow transition duration-300 hover:scale-105">
          Sign in to join Prime
        </button>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 mt-64 relative px-6 mx-6">

        <h3 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white font-extrabold text-2xl px-4 py-2 rounded-md border-b-2 border-white z-10">
          PRIME DAY RELEASES
        </h3>


        <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {movieImages.map((movie, index) => (
            <img
              key={index}
              src={movie.src}
              alt={movie.alt}
              className="w-full h-52 object-cover rounded-lg  hover:scale-105 hover:shadow-lg transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
