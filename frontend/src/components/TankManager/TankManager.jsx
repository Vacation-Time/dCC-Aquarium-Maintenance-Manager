import React from "react";
import {ExcelRenderer, OutTable} from 'react-excel-renderer';


fileHandler = (event) => {
    let fileObj = event.target.files[0];

    <div>
    <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}} /> 
    <button onClick={this.fileHandler.bind(this)}>Upload</button>
    </div>

    //just pass the file Obj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if(err){
        console.log(err);            
      }
      else{
        this.setState({
          cols: resp.cols,
          rows: resp.rows
        });
      }
    });               
    
    }

    <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
    
    
