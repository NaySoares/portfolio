"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/works",{

/***/ "./pages/works/index.js":
/*!******************************!*\
  !*** ./pages/works/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/section */ \"./components/section.js\");\n/* harmony import */ var _components_grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/grid-item */ \"./components/grid-item.js\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_works_snowGirl_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/works/snowGirl.jpg */ \"./public/works/snowGirl.jpg\");\n/* harmony import */ var _public_works_snowPhotos_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/works/snowPhotos.png */ \"./public/works/snowPhotos.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar Works = function(param) {\n    var works = param.works;\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Posts\",\n        __source: {\n            fileName: \"/Users/eli/Developer/portfolio/pages/works/index.js\",\n            lineNumber: 14,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n            __source: {\n                fileName: \"/Users/eli/Developer/portfolio/pages/works/index.js\",\n                lineNumber: 15,\n                columnNumber: 3\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                    as: \"h4\",\n                    fontSize: 20,\n                    mb: 4,\n                    __source: {\n                        fileName: \"/Users/eli/Developer/portfolio/pages/works/index.js\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    },\n                    __self: _this,\n                    children: \"Projetos\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_section__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    delay: 0.1,\n                    __source: {\n                        fileName: \"/Users/eli/Developer/portfolio/pages/works/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.SimpleGrid, {\n                        columns: [\n                            1,\n                            1,\n                            2\n                        ],\n                        gap: 6,\n                        __source: {\n                            fileName: \"/Users/eli/Developer/portfolio/pages/works/index.js\",\n                            lineNumber: 20,\n                            columnNumber: 7\n                        },\n                        __self: _this,\n                        children: works.map(function(work, i) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_section__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                delay: Number(\"0.\".concat(i + 1)),\n                                __source: {\n                                    fileName: \"/Users/eli/Developer/portfolio/pages/works/index.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_grid_item__WEBPACK_IMPORTED_MODULE_2__.WorkGridItem, {\n                                    path: \"works\",\n                                    id: work.slug,\n                                    title: work.title,\n                                    thumbnail: work.cover,\n                                    __source: {\n                                        fileName: \"/Users/eli/Developer/portfolio/pages/works/index.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: work.description\n                                }, work.slug)\n                            });\n                        })\n                    })\n                })\n            ]\n        })\n    });\n};\n_c = Works;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Works);\nvar _c;\n$RefreshReg$(_c, \"Works\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93b3Jrcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStFO0FBQ2pDO0FBQ3FCO0FBQ2Q7QUFJekI7QUFFMEI7QUFDSTs7QUFFMUQsR0FBSyxDQUFDWSxLQUFLLEdBQUcsUUFBUTtRQUFMQyxLQUFLLFNBQUxBLEtBQUs7a0JBQ3BCLE1BQU0sd0RBQUxMLG1FQUFNO1FBQUNNLEtBQUssRUFBQyxDQUFPOzs7Ozs7O3dGQUNwQmQsdURBQVM7Ozs7Ozs7O3FGQUNQRSxxREFBTztvQkFBQ2EsRUFBRSxFQUFDLENBQUk7b0JBQUNDLFFBQVEsRUFBRSxFQUFFO29CQUFFQyxFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs4QkFBRSxDQUV0Qzs7cUZBQ0NaLDJEQUFPO29CQUFDYSxLQUFLLEVBQUUsR0FBRzs7Ozs7OzttR0FDaEJmLHdEQUFVO3dCQUFDZ0IsT0FBTyxFQUFFLENBQUM7NEJBQUEsQ0FBQzs0QkFBRSxDQUFDOzRCQUFFLENBQUM7d0JBQUEsQ0FBQzt3QkFBRUMsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7a0NBQ25DUCxLQUFLLENBQUNRLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsQ0FBQzswQ0FDakIsTUFBTSx3REFBTGxCLDJEQUFPO2dDQUFDYSxLQUFLLEVBQUVNLE1BQU0sQ0FBRSxDQUFFLElBQU0sT0FBSkQsQ0FBQyxHQUFDLENBQUM7Ozs7Ozs7K0dBRTFCakIsK0RBQVk7b0NBRVhtQixJQUFJLEVBQUMsQ0FBTztvQ0FDWkMsRUFBRSxFQUFFSixJQUFJLENBQUNLLElBQUk7b0NBQ2JiLEtBQUssRUFBRVEsSUFBSSxDQUFDUixLQUFLO29DQUNqQmMsU0FBUyxFQUFFTixJQUFJLENBQUNPLEtBQUs7Ozs7Ozs7OENBRXBCUCxJQUFJLENBQUNRLFdBQVc7bUNBTlpSLElBQUksQ0FBQ0ssSUFBSTs7Ozs7Ozs7O0tBWnhCZixLQUFLOztBQTZCWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dvcmtzL2luZGV4LmpzP2ViN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEhlYWRpbmcsIFNpbXBsZUdyaWQsIERpdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvblwiO1xuaW1wb3J0IHsgV29ya0dyaWRJdGVtLCBHcmlkSXRlbSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dyaWQtaXRlbVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL2FydGljbGVcIjtcbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJpc21pY1wiO1xuaW1wb3J0IFByaXNtaWMgZnJvbSBcIkBwcmlzbWljaW8vY2xpZW50XCI7XG5pbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLWRvbVwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHNub3dHaXJsIGZyb20gXCIuLi8uLi9wdWJsaWMvd29ya3Mvc25vd0dpcmwuanBnXCI7XG5pbXBvcnQgc25vd1Bob3RvcyBmcm9tIFwiLi4vLi4vcHVibGljL3dvcmtzL3Nub3dQaG90b3MucG5nXCI7XG5cbmNvbnN0IFdvcmtzID0gKHsgd29ya3MgfSkgPT4gKFxuICA8TGF5b3V0IHRpdGxlPVwiUG9zdHNcIj5cbiAgPENvbnRhaW5lcj5cbiAgICA8SGVhZGluZyBhcz1cImg0XCIgZm9udFNpemU9ezIwfSBtYj17NH0+XG4gICAgICBQcm9qZXRvc1xuICAgIDwvSGVhZGluZz5cbiAgICA8U2VjdGlvbiBkZWxheT17MC4xfT5cbiAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9e1sxLCAxLCAyXX0gZ2FwPXs2fT5cbiAgICAgICAge3dvcmtzLm1hcCgod29yaywgaSkgPT4gKFxuICAgICAgICAgIDxTZWN0aW9uIGRlbGF5PXtOdW1iZXIoYDAuJHtpKzF9YCl9PlxuXG4gICAgICAgICAgICAgIDxXb3JrR3JpZEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e3dvcmsuc2x1Z31cbiAgICAgICAgICAgICAgICBwYXRoPVwid29ya3NcIlxuICAgICAgICAgICAgICAgIGlkPXt3b3JrLnNsdWd9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3dvcmsudGl0bGV9XG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsPXt3b3JrLmNvdmVyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3dvcmsuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvV29ya0dyaWRJdGVtPlxuICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC9TZWN0aW9uPlxuICA8L0NvbnRhaW5lcj5cbjwvTGF5b3V0PlxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBXb3JrcztcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudCgpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByaXNtaWMucXVlcnkoXG4gICAgW1ByaXNtaWMucHJlZGljYXRlcy5hdChcImRvY3VtZW50LnR5cGVcIiwgXCJ3b3JrXCIpXSxcbiAgICB7XG4gICAgICBmZXRjaDogW1wid29yay50aXRsZSwgd29yay5jb3Zlciwgd29yay5kZXNjcmlwdGlvblwiXSxcbiAgICAgIHBhZ2VTaXplOiAxMDAsXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IHdvcmtzID0gcmVzcG9uc2UucmVzdWx0cy5tYXAoKHdvcmspID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2x1Zzogd29yay51aWQsXG4gICAgICBjb3Zlcjogd29yay5kYXRhLmNvdmVyLnVybCxcbiAgICAgIHRpdGxlOiBSaWNoVGV4dC5hc1RleHQod29yay5kYXRhLnRpdGxlKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBSaWNoVGV4dC5hc1RleHQod29yay5kYXRhLmRlc2NyaXB0aW9uKSxcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUod29yay5sYXN0X3B1YmxpY2F0aW9uX2RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcbiAgICAgICAgXCJwdC1CUlwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGF5OiBcIjItZGlnaXRcIixcbiAgICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgfTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHdvcmtzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB3b3JrcyxcbiAgICB9LFxuICAgIHJlZGlyZWN0OiA2MCAqIDEyMCwgLy8gMiBob3Jhc1xuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJCb3giLCJIZWFkaW5nIiwiU2ltcGxlR3JpZCIsIkRpdmlkZXIiLCJTZWN0aW9uIiwiV29ya0dyaWRJdGVtIiwiR3JpZEl0ZW0iLCJMYXlvdXQiLCJMaW5rIiwic25vd0dpcmwiLCJzbm93UGhvdG9zIiwiV29ya3MiLCJ3b3JrcyIsInRpdGxlIiwiYXMiLCJmb250U2l6ZSIsIm1iIiwiZGVsYXkiLCJjb2x1bW5zIiwiZ2FwIiwibWFwIiwid29yayIsImkiLCJOdW1iZXIiLCJwYXRoIiwiaWQiLCJzbHVnIiwidGh1bWJuYWlsIiwiY292ZXIiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/works/index.js\n");

/***/ })

});