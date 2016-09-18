Template.exerciseSessionItem.helpers({
    exerciseDuration: function () {
        return msToTime(this.duration);
    },
    exerciseDate: function () {
        return moment(this.createdAt).format('YYYY-MM-DD HH:mm');
    }
});