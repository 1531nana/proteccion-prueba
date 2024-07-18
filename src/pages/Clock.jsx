import { useState } from "react";
import { ClockForm } from "../components/Form/Input";
import { Fibonacci } from "../components/Fibonacci/Fibonacci";
import TimeFetcher from "../components/Buttons/Time";
import { Record } from "../components/Record/Record";

export const Clock = () => {
  const pathname = window.location.pathname;

  const [timeData, setTimeData] = useState(null);
  const [actualHour, setActualHour] = useState("");

  const handleTimeData = (data) => {
    setTimeData(data);
  };
  const handleTimeDataActual = (data) => {
    setActualHour(data);
  };

  return (
    <div className="container">
      {pathname === "/" ? (
        <>
          <h1>Ingresa la hora deseada</h1>
          <ClockForm onSubmitValid={handleTimeData} />
          {timeData && <Fibonacci hour={timeData} />}
          {<TimeFetcher onSubmitValid={handleTimeDataActual} />}
          {actualHour && <Fibonacci hour={actualHour} />}
        </>
      ) : (
        <>
          <Record />
        </>
      )}
    </div>
  );
};
