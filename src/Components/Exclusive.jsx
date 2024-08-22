import exclusive from '../assets/exclusive_image.png';
function Exclusive() {
  return (
    <div className='flex flex-col py-6 px-3 items-center mx-10 bg-gradient-to-b from-pink-200 to-white sm:flex-row sm:justify-evenly'>
      <div>
        <h1 className='font-bold text-4xl md:text-[50px] lg:text-7xl'>
          Exclusive
        </h1>
        <h1 className='font-bold text-4xl md:text-[50px] lg:text-7xl'>
          Offers For You
        </h1>
        <p className='font-semibold text-md sm:text-xl'>
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button>Check Now</button>
      </div>
      <div>
        <img
          src={exclusive}
          alt='exclusive_img'
          loading='lazy'
          className='aspect-auto w-[200px] md:w-[300px]'
        />
      </div>
    </div>
  );
}

export default Exclusive;
