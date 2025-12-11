// Firebase Configuration
// Pastikan Anda telah membuat project di Firebase Console dan mengaktifkan Authentication dan Firestore
// Ganti nilai-nilai di bawah ini dengan konfigurasi Firebase Anda sendiri

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

// Export for use in other files
export { auth, db, firebase };