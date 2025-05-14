import { IoMdTime } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"

const BlogItem = ({blogImg}) => {
  return (
    <div className='blogItem group'>
        <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
            <Link to="/">
                <img src={blogImg} alt="blog" className='w-full transition-all duration-300 group-hover:scale-105' />
            </Link>
            <span className='flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1'><IoMdTime className="text-[16px]" /> 5 APRIL, 2023</span>
        </div>

        <div className="info py-4">
            <h2 className="text-[15px] font-[600] text-black mb-2">Nullam ullamcorper ornare molestie</h2>
            <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.9)] mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <Link to="/" className="link font-[500] text-[14px] flex items-center gap-1">Read More <IoIosArrowForward /></Link>
        </div>
    </div>
  )
}

export default BlogItem