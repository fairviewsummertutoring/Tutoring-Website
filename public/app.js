(function(){

    var firebaseConfig = {
        apiKey: "AIzaSyDqLvviUwo-p6ebzWRpAsxfD55elLAduMc",
        authDomain: "tutorapp-7161e.firebaseapp.com",
        databaseURL: "https://tutorapp-7161e.firebaseio.com",
        projectId: "tutorapp-7161e",
        storageBucket: "tutorapp-7161e.appspot.com",
        messagingSenderId: "732754637849",
        appId: "1:732754637849:web:ae7d7f2e4c4fc9cf83e688",
        measurementId: "G-B6YEL2J3XM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const txtEmail = document.getElementById("emailField");
    const txtPass = document.getElementById("passwordField");
    const btnSignUp = document.getElementById("button");


    btnSignUp.addEventListener('click' e => {

        window.alert("event listener added");
        const email = txtEmail.value;
        const password = txtPass.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise
            .catch(e => console.log(e.message));


    });

}());