import React, { useEffect, useState } from 'react';
import { apiGet } from '../../../services/services';
import { URL } from '../../../data/constants';
import { useStateContext } from '../../../contexts/contextProvider';
import { useStateTableContext } from '../../../contexts/tableContext';
import { Divider, Tooltip } from 'antd';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from 'react-icons/md';
import { SlRefresh } from 'react-icons/sl';

export default function Pagination({
  url,
  rows
}) {
  // Contexts
  const {  pageNum,  setPageNum, limitForReq, setLimitForReq, items, setItems, reverse, setReverse, highPageNum, setHighPageNum } = useStateTableContext();
  const { currentColor, refresh, setRefresh } = useStateContext();
  
  // Get the length of data
  let length = rows.length;

  // Get the number of pages and items
  const countItems = async () => {
    const { pages, count } = await apiGet(`${url}/count?limit=${limitForReq}`);
    setHighPageNum(pages);
    setItems(count);
  };

  // Follow the request limit and updates the number of items and pages
  useEffect(() => {
    localStorage.limitForReq = limitForReq;
    countItems();
  }, [limitForReq]);

  return (
    <>
      <div className='flex flex-wrap items-center pr-6 text-neutral-500 dark:text-neutral-400 text-lg'>
        <div className=' flex items-center hover:text-sky-300 dark:hover:text-sky-200 rounded-lg'>
          <Tooltip placement='top' title='רענן'>
            <SlRefresh className='w-5 h-5 hover:text-sky-300 dark:hover:text-sky-200 duration-200 cursor-pointer' onClick={()=> setRefresh(! refresh)} />
          </Tooltip>
        </div>
        <Divider type='vertical' className='h-5' />
        <div className={`border flex items-center border-gray-200 dark:border-gray-700 shadow p-2 rounded-lg`}>
          <Tooltip placement='top' title='מההתחלה לסוף'>
            <span
              className='w-5 h-5 text-lg hover:text-sky-300 dark:hover:text-sky-200 duration-200 cursor-pointer'
              onClick={() => setReverse(!reverse)}
            >
              <BsArrowDown style={!reverse ? { color: currentColor } : {}} />
            </span>
          </Tooltip>
          <Tooltip placement='top' title='מהסוף להתחלה'>
            <span
              className='w-5 h-5 text-lg hover:text-sky-300 dark:hover:text-sky-200 duration-200 cursor-pointer'
              onClick={() => setReverse(!reverse)}
            >
              <BsArrowUp style={reverse ? { color: currentColor } : {}} />
            </span>
          </Tooltip>
        </div>
        <Divider type='vertical' className='h-5' />
        <div className={`border flex items-center border-gray-200 dark:border-gray-700 shadow p-1 rounded-lg`}>
          <Tooltip placement='top' title='הקודם'>
            <button
              onClick={() => {
                setPageNum(Math.max(pageNum - 1, 1));
              }}
            >
              {
                <MdOutlineSkipNext
                  className={`text-2xl mt-0.5 ${
                    pageNum === 1
                      ? 'text-neutral-300 dark:text-neutral-500'
                      : 'text-neutral-500 dark:text-neutral-100 hover:text-sky-300 dark:hover:text-sky-200 pt-0.5'
                  }`}
                />
              }
            </button>
          </Tooltip>
          <div className='px-2 flex gap-2'>
            דף
            <span style={{ color: currentColor }}>{pageNum}</span>
            מתוך
            <span style={{ color: currentColor }}>{highPageNum}</span>
          </div>
          <Tooltip placement='top' title='הבא'>
            <button
              onClick={() => {
                setPageNum(Math.min(pageNum + 1, highPageNum));
              }}
            >
              {
                <MdOutlineSkipPrevious
                  className={`text-2xl mt-0.5 ${
                    pageNum === highPageNum
                      ? 'text-neutral-300 dark:text-neutral-500'
                      : 'text-neutral-500 dark:text-neutral-100 hover:text-sky-300 dark:hover:text-sky-200 pt-0.5'
                  }`}
                />
              }
            </button>
          </Tooltip>
        </div>
        <Divider type='vertical' className='h-5' />
        <div className='border flex border-gray-200 dark:border-gray-700 shadow p-1 rounded-lg'>
          {' '}
          {' מציג'}
          <input
            min={1}
            className='bg-inherit text-center w-10 mr-2'
            type='number'
            placeholder={limitForReq}
            defaultValue={limitForReq}
            onChange={(e) => {
              setLimitForReq(e.target.value);
              localStorage.limitForReq = e.target.value;
            }}
            style={{ color: currentColor }}
          />
          <span className='ml-3'>{'תצאות בדף,'}</span>
          {'מ -'}
          <div className='flex gap-3 pr-1'>
            <span style={{ color: currentColor }}>{(pageNum - 1) * length + 1}</span>
            {'עד'} <span style={{ color: currentColor }}>{Math.min(pageNum * length, items)}</span>
            {'מתוך'} <span style={{ color: currentColor }}>{items}</span>
          </div>
        </div>
      </div>
    </>
  );
}
