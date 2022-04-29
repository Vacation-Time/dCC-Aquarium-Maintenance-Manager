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
        <h1> Tank Manager For (☞ﾟヮﾟ)☞ {tankManager.tankName}</h1>  
        <h2> Water Type:{' '}{tankManager.waterType}</h2>
        <h2> Tank Size:{' '}{tankManager.tankSize}</h2>
        <h2> Water Temp Check Last Done:{' '}{tankManager.waterTempChkLastDone}</h2>
        <h2> Value:{' '}{tankManager.value}</h2>
        <h2> Next Due:{' '}{tankManager.nextDue}</h2>  
        <h2> Water Change last Done:{' '}{tankManager.waterChangeLastDone}</h2>
        <h2> Amount Percent:{' '}{tankManager.amountPercent}</h2>
        <h2> Next Due:{' '}{tankManager.nextDue}</h2>
        <h2> Plan Care Last Done:{' '}{tankManager.plantCareLastDone}</h2>
        <h2> Next Due:{' '}{tankManager.nextDue}</h2>
        <h2> Water Levels Check Last Done:{' '}{tankManager.waterLevelsChkLastDone}</h2>
        <h2> PH Level:{' '}{tankManager.phLevel}</h2>
        <h2> Nitrite Level:{' '}{tankManager.nitriteLevel}</h2>
        <h2> Nitrate Level:{' '}{tankManager.nitrateLevel}</h2>  
        <h2> O2 Level:{' '}{tankManager.o2Level}</h2>
        <h2> Next Due:{' '}{tankManager.nextDue}</h2>
        <h2> Notes:{' '}{tankManager.tankNotes}</h2>
    </div>
  );
};

export default TankManagerPage;
