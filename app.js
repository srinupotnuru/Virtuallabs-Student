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
  window.location.href = '/home'
}

function gotoLogin() {
  window.location.href='/login';
}

function checkUser() {
  var callBack = (user) => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      gotoHome();
    }
  };
  firebase.auth().onAuthStateChanged(callBack);
}
