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
var common_1 = require('@angular/common');
var GridBaseCmp_1 = require('./GridBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var wjNg2Core = require('wijmo/wijmo.angular2.core');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
// FlexGrid Templates sample component.
var GridCellEditTemplatesCmp = (function (_super) {
    __extends(GridCellEditTemplatesCmp, _super);
    function GridCellEditTemplatesCmp(dataSvc) {
        _super.call(this, dataSvc);
        this.personCellEditor = PersonCellEditorCmp;
        this.personCellEditorHtml = "<person-cell-editor-cmp [(firstName)]=\"cell.values.fn\" [(lastName)]=\"cell.values.ln\" \n                                            [(person)]=\"cell.value\"></person-cell-editor-cmp>";
        this.itemCount = 300;
        // add 'person' property
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var item = _a[_i];
            item['person'] = Person.getRandom();
        }
    }
    GridCellEditTemplatesCmp.prototype.beginningEdit = function (flex, args) {
        if (flex.columns[args.col].binding === 'person') {
            var person = flex.getCellData(args.row, args.col, false);
            if (!person) {
                flex.setCellData(args.row, args.col, new Person());
            }
        }
    };
    GridCellEditTemplatesCmp.prototype.format = function (data, format) {
        return data != null ? wijmo.Globalize.format(data, format) : '';
    };
    GridCellEditTemplatesCmp = __decorate([
        core_1.Component({
            selector: 'grid-cell-edit-templates-cmp',
            templateUrl: 'src/components/grid/gridCellEditTemplatesCmp.html',
            directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate, common_1.CORE_DIRECTIVES,
                wjNg2Input.WjInputNumber, wjNg2Input.WjInputDate, wjNg2Core.WjComponentLoader, wjNg2Core.WjHtmlLoader,
                core_1.forwardRef(function () { return PersonCellEditorCmp; })]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GridCellEditTemplatesCmp);
    return GridCellEditTemplatesCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridCellEditTemplatesCmp = GridCellEditTemplatesCmp;
var PersonCellEditorCmp = (function () {
    function PersonCellEditorCmp() {
        this._firstName = '';
        this._lastName = '';
        // events must be synchronous!!!
        this.firstNameChange = new core_1.EventEmitter(false);
        this.lastNameChange = new core_1.EventEmitter(false);
        this.personChange = new core_1.EventEmitter(false);
    }
    Object.defineProperty(PersonCellEditorCmp.prototype, "firstName", {
        get: function () {
            console.log('get firstName');
            return this._firstName;
        },
        set: function (value) {
            if (this._firstName !== value) {
                this._firstName = value;
                this.firstNameChange.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonCellEditorCmp.prototype, "lastName", {
        get: function () {
            console.log('get lastName');
            return this._lastName;
        },
        set: function (value) {
            if (this._lastName !== value) {
                this._lastName = value;
                this.lastNameChange.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonCellEditorCmp.prototype, "person", {
        get: function () {
            console.log('get person');
            return this._person;
        },
        set: function (value) {
            if (!value) {
                value = new Person();
            }
            if (this._person !== value) {
                this._person = value;
                this.personChange.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    PersonCellEditorCmp = __decorate([
        core_1.Component({
            selector: 'person-cell-editor-cmp',
            template: "\n            <b>Name</b> <input [(ngModel)]=\"firstName\" style=\"width:70px\"/> \n            <b>Surname</b> <input [(ngModel)]=\"lastName\" style=\"width:70px\"/>\n",
            inputs: ['firstName', 'lastName', 'person'],
            outputs: ['firstNameChange', 'lastNameChange', 'personChange'],
            directives: [common_1.CORE_DIRECTIVES],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], PersonCellEditorCmp);
    return PersonCellEditorCmp;
}());
exports.PersonCellEditorCmp = PersonCellEditorCmp;
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName || '';
        this.lastName = lastName || '';
    }
    Person.getRandom = function () {
        return new Person(Person._getRandomElement(Person._firstNames), Person._getRandomElement(Person._lastNames));
    };
    Person._getRandomElement = function (array) {
        return array[Math.round(Math.random() * (array.length - 1))];
    };
    Person._firstNames = ['Nancy', 'Lisa', 'Margaret', 'Sandra', 'Sharon', 'Amanda', 'Pamela', 'Anna',
        'James', 'John', 'Robert', 'Michael', 'David', 'Richard', 'Daniel', 'Paul'];
    Person._lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Wilson', 'Moore', 'Taylor', 'Jackson',
        'White', 'Harris', 'Thompson', 'Martinez', 'Robinson', 'Clark', 'Walker'];
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=GridCellEditTemplatesCmp.js.map