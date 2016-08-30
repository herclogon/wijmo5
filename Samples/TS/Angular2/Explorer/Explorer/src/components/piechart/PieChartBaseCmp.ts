'use strict';

import { Component, Inject } from '@angular/core';
import { DataSvc } from '../../services/DataSvc';

// Base class for all components demonstrating PieChart controls.
@Component({
    selector: '',
    templateUrl: ''
})
export abstract class PieChartBaseCmp {
	itemsSource: any[];

    // SparkSvc will be passed by derived classes
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        // populate itemsSource
        this.itemsSource = dataSvc.getPieChartData();
    }
}