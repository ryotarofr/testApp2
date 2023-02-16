(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 181:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Plans_header__3Xt4y",
	"margin": "Plans_margin__zrlLh",
	"logo": "Plans_logo__acQn5",
	"logoSpan": "Plans_logoSpan__ra86P",
	"logoutButton": "Plans_logoutButton__i0l23",
	"main": "Plans_main__CwLES",
	"mainMargin": "Plans_mainMargin__N37qi",
	"productFlex": "Plans_productFlex__Aoyvz",
	"radio": "Plans_radio__YMl2d",
	"productName": "Plans_productName__7g9Qq",
	"subscribe": "Plans_subscribe__ouBLa"
};


/***/ }),

/***/ 2579:
/***/ ((module) => {

// Exports
module.exports = {
	"tableDataTitle": "Table_tableDataTitle__U_ZRD",
	"price": "Table_price__8_12q"
};


/***/ }),

/***/ 9399:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb"
};


/***/ }),

/***/ 3505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



// import BasicMenu from './BasicMenu'
function Header() {
    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: `${isScrolled && "bg-[#141414]"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center space-x-2 md:space-x-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "hidden space-x-4 md:flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "headerLink cursor-default font-semibold text-white hover:text-white",
                            children: "Home"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "headerLink",
                            children: "TV Shows"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "headerLink",
                            children: "Movies"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "headerLink",
                            children: "New & Popular"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "headerLink",
                            children: "My List"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center space-x-4 text-sm font-light",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "hidden lg:inline",
                        children: "Kids"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/account",
                        children: "account"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 4923:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Plans_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(181);
/* harmony import */ var _Plans_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Plans_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1159);
/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3506);
/* harmony import */ var _Table_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9735);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4866);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__, _lib_stripe__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__, _lib_stripe__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// import { CheckIcon } from '@heroicons/react/outline'








function Plans({ products  }) {
    const { logout , user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const [selectedPlan, setSelectedPlan] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(products[2]);
    const [isBillingLoading, setBillingLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    console.log(products);
    const subscribeToPlan = ()=>{
        if (!user) return;
        (0,_lib_stripe__WEBPACK_IMPORTED_MODULE_4__/* .loadCheckout */ .dC)(selectedPlan?.prices[0].id);
        setBillingLoading(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: (_Plans_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Plans_module_css__WEBPACK_IMPORTED_MODULE_7___default().margin),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Plans_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo),
                                children: [
                                    "FR",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_Plans_module_css__WEBPACK_IMPORTED_MODULE_7___default().logoSpan),
                                        children: ".dev"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_Plans_module_css__WEBPACK_IMPORTED_MODULE_7___default().logoutButton),
                            onClick: logout,
                            children: "Sign Out"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: (_Plans_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Plans_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainMargin),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "mb-3 text-3xl font-medium",
                            children: "プランを選択してください"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "flex items-center gap-x-2 text-lg",
                                    children: "コンテンツの購読が自由にできます。"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "flex items-center gap-x-2 text-lg",
                                    children: "あなたへおすすめを紹介します。"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "flex items-center gap-x-2 text-lg",
                                    children: "いつでも解約可能です。"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-4 flex flex-col space-y-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex w-full items-center justify-end self-end md:w-3/5",
                                    children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_Plans_module_css__WEBPACK_IMPORTED_MODULE_7___default().productFlex),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "radio",
                                                        className: (_Plans_module_css__WEBPACK_IMPORTED_MODULE_7___default().radio),
                                                        onClick: ()=>setSelectedPlan(product)
                                                    }, product.id),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_Plans_module_css__WEBPACK_IMPORTED_MODULE_7___default().productName),
                                                        children: product.name
                                                    })
                                                ]
                                            })
                                        }))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Table_Table__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    products: products,
                                    selectedPlan: selectedPlan
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    disabled: !selectedPlan || isBillingLoading,
                                    className: (_Plans_module_css__WEBPACK_IMPORTED_MODULE_7___default().subscribe),
                                    onClick: subscribeToPlan,
                                    children: isBillingLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        color: "dark:fill-gray-300"
                                    }) : "Subscribe"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Plans);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Table_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2579);
/* harmony import */ var _Table_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Table_module_css__WEBPACK_IMPORTED_MODULE_1__);
// import { CheckIcon } from '@heroicons/react/outline'


function Table({ products , selectedPlan  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
            className: "divide-y divide-[gray]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                    className: "tableRow",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            className: (_Table_module_css__WEBPACK_IMPORTED_MODULE_1___default().tableDataTitle),
                            children: "月額料金"
                        }),
                        products.map((product)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                className: (_Table_module_css__WEBPACK_IMPORTED_MODULE_1___default().price),
                                children: [
                                    "\xa5",
                                    product.prices[0].unit_amount,
                                    "（税込）"
                                ]
                            }, product.id))
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                    className: "tableRow",
                    children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            className: `tableDataFeature ${selectedPlan?.id === product.id ? "text-[#E50914]" : "text-[gray]"}`,
                            children: product.metadata.videoQuality
                        }, product.id))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                    className: "tableRow",
                    children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            className: `tableDataFeature ${selectedPlan?.id === product.id ? "text-[#E50914]" : "text-[gray]"}`,
                            children: product.metadata.resolution
                        }, product.id))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                    className: "tableRow",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            className: "tableDataTitle",
                            children: "PC・スマホ・タブレットどの端末でも利用できます。"
                        }),
                        products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                className: `tableDataFeature ${selectedPlan?.id === product.id ? "text-[#E50914]" : "text-[gray]"}`
                            }, product.id))
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);


/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9399);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6758);
/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3506);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1159);
/* harmony import */ var _hooks_useSubscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4944);
/* harmony import */ var _components_Plans_Plans__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4923);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3505);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_3__, _lib_stripe__WEBPACK_IMPORTED_MODULE_4__, _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__, _hooks_useSubscription__WEBPACK_IMPORTED_MODULE_6__, _components_Plans_Plans__WEBPACK_IMPORTED_MODULE_7__]);
([_stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_3__, _lib_stripe__WEBPACK_IMPORTED_MODULE_4__, _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__, _hooks_useSubscription__WEBPACK_IMPORTED_MODULE_6__, _components_Plans_Plans__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Home({ products  }) {
    console.log(products);
    const { user , loading  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const subscription = (0,_hooks_useSubscription__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(user);
    if (loading || subscription === null) return null;
    if (!subscription) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Plans_Plans__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        products: products
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Create Next App"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),
                        children: [
                            "Welcome to ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://nextjs.org",
                                children: "Next.js!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),
                        children: [
                            "Get started by editing",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().code),
                                children: "pages/index.tsx"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().grid),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "https://nextjs.org/docs",
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Documentation →"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Find in-depth information about Next.js features and API."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "https://nextjs.org/learn",
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Learn →"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Learn about Next.js in an interactive course with quizzes!"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "https://github.com/vercel/next.js/tree/canary/examples",
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Examples →"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Discover and deploy boilerplate example Next.js projects."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Deploy →"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Instantly deploy your Next.js site to a public URL with Vercel."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().footer),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        "Powered by",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().logo),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: "/vercel.svg",
                                alt: "Vercel Logo",
                                width: 72,
                                height: 16
                            })
                        })
                    ]
                })
            })
        ]
    });
}
const getServerSideProps = async ()=>{
    const products = await (0,_stripe_firestore_stripe_payments__WEBPACK_IMPORTED_MODULE_3__/* .getProducts */ .Xp)(_lib_stripe__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        includePrices: true,
        activeOnly: true
    }).then((res)=>res).catch((error)=>console.log(error.message));
    // const [
    //   netflixOriginals,
    //   trendingNow,
    //   topRated,
    //   actionMovies,
    //   comedyMovies,
    //   horrorMovies,
    //   romanceMovies,
    //   documentaries,
    // ] = await Promise.all([
    //   fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    //   fetch(requests.fetchTrending).then((res) => res.json()),
    //   fetch(requests.fetchTopRated).then((res) => res.json()),
    //   fetch(requests.fetchActionMovies).then((res) => res.json()),
    //   fetch(requests.fetchComedyMovies).then((res) => res.json()),
    //   fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    //   fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    //   fetch(requests.fetchDocumentaries).then((res) => res.json()),
    // ])
    return {
        props: {
            // netflixOriginals: netflixOriginals.results,
            // trendingNow: trendingNow.results,
            // topRated: topRated.results,
            // actionMovies: actionMovies.results,
            // comedyMovies: comedyMovies.results,
            // horrorMovies: horrorMovies.results,
            // romanceMovies: romanceMovies.results,
            // documentaries: documentaries.results,
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

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

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

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,663,121,675,159,341], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();