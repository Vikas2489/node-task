const moment = require("moment");

import _ from "lodash"

let momentt = moment();

console.log(momentt.format('MMMM Do YYYY, h:mm:ss a'));
console.log(momentt.format('dddd'));
console.log(momentt.format("MMM Do YY"));
console.log(momentt.isValid("2020 - 01 - 01"));
console.log(momentt.isValid("2020 - 14 - 01"));
console.log(momentt.add(7, "d"));
console.log(momentt.add(7, "M"));
console.log(momentt.add(7, "y"));
console.log(momentt.subtract(7, "d"));
console.log(momentt.subtract(7, "M"));
console.log(momentt.subtract(7, "y"));

let a = moment([2014, 11, 11]);
let b = moment([2015, 9, 11]);
console.log(a.diff(b));

let c = moment([2014, 11, 27]);
let d = moment([2015, 9, 16]);
console.log(c.diff(d));


console.log(moment('2020-01-01').isAfter('2018-01-01'));
console.log(moment('2010-01-01').isAfter('2018-01-01'));

console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());

console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
console.log(_.compact([0, 1, false, 2, '', 3]));

var array = [1];
var other = _.concat(array, 2, [3], [
    [4]
]);

console.log(other);
console.log(_.difference([2, 1], [2, 3]));
console.log(_.indexOf([1, 2, 1, 2], 2));


console.log(_.countBy(['one', 'two', 'three'], 'length'));
console.log(_.findLast([1, 2, 3, 4], function(n) {
    return n % 2 == 1;
}));
console.log(_.includes([1, 2, 3], 1));

function square(n) {
    return n * n;
}

console.log(_.map([4, 8], square));
console.log(_.some([null, 0, 'yes', false], Boolean));