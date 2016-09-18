Template.accessDenied.events({
    'click .got-to-login-btn': function(e) {
        e.preventDefault();
        Router.go('login');
    }
});