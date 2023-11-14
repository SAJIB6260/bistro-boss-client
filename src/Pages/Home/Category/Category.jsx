import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slider1 from "../../../assets/home/slide1.jpg"
import slider2 from "../../../assets/home/slide2.jpg"
import slider3 from "../../../assets/home/slide3.jpg"
import slider4 from "../../../assets/home/slide4.jpg"
import slider5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"--- From 11:00am to 10:00pm ---"}
            heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className='text-lg md:text-2xl lg:text-4xl -mt-10 lg:-mt-16 uppercase text-center font-semibold text-white shadow-xl'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className='text-lg md:text-2xl lg:text-4xl -mt-10 lg:-mt-16 uppercase text-center font-semibold text-white shadow-xl '>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className='text-lg md:text-2xl lg:text-4xl -mt-10 lg:-mt-16 uppercase text-center font-semibold text-white shadow-xl'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className='text-lg md:text-2xl lg:text-4xl -mt-10 lg:-mt-16 uppercase text-center font-semibold text-white shadow-xl'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className='text-lg md:text-2xl lg:text-4xl -mt-10 lg:-mt-16 uppercase text-center font-semibold text-white shadow-xl'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;