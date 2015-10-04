if (Meteor.isClient) {

  // Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({

    'submit .test': function(event) {
      event.preventDefault();
      
      var birthYear = 1988;
      console.log("I just created a variable named birthYear and gave it the value of: " + birthYear);

      birthYear = event.target.year.value;

      console.log("I tried to set birthYear to equal to the year entered in the input. What I got was: " + birthYear );

      var currentYear = 2015;
      console.log("I created currentYear and set it as: " +currentYear);
      var age = currentYear - birthYear;
      console.log("I tried to create a new box called 'age' and set it to currentYear minus birthYear. Here is what I actually set it to: " + age);
    }

    // 'click button': function () {      
    //   Session.set('counter', Session.get('counter') + 1);
    // }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
