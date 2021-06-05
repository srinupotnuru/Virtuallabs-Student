var firebaseConfig = {
  apiKey: "AIzaSyBXFca_dG4kGlVXXNfP9EXxy4oAQTtELBk",
  authDomain: "virtual-labs-a693a.firebaseapp.com",
  projectId: "virtual-labs-a693a",
  storageBucket: "virtual-labs-a693a.appspot.com",
  messagingSenderId: "980587297692",
  appId: "1:980587297692:web:59f6f255d49e660ba3e659",
  measurementId: "G-M9YB3KQ2M8"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function gotoHome() {
  window.location.href = "/home";
}

function redirectResult() {
  var PcallBack = function(result){
    sessionStorage.setItem("user", JSON.stringify(result.user));
    gotoHome();
  };

  var NcallBack = function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorMessage);
    window.alert('there is an internal error please contact administrator\n' + errorMessage + '/n' + errorCode);
  };

  firebase.auth().getRedirectResult().then(PcallBack).catch(NcallBack);
}

function loginUser() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  firebase.auth().signInWithRedirect(provider).then(e=>redirectResult());
}

function checkUser() {

  firebase.auth().onAuthStateChanged( (user) => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      gotoHome();
    } else {
      loginUser();
    }
  });
}
window.onload = function() {
  checkUser();
}