function googleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(res => alert(res))
  };
  
  const facebookLogin = () => {
    let facebookProvider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(facebookProvider).catch(res => alert(res))
  };
  
  const manualSignUp = () => {
    let email = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        document.getElementById("userName").value = "";
        document.getElementById("password").value = "";
      })
      .catch(err => alert(err));
  }
  
  
  const manualSignIn = () => {
    let email = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        document.getElementById("userName").value = "";
        document.getElementById("password").value = "";
      })
      .catch(err => alert(err));
  }
  
  
  auth.onAuthStateChanged((user) => {
    if (user) {
      firestore.collection("users").doc(user.uid).set({
        email: user.email
      })
  
      if (document.querySelector(".businessCheck").checked) {
        location.replace("mainPage.html");
        console.log(user.email)
      }
      else {
        location.replace("customer.html")
      }
    }
  })