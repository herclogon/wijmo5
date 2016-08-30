'use strict';

// ** esri module
// AngularJS directives for the Esri javascript map.
// ** requires a reference to the Esri API:
// <!-- Esri's Map API: https://developers.arcgis.com/javascript/3/ -->
// <link rel="stylesheet" href="https://js.arcgis.com/3.16/esri/css/esri.css">
// <script src="https://js.arcgis.com/3.16/"></script>
var m = angular.module('esri', [])

// ** esri-map directive
// - creates a map
m.directive('esriMap', function () {

    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            extent: '=',        // Gets or sets the map extent (esri.geometry.Extent).
            tileSource: '=',    // Sets the info source that provides demographics tiles for the map.
            basemap: '@'        // Sets the type of base map to show. Valid options are "streets" , "satellite" , "hybrid", "topo", "gray", "oceans", "national-geographic", or "osm".
        },
        template: '<div ng-transclude></div>',
        link: function (scope, element, attrs) {

            // create the map
            var map;
            var resizingMap = false;

            // create and initialize map
            require(['esri/map'], function (Map) {
                map = createMap();

                // initialize map extent
                if (!scope.extent) {
                    scope.extent = new esri.geometry.Extent({
                        xmin: -10392864, ymin: 4444140,
                        xmax: -7423438, ymax: 5422534,
                        spatialReference: { wkid: 102100 }
                    });
                    if (!scope.$root.$$phase) {
                        scope.$apply('extent');
                    }
                }

                // update map extent to match scope
                scope.$watch('extent', function () {
                    if (map.extent != scope.extent) {
                        map.setExtent(scope.extent);
                    }
                });

                // update base map
                scope.$watch('basemap', function () {
                    if (scope.basemap && map.getBasemap() != scope.basemap) {
                        map.setBasemap(scope.basemap);
                    }
                });

                // show demographics tiles 
                scope.$watch('tileSource', function (source) {
                    if (source) {
                        showTiles(source);
                    } else {
                        var ids = map.layerIds;
                        if (ids.length > 0) {
                            var layer = map.getLayer(ids[0]);
                            layer.setVisibility(true);
                            for (var i = 1; i < ids.length; i++) {
                                layer = map.getLayer(ids[i]);
                                layer.setVisibility(false);
                            }
                        }
                    }
                });

                // keep scope and map centers in sync
                map.onPanEnd = function () {
                    updateScopeExtent(false);
                };
                map.onZoomEnd = function () {
                    updateScopeExtent(true);
                };
                map.onExtentChange = function () {
                    if (resizingMap) {
                        resizingMap = false;
                        updateScopeExtent(true);
                    }
                };
            });

            // keep center point when user resizes the form
            $(window).resize(function () {
                resizingMap = true;
            });

            // create the map
            function createMap() {

                // give element a unique id
                var elementId = element.attr('id');
                if (!elementId) {
                    elementId = 'map' + scope.$id;
                    element.attr('id', elementId);
                }

                // create the map
                var options = {
                    wrapAround180: true,
                    fadeOnZoom: true,
                    showAttribution: false,
                    navigationMode: 'css-transforms',
                    extent: scope.extent,
                    basemap: scope.basemap ? scope.basemap : 'national-geographic'
                };
                var map = new esri.Map(elementId, options);

                // disable zoom on mouse wheel (only works after the map has loaded)
                dojo.connect(map, 'onLoad', function () {
                    map.disableScrollWheelZoom();
                });

                // change animation durations
                var cfg = esriConfig.defaults.map;
                cfg.panDuration = 50; // time in milliseconds; default panDuration: 350
                cfg.zoomDuration = 50; // time in milliseconds; default panDuration: 500

                // done
                return map;
            }

            // update scope extent after user zooms/pans/resizes the map
            function updateScopeExtent(keepCenter) {
                if (keepCenter && scope.extent) {
                    var center = scope.extent.getCenter();
                    map.centerAt(center);
                }
                scope.extent = map.extent;
                if (!scope.$root.$$phase) {
                    scope.$apply('extent');
                }
            }

            // show tile layer
            function showTiles(source) {

                // get tile url
                var url = source ? source.getTileUrl() : '';

                // create new tile layer if necessary
                if (url) {
                    var layer = map.getLayer(url);
                    if (!layer) {
                        layer = new esri.layers.ArcGISTiledMapServiceLayer(url);
                        layer.id = url;
                        layer.opacity = 0.4;
                        map.addLayer(layer);
                    }
                }

                // set tile layer visibility
                var ids = map.layerIds;
                for (var i = 1; i < ids.length; i++) {
                    var layer = map.getLayer(ids[i]);
                    layer.setVisibility(layer.id == url);
                }
            }
        }
    };
});

// ** esri-crosshair directive
// - creates a cross-hair to show the map center
m.directive('esriCrosshair', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            color: '@'
        },
        template: '<div>' +
            '  <div ng-style="{borderColor:color}" style="position:absolute;z-index:1;pointer-events:none;width:100px;height:100px;left:50%;top:50%;margin-left:-50px;margin-top:-50px;border-radius:50px;border:solid 2px black;"></div>' +
            '  <div ng-style="{borderColor:color}" style="position:absolute;z-index:1;pointer-events:none;width:200px;height:200px;left:50%;top:50%;margin-left:-100px;margin-top:-100px;border-radius:100px;border:solid 2px black;"></div>' +
            '  <div ng-style="{background:color}" style="position:absolute;z-index:1;pointer-events:none;width:2px;height:100%;left:50%;top:0px;background:black;"></div>' +
            '  <div ng-style="{background:color}" style="position:absolute;z-index:1;pointer-events:none;width:100%;height:2px;left:0px;top:50%;background:black;"></div>' +
            '</div>',
        link: function (scope, element, attrs) {
            element.parent().css('position', 'relative');
        }
    };
});

// ** ersi-legend directive
// - show the legend info for the specific layer of the ersi-map
m.directive('esriLegend', function () {
    return {
        restrict: 'E',
        scope: {
            source: '=?'
        },
        replace: true,
        template: '<div class="row text-left"></div>',
        link: function (scope, element, attrs) {
            // update slider position when value changes
            scope.$watch("source", function () {
                var legendHtml = '';
                if (scope.source) {
                    element.show();
                    $.each(scope.source.legends, function (_, legend) {
                        legendHtml += '<div class="col-md-3">' +
                            '<div style="margin:0px 3px;width:14px;height:14px;display:inline-block;background-color:' + legend.color + ';">' +
                            '</div>' + legend.label + '</div>';
                    });
                } else {
                    element.hide();
                }

                element.html(legendHtml);
            });
        }
    }
});
