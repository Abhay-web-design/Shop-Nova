import React, { useEffect } from 'react'
import { motion} from 'framer-motion'
import logo from '../assests/logo.png'
import { useNavigate } from 'react-router-dom'
const Intro = () => {
 const navigate = useNavigate();
  useEffect(()=>{
  const timer = setTimeout(()=>{
    navigate("/Home");
  },3000)
 },[navigate])

  return (
    <div className='w-full h-screen overflow-y-hidden'>
      <nav className='w-full px-4 py-2 flex items-center justify-between'>
        <div className='flex items-center w-20 h-10 md:w-30 md:h-20'>
          <img className='w-full  h-full object-center object-cover' src={`${logo}`} alt="" />
        <p className='text-xl md:text-3xl font-bold '>Shop<span className='bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-purple-600'>Nova</span></p>

        </div>
        <div>
          <i className="ri-shopping-cart-line text-xl md:text-2xl font-bold px-4 py-2 rounded-lg bg-gray-200"></i>
        </div>
      </nav>
       
       <main className='w-full h-full flex flex-col items-center justify-center'>
        <motion.div 
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='w-full flex items-center justify-center'>
         <div className=' w-30 h-30 md:w-50 md:h-50'> <img className='w-full  h-full object-center object-cover' src={`${logo}`} alt="" /></div>
        <p className='text-4xl md:text-6xl font-bold'>Shop<span className='bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-purple-600'>Nova</span></p>
        </motion.div>
        <div className='mt-5 flex flex-col items-center'>
          <motion.p
          initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-2xl md:text-3xl font-light text-center'>Everything you need, in one place</motion.p>
          <motion.p
             initial={{ opacity: 0, width:0 }}
          animate={{ opacity: 1, width: 300,}}
          transition={{ delay: 0.4, duration: 2 }}
          className=' mt-10 w-60 h-5 rounded-2xl bg-linear-to-r from-orange-500 to-purple-600 ' ></motion.p>
        </div>
       </main>


     

    </div>
  )
}

export default Intro