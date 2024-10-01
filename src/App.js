import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreerCarnet from "./components/carnets/CreerCarnet";
import EditCranet from "./components/carnets/EditCranet";
import CarnetIndex from "./components/carnets/CarnetIndex";
import { CarnetProvider } from "./contexts/CartnetContext";

function App() {
  return (
    <CarnetProvider>

    
    <div className="bg-slate-200">
      <div className="max-w-7xl mx-auto min-h-screen">
        <nav>
          <ul className="flex gap-4  m-1 p-4">
            
            <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
              <Link to="/carnet">Tout les carnets</Link>
            </li>
            <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
              <Link to="/">Home</Link>
            </li>

            <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
              <Link to="/creer">creer</Link>
            </li>

            
          </ul>
        </nav>

        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/carnet"  element={<CarnetIndex />} />
          <Route path="/creer"  element={<CreerCarnet />} />
          <Route path="/edit/:id"  element={<EditCranet />} />
        </Routes>
      </div>
    </div>
    </CarnetProvider>
  );
}

export default App;
