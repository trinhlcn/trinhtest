importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

  var firebaseConfig = {
      apiKey: "AIzaSyDQsvFe8enUcw3TB0EWxhhpH5Rxj2g4hx0",
          authDomain: "t-test-b0c6f.firebaseapp.com",
          projectId: "t-test-b0c6f",
          storageBucket: "t-test-b0c6f.appspot.com",
          messagingSenderId: "933347335505",
          appId: "1:933347335505:web:d58c7438fcc3bbb8f44770",
          measurementId: "G-DSPXJ9XZ15"
  };// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
  messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
  });
  self.addEventListener('notificationclick', event => {
     console.log(event)
  });
