"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateCarRent: function() { return /* binding */ calculateCarRent; },\n/* harmony export */   fetchCars: function() { return /* binding */ fetchCars; },\n/* harmony export */   generateCarImgUrl: function() { return /* binding */ generateCarImgUrl; },\n/* harmony export */   updateSearchParams: function() { return /* binding */ updateSearchParams; }\n/* harmony export */ });\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"(app-pages-browser)/./node_modules/dotenv/config.js\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\nasync function fetchCars(filters) {\n    const rapidApiKey = process.env.RAPID_API_KEY;\n    const rapidApiHost = process.env.RAPID_API_HOST;\n    const { manufacturer, year, model, limit, fuel } = filters;\n    const headers = {\n        \"X-RapidAPI-Key\": \"40f205bc03msh17c2892be5ed5f9p142054jsn75aadb683a9f\",\n        \"X-RapidAPI-Host\": \"cars-by-api-ninjas.p.rapidapi.com\"\n    };\n    const response = await fetch(\"https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=\".concat(manufacturer, \"&year=\").concat(year, \"&model=\").concat(model, \"&limit=\").concat(limit, \"&fuel_type=\").concat(fuel), {\n        headers: headers\n    });\n    const result = await response.json();\n    return result;\n}\nconst generateCarImgUrl = (car, angle)=>{\n    const url = new URL(\"https://cdn.imagin.studio/getimage\");\n    const { make, year, model } = car;\n    url.searchParams.append(\"customer\", \"hrjavascript-mastery\");\n    url.searchParams.append(\"make\", make);\n    url.searchParams.append(\"modelFamily\", model.split(\" \")[0]);\n    url.searchParams.append(\"zoomType\", \"fullscreen\");\n    url.searchParams.append(\"modelYear\", \"\".concat(year));\n    url.searchParams.append(\"angle\", \"\".concat(angle));\n    return \"\".concat(url);\n};\nconst calculateCarRent = (city_mpg, year)=>{\n    const basePricePerDay = 50;\n    const mileageFactor = 0.1;\n    const ageFactor = 0.05;\n    const mileageRate = city_mpg * mileageFactor;\n    const ageRate = (new Date().getFullYear() - year) * ageFactor;\n    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;\n    return rentalRatePerDay.toFixed(0);\n};\nconst updateSearchParams = (type, value)=>{\n    const searchParams = new URLSearchParams(window.location.search);\n    searchParams.set(type, value);\n    const newPathname = \"\".concat(window.location.pathname, \"?\").concat(searchParams.toString());\n    return newPathname;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUI7QUFJaEIsZUFBZUEsVUFBVUMsT0FBb0I7SUFDaEQsTUFBTUMsY0FBY0MsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhO0lBQzdDLE1BQU1DLGVBQWVILE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0csY0FBYztJQUUvQyxNQUFNLEVBQUNDLFlBQVksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFDLEdBQUdYO0lBRWpELE1BQU1ZLFVBQVU7UUFDWixrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0lBRUEsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDBEQUErRU4sT0FBckJELGNBQWEsVUFBc0JFLE9BQWRELE1BQUssV0FBd0JFLE9BQWZELE9BQU0sV0FBNEJFLE9BQW5CRCxPQUFNLGVBQWtCLE9BQUxDLE9BQVE7UUFBQ0MsU0FBU0E7SUFBTztJQUVyTCxNQUFNRyxTQUFTLE1BQU1GLFNBQVNHLElBQUk7SUFFbEMsT0FBT0Q7QUFDWDtBQUVPLE1BQU1FLG9CQUFvQixDQUFDQyxLQUFlQztJQUM3QyxNQUFNQyxNQUFNLElBQUlDLElBQUk7SUFFcEIsTUFBTSxFQUFDQyxJQUFJLEVBQUVkLElBQUksRUFBRUMsS0FBSyxFQUFDLEdBQUdTO0lBRTVCRSxJQUFJRyxZQUFZLENBQUNDLE1BQU0sQ0FBQyxZQUFZO0lBQ3BDSixJQUFJRyxZQUFZLENBQUNDLE1BQU0sQ0FBQyxRQUFRRjtJQUNoQ0YsSUFBSUcsWUFBWSxDQUFDQyxNQUFNLENBQUMsZUFBZWYsTUFBTWdCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUMxREwsSUFBSUcsWUFBWSxDQUFDQyxNQUFNLENBQUMsWUFBWTtJQUNwQ0osSUFBSUcsWUFBWSxDQUFDQyxNQUFNLENBQUMsYUFBYSxHQUFRLE9BQUxoQjtJQUN4Q1ksSUFBSUcsWUFBWSxDQUFDQyxNQUFNLENBQUMsU0FBUyxHQUFTLE9BQU5MO0lBRXBDLE9BQU8sR0FBTyxPQUFKQztBQUNkLEVBQUM7QUFFTSxNQUFNTSxtQkFBbUIsQ0FBQ0MsVUFBa0JuQjtJQUMvQyxNQUFNb0Isa0JBQWtCO0lBQ3hCLE1BQU1DLGdCQUFnQjtJQUN0QixNQUFNQyxZQUFZO0lBRWxCLE1BQU1DLGNBQWNKLFdBQVdFO0lBQy9CLE1BQU1HLFVBQVUsQ0FBQyxJQUFJQyxPQUFPQyxXQUFXLEtBQUsxQixJQUFHLElBQUtzQjtJQUVwRCxNQUFNSyxtQkFBbUJQLGtCQUFrQkcsY0FBY0M7SUFFekQsT0FBT0csaUJBQWlCQyxPQUFPLENBQUM7QUFDcEMsRUFBRTtBQUVLLE1BQU1DLHFCQUFxQixDQUFDQyxNQUFjQztJQUM3QyxNQUFNaEIsZUFBZSxJQUFJaUIsZ0JBQWdCQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07SUFFL0RwQixhQUFhcUIsR0FBRyxDQUFDTixNQUFNQztJQUV2QixNQUFNTSxjQUFjLEdBQStCdEIsT0FBNUJrQixPQUFPQyxRQUFRLENBQUNJLFFBQVEsRUFBQyxLQUEyQixPQUF4QnZCLGFBQWF3QixRQUFRO0lBRXhFLE9BQU9GO0FBQ1gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9pbmRleC50cz81NmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5cbmltcG9ydCB7Q2FyUHJvcHMsIEZpbHRlclByb3BzfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDYXJzKGZpbHRlcnM6IEZpbHRlclByb3BzKSB7XG4gICAgY29uc3QgcmFwaWRBcGlLZXkgPSBwcm9jZXNzLmVudi5SQVBJRF9BUElfS0VZO1xuICAgIGNvbnN0IHJhcGlkQXBpSG9zdCA9IHByb2Nlc3MuZW52LlJBUElEX0FQSV9IT1NUO1xuXG4gICAgY29uc3Qge21hbnVmYWN0dXJlciwgeWVhciwgbW9kZWwsIGxpbWl0LCBmdWVsfSA9IGZpbHRlcnM7XG5cbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAnWC1SYXBpZEFQSS1LZXknOiAnNDBmMjA1YmMwM21zaDE3YzI4OTJiZTVlZDVmOXAxNDIwNTRqc243NWFhZGI2ODNhOWYnLFxuICAgICAgICAnWC1SYXBpZEFQSS1Ib3N0JzogJ2NhcnMtYnktYXBpLW5pbmphcy5wLnJhcGlkYXBpLmNvbSdcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NhcnMtYnktYXBpLW5pbmphcy5wLnJhcGlkYXBpLmNvbS92MS9jYXJzP21ha2U9JHttYW51ZmFjdHVyZXJ9JnllYXI9JHt5ZWFyfSZtb2RlbD0ke21vZGVsfSZsaW1pdD0ke2xpbWl0fSZmdWVsX3R5cGU9JHtmdWVsfWAsIHtoZWFkZXJzOiBoZWFkZXJzfSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ2FySW1nVXJsID0gKGNhcjogQ2FyUHJvcHMsIGFuZ2xlPzogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCgnaHR0cHM6Ly9jZG4uaW1hZ2luLnN0dWRpby9nZXRpbWFnZScpO1xuXG4gICAgY29uc3Qge21ha2UsIHllYXIsIG1vZGVsfSA9IGNhcjtcblxuICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdjdXN0b21lcicsICdocmphdmFzY3JpcHQtbWFzdGVyeScpO1xuICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdtYWtlJywgbWFrZSk7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ21vZGVsRmFtaWx5JywgbW9kZWwuc3BsaXQoJyAnKVswXSk7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ3pvb21UeXBlJywgJ2Z1bGxzY3JlZW4nKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnbW9kZWxZZWFyJywgYCR7eWVhcn1gKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnYW5nbGUnLCBgJHthbmdsZX1gKTtcblxuICAgIHJldHVybiBgJHt1cmx9YDtcbn1cblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZUNhclJlbnQgPSAoY2l0eV9tcGc6IG51bWJlciwgeWVhcjogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgYmFzZVByaWNlUGVyRGF5ID0gNTA7XG4gICAgY29uc3QgbWlsZWFnZUZhY3RvciA9IDAuMTtcbiAgICBjb25zdCBhZ2VGYWN0b3IgPSAwLjA1O1xuXG4gICAgY29uc3QgbWlsZWFnZVJhdGUgPSBjaXR5X21wZyAqIG1pbGVhZ2VGYWN0b3I7XG4gICAgY29uc3QgYWdlUmF0ZSA9IChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSB5ZWFyKSAqIGFnZUZhY3RvcjtcblxuICAgIGNvbnN0IHJlbnRhbFJhdGVQZXJEYXkgPSBiYXNlUHJpY2VQZXJEYXkgKyBtaWxlYWdlUmF0ZSArIGFnZVJhdGU7XG5cbiAgICByZXR1cm4gcmVudGFsUmF0ZVBlckRheS50b0ZpeGVkKDApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNlYXJjaFBhcmFtcyA9ICh0eXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG4gICAgc2VhcmNoUGFyYW1zLnNldCh0eXBlLCB2YWx1ZSk7XG5cbiAgICBjb25zdCBuZXdQYXRobmFtZSA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/JHtzZWFyY2hQYXJhbXMudG9TdHJpbmcoKX1gO1xuXG4gICAgcmV0dXJuIG5ld1BhdGhuYW1lO1xufSJdLCJuYW1lcyI6WyJmZXRjaENhcnMiLCJmaWx0ZXJzIiwicmFwaWRBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkFQSURfQVBJX0tFWSIsInJhcGlkQXBpSG9zdCIsIlJBUElEX0FQSV9IT1NUIiwibWFudWZhY3R1cmVyIiwieWVhciIsIm1vZGVsIiwibGltaXQiLCJmdWVsIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIiwiZ2VuZXJhdGVDYXJJbWdVcmwiLCJjYXIiLCJhbmdsZSIsInVybCIsIlVSTCIsIm1ha2UiLCJzZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzcGxpdCIsImNhbGN1bGF0ZUNhclJlbnQiLCJjaXR5X21wZyIsImJhc2VQcmljZVBlckRheSIsIm1pbGVhZ2VGYWN0b3IiLCJhZ2VGYWN0b3IiLCJtaWxlYWdlUmF0ZSIsImFnZVJhdGUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJyZW50YWxSYXRlUGVyRGF5IiwidG9GaXhlZCIsInVwZGF0ZVNlYXJjaFBhcmFtcyIsInR5cGUiLCJ2YWx1ZSIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0IiwibmV3UGF0aG5hbWUiLCJwYXRobmFtZSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/index.ts\n"));

/***/ })

});