const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const time = document.querySelectorAll('.time')
const endTime = document.querySelector('.endtime')

let tDate = new Date()
let endDate = new Date(tDate.getFullYear(), tDate.getMonth(), tDate.getDate() + 10, 11, 30, 0, 0);
endTime.innerHTML = `Giveaway Ends On ${weekdays[endDate.getDay()]}, ${endDate.getDate()} ${months[endDate.getMonth()]} ${endDate.getFullYear()} ${endDate.getHours()}:${endDate.getMinutes()}am`

let msInType = [0, 0, 0, 0] // [day,hour,min,sec]
msInType[3] = 1000
msInType[2] = msInType[3] * 60
msInType[1] = msInType[2] * 60
msInType[0] = msInType[1] * 24

function updateTimer() {
  const timeNow = new Date()
  // givewayEnd result are represented in miliseconds
  givewayEnd = endDate.getTime() - timeNow.getTime()

  if (givewayEnd < 0) {
    clearInterval(intervalId)
    return
  }

  let endValues = [0, 0, 0, 0] // [day,hour,min,sec]

  // Get how many d/h/m/s have until the givewayEnd
  for (let i=0; i < endValues.length; i++) {
    endValues[i] = Math.floor(givewayEnd/msInType[i])
    givewayEnd %= msInType[i]
  }

  let i = 0
  // loop thought all the .time classes
  time.forEach(element => {
    //format the numbers
    if (endValues[i] < 10)
      endValues[i] = `0${endValues[i]}`
    
    element.innerHTML = endValues[i]
    i++
  });

}

// call the function every 1s
var intervalId = window.setInterval(function(){
  updateTimer()
}, 1000);
// to stop use -> clearInterval(intervalId) 