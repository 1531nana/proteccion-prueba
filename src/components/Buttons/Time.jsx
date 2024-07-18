import React, { useState } from "react";

const TimeFetcher = ({ onSubmitValid }) => {
  const [actualHour, setActualHour] = useState("");

  const fetchTime = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    // Formated hour HH:MM:SS
    const formatedHour = `${hours}:${minutes}:${seconds}`;

    // Update state
    setActualHour(formatedHour);

    if (onSubmitValid) {
      onSubmitValid({ hours, minutes, seconds });
    }
  };

  return (
    <div>
      <button onClick={fetchTime} className="btn btn-primary h-50">
        Genera la hora automáticamente
      </button>
      {actualHour && <p>Hora del servidor: {actualHour}</p>}
    </div>
  );
};

export default TimeFetcher;
