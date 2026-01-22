import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { useContext } from 'react'
import {AppData} from '../context/AppDataContext'
import Card from '../components/UI/Card'
import Sort from '../components/UI/Sort'
import { motion } from "framer-motion";
import SkeletonCard from '../components/UI/SkeletonCard'
import HomeHero from '../components/UI/HomeHero'

const Home = () => {
 
 const { products, search,loading } = useContext(AppData);
 const [Toggle, setToggle] = useState(false)
 const [SortType, setSortType] = useState("none")
 const [SelectedCategory, setSelectedCategory] = useState("all")


//searched products
 const searchedProducts = products.filter((p) =>
  p.title.toLowerCase().includes(search.toLowerCase())
);
//  filter data
 const filteredProducts = SelectedCategory === "all"? products : products.filter((e)=>
  e.category === SelectedCategory
 );

//  categories
const cat =  searchedProducts.reduce((acc,items)=>{
   const existing = acc.find(el => el.category === items.category);

  if (existing) {
    existing.count += 1;
  } else {
    acc.push({ category: items.category, count: 1 });
  } 
  return acc;
 },[])

//sort data
 let productsToRender = searchedProducts;
if (SortType === "low") {
  productsToRender = [...searchedProducts].sort((a, b) => a.price - b.price);
} else if (SortType === "high") {
  productsToRender = [...searchedProducts].sort((a, b) => b.price - a.price);
}
 

//  loading
 if (loading) {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-linear-to-br from-gray-100 via-white to-gray-200 p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </main>
    </>
  );
}

  return (
    <>
    <Navbar />
   <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full min-h-screen bg-gray-200 p-3 md:p-5"
          >
        <HomeHero />
     <div className='mt-6 w-full bg-white rounded-2xl p-4 '>
      {/* categories  */}
       <div className='flex items-center justify-between'>
        <div className=' rounded-lg py-2 px-4 '>
        <span className='text-xl font-medium'>Categories:</span>
        <select onChange={(e)=>{setSelectedCategory(e.target.value);
        }}
        value={SelectedCategory}
         className=" px-4 py-2 rounded-lg bg-blue-500 outline-none text-white capitalize cursor-pointer" >
        <option default  value="all">All</option>
        {cat.map((e ,index)=>{
          return(<option key={index} value={e.category}>{`${e.category}(${e.count})`}</option>)
        })}
        </select>
       </div>
       <div onClick={()=>{
        Toggle?setToggle(false):setToggle(true)
       }} className='relative'>
        <i className="text-2xl cursor-pointer rounded-lg py-2 px-4 bg-gray-200  ri-sort-desc"></i>
        <Sort toggle={Toggle} sort={setSortType}/>
       </div>
       </div>
        {/* cards */}
       <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 }
                }
              }}
              className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-2'
            >

       {
        productsToRender.map((e)=>{
        return <Card
                    key={e.id}
                    product={e}
                  />
       })
       }
       </motion.div>
      </div>
    </motion.main>
    </>
  )
}

export default Home