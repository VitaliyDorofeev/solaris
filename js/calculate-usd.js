let usdRate = 0;

const currencyUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';

$.ajax({
    url: currencyUrl,
    chache: false,
    success: function(data) {
        usdRate = JSON.parse(data).Valute.USD.Value;
        calculateUsd(totalPrice, usdRate)
    }
})

function calculateUsd(totalPrice, usdRate) {
    const totalPriceUsd = (totalPrice / usdRate).toFixed(0);
        const modelPriceUSDHolder = $('#modelPriceUSD');

        const formatter = new Intl.NumberFormat('ru');
        modelPriceUSDHolder.text(`$ ${formatter.format(totalPriceUsd)}`);
}

$('#autoForm input').on('change', function(){
    calculateUsd(totalPrice, usdRate);
});