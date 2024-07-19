'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import {  Pagination, Navigation } from 'swiper/modules';
import BestSellerCard from './BestSellerCard';

export default function Slider({ bestSellers }) {
    return (
        <>
            <Swiper

              slidesPerView={1}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                navigation={true}
                modules={[ Pagination, Navigation]}
                className="mySwiper"
            >

                <div className='grid grid-cols-12 gap-4'>


                    {
                        bestSellers.map((item, index) => (<SwiperSlide key={index}><BestSellerCard item={item} /></SwiperSlide>))
                    }
                </div>
            </Swiper>
        </>
    );
}
