onload = function () {

    var today = new Date();

    // Vue application
    var app = new Vue({
        el: '#app',
        data: {
            someValue: 123,
            countries: getCountries(),
            theDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30),
            minDate: new Date(today.getFullYear(), 0, 1),
            maxDate: new Date(today.getFullYear(), 11, 31),
            price: 3.5,
            nullVal: null,
            customMask: '',
            listBox: null,
            tax: 0.08,
            fileMenuOptions: [
                '<i class="fa fa-file-o"></i>&nbsp;&nbsp;<b>New</b><br><small><i>create a new file</i></small>',
                '<i class="fa fa-folder-open-o"></i>&nbsp;&nbsp;<b>Open</b><br><small><i>open an existing file or folder</i></small>',
                '<i class="fa fa-save"></i>&nbsp;&nbsp;<b>Save</b><br><small><i>save the current file</i></small>',
                '<span class="wj-separator"></span>',
                '<i class="fa fa-times"></i>&nbsp;&nbsp;<b>Exit</b><br><small><i>exit the application</i></small>'
            ],
            editMenuOptions: [
                '<i class="fa fa-cut"></i>&nbsp;&nbsp;<b>Cut</b><br><small><i>move the current selection to the clipboard</i></small>',
                '<i class="fa fa-copy"></i>&nbsp;&nbsp;<b>Copy</b><br><small><i>copy the current selection to the clipboard</i></small>',
                '<i class="fa fa-paste"></i>&nbsp;&nbsp;<b>Paste</b><br><small><i>insert clipboard content at the cursor position</i></small>'
            ],
            taxMenuOptions: [
                { text: '+ 25%', parm: .25 },
                { text: '+ 10%', parm: .10 },
                { text: '+ 5%', parm: .05 },
                { text: '+ 1%', parm: .01 },
                { text: '<span class="wj-separator"></span>' },
                { text: '- 1%', parm: -.01 },
                { text: '- 5%', parm: -.05 },
                { text: '- 10%', parm: -.10 },
                { text: '- 25%', parm: -.25 }
            ],

            // tax menu command
            taxMenuCommand: {
                executeCommand: function (arg) {
                    if (wijmo.isNumber(arg)) {
                        this.tax += arg;
                    }
                },
                canExecuteCommand: function(arg) {
                    if (wijmo.isNumber(arg)) {
                       var val = this.tax + arg;
                        return val >= 0 && val <= 1;
                    }
                    return false;
                }
            }
        },
        methods: {

            // apply special styles to weekends and holidays
            formatItem: function (s, e) {
                var weekday = e.data.getDay(),
                    holiday = getHoliday(e.data);
                wijmo.toggleClass(e.item, 'date-weekend', weekday == 0 || weekday == 6);
                wijmo.toggleClass(e.item, 'date-holiday', holiday.length > 0);
                e.item.title = holiday;
            },

            // format and validate dates
            itemFormatter: function (date, element) {
                var weekday = date.getDay(),
                    holiday = getHoliday(date);
                wijmo.toggleClass(element, 'date-weekend', weekday == 0 || weekday == 6);
                wijmo.toggleClass(element, 'date-holiday', holiday);
                element.title = holiday;
            },
            itemValidator: function (date) {
                switch (date.getDay()) {
                    case 0:
                    case 6:
                        return false; // no appointments on weekends
                }
                if (getHoliday(date).length > 0) {
                    return false; // no appointments on holidays
                }
                return true; // not a weekend or a holiday, this date is OK
            },

            // menu item clicked event handler
            menuItemClicked: function (s, e) {
                alert('You\'ve selected option ' + s.selectedIndex + ' from the ' + s.header + ' menu!');
            }
        },
        created: function () {

            // bind the menu commands to the app instance
            var cmd = this.taxMenuCommand;
            cmd.executeCommand = cmd.executeCommand.bind(this);
            cmd.canExecuteCommand = cmd.canExecuteCommand.bind(this);
        }
    });
}

function getCountries() {
    return [
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
}

// gets the holiday for a given date
function getHoliday(date) {
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
