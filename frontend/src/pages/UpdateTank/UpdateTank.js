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
            Water Temp Check Last Done:{" "}
            <input
              type="text"
              name="waterTempChkLastDone"
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
              name="nextTempChkDue"
              value={formData.nextTempChkDue}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Water Change Last Done:{" "}
            <input
              type="text"
              name="waterChangeLastDone"
              value={formData.waterChangeLastDone}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Amount Percent:{" "}
            <input
              type="text"
              name="amountPercent"
              value={formData.amountPercent}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Next Water Change Due:{" "}
            <input
              type="text"
              name="nextWaterChangeDue"
              value={formData.nextWaterChangeDue}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Plant Care Last Done:{" "}
            <input
              type="text"
              name="plantCareLastDone"
              value={formData.plantCareLastDone}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Next Plant Chk Due:{" "}
            <input
              type="text"
              name="nextPlantChkDue"
              value={formData.nextPlantChkDue}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Water Levels Check Last Done:{" "}
            <input
              type="text"
              name="waterLevelsChkLastDone"
              value={formData.waterLevelsChkLastDone}
              onChange={handleInputChange}
            />
          </label>
          <label>
            PH Level:{" "}
            <input
              type="text"
              name="phLevel"
              value={formData.phLevel}
              onChange={handleInputChange}
            />
          </label>            
          <label>
            Nitrite Level:{" "}
            <input
              type="text"
              name="nitriteLevel"
              value={formData.nitriteLevel}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Nitrate Level:{" "}
            <input
              type="text"
              name="nitrateLevel"
              value={formData.nitrateLevel}
              onChange={handleInputChange}
            />
          </label>
          <label>
            O2 Level:{" "}
            <input
              type="text"
              name="o2Level"
              value={formData.o2Level}
              onChange={handleInputChange}
            />
          </label> 
          <label>
            Next Levels Chk Due:{" "}
            <input
              type="text"
              name="nextLevelsChkDue"
              value={formData.nextLevelsChkDue}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Tank Notes:{" "}
            <input
              type="text"
              name="tankNotes"
              value={formData.tankNotes}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={putUpdateTank}>Add Tank ⌐■_■</button> 
        </form>
      </div>
    );

}

export default UpdateTankPage;

//create input data as null for each input-figure that out-update form to appen data to each 
// create for with null for blank things not required