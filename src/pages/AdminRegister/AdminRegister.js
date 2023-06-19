import React from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import adminPic from "../../assets/admin.jpg";

const signUpBtnValue = "Sign Up";
const secondFieldLabelSignUp = "email";
const secondFieldTypeSignUp = "email";
const headingAdmin = "sign up";

export default function AdminRegister() {
  return (
    <RegisterForm
      buttonValue={signUpBtnValue}
      secondFieldLabel={secondFieldLabelSignUp}
      secondFieldType={secondFieldTypeSignUp}
      heading={headingAdmin}
      backgroundImg={adminPic}
      link="/login"
    />
  );
}
