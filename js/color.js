// Выбор цвета на цену не влияет

$('#colorsSelector .colorItem').on('click', function(){
    const imgPath = $(this).attr('data-img-path')

    $('#imgHolder img').attr('src', imgPath);
});