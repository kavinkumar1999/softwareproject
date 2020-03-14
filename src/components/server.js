const express = require('express');
var cors = require('cors');
const app = express();
const port = 8000;
const mysql = require('mysql');
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
var mysqlConnection = mysql.createConnection({
	host: 'software.cbesvpot2wyw.us-east-1.rds.amazonaws.com',
	user: 'admin',
	password: 'password',
	database: 'software'
});

mysqlConnection.connect((err) => {
	if (!err) console.log('Connection succeeded.');
	else console.log('Unsuccessful \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.post("/login", cors(), (req, res) => {
	
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.set('Content-Type', 'text/html');
    
    var uname = req.body.uname;
    var pwd = req.body.pwd;
    
    if (uname && pwd) {
        
        if(uname.startsWith('cb.en.u4'))
        {
            mysqlConnection.query('SELECT studusername as su FROM studlogin WHERE studusername = ? AND AES_DECRYPT(STUDPSWD,"software") = ?', [uname, pwd], function(error, results, fields) {
                console.log(results);
                if (results.length > 0) {
                    // req.session.loggedin = true;
					// req.session.uname = uname;
					//var status='success';
					console.log("hi");
					console.log(results[0].su);
					res.send(results);
					
                    //res.redirect('http://localhost:3000/studash');
                    // res.end();
                } else {
					//status='fail';
					
					mysqlConnection.query('select "fail" as su from dual',function (error, results, fields) {
						console.log("hi");
						console.log(results[0].su);
						res.send(results);
					});
                    res.end();
                }			
            });
        }
        else if(uname.startsWith('cb.en.t'))
        {
			mysqlConnection.query('SELECT facusername as su FROM faclogin WHERE facusername = ? AND AES_DECRYPT(facpswd, "software") = ?',
			 [uname, pwd],
			  function(error, results, fields) {
                
                if (results.length > 0) {
                    // req.session.loggedin = true;
					// req.session.uname = uname;
					//var status='success';
					console.log(results[0].su)
					res.send(results);
					//res.redirect('http://localhost:3000/facdash');
					//res.send(status+uname)
					//console.log(status+uname)
                    res.end()
                } else {
					//status='fail'
					//res.send(status+uname)
					//res.send('Incorrect Username and/or Password!');
					//console.log(status+uname)
					mysqlConnection.query('select "fail" as su from dual',function (error, results, fields) {
						res.send(results);
					});
                    res.end()
                }			
            });
        }
        else {
            mysqlConnection.query('select "fail" as su from dual',function (error, results, fields) {
				res.send(results[0].su);
			});
            res.end();
        }
    }

	});
	
app.post("/studetails", function(req, res) {
	var user = req.body.uname;
	mysqlConnection.query(
		'select studemail as semail, studentid as sid,stuentname as sname,class as sc,sec as ss,dob as sdob,mobno as smobno,address as sadd,highschool as shs,gender as sg,hsperc as shp,currentsem as scs,cgpa as scgpa from studentdetail,studlogin where studentid=? and studlogin.studusername=?',
		[user,user],
		function(err, result, fields) {
			console.log(result);
			res.send(result);
			res.end();
		});
	});

app.post("/facdetails", function(req, res) {
	var user = req.body.uname;
	mysqlConnection.query(
		'select  facultyid as fid,facultyname as fn,dept as fd,classofadv as fc,dob as fdob,mobno as fno,gender as fg,quali as fq,address as fa,facemail as fenail from faclogin,facultydetail where faclogin.facusername=? and facultyid=?',
		[user,user],
		function(err, result, fields) {
			console.log(result);
			res.send(result);
			res.end();
		});
	});

app.post("/passapply", function(req, res) {

	var sname = req.body.uname;
	var ptype = req.body.type;
	var sdate = req.body.sdate;
	var edate = req.body.edate;
	var slink = req.body.ulink;
	var desc = req.body.desc;
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var ress=sdate.split("-");
	var ans=parseInt(ress[1])-1;
	var reqmonth=months[ans];

	console.log(ress);
	console.log(ans);
	console.log(reqmonth);
	
	mysqlConnection.query(
		'select stuentname as sn from studentdetail where studentid=?',
		[sname],
		function(err, result, fields) {
			console.log(sname);
			console.log(result);
			mysqlConnection.query('insert into pass(studid,studname,passtype,passfrom,passto,passmonth,passdec,passlink) values(?,?,?,?,?,?,?,?)',
			[sname,result[0].sn,ptype,sdate,edate,reqmonth,desc,slink],
			function(err, sresult, fields) {
				console.log("enter");
				mysqlConnection.query('select "success" as su from dual',function (error, tresults, fields) {
					res.send(tresults);
				});
			
			});
		});
	});

app.post("/passhistory", function(req, res) {
	console.log("hi");
	var user = req.body.uname;
	mysqlConnection.query(
		'select passid as spp,studid as sid,studname as sn,passtype as stype,passfrom as sf,passto as st,passmonth as sm,passdec as sd,passlink as sl,passstatus as sps from pass where studid=?',
		[user],
		function(err, result, fields) {
			console.log(result);
			res.send(result);
			res.end();
		});
	});

app.post("/facpasshistory", function(req, res) {
	console.log("hi");
	var user = req.body.uname;
	console.log(user);
	mysqlConnection.query(
		'select passid as spp,facultyid as fid,facultyname as fname ,studid as sid,studname as sn,passtype as stype,passfrom as sf,passto as st,passmonth as sm,passdec as sd,passlink as sl,passstatus as sps from passwithfacid where facultyid=?',
		[user],
		function(err, result, fields) {
			console.log(result);
			res.send(result);
			res.end();
		});
	});

app.post("/updatepass", function(req, res) {
	console.log("hi");
	var psd = req.body.pid;
	var stat = req.body.pstat;
	console.log(psd);
	console.log(stat);
	mysqlConnection.query(
		'UPDATE pass SET passstatus = ? WHERE passid=?',
		[stat,psd],
		function(err, result, fields) {
			res.end();
		});
	});

app.post('/roomtimetable', function(req, res) {
	var room = req.body.roomno;
	res.writeHead(200, { 'content-type': 'text/html' });
	mysqlConnection.query(
		'SELECT day as day,period1 as p1,period2 as p2,period3 as p3,period4 as p4,period5 as p5,period6 as p6,period7 as p7,period8 as p8,period9 as p9 FROM occupancy.room where room=?',
		[ room ],
		function(err, result, fields) {
			if (!err) {
				for (let i = 0; i < result.length; i++) {
					res.write(
						'<!DOCTYPE html> <head></head> <body> <h1> Day : </h1> <h4>' +
							result[i].day +
							'</h4> <h1>  Period 1: </h1> <h4>' +
							result[i].p1 +
							'</h4><h1>   Period 2: </h1><h4>' +
							result[i].p2 +
							'</h4> <h1>  Period 3: </h1> <h4>' +
							result[i].p3 +
							'</h4><h1>   Period 4: </h1><h4>' +
							result[i].p4 +
							'</h4> <h1>  Period 5: </h1> <h4>' +
							result[i].p5 +
							'</h4><h1>   Period 6: </h1><h4>' +
							result[i].p6 +
							'</h4> <h1>  Period 7: </h1> <h4>' +
							result[i].p7 +
							'</h4><h1>   Period 8: </h1><h4>' +
							result[i].p8 +
							'</h4><h1>   Period 9: </h1><h4>' +
							result[i].p9 +
							'</h4> <hr> </body>'
					);
				}
			}
		}
	);
	console.log(room);
});
function checkfree(period, pno) {
	var str = '';
	if (period === 'Free') {
		str = '<h1>  Period ' + pno + ': </h1> <h4>' + period + '</h4>';

		return str;
	} else {
		str = '';
		return str;
	}
}
app.post('/freeslotsfaculty', function(req, res) {
	var fid = req.body.fid;
	var sem = req.body.sem;
	console.log(fid + ' hola2 ' + sem);
	res.writeHead(200, { 'content-type': 'text/html' });
	mysqlConnection.query(
		'SELECT day as day,period1 as p1,period2 as p2,period3 as p3,period4 as p4,period5 as p5,period6 as p6,period7 as p7,period8 as p8,period9 as p9 FROM occupancy.faculty where sem=? and fname=(select fname from facultyid where fid=?)',
		[ sem, fid ],
		function(err, result, fields) {
			if (!err) {
				for (let i = 0; i < result.length; i++) {
					res.write(
						'<!DOCTYPE html> <head></head> <body> <h1> Day : </h1> <h4>' +
							result[i].day +
							'</h4> ' +
							checkfree(result[i].p1, 1) +
							checkfree(result[i].p2, 2) +
							checkfree(result[i].p3, 3) +
							checkfree(result[i].p4, 4) +
							checkfree(result[i].p5, 5) +
							checkfree(result[i].p6, 6) +
							checkfree(result[i].p7, 7) +
							checkfree(result[i].p8, 8) +
							checkfree(result[i].p9, 9) +
							'</h4> <hr> </body>'
					);
				}
			}
		}
	);
	console.log('hola2');
});
app.listen(port, () => console.log(`Example app listening on port port!`));
