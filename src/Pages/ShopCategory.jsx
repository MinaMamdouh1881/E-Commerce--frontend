import { useEffect } from 'react';
import { getData } from '../Features/ShopSlice';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
function ShopCategory({ category, banner, endPoint }) {
  const { url, mainData } = useSelector((store) => store.shop);
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(getData(endPoint));
  }, [dispatch, endPoint, location]);

  return (
    <div>
      <div className='my-10'>
        <img src={banner} alt={`${category}_banner`} loading='lazy' />
      </div>
      <div className='grid grid-cols-1 gap-5 mx-5 min-[480px]:grid-cols-2 min-[768px]:grid-cols-3 min-[1024px]:grid-cols-4'>
        {mainData &&
          mainData.map((product) => {
            const { _id, name, imgPath, newPrice, oldPrice, category, amount } =
              product;

            return (
              <Link
                key={_id}
                to={`/product/${_id}`}
                state={{
                  _id,
                  name,
                  imgPath,
                  newPrice,
                  oldPrice,
                  category,
                  amount,
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className='overflow-hidden'>
                  <div>
                    <img
                      src={url + imgPath}
                      alt={name}
                      loading='lazy'
                      className='w-full hover:scale-105 duration-200'
                    />
                  </div>
                  <div className='my-3'>
                    <p className='text-gray-900'>{name}</p>
                    <div className=' flex flex-row gap-5 my-2'>
                      <p>${newPrice}</p>
                      <del className='text-gray-500'>${oldPrice}</del>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default ShopCategory;
