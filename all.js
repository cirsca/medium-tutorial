// if (Meteor.isClient) {

//   Session.setDefault('counter', 0);

//   Template.hello.helpers({

//     // I am giving a box called
//     // 'counter' and I am telling 
//     // you inside of this box is 
//     // a 'function' which is a list 
//     // of instructions for this box.
//     counter: function () {

//       // Between these two curly
//       // brackets are your instructions

//       // I am telling you to make
//       // the value of the box
//       // 'counter' to equal what 
//       // you get when you look at
//       // the box 'counter' that is
//       // found inside of the bigger 
//       // box named 'Session'
//       return Session.get('counter');
//     }
//   });

//   Template.hello.events({

//     // I am telling you that 
//     // whenever anyone ever
//     // 'clicks' on the trigger
//     // that is called 'button'
//     // I want you to do something
//     // and those instructions are
//     // found between the curly brackets
//     // If you run into the command
//     // 'return', regardless if 
//     // anything is after that, 
//     // return the information
//     // I need and stop.
//     'click button': function () {
      
//       // I'm telling you to 'set'
//       // the big box Session's 
//       // box 'counter' to equal
//       // to what you get when
//       // you get the current value
//       // of the box 'counter' and 
//       // add one to it. 
//       Session.set('counter', Session.get('counter') + 1);

//       // You don't see a return
//       // but you did find a '}'
//       // which, as you know, tells
//       // you that these instructions
//       // are over. 
//     }
//   });
// }

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }
