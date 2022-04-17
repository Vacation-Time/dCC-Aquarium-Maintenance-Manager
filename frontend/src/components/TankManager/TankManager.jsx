    import React, {useEffect, useState} from 'react';
    
    function App() {
        const [tankManager, setTankManager] = useState();
        const [foodSchedule, setFoodSchedule] = useState();
        const [waterTempCheck, setWaterTempCheck] = useState();
        const [waterChange, setWaterChange] = useState();
        const [plantCare, setPlantCare] = useState();
        const [scheduleNotes, setScheduleNotes] = useState();
        const [mxManagerId, setMxManagerId] = useState();


        useEffect(() => {
            getTankManagers();
        }, []);
        function getTankManagers() {
            fetch('http://127.0.0.1:8000/api/mxmanager').then(res => res.json())
                .then(data => {
                    console.log(data);
                    setTankManager(data);
                    setFoodSchedule(data.foodSchedule);
                    setWaterTempCheck(data.waterTempCheck);
                    setWaterChange(data.waterChange);
                    setPlantCare(data.plantCare);
                    setScheduleNotes(data.scheduleNotes);
                    setMxManagerId(data.mxManagerId);
                })
             
        }
    
    function selectTank(id) 
    {
        let item=tankManager[id-1];
        setFoodSchedule(item.foodSchedule);
        setWaterTempCheck(item.waterTempCheck);
        setWaterChange(item.waterChange);
        setPlantCare(item.plantCare);
        setScheduleNotes(item.scheduleNotes);
        setMxManagerId(item.mxManagerId);
    }

    function updateTankManager() 
    {
        let item={foodSchedule, waterTempCheck, waterChange, plantCare, scheduleNotes};
        console.log("item",item);
        fetch(`http://127.0.0.1:8000/api/tank/${mxManagerId}/`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((res)=>{
            requestAnimationFrame.json().then((res)=>{
                console.log(res);
                getTankManagers();
            })
         
        })
    }
    return (
        <div className="App">
            <h1>Update User With API</h1>
            <table border="1" style={{ float: 'left' }}>
                <tbody>
                    <tr>
                        <td>mxManagerId</td>
                        <td>Food Schedule</td>
                        <td>Water Temp Check</td>
                        <td>Water Change</td>
                        <td>Plant Care</td>
                        <td>Notes</td>
                    </tr>
                    {
                    tankManager.map((item, i) => 
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.foodSchedule}</td>
                            <td>{item.waterTempCheck}</td>
                            <td>{item.waterChange}</td>
                            <td>{item.plantCare}</td>
                            <td>{item.notes}</td>
                            <td>{item.mxManagerId}</td>
                            <td><button onClick={() => selectTank(tankManager.id)}>Update</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div>
                <input type="text" value={foodSchedule} onChange={(e)=>{setFoodSchedule(e.target.value)}} /><br></br>
                <input type="text" value={waterTempCheck} onChange={(e)=>{setWaterTempCheck(e.target.value)}} /><br></br>
                <input type="text" value={waterChange} onChange={(e)=>{setWaterChange(e.target.value)}} /><br></br>
                <input type="text" value={plantCare} onChange={(e)=>{setPlantCare(e.target.value)}} /><br></br>
                <input type="text" value={scheduleNotes} onChange={(e)=>{setScheduleNotes(e.target.value)}} /><br></br>
                <button onClick={updateTankManager}>Update</button>
            </div>

        </div>
    );
}   
export default App;
