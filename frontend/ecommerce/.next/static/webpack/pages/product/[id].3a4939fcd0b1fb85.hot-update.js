"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./src/pages/product/[id].jsx":
/*!************************************!*\
  !*** ./src/pages/product/[id].jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ \"./components/index.js\");\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/Context */ \"./context/Context.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProductDetails = (param)=>{\n    let { product , likeProducts  } = param;\n    _s();\n    const { qty  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_3__.Message_data);\n    const { incQty , decQty  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_3__.Message_data);\n    const { onAdd  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_3__.Message_data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-detail-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"image-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: product.image,\n                                alt: \"\",\n                                className: \"product-detail-image\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-detail-desc\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                lineNumber: 21,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"reviews\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                            fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                            fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                            lineNumber: 25,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                            fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                            fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineStar, {}, void 0, false, {\n                                            fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Details\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: product.description\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"product-name\",\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"₹\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"buying-price\",\n                                        children: product.buying_price\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 38\n                                    }, undefined),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"red\"\n                                        },\n                                        children: [\n                                            product.discount,\n                                            \"%\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 99\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"product-price\",\n                                children: [\n                                    \"₹\",\n                                    product.selling_price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"quantity\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Quantity\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"quantity-desc\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"minus\",\n                                                onClick: ()=>decQty(),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineMinus, {}, void 0, false, {\n                                                    fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 80\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"num\",\n                                                children: qty\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"plus\",\n                                                onClick: ()=>incQty(),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlinePlus, {}, void 0, false, {\n                                                    fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 79\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"add-to-cart\",\n                                        onClick: ()=>onAdd(product, qty),\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"buy-now\",\n                                        children: \"Buy Now\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"maylike-products-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"You may also like\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"marquee\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"maylike-products-container z\",\n                            children: likeProducts.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Product, {\n                                    product: item\n                                }, item._id, false, {\n                                    fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\product\\\\[id].jsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProductDetails, \"7A0CT11BTuDiQCRrWunWMbE+mRI=\");\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvW2lkXS5qc3g/ZGM2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lTWludXMsIEFpT3V0bGluZVBsdXMsIEFpRmlsbFN0YXIsIEFpT3V0bGluZVN0YXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VfZGF0YSB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L0NvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoe3Byb2R1Y3QsIGxpa2VQcm9kdWN0c30pID0+e1xyXG4gICAgY29uc3Qge3F0eX0gPSB1c2VDb250ZXh0KE1lc3NhZ2VfZGF0YSk7XHJcbiAgICBjb25zdCB7aW5jUXR5LCBkZWNRdHl9ID0gdXNlQ29udGV4dChNZXNzYWdlX2RhdGEpO1xyXG4gICAgY29uc3Qge29uQWRkfSA9IHVzZUNvbnRleHQoTWVzc2FnZV9kYXRhKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWltYWdlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntwcm9kdWN0Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxTdGFyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsU3Rhci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbFN0YXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxTdGFyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lU3Rhcj48L0FpT3V0bGluZVN0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5EZXRhaWxzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3Byb2R1Y3QtbmFtZSc+e3Byb2R1Y3QubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiYjODM3Nzs8c3BhbiBjbGFzc05hbWU9J2J1eWluZy1wcmljZSc+e3Byb2R1Y3QuYnV5aW5nX3ByaWNlfTwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvciA6ICdyZWQnfX0+e3Byb2R1Y3QuZGlzY291bnR9JTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncHJvZHVjdC1wcmljZSc+JiM4Mzc3O3twcm9kdWN0LnNlbGxpbmdfcHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UXVhbnRpdHk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicXVhbnRpdHktZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1pbnVzXCIgb25DbGljaz17KCk9PmRlY1F0eSgpfT48QWlPdXRsaW5lTWludXMvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1cIj57cXR5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbHVzXCIgb25DbGljaz17KCk9PmluY1F0eSgpfT48QWlPdXRsaW5lUGx1cy8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJhZGQtdG8tY2FydFwiIG9uQ2xpY2s9eygpPT5vbkFkZChwcm9kdWN0LCBxdHkpfT5BZGQgdG8gQ2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnV5LW5vd1wiPkJ1eSBOb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXlsaWtlLXByb2R1Y3RzLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Zb3UgbWF5IGFsc28gbGlrZTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcnF1ZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heWxpa2UtcHJvZHVjdHMtY29udGFpbmVyIHpcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bGlrZVByb2R1Y3RzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdCBrZXk9e2l0ZW0uX2lkfSBwcm9kdWN0PXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PntcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wcm9kdWN0cy9nZXRhbGxwcm9kdWN0cy9gXHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGF4aW9zLmdldChxdWVyeSlcclxuICAgIGNvbnN0IF9wcm9kdWN0cyA9IGF3YWl0IHByb2R1Y3RzLmRhdGFcclxuICAgIGNvbnN0IHBhdGhzID0gX3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgaWQ6IFN0cmluZyhwcm9kdWN0LmlkKVxyXG4gICAgICAgIH1cclxuICAgIH0pKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocywgXHJcbiAgICAgICAgZmFsbGJhY2sgOiAnYmxvY2tpbmcnXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7cGFyYW1zIDogaWR9KSA9PntcclxuICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3Byb2R1Y3RzL2dldFNpbmdsZVByb2R1Y3QvJHtpZC5pZH0vYFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChxdWVyeSlcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYXRhLmRhdGFcclxuICAgIGNvbnN0IGxpa2VfcXVlcnkgPSBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3Byb2R1Y3RzL2ZldGNoQnlDYXRlZ29yeS8/bXlfcGFyYW09JHtwcm9kdWN0LmNhdGVnb3J5fWBcclxuICAgIGNvbnN0IGxpa2VQcm9kdWN0ID0gYXdhaXQgYXhpb3MuZ2V0KGxpa2VfcXVlcnkpXHJcbiAgICBjb25zdCBsaWtlUHJvZHVjdHMgPSBsaWtlUHJvZHVjdC5kYXRhXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wcyA6IHtwcm9kdWN0LCBsaWtlUHJvZHVjdHN9XHJcbiAgICB9XHJcbiAgfVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsczsiXSwibmFtZXMiOlsiUmVhY3QiLCJBaU91dGxpbmVNaW51cyIsIkFpT3V0bGluZVBsdXMiLCJBaUZpbGxTdGFyIiwiQWlPdXRsaW5lU3RhciIsIlByb2R1Y3QiLCJNZXNzYWdlX2RhdGEiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiUHJvZHVjdERldGFpbHMiLCJwcm9kdWN0IiwibGlrZVByb2R1Y3RzIiwicXR5IiwiaW5jUXR5IiwiZGVjUXR5Iiwib25BZGQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsImgxIiwibmFtZSIsImg0IiwicCIsImRlc2NyaXB0aW9uIiwic3BhbiIsImJ1eWluZ19wcmljZSIsInN0eWxlIiwiY29sb3IiLCJkaXNjb3VudCIsInNlbGxpbmdfcHJpY2UiLCJoMyIsIm9uQ2xpY2siLCJidXR0b24iLCJ0eXBlIiwiaDIiLCJtYXAiLCJpdGVtIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/product/[id].jsx\n"));

/***/ })

});