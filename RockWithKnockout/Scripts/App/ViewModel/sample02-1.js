var viewModel = function () {
    this.name = ko.observable('product A');
    this.price = ko.observable(100);
    this.cost = ko.observable(50);
    this.createdate = ko.observable('2013/05/18');
    this.color = ko.observable('#873434');
}

var viewModelList = function () {
    this.models = [];

    for (var i = 0; i < 10; i++) {
        this.models.push(new viewModel());
    }

    this.onSubmit = function () {
        var product = ko.toJSON(this);

        console.log(product);
    }
}

ko.applyBindings(new viewModelList());

