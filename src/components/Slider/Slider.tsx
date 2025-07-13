import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Slider from "react-slick";
import useData from "../CustomHook/Hook";
import fontStyles from "../../data/fontStyles";
import { useNavigate } from "react-router-dom";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const URL = import.meta.env.VITE_TMDB_API_URL;
const url = `${URL}popular?api_key=${API_KEY}`;

const handlePlay = () => {
  window.location.href = "https://www.primevideo.com/signup/ref=atv_mv_hom_c_3N84Xx_k6z0Gp_1_6_mv_signup_prime_bb_t1QQAAAAAA0wh0?force_return_url=1&cGTI=amzn1.dv.gti.d330db59-726c-4cbc-adbe-99e5dd63c9d2&return_url=%2Fdetail%2F0RNPUBH6AH0JC6SR4B7GPC93GY%2Fref%3Datv_hm_hom_c_mv_signup_prime_bb_t1QQAAAAAA0wh0"; // or a more specific membership URL
};


const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 left-5 -translate-y-1/2 z-50 bg-black/50 hover:bg-white/30 p-3 rounded-full cursor-pointer transition"
  >
    <FaChevronLeft className="text-white text-xl" />
  </div>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 right-5 -translate-y-1/2 z-50 bg-black/50 hover:bg-white/30 p-3 rounded-full cursor-pointer transition"
  >
    <FaChevronRight className="text-white text-xl" />
  </div>
);

const MovieCarousel = () => {
  const { data, loading, error } = useData(url);
  const navigate = useNavigate();
  const settings = {
    swipe: true,              // Enable swipe
    draggable: true,          // Allow mouse drag
    touchMove: true,          // Allow touchpad/touch swipe
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    fade: true,
    cssEase: "ease-in",
    waitForAnimate: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: () => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    },
  };

  if (loading) return <p className="text-white text-xl">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-black text-white">

      <div className="relative w-full h-[60vh] mb-28 z-30 ">
        <Slider {...settings}>
          {data?.results?.map((movie: any) => (
            <div key={movie.id} className="relative w-full h-[75vh] bg-black">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
             
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/90 to-transparent z-10"></div>
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-black/90 via-black/50 to-transparent z-0"></div>
              </div>

              <div className="absolute left-10 bottom-10 text-white max-w-xl space-y-4">
                <h2 className={`${fontStyles[movie.id % fontStyles.length]}`}>
                  {movie.title}
                </h2>
                <p className="text-md md:text-lg text-gray-300 line-clamp-3">
                  {movie.overview}
                </p>
                <div className="flex items-center gap-4">
                  <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:scale-105 transition flex items-center gap-2"
                  onClick={handlePlay}>
                    <FaPlay className="text-lg" />
                    Watch Now
                  </button>
                  <button
                    onClick={() => navigate(`/movie/${movie.id}`)}
                    className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition duration-200 flex items-center gap-2"
                  >
                    <AiOutlineInfoCircle className="text-xl" />
                    More Details
                  </button>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>


    </div>

  );
};

export default MovieCarousel;
