import { useEffect, useRef, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

interface MovieSliderRowProps {
  title: string;
  fetchUrl: string;
  load?: boolean;
}

const MovieSliderRow = ({ title, fetchUrl, load = true }: MovieSliderRowProps) => {
 
  const scrollRef = useRef<HTMLDivElement>(null);

  //current page
  const [page, setPage] = useState(1);

  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  //if there are more page to load
  const [hasMore, setHasMore] = useState(true);

  // API Fetch function on horizontal scroll
  const fetchMovies = async (pageNumber: number) => {

    //if there are no more pages, stop requesting
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const res = await fetch(`${fetchUrl}&page=${pageNumber}`);
      const json = await res.json();

      if (json.results?.length > 0) {
        setMovies((prev) => [...prev, ...json.results]);
        setHasMore(json.page < json.total_pages); // Check if more pages exist(current page <total page)
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
    } finally {
      setLoading(false);
    }
  };

  // Load page 1 on mount
  useEffect(() => {
    if (load) fetchMovies(page);
  }, [load]);

  // Scroll detection
  const handleScroll = () => {
    //target container
    const container = scrollRef.current;
    if (!container || loading || !hasMore) return;

    const atEnd =
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 100;

//scrollLeft: how far the container has been scrolled horizontally
// clientWidth: visible width of the container
// scrollWidth: total scrollable content width

    if (atEnd) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchMovies(nextPage);
    }
  };

  if (!load) return null;

  return (
    <div className="px-6 relative z-50 w-full py-14 overflow-visible">
      <h2 className="text-white text-2xl font-bold mb-4 px-4">{title}</h2>


      <button
        onClick={() => scrollRef.current && (scrollRef.current.scrollLeft -= 700)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-black bg-opacity-60 hover:bg-opacity-90 text-white px-2 py-1 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={() => scrollRef.current && (scrollRef.current.scrollLeft += 700)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-black bg-opacity-60 hover:bg-opacity-90 text-white px-2 py-1 rounded-full"
      >
        ❯
      </button>


      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pr-6 relative z-10 overflow-y-hidden h-[500px] -mt-16"
      >
        {movies.map((movie,index) => (
          <div key={index} className="flex-shrink-0 w-72 mt-20">
            <MovieCard movie={movie} />
          </div>
        ))}


        {loading && (
          <div className="text-white text-sm p-4 flex mt-52">Loading more...</div>
        )}
      </div>
    </div>
  );
};

export default MovieSliderRow;
