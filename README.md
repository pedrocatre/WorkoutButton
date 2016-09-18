# WorkoutButton

An app for creating your own exercise recipes.

![Workout Button](https://github.com/pedrocatre/WorkoutButton/raw/master/WorkoutButton-screenshots/workout_button.gif)
![Workout Button](https://github.com/pedrocatre/WorkoutButton/raw/master/WorkoutButton-screenshots/create_workout.gif)

## Running the app

First you need to create a file: server/credentials-config.js

With the following:

```javascript
facebookConfig = {
    prod: {
        appId: 'xxxxx',
        secret: 'xxxxx'
    },

    dev: {
        appId: 'xxxx',
        secret: 'xxxx'
    }
};
```

To get an app id and secret you need to create an app in your facebook developer account. You can follow the steps
described in this blog post: (http://bulenttastan.net/login-with-facebook-using-meteor-js/)[http://bulenttastan.net/login-with-facebook-using-meteor-js/].

## Launch app

meteor --port 3001

if you just did a reset to the database or you are starting the project it will fail the 1st time because of a Scss compiler error.

## kill all instances of meteor

kill `ps ax | grep '[m]eteor' | awk '{print $1}'`

## reset the database

reset meteor

## reset remote app

meteor deploy workoutbutton.meteor.com --delete
meteor deploy workoutbutton.meteor.com


## build

meteor build --server=http://workoutbutton.meteor.com ../build

https://www.yauh.de/the-illustrated-guide-to-mobile-apps-with-meteor/

keytool -genkey -alias workout-button -keyalg RSA -keysize 2048 -validity 10000
keytool -exportcert -alias workout-button -file hball.cer

Open a shell and cd to the android directory. The command used for signing the apk-file is

$ jarsigner -digestalg SHA1 unaligned.apk reactive-hball
Once the file is signed, it needs to be aligned. Do that by issuing

$ ~/.meteor/android_bundle/android-sdk/build-tools/21.0.0/zipalign 4 unaligned.apk production.apk

## Notes

because of this bug https://github.com/meteoric/meteor-ionic/issues/130
I have the meteoric package locally.

https://github.com/meteoric/ionicons-sass
NOTE: Due to a current limitation of the Meteor packaging system, the above path may not exist the first time you run your Meteor app after installing this package. This will cause an error saying the file to import was not found. This may also occur if you run meteor reset. Restarting your app should fix this problem.

## TODO

* footer
* timer should always be shown
* Show workout history
* Deploy

* add mongol meteor add msavin:mongol # To easily view/edit published data in browser


put turn off scree on

Template.loginLayout.onDestroyed(function(){
  $('body').removeClass('register-page');
});


* turn off insecure package
* remove appcache because it is not necessary for mobile apps... and it is not working
* Add package for offline collections ground collections
* add a way to create new exercises and workouts using the interface

* feed

meteor run android-device --mobile-server workoutbutton.meteor.com --port 3001

accounts-password     added, version 1.1.1
accounts-ui           added, version 1.1.5
accounts-ui-unstyled  added, version 1.1.7
email                 added, version 1.0.6
less                  added, version 1.0.14
npm-bcrypt            added, version 0.7.8_2
sha                   added, version 1.0.3
srp                   added, version 1.0.3


meteor add houston:admin


meteor add crosswalk

## Screenshots

<img src="https://github.com/pedrocatre/WorkoutButton/raw/master/WorkoutButton-screenshots/side_menu2.png" width="425">
<img src="https://github.com/pedrocatre/WorkoutButton/raw/master/WorkoutButton-screenshots/training.png" width="425">
<img src="https://github.com/pedrocatre/WorkoutButton/raw/master/WorkoutButton-screenshots/create_workout.png" width="425">
<img src="https://github.com/pedrocatre/WorkoutButton/raw/master/WorkoutButton-screenshots/workouts_list.png" width="425">
<img src="https://github.com/pedrocatre/WorkoutButton/raw/master/WorkoutButton-screenshots/workout_vela.png" width="425">
<img src="https://github.com/pedrocatre/WorkoutButton/raw/master/WorkoutButton-screenshots/workout_history.png" width="425">

## License

The code in this repository can be used under the MIT License.
