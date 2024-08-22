import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginHandler, signUpHandler } from '../Features/UserSlice';
function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    isLogin ? dispatch(loginHandler(form)) : dispatch(signUpHandler(form));
  };

  useEffect(() => {
    if (window.localStorage.getItem('email')) {
      window.location.replace('/');
    }
  }, []);

  return (
    <div className='py-10 flex justify-center items-center bg-pink-50 '>
      <div className=' relative '>
        <h1 className='font-bold mb-9 text-3xl'>
          {isLogin ? 'Login' : 'Sign Up'}
        </h1>
        <form
          className='flex flex-col gap-10 justify-center items-center'
          onSubmit={submitHandler}
        >
          {isLogin ? (
            ''
          ) : (
            <div className='border-2 border-black relative rounded-3xl shadow-xl max-[370px]:w-[300px]'>
              <span className=' absolute -top-4 left-4 bg-pink-50'>
                Your Name
              </span>
              <input
                type='text'
                name='userName'
                className='px-5 py-2 bg-transparent w-80 focus:outline-none'
                placeholder='Enter Your Name'
                value={form.userName}
                onChange={changeHandler}
              />
            </div>
          )}
          <div className='border-2 border-black relative rounded-3xl shadow-xl max-[370px]:w-[300px]'>
            <span className=' absolute -top-4 left-4 bg-pink-50'>
              Email Address
            </span>
            <input
              type='email'
              name='email'
              className='px-5 py-2 bg-transparent  w-80 focus:outline-none'
              placeholder='Enter Your Email'
              value={form.email}
              onChange={changeHandler}
            />
          </div>
          <div className='border-2 border-black relative rounded-3xl shadow-xl max-[370px]:w-[300px]'>
            <span className=' absolute -top-4 left-4 bg-pink-50'>
              Your Password
            </span>
            <input
              type='password'
              name='password'
              className='px-5 py-2 bg-transparent w-80 focus:outline-none'
              placeholder='Enter Your Password'
              value={form.password}
              onChange={changeHandler}
            />
          </div>
          <button className='bg-red-500 text-white py-3 rounded-3xl w-[100px]'>
            {isLogin ? 'Login' : 'Continue'}
          </button>
        </form>
        <p className='mt-5'>
          {isLogin ? "You Don't" : 'Already'} Have An Account ?
          <button
            className='text-red-600 ml-2'
            onClick={() => {
              setIsLogin((prev) => !prev);
            }}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;
