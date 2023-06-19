import React, { useState } from "react";
import carImg from "../../assets/car.jpg";
import FormField from "../../components/FormField/FormField";
import SmallField from "../../components/SmallField/SmallField";
import Button from "../../components/Button/Button";
import "./RegisterCar.css";
import { useNavigate } from "react-router-dom";

const textType = "text";
const modelLabel = "model";
const yearLabel = "year";
const chasisNumLabel = "Chasis number";
const plateNumLabel = "Plate number";
const priceLabel = "price";
const companyLabel = "company";

const carFields = [
  "model",
  "year",
  "chasisNum",
  "plateNum",
  "price",
  "company",
];

export default function RegisterCar() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    model: "",
    year: 0,
    chasisNum: "",
    plateNum: "",
    price: 0,
    company: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwtToken");
    fetch("http://localhost:4340/registerCar/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          model: "",
          year: 0,
          chasisNum: "",
          plateNum: "",
          price: 0,
          company: "",
        });
        if (data.message.includes("success")) {
          navigate("/getInfo");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div id="main">
      <div id="car-main-left">
        <div id="formDiv">
          <h2 id="car-heading">register car</h2>
          <form onSubmit={handleSubmit}>
            <div id="car-form-first"></div>
            <FormField
              labelName={modelLabel}
              fieldType={textType}
              fieldName={carFields[0]}
              handleChange={handleChange}
            />
            <FormField
              labelName={yearLabel}
              fieldType={textType}
              fieldName={carFields[1]}
              handleChange={handleChange}
            />
            <div id="gridDiv">
              <SmallField
                labelName={chasisNumLabel}
                fieldType={textType}
                fieldName={carFields[2]}
                handleChange={handleChange}
              />
              <SmallField
                labelName={plateNumLabel}
                fieldType={textType}
                fieldName={carFields[3]}
                handleChange={handleChange}
              />
              <SmallField
                labelName={`${priceLabel} (in Frw)`}
                fieldType={textType}
                fieldName={carFields[4]}
                handleChange={handleChange}
              />
              <SmallField
                labelName={companyLabel}
                fieldType={textType}
                fieldName={carFields[5]}
                handleChange={handleChange}
              />
            </div>

            <Button buttonValue="Register car" />
          </form>
        </div>
      </div>
      <div
        id="car-main-right"
        style={{ background: `no-repeat center/100% url(${carImg})` }}
      ></div>
    </div>
  );
}
