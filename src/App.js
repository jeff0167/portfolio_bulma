import './App.scss';
import '@ionic/react/css/core.css';
import { setupIonicReact } from '@ionic/react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects.js';

setupIonicReact();

function App() {  // shift + alt + f  to format
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="portfolio_bulma" element={<HomePage></HomePage>}></Route>
          <Route path="portfolio_bulma/about" element={<About></About>}></Route>
          <Route path="portfolio_bulma/projects" element={<Projects></Projects>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
