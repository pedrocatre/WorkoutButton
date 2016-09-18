Template.notFound.events({
    'click .back-to-training-btn': function(e) {
        e.preventDefault();
        Router.go('training');
    }
});