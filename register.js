/*function validat() {
    var re = /^[a-zA-Z]/;
    var re2 = /^[0-9]/;
    var name = document.register.fname.value;
    var lName = document.register.lname.value;
    var fName = document.register.dname.value;
    var num = document.register.phno.value;
    var mail = document.register.email.value;
    var pass = document.register.pwd.value;
    var c = 0;
    if((!name.match(re)) || (!lName.match(re)) || (!fName.match(re))) {
        c = 1;
        return alert("Name should contain only letters");
    }
    if(!num.match(re2) || num.length != 10) {
        c = 1;
        return alert("Enter a  valid phone number");
    }
    if(c == 0) {
        return alert("Registered Successfully!")
    }
    if(mail.length == 0) {
        return alert("Enter the email");
    }
    if(pass.length == 0)
    {
        return alert("Enter the password");
    }
}
function validat2() {
    var mail = document.fpass.forpass.value;
    var atposition=mail.indexOf("@");  
	var dotposition=mail.lastIndexOf("."); 
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length) {
        return alert('Enter a valid email address');
    }
    else {
        return alert('Email sent successfully');
    }
}
function reg() {*/
   /* var email = document.getElementById("email").value;
    var pwd = document.getElementById("pass").value;
    firebase.auth().createUserWithEmailAndPassword(email, pwd)
    .then(function (event) {
        var ref = firebase.database().ref("users").child(user.uid).set({
            email: user.email,
            uid: user.uid,
            password: user.pwd,
        });
    })
    .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
    firebase.initializeApp({
        apiKey: "AIzaSyDyS3KK_jL4F7wTU2dollrbsP8NsFQLZik",
        authDomain: "web-spoty.firebaseapp.com",
        projectId: "web-spoty"
      });
    var db = firebase.firestore();
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pass").value;
    db.collection("users").add({
        Email: email,
        Password: pwd,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage);
        // ...
      });
      var email = document.getElementById("email").value;
      var pass = document.getElementById("pass").value;
      const auth = firebase.auth()
      auth.createUserWithEmailAndPassword(email, pass);
      window.alert("success");
}*/
function reg() {
    const config = {
        apiKey: "AIzaSyDyS3KK_jL4F7wTU2dollrbsP8NsFQLZik",
        authDomain: "web-spoty.firebaseapp.com",
        databaseURL: "https://web-spoty.firebaseio.com",
        storageBucket: "web-spoty.appspot.com",
    };
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const fn = document.getElementById("fname");
    const ln = document.getElementById("lname");
    const ph = document.getElementById("phno");
    const gen = document.getElementById("gender");
    const con = document.getElementById("country");
        const mail = email.value;
        const pwd = pass.value;
        const fname = fn.value;
        const lname = ln.value;
        const phno = ph.value;
        const gender = gen.value;
        const country = con.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(mail, pwd);
        promise.catch(e => console.log(e.message));
            var db = firebase.firestore();
            db.collection("users").add({
                Firstname: fname,
                Lastname: lname,
                Phone: phno,
                Gender: gender,
                Country: country,
                Email: mail,
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
}
