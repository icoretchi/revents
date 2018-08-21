import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDqhX315k-4pAh6k0aUG8XMZOGBQMUtcpY',
  authDomain: 'revents-213611.firebaseapp.com',
  databaseURL: 'https://revents-213611.firebaseio.com',
  projectId: 'revents-213611',
  storageBucket: 'revents-213611.appspot.com',
  messagingSenderId: '243349157738',
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firebase;
