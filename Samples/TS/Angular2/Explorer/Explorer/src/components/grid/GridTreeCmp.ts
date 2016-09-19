'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';


// FlexGrid Tree component.
@Component({
    selector: 'grid-tree-cmp',
    templateUrl: 'src/components/grid/gridTreeCmp.html'
})

export class GridTreeCmp extends GridBaseCmp {

    persons: PersonForTree[];
    private _person: PersonForTree;

    @ViewChild('flexUnbound') flexUnbound: wijmo.grid.FlexGrid;
    @ViewChild('flexBound') flexBound: wijmo.grid.FlexGrid;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
        this._person = this._getPerson();       
        this.persons = [this._person];
    }

    ngAfterViewInit() {
        if (this.flexUnbound) {
            this._showPersonOnGrid(this.flexUnbound, this._person);
        }
    }

   // populate unbound FlexGrid
    private _showPersonOnGrid(flex: wijmo.grid.FlexGrid, p:any) {
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

        flex.deferUpdate(()=>{
            this._addPersonToGrid(flex, p, 0);
            flex.autoSizeColumn(0);
        });
    }

    private _addPersonToGrid(flex, p, level) {

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
    }

    // data for grid tree
    private _getPerson() {

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
    }
}

export class PersonForTree {
    id: number;
    name: string;
    level: number;
    children: PersonForTree[];
    _descendantCount: number;
    constructor(level, id) {
        this.id = level * 1000 + id;
        this.name = 'Person ' + level + '.' + id;
        this.level = level;
        this.children = [];
    }

    get childCount(): number {
        return this.children.length;
    }

    get descendantCount(): number {
        var cnt = 0;
        for (var i = 0; i < this.children.length; i++) {
            cnt += this.children[i].descendantCount + 1;
        }
        return cnt;
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GridTreeCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridModule],
    declarations: [GridTreeCmp],
})
export class GridTreeModule {
}