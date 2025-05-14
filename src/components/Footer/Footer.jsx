import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia"
import { PiKeyReturnLight } from "react-icons/pi"
import { BsWallet2 } from "react-icons/bs"
import { LiaGiftSolid } from "react-icons/lia"
import { BiSupport } from "react-icons/bi"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className='flex items-center justify-center gap-8 py-3 lg:py-8 pb-0 lg:pb-8 px-0 lg:px-5 scrollableBox footerBoxWrap'>
          <div className='col flex items-center justify-center flex-col group w-[15%]'>
            <LiaShippingFastSolid className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
            <h3 className='text-[17px] font-[600] mt-3 '>Free Shipping</h3>
            <p className='text-[13px] font-[500] mt-2'>For all orders over $100</p>
          </div>

          <div className='col flex items-center justify-center flex-col group w-[15%]'>
            <PiKeyReturnLight className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
            <h3 className='text-[17px] font-[600] mt-3'>30 Days Returns</h3>
            <p className='text-[13px] font-[500] mt-2'>For an Exchange Product</p>
          </div>

          <div className='col flex items-center justify-center flex-col group w-[15%]'>
            <BsWallet2 className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
            <h3 className='text-[17px] font-[600] mt-3'>Secure Payment</h3>
            <p className='text-[13px] font-[500] mt-2'>Payment Cards Accepted</p>
          </div>

          <div className='col flex items-center justify-center flex-col group w-[15%]'>
            <LiaGiftSolid className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
            <h3 className='text-[17px] font-[600] mt-3 '>Special Gifts</h3>
            <p className='text-[13px] font-[500] mt-2'>Our First Product Order</p>
          </div>

          <div className='col flex items-center justify-center flex-col group w-[15%]'>
            <BiSupport className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
            <h3 className='text-[17px] font-[600] mt-3 '>Support 24/7</h3>
            <p className='text-[13px] font-[500] mt-2'>Contact us Anytime</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer