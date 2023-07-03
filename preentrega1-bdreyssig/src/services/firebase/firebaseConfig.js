// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  getDocs,
  collection,
  where,
  query,
  getDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5hnX1fLdveVNEjqrnkCOo_CIGNIZBqRo",
  authDomain: "proyectofinal-5e6de.firebaseapp.com",
  projectId: "proyectofinal-5e6de",
  storageBucket: "proyectofinal-5e6de.appspot.com",
  messagingSenderId: "375425842853",
  appId: "1:375425842853:web:59918b4a864015bba6174c",
  measurementId: "G-LE2Q9LCVKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

export const getFilms = async (collectionName) => {
  try {
    const db = getFirestore();
    const filmsCollection = collection(db, collectionName);
    const querySnapshot = await getDocs(filmsCollection);

    const films = [];
    querySnapshot.forEach((doc) => {
      films.push({ id: doc.id, ...doc.data() });
    });

    return films;
  } catch (error) {
    throw new Error("Error al obtener los films");
  }
};

export const getFilmsById = async (id) => {
  const db = getFirestore(); // Obtén la instancia de Firestore

  // Crea una consulta para obtener los documentos con el campo "id" igual al valor proporcionado
  const q = query(collection(db, "films"), where("id", "==", parseInt(id)));

  try {
    const querySnapshot = await getDoc(q); // Ejecuta la consulta y obtén los resultados

    if (querySnapshot.empty) {
      return null; // No se encontraron documentos que coincidan con el ID proporcionado
    }

    // Si se encontraron documentos, devuelve el primero de ellos
    const document = querySnapshot.docs[0];
    return document.data();
  } catch (error) {
    console.error("Error retrieving film document:", error);
    throw error;
  }
};

export const getFilmsByCategory = async (categoryId) => {
  try {
    const filmsCollectionRef = collection(db, "films"); // Reemplaza 'films' con el nombre de tu colección en Firestore
    const filmsQuery = query(
      filmsCollectionRef,
      where("categoryId", "==", categoryId)
    );

    const querySnapshot = await getDoc(filmsQuery);
    const films = [];

    querySnapshot.forEach((doc) => {
      const film = doc.data();
      films.push(film);
    });

    return films;
  } catch (error) {
    console.error("Error getting films by category:", error);
    throw error;
  }
};
