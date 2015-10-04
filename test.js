if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);

  Template.hello.helpers({
    collection: function() {
      return TestCollection.find();
    }
  });

  Template.hello.events({

    'click .test': function() {
      console.log(".test function was called!");

    }
    // 'click button': function () {
    //   // increment the counter when button is clicked
    //   Session.set('counter', Session.get('counter') + 1);
    // }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

    // We are telling the computer:
    // If when you find the item TestCollection
    // and when you count it, it doesn't return
    // 1 or more, then do something. Else,
    // do something different. 
    if(!TestCollection.find().count()){
      
     return insertStartUpCollection();
    } else {
      return console.log();
    }
  });
}

TestCollection = new Mongo.Collection("testCollection");

/*================================================
=            SEE HOW ABSTRACION WORKS            =
================================================*/
  
function insertStartUpCollection() {

  // We create an array of names
  // that we want to be inserted 
  // into the collection

    var names = [
        'Bill',
        'James',
        'Steven'
    ];

    // We console.log the results 
    // so we can make sure it works

      console.log("I created var names and it shows you: " + names);

      // Creating a function to 
      // select a random number
      // between two variables that
      // we send it.

      function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      
      // Where the magic happens
      // We are saying 'since i is equal to 0,
      // and while i < 10, do the stuff between
      // the curly brackets, adding 1 to i
      // each time and keep doing this until
      // you get told to stop from inside 
      // or when i is no longer less than 10

      for(var i = 0; i < 10; i++){

        // We're passing getRandomInt 
        // a 0 for its min var and a
        // 2 for its max var. It does
        // it's function magic and gives us
        // 0, 1, or 2.

        var randomResult = getRandomInt(0,2);

        // Which we of course console.log
        // it to our terminal so we can see
        // what the code is actually doing

        console.log(randomResult);

        // Where the insert actually happens
        // We are telling it 'I want you to
        // insert a new collection object into
        // TestCollection and inside of this object
        // is an attribute called name which I
        // want you to give the value names[randomResult],
        // which should be Bill(0), James(1), or Steve (2)
        // and show me that is what happened after with
        // a console.log()

        TestCollection.insert( {
          name: names[randomResult]
        });

        console.log("I inserted " + names[randomResult] + " into a testcollection!");
      }
}


/*=====  End of SEE HOW ABSTRACION WORKS  ======*/
