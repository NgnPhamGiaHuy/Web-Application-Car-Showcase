"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateCarRent: function() { return /* binding */ calculateCarRent; },\n/* harmony export */   fetchCars: function() { return /* binding */ fetchCars; },\n/* harmony export */   generateCarImgUrl: function() { return /* binding */ generateCarImgUrl; },\n/* harmony export */   updateSearchParams: function() { return /* binding */ updateSearchParams; }\n/* harmony export */ });\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"(app-pages-browser)/./node_modules/dotenv/config.js\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\nasync function fetchCars(filters) {\n    const rapidApiKey = process.env.RAPID_API_KEY;\n    const rapidApiHost = process.env.RAPID_API_HOST;\n    const { manufacturer, year, model, limit, fuel } = filters;\n    const headers = {\n        \"X-RapidAPI-Key\": rapidApiKey || \"\",\n        \"X-RapidAPI-Host\": rapidApiHost || \"\"\n    };\n    const response = await fetch(\"https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=\".concat(manufacturer, \"&year=\").concat(year, \"&model=\").concat(model, \"&limit=\").concat(limit, \"&fuel_type=\").concat(fuel), {\n        headers: headers\n    });\n    const result = await response.json();\n    return result;\n}\nconst generateCarImgUrl = (car, angle)=>{\n    const url = new URL(\"https://cdn.imagin.studio/getimage\");\n    const { make, year, model } = car;\n    url.searchParams.append(\"customer\", \"hrjavascript-mastery\");\n    url.searchParams.append(\"make\", make);\n    url.searchParams.append(\"modelFamily\", model.split(\" \")[0]);\n    url.searchParams.append(\"zoomType\", \"fullscreen\");\n    url.searchParams.append(\"modelYear\", \"\".concat(year));\n    url.searchParams.append(\"angle\", \"\".concat(angle));\n    return \"\".concat(url);\n};\nconst calculateCarRent = (city_mpg, year)=>{\n    const basePricePerDay = 50;\n    const mileageFactor = 0.1;\n    const ageFactor = 0.05;\n    const mileageRate = city_mpg * mileageFactor;\n    const ageRate = (new Date().getFullYear() - year) * ageFactor;\n    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;\n    return rentalRatePerDay.toFixed(0);\n};\nconst updateSearchParams = (type, value)=>{\n    const searchParams = new URLSearchParams(window.location.search);\n    searchParams.set(type, value);\n    const newPathname = \"\".concat(window.location.pathname, \"?\").concat(searchParams.toString());\n    return newPathname;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUI7QUFJaEIsZUFBZUEsVUFBVUMsT0FBb0I7SUFDaEQsTUFBTUMsY0FBY0MsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhO0lBQzdDLE1BQU1DLGVBQWVILE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0csY0FBYztJQUUvQyxNQUFNLEVBQUNDLFlBQVksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFDLEdBQUdYO0lBRWpELE1BQU1ZLFVBQXVCO1FBQ3pCLGtCQUFrQlgsZUFBZTtRQUNqQyxtQkFBbUJJLGdCQUFnQjtJQUN2QztJQUVBLE1BQU1RLFdBQVcsTUFBTUMsTUFBTSwwREFBK0VOLE9BQXJCRCxjQUFhLFVBQXNCRSxPQUFkRCxNQUFLLFdBQXdCRSxPQUFmRCxPQUFNLFdBQTRCRSxPQUFuQkQsT0FBTSxlQUFrQixPQUFMQyxPQUFRO1FBQUNDLFNBQVNBO0lBQU87SUFFckwsTUFBTUcsU0FBUyxNQUFNRixTQUFTRyxJQUFJO0lBRWxDLE9BQU9EO0FBQ1g7QUFFTyxNQUFNRSxvQkFBb0IsQ0FBQ0MsS0FBZUM7SUFDN0MsTUFBTUMsTUFBTSxJQUFJQyxJQUFJO0lBRXBCLE1BQU0sRUFBQ0MsSUFBSSxFQUFFZCxJQUFJLEVBQUVDLEtBQUssRUFBQyxHQUFHUztJQUU1QkUsSUFBSUcsWUFBWSxDQUFDQyxNQUFNLENBQUMsWUFBWTtJQUNwQ0osSUFBSUcsWUFBWSxDQUFDQyxNQUFNLENBQUMsUUFBUUY7SUFDaENGLElBQUlHLFlBQVksQ0FBQ0MsTUFBTSxDQUFDLGVBQWVmLE1BQU1nQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDMURMLElBQUlHLFlBQVksQ0FBQ0MsTUFBTSxDQUFDLFlBQVk7SUFDcENKLElBQUlHLFlBQVksQ0FBQ0MsTUFBTSxDQUFDLGFBQWEsR0FBUSxPQUFMaEI7SUFDeENZLElBQUlHLFlBQVksQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsR0FBUyxPQUFOTDtJQUVwQyxPQUFPLEdBQU8sT0FBSkM7QUFDZCxFQUFDO0FBRU0sTUFBTU0sbUJBQW1CLENBQUNDLFVBQWtCbkI7SUFDL0MsTUFBTW9CLGtCQUFrQjtJQUN4QixNQUFNQyxnQkFBZ0I7SUFDdEIsTUFBTUMsWUFBWTtJQUVsQixNQUFNQyxjQUFjSixXQUFXRTtJQUMvQixNQUFNRyxVQUFVLENBQUMsSUFBSUMsT0FBT0MsV0FBVyxLQUFLMUIsSUFBRyxJQUFLc0I7SUFFcEQsTUFBTUssbUJBQW1CUCxrQkFBa0JHLGNBQWNDO0lBRXpELE9BQU9HLGlCQUFpQkMsT0FBTyxDQUFDO0FBQ3BDLEVBQUU7QUFFSyxNQUFNQyxxQkFBcUIsQ0FBQ0MsTUFBY0M7SUFDN0MsTUFBTWhCLGVBQWUsSUFBSWlCLGdCQUFnQkMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO0lBRS9EcEIsYUFBYXFCLEdBQUcsQ0FBQ04sTUFBTUM7SUFFdkIsTUFBTU0sY0FBYyxHQUErQnRCLE9BQTVCa0IsT0FBT0MsUUFBUSxDQUFDSSxRQUFRLEVBQUMsS0FBMkIsT0FBeEJ2QixhQUFhd0IsUUFBUTtJQUV4RSxPQUFPRjtBQUNYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaW5kZXgudHM/NTZkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2RvdGVudi9jb25maWcnO1xuXG5pbXBvcnQge0NhclByb3BzLCBGaWx0ZXJQcm9wc30gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQ2FycyhmaWx0ZXJzOiBGaWx0ZXJQcm9wcykge1xuICAgIGNvbnN0IHJhcGlkQXBpS2V5ID0gcHJvY2Vzcy5lbnYuUkFQSURfQVBJX0tFWTtcbiAgICBjb25zdCByYXBpZEFwaUhvc3QgPSBwcm9jZXNzLmVudi5SQVBJRF9BUElfSE9TVDtcblxuICAgIGNvbnN0IHttYW51ZmFjdHVyZXIsIHllYXIsIG1vZGVsLCBsaW1pdCwgZnVlbH0gPSBmaWx0ZXJzO1xuXG4gICAgY29uc3QgaGVhZGVyczogSGVhZGVyc0luaXQgPSB7XG4gICAgICAgICdYLVJhcGlkQVBJLUtleSc6IHJhcGlkQXBpS2V5IHx8ICcnLFxuICAgICAgICAnWC1SYXBpZEFQSS1Ib3N0JzogcmFwaWRBcGlIb3N0IHx8ICcnLFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vY2Fycy1ieS1hcGktbmluamFzLnAucmFwaWRhcGkuY29tL3YxL2NhcnM/bWFrZT0ke21hbnVmYWN0dXJlcn0meWVhcj0ke3llYXJ9Jm1vZGVsPSR7bW9kZWx9JmxpbWl0PSR7bGltaXR9JmZ1ZWxfdHlwZT0ke2Z1ZWx9YCwge2hlYWRlcnM6IGhlYWRlcnN9KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVDYXJJbWdVcmwgPSAoY2FyOiBDYXJQcm9wcywgYW5nbGU/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKCdodHRwczovL2Nkbi5pbWFnaW4uc3R1ZGlvL2dldGltYWdlJyk7XG5cbiAgICBjb25zdCB7bWFrZSwgeWVhciwgbW9kZWx9ID0gY2FyO1xuXG4gICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ2N1c3RvbWVyJywgJ2hyamF2YXNjcmlwdC1tYXN0ZXJ5Jyk7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ21ha2UnLCBtYWtlKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnbW9kZWxGYW1pbHknLCBtb2RlbC5zcGxpdCgnICcpWzBdKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnem9vbVR5cGUnLCAnZnVsbHNjcmVlbicpO1xuICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdtb2RlbFllYXInLCBgJHt5ZWFyfWApO1xuICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdhbmdsZScsIGAke2FuZ2xlfWApO1xuXG4gICAgcmV0dXJuIGAke3VybH1gO1xufVxuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlQ2FyUmVudCA9IChjaXR5X21wZzogbnVtYmVyLCB5ZWFyOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBiYXNlUHJpY2VQZXJEYXkgPSA1MDtcbiAgICBjb25zdCBtaWxlYWdlRmFjdG9yID0gMC4xO1xuICAgIGNvbnN0IGFnZUZhY3RvciA9IDAuMDU7XG5cbiAgICBjb25zdCBtaWxlYWdlUmF0ZSA9IGNpdHlfbXBnICogbWlsZWFnZUZhY3RvcjtcbiAgICBjb25zdCBhZ2VSYXRlID0gKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIHllYXIpICogYWdlRmFjdG9yO1xuXG4gICAgY29uc3QgcmVudGFsUmF0ZVBlckRheSA9IGJhc2VQcmljZVBlckRheSArIG1pbGVhZ2VSYXRlICsgYWdlUmF0ZTtcblxuICAgIHJldHVybiByZW50YWxSYXRlUGVyRGF5LnRvRml4ZWQoMCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU2VhcmNoUGFyYW1zID0gKHR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICBzZWFyY2hQYXJhbXMuc2V0KHR5cGUsIHZhbHVlKTtcblxuICAgIGNvbnN0IG5ld1BhdGhuYW1lID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT8ke3NlYXJjaFBhcmFtcy50b1N0cmluZygpfWA7XG5cbiAgICByZXR1cm4gbmV3UGF0aG5hbWU7XG59Il0sIm5hbWVzIjpbImZldGNoQ2FycyIsImZpbHRlcnMiLCJyYXBpZEFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJSQVBJRF9BUElfS0VZIiwicmFwaWRBcGlIb3N0IiwiUkFQSURfQVBJX0hPU1QiLCJtYW51ZmFjdHVyZXIiLCJ5ZWFyIiwibW9kZWwiLCJsaW1pdCIsImZ1ZWwiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJnZW5lcmF0ZUNhckltZ1VybCIsImNhciIsImFuZ2xlIiwidXJsIiwiVVJMIiwibWFrZSIsInNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNwbGl0IiwiY2FsY3VsYXRlQ2FyUmVudCIsImNpdHlfbXBnIiwiYmFzZVByaWNlUGVyRGF5IiwibWlsZWFnZUZhY3RvciIsImFnZUZhY3RvciIsIm1pbGVhZ2VSYXRlIiwiYWdlUmF0ZSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInJlbnRhbFJhdGVQZXJEYXkiLCJ0b0ZpeGVkIiwidXBkYXRlU2VhcmNoUGFyYW1zIiwidHlwZSIsInZhbHVlIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzZXQiLCJuZXdQYXRobmFtZSIsInBhdGhuYW1lIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/index.ts\n"));

/***/ })

});