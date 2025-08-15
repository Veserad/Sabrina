import Carousel from "react-bootstrap/Carousel";
import "./carrousel.css";
function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="https://acdn-us.mitiendanube.com/stores/915/088/themes/new_linkedman/2-slide-1741961292499-6143031071-a147edc1e456e34fb464c27d9f93b69e1741961297-1920-1920.webp?1721962484"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://acdn-us.mitiendanube.com/stores/915/088/themes/new_linkedman/2-slide-1741961292499-545055242-efb8fef27279e851e13080551dedefc71741961297-1920-1920.webp?1721962484"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://acdn-us.mitiendanube.com/stores/915/088/themes/new_linkedman/2-slide-1741961292499-2178536953-0180dfbdc5eb4e7a37b091f7bd3298071741961297-1920-1920.webp?1721962484"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
