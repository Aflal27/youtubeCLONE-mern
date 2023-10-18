import React, { useEffect, useState } from 'react'
import {addDoc, collection, doc, onSnapshot, query} from 'firebase/firestore'
import { Link, useParams } from 'react-router-dom'
import {auth, db, timeStamp} from '../firebase'
import {FaAngleDown,FaThumbsUp,FaThumbsDown,FaShare,FaEllipsisH} from 'react-icons/fa'
import { Sort } from '@mui/icons-material'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { userdataSuccess } from '../slices/userSlice'
import Comment from '../components/Comment'
import { catagoryItems } from '../static/data'
import RecommedVIdeos from '../components/RecommedVIdeos'



export default function Video() {
  const [videos, setVideos] = useState([])
  const [comments, setComments] = useState([])
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const {userdata} = useSelector(state=>state.userState)
  const [com , setCom] = useState('')
  const [active,setActive] = useState('All')


  const {id} = useParams()

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
    if (id) {
      const q = query(doc(db,'videos',id));
      onSnapshot(q,(snapShot)=>{
        setData(snapShot.data())
      })
    }
    const commentQuary = query(collection(db,'videos',id,'comments'));
    onSnapshot(commentQuary,(snapShot)=>{
      setComments(
        snapShot.docs.map((doc)=>({
          ...doc.data(),
          id:doc.id
        }))
      )
    })
  },[id])

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if (user) {
          dispatch(userdataSuccess(user))
        }else{
          dispatch(userdataSuccess(null))
        }
    })
  },[])

  const addComment = async(e)=>{
    e.preventDefault();
    let commentsData = {
      image:userdata.photoURL,
      name:userdata.displayName,
      com,
      uploaded:timeStamp
    }

    if (id) {
      await addDoc(collection(db,'videos',id,'comments'),commentsData )
      setCom('')
    }
  }
  return (
    <div className=' py-20 px-9 bg-yt-black flex flex-row h-full'>
        <div className=' left flex-1'>
            <diV className='flex justify-center' >
            <iframe src={`https://www.youtube.com/embed/${data?.link}`} title="YouTube video player"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
            className=' flex-1 w-[850px] h-[500px]'>

            </iframe>
            </diV>

            <h2 className=' text-yt-white font-semibold mt-3 mb-1 text-lg'>
              {data?.name}
            </h2>
            
            <div className='flex items-center'>
              <img src={data?.logo} alt={data?.chennal}
              className=' w-10 h-10 rounded-full'/>

              <div className=' px-3'>
              <h3 className=' text-yt-white font-medium text-base'>
                {
                  data?.channel && data?.channel.length <= 25 ?
                  data?.channel : `${data?.channel && data?.channel.substr(0,20)}....`
                }
              </h3>
              
              <p className=' text-yt-gray text-sm'>
                {data?.subscribe + ' subscribers'}
              </p>

              </div>
              <button className=' text-yt-black text-sm font-medium bg-yt-white px-5 py-2 rounded-3xl flex items-center justify-center ml-3'>
                  Subscribe
                  {/* <span className=' font-medium ml-3 text-xl' >
                    <FaAngleDown/>
                  </span> */}
                </button> 

                <div className=' pl-28 flex '>
                    <div className=' text-yt-white bg-yt-light-black px-5 py-2 rounded-3xl flex items-center justify-start hover:bg-yt-light-1'>
                      <div className=' cursor-pointer' >
                        <FaThumbsUp className=' text-2xl'/>
                      </div>
                        
                        <span className='ml-3 text-sm font-semibold'>
                          108
                        </span>
                        <div className=' border-yt-gray border-l-2 ml-4 pl-3 cursor-pointer'>
                          <FaThumbsDown className=' text-2xl font-extralight'/>
                        </div>
                    </div>
                </div>

                <div className=' text-yt-white flex items-center ml-3 px-5 py-2 bg-yt-light-black rounded-3xl '>
                    <FaShare className=' mr-2 text-2xl font-thin'/>
                    <span className=' text-sm font-semibold'>
                      Share
                    </span>
                </div>
                <div className=' bg-yt-light-black text-yt-white h-10 w-10 rounded-full flex items-center justify-center ml-3 hover:bg-yt-light-1'>
                  <FaEllipsisH/>
                </div>
            </div>

            <div className=' bg-yt-light-black max-w-4xl text-yt-white p-3 rounded-2xl mt-2'>
                <div className=' flex items-center'>
                  <p className=' font-medium'>
                  {data?.views}
                  <span className=' ml-1 text-xs'>
                    Views
                  </span>
                  </p>
                 
                  <p className=' ml-2 font-medium'>
                    {data?.uploadeTime}
                  </p>
                </div>
                <div className='font-medium mt-1'>
                  {data?.description}
                </div>
            </div>

            <div className=' text-yt-white mt-4 flex items-center'>
              <div>
                {comments.length + ' Comments'}
              </div>
              <div className=' ml-6 flex items-center'>
                <Sort />
                <span className=' ml-2'>Sort by</span>
              </div>
            </div>
            {
              userdata && (
                <div>
                  <form onSubmit={addComment} className=' flex w-[800px] pt-4 items-start text-yt-white'>
                    <img src={userdata?.photoURL} 
                    className=' w-12 h-12 rounded-full object-contain'/>

                  <input
                  value={com}
                  onChange={(e)=>setCom(e.target.value)}
                  type='text'
                  className=' bg-[transparent] border-b border-b-yt-gray outline-none ml-3 text-sm w-full'
                  placeholder='Add a Commente...'/>
                  </form>
                  
                  
               </div>
              )
            }
            
            <div className='mt-6'>
              {
                comments.map((item,index)=>(
                    <Comment key={index} {...item} />
                ))
              }
            </div>
            
        </div>
        <div className=' right px-3 overflow-y-hidden flex-[0.4]'>
            <div className=' flex gap-3'>
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
            <div>
              {
                videos.map((video,i)=>{
                  if (video.id !== id) {
                    return(
                      <Link to={`/video/${video.id}`} >
                        <RecommedVIdeos {...video} />
                      </Link>
                    )
                  }
                })
              }
            </div>
        </div>
    </div>
  )
}
