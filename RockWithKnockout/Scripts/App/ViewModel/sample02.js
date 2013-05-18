var viewModel;
$(function () {
    viewModel = {
        name: ko.observable(),
        price: ko.observable(0),
        cost: ko.observable(0),
        createdate: ko.observable('2013/05/18'),
        color: ko.observable('#873434'),

        onSubmit: function () {
            var product = ko.toJSON(this);

            console.log(product);
        }
    }

    ko.applyBindings(viewModel);
});