const express = require('express');
const connectDB = require('./config/mDB');
const user = require("./routes/api/user");
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require("mongoose");


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


const app = express();
connectDB();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());


// Passport Config;
require("./config/passport")(passport);


app.use("/api/user", user);

const PORT = process.env.PORT || 5000;

app.get("/", (req,res)=>{
    res.send("Running")
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

