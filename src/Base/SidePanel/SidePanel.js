import React, { useEffect, useState } from "react";
import "./SidePanel.css";
import { FaBars, FaUser, FaCog , FaNewspaper } from 'react-icons/fa'; 
import EndPoint from "../../Endpoint";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SidePanel() {
    
    return (
        <div className="sidepanel">
            <div className="navlinks">
                <EndPoint.components.Navlink to={EndPoint.path.Home} icon={<FaBars/>}>Home page</EndPoint.components.Navlink>
                <EndPoint.components.Navlink to={EndPoint.path.Home} icon={<FaNewspaper/>}>My feed</EndPoint.components.Navlink>
                <EndPoint.components.Navlink to={EndPoint.path.Profile} icon={<FaUser/>}>Profile</EndPoint.components.Navlink>
                <EndPoint.components.Navlink to={EndPoint.path.Home} icon={<FaCog/>}>Settings</EndPoint.components.Navlink>
            </div>
        </div>
    );
}

export default SidePanel;
