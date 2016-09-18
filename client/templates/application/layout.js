Template.layout.helpers({
    pathIsLayoutHistory: function() {
        return  Router.current().route.getName() === 'workoutSessionsList' || Router.current().route.getName() === 'exerciseSessionsList';
    }
});