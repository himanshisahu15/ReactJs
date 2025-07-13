import { useRef } from "react";
import useData from "../CustomHook/Hook";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const URL = import.meta.env.VITE_TMDB_API_URL;
// const url = `${URL}top_rated?language=en-US&page=1&api_key=${API_KEY}`;

const URL=import.meta.env.VITE_TMDB_BOLLYWOOD;

const url=`${URL}?api_key=${API_KEY}&with_original_language=hi&region=IN&sort_by=popularity.desc&include_adult=false&with_release_type=3|2&page=1`;

const Top10Movies = () => {
  const { data, loading, error } = useData(url);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollByAmount = 600;

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft -= scrollByAmount;
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft += scrollByAmount;
  };

 // Makes vertical mouse/trackpad scroll move content horizontally
  const scrollHandler = (e: React.WheelEvent<HTMLDivElement>) => {

    if (scrollRef.current) scrollRef.current.scrollLeft += e.deltaY;//detlaY-vertical scroll distance
  };

  if (loading) return <p className="text-white px-6 text-xl">Loading...</p>;
  if (error) return <p className="text-red-500 px-6">{error}</p>;

  return (
    <div className="relative bg-black px-6 py-10 overflow-visible ">
      <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
        Top 10 movies in India
        <span className="rotate-90 text-xl">⟳</span>
      </h2>

   
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-black bg-opacity-60 hover:bg-opacity-90 text-white px-2 py-1 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-black bg-opacity-60 hover:bg-opacity-90 text-white px-2 py-1 rounded-full"
      >
        ❯
      </button>

   
      <div
        ref={scrollRef}
        onWheel={scrollHandler}
        className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide pr-6 relative z-0"
      >
        {/* map cards */}
        {data?.results?.slice(0, 10).map((movie: any, index: number) => (
          <div
            key={movie.id}
            className="relative flex-shrink-0 w-80 transition-all duration-300"
          >
      
      {/* numbers */}
            <span className="absolute left-0 top-24 text-[180px] font-black text-white opacity-80 z-30 leading-none hover:text-helpyellow">
              {index + 1}
            </span>

        
            <div className="relative h-96 w-full bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
        
              <img
                loading="lazy"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover rounded-t-xl"
              />

           
              <img
                src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white._CB554929912_SY30_FMpng_.png"
                alt="Prime"
                className="absolute bottom-2 right-2 w-12 h-auto z-10"
              />

      
              <span className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1 rounded shadow-md font-bold">
                NEW MOVIE
              </span>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default Top10Movies;
