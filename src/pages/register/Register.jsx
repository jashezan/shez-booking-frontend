import "./register.scss";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import RegForm from "../../components/regForm/RegForm";

const Register = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="rgContainer">
        <RegForm/>
      <MailList/>
      <Footer/>
      </div>
    </div>
  );
};

export default Register;
