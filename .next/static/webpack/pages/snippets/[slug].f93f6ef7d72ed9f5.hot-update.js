"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/snippets/[slug]",{

/***/ "./pages/snippets/[slug].js":
/*!**********************************!*\
  !*** ./pages/snippets/[slug].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_work__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/work */ \"./components/work.js\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-code-blocks */ \"./node_modules/react-code-blocks/dist/react-code-blocks.esm.js\");\n/* harmony import */ var _snippet_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snippet.module.scss */ \"./pages/snippets/snippet.module.scss\");\n/* harmony import */ var _snippet_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_snippet_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar Snippet = function(param) {\n    var snippet = param.snippet;\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Snippet\",\n        __source: {\n            fileName: \"/Users/eli/Developer/portfolio/pages/snippets/[slug].js\",\n            lineNumber: 9,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n            className: (_snippet_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n            __source: {\n                fileName: \"/Users/eli/Developer/portfolio/pages/snippets/[slug].js\",\n                lineNumber: 12,\n                columnNumber: 5\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"article\", {\n                className: (_snippet_module_scss__WEBPACK_IMPORTED_MODULE_4___default().post),\n                __source: {\n                    fileName: \"/Users/eli/Developer/portfolio/pages/snippets/[slug].js\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"codeBlock\",\n                        __source: {\n                            fileName: \"/Users/eli/Developer/portfolio/pages/snippets/[slug].js\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_code_blocks__WEBPACK_IMPORTED_MODULE_3__.CopyBlock, {\n                            language: snippet.language,\n                            text: snippet.code,\n                            showLineNumbers: false,\n                            theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_3__.dracula,\n                            wrapLines: true,\n                            codeBlock: true,\n                            __source: {\n                                fileName: \"/Users/eli/Developer/portfolio/pages/snippets/[slug].js\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"/Users/eli/Developer/portfolio/pages/snippets/[slug].js\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: snippet.title\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"time\", {\n                        __source: {\n                            fileName: \"/Users/eli/Developer/portfolio/pages/snippets/[slug].js\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: snippet.updatedAt\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_snippet_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postContent),\n                        dangerouslySetInnerHTML: {\n                            __html: snippet.content\n                        },\n                        __source: {\n                            fileName: \"/Users/eli/Developer/portfolio/pages/snippets/[slug].js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        })\n    });\n};\n_c = Snippet;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Snippet);\nvar _c;\n$RefreshReg$(_c, \"Snippet\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zbmlwcGV0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNRO0FBQ0M7QUFHWjs7QUFFMUMsR0FBSyxDQUFDSyxPQUFPLEdBQUcsUUFBUTtRQUFMQyxPQUFPLFNBQVBBLE9BQU87a0JBQ3hCLE1BQU0sd0RBQUxMLG1FQUFNO1FBQUNNLEtBQUssRUFBQyxDQUFTOzs7Ozs7O3VGQUdwQkMsQ0FBSTtZQUFDQyxTQUFTLEVBQUVMLHVFQUFnQjs7Ozs7Ozs0RkFDOUJPLENBQU87Z0JBQUNGLFNBQVMsRUFBRUwsa0VBQVc7Ozs7Ozs7O3lGQUM1QlMsQ0FBRzt3QkFBQ0osU0FBUyxFQUFDLENBQVc7Ozs7Ozs7dUdBQ3ZCUCx3REFBUzs0QkFDUlksUUFBUSxFQUFFUixPQUFPLENBQUNRLFFBQVE7NEJBQzFCQyxJQUFJLEVBQUVULE9BQU8sQ0FBQ1UsSUFBSTs0QkFDbEJDLGVBQWUsRUFBRSxLQUFLOzRCQUN0QkMsS0FBSyxFQUFFZixzREFBTzs0QkFDZGdCLFNBQVMsRUFBRSxJQUFJOzRCQUNmQyxTQUFTOzs7Ozs7Ozs7eUZBR1pDLENBQUU7Ozs7Ozs7a0NBQUVmLE9BQU8sQ0FBQ0MsS0FBSzs7eUZBQ2pCZSxDQUFJOzs7Ozs7O2tDQUFFaEIsT0FBTyxDQUFDaUIsU0FBUzs7eUZBRXZCVixDQUFHO3dCQUNGSixTQUFTLEVBQUVMLHlFQUFrQjt3QkFDN0JxQix1QkFBdUIsRUFBRSxDQUFDOzRCQUFDQyxNQUFNLEVBQUVwQixPQUFPLENBQUNxQixPQUFPO3dCQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7S0FyQnhEdEIsT0FBTzs7QUE0QmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zbmlwcGV0cy9bc2x1Z10uanM/MjY1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaXRsZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dvcmtcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9hcnRpY2xlXCI7XG5pbXBvcnQgeyBDb3B5QmxvY2ssIGRyYWN1bGEgfSBmcm9tIFwicmVhY3QtY29kZS1ibG9ja3NcIjtcbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJpc21pY1wiO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwicHJpc21pYy1kb21cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc25pcHBldC5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBTbmlwcGV0ID0gKHsgc25pcHBldCB9KSA9PiAoXG4gIDxMYXlvdXQgdGl0bGU9XCJTbmlwcGV0XCI+XG4gICAgXG5cbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZUJsb2NrXCI+XG4gICAgICAgICAgPENvcHlCbG9ja1xuICAgICAgICAgICAgbGFuZ3VhZ2U9e3NuaXBwZXQubGFuZ3VhZ2V9XG4gICAgICAgICAgICB0ZXh0PXtzbmlwcGV0LmNvZGV9XG4gICAgICAgICAgICBzaG93TGluZU51bWJlcnM9e2ZhbHNlfVxuICAgICAgICAgICAgdGhlbWU9e2RyYWN1bGF9XG4gICAgICAgICAgICB3cmFwTGluZXM9e3RydWV9XG4gICAgICAgICAgICBjb2RlQmxvY2tcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxPntzbmlwcGV0LnRpdGxlfTwvaDE+XG4gICAgICAgIDx0aW1lPntzbmlwcGV0LnVwZGF0ZWRBdH08L3RpbWU+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RDb250ZW50fVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc25pcHBldC5jb250ZW50IH19XG4gICAgICAgIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9tYWluPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNuaXBwZXQ7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyByZXEsIHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zO1xuICBjb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudChyZXEpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByaXNtaWMuZ2V0QnlVSUQoXCJzbmlwcGV0XCIsIFN0cmluZyhzbHVnKSwge30pO1xuXG4gIGNvbnN0IHNuaXBwZXQgPSB7XG4gICAgc2x1ZyxcbiAgICB0aXRsZTogUmljaFRleHQuYXNUZXh0KHJlc3BvbnNlLmRhdGEudGl0bGUpLFxuICAgIGNvbnRlbnQ6IFJpY2hUZXh0LmFzSHRtbChyZXNwb25zZS5kYXRhLmNvbnRlbnQpLFxuICAgIGxhbmd1YWdlOiBSaWNoVGV4dC5hc1RleHQocmVzcG9uc2UuZGF0YS5ib2R5WzBdLnByaW1hcnkubGFuZ3VhZ2UpLFxuICAgIGNvZGU6IFJpY2hUZXh0LmFzVGV4dChyZXNwb25zZS5kYXRhLmJvZHlbMV0ucHJpbWFyeS5jb2RlKSxcbiAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKHJlc3BvbnNlLmxhc3RfcHVibGljYXRpb25fZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxuICAgICAgXCJwdC1CUlwiLFxuICAgICAge1xuICAgICAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgfVxuICAgICksXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc25pcHBldCxcbiAgICB9LFxuICAgIHJlZGlyZWN0OiA2MCAqIDEyMCwgLy8gMiBob3Jhc1xuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJUaXRsZSIsIkxheW91dCIsIkNvcHlCbG9jayIsImRyYWN1bGEiLCJzdHlsZXMiLCJTbmlwcGV0Iiwic25pcHBldCIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImFydGljbGUiLCJwb3N0IiwiZGl2IiwibGFuZ3VhZ2UiLCJ0ZXh0IiwiY29kZSIsInNob3dMaW5lTnVtYmVycyIsInRoZW1lIiwid3JhcExpbmVzIiwiY29kZUJsb2NrIiwiaDEiLCJ0aW1lIiwidXBkYXRlZEF0IiwicG9zdENvbnRlbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/snippets/[slug].js\n");

/***/ })

});