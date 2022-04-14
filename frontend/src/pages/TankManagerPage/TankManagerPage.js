import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

import axios from "axios";
import useAuth from "../../hooks/useAuth";

const TankManagerPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth(); 
  const [tankManager, setTankManager] = useState([]);
  console.log(user); // { username: 'admin', firstName: 'Admin', id: 1 }
  console.log(token); // This is the JWT token that you will send in the header of any request requiring authentication


  useEffect(() => {
    const fetchManager = async (tank) => {

      try {
      const mxManagerId = () => {
        const { id } = useParams();
      }
      
        //TODO: use new tank_detail endpoint here
       
        
        let response = await axios.get(`http://127.0.0.1:8000/api/tank/${tank.id}/`, { 
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data);
        setTankManager(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchManager();
  }, [token]);
  return (
    <div className="container">
      <h1>Tank Manager (☞ﾟヮﾟ)☞ {user.username}</h1>  
      <ul>
        {tankManager && tankManager.map((manager) => (
          <li key={manager.id}>
            <Link to={`/mxManagerId/${tankManager.mxManagerId}`}>
              {manager.mxManagerId}
            </Link>
          </li>
        ))}
      </ul> 
      {/** This JSX will render the MxManager details*/} 

    <Outlet />
    </div>
  );
};

export default TankManagerPage;
