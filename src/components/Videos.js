import React from 'react'
import { MdVerified } from 'react-icons/md'

export default function Videos({channel,description,duration,thumbnail,uploadeTime,views,logo,name}) {
    console.log(channel,description,duration,thumbnail,uploadeTime,views)
  
  return (
    <div className='flex flex-col max-w-[320px] cursor-pointer '>
        <div className=' relative w-full'>
            <img src={thumbnail} alt='thumbnail' 
            className=' h-[200px] w-full overflow-hidden rounded-2xl'/>

            <p className=' absolute right-2 top-[90%] text-xs bg-yt-black text-yt-white rounded px-2'>
                {duration}
            </p>
            
        </div>
        <div className='flex mt-2 relative'>
                <img src={logo} alt='logo' className=' h-10 w-10 rounded-full '/>
                <div className=' font-bold text-yt-white text-sm mt-0 mb-0'>
            <h2>{name.length <= 40 ? name : `${name.substr(0,50)}....` }</h2>
                </div>
         
         </div>

         <h3 className=' relative text-yt-gray  text-sm flex items-center mx-10 mt-2'>
            {channel}
            <span className=' mx-1'>
                <MdVerified/>
            </span>
        </h3>
        
        <h3 className=' relative text-yt-gray mx-10 font-medium text-xs '>
            {views + ' Views'} . {uploadeTime + ' ago'} 
        </h3>
        
       
    </div>
  )
}
