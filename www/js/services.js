angular.module('starter.services', [])

// Hey Boone, I have set this up with some pre-loaded data
// Not sure what a dare actually consists of, so you may have to change the schema

// .factory('Dares', function() {
//   var dares = [{
//     id: 0,
//     task: 'Rob a bank.',
//     difficulty: 2
//   }, {
//     id: 1,
//     task: 'Participate in a hackathon',
//     difficulty: 3
//   }];

//   return {
//     all: function() {
//       console.log("Getting all hard-coded dares", dares)
//       return dares;
//     },
//     remove: function(dare) {
//       console.log("Removing hard-coded dare with id", dare)
//       dares.splice(dares.indexOf(dare), 1);
//     },
//     add: function(task, difficulty) {
//       dare = {id: dares.length-1, task: task, difficulty: difficulty}
//       console.log("Adding a hard-coded dare", dare)
//       dares.push(dare);
//     },
//     get: function(dareId) {
//       console.log("Looking for hard-coded dare with id", dareId)
//       for (var i = 0; i < dares.length; i++) {
//         if (dares[i].id === parseInt(dareId)) {
//           return dares[i];
//         }
//       }
//       return null;
//     }
//   };
// }

// .factory('Users', function() {
//   var users = [{
//     id:0,
//     username: 'boone',
//     password: 'password'
//   },{
//     id:1,
//     username: 'guStove',
//     password: 'password'
//   },{
//     id:2,
//     username: "ux-student-whose-name-i-dont-know",
//     password: 'password'
//   }];

//   return {
//     all: function() {
//       console.log("Getting all hard-coded users", users)
//       return users;
//     },
//     add: function(username, password) {
//       user = {id: users.length-1, username: username, password: password}
//       console.log("Adding a hard-coded user", user)
//       users.push(user);
//     },
//     remove: function(user) {
//       console.log("Removing hard-coded user with id", user)
//       users.splice(users.indexOf(user), 1);
//     },
//     get: function(userId) {
//       console.log("Looking for hard-coded user with id", userId)
//       for (var i = 0; i < users.length; i++) {
//         if (users[i].id === parseInt(userId)) {
//           return users[i];
//         }
//       }
//       return null;
//     }
//   };
// }

// .factory('CompletedDares', function() {
//   var completedDares = [{
//     id:0,

//     dare_id: 0,
//     user_id: 0,
//     picture_url: '../img/adam.jpg',
//     completed_at: new Date()
//   },{
//     id:1,

//     dare_id: 1,
//     user_id: 1,
//     picture_url: '../img/ben.jpg',
//     completed_at: new Date()
//   },{
//     id:2,

//     dare_id: 0,
//     user_id: 2,
//     picture_url: '../img/max.jpg',
//     completed_at: new Date()
//   }];

//   return {
//     all: function() {
//       console.log("Getting all hard-coded completedDares", completedDares)
//       return completedDares;
//     },
//     add: function(dare_id, user_id, picture_url) {
//       completedDare = {
//         id: completedDares.length-1,
//         dare_id: dare_id,
//         user_id: user_id,
//         picture_url: picture_url,
//         completed_at: new Date()
//       }
//       console.log("Adding a hard-coded completedDare", completedDare)
//       completedDares.push(completedDare);
//     },
//     remove: function(dare) {
//       console.log("Removing hard-coded completedDare with id", dare)
//       completedDares.splice(completedDares.indexOf(dare), 1);
//     },
//     get: function(dareId) {
//       console.log("Looking for hard-coded completedDare with id", completedDareId)
//       for (var i = 0; i < completedDares.length; i++) {
//         if (completedDares[i].id === parseInt(completedDareId)) {
//           return completedDares[i];
//         }
//       }
//       return null;
//     }
//   };
// }

// );

// This code is for firebase integration. It occurred to me that this might be confusing,
// so you can leave it out and just demo the hard-coded stuff. Keep in mind, the brackets
// are not matched up. If you want to switch to this code, you need to delete everything 
// from this comment to line 6.

var {firebaseRef} = require('./firebase')

.factory('Dares', function() {

  return {
    all: function() {
      console.log("Getting all dares")
      var daresRef = firebaseRef.child(`dares`)

      daresRef.once('value').then((data) => {
        var dares = data.val() || {}
        var parsedDares = []

        Object.keys(dares).forEach((dareId) => {
          parsedDares.push({
            id: dareId,
            ...dares[dareId]
          })

        return parsedDares
        })
      })
    },

    get: function(dareId) {
      console.log("Looking for dare with id", dareId)
      var daresRef = firebaseRef.child(`dares/${dareId}`)

      daresRef.once('value').then((data) => {
        var dare = data.val() || {}

        return dare
        })
      })
    },

    remove: function(dareId) {
      console.log("Removing dare with id", dareId)
      dares.splice(dares.indexOf(dare), 1);
    },
    add: function(task, difficulty) {
      dare = {id: dares.length-1, task: task, difficulty: difficulty}
      console.log("Adding dare", dare)
      dares.push(dare);
    }
  };
}

.factory('Users', function() {
  var users = [{
    id:0,
    username: 'boone',
    password: 'password'
  },{
    id:1,
    username: 'guStove',
    password: 'password'
  },{
    id:2,
    username: "ux-student-whose-name-i-dont-know",
    password: 'password'
  }];

  return {
    all: function() {
      console.log("Getting all hard-coded users", users)
      return users;
    },
    add: function(username, password) {
      user = {id: users.length-1, username: username, password: password}
      console.log("Adding a hard-coded user", user)
      users.push(user);
    },
    remove: function(user) {
      console.log("Removing hard-coded user with id", user)
      users.splice(users.indexOf(user), 1);
    },
    get: function(userId) {
      console.log("Looking for hard-coded user with id", userId)
      for (var i = 0; i < users.length; i++) {
        if (users[i].id === parseInt(userId)) {
          return users[i];
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
  },{
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
    add: function(dare_id, user_id, picture_url) {
      completedDare = {
        id: completedDares.length-1,
        dare_id: dare_id,
        user_id: user_id,
        picture_url: picture_url,
        completed_at: new Date()
      }
      console.log("Adding a hard-coded completedDare", completedDare)
      completedDares.push(completedDare);
    },
    remove: function(dare) {
      console.log("Removing hard-coded completedDare with id", dare)
      completedDares.splice(completedDares.indexOf(dare), 1);
    },
    get: function(dareId) {
      console.log("Looking for hard-coded completedDare with id", completedDareId)
      for (var i = 0; i < completedDares.length; i++) {
        if (completedDares[i].id === parseInt(completedDareId)) {
          return completedDares[i];
        }
      }
      return null;
    }
  };
}

);

