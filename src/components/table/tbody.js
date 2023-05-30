import { useStateContext } from '../../contexts/contextProvider';
import Tr from './tr';

function Tbody({ isLoading, rowLoading, rows, columns, setRow }) {
  const { lineSpacing, stickyRight, stickyLeft, displayLines } = useStateContext();
  return (
    <>
      {isLoading ? (
        <tbody className='bg-white max-h-screen overflow-y-scroll dark:bg-secondary divide-y divide-gray-100 dark:divide-gray-600'>
          {rowLoading.map((item, i) => (
            <tr className='hover:bg-zinc-100 dark:hover:bg-gray-700 duration-100' key={i}>
              <td className={`animate-pulse px-6 py-${lineSpacing}`}>
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
              </td>
              {item.map((column, i) => (
                <td className={`px-6 py-${lineSpacing}`} key={i}>
                  <div className='bg-gray-100 dark:bg-slate-600 animate-pulse h-4 rounded-full'></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody className='bg-white max-h-screen overflow-y-scroll dark:bg-secondary divide-y divide-gray-100 dark:divide-gray-600'>
          {rows.map((row, i) => (
            <Tr
              space={lineSpacing}
              columns={columns}
              row={row}
              key={i}
              displayLines={displayLines}
              setRow={setRow}
              stickyRight={stickyRight}
              stickyLeft={stickyLeft}
            />
          ))}
        </tbody>
      )}
    </>
  );
}

export default Tbody;
