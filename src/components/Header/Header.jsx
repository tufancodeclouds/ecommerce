import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import { Search, Navigation } from '../index'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md"
import { IoGitCompareOutline } from "react-icons/io5"
import { FaRegHeart } from "react-icons/fa"
import Tooltip from "@mui/material/Tooltip"
import { Button } from "@mui/material"

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const Header = () => {
  return (
    <div className='bg-white'>
        <div className="top-strip py-1">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="col1 w-[50%]">
                        <p className="text-[13px] font-[500]">Get up to 50% off new season styles, limited time only</p>
                    </div>

                    <div className="col2 w-[50%] flex items-center justify-end">
                        <ul className="flex items-center gap-1">
                            <li className="list-none">
                                <Link to="/help-center" className="link transition"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize">Help Center</Button></Link>
                            </li>
                            <li className="list-none">
                                <Link to="/order-tracking" className="link transition"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize">Order Tracking</Button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="header py-4 border-t-[1px] border-b-[1px] border-[rgba(0,0,0,0.1)]">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="col1 w-[25%]">
                        <Link to="/" className="logo">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div className="col2 w-[48%]">
                        <Search />
                    </div>

                    <div className="col3 w-[28%] flex items-center">
                        <ul className="flex justify-end items-center gap-3 w-full">
                            <li className="list-none">
                                <Link to="/login" className="link transition"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize">Login</Button></Link>|<Link to="/register" className="link transition"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize">Register</Button></Link>
                            </li>

                            <li>
                                <Tooltip title="Compare">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoGitCompareOutline />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            
                            <li>
                                <Tooltip title="Wishlist">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <FaRegHeart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>

                            <li>
                                <Tooltip title="Cart">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <MdOutlineShoppingCart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <Navigation />
    </div>
  )
}

export default Header