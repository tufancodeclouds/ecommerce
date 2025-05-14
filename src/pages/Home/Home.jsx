import React from 'react'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import CatSlider from '../../components/CatSlider/CatSlider'
import { LiaShippingFastSolid } from "react-icons/lia"
import AdsBannerSlider from '../../components/AdsBannerSlider/AdsBannerSlider'
import { Tabs, Tab } from '@mui/material'
import "./Home.css"
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import BlogSlider from '../../components/BlogSlider/BlogSlider'
import shrinkbanner from '../../assets/images/shrink-banner.jpg'

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <CatSlider />

      <section className='bg-white pt-6'>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className='leftSec'>
              <h2 className='text-[23px] font-[600] mb-2'>Popular Products</h2>
              <p className='text-[14px] font-[500]'>Do not miss the current offers until the end of March.</p>
            </div>

            <div className='rightSec w-[60%]'>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewelry" />
              </Tabs>
            </div>
          </div>

          <ProductSlider items={6} />
        </div>
      </section>

      <section className="pt-8 pb-8">
        <div className="container">
          <div className="freeShipping w-[85%] mx-auto py-4 px-5 border-2 border-[#ff5252] flex items-center justify-between rounded-md">
            <div className="col1 flex items-center gap-2">
              <LiaShippingFastSolid className='text-[50px]' />
              <span className='text-[28px] font-bold uppercase'>Free Shipping</span>
            </div>

            <div className='col2'>
              <p className="mb-0 font-[500]">Free Delivery Now on Your First Order and Over $200</p>
            </div>

            <p className="text-[30px] font-bold uppercase">- Only $200*</p>
          </div>
        </div>
      </section>

      <section className='pt-6 bg-white'>
        <div className="container">
          <h2 className='text-[23px] font-[600] mb-2'>Latest Products</h2>
          <p className="text-[14px] font-[500]">Discover the latest trends before they're gone!</p>

          <ProductSlider items={6} />
        </div>
      </section>

      <section className="pt-8 pb-8">
        <div className="container">
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className='pt-6 bg-white'>
        <div className="container">
          <h2 className='text-[23px] font-[600] mb-2'>Featured Products</h2>
          <p className="text-[14px] font-[500]">Spotlight deals you’ll love don’t miss these exclusive picks!</p>

          <ProductSlider items={6} />
        </div>
      </section>
      
      <section className='pt-8 pb-8 shrinkbanner-wrapper'>
        <div className="container">
          <div className="shrinkbanner relative overflow-hidden">
            <img src={shrinkbanner} alt="shrinkbanner" className='w-full rounded-md shrinkbanner-img' />

            <div className="shrinkbanner-text">
              <h2 className="shrinkbanner-title">Watch</h2>
              <p className="shrinkbanner-desc">M6 Smart Band 2.3 – Fitness Band <span>Men’s and Women’s Health Tracking</span></p>
            </div>
          </div>
        </div>
      </section>
      
      <section className='pt-6 pb-3 blog-wrapper !overflow-inherit bg-white'>
        <div className="container">
          <h2 className='text-[23px] font-[600] mb-2'>From The Blog</h2>
          <p className="text-[14px] font-[500]">Stay informed and inspired read our latest articles and tips.</p>

          <BlogSlider items={4} />
        </div>
      </section>
    </>
  )
}

export default Home