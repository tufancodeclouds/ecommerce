import { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from "react-icons/io5"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import logo from '../../assets/images/logo.jpg'

const CategoryPanel = ({ openCategoryPanel, setOpenCategoryPanel }) => {

  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null)
    } else {
      setSubmenuIndex(index)
    }
  }

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null)
    } else {
      setInnerSubmenuIndex(index)
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <div className="p-3">
        <img src={logo} className="w-[170px]" />
      </div>

      <h3 className="p-3 text-[15px] font-[600] flex items-center justify-between">Shop By Categories <IoCloseSharp className="text-[20px] cursor-pointer" onClick={() => setOpenCategoryPanel(!openCategoryPanel)} /></h3>

      <div className='h-[calc(100vh-47px)] overflow-y-auto'>
        <ul className="w-full">
          {/* Fashion */}
          <li className="list-none">
            <Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center" onClick={() => openSubmenu(0)}>
              Fashion {submenuIndex === 0 ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
            </Button>
            {submenuIndex === 0 && (
              <ul className="submenu pl-3">
                <li className="list-none">
                  <Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center" onClick={() => openInnerSubmenu(0)}>
                    Apparel {innerSubmenuIndex === 0 ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
                  </Button>
                  {innerSubmenuIndex === 0 && (
                    <ul className="inner-submenu pl-3">
                      <li><Link to="/"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center">T-Shirts</Button></Link></li>
                      <li><Link to="/"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center">Jeans</Button></Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Electronics */}
          <li className="list-none">
            <Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center" onClick={() => openSubmenu(1)}>
              Electronics {submenuIndex === 1 ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
            </Button>
            {submenuIndex === 1 && (
              <ul className="submenu pl-3">
                <li className="list-none">
                  <Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center" onClick={() => openInnerSubmenu(1)}>
                    Mobile {innerSubmenuIndex === 1 ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
                  </Button>
                  {innerSubmenuIndex === 1 && (
                    <ul className="inner-submenu pl-3">
                      <li><Link to="/"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center">iPhone</Button></Link></li>
                      <li><Link to="/"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center">Samsung</Button></Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Home & Living */}
          <li className="list-none">
            <Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center" onClick={() => openSubmenu(2)}>
              Home & Living {submenuIndex === 2 ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
            </Button>
            {submenuIndex === 2 && (
              <ul className="submenu pl-3">
                <li className="list-none">
                  <Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center" onClick={() => openInnerSubmenu(2)}>
                    Furniture {innerSubmenuIndex === 2 ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
                  </Button>
                  {innerSubmenuIndex === 2 && (
                    <ul className="inner-submenu pl-3">
                      <li><Link to="/"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center">Sofas</Button></Link></li>
                      <li><Link to="/"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center">Beds</Button></Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Beauty & Health */}
          <li className="list-none">
            <Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center" onClick={() => openSubmenu(3)}>
              Beauty & Health {submenuIndex === 3 ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
            </Button>
            {submenuIndex === 3 && (
              <ul className="submenu pl-3">
                <li className="list-none">
                  <Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center" onClick={() => openInnerSubmenu(3)}>
                    Skincare {innerSubmenuIndex === 3 ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
                  </Button>
                  {innerSubmenuIndex === 3 && (
                    <ul className="inner-submenu pl-3">
                      <li><Link to="/"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center">Moisturizers</Button></Link></li>
                      <li><Link to="/"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center">Face Wash</Button></Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Sports & Outdoors */}
          <li className="list-none">
            <Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center" onClick={() => openSubmenu(4)}>
              Sports & Outdoors {submenuIndex === 4 ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
            </Button>
            {submenuIndex === 4 && (
              <ul className="submenu pl-3">
                <li className="list-none">
                  <Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center" onClick={() => openInnerSubmenu(4)}>
                    Equipment {innerSubmenuIndex === 4 ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
                  </Button>
                  {innerSubmenuIndex === 4 && (
                    <ul className="inner-submenu pl-3">
                      <li><Link to="/"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center">Dumbbells</Button></Link></li>
                      <li><Link to="/"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center">Treadmills</Button></Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Standalone category */}
          <li className="list-none">
            <Link to="/"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !px-3 !flex !justify-between !items-center">Jewellery</Button></Link>
          </li>
        </ul>

      </div>
    </Box>
  );



  return (
    <div>
      <Drawer open={openCategoryPanel} onClose={() => setOpenCategoryPanel(!openCategoryPanel)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default CategoryPanel;