import React, { useRef, useState } from "react";

function Stopwatch() {
  const [time, settime] = useState(0);
  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      settime((time) => time + 1);
    }, 1000);
  }

  function StopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    StopTimer();
    settime(0);
  }
  return (
    <>
      <h1>StopWatch : {time}</h1>
      <button onClick={startTimer}>start</button>
      <br />

      <button onClick={StopTimer}>stop</button>
      <br />

      <button onClick={resetTimer}>reset</button>
      <br />
    </>
  );
}

export default Stopwatch;
