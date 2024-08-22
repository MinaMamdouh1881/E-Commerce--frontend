import { useState } from 'react';
import logo from '../assets/logo_big.png';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOutHandler } from '../Features/UserSlice';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const { cartItems } = useSelector((store) => store.user);
  const location = useLocation();
  const [menu, setMenu] = useState(location.pathname.replace('/', ''));
  const dispatch = useDispatch();
  const liStyle =
    'cursor-pointer flex flex-col justify-center items-center gap-1';
  return (
    <div className='flex flex-row justify-around py-5 shadow-md pb-24 sm:pb-5 '>
      <div className='flex flex-row items-center gap-2'>
        <img
          src={logo}
          className=' aspect-square w-[50px] sm:w-[70px]'
          loading='lazy'
        />
        <h1 className='font-semibold font-[#171717]'>SHOPPER</h1>
      </div>
      <ul className='flex flex-row items-center gap-5 max-sm:absolute max-sm:top-[110px] max-sm:left-0 max-sm:w-full max-sm:justify-center'>
        <li
          className={liStyle + ' max-sm:text-left'}
          onClick={() => setMenu('shop')}
        >
          <Link to='/'>Shop</Link>
          {menu === 'shop' || menu === '' ? <MenuLine /> : <></>}
        </li>
        <li className={liStyle} onClick={() => setMenu('men')}>
          <Link to='/men'>Men</Link>
          {menu === 'men' ? <MenuLine /> : <></>}
        </li>
        <li className={liStyle} onClick={() => setMenu('women')}>
          <Link to='/women'>Women</Link>
          {menu === 'women' ? <MenuLine /> : <></>}
        </li>
        <li className={liStyle} onClick={() => setMenu('kids')}>
          <Link to='/kids'>Kids</Link>
          {menu === 'kids' ? <MenuLine /> : <></>}
        </li>
      </ul>
      <div className='flex flex-row items-center gap-3'>
        {window.localStorage.getItem('email') ? (
          <button
            className='outline-none border border-[#7a7a7a] px-10 py-2 rounded-full bg-white active:bg-[#f3f3f3]'
            onClick={() => {
              dispatch(logOutHandler());
            }}
          >
            logout
          </button>
        ) : (
          <Link to='/login'>
            <button className='outline-none border border-[#7a7a7a] px-10 py-2 rounded-full bg-white active:bg-[#f3f3f3]'>
              Login
            </button>
          </Link>
        )}
        <div className='relative'>
          <Link to='/cart'>
            <IoCartOutline size={35} />
          </Link>
          <span className='absolute -top-1 -right-1 bg-red-600 px-1 rounded-full text-white text-xs'>
            {cartItems?.length || 0}
          </span>
        </div>
      </div>
    </div>
  );
}

const MenuLine = () => {
  return (
    <hr className='border-none w-4/5 h-[2px]  bg-[#ff4141] rounded-[10px]' />
  );
};

export default Navbar;
