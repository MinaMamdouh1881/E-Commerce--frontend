import GetData from '../Components/GetData.jsx';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Features/UserSlice.js';
import { Suspense } from 'react';
function Product() {
  const { url } = useSelector((store) => store.shop);
  const dispatch = useDispatch();
  const { state } = useLocation();

  const { _id, name, imgPath, newPrice, oldPrice, category, amount } = state;

  return (
    <div>
      <div className='flex gap-5 m-5 flex-col sm:flex-row'>
        <div className='flex flex-row gap-5 justify-around basis-1/2'>
          <div className=' flex-col gap-5 hidden md:flex'>
            <img
              src={url + imgPath}
              alt='product_img'
              loading='lazy'
              className=' aspect-auto w-28'
            />
            <img
              src={url + imgPath}
              alt='product_img'
              loading='lazy'
              className=' aspect-auto w-28'
            />
            <img
              src={url + imgPath}
              alt='product_img'
              loading='lazy'
              className=' aspect-auto w-28'
            />
            <img
              src={url + imgPath}
              alt='product_img'
              loading='lazy'
              className=' aspect-auto w-28'
            />
          </div>
          <div>
            <img
              src={url + imgPath}
              alt='product_img'
              loading='lazy'
              className=' aspect-auto w-full md:w-[500px]'
            />
          </div>
        </div>
        <div className='basis-1/2'>
          <h1 className='font-bold text-3xl mb-5'>{name}</h1>
          <del className=' mr-5 text-gray-400 font-bold'>${oldPrice}</del>
          <span className='text-red-600 font-bold'>${newPrice}</span>
          <p className='mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            nihil illo repellat natus, amet fugit culpa iure quas cum, dolorum
            eos illum! Maxime veniam laudantium dignissimos, quaerat voluptas
            placeat quibusdam?
          </p>
          <h2 className='mt-5 text-gray-400 font-semibold'>Select Size</h2>
          <ul className='flex flex-row gap-2 mt-5 sm:gap-4'>
            <li className='py-3 px-5 border bg-gray-100'>S</li>
            <li className='py-3 px-5 border bg-gray-100'>M</li>
            <li className='py-3 px-5 border bg-gray-100'>L</li>
            <li className='py-3 px-5 border bg-gray-100'>Xl</li>
            <li className='py-3 px-5 border bg-gray-100'>XXL</li>
          </ul>
          <button
            className='mt-5 bg-red-500 text-white font-bold text-xs py-3 px-6'
            onClick={() =>
              dispatch(
                addToCart({
                  _id,
                  name,
                  imgPath,
                  newPrice,
                  amount,
                  category,
                  oldPrice,
                })
              )
            }
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <Suspense
        fallback={
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            quod incidunt quas nesciunt, delectus culpa enim harum adipisci
            quibusdam quia corporis nisi at animi unde iure officiis ex
            distinctio est?{' '}
          </h1>
        }
      >
        <GetData endPoint={`categories/${category}`}>Related Products</GetData>
      </Suspense>
    </div>
  );
}

export default Product;
