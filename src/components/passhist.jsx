import React, { Component } from 'react';
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

class Passhist extends Component {
    state = {count:1};
    
    infopass = () => {
      
      var value=this;
  
      var data= new URLSearchParams();
      data.append('uname',sessionStorage.getItem('uname'));
  
      fetch('http://localhost:8000/passhistory', {
        method: 'post',
        body:data
      }).then( (response) =>{
        return response.json();
  
      }).then( (json)=> {
        this.setState(()=>{
            return {passList : json}
        })
      }).then(()=>{
        console.log("in passlist",this.state.passList)

        var listUI = this.state.passList.map((element)=>{
          return (
              <tr>
                  <td>{value.state.count++}</td>
                  <td>{element.sid}</td>
                  <td>{element.sn}</td>
                  <td>{element.stype}</td>
                  <td>{element.sf}</td>
                  <td>{element.st}</td>
                  <td>{element.sm}</td>
                  <td>{element.sd}</td>
                  <td>{element.sl}</td>
              </tr>
          );
          
          })
          console.log(listUI)
          this.setState(()=>{
            return {listUI : listUI}
          })
      })
    };
  
    componentDidMount=()=>{
        
      this.infopass() 
    } 
  
      render() {
          return (
        <div>
            <style dangeruslySetInnerHTML={{__html: "\n\nul {\n  list-style-type: none;\n  margin: -8px;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli {\n  padding:10px;\n  float: left;\n}\n\nli a{\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover {\n  background-color: white;\n}\n\nli a.exit:hover{\n    background-color: red;\n}\n\ntable{\n  border: 3px solid black;\n  padding: 20px;\n  background-color: #eca6bb;\n  border-collapse: collapse;\n}\n\nth{\n  border: 3px solid black;\n  text-align: left;\n  padding: 15px;\n  font-size: 20px;\n  border-collapse: collapse;\n}\n\ntd {\n    text-align: left;\n  border: 3px solid black;\n  padding: 15px;\n  border-collapse: collapse;\n}\n\nth.heading{\n    text-align: center;\n    background-color: #b63a60;\n    font-size: 30px;\n}\n\n.personal_info{\n    margin-top: 50px;\n    margin-left: 300px;\n    margin-right: 300px;\n}\n\n.edu_info{\n    margin-top: 50px;\n    margin-bottom: 50px;\n    margin-left: 300px;\n    margin-right: 300px;\n}\n\n" }} />
            <div className="personal_info">
              <table style={{width: '100%'}}>
                <tbody><tr>
                    <th colSpan={2} className="heading">Pass History</th>
                  </tr>
                  <tr>
                    <th>S.No</th>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Pass Type</th>
                    <th>Pass From</th>
                    <th>Pass To</th>
                    <th>Pass Month</th>
                    <th>Pass Description</th>
                    <th>Proof Link</th>
                  </tr>
                  {this.state.listUI}
                  
                </tbody></table>
            </div>
            <br />
            <br />
            <hr />
            
        </div>
        );
      }
  }
  
  export default Passhist;


  