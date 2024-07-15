'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import BestSellerCard from './BestSellerCard';

export default function Slider({ bestSellers }) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[FreeMode, Pagination, Navigation]}
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
