// application view model
function viewModel1() {

    // Save this pointer
    var self = this;

    // values for InputDate
    var today = new Date();
    this.today = ko.observable(today);
    this.minDate = ko.observable(new Date(today.getFullYear(), 0, 1));
    this.maxDate = ko.observable(new Date(today.getFullYear(), 11, 31));

    // values for ListBox and ComboBox
    this.listBox = ko.observable(undefined);
    this.listBoxIndex = ko.observable(undefined);
    this.listBoxValue = ko.observable(undefined);

    // values for InputNumber
    this.pi = ko.observable(Math.PI);
    this.price = ko.observable(3.5);

    // Menu
    this.tax = ko.observable(.07);

    this.menuItemClicked = function (data, sender, args) {
        alert('You\'ve selected option ' + sender.selectedIndex + ' from the ' + sender.header + ' menu!');
    };

    this.menuCommand = {
        executeCommand: function (arg) {
            self.tax(self.tax() + arg);
        },
        canExecuteCommand: function (arg) {
            if (wijmo.isNumber(arg)) {
                var val = self.tax() + arg;
                return val >= 0 && val <= 1;
            }
            return false;
        }
    };

    // Format the specified value using according to the specified format.
    this.format = function(value, format) {
        return wijmo.Globalize.format(ko.unwrap(value), format);
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
}