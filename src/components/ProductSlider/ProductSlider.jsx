import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem/ProductItem";
import productItemImg1 from "../../assets/images/productItemFashion01.jpeg"
import productItemImg1Hover from "../../assets/images/productItemFashion01-hover.jpeg"
import productItemImg2 from "../../assets/images/productItemFashion02.jpeg"
import productItemImg2Hover from "../../assets/images/productItemFashion01-hover.jpeg"
import productItemImg3 from "../../assets/images/productItemFashion03.jpeg"
import productItemImg3Hover from "../../assets/images/productItemFashion01-hover.jpeg"
import productItemImg4 from "../../assets/images/productItemFashion04.jpeg"
import productItemImg4Hover from "../../assets/images/productItemFashion01-hover.jpeg"
import productItemImg5 from "../../assets/images/productItemFashion05.jpeg"
import productItemImg5Hover from "../../assets/images/productItemFashion01-hover.jpeg"
import productItemImg6 from "../../assets/images/productItemFashion06.jpeg"
import productItemImg6Hover from "../../assets/images/productItemFashion01-hover.jpeg"
import productItemImg7 from "../../assets/images/productItemFashion07.jpeg"
import productItemImg7Hover from "../../assets/images/productItemFashion01-hover.jpeg"
import "./ProductSlider.css"

const ProductSlider = ({items}) => {
  return (
    <div className="productslider-wrapper py-5">
        <Swiper slidesPerView={items} spaceBetween={10} navigation={true} modules={[Navigation]} className="productSlider">
            <SwiperSlide>
                <ProductItem productItemImg={productItemImg1} productItemImgHover={productItemImg1Hover} />     
            </SwiperSlide>

            <SwiperSlide>
                <ProductItem productItemImg={productItemImg2} productItemImgHover={productItemImg2Hover} />     
            </SwiperSlide>

            <SwiperSlide>
                <ProductItem productItemImg={productItemImg3} productItemImgHover={productItemImg3Hover} />     
            </SwiperSlide>

            <SwiperSlide>
                <ProductItem productItemImg={productItemImg4} productItemImgHover={productItemImg4Hover} />     
            </SwiperSlide>

            <SwiperSlide>
                <ProductItem productItemImg={productItemImg5} productItemImgHover={productItemImg5Hover} />     
            </SwiperSlide>

            <SwiperSlide>
                <ProductItem productItemImg={productItemImg6} productItemImgHover={productItemImg6Hover} />     
            </SwiperSlide>

            <SwiperSlide>
                <ProductItem productItemImg={productItemImg7} productItemImgHover={productItemImg7Hover} />     
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ProductSlider