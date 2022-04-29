import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

import axios from "axios";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth(); 
  const [tank, setTank] = useState([]);
  console.log(user); // { username: 'admin', firstName: 'Admin', id: 1 }
  console.log(token); // This is the JWT token that you will send in the header of any request requiring authentication

  useEffect(() => {
    const fetchTank = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/tank/", { // This is the URL of the API endpoint
          headers: {
            Authorization: "Bearer " + token, // This is the JWT token that you will send in the header of any request requiring authentication
          },
        });
        setTank(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTank();
  }, [token]);


  return (
    <div className="container">
      <h1>Home Page for (☞ﾟヮﾟ)☞ {user.username}</h1>
      <h2>Current Tanks:</h2>    

       {tank &&
        tank.map((tank) => (
          <p key={tank.id}><Link to={`/tank/${tank.id}/`}>{tank.tankName}</Link></p> // figure out where this goes and add manager on that page, might break if new tank is added
        ))}
        <Link to={`/add-tank`}>Add a Tank</Link>
    </div>
  );
};

export default HomePage;

