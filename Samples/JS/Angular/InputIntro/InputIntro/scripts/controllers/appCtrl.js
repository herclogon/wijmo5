(function () {
    'use strict';

    // get reference to app module
    var app = angular.module('app');

    // add controller to app module
    app.controller('appCtrl', function appCtrl($scope) {

        // values for InputDate, InputTime, InputDateTime
        var today = new Date();
        $scope.today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30);
        $scope.minDate = new Date(today.getFullYear(), 0, 1);
        $scope.maxDate = new Date(today.getFullYear(), 11, 31);

        // apply special styles to weekends and holidays
        $scope.formatItem = function (s, e) {
            var weekday = e.data.getDay(),
                holiday = getHoliday(e.data);
            wijmo.toggleClass(e.item, 'date-weekend', weekday == 0 || weekday == 6);
            wijmo.toggleClass(e.item, 'date-holiday', holiday);
            e.item.title = holiday;
        }

        // show item formatter and validator
        $scope.itemFormatter = function (date, element) {
            var weekday = date.getDay(),
                holiday = getHoliday(date);
            wijmo.toggleClass(element, 'date-weekend', weekday == 0 || weekday == 6);
            wijmo.toggleClass(element, 'date-holiday', holiday);
            element.title = holiday;
        }
        $scope.itemValidator = function (date) {
            switch (date.getDay()) {
                case 0:
                case 6:
                    return false; // no appointments on weekends
            }
            if (getHoliday(date)) {
                return false; // no appointments on holidays
            }
            return true; // not a weekend or a holiday, this date is OK
        }
        var theDate = new Date();
        while (!$scope.itemValidator(theDate)) {
            theDate = wijmo.DateTime.addDays(theDate, 1);
        }
        $scope.theDate = theDate; // start with a valid date

        // gets the holiday for a given date
        function getHoliday(date) {
            var day = date.getDate(),
                month = date.getMonth() + 1;
            switch (month + '/' + day) { // simple holidays (fixed dates)
                case '1/1':   return 'New Year\'s Day';
                case '6/14':  return 'Flag Day';
                case '7/4':   return 'Independence Day';
                case '11/11': return 'Veteran\'s Day';
                case '12/25': return 'Christmas Day';
            }
            var weekDay = date.getDay(),
                weekNum = Math.floor((day - 1) / 7) + 1;
            switch (month + '/' + weekNum + '/' + weekDay) {
                case '1/3/1':  return 'Martin Luther King\'s Birthday'; // third Monday in January
                case '2/3/1':  return 'Washington\'s Birthday'; // third Monday in February
                case '5/3/6':  return 'Armed Forces Day'; // third Saturday in May
                case '9/1/1':  return 'Labor Day'; // first Monday in September
                case '10/2/1': return 'Columbus Day'; // second Monday in October
                case '11/4/4': return 'Thanksgiving Day'; // fourth Thursday in November
            }
            return ''; // no holiday today
        }

        // values for ListBox and ComboBox
        $scope.listBox = null;

        // values for InputNumber
        $scope.pi = Math.PI;
        $scope.someValue = 3.5;
        $scope.price = 3.5;
        $scope.nullVal = null;

        // values for InputMask
        $scope.customMask = null;
        $scope.maskToday = today;

        // Menu
        $scope.tax = .07;

        $scope.menuItemClicked = function (menu) {
            alert('You\'ve selected option ' + menu.selectedIndex + ' from the ' + menu.header + ' menu!');
        };

        $scope.menuCommand = {
            executeCommand: function (arg) {
                $scope.tax += arg;
            },
            canExecuteCommand: function (arg) {
                if (wijmo.isNumber(arg)) {
                    var val = $scope.tax + arg;
                    return val >= 0 && val <= 1;
                }
                return false;
            }
        };

        // Data for AutoComplete, ComboBox, and ListBox
        $scope.countries = [
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

        $scope.cities = [
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

        var names = 'Paul,Mark,Pete,Ringo,Luke,Jacob,John,Nate,Zym,George,Toom,Crash,Boom,Dewd'.split(',');
        $scope.musicians = [];
        for (var i = 0; i < names.length; i++) {
            var item = {
                id: i,
                name: names[i],
                photo: '|Paul|John|George|Ringo|'
                    .indexOf('|' + names[i] + '|') >= 0 
                    ? 'resources/' + names[i] + '.png'
                    : null
            };
            $scope.musicians.push(item);
        }

    });
})();