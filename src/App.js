import React from "react";
import LoginForm from "./LoginForm";
import NriForm from "./ams-client/NriForm";
import RegisterForm from "./RegisterForm";
import NotFound from "./components/NotFound";
import AMS from "./AMS";
import { Route,Routes } from "react-router-dom";
import Admin from "./ams-admin/Admin";
import HomePage from "./ams-admin/Pages/HomePage";
import SearchPage from "./ams-admin/Pages/SearchPage";
import Loader from "./components/Loader";




const App = () => {
  const access = localStorage.getItem("access_token")
  const admin_access = localStorage.getItem("admin_access_token")
  return (
    <>
    <Routes>
      <Route path="/"  element={<AMS/>}/>
      <Route path="/registration" element={<RegisterForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      {access ? <Route path="/NRIapplication" element={<NriForm/>}/> : <Route path="/NRIapplication" element={<NotFound/>}/>}
      {admin_access?(
      <Route path="/admin" element={<Admin/>}>
        <Route path="" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="nri" element={<p>NRI</p>} />
        <Route path="mgmt" element={<p>MANAGEMENT</p>} />
        <Route path="gov" element={<p>GOVERNMENT</p>} />
        <Route path="verify" element={<p>VERIFICATION</p>} />
       </Route>):<Route path="/admin" element={<Loader />}/>}
    </Routes> 
    {/* <Admin /> */}
      {/* <Home/> */}
      {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
      {/* <NriForm /> */}
    </>
  );
};

export default App;
