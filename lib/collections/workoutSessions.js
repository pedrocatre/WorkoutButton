WorkoutSessions = new Mongo.Collection('workoutsSessions');

Ground.Collection(WorkoutSessions);

WorkoutSessions.attachSchema(new SimpleSchema({
    duration: {
        type: Number
    },
    workoutName: {
        type: String
    },
    workoutId: {
        type: String
    },
    workoutDoneCorrectly: {
        type: Boolean
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
    workoutSessionInsert: function(workoutSessionAttributes) {
        check(this.userId, String);
        check(workoutSessionAttributes, {
            duration: Number,
            workoutDoneCorrectly: Boolean,
            workoutName: String,
            workoutId: String
        });

        var user = Meteor.user();

        var username;

        if(user.profile && user.profile.name) {
            username = user.profile.name;
        } else if(user.emails && user.emails[0] && user.emails[0].address) {
            username = user.emails[0].address;
        }

        var workoutSession = _.extend(workoutSessionAttributes, {
            userId: user._id,
            userName: username
        });

        var workoutSessionId = WorkoutSessions.insert(workoutSession);

        return {
            _id: workoutSessionId
        };
    }
});

if ( Meteor.isClient ) {
    Ground.methodResume([
        'workoutSessionInsert'
    ]);
}