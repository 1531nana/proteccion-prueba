import { useState } from "react";
import { ClockForm } from "../components/Form/Input";
import { Fibonacci } from "../components/Fibonacci/Fibonacci";
import TimeFetcher from "../components/Buttons/Time";

export const Clock = () => {
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
      <h1>Ingresa la hora deseada</h1>
      <ClockForm onSubmitValid={handleTimeData} />
      {timeData && <Fibonacci hour={timeData} />}
      {<TimeFetcher onSubmitValid={handleTimeDataActual} />}
      {actualHour && <Fibonacci hour={actualHour} />}
    </div>
  );
};
