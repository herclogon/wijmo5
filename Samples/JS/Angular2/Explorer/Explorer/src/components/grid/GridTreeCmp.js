'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var GridBaseCmp_1 = require('./GridBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
// FlexGrid Tree component.
var GridTreeCmp = (function (_super) {
    __extends(GridTreeCmp, _super);
    function GridTreeCmp(dataSvc) {
        _super.call(this, dataSvc);
        this._person = this._getPerson();
        this.persons = [this._person];
    }
    GridTreeCmp.prototype.ngAfterViewInit = function () {
        if (this.flexUnbound) {
            this._showPersonOnGrid(this.flexUnbound, this._person);
        }
    };
    // populate unbound FlexGrid
    GridTreeCmp.prototype._showPersonOnGrid = function (flex, p) {
        var _this = this;
        if (!flex) {
            return;
        }
        // initialize grid
        flex.rows.clear();
        flex.columns.clear();
        // add columns we want to show
        var c = new wijmo.grid.Column();
        c.header = 'Name';
        c.binding = 'name';
        c.width = '*';
        c.minWidth = 120;
        c.allowDragging = false;
        flex.columns.push(c);
        c = new wijmo.grid.Column();
        c.header = 'Level';
        c.binding = 'level';
        c.align = 'right';
        flex.columns.push(c);
        c = new wijmo.grid.Column();
        c.header = 'Children';
        c.binding = 'childCount';
        c.align = 'right';
        flex.columns.push(c);
        c = new wijmo.grid.Column();
        c.header = 'Descendants';
        c.binding = 'descendantCount';
        c.align = 'right';
        flex.columns.push(c);
        flex.deferUpdate(function () {
            _this._addPersonToGrid(flex, p, 0);
            flex.autoSizeColumn(0);
        });
    };
    GridTreeCmp.prototype._addPersonToGrid = function (flex, p, level) {
        // create a row for this person
        var gr = new wijmo.grid.GroupRow();
        gr.level = level;
        gr.dataItem = p;
        // add this person to the grid
        flex.rows.push(gr);
        // and add any children
        for (var i = 0; i < p.children.length; i++) {
            this._addPersonToGrid(flex, p.children[i], level + 1);
        }
    };
    // data for grid tree
    GridTreeCmp.prototype._getPerson = function () {
        // number of children for each person (4 levels)
        // item count is 1 + count + count^2 + count^3 + count^4
        // (e.g. count = 10 => ~10,000 people)
        var count = 10;
        // build person tree
        var person = new PersonForTree(1, 1);
        for (var i = 0; i < count; i++) {
            var pi = new PersonForTree(2, i + 1);
            person.children.push(pi);
            for (var j = 0; j < count; j++) {
                var pj = new PersonForTree(3, j + 1);
                pi.children.push(pj);
                for (var k = 0; k < count; k++) {
                    var pk = new PersonForTree(4, k + 1);
                    pj.children.push(pk);
                    for (var l = 0; l < count; l++) {
                        var pl = new PersonForTree(5, l + 1);
                        pk.children.push(pl);
                    }
                }
            }
        }
        return person;
    };
    __decorate([
        core_1.ViewChild('flexUnbound')
    ], GridTreeCmp.prototype, "flexUnbound", void 0);
    __decorate([
        core_1.ViewChild('flexBound')
    ], GridTreeCmp.prototype, "flexBound", void 0);
    GridTreeCmp = __decorate([
        core_1.Component({
            selector: 'grid-tree-cmp',
            templateUrl: 'src/components/grid/gridTreeCmp.html',
            directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GridTreeCmp);
    return GridTreeCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridTreeCmp = GridTreeCmp;
var PersonForTree = (function () {
    function PersonForTree(level, id) {
        this.id = level * 1000 + id;
        this.name = 'Person ' + level + '.' + id;
        this.level = level;
        this.children = [];
    }
    Object.defineProperty(PersonForTree.prototype, "childCount", {
        get: function () {
            return this.children.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonForTree.prototype, "descendantCount", {
        get: function () {
            var cnt = 0;
            for (var i = 0; i < this.children.length; i++) {
                cnt += this.children[i].descendantCount + 1;
            }
            return cnt;
        },
        enumerable: true,
        configurable: true
    });
    return PersonForTree;
}());
exports.PersonForTree = PersonForTree;
//# sourceMappingURL=GridTreeCmp.js.map