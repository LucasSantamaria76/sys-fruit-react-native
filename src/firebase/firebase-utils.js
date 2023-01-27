import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import { doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';
import dayjs from 'dayjs';

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

export const getSales = async (typeOp) => {
  const docRef = doc(db, typeOp, dayjs().format('DD-MM-YYYY'));
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) return docSnap.data();

  await setDoc(docRef, {});
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
