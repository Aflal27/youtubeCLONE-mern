import React, { useState } from 'react'
import {catagoryItems} from '../static/data'

export default function SidebarCatagory() {
    const [active,setActive] = useState('All')
  return (
    <div className=' bg-yt-black ml-60 mt-14 w-[calc(100%-240px)] h-[calc(100%-53px)] fixed '>
        <div className={`flex items-center justify-start gap-3 overflow-x-scroll mt-4 ml-10`}>
            {catagoryItems.map((item,index)=>(
                <h2 
                key={index}
                className={` bg-yt-light-black px-2 py-1 rounded-md  font-normal text-sm whitespace-nowrap cursor-pointer
                ${item === active ? 'bg-yt-white text-yt-black' : 'text-yt-white'}`}
                onClick={()=>setActive(item)}>
                    {item}
                </h2>
            ))}
        </div>
    </div>
  )
}
