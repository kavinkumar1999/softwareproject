import React, { Component } from 'react';


class Facdash extends Component {
  state = { fac_name: "", fac_id: "", gender:"Male",email:"",qual:"",
            dob:"",mobile:"",addr:"",advisor_for:""};
  
  info = () => {
    
    var value=this;
    // console.log("hi")
    var data= new URLSearchParams();
    data.append('uname',sessionStorage.getItem('uname'));

    fetch('http://localhost:8000/facdetails', {
      method: 'post',
      body:data
    }).then(function (response) {
      return response.json();

    }).then(function (json) {
      value.setState({ fac_name: json[0].fn })
      value.setState({ fac_id: json[0].fid })
      value.setState({ gender: json[0].fg })
      value.setState({ email: json[0].fenail })
      value.setState({ qual: json[0].fq })
      value.setState({ advisor_for: json[0].fd+'-'+json[0].fc })
      value.setState({ dob: json[0].fdob })
      value.setState({ mobile: json[0].fno })
      value.setState({ addr: json[0].fa })
    })
    // event.preventDefault();
    
  };

  signout = () => {
    sessionStorage.clear()
    window.history.pushState(null, null, "");
    window.location.reload();  
  };
  
  componentDidMount=()=>{
    this.info()
  }


	render() {
		return (
			<div>
        <style dangerouslySetInnerHTML={{__html: "\n\nul {\n  list-style-type: none;\n  margin: -8px;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli {\n  padding:10px;\n  float: left;\n}\n\nli a{\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover {\n  background-color: green;\n}\n\nli a.exit:hover{\n    background-color: red;\n}\n\ntable{\n  border: 3px solid black;\n  padding: 20px;\n  background-color: #c1e1f4;\n  border-collapse: collapse;\n}\n\nth{\n  text-align: left;\n  border: 3px solid black;\n  padding: 15px;\n  font-size: 20px;\n  border-collapse: collapse;\n}\n\ntd {\n  border: 3px solid black;\n  padding: 15px;\n  border-collapse: collapse;\n}\n\nth.heading{\n  text-align: center;\n    font-size: 30px;\n    background-color: #1663ae;\n}\n\n.personal_info{\n    margin-top: 100px;\n    margin-left: 300px;\n    margin-right: 300px;\n}\n\n.edu_info{\n    margin-top: 50px;\n    margin-bottom: 50px;\n    margin-left: 300px;\n    margin-right: 300px;\n}\n\n" }} />
        <ul>
          <li><a href="">Dashboard</a></li>
          <li><a href="/facpass">Pass History</a></li>
          <li><a href="#news">Update Account</a></li>
          <li style={{float: 'right'}}><a href="#news" className="exit">Signout</a></li>
        </ul>
        <div className="personal_info">
          <table style={{width: '100%'}}>
            <tbody><tr>
                <th colSpan={2} className="heading">Faculty Dashboard</th>
              </tr><tr>
                <th>Faculty Name </th>
                <td>{this.state.fac_name}</td> 
              </tr>
              <tr>
                <th>Faculty ID</th>
                <td>{this.state.fac_id}</td> 
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
                <th>Qualifiaction</th>
                <td>{this.state.qual}</td>
              </tr>
              <tr>
                <th>Advisor for</th>
                <td>{this.state.advisor_for}</td>
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
      </div>
		);
	}
}

export default Facdash;