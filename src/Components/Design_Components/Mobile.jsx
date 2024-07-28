import React from 'react'
import TopNavbar from './TopNavbar'
import { NavLink } from "react-router-dom"



const Mobile = () => {
  return (
    <>
      <nav className='bg-white dark:bg-light-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>

        <TopNavbar />
      </nav>

      <div className="fixed  z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-300 dark:border-gray-300">
        <div className="grid h-full max-w-lg grid-cols-7 mx-5">
          <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-100 group">
            <span className="text-gray-900 dark:text-gray-900 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              <NavLink to="/discover" >

                Discover
              </NavLink>

            </span>
          </button>
          <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-100 group">
            <span className="text-gray-900 dark:text-gray-900 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              <NavLink to="/book" reloadDocument>

                Trip
              </NavLink>

            </span>
          </button>
          <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-100 group">
            <span className="text-gray-900 dark:text-gray-900 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              <NavLink to="/events" reloadDocument>

                Cultural
              </NavLink>

            </span>
          </button>
          <div className="flex items-center justify-center">
            <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
              {/* <img class="w-4 h-4 text-white" src="https://scontent.fccu13-1.fna.fbcdn.net/v/t39.30808-1/269794410_106452868573415_4346461559304280553_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p_JVWZFgmF4Q7kNvgGne9qT&_nc_ht=scontent.fccu13-1.fna&oh=00_AYAKwHO8jkLwtRrNrOss7KpnOvnVGmjeHoWvw2KCb61EfA&oe=66527C1F" />
            */}

              <NavLink to="/" reloadDocument>

                <img src="https://scontent.fccu13-1.fna.fbcdn.net/v/t39.30808-1/269794410_106452868573415_4346461559304280553_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p_JVWZFgmF4Q7kNvgGne9qT&_nc_ht=scontent.fccu13-1.fna&oh=00_AYAKwHO8jkLwtRrNrOss7KpnOvnVGmjeHoWvw2KCb61EfA&oe=66527C1F" alt="_alter" className="h-4 w-4" />
              </NavLink>
            </button>
          </div>
          <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-100 group">
            <span className="text-gray-900 dark:text-gray-900 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              <NavLink to="/meal" reloadDocument>

                Meal
              </NavLink>

            </span>
          </button>
          <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-100 group">
            <span className="text-gray-900 dark:text-gray-900 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              <NavLink to="/contact" reloadDocument>

                Contact
              </NavLink>

            </span>
          </button>
          <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-100 group">
            <span className="text-gray-900 dark:text-gray-900 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              <NavLink to="/login" reloadDocument>

                Login
              </NavLink>

            </span>
          </button>
        </div>
      </div>


    </>
  )
}

export default Mobile