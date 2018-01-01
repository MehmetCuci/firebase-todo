$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyCleHjmalbKJQsstFP8QWrzlqOmxImliTg",
        authDomain: "todo-b07c3.firebaseapp.com",
        databaseURL: "https://todo-b07c3.firebaseio.com",
        projectId: "todo-b07c3",
        storageBucket: "todo-b07c3.appspot.com",
        messagingSenderId: "299013582013"
    };
    firebase.initializeApp(config);

    $('#registerBtn').click(function () {
        var email = $('#email').val();
        var password = $('#password').val();


        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(function () {
                firebase.auth().signInWithEmailAndPassword(email,password)
                    .then(function () {
                        window.location.href = "index.html";
                    })
            }).catch(function (error) {
             alert(error.message);
        })
    })


})