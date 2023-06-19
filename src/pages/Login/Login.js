import React from "react";

import "../../components/RegisterForm/RegisterForm.css";
import ShortForm from "../../components/ShortForm/ShortForm";
import adminPic from "../../assets/admin.jpg";

const loginHeading = "admin login";
const loginFirstFieldType = "email";
const loginSecondFieldType = "text";

const emailLabel = "email";
const nidLabel = "NID";
const loginBtnValue = "login";

export default function Login() {
  return (
    <ShortForm
      heading={loginHeading}
      firstFieldLabel={emailLabel}
      secondFieldLabel={nidLabel}
      firstFieldType={loginFirstFieldType}
      secondFieldType={loginSecondFieldType}
      buttonValue={loginBtnValue} backgroundImg={adminPic} login="true"
    />
  );
}
