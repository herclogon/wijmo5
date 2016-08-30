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
var InputBaseCmp_1 = require('./InputBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
// Menu sample component.
var MenuCmp = (function (_super) {
    __extends(MenuCmp, _super);
    function MenuCmp(dataSvc) {
        var _this = this;
        _super.call(this, dataSvc);
        this.tax = .085;
        this.passengers = 1;
        this.browser = 'Chrome';
        this.thePalette = 'Standard';
        this.changeValueCommand = {
            executeCommand: function (parm) {
                if (wijmo.isNumber(parm)) {
                    _this.passengers += parm;
                }
                else {
                    _this.passengers = 1; // reset
                }
            },
            canExecuteCommand: function (parm) {
                if (wijmo.isNumber(parm)) {
                    var val = _this.passengers + parm;
                    return val >= 0 && val <= 100;
                }
                return true;
            }
        };
    }
    // handle menu clicks: this method gets invoked when the menu's itemClicked event fires
    MenuCmp.prototype.menuItemClicked = function (sender, args) {
        var menu = sender, owner = menu.owner, msg = 'Thanks for selecting option ' + menu.selectedIndex + ' from menu **' + menu.header + '**!';
        if (owner) {
            msg += '\r\nThis is a shared context menu currently targeting item: **' + owner.id + '**!';
        }
        alert(msg);
    };
    // handle clicks on the split button
    // uses the isDroppedDown property to check whether the event was triggered
    // by selecting an item from the drop-down or by clicking the button
    MenuCmp.prototype.splitButtonItemClicked = function (sender, args) {
        var menu = sender;
        if (menu.isDroppedDown) {
            // the click was on a menu item
            alert('option **' + menu.selectedItem.value + '** is now the default');
        }
        else {
            // the click was on the button
            alert('running **' + menu.selectedItem.value + '**');
        }
    };
    MenuCmp = __decorate([
        core_1.Component({
            selector: 'menu-cmp',
            templateUrl: 'src/components/input/menuCmp.html',
            directives: [wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjMenuSeparator, wjNg2Input.WjItemTemplate,
                wjNg2Input.WjContextMenu, wjNg2Input.WjInputNumber, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], MenuCmp);
    return MenuCmp;
}(InputBaseCmp_1.InputBaseCmp));
exports.MenuCmp = MenuCmp;
//# sourceMappingURL=MenuCmp.js.map