ko.bindingHandlers.date = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {        
        $(element).kendoDatePicker({
            format: 'yyyy/MM/dd'
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