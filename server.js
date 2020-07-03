const express = require('express');
const connectDB = require('./config/mDB');
const user = require("./routes/api/user");
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require("mongoose");
const path = require('path');
const { resolve } = require('path');

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

// serve static assets in production

if(process.env.NODE_ENV == 'prouction'){

    app.use(express.static('client/build'));
}

app.get('*', (req,res) => {
    res.sendFile(path,resolve(__dirname, 'client', 'build','index.html'))
})



const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

