import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import "../../stylesheets/utopia.css";
import './login-modal.html';
import '../../../api/signup/methods';
import { User } from '../../../api/signup/collection';
// Store the example being passed to the modal.
Template.signUp.onCreated(function () {
    console.log("---", this.data.example)
    this.example = this.data.example;
    Meteor.subscribe('user');
});



Template.logIn.events({

    'click #close-modal'() {

        AntiModals.dismissAll();
    },

    'click #login-modal': function (event) {
        event.preventDefault()
        var uname = $('#uname').val()
        var pwd = $('#pwd').val()


        console.log(uname)
        console.log(pwd)
        Meteor.call('user.login', uname, pwd)
        AntiModals.dismissAll();
    },


});