import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCL2cc8VzVqmPShsTOgO-89LC8CqTFRl2U',
  authDomain: 'naifei-11a2c.firebaseapp.com',
  databaseURL: 'https://naifei-11a2c-default-rtdb.firebaseio.com',
  projectId: 'naifei-11a2c',
  storageBucket: 'naifei-11a2c.appspot.com',
  messagingSenderId: '536556643718',
  appId: '1:536556643718:web:f4913fa3b6cc88c7033807',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
