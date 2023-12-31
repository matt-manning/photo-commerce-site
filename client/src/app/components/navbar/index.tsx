import React from 'react'
import Link from "next/link"
import Logo from "./Logo"
import Login from "./Login"

/*const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
                <Logo/>
                <button
                    type="button"
                    className="inline-flex items-center md:hidden"
                    onClick={toggle}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                    >
                        <path
                        fill="#fff"
                        d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                        />
                    </svg>
                </button>
                <ul className="hidden md:flex gap-x-6 text-white">
                    <li>
                        <Link href="/photos">
                            <p>Photos</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/photographers">
                            <p>Photographers</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/support">
                            <p>Support</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/components/photo-window">
                            <p>Test</p>
                        </Link>
                    </li>
                </ul>
                <Login />
            </div>
        </div>
    </div>
  )
}*/

const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo Placeholder */}
            <img
              src="https://via.placeholder.com/50"
              alt="Logo"
              className="mr-4"
            />
  
            {/* Navigation Links */}
            <div className="hidden md:flex items-center">
              <a href="#" className="text-white mr-4">
                Photos
              </a>
              <a href="#" className="text-white mr-4">
                Photographers
              </a>
              <a href="#" className="text-white mr-4">
                About
              </a>
              <a href="#" className="text-white mr-4">
                Support
              </a>
              <a href="/components/photo-window" className="text-white mr-6">
                Test
              </a>
              <input type="text" placeholder="Search" className="h-10 rounded-md w-80 pl-2"/>
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar