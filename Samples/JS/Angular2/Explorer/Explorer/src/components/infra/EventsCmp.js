'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
// Wijmo Events component.
var EventsCmp = (function () {
    function EventsCmp() {
    }
    EventsCmp = __decorate([
        core_1.Component({
            selector: 'grid-events-cmp',
            templateUrl: 'src/components/infra/eventsCmp.html'
        })
    ], EventsCmp);
    return EventsCmp;
}());
exports.EventsCmp = EventsCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: EventsCmp }
]);
var EventsModule = (function () {
    function EventsModule() {
    }
    EventsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing],
            declarations: [EventsCmp],
        })
    ], EventsModule);
    return EventsModule;
}());
exports.EventsModule = EventsModule;
//# sourceMappingURL=EventsCmp.js.map