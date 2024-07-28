import React from 'react'
import TopNavbar from './TopNavbar'
import { NavLink } from "react-router-dom"

const Desktop = () => {
  return (
    <>

      <nav className="bg-white dark:bg-light-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <TopNavbar />



        {/* <div className="max-w-screen-xl flex flex-wrap items-center justify-evenly p-4">

      <div className="flex items-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex text-black-900 flex-col md:p-0 mt-4 font-medium rounded-lg bg-light md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-light-800 md:dark:bg-light-900 dark:border-dark-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-0 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
          </ul>
        </div>

        <a href="#" className="items-center hidden w-full md:flex md:w-auto md:order-1">
          <img src="https://scontent.fccu13-1.fna.fbcdn.net/v/t39.30808-1/269794410_106452868573415_4346461559304280553_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p_JVWZFgmF4Q7kNvgGne9qT&_nc_ht=scontent.fccu13-1.fna&oh=00_AYAKwHO8jkLwtRrNrOss7KpnOvnVGmjeHoWvw2KCb61EfA&oe=66527C1F" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">LAWA</span>
        </a>

        <div className="items-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex text-black-900 flex-col md:p-0 mt-4 font-medium rounded-lg bg-light md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-light-800 md:dark:bg-light-900 dark:border-dark-700">
            <li>
              <a href="#" className="block py-2 px-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

          </ul>
        </div>
      </div> */}

        <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative dark:bg-gray-900">
          <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 lg:border-none lg:py-4">
            <div className="flex items-center justify-around">
              <div className="hidden lg:block">
                <ul className="flex gap-10 text-base font-bold text-black/60 dark:text-white mr-5">
                  <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                    <a href="#">
                      <NavLink to="/">

                        Home
                      </NavLink>
                    </a>
                  </li>
                  <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                    <a href="#">
                      <NavLink to="/discover" reloadDocument>

                        Discover
                      </NavLink>
                    </a>
                  </li>
                  <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                    <a href="#">
                      <NavLink to="/book" reloadDocument>

                        Plan A Trip
                      </NavLink>

                    </a>
                  </li>
                </ul>
              </div>
              <button>
                <div className="flex items-center space-x-2">

                  <NavLink to="/" reloadDocument>

                    <img src="https://scontent.fccu13-1.fna.fbcdn.net/v/t39.30808-1/269794410_106452868573415_4346461559304280553_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p_JVWZFgmF4Q7kNvgGne9qT&_nc_ht=scontent.fccu13-1.fna&oh=00_AYAKwHO8jkLwtRrNrOss7KpnOvnVGmjeHoWvw2KCb61EfA&oe=66527C1F" className="h-16 w-16" alt="Lawa-Logo" />
                  </NavLink>

                </div>
              </button>
              <div className="hidden lg:block">
                <ul className="flex gap-10 text-base font-bold text-black/60 dark:text-white ml-5">
                  <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                    <a href="#">
                      <NavLink to="/meal" reloadDocument>

                        Meal
                      </NavLink>

                    </a>
                  </li>
                  <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                    <a href="#">
                      <NavLink to="/events" reloadDocument>

                        Cultural Events
                      </NavLink>

                    </a>
                  </li>
                  <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                    <a href="#">
                      <NavLink to="/contact">

                        Contact Us
                      </NavLink>

                    </a>
                  </li>
                </ul>
              </div>

              <div className="hidden lg:flex lg:items-center gap-x-2 justify-end">
                <button className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                  <NavLink to="/login">

                    Login
                  </NavLink>

                </button>
              </div>
            </div>
          </nav>
        </div>


      </nav>


    </>
  )
}

export default Desktop