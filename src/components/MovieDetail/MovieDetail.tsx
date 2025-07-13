import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const URL = import.meta.env.VITE_TMDB_API_URL;

const MovieDetail = () => {

  //extract id from url 
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);


const handlePlay = () => {
  window.location.href = "https://www.primevideo.com/signup/ref=atv_mv_hom_c_3N84Xx_k6z0Gp_1_6_mv_signup_prime_bb_t1QQAAAAAA0wh0?force_return_url=1&cGTI=amzn1.dv.gti.d330db59-726c-4cbc-adbe-99e5dd63c9d2&return_url=%2Fdetail%2F0RNPUBH6AH0JC6SR4B7GPC93GY%2Fref%3Datv_hm_hom_c_mv_signup_prime_bb_t1QQAAAAAA0wh0"; // or a more specific membership URL
};


  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`${URL}${id}?api_key=${API_KEY}&language=en-US`);
      const json = await res.json();
      setMovie(json);
      setLoading(false);
    };
    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[999]">
        <div className="animate-spin h-12 w-12 border-4 border-white border-t-transparent rounded-full"></div>
      </div>
    );
  }
  // if (!movie) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="text-white bg-black min-h-screen w-full overflow-x-hidden">

      <div className="relative w-full h-[60vh]">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>


      <div className="px-6 md:px-20 pt-2 pb-2 -mt-22">
        <div className="max-w-4xl space-y-5">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="italic text-green-400 text-sm">{movie.tagline}</p>


          <div className="text-white/80 text-sm space-x-2">
            <span>{movie.release_date}</span>
            <span>•</span>
            <span>{movie.runtime} min</span>
            <span>•</span>
            <span className="bg-gray-700 px-2 py-0.5 rounded text-xs">U/A 13+</span>
          </div>


          <div className="text-sm space-x-4">
            {movie.genres?.map((genre: any) => (
              <span
                key={genre.id}
                className="bg-white/10 px-2 py-1 rounded text-white text-xs"
              >
                {genre.name}
              </span>
            ))}
          </div>


          <p className="text-white text-sm leading-relaxed pt-1">
            {movie.overview}
          </p>


          <div className="flex ">
            <button onClick={handlePlay} className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-300 transition">
              ▶ Watch Now
            </button>

          </div>


          <p className="text-xs text-white/60 pt-0 ">
            Rentals include 30 days to start watching this video and 48 hours to finish once started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
