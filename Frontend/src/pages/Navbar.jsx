import { ModeToggle } from '@/components/mode-toggle';
import React from 'react';

export default function Navbar() {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="relative pt-6 pb-16 sm:pb-24">
                <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                    <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <a href="/">
                                <div className="imgBox flex items-center gap-4">
                                <span className="sr-only">Company Name</span>
                                    <img src='social-care.png' alt='logo' className='w-10 h-10 hover:scale-90' />
                                        <div className="comName text-blue-700"><h2>ElderHub</h2></div>
                                </div>
                            </a>
                            <div className="flex items-center -mr-2 md:hidden">
                                <button
                                    className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                                    type="button"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                   
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex md:space-x-10 list-none">
                        <li>
                            <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900" target="">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900" target="">
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900" target="_blank">
                                Blog 
                            </a>
                        </li>
                    </div>
                    <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                        <div className="inline-flex rounded-full shadow mr-12">
                            <div
                                href="#"
                                className="inline-flex items-center px-1 py-2 text-base  text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50"
                            >
                                Sign in
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
