import React, { Component } from 'react';
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

class Studash extends Component {
  state = { stu_name: "", stu_id: "", gender:"",email:"",dob:"",
            mobile:"",addr:"",school:"",percent:"",branch:"",sec:"",cur_sem:"",cgpa:""};
  
  info = () => {
    
    var value=this;

    var data= new URLSearchParams();
    data.append('uname',sessionStorage.getItem('uname'));

    fetch('http://localhost:8000/studetails', {
      method: 'post',
      body:data
    }).then(function (response) {
      return response.json();

    }).then(function (json) {
      value.setState({ stu_name: json[0].sname })
      value.setState({ stu_id: json[0].sid })
      value.setState({ gender: json[0].sg })
      value.setState({ dob: json[0].sdob })
      value.setState({ mobile: json[0].smobno })
      value.setState({ addr: json[0].sadd })
      value.setState({ school: json[0].shs })
      value.setState({ percent: json[0].shp })
      value.setState({ branch: json[0].sc })
      value.setState({ sec: json[0].ss })
      value.setState({ cur_sem: json[0].scs })
      value.setState({ cgpa: json[0].scgpa })
      value.setState({ email: json[0].semail })
    })
  };

  componentDidMount=()=>{
    this.info() 
  } 

	render() {
		return (
			<div>
          <style dangerouslySetInnerHTML={{__html: "\n\nul {\n  list-style-type: none;\n  margin: -8px;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli {\n  padding:10px;\n  float: left;\n}\n\nli a{\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover {\n  background-color: white;\n}\n\nli a.exit:hover{\n    background-color: red;\n}\n\ntable{\n  border: 3px solid black;\n  padding: 20px;\n  background-color: #eca6bb;\n  border-collapse: collapse;\n}\n\nth{\n  border: 3px solid black;\n  text-align: left;\n  padding: 15px;\n  font-size: 20px;\n  border-collapse: collapse;\n}\n\ntd {\n    text-align: left;\n  border: 3px solid black;\n  padding: 15px;\n  border-collapse: collapse;\n}\n\nth.heading{\n    text-align: center;\n    background-color: #b63a60;\n    font-size: 30px;\n}\n\n.personal_info{\n    margin-top: 50px;\n    margin-left: 300px;\n    margin-right: 300px;\n}\n\n.edu_info{\n    margin-top: 50px;\n    margin-bottom: 50px;\n    margin-left: 300px;\n    margin-right: 300px;\n}\n\n" }} />
          <ul>
            <li><a href="">Dashboard</a></li>
            <li><a href="/applypass">Apply Pass</a></li>
            <li><a href="/passhist">View Pass History</a></li>
            <li><a href="#news">Update Account</a></li>
            <li style={{float: 'right'}}><a href="#news" className="exit">Signout</a></li>
          </ul>
          <div>
            <center><h1>{this.state.stu_name} {this.state.stu_id} </h1></center>
          </div>
          <div className="personal_info">
            <table style={{width: '100%'}}>
              <tbody><tr>
                  <th colSpan={2} className="heading">Personal Details</th>
                </tr><tr>
                  <th>Student Name </th>
                  <td>{this.state.stu_name}</td> 
                </tr>
                <tr>
                  <th>Student ID </th>
                  <td>{this.state.stu_id}</td> 
                </tr>
                <tr>
                  <th>Gender </th>
                  <td>{this.state.gender}</td> 
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{this.state.email}</td>
                </tr>
                <tr>
                  <th>Date of Birth</th>
                  <td>{this.state.dob}</td>
                </tr>
                <tr>
                  <th>Mobile</th>
                  <td>{this.state.mobile}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{this.state.addr}</td>
                </tr>
              </tbody></table>
          </div>
          <br />
          <br />
          <hr />
          <div className="edu_info">
            <table style={{width: '100%'}}>
              <tbody><tr>
                  <th colSpan={2} className="heading">Educational Details</th>
                </tr><tr>
                </tr><tr>
                  <th>High school</th>
                  <td>{this.state.school}</td> 
                </tr>
                <tr>
                  <th>High school percentage</th>
                  <td>{this.state.percent}</td> 
                </tr>
                <tr>
                  <th>Branch</th>
                  <td>{this.state.branch}</td> 
                </tr>
                <tr>
                  <th>Section</th>
                  <td>{this.state.sec}</td>
                </tr>
                <tr>
                  <th>Current semester</th>
                  <td>{this.state.cur_sem}</td>
                </tr>
                <tr>
                  <th>Current CGPA</th>
                  <td>{this.state.cgpa}</td>
                </tr>
              </tbody></table>
          </div>
        </div>
		);
	}
}

export default Studash;