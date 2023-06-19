import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import { earningData } from "./data/dashboardData";
import { useSpring, animated } from "react-spring";
import ScrollContainer from "react-indiana-drag-scroll";

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
    <ScrollContainer className="scroll-container" hideScrollbars={false}>
      <div className="cursor-col-resize">
        <ul
          ref={scrollRef}
          style={{
            display: "flex",
            // overflow: "auto",
            // scrollSnapType: "x mandatory",
          }}
          className="py-4 cursor-col-resize"
        >
          {earningData.map((item, i) => (
            <li
              key={i}
              className="bg-white flex mx-4 flex-col justify-center items-center text-gray-600 dark:text-gray-300 dark:bg-secondary hover:dark:bg-slate-700 min-w-[300px]  p-4 border border-gray-200 dark:border-gray-600 rounded-2xl shadow-md hover:scale-105 duration-300"
            >
              <div className="text-3xl select-none opacity-0.9 text-center  p-2">
                {item.icon}
              </div>
              <div className="m-3 flex items-end">
                <span className={`text-sm select-none ml-2`}>
                  {item.percentage}
                </span>
                <span className="text-green-400"></span>
                <span className="text-red-400"></span>
                <span className="text-yellow-400"></span>
                <span className="text-blue-400"></span>
                <span
                  className={`text-6xl text-${item.pcColor} select-none font-semibold`}
                >
                  <Animation n={Number(item.amount)} />
                </span>
              </div>
              <p className="text-lg  mt-1">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </ScrollContainer>
  );
};

export default BasicCarousel;
