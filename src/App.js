import logo from "./logo.svg";
import "./App.css";
import data from "./components/data";
import Tours from "./components/tours";
import { useState } from "react";

function App() {
  const [tours, setTours] = useState(data);
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  if (tours.length === 0) {
    return (
      <>
        <div className="flex items-center justify-center h-[100vh] flex-col ">
          <h2 className="font-bold">No Tours Left</h2>
          <button
            onClick={() => setTours(data)}
            className=" flex items-center justify-center rounded-lg w-[300px] h-[50px]  border-solid  shadow-2xl mt-5 border-2 "
          >
            Refresh
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    </>
  );
}

export default App;
