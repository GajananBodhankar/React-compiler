import { useEffect, useState } from "react";
interface iChildComponent {
  count: number;
}
function ChildComponent({ count }: iChildComponent) {
  useEffect(() => {
    console.log("Child component re-rendered");
  });
  const square=()=>{
    console.log("Square function called")
    return count*count
  }
  return (
    <h3>
      Child Component
      <p>
        The sqaure of {count} is {square()}
      </p>
    </h3>
  );
}

function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("Counter re-rendered");
  });
  const handleIncrease1 = () => {
    setCount1((prev) => prev + 1);
  };
  const handleDecrease1 = () => {
    setCount1((prev) => prev - 1);
  };
  const handleIncrease2 = () => {
    setCount2((prev) => prev + 1);
  };
  const handleDecrease2 = () => {
    setCount2((prev) => prev - 1);
  };
  return (
    <div>
      <h1 className="counter">Counter component</h1>
      <h2>Count one is {count1}</h2>
      <div className="buttonGroup">
        <button className="counterButton" onClick={handleIncrease1}>
          Increase
        </button>
        <button className="counterButton" onClick={handleDecrease1}>
          Decrease
        </button>
      </div>
      <h2>Count two is {count2}</h2>
      <div className="buttonGroup">
        <button className="counterButton" onClick={handleIncrease2}>
          Increase
        </button>
        <button className="counterButton" onClick={handleDecrease2}>
          Decrease
        </button>
      </div>
      <ChildComponent count={count2} />
    </div>
  );
}

export default Counter;
