import { useState, useEffect,useRef } from "react";
import { FiChevronDown, FiGrid } from "react-icons/fi";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppsIcon from "@mui/icons-material/Apps";
import { useNavigate, Link } from "react-router-dom";
import SearchModal from "../SearchModel/SearchModel";

const Navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<{ email: string } | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
const profileMenuRef = useRef<HTMLDivElement>(null);

const handleSubsription=()=>{
  window.open("https://www.primevideo.com/addons");
}

const handleApp=()=>{
  window.open("https://www.primevideo.com/categories");
}
  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("userCredentials");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("userCredentials");
    setUser(null);
    setShowMenu(false);
    setMobileMenuOpen(false);
    navigate("/");
  };

  const handleProfileClick = () => {
    setShowMenu((prev) => !prev);
  };

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target as Node)
    ) {
      setShowMenu(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  return (
    <>
      <nav
        className="fixed top-0 left-0 w-[1790px] mx-6 rounded-lg z-50 flex justify-between items-center px-10 py-3 
             backdrop-blur-md backdrop-saturate-150 bg-white/10 
              shadow-xl text-white transition-all duration-500 ease-in-out"
      >

        {/* Left Section */}
        <div className="hidden lg:flex items-center space-x-14">
          <span className="text-lg font-bold tracking-tight">prime video</span>

          <ul className="flex space-x-8 text-md font-medium">
            <li>
              <Link to="/" className="px-3 py-2 rounded-lg hover:bg-white hover:text-black transition duration-200 block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/movies" className="px-3 py-2 rounded-lg hover:bg-white hover:text-black transition duration-200 block">
                Movies
              </Link>
            </li>
            <li className="px-3 py-2 rounded-lg hover:bg-white hover:text-black cursor-pointer transition duration-200">
              TV shows
            </li>
            <li className="px-3 py-2 rounded-lg hover:bg-white hover:text-black cursor-pointer transition duration-200">
              Live TV
            </li>

            <div className="h-10 w-px bg-white mx-2"></div>

            <li className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-white hover:text-black cursor-pointer transition duration-200"
            onClick={handleSubsription}>
              <FiGrid size={16} />
              Subscriptions
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 text-sm">
          <div
            className="p-2 rounded-full hover:bg-white hover:text-black cursor-pointer transition duration-200"
            onClick={() => setShowSearch(true)}
          >
            <SearchIcon />
          </div>


          <div className="hidden lg:flex items-center gap-1 p-2 rounded-lg hover:bg-white hover:text-black cursor-pointer transition duration-200 font-bold">
            EN <FiChevronDown />
          </div>

          <div className="hidden lg:flex p-2 rounded-full hover:bg-white hover:text-black cursor-pointer transition duration-200"
          onClick={handleApp}>
            <AppsIcon />
          </div>

          {/* Hamburger for mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Profile Icon */}
          <div className="relative hidden lg:block" ref={profileMenuRef}>

            <div
              className="p-2 rounded-full hover:bg-white hover:text-black cursor-pointer transition duration-200"
              onClick={handleProfileClick}
            >
              <AccountCircleIcon fontSize="large" />
            </div>

            {showMenu && (

              
              <div className="absolute right-0 mt-2 w-56 backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-xl shadow-2xl py-4 px-3 z-50 transition-all duration-300">
                {user ? (
                  <>
                    <div className="mx-4 px-4 py-2 text-sm border-b">{user.email}</div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-black rounded-lg mt-2"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      navigate("/login");
                      setShowMenu(false);
                    }}
                    className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-black rounded-lg"
                  >
                    Sign In
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Join Prime Button */}
          {!user && (
            <button
              onClick={() => navigate("/login")}
              className="hidden lg:block bg-helpblue hover:brightness-125 px-4 py-3 rounded-lg text-white font-bold text-sm transition duration-200 filter"
            >
              Join Prime
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[64px] left-0 w-full bg-black/80 backdrop-blur-md text-white px-6 py-6 space-y-6 shadow-lg z-40">
          <div className="flex flex-col gap-4 text-base font-medium border-b border-white/20 pb-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/movies" onClick={() => setMobileMenuOpen(false)}>Movies</Link>
            <span>TV Shows</span>
            <span>Live TV</span>
            <span>Subscriptions</span>
          </div>

          {/* Mobile Auth Section */}
          {user ? (
            <div className="space-y-4">
              <div className="text-sm text-gray-300">Signed in as</div>
              <div className="bg-white/10 w-56 px-4 py-2 rounded-md text-sm font-semibold text-white border border-white/20">
                {user.email}
              </div>
              <button
                onClick={handleLogout}
                className="w-44 bg-red-500 hover:bg-red-600 py-2 rounded-lg text-white font-semibold transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setMobileMenuOpen(false);
              }}
              className="w-full bg-helpblue hover:brightness-110 py-3 rounded-lg text-white font-bold text-sm transition"
            >
              Join Prime
            </button>
          )}
        </div>
      )}

      {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}


    </>
  );
};

export default Navbar;
