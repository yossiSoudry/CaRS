import { Modal, Tooltip } from 'antd';
import Files from '../pages/files/files';
import { useStateContext } from '../../contexts/contextProvider';
import { ModalTable } from './modalTable';
import { Fragment } from 'react';
import GetSingle from './getSingle';

function RowGrid({
  i,
  setEdit,
  row,
  space,
  edit,
  EditOutlined,
  FolderOutlined,
  SaveOutlined,
  columns,
  dateTimer,
  currentColor,
  open,
  setOpen,
  updateOne,
  stickyRight,
  stickyLeft,
}) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const getImagePath = (column, row) => {
    if (column.value[0] === 'cars') return `/images/${column.value[0]}/${row[column.value[1][0]].toLowerCase()}.png`;
    if (column.value[0] === 'categories') {
      return `/images/${column.value[0]}/${row[column.value[1][0]]}.png`;
    } else return `/images/${column.value[0]}/default.png`;
  };
  const { currentMode } = useStateContext();

  return (
    <tr key={i} className='group hover:bg-zinc-100 dark:hover:bg-gray-700 duration-100 relative'>
      {columns.map((column, i) => {
        return (
          <Fragment key={i}>
            {column.col === 'main' && (
              <td
                className={`pr-6 py-${space} ${
                  stickyRight > 0
                    ? 'right-0 sticky bg-white dark:bg-secondary group-hover:bg-zinc-100 dark:group-hover:bg-gray-700  duration-100'
                    : ''
                } `}
              >
                <div className='flex items-center whitespace-nowrap gap-3'>
                  <div className='flex-shrink-0 h-10 w-10 hover:scale-110 duration-500'>
                    <img
                      className='h-10 w-10 rounded-full hover:scale-110 duration-500'
                      src={getImagePath(column, row)}
                      alt={`${row[column.value[1][0]]}`}
                    />
                  </div>
                  <div className='ml-4'>
                    <div
                      contentEditable={column.editable && edit}
                      suppressContentEditableWarning={true}
                      onBlur={(e) => {
                        row[column.value[1]] = e.currentTarget.textContent;
                      }}
                      className='text-sm font-medium text-gray-900 dark:text-white'
                    >
                      {row[column.inObj] ? row[column.inObj][column.value[1][0]] : row[column.value[1][0]]}
                      {'  '}
                      {row[column.value[1][1]]}
                    </div>
                    {column.lines === 2 && (
                      <div className='text-sm text-gray-500 dark:text-gray-400'>
                        {row[column.value[2][0]]}
                        {'  '}
                        {row[column.value[2][1]]}
                      </div>
                    )}
                  </div>
                </div>
              </td>
            )}
            {column.col === 'titles' && (
              <td
                className={`px-6 py-${space} ${
                  stickyRight > 1
                    ? ' sticky right-[200px] bg-white dark:bg-secondary group-hover:bg-zinc-100 dark:group-hover:bg-gray-700 duration-100'
                    : ''
                } `}
              >
                <div
                  className='text-gray-900 whitespace-nowrap dark:text-white'
                  contentEditable={column.editable && edit}
                  suppressContentEditableWarning={true}
                  onBlur={(e) => {
                    row[column.value[0]] = e.currentTarget.textContent;
                  }}
                >
                  {row[column.value[0]]}
                </div>
                {column.lines === 2 && (
                  <div
                    className='text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'
                    contentEditable={column.editable && edit}
                    suppressContentEditableWarning={true}
                    onBlur={(e) => {
                      row[column.value[1]] = e.currentTarget.textContent;
                    }}
                  >
                    {row[column.value[1]]}
                  </div>
                )}
              </td>
            )}
            {column.col === 'simple' && (
              <td className={`px-6 py-${space}`}>
                <div
                  className='text-sm text-gray-900 whitespace-nowrap dark:text-white'
                  contentEditable={column.editable && edit}
                  suppressContentEditableWarning={true}
                  onBlur={(e) => {
                    row[column.value[0]] = e.currentTarget.textContent;
                  }}
                >
                  {row[column.inObj]
                    ? row[column.inObj][column.value[0]]
                    : row[column.inArr]
                    ? `${row[column.inArr].length}`
                    : row[column.value[0]]}{' '}
                  {/* {row[column.inObj] ? row[column.inArr] ? row[column.inObj][1][column.value[0]] : row[column.inObj][column.value[1]] : row[column.value[1]]} */}
                </div>
                {column.lines === 2 && (
                  <div
                    className='text-sm text-gray-900 whitespace-nowrap dark:text-white'
                    contentEditable={column.editable && edit}
                    suppressContentEditableWarning={true}
                    onBlur={(e) => {
                      row[column.value[1]] = e.currentTarget.textContent;
                    }}
                  >
                    {row[column.inObj] ? row[column.inObj][column.value[1]] : row[column.value[1]]}
                  </div>
                )}
              </td>
            )}
            {column.col === 'getSingle' && (
              <td className={` px-6 py-${space}`}>
                <div className='flex' >
                  <div>
                    <div className='flex text-sm text-gray-900 whitespace-nowrap dark:text-white'>
                      <GetSingle column={column} item={row[column.value[0]]} index={0} />
                    </div>
                  </div>
                </div>
              </td>
            )}
            {column.col === 'simpleObj' && (
              <td className={`px-6 py-${space}`}>
                <div className='flex '>
                  <div className='block'>
                    <div className='text-sm text-gray-900 whitespace-nowrap dark:text-white'>
                      {row[column.inObj][column.value[0]]}
                    </div>
                    {column.lines === 2 && (
                      <div className='text-sm text-gray-900 whitespace-nowrap dark:text-white'>
                        {row[column.inObj][column.value[1]]}
                      </div>
                    )}
                  </div>
                  <div className='mr-1 flex flex-col justify-center'>
                    {edit && column.editable && (
                      <>
                        <ModalTable tableSearch={column.table} item={column.inObj} row={row} />
                      </>
                    )}
                  </div>
                </div>
              </td>
            )}
            {column.col === 'arrayObj' && (
              <td className={`px-6 py-${space}`}>
                <div className='block text-sm text-gray-900 whitespace-nowrap dark:text-white pb-1'>
                  {row[column.inObj] &&
                    row[column.inObj].map((item, i) => {
                      return (
                        <div className='flex gap-1' key={i}>
                          <span className='block'>
                            {console.log(item)}
                            {item !== null && item[column.value[0]]}
                          </span>
                          <span>
                            {edit && column.editable && (
                              <>
                                <ModalTable tableSearch={column.table} item={column.inObj} row={row} index={i} />
                              </>
                            )}
                          </span>
                        </div>
                      );
                    })}
                </div>
                {(row[column.inObj].length < 2 || row[column.inObj] === null) && edit && column.editable && (
                  <>
                    <ModalTable
                      tableSearch={column.table}
                      item={column.inObj}
                      row={row}
                      index={row[column.inObj].length}
                      empty={true}
                    />
                  </>
                )}
              </td>
            )}
            {column.col === 'links' && (
              <td className={`px-6 whitespace-nowrap py-${space}`}>
                <div className='ml-4 flex flex-col'>
                  <a
                    contentEditable={column.editable && edit}
                    suppressContentEditableWarning={true}
                    onBlur={(e) => {
                      row[column.value[0]] = e.currentTarget.textContent;
                    }}
                    href={`mailto: ${row[column.value[0]]}`}
                    className='text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'
                  >
                    {row[column.value[0]]}
                  </a>
                  {column.lines === 2 && (
                    <a
                      contentEditable={column.editable && edit}
                      suppressContentEditableWarning={true}
                      onBlur={(e) => {
                        row[column.value[1]] = e.currentTarget.textContent;
                      }}
                      href={`tel:${row[column.value[1]]}`}
                      className='text-sm text-gray-500 hover:underline dark:text-gray-400'
                    >
                      {row[column.value[1]]}
                    </a>
                  )}
                </div>
              </td>
            )}
            {column.col === 'badge' && (
              <td
                className={`px-6 whitespace-nowrap py-${space} ${
                  stickyLeft > 1
                    ? ' sticky left-[80px] bg-white dark:bg-secondary group-hover:bg-zinc-100 dark:group-hover:bg-gray-700 duration-100'
                    : ''
                }`}
              >
                {edit ? (
                  <select
                    onBlur={(e) => {
                      row[column.value] = e.currentTarget.value;
                    }}
                    defaultValue={row[column.value]}
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${
                      column.colors[column.option.indexOf(row[column.value])]
                    }-300 text-gray-700`}
                    onChange={(e) => {
                      const selectedIndex = column.option.indexOf(e.target.value);
                      const selectedColor = column.colors[selectedIndex];
                      e.target.classList.remove(...column.colors.map((color) => `bg-${color}-300`));
                      e.target.classList.add(`bg-${selectedColor}-300`);
                    }}
                  >
                    <option className='d-none'></option>
                    {column.option.map((val, i) => {
                      return (
                        <option
                          key={i}
                          className={`hover:border-collapse bg-${column.colors[i]}-300 text-gray-700`}
                          value={val}
                        >
                          {val}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  <div
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${
                      column.colors[column.option.indexOf(row[column.value])]
                    }-300 text-gray-700`}
                  >
                    {row[column.value]}
                  </div>
                )}
              </td>
            )}
            {column.col === 'actions' && (
              <td
                className={`px-6 py-${space} ${
                  stickyLeft > 0
                    ? ' sticky left-0 bg-white dark:bg-secondary group-hover:bg-zinc-100 dark:group-hover:bg-gray-700 duration-100'
                    : ''
                }`}
              >
                <div className='flex gap-3'>
                  {edit ? (
                    <Tooltip placement='top' title='שמירה'>
                      <SaveOutlined
                        className=' hover:scale-125 text-xl duration-300 cursor-pointer'
                        style={{ color: currentColor }}
                        onClick={() => {
                          updateOne() && setEdit(!edit);
                        }}
                      />
                    </Tooltip>
                  ) : (
                    <>
                      <Tooltip placement='top' title='עריכה'>
                        <EditOutlined
                          className=' hover:scale-125 text-xl duration-300 cursor-pointer'
                          style={{ color: currentColor }}
                          onClick={() => setEdit(!edit)}
                        />
                      </Tooltip>
                      {column.files &&
                      <Tooltip placement='top' title='מסמכים'>
                        <FolderOutlined
                          className=' hover:scale-125 text-xl duration-300 cursor-pointer'
                          style={{ color: currentColor }}
                          onClick={() => setOpen(true)}
                        />
                        <Modal
                          centered
                          open={open}
                          onOk={() => setOpen(false)}
                          onCancel={() => setOpen(false)}
                          width={1000}
                          footer={null}
                          className={currentMode === 'dark' ? 'dark' : 'light'}
                        >
                          <Files row={row} updateOne={updateOne} />
                        </Modal>
                      </Tooltip>
                      }
                    </>
                  )}
                </div>
              </td>
            )}
            {column.col === 'calc-date' && (
              <td className={`px-6 py-${space} text-right text-sm font-medium`}>
                <div className=''>
                  <div
                    contentEditable={column.editable && edit}
                    suppressContentEditableWarning={true}
                    onBlur={(e) => {
                      row[column.value[0]] = e.currentTarget.textContent;
                    }}
                  >
                    {row[column.value]}
                  </div>
                  {dateTimer(row[column.value]) < 30 ? (
                    <div className='text-pink-500'>
                      {`${dateTimer(row[column.value]) < 0 ? 'לפני' : 'בעוד'} ${Math.abs(
                        dateTimer(row[column.value])
                      )} ימים`}
                    </div>
                  ) : (
                    <div className='text-gray-400'>{`בעוד  ${dateTimer(row[column.value])} ימים`}</div>
                  )}
                </div>
              </td>
            )}
          </Fragment>
        );
      })}
    </tr>
  );
}

export default RowGrid;
