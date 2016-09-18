Template._workoutsEdit.helpers({
    workout: function () {
        var template = Template.instance();
        var workout = Workouts.findOne({_id: template.data.id});
        console.log('workout', workout);
        return workout;
    }
});

AutoForm.hooks({
    'workouts-edit-form': {
        onSuccess: function (operation, result, template) {
            IonModal.close();
        },

        onError: function(operation, error, template) {
            IonPopup.alert({
                title: 'Form is not valid',
                template: error,
                okText: 'Got it.'
            });
            alert(error);
        },
        before: {
            update: function (docId, editedDoc) {
                _.forEach(editedDoc.$set.rounds, function(round) {
                    _.forEach(round, function(exercise) {

                        // Check exercise id was provided
                        if(!exercise.exerciseId) {
                            return;
                        }

                        var fullExercise = Exercises.findOne(exercise.exerciseId);
                        exercise.exerciseName = fullExercise.name;
                    })
                });

                //if(Meteor.userId()){
                //    doc.userId = Meteor.userId();
                //}

                return editedDoc;
            }
        }
    }
});
