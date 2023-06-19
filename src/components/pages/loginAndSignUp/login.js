import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { URL_LOGIN } from '../../../data/constants';
import { useStateContext } from '../../../contexts/contextProvider';
import { apiPost, loadingMsg } from '../../../services/services';
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import Signup from './signUp';

const Login = () => {
  const { currentColor } = useStateContext();
  const [user_name, setUser_name] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(true);
  const [typePassInp, setTypePassInp] = useState('password');
  // const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let resp = await apiPost(URL_LOGIN, { user_name, password });
      // console.log(resp);(resp);
      if (resp.token) {
        localStorage.setItem('token', resp.token);
        window.location.reload();
      } else setError(resp.msg);
    } catch (err) {
      // console.log(resp);(err);
    }
  };

  return (
    <div
      className='h-screen w-full bg-dark flex flex-col justify-center px-4'
      style={{ backgroundImage: '../../../data/images/general/loginImg.jpg' }}
    >
      {loadingMsg('יש להזין שם משתמש וסיסמא ','blue','info')}
      {isRegistered ? (
        <form
          className='max-w-[420px] w-full mx-auto rounded-xl bg-secondary p-8 px-8 hover:scale-110 duration-500'
          onSubmit={handleSubmit}
        >
          <h2 className='text-4xl text-white font-bold text-center mb-8'>Login </h2>
          <div className='flex flex-col text-gray-400 py-2 neutral-500'>
            <input
              className='rounded-xl bg-secondary mt-2 p-4 focus:text-gray-300 focus:bg-zinc-900 focus:outline-none shadow-2xl'
              type='text'
              id='user_name'
              value={user_name}
              onChange={(event) => setUser_name(event.target.value)}
              placeholder='שם משתמש'
            />
            <div
              className='mr-auto relative'
              style={{
                left: '24px',
                bottom: '38px',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              <FaUser className='text-xl text-gray-500' />
            </div>
          </div>
          <div className='flex flex-col text-gray-400'>
            <input
              className='rounded-xl select-none w-full bg-secondary mt-2 p-4 focus:text-gray-300 focus:bg-zinc-900 focus:outline-none shadow-2xl'
              type={typePassInp}
              id='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder='סיסמה'
            />
            <div
              className='mr-auto relative h-0'
              style={{
                left: '24px',
                bottom: '38px',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              {typePassInp === 'password' ? (
                <BsEyeFill
                  onClick={() => {
                    setTypePassInp(typePassInp === 'password' ? 'text' : 'password');
                  }}
                  className='text-2xll text-gray-500 hover:text-gray-300'
                />
              ) : (
                <BsEyeSlashFill
                  onClick={() => {
                    setTypePassInp(typePassInp === 'password' ? 'text' : 'password');
                  }}
                  className='text-2xl text-gray-500 hover:text-gray-300'
                />
              )}
            </div>
          </div>
          <div className='h-8'>
            {error && (
              <small className='text-red-500 px-2'>
                {error === 'Information problem'
                  ? ' שם משתמש או סיסמה אינם נכונים! '
                  : 'אין לך הרשאת גישה אנא פנה למנהל המערכת'}
              </small>
            )}
          </div>
          <div className='flex justify-between text-gray-400 p-2 text-sm sm:text-md'>
            <p className='flex items-center'>
              <input className='ml-2' type='checkbox' /> זכור אותי
            </p>
            {/* <a href="" className=" hover:text-blue-500">
            שכחתי סיסמה
          </a> */}
            <p
              className=' hover:text-blue-500 cursor-pointer hover:underline'
              onClick={() => {
                setIsRegistered(false);
                // // console.log(resp);(isRegistered);
              }}
            >
              הרשמה
            </p>
          </div>
          <button
            className='w-full my-5 mt-6 py-2 text-3xl shadow-lg shadow-teal-500/10 hover:shadow-teal-500/30 text-white font-semibold rounded-lg'
            type='submit'
            style={{ backgroundColor: currentColor }}
          >
            כניסה
          </button>
        </form>
      ) : (
        <Signup setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
};

export default Login;
