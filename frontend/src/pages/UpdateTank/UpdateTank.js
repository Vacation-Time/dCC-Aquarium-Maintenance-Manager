import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm";

let initialValues = {
  tankName: "",
  waterType: "",
  tankSize: "",
  waterTempChkLastDone: "",
  value: "",
  nextTempChkDue: "",
  waterChangeLastDone: "",
  amountPercent: "",
  nextWaterChangeDue: "",
  plantCareLastDone: "",
  nextPlantChkDue: "",
  waterLevelsChkLastDone: "",
  phLevel: "",
  nitriteLevel: "",
  nitrateLevel: "",
  o2Level: "",
  nextLevelsChkDue: "",
  tankNotes: "",
};

const UpdateTankPage = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [ formData, handleInputChange, handleSubmit ] = useCustomForm(initialValues, putUpdateTank);

    async function putUpdateTank() {
      console.log('formData', formData);
        try {
            let response = await axios.put("http://127.0.0.1:8000/api/tank/", formData, {
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
              Water Type:{" "}
              <input
                type="text"
                name="water_type"
                value={formData.waterType}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Tank Size:{" "}
              <input
                type="text"
                name="tank_size"
                value={formData.tankSize}
                onChange={handleInputChange}
              />
            </label>            
            <label>
              Water Temp Check Last Done:{" "}
              <input
                type="text"
                name="water_temp_chk_last_done"
                value={formData.waterTempChkLastDone}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Value:{" "}
              <input
                type="text"
                name="value"
                value={formData.value}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Next Temp Chk Due:{" "}
              <input
                type="text"
                name="next_temp_chk_due"
                value={formData.nextTempChkDue}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Water Change Last Done:{" "}
              <input
                type="text"
                name="water_change_last_done"
                value={formData.waterChangeLastDone}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Amount Percent:{" "}
              <input
                type="text"
                name="amount_percent"
                value={formData.amountPercent}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Next Water Change Due:{" "}
              <input
                type="text"
                name="next_water_change_due"
                value={formData.nextWaterChangeDue}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Plant Care Last Done:{" "}
              <input
                type="text"
                name="plant_care_last_done"
                value={formData.plantCareLastDone}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Next Plant Chk Due:{" "}
              <input
                type="text"
                name="next_plant_chk_due"
                value={formData.nextPlantChkDue}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Water Levels Check Last Done:{" "}
              <input
                type="text"
                name="water_levels_chk_last_done"
                value={formData.waterLevelsChkLastDone}
                onChange={handleInputChange}
              />
            </label>
            <label>
              PH Level:{" "}
              <input
                type="text"
                name="ph_level"
                value={formData.phLevel}
                onChange={handleInputChange}
              />
            </label>            
            <label>
              Nitrite Level:{" "}
              <input
                type="text"
                name="nitrite_level"
                value={formData.nitriteLevel}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Nitrate Level:{" "}
              <input
                type="text"
                name="nitrate_level"
                value={formData.nitrateLevel}
                onChange={handleInputChange}
              />
            </label>
            <label>
              O2 Level:{" "}
              <input
                type="text"
                name="o2_level"
                value={formData.o2Level}
                onChange={handleInputChange}
              />
            </label> 
            <label>
              Next Levels Chk Due:{" "}
              <input
                type="text"
                name="next_levels_chk_due"
                value={formData.nextLevelsChkDue}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Tank Notes:{" "}
              <input
                type="text"
                name="tank_notes"
                value={formData.tankNotes}
                onChange={handleInputChange}
              />
            </label>
          <button onClick={putUpdateTank}>Update Tank ⌐■_■</button> 
        </form>
      </div>
    );

}

export default UpdateTankPage;

//create input data as null for each input-figure that out-update form to appen data to each 
// create for with null for blank things not required