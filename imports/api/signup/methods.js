import { Meteor } from 'meteor/meteor';
import {User} from './collection';
import { Mongo } from 'meteor/mongo';
if (Meteor.isServer) {
    // This code only runs on the server
   
    Meteor.publish('user', function tasksPublication() {
      return User.find();
    });
   
  } 

  Meteor.methods({

  
    'user.insert'(uname,pwd,email) {
  console.log("inside insert")
        User.insert({
            username: uname,
            password: pwd,
            email : email,
            karma : '0',
            balance : '0',
        });
      },
           'user.remove'(uname) {
            console.log("in method remove...");
            User.remove(uname);
          },
          
          'user.findOne'(uname) {
            console.log("in method findone...");
           return User.findOne({"status":uname})
          },

          'user.login'(uname,pwd) {
            console.log("in method login...");
            let result = User.findOne({username:uname})
            if(result.password == pwd)
            {
                console.log("succesfully logged in !!!!")
            }

          }
          
      
  
  
    });
  