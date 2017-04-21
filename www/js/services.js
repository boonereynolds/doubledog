angular.module('starter.services', [])

// Hey Boone, I have set this up with some pre-loaded data
// Not sure what a dare actually consists of, so you may have to change the schema

.factory('Dares', function() {
  var dares = [{
    id: 0,
    task: 'Rob a bank.',
    difficulty: 2
  }, {
    id: 1,
    task: 'Participate in a hackathon',
    difficulty: 3
  }];

  return {
    all: function() {
      console.log("Getting all hard-coded dares", dares)
      return dares;
    },
    remove: function(dare) {
      console.log("Removing hard-coded dare with id", dare)
      dares.splice(dares.indexOf(dare), 1);
    },
    get: function(dareId) {
      console.log("Looking for hard-coded dare with id", dareId)
      for (var i = 0; i < dares.length; i++) {
        if (dares[i].id === parseInt(dareId)) {
          return dares[i];
        }
      }
      return null;
    }
  };
}

.factory('CompletedDares', function() {
  var completedDares = [{
    id:0,
    
    dare_id: 0,
    user_id: 0,
    picture_url: '../img/adam.jpg',
    completed_at: new Date()
  },{
    id:1,

    dare_id: 1,
    user_id: 1,
    picture_url: '../img/ben.jpg',
    completed_at: new Date()
  }{
    id:2,

    dare_id: 0,
    user_id: 2,
    picture_url: '../img/max.jpg',
    completed_at: new Date()
  }];

  return {
    all: function() {
      console.log("Getting all hard-coded completedDares", completedDares)
      return completedDares;
    },
    remove: function(dare) {
      console.log("Removing hard-coded dare with id", dare)
      completedDares.splice(completedDares.indexOf(dare), 1);
    },
    get: function(dareId) {
      console.log("Looking for hard-coded dare with id", dareId)
      for (var i = 0; i < completedDares.length; i++) {
        if (completedDares[i].id === parseInt(dareId)) {
          return completedDares[i];
        }
      }
      return null;
    }
  };
}

);

// This code is for firebase integration. It occurred to me that this might be confusing,
// so you can leave it out and just demo the hard-coded stuff. Keep in mind, the brackets
// are not matched up. If you want to switch to this code, you need to delete everything 
// from this comment to line 6.
