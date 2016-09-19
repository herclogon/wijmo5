///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, Input, Inject, enableProdMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { bootstrap } from '@angular/platform-browser-dynamic';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';
import { ToDatePipe } from './pipes/appPipes';
//import { AppTab, AppTabPane } from './components/AppTab';
import { TabsModule } from './components/AppTab';
import { DataSvc } from './services/DataSvc';

//import {TestModule} from './testcmp';

    'use strict';

    // The Explorer application root component.
    @Component({
        selector: 'app-cmp',
        //template: `<div>Hello <test-cmp></test-cmp></div>`,
        templateUrl: 'src/app.html',

        //directives: [/*CORE_DIRECTIVES, */ AppTab, AppTabPane,
        //    //wjNg2Input.WjInputNumber, wjNg2Input.WjAutoComplete, wjNg2Input.WjComboBox,
        //    //wjNg2Input.WjInputDate, wjNg2Input.WjInputTime, wjNg2Input.WjCalendar, wjNg2Input.WjInputDateTime,
        //    //wjNg2Input.WjListBox, wjNg2Input.WjItemTemplate, wjNg2Input.WjInputMask,
        //    //wjNg2Input.WjMenu, wjNg2Input.WjMenuItem,
        //    //wjNg2Input.WjMenuSeparator
        //],

        //pipes: [ToDatePipe]
    })
    export class AppCmp {
        today: Date;
        minDate: Date;
        maxDate: Date;
        theDate: Date;

        // values for InputNumber
        pi = Math.PI;
        someValue = 3.5;
        price = 3.5;
        nullVal = null;

        // values for InputMask
        customMask = null;
        maskToday = new Date();

        // Menu
        tax = .07;

        protected dataSvc: DataSvc;

        menuCommand = {
            executeCommand: (arg) => {
                this.tax += arg;
            },
            canExecuteCommand: (arg) => {
                if (wijmo.isNumber(arg)) {
                    var val = this.tax + arg;
                    return val >= 0 && val <= 1;
                }
                return false;
            }
        };

        // Data for AutoComplete, ComboBox, and ListBox
        countries = [
            'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua', 'Argentina', 'Armenia',
            'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize',
            'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bonaire', 'Bosnia', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
            'Cambodia', 'Cameroon', 'Canada', 'Canary Islands', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Channel Islands',
            'Chile', 'China', 'Christmas Island', 'Cocos Island', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', "Cote D'Ivoire",
            'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador',
            'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland',
            'France', 'French Guiana', 'French Polynesia', 'French Southern Ter', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar',
            'Great Britain', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras',
            'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan',
            'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
            'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malaysia', 'Malawi', 'Maldives',
            'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Midway Islands', 'Moldova', 'Monaco',
            'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Nambia', 'Nauru', 'Nepal', 'Netherland Antilles', 'Netherlands', 'Nevis',
            'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Norway', 'Oman', 'Pakistan', 'Palau Island',
            'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Island', 'Poland', 'Portugal', 'Puerto Rico',
            'Qatar', 'Republic of Montenegro', 'Republic of Serbia', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'St Barthelemy', 'St Eustatius',
            'St Helena', 'St Kitts-Nevis', 'St Lucia', 'St Maarten', 'Saipan', 'Samoa', 'Samoa American', 'San Marino', 'Saudi Arabia', 'Scotland',
            'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
            'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tahiti', 'Taiwan', 'Tajikistan', 'Tanzania',
            'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos Is', 'Tuvalu', 'Uganda',
            'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City State',
            'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (USA)', 'Wake Island', 'Yemen', 'Zaire', 'Zambia', 'Zimbabwe'
        ];

        cities = [
            "Abidjan", "Accra", "Ahmedabad", "Alexandria", "Ankara", "Atlanta", "Baghdad", "Bandung", "Bangkok", "Barcelona", "Beijing", "Belo Horizonte",
            "Bengaluru", "Bogota", "Boston", "Buenos Aires", "Cairo", "Calcutta", "Chengdu", "Chennai", "Chicago", "Chongqung", "Dalian", "Dallas", "Delhi",
            "Detroit", "Dhaka", "Dongguan", "Essen", "Fuzhou", "Guadalajara", "Guangzhou", "Hangzhou", "Harbin", "Ho Chi Minh City", "Hong Kong", "Houston",
            "Hyderabad", "Istanbul", "Jakarta", "Johannesburg", "Karachi", "Khartoum", "Kinshasa", "Kuala Lumpur", "Lagos", "Lahore", "Lima", "London",
            "Los Angeles", "Luanda", "Madrid", "Manila", "Medellin", "Mexico City", "Miami", "Milan", "Monterrey", "Moscow", "Mumbai", "Nagoya", "Nanjing",
            "Naples", "New York", "Osaka", "Paris", "Pheonix", "Philadelphia", "Porto Alegre", "Pune", "Qingdao", "Quanzhou", "Recife", "Rio de Janeiro",
            "Riyadh", "Rome", "Saint Petersburg", "Salvador", "San Francisco", "Santiago", "Sao Paulo", "Seoul", "Shanghair", "Shenyang", "Shenzhen",
            "Singapore", "Surabaya", "Surat", "Suzhou", "Sydney", "Taipei", "Tehran", "Tianjin", "Toronto", "Washington", "Wuhan", "Xi'an-Xianyang", "Yangoon",
            "Zhengzhou", "Tokyo"
        ];

        musicians: { id: number, name: string, photo: string }[];

        constructor( @Inject(DataSvc) dataSvc: DataSvc) {
            // values for InputDate, InputTime, InputDateTime
            this.dataSvc = dataSvc;
            let today = new Date();
            this.today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30);
            this.minDate = new Date(today.getFullYear(), 0, 1);
            this.maxDate = new Date(today.getFullYear(), 11, 31);

            let theDate = new Date();
            while (!this.itemValidator(theDate)) {
                theDate = wijmo.DateTime.addDays(theDate, 1);
            }
            this.theDate = theDate; // start with a valid date
            this.musicians = this.dataSvc.getMusicians();
        }


        // apply special styles to weekends and holidays, use arrow function to ensure correct 'this'
        formatItem = (s: wijmo.input.Calendar, e: wijmo.input.FormatItemEventArgs) => {
            let weekday = e.data.getDay(),
                holiday = this._getHoliday(e.data);
            wijmo.toggleClass(e.item, 'date-weekend', weekday == 0 || weekday == 6);
            wijmo.toggleClass(e.item, 'date-holiday', !!holiday);
            e.item.title = holiday;
        }

        // show item formatter and validator, use arrow function to ensure correct 'this'
        itemFormatter = (date: Date, element: HTMLElement) => {
            let weekday = date.getDay(),
                holiday = this._getHoliday(date);
            wijmo.toggleClass(element, 'date-weekend', weekday == 0 || weekday == 6);
            wijmo.toggleClass(element, 'date-holiday', !!holiday);
            element.title = holiday;
        }
        itemValidator = (date: Date) => {
            switch (date.getDay()) {
                case 0:
                case 6:
                    return false; // no appointments on weekends
            }
            if (this._getHoliday(date)) {
                return false; // no appointments on holidays
            }
            return true; // not a weekend or a holiday, this date is OK
        }

        // gets the holiday for a given date
        private _getHoliday(date: Date) {
            var day = date.getDate(),
                month = date.getMonth() + 1;
            switch (month + '/' + day) { // simple holidays (fixed dates)
                case '1/1': return 'New Year\'s Day';
                case '6/14': return 'Flag Day';
                case '7/4': return 'Independence Day';
                case '11/11': return 'Veteran\'s Day';
                case '12/25': return 'Christmas Day';
            }
            var weekDay = date.getDay(),
                weekNum = Math.floor((day - 1) / 7) + 1;
            switch (month + '/' + weekNum + '/' + weekDay) {
                case '1/3/1': return 'Martin Luther King\'s Birthday'; // third Monday in January
                case '2/3/1': return 'Washington\'s Birthday'; // third Monday in February
                case '5/3/6': return 'Armed Forces Day'; // third Saturday in May
                case '9/1/1': return 'Labor Day'; // first Monday in September
                case '10/2/1': return 'Columbus Day'; // second Monday in October
                case '11/4/4': return 'Thanksgiving Day'; // fourth Thursday in November
            }
            return ''; // no holiday today
        }

        menuItemClicked(menu: wijmo.input.Menu) {
            alert('You\'ve selected option ' + menu.selectedIndex + ' from the ' + menu.header + ' menu!');
        };
}

@NgModule({
    imports: [WjInputModule, BrowserModule, TabsModule],
    declarations: [AppCmp, ToDatePipe],
    providers: [DataSvc],
    bootstrap: [AppCmp]
})
export class AppModule {
}


enableProdMode();
// Bootstrap application with hash style navigation and global services.
//bootstrap(AppCmp, [
//    DataSvc
//]);
platformBrowserDynamic().bootstrapModule(AppModule);