if (Meteor.isClient) {

  Template.test.helpers({
    collection: function() {
      return Friends.find();
    }
  });

  Template.test.events({

    'submit #friends': function(event) {
      event.preventDefault();
      console.log("Form #friends was submitted!");
      var firstName = event.target.firstName.value;
      var lastName = event.target.lastName.value;
      var phoneNumber = event.target.phoneNumber.value;
      var birthYear = event.target.birthYear.value;

      console.log("I got some values! I tried setting them to new variables. Let's check that!");
      console.log("I got " + firstName + " for firstName");
      console.log("I got " + lastName + " for lastName");
      console.log("I got " + phoneNumber + " for phoneNumber");
      console.log("I got " + birthYear + " for birthYear");

      Friends.insert({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        birthYear: birthYear
      });

    }

  });
}

if (Meteor.isServer) {

}

Friends = new Mongo.Collection('friends');

/*================================================
=            SEE HOW ABSTRACION WORKS            =
================================================*/
  


/*=====  End of SEE HOW ABSTRACION WORKS  ======*/
