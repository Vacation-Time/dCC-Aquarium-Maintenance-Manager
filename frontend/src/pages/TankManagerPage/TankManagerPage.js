import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import useAuth from "../../hooks/useAuth";




const TankManagerPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth(); 
  const [tankManager, setTankManager] = useState({});
  const { tankId } = useParams();
  console.log(tankManager)
  console.log(user); // { username: 'admin', firstName: 'Admin', id: 1 }
  console.log(token); // This is the JWT token that you will send in the header of any request requiring authentication


  useEffect(() => {
    const fetchManager = async (tank) => {
      

      try {      
        //TODO: use new tank_detail endpoint here

        let response = await axios.get(`http://127.0.0.1:8000/api/tank/${tankId}/`, { 
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
  }, [tankId, token]);


  return (
    <div>
        <h1> Tank Manager (☞ﾟヮﾟ)☞ {tankManager.tankName}</h1>  
        <h2> Water Type:___☞{' '}{tankManager.waterType}</h2>
        <h2> Fish Type:____☞{' '}{tankManager.fishType}</h2>
        <h2> Fish Amount:__☞{' '}{tankManager.fishAmount}</h2>
        <h2> Plant Type:___☞{' '}{tankManager.plantType}</h2>
        <h2> Plant Amount:_☞{' '}{tankManager.plantAmount}</h2>
        <a href="https://ashishd751.github.io/excel-renderer-demo/">Tank Manager</a>
    </div>
  );
};

export default TankManagerPage;
