import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    return(
        <Slider className=" "{...settings}>
        
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/adra-vertical-logo.webp" className="h-25 w-15 " alt=""/>
  </div>
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/UNICEF_Logo.svg" className="h-25 w-15" alt="" />

  </div>
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/logo_vso.svg"className=" h-25 w-15" alt="" />
  
  </div>
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/logo_GPE.svg" className="h-25 w-15 " alt=""/>
  </div>
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/koica_logo.svg" className=" h-25 w-15" alt="" />

  </div>
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/APIE_LOGO.webp"className=" h-25 w-15" alt="" />
  
  </div>
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/USAID_logo.png"className=" h-25 w-15" alt="" />
  
  </div>
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/wellspring.png"className=" h-25 w-15" alt="" />
  
  </div>
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/aegis.png"className=" h-25 w-15" alt="" />
  
  </div>
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/AIMS.png"className=" h-25 w-15" alt="" />
  
  </div>
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/AVSI.png"className=" h-25 w-15" alt="" />
  
  </div>
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/Care.svg"className=" h-25 w-15" alt="" />
  
  </div>
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/bridge.svg"className=" h-25 w-15" alt="" />
  
  </div>
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/worldbank.svg"className=" h-25 w-15" alt="" />
  
  </div>
  <div className="ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-800">
    <img src="./images/compassion.png"className=" h-25 w-15" alt="" />
  
  </div>

</Slider>
    )
}

export default Carousel;