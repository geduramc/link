"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/shortUrl";
exports.ids = ["pages/api/shortUrl"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/shortUrl.ts":
/*!*******************************!*\
  !*** ./pages/api/shortUrl.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    const { url  } = req.body;\n    const shortUrl = Math.random().toString(36).substring(2, 7);\n    try {\n        prisma.shortener_Link.create({\n            data: {\n                url,\n                shortUrl\n            }\n        }).then((data)=>{\n            console.info(data);\n            return res.status(200).json({\n                url,\n                shortUrl\n            });\n        });\n    } catch (err) {\n        console.error(err);\n        return res.status(500).send({\n            err\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2hvcnRVcmwudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBRWhDO0FBRTdDLE1BQU1DLFNBQVMsSUFBSUQsd0RBQVlBO0FBRS9CLGlFQUFlLENBQUNFLEtBQXFCQyxNQUErQjtJQUNsRSxNQUFNLEVBQUVDLElBQUcsRUFBRSxHQUFHRixJQUFJRyxJQUFJO0lBQ3hCLE1BQU1DLFdBQVdDLEtBQUtDLE1BQU0sR0FBR0MsUUFBUSxDQUFDLElBQUlDLFNBQVMsQ0FBQyxHQUFHO0lBRXpELElBQUk7UUFDRlQsT0FBT1UsY0FBYyxDQUFDQyxNQUFNLENBQUM7WUFDM0JDLE1BQU07Z0JBQUVUO2dCQUFLRTtZQUFTO1FBQ3hCLEdBQUdRLElBQUksQ0FBQ0QsQ0FBQUEsT0FBUTtZQUNkRSxRQUFRQyxJQUFJLENBQUNIO1lBQ2IsT0FBT1YsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRWQ7Z0JBQUtFO1lBQVM7UUFDOUM7SUFDRixFQUFFLE9BQU9hLEtBQUs7UUFDWkosUUFBUUssS0FBSyxDQUFDRDtRQUNkLE9BQU9oQixJQUFJYyxNQUFNLENBQUMsS0FBS0ksSUFBSSxDQUFDO1lBQUVGO1FBQUk7SUFDcEM7QUFDRixHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGluay8uL3BhZ2VzL2FwaS9zaG9ydFVybC50cz9hN2ExIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgZGVmYXVsdCAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgY29uc3QgeyB1cmwgfSA9IHJlcS5ib2R5XG4gIGNvbnN0IHNob3J0VXJsID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDcpXG5cbiAgdHJ5IHtcbiAgICBwcmlzbWEuc2hvcnRlbmVyX0xpbmsuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHsgdXJsLCBzaG9ydFVybCB9XG4gICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUuaW5mbyhkYXRhKVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdXJsLCBzaG9ydFVybCB9KVxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IGVyciB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicmVxIiwicmVzIiwidXJsIiwiYm9keSIsInNob3J0VXJsIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwic2hvcnRlbmVyX0xpbmsiLCJjcmVhdGUiLCJkYXRhIiwidGhlbiIsImNvbnNvbGUiLCJpbmZvIiwic3RhdHVzIiwianNvbiIsImVyciIsImVycm9yIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/shortUrl.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/shortUrl.ts"));
module.exports = __webpack_exports__;

})();