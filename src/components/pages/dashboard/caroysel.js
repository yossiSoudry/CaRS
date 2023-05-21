import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import { earningData } from "./data/dashboardData";
import { useSpring, animated } from "react-spring";

function Animation({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const BasicCarousel = () => {
  const { scrollRef } = useSnapCarousel();
  return (
    <ul
      ref={scrollRef}
      style={{
        display: "flex",
        overflow: "auto",
        scrollSnapType: "x mandatory",
      }}
      className="py-4"
    >
      {earningData.map((item, i) => (
        <li
          key={i}
          className="bg-white flex mx-4 flex-col cursor-pointer justify-center items-center text-gray-600 dark:text-gray-300 dark:bg-secondary hover:dark:bg-slate-700 min-w-[300px]  p-4 border border-gray-200 dark:border-gray-600 rounded-2xl shadow-md hover:scale-105 duration-300"
        >
          <div className="text-3xl opacity-0.9 text-center  p-2">
            {item.icon}
          </div>
          <p className="m-3 flex items-end">
            <span className={`text-sm ml-2`}>
              {item.percentage}
            </span>
            <span className="text-green-400"></span>
            <span className="text-red-400"></span>
            <span className="text-yellow-400"></span>
            <span className="text-blue-400"></span>
            <span className={`text-6xl text-${item.pcColor} font-semibold`}>
              <Animation n={Number(item.amount)} />
            </span>
          </p>
          <p className="text-lg  mt-1">{item.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default BasicCarousel;
