$(function () {
    //// Initialize input control
    $('#createdate').kendoDatePicker({
        format: 'yyyy/MM/dd'
    });    

    $("#price").kendoNumericTextBox({
        format: "c",
        decimals: 3
    });
    $('#price').data('kendoNumericTextBox').value()

    $("#cost").kendoNumericTextBox({
        format: "c",
        decimals: 3
    });
    $('#cost').data('kendoNumericTextBox').value()

    $('#color').kendoColorPicker({
        value: "#ffffff",
        buttons: false
    });    

    //// Get input value
    $('#submit').click(function () {
        var product = {
            name: $('#name').val(),
            createdate: $('#createdate').data('kendoDatePicker').value(),
            price: $('#price').data('kendoNumericTextBox').value(),
            cost: $('#cost').data('kendoNumericTextBox').value(),
            color: $('#color').data('kendoColorPicker').value()
        }

        console.log(JSON.stringify(product));
    });
});