"use strict";
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/Context */ \"./context/Context.jsx\");\n/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cart */ \"./components/Cart.jsx\");\n/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropdown */ \"./node_modules/react-dropdown/dist/index.js\");\n/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dropdown/style.css */ \"./node_modules/react-dropdown/style.css\");\n/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_4__.Message_data);\n    const { showCart , setShowCart , totalQty  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_4__.Message_data);\n    const options = [\n        \"one\",\n        \"two\",\n        \"three\"\n    ];\n    const defaultOption = options[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/assets/logo.png\",\n                            width: 25,\n                            height: 25\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"TheBoatStore\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-subcontainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"profile\",\n                        children: user && user ? //   <Menu  menuButton={<MenuButton className=\"menu-button\">{user.name}</MenuButton>}>\n                        //     <MenuItem  >{user.name}</MenuItem>\n                        //     <MenuItem  ><Link href= '/user'>My Orders</Link></MenuItem>\n                        //     <MenuItem >Logout</MenuItem>\n                        // </Menu>  : null\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dropdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            options: options,\n                            value: defaultOption,\n                            placeholder: \"Select an option\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined) : null\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"cart-icon\",\n                        onClick: ()=>{\n                            if (showCart) {\n                                setShowCart(false);\n                            } else {\n                                setShowCart(true);\n                            }\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineShopping, {}, void 0, false, {\n                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"cart-item-qty\",\n                                children: totalQty\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            showCart ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n                lineNumber: 49,\n                columnNumber: 19\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\components\\\\Navbar.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"1Oc1GWirCdL88E/ucQZb8UZwTI8=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDWDtBQUNvQjtBQUNsQjtBQUNtQjtBQUNmO0FBQ1Q7QUFDYTtBQUNKO0FBQ2xDLE1BQU1TLFNBQVMsSUFBTTs7SUFDbkIsTUFBTSxFQUFDQyxLQUFJLEVBQUMsR0FBR0osaURBQVVBLENBQUNELDBEQUFZQTtJQUN0QyxNQUFNLEVBQUNNLFNBQVEsRUFBRUMsWUFBVyxFQUFDQyxTQUFRLEVBQUMsR0FBR1AsaURBQVVBLENBQUNELDBEQUFZQTtJQUNoRSxNQUFNUyxVQUFVO1FBQ2Q7UUFBTztRQUFPO0tBQ2Y7SUFDRCxNQUFNQyxnQkFBZ0JELE9BQU8sQ0FBQyxFQUFFO0lBQ2hDLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUVELFdBQVU7MEJBQ1gsNEVBQUNmLGtEQUFJQTtvQkFBQ2lCLE1BQU07O3NDQUNWLDhEQUFDZixtREFBS0E7NEJBQUNnQixLQUFNOzRCQUFtQkMsT0FBTzs0QkFBSUMsUUFBVTs7Ozs7O3NDQUNyRCw4REFBQ0M7c0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdWLDhEQUFDUDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNNO3dCQUFLTixXQUFVO2tDQUNiUCxRQUFRQSxPQUNULHNGQUFzRjt3QkFDdEYseUNBQXlDO3dCQUN6QyxrRUFBa0U7d0JBQ2xFLG1DQUFtQzt3QkFDbkMsa0JBQWtCO3NDQUNsQiw4REFBQ0Ysc0RBQVFBOzRCQUFDTSxTQUFTQTs0QkFBVVUsT0FBT1Q7NEJBQWVVLGFBQVk7Ozs7O3dDQUM5RCxJQUFJOzs7Ozs7a0NBR1AsOERBQUNDO3dCQUFPQyxNQUFPO3dCQUFTVixXQUFVO3dCQUFZVyxTQUFTLElBQUk7NEJBQ3pELElBQUdqQixVQUFTO2dDQUNWQyxZQUFZLEtBQUs7NEJBQ25CLE9BQ0k7Z0NBQ0ZBLFlBQVksSUFBSTs0QkFDbEIsQ0FBQzt3QkFDSDs7MENBQ0UsOERBQUNULDZEQUFpQkE7Ozs7OzBDQUNsQiw4REFBQ29CO2dDQUFLTixXQUFVOzBDQUFpQko7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdwQ0YseUJBQVcsOERBQUNKLDZDQUFJQTs7Ozs0QkFBTSxJQUFJOzs7Ozs7O0FBR2pDO0dBMUNNRTtLQUFBQTtBQTRDTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci5qc3g/M2FhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge0FpT3V0bGluZVNob3BwaW5nfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IE1lc3NhZ2VfZGF0YSB9IGZyb20gJy4uL2NvbnRleHQvQ29udGV4dCdcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FydCBmcm9tICcuL0NhcnQnXHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1kcm9wZG93bic7XHJcbmltcG9ydCAncmVhY3QtZHJvcGRvd24vc3R5bGUuY3NzJztcclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHt1c2VyfSA9IHVzZUNvbnRleHQoTWVzc2FnZV9kYXRhKTtcclxuICBjb25zdCB7c2hvd0NhcnQsIHNldFNob3dDYXJ0LHRvdGFsUXR5fSA9IHVzZUNvbnRleHQoTWVzc2FnZV9kYXRhKTtcclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgJ29uZScsICd0d28nLCAndGhyZWUnXHJcbiAgXTtcclxuICBjb25zdCBkZWZhdWx0T3B0aW9uID0gb3B0aW9uc1swXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1jb250YWluZXInPlxyXG4gICAgICA8cCBjbGFzc05hbWU9J2xvZ28nPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9ICcvJz5cclxuICAgICAgICAgIDxJbWFnZSBzcmMgPSBcIi9hc3NldHMvbG9nby5wbmdcIiB3aWR0aD17MjV9IGhlaWdodCA9IHsyNX0vPlxyXG4gICAgICAgICAgPHNwYW4+VGhlQm9hdFN0b3JlPC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLXN1YmNvbnRhaW5lcic+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcm9maWxlJz5cclxuICAgICAgICAgIHt1c2VyICYmIHVzZXIgID8gXHJcbiAgICAgICAgICAvLyAgIDxNZW51ICBtZW51QnV0dG9uPXs8TWVudUJ1dHRvbiBjbGFzc05hbWU9XCJtZW51LWJ1dHRvblwiPnt1c2VyLm5hbWV9PC9NZW51QnV0dG9uPn0+XHJcbiAgICAgICAgICAvLyAgICAgPE1lbnVJdGVtICA+e3VzZXIubmFtZX08L01lbnVJdGVtPlxyXG4gICAgICAgICAgLy8gICAgIDxNZW51SXRlbSAgPjxMaW5rIGhyZWY9ICcvdXNlcic+TXkgT3JkZXJzPC9MaW5rPjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAvLyAgICAgPE1lbnVJdGVtID5Mb2dvdXQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgLy8gPC9NZW51PiAgOiBudWxsXHJcbiAgICAgICAgICA8RHJvcGRvd24gb3B0aW9ucz17b3B0aW9uc30gIHZhbHVlPXtkZWZhdWx0T3B0aW9ufSBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhbiBvcHRpb25cIiAvPlxyXG4gICAgICAgICAgOm51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlID0gJ2J1dHRvbicgY2xhc3NOYW1lPSdjYXJ0LWljb24nIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICBpZihzaG93Q2FydCl7XHJcbiAgICAgICAgICAgIHNldFNob3dDYXJ0KGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldFNob3dDYXJ0KHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgPEFpT3V0bGluZVNob3BwaW5nIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcnQtaXRlbS1xdHknPnt0b3RhbFF0eX08L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0NhcnQgPyg8Q2FydC8+KSA6IG51bGx9XHJcbiAgICA8L2Rpdj4gXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJBaU91dGxpbmVTaG9wcGluZyIsIkltYWdlIiwiTWVzc2FnZV9kYXRhIiwidXNlQ29udGV4dCIsIkNhcnQiLCJEcm9wZG93biIsIk5hdmJhciIsInVzZXIiLCJzaG93Q2FydCIsInNldFNob3dDYXJ0IiwidG90YWxRdHkiLCJvcHRpb25zIiwiZGVmYXVsdE9wdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJocmVmIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n"));

/***/ })

});