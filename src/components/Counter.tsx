import React from "react";

function ChildComponent() {
  return <div>Child Component</div>;
}

function Counter() {
  return (
    <div>
      Counter
      <ChildComponent />
    </div>
  );
}

export default Counter;
