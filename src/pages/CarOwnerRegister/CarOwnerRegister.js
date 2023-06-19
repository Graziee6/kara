import React from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import carOwner from "../../assets/car-owner.jpg";

const RegisterOwnerBtnValue = "Register owner";
const secondFieldLabelRegisterOwner = "Address";
const secondFieldTypeRegisterOwner = "text";
const headingRegisterOwner = "Register Owner";
const linkToGetCar = "/getInfo";

export default function CarOwnerRegister() {
  return (
    <RegisterForm
      heading={headingRegisterOwner}
      buttonValue={RegisterOwnerBtnValue}
      secondFieldLabel={secondFieldLabelRegisterOwner}
      secondFieldType={secondFieldTypeRegisterOwner}
      backgroundImg={carOwner}
      link={linkToGetCar}
    />
  );
}
