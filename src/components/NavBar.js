import React from 'react'
import {HiOutlineBars3 , HiMagnifyingGlass} from 'react-icons/hi2'
import {BiVideoPlus,Mdmic} from 'react-icons/bi'
import {FaRegBell,FaMicrophone} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { signInWithPopup, signOut } from "firebase/auth";
import {auth,provider} from '../firebase'
import {useDispatch,useSelector} from 'react-redux'
import { userdataSuccess ,logout} from '../slices/userSlice'


export default function NavBar() {
  const dispatch = useDispatch()
  const {userdata} = useSelector(state=>state.userState)

  const handleSign = async()=>{
    const response = await signInWithPopup(auth, provider);
    dispatch(userdataSuccess(response.user))
  }
  const handleLogout = async()=>{
    dispatch(logout())
    await signOut(auth )
  }

  
  return (
    <div className='bg-yt-black h-14 flex items-center pl-4 pr-5 justify-between fixed w-full z-10 '>
        <div className='flex justify-between items-center'>
            <div className= 'rounded-full text-yt-white mr-4 hover:bg-yt-light-black w-10 h-10 flex justify-center items-center cursor-pointer'>
                <HiOutlineBars3 
                size={22}/>
            </div>
            <div className=' py-5 w-28 pr-3'>
                <Link to={'/'}>
                  <img src='https://freelogopng.com/images/all_img/1656504144youtube-logo-png-white.png' className=' object-contain' />
                </Link>
            </div>
        </div>

        <div className='flex flex-row items-center flex-1 ml-40'>
            <div className=' w-[540px] bg-yt-black border border-yt-light-black flex items-center rounded-3xl h-10'>
               <input
               type='text'
               placeholder='Search'
               className=' w-full bg-yt-black text-yt-white text-start focus:outline-none pl-4'
               />
               <button className=' bg-yt-light-black w-16 h-10 rounded-r-3xl border-l-2 border-b-yt-light-black px-2 py-0.5'>
                <HiMagnifyingGlass
                size={22}
                className=' text-yt-white text-center inline-block font-thin'/>
               </button>
            </div>

            <diV className=' h-10 w-10 rounded-full ml-4 hover:bg-yt-gray cursor-pointer flex items-center justify-center border border-yt-light-black bg-yt-light-black' >
              <FaMicrophone
              size={22}
              className=' text-yt-white text-center'/>
            </diV>
        </div>

        <div className=' flex justify-center items-center gap-3 mr-5'>
            <diV className=' rounded-full hover:bg-yt-light-black w-10 h-10 flex justify-center items-center cursor-pointer'>
                <BiVideoPlus
                className=' text-yt-white'
                size={22}/>
            </diV>
            <div className=' rounded-full hover:bg-yt-light-black w-10 h-10 flex justify-center items-center cursor-pointer'>
              <FaRegBell
              className=' text-yt-white' 
              size={20}/>
            </div>

          {
            !userdata ? (
              <div>
              <button className=' bg-yt-red text-yt-white py-1 px-4 rounded-md' onClick={handleSign}>
                  Sign In
              </button>
            </div>
            ) : (
              <img src={userdata.photoURL} alt={userdata.displayName}
              className=' h-10 w-10 rounded-full object-contain cursor-pointer' onClick={handleLogout} />
            )
          }
            
        </div>
        </div>
  )
}
