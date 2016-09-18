//If you're using IronRouter you should not use the waitOn feature, since this is going to make the application hold until the server responds. Instead, subscribe to the data you want offline on the application startup.
if (Meteor.isClient) {
    Meteor.startup(function () {
        Meteor.subscribe('workouts');
        Meteor.subscribe('exercises');
        Meteor.subscribe('workoutSessions');
        Meteor.subscribe('exerciseSessions');
    });
}


//if(Meteor.isClient) {
//
//    Tracker.autorun(function () {
//        if(Meteor.user() && !subscribed) {
//            console.log('subscribe');
//            Meteor.subscribe('workouts');
//            Meteor.subscribe('exercises');
//            Meteor.subscribe('workoutSessions');
//            Meteor.subscribe('exerciseSessions');
//            //Meteor.subscribe('singleWorkout');
//            subscribed = true;
//        }
//
//        if(!Meteor.user()) {
//            subscribed = false;
//        }
//    });
//}

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loadingSpinner',
    notFoundTemplate: 'notFound'
});

//Router.route('/', {name: 'feed'});
Router.route('/login', {name: 'login'});
Router.route('/', {name: 'training'});
Router.route('/workouts', {
    name: 'workoutsList',
    //waitOn: function() {
    //    return [
    //        Meteor.subscribe('workouts'),
    //        Meteor.subscribe('exercises')
    //    ];
    //},
    data: function() { return Workouts.find({}); }
});

Router.route('/exercises', {
    name: 'exercisesList',
    data: function() { return Exercises.find({}); }
});

Router.route('/workoutHistory', {
    name: 'workoutSessionsList'
    //waitOn: function() {
    //    return [
    //        Meteor.subscribe('workoutSessions', {sort: {createdAt: -1}, limit: 100})
    //    ];
    //},
    //data: function() { return WorkoutSessions.find({userId: Meteor.userId()}, {sort: {createdAt: 1}}); }
});

Router.route('/exerciseHistory', {
    name: 'exerciseSessionsList'
    //data: function() { return ExerciseSessions.find({userId: Meteor.userId()}, {sort: {createdAt: 1}}); }
});

Router.route('/workouts/:_id', {
    name: 'workoutPage',
    //waitOn: function() {
    //    return Meteor.subscribe('singleWorkout', this.params._id);
    //},
    data: function() { return Workouts.findOne(this.params._id); }
});

Router.route('/exercises/do/:_id', {
    name: 'doExercisePage',
    //waitOn: function() {
    //    return Meteor.subscribe('singleWorkout', this.params._id);
    //},
    data: function() { return Exercises.findOne(this.params._id); }
});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('login');
        }
    } else {
        this.next();
    }
};

Router.onBeforeAction(requireLogin);
