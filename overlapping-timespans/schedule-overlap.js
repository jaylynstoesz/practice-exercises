var timespans = {
	christmas: {
		start: new Date("December 25, 2015"),
		end: new Date("December 26, 2015")
	},
	halloween: {
		start: new Date("October 31, 2015"),
		end: new Date("November 01, 2015")
	},
	event1: {
		start: new Date("December 20, 2015"),
		end: new Date("December 28, 2015")
	},
	event2: {
		start: new Date("March 21, 2015"),
		end: new Date("March 22, 2015")
	},
	event3: {
		start: new Date("March 19, 2015"),
		end: new Date("March 21, 2015")
	},
	event4: {
		start: new Date("October 10, 2015"),
		end: new Date("November 01, 2015")
	}
};

var firstSchedule = [timespans.christmas, timespans.halloween]
var secondSchedule = [timespans.event1, timespans.event2, timespans.event3, timespans.event4]

function isOverlapped (timespanA, timespanB) {
  return !(timespanA.end <= timespanB.start && timespanA.start <= timespanB.end) && !(timespanA.start >= timespanB.end && timespanA.end >= timespanB.start)
}

function scheduleOverlap(scheduleA, scheduleB) {
  var overlapping = []
  for (var i = 0; i < scheduleA.length; i++) {
    for (var j = 0; j < scheduleB.length; j++) {
      if (isOverlapped(scheduleA[i], scheduleB[j])) {
        var pair = {}
        pair.this_event = scheduleA[i]
        pair.overlaps_with = scheduleB[j]
        overlapping.push(pair)
      }
    }
  }
  return overlapping
}

console.log(scheduleOverlap(firstSchedule, secondSchedule))
