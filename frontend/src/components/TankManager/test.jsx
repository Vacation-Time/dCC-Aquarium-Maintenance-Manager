import React  from 'react';



class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default NameForm;

//#####################################
import React, { Component } from 'react';

class App extends Component {
	render() {
		var heading = ['Task', 'Interval', 'Status', 'Next Interval', 'Notes'];
		var body =
			[['Feeding', 'Water Temp Check', 'Water Change', 'Plant Care', 'Fisht Type/Amount']
			];
		return (
			<div >
				<Table heading={heading} body={body} />,
			</div>
		);
	}
}

class Table extends Component {
	render() {
		var heading = this.props.heading;
		var body = this.props.body;
		return (
			<table style={{ width: 800 }}>
				<thead>
					<tr>
						{heading.map(head => <th>{head}</th>)}
					</tr>
				</thead>
				<tbody>
					{body.map(row => <TableRow row={row} />)}
				</tbody>
			</table>
		);
	}
}

class TableRow extends Component {
	render() {
		var row = this.props.row;
		return (
			<tr>
				{row.map(val => <td>{val}</td>)}
			</tr>
		)
	}
}

export default App;
//#####################################
import React, {useState} from 'react';

function App() {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    function getData(event)
    {
        setData(event.target.value);
        setPrint(false)
        console.log(event.target.value);
    }
  return (
    <div className='App'>
        {
            print ? <h3>{data}</h3> :null
        }
      <input type='text' onChange={getData} />
      <button onClick={() => setPrint(true)}>Post</button>
    </div>
  );
}

export default App;

//#####################################
import React, {useEffect, useState} from 'react';
    
function App() {
    const [tankManager, setTankManager] = useState([]);
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
                    <td>Task</td>
                    <td>Status</td>
                    <td>Next Due Date/Time</td>
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
            <button onClick={updateTankManager}>Update Info</button>
        </div>

    </div>
);
}   
export default App;
