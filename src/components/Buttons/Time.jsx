import React, { useState } from "react";

const TimeFetcher = ({ onSubmitValid }) => {
  const [actualHour, setActualHour] = useState("");

  const fetchTime = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    // Formatea la hora como una cadena en formato HH:MM:SS
    const formatedHour = `${hours}:${minutes}:${seconds}`;

    // Actualiza el estado con la hora formateada
    setActualHour(formatedHour);

    // Si existe una función onSubmitValid, llama a esta con los valores de horas, minutos y segundos
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
