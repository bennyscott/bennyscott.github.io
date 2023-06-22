var config = {
    apiKey: "AIzaSyCeRIy2_EdJLUJyziZISx-GDHuNorOeUE8",
    authDomain: "hit-counter-7bb0f.firebaseapp.com",
    databaseURL: "https://hit-counter-7bb0f.firebaseio.com",
    projectId: "hit-counter-7bb0f",
    storageBucket: "hit-counter-7bb0f.appspot.com",
    messagingSenderId: "600917152685"
  };
  var app = firebase.initializeApp(config);
  var db = app.database();
  var hitsRef = db.ref('hits');
  var hits = document.querySelector("#hits");
  

  hitsRef.once('value').then(function(snapshot) {
    incrementHits(snapshot.val().numHits);
  });
  
  function incrementHits(curValue) {
    var newValue = curValue + 1;
    hits.innerHTML = newValue;
    setNewHitsinDB(newValue);
  }
  
  function setNewHitsinDB(value) {
    hitsRef.set({
      numHits: value
    });
  }