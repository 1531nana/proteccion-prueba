export const Record = () => {
  const series =
    JSON.parse(window.localStorage.getItem("fibonacciSeries")) || [];

  return (
    <div className="container text-center py-5">
      {series.length === 0 ? (
        <p className="display-6 mb-3">Historial vacío</p>
      ) : (
        <>
          <div className="card">
            <div className="card-header">Historial Fibonacci</div>
            <ul className="list-group list-group-flush">
              {series.map((num, index) => (
                <li key={index} className="list-group-item">
                  {num.join(', ')}{" "}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
