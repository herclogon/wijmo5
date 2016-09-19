'use strict';

import { Injectable } from '@angular/core';

// Common data service
@Injectable()
export class DataSvc {
    // data used to generate random items
    private _products = ['Widget', 'Gadget', 'Doohickey'];
    private _colors = ['Black', 'White', 'Red', 'Green', 'Blue'];
    private _musicians = 'Paul,Mark,Pete,Ringo,Luke,Jacob,John,Nate,Zym,George,Toom,Crash,Boom,Dewd'.split(',');
    private _someCountries = ['US', 'Germany', 'UK', 'Japan', 'Italy', 'Greece'];
    private _allCountries = [
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
        'St Helena', 'St Kitts-Nevis', 'St Lucia', 'St Maarten', 'Saipan', 'Samoa', 'San Marino', 'Saudi Arabia', 'Scotland', 'Senegal', 'Serbia',
        'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka',
        'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tahiti', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo',
        'Tokelau', 'Tonga', 'Trinidad Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos Is', 'Tuvalu', 'Uganda', 'Ukraine',
        'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City State',
        'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (USA)', 'Wake Island', 'Yemen', 'Zaire', 'Zambia', 'Zimbabwe'
    ];
    private _palettes = [
        { name: 'Standard', colors: ['#fff', '#000', '#FFBE00', '#FFFF00', '#94D752', '#00B652', '#00B6EF', '#0075C6', '#002263', '#73359C'] },
        { name: 'Office', colors: ['#fff', '#000', '#15487B', '#EFEFE7', '#4A82BD', '#C6504A', '#9CBA5A', '#8465A5', '#4AAEC6', '#F79642'] },
        { name: 'GrayScale', colors: ['#fff', '#000', '#000000', '#FFFFFF', '#DEDEDE', '#B4B4B4', '#969696', '#828282', '#5A5A5A', '#4B4B4B'] },
        { name: 'Apex', colors: ['#fff', '#000', '#6B656B', '#CEC3D6', '#CEBA63', '#9CB284', '#6BB2CE', '#6386CE', '#7B69CE', '#A578BD'] },
        { name: 'Aspect', colors: ['#fff', '#000', '#332E33', '#E7DFD6', '#F77D00', '#382733', '#15597B', '#4A8642', '#63487B', '#C69A5A'] },
        { name: 'Civic', colors: ['#fff', '#000', '#636984', '#C6D3D6', '#D6604A', '#CEB600', '#28AEAD', '#8C7873', '#8CB28C', '#0E924A'] },
        { name: 'Concourse', colors: ['#fff', '#000', '#424442', '#DEF7FF', '#2BA2BD', '#DE1C2B', '#EF6515', '#38609C', '#42487B', '#7B3D4A'] },
        { name: 'Equity', colors: ['#fff', '#000', '#6B6563', '#EFE7DE', '#D64815', '#9C2B15', '#A58E6B', '#946052', '#948684', '#845D5A'] },
        { name: 'Flow', colors: ['#fff', '#000', '#00607B', '#DEF7FF', '#006DC6', '#009EDE', '#00D3DE', '#15CF9C', '#7BCB63', '#A5C34A'] },
        { name: 'Foundry', colors: ['#fff', '#000', '#636952', '#EFEBDE', '#73A273', '#B5CFB5', '#ADCFD6', '#C6BEAD', '#CEC794', '#EFB6B5'] },
        { name: 'Median', colors: ['#fff', '#000', '#735D52', '#EFDFC6', '#94B6D6', '#DE8242', '#A5AA84', '#DEB25A', '#7BA69C', '#948E8C'] },
        { name: 'Metro', colors: ['#fff', '#000', '#4A596B', '#D6EFFF', '#7BD338', '#EF157B', '#FFBA00', '#00AEDE', '#738ACE', '#15B29C'] },
        { name: 'Module', colors: ['#fff', '#000', '#5A607B', '#D6D7D6', '#F7AE00', '#63B6CE', '#E76D7B', '#6BB66B', '#EF8652', '#C64842'] },
        { name: 'Opulent', colors: ['#fff', '#000', '#B53D9C', '#F7E7EF', '#BD3D6B', '#AD65BD', '#DE6D33', '#FFB638', '#CE6DA5', '#FF8E38'] },
        { name: 'Oriel', colors: ['#fff', '#000', '#525D6B', '#FFF39C', '#FF8633', '#739ADE', '#B52B15', '#F7CF2B', '#ADBAD6', '#737D84'] },
        { name: 'Origin', colors: ['#fff', '#000', '#424452', '#DEEBEF', '#737DA5', '#9CBACE', '#D6DB7B', '#FFDB7B', '#BD8673', '#8C726B'] },
        { name: 'Paper', colors: ['#fff', '#000', '#424C22', '#FFFBCE', '#A5B694', '#F7A642', '#E7BE2B', '#D692A5', '#9C86C6', '#849EC6'] },
        { name: 'Solstice', colors: ['#fff', '#000', '#4A2215', '#E7DFCE', '#3892A5', '#FFBA00', '#C62B2B', '#84AA33', '#944200', '#42598C'] },
        { name: 'Technic', colors: ['#fff', '#000', '#383838', '#D6D3D6', '#6BA2B5', '#CEAE00', '#8C8AA5', '#738663', '#9C9273', '#7B868C'] },
        { name: 'Trek', colors: ['#fff', '#000', '#4A3833', '#FFEFCE', '#F7A22B', '#A5654A', '#B58A84', '#C69A6B', '#A59673', '#C6752B'] },
        { name: 'Urban', colors: ['#fff', '#000', '#424452', '#DEDFDE', '#52558C', '#428284', '#A54CA5', '#C6652B', '#8C5D38', '#5A92B5'] },
        { name: 'Verve', colors: ['#fff', '#000', '#636563', '#D6D3D6', '#FF388C', '#E7005A', '#9C007B', '#6B007B', '#0059D6', '#00359C'] },

        { name: 'standard', colors: ['#88bde6', '#fbb258', '#90cd97', '#f6aac9', '#bfa554', '#bc99c7', '#eddd46', '#f07e6e', '#8c8c8c'] },
        { name: 'cocoa', colors: ['#466bb0', '#c8b422', '#14886e', '#b54836', '#6e5944', '#8b3872', '#73b22b', '#b87320', '#141414'] },
        { name: 'coral', colors: ['#84d0e0', '#f48256', '#95c78c', '#efa5d6', '#ba8452', '#ab95c2', '#ede9d0', '#e96b7d', '#888888'] },
        { name: 'dark', colors: ['#005fad', '#f06400', '#009330', '#e400b1', '#b65800', '#6a279c', '#d5a211', '#dc0127', '#000000'] },
        { name: 'highcontrast', colors: ['#ff82b0', '#0dda2c', '#0021ab', '#bcf28c', '#19c23b', '#890d3a', '#607efd', '#1b7700', '#000000'] },
        { name: 'light', colors: ['#ddca9a', '#778deb', '#778deb', '#b5eae2', '#7270be', '#a6c7a7', '#9e95c7', '#95b0c7', '#9b9b9b'] },
        { name: 'midnight', colors: ['#83aaca', '#e37849', '#14a46a', '#e097da', '#a26d54', '#a584b7', '#d89c54', '#e86996', '#2c343b'] },
        { name: 'minimal', colors: ['#92b8da', '#e2d287', '#accdb8', '#eac4cb', '#bbbb7a', '#cab1ca', '#cbd877', '#dfb397', '#c8c8c8'] },
        { name: 'modern', colors: ['#2d9fc7', '#ec993c', '#89c235', '#e377a4', '#a68931', '#a672a6', '#d0c041', '#e35855', '#68706a'] },
        { name: 'organic', colors: ['#9c88d9', '#a3d767', '#8ec3c0', '#e9c3a9', '#91ab36', '#d4ccc0', '#61bbd8', '#e2d76f', '#80715a'] },
        { name: 'slate', colors: ['#7493cd', '#f99820', '#71b486', '#e4a491', '#cb883b', '#ae83a4', '#bacc5c', '#e5746a', '#505d65'] }
    ];



