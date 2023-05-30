import React, { useState } from 'react';
import { BsEyeSlashFill, BsEyeFill, BsTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { apiPost } from '../../../services/services';
import { useStateContext } from '../../../contexts/contextProvider';
// import { useNavigate } from 'react-router-dom';
import { URL_WORKERS } from '../../../data/constants';
const Signup = ({ setIsRegistered }) => {
  const { currentColor } = useStateContext();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [phone_number, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [user_name, setUserName] = useState('');
  const [typePassInp, setTypePassInp] = useState('password');
  const [err, setErr] = useState('');

  // const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== password2) {
      console.log(password);
      console.log(password2);
      return;
    }
    let name = firstName + ' ' + lastName;
    try {
      let resp = await apiPost(URL_WORKERS, { name, email, password, phone_number, user_name, address });
      if (resp._id) {
        setIsRegistered(true)
      }
    } catch (err) {
      console.log(err)
      if(err.response.data.code === 11000) {
        setErr('משתמש רשום! הנך מועבר לדף התחברות.');
        setTimeout(() => {
          alert("פרטיך נקלטו בהצלחה ולאחר אישור מנהל תוכל להתחבר")
          setIsRegistered(true)
        }, 2 * 1000);
      }else{
        setErr('חסר פרטים או שאחד מהפרטים שהוזנו אינו תקין');
      }
      
    }
  };

  return (
    <div className='max-h-[1500px] w-full bg-dark flex flex-col p-1'>
      <form
        className='max-w-[504px] w-full mx-auto rounded-xl bg-secondary p-6 md:px-12 hover:scale-105 hover:translate-y-4 duration-500'
        // onSubmit={handleSubmit}
      >
        <h2 className='text-4xl text-white font-bold text-center mb-6'>SignUp </h2>
        <p className='text-yellow-300 text-center text-xs hover:scale-125 duration-500'>יש למלא את כל השדות!</p>
        <div className='flex flex-col text-gray-400 py-1'>
          <div className='flex'>
            <input
              className='rounded-xl w-1/2 bg-secondary mt-2 p-3 focus:text-gray-300 focus:bg-zinc-900 focus:outline-none shadow-2xl'
              placeholder='שם פרטי'
              type='text'
              id='firstName'
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <input
              className='rounded-xl w-1/2 bg-secondary mt-2 p-3 focus:text-gray-300 focus:bg-zinc-900 focus:outline-none shadow-2xl'
              placeholder='משפחה'
              type='text'
              id='lastName'
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-col text-gray-400 py-1'>
          <input
            className='rounded-xl w-full bg-secondary mt-2 p-3 focus:text-gray-300 focus:bg-zinc-900 focus:outline-none shadow-2xl'
            placeholder="דוא''ל"
            type='email'
            id='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div
            className='mr-auto h-0 relative'
            style={{
              left: '24px',
              bottom: '36px',
              fontSize: '24px',
              cursor: 'text',
            }}
          >
            <MdEmail className='text-2xl text-gray-500' />
          </div>
        </div>
        <div className='flex flex-col text-gray-400 py-1'>
          <input
            className='rounded-xl w-full bg-secondary mt-2 p-3 focus:text-gray-300 focus:bg-zinc-900 focus:outline-none shadow-2xl'
            placeholder='כתובת'
            type='phone'
            id='address'
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <div
            className='mr-auto h-0 relative'
            style={{
              left: '21px',
              bottom: '36px',
              fontSize: '24px',
              cursor: 'text',
            }}
          >
            <MdLocationOn className='text-2xl text-gray-500' />
          </div>
        </div>
        <div className='flex flex-col text-gray-400 py-1'>
          <input
            className='rounded-xl w-full bg-secondary mt-2 p-3 focus:text-gray-300 focus:bg-zinc-900 focus:outline-none shadow-2xl'
            placeholder='טלפון'
            type='tel'
            id='phone'
            value={phone_number}
            onChange={(event) => setPhone(event.target.value)}
          />
          <div
            className='mr-auto h-0 relative'
            style={{
              left: '24px',
              bottom: '36px',
              fontSize: '24px',
              cursor: 'text',
            }}
          >
            <BsTelephoneFill className='text-xl text-gray-500' />
          </div>
        </div>
        <div className='flex flex-col text-gray-400 py-1'>
          <input
            className='rounded-xl w-full bg-secondary mt-2 p-3 focus:text-gray-300 focus:bg-zinc-900 focus:outline-none shadow-2xl'
            placeholder='שם משתמש'
            type='phone'
            id='userName'
            value={user_name}
            onChange={(event) => setUserName(event.target.value)}
          />
          <div
            className='mr-auto h-0 relative'
            style={{
              left: '24px',
              bottom: '36px',
              fontSize: '24px',
              cursor: 'text',
            }}
          >
            <FaUser className='text-xl text-gray-500' />
          </div>
        </div>
        <div className='flex'>
        <div className='flex flex-col text-gray-400 py-1'>
          <input
            className='rounded-xl w-full bg-secondary mt-2 p-3 focus:text-gray-300 focus:bg-zinc-900 focus:outline-none shadow-2xl'
            placeholder='סיסמה'
            type={typePassInp}
            id='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div
            className='mr-auto h-0 relative'
            style={{
              left: '24px',
              bottom: '36px',
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
        <div className='flex flex-col text-gray-400 py-1'>
          <input
            className='rounded-xl w-full bg-secondary mt-2 p-3 focus:text-gray-300 focus:bg-zinc-900 focus:outline-none shadow-2xl'
            placeholder='אימות סיסמה'
            type={typePassInp}
            id='password2'
            
            onChange={(e) => {e.target.value !== password ? setErr('הססמאות אינם תואמות!'):setErr('') 
             setPassword2(e.target.value)}}
            // onfocusout={}
          />
          <div
            className='mr-auto h-0 relative'
            style={{
              left: '24px',
              bottom: '36px',
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
        </div>
        <small className='text-red-700'>{err}</small>
        <div className='flex justify-between text-gray-400 p-3'>
          <p className='flex items-center'>
            <input className='ml-2' type='checkbox' /> זכור אותי
          </p>
          <p onClick={() => setIsRegistered(true)} className=' hover:text-blue-500 cursor-pointer hover:underline'>
            התחברות
          </p>
        </div>
        <button
          className='w-full my-2 mt-6 py-1 text-3xl shadow-lg shadow-teal-500/10 hover:shadow-teal-500/30 text-white font-semibold rounded-lg'
          type='submit'
          style={{ backgroundColor: currentColor }}
          onClick={handleSubmit}
        >
          הרשמה
        </button>
      </form>
    </div>
  );
};

export default Signup;