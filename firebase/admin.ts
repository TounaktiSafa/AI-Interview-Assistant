import { cert, initializeApp, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const initFirebaseAdmin = () => {
    if (!getApps().length) {
        if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !process.env.FIREBASE_PRIVATE_KEY) {
            console.error("❌ Missing Firebase Admin environment variables!");
            return;
        }

        initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            }),
        });

        console.log("✅ Firebase Admin Initialized");
    }

    return {
        auth: getAuth(),
        db: getFirestore(),
    };
};

// Ensure Firebase is initialized before exporting auth and db
const { auth, db } = initFirebaseAdmin() || {};

export { auth, db };
