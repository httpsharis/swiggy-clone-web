import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from './Card';

function TopResturent() {
    const [data, setData] = useState([])
    const [slide, setSlide] = useState(0)

    const fetchTopResturent = async () => {
        try {
            const response = await fetch('http://localhost:5000/top-restaurant-chains')
            const apiData = await response.json();
            setData(apiData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchTopResturent();
    }, [])

    const nextSlide = () => {
        if (data.length - 4 <= slide) return;
        setSlide(slide + 1);
    }

    const prevSlide = () => {
        if (slide === 0) return;
        setSlide(slide - 1);
    }

    return (
        <div className='w-full px-4 md:max-w-[1050px] mx-auto my-3'>
            {/* Header Section */}
            <div className='flex items-center justify-between mb-4'>
                <div className='text-base md:text-[18px] font-bold'>
                    Top restaurant chains in Khanewal
                </div>
                {/* Navigation arrows - Visible on all screens */}
                <div className='flex items-center'>
                    <button 
                        onClick={prevSlide}
                        className={`flex justify-center items-center w-[25px] h-[25px] md:w-[30px] md:h-[30px] bg-[#e2e2e7] rounded-full mx-1 md:mx-2 cursor-pointer 
                        ${slide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={slide === 0}
                    >
                        <FaArrowLeft className="text-sm md:text-base" />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className={`flex justify-center items-center w-[25px] h-[25px] md:w-[30px] md:h-[30px] bg-[#e2e2e7] rounded-full mx-1 md:mx-2 cursor-pointer
                        ${data.length - 4 <= slide ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={data.length - 4 <= slide}
                    >
                        <FaArrowRight className="text-sm md:text-base" />
                    </button>
                </div>
            </div>

            {/* Cards Container */}
            <div className='relative overflow-hidden'>
                <div className='flex gap-4 transition-transform duration-300 ease-in-out'
                    style={{
                        transform: `translateX(-${slide * (100 / 4)}%)`,
                    }}>
                    {data.map((d, i) => (
                        <div key={i} className='min-w-[240px] md:min-w-[calc(25%-12px)]'>
                            <Card {...d} />
                        </div>
                    ))}
                </div>
            </div>

            <hr className='my-7 border-[1px] border-[#e2e2e7]' />
        </div>
    )
}

export default TopResturent