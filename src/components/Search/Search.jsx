import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";
import './Search.css'

const Search = () => {
  return (
    <div className="searchBox w-[85%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2 m-auto">
      <input type="text" placeholder="Search for products" className="w-full h-[35px] focus:outline-none bg-transparent p-2 text-[14px] font-[500]" />
      
      <Button className='!absolute top-[5px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black'>
        <IoSearch className='text-[#4e4e4e] text-[22px]' />
      </Button>
    </div>
  )
}

export default Search