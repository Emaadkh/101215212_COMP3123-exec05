const express = require('express');
const app = express();
const router = express.Router();

const fs = require("fs");
const path = require("path");

const SERVER_PORT = 8081;

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.sendFile('home.html', {root: __dirname});
});

/*
- Return all details from user.json file to client as JSON format
*/
let ReadAllDetailsFromJSONFile = fs.readFileSync(path.resolve(__dirname, "user.json"));

let UserData = JSON.parse(ReadAllDetailsFromJSONFile);


router.get('/profile', (req,res) => {
  res.send(UserData);
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req,res) => {
  let username = req.query.username;
  let passswordUsername = req.query.password;

  let dataFormatJSON = fs.readFileSync(path.resolve(__dirname, "user.json"));
  let dataUser = JSON.parse(dataFormatJSON);


  let addedUsernamJSONFile = passswordUsernam.username;
  let addedPasswordJSONFile = dataUser.password;

  if (addedUsernamJSONFile === username && addedPasswordJSONFile === passswordUsername){
    res.json({
      status: true,
      message: "User is Valid",
    });
  }else if (addedUsernamJSONFile !== username){
    res.json({
      status: false,
      message: "User Name is Not Valid",
    });
  }else if (addedPasswordJSONFile !== passswordUsername){
    res.json({
      satus: false,
      message: "Password is not Valid",
    });
  }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  res.setHeader("Content.type", "text/html");
  res.send(`${req.params.username} logout.`);

});

app.use('/', router);

app.listen(SERVER_PORT, () => {
  console.log(`Web Server is listening at port at http://localhost:${SERVER_PORT}`);

});

