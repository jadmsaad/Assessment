const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../../Models/User");
const config = require("config");
const {check, validationResult} = require('express-validator');








router.post("/login",

[

    check('username', 'username name is required').notEmpty(),   
    check('password', 'password is required').notEmpty()
],

async(req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
try{
    let user = await User.findOne({username: req.body.username});

    if(!user){
        return res.status(404).json({errors: [{message: "user doesn't exist please register"}]});
    }

    const isMatch = await bcrypt.compare(req.body.password,user.password);
    if(!isMatch){
        return res.status(400).json({errors: [{message: "Invalid Password"}]});
    }

    const payload ={
        id: user.id
    }
      // Sign Token
      jwt.sign(
        payload,
        config.get("secret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token: "Bearer " + token
          });
        }
      );
    }
    catch(err){
        return res.status(400).json({errors: [{message: ""+err }]})
    }


}

);






router.post("/create",

[
    check('first_name', 'first name is required').notEmpty(),
    check('last_name', 'last name is required').notEmpty(),
    check('username', 'username name is required').notEmpty(),   
    check('email', 'valid email required').isEmail(),
    check('password', 'password is required').notEmpty()
],

    async (req,res) => {
        
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        

    try{
        
        let user = await User.findOne({username: req.body.username});

        if(user) {
            return res.status(400).json({errors: [{message: "user already exists"}]});
        }
        else {
            
            let newUser = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });


            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => {
                      const payload = {
                        id: user.id,
                        
                      }; // create jwt paylod
        
                      // Sign Token
                      jwt.sign(
                        payload,
                        config.get("secret"),
                        { expiresIn: 360000 },
                        (err, token) => {
                          res.status(200).json({
                            token: "Bearer " + token
                          });
                        }
                      );
                    })
                    .catch(err => window.alert('error: ',err));
                });
              });

            
            }
        }
        catch(err){
            return res.status(500);
        }
        return res.status(200);

    })



router.post("/update", passport.authenticate("jwt", { session: false }),

    [
        check('first_name', 'first name is required').notEmpty(),
        check('last_name', 'last name is required').notEmpty(),
        check('username', 'username name is required').notEmpty(),   
        check('email', 'valid email required').isEmail()
    ],
    
        async (req,res) => {
            
            const errors = validationResult(req);
    
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
            }
    
            
    
        try{
            const userFields = {};
            if(req.body.first_name) userFields.first_name = req.body.first_name;
            if(req.body.last_name) userFields.last_name = req.body.last_name;
            if(req.body.username) userFields.username = req.body.username;
            if(req.body.email) userFields.email = req.body.email;

            // if(req.body.password) {
            //   const salt = await bcrypt.genSalt(10);
            //   userFields.password = await bcrypt.hash(req.body.password,salt);
            // };
            let userExists = await User.findById(req.user.id);

            if(userExists){
              const user = await User.findOneAndUpdate(
                {_id:req.user.id},
                {$set: userFields},
                {new: true}
              ).select("-password")
              return res.json(user);
            }
            return res.send("not found");
                
                
            }
            catch(err){
                return res.status(500);
            }
            
    
        })


router.get(
    "/current",
          passport.authenticate("jwt", { session: false }),
          async (req, res) => {

            try{
            // res.send("" + req.user);
            let user = await User.findById(req.user.id).select("-password");
            // res.send(user);
            if(user)  {
             return res.json(user);
            }
            
             return res.status(500);

            }
            catch(err){
             return res.status(500);
            }


          }
        
        );


module.exports = router;
