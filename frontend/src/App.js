// General Imports
import React from 'react';
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddTankPage from "./pages/AddTankPage/AddTankPage";
import TankManagerPage from "./pages/TankManagerPage/TankManagerPage";
import AddFishPage from './pages/AddFishPage/AddFish';

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<PrivateRoute>
          <HomePage />
        </PrivateRoute>}>
          
        
          {/** Need a Route here that directs to the TankManagerPage with the selected tank id as a param */}
        </Route>
        <Route path="/tank/:tankId/" element={<TankManagerPage />} />.
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-tank" element={<AddTankPage />} />
        <Route path="/add-fish" element={<AddFishPage />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
      <img src="/images/corner-tank.jpg" alt="" />
      <Footer />
      <Outlet/>
    </div>
    
  );

}

export default App;
