//By default, Cordova applications (this is the technology used by Meteor to create mobile applications) may not access
// any URLs unless they are whitelisted.

App.accessRule('http://workoutbutton.meteor.com/*');
App.accessRule('192.168.254.27/*');
App.accessRule('http://graph.facebook.com/*');

// We want this in portrait mode because when doing a workout it is very frustrating if it switches from portrait
// to landscape mode when we are going to the next exercise.
App.setPreference('orientation', 'portrait');

App.info({
    // the bundle ID must be unique across the entire app store
    // usually reverse domains of the creators are used
    id: 'workoutbutton.com',
    version: '1.0.2',
    name: 'WorkoutButton',
    description: 'The Workout Button makes the integration of workouts into your life insanely easy!',
    author: 'Pedro Catré',
    email: 'pedrolopescatre@gmail.com',
    website: 'http://workoutbutton.meteor.com'
});

App.icons({
    // Android
    'android_ldpi': 'mobile-resources/android_ldpi.png',
    'android_mdpi': 'mobile-resources/android_mpdi.png',
    'android_hdpi': 'mobile-resources/android_hdpi.png',
    'android_xhdpi': 'mobile-resources/android_xhdpi.png'
});

App.launchScreens({
    // Android
    'android_ldpi_portrait': 'mobile-resources/android_ldpi_portrait.png',
    'android_ldpi_landscape': 'mobile-resources/android_ldpi_landscape.png',
    'android_mdpi_portrait': 'mobile-resources/android_mdpi_portrait.png',
    'android_mdpi_landscape': 'mobile-resources/android_mdpi_landscape.png',
    'android_hdpi_portrait': 'mobile-resources/android_hdpi_portrait.png',
    'android_hdpi_landscape': 'mobile-resources/android_hdpi_landscape.png',
    'android_xhdpi_portrait': 'mobile-resources/android_xhdpi_portrait.png',
    'android_xhdpi_landscape': 'mobile-resources/android_xhdpi_landscape.png'
});