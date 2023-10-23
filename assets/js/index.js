let firstNum;
let secondNum;
let opt;
let display = $('#display-text');
let oparator = $('#oparator');

$('#button-section .num').click(function () {
    let text = $(this).children().text();
    display.text(display.text() + text);
});

$('#btnClear').on('click', function () {
    clear();
});

function clear() {
    display.text('');
    oparator.text('');
    firstNum = 0;
    secondNum = 0;
}

$('#btnSum').on('click', function () {
    if (display.text() !== '') {
        oparator.text('+');
        opt = '+';
        firstNum = parseFloat(display.text());
        display.text('');
    }
});

$('#decrement').on('click', function () {
    if (display.text() !== '') {
        oparator.text('-');
        opt = '-';
        firstNum = parseFloat(display.text());
        display.text('');
    }

});

$('#division').on('click', function () {
    if (display.text() !== '') {
        oparator.text('/');
        opt = '/';
        firstNum = parseFloat(display.text());
        display.text('');
    }
});