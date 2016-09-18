if (Workouts.find().count() === 0) {
    var now = new Date().getTime();

    var gilId = Meteor.users.insert({
        profile: { name: 'Gil' }
    });
    var gil = Meteor.users.findOne(gilId);

    var pushupsId = Exercises.insert({
        name: 'Pushups',
        description: 'lorem ipsum',
        created: new Date(now - 7 * 3600 * 1000),
        userId: gil._id
    });

    var pushups = Exercises.findOne(pushupsId);



    var burpeesId = Exercises.insert({
        name: 'Burpees',
        description: 'lorem ipsum Burp',
        created: new Date(now - 7 * 3600 * 1000),
        userId: gil._id
    });

    var burpees = Exercises.findOne(burpeesId);


    var jumpingJacksId = Exercises.insert({
        name: 'Jumping Jacks',
        description: 'lorem ipsum Burp',
        created: new Date(now - 7 * 3600 * 1000),
        userId: gil._id
    });

    var jumpingJacks = Exercises.findOne(jumpingJacksId);

    var straightLegLeversId = Exercises.insert({
        name: 'Straight Leg Levers',
        description: 'lorem ipsum Burp',
        created: new Date(now - 7 * 3600 * 1000),
        userId: gil._id
    });

    var straightLegLevers = Exercises.findOne(straightLegLeversId);

    var squatsId = Exercises.insert({
        name: 'Squats',
        description: 'lorem ipsum Burp',
        created: new Date(now - 7 * 3600 * 1000),
        userId: gil._id
    });

    var squats = Exercises.findOne(squatsId);



    var situpsId = Exercises.insert({
        name: 'Situps',
        description: 'lorem ipsum Burp',
        created: new Date(now - 7 * 3600 * 1000),
        userId: gil._id
    });

    var situps = Exercises.findOne(situpsId);

    var climbersId = Exercises.insert({
        name: 'Climbers',
        description: 'lorem ipsum Burp',
        created: new Date(now - 7 * 3600 * 1000),
        userId: gil._id
    });

    var climbers = Exercises.findOne(climbersId);

    var jumpsId = Exercises.insert({
        name: 'Jumps',
        description: 'lorem ipsum Burp',
        created: new Date(now - 7 * 3600 * 1000),
        userId: gil._id
    });

    var jumps = Exercises.findOne(jumpsId);

    var standupsId = Exercises.insert({
        name: 'Standups',
        description: 'lorem ipsum Burp',
        created: new Date(now - 7 * 3600 * 1000),
        userId: gil._id
    });

    var standups = Exercises.findOne(standupsId);


    var delphinusId = Workouts.insert({
        name: 'Delphinus',
        userId: gil._id,
        rounds: [
            [
                {
                    exerciseId: jumpingJacks._id,
                    repetitions: 75,
                    exerciseName: jumpingJacks.name
                },
                {
                    exerciseId: burpees._id,
                    repetitions: 25,
                    exerciseName: burpees.name
                },
                {
                    exerciseId: straightLegLevers._id,
                    repetitions: 50,
                    exerciseName: straightLegLevers.name
                },
                {
                    exerciseId: jumpingJacks._id,
                    repetitions: 75,
                    exerciseName: jumpingJacks.name
                },
                {
                    exerciseId: situps._id,
                    repetitions: 50,
                    exerciseName: situps.name
                },
                {
                    exerciseId: burpees._id,
                    repetitions: 25,
                    exerciseName: burpees.name
                }
            ],
            [
                {
                    exerciseId: jumpingJacks._id,
                    repetitions: 75,
                    exerciseName: jumpingJacks.name
                },
                {
                    exerciseId: burpees._id,
                    repetitions: 25,
                    exerciseName: burpees.name
                },
                {
                    exerciseId: straightLegLevers._id,
                    repetitions: 50,
                    exerciseName: straightLegLevers.name
                },
                {
                    exerciseId: jumpingJacks._id,
                    repetitions: 75,
                    exerciseName: jumpingJacks.name
                },
                {
                    exerciseId: situps._id,
                    repetitions: 50,
                    exerciseName: situps.name
                },
                {
                    exerciseId: burpees._id,
                    repetitions: 25,
                    exerciseName: burpees.name
                }
            ],
            [
                {
                    exerciseId: jumpingJacks._id,
                    repetitions: 75,
                    exerciseName: jumpingJacks.name
                },
                {
                    exerciseId: burpees._id,
                    repetitions: 25,
                    exerciseName: burpees.name
                },
                {
                    exerciseId: straightLegLevers._id,
                    repetitions: 50,
                    exerciseName: straightLegLevers.name
                },
                {
                    exerciseId: jumpingJacks._id,
                    repetitions: 75,
                    exerciseName: jumpingJacks.name
                },
                {
                    exerciseId: situps._id,
                    repetitions: 50,
                    exerciseName: situps.name
                },
                {
                    exerciseId: burpees._id,
                    repetitions: 25,
                    exerciseName: burpees.name
                }
            ]
        ]
    });


    var andromedaId = Workouts.insert({
        name: 'Andromeda',
        userId: gil._id,
        rounds: [
            [
                {
                    exerciseId: burpees._id,
                    repetitions: 50,
                    exerciseName: burpees.name
                },
                {
                    exerciseId: squats._id,
                    repetitions: 50,
                    exerciseName: squats.name
                },
                {
                    exerciseId: situps._id,
                    repetitions: 50,
                    exerciseName: situps.name
                }
            ],
            [
                {
                    exerciseId: burpees._id,
                    repetitions: 40,
                    exerciseName: burpees.name
                },
                {
                    exerciseId: squats._id,
                    repetitions: 40,
                    exerciseName: squats.name
                },
                {
                    exerciseId: situps._id,
                    repetitions: 40,
                    exerciseName: situps.name
                }
            ],
            [
                {
                    exerciseId: burpees._id,
                    repetitions: 30,
                    exerciseName: burpees.name
                },
                {
                    exerciseId: squats._id,
                    repetitions: 30,
                    exerciseName: squats.name
                },
                {
                    exerciseId: situps._id,
                    repetitions: 30,
                    exerciseName: situps.name
                }
            ],
            [
                {
                    exerciseId: burpees._id,
                    repetitions: 20,
                    exerciseName: burpees.name
                },
                {
                    exerciseId: squats._id,
                    repetitions: 20,
                    exerciseName: squats.name
                },
                {
                    exerciseId: situps._id,
                    repetitions: 20,
                    exerciseName: situps.name
                }
            ],
            [
                {
                    exerciseId: burpees._id,
                    repetitions: 10,
                    exerciseName: burpees.name
                },
                {
                    exerciseId: squats._id,
                    repetitions: 10,
                    exerciseName: squats.name
                },
                {
                    exerciseId: situps._id,
                    repetitions: 10,
                    exerciseName: situps.name
                }
            ]
        ]
    });

    var velaId = Workouts.insert({
        name: 'Vela',
        userId: gil._id,
        rounds: [
            [
                {
                    exerciseId: pushups._id,
                    repetitions: 50,
                    exerciseName: pushups.name
                },
                {
                    exerciseId: situps._id,
                    repetitions: 20,
                    exerciseName: situps.name
                },
                {
                    exerciseId: squats._id,
                    repetitions: 50,
                    exerciseName: squats.name
                }
            ],
            [
                {
                    exerciseId: pushups._id,
                    repetitions: 50,
                    exerciseName: pushups.name
                },
                {
                    exerciseId: situps._id,
                    repetitions: 20,
                    exerciseName: situps.name
                },
                {
                    exerciseId: squats._id,
                    repetitions: 50,
                    exerciseName: squats.name
                }
            ],
            [
                {
                    exerciseId: pushups._id,
                    repetitions: 50,
                    exerciseName: pushups.name
                },
                {
                    exerciseId: situps._id,
                    repetitions: 20,
                    exerciseName: situps.name
                },
                {
                    exerciseId: squats._id,
                    repetitions: 50,
                    exerciseName: squats.name
                }
            ],
            [
                {
                    exerciseId: pushups._id,
                    repetitions: 50,
                    exerciseName: pushups.name
                },
                {
                    exerciseId: situps._id,
                    repetitions: 20,
                    exerciseName: situps.name
                },
                {
                    exerciseId: squats._id,
                    repetitions: 50,
                    exerciseName: squats.name
                }
            ]
        ]
    });

    var microscopiumId = Workouts.insert({
        name: 'Microscopium',
        userId: gil._id,
        rounds: [
            [
                {
                    exerciseId: burpees._id,
                    repetitions: 10,
                    exerciseName: burpees.name
                },
                {
                    exerciseId: climbers._id,
                    repetitions: 10,
                    exerciseName: climbers.name
                },
                {
                    exerciseId: jumps._id,
                    repetitions: 10,
                    exerciseName: jumps.name
                }
            ],
            [
                {
                    exerciseId: burpees._id,
                    repetitions: 25,
                    exerciseName: burpees.name
                },
                {
                    exerciseId: climbers._id,
                    repetitions: 25,
                    exerciseName: climbers.name
                },
                {
                    exerciseId: jumps._id,
                    repetitions: 25,
                    exerciseName: jumps.name
                }
            ],
            [
                {
                    exerciseId: burpees._id,
                    repetitions: 10,
                    exerciseName: burpees.name
                },
                {
                    exerciseId: climbers._id,
                    repetitions: 10,
                    exerciseName: climbers.name
                },
                {
                    exerciseId: jumps._id,
                    repetitions: 10,
                    exerciseName: jumps.name
                }
            ]
        ]
    });

    var geminiRound = [
        {
            exerciseId: jumpingJacks._id,
            repetitions: 40,
            exerciseName: jumpingJacks.name
        },
        {
            exerciseId: jumps._id,
            repetitions: 30,
            exerciseName: jumps.name
        },
        {
            exerciseId: climbers._id,
            repetitions: 20,
            exerciseName: climbers.name
        },
        {
            exerciseId: standups._id,
            repetitions: 10,
            exerciseName: standups.name
        }
    ];

    var geminiRounds = [];

    for(var i=0; i < 10; i++) {
        geminiRounds.push(geminiRound);
    }

    var geminiId = Workouts.insert({
        name: 'Gemini',
        userId: gil._id,
        rounds: geminiRounds
    });

    var gemini = Workouts.findOne(geminiId);

    var workoutSessionsId1 = WorkoutSessions.insert({
        workoutName: gemini.name,
        workoutId: gemini._id,
        userId: gil._id,
        userName: gil.profile.name,
        duration: 2520000,
        workoutDoneCorrectly: true
    });

    var workoutSessionsId2 = WorkoutSessions.insert({
        workoutName: gemini.name,
        workoutId: gemini._id,
        userId: gil._id,
        userName: gil.profile.name,
        duration: 2520000,
        workoutDoneCorrectly: true
    });
}