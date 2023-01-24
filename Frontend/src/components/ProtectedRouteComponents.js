import React from "react";
import { Outlet,Navigate } from "react-router-dom";
const ProtectedRoutesComponenent=({admin})=>{
    var auth = false; 
    if(admin){
        let adminAuth=true; 
        if(adminAuth)auth=true; 
    }
    else {
        let userAuth=true; 
        if(userAuth)auth=true; 
    }
    return auth?<Outlet/>:<Navigate to="/login"/>; 
}

export default ProtectedRoutesComponenent; 