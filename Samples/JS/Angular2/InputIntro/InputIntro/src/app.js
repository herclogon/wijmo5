///<reference path="../typings/globals/core-js/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Angular
var core_1 = require('@angular/core');
//import { bootstrap } from '@angular/platform-browser-dynamic';
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var appPipes_1 = require('./pipes/appPipes');
//import { AppTab, AppTabPane } from './components/AppTab';
var AppTab_1 = require('./components/AppTab');
var DataSvc_1 = require('./services/DataSvc');
//import {TestModule} from './testcmp';
'use strict';
// The Explorer application root component.
var AppCmp = (function () {
    function AppCmp(dataSvc) {
        var _this = this;
        // values for InputNumber
        this.pi = Math.PI;
        this.someValue = 3.5;
        this.price = 3.5;
        this.nullVal = null;
        // values for InputMask
        this.customMask = null;
        this.maskToday = new Date();
        // Menu
        this.tax = .07;
        this.menuCommand = {
            executeCommand: function (arg) {
                _this.tax += arg;
            },
            canExecuteCommand: function (arg) {
                if (wijmo.isNumber(arg)) {
                    var val = _this.tax + arg;
                    return val >= 0 && val <= 1;
                }
                return false;
            }
        };
        // Data for AutoComplete, ComboBox, and ListBox
        this.countries = [
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
        this.cities = [
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
        // apply special styles to weekends and holidays, use arrow function to ensure correct 'this'
        this.formatItem = function (s, e) {
            var weekday = e.data.getDay(), holiday = _this._getHoliday(e.data);
            wijmo.toggleClass(e.item, 'date-weekend', weekday == 0 || weekday == 6);
            wijmo.toggleClass(e.item, 'date-holiday', !!holiday);
            e.item.title = holiday;
        };
        // show item formatter and validator, use arrow function to ensure correct 'this'
        this.itemFormatter = function (date, element) {
            var weekday = date.getDay(), holiday = _this._getHoliday(date);
            wijmo.toggleClass(element, 'date-weekend', weekday == 0 || weekday == 6);
            wijmo.toggleClass(element, 'date-holiday', !!holiday);
            element.title = holiday;
        };
        this.itemValidator = function (date) {
            switch (date.getDay()) {
                case 0:
                case 6:
                    return false; // no appointments on weekends
            }
            if (_this._getHoliday(date)) {
                return false; // no appointments on holidays
            }
            return true; // not a weekend or a holiday, this date is OK
        };
        // values for InputDate, InputTime, InputDateTime
        this.dataSvc = dataSvc;
        var today = new Date();
        this.today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30);
        this.minDate = new Date(today.getFullYear(), 0, 1);
        this.maxDate = new Date(today.getFullYear(), 11, 31);
        var theDate = new Date();
        while (!this.itemValidator(theDate)) {
            theDate = wijmo.DateTime.addDays(theDate, 1);
        }
        this.theDate = theDate; // start with a valid date
        this.musicians = this.dataSvc.getMusicians();
    }
    // gets the holiday for a given date
    AppCmp.prototype._getHoliday = function (date) {
        var day = date.getDate(), month = date.getMonth() + 1;
        switch (month + '/' + day) {
            case '1/1': return 'New Year\'s Day';
            case '6/14': return 'Flag Day';
            case '7/4': return 'Independence Day';
            case '11/11': return 'Veteran\'s Day';
            case '12/25': return 'Christmas Day';
        }
        var weekDay = date.getDay(), weekNum = Math.floor((day - 1) / 7) + 1;
        switch (month + '/' + weekNum + '/' + weekDay) {
            case '1/3/1': return 'Martin Luther King\'s Birthday'; // third Monday in January
            case '2/3/1': return 'Washington\'s Birthday'; // third Monday in February
            case '5/3/6': return 'Armed Forces Day'; // third Saturday in May
            case '9/1/1': return 'Labor Day'; // first Monday in September
            case '10/2/1': return 'Columbus Day'; // second Monday in October
            case '11/4/4': return 'Thanksgiving Day'; // fourth Thursday in November
        }
        return ''; // no holiday today
    };
    AppCmp.prototype.menuItemClicked = function (menu) {
        alert('You\'ve selected option ' + menu.selectedIndex + ' from the ' + menu.header + ' menu!');
    };
    ;
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            //template: `<div>Hello <test-cmp></test-cmp></div>`,
            templateUrl: 'src/app.html',
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [wijmo_angular2_input_1.WjInputModule, platform_browser_1.BrowserModule, AppTab_1.TabsModule],
            declarations: [AppCmp, appPipes_1.ToDatePipe],
            providers: [DataSvc_1.DataSvc],
            bootstrap: [AppCmp]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
//bootstrap(AppCmp, [
//    DataSvc
//]);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.js.map