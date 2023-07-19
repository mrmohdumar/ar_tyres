const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user");


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/user', userRoutes)


// Connection with Database
const url = "mongodb+srv://aliarsalan786:Arsalan778866@tyres.ngcdtda.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.PORT || 8000;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true }) //pending
  .then(() =>
    app.listen(port, () => {
      console.log(`Server is up and running on port ${port}`);
    })
  ) //fulfilled
  .catch((err) => console.log("Error -->", err.message)); //rejected



// mongoose.set('useFindAndModify', false)

