import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import "./AdsBannerSlider.css"
import BannerBox from '../BannerBox/BannerBox'
import bannerBox1 from '../../assets/images/bannerbox01.jpg'
import bannerBox2 from '../../assets/images/bannerbox02.jpg'
import bannerBox3 from '../../assets/images/bannerbox03.jpg'
import bannerBox4 from '../../assets/images/bannerbox04.jpg'
import bannerBox5 from '../../assets/images/bannerbox05.jpg'


const AdsBannerSlider = ({items}) => {
  return (
    <div className="adsbannerslider-wrapper">
          <Swiper slidesPerView={items} spaceBetween={10} navigation={true} modules={[Navigation]} className="adsbannerslider">
            <SwiperSlide>
              <BannerBox img={bannerBox1} />
            </SwiperSlide>
            <SwiperSlide>
              <BannerBox img={bannerBox2} />
            </SwiperSlide>
            <SwiperSlide>
              <BannerBox img={bannerBox3} />
            </SwiperSlide>
            <SwiperSlide>
              <BannerBox img={bannerBox4} />
            </SwiperSlide>
            <SwiperSlide>
              <BannerBox img={bannerBox5} />
            </SwiperSlide>
          </Swiper>
        </div>
  )
}

export default AdsBannerSlider