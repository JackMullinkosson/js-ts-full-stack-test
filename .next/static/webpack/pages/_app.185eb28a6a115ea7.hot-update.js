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

/***/ "./store/reducers/machineReducers.ts":
/*!*******************************************!*\
  !*** ./store/reducers/machineReducers.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_machineActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/machineActions */ \"./store/actions/machineActions.ts\");\n\nconst initialState = [];\nconst machineReducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case _actions_machineActions__WEBPACK_IMPORTED_MODULE_0__.SET_MACHINES:\n            return action.payload;\n        case _actions_machineActions__WEBPACK_IMPORTED_MODULE_0__.ADD_MACHINE:\n            return [\n                ...state,\n                action.payload\n            ];\n        case _actions_machineActions__WEBPACK_IMPORTED_MODULE_0__.DELETE_MACHINE:\n            return state;\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (machineReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9tYWNoaW5lUmVkdWNlcnMudHMiLCJtYXBwaW5ncyI6Ijs7QUFLbUM7QUFFbkMsTUFBTUcsZUFBMEIsRUFBRTtBQUVsQyxNQUFNQyxpQkFBaUI7UUFBQ0MseUVBQVFGLGNBQWNHO0lBQzVDLE9BQVFBLE9BQU9DO1FBQ2IsS0FBS1AsaUVBQVlBO1lBQ2YsT0FBT00sT0FBT0U7UUFDaEIsS0FBS1AsZ0VBQVdBO1lBQ2QsT0FBTzttQkFBSUk7Z0JBQU9DLE9BQU9FO2FBQVE7UUFDbkMsS0FBS04sbUVBQWNBO1lBQ2pCLE9BQU9HO1FBQ1Q7WUFDRSxPQUFPQTtJQUNYO0FBQ0Y7QUFFQSwrREFBZUQsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9yZWR1Y2Vycy9tYWNoaW5lUmVkdWNlcnMudHM/NTMzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYWNoaW5lIH0gZnJvbSBcIi4uL21hY2hpbmVUeXBlc1wiO1xuaW1wb3J0IHtcbiAgU0VUX01BQ0hJTkVTLFxuICBBRERfTUFDSElORSxcbiAgREVMRVRFX01BQ0hJTkUsXG59IGZyb20gXCIuLi9hY3Rpb25zL21hY2hpbmVBY3Rpb25zXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogTWFjaGluZVtdID0gW107XG5cbmNvbnN0IG1hY2hpbmVSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSk6IE1hY2hpbmVbXSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NQUNISU5FUzpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICBjYXNlIEFERF9NQUNISU5FOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdO1xuICAgIGNhc2UgREVMRVRFX01BQ0hJTkU6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFjaGluZVJlZHVjZXI7XG4iXSwibmFtZXMiOlsiU0VUX01BQ0hJTkVTIiwiQUREX01BQ0hJTkUiLCJERUxFVEVfTUFDSElORSIsImluaXRpYWxTdGF0ZSIsIm1hY2hpbmVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/machineReducers.ts\n"));

/***/ })

});