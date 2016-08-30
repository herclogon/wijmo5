// data and helper methods for sample
var app = {
    chartData: [],
};
function loadData() {
    var xhrObj = new XMLHttpRequest();
    xhrObj.open('GET', "data/fb.json", false);
    xhrObj.send('');
    app.chartData = JSON.parse(xhrObj.responseText);
}
// retrive the data
loadData();