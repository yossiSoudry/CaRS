import { Tooltip } from 'antd';
import { useStateContext } from '../../contexts/contextProvider';

const DoButton = ({
  size,
  customFunc,
  icon,
  dotColor,
  bgColor,
  color,
  borderRadius,
  text,
  classN,
  width,
  title,
  alertNum,
}) => {
  const { currentColor } = useStateContext();
  return (
    <Tooltip placement='top' title={title}>
        <button
          type='button'
          onClick={customFunc}
          style={{ backgroundColor: bgColor, color, borderRadius }}
          className={` text-${size} w-${width} relative text-center border border-gray-200 dark:border-gray-700 hover:scale-110 duration-300 shadow-md gap-4 cursor-pointer p-2 rounded-lg ${classN}`}
        >
          {alertNum !== undefined &&
          <div
            className={`absolute bottom-auto left-auto right-0 top-0 z-10 inline-block
             -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100
              scale-y-100 whitespace-nowrap rounded-full bg-[var(--current-color)] w-3 h-3
               text-center align-baseline text-xs font-bold leading-none text-gray-800`}>
            {alertNum}
          </div>}
          <span
            style={{ background: dotColor }}
            className='absolute animate-ping rounded-full flex h-2 w-2 left-2 top-2'
          />
          {icon} {text}
        </button>
    </Tooltip>
  );
};

export default DoButton;
