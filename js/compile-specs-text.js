function compileSpecText(){
    const modalSpecs = $('#modelSpecs');


    const engine =  $('input[name="engine"]:checked + label').text();
    const transmission = $('input[name="transmission"]:checked + label').text();
    const package = $('input[name="package"]:checked + label').text();


    const text = `${engine}, ${transmission}, ${package}`;

    modalSpecs.text(text);
}

// при старте страницы
compileSpecText();

// после переключения радио кнопок

$('#autoForm input').on('change', function(){
    compileSpecText();
});