import { useContext } from 'react'
import logo from '../../assests/logo.png'
import { AppData } from '../../context/AppDataContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const { setSearch, wishlist , cart } = useContext(AppData);


  return (
    <nav className=' flex md:items-center justify-between shadow-2xl '>
         <div className=' w-full p-3 flex flex-col md:flex-row justify-between gap-2'>
            <div className=' flex items-center '>
                 <img className='w-12  h-10 object-center object-cover' src={`${logo}`} alt="Logo" />
            <p className='text-xl md:text-3xl font-bold '>Shop<span className='bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-purple-600'>Nova</span></p>
            </div>
            <div className='bg-gray-200 rounded-3xl py-1.5 px-2 min-w-1/2 flex items-center'>
                <i className="text-gray-500 text-xl ri-search-line"></i>
                <input
                    className='ml-1 w-full focus:outline-none'
                      onChange={(e) => setSearch(e.target.value)}
                      type='text'
                      placeholder="Search products..."
                    />
            </div>
         </div>

         <div className='md:border-l  border-gray-300 text-xl md:text-2xl font-bold flex p-3 md:p-0'>
            {/* <i className="cursor-pointer rounded-md hover:bg-gray-200 px-2 py-1 ri-shopping-cart-line"></i> */}
                <Link to="/cart" className="relative">
                  <i className="ri-shopping-cart-line text-2xl"></i>

                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white
                      text-xs px-2 rounded-full">
                      {cart.length}
                    </span>
                  )}
                </Link>
            {/* <i className="cursor-pointer rounded-md hover:bg-gray-200 px-2 py-1 text-red-500 ri-heart-3-fill"></i>  */}
            <Link to="/wishlist" className="relative">
              <i className="ri-heart-3-fill cursor-pointer rounded-md hover:bg-gray-200 px-2 py-1 text-red-500 text-2xl"></i>

              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                  {wishlist.length}
                </span>
              )}
             </Link>
            <i className="cursor-pointer rounded-md hover:bg-gray-200 px-2 py-1 ri-user-line"></i>
         </div>
    </nav>
  )
}

export default Navbar