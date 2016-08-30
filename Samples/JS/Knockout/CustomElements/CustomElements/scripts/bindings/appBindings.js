// Tab custom binding
ko.bindingHandlers.appTab = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var template =
            '<div class="tabbable">' +
              '<ul class="nav nav-tabs" data-bind="foreach: panes">' +
                '<li data-bind="css: {active: selected}">' +
                  '<a href="" data-bind="text: title, click: select"></a>' +
                '</li>' +
              '</ul>' +
              '<div class="tab-content" part="tabContent"></div>' +
            '</div>';

        var content = element.innerHTML;
        element.innerHTML = template;
        var contentEl = element.querySelector("[part='tabContent']");
        contentEl.innerHTML = content;

        var localVM = new function () {
            var self = this;
            this.panes = ko.observableArray();

            this.select = function (pane) {
                for (var i = 0; i < self.panes().length; i++) {
                    self.panes()[i].selected(false);
                }
                pane.selected(true);
            }

            this.addPane = function (pane) {
                if (self.panes().length == 0) {
                    self.select(pane);
                }
                self.panes.push(pane);
            }
        };
        var localContext = bindingContext.extend(localVM);
        ko.applyBindingsToDescendants(localContext, element);

        return { controlsDescendantBindings: true };
    }
};

// Tab pane custom binding, works as a child of the Tab binding
ko.bindingHandlers.appTabPane = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var template =
            '<div class="tab-pane" data-bind="css: {active: pane.selected}">\
            </div>';
        var valSet = valueAccessor();
        var pane = { title: valSet.title, selected: ko.observable(false) };
        bindingContext.addPane(pane);

        element.className += ' tab-content';
        var content = element.innerHTML;
        element.innerHTML = template;
        element.childNodes[0].innerHTML = content;

        var localVM = { pane: pane }
        var localContext = bindingContext.extend(localVM);
        ko.applyBindingsToDescendants(localContext, element);

        return { controlsDescendantBindings: true };
    }
};

