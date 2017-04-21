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
      console.log("Getting all dares", dares)
      return dares;
    },
    remove: function(dare) {
      console.log("Removing dare with id", dare)
      dares.splice(dares.indexOf(dare), 1);
    },
    get: function(dareId) {
      console.log("Looking for dare with id", dareId)
      for (var i = 0; i < dares.length; i++) {
        if (dares[i].id === parseInt(dareId)) {
          return dares[i];
        }
      }
      return null;
    }
  };
});
