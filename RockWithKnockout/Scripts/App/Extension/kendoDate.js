ko.bindingHandlers.date = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        // First get the latest data that we're bound to
        var value = valueAccessor();

        $(element).kendoDatePicker({
            format: 'yyyy/MM/dd',
            change: function (e) {
                if (ko.isObservable(value)) {
                    value(kendo.toString(this.value(), "yyyy/MM/dd"));
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
        $(element).data('kendoDatePicker').value(valueUnwrapped);
    }
};