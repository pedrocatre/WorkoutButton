Template.exercisesList.helpers({
    exercises: function() {
        return Exercises.find({}, {sort: {createdAt: -1}});
    }
});