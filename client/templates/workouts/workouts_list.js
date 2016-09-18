Template.workoutsList.helpers({
    workouts: function() {
        return Workouts.find({}, {sort: {createdAt: -1}});
    }
});