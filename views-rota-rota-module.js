(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-rota-rota-module"],{

/***/ "./src/app/views/rota/rota-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/rota/rota-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RotaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotaRoutingModule", function() { return RotaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rota_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rota.component */ "./src/app/views/rota/rota.component.ts");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/material/material.module */ "./src/app/modules/material/material.module.ts");





var routes = [
    {
        path: '',
        component: _rota_component__WEBPACK_IMPORTED_MODULE_3__["RotaComponent"],
        data: {
            title: 'Rota'
        }
    }
];
var RotaRoutingModule = /** @class */ (function () {
    function RotaRoutingModule() {
    }
    RotaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _modules_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RotaRoutingModule);
    return RotaRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/rota/rota.component.html":
/*!************************************************!*\
  !*** ./src/app/views/rota/rota.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"hidden\" id=\"eventDate\">\n<input type=\"hidden\" id=\"drivercomponent\">\n<input type=\"hidden\" id=\"tab\">\n<input type=\"hidden\" id=\"old_id\">\n<div class=\"animated fadeIn\">\n    <div id=\"calendar\"></div>\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 custome-table-rota\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n  \n    <!-- Position Column -->\n    <ng-container matColumnDef=\"Available_Drivers\">\n      <th mat-header-cell *matHeaderCellDef> Available Drivers </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Available_Drivers}} </td>\n    </ng-container>\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"Flex_Routes\">\n      <th mat-header-cell *matHeaderCellDef> Flex Routes </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Flex_Routes}} </td>\n    </ng-container>\n  \n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"Away_Drivers\">\n      <th mat-header-cell *matHeaderCellDef> Away Drivers </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Away_Drivers}} </td>\n    </ng-container>\n  \n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"Sweepers\">\n      <th mat-header-cell *matHeaderCellDef> Sweepers </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Sweepers}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Missorts\">\n        <th mat-header-cell *matHeaderCellDef> Missorts </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Missorts}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Inductions\">\n        <th mat-header-cell *matHeaderCellDef> Inductions </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Inductions}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Ride_Along\">\n        <th mat-header-cell *matHeaderCellDef> Ride Along </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Ride_Along}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"total\">\n        <th mat-header-cell *matHeaderCellDef> Total </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.total}} </td>\n      </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table></div>\n<div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"modal-celender\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Rota</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-md-12\">\n\n                        <label class=\"col-xs-4 col-md-4\" for=\"title\">Day Activity</label>\n                        <select id=\"day_status\">\n                            <option class='option' *ngFor='let option of list' [value]=\"option.description\"\n                                [ngStyle]=\"{'background-color': option.colour_code , 'color' : 'white'}\">\n                                {{option.description}}</option>\n                        </select>\n\n\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\" id=\"save-event\">Save</button>\n            </div>\n        </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->"

/***/ }),

/***/ "./src/app/views/rota/rota.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/rota/rota.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JvdGEvcm90YS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/rota/rota.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/rota/rota.component.ts ***!
  \**********************************************/
/*! exports provided: RotaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotaComponent", function() { return RotaComponent; });
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










var ELEMENT_DATA = [
    { Available_Drivers: 7, Flex_Routes: 8, Away_Drivers: 2, Sweepers: 5, Missorts: 0, Inductions: 2, Ride_Along: 2, total: 10 },
    { Available_Drivers: 7, Flex_Routes: 8, Away_Drivers: 2, Sweepers: 5, Missorts: 0, Inductions: 2, Ride_Along: 2, total: 20 },
    { Available_Drivers: 7, Flex_Routes: 8, Away_Drivers: 2, Sweepers: 5, Missorts: 0, Inductions: 2, Ride_Along: 2, total: 30 },
    { Available_Drivers: 7, Flex_Routes: 8, Away_Drivers: 2, Sweepers: 5, Missorts: 0, Inductions: 2, Ride_Along: 2, total: 40 },
];
var RotaComponent = /** @class */ (function () {
    function RotaComponent(http, modalService) {
        this.http = http;
        this.modalService = modalService;
        this.displayedColumns = ['Available_Drivers', 'Flex_Routes', 'Away_Drivers', 'Sweepers',
            'Missorts', 'Inductions', 'Ride_Along', 'total',
        ];
        this.dataSource = ELEMENT_DATA;
        this.old_id = 0;
        this.day_status = 0;
    }
    RotaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schedule();
        this.http.get("http://localhost:3002/sites_status_schdule")
            .subscribe(function (res) {
            _this.list = res;
            console.log(res);
        });
    };
    RotaComponent.prototype.clicked = function (date) {
        $("#eventDate").val(date.dateStr);
        $("#drivercomponent").val(date.resource.id);
        $("#tab").val(date.resource.extendedProps.tab);
        $('.modal').modal('show');
        $('.update').modal('hide');
    };
    RotaComponent.prototype.close = function () {
        var _this = this;
        this.eventdate = $("#eventDate").val();
        this.drivercomponent = $("#drivercomponent").val();
        this.old_id = $("#old_id").val();
        this.day_status = $("#day_status").val();
        this.tab = $("#tab").val();
        $('.modal').modal('hide');
        if (this.old_id != 0) {
            var obj2 = {
                day_status: this.day_status,
                old_id: this.old_id
            };
            this.http.post("http://localhost:3002/update-rota", obj2)
                .subscribe(function (res) {
            });
            setTimeout(function () {
                _this.calendar.refetchEvents();
            }, 2000);
        }
        else {
            var obj = {
                eventdate: this.eventdate,
                drivercomponent: this.drivercomponent,
                day_status: this.day_status,
                tab: this.tab
            };
            this.http.post("http://localhost:3002/create-rota", { obj: obj })
                .subscribe(function (res) {
            });
            setTimeout(function () {
                _this.calendar.refetchEvents();
            }, 2000);
        }
    };
    RotaComponent.prototype.schedule = function () {
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
            slotEventOverlap: false,
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
            events: "http://localhost:3002/drivers-rota"
        });
        this.calendar.render();
    };
    RotaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rota',
            template: __webpack_require__(/*! ./rota.component.html */ "./src/app/views/rota/rota.component.html"),
            styles: [__webpack_require__(/*! ./rota.component.scss */ "./src/app/views/rota/rota.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]])
    ], RotaComponent);
    return RotaComponent;
}());



/***/ }),

/***/ "./src/app/views/rota/rota.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/rota/rota.module.ts ***!
  \*******************************************/
/*! exports provided: RotaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotaModule", function() { return RotaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _rota_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rota.component */ "./src/app/views/rota/rota.component.ts");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/material/material.module */ "./src/app/modules/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rota_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rota-routing.module */ "./src/app/views/rota/rota-routing.module.ts");











var RotaModule = /** @class */ (function () {
    function RotaModule() {
    }
    RotaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
                _rota_routing_module__WEBPACK_IMPORTED_MODULE_10__["RotaRoutingModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"].forRoot(),
                _modules_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]
            ],
            declarations: [_rota_component__WEBPACK_IMPORTED_MODULE_5__["RotaComponent"]]
        })
    ], RotaModule);
    return RotaModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-rota-rota-module.js.map