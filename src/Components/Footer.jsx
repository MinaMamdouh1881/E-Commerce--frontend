import logo from '../assets/logo_big.png';
import {
  FaInstagram,
  FaFacebookSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';
function Footer() {
  return (
    <div className='flex flex-col justify-center items-center mx-5'>
      <div className='flex flex-row justify-between items-center gap-x-4'>
        <img src={logo} alt='logo' loading='lazy' />
        <h1 className='font-bold text-3xl'>SHOPPER</h1>
      </div>
      <ul className='flex flex-row flex-wrap gap-3 justify-center items-center my-6'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='flex flex-row items-center gap-x-5'>
        <FaInstagram size={40} color='#ec4899' />
        <FaFacebookSquare size={40} color='#ec4899' />
        <FaWhatsappSquare size={40} color='#ec4899' />
      </div>
      <div className='border-t-2 w-full text-center mt-5 pt-5'>
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
