var app = angular.module('app', ['wj']);

// odata controller: load OData service tables and expose them as collection views
app.controller('appCtrl', function odataController($scope) {

    // data context
    $scope.ctx = {
        services: new wijmo.collections.CollectionView([
            { name: 'Northwind', url: 'http://services.odata.org/Northwind/Northwind.svc' },
            { name: 'OData Test', url: 'http://services.odata.org/V3/OData/OData.svc' }
            // TODO: add more JSON/CORS-enabled OData sources...
        ]),
        entities: new wijmo.collections.CollectionView(),
        data: null
    };

    // load entity list for the selected service
    loadEntityList();
    $scope.ctx.services.currentChanged.addHandler(function () {
        loadEntityList();
    });
    function loadEntityList() {
        var url = $scope.ctx.services.currentItem.url;
        var entityList = new wijmo.odata.ODataCollectionView(
            url, // service
            null, // null to get entity list
            { // options
                loaded: function (sender, e) {
                    $scope.ctx.entities.sourceCollection = sender.items;
                    $scope.$apply();
                }
            }
        );
    }

    // load data for the selected entity
    $scope.ctx.entities.currentChanged.addHandler(loadEntityData);
    $scope.ctx.entities.collectionChanged.addHandler(loadEntityData);
    function loadEntityData() {
        var svc = $scope.ctx.services.currentItem, // current service
            ent = $scope.ctx.entities.currentItem; // current entity
        if (svc && ent) {
            $scope.ctx.data = new wijmo.odata.ODataCollectionView(
                svc.url, // service url
                ent.name, // entity name
                { // options
                    pageSize: $scope.ctx.data ? $scope.ctx.data.pageSize : 0,
                    loaded: function () {
                        $scope.$apply();
                    },
                    error: function (sender, e) {
                        var msg = e.request.response.match(/"internalexception":{"message":"(.*?)"/);
                        if (msg) {
                            console.error(msg[1]);
                            e.cancel = true;
                        }
                    }
                }
            );
        }
    }
});