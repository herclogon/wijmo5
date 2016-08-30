'use strict';

/***********************************************************************************
 * This service provides various types of demographic information for a given 
 * location/zoom level.
 */
var m = angular.module('gdash');
m.factory('gdashService', function () {

    // information sources available to views
    var infoSources = null,
        currentExtent = null,
        infoScale = 4, // state level
        locationName = '',
        domTapDescription = '', // dominant tapestry description
        onGotData = null,
        dataTimer = null;

    function getData() {
        if (currentExtent) {
            if (currentExtent.getWidth() < 2e7) {
                infoScale = 3; // county level
            }
            if (currentExtent.getWidth() < 2e6) {
                infoScale = 2; // tract level
            }

            // update all infoValues
            $.each(infoSources, function (_, source) {
                source.getData(currentExtent, infoScale, gotData);
            });
        }
    };

    function gotData() {

        // get location name from age layer
        locationName = infoSources.age.getLocationName();

        // get dominant tapestry description
        var domTap = infoSources.tapestry.values.DOMTAP.value;
        domTapDescription = getTapestryDescription(domTap);

        // notify listeners of the changes
        if (onGotData) {
            clearTimeout(dataTimer);
            dataTimer = setTimeout(onGotData, 200);
        };
    }

    return {

        initService: function (gotDataCallback) {

            // initialize current location, extent
            currentExtent = new esri.geometry.Extent({
                xmin: -10392864, ymin: 4444140,
                xmax: -7423438, ymax: 5422534,
                spatialReference: { wkid: 102100 }
            });

            // initialize information sources available to views
            infoSources = {
                tapestry: new infoSource('USA_Tapestry', 'DOMTAP,TAPSEGNAM'),
                populationBySex: new infoSource('USA_Population_by_Sex', 'TOTPOP_CY,PMALE_CY,PFEMALE_CY,MALES_CY,FEMALES_CY'),
                age: new infoSource('USA_Median_Age', 'TOTPOP_CY,MEDAGE_CY,POP0_9,POP10_19,POP20_29,POP30_39,POP40_49,POP50_59,POP60_69,POP70_79,POP80_plus', 'POP0_9,POP80_plus', '2012 Total Population Age '),
                householdIncome: new infoSource('USA_Median_Household_Income', 'TOTPOP_CY,MEDHINC_CY,HINCBASECY,HINC50_CY,HINC75_CY,HINC100_CY,HINC150_CY,HINC200_CY,MEDHHINC_pct_USAvg,HINC0_25,HINC25_50', 'HINC50_CY,HINC200_CY', '2012 Household Income '),
                netWorth: new infoSource('USA_Median_Net_Worth', 'TOTPOP_CY,MEDVAL_I,MEDHINC_I,MEDNW_CY,MEDNW_I,NWBASE_CY,NW0_CY,NW15_CY,NW35_CY,NW50_CY,NW75_CY,NW100_CY,NW150_CY,NW250_CY,NW500_CY,MEDNETWORTH_pct_USAvg', 'NW0_CY,NW500_CY', '2012 Net Worth '),
                homeValue: new infoSource('USA_Median_Home_Value', 'TOTPOP_CY,MEDVAL_CY,MEDVAL_I,MEDHINC_I,MEDNW_I,VALBASE_CY,VAL0_CY,VAL50K_CY,VAL100K_CY,VAL150K_CY,VAL200K_CY,VAL250K_CY,VAL300K_CY,VAL400K_CY,VAL1M_CY,MEDHMVAL_pct_USAvg,VAL500_1M', 'VAL0_CY,VAL1M_CY', '2012 Home Value ')
            },

            // add summary information
            infoSources.age.shortList = [
                new infoValue('POP0_9,POP10_19,POP20_29', 'under 30'),
                new infoValue('POP30_39,POP40_49,POP50_59', '30 to 59'),
                new infoValue('POP60_69,POP70_79,POP80_plus', '60 and over')
            ];
            infoSources.householdIncome.shortList = [
                new infoValue('HINC50_CY', 'under 75k'),
                new infoValue('HINC75_CY,HINC100_CY', '75k to 150k'),
                new infoValue('HINC150_CY,HINC200_CY', '100k and above')
            ];
            infoSources.netWorth.shortList = [
                new infoValue('NW0_CY,NW15_CY,NW35_CY', 'under 50k'),
                new infoValue('NW50_CY,NW75_CY,NW100_CY', '50k to 150k'),
                new infoValue('NW150_CY,NW250_CY,NW500_CY', '150k and above')
            ];
            infoSources.homeValue.shortList = [
                new infoValue('VAL50K_CY,VAL100K_CY', 'under 150k'),
                new infoValue('VAL150K_CY,VAL200K_CY,VAL250K_CY,VAL300K_CY', '150k to 500k'),
                new infoValue('VAL400K_CY,VAL1M_CY', '500k and above')
            ];

            onGotData = gotDataCallback;

            getData();
        },

        setExtent: function (extent) {
            if (extent && currentExtent != extent) {
                var sameExtent =
                    extent.xmin == currentExtent.xmin && extent.ymin == currentExtent.ymin &&
                    extent.xmax == currentExtent.xmax && extent.ymax == currentExtent.ymax;
                if (!sameExtent) {
                    currentExtent = extent;
                    getData();
                }
            }
        },

        getLocation: function () {
            var ptm = currentExtent.getCenter(),
                ptg = esri.geometry.webMercatorToGeographic(ptm);
            return {
                lat: ptg.y,
                lon: ptg.x,
                name: locationName ? locationName : 'Please select a location within the USA.',
                isValid: locationName != null
            };
        },

        getIndexDescription: function (index) {
            var desc =
                index < 50 ? 'substantially lower' :
                index < 80 ? 'lower' :
                index < 100 ? 'slightly lower' :
                index < 120 ? 'slightly higher' :
                index < 200 ? 'higher' :
                'substantially higher';
            return desc + ' than the national average';
        },

        getSources: function () {
            return infoSources;
        },

        getExtent: function () {
            return currentExtent;
        },

        getDomTapDescription: function () {
            return domTapDescription;
        }
    }
});