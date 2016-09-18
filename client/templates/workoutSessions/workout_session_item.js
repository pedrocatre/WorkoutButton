Template.workoutSessionItem.helpers({
    workoutDuration: function () {
        return msToTime(this.duration);
    },
    workoutDate: function () {
        return moment(this.createdAt).format('YYYY-MM-DD HH:mm');
    }
});