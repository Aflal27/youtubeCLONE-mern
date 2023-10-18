import React from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'

export default function Comment({name,image,com,uploaded}) {
  return (
    <div className=' flex flex-row mb-5'>
        <img
        src={image}
        className=' w-12 h-12 rounded-full'/>
        <div className=' text-yt-white ml-2'>
            <div className='flex items-center'>
                <p className=' text-sm font-medium'>{name}</p>
                <p className=' text-xs ml-2 text-yt-gray'> {new Date(uploaded?.toDate()).toString().slice(0,25)} </p>
            </div>
            <p className=' text-base pt-2'>{com}</p>
            <div>
                <div className=' flex items-center mt-2 w-36 justify-between'>
                    <div className=' flex items-center'>
                        <BiLike size={22}/>
                        <span className=' ml-1 text-xs text-yt-gray'> 1K </span>
                        <BiDislike size={22} className='ml-3'/>
                    </div>
                   
                    <p className=' text-xs'>Replay</p>
                </div>
            </div>
        </div>
        
    </div>
   
  )
}
