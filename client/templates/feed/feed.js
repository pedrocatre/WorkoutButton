Template.feed.events({
    "submit .new-feed-msg": function (event) {

        var text = event.target.text.value;

        FeedMessages.insert({
            text: text,
            createdAt: new Date() // current time
        });

        // Clear form
        event.target.text.value = "";

        // Prevent default form submit
        return false;
    }
});

Template.feed.helpers({
    feedMessages: function () {
        return FeedMessages.find({}, {sort: {createdAt: -1}});
    }
});

Template.feedMsg.events({
    "click .toggle-checked": function () {
        // Set the checked property to the opposite of its current value
        FeedMessages.update(this._id, {$set: {checked: ! this.checked}});
    }
});