
import { useState, useEffect, useRef } from "react";

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal = ({ onClose }: SearchModalProps) => {
  //store search input
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?query=";

  // Auto focus the input when modal opens
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Debounced API call
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) {
        fetchResults();
      } else {
        setResults([]);
      }
    }, 3000);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const fetchResults = async () => {
    setLoading(true);
    try {
      const res = await fetch(

        `${SEARCH_URL}${encodeURIComponent(query)}&api_key=${API_KEY}`
      );
      const data = await res.json();
      setResults(data.results || []);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);


      // setTimeout(() => {
      //   inputRef.current?.focus();
      // }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm p-6 overflow-auto ">
      <div className="max-w-8xl mx-auto text-white relative py-6">

        <div className="w-full max-w-6xl mx-auto flex items-center gap-4 ">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" flex-grow px-6 py-6 rounded-md text-white text-lg outline-none  backdrop-blur-md backdrop-saturate-150 bg-white/10 
              shadow-xl transition-all duration-500 ease-in-out "
          />
          <button
            onClick={onClose}
            className="text-white text-3xl hover:text-red-500 transition"
          >
            ✕
          </button>
        </div>

   
        {loading && (
          <p className="text-gray-400 text-sm mt-6">Searching for "{query}"...</p>
        )}

   
        {!loading && results.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10 ">
            {results.map((movie) => (
              <div
                key={movie.id}
                className="bg-white/10 hover:bg-white/20 transition rounded-lg overflow-hidden shadow"
              >
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://dummyimage.com/300x450/444/fff&text=No+Image"
                  }
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm font-bold">{movie.title}</h3>
                  <p className="text-xs text-gray-400">
                    {movie.release_date?.slice(0, 4) || "Unknown"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

     
        {!loading && query && results.length === 0 && (
          <p className="text-gray-400 mt-6">No results found for "{query}"</p>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
