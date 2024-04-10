require("dotenv").config();
const express = require("express")
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require("cors")
const app = express();
const datas = require('./data')
// const User = require("./schema/user")
app.use(cookieParser());

// Use express-session middleware for session management
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    // Set session cookie options here (e.g., maxAge, secure, etc.)
    // For example, to set the cookie to expire after 1 hour:
    // maxAge: 3600000 // 1 hour in milliseconds
  },
}));
const dbConnection = require("./database/db");
const stockdata = require("./stocknews");

app.use(express.json());
app.use(cors())
app.use(require("./routes/register"))
app.use(require("./routes/login"))
app.use(require("./routes/test"))
dbConnection();
app.get("/" , (req,res)=>{
    res.send(" welcome from auth server for stock price prediction")
})

app.post("/getstockinfo" , (req,res)=>{
  const {code}  = req.body
  const info  = datas[code]
  res.status(200).json({info : info })
})

app.post("/getstocknews" , (req,res)=>{
  const {code}  = req.body
  const info  = stockdata[code]

  res.status(200).json({info : info })
})

let PORT = process.env.PORT || 3002
app.listen(PORT,()=>{
     
    console.log(`Server Listening.. On Port ${PORT}`);
})