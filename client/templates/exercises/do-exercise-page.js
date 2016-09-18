var $doExerciseFormContainer,
    repetitions,
    start = undefined,
    currentTimerTime = 0,
    $timer,
    timerIntervalId,
    $countDownContainer,
    $content,
    $endExerciseBtn,
    isCountDownShown = false;

Template.doExercisePage.rendered = function() {
    Session.set('isCountDownShown', false);
    isCountDownShown = false;
    $doExerciseFormContainer = $('.do-exercise-form-container');
    $countDownContainer = $('.timer-bar').hide();
    $timer = $('.timer');
    $endExerciseBtn = $('.end-exercise-btn');
};

Template.doExercisePage.helpers({
    showCountDown: function() {
        return Session.get('isCountDownShown');
    }
});

Template.doExercisePage.events({
    'click .end-exercise-btn': function(e) {
        e.preventDefault();
        var self = this;
        IonPopup.confirm({
            title: 'Finished the workout?',
            template: 'Are you <strong>really</strong> sure?',
            onOk: function() {
                clearInterval(timerIntervalId);
                var exerciseSession = {
                    duration: currentTimerTime,
                    exerciseName: self.name,
                    exerciseId: self._id,
                    repetitions: repetitions
                };

                console.log('exerciseSession', exerciseSession);

                Meteor.call('exerciseSessionInsert', exerciseSession, function(error, result) {
                    if (error) {
                        return throwError(error.reason);
                    }
                });

                Router.go('exercisesList');
            },
            onCancel: function() {
                console.log('Cancelled');
            }
        });
    }
});

function startTimer() {
    start = new Date;
    timerIntervalId = setInterval(function() {
        currentTimerTime = new Date - start;
        $timer.text(msToTime(currentTimerTime));
    }, 1000);
}

function startExercise() {
    Session.set('isCountDownShown', true);
    startTimer();
    $content = $('.content').addClass('has-timer-subheader');
    $countDownContainer.show();
    $endExerciseBtn.show();
    $doExerciseFormContainer.hide();
}


AutoForm.hooks({
    'new-exercise-session-form': {

        onError: function(operation, error, template) {
            IonPopup.alert({
                title: 'Form is not valid',
                template: error,
                okText: 'Got it.'
            });
        },
        before: {
            insert: function (doc) {
                repetitions = doc.repetitions;
                startExercise();

                return false;
            }
        }
    }
});
