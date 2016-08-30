﻿'use strict';

// declare app module
var app = angular.module('app');

// declare app controller
app.controller('appCtrl', function appCtrl($scope, $locale) {

    // population and gross domestic product for about 200 countries
    // Sources:
    //  https://simple.wikipedia.org/wiki/List_of_countries_by_population
    //  https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)
    $scope.countries = [
        { country: 'United States', pop: 320723000, gdp: 17348075 },
        { country: 'China', pop: 1357000000, gdp: 10356508 },
        { country: 'Japan', pop: 127300000, gdp: 4602367 },
        { country: 'Germany', pop: 80620000, gdp: 3874437 },
        { country: 'United Kingdom', pop: 64596800, gdp: 2950039 },
        { country: 'France', pop: 65821885, gdp: 2833687 },
        { country: 'Brazil', pop: 200400000, gdp: 2346583 },
        { country: 'Italy', pop: 60705991, gdp: 2147744 },
        { country: 'India', pop: 1252000000, gdp: 2051228 },
        { country: 'Russia', pop: 143500000, gdp: 1860598 },
        { country: 'Canada', pop: 34482779, gdp: 1785387 },
        { country: 'Australia', pop: 24170869, gdp: 1442722 },
        { country: 'South Korea', pop: 48219000, gdp: 1410383 },
        { country: 'Spain', pop: 46162024, gdp: 1406538 },
        { country: 'Mexico', pop: 122300000, gdp: 1291062 },
        { country: 'Indonesia', pop: 249900000, gdp: 888648 },
        { country: 'Netherlands', pop: 16715489, gdp: 880716 },
        { country: 'Turkey', pop: 76667864, gdp: 798332 },
        { country: 'Saudi Arabia', pop: 27136977, gdp: 746248 },
        { country: 'Switzerland', pop: 8039060, gdp: 703852 },
        { country: 'Nigeria', pop: 173600000, gdp: 573999 },
        { country: 'Sweden', pop: 9471174, gdp: 570591 },
        { country: 'Poland', pop: 38092000, gdp: 547894 },
        { country: 'Argentina', pop: 40117096, gdp: 543061 },
        { country: 'Belgium', pop: 10839905, gdp: 534230 },
        { country: 'Taiwan', pop: 23197947, gdp: 529597 },
        { country: 'Norway', pop: 5316800, gdp: 499817 },
        { country: 'Austria', pop: 8419776, gdp: 437582 },
        { country: 'Iran', pop: 80117000, gdp: 416490 },
        { country: 'Thailand', pop: 69519000, gdp: 404824 },
        { country: 'United Arab Emirates', pop: 8264070, gdp: 399451 },
        { country: 'Colombia', pop: 48389000, gdp: 377867 },
        { country: 'South Africa', pop: 50586757, gdp: 350082 },
        { country: 'Denmark', pop: 5579204, gdp: 342362 },
        { country: 'Malaysia', pop: 28334135, gdp: 338108 },
        { country: 'Singapore', pop: 5183700, gdp: 307872 },
        { country: 'Israel', pop: 7798600, gdp: 305673 },
        { country: 'Hong Kong', pop: 7108100, gdp: 290896 },
        { country: 'Egypt', pop: 88094000, gdp: 286435 },
        { country: 'Philippines', pop: 98390000, gdp: 284618 },
        { country: 'Finland', pop: 5394389, gdp: 272649 },
        { country: 'Chile', pop: 17248450, gdp: 258017 },
        { country: 'Ireland', pop: 4581269, gdp: 250814 },
        { country: 'Pakistan', pop: 191282000, gdp: 246849 },
        { country: 'Greece', pop: 10787690, gdp: 237970 },
        { country: 'Portugal', pop: 10555853, gdp: 229948 },
        { country: 'Iraq', pop: 32105000, gdp: 223508 },
        { country: 'Kazakhstan', pop: 16615000, gdp: 216036 },
        { country: 'Algeria', pop: 36300000, gdp: 213518 },
        { country: 'Qatar', pop: 1699435, gdp: 210109 },
        { country: 'Venezuela', pop: 31220000, gdp: 206252 },
        { country: 'Czech Republic', pop: 10542080, gdp: 205270 },
        { country: 'Peru', pop: 29797694, gdp: 202642 },
        { country: 'Romania', pop: 21436000, gdp: 199093 },
        { country: 'New Zealand', pop: 4577100, gdp: 197502 },
        { country: 'Vietnam', pop: 89700000, gdp: 185897 },
        { country: 'Bangladesh', pop: 156600000, gdp: 183824 },
        { country: 'Kuwait', pop: 2818000, gdp: 172608 },
        { country: 'Hungary', pop: 9985722, gdp: 136989 },
        { country: 'Ukraine', pop: 45668028, gdp: 130660 },
        { country: 'Angola', pop: 19618000, gdp: 129326 },
        { country: 'Morocco', pop: 33803400, gdp: 110009 },
        { country: 'Ecuador', pop: 14483499, gdp: 100543 },
        { country: 'Slovakia', pop: 5437126, gdp: 99869 },
        { country: 'Oman', pop: 2773479, gdp: 77779 },
        { country: 'Syria', pop: 23362000, gdp: 77460 },
        { country: 'Belarus', pop: 9468000, gdp: 76139 },
        { country: 'Sri Lanka', pop: 20653000, gdp: 74924 },
        { country: 'Sudan', pop: 30894000, gdp: 74766 },
        { country: 'Azerbaijan', pop: 9111100, gdp: 74145 },
        { country: 'Luxembourg', pop: 511840, gdp: 65683 },
        { country: 'Dominican Republic', pop: 9378818, gdp: 64058 },
        { country: 'Myanmar', pop: 48337000, gdp: 63135 },
        { country: 'Uzbekistan', pop: 28000000, gdp: 62613 },
        { country: 'Kenya', pop: 38610097, gdp: 60937 },
        { country: 'Guatemala', pop: 14713763, gdp: 58728 },
        { country: 'Uruguay', pop: 3368595, gdp: 57471 },
        { country: 'Croatia', pop: 4290612, gdp: 57073 },
        { country: 'Bulgaria', pop: 7364570, gdp: 55824 },
        { country: 'Ethiopia', pop: 94100000, gdp: 54809 },
        { country: 'Lebanon', pop: 4259000, gdp: 50028 },
        { country: 'Slovenia', pop: 2081660, gdp: 49570 },
        { country: 'Costa Rica', pop: 4563539, gdp: 49553 },
        { country: 'Tunisia', pop: 10673800, gdp: 48633 },
        { country: 'Lithuania', pop: 3207100, gdp: 48288 },
        { country: 'Tanzania', pop: 43188000, gdp: 48089 },
        { country: 'Turkmenistan', pop: 5105000, gdp: 47932 },
        { country: 'Serbia', pop: 7120666, gdp: 43866 },
        { country: 'Panama', pop: 3405813, gdp: 43777 },
        { country: 'Yemen', pop: 23833000, gdp: 43229 },
        { country: 'Libya', pop: 6423000, gdp: 41148 },
        { country: 'Ghana', pop: 24233431, gdp: 38616 },
        { country: 'Democratic Republic of the Congo', pop: 67758000, gdp: 35918 },
        { country: 'Jordan', pop: 6783300, gdp: 35878 },
        { country: 'Bahrain', pop: 1234571, gdp: 33862 },
        { country: 'Côte d\'Ivoire', pop: 21395000, gdp: 33741 },
        { country: 'Bolivia', pop: 10426154, gdp: 33237 },
        { country: 'Latvia', pop: 2209000, gdp: 31972 },
        { country: 'Cameroon', pop: 19406100, gdp: 31777 },
        { country: 'Paraguay', pop: 6337127, gdp: 30220 },
        { country: 'Trinidad and Tobago', pop: 1317714, gdp: 28874 },
        { country: 'Uganda', pop: 32939800, gdp: 27616 },
        { country: 'Zambia', pop: 13046508, gdp: 26611 },
        { country: 'Estonia', pop: 1340194, gdp: 26506 },
        { country: 'El Salvador', pop: 6227000, gdp: 25164 },
        { country: 'Cyprus', pop: 803200, gdp: 23263 },
        { country: 'Afghanistan', pop: 32358000, gdp: 20444 },
        { country: 'Nepal', pop: 26620809, gdp: 19761 },
        { country: 'Honduras', pop: 8215313, gdp: 19511 },
        { country: 'Gabon', pop: 1534000, gdp: 18209 },
        { country: 'Bosnia and Herzegovina', pop: 3843126, gdp: 18165 },
        { country: 'Brunei', pop: 422700, gdp: 17104 },
        { country: 'Iceland', pop: 318452, gdp: 17036 },
        { country: 'Papua New Guinea', pop: 7014000, gdp: 16809 },
        { country: 'Mozambique', pop: 23049621, gdp: 16684 },
        { country: 'Cambodia', pop: 13395682, gdp: 16551 },
        { country: 'Georgia', pop: 4469200, gdp: 16536 },
        { country: 'Senegal', pop: 12855153, gdp: 15683 },
        { country: 'Equatorial Guinea', pop: 720000, gdp: 15530 },
        { country: 'Botswana', pop: 2031000, gdp: 15217 },
        { country: 'South Sudan', pop: 8260490, gdp: 14304 },
        { country: 'Chad', pop: 10329208, gdp: 13945 },
        { country: 'Zimbabwe', pop: 12754000, gdp: 13833 },
        { country: 'Jamaica', pop: 2705800, gdp: 13709 },
        { country: 'Namibia', pop: 2324000, gdp: 13632 },
        { country: 'Republic of the Congo', pop: 4140000, gdp: 13552 },
        { country: 'Albania', pop: 3194972, gdp: 13276 },
        { country: 'Mauritius', pop: 1280924, gdp: 12588 },
        { country: 'Burkina Faso', pop: 15730977, gdp: 12503 },
        { country: 'Mali', pop: 14517176, gdp: 12094 },
        { country: 'Mongolia', pop: 2736800, gdp: 12037 },
        { country: 'Nicaragua', pop: 5815524, gdp: 11806 },
        { country: 'Laos', pop: 6348800, gdp: 11681 },
        { country: 'Armenia', pop: 3266300, gdp: 11644 },
        { country: 'Macedonia', pop: 2057284, gdp: 11342 },
        { country: 'Madagascar', pop: 18866000, gdp: 10674 },
        { country: 'Malta', pop: 417617, gdp: 10514 },
        { country: 'Tajikistan', pop: 7616000, gdp: 9242 },
        { country: 'Haiti', pop: 10085214, gdp: 8711 },
        { country: 'Benin', pop: 9100000, gdp: 8685 },
        { country: 'Bahamas', pop: 353658, gdp: 8511 },
        { country: 'Niger', pop: 15730754, gdp: 8024 },
        { country: 'Moldova', pop: 3560400, gdp: 7962 },
        { country: 'Rwanda', pop: 10412826, gdp: 7897 },
        { country: 'Kyrgyzstan', pop: 5477600, gdp: 7402 },
        { country: 'Kosovo', pop: 1870981, gdp: 7319 },
        { country: 'Guinea', pop: 10217591, gdp: 6707 },
        { country: 'Malawi', pop: 13077160, gdp: 6055 },
        { country: 'Suriname', pop: 529000, gdp: 5210 },
        { country: 'Mauritania', pop: 3340627, gdp: 5081 },
        { country: 'Timor-Leste', pop: 1066409, gdp: 4970 },
        { country: 'Sierra Leone', pop: 5997000, gdp: 4815 },
        { country: 'Togo', pop: 5753324, gdp: 4594 },
        { country: 'Montenegro', pop: 620029, gdp: 4551 },
        { country: 'Swaziland', pop: 1203000, gdp: 4416 },
        { country: 'Barbados', pop: 276302, gdp: 4354 },
        { country: 'Fiji', pop: 868000, gdp: 4289 },
        { country: 'Eritrea', pop: 5415000, gdp: 3858 },
        { country: 'Burundi', pop: 8575000, gdp: 3094 },
        { country: 'Guyana', pop: 784894, gdp: 3059 },
        { country: 'Maldives', pop: 317280, gdp: 2885 },
        { country: 'Lesotho', pop: 2194000, gdp: 2220 },
        { country: 'Liberia', pop: 3476608, gdp: 2013 },
        { country: 'Bhutan', pop: 708265, gdp: 1983 },
        { country: 'Cape Verde', pop: 491575, gdp: 1858 },
        { country: 'San Marino', pop: 32093, gdp: 1786 },
        { country: 'Central African Republic', pop: 4487000, gdp: 1726 },
        { country: 'Belize', pop: 312698, gdp: 1699 },
        { country: 'Djibouti', pop: 818159, gdp: 1589 },
        { country: 'Seychelles', pop: 90945, gdp: 1423 },
        { country: 'Saint Lucia', pop: 166526, gdp: 1404 },
        { country: 'Antigua and Barbuda', pop: 89138, gdp: 1248 },
        { country: 'Solomon Islands', pop: 542287, gdp: 1155 },
        { country: 'Guinea-Bissau', pop: 1520830, gdp: 1111 },
        { country: 'Grenada', pop: 110821, gdp: 912 },
        { country: 'Saint Kitts and Nevis', pop: 51970, gdp: 852 },
        { country: 'Samoa', pop: 184032, gdp: 827 },
        { country: 'The Gambia', pop: 1776000, gdp: 824 },
        { country: 'Vanuatu', pop: 234023, gdp: 822 },
        { country: 'Saint Vincent and the Grenadines', pop: 100892, gdp: 729 },
        { country: 'Comoros', pop: 754000, gdp: 697 },
        { country: 'Dominica', pop: 71685, gdp: 524 },
        { country: 'Tonga', pop: 105000, gdp: 438 },
        { country: 'São Tomé and Príncipe', pop: 169000, gdp: 338 },
        { country: 'Micronesia', pop: 102624, gdp: 308 },
        { country: 'Palau', pop: 21000, gdp: 249 },
        { country: 'Marshall Islands', pop: 54305, gdp: 193 },
        { country: 'Kiribati', pop: 101000, gdp: 181 },
        { country: 'Tuvalu', pop: 10000, gdp: 38 }
    ];

    // calculate the per-capita income and add that to each data point
    for (var i = 0; i < $scope.countries.length; i++) {
        var c = $scope.countries[i];
        c.pci = c.gdp / c.pop * 1e6; // US$/year/capita
    }
});
