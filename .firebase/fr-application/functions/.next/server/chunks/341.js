"use strict";
exports.id = 341;
exports.ids = [341];
exports.modules = {

/***/ 4866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Loader({ color  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        role: "status",
        className: `m-auto h-7 w-7 animate-spin text-gray-200 dark:text-transparent ${color}`,
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "currentFill"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 4944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6758);
/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3506);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_1__, _lib_stripe__WEBPACK_IMPORTED_MODULE_2__]);
([_stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_1__, _lib_stripe__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useSubscription(user) {
    const [subscription, setSubscription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!user) return;
        (0,_stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_1__/* .onCurrentUserSubscriptionUpdate */ .mN)(_lib_stripe__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, (snapshot)=>{
            setSubscription(snapshot.subscriptions.filter((subscription)=>subscription.status === "active" || subscription.status === "trialing")[0]);
        });
    }, [
        user
    ]);
    return subscription;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSubscription);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dC": () => (/* binding */ loadCheckout),
/* harmony export */   "pr": () => (/* binding */ goToBillingPortal)
/* harmony export */ });
/* harmony import */ var _stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6758);
/* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1546);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(236);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_0__, _firebase_functions__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_2__]);
([_stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_0__, _firebase_functions__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const payments = (0,_stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_0__/* .getStripePayments */ .pX)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    productsCollection: "products",
    customersCollection: "customers"
});
const loadCheckout = async (priceId)=>{
    await (0,_stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_0__/* .createCheckoutSession */ .Mc)(payments, {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin
    }).then((snapshot)=>window.location.assign(snapshot.url)).catch((error)=>console.log(error.message));
};
const goToBillingPortal = async ()=>{
    const instance = (0,_firebase_functions__WEBPACK_IMPORTED_MODULE_1__.getFunctions)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, "asia-northeast1");
    const functionRef = (0,_firebase_functions__WEBPACK_IMPORTED_MODULE_1__.httpsCallable)(instance, "ext-firestore-stripe-payments-createPortalLink");
    await functionRef({
        returnUrl: `${window.location.origin}/account`
    }).then(({ data  })=>window.location.assign(data.url)).catch((error)=>console.log(error.message));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (payments);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;