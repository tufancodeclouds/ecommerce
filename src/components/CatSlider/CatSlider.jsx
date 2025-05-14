import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import catslider1 from '../../assets/images/catslider01.png';
import catslider2 from '../../assets/images/catslider02.png';
import catslider3 from '../../assets/images/catslider03.png';
import catslider4 from '../../assets/images/catslider04.png';
import catslider5 from '../../assets/images/catslider05.png';
import catslider6 from '../../assets/images/catslider06.png';
import catslider7 from '../../assets/images/catslider07.png';
import catslider8 from '../../assets/images/catslider08.png';
import "./CatSlider.css"

const CatSlider = () => {
    return (
        <div className="cat-slider-wrapper pb-8">
            <div className="container">
                <Swiper slidesPerView={7} spaceBetween={10} navigation={true} modules={[Navigation]} className="cat-slider">
                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col">
                                <img src={catslider1} alt="catslider" className='w-[60px] transition-all' />
                                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Fashion</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col">
                                <img src={catslider2} alt="catslider" className='w-[60px] transition-all' />
                                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Electronics</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col">
                                <img src={catslider3} alt="catslider" className='w-[60px] transition-all' />
                                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Bags</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col">
                                <img src={catslider4} alt="catslider" className='w-[60px] transition-all' />
                                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Footwear</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col">
                                <img src={catslider5} alt="catslider" className='w-[60px] transition-all' />
                                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Groceries</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col">
                                <img src={catslider6} alt="catslider" className='w-[60px] transition-all' />
                                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Beauty</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col">
                                <img src={catslider7} alt="catslider" className='w-[60px] transition-all' />
                                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Wellness</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col">
                                <img src={catslider8} alt="catslider" className='w-[60px] transition-all' />
                                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Jewelry</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default CatSlider;