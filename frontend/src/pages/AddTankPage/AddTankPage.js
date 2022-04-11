import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm";

let initialValues = {
    tankName: "",
    waterType: "",
    tankSize: "",
    fishType: "",
    fishAmount: "",
    plantType: "",
    plantAmount: "",
};

const AddTankPage = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [ formData, handleInputChange, handleSubmit ] = useCustomForm(initialValues, postNewTank);

    async function postNewTank() {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/tank/", formData, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            })
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="container">
          <h2>{user.username}</h2>
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Tank Name:{" "}
              <input
                type="text"
                name="tankName"
                value={formData.tankName}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Water Type:{" "}
              <input
                type="text"
                name="waterType"
                value={formData.waterType}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Tank Size:{" "}
              <input
                type="text"
                name="tankSize"
                value={formData.tankSize}
                onChange={handleInputChange}
              />
            </label>            
            <label>
              Fish Type:{" "}
              <input
                type="text"
                name="fishType"
                value={formData.fishType}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Fish Amount:{" "}
              <input
                type="text"
                name="fishAmount"
                value={formData.fishAmount}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Plant Type:{" "}
              <input
                type="text"
                name="plantType"
                value={formData.plantType}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Plant Amount:{" "}
              <input
                type="text"
                name="plantAmount"
                value={formData.plantAmount}
                onChange={handleInputChange}
              />
            </label>
            <button>Add Tank ⌐■_■</button>
          </form>
        </div>
      );

}

export default AddTankPage;