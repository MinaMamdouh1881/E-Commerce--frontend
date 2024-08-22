function ExclusiveOffers() {
  return (
    <div className='flex items-center flex-col bg-gradient-to-b from-purple-200 to-white p-10 text-center mx-10'>
      <h1 className='font-bold text-2xl mb-2 text-gray-700'>
        Get Exclusive Offers On Your Email
      </h1>
      <p className='text-sm mb-2 text-gray-500'>
        Subscribe To Our Newsletter And Stay Updated
      </p>
      <form className='flex flex-col min-[480px]:flex-row min-[480px]:border-2 min-[480px]:rounded-full'>
        <input
          type='email'
          name='email'
          autoComplete="email"
          placeholder='Enter Your Email'
          className='bg-transparent py-2 w-full focus:outline-none pl-4'
        />
        <button className='bg-black text-white py-2 min-[480px]:px-3 min-[480px]:rounded-full min-[480px]:text-sm'>
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default ExclusiveOffers
