import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm";

let initialValues = {
    tankName: "",
    fishType: "",
    fishAmount: "",
    fishNotes: "",
};

const AddFishPage = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [ formData, handleInputChange, handleSubmit ] = useCustomForm(initialValues, postNewFish);

    async function postNewFish() {
      console.log('formData', formData);
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/fish/", formData, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            })
            navigate("/");
            console.log(response);
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
                name="tank_name"
                value={formData.tankName}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Fish Type:{" "}
              <input
                type="text"
                name="fish_type"
                value={formData.fishType}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Fish Amount:{" "}
              <input
                type="text"
                name="fish_amount"
                value={formData.fishAmount}
                onChange={handleInputChange}
              />
            </label>            
            <label>
              Fish Notes:{" "}
              <input
                type="text"
                name="fish_notes"
                value={formData.fishNotes}
                onChange={handleInputChange}
              />
            </label>
            <button onClick={postNewFish}>Add Fish ⌐■_■</button> 
          </form>
        </div>
      );

}

export default AddFishPage;

//create input data as null for each input-figure that out-update form to appen data to each 
// create for with null for blank things not required