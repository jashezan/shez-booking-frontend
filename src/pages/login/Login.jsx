import "./login.scss";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import LoginForm from "../../components/loginForm/LoginForm"

const Login = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="loginContainer">
        <LoginForm/>
      <MailList/>
      <Footer/>
      </div>
    </div>
  );
};

export default Login;
