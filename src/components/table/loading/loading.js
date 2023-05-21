import React from 'react';
import { useStateTableContext } from '../../../contexts/tableContext';

function Loading({ rowLoading }) {
  const { lineSpacing } = useStateTableContext();
  return (
    <>
      {rowLoading.map((item, i) => (
        <div
          className='bg-gray-100 dark:bg-zinc-600 p-4 rounded-2xl shadow hover:bg-gray-200 hover:scale-105 dark:hover:bg-gray-700 duration-300'
          key={i}
        >
          <div className='flex justify-center'>
            <div className='block w-full rounded-2xl bg-white hover:bg-slate-100 text-center shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-800'>
              <div className='animate-pulse border-b-2 flex gap-3 items-center justify-center border-neutral-100 text-xl py-3 px-6 dark:border-neutral-600 dark:text-neutral-50'>
                <svg
                  className='w-10 h-10 mr-2 text-gray-200 dark:text-gray-700'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <div className='h-10 w-10 rounded-full hover:scale-110 duration-500 bg-gray-100 dark:bg-slate-600 animate-pulse'></div>
              </div>
              {item.map((column, i) => (
                <div className={`px-6 py-${lineSpacing}`} key={i}>
                  <div className='bg-gray-100 dark:bg-slate-600 animate-pulse h-4 rounded-full'></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Loading;
