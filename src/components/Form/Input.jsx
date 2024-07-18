import React, { useState } from "react";

export const ClockForm = ({ onSubmitValid }) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [errors, setErrors] = useState({});

  // validate possible errors
  const validateInputs = () => {
    const errors = {};
    if (hours < 0 || hours > 23) {
      errors.hours = "La hora debe ser entre 0 y 23";
    }
    if (minutes < 0 || minutes > 59) {
      errors.minutes = "Los minutos deben ser entre 0 and 59";
    }
    if (seconds < 0 || seconds > 59) {
      errors.seconds = "Los segundos deben ser entre 0 and 59";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Process the valid input data here
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      if (onSubmitValid) {
        onSubmitValid({ hours, minutes, seconds });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 d-flex gap-3 justify-content-center align-items-center"
    >
      <div className="mb-3">
        <label htmlFor="hours" className="form-label">
          Hora:
        </label>
        <input
          required
          type="number"
          id="hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="form-control"
        />
        {errors.hours && <span className="text-danger">{errors.hours}</span>}
      </div>
      :
      <div className="mb-3">
        <label htmlFor="minutes" className="form-label">
          Minutos:
        </label>
        <input
          required
          type="number"
          id="minutes"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          className="form-control"
        />
        {errors.minutes && (
          <span className="text-danger">{errors.minutes}</span>
        )}
      </div>
      :
      <div className="mb-3">
        <label htmlFor="seconds" className="form-label">
          Segundos:
        </label>
        <input
          required
          type="number"
          id="seconds"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          className="form-control"
        />
        {errors.seconds && (
          <span className="text-danger">{errors.seconds}</span>
        )}
      </div>
      <button type="submit" className="btn btn-primary h-50">
        Enviar
      </button>
    </form>
  );
};
