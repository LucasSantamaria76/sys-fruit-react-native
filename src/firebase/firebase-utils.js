import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';
import { initialState } from '../constants';

const app = initializeApp(firebaseConfig);

// FireStore => almacenamiento
export const db = getFirestore(app);

export const saveMovements = async (data, day) => {
  const docReference = doc(db, `movements of the day/${day}`);

  try {
    await setDoc(docReference, data);
  } catch (error) {
    console.log(error);
  }
};

export const getMovements = async (day) => {
  const docRef = doc(db, 'movements of the day', day);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists())
    setDoc(docRef, {
      ...initialState,
      currentDay: day,
      monthAndYear: day.slice(-7),
    });

  return docSnap.data();
};

export const getDocuments = async (date) => {
  const q = query(collection(db, 'movements of the day'), where('monthAndYear', '==', date));
  return await getDocs(q);
  /*  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
  }); */
};

// Auth => autenticación (login, registro, etc)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Crear un usuario
export const register = async (email, password) => {
  const credentials = await createUserWithEmailAndPassword(auth, email, password);
  return credentials;
};

// Iniciar sesion con correo contraseña
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