    getSomeCountries(): string[] {
        return this._someCountries;
    }

    getAllCountries(): string[] {
        return this._allCountries;
    }

    getProducts(): string[] {
        return this._products;
    }

    getColors(): string[] {
        return this._colors;
    }

    getMusicians(): string[] {
        return this._musicians;
    }

    getPalettes(): { name: string, colors: string[] }[] {
        return this._palettes;
    }

    // get matches for a search term
    getData(count: number, unique: boolean = false): any[] {
        var data = [];
        var dt = new Date();

        // if unique items, limit to number of countries
        if (unique == true) {
            count = this._someCountries.length;
        }

        // add count items
        for (var i = 0; i < count; i++) {

            // constants used to create data items
            var date = new Date(dt.getFullYear(), i % 12, 25, i % 24, i % 60, i % 60),
                countryId = unique == true ? i : Math.floor(Math.random() * this._someCountries.length),
                productId = Math.floor(Math.random() * this._products.length),
                colorId = Math.floor(Math.random() * this._colors.length);

            // create the item
            var item = {
                id: i,
                start: date,
                end: new Date(date.getTime() + Math.random() * 30 * (24 * 60 * 60 * 1000)),
                country: this._someCountries[countryId],
                product: this._products[productId],
                color: this._colors[colorId],
                countryId: countryId,
                productId: productId,
                colorId: colorId,
                amount: Math.random() * 10000 - 5000,
                amount2: Math.random() * 10000 - 5000,
                discount: Math.random() / 4,
                active: i % 4 == 0,
                sales: [],

            };

            // add an array (should not auto-bind)
            for (var j = 0; j < 12; j++) {
                item.sales.push(50 + 20 * (Math.random() - .5) + j);
            }

            // add the item to the list
            data.push(item);
        }
        return data;
    }

