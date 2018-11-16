import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../../ui/pages/LogIn/login-modal.js';
import '../../ui/pages/signup/signup.js';
import '../../ui/pages/signup/signup-modal/signup-modal.js';
import '../../ui/pages/main/utopia.js';

FlowRouter.route('/', {
    name: 'login',
    action() {
      BlazeLayout.render('utopia');
    },
  });

  FlowRouter.route('/signup', {
    name: 'signup',
    action() {
        AntiModals.overlay('signUp', {'data': {'example': this}});
    },
  });

  FlowRouter.route('/login', {
    name: 'login',
    action() {
        AntiModals.overlay('logIn', {'data': {'example': this}});
    },
  });