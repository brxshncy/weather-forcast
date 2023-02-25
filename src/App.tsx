import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import { NavBar } from "./components/common/NavBar";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomPage/HomePage";

//hook
import { useAuth0 } from "@auth0/auth0-react";

export const App = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Router>
            <NavBar />

            <Routes>
                {isAuthenticated ? (
                    <>
                        <Route path='/' element={<HomePage />} />
                    </>
                ) : (
                    <Route path='/*' element={<LandingPage />} />
                )}
            </Routes>
        </Router>
    );
};