    initOData(categories: wijmo.collections.CollectionView, products: wijmo.collections.CollectionView, supplierMap: wijmo.grid.DataMap) {
        // base url for public Northwind service
        var urlBase = 'http://services.odata.org/Northwind/Northwind.svc/';

        // load categories (ID, Name, and Description only; picture is big and we're not using it)
        var urlCategories = urlBase + 'Categories?$format=json&$select=CategoryID,CategoryName,Description';
        $.ajax({
            dataType: 'json',
            url: urlCategories,
            success: (data) => {
                categories.sourceCollection = data.value;
                categories.moveCurrentToFirst();
                //safeApply();
            }
        });

        // load suppliers (to show how to build data maps)
        var urlSuppliers = urlBase + 'Suppliers?$format=json&$select=SupplierID,CompanyName';
        $.ajax({
            dataType: 'json',
            url: urlSuppliers,
            success: (data) => {
                supplierMap = new wijmo.grid.DataMap(data.value, 'SupplierID', 'CompanyName');
                //safeApply();
            }
        });

        // load orders (to show how to handle dates)
        //note that this NWind service does not return dates as '\/Date(ticks)\/' but as
        // 'yyyy-MM-ddThh:mm:ss', which can be parsed by the Date object constructor.
        var urlOrders = urlBase + 'Orders?$format=json&$top=5';
        $.ajax({
            dataType: 'json',
            url: urlOrders,
            success: (data) => {
                var arr = data.value;
                for (var i = 0; i < arr.length; i++) {
                    var order = arr[i];
                    order.OrderDate = new Date(order.OrderDate);
                    order.RequiredDate = new Date(order.RequiredDate);
                    order.ShippedDate = new Date(order.ShippedDate);
                }
            }
        });

        // load products for the current category
        categories.currentChanged.addHandler(function (s, e) {
            var id = categories.currentItem.CategoryID,
                urlProducts = urlBase + 'Products?$format=json&$select=ProductID,SupplierID,ProductName,QuantityPerUnit,UnitPrice,UnitsInStock,Discontinued&$filter=CategoryID eq ' + id;
            $.ajax({
                dataType: 'json',
                url: urlProducts,
                success: (data) => {
                    products.sourceCollection = data.value;
                    products.moveCurrentToFirst();
                    //safeApply();
                }
            });
            //safeApply();
        });
    }

