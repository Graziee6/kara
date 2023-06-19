import React, { useState } from "react";

import FormField from "../FormField/FormField";
import Button from "../Button/Button";
import "../../assets/Fonts/PoppinsFont.css";
import { useNavigate } from "react-router-dom";

export default function ShortForm({
  heading,
  firstFieldLabel,
  firstFieldType,
  secondFieldLabel,
  secondFieldType,
  buttonValue,
  backgroundImg,
  login = true,
}) {
  const loginFieldNames = ["changingField", "nid"];
  const linkFieldNames = ["phone", "plateNum"];

  const initialValue = login
    ? {
        changingField: "",
        nid: 0,
      }
    : { phone: "", plateNum: "" };

  const link = login
    ? "http://localhost:4340/login"
    : "http://localhost:4340/link";

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    const token = localStorage.getItem("jwtToken");
    fetch(link, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: login ? null : `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        login&&localStorage.clear();
        login && localStorage.setItem("jwtToken", data.data);
        setFormData(initialValue);
        if (data.message.includes("successfully")) {
          login && navigate("/registerCar");
          navigate("/getInfo");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="main">
      <div className="main-left">
        <div className="formDiv" onSubmit={handleSubmit}>
          <h2 className="heading">{heading}</h2>
          <form>
            {login ? (
              <>
                <FormField
                  labelName={firstFieldLabel}
                  fieldType={firstFieldType}
                  fieldName={loginFieldNames[0]}
                  handleChange={handleChange}
                />
                <FormField
                  labelName={secondFieldLabel}
                  fieldType={secondFieldType}
                  fieldName={loginFieldNames[1]}
                  handleChange={handleChange}
                />
              </>
            ) : (
              <>
                <FormField
                  labelName={firstFieldLabel}
                  fieldType={firstFieldType}
                  fieldName={linkFieldNames[0]}
                  handleChange={handleChange}
                />
                <FormField
                  labelName={secondFieldLabel}
                  fieldType={secondFieldType}
                  fieldName={linkFieldNames[1]}
                  handleChange={handleChange}
                />
              </>
            )}
            <Button buttonValue={buttonValue} />
          </form>
          <div className="moreOptions">
            {/* <p>Don’t have an account? <span><Link to={<SignUp/>}>Sign up</Link></span>
          </p> */}
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
