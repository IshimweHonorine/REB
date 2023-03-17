import React from 'react'
import { FaArrowRight, FaTag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import DemoCarousel from './DemoCarousel';
import Carousel from './Carousel';

const Cards = () => {
  return (
    <>
    <div>
    
      <NavBar/>

    
      <div className='mt-0'>
     
        <div className='p-24'>
        <DemoCarousel/>
        <h1 className='text-black text-6xl ml-3 mt-32 font-bold'>REB</h1>
        <h3 className='text-black mt-8 ml-3 font-medium text-3xl'>Rwanda Basic Education Board</h3>
        
        </div>
        
      </div>
     <div id='section_call_to_action'>
<div className='grid sm:grid-cols-3 space-x-4 h-72 -translate-y-24 bg-gray-100 flex justify-center min-h-screen'>
       
<div class=" ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <FaTag className='w-8 h-10 mb-2 text-blue-700 dark:text-blue-400'/>
    
    <Link to="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">ICT in Education</h5>
    </Link>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">ICT in education department has the mission to harness the innovative and cost-effective potential of world-class educational technology tools and…</p>
    <Link to="#" class="inline-flex items-center text-black-600 hover:underline">
    Read more
    <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
</div>
<div class="ml-8 p-6 w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
<FaTag className='w-8 h-10 mb-2 text-blue-600 dark:text-blue-400'/>
    <Link to="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">Teacher Development, Management and Career Guidance & Counselling</h5>
    </Link>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Teacher Development, Management and Career Guidance & Counselling department has the mission to coordinate programs and activities to ensure teachers…
</p>
    <Link to="#" class="inline-flex items-center text-black-600 hover:underline">
        Read more
        <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
</div>
<div class="ml-8 w-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
<FaTag className='w-8 h-10 mb-2 text-blue-600 dark:text-blue-400'/>
    <Link to="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">Curriculum, Teaching & Learning Resources</h5>
    </Link>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 ">Curriculum, Teaching & Learning Resources department has the mission to prepare and distribute curricula, teaching materials, teacher’s guides,…</p>
    <Link to="#" class="inline-flex items-center text-black-600 hover:underline">
    Read more
    <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
</div>
<div></div>
<div className=''>
    <button className='h-8 w-44 bg-blue-600 ml-32 mt-8'>
        Explore More
    </button>
</div>
</div>

</div> 


<div>
<div className='font-bold text-4xl ml-24 mt-14 from-current mb-8'>Latest News</div>
<div className='grid grid-cols-3 gaps-3 px-16 mt-20'>
    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <Link href="#">
        <img class="rounded-t-lg w-full" src="./csm.jpg" alt="" />
    </Link>
    <div class="p-5">
        <Link href="#">
            <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-black">“TO OUR CHAMPIONS, CONGRATULATIONS! WELL DONE. THE CHALLENGES YOU SOLVED USING ROBOTS AND CODE EXEMPLIFY THE REAL WORLD WE LIVE IN.” HON. MOS, GASPARD TWAGIRAYEZU SPEAKING AT FIRST LEGO LEAGUE COMPETITION</h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kigali, Saturday 4th March 2023, the first-ever edition of FIRST LEGO League (FLL) in Rwanda has successfully concluded, with over 350 students…</p>
        <Link to="#" class="inline-flex font-bold items-center text-black-600 hover:underline">
        Read more
        <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
    </div>
</div>

<div class="max-w-sm ml-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700">
    <Link href="#">
        <img class="rounded-t-lg h-60 w-full" src="./csm_no_news_pic_62e960a5b5.png" alt="" />
    </Link>
    <div class="p-5">
        <Link href="#">
            <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-black">WEEKLY TIMETABLES FOR DIFFERENT LEVELS IN BASIC EDUCATION AND PROFESSIONAL OPTIONS ON BELOW LINK:</h5>
        </Link>
        <Link  to="www.reb.gov.rw/index.php" >
          <p class="mb-3 font-normal text-blue-700 dark:text-blue-400">  www.reb.gov.rw/index.php</p>
            
            </Link>
        <Link to="#" class="inline-flex font-bold items-center text-black-600 hover:text-navy">
        Read more
        <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
    </div>
</div>

<div class="max-w-sm ml-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700">
    <Link href="#">
        <img className="h-60  rounded-t-lg  w-full" src="./csm2.jpg" alt="" />
    </Link>
    <div class="p-5">
        <Link href="#">
            <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-black">“ABARIMU MWUBAHWE”; NYAKUBAHWA MINISITIRI W’INTEBE, DR. EDOUARD NGIRENTE AGANIRA N’ABARIMU MU BIRORI BYO KWIZIHIZA UMUNSI MPUZAMAHANGA WABO.</h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">“ABARIMU MWUBAHWE”; NYAKUBAHWA MINISITIRI W’INTEBE, DR. EDOUARD NGIRENTE AGANIRA N’ABARIMU MU BIRORI BYO KWIZIHIZA UMUNSI  MPUZAMAHANGA WABO.

Uyu…</p>
        <Link to="#" class="inline-flex font-bold items-center text-black-600 hover:underline">
        Read more
        <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
    </div>
</div>

<div></div>
<div className=''>
    <button className='text-white h-8 w-44 bg-blue-600 ml-32 mt-8'>
        Explore More
    </button>
</div>
<div></div>

</div>




</div>
<div>

<h1 className='mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-black'>OUR PARTNERS</h1>
<Carousel/>

</div>
<Footer/>
</div>


    </>
  )
}

export default Cards;