import React from "react";
import { NavBar } from "./components/common/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomPage/HomePage";
import { WeatherPage } from "./pages/WeatherPage/WeatherPage";

export const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/weather' element={<WeatherPage />} />
            </Routes>
        </Router>
    );
};
