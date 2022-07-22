import React from 'react'
import {Navigate, Outlet} from "react-router-dom";

function PrivateRoutes() {
  const user = localStorage.getItem("token");
  return !user ? <Navigate to="/login"/> : <Outlet/>;
}

export default PrivateRoutes