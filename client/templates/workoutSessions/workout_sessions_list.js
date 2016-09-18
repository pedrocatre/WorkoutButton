Template.workoutSessionsList.helpers({
    workoutSessions: function() {
        return WorkoutSessions.find({userId: Meteor.userId()}, {sort: {createdAt: -1}});
    }
});