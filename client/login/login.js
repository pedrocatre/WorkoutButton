Template.login.events({
    'click #facebook-login': function(e) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    }
});

Template.login.helpers({
    userAccountCreationEnabled: function() {
        return false;
    }
});

Tracker.autorun(function() {
    var currentRoute = Router.current();

    if(currentRoute === null || currentRoute.route === undefined) {
        return;
    }

    if (currentRoute.route && currentRoute.route.getName() === 'login' && Meteor.user() !== null) {
        Router.go('training');
    }
});