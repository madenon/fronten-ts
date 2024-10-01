import React, { useContext, useState } from "react";
import axios from "axios";
import CarnetConext from "../../contexts/CartnetContext";
const CreerCarnet = () => {
  const { formValues, storeCarent, onChange, errors } =
    useContext(CarnetConext);
  return (
    <div className="mt-12">
      <form
        onSubmit={storeCarent}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm"
      >
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-sm font-medium">
              Nom
            </label>
            <input
              type="text"
              name="name"
              value={formValues["name"]}
              onChange={onChange}
              
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.name && (
              <span className="text-sm text-red-400">{errors.name[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formValues["email"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.email && (
              <span className="text-sm text-red-400">{errors.email[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-sm font-medium">
              Contact
            </label>
            <input
              type="number"
              name="contact"
              value={formValues["contact"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.contact && (
              <span className="text-sm text-red-400">{errors.contact[0]}</span>
            )}
          </div>
        </div>
        <div className="my-4">
          <button type="submit" className="px-4 py2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
            Créer  
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreerCarnet;
