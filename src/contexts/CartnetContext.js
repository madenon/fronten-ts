import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CarnetConext = createContext();

export const CarnetProvider = ({ children }) => {
  const [carnets, setCarnets] = useState([]);
  const [carnet, setCarnet] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const getCarnets = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/carnets");

      if (response.data.data) {
        setCarnets(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getCarnet = async (id) => {
    const response = await axios.get(
      `http://localhost:8000/api/carnets/view/${id}` 
    );
    const apiCarnet = response.data.data;
    setCarnet(response.data.data)
    setFormValues({
      name: apiCarnet.name,
      email: apiCarnet.email,
      contact: apiCarnet.contact,
    });
  };
  const storeCarent = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/carnets/create", formValues);
      getCarnets();
      setFormValues({
        name: "",
        email: "",
        contact: "",
      });
      navigate("/carnet");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const removeItem = async (itemId) => {
    await axios.delete(`http://localhost:8000/api/carnets/delete/${itemId}`);
    getCarnets();
    navigate("/carnet");
  };

  const updateData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/api/edit/${carnet.id}` , formValues);
     
      getCarnets();
      navigate("/carnet");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  return (
    <CarnetConext.Provider
      value={{
        carnet,
        carnets,
        getCarnet,
        getCarnets,
        onChange,
        formValues,
        storeCarent,
        errors,
        removeItem,
        updateData,
        setCarnet,
      }}
    >
      {children}
    </CarnetConext.Provider>
  );
};

export default CarnetConext;
