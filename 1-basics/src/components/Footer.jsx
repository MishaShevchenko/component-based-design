import { useState } from "react";
import { useEffect } from "react";

const Footer = () => {
  const [count, setCount] = useState(0);
  console.log('hi all');
useEffect(() => {
  console.log("hi");
}, []);
  const countUp = () => {
    setCount((count) => count + 1);
  };
  const countDown = () => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <button onClick={() => countUp()} className="btn">
        count up
      </button>
      <button onClick={() => countDown()} className="btn">
        count down
      </button>
      <span>{count}</span>
    </div>
  );
};
export default Footer;
