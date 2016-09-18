Template.exerciseSessionsList.helpers({
    exerciseSessions: function() {
        return ExerciseSessions.find({}, {sort: {createdAt: -1}});
    }
});