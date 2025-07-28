// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Operators from './pages/Operators';
import OperatorDetails from './pages/OperatorDetails'; // ⬅️ NEW import
import Maps from './pages/Maps';
import MapDetails from './pages/MapDetails'; // ⬅️ NEW import

function App() {
  return (
    <Router>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/operators" element={<Operators />} />
          <Route path="/operators/:id" element={<OperatorDetails />} /> {/* ⬅️ NEW route */}
          <Route path="/maps" element={<Maps />} />
          <Route path="/maps/:id" element={<MapDetails />} /> {/* ⬅️ NEW route */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
