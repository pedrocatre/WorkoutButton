Workouts = new Mongo.Collection('workouts');

Ground.Collection(Workouts);

Workouts.attachSchema(new SimpleSchema({
    'name': {
        type: String,
        label: 'Name',
        autoform: {
            //'label-type': 'floating',
            placeholder: 'Name'
        },
        max: 200
    },
    rounds: {
        type: [[Object]]
    },
    'rounds.$.$.exerciseId': {
        type: String,
        label: 'Exercise',
        autoform: {
            options: function () {
                return Exercises.find().map(function (c) {
                    return {label: c.name, value: c._id};
                });
            }
            //afFieldInput: {
            //    firstOption: {label: 'Pushups', value: 'vaiB2ebLxyBwjL6bk'}
            //}
        }
    },
    'rounds.$.$.repetitions': {
        type: Number,
        label: 'Repetitions',
        autoform: {
            placeholder: 'Number of repetitions'
        }
    },
    'rounds.$.$.exerciseName': {
        type: String
    },
    userId: {
        type: String,
        label: "userId"
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();
            }
        }
    },

    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    }
}));

Workouts.allow({
    insert: function(userId, doc){
        return ownsDocument(userId, doc);
    },
    update: function(userId, doc){
        return ownsDocument(userId, doc);
    }
});

