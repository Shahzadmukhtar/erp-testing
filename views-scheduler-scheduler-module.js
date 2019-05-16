(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-scheduler-scheduler-module"],{

/***/ "./src/app/views/scheduler/scheduler-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/scheduler/scheduler-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SchedulerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulerRoutingModule", function() { return SchedulerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _scheduler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduler.component */ "./src/app/views/scheduler/scheduler.component.ts");




var routes = [
    {
        path: '',
        component: _scheduler_component__WEBPACK_IMPORTED_MODULE_3__["SchedulerComponent"],
        data: {
            title: 'Dashboard'
        }
    }
];
var SchedulerRoutingModule = /** @class */ (function () {
    function SchedulerRoutingModule() {
    }
    SchedulerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SchedulerRoutingModule);
    return SchedulerRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/scheduler/scheduler.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/scheduler/scheduler.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"hidden\" id=\"eventDate\">\n<input type=\"hidden\" id=\"drivercomponent\">\n<input type=\"hidden\" id=\"tab\">\n<input type=\"hidden\" id=\"old_id\">\n<div class=\"animated fadeIn\"><div id=\"calendar\"></div></div>\n\n<div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"modal-celender\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Amount</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-md-12\">\n                      \n<label class=\"col-xs-4 col-md-4\" for=\"title\">Amount</label>\n\n <input type=\"text\" id=\"amount\">\n\n\n\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\" id=\"save-event\">Save</button>\n            </div>\n        </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n"

/***/ }),

/***/ "./src/app/views/scheduler/scheduler.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/scheduler/scheduler.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NjaGVkdWxlci9zY2hlZHVsZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/scheduler/scheduler.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/scheduler/scheduler.component.ts ***!
  \********************************************************/
