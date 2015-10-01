/**
 * Created by Answer1215 on 10/1/2015.
 */

console.clear();
//Serquence way
var src = ['1', '1', 'foo', '2', '5', '1', 'bar', '5', '2'];
var res = src.map((x) => parseInt(x))
    .filter(x => !isNaN(x))
    .reduce((preVal, crtVal) => preVal + crtVal);

console.log("Serquence: " + res);

//Reactive way
const Observable = Rx.Observable;
let source = Observable.interval(400).take(9)
    .map(i => ['1', '1', 'foo', '2', '5', '1', 'bar', '5', '2'][i]);
let result = source
    .map(x => {
        return parseInt(x)
    })
    .filter(x => !isNaN(x))
    .scan((preVal, crtVal) => {
        return preVal + crtVal
    });

console.log("Reactive: ");
var res2 = result.subscribe((x) => {
    console.log(x);
});