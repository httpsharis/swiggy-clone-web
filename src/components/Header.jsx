import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { LuBadgeHelp } from "react-icons/lu";
import { BsPerson } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";


function Header() {

    const [toggle, setTogggle] = useState(false);
    const showSideBar = () => {
        setTogggle(true);
    }

    const hideSideBar = () => {
        setTogggle(false);
    }

    const links = [
        {
            icon: <IoSearch />,
            name: "Search",
        },
        {
            icon: <RiDiscountPercentLine />,
            name: "Offers",
            super: "New"
        },
        {
            icon: <LuBadgeHelp />,
            name: "Help",
        },
        {
            icon: <BsPerson />,
            name: "Sign In",
        },
        {
            icon: <BsCartCheck />,
            name: "Cart",
        },
    ]

    return (
        <>
            {/* Div for the overlay or sidebar which take the location 
                There are few points to understand this:
                - The first div provides the overly or you can say the background.
                    - First div has a fuction that hides the bar.
                - While the inner div produces the white side bar. 
                    - While the inner div stops it from reversing when touched anywhere on teh screen.
            */}
            <div
                className=" black-overlay w-full h-full fixed duration-500 "
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? "visible" : "hidden",
                }}
                onClick={hideSideBar}
            >
                <div
                    className=" w-[500px] bg-white h-full absolute duration-[400ms] "
                    style={{
                        left: toggle ? '0%' : '-100%'
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}

                >
                </div>
            </div>

            <header className=" sticky top-0 p-[15px] shadow-xl text-[#686b78] z-[9999] bg-white ">
                {/* Parant DIV: Creating container for the div element*/}
                <div className="max-w-[1100px] mx-auto flex items-center">
                    {/* For inline elements */}
                    <div className="w-[80px]">
                        <img src="src\assets\swiggy-logo.png" alt="" className="w-full" />
                    </div>
                    <div className="text-[16px]">
                        {/* Location and search element */}
                        <span className=" font-bold border-b-[3px] border-black hover:text-[#fc8019] hover:border-[#fc8019] cursor-pointer ">
                            Gareeb Abad
                        </span>{" "}
                        Khanewal, Punjab, Pakistan{" "}
                        <RxCaretDown
                            fontSize={25}
                            className=" inline text-[#fc8019] font-bold cursor-pointer "
                            onClick={showSideBar}
                        />
                    </div>

                    {/* Now with this div we are creating other side of the header containing Search and other element. */}

                    <nav className="hidden md:flex list-none gap-5 ml-auto text-[16px] font-semibold ">
                        {
                            links.map(
                                (link, index) => {
                                    return <li key={index} className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer">
                                        {link.icon}
                                        {link.name}
                                        <sup>{link.super}</sup>
                                    </li>
                                }
                            )
                        }
                    </nav>

                </div>
            </header>
        </>
    );
}

export default Header;
