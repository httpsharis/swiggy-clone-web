import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Category() {
    const [categories, setCategories] = useState([])
    const [slide, setSlide] = useState(0)

    const fetchCategory = async () => {
        try {
            const response = await fetch("http://localhost:5000/categories");
            const data = await response.json();
            console.log("Fetched categories:", data); // Add this line
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    useEffect(() => {
        fetchCategory();
    }, []);

    const nextSlide = () => {
        if(categories.length - 8 === slide) return false
        setSlide(slide + 3)
    }

    const prevSlide = () => {
        if(slide === 0) return false
        setSlide(slide - 3)
    }

    return (
        <div className='max-w-[1050px] mx-auto my-3 items-center'>
            <div className='flex items-center justify-between'>
                <div className='text-[18px] font-bold'>What's on your mind?</div>
                <div className='flex'>
                    <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer' onClick={prevSlide}><FaArrowLeft /></div>
                    <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer' onClick={nextSlide} ><FaArrowRight /></div>
                </div>
            </div>
            <div className='flex overflow-hidden '>
                    {categories && categories.map((cat, index) => (
                        <div key={index} className=' w-[150px] shrink-0 duration-500' style={{
                            transform: `translateX(-${slide * 100}%)`
                        }}>
                            <img src={`http://localhost:5000/images/${cat.image}`} alt={cat.name || ''} />
                        </div>
                    ))}
                </div>
            <hr className='my-7 border-[1px] border-[#e2e2e7] max-w-[1050] ' />
        </div>
    )
}

export default Category