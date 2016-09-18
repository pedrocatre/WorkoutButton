ExerciseSessions = new Mongo.Collection('exerciseSessions');

Ground.Collection(ExerciseSessions);

ExerciseSessions.attachSchema(new SimpleSchema({
    duration: {
        type: Number
    },
    exerciseName: {
        type: String
    },
    exerciseId: {
        type: String
    },
    repetitions: {
        type: Number,
        defaultValue: 50,
        autoform: {
            'label-type': 'stacked'
        }
    },
    userId: {
        type: String
    },
    userName: {
        type: String
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

Meteor.methods({
    exerciseSessionInsert: function(exerciseSessionAttributes) {
        check(this.userId, String);
        check(exerciseSessionAttributes, {
            duration: Number,
            exerciseName: String,
            exerciseId: String,
            repetitions: Number
        });

        var user = Meteor.user();

        var username;

        if(user.profile && user.profile.name) {
            username = user.profile.name;
        } else if(user.emails && user.emails[0] && user.emails[0].address) {
            username = user.emails[0].address;
        }

        var exerciseSession = _.extend(exerciseSessionAttributes, {
            userId: user._id,
            userName: username
        });

        var exerciseSessionId = ExerciseSessions.insert(exerciseSession);

        return {
            _id: exerciseSessionId
        };
    }

});