import { HiEllipsisVertical } from 'react-icons/hi2';
import { BsArrowDown } from 'react-icons/bs';

function Thead({ columns, headerSticky }) {
  return (
    <thead className='bg-gray-100 dark:bg-zinc-600 z-10  sticky top-0 pr-20'>
    <tr>
      {columns.map((column, i) => (
        <th
          key={i}
          scope='col'
          className={`group px-6 py-3 text-center whitespace-nowrap hover:bg-gray-200 dark:hover:bg-zinc-500 cursor-default text-lg font-medium text-gray-500 dark:text-gray-300 
          ${headerSticky(column)}
          ${column.col === 'main' ? 'pr-20' : ''} `}
        >
          <div className='flex items-center gap-2'>
            {column.title}
            <BsArrowDown
              className='hidden group-hover:block dark:hover:bg-neutral-600 hover:bg-white rounded-full'
              onClick={() => {
                // const sorted = rows.sort((a, b) => a.userName - b.userName)
                // // console.log(resp);(sorted);
                // setRows(sorted
                //     )
                // rows.map((row) => {// console.log(resp);(row[column.value[0]]);})
              }}
            />
            <HiEllipsisVertical className='hidden group-hover:block dark:hover:bg-neutral-600 hover:bg-white rounded-full' />
          </div>
        </th>
      ))}
    </tr>
  </thead>
  )
}

export default Thead