import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 fixed w-full z-20 top-0 start-0 border-b border-gray-200 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse transform hover:scale-105 transition-transform duration-200">
            <img src="https://images.icon-icons.com/2699/PNG/512/reactjs_logo_icon_170805.png" className="h-14 animate-spin-slow" alt="React Logo" />
            <span className="self-center text-2xl font-bold text-white">React</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
              Get started
            </button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className={`block py-2 px-3 ${index === 0 ? 'text-yellow-300' : 'text-white'} rounded-lg hover:bg-indigo-700 md:hover:bg-transparent md:hover:text-yellow-300 transition-colors duration-200 text-lg`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar