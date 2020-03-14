import React, { Component } from 'react';

class Applypass extends Component {
  state = { status:""};

  redirect =event=>{
    event.preventDefault();
    var value=this;

    var formdata= new FormData(document.getElementById("passform"));
    var data= new URLSearchParams();
    for (var pair of formdata) {
      data.append(pair[0], pair[1])
    }
    data.append('uname',sessionStorage.getItem('uname'));
    
    fetch('http://localhost:8000/passapply', {
      method: 'post',
      body: data
    }).then(function (response) {
      return response.json();

    }).then(function (json) {
      value.setState({status: json[0].su})
      if(value.state.status==="success")
      {
        alert('Your pass has been successfully applied !')
        window.history.pushState(null, "studash", "/studash");
        window.location.reload();
      }
      else
      {
        alert('Pass application failed...Check the pass details and retry again.')
      }
  })
};
	
	render() {
		return (
			<div>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <title>OD/ML</title>
          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.odlist{\n\tmax-width: 450px;\n\tfont-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\n}\n.odlist label{\n\tdisplay:block;\n\tmargin-bottom: 10px;\n}\n.odlist label > span{\n\tfloat: left;\n\twidth: 100px;\n\tcolor: #F072A9;\n\tfont-weight: bold;\n\tfont-size: 13px;\n\ttext-shadow: 1px 1px 1px #fff;\n}\n.odlist fieldset{\n\tborder-radius: 10px;\n\t-webkit-border-radius: 10px;\n\t-moz-border-radius: 10px;\n\tmargin: 0px 0px 10px 0px;\n\tborder: 1px solid #FFD2D2;\n\tpadding: 20px;\n\tbackground: #FFF4F4;\n\tbox-shadow: inset 0px 0px 15px #FFE5E5;\n\t-moz-box-shadow: inset 0px 0px 15px #FFE5E5;\n\t-webkit-box-shadow: inset 0px 0px 15px #FFE5E5;\n}\n.odlist fieldset legend{\n\tcolor: #FFA0C9;\n\tborder-top: 1px solid #FFD2D2;\n\tborder-left: 1px solid #FFD2D2;\n\tborder-right: 1px solid #FFD2D2;\n\tborder-radius: 5px 5px 0px 0px;\n\t-webkit-border-radius: 5px 5px 0px 0px;\n\t-moz-border-radius: 5px 5px 0px 0px;\n\tbackground: #FFF4F4;\n\tpadding: 0px 8px 3px 8px;\n\tbox-shadow: -0px -1px 2px #F1F1F1;\n\t-moz-box-shadow:-0px -1px 2px #F1F1F1;\n\t-webkit-box-shadow:-0px -1px 2px #F1F1F1;\n\tfont-weight: normal;\n\tfont-size: 12px;\n}\n.odlist textarea{\n\twidth:250px;\n\theight:100px;\n}\n.odlist input[type=text],\n.odlist input[type=date],\n.odlist input[type=datetime],\n.odlist input[type=number],\n.odlist input[type=search],\n.odlist input[type=time],\n.odlist input[type=url],\n.odlist input[type=email],\n.odlist select, \n.odlist textarea{\n\tborder-radius: 3px;\n\t-webkit-border-radius: 3px;\n\t-moz-border-radius: 3px;\n\tborder: 1px solid #FFC2DC;\n\toutline: none;\n\tcolor: #F072A9;\n\tpadding: 5px 8px 5px 8px;\n\tbox-shadow: inset 1px 1px 4px #FFD5E7;\n\t-moz-box-shadow: inset 1px 1px 4px #FFD5E7;\n\t-webkit-box-shadow: inset 1px 1px 4px #FFD5E7;\n\tbackground: #FFEFF6;\n\twidth:50%;\n\n}\n.odlist  input[type=submit],\n.odlist  input[type=button]{\n\tbackground: #EB3B88;\n\tborder: 1px solid #C94A81;\n\tpadding: 5px 15px 5px 15px;\n\tcolor: #FFCBE2;\n\tbox-shadow: inset -1px -1px 3px #FF62A7;\n\t-moz-box-shadow: inset -1px -1px 3px #FF62A7;\n\t-webkit-box-shadow: inset -1px -1px 3px #FF62A7;\n\tborder-radius: 3px;\n\tborder-radius: 3px;\n\t-webkit-border-radius: 3px;\n\t-moz-border-radius: 3px;\t\n\tfont-weight: bold;\n}\n.odlist .required{\n\tcolor:red;\n\tfont-weight:normal;\n}\n" }} />
          <div className="odlist">
            <form id='passform'>
              <fieldset>
                <label>Leave type</label>
                <select className="input-field" name="type">
                  <option value="OD">OD</option>
                  <option value="ML">ML</option>
                </select>
                <br /><br />
                <label htmlFor="field3"><span>Leave required from <span className="required">*</span></span><input type="date" className="input-field" name="sdate" defaultValue="sdate" required/></label>
                <label htmlFor="field4"><span>Leave required till <span className="required">*</span></span><input type="date" className="input-field" name="edate" defaultValue="edate" required/></label>
                <label htmlFor="field6"><span>Upload Document link <span className="required">*</span></span><input type="text" className="input-field" name="ulink" defaultValue="ulink" required/></label><br />
                <label htmlFor="field7"><span>Description <span className="required">*</span></span><input type="text" className="input-field" name="desc" defaultValue="desc" required/></label>
              </fieldset>
              <button type="submit" onClick={this.redirect}>Submit!</button>
            </form>
          </div>
        </div>
		);
	}
}

export default Applypass;