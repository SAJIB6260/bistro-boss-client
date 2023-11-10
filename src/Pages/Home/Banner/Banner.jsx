import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import imgBanner1 from "../../../assets/home/01.jpg"
import imgBanner2 from "../../../assets/home/02.jpg"
import imgBanner3 from "../../../assets/home/03.png"
import imgBanner4 from "../../../assets/home/04.jpg"
import imgBanner5 from "../../../assets/home/05.png"
import imgBanner6 from "../../../assets/home/06.png"

const Banner = () => {
    return (
        <Carousel autoPlay infiniteLoop interval={3000} stopOnHover transitionTime={2000} showStatus={false} thumbWidth={201}>
            <div>
                <img src={imgBanner1} />
            </div>
            <div>
                <img src={imgBanner2} />
            </div>
            <div>
                <img src={imgBanner3} />
            </div>
            <div>
                <img src={imgBanner4} />
            </div>
            <div>
                <img src={imgBanner5} />
            </div>
            <div>
                <img src={imgBanner6} />
            </div>
        </Carousel>
    );
};

export default Banner;