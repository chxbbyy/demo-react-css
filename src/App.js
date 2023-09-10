import logo from './logo.svg';
import './App.css';
import "./input.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from './page/LandingPage';
import DetailPage from './page/DetailsPage';
import Navber from './components/Navbar';

function App() {
  return (
  <div className='bg-gradient-to-b from-[#0000FF] to-[#000000] h-screen'>
    <Navber/>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/details" element={<DetailPage />} />
    </Routes>
  </div>
  );
}

export default App;