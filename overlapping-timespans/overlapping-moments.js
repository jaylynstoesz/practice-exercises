var moment = require('./moment.js')

var timespans = {
	christmas: {
		start: moment("2015-12-25"),
		end: moment("2015-12-26")
	},
	halloween: {
		start: moment("2015-10-31"),
		end: moment("2015-11-1")
	},
	thisMillenium: {
		start: moment("2000-01-01"),
		end: moment("3000-01-01")
	},
	event1: {
		start: moment("2015-03-20"),
		end: moment("2015-03-21")
	},
	event2: {
		start: moment("2015-03-21"),
		end: moment("2015-03-22")
	},
	event3: {
		start: moment("2015-03-19"),
		end: moment("2015-03-20")
	},
	event4: {
		start: moment("2015-03-19"),
		end: moment("2015-03-22")
	}
};

function isOverlapped (timespanA, timespanB) {
  console.log(timespanA);
  console.log(timespanB);
  // return !(timespanA.end <= timespanB.start && timespanA.start <= timespanB.end) && !(timespanA.start >= timespanB.end && timespanA.end >= timespanB.start)
}

// console.log(isOverlapped(timespans.christmas, timespans.thisMillenium)); //true
//
// console.log(isOverlapped(timespans.christmas, timespans.halloween)); //false
//
// console.log(isOverlapped(timespans.event1, timespans.event1)); //true
//
// console.log(isOverlapped(timespans.event1, timespans.event2)); //false
//
// console.log(isOverlapped(timespans.event1, timespans.event3)); //false
//
// console.log(isOverlapped(timespans.event1, timespans.event4)); //true
//
// console.log(isOverlapped(timespans.event4, timespans.event1)); //true
