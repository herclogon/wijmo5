function loadData() {
    var xhrObj = new XMLHttpRequest();
    xhrObj.open('GET', "data/WeatherData.txt", false);
    xhrObj.send('');

    var strings = xhrObj.responseText.split('\r\n');
    var len = strings.length;

    var items = [];
    var names = [];
    for (var i = 0; i < len; i++) {
        var sdata = strings[i].split(',');
        var slen = sdata.length;
        if (i == 0) {
            for (var j = 0; j < slen; j++) {
                names.push(sdata[j]);
            }
        } else {
            var item = {};
            for (var j = 0; j < slen; j++) {
                if (j == 0) {
                    item[names[j]] = wijmo.Globalize.parseDate(sdata[j], 'yyyy-MM-dd');
                } else {
                    var num = parseFloat(sdata[j]);
                    item[names[j]] = isNaN(num) ? sdata[j] : num;
                }
            }
            items.push(item);
        }
    }

    return items;
}
