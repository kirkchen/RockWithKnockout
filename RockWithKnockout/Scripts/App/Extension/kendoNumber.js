ko.bindingHandlers.number = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var value = valueAccessor(), allBindings = allBindingsAccessor();

        var numberFormat = allBindings.numberFormat || 'n';

        $(element).kendoNumericTextBox({
            format: numberFormat,
            change: function (e) {
                if (ko.isObservable(value)) {
                    value(this.value());
                }                
            }
        });
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        // First get the latest data that we're bound to
        var value = valueAccessor();

        // Next, whether or not the supplied model property is observable, get its current value
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        // Assign value
        $(element).data('kendoNumericTextBox').value(valueUnwrapped);
    }
};