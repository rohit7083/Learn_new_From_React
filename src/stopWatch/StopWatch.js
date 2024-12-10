import React, { useEffect, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setrunning] = useState(false);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      console.log(interval);
  
      return () => clearInterval(interval); // Cleanup
    }
  }, [running]);
  
  return (
    <>
      <h1 className="text-4xl">STOP WATCH</h1>
      <div className="text-8xl">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div>
        {running ? (
          <button
            className="border  m-2 bg-slate-400 rounded-md p-2 text-4xl"
            onClick={() => setrunning(false)}
          >
            stop
          </button>
        ) : (
          <button
            className="border m-2 bg-slate-400 rounded-md p-2 text-4xl"
            onClick={() => setrunning(true)}
          >
            start
          </button>
        )}
        <button
          className="border m-2 bg-slate-400 rounded-md p-2 text-4xl"
          onClick={() => setTime(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default StopWatch;
