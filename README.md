##Simple JavaScript Calculator

####Here is its script:

*index.html*
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Simple JavaScript Calculator Page</title>
</head>
<body>
    <div>
        First Number:&nbsp <input id="number01">
        Second Number:&nbsp <input id="number02">
        &nbsp
        <button onclick="calculate()">Calculate</button>
    </div>
    <h3 id="result"></h3>
    <script src="scripts/script.js"></script>
</body>
</html>
```

*script.js*
```javascript
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
```