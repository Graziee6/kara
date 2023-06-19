import React from "react";

import "../../components/RegisterForm/RegisterForm.css";
import ShortForm from "../../components/ShortForm/ShortForm";
import adminPic from "../../assets/admin.jpg";

const LinkOwnerHeading = "Link Owner to car";
const LinkOwnerFirstFieldType = "text";
const LinkOwnerSecondFieldType = "text";

const LinkOwnerFirstFieldLabel = "Owner's 📞 (e.g. 780982342)";
const LinkOwnerSecondFieldLabel = "Car's plate number";
const LinkOwnerBtnValue = "link";

export default function LinkOwner() {
  return (
    <ShortForm
      heading={LinkOwnerHeading}
      firstFieldLabel={LinkOwnerFirstFieldLabel}
      secondFieldLabel={LinkOwnerSecondFieldLabel}
      firstFieldType={LinkOwnerFirstFieldType}
      secondFieldType={LinkOwnerSecondFieldType}
      buttonValue={LinkOwnerBtnValue} backgroundImg={adminPic} login={false}
    />
  );
}