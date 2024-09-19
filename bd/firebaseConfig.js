var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://studyshare-6065a.firebaseio.com" // URL do Realtime Database (se estiver usando)
});

const db = admin.firestore();

module.exports = db;
