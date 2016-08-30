'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Common data service
var DataSvc = (function () {
    function DataSvc() {
    }
    DataSvc.prototype.getData = function () {
        var data = [], times = [['Jan', 'Feb', 'Mar'], ['Apr', 'May', 'June'], ['Jul', 'Aug', 'Sep'], ['Oct', 'Nov', 'Dec']], years = [], year = new Date().getFullYear(), yearLen, i, quarterAdded = false;
        yearLen = Math.max(Math.round(Math.abs(5 - Math.random() * 10)), 3);
        for (i = yearLen; i > 0; i--) {
            years.push(year - i);
        }
        // populate itemsSource
        years.forEach(function (y, i) {
            var addQuarter = Math.random() > 0.5;
            if (!quarterAdded && i === years.length - 1) {
                //ensure add at least one quarter.
                addQuarter = true;
            }
            if (addQuarter) {
                quarterAdded = true;
                times.forEach(function (q, idx) {
                    var addMonth = Math.random() > 0.5, quar = 'Q' + (idx + 1);
                    if (addMonth) {
                        q.forEach(function (m) {
                            data.push({
                                year: y.toString(),
                                quarter: quar,
                                month: m,
                                value: Math.round(Math.random() * 100)
                            });
                        });
                    }
                    else {
                        data.push({
                            year: y.toString(),
                            quarter: quar,
                            value: Math.round(Math.random() * 400)
                        });
                    }
                });
            }
            else {
                data.push({
                    year: y.toString(),
                    value: Math.round(Math.random() * 1200)
                });
            }
        });
        return data;
    };
    DataSvc.prototype.getHierarchicalData = function () {
        var data = [], times = [['Jan', 'Feb', 'Mar'], ['Apr', 'May', 'June'], ['Jul', 'Aug', 'Sep'], ['Oct', 'Nov', 'Dec']], years = [], year = new Date().getFullYear(), yearLen, i, quarterAdded = false;
        yearLen = Math.max(Math.round(Math.abs(5 - Math.random() * 10)), 3);
        for (i = yearLen; i > 0; i--) {
            years.push(year - i);
        }
        // populate itemsSource
        years.forEach(function (y, i) {
            var addQuarter = Math.random() > 0.5;
            if (!quarterAdded && i === years.length - 1) {
                //ensure add at least one quarter.
                addQuarter = true;
            }
            var year = {
                year: y.toString(),
            };
            if (addQuarter) {
                var quarters = [];
                quarterAdded = true;
                times.forEach(function (q, idx) {
                    var addMonth = Math.random() > 0.5, quarter = {
                        quarter: 'Q' + (idx + 1)
                    };
                    if (addMonth) {
                        var months = [];
                        q.forEach(function (m) {
                            months.push({
                                month: m,
                                value: Math.round(Math.random() * 100)
                            });
                        });
                        quarter.items = months;
                    }
                    else {
                        quarter.value = Math.round(Math.random() * 400);
                    }
                    quarters.push(quarter);
                });
                year.items = quarters;
            }
            else {
                year.value = Math.round(Math.random() * 1200);
            }
            data.push(year);
        });
        return data;
    };
    DataSvc.prototype.getThemingData = function () {
        var data = [{
                name: '5',
                items: [{
                        name: '4',
                        items: [{
                                name: '3',
                                items: [{
                                        name: '2',
                                        items: [{
                                                name: '1',
                                                value: 1
                                            }]
                                    }]
                            }]
                    }]
            }];
        return data;
    };
    DataSvc = __decorate([
        core_1.Injectable()
    ], DataSvc);
    return DataSvc;
}());
exports.DataSvc = DataSvc;
//# sourceMappingURL=DataSvc.js.map