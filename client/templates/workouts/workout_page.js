var $exercises,
    $startWorkoutBtn,
    $nextExerciseBtn,
    currentExerciseIndex = 0,
    totalNumberOfExercises,
    start,
    timerIntervalId,
    currentTimerTime,
    $content;


Template.workoutPage.rendered = function() {
    $content = $('.content');
    start = undefined;
    currentTimerTime = 0;

    currentExerciseIndex = 0;
    $content.scrollTop(0);
    $startWorkoutBtn = $('.start-workout-btn');
    $nextExerciseBtn = $('.next-exercise-btn');
    $exercises = $('.exercise');
    totalNumberOfExercises = $exercises.length;
    //$content = $('.content').addClass('has-big-footer has-timer-subheader');
    if(Meteor.isCordova){
        // On an exercise, keep the device awake for usability (don't want to unlock the screen on each exercise of a
        // workout
        window.plugins.insomnia.keepAwake();
    }

};

Template.workoutPage.onDestroyed(function () {
    if(Meteor.isCordova) {
        // No longer on an exercise, the app can sleep again
        window.plugins.insomnia.allowSleepAgain();
    }
});

Template.workoutPage.helpers({
    isWorkoutOwner: function() {
        return this.userId === Meteor.userId();
    }
});

Template.workoutPage.events({
    'click .start-workout-btn': function(e) {
        e.preventDefault();
        $startWorkoutBtn.hide();
        $nextExerciseBtn.show();
        $($exercises.get(currentExerciseIndex)).addClass('exercise-selected')[0].scrollIntoView();
        var $timer = $('.timer');
        start = new Date;
        timerIntervalId = setInterval(function() {
            currentTimerTime = new Date - start;
            $timer.text(msToTime(currentTimerTime));
        }, 1000);
    },

    //'click [data-action=leave-workout]': function(e) {
    //    console.log('HERRRE');
    //    e.preventDefault();
    //    // If the workout has not started yet, let the user go back
    //    if(_.isUndefined(start)) {
    //        Router.go('workoutList');
    //        return;
    //    }
    //
    //    IonPopup.confirm({
    //        title: 'Are you sure?',
    //        template: 'Are you <strong>really</strong> sure you want to leave the workout?',
    //        onOk: function() {
    //            console.log('Confirmed');
    //        },
    //        onCancel: function() {
    //            Router.go('workoutsList');
    //        },
    //        okText: 'I Refuse to Give Up',
    //        cancelText: 'Sooo tired...'
    //    });
    //
    //},

    'click .next-exercise-btn': function(e) {
        var self = this;
        e.preventDefault();
        currentExerciseIndex++;
        if(currentExerciseIndex >= totalNumberOfExercises) {

            IonPopup.confirm({
                title: 'Finished the workout?',
                template: 'Are you <strong>really</strong> sure?',
                onOk: function() {
                    clearInterval(timerIntervalId);
                    var workoutSession = {
                        duration: currentTimerTime,
                        workoutDoneCorrectly: true,
                        workoutName: self.name,
                        workoutId: self._id
                    };
                    // http://stackoverflow.com/questions/20926790/how-to-check-if-meteor-call-fails-when-server-connection-is-down
                    Meteor.call('workoutSessionInsert', workoutSession, function(error, result) {
                        if (error) {
                            return throwError(error.reason);
                        }
                    });

                    Router.go('workoutSessionsList');

                },
                onCancel: function() {
                    console.log('Cancelled');
                }
            });
        } else {
            var $nextExercise = $($exercises.get(currentExerciseIndex)).addClass('exercise-selected');
            $nextExercise[0].scrollIntoView();
            $($exercises.get(currentExerciseIndex - 1)).removeClass('exercise-selected');
        }
    }
});