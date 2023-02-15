const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors=require("cors");
const corsOptions = {
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "qlesscrud",
    port: 3306
});

  
app.get("/api/getComponents", (req,res) => {
    const sqlSelect = "SELECT * FROM websitecomponents"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getAboutText", (req,res) => {
    const sqlSelect = "SELECT * FROM websitetext"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.post("/api/insert", (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const sqlInsert = "INSERT INTO login_qless (email,password) VALUES (?,?);"
    const email = req.body.email
    const password = req.body.password
    db.query(sqlInsert,[email,password], (err, result) => {
        if (err)
        {
            return res.send(err);
        }
        else{
            console.log('email: %s, password: %s', email, password)
        }
        
    });
});

app.get("/api/get", (req,res) => {
    res.send("i am god")
});

app.get("/", (req, res) => {
        res.send("XDXDXD")
})

app.listen(3001, () => {
    console.log("running on port 3001")
})