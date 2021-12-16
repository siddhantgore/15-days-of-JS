//Write a function which can convert the time input given in 12 hours format to 24 hours format

const time = '5:00AM';

function convertTo24HrsFormat(time) {

    let [hours,minute]=time.split(":");
	  if(hours.length<2){
    hours="0"+hours;
    }
    minute= (minute.length>3?minute.substring(0,2):minute.substring(0,1));
    if(minute.length<2){
    minute="0"+minute;
    }
    if(hours==="12"){
        hours="00"
    }

    if(time.endsWith("PM")){
         hours = parseInt(hours, 10) + 12;
    }
    
    return `${hours}:${minute}`;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)