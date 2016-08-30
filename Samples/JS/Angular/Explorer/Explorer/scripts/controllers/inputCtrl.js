'use strict';

var app = angular.module('app');

// input controller: provides a list of countries and some input values
app.controller('inputCtrl', function appCtrl($scope) {

    // data context
    $scope.ctx = {

        // data
        today: new Date(),
        pi: Math.PI,
        departureDate: new Date(),
        returnDate: new Date(),
        passengers: 1,
        price: 0,
        tax: .085,
        mask: '>LL-AA-0000',
        browser: 'Chrome',

        // controls
        cmb1: null,
        cmb2: null,
        ac1: null,
        ac2: null,
        acAsync: null,

        // culture
        culture: 'en'
    };

    // handle menu clicks: this method gets invoked when the menu's itemClicked event fires
    $scope.menuItemClicked = function (sender, args) {
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
    $scope.splitButtonItemClicked = function (sender, args) {
        var menu = sender;
        if (menu.isDroppedDown) {

            // the click was on a menu item
            alert('option **' + menu.selectedItem.value + '** is now the default');

        } else {

            // the click was on the button
            alert('running **' + menu.selectedItem.value + '**');
        }
    }

    // handle menu commands: this command is used in menu items
    $scope.changeValueCommand = {
        executeCommand: function (parm) {
            if (wijmo.isNumber(parm)) {
                $scope.ctx.passengers += parm;
            } else {
                $scope.ctx.passengers = 1; // reset
            }
            $scope.$apply('ctx.passengers');
        },
        canExecuteCommand: function (parm) {
            if (wijmo.isNumber(parm)) {
                var val = $scope.ctx.passengers + parm;
                return val >= 0 && val <= 100;
            }
            return true;
        }
    }

    // when the culture changes, load the new culture, apply, and invalidate
    $scope.$watch('ctx.culture', function () {
        $.ajax({
            url: 'scripts/vendor/wijmo.culture.' + $scope.ctx.culture + '.js',
            dataType: 'script',
            success: function (data) {

                // culture applied, now load translations
                $.ajax({
                    url: 'translations/strings.' + $scope.ctx.culture + '.js',
                    dataType: 'json',
                    async: false,
                    success: function (data) {
                        $scope.i18n = data;

                        // show changes
                        $scope.$apply();
                        invalidateAll();
                    }
                });
            },
        });
    });

    // invalidate all Wijmo controls
    // using a separate function to handle strange IE9 scope issues
    function invalidateAll() {
        wijmo.Control.invalidateAll();
    }

    // palettes for ColorPicker control
    $scope.theColor = 'white';
    $scope.thePalette = 'Standard';
    $scope.palettes = new wijmo.collections.CollectionView([
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
    ]);

    // dialogs
    $scope.modal = true;
    $scope.showDialog = function (dlgName) {
        var dlg = $scope[dlgName];
        if (dlg) {
            var inputs = dlg.hostElement.querySelectorAll('input');
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].type != 'checkbox') {
                    inputs[i].value = '';
                }
            }
            dlg.modal = $scope.modal;
            dlg.hideTrigger = dlg.modal ? wijmo.input.PopupTrigger.None : wijmo.input.PopupTrigger.Blur;
            dlg.show();
        }
    };
    $scope.hideDialog = function (evt, msg) {

        // hide dialog
        for (var e = evt.target; e; e = e.parentElement) {
            if (wijmo.hasClass(e, 'wj-popup')) {
                var dlg = wijmo.Control.getControl(e);
                dlg.hide();
            }
        }

        // show alert
        alert(msg);
    }

    // model data

    // as an array
    $scope.ctx.countries = [
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

    // as an ICollectionView
    var items = [];
    for (var i = 0; i < $scope.ctx.countries.length; i++) {
        var c = $scope.ctx.countries[i];
        items.push({ id: i, country: c, length: c.length, selected: i < 10 && (i % 3 == 0) });
    }
    $scope.ctx.items = new wijmo.collections.CollectionView(items);
    $scope.ctx.items.moveCurrentToPosition(-1);

    // as a collection of HTML items
    $scope.ctx.htmlItems = [];
    for (var i = 0; i < 100; i++) {
        $scope.ctx.htmlItems.push('item <b>' + (i + 1) + '</b> of 100');
    }

    // function to retrieve companies using web service
    var cache = {};
    $scope.ctx.getCompanies = function (query, max, callback) {

        // try getting the result from the cache
        var result = cache[query];
        if (result) {
            callback(result);
            return;
        }

        // not in cache, get from server
        var params = { query: query, max: max };
        $.getJSON('companycatalog.ashx', params, function (response) {

            // add 'SymbolName' property to result
            var items = [];
            for (var i = 0; i < response.length; i++) {
                var c = response[i];
                c.SymbolName = c.Symbol + ': ' + c.Name;
            }

            // store result in cache
            cache[query] = response;

            // and return the result
            callback(response);
        })
        .fail(function (error) {
            console.log('error: ' + error.responseText);
            cache[query] = null; // << no point in trying this query again
            callback(null);
        });
    }

    // start service so there's no delay when the user starts typing
    var params = { query: 'start', max: 0 };
    $.getJSON('companycatalog.ashx', params);

    // musicians array 
    var names = 'Paul,Mark,Pete,Ringo,Luke,Jacob,John,Nate,Zym,George,Toom,Crash,Boom,Dewd'.split(',');
    $scope.ctx.musicians = [];
    for (var i = 0; i < names.length; i++) {
        var item = {
            id: i,
            name: names[i],
            photo: '|Paul|John|George|Ringo|'
                .indexOf('|' + names[i] + '|') >= 0
                ? 'resources/' + names[i] + '.png'
                : null
        };
        $scope.ctx.musicians.push(item);
    }
});
