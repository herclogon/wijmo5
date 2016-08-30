export declare class FormatCellsCmp {
    fonts: any[];
    fontSizeList: any[];
    selectionFormatState: wijmo.grid.sheet.IFormatState;
    selection: any;
    private _updatingSelection;
    private _applyFillColor;
    private _format;
    flexSheet: wijmo.grid.sheet.FlexSheet;
    cboFontName: wijmo.input.ComboBox;
    cboFontSize: wijmo.input.ComboBox;
    colorPicker: wijmo.input.ColorPicker;
    constructor();
    format: string;
    flexSheetInit(flexSheet: wijmo.grid.sheet.FlexSheet): void;
    cboFontNameInit(cboFontName: wijmo.input.ComboBox): void;
    cboFontSizeInit(cboFontSize: wijmo.input.ComboBox): void;
    colorPickerInit(colorPicker: wijmo.input.ColorPicker): void;
    applyCellTextAlign(textAlign: any): void;
    applyBoldStyle(): void;
    applyUnderlineStyle(): void;
    applyItalicStyle(): void;
    showColorPicker(e: any, isFillColor: any): void;
    private _updateSelection(sel);
    private _checkFontfamily(fontFamily);
    private _checkFontSize(fontSize);
    private _cumulativeOffset(element);
}
