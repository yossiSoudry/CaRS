import { useEffect, useState, useRef } from 'react';
import { RiPlayListAddLine } from 'react-icons/ri';
import { useReactToPrint } from 'react-to-print';
import { Modal } from 'antd';
import { useStateContext } from '../../contexts/contextProvider';
import { URL } from '../../data/constants';
import Tr from './tr';
import Toolbar from './toolbar/toolbar';
import Thead from './thead';
import Tbody from './tbody';
import Loading from './loading/loading';
import Pagination from './pagination/paginationComp';
import SearchComp from './search/searchComp';
import DoButton from '../buttons/doButton';
import AddForm from '../forms/addForm';
import { TableContext } from '../../contexts/tableContext';

const Table = ({ rows, columns, titles, setRow, setsData, search, form }) => {
  // Url for data
  const targetURL = `${URL}/${titles[2]}`;
  // Context
  const {
    screenSize,
    isLoading,
    currentColor,
    currentMode,
    openSidebar,
    displayLines,
    setDisplayLines,
    lineSpacing,
    setLineSpacing,
    stickyRight,
    setStickyRight,
    stickyLeft,
    setStickyLeft,
  } = useStateContext();
  // Pagination
  // const [pageNum, setPageNum] = useState(1);
  
  // const [limitForReq, setLimitForReq] = useState(localStorage.limitForReq || 10);
  
  // const [reverse, setReverse] = useState(false);
  // Modal
  const [openForm, setOpenForm] = useState(false);

  // For loading
  const rowLoading = [columns, columns, columns, columns, columns, columns, columns, columns, columns, columns];

  // Responsive cases
  useEffect(() => {
    if (screenSize <= 1000) setDisplayLines(false);
    else setDisplayLines(true);
  }, [screenSize]);

  // Columns sticky
  const handleStickyRight = () => {
    if (stickyRight > 1) {
      setStickyRight(0);
      localStorage.stickyRight = 0;
    } else {
      setStickyRight(stickyRight + 1);
      localStorage.stickyRight = stickyRight + 1;
    }
  };
  const handleStickyLeft = () => {
    if (stickyLeft > 1) {
      setStickyLeft(0);
      localStorage.stickyLeft = 0;
    } else {
      setStickyLeft(stickyLeft + 1);
      localStorage.stickyLeft = stickyLeft + 1;
    }
  };
  const headerSticky = (column) => {
    return column.col === 'main' && stickyRight > 0
      ? 'sticky right-0 bg-gray-100 dark:bg-zinc-600'
      : column.col === 'titles' && stickyRight > 1
      ? 'sticky right-[180px] bg-gray-100 dark:bg-zinc-600'
      : column.col === 'badge' && stickyLeft > 1
      ? 'sticky left-0 bg-gray-100 dark:bg-zinc-600'
      : column.col === 'actions' && stickyLeft > 0
      ? 'sticky left-0 bg-gray-100 dark:bg-zinc-600'
      : '';
  };

  // Lines spacing
  const handleLineSpacing = (space) => {
    setLineSpacing(space);
    localStorage.lineSpacing = space;
  };

  // Print functions
  const tableRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  return (
    <TableContext values={form[0]} setValues={form[1]} >
      <div className='md:flex justify-between items-end'>
        <Toolbar
          handlePrint={handlePrint}
          rows={rows}
          title={titles[0]}
          handleLineSpacing={handleLineSpacing}
          handleStickyRight={handleStickyRight}
          handleStickyLeft={handleStickyLeft}
        />
        {form && (
          <div className='flex justify-center delay-50 duration-500'>
            <DoButton
              color={currentColor}
              title={`הוספת ${titles[1]}`}
              size='4xl'
              icon={<RiPlayListAddLine onClick={() => setOpenForm(true)} />}
            />
            <Modal
              centered
              open={openForm}
              onOk={() => setOpenForm(false)}
              onCancel={() => setOpenForm(false)}
              width={1120}
              footer={null}
              className={currentMode === 'dark' ? 'dark' : 'light'}
            >
              <AddForm
                formInputs={form[2]}
                cleanValues={form[3]}
                FormFunc={form[4]}
                setOpenForm={setOpenForm}
                url={targetURL}
                title={titles[1]}
              />
            </Modal>
          </div>
        )}
        <SearchComp keys={search[0]} keysDate={search[1]} fixData={search[2]} setData={setsData} url={targetURL} />
      </div>
      {displayLines ? (
        <div className='shadow dark:shadow-xl border border-neutral-200 dark:border-neutral-800 max-h-[calc(100vh-29vh)] overflow-auto rounded-lg m-2'>
          <table
            className='min-w-full max-w-[100%] table-auto divide-y divide-gray-200 dark:divide-gray-500'
            ref={tableRef}
          >
            <Thead columns={columns} headerSticky={headerSticky} />
            <Tbody isLoading={isLoading} rowLoading={rowLoading} rows={rows} columns={columns} setRow={setRow} />
          </table>
        </div>
      ) : (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 ${
            !openSidebar ? '2xl:grid-cols-4' : screenSize > 1670 && '2xl:grid-cols-4'
          } ${screenSize > 2000 && '2xl:grid-cols-5'} gap-4 m-2 mt-5`}
        >
          {isLoading ? (
            <Loading rowLoading={rowLoading} />
          ) : (
            <>
              {rows.map((row, i) => (
                <Tr columns={columns} row={row} key={i} setRow={setRow} />
              ))}
            </>
          )}
        </div>
      )}
      <Pagination url={targetURL} rows={rows} />
    </TableContext>
  );
};

export default Table;
