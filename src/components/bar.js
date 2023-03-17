
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Bar extends Component{
  render(){


        return(

     <nav className="fmax-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex">
  <div className="md:flex ">
    <Link to="/home" title="REB" className="navbar-brand">
    <img src="https://www.reb.gov.rw/index.php?eID=dumpFile&amp;t=f&amp;f=24422&amp;token=226e0a6d1be425664ffd59e24d5d4aad9f43f87b" alt="Image" height="70" width="100"/>
	
	</Link><Link to="/home" title="REB" className="navbar-brand logotext">
	<p className="txt_subtitle fnt_black  mabo0 mt-10 text-black-500 m-10">REB</p>
</Link>
	

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-="" label="Toggle navigation">
      <span id="navbar-hamburger" className="navbar-toggler-icon"></span>
      <span id="navbar-close" className="hidden"><i className="material-icons txt_content">close</i></span>
    </button>
    <div className="md:flex full" id="navbarSupportedContent">
    <ul className="md:flex w-full p-10 w-lg space-x-10">
        
          
              <li className="nav-item text-1xl">
                <Link className=" text-blue-700" to="/home" target="" title="Home">
                  Home
                </Link>
              </li>
            
        
          
              <li className="nav-item">
                <Link className="nav-link main_option  " to="/about-reb" target="" title="About REB">
                  About REB
                </Link>
              </li>
            
        
          
              <li className="nav-item">
                <Link className="nav-link main_option  has-children" to="/who-we-are/department-and-programs" target="" title="Mandate">
                  Mandate
                </Link>
              </li>
            
        
          
              <li className="nav-item">
                <Link className="nav-link main_option  " to="/services-2" target="" title="Services">
                  Services
                </Link>
              </li>
            
        
          
              <li className="nav-item">
                <Link className="nav-link main_option  has-children" to="/updates/news" target="" title="Updates">
                  Updates
                </Link>
              </li>
            
        
          
              <li className="nav-item">
                <Link className="nav-link main_option  " to="/announcement" target="" title="Announcement">
                  Announcement
                </Link>
              </li>
            
        
          
              <li className="nav-item">
                <Link className="nav-link main_option  " to="/publications" target="" title="Publications">
                  Publications
                </Link>
              </li>
            
        
      </ul>

      <ul className="navbar-nav ml-auto mx-10 my-10 ">
        <li className="nav-item w-full">
          <form method="get" id="form_kesearch_pi1" className="search-form" name="form_kesearch_pi1" action="index.php?id=4666" autocomplete="off">
  <div className="search__wrapper">
    <input type="hidden" name="id" value="4666" autocomplete="off"/>
    <input type="text" className="search__field" name="tx_kesearch_pi1[sword]" value="" placeholder="Search" autocomplete="off"/>
    <button className="search__icon txt_grey" onclick="this.form.searchword.focus();" type="submit"><i className="fa fa-search"></i></button>

    <input id="kesearchpagenumber" type="hidden" name="tx_kesearch_pi1[page]" value="1" autocomplete="off"/>
    <input id="resetFilters" type="hidden" name="tx_kesearch_pi1[resetFilters]" value="0" autocomplete="off"/>
    <input id="sortByField" type="hidden" name="tx_kesearch_pi1[sortByField]" value="" autocomplete="off"/>
    <input id="sortByDir" type="hidden" name="tx_kesearch_pi1[sortByDir]" value="" autocomplete="off"/>
  </div>
</form>
        </li><li>
          
        </li>
        <div className="relative inline-block text-rigth">
        <div>
    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      English
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">
      
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">English</a>
    </div>
   
  </div>
  </div>
        
      </ul>
    </div>
  </div>
</nav>

           
        )
      }
}
export default Bar;