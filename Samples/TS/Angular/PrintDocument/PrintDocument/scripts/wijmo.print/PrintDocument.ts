module wijmo.print {
    'use strict';

    // Note: The Edge browser had an issue that prevented this component
    // from working correctly (see link below); that bug has been fixed
    // and the PrintDocument component now works fine with Edge.
    //  https://connect.microsoft.com/IE/Feedback/Details/1589775

    /**
     * Class that enables the creation of custom documents for printing.
     *
     * To use, instantiate a @see:PrintDocument, add the content using the @see:append method,
     * and finish by calling the @see:print method.
     */
    export class PrintDocument {
        _iframe: HTMLIFrameElement;
        _title: string;
        _css: string[];
        _copyCss = true;

        // ** ctor

        /**
         * Initializes a new instance of a @see:PrintDocument.
         *
         * @param options JavaScript object containing initialization data for the @see:PrintDocument.
         */
        constructor(options?: any) {
            if (options != null) {
                wijmo.copy(this, options);
            }
        }

        // ** object model

        /**
         * Gets or sets the document title.
         */
        get title(): string {
            return this._title;
        }
        set title(value: string) {
            this._title = asString(value);
        }
        /**
         * Gets or sets a value that determines whether the @see:PrintDocument should include the CSS
         * style sheets defined in the main document.
         */
        get copyCss(): boolean {
            return this._copyCss;
        }
        set copyCss(value: boolean) {
            this._copyCss = asBoolean(value);
        }
        /**
         * Adds a CSS style sheet to the document.
         */
        addCSS(href: string) {
            if (!this._css) {
                this._css = [];
            }
            this._css.push(href);
        }
        /**
         * Appends an HTML element or string to the document.
         */
        append(child: any) {
            var doc = this._getDocument();
            if (isString(child)) {
                doc.write(child);
            } else if (child instanceof HTMLElement) {
                doc.write(child.outerHTML);
            } else {
                assert(false, 'child should be an HTML element or a string.');
            }
        }
        /**
         * Prints the document.
         */
        print() {
            if (this._iframe) {

                // close the document
                this._close();

                // give it some time before printing/disposing
                setTimeout(() => {

                    // print the document
                    var wnd = this._iframe.contentWindow;
                    wnd.focus();
                    wnd.print();

                    // done, dispose of iframe
                    document.body.removeChild(this._iframe);
                    this._iframe = null;
                }, 100);
            }
        }

        // ** implementation

        // gets a reference to the print document
        _getDocument(): Document {
            if (!this._iframe) {

                // create iframe
                this._iframe = document.createElement('iframe');

                // initialize iframe
                var s = this._iframe.style;
                s.position = 'fixed';
                s.left = '10000px';
                s.top = '10000px';
                document.body.appendChild(this._iframe);
            }
            return this._iframe.contentDocument;
        }

        // closes the print document before printing
        _close() {

            // close document before applying title and style sheets
            var doc = this._getDocument();
            doc.close();

            // add title
            if (this.title) {
                var et = doc.querySelector('title');
                if (!et) {
                    et = doc.createElement('title');
                    doc.head.appendChild(et);
                }
                et.textContent = this.title;
            }

            // add main document style sheets
            if (this._copyCss) {
                var links = document.head.querySelectorAll('LINK');
                for (var i = 0; i < links.length; i++) {
                    var link = <HTMLLinkElement>links[i];
                    if (link.href.match(/\.css$/i) && link.rel.match(/stylesheet/i)) {
                        var xhr = httpRequest(link.href, { async: false });
                        this._addStyle(xhr.responseText);
                    }
                }
                var styles = document.head.querySelectorAll('STYLE');
                for (var i = 0; i < styles.length; i++) {
                    this._addStyle(styles[i].textContent);
                }
            }

            // add extra style sheets
            if (this._css) {
                for (var i = 0; i < this._css.length; i++) {
                    var es = doc.createElement('style'),
                        xhr = httpRequest(this._css[i], { async: false });
                    es.textContent = xhr.responseText;
                    doc.head.appendChild(es);
                }
            }
        }
        _addStyle(style: string) {
            var doc = this._getDocument(),
                es = doc.createElement('style');
            es.textContent = style;
            doc.head.appendChild(es);
        }
    }
}