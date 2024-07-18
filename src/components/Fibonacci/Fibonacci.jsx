import { useState, useEffect } from "react";
import "./style.css";

export const Fibonacci = ({ hour }) => {
  const { minutes, seconds } = hour;
  const [fibonacci, setFibonacci] = useState([]);

  useEffect(() => {
    // Convert seconds to integers
    const y = parseInt(seconds);
    const splitMinutes = minutes.toString().split("").map(Number);
    let seriesStored =
      JSON.parse(window.localStorage.getItem("fibonacciSeries")) || [];

    // Create an array to store the series
    const serie = [...splitMinutes];

    // Generate the next N numbers in the series
    for (let i = 2; i < y + 2; i++) {
      const nextNumber = serie[i - 1] + serie[i - 2];
      serie.push(nextNumber);
    }

    // Update the fibonacci state with the reversed series
    setFibonacci(serie.reverse());
    let exists = seriesStored.some(
      (s) => JSON.stringify(s) === JSON.stringify(serie)
    );

    if (!exists) {
      // Si la serie no existe, agregarla al arreglo
      seriesStored.push(serie);
      // Guardar el arreglo actualizado en localStorage
      window.localStorage.setItem(
        "fibonacciSeries",
        JSON.stringify(seriesStored)
      );
    }
  }, [minutes, seconds]);

  return (
    <>
      {fibonacci.map((num, index) => (
        <span key={index}>{num}, </span>
      ))}
    </>
  );
};
