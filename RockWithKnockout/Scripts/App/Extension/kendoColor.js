ko.bindingHandlers.color = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        // Initial Kendo color
        $(element).kendoColorPicker({
            value: "#ffffff",
            buttons: false
        });
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        // First get the latest data that we're bound to
        var value = valueAccessor();

        // Next, whether or not the supplied model property is observable, get its current value
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        // Assign value
        $(element).data('kendoColorPicker').value(valueUnwrapped);
    }
};