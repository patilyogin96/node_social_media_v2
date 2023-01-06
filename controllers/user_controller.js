const User = require('../models/user')

module.exports.profile = function(req,res){
    res.render('profile' , {
        title:"Profile"
    })
}


// render sign in page

module.exports.signUp = function(req,res){
    res.render('user_sign_up' , {
        title:"Social | Sign Up"
    })
}

module.exports.signIn = function(req , res){
    res.render("user_sign_in" , {
        title:"Sign In"
    })
}


// create action for signup

module.exports.create = function(req,res){

    if(req.body.password != req.body.confirm_password){
        return res.redirect('back')
    }
    User.findOne({email:req.body.email}, function(err , user){
        if(err){
            console.log("err in sign up" , err);
            return 
        }
        if(!user){
            User.create(req.body , function(err , user){
                if(err){
                    console.log("err in creating user" , err);
                    return
                    // return res.redirect('back')
                }
                else{
                    res.redirect('/users/sign-in')
                }
            })
        }
       

    })

    
    // todo later
}

module.exports.createSession = function(req, res){
    // todo later
    res.redirect('/')
}