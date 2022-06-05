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
import Form from "./ams-client/Form";
import Nri from "./ams-admin/Pages/Nri";
import Gov from "./ams-admin/Pages/Gov";
import Mgmt from "./ams-admin/Pages/Mgmt";
import Settings from "./ams-admin/Pages/Settings";
import Dashboard from "./ams-client/Dashboard";


const App = () => {
  const access = localStorage.getItem("access_token")
  const admin_access = localStorage.getItem("admin_access_token")
  return (
    <>
    {/* <Routes>
      <Route path="/"  element={<AMS/>}/>
      <Route path="/registration" element={<RegisterForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      {access ? <Route path="/NRIapplication" element={<NriForm/>}/> : <Route path="/NRIapplication" element={<NotFound/>}/>}
      {admin_access?(
      <Route path="/admin" element={<Admin/>}>
        <Route path="" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="nri" element={<Nri/>} />
        <Route path="mgmt" element={<Mgmt/>} />
        <Route path="gov" element={<Gov/>} />
        <Route path="verify" element={<p>VERIFICATION</p>} />
        <Route path="settings" element={<Settings/>} />
       </Route>):<Route path="/admin" element={<Loader />}/>}
    </Routes> 
     */}
     <Dashboard />
     {/* <NriForm /> */}
     {/* <AMS/> */}
    </>
  );
};

export default App;
