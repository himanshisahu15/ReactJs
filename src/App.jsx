// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Layout from './Layout/Layout';
import Login from './pages/Login';
import { lazy, Suspense } from 'react';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';

const Page1=lazy(()=>import("./pages/About.jsx"));
const Page2=lazy(()=>import("./pages/Home.jsx"));
function App() {
  return (
    <BrowserRouter>
       <Suspense fallback={<div>Loading...</div>}>
      <Routes>
  
        <Route path="/" element={<Login />} />

      
        <Route path="/app" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<Page2 />} />
             <Route path="author/:authorName" element={<Page2 />} />
          <Route path="about" element={<Page1 />} />
          <Route path="contact" element={<Contact />} />
        </Route>
     
      </Routes>
         </Suspense>
    </BrowserRouter>
  );
}

export default App;
