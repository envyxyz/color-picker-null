// let span = document.getElementById('result');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let btn = document.getElementById('resultBtn');
var value = document.getElementById('c1');
let variables = document.documentElement;

c1.addEventListener("input", function() {
    let c1V = c1.value;
//     span.textContent = c1V;
    variables.style.setProperty('--text', c1V);
}, false);

c2.addEventListener("input", function() {
    let c2V = c2.value;
//     span.textContent = c2V;
    variables.style.setProperty('--bg', c2V);
}, false);

c3.addEventListener("input", function() {
    let c3V = c3.value;
//     span.textContent = c3V;
    variables.style.setProperty('--sub-bg', c3V);
}, false);


// const result = () => {}
