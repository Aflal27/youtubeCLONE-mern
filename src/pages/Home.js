import React from 'react'
import SideBar from '../components/SideBar'
import SidebarCatagory from '../components/SidebarCatagory'
import {collection,onSnapshot,query} from 'firebase/firestore'
import {db,auth} from '../firebase'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Videos from '../components/Videos'
import {onAuthStateChanged} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { userdataSuccess } from '../slices/userSlice'

export default function Home() {
  const [videos,setVideos] = useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    const q = query(collection(db,'videos'))
    onSnapshot(q,(snapShot)=>{
      setVideos(
        snapShot.docs.map((doc)=>({
          ...doc.data(),
          id:doc.id
        }))
      )
    })
  },[])

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if (user) {
          dispatch(userdataSuccess(user))
        }else{
          dispatch(userdataSuccess(null))
        }
    })
  },[])
  return (
    <>
        <>
      <SideBar/>
      <SidebarCatagory/>
      
    </>
    <div className=' pt-[150px] pl-[260px] grid grid-cols-yt'>
        {
          videos.length === 0 ? 
          (<div>No videos</div> ): 
          (videos.map((video,i)=>(
            <Link to={`/video/${video.id}`} >
              <Videos {...video} />
            </Link>
          )))
        }
      </div>
    </>
  )
}
