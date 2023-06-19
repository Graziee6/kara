import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./RegisterForm.css";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";
import "../../assets/Fonts/PoppinsFont.css";

const textType = "text";
const nameLabel = "name";
const phoneLabel = "phone number";
const nidLabel = "NID";

const fieldNames = ["fullName", "changingField", "phone", "nid"];

export default function RegisterForm({
  heading,
  buttonValue,
  secondFieldLabel,
  secondFieldType,
  backgroundImg,
  link,
}) {
  const navigate = useNavigate();
  const [isEmail, setIsEmail] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    changingField: "",
    phone: 0,
    nid: 0,
  });

  const handleChange = (e) => {
    if (e.target.type !== "email") {
      setIsEmail(false);
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const token = localStorage.getItem("jwtToken");
    fetch(
      isEmail ? "http://localhost:4340/" : "http://localhost:4340/addCarOwner",
      {
        method: "POST",
        headers: isEmail
          ? {
              "Content-Type": "application/json",
            }
          : {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData({ fullName: "", changingField: "", phone: 0, nid: 0 });
        if (data.message.includes("successfully")) {
          navigate(link);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="main">
      <div className="main-left">
        <div id="formDiv" onSubmit={handleSubmit}>
          <h2 className="heading">{heading}</h2>
          <form>
            <FormField
              labelName={nameLabel}
              fieldType={textType}
              fieldName={fieldNames[0]}
              handleChange={handleChange}
            />
            <FormField
              labelName={secondFieldLabel}
              fieldType={secondFieldType}
              fieldName={fieldNames[1]}
              handleChange={handleChange}
            />
            <FormField
              labelName={phoneLabel}
              fieldType={textType}
              fieldName={fieldNames[2]}
              handleChange={handleChange}
            />
            <FormField
              labelName={nidLabel}
              fieldType={textType}
              fieldName={fieldNames[3]}
              handleChange={handleChange}
            />

            <Button buttonValue={buttonValue} />
          </form>
          <div className="moreOptions">
            {/* <p>Already have an account? <span><Link to="/login" className="link"/></span></p> */}
          </div>
        </div>
      </div>
      <div
        className="main-right"
        style={{ background: `no-repeat center/100% url(${backgroundImg})` }}
      ></div>
    </div>
  );
}
