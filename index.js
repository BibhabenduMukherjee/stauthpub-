require("dotenv").config();
const express = require("express")
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require("cors")
const nodemailer = require('nodemailer')
const app = express();
const datas = require('./data')
const timeserise = require('./timeserise')
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

app.post("/getstocktimeserise" , (req,res)=>{
  const {code}  = req.body
  const t  = timeserise[code]
  const tabledata = [];
  for(let i=0; i <= 6; i++){
   // let n = time
    //let close = timeserise[code].Close[]
    let open = timeserise[code].Open[i]
    let high = timeserise[code].High[i]
    let low = timeserise[code].Low[i]
    const obj = {
      open,high , low
    }
    tabledata.push(obj)
  }
  res.status(200).json({info : t , tabledata })
})
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "stocktradeappbcet@gmail.com",
    pass: process.env.PASS,
  },
});
var output =
`
    
    <p>Successfully  Trained !! Thanks for your first model training </p>
   
    
    <p><strong>This is an automatically generated mail. Please do not reply back.</strong></p>
    
    <p>Regards,</p>
    <p>StockTrade</p>
`;

app.post("/sendemail", (req,res) => {
  const {email} = req.body;
  var mailOptions = {
    from: "stocktradeappbcet@gmail.com",
    to: email,
    subject: "Email Verification", // Subject line
    html: output, // plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      return console.log(err);
    }
    console.log(info);
  });
  res.send("ok")

})

let PORT = process.env.PORT || 3002
app.listen(PORT,()=>{
     
    console.log(`Server Listening.. On Port ${PORT}`);
})

// https://stockpriceinterface.vercel.app/dashboard/mymodel?modelname=Ad_Netflix_NFLX_bm_661b4944333a8b3a19032b90_mukherjeeb_5&userid=bm_661b4944333a8b3a19032b90