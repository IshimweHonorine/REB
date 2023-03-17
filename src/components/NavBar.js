
import React from 'react'
import { FaSearch } from 'react-icons/fa';

function NavBar() {
    return (
  
  <nav class="fixed w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-white-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="#" class="flex items-center">
          <img src="https://www.reb.gov.rw/index.php?eID=dumpFile&amp;t=f&amp;f=24422&amp;token=226e0a6d1be425664ffd59e24d5d4aad9f43f87b" alt="Image" class="h-20 mr-5 sm:h-30" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-grey-600">REB</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex flex-col p-4 mt-4 border border-white-100 rounded-lg bg-white-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900 dark:border-white-700">
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-black-200 dark:hover:text-black md:dark:hover:bg-transparent">ABOUT  REB</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-black-200 dark:hover:text-black md:dark:hover:bg-transparent">MANDATE</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">SERVICES</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">UPDATES</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ANNOUNCEMENTS</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PUBLICATIONS</a>
          </li>
          <li>
            <FaSearch/>
          </li>
          <li>
          
          <select id="language-select" name="language" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black outline-none dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                          <option value="English" className=''>English</option>
                        
  
          </select>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  
          
  
  
    )
  }
export default NavBar;  