/*! exports provided: SchedulerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulerComponent", function() { return SchedulerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.js");
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_list__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/resource-timeline */ "./node_modules/@fullcalendar/resource-timeline/main.js");
/* harmony import */ var _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var SchedulerComponent = /** @class */ (function () {
    function SchedulerComponent(http, modalService) {
        this.http = http;
        this.modalService = modalService;
        this.amount = 0;
    }
    SchedulerComponent.prototype.ngOnInit = function () {
        this.schedule();
    };
    SchedulerComponent.prototype.clicked = function (date) {
        $("#eventDate").val(date.dateStr);
        $("#drivercomponent").val(date.resource.id);
        $("#tab").val(date.resource.extendedProps.tab);
        $('.modal').modal('show');
    };
    SchedulerComponent.prototype.close = function () {
        var _this = this;
        this.eventdate = $("#eventDate").val();
        this.drivercomponent = $("#drivercomponent").val();
        this.amount = $("#amount").val();
        this.tab = $("#tab").val();
        this.old_id = $("#old_id").val();
        $('.modal').modal('hide');
        if (this.old_id != 0) {
            var obj2 = {
                amount: this.amount,
                old_id: this.old_id
            };
            this.http.post("http://localhost:3002/update-schdual", obj2)
                .subscribe(function (res) {
                console.log(res);
            });
            setTimeout(function () {
                _this.calendar.refetchEvents();
            }, 2000);
        }
        else {
            var obj = {
                eventdate: this.eventdate,
                drivercomponent: this.drivercomponent,
                amount: this.amount,
                tab: this.tab
            };
            this.http.post("http://localhost:3002/create-schdual", { obj: obj })
                .subscribe(function (res) {
            });
            setTimeout(function () {
                _this.calendar.refetchEvents();
            }, 2000);
        }
    };
    SchedulerComponent.prototype.schedule = function () {
        var calendarEl = document.getElementById('calendar');
        this.calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_2__["Calendar"](calendarEl, {
            schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
            plugins: [_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3___default.a, _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default.a, _fullcalendar_list__WEBPACK_IMPORTED_MODULE_5___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6___default.a, _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_7___default.a],
            editable: true,
            aspectRatio: 1.8,
            resourceAreaWidth: '34%',
            scrollTime: '00:00',
            // undo default 6am scrollTime
            buttonText: {
                prev: 'Previous',
                next: 'Next',
                prevYear: '',
                nextYear: '',
                today: 'Current',
                month: 'month',
                week: 'week',
                day: 'day'
            },
            header: {
                left: 'today',
                center: 'title',
                right: 'prev,next'
                // right: 'resourceTimelineWeek'
            },
            eventClick: function (info) {
                var eventObj = info.event;
                $("#old_id").val(eventObj.id);
                $('.modal').modal('show');
            },
            dateClick: this.clicked,
            defaultView: 'resourceTimelineWeek',
            columnHeaderFormat: {
                weekday: 'long'
            },
            // views:{
            //   resourceTimelineDay:{
            //     type:"resourceTimeline",
            //     duration:{hours:24},
            //     slotDuration:{hours:4},
            //     buttonText:"Day"
            //   },
            //   resourceTimelineMonth:{
            //     type:"resourceTimeline",
            //     duration:{weeks:4},
            //     slotDuration:{weeks:1},
            //     buttonText:"Month"
            //   }
            // },
            slotDuration: { days: 1 },
            resourceGroupField: 'Driver',
            // 
            resourceColumns: [
                {
                    group: true,
                    labelText: 'Name',
                    field: 'Driver'
                },
                {
                    group: true,
                    labelText: 'Emp. Status',
                    field: 'status',
                },
                {
                    labelText: 'Vehicle',
                    field: 'vehicle'
                },
                {
                    labelText: 'Mobile',
                    field: 'tab'
                },
                {
                    labelText: 'Total',
                    field: 'total'
                }
            ],
            resources: [{
                    id: 'driver1_router_number',
                    Driver: 'Driver 1',
                    status: 'on',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '20'
                }, {
                    id: 'driver1_miles',
                    Driver: 'Driver 2',
                    status: 'on',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '40',
                    eventColor: 'green'
                }, {
                    id: 'driver1_support',
                    Driver: 'Driver 3',
                    status: 'on',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '30',
                    eventColor: 'orange'
                }, {
                    id: 'driver1_trainer',
                    Driver: 'Driver 4',
                    status: 'on',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '60',
                }, {
                    id: 'driver1_newstarter',
                    Driver: 'Driver 5',
                    status: 'on',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '90',
                    eventColor: 'red'
                },
                {
                    id: 'driver2_router_number',
                    Driver: 'Driver 6',
                    status: 'off',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '20'
                }, {
                    id: 'driver2_miles',
                    Driver: 'Driver 7',
                    status: 'off',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '40',
                    eventColor: 'green'
                }, {
                    id: 'driver2_support',
                    Driver: 'Driver 8',
                    status: 'off',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '30',
                    eventColor: 'orange'
                }, {
                    id: 'driver2_trainer',
                    Driver: 'Driver 9',
                    status: 'off',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '60',
                }, {
                    id: 'driver2_newstarter',
                    Driver: 'Driver 10',
                    status: 'off',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '90',
                    eventColor: 'red'
                },
                {
                    id: 'driver3_router_number',
                    Driver: 'Driver 11',
                    status: 'on',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '20'
                }, {
                    id: 'driver3_miles',
                    Driver: 'Driver 12',
                    status: 'on',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '40',
                    eventColor: 'green'
                }, {
                    id: 'driver3_support',
                    Driver: 'Driver 13',
                    status: 'on',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '30',
                    eventColor: 'orange'
                }, {
                    id: 'driver3_trainer',
                    Driver: 'Driver 14',
                    status: 'on',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '60',
                }, {
                    id: 'driver3_newstarter',
                    Driver: 'Driver 15',
                    status: 'on',
                    tab: '11111111',
                    vehicle: 'owner',
                    total: '90',
                    eventColor: 'red'
                }
            ], resourceRender: function (info) {
                setTimeout(function () {
                    var element = info.el.querySelector('.fc-cell-text').parentNode.parentNode.parentNode.parentNode;
                    element.querySelector(".fc-widget-content:nth-child(2)").addEventListener("click", function () {
                        element.querySelector(".fc-widget-content:nth-child(2)").classList.toggle("mystyle");
                    });
                }, 2000);
                // info.el.querySelector('.fc-cell-text').addEventListener("click", function() {
                //   console.log(info);
                // })
            },
            events: "http://localhost:3002/drivers-schdual"
        });
        this.calendar.render();
    };
    SchedulerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scheduler',
            template: __webpack_require__(/*! ./scheduler.component.html */ "./src/app/views/scheduler/scheduler.component.html"),
            styles: [__webpack_require__(/*! ./scheduler.component.scss */ "./src/app/views/scheduler/scheduler.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]])
    ], SchedulerComponent);
    return SchedulerComponent;
}());



/***/ }),

/***/ "./src/app/views/scheduler/scheduler.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/scheduler/scheduler.module.ts ***!
  \*****************************************************/
/*! exports provided: SchedulerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulerModule", function() { return SchedulerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _scheduler_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scheduler-routing.module */ "./src/app/views/scheduler/scheduler-routing.module.ts");
/* harmony import */ var _scheduler_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheduler.component */ "./src/app/views/scheduler/scheduler.component.ts");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/material/material.module */ "./src/app/modules/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");











var SchedulerModule = /** @class */ (function () {
    function SchedulerModule() {
    }
    SchedulerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
                _scheduler_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchedulerRoutingModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"].forRoot(),
                _modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__["ColorPickerModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]
            ],
            declarations: [_scheduler_component__WEBPACK_IMPORTED_MODULE_6__["SchedulerComponent"]],
        })
    ], SchedulerModule);
    return SchedulerModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-scheduler-scheduler-module.js.map