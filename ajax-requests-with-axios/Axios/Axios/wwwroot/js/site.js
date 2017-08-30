webpackJsonp([1],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);


var vue = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    data: {
        skills: []
    },
    mounted: function mounted() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/Home/Skills').then(function (response) {
            return _this.skills = response.data;
        });
    }
});

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ })

},[9]);