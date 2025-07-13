import Slider from "../../components/Slider/Slider";
import Footer from '../../components/Footer'
import MovieSliderRow from "../../components/MovieSliderRow/MovieSliderRow";
import Top10Movies from "../../components/Top10Movies/TopTen";
import LazySection from "../../components/LazyComponent/LazyComponent";


const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_API_URL;
const KIDS_URL = import.meta.env.VITE_KIDS_MOVIES_URL;
const HORROR_URL = import.meta.env.VITE_HORROR_MOVIES_URL;

const Movie = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full overflow-visible">

      <section className="relative z-10 overflow-visible mt-0">
        <Slider />
      </section>

      <section className="relative z-30 overflow-visible  min-h-[60vh]">
        <MovieSliderRow
          title="Top Rated Movies"
          fetchUrl={`${BASE_URL}now_playing?language=en-US&page=1&api_key=${API_KEY}`}
        />
      </section>

      <LazySection
        className="relative z-30 overflow-visible min-h-[60vh] -mt-28"
        render={(visible) => (
          <MovieSliderRow
            load={visible}
            title="Kids & Family Movies"
            fetchUrl={`${KIDS_URL}&api_key=${API_KEY}`}
          />
        )}
      />

      <LazySection
        className="relative mb-32 min-h-[60vh] -mt-28 z-30"
        render={(visible) => (
          <MovieSliderRow
            load={visible}
            title="Horror Movies"
            fetchUrl={`${HORROR_URL}&api_key=${API_KEY}`}
          />
        )}
      />

      <LazySection
        className="min-h-[60vh] -mt-8"
        render={(visible) => (
          <section className="relative z-50 overflow-visible -mt-52">
            {visible && <Top10Movies />}
          </section>
        )}
      />

      <section className="p-2 -mt-16">
        <Footer />
      </section>

    </div>
  );
};

export default Movie;
