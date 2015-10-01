var button = document.querySelector('.button');
var h4 = document.querySelector('h4');

var clicks = Rx.Observable.fromEvent(button, 'click');
var doubleClicks = clicks
    .buffer(() => clicks.throttle(250)) // buffer the events, for each event debounce 250ms and group together
    .map(arr => arr.length) // for each group, count the lengh of event
    .filter(x => x ===2); // only pick length === 2 which means double click


var res = doubleClicks.subscribe( () => {
    h4.textContent = "double click"
});

doubleClicks.throttle(1000).subscribe(() => {
    h4.textContent = "-";
});
