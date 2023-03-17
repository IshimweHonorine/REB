import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DemoCarousel(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    return(
        <Slider className="w-full mx-auto h-20 "{...settings}>
  <div>
    <img src="./11.jpg" className="w-full " alt=""/>
  </div>
  <div>
    <img src="./reb_img2.jpeg" className=" w-full" alt="" />

  </div>
  <div>
    <img src="./reading.jpg"className=" w-full" alt="" />
  
  </div>
</Slider>
    )
}

export default DemoCarousel;