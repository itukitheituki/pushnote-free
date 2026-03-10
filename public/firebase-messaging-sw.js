// firebase-messaging-sw.js
// ⚠️ public/ フォルダのルートに配置してください

importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// ===== index.html と同じ firebaseConfig を入れてください =====
const firebaseConfig = {
  apiKey: "AIzaSyB9aNeCke6oASjEOQ-Kua1rPuuoIFiox48",
  authDomain: "mail-push-7e6c3.firebaseapp.com",
  projectId: "mail-push-7e6c3",
  storageBucket: "mail-push-7e6c3.firebasestorage.app",
  messagingSenderId: "146273431112",
  appId: "1:146273431112:web:983365e74c9234cd80f27d",
  measurementId: "G-058XNZG5EV"
};
// ===========================================================

const messaging = firebase.messaging();

// バックグラウンド受信
messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || '通知', {
    body: body || '',
    icon: '/icon.png',
    tag: 'pushnote-' + Date.now(),
  });
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
