import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div>
      <SweetAlert
        danger
        confirmBtnText="Ok"
        confirmBtnBsStyle="danger"
        title="To access this page you need to log in first."
        onConfirm={() => navigate("/")}
      >
        Please click "OK" to return login page
      </SweetAlert>
    </div>
  );
};

export default Unauthorized;
