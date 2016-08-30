// product class
function product(data) {
    var self = this;

    // store raw data
    self.id = data.id;
    self.name = data.name;
    self.rank = data.rank;
    self.salesDct = data.sales;
    self.salesValues = [];

    // compute aggregates
    var sum = 0;
    var sum2 = 0;
    var count = 0;
    var min = null;
    var max = null;
    for (var quarter in self.salesDct) {
        var sales = self.salesDct[quarter];
        sum += sales;
        sum2 += sales * sales;
        count++;
        min = min ? Math.min(min, sales) : sales;
        max = max ? Math.max(max, sales) : sales;
        self.salesValues.push(sales);
    }
    var avg = count > 0 ? sum / count : 0;
    self.sales = {

        // summary stats
        total: Math.round(sum),
        avg: Math.round(avg),
        stdev: Math.round(count > 0 ? Math.sqrt(sum2 / count - avg * avg) : 0),
        min: Math.round(min),
        max: Math.round(max),

        // this/prev quarter
        qThis: Math.round(self.getSales(self.getQuarter(true))),
        qPrev: Math.round(self.getSales(self.getQuarter(false)))
    };

    // target levels
    self.levels = {
        target: avg * 1.05,
        good: avg * 1.2,
        satisfactory: avg * .85,
        poor: avg - self.sales.stdev,
        critical: avg - self.sales.stdev * 0.2
    };

    // store data for charting (sales per quarter, trend)
    self.chartData = [];
    self.salesTrend = linReg(self.salesValues);
    var i = 0;
    for (var quarter in self.salesDct) {
        sales = self.salesDct[quarter];
        if (sales) {
            var reg = self.salesTrend.a + self.salesTrend.b * i++;
            self.chartData.push({ quarter: quarter, sales: sales, reg: reg });
        }
    };
}

// gets the sales for a quarter, or zero if none
product.prototype.getSales = function (quarter) {
    var value = this.salesDct[quarter];
    return value ? value : 0;
}

// get the current or previous quarter IDs in the format yyyy-Qq
product.prototype.getQuarter = function (current) {
    var today = new Date();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var qtr = Math.floor(((mm - 1) / 3) + 1);
    if (current) {
        return yyyy.toString() + '-Q' + qtr.toString();
    } else {
        return qtr == 1
            ? (yyyy - 1).toString() + '-Q4'
            : yyyy.toString() + '-Q' + (qtr - 1).toString();
    }
}

// calculate linear regression for a series of Y values
function linReg(values) {
    var n = 0, sx = 0, sy = 0, sxx = 0, syy = 0, sxy = 0;
    for (var i = 0; i < values.length; i++) {
        var x = i;
        var y = values[i];
        n++;
        sx += x;
        sy += y;
        sxx += x * x;
        syy += y * y;
        sxy += x * y;
    }
    var b = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    var a = sy / n - sx / n * b;
    var r2 = (n * sxy - sx * sy) * (n * sxy - sx * sy) / ((n * sxx - sx * sx) * (n * syy - sy * sy));

    // return regression result
    return { a: a, b: b, r2: r2 };
}
