"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/headphones",{

/***/ "./src/pages/headphones.jsx":
/*!**********************************!*\
  !*** ./src/pages/headphones.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"./components/index.js\");\n\n\n\nconst headphones = (param)=>{\n    let { products  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"product-page-outer-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"products-heading \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Headphones\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\headphones.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\headphones.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-page-container\",\n                children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Product, {\n                        product: product\n                    }, product.id, false, {\n                        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\headphones.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 35\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\headphones.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Resume_Projects\\\\Ecommerce\\\\frontend\\\\ecommerce\\\\src\\\\pages\\\\headphones.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (headphones);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaGVhZHBob25lcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUVpQjtBQUMxQyxNQUFNRSxhQUFhLFNBQWdCO1FBQWYsRUFBQ0MsU0FBUSxFQUFDO0lBQzVCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ0wsNEVBQUNDOzhCQUFHOzs7Ozs7Ozs7OzswQkFFZCw4REFBQ0Y7Z0JBQUlDLFdBQVU7MEJBRVpGLFNBQVNJLEdBQUcsQ0FBQyxDQUFDQyx3QkFBVyw4REFBQ1AsZ0RBQU9BO3dCQUFDTyxTQUFXQTt1QkFBZ0JBLFFBQVFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEY7O0FBU0EsK0RBQWVQLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hlYWRwaG9uZXMuanN4PzAwNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJ1xyXG5jb25zdCBoZWFkcGhvbmVzID0gKHtwcm9kdWN0c30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtcGFnZS1vdXRlci1jb250YWluZXInPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdHMtaGVhZGluZyAnPlxyXG4gICAgICAgICAgICAgICAgPGgyPkhlYWRwaG9uZXM8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1wYWdlLWNvbnRhaW5lcic+XHJcbiAgICAgIFxyXG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpPT4gPFByb2R1Y3QgcHJvZHVjdCA9IHtwcm9kdWN0fSBrZXkgPSB7cHJvZHVjdC5pZH0vPil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9kX3JlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL3Byb2R1Y3RzL2ZldGNoQnlDYXRlZ29yeS8/bXlfcGFyYW09MScpO1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBwcm9kX3Jlcy5kYXRhXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge3Byb2R1Y3RzfVxyXG4gICAgfVxyXG4gIH1cclxuZXhwb3J0IGRlZmF1bHQgaGVhZHBob25lcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb2R1Y3QiLCJoZWFkcGhvbmVzIiwicHJvZHVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/headphones.jsx\n"));

/***/ })

});