'use strict';

var button = document.querySelector('.button');
var h4 = document.querySelector('h4');

var clicks = Rx.Observable.fromEvent(button, 'click');
var doubleClicks = clicks.buffer(function () {
    return clicks.throttle(250);
}) // buffer the events, for each event debounce 250ms and group together
.map(function (arr) {
    return arr.length;
}) // for each group, count the lengh of event
.filter(function (x) {
    return x === 2;
}); // only pick length === 2 which means double click

var res = doubleClicks.subscribe(function () {
    h4.textContent = "double click";
});

doubleClicks.throttle(1000).subscribe(function () {
    h4.textContent = "-";
});

//# sourceMappingURL=app-compiled.js.map