import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  movie: any;
}

const MovieCard = ({ movie }: MovieCardProps) => {

  const navigate = useNavigate();

  const handleWatchlistClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="relative group w-72 h-96 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover transition duration-300 group-hover:brightness-60"
        loading="lazy"
      />

      {/* Hover Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent">

        <h3 className="text-md font-semibold">{movie.title}</h3>
        <p className="text-xs text-white/70 italic">Watch with Prime</p>


        <div className="text-xs text-white/60 space-x-2 mt-1">
          <span>{movie.release_date?.split("-")[0]}</span>
          <span>·</span>
          <span>2h</span>
          <span className="bg-gray-700 px-1 rounded">U/A 13+</span>
        </div>
        <p className="text-sm mt-2">
          {(movie.overview?.length > 100
            ? movie.overview.slice(0, 50) + "..."
            : movie.overview) || "No overview available."}
        </p>

        <div className="flex gap-2 mt-2 mb-3">
          <button className=" border border-white text-white text-s font-semibold px-4 py-2 rounded hover:bg-gray-200 transition  hover:text-black">
            ▶ Play
          </button>
          <button onClick={handleWatchlistClick} className="border border-white text-white text-s font-semibold px-3 py-1 rounded hover:bg-white hover:text-black transition">
            + Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
