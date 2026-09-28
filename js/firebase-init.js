/* ═══════════════════════════════════════════════════════════════
   DEMO CRM — js/firebase-init.js

   Pegá acá el firebaseConfig que te da la consola de Firebase
   (Configuración del proyecto → tus apps → app Web → "Config").
   No es un dato secreto: se puede commitear tranquilo, la seguridad
   real la dan las reglas de Firestore/Storage, no ocultar estas claves.
   ═══════════════════════════════════════════════════════════════ */

const firebaseConfig = {
  apiKey:            "PEGAR_AQUI",
  authDomain:        "PEGAR_AQUI",
  projectId:         "PEGAR_AQUI",
  storageBucket:     "PEGAR_AQUI",
  messagingSenderId: "PEGAR_AQUI",
  appId:             "PEGAR_AQUI",
};

firebase.initializeApp(firebaseConfig);
