export const Record = () => {
  const series =
    JSON.parse(window.localStorage.getItem("fibonacciSeries")) || [];

  return (
    <div className="container text-center py-5">
      {series.length === 0 ? (
        <p className="display-6 mb-3">Historial vacío</p>
      ) : (
        <>
          {series.map((num, index) => (
            <p key={index} className="lead mb-2">{num} </p>
          ))}
        </>
      )}
    </div>
  );
};

