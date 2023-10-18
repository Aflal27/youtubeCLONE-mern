import React, { useState } from 'react'
import {sideBar} from '../static/data'

export default function SideBar() {
    
    const [active,setActive] = useState('Home')
  return (
    <div className='  bg-yt-black w-60 h-[calc(100vh-53px)] mt-14 fixed top-0 left-0  overflow-scroll text-yt-white'>
        <div className='mt-3'>
            {sideBar.Top.map((item,index)=>(
                <div
                key={index}
                className={` flex justify-start items-center ml-3 h-10 gap-6 hover:bg-yt-light-black rounded-xl px-3 cursor-pointer my-1 
                ${item.name === active ? 'bg-yt-light-black' : 'bg-yt-black'}`}
                onClick={()=>setActive(item.name )}
                >
                <span> {item.icon} </span>
                <p> {item.name} </p>
                </div>
            ))}
        </div>
        <div>
            <hr className=' text-yt-light-black my-3'></hr>
            {sideBar.Middle.map((item,index)=>(
                <div
                key={index}
                className={` flex justify-start items-center ml-3 h-10 gap-6 hover:bg-yt-light-black rounded-xl px-3 cursor-pointer my-1 
                ${item.name === active ? 'bg-yt-light-black' : 'bg-yt-black'}`}
                onClick={()=>setActive(item.name)}
                >
                <span> {item.icon} </span>
                <p> {item.name} </p>
                </div>
            ))}
        </div>

        <div>
            <hr className=' text-yt-light-black my-3'></hr>
            <h2 className=' ml-4'>Explore</h2>
            {sideBar.Bottom.map((item,index)=>(
                <div
                key={index}
                className={` flex justify-start items-center ml-3 h-10 gap-6 hover:bg-yt-light-black rounded-xl px-3 cursor-pointer my-1 
                ${item.name === active ? 'bg-yt-light-black' : 'bg-yt-black'}`}
                onClick={()=>setActive(item.name)}
                >
                <span> {item.icon} </span>
                <p> {item.name} </p>
                </div>
            ))}
        </div>
    </div>
  )
}
