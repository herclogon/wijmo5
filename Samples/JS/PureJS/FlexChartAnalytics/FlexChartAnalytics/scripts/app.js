// generate some random data
function getData(count) {
    var data = new wijmo.collections.ObservableArray();

    for (var i = 1; i <= count; i++) {
        data.push({
            x: i,
            y: Math.floor(Math.random() * 100)
        });
    }
    return data;
}

var appData = getData(10);