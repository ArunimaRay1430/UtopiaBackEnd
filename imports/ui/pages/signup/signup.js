
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import {User} from '../../../api/signup/collection';
import '../../../api/signup/methods';
import '../signup/signup-modal/signup-modal'
import '../LogIn/login-modal.js';
import "./signup.html"
Template.Sign_Up.onCreated(function bodyOnCreated() {
   
    Meteor.subscribe('user');
   
});


Template.Sign_Up.events({



    'click #reg': function (event) {
        event.preventDefault()
    console.log("in register")
    AntiModals.overlay('signUp', {'data': {'example': this}});
    },
    
    'click #login': function (event) {
        event.preventDefault()
        console.log("in login")
        AntiModals.overlay('logIn', {'data': {'example': this}});
    }
,

})

