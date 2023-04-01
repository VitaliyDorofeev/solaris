let totalPrice = 0;

function calculatePrice() {
    // Получаем текстовое значение цены
    const modelPrice = $('#modelPrice');

    let enginePrice = parseInt($('input[name="engine"]:checked').val()) ;

    let transmissionPrice = parseInt($('input[name="transmission"]:checked').val()) ;

    let packagePrice = parseInt ($('input[name="package"]:checked').val());

    totalPrice = enginePrice + transmissionPrice + packagePrice;

    const formatter = new Intl.NumberFormat('ru');
    modelPrice.text(`${formatter.format(totalPrice)} руб.`);
    
}

calculatePrice();

$('#autoForm input').on('change', function(){
    calculatePrice();
});