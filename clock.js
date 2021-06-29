// console.log("Clock");

// Grab the places where we have to display time and date
let timeDisplay = document.getElementById('timeDisplay');
let dateDisplay = document.getElementById('dateDisplay');

// Function for time
function updateTime(){
    let today = new Date();
    let todayHour = today.getHours();
    let todayMin = today.getMinutes();
    let todaySec = today.getSeconds();
    
    // if hours are less than or equal to 12 set it AM otherwise PM
    let timeOfDay = (todayHour<=12) ? "AM" : "PM";
    
    // to convert 24 hours clock format to 12 hours clock format
    todayHour = (todayHour>12) ? todayHour - 12 : todayHour;
    todayHour = (todayHour==0) ? 12 : todayHour;
    
    // pad 0 if sec, min, hour is less than 10 like if it is 1 then convert it to 01
    todayHour = (todayHour<10 ? "0" : "") + todayHour;
    todayMin = (todayMin<10 ? "0" : "") + todayMin;
    todaySec = (todaySec<10 ? "0" : "") + todaySec;

    // display the time on screen
    timeDisplay.innerText = `${todayHour}:${todayMin}:${todaySec} ${timeOfDay}`;

}

// call updateTime function after every 1 second
setInterval(() => {
    updateTime();
}, 1000);

// Function for date
function updateDate(){
    let currentD = new Date();
    let currentDate = currentD.getDate();

    // let currentMonth = currentD.getMonth() + 1;
    let currentMonth = currentD.toLocaleString('default', { month: 'long' })   // will give full month name

    let currentYear = currentD.getFullYear();

    // let currentDay = currentD.getDay() + 1;
    let currentDay = currentD.toLocaleString("default", { weekday: "long" })   // will give weekdays name

    // Display date on screen
    let currentDstr = currentDay + " " + currentDate + "-" + currentMonth + "-" + currentYear;

    dateDisplay.innerHTML = currentDstr;

}

// call updateDate function
updateDate();