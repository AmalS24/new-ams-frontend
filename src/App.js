import React from "react";
import LoginForm from "./LoginForm";
import NriForm from "./ams-client/NriForm";
import RegisterForm from "./RegisterForm";
import NotFound from "./components/NotFound";
import AMS from "./AMS";
import { Route,Routes } from "react-router-dom";
import Admin from "./ams-admin/Admin";


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
      {/* <Admin /> */}
      {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
      {/* <NriForm /> */}
    </>
  );
};

export default App;
