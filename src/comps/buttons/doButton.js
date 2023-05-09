import { Tooltip } from 'antd';

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
  title
}) => {
  return (
    <Tooltip placement='top' title={title}>
        <button
          type='button'
          onClick={customFunc}
          style={{ backgroundColor: bgColor, color, borderRadius }}
          className={` text-${size} w-${width} relative text-center border border-gray-200 dark:border-gray-700 hover:scale-110 duration-300 shadow-md gap-4 cursor-pointer p-2 rounded-lg ${classN}`}
        >
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
