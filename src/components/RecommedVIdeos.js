import React from 'react'
import { MdVerified } from 'react-icons/md'

export default function RecommedVIdeos({channel,description,duration,thumbnail,uploadeTime,views,logo,name}) {
  return (
    <div className=' flex text-yt-white pt-8'>
        <img
        src={thumbnail}
        className=' h-32 w-32 object-contain rounded-2xl'/>

        <div className='m-2 '>
            <p className=' font-medium text-sm'>{name.length <= 40 ? name : `${name.substr(0,50)}....` }</p>

            <p className=' text-yt-gray text-xs pt-1'>{channel}</p>
        
            <p className=' text-yt-gray font-medium text-xs '> {views + ' Views'} . {uploadeTime + ' ago'}  </p>
        </div>
    </div>
  )
}
