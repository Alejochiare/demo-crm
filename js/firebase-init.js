/* ═══════════════════════════════════════════════════════════════
   DEMO CRM — js/firebase-init.js

   Pegá acá el firebaseConfig que te da la consola de Firebase
   (Configuración del proyecto → tus apps → app Web → "Config").
   No es un dato secreto: se puede commitear tranquilo, la seguridad
   real la dan las reglas de Firestore/Storage, no ocultar estas claves.
   ═══════════════════════════════════════════════════════════════ */

const firebaseConfig = {
  apiKey:            "AIzaSyDJ4gdNqE7MsQ2CIGG4dgE0NdeX0QgnQBo",
  authDomain:        "fir-crm-1fdc0.firebaseapp.com",
  projectId:         "fir-crm-1fdc0",
  storageBucket:     "fir-crm-1fdc0.firebasestorage.app",
  messagingSenderId: "823099614739",
  appId:             "1:823099614739:web:85db05db11c69553ad81e6",
};

firebase.initializeApp(firebaseConfig);
