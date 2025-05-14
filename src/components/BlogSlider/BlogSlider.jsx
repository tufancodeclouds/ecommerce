import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import BlogItem from '../BlogItem/BlogItem'
import "./BlogSlider.css"
import blogImg1 from "../../assets/images/blogImg01.jpg"

const BlogSlider = ({items}) => {
  return (
    <div className="blogslider-wrapper pt-9">
        <Swiper slidesPerView={items} spaceBetween={20} navigation={true} modules={[Navigation]} className="blogSlider">
            <SwiperSlide>
              <BlogItem blogImg={blogImg1} />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem blogImg={blogImg1} />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem blogImg={blogImg1} />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem blogImg={blogImg1} />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem blogImg={blogImg1} />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default BlogSlider