var viewModel = function () {
    var self = this;
    self.name = ko.observable('product A');
    self.price = ko.observable(100);
    self.cost = ko.observable(50);
    self.createdate = ko.observable('2013/05/18');
    self.color = ko.observable('#873434');

    self.displayName = ko.computed(function () {
        return 'This is product' + self.name();
    });

    self.onSubmit = function () {
        var product = ko.toJSON(this);

        console.log(product);
    };
}

var model = new viewModel();
ko.applyBindings(model);
