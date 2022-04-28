import React from "react";
import { useTimer } from "react-timer-hook";

const getTime = () => {
   const datum = new Date(Date.UTC(2022, 4, 14, 0, 0, 0));
  return datum.getTime();
//return Date.now() + 60000;
};

export const Timer = ({onComplete}) => {
  const { seconds, minutes, hours, days, isRunning } = useTimer({
    expiryTimestamp: getTime(),
    onExpire: () => onComplete(true),
  });

  return (
    <div className="timer-container">
        <p>Minting will start in</p>
      {isRunning ? (
        <div className="timer">
          <div className="timer-number">
            <span className="number">{days}</span>
            <span className="texts">Days</span>
          </div>
          <span className="seperator">:</span>
          <div className="timer-number">
            <span className="number">{hours}</span>
            <span className="texts">Hours</span>
          </div>{" "}
          <span className="seperator">:</span> 
          <div className="timer-number">
            <span className="number">{minutes}</span>
            <span className="texts">Minutes</span>
          </div>
          <span className="seperator">:</span> 
          <div className="timer-number">
            <span className="number">{seconds}</span>
            <span className="texts">Seconds</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};