import React, { useState } from "react";
import { FiCloud } from "react-icons/fi";

export const NavBar = () => {
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
                </div>
            </div>
        </nav>
    );
};
