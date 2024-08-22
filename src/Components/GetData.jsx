import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getData from './get';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function GetData({ children, endPoint }) {
  const { url } = useSelector((store) => store.shop);
  const [data, setData] = useState(null);
  useEffect(() => {
    getData(`${url}api/products/${endPoint}`, setData);
  }, []);

  return (
    <div className='my-10'>
      <h1 className='text-center font-semibold text-3xl mb-5'>{children}</h1>
        <div className='grid grid-cols-1 gap-5 mx-5 min-[480px]:grid-cols-2 min-[768px]:grid-cols-3 min-[1024px]:grid-cols-4'>
          {data &&
            data.map((product) => {
              const {
                _id,
                name,
                imgPath,
                newPrice,
                oldPrice,
                category,
                amount,
              } = product;

              return (
                <Link
                  key={_id}
                  to={`/product/${_id}`}
                  state={{
                    _id,
                    name,
                    imgPath,
                    newPrice,
                    amount,
                    category,
                    oldPrice,
                  }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
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

export default GetData;
