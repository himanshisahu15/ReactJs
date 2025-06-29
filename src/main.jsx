import { Provider } from "react-redux";

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store.js';

createRoot(document.getElementById('root')).render(
//make redu store available to all component
<Provider store={store}>
   <App />

</Provider>
 
  
)
