"use strict";
exports.id = 159;
exports.ids = [159];
exports.modules = {

/***/ 236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export db */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBF8oYbHkXc-3DjRTM4UIXU6DloRluf8ZQ",
    authDomain: "fr-application.firebaseapp.com",
    projectId: "fr-application",
    storageBucket: "fr-application.appspot.com",
    messagingSenderId: "13197666613",
    appId: "1:13197666613:web:be73f2b98d4ec58728047c"
};
// Initialize Firebase
const app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);
 // import { FirebaseApp, getApps, initializeApp } from 'firebase/app'
 // import { getFirestore } from 'firebase/firestore'
 // import { getAuth } from 'firebase/auth'
 // const firebaseApp = getFirebaseApp()
 // export const db = getFirestore(firebaseApp)
 // export const auth = getAuth();
 // export function getFirebaseApp(): FirebaseApp {
 // 	const apps = getApps()
 // 	if (apps.length > 0) {
 // 		return apps[0]
 // 	}
 // 	return initializeApp({
 // 		apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
 // 		authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
 // 		projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
 // 		storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
 // 		messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
 // 		appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
 // }) }

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "Z": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(236);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({
    user: null,
    signUp: async ()=>{},
    signIn: async ()=>{},
    logout: async ()=>{},
    error: null,
    loading: false
});
const AuthProvider = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [initialLoading, setInitialLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I, (user)=>{
            if (user) {
                // Logged in...
                setUser(user);
                setLoading(false);
            } else {
                // Not logged in...
                setUser(null);
                setLoading(true);
                router.push("/login");
            }
            setInitialLoading(false);
        }), [
        _firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I
    ]);
    const signUp = async (email, password)=>{
        setLoading(true);
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I, email, password).then((userCredential)=>{
            setUser(userCredential.user);
            router.push("/");
            setLoading(false);
        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));
    };
    const signIn = async (email, password)=>{
        setLoading(true);
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I, email, password).then((userCredential)=>{
            setUser(userCredential.user);
            router.push("/");
            setLoading(false);
        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));
    };
    const logout = async ()=>{
        setLoading(true);
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I).then(()=>{
            setUser(null);
        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));
    };
    const memoedValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({
            user,
            signUp,
            signIn,
            error,
            loading,
            logout
        }), [
        user,
        loading,
        error
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: memoedValue,
        children: !initialLoading && children
    });
};
// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context comopnent.
function useAuth() {
    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;