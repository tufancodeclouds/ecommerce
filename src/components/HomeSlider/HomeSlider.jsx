import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import './HomeSlider.css'
import homeSlider1 from '../../assets/images/homeslider01.jpg'
import homeSlider2 from '../../assets/images/homeslider02.jpg'
import homeSlider3 from '../../assets/images/homeslider03.jpg'
import homeSlider4 from '../../assets/images/homeslider04.jpg'
import homeSlider5 from '../../assets/images/homeslider05.jpg'

const HomeSlider = () => {
  return (
    <div className="home-slider-wrapper">
        <div className="container">
            <Swiper spaceBetween={15} navigation={true} modules={[Navigation, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false }} className='home-slider'>
                <SwiperSlide>
                    <div className="item rounded-[20px] overflow-hidden">
                        <img src={homeSlider1} alt="" className='w-full h-[350px] object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item rounded-[20px] overflow-hidden">
                        <img src={homeSlider2} alt="" className='w-full h-[350px] object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item rounded-[20px] overflow-hidden">
                        <img src={homeSlider3} alt="" className='w-full h-[350px] object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item rounded-[20px] overflow-hidden">
                        <img src={homeSlider4} alt="" className='w-full h-[350px] object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item rounded-[20px] overflow-hidden">
                        <img src={homeSlider5} alt="" className='w-full h-[350px] object-cover' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default HomeSlider