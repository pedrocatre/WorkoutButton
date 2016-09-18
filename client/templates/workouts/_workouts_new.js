AutoForm.hooks({
    'workouts-new-form': {
        onSuccess: function (operation, result, template) {
            IonModal.close();
            Router.go('workoutsList', {_id: result});
        },

        onError: function(operation, error, template) {
            IonPopup.alert({
                title: 'Form is not valid',
                template: error,
                okText: 'Got it.'
            });
        },
        before: {
            insert: function (doc) {
                _.forEach(doc.rounds, function(round) {
                    _.forEach(round, function(exercise) {

                        // Check exercise id was provided
                        if(!exercise.exerciseId) {
                            return;
                        }

                        var fullExercise = Exercises.findOne(exercise.exerciseId);
                        exercise.exerciseName = fullExercise.name;
                    })
                });

                if(Meteor.userId()){
                    doc.userId = Meteor.userId();
                }

                return doc;
            }
        }
    }
});
