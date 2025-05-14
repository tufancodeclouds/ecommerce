import { useState } from "react"
import { Button } from "@mui/material"
import { RiMenu2Fill } from "react-icons/ri"
import { LiaAngleDownSolid } from "react-icons/lia"
import { Link } from "react-router-dom"
import { GoRocket } from "react-icons/go"
import CategoryPanel from "../CategoryPanel/CategoryPanel"
import "./Navigation.css"

const Navigation = () => {

    const [openCategoryPanel, setOpenCategoryPanel] = useState(false);

    return (
        <>
            <nav className="py-2">
                <div className="container flex items-center gap-3">
                    <div className="col_1 w-[16%]">
                        <Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize gap-1" onClick={() => setOpenCategoryPanel(!openCategoryPanel)}><RiMenu2Fill className="text-[18px]" /> Shop By Categories <LiaAngleDownSolid className="text-[12px] ml-auto" /></Button>
                    </div>

                    <div className="col_2 w-[71%] flex justify-center items-center">
                        <ul className="flex items-center gap-3 nav">
                            <li className="list-none">
                                <Link to="/" className="link transition"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize">Home</Button></Link>
                            </li>
                            <li className="list-none relative">
                                <Link to="/" className="link transition"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize">Fashion</Button></Link>

                                <div className="submenu absolute top-[120%] left-[0] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none">
                                            <Link to="/" className="link transition block"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !justify-start">Men</Button></Link>

                                            <div className="submenu absolute top-[120%] left-[120%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                <ul>
                                                    <li className="list-none">
                                                        <Link to="/" className="link transition block"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !justify-start">Shirt</Button></Link>
                                                    </li>
                                                    <li className="list-none">
                                                        <Link to="/" className="link transition block"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !justify-start">Jeans</Button></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="list-none">
                                            <Link to="/" className="link transition block"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !justify-start">Women</Button></Link>
                                        </li>
                                        <li className="list-none">
                                            <Link to="/" className="link transition block"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !justify-start">Kids</Button></Link>
                                        </li>
                                        <li className="list-none">
                                            <Link to="/" className="link transition block"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !justify-start">Girls</Button></Link>
                                        </li>
                                        <li className="list-none">
                                            <Link to="/" className="link transition block"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize w-full !justify-start">Boys</Button></Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize">Electronics</Button></Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize">Bags</Button></Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize">Footware</Button></Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize">Groceries</Button></Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize">Beauty</Button></Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize">Wellness</Button></Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition"><Button className="link transition !text-[14px] !font-[500] !text-[#000] hover:!text-[#ff5252] !capitalize">Jewellery</Button></Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col_3 w-[11%] flex justify-end items-center">
                        <p className="text-[13px] font-[500] flex items-center gap-1" style={{ padding: "6px 8px" }}><GoRocket className="text-[14px]" /> Free Shipping</p>
                    </div>
                </div>
            </nav>

            <CategoryPanel openCategoryPanel={openCategoryPanel} setOpenCategoryPanel={setOpenCategoryPanel} />
        </>
    )
}

export default Navigation
