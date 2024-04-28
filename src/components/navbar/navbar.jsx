import { useContext, useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import logo from '../../../src/assets/Assets/logo.png'
import { ShopContext } from '../../Context/ShopContext/ShopContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const {getTotalCartItems} = useContext(ShopContext)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 1, link: '/', title: 'Home' },
    { id: 2, link: '/men', title: 'Men' },
    { id: 3, link: '/women', title: 'Women' },
    { id: 4, link: '/kids', title: 'Kids' },
  ];

  return (
    <nav className="bg-white fixed top-0 inset-x-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className='hidden md:block lg:block'>
            <NavLink to="/" className="flex items-center gap-2 text-red-500">
              {/* <BsCart4 className="h-8 w-8" /> */}
              <img src={logo} className='w-12' alt="" />
              <Link to='/' className="font-bold text-3xl uppercase">E-SHOP</Link>
            </NavLink>
          </div>

          <div className="hidden md:block lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(({ id, link, title }) => (
                <NavLink
                  key={id}
                  to={link}
                   // Color for active page
                  className={` hover:scale-105 px-3 py-2 rounded-md text-lg font-bold  ${
                    location.pathname === link ? 'text-red-500 border-b border-red-500 rounded-none inline-block' : 'text-gray-800'}`} >
                  {title}
                </NavLink>
              ))}

            </div>
           
          </div>

         <div className='hidden md:block lg:block'>
            <div className='flex items-center gap-4'>
                <Link to='/login' className='border border-red-500 rounded-3xl px-6 py-2 text-red-500 font-bold'> Login</Link>
                <Link to="/cart" className="flex items-center px-4 text-red-500 font-bold">
                  <IoCartOutline className="w-6 h-6" />
                  <sup className="bg-red-500 text-white rounded-full px-[6px] py-[10px] -ml-2 mb-3 text-center">{getTotalCartItems()}</sup>
                </Link>   
              </div>
         </div>        

          <div className="-mr-2 flex md:hidden shadow-md">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>


          {/* for mobile device */}

          <div className='block md:hidden lg:hidden'>
            <NavLink to="/" className="flex items-center gap-2 text-red-500">
              {/* <BsCart4 className="h-8 w-8" /> */}
              <img src={logo} className='w-12' alt="" />
              <Link to='/' className="font-bold text-3xl uppercase">E-SHOP</Link>
            </NavLink>
          </div>

          <div className='block md:hidden lg:hidden'>
            <div className='flex items-center gap-4'>
                {/* <Link to='/login' className='border border-red-500 rounded-3xl px-6 py-2 text-red-500 font-bold'> Login</Link> */}
                <Link to="/cart" className="flex items-center px-4 text-red-500 font-bold">
                  <IoCartOutline className="w-6 h-6" />
                  <sup className="bg-red-500 text-white rounded-full px-[6px] py-[10px] -ml-2 mb-3 text-center">{getTotalCartItems()}</sup>
                </Link>   
              </div>
         </div>

        </div>

        <div className={`md:hidden lg:hidden py-2 px-2 shadow-sm fixed left-0 top-0 h-full w-2/3 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-gray-700`}>

        <div className="-mr-2 md:hidden shadow-md bg-white inline-block text-red-500">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>

          <div className="flex flex-col justify-start items-start h-full mt-20">
            {navItems.map(({ id, link, title }) => (
              <NavLink
                key={id}
                to={link}
                 // Color for active page
                className={`block px-3 py-2 rounded-md font-bold text-2xl mb-2 ${
                  location.pathname === link ? 'text-red-500' : 'text-white'
                }`}
              >
                {title}
              </NavLink>
            ))}

            <div className='mt-4'>
            <Link to='/login' className='border border-red-500 rounded-3xl px-6 py-2 text-red-500 font-bold'> Login</Link>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;