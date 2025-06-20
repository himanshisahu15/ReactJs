import { useEffect, useState } from 'react';
import Form from './components/Form/Form.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  //render only once 
  useEffect(() => {
    console.log("useeffect called");
    const status = localStorage.getItem('isLogin');
    console.log("login status",status);
    if (status === 'true') {
      setIsLogin(true);
    }
  }, []);

  const handleSuccessFullLogin = (email) => {
   
    localStorage.setItem('isLogin', 'true');
    localStorage.setItem('email', email);
    setIsLogin(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  // if (isLogin === null) return null;

  return (
    <>
      {isLogin ? (
        <Welcome onLogout={handleLogout} />
      ) : (
        <Form onSuccessLogin={handleSuccessFullLogin} />
      )}
    </>
  );
}

export default App;
