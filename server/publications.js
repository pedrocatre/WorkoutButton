Meteor.publish('workouts', function() {
    //check(options, {
    //    sort: Object,
    //    limit: Number
    //});
    return Workouts.find({});
});

Meteor.publish('exercises', function() {
    //check(options, {
    //    sort: Object,
    //    limit: Number
    //});
    return Exercises.find({});
});

Meteor.publish('workoutSessions', function() {
    return WorkoutSessions.find({userId: this.userId}, {limit: 100});
});

Meteor.publish('exerciseSessions', function() {
    return ExerciseSessions.find({userId: this.userId}, {limit: 100});
});

//Meteor.publish('workoutSessions', function(options) {
//    check(options, {
//        sort: Object,
//        limit: Number
//    });
//    return WorkoutSessions.find({userId: this.userId}, options);
//});

Meteor.publish('singleWorkout', function(id) {
    check(id, String);
    return Workouts.find(id);
});