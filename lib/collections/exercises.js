Exercises = new Mongo.Collection('exercises');

Ground.Collection(Exercises);

Exercises.allow({
    insert: function(userId, doc){
        return ownsDocument(userId, doc);
    },
    update: function(userId, doc){
        return ownsDocument(userId, doc);
    }
});