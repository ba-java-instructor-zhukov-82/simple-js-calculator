function read(id) {
    return +(document.getElementById(id).value);
}

function calculate() {
    var a = read('number01');
    var b = read('number02');

    var addition = a + ' + ' + b + ' = ' + (a + b);
    var subtraction = a + ' - ' + b + ' = ' + (a - b);
    var multiplicity = a + ' * ' + b + ' = ' + (a * b);
    var division = a + ' / ' + b + ' = ' + (a / b);
    var result = addition + '<br/>' + subtraction + '<br/>'
        + multiplicity + '<br/>' + division + '<br/>';

    document.getElementById('result').innerHTML = result;
}