    getChartData() {
        return [
            { "date": "01/05/15", "open": 77.98, "high": 79.25, "low": 76.86, "close": 77.19, "volume": 26452191 },
            { "date": "01/06/15", "open": 77.23, "high": 77.59, "low": 75.36, "close": 76.15, "volume": 27399288 },
            { "date": "01/07/15", "open": 76.76, "high": 77.36, "low": 75.82, "close": 76.15, "volume": 22045333 },
            { "date": "01/08/15", "open": 76.74, "high": 78.23, "low": 76.08, "close": 78.18, "volume": 23960953 },
            { "date": "01/09/15", "open": 78.2, "high": 78.62, "low": 77.2, "close": 77.74, "volume": 21157007 },
            { "date": "01/12/15", "open": 77.84, "high": 78, "low": 76.21, "close": 76.72, "volume": 19190194 },
            { "date": "01/13/15", "open": 77.23, "high": 78.08, "low": 75.85, "close": 76.45, "volume": 25179561 },
            { "date": "01/14/15", "open": 76.42, "high": 77.2, "low": 76.03, "close": 76.28, "volume": 25918564 },
            { "date": "01/15/15", "open": 76.4, "high": 76.57, "low": 73.54, "close": 74.05, "volume": 34133974 },
            { "date": "01/16/15", "open": 74.04, "high": 75.32, "low": 73.84, "close": 75.18, "volume": 21791529 },
            { "date": "01/20/15", "open": 75.72, "high": 76.31, "low": 74.82, "close": 76.24, "volume": 22821614 },
            { "date": "01/21/15", "open": 76.16, "high": 77.3, "low": 75.85, "close": 76.74, "volume": 25096737 },
            { "date": "01/22/15", "open": 77.17, "high": 77.75, "low": 76.68, "close": 77.65, "volume": 19519458 },
            { "date": "01/23/15", "open": 77.65, "high": 78.19, "low": 77.04, "close": 77.83, "volume": 16746503 },
            { "date": "01/26/15", "open": 77.98, "high": 78.47, "low": 77.29, "close": 77.5, "volume": 19260820 },
            { "date": "01/27/15", "open": 76.71, "high": 76.88, "low": 75.63, "close": 75.78, "volume": 20109977 },
            { "date": "01/28/15", "open": 76.9, "high": 77.64, "low": 76, "close": 76.24, "volume": 53306422 },
            { "date": "01/29/15", "open": 76.85, "high": 78.02, "low": 74.21, "close": 78, "volume": 61293468 },
            { "date": "01/30/15", "open": 78, "high": 78.16, "low": 75.75, "close": 75.91, "volume": 42649491 },
            { "date": "02/02/15", "open": 76.11, "high": 76.14, "low": 73.75, "close": 74.99, "volume": 41955258 },
            { "date": "02/03/15", "open": 75.19, "high": 75.58, "low": 73.86, "close": 75.4, "volume": 26957714 },
            { "date": "02/04/15", "open": 75.09, "high": 76.35, "low": 75.01, "close": 75.63, "volume": 20277368 },
            { "date": "02/05/15", "open": 75.71, "high": 75.98, "low": 75.21, "close": 75.62, "volume": 15062573 },
            { "date": "02/06/15", "open": 75.68, "high": 75.7, "low": 74.25, "close": 74.47, "volume": 21210994 },
            { "date": "02/09/15", "open": 74.05, "high": 74.83, "low": 73.45, "close": 74.44, "volume": 16194322 },
            { "date": "02/10/15", "open": 74.85, "high": 75.34, "low": 74.5, "close": 75.19, "volume": 15811344 },
            { "date": "02/11/15", "open": 75.09, "high": 76.75, "low": 75.03, "close": 76.51, "volume": 20877427 },
            { "date": "02/12/15", "open": 76.86, "high": 76.87, "low": 75.89, "close": 76.23, "volume": 17234976 },
            { "date": "02/13/15", "open": 76.46, "high": 76.48, "low": 75.5, "close": 75.74, "volume": 18621860 },
            { "date": "02/17/15", "open": 75.3, "high": 76.91, "low": 75.08, "close": 75.6, "volume": 25254400 },
            { "date": "02/18/15", "open": 75.94, "high": 76.9, "low": 75.45, "close": 76.71, "volume": 22426421 },
            { "date": "02/19/15", "open": 76.99, "high": 79.84, "low": 76.95, "close": 79.42, "volume": 45851177 },
            { "date": "02/20/15", "open": 79.55, "high": 80.34, "low": 79.2, "close": 79.9, "volume": 36931698 },
            { "date": "02/23/15", "open": 79.96, "high": 80.19, "low": 78.38, "close": 78.84, "volume": 24139056 },
            { "date": "02/24/15", "open": 78.5, "high": 79.48, "low": 78.1, "close": 78.45, "volume": 18897133 },
            { "date": "02/25/15", "open": 78.5, "high": 80.2, "low": 78.5, "close": 79.56, "volume": 25593800 },
            { "date": "02/26/15", "open": 79.88, "high": 81.37, "low": 79.72, "close": 80.41, "volume": 31111891 },
            { "date": "02/27/15", "open": 80.68, "high": 81.23, "low": 78.62, "close": 78.97, "volume": 30739197 },
            { "date": "03/02/15", "open": 79, "high": 79.86, "low": 78.52, "close": 79.75, "volume": 21662537 },
            { "date": "03/03/15", "open": 79.61, "high": 79.7, "low": 78.52, "close": 79.6, "volume": 18634973 },
            { "date": "03/04/15", "open": 79.3, "high": 81.15, "low": 78.85, "close": 80.9, "volume": 28126686 },
            { "date": "03/05/15", "open": 81.23, "high": 81.99, "low": 81.05, "close": 81.21, "volume": 27825733 },
            { "date": "03/06/15", "open": 80.9, "high": 81.33, "low": 79.83, "close": 80, "volume": 24488581 },
            { "date": "03/09/15", "open": 79.68, "high": 79.91, "low": 78.63, "close": 79.44, "volume": 18925097 },
            { "date": "03/10/15", "open": 78.5, "high": 79.26, "low": 77.55, "close": 77.55, "volume": 23067057 },
            { "date": "03/11/15", "open": 77.8, "high": 78.43, "low": 77.26, "close": 77.57, "volume": 20215704 },
            { "date": "03/12/15", "open": 78.1, "high": 79.05, "low": 77.91, "close": 78.93, "volume": 16093319 },
            { "date": "03/13/15", "open": 78.6, "high": 79.38, "low": 77.68, "close": 78.05, "volume": 18557296 },
            { "date": "03/16/15", "open": 77.96, "high": 78.12, "low": 77.36, "close": 78.07, "volume": 19305406 },
            { "date": "03/17/15", "open": 78.36, "high": 79.78, "low": 78.34, "close": 79.36, "volume": 22169969 },
            { "date": "03/18/15", "open": 79.25, "high": 81.24, "low": 79.17, "close": 80.91, "volume": 36912446 },
            { "date": "03/19/15", "open": 81.12, "high": 83, "low": 81, "close": 82.75, "volume": 42099523 },
            { "date": "03/20/15", "open": 83.39, "high": 84.6, "low": 83.07, "close": 83.8, "volume": 44466323 },
            { "date": "03/23/15", "open": 83.92, "high": 84.96, "low": 83.3, "close": 84.43, "volume": 27357333 },
            { "date": "03/24/15", "open": 84.71, "high": 86.07, "low": 84.52, "close": 85.31, "volume": 32576522 },
            { "date": "03/25/15", "open": 85.5, "high": 85.52, "low": 82.92, "close": 82.92, "volume": 37436147 },
            { "date": "03/26/15", "open": 82.72, "high": 83.77, "low": 82.14, "close": 83.01, "volume": 32794800 },
            { "date": "03/27/15", "open": 83.38, "high": 83.95, "low": 82.88, "close": 83.3, "volume": 18372582 },
            { "date": "03/30/15", "open": 83.81, "high": 84.34, "low": 82.41, "close": 83.2, "volume": 24527686 },
            { "date": "03/31/15", "open": 82.9, "high": 83.5, "low": 82.21, "close": 82.22, "volume": 19734277 },
            { "date": "04/01/15", "open": 82.5, "high": 82.72, "low": 80.87, "close": 81.66, "volume": 22058167 },
            { "date": "04/02/15", "open": 82.25, "high": 82.56, "low": 81.44, "close": 81.56, "volume": 19664053 },
            { "date": "04/06/15", "open": 80.8, "high": 82.81, "low": 80.8, "close": 82.44, "volume": 19062934 },
            { "date": "04/07/15", "open": 82.65, "high": 83.42, "low": 82.22, "close": 82.32, "volume": 17467042 },
            { "date": "04/08/15", "open": 82.63, "high": 83.1, "low": 81.84, "close": 82.28, "volume": 18966732 },
            { "date": "04/09/15", "open": 82.5, "high": 82.8, "low": 81.71, "close": 82.17, "volume": 15927281 },
            { "date": "04/10/15", "open": 82.21, "high": 82.61, "low": 81.91, "close": 82.04, "volume": 12529738 },
            { "date": "04/13/15", "open": 81.93, "high": 83.94, "low": 81.92, "close": 83.01, "volume": 26883100 },
            { "date": "04/14/15", "open": 83.17, "high": 83.69, "low": 82.44, "close": 83.52, "volume": 19634200 },
            { "date": "04/15/15", "open": 83.55, "high": 83.66, "low": 82.27, "close": 82.71, "volume": 22390900 },
            { "date": "04/16/15", "open": 82.47, "high": 83.07, "low": 82.15, "close": 82.31, "volume": 13769700 },
            { "date": "04/17/15", "open": 81.48, "high": 82.11, "low": 80.37, "close": 80.78, "volume": 24076300 },
            { "date": "04/20/15", "open": 81.54, "high": 83.15, "low": 81.24, "close": 83.09, "volume": 28796800 },
            { "date": "04/21/15", "open": 84, "high": 84.49, "low": 83.54, "close": 83.62, "volume": 27171900 },
            { "date": "04/22/15", "open": 84.32, "high": 84.74, "low": 83.65, "close": 84.63, "volume": 45548000 },
            { "date": "04/23/15", "open": 84.1, "high": 85.59, "low": 82.41, "close": 82.41, "volume": 73728100 },
            { "date": "04/24/15", "open": 82.77, "high": 82.94, "low": 81.48, "close": 81.53, "volume": 29660400 },
            { "date": "04/27/15", "open": 81.87, "high": 82.93, "low": 81.63, "close": 81.91, "volume": 25446000 },
            { "date": "04/28/15", "open": 81.83, "high": 81.9, "low": 80.23, "close": 80.68, "volume": 23775300 }
        ];
    }

