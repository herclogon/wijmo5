app.service('SourceCodeService', function ($http) {
    var sample = {};

    this.downloadFileTree = function (params) {
        sample = {};
        params['loading']();
        $http({
            url: 'SampleFileTree.asmx/GetFileTreeFromSample',
            method: 'GET', // GET required to enable caching
            params: { // GET uses 'params' instead of 'data'
                dirTitle: params['name'],
                category: params['implementation']
            }
        }).success(function (data) {
            sample = data;
            params['success'](sample);
        }).error(function (data) {
            console.log(data);
            params['error'](data);
        });
    };

    this.getFileByPath = function (params) {
        params['loading']();
        //$http({
        //    url: 'SampleFileTree.asmx/GetFileByPath',
        //    method: 'GET', // GET required to enable caching
        //    params: { // GET uses 'params' instead of 'data'
        //        path: params['path']
        //    }
        //}).success(function (data) {
        //    params['success'](unescapeHtml(data));
        //}).error(function (data) {
        //    params['error'](data);
        //});

        wijmo.httpRequest('SampleFileTree.asmx/GetFileByPath', {
            data: { path: params['path'] },
            success: function (xhr) {
                params['success'](unescapeHtml(xhr.response));
            },
            error: function (xhr) {
                params['error'](xhr.response);
            }
        });
    };

});

function unescapeHtml(str) {
    return str
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/\\\\/g, '\\')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, '\'')
        .replace(/&amp;/g, '&');
}