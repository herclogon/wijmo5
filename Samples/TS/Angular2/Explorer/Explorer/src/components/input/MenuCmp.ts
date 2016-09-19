'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// Menu sample component.
@Component({
    selector: 'menu-cmp',
    templateUrl: 'src/components/input/menuCmp.html'
})

export class MenuCmp extends InputBaseCmp {
    tax = .085;
    passengers = 1;
    // handle menu commands: this command is used in menu items
    changeValueCommand: any;
    browser = 'Chrome';
    thePalette = 'Standard'; 

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

        this.changeValueCommand = {
            executeCommand: (parm) => {
                if (wijmo.isNumber(parm)) {
                    this.passengers += parm;
                } else {
                    this.passengers = 1; // reset
                }
            },
            canExecuteCommand: (parm) => {
                if (wijmo.isNumber(parm)) {
                    var val = this.passengers + parm;
                    return val >= 0 && val <= 100;
                }
                return true;
            }
        }
    }

    // handle menu clicks: this method gets invoked when the menu's itemClicked event fires
    menuItemClicked(sender: wijmo.input.Menu, args) {
        var menu = sender,
            owner = menu.owner,
            msg = 'Thanks for selecting option ' + menu.selectedIndex + ' from menu **' + menu.header + '**!';
        if (owner) {
            msg += '\r\nThis is a shared context menu currently targeting item: **' + owner.id + '**!';
        }
        alert(msg);
    }

    // handle clicks on the split button
    // uses the isDroppedDown property to check whether the event was triggered
    // by selecting an item from the drop-down or by clicking the button
    splitButtonItemClicked(sender: wijmo.input.Menu, args) {
        var menu = sender;
        if (menu.isDroppedDown) {

            // the click was on a menu item
            alert('option **' + menu.selectedItem.value + '** is now the default');

        } else {

            // the click was on the button
            alert('running **' + menu.selectedItem.value + '**');
        }
    }

}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: MenuCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjInputModule],
    declarations: [MenuCmp],
})
export class MenuModule {
}
