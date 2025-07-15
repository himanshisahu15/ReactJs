import { useState } from 'react';
import img1 from '../../assets/PrimeLogo.png';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const validCredentials = {
    email: 'himanshi@gmail.com',
    password: '12345'
  };

  const [email, setEmail] = useState<string>(validCredentials.email);
  const [password, setPassword] = useState<string>(validCredentials.password);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});


  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleContinue = () => {
    if (!email.trim()) {
      setErrors({ email: 'Email is required' });
    } else if (!validateEmail(email)) {
      setErrors({ email: 'Invalid email format' });
    } else {
      setErrors({});
      setShowPassword(true);
    }
  };

  const handleSignIn = () => {
    if (!password.trim()) {
      setErrors({ password: 'Password is required' });
      return;
    }

    if (
      email.trim() !== validCredentials.email ||
      password.trim() !== validCredentials.password
    ) {
      setErrors({ password: 'Invalid email or password' });
      return;
    }

    setErrors({});
    localStorage.setItem('userCredentials', JSON.stringify({ email: email.trim() }));
    navigate('/movies');
  };

  const handleEmailChange = () => {
    setShowPassword(false);
    setPassword('');
    setErrors({});
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-prime px-4 relative">
      <img src={img1} alt="Amazon" className="w-40 mb-6" />

      <div className="w-full max-w-sm border border-gray-300 rounded-md p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Sign-In</h2>

        {!showPassword ? (
          <>
            <label htmlFor="email" className="text-sm font-bold block mb-1">
              Email or mobile phone number
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-400'
                } rounded-sm px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            />
            {errors.email && <p className="text-red-500 text-xs mb-2">{errors.email}</p>}

            <button
              onClick={handleContinue}
              className="w-full bg-yellow text-sm font-medium py-2 mt-3 rounded-full hover:bg-helpyellow"
            >
              Continue
            </button>

            <p className="text-xs text-black mt-4">
              By continuing, you agree to Amazon's{' '}
              <span className="text-helpblue underline cursor-pointer hover:text-blue-800">
                Conditions of Use and Privacy Notice
              </span>
            </p>

            <div className="mt-4">
              <div
                className="flex items-center cursor-pointer text-sm text-helpblue font-medium hover:underline"
                onClick={() => setShowHelp(!showHelp)}
              >
                <FiChevronDown className={`mr-1 transform transition-transform ${showHelp ? 'rotate-180' : ''}`} />
                Need help?
              </div>
              {showHelp && (
                <div className="pl-6 mt-1 text-sm text-black">Forgot your password?</div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="text-sm text-black mb-4">
              {email}
              <button
                onClick={handleEmailChange}
                className="text-helpblue font-medium hover:underline ml-2"
              >
                Change
              </button>
            </div>

            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="text-sm font-bold">
                Password
              </label>
              <a href="#" className="text-helpblue font-medium text-sm hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-400'
                } rounded-sm px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            />
            {errors.password && <p className="text-red-500 text-xs mb-2">{errors.password}</p>}

            <button
              onClick={handleSignIn}
              className="w-full mt-3 bg-yellow hover:bg-helpyellow text-sm font-medium py-2 rounded-full"
            >
              Sign in
            </button>

            {/* Keep Me Signed In Details */}
            <div className="relative flex items-start mt-3 w-full">
              <input type="checkbox" id="keep" className="mt-1 mr-2" />
              <div className="text-sm text-black">
                <label htmlFor="keep">Keep me signed in.</label>{' '}
                <span
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-helpblue font-medium cursor-pointer hover:underline inline-flex items-center"
                >
                  Details
                  <FiChevronDown
                    className={`ml-1 transition-transform ${showDetails ? 'rotate-180' : ''}`}
                  />
                </span>

                {showDetails && (
                  <div className="absolute bottom-6 left-0 w-100 text-xs z-20">
                    <div className="absolute top-full left-8 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>

                    <div className="bg-white border border-gray-300 rounded-md shadow-lg p-4 leading-relaxed text-gray-800 relative">
                      <button
                        onClick={() => setShowDetails(false)}
                        className="absolute top-1 right-2 text-gray-500 hover:text-black text-lg"
                        aria-label="Close"
                      >
                        ×
                      </button>

                      <strong className="block mb-1 tracking-wide">
                        "Keep Me Signed In" Checkbox
                      </strong>
                      <p className="tracking-wide">
                        Choosing "Keep me signed in" reduces the number of times you're asked to sign in on this device.
                      </p>
                      <p className="mt-2 tracking-wide">
                        To keep your account secure, use this option only on your personal devices.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {!showPassword && (
        <>
          <div className="flex items-center my-6 w-full max-w-sm">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-500">New to Amazon?</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full max-w-sm border border-gray-400 rounded-full py-2 text-sm hover:bg-gray-100">
            Create your Amazon account
          </button>
        </>
      )}

      <div className="mt-10 text-xs text-gray-600 text-center space-x-6">
        <a href="#" className="text-helpblue font-medium hover:underline">Terms and Privacy Notice</a>
        <a href="#" className="text-helpblue font-medium hover:underline">Send us feedback</a>
        <a href="#" className="text-helpblue font-medium hover:underline">Help</a>
        <p className="mt-2">© 1996–2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Login;
