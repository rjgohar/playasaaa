import React from "react";
import LoginModal from "./components/modals/login";
import SignUpModal from "./components/modals/siginUp";
import ThanksModal from "./components/modals/thanksmodal";

const UniversalDialogs = () => {
  return (
    <>
      <LoginModal />
      <SignUpModal />
      <ThanksModal />
    </>
  );
};

export default UniversalDialogs;
