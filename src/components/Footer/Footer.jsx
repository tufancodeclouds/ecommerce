import React from 'react'
import { Link } from 'react-router-dom'
import { LiaShippingFastSolid } from "react-icons/lia"
import { PiKeyReturnLight } from "react-icons/pi"
import { BsWallet2 } from "react-icons/bs"
import { LiaGiftSolid } from "react-icons/lia"
import { BiSupport } from "react-icons/bi"
import { IoChatboxOutline } from "react-icons/io5"

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className='flex items-center justify-center gap-8 py-3 lg:py-8'>
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
      </div>
      
      <div className="footer-bottom py-3 lg:py-8 bg-white">
        <div className="container">
          <div className='flex items-center'>
            <div className="part1 w-[30%]">
              <h2 className='text-[20px] font-[600] mb-4'>Contact Us</h2>
              <p className='text-[14px] font-[400] mb-4'>Classyshop - Mega Super Store <br/> 507-Union Trade Centre France</p>
              <p className='text-[14px] font-[400] mb-4'>Email: <Link to="mailto:sales@yourcompany.com" className="link">sales@yourcompany.com</Link></p>
              <p className='text-[17px] font-[600] mb-4'>Phone: <Link className="link">(+91) 9876-543-210</Link></p>

              <div className='flex items-center gap-2'>
                <IoChatboxOutline className="text-[42px] text-primary"/>
                <span className='text-[16px] font-[600]'>Online Chat <br/> Get Expert Help</span>
              </div>
            </div>

            <div className="part2 w-[40%]">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer