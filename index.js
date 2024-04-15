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


const generateEmailTemplate = (name,modelurl) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Model Training Success</title>
          <style>
              /* Add your custom styles here */
              body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
              }
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  border: 1px solid #ccc;
                  border-radius: 5px;
                  background-color: #f9f9f9;
              }
              h1 {
                  color: #333;
              }
              p {
                  margin-bottom: 15px;
              }
              strong {
                  font-weight: bold;
              }
              footer {
                  margin-top: 30px;
                  text-align: center;
                  font-size: 12px;
                  color: #666;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>Model Training Success!</h1>
              <p>Dear ${name},</p>
              <p>We are pleased to inform you that your model has been successfully trained. Thank you for choosing StockTrade for your model training needs.</p>
              <p>you can check model prediction in <a href=${modelurl}>here</a></p>
              <p><strong>Please note:</strong> This is an automatically generated email. Kindly do not reply.</p>
              <footer>
                  <p>Regards,</p>
                  <p>StockTrade</p>
              </footer>
          </div>
      </body>
      </html>
  `;
};


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


app.post("/sendemail", async(req,res) => {
  console.log(req.body);
  const {email,user_name,modelurl} = req.body;
  const output = generateEmailTemplate(user_name,modelurl)
  var mailOptions = {
    from: "stocktradeappbcet@gmail.com",
    to: email,
    subject: "Model Information", // Subject line
    html: output, // plain text body
  };

  await transporter.sendMail(mailOptions)
  res.send("ok")

})

let PORT = process.env.PORT || 3002
app.listen(PORT,()=>{
     
    console.log(`Server Listening.. On Port ${PORT}`);
})

// https://stockpriceinterface.vercel.app/dashboard/mymodel?modelname=Ad_Netflix_NFLX_bm_661b4944333a8b3a19032b90_mukherjeeb_5&userid=bm_661b4944333a8b3a19032b90