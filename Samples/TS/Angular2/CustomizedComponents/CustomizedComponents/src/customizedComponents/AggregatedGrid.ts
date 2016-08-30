import { AfterViewInit, AfterContentInit, Component, Input, Type, ContentChildren, QueryList, forwardRef,
ViewChild, ComponentMetadata} from '@angular/core';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';
import * as wjCore from 'wijmo/wijmo.angular2.core';
import * as wjBase from 'wijmo/wijmo.angular2.directiveBase';
import {EditableSelectionRenderer, SelectionType} from '../cellTemplates/EditableSelectionRenderer';

// Represents the custom grid component implemented by means of aggregating the WjFlexGrid component.
@Component({
    directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate,
        wjCore.WjComponentLoader, EditableSelectionRenderer],
    selector: 'aggregated-grid',
    templateUrl: 'src/customizedComponents/aggregatedGrid.html'
})
export class AggregatedGrid {
    private _isEditable = true;
    // grid data source
    @Input() itemsSource: any;
    // A type of selection provided by the Select column.
    @Input() selectionType = SelectionType.Single;
    // References SelectionType enum to use it in markup.
    SelectionTypeEnum = SelectionType;
    // References aggregated FlexGrid instance
    @ViewChild('flex') flex: wijmo.grid.FlexGrid;
    // A collection of column definitions.
    @ContentChildren(forwardRef(() => AggregatedGridColumn)) columns: QueryList<AggregatedGridColumn>;
    onFormatItem: (e: wijmo.grid.FormatItemEventArgs) => void;

    constructor() {
        // Provide correct 'this' for the formatItem event handler.
        this.onFormatItem = this._onFormatItem.bind(this);
    }

    // Indicates whether grid cells editing is enabled.
    @Input()
    get isEditable(): boolean {
        return this._isEditable;
    }
    set isEditable(value: boolean) {
        if (this._isEditable != value) {
            this._isEditable = value;
            if (this.flex) {
                // invalidates grid to apply changes
                this.flex.invalidate();
            }
        }
    }

    // FlexGrid.formatItem event handler, enables or disables cell editing based on the isEditable property value.
    private _onFormatItem(e: wijmo.grid.FormatItemEventArgs) {
        if (e.panel.cellType === wijmo.grid.CellType.Cell) {
            let column = <wijmo.grid.Column>this.flex.columns[e.col];
            wijmo.enable(e.cell, this.isEditable || column.name === 'select');
        }
    }
};

// A column definition for the AggregatedGrid component, which is used as a child of aggregated-grid in markup,
// in the same way as wj-flex-grid-column components are used with wj-flex-grid.
// Exposes the same set of properties for binding in markup as wj-flex-grid-column does, plus the cellTemplate
// property that can be assigned with a type reference to a component that should be used as the column cell template.
@Component({
    selector: 'aggregated-grid-column',
    template: '',
    // We only need to provide a list of bindable properties here, no need to explicitly define them
    // in the component class. For this, we read the 'inputs' array from the WjFlexGridColumn component's metadata
    // and add the 'cellTemplate' property specific to AggregatedGridColumn.
    inputs: (<ComponentMetadata>wjBase.Ng2Utils.getTypeAnnotation(wjNg2Grid.WjFlexGridColumn, ComponentMetadata))
        .inputs.concat('cellTemplate')
})
export class AggregatedGridColumn {
    // Defines a type of a component that should be used as the column cell template.
    cellTemplate: Type;
};

