'use strict';
angular.module('app')

.controller('codeCtrl', function ($scope, $http, $sce, $routeParams, SamplesService, SourceCodeService) {

    // codeView Data
    $scope.selectedFile = {
        name: '',
        txt: '',
        loading: false,
        ready: false,
        error: false,
        errorMessage: ''
    };

    $scope.sample = {
        data: {},
        state: {
            loading: false,
            ready: false,
            error: false,
            errorMessage: ''
        }
    };

    $scope.fileTree = {
        data: null,
        flex: null,
        loading: false,
        ready: false,
        error: false,
        errorMessage: ''
    };

    $scope.lastValidSelectedRow = 0;

    $scope.routeParams = $routeParams;

    $scope.readableFormats = [
        'htm', 'html', 'xml', 'config', 'txt',
        'css', 'js', 'ts', 'json',
        'cs', 'c', 'cpp', 'cc'];

    $scope.imgFormats = ['png'];
    // end codeView Data  
    

    /*
    *   Does a POST request to the webservice with a file path,
    *   receives the file at that path and updates $scope.selectedFile with the file's content.
    */
    function getFileByPath(path) {
        SourceCodeService.getFileByPath({
            path: path,
            loading: function () {
                $scope.selectedFile.loading = true;
                $scope.selectedFile.error = false;
                $scope.selectedFile.ready = false;
            },
            success: function (data) {
                $scope.selectedFile.loading = false;
                $scope.selectedFile.ready = true;
                $scope.selectedFile.txt = data;
                $scope.$apply();
            },
            error: function (data) {
                $scope.selectedFile.loading = false;
                $scope.selectedFile.error = true;
                console.log(data);
                $scope.selectedFile.errorMessage = data.Message;
            }
        });
    }

    function preventNull(item, instead) {
        return item ? item : instead;
    }

    function getExtension(fromFileName) {
        return fromFileName.split('.').pop();
    }

    function isTextualFile(fileName) {
        return ($scope.readableFormats.indexOf(getExtension(fileName))>=0);
    }

    function isImgFile(fileName) {
        return ($scope.imgFormats.indexOf(getExtension(fileName)) >= 0);
    }

    // takes a file name and returns the prism.js class relative to the language based on the file's extension
    function codeClassForMarkup(str) {
        switch (getExtension($scope.selectedFile.name)) {
            case 'css':
                return Prism.languages.css;
            case 'htm':
            case 'html':
            case 'xml':
            case 'config':
                return Prism.languages.markup;
            case 'ts':
            case 'js':
            case 'json':
                return Prism.languages.javascript;
            case 'cs':
                return Prism.languages.csharp;
            default:
                return '';
        }
    }

    // if file is not ready yet, wait another second and try to highlight syntax again.
    function highlight() {
        if (!$scope.selectedFile.ready) {
            setTimeout(highlight, 100);
        } else {

            // set content as plain text or use Prism to highlight it
            var el = document.getElementById('code-pre'),
                ccm = codeClassForMarkup($scope.selectedFile.name);
            if (ccm) {
                el.innerHTML = Prism.highlight($scope.selectedFile.txt, ccm);
            } else {
                el.textContent = $scope.selectedFile.txt;
            }
        }
    }

    //show image resource
    function showImg() {
        var el = document.getElementById('code-pre'),
            url = 'http://demos.wijmo.com/5',
            sUrl, nUrl = '';           
         
        if ($scope.selectedFile.path) {
            sUrl = $scope.selectedFile.path.split('\\\\');
            if (sUrl.length > 1) {
                nUrl = url + '/' + sUrl[1].replace(/\\/g, "/");
                el.innerHTML = '<img src=\'' + nUrl + '\'/>';
            }
        }

    }

    /*
     * Callback for selection changes on the File Tree FlexGrid element
     * (that displays the files inside a project folder from a sample).
     * Calls getFileByPath to do a request to the webservice with the path 
     * of the selected file in order to display its contents.
     */
    $scope.selectedFileChanged = function (flex, e) {
        var sel = flex.selection,
            ecv = flex.collectionView;
        for (var i = sel.bottomRow; i >= sel.topRow; i--) {
            if (flex.rows[i].dataItem) {
                if (flex.rows[i].dataItem.type !== 'file') {

                    // it's a directory row
                    return;

                } else {

                    // it's a file row
                    $scope.selectedFile.name = flex.rows[i].dataItem.DirTitle;
                    $scope.selectedFile.path = flex.rows[i].dataItem.path;

                    // updates scope variables that contain the file's data
                    if (isTextualFile($scope.selectedFile.name)) {
                        getFileByPath(flex.rows[i].dataItem.path);
                        if (codeClassForMarkup($scope.selectedFile.name) !== null) {
                            setTimeout(highlight, 100);
                        }
                    } else if (isImgFile($scope.selectedFile.name)) {
                        $scope.selectedFile.ready = true;
                        if (flex.rows[i].dataItem.type == 'file' && flex.rows[i].dataItem.path != '') {
                            setTimeout(showImg, 100);
                            //showImg();
                        }
                     } else {
                        $scope.selectedFile.ready = false;
                        $scope.selectedFile.loading = false;
                        // this is not an error, it's just a file we can't show as text...
                        //$scope.selectedFile.error = true;
                        //$scope.selectedFile.errorMessage = 'This is not a readable-text file.';
                    }
                    $scope.$digest();
                    return; // so multiple selection does not work.
                }
            }
        }
    }

    /*
     * Start outline showing up to level 2, more than that is a little overwhelming...
     */
    $scope.itemsSourceChanged = function (flex, e) {
        flex.collapseGroupsToLevel(2);
    }

    /*
     * Flexgrid's icon formatter callback
     */
    function addIcons(panel, r, c, cell) {
        // in the future add icons to flexgrid here
        var row = $scope.fileTree.flex.rows[r];
        switch (row.dataItem.type) {
            case 'file':
                cell.innerHTML = '<span class="glyphicon glyphicon-file tree-icon"></span>' + cell.innerHTML;
                wijmo.removeClass(cell, 'wj-elem-collapse'); // not expandable
                break;
            case 'dir':
                var icon = row.isCollapsed ? 'close' : 'open';
                cell.innerHTML = '<span class="glyphicon glyphicon-folder-' + icon + ' tree-icon"></span>' + row.dataItem.DirTitle;
                wijmo.addClass(cell, 'wj-elem-collapse'); // collapse/expand by clicking anywhere in the cell
                break;
        }
    }

    /*
     * Called when data to populate the file tree is successfully downloaded
     */
    function startFileTree(data) {
        $scope.fileTree.data = new wijmo.collections.CollectionView([data]);
        $scope.fileTree.flex.itemFormatter = addIcons;
    }

    // construct File Tree and sample info
    if (SamplesService.isPopulated() === false) {
        SamplesService.downloadSamples({
            loading: function () {
                $scope.sample.state.loading = true;
            },
            success: function (data) {
                SourceCodeService.downloadFileTree({
                    name: $routeParams['sampleName'],
                    implementation: $routeParams['sampleFw'],
                    loading: function () {
                        $scope.fileTree.loading = true;
                    },
                    success: function (data) {
                        startFileTree(data);
                        $scope.fileTree.loading = false;
                        $scope.fileTree.ready = true;

                        SamplesService.getSampleByName({
                            name: $routeParams['sampleName'],
                            success: function (data) {
                                $scope.sample.data = data;
                                $scope.sample.state.loading = false;
                                $scope.sample.state.ready = true;
                            },
                            error: function (data) {
                                $scope.sample.state.loading = false;
                                $scope.sample.state.error = true;
                                $scope.sample.state.errorMessage = data;
                            }
                        });
                    },
                    error: function (data) {
                        $scope.fileTree.loading = false;
                        $scope.fileTree.error = true;
                        $scope.fileTree.errorMessage = 'Cannot download this project\'s file tree.';
                    }
                });
            },
            error: function (data) {
                $scope.sample.state.loading = false;
                $scope.sample.state.error = true;
                $scope.sample.state.errorMessage = data;
            }
        });
    } else if (SamplesService.isPopulated() === true) {
        SourceCodeService.downloadFileTree({
            name: $routeParams['sampleName'],
            implementation: $routeParams['sampleFw'],
            loading: function () {
                $scope.fileTree.loading = true;
                $scope.fileTree.ready = false;
                $scope.fileTree.error = false;
            },
            success: function (data) {
                startFileTree(data);
                $scope.fileTree.loading = false;
                $scope.fileTree.ready = true;

                SamplesService.getSampleByName({
                    name: $routeParams['sampleName'],
                    success: function (data) {
                        $scope.sample.data = data;
                        $scope.sample.state.ready = true;
                    },
                    error: function (data) {
                        $scope.sample.state.error = true;
                        $scope.sample.state.errorMessage = data;
                    }
                });
            },
            error: function (data) {
                $scope.fileTree.loading = false;
                $scope.fileTree.error = true;
                $scope.fileTree.errorMessage = 'Cannot download this project\'s file tree.';
            }
        });
    } else {
        $scope.sample.state.error = true;
        $scope.sample.state.errorMessage = 'There was a problem with the data service.';
    }

});