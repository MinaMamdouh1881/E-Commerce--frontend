import hand from '../assets/hand_icon.png';
import heroImg from '../assets/hero_image.png';
import { FaArrowRightLong } from 'react-icons/fa6';
function Hero() {
  return (
    <div className='bg-gradient-to-b from-pink-200 to-white p-5 flex flex-col justify-center items-center min-[768px]:flex-row min-[768px]:justify-between min-[768px]:px-10'>
      <div>
        <p className='font-semibold text-md sm:text-xl'>NEW ARRIVALS ONLY</p>
        <div className='flex items-center gap-10'>
          <h1 className='font-bold text-4xl min-[480px]:text-6xl min-[768px]:text-5xl min-[900px]:text-7xl'>
            new
          </h1>
          <img
            src={hand}
            alt='pic of hand'
            loading='lazy'
            className='aspect-auto w-14 sm:w-20'
          />
        </div>
        <h1 className='font-bold text-4xl min-[480px]:text-6xl min-[768px]:text-5xl min-[900px]:text-7xl'>
          collections
        </h1>
        <h1 className='font-bold text-4xl min-[480px]:text-6xl min-[768px]:text-5xl min-[900px]:text-7xl'>
          for everyone
        </h1>
        <button className='flex flex-row items-center gap-5 mt-10 bg-red-500 px-5 py-3 rounded-full text-white'>
          Latest Collection <FaArrowRightLong />
        </button>
      </div>
      <div>
        <img
          src={heroImg}
          alt='hero img'
          loading='lazy'
          className='aspect-auto w-[300px] min-[900px]:w-[350px]'
        />
      </div>
    </div>
  );
}

export default Hero;
