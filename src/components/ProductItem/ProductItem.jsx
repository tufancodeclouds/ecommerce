import "./ProductItem.css"
import { Link } from "react-router-dom"
import { Rating } from "@mui/material"
import Button from "@mui/material/Button"
import { FaRegHeart } from "react-icons/fa"
import { IoGitCompareOutline } from "react-icons/io5"
import { MdZoomOutMap } from "react-icons/md"
import {Tooltip} from "@mui/material"

const ProductItem = ({productItemImg, productItemImgHover}) => {
  return (
    <div className='productItem-wrapper shadow-lg rounded-md overflow-hidden border-[1px] border-[rgba(0,0,0,0.1)]'>
        <div className="group imgwrapper w-[100%] rounded-md relative">
            <Link to="/">
                <div className="img h-[250px] overflow-hidden">
                    <img src={productItemImg} alt="productItem" className='w-full h-full object-cover' />
                    <img src={productItemImgHover} alt="productItem" className='w-full h-full object-cover absolute top-0 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100' />
                </div>
            </Link>
            
            <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-md px-2 py-1 text-[12px] font-[500] ">10%</span>

            <div className="actions absolute top-[-200px] !right-[10px] z-50 flex items-center gap-2 flex-col w-[30px] transition-all duration-300 group-hover:top-[10px] opacity-0 group-hover:opacity-100">
                <Tooltip title="View Product Details" placement="left-start">
                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white">
                        <MdZoomOutMap className="pointer-events-none" />
                    </Button>
                </Tooltip>

                <Tooltip title="Compare" placement="left-start">
                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white">
                        <IoGitCompareOutline className="pointer-events-none" />
                    </Button>
                </Tooltip>

                <Tooltip title="Wishlist" placement="left-start">
                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white">
                        <FaRegHeart className="pointer-events-none" />
                    </Button>
                </Tooltip>
            </div>
        </div>

        <div className="info px-3 py-4 bg-[#f7f7f7]">
            <h3 className='text-[13px] mb-1'><Link to="/" className="link transition">Soylent Green</Link></h3>
            <h6 className='text-[13px] title mb-1 font-[500] text-[rgba(0,0,0,0.9)]'><Link to="/" className="link transition">Siril Georgette Pink Color Saree with Blouse piece</Link></h6>

            <Rating name="read-only" value={4} size="small" readOnly />

            <div className="flex items-center gap-2">
                <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">$250</span>
                <span className="newPrice text-primary text-[14px] font-[600]">$200</span>
            </div>
        </div>
    </div>
  )
}

export default ProductItem