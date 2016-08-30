var XlsxExport;
(function (XlsxExport) {
    function exportExpenseReport(employees) {
        // Namespace and XlsxConverter shortcuts.
        var xcNs = wijmo.xlsx;
        var book = new xcNs.Workbook();
        var dateFormat = xcNs.Workbook.toXlsxDateFormat('d'), stdNumWidth = 85, 
        //simpleCaptionStyle = <wijmo.xlsx.IWorkbookStyle>{ hAlign: wijmo.xlsx.HAlign.Right },
        simpleCaptionStyle = new xcNs.WorkbookStyle(), 
        //accentCaptionStyle = <wijmo.xlsx.IWorkbookStyle>{ font: { color: '#808097' } },
        accentCaptionStyle = new xcNs.WorkbookStyle(), 
        //totalCaptionStyle = <wijmo.xlsx.IWorkbookStyle>{
        //    basedOn: simpleCaptionStyle,
        //    font: { bold: true },
        //    hAlign: wijmo.xlsx.HAlign.Right
        //},
        totalCaptionStyle = new xcNs.WorkbookStyle(), 
        //valueStyle = <wijmo.xlsx.IWorkbookStyle>{ font: { family: 'Arial' } },
        valueStyle = new xcNs.WorkbookStyle(), 
        //highlightedValueStyle = <wijmo.xlsx.IWorkbookStyle>{ basedOn: valueStyle, fill: { color: '#e1e1e1' } },
        highlightedValueStyle = new xcNs.WorkbookStyle(), 
        //tableHeaderStyle = <wijmo.xlsx.IWorkbookStyle>{ font: { bold: true }, fill: { color: '#fad9cd' } },
        tableHeaderStyle = new xcNs.WorkbookStyle(), 
        //tableFooterCurrencyStyle = <wijmo.xlsx.IWorkbookStyle>{ basedOn: tableHeaderStyle, format: xcNs.Workbook.toXlsxNumberFormat('c2'), hAlign: xcNs.HAlign.Right },
        tableFooterCurrencyStyle = new xcNs.WorkbookStyle(), 
        //tableValueStyle = <wijmo.xlsx.IWorkbookStyle>{ fill: { color: '#f4b19b' } },
        tableValueStyle = new xcNs.WorkbookStyle(), 
        //tableDateStyle = <wijmo.xlsx.IWorkbookStyle>{ basedOn: tableValueStyle },
        tableDateStyle = new xcNs.WorkbookStyle(), 
        //tableCurrencyStyle = <wijmo.xlsx.IWorkbookStyle>{ basedOn: tableValueStyle, format: xcNs.Workbook.toXlsxNumberFormat('c2') },
        tableCurrencyStyle = new xcNs.WorkbookStyle(), 
        //tableIntegerStyle = <wijmo.xlsx.IWorkbookStyle>{ basedOn: tableValueStyle, format: xcNs.Workbook.toXlsxNumberFormat('00') };
        tableIntegerStyle = new xcNs.WorkbookStyle();
        simpleCaptionStyle.hAlign = xcNs.HAlign.Right;
        accentCaptionStyle.font = new xcNs.WorkbookFont();
        accentCaptionStyle.font.color = '#808097';
        totalCaptionStyle.basedOn = simpleCaptionStyle;
        totalCaptionStyle.font = new xcNs.WorkbookFont();
        totalCaptionStyle.font.bold = true;
        totalCaptionStyle.hAlign = xcNs.HAlign.Right;
        valueStyle.font = new xcNs.WorkbookFont();
        valueStyle.font.family = 'Arial';
        highlightedValueStyle.basedOn = valueStyle;
        highlightedValueStyle.fill = new xcNs.WorkbookFill();
        highlightedValueStyle.fill.color = '#e1e1e1';
        tableHeaderStyle.font = new xcNs.WorkbookFont();
        tableHeaderStyle.font.bold = true;
        tableHeaderStyle.fill = new xcNs.WorkbookFill();
        tableHeaderStyle.fill.color = '#fad9cd';
        tableFooterCurrencyStyle.basedOn = tableHeaderStyle;
        tableFooterCurrencyStyle.format = xcNs.Workbook.toXlsxNumberFormat('c2');
        tableFooterCurrencyStyle.hAlign = xcNs.HAlign.Right;
        tableValueStyle.fill = new xcNs.WorkbookFill();
        tableValueStyle.fill.color = '#f4b19b';
        tableDateStyle.basedOn = tableValueStyle;
        tableCurrencyStyle.basedOn = tableValueStyle;
        tableCurrencyStyle.format = xcNs.Workbook.toXlsxNumberFormat('c2');
        tableIntegerStyle.basedOn = tableValueStyle;
        tableIntegerStyle.format = xcNs.Workbook.toXlsxNumberFormat('00');
        for (var emplIdx = 0; emplIdx < employees.length; emplIdx++) {
            var empl = employees[emplIdx], sheet = new xcNs.WorkSheet(), rows = sheet.rows;
            book.sheets.push(sheet);
            sheet.name = empl.Name;
            //sheet.cols = [{ width: '1ch' }, { width: 100 },
            //	{ width: 200 }, { width: stdNumWidth }, { width: stdNumWidth }, {},
            //	{ width: stdNumWidth }, { width: stdNumWidth }, { width: 130 }, { width: 130 }, { width: stdNumWidth }];
            sheet.columns[0] = new wijmo.xlsx.WorkbookColumn();
            sheet.columns[0].width = '1ch';
            sheet.columns[1] = new wijmo.xlsx.WorkbookColumn();
            sheet.columns[1].width = 100;
            sheet.columns[2] = new wijmo.xlsx.WorkbookColumn();
            sheet.columns[2].width = 200;
            sheet.columns[3] = new wijmo.xlsx.WorkbookColumn();
            sheet.columns[3].width = stdNumWidth;
            sheet.columns[4] = new wijmo.xlsx.WorkbookColumn();
            sheet.columns[4].width = stdNumWidth;
            sheet.columns[6] = new wijmo.xlsx.WorkbookColumn();
            sheet.columns[6].width = stdNumWidth;
            sheet.columns[7] = new wijmo.xlsx.WorkbookColumn();
            sheet.columns[7].width = stdNumWidth;
            sheet.columns[8] = new wijmo.xlsx.WorkbookColumn();
            sheet.columns[8].width = 130;
            sheet.columns[9] = new wijmo.xlsx.WorkbookColumn();
            sheet.columns[9].width = 130;
            sheet.columns[10] = new wijmo.xlsx.WorkbookColumn();
            sheet.columns[10].width = stdNumWidth;
            //sheet.cols = [{ width: '1ch', style: { fill: { color: '#00ff00' } } }, { width: 100 }, { width: 230 }, {}, { width: 95 }, { width: 130 }, {}, {}, { width: 105 }];
            //============= Report header - Employee data =========================
            //rows[0].cells[8] = {
            //	colSpan: 3,
            //	value: 'For Office Use Only',
            //	style: { basedOn: highlightedValueStyle, font: { italic: true } }
            //};
            rows[0] = new xcNs.WorkbookRow();
            rows[0].cells[8] = new xcNs.WorkbookCell();
            rows[0].cells[8].colSpan = 3;
            rows[0].cells[8].value = 'For Office Use Only';
            rows[0].cells[8].style = new xcNs.WorkbookStyle();
            rows[0].cells[8].style.basedOn = highlightedValueStyle;
            rows[0].cells[8].style.font = new xcNs.WorkbookFont();
            rows[0].cells[8].style.font.italic = true;
            //rows[1] = {
            //    height: 45,
            //    cells: [, { value: 'Expense Report', colSpan: 3, style: { basedOn: accentCaptionStyle, font: { size: 32, bold: true } } }]
            //};
            rows[1] = new xcNs.WorkbookRow();
            rows[1].height = 45;
            rows[1].cells[1] = new xcNs.WorkbookCell();
            rows[1].cells[1].value = 'Expense Report';
            rows[1].cells[1].colSpan = 3;
            rows[1].cells[1].style = new xcNs.WorkbookStyle();
            rows[1].cells[1].style.basedOn = accentCaptionStyle;
            rows[1].cells[1].style.font = new xcNs.WorkbookFont();
            rows[1].cells[1].style.font.size = 32;
            rows[1].cells[1].style.font.bold = true;
            //rows[2] = {
            //    cells: [
            //        ,
            //        { value: 'PURPOSE:', style: accentCaptionStyle },
            //        { value: empl.Purpose },
            //        , ,
            //        { value: 'Attachment:', style: accentCaptionStyle },
            //        { value: empl.Attachment },
            //        //From/To dates are filled after expense items generation
            //    ]
            //}
            rows[2] = new xcNs.WorkbookRow();
            rows[2].cells[1] = new xcNs.WorkbookCell();
            rows[2].cells[1].value = 'PURPOSE:';
            rows[2].cells[1].style = accentCaptionStyle;
            rows[2].cells[2] = new xcNs.WorkbookCell();
            rows[2].cells[2].value = empl.Purpose;
            rows[2].cells[5] = new xcNs.WorkbookCell();
            rows[2].cells[5].value = 'Attachment:';
            rows[2].cells[5].style = accentCaptionStyle;
            rows[2].cells[6] = new xcNs.WorkbookCell();
            rows[2].cells[6].value = empl.Attachment;
            //rows[5] = { cells: [, { value: 'EMPLOYEE IMFORMATION:', style: accentCaptionStyle, colSpan: 2 }] };
            rows[5] = new xcNs.WorkbookRow();
            rows[5].cells[1] = new xcNs.WorkbookCell();
            rows[5].cells[1].value = 'EMPLOYEE IMFORMATION:';
            rows[5].cells[1].style = accentCaptionStyle;
            rows[5].cells[1].colSpan = 2;
            //rows[6] = {
            //    cells: [
            //        ,
            //        { value: 'Name', style: simpleCaptionStyle },
            //        { value: empl.Name },
            //        , ,
            //        { value: 'Position', style: simpleCaptionStyle },
            //        { value: empl.Position },
            //        , ,
            //        { value: 'SSN', style: simpleCaptionStyle },
            //        { value: empl.SSN }
            //    ]
            //}
            rows[6] = new xcNs.WorkbookRow();
            rows[6].cells[1] = new xcNs.WorkbookCell();
            rows[6].cells[1].value = 'Name';
            rows[6].cells[1].style = simpleCaptionStyle;
            rows[6].cells[2] = new xcNs.WorkbookCell();
            rows[6].cells[2].value = empl.Name;
            rows[6].cells[5] = new xcNs.WorkbookCell();
            rows[6].cells[5].value = 'Position';
            rows[6].cells[5].style = simpleCaptionStyle;
            rows[6].cells[6] = new xcNs.WorkbookCell();
            rows[6].cells[6].value = empl.Position;
            rows[6].cells[9] = new xcNs.WorkbookCell();
            rows[6].cells[9].value = 'SSN';
            rows[6].cells[9].style = simpleCaptionStyle;
            rows[6].cells[10] = new xcNs.WorkbookCell();
            rows[6].cells[10].value = empl.SSN;
            //rows[7] = {
            //    cells: [
            //        ,
            //        { value: 'Department', style: simpleCaptionStyle },
            //        { value: empl.Department },
            //        , ,
            //        { value: 'Manager', style: simpleCaptionStyle },
            //        { value: empl.Manager },
            //        , ,
            //        { value: 'Employee ID', style: simpleCaptionStyle },
            //        { value: empl.Id }
            //    ]
            //}
            rows[7] = new xcNs.WorkbookRow();
            rows[7].cells[1] = new xcNs.WorkbookCell();
            rows[7].cells[1].value = 'Department';
            rows[7].cells[1].style = simpleCaptionStyle;
            rows[7].cells[2] = new xcNs.WorkbookCell();
            rows[7].cells[2].value = empl.Department;
            rows[7].cells[5] = new xcNs.WorkbookCell();
            rows[7].cells[5].value = 'Manager';
            rows[7].cells[5].style = simpleCaptionStyle;
            rows[7].cells[6] = new xcNs.WorkbookCell();
            rows[7].cells[6].value = empl.Manager;
            rows[7].cells[9] = new xcNs.WorkbookCell();
            rows[7].cells[9].value = 'Employee ID';
            rows[7].cells[9].style = simpleCaptionStyle;
            rows[7].cells[10] = new xcNs.WorkbookCell();
            rows[7].cells[10].value = empl.Id;
            //================ Expense items table ==========================
            // Table header
            //rows[9] = {
            //    style: { hAlign: xcNs.HAlign.Center },
            //    cells: [
            //        ,
            //        { value: 'Date', style: tableHeaderStyle }, { value: 'Decsription', style: tableHeaderStyle },
            //        { value: 'Hotel', style: tableHeaderStyle }, { value: 'Transport', style: tableHeaderStyle },
            //        { value: 'Fuel', style: tableHeaderStyle }, { value: 'Meal', style: tableHeaderStyle },
            //        { value: 'Misc', style: tableHeaderStyle }, { value: 'Parking (per hour)', style: tableHeaderStyle },
            //        { value: 'Parking (hours)', style: tableHeaderStyle }, { value: 'Total', style: tableHeaderStyle }
            //    ]
            //}
            rows[9] = new xcNs.WorkbookRow();
            rows[9].style = new xcNs.WorkbookStyle();
            rows[9].style.hAlign = xcNs.HAlign.Center;
            rows[9].cells[1] = new xcNs.WorkbookCell();
            rows[9].cells[1].value = 'Date';
            rows[9].cells[1].style = tableHeaderStyle;
            rows[9].cells[2] = new xcNs.WorkbookCell();
            rows[9].cells[2].value = 'Decsription';
            rows[9].cells[2].style = tableHeaderStyle;
            rows[9].cells[3] = new xcNs.WorkbookCell();
            rows[9].cells[3].value = 'Hotel';
            rows[9].cells[3].style = tableHeaderStyle;
            rows[9].cells[4] = new xcNs.WorkbookCell();
            rows[9].cells[4].value = 'Transport';
            rows[9].cells[4].style = tableHeaderStyle;
            rows[9].cells[5] = new xcNs.WorkbookCell();
            rows[9].cells[5].value = 'Fuel';
            rows[9].cells[5].style = tableHeaderStyle;
            rows[9].cells[6] = new xcNs.WorkbookCell();
            rows[9].cells[6].value = 'Meal';
            rows[9].cells[6].style = tableHeaderStyle;
            rows[9].cells[7] = new xcNs.WorkbookCell();
            rows[9].cells[7].value = 'Misc';
            rows[9].cells[7].style = tableHeaderStyle;
            rows[9].cells[8] = new xcNs.WorkbookCell();
            rows[9].cells[8].value = 'Parking (per hour)';
            rows[9].cells[8].style = tableHeaderStyle;
            rows[9].cells[9] = new xcNs.WorkbookCell();
            rows[9].cells[9].value = 'Parking (hours)';
            rows[9].cells[9].style = tableHeaderStyle;
            rows[9].cells[10] = new xcNs.WorkbookCell();
            rows[9].cells[10].value = 'Total';
            rows[9].cells[10].style = tableHeaderStyle;
            // Table items
            var expenses = empl.Expenses, firstIdx = 10, totalIdx = firstIdx + expenses.length;
            for (var i = 0; i < expenses.length; i++) {
                var curExpense = expenses[i], rowIdx = firstIdx + i;
                //rows[rowIdx] = {
                //    cells: [
                //        ,
                //        { value: curExpense.Date, style: tableDateStyle },
                //        { value: curExpense.Decsription, style: tableValueStyle },
                //        { value: curExpense.Hotel, style: tableCurrencyStyle },
                //        { value: curExpense.Transport, style: tableCurrencyStyle },
                //        { value: curExpense.Fuel, style: tableCurrencyStyle },
                //        { value: curExpense.Meal, style: tableCurrencyStyle },
                //        { value: curExpense.Misc, style: tableCurrencyStyle },
                //        { value: curExpense.ParkingRate, style: tableCurrencyStyle },
                //        { value: curExpense.ParkingHours, style: tableIntegerStyle },
                //        {
                //			formula: 'SUM(' + xcNs.Workbook.xlsxAddress(rowIdx, 3) + ':' + xcNs.Workbook.xlsxAddress(rowIdx, 7) + ')+' +
                //			xcNs.Workbook.xlsxAddress(rowIdx, 8) + '*' + xcNs.Workbook.xlsxAddress(rowIdx, 9),
                //            style: tableCurrencyStyle,
                //        },
                //    ]
                //}
                rows[rowIdx] = new xcNs.WorkbookRow();
                rows[rowIdx].cells[1] = new xcNs.WorkbookCell();
                rows[rowIdx].cells[1].value = curExpense.Date;
                rows[rowIdx].cells[1].style = tableDateStyle;
                rows[rowIdx].cells[2] = new xcNs.WorkbookCell();
                rows[rowIdx].cells[2].value = curExpense.Decsription;
                rows[rowIdx].cells[2].style = tableCurrencyStyle;
                rows[rowIdx].cells[3] = new xcNs.WorkbookCell();
                rows[rowIdx].cells[3].value = curExpense.Hotel;
                rows[rowIdx].cells[3].style = tableCurrencyStyle;
                rows[rowIdx].cells[4] = new xcNs.WorkbookCell();
                rows[rowIdx].cells[4].value = curExpense.Transport;
                rows[rowIdx].cells[4].style = tableCurrencyStyle;
                rows[rowIdx].cells[5] = new xcNs.WorkbookCell();
                rows[rowIdx].cells[5].value = curExpense.Fuel;
                rows[rowIdx].cells[5].style = tableCurrencyStyle;
                rows[rowIdx].cells[6] = new xcNs.WorkbookCell();
                rows[rowIdx].cells[6].value = curExpense.Meal;
                rows[rowIdx].cells[6].style = tableCurrencyStyle;
                rows[rowIdx].cells[7] = new xcNs.WorkbookCell();
                rows[rowIdx].cells[7].value = curExpense.Misc;
                rows[rowIdx].cells[7].style = tableCurrencyStyle;
                rows[rowIdx].cells[8] = new xcNs.WorkbookCell();
                rows[rowIdx].cells[8].value = curExpense.ParkingRate;
                rows[rowIdx].cells[8].style = tableCurrencyStyle;
                rows[rowIdx].cells[9] = new xcNs.WorkbookCell();
                rows[rowIdx].cells[9].value = curExpense.ParkingHours;
                rows[rowIdx].cells[9].style = tableIntegerStyle;
                rows[rowIdx].cells[10] = new xcNs.WorkbookCell();
                rows[rowIdx].cells[10].formula = 'SUM(' + xcNs.Workbook.xlsxAddress(rowIdx, 3) + ':' + xcNs.Workbook.xlsxAddress(rowIdx, 7) + ')+' +
                    xcNs.Workbook.xlsxAddress(rowIdx, 8) + '*' + xcNs.Workbook.xlsxAddress(rowIdx, 9);
                rows[rowIdx].cells[10].style = tableCurrencyStyle;
            }
            // Totals row
            //var totalRow = <wijmo.xlsx.IWorkbookRow>{ cells: [, { value: 'Total', style: tableHeaderStyle }] },
            //    totalCells = totalRow.cells,
            var totalColumnIndexes = [3, 4, 5, 6, 7, 10];
            rows[totalIdx] = new xcNs.WorkbookRow();
            rows[totalIdx].cells[1] = new xcNs.WorkbookCell();
            rows[totalIdx].cells[1].value = 'Total';
            rows[totalIdx].cells[1].style = tableHeaderStyle;
            for (var ti in totalColumnIndexes) {
                var ci = totalColumnIndexes[ti];
                //totalCells[ci] = {
                //	formula: 'sum(' + xcNs.Workbook.xlsxAddress(firstIdx, ci) + ':' + xcNs.Workbook.xlsxAddress(totalIdx - 1, ci) + ')',
                //    style: tableFooterCurrencyStyle
                //};
                rows[totalIdx].cells[ci] = new xcNs.WorkbookCell();
                rows[totalIdx].cells[ci].formula = 'sum(' + xcNs.Workbook.xlsxAddress(firstIdx, ci) + ':' + xcNs.Workbook.xlsxAddress(totalIdx - 1, ci) + ')';
                rows[totalIdx].cells[ci].style = tableFooterCurrencyStyle;
            }
            //totalCells[8] = {
            //	formula: 'SUMPRODUCT(' + xcNs.Workbook.xlsxAddress(firstIdx, 7) + ':' + xcNs.Workbook.xlsxAddress(totalIdx - 1, 7) + ',' +
            //	xcNs.Workbook.xlsxAddress(firstIdx, 8) + ':' + xcNs.Workbook.xlsxAddress(totalIdx - 1, 8) + ')',
            //    colSpan: 2,
            //    style: tableFooterCurrencyStyle
            //};
            rows[totalIdx].cells[8] = new xcNs.WorkbookCell();
            rows[totalIdx].cells[8].formula = 'SUMPRODUCT(' + xcNs.Workbook.xlsxAddress(firstIdx, 7) + ':' + xcNs.Workbook.xlsxAddress(totalIdx - 1, 7) + ',' +
                xcNs.Workbook.xlsxAddress(firstIdx, 8) + ':' + xcNs.Workbook.xlsxAddress(totalIdx - 1, 8) + ')';
            rows[totalIdx].cells[8].colSpan = 2;
            rows[totalIdx].cells[8].style = tableFooterCurrencyStyle;
            //totalCells[2] = { style: tableHeaderStyle };
            rows[totalIdx].cells[2] = new xcNs.WorkbookCell();
            rows[totalIdx].cells[2].style = tableHeaderStyle;
            // From/To dates in header, via MAX/MIN formulas on Date field
            //rows[2].cells[8] = { value: 'PAY PERIOD:', style: accentCaptionStyle };
            rows[2].cells[8] = new xcNs.WorkbookCell();
            rows[2].cells[8].value = 'PAY PERIOD:';
            rows[2].cells[8].style = accentCaptionStyle;
            //rows[2].cells[9] = { value: 'From', style: simpleCaptionStyle };
            rows[2].cells[9] = new xcNs.WorkbookCell();
            rows[2].cells[9].value = 'From';
            rows[2].cells[9].style = simpleCaptionStyle;
            var datesRange = xcNs.Workbook.xlsxAddress(firstIdx, 1, true) + ':' + xcNs.Workbook.xlsxAddress(totalIdx - 1, 1, true);
            //rows[2].cells[10] = { formula: 'MIN(' + datesRange + ')', style: {format:dateFormat} };
            rows[2].cells[10] = new xcNs.WorkbookCell();
            rows[2].cells[10].formula = 'MIN(' + datesRange + ')';
            rows[2].cells[10].style = new xcNs.WorkbookStyle();
            rows[2].cells[10].style.format = dateFormat;
            //rows[3] = { cells: [] };
            //rows[3].cells[9] = { value: 'To', style: simpleCaptionStyle };
            //rows[3].cells[10] = { formula: 'MAX(' + datesRange + ')', style: {format:dateFormat}  };
            rows[3] = new xcNs.WorkbookRow();
            rows[3].cells[9] = new xcNs.WorkbookCell();
            rows[3].cells[9].value = 'To';
            rows[3].cells[9].style = simpleCaptionStyle;
            rows[3].cells[10] = new xcNs.WorkbookCell();
            rows[3].cells[10].formula = 'MAX(' + datesRange + ')';
            rows[3].cells[10].style = new xcNs.WorkbookStyle();
            rows[3].cells[10].style.format = dateFormat;
            //============ Report footer - totals and misc fields
            var footerIdx = totalIdx + 1;
            //var footerRow = rows[footerIdx] = { cells: [] };
            rows[footerIdx] = new xcNs.WorkbookRow();
            //footerRow.cells[9] = { value: 'Subtotal', style: totalCaptionStyle };
            rows[footerIdx].cells[9] = new xcNs.WorkbookCell();
            rows[footerIdx].cells[9].value = 'Subtotal';
            rows[footerIdx].cells[9].style = totalCaptionStyle;
            //footerRow.cells[10] = {
            //	formula: xcNs.Workbook.xlsxAddress(footerIdx + 2, 10) + '-' + xcNs.Workbook.xlsxAddress(footerIdx + 1, 10),
            //	style: { format: xcNs.Workbook.toXlsxNumberFormat('c2') }
            //};
            rows[footerIdx].cells[10] = new xcNs.WorkbookCell();
            rows[footerIdx].cells[10].formula = xcNs.Workbook.xlsxAddress(footerIdx + 2, 10) + '-' + xcNs.Workbook.xlsxAddress(footerIdx + 1, 10);
            rows[footerIdx].cells[10].style = new xcNs.WorkbookStyle();
            rows[footerIdx].cells[10].style.format = xcNs.Workbook.toXlsxNumberFormat('c2');
            //footerRow = rows[footerIdx + 1] = { cells: [] };
            rows[footerIdx + 1] = new xcNs.WorkbookRow();
            //footerRow.cells[9] = { value: 'Cash Advance', style: totalCaptionStyle };
            rows[footerIdx + 1].cells[9] = new xcNs.WorkbookCell();
            rows[footerIdx + 1].cells[9].value = 'Cash Advance';
            rows[footerIdx + 1].cells[9].style = totalCaptionStyle;
            //footerRow.cells[10] = { value: empl.Advance, style: { format: xcNs.Workbook.toXlsxNumberFormat('c2') } };
            rows[footerIdx + 1].cells[10] = new xcNs.WorkbookCell();
            rows[footerIdx + 1].cells[10].value = empl.Advance;
            rows[footerIdx + 1].cells[10].style = new xcNs.WorkbookStyle();
            rows[footerIdx + 1].cells[10].style.format = xcNs.Workbook.toXlsxNumberFormat('c2');
            //footerRow = rows[footerIdx + 2] = { cells: [] };
            rows[footerIdx + 2] = new xcNs.WorkbookRow();
            //footerRow.cells[9] = { value: 'Total', style: totalCaptionStyle };
            rows[footerIdx + 2].cells[9] = new xcNs.WorkbookCell();
            rows[footerIdx + 2].cells[9].value = 'Total';
            rows[footerIdx + 2].cells[9].style = totalCaptionStyle;
            //footerRow.cells[10] = { formula: xcNs.Workbook.xlsxAddress(totalIdx, 10), style: { format: xcNs.Workbook.toXlsxNumberFormat('c2') } };
            rows[footerIdx + 2].cells[10] = new xcNs.WorkbookCell();
            rows[footerIdx + 2].cells[10].formula = xcNs.Workbook.xlsxAddress(totalIdx, 10);
            rows[footerIdx + 2].cells[10].style = new xcNs.WorkbookStyle();
            rows[footerIdx + 2].cells[10].style.format = xcNs.Workbook.toXlsxNumberFormat('c2');
            //rows[footerIdx + 3] = {
            //    cells: [
            //        ,
            //        { value: 'APPROVED:', style: accentCaptionStyle }
            //        , , ,
            //        { value: 'NOTES:', style: accentCaptionStyle }
            //    ]
            //};
            rows[footerIdx + 3] = new xcNs.WorkbookRow();
            rows[footerIdx + 3].cells[1] = new xcNs.WorkbookCell();
            rows[footerIdx + 3].cells[1].value = 'APPROVED:';
            rows[footerIdx + 3].cells[1].style = accentCaptionStyle;
            rows[footerIdx + 3].cells[4] = new xcNs.WorkbookCell();
            rows[footerIdx + 3].cells[4].value = 'NOTES:';
            rows[footerIdx + 3].cells[4].style = accentCaptionStyle;
        }
        return book;
    }
    XlsxExport.exportExpenseReport = exportExpenseReport;
})(XlsxExport || (XlsxExport = {}));
//# sourceMappingURL=expenseReportExport.js.map