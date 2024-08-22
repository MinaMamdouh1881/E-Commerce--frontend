import add from '../assets/add-button.png';
import minus from '../assets/minus-button.png';
import { useSelector, useDispatch } from 'react-redux';
import { increaseAmount, decreaseAmount } from '../Features/UserSlice';

function Cart() {
  const { url} = useSelector((store) => store.shop);
  const { cartItems,total  } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <div className='mx-10'>
      {!cartItems?.length ? (
        <h1 className='text-center font-extrabold text-7xl my-10'>
          No Items Here
        </h1>
      ) : (
        <>
          {cartItems.map((item) => {
            const { _id, name, imgPath, amount, newPrice } = item;
            return (
              <div
                key={_id}
                className='flex flex-row justify-between items-center p-5 border-2 gap-5 mt-5 flex-wrap max-[800px]:flex-col'
              >
                <img src={url + imgPath} className='w-20' />

                <div className=''>{name}</div>
                <div className='flex flex-col gap-y-2 items-start'>
                  <div className='flex flex-col items-center gap-5 max-[800px]:flex-col-reverse'>
                    <p className='text-4xl'>${amount * newPrice}</p>
                    <div className=' flex flex-row space-x-5 justify-center items-center'>
                      <button
                        onClick={() =>
                          dispatch(decreaseAmount({ _id, amount }))
                        }
                      >
                        <img
                          src={minus}
                          alt='minus'
                          loading='lazy'
                          className='w-6'
                        />
                      </button>
                      <p className='text-3xl'>{amount}</p>
                      <button onClick={() => dispatch(increaseAmount(_id))}>
                        <img src={add} alt='add' className='w-6' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className='flex flex-row justify-between mt-5 p-5'>
            <p className='text-3xl font-semibold'>Total</p>
            <p className='text-3xl font-semibold'>${total}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
