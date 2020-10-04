import { RRule, RRuleSet, rrulestr } from 'rrule'

const termStart = new Date(2020,6,1)
const termEnd = new Date(2020,11,31)

export const scheduleMapper = (courseSchedules) => {
    const events = [] 
    courseSchedules.forEach(course => {
        Array.prototype.push.apply(events, parseIndividualCourse(course));
      });
    return events;
}

const parseIndividualCourse = (course) => {
    const events = [] 
    // var startTimes = course.schedules.map( schedule => getRecurringDates(schedule.day, schedule.startTime) )
    // var endTimes = course.schedules.map( schedule => getRecurringDates(schedule.day, schedule.endTime) )

    const startTimes = [] 
    course.schedules.forEach(schedule => {
        Array.prototype.push.apply(startTimes, getRecurringDates(schedule.day, schedule.startTime));
      });

    const endTimes = [] 
    course.schedules.forEach(schedule => {
        Array.prototype.push.apply(endTimes, getRecurringDates(schedule.day, schedule.endTime));
    });
      
    const courseName = course.name;
    var arrayLength = startTimes.length;
    for (var index = 0; index < arrayLength; index++) {
        events.push(createEvent(courseName, startTimes[index], endTimes[index]))
    }

    return events;
}

const createEvent = (courseName, startTime, endTime) => {
    return  {
        'title': courseName,
        'allDay': false,
        'start': new Date(startTime),
        'end': new Date(endTime)
      }
}

const getRecurringDates = (dayOfWeek, timeOfDay) => {
    var termStartTime = termStart
    var time = timeOfDay.split(':')
    termStartTime.setHours(time[0])
    termStartTime.setMinutes(time[1])
    const rule = new RRule({
        freq: RRule.WEEKLY,
        byweekday: [translateDayOfWeekToRrule(dayOfWeek)],
        dtstart: termStartTime,
        until: termEnd
      })

    return rule.all();  
}

const translateDayOfWeekToRrule = (dayOfWeek) => {
    switch(dayOfWeek) {
        case 'MONDAY':
            return RRule.MO;
        case 'TUESDAY':
            return RRule.TU;    
        case 'WEDNSDAY':
            return RRule.WE;
        case 'THURSDAY':
            return RRule.TH;
        case 'FRIDAY':
            return RRule.FR;    
        case 'SATURDAY':
            return RRule.SA;
        case 'SUNDAY':
            return RRule.SU;
        default:
            return RRule.MO;
    }
}