/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/Context */ \"./context/Context.jsx\");\n/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cart */ \"./components/Cart.jsx\");\n/* harmony import */ var _szhsin_react_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @szhsin/react-menu */ \"./node_modules/@szhsin/react-menu/dist/es/index.js\");\n/* harmony import */ var _szhsin_react_menu_dist_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @szhsin/react-menu/dist/index.css */ \"./node_modules/@szhsin/react-menu/dist/index.css\");\n/* harmony import */ var _szhsin_react_menu_dist_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_szhsin_react_menu_dist_index_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction clearLocalStorage() {\n    localStorage.clear(); // clear the entire local storage\n}\nfunction logout() {\n    clearLocalStorage();\n}\nconst Navbar = ()=>{\n    _s();\n    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_4__.Message_data);\n    const { showCart , setShowCart , totalQty  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_4__.Message_data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/assets/logo.png\",\n                            width: 25,\n                            height: 25\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"TheBoatStore\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-subcontainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"profile\",\n                        children: user && user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_szhsin_react_menu__WEBPACK_IMPORTED_MODULE_8__.Menu, {\n                            className: \"menu\",\n                            menuButton: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_szhsin_react_menu__WEBPACK_IMPORTED_MODULE_8__.MenuButton, {\n                                className: \"menu-button\",\n                                children: user.name\n                            }, void 0, false, void 0, void 0),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_szhsin_react_menu__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {\n                                    className: \"menuitem\",\n                                    children: user.name\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_szhsin_react_menu__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {\n                                    className: \"menuitem\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/user\",\n                                        children: \"My Orders\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 46\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_szhsin_react_menu__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {\n                                    className: \"menuitem\",\n                                    onClick: ()=>{\n                                        logout();\n                                    },\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, undefined) : null\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"cart-icon\",\n                        onClick: ()=>{\n                            if (showCart) {\n                                setShowCart(false);\n                            } else {\n                                setShowCart(true);\n                            }\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiOutlineShopping, {}, void 0, false, {\n                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"cart-item-qty\",\n                                children: totalQty\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            showCart ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                lineNumber: 52,\n                columnNumber: 19\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"1Oc1GWirCdL88E/ucQZb8UZwTI8=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNYO0FBQ29CO0FBQ2xCO0FBQ21CO0FBQ2Y7QUFDVDtBQUN1QztBQUN0QjtBQUNIO0FBQ3ZDLFNBQVNZLG9CQUFvQjtJQUMzQkMsYUFBYUMsS0FBSyxJQUFJLGlDQUFpQztBQUN6RDtBQUVBLFNBQVNDLFNBQVE7SUFDZkg7QUFDRjtBQUNBLE1BQU1JLFNBQVMsSUFBTTs7SUFFbkIsTUFBTSxFQUFDQyxLQUFJLEVBQUMsR0FBR1gsaURBQVVBLENBQUNELDBEQUFZQTtJQUN0QyxNQUFNLEVBQUNhLFNBQVEsRUFBRUMsWUFBVyxFQUFDQyxTQUFRLEVBQUMsR0FBR2QsaURBQVVBLENBQUNELDBEQUFZQTtJQUNoRSxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBRUQsV0FBVTswQkFDWCw0RUFBQ3BCLGtEQUFJQTtvQkFBQ3NCLE1BQU07O3NDQUNWLDhEQUFDcEIsbURBQUtBOzRCQUFDcUIsS0FBTTs0QkFBbUJDLE9BQU87NEJBQUlDLFFBQVU7Ozs7OztzQ0FDckQsOERBQUNDO3NDQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHViw4REFBQ1A7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDTTt3QkFBS04sV0FBVTtrQ0FDYkwsUUFBUUEscUJBQ1AsOERBQUNULG9EQUFJQTs0QkFBQ2MsV0FBVzs0QkFBT08sMEJBQVksOERBQUNuQiwwREFBVUE7Z0NBQUNZLFdBQVU7MENBQWVMLEtBQUthLElBQUk7Ozs4Q0FDaEYsOERBQUNyQix3REFBUUE7b0NBQUNhLFdBQVU7OENBQVlMLEtBQUthLElBQUk7Ozs7Ozs4Q0FDekMsOERBQUNyQix3REFBUUE7b0NBQUNhLFdBQVU7OENBQVcsNEVBQUNwQixrREFBSUE7d0NBQUNzQixNQUFNO2tEQUFROzs7Ozs7Ozs7Ozs4Q0FDbkQsOERBQUNmLHdEQUFRQTtvQ0FBQ2EsV0FBVTtvQ0FBV1MsU0FBUyxJQUFJO3dDQUFDaEI7b0NBQVE7OENBQUc7Ozs7Ozs7Ozs7O3dDQUNqRCxJQUFJOzs7Ozs7a0NBR2pCLDhEQUFDaUI7d0JBQU9DLE1BQU87d0JBQVNYLFdBQVU7d0JBQVlTLFNBQVMsSUFBSTs0QkFDekQsSUFBR2IsVUFBUztnQ0FDVkMsWUFBWSxLQUFLOzRCQUNuQixPQUNJO2dDQUNGQSxZQUFZLElBQUk7NEJBQ2xCLENBQUM7d0JBQ0g7OzBDQUNFLDhEQUFDaEIsNkRBQWlCQTs7Ozs7MENBQ2xCLDhEQUFDeUI7Z0NBQUtOLFdBQVU7MENBQWlCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR3BDRix5QkFBVyw4REFBQ1gsNkNBQUlBOzs7OzRCQUFNLElBQUk7Ozs7Ozs7QUFHakM7R0FyQ01TO0tBQUFBO0FBdUNOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzeD8zYWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7QWlPdXRsaW5lU2hvcHBpbmd9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgTWVzc2FnZV9kYXRhIH0gZnJvbSAnLi4vY29udGV4dC9Db250ZXh0J1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXJ0IGZyb20gJy4vQ2FydCdcclxuaW1wb3J0IHsgTWVudSwgTWVudUl0ZW0sIE1lbnVCdXR0b24gfSBmcm9tICdAc3poc2luL3JlYWN0LW1lbnUnO1xyXG5pbXBvcnQgJ0BzemhzaW4vcmVhY3QtbWVudS9kaXN0L2luZGV4LmNzcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmZ1bmN0aW9uIGNsZWFyTG9jYWxTdG9yYWdlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpOyAvLyBjbGVhciB0aGUgZW50aXJlIGxvY2FsIHN0b3JhZ2VcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nb3V0KCl7XHJcbiAgY2xlYXJMb2NhbFN0b3JhZ2UoKTtcclxufVxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3Qge3VzZXJ9ID0gdXNlQ29udGV4dChNZXNzYWdlX2RhdGEpO1xyXG4gIGNvbnN0IHtzaG93Q2FydCwgc2V0U2hvd0NhcnQsdG90YWxRdHl9ID0gdXNlQ29udGV4dChNZXNzYWdlX2RhdGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWNvbnRhaW5lcic+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0nbG9nbyc+XHJcbiAgICAgICAgPExpbmsgaHJlZj0gJy8nPlxyXG4gICAgICAgICAgPEltYWdlIHNyYyA9IFwiL2Fzc2V0cy9sb2dvLnBuZ1wiIHdpZHRoPXsyNX0gaGVpZ2h0ID0gezI1fS8+XHJcbiAgICAgICAgICA8c3Bhbj5UaGVCb2F0U3RvcmU8L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItc3ViY29udGFpbmVyJz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Byb2ZpbGUnPlxyXG4gICAgICAgICAge3VzZXIgJiYgdXNlciAgPyBcclxuICAgICAgICAgICAgPE1lbnUgY2xhc3NOYW1lPSBcIm1lbnVcIiBtZW51QnV0dG9uPXs8TWVudUJ1dHRvbiBjbGFzc05hbWU9XCJtZW51LWJ1dHRvblwiPnt1c2VyLm5hbWV9PC9NZW51QnV0dG9uPn0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGNsYXNzTmFtZT1cIm1lbnVpdGVtXCI+e3VzZXIubmFtZX08L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBjbGFzc05hbWU9XCJtZW51aXRlbVwiPjxMaW5rIGhyZWY9ICcvdXNlcic+TXkgT3JkZXJzPC9MaW5rPjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGNsYXNzTmFtZT1cIm1lbnVpdGVtXCIgb25DbGljaz17KCk9Pntsb2dvdXQoKX19PkxvZ291dDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8L01lbnU+ICA6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlID0gJ2J1dHRvbicgY2xhc3NOYW1lPSdjYXJ0LWljb24nIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICBpZihzaG93Q2FydCl7XHJcbiAgICAgICAgICAgIHNldFNob3dDYXJ0KGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldFNob3dDYXJ0KHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgPEFpT3V0bGluZVNob3BwaW5nIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcnQtaXRlbS1xdHknPnt0b3RhbFF0eX08L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0NhcnQgPyg8Q2FydC8+KSA6IG51bGx9XHJcbiAgICA8L2Rpdj4gXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJBaU91dGxpbmVTaG9wcGluZyIsIkltYWdlIiwiTWVzc2FnZV9kYXRhIiwidXNlQ29udGV4dCIsIkNhcnQiLCJNZW51IiwiTWVudUl0ZW0iLCJNZW51QnV0dG9uIiwidXNlUm91dGVyIiwiY2xlYXJMb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsImxvZ291dCIsIk5hdmJhciIsInVzZXIiLCJzaG93Q2FydCIsInNldFNob3dDYXJ0IiwidG90YWxRdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwic3BhbiIsIm1lbnVCdXR0b24iLCJuYW1lIiwib25DbGljayIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

});