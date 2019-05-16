(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/shared/notifications.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/shared/notifications.service.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var NotificationsService = /** @class */ (function () {
    function NotificationsService(snackBar) {
        this.snackBar = snackBar;
        this.confige = {
            duration: 3000,
            verticalPosition: "top",
            horizontalPosition: 'right'
        };
    }
    NotificationsService.prototype.notification = function (msg) {
        this.confige['panelClass'] = ['notifications', 'success'];
        this.snackBar.open(msg, '', this.confige);
    };
    NotificationsService.prototype.warn = function (msg) {
        this.confige['panelClass'] = ['notifications', 'delete'];
        this.snackBar.open(msg, '', this.confige);
    };
    NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map