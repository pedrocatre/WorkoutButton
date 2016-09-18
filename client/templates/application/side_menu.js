Template.sideMenu.helpers({

    facebookId: function() {
        if(Meteor.user() && Meteor.user().profile && Meteor.user().profile.facebookId) {
            return Meteor.user().profile.facebookId;
        }
    },

    isOnline: function() {
        return Meteor.status().connected;
    }
});

Template.sideMenu.events({

    'click .training-link': function (event) {
        Router.go('training');
    },

    'click .workout-history-link': function (event) {
        Router.go('workoutSessionsList');
    },

    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});
