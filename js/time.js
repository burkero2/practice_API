let today = new Date();
let time = today.getHours() + ':' + today.getMinutes();
console.log(time);

let meridian= today.getHours();
let currentMonth= new Date().getMonth().toLocaleString();
let currentDay= new Date().getDay().toLocaleString();
console.log("here", showDay(currentMonth));
let currentTime= time;



let result = `<h1>${showDay(currentDay)}</h1>`;
result += `<h3>${showMonth(currentMonth)} ${currentDay}, ${currentTime}</h3>`;



document.getElementById("timeContent").innerHTML = result;

function showDay(n) {
    console.log("Show Day");
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // console.log(day[n]);
    return day[n];
}

function showMonth(n){
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return month[n];
}
