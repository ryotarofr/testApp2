(() => {
var exports = {};
exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 1388:
/***/ ((module) => {

// Exports
module.exports = {
	"h4": "Menbership_h4___tcEK",
	"cancelButton": "Menbership_cancelButton__JvMoE"
};


/***/ }),

/***/ 6383:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Account_wrapper__19b89",
	"main": "Account_main__FH_Yn",
	"mainMargin": "Account_mainMargin__N_fmX",
	"mainFlex": "Account_mainFlex___u3t2",
	"created": "Account_created__FGp51",
	"plan": "Account_plan__Eb_UB",
	"planDetail": "Account_planDetail___vSw6",
	"planName": "Account_planName___xAvV",
	"settings": "Account_settings__TVLe7",
	"settingDetail": "Account_settingDetail__u9qsV",
	"logout": "Account_logout__7MSEy"
};


/***/ }),

/***/ 7680:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menbership_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1388);
/* harmony import */ var _Menbership_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Menbership_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1159);
/* harmony import */ var _hooks_useSubscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4944);
/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3506);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4866);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__, _hooks_useSubscription__WEBPACK_IMPORTED_MODULE_3__, _lib_stripe__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__, _hooks_useSubscription__WEBPACK_IMPORTED_MODULE_3__, _lib_stripe__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Membership() {
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const subscription = (0,_hooks_useSubscription__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(user);
    const [isBillingLoading, setBillingLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const manageSubscription = ()=>{
        if (subscription) {
            setBillingLoading(true);
            (0,_lib_stripe__WEBPACK_IMPORTED_MODULE_4__/* .goToBillingPortal */ .pr)();
        }
    };
    console.log(subscription);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-2 py-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: (_Menbership_module_css__WEBPACK_IMPORTED_MODULE_6___default().h4),
                        children: "メンバーシップ && サブスクリプション登録"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        disabled: isBillingLoading || !subscription,
                        className: (_Menbership_module_css__WEBPACK_IMPORTED_MODULE_6___default().cancelButton),
                        onClick: manageSubscription,
                        children: isBillingLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            color: "dark:fill-[#e50914]"
                        }) : "Cancel Membership"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-span-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col justify-between border-b border-white/10 py-4 md:flex-row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "font-medium",
                                        children: [
                                            "Email：",
                                            user?.email
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-[gray]",
                                        children: "Password： ********"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md:text-right"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col justify-between pt-4 pb-4 md:flex-row md:pb-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        subscription?.cancel_at_period_end ? "Your membership will end on " : "サブスクリプションの更新日： ",
                                        subscription?.current_period_end
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md:text-right"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Membership);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2405:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6383);
/* harmony import */ var _styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6758);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Menbership_Membership__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7680);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1159);
/* harmony import */ var _hooks_useSubscription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4944);
/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3506);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_1__, _components_Menbership_Membership__WEBPACK_IMPORTED_MODULE_5__, _hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__, _hooks_useSubscription__WEBPACK_IMPORTED_MODULE_7__, _lib_stripe__WEBPACK_IMPORTED_MODULE_8__]);
([_stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_1__, _components_Menbership_Membership__WEBPACK_IMPORTED_MODULE_5__, _hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__, _hooks_useSubscription__WEBPACK_IMPORTED_MODULE_7__, _lib_stripe__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Account({ products  }) {
    console.log(products);
    const { user , logout , loading  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const subscription = (0,_hooks_useSubscription__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(user);
    const [isBillingLoading, setBillingLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    if (loading) return null;
    console.log(subscription);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Account Settings - Netflix"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: `bg-[#141414]`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/account"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().mainMargin),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().mainFlex),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().account),
                                    children: "Account"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().items),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().created),
                                        children: [
                                            "メンバー登録日： ",
                                            subscription?.created
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().hr)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Menbership_Membership__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().hr)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().plan),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().planDetail),
                                    children: "プラン詳細"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().planName),
                                    children: products.filter((product)=>product.id === subscription?.product)[0]?.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().hr)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().settings),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().settingDetail),
                                    children: "設定"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_styles_Account_module_css__WEBPACK_IMPORTED_MODULE_9___default().logout),
                                    onClick: logout,
                                    children: "SignOut"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Account);
const getStaticProps = async ()=>{
    const products = await (0,_stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_1__/* .getProducts */ .Xp)(_lib_stripe__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        includePrices: true,
        activeOnly: true
    }).then((res)=>res).catch((error)=>console.log(error.message));
    return {
        props: {
            products
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 857:
/***/ ((module) => {

"use strict";
module.exports = require("idb");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 752:
/***/ ((module) => {

"use strict";
module.exports = require("tslib");

/***/ }),

/***/ 1401:
/***/ ((module) => {

"use strict";
module.exports = import("@firebase/firestore");;

/***/ }),

/***/ 1546:
/***/ ((module) => {

"use strict";
module.exports = import("@firebase/functions");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ 8421:
/***/ ((module) => {

"use strict";
module.exports = import("idb");;

/***/ }),

/***/ 3685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 9796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,663,159,341], () => (__webpack_exec__(2405)));
module.exports = __webpack_exports__;

})();