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