import React from "react";
import LoginForm from "./LoginForm";
import NriForm from "./ams-client/NriForm";
import RegisterForm from "./RegisterForm";
import NotFound from "./components/NotFound";
import Home from "./Home";
import { Route,Routes } from "react-router-dom";

const App = () => {
  const access = localStorage.getItem("access_token")
  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/registration" element={<RegisterForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      {access ? <Route path="/NRIapplication" element={<NriForm/>}/> : <Route path="/NRIapplication" element={<NotFound/>}/>}
    </Routes>

      {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
      {/* <NriForm /> */}
    </>
  );
};

export default App;

