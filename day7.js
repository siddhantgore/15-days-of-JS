//Write a function which accepts two valid dates and returns the difference between them as number of days

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
    date1 = new Date(dateText1);  
    date2 = new Date(dateText2);
   var time_difference = date2.getTime() - date1.getTime();  
    
   var days_difference = time_difference / DAY_IN_MILLISECONDS;  
   return days_difference
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)

