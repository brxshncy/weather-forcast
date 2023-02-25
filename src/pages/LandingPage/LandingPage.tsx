import React, { useState, useEffect } from "react";
import { useAuth0, User } from "@auth0/auth0-react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { Login } from "./Login";

export const LandingPage = () => {
    return <Login />;
};
