importScripts('https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.4/firebase-messaging.js');
// Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDQsvFe8enUcw3TB0EWxhhpH5Rxj2g4hx0",
      authDomain: "t-test-b0c6f.firebaseapp.com",
      databaseURL: "https://t-test-b0c6f.firebaseio.com",
      projectId: "t-test-b0c6f",
      storageBucket: "t-test-b0c6f.appspot.com",
      messagingSenderId: "933347335505",
      appId: "1:933347335505:web:d58c7438fcc3bbb8f44770",
    };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
  messaging.usePublicVapidKey(BNCapWGUWGWh_EUuysRlO1Ra9fSSegYNRWXLzhvzlxHpNfL4fxn4rzSw6z21J1nzNnZvdkjVRmMcqWEwAtPzsE8);
  messaging.onBackgroundMessage(function(payload) {
    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.message,
      icon:'PATH TO ICON IF ANY',
      data: { url:payload.data.onClick }, //the url which we gonna use later
    };
    return self.registration.showNotification(notificationTitle,notificationOptions);
  });
  //Code for adding event on click of notification
  self.addEventListener('notificationclick', function(event) {
    let url = event.notification.data.url;
    event.notification.close(); 
    event.waitUntil(
      clients.matchAll({type: 'window'}).then( windowClients => {
        // Check if there is already a window/tab open with the target URL
        for (var i = 0; i < windowClients.length; i++) {
          var client = windowClients[i];
          // If so, just focus it.
          if (client.url === url && 'focus' in client) {
            return client.focus();
          }
        }
        // If not, then open the target URL in a new window/tab.
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
    );
  });
