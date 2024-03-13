import React, { useEffect, useState } from 'react';

const AnimatedNumber = ({ number }) => {
  const [currentNumber, setCurrentNumber] = useState(number);

  useEffect(() => {
    const difference = number - currentNumber;
    if (difference === 0) return;

    const step = difference > 0 ? 1 : -1;
    const timer = setInterval(() => {
      setCurrentNumber(prevNumber => {
        if ((step > 0 && prevNumber >= number) || (step < 0 && prevNumber <= number)) {
          clearInterval(timer);
          return number;
        }
        return prevNumber + step;
      });
    }, 20); 

    return () => clearInterval(timer);
  }, [number, currentNumber]);

  return <span>{currentNumber}</span>;
};

export default AnimatedNumber;
// import React from 'react';import { render } from 'react-dom';import CountUp from 'react-countup';
// function AnimatedNumber() {
// const [currentNumber, setCurrentNumber] = useState();
// render(
//   <CountUp start={0} end={160526} />,
//   document.getElementById('root')
// );
// }
// export default  AnimatedNumber;