Accounts.onCreateUser(function(options, user) {
    if (options.profile) {
        options.profile.facebookId = user.services.facebook.id;
        user.profile = options.profile;
    }
    return user;
});

