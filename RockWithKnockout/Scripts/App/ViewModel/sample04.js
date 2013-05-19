var products = [];
for (var i = 0; i < 12; i++) {
    products.push({
        title: ko.observable('產品' + (i + 1)),
        image: ko.observable('http://lorempixel.com/250/250/cats/'),
        suggestPrice: ko.observable((i + 1) * 100),
        price: ko.observable((i + 1) * 50),
        description: ko.observable('This is product description!')
    });
}

var displayMode = {
    List: 'list',
    Image: 'image'
}

var ProductList = function () {
    var self = this;

    self.products = products;

    self.mode = ko.observable(displayMode.Image);

    self.switchMode = function (mode) {
        self.mode(mode);
    }

    self.getTemplateName = function () {
        if (self.mode() === 'list') {
            return 'list-template';
        }
        else {
            return 'image-template';
        }
    };
}

var viewModel = new ProductList();
ko.applyBindings(viewModel);