    getHierarchicalData(): any[] {
        var data = [],
            times = [['Jan', 'Feb', 'Mar'], ['Apr', 'May', 'June'], ['Jul', 'Aug', 'Sep'], ['Oct', 'Nov', 'Dec']],
            years = [], year = new Date().getFullYear(), yearLen, i, quarterAdded = false;

        yearLen = Math.max(Math.round(Math.abs(5 - Math.random() * 10)), 3);
        for (i = yearLen; i > 0; i--) {
            years.push(year - i);
        }
        // populate itemsSource
        years.forEach((y, i) => {
            var addQuarter = Math.random() > 0.5;
            if (!quarterAdded && i === years.length - 1) {
                //ensure add at least one quarter.
                addQuarter = true;
            }
            var year: any = {
                year: y.toString(),
            };
            if (addQuarter) {
                var quarters = [];
                quarterAdded = true;
                times.forEach((q, idx) => {
                    var addMonth = Math.random() > 0.5,
                        quarter: any = {
                            quarter: 'Q' + (idx + 1)
                        };

                    if (addMonth) {
                        var months = [];
                        q.forEach(m => {
                            months.push({
                                month: m,
                                value: Math.round(Math.random() * 100)
                            });
                        });
                        quarter.items = months;
                    } else {
                        quarter.value = Math.round(Math.random() * 400);
                    }
                    quarters.push(quarter);
                });
                year.items = quarters;
            } else {
                year.value = Math.round(Math.random() * 1200)
            }
            data.push(year);
        });

        return data;
    }

    getPieChartData() {
        // populate itemsSource
        var names = ['Oranges', 'Apples', 'Pears', 'Bananas', 'Pineapples'];
        var data = [];
        for (var i = 0; i < names.length; i++) {
            data.push({
                name: names[i],
                value: Math.round(Math.random() * 100)
            });
        }
        return data;
    }

}



