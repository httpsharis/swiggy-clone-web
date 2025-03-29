import React from 'react'
import { MdStars } from "react-icons/md";

function Card(props) {
    return (
        // Changed width from 273px to 240px for smaller card size
        <div className='md:w-[240px] shrink-0 grow'>
            {/* Reduced height from 182px to 160px */}
            <div className='group h-[160px] overflow-hidden rounded-2xl relative'>
                <img
                    src={"http://localhost:5000/images/" + props.image}
                    alt=""
                    className='group-hover:scale-110 duration-150 object-cover w-full h-full rounded-[15px]'
                />
                <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 font-bold text-[18px] text-white tracking-tighter'>
                    {props.offer}
                </div>
            </div>
            {/* Reduced text size and adjusted spacing */}
            <div className='text-lg font-bold mt-2'>
                {props.title}
            </div>
            <div className='text-sm'>
                <MdStars className='inline' /> {props.rating}
                <span className='ml-2'>{props.minTime} - {props.maxTime} min</span>
            </div>
            <div className='text-sm text-slate-500'>
                {props.name}
                <br />
                {props.place}
            </div>
        </div>
    )
}

export default Card