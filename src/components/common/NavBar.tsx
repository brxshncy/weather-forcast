import React, { useState } from "react";
import { FiCloud } from "react-icons/fi";

import { useAuth0 } from "@auth0/auth0-react";

export const NavBar = () => {
    const { isAuthenticated, logout } = useAuth0();
    return (
        <nav className='bg-gray-800'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex-shrink-0 flex items-center'>
                        <FiCloud className='text-white mr-2 text-2xl' />
                        <span className='text-white font-bold text-xl'>
                            Weather Forecast
                        </span>
                    </div>
                    {isAuthenticated && (
                        <div className='ml-4 flex items-center md:ml-6'>
                            <button
                                className='bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                                onClick={() =>
                                    logout({
                                        logoutParams: {
                                            returnTo: window.location.origin,
                                        },
                                    })
                                }
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};
