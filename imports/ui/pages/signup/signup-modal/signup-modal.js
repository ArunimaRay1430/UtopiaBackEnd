import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import "../../../stylesheets/utopia.css";
import './signup-modal.html';
import '../../../../api/signup/methods';
import {User} from '../../../../api/signup/collection';
// Store the example being passed to the modal.
Template.signUp.onCreated(function () {
  console.log("---",this.data.example)
  this.example = this.data.example;
  Meteor.subscribe('user');
});

// Setup event handling.
Template.signUp.events({
  
  'click #close-modal'() {
    
    AntiModals.dismissAll();
  },
  // Submitting the form in the modal window.
  'click #reg-modal': function (event) {
    event.preventDefault()
    var uname = $('#uname').val()
    var pwd = $('#pwd').val()
    var email =$('#eml').val()
   
    console.log(uname)
    console.log(pwd)
   Meteor.call('user.insert',uname,pwd,email)
   AntiModals.dismissAll();
},
   

});