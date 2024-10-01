import React, { useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import CarnetConext from "../../contexts/CartnetContext";
const CarnetIndex = () => {
  const {carnets, getCarnets,removeItem} = useContext(CarnetConext)


  useEffect(() => {
    getCarnets();
  }, []);

  return (
    <div className="mt-12">
     <div className="flex justify-end m-2 p-2 ">
    <Link className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md" to={"/creer"} >Creer</Link>
     </div>
     <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Nom
              </th>
              <th scope="col" className="px-6 py-3">
                Email{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                Contact{" "}
              </th>
              <th  scope="col" className="px-6 py-3  ">
                Modifier
              </th>
              <th></th>
              <th  scope="col" className="px-6 py-3 ">
                Supprimer
              </th>
             
            </tr>
          </thead>
          <tbody>
            {carnets.map((carnet, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{carnet?.id}</td>
                  <td className="px-6 py-4">{carnet?.name}</td>
                  <td className="px-6 py-4">{carnet?.email}</td>
                  <td className="px-6 py-4">{carnet?.contact}</td>

  <Link className="" to={`/edit/${carnet.id}`}>
  <td className="px-4 py-2  bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">Modifier</td>
  </Link>
 <td></td>
 
  <button    onClick={()=>removeItem(carnet?.id)}className="x-4 py-2  bg-red-500 hover:bg-red-700 text-white rounded-md">Supprimer</button>

 
 
 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
     </div>
   
  );
};

export default CarnetIndex;
