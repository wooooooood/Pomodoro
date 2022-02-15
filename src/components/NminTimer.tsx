import moment from "moment";
import { useEffect, useRef, useState, useCallback } from "react";

interface NminTimerProps {
  minute: number;
}

const NminTimer = ({ minute }: NminTimerProps) => {
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState<number>(-1);
  const start = useCallback(() => {
    const timer = window.setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    setTimerId(timer);
  }, []);
  const stop = useCallback(() => {
    clearInterval(timerId);
    setTimerId(-1);
  }, []);

  useEffect(() => {
    console.log(count);
    if (count > minute * 10) {
      clearInterval(timerId);
    }
  }, [count]);
  return (
    <div>
      <p>{moment.utc(count * 1000).format("mm:ss")}</p>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
};

export default NminTimer;
