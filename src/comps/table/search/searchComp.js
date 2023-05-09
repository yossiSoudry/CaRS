import React, { useEffect } from 'react';
import { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BsFilter, BsSearch } from 'react-icons/bs';
import { apiGet } from '../../../services/services';
import { Tooltip } from 'antd';
import { useStateTableContext } from '../../../contexts/tableContext';

export default function SearchComp({
  keys,
  keysDate,
  setData,
  url,
  fixData,
}) {
  const { pageNum, limitForReq, reverse, setItems, highPageNum, setHighPageNum } = useStateTableContext();
  // Sorting
  const [progress, setProgress] = useState(false);
  const [sortBy, setSortBy] = useState('');
  // Search
  const [generalSearch, setGeneralSearch] = useState('');
  const [searchBy, setSearchBy] = useState('');
  // Search by dates
  const [byDate, setByDate] = useState('');
  const [gt, setGt] = useState('');
  const [lt, setLt] = useState('');

  const search = async () => {
    let newData = await apiGet(
      `${url}?${generalSearch !== '' ? 's=' + generalSearch : ''}${byDate !== '' ? '&searchDate=' + byDate : ''}${
        byDate !== '' ? '&searchDateS=' + gt : ''
      }${byDate !== '' ? '&searchDateE=' + lt : ''}${limitForReq !== 0 ? '&limit=' + limitForReq : ''}${
        pageNum !== 0 ? '&page=' + pageNum : ''
      }${sortBy !== '' ? '&sort=' + sortBy : ''}${reverse ? '&reverse=yes' : ''}
      ${searchBy !== '' ? '&search=' + searchBy : ''}
      `
    );
    // Corrects the data
    newData = fixData(newData);
    // for pagination
    if (newData.length < limitForReq && pageNum < highPageNum) {
      setItems(newData.length);
      setHighPageNum(Math.ceil(newData.length / limitForReq));
    }
    
    setData(newData);
  };

  // Build select options for sorting
  function processInput(name) {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].name === name) {
        console.log(keys[i].option);
        return keys[i].option;
      }
    }
  }

  useEffect(() => {
    search();
  }, [pageNum, limitForReq, reverse]);

  return (
    <>
      <div className='flex justify-center md:-ml-5 pt-1 gap-2 mr-9'>
        <Tooltip placement='top' title='פילטור ומיון מתקדם'>
          <div
            className={`dark:bg-neutral-500 bg-neutral-100 cursor-pointer rounded-lg p-1 flex gap-2 items-center justify-center min-h-full ${
              progress && 'dark:bg-zinc-800 bg-slate-200'
            }`}
            onClick={() => {
              setProgress(!progress);
            }}
          >
            {progress ? (
              <MdOutlineKeyboardArrowLeft className='w-5 h-4' />
            ) : (
              <MdOutlineKeyboardArrowRight className='w-5 h-4' />
            )}
            <BsFilter className='w-6 h-6' />
          </div>
        </Tooltip>
        <input
          type='search'
          placeholder='חיפוש...'
          className='dark:bg-neutral-500 bg-neutral-100 rounded-lg py-2 px-4 pl-10 '
          onChange={(e) => setGeneralSearch(e.target.value)}
          onKeyDown={() => search()}
        />
        <Tooltip placement='top' title='חפש'>
          <button
            className='relative left-[41px] h-[38px] top-[1px] dark:bg-neutral-600 dark:hover:bg-neutral-700 bg-neutral-200 hover:bg-neutral-400 p-2 rounded-l-lg'
            onClick={() => search()}
          >
            <BsSearch />
          </button>
        </Tooltip>
      </div>
      <div className={`flex absolute mt-2 z-50 left-[394px] -top-1 justify-end ${progress ? 'block' : 'hidden'}`}>
        <div className='dark:bg-zinc-800 bg-slate-200 rounded-lg p-2 gap-2'>
          {/* <div className="flex row-auto gap-2 items-center justify-center border-b-1 border-b-stone-500 p-2">
            <label className="text-neutral-400">חיפוש לפי :</label>
            <select
              className="bg-inherit border border-neutral-500 rounded-lg py-1 px-4"
              type="text"
              placeholder="id"
              defaultValue={"id"}
              onChange={(e) => setSearchBy(e.target.value)}
            >
              <option className="">אנא בחר</option>
              {keys.map((option, i) => {
                return (
                  <option
                    className="bg-neutral-500 border border-neutral-500 rounded-lg py-1 px-4"
                    key={i}
                    value={option[0]}
                  >
                    {option[1]}
                  </option>
                );
              })}
            </select>
          </div> */}
          <div className='flex gap-2 items-center justify-center border-b-1 border-b-stone-500 p-2'>
            {/* <label className="text-neutral-400">ערכים:</label>
            <input
              className="bg-inherit border w-14 border-neutral-500 rounded-lg py-1 px-2"
              type="number"
              placeholder="20"
              defaultValue={20}
              onChange={(e) => setLimit(e.target.value)}
            /> */}
            <label className='text-neutral-400'>שדה למיון</label>
            <select
              className='bg-inherit border border-neutral-500 rounded-lg py-1 px-4'
              type='text'
              onChange={(e) => setSearchBy(e.target.value)}
            >
              <option value='בחר' disabled>
                בחר
              </option>
              {keys.map(
                (option, i) =>
                  option.tag === 'select' && (
                    <option
                      className='bg-neutral-500 border border-neutral-500 rounded-lg py-1 px-4'
                      key={i}
                      value={option.name}
                    >
                      {option.label}
                    </option>
                  )
              )}
            </select>
            <label className='text-neutral-400'>ערכים להצגה</label>
            <select className='bg-inherit border border-neutral-500 rounded-lg py-1 px-4' type='text'>
              {/* {console.log(processInput(searchBy))} */}
              {searchBy !== '' &&
                processInput(searchBy).map((option, i) => {
                  return (
                    <option
                      className='bg-neutral-500 border border-neutral-500 rounded-lg py-1 px-4'
                      key={i}
                      value={option}
                    >
                      {option}
                    </option>
                  );
                })}
            </select>
            {/* <label className="text-neutral-400">מהסוף להתחלה</label>
            <input
              className="bg-inherit border border-neutral-500 rounded-lg py-1 px-4"
              type="checkbox"
              onChange={() => setReverse(!reverse)}
            /> */}
          </div>
          <div className='flex row-auto gap-2 items-center justify-center p-2'>
            <label className='text-neutral-400'>חפש לפי תאריך</label>
            <select
              className='bg-inherit border border-neutral-500 rounded-lg py-1 px-4'
              type='text'
              placeholder='id'
              defaultValue={'id'}
              onChange={(e) => setByDate(e.target.value)}
            >
              <option className=''>אנא בחר</option>
              {keysDate.map((option, i) => {
                return (
                  <option
                    className='bg-neutral-500 border border-neutral-500 rounded-lg py-1 px-4'
                    key={i}
                    value={option[0]}
                  >
                    {option[1]}
                  </option>
                );
              })}
            </select>
            <label className='text-neutral-400'>מ:</label>
            <input
              className='bg-inherit border border-neutral-500 rounded-lg py-1 px-4'
              type='date'
              placeholder=''
              pattern='\d{4}-\d{2}-\d{2}'
              onChange={(e) => setGt(e.target.value)}
            />
            <label className='text-neutral-400'>עד:</label>
            <input
              className='bg-inherit border border-neutral-500 rounded-lg py-1 px-4'
              type='date'
              placeholder=''
              onChange={(e) => setLt(e.target.value)}
              defaultValue={gt}
              pattern='\d{4}-\d{2}-\d{2}'
            />
          </div>
        </div>
      </div>
    </>
  );
}
