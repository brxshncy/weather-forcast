import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-3xl font-bold text-center'>
                Welcome to weather forecast web application.
            </h1>
            <p className='mt-4 text-center'>
                Please Login with your Github user to use the application and
                view the weather in your city.
            </p>
            <button
                onClick={() => loginWithRedirect()}
                className='px-4 py-2 mt-4 font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
            >
                Login with Github
            </button>
        </div>
    );
};
