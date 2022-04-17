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

