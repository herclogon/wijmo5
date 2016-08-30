app.service('SamplesService', function ($http) {
    var samples = null;
    var frameworks = [];

    /*
     * parameter is an object {loading: callback, success: callback(json), error: callback(string)}
     * samples' data are returned in the json object as a parameter in the success callback already grouped by name
     */
    this.downloadSamples = function (params) {
        samples = [];
        params['loading']();

        $http({
            url: 'SampleCrawler.asmx/Crawl',
            method: 'GET' // POST disables the cache
        }).success(function (data) {
            if (data.length == 0) {
                params['error']('Can\'t retrieve data from the server.');
            } else {
                frameworks = unique('Category', data);
                var groupedData = groupBy('DirTitle', data);
                samples = groupedData;
                params['success'](groupedData);
            }
        }).error(function (data) {
            params['error']('Can\'t reach the server.');
        });
    };

    this.getSamples = function () {
        return samples;
    };

    this.getFrameworks = function () {
        return frameworks;
    };

    /*
     * parameter is an object {name: nameOfSample, success: callback(sample), error: callback(string)}
     */
    this.getSampleByName = function (params) {
        for (var i = 0; i < samples.length; i++) {
            if (samples[i].DirTitle === params['name']) {
                params['success'](samples[i]);
                return;
            }
        }
        if (this.isPopulated()) {
            params['error']('No sample with identifier "' + params['name'] + '".');
        } else {
            params['error']('DATA SERVICE QUERIED BUT WAS EMPTY.');
        }
        
    };

    /*
     * Returns whether the variable samples in this Service is populated.
     */
    this.isPopulated = function () {
        return samples ? true : false;
    };

});

/*
* Param: name of attribute, list of objects that have that attribute
* Return: unique values of that attribute and a flag for each of them
* Why: find unique Category (framework) names from the sample list.
*/
function unique(attr, data) {
    var flags = [], output = [], l = data.length, i;
    for (i = 0; i < l; i++) {
        if (flags[data[i][attr]]) continue;
        flags[data[i][attr]] = true;
        if (data[i][attr] !== '') { // recently added line to check for empty string fw names
            output.push(data[i][attr]);
        }
    }
    return output;
}

// sanitizes sample name
function trimName(name) {
    name = name.replace(/(\(.*?\))/g, ''); // replace text between parentheses because that's the name of the framework
    name = name.trim();
    return name;
}

// currentSample {
//  DirTitle
//  Name (trimmed end)
//  Title
//  Screenshot address
//  List of Categories (fws) []
//  Description
//  implementations [{
//      Category (fw)
//      Address (in server)
//      }]
//  }
function groupBy(attr, data) {

    var output = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i]) {
            output.push({
                DirTitle: data[i].DirTitle,
                Name: trimName(data[i].Name),
                Title: data[i].Title,
                Screenshot: data[i].Screenshot,
                Category: [data[i].Category],
                Description: data[i].Description,
                Error: data[i].Error,
                implementations: [{ Category: data[i].Category, Address: data[i].Address }]
            });
        }
        for (var j = i + 1; j < data.length; j++) {
            if (data[i] && data[j]) {
                if (data[i][attr] === data[j][attr]) { // same name and not null
                    // found other implementation of the same sample
                    output[output.length - 1].Category.push(data[j].Category);
                    output[output.length - 1].implementations.push({ Category: data[j].Category, Address: data[j].Address });
                    data[j] = null; // doesn't need to be checked again
                }
            }
        }
    }
    return output;
}