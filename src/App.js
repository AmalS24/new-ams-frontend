import React from "react";
import LoginForm from "./LoginForm";
import NriForm from "./ams-client/NriForm";
import RegisterForm from "./RegisterForm";
import NotFound from "./components/NotFound";
import AMS from "./AMS";
import Home from "./ams-admin/Home";
import { Route,Routes } from "react-router-dom";

const App = () => {
  const access = localStorage.getItem("access_token")
  return (
    <>

    <Routes>
      <Route path="/" element={<AMS/>}/>
      <Route path="/registration" element={<RegisterForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      {access ? <Route path="/NRIapplication" element={<NriForm/>}/> : <Route path="/NRIapplication" element={<NotFound/>}/>}
    </Routes>
      {/* <Home/> */}
      {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
      {/* <NriForm /> */}
    </>
  );
};

export default App;

