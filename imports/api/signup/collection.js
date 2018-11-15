
import {
    Mongo
} from 'meteor/mongo';

export const User = new Mongo.Collection('user');
User.schema = new SimpleSchema({
    username: {type: String},
    password: {type: String},
    email : {type: String},
    karma : {type: String},
    balance : {type: String},
  });