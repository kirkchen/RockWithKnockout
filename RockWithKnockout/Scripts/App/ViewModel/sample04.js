var products = [];
for (var i = 0; i < 12; i++) {
    products.push({
        title: ko.observable('產品' + (i + 1)),
        image: ko.observable('http://lorempixel.com/250/250/cats'),
        suggestPrice: ko.observable((i + 1) * 100),
        price: ko.observable((i + 1) * 50)
    });
}

var displayMode = {
    List: 'list',
    Image: 'image'
}

var ProductList = function () {
    var self = this;

    self.mode = ko.observable(displayMode.Image);

    self.products = products;

    self.switchMode = function (mode) {
        self.mode(mode);
    }
}

var viewModel = new ProductList();
ko.applyBindings(viewModel);