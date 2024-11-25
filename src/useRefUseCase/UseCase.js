import React, { useRef } from "react";
import { useState ,useEffect } from "react";
/*
 There are 2 usecases Of useRef so we taking
 2 examples in same page 
 1.exmaple = increment
 2.example = directly access to the dom by chnageing btn color */

function UseCase() {
  const [count, setCount] = useState(0);
  let val = useRef(0);

  let btnref=useRef();

  function handleIncrement() 
  {
    val.current=val.current+1;
    console.log("value of val",val.current);
    
    setCount(count + 1);
  }
function changeColor(){
  btnref.current.style.backgroundColor="red";
}
  //it runs on every render
  useEffect(() => {
    console.log("i am rendering agian and again");
  }, []);

  return (
    <>
      <div>
        <button ref={btnref} className="border bg-slate-300" onClick={handleIncrement}>Increment</button>
        <br />
        <div>Count:{count}</div> <br/>
        <button onClick={changeColor} className="border bg-slate-300" >chnage color of Increment btn</button>
      </div>
    </>
  );
}

export default UseCase;
