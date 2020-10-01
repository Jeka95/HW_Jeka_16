
//Годинник
function currentTime() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let milisec = date.getMilliseconds();


  document.querySelector('.year').innerText = day + "." + month + "." + year;
  document.querySelector('.clock').innerText = hour + " : " + min + " : " + sec;
}
let t = setInterval(function () { currentTime() }, 1000);
currentTime();


//Секудномір
let start = document.querySelector('.start');
let loop = document.querySelector('.loop');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');
let stopwtch = document.querySelector('.stopwatch_1');
let result = document.querySelector('.result');


start.addEventListener('click', Start);


let time = 0;
function Start() {
  start.setAttribute("disabled", "disabled")
  loop.addEventListener('click', Loop);
  reset.addEventListener('click', Reset);
  stop.addEventListener('click', Stop);
  let offset = Date.now();
  interval = setInterval(function update() {
    let now = Date.now();
    deltatime = now - offset;
    offset = now;
    time = time + deltatime;

    stopwtch.innerHTML = timeFormatter(time);
    ;
  }, 10);
}

function timeFormatter(time) {
  time = new Date(time);
  let hours = time.getUTCHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();
  let milliseconds = time.getMilliseconds().toString();
  if (hours.length < 2) {
    hours = '0' + hours;
  }
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  while (milliseconds.length < 3) {
    milliseconds = '0' + milliseconds;
  }

  return hours + ' : ' + minutes + ' : ' + seconds + ' : ' + milliseconds;
}
function Stop() {
  time = parseInt(time);
  clearInterval(interval);
  start.removeAttribute("disabled");
}
function Reset() {
  stopwtch.innerHTML = '00 : 00 : 00 : 000';
  time = 0;
  result.innerHTML = " ";
  start.removeAttribute("disabled");
}
function Loop() {
  let liresul = document.createElement('li');
  liresul.innerHTML = stopwtch.innerHTML;
  result.appendChild(liresul);

  console.log('loop');
}

//Таймер

let starttimer = document.querySelector('.StartTimer');
let stoptimer = document.querySelector('.StopTimer');
let resettimer = document.querySelector('.ResetTimer');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let timestart = document.querySelector('.timestart');
let resulttimer = document.querySelector('.timer_timer');
console.log(timestart.innerHTML);

starttimer.addEventListener('click', timerStart);
stoptimer.addEventListener('click', Stoptimer);
resettimer.addEventListener('click', Resettimer);

let timetimer = parseInt(timestart.innerHTML);

function plustime() {
  timestart.innerHTML = parseInt(timestart.innerHTML) + 1;
  timetimer = parseInt(timestart.innerHTML);
  return timestart;
}

function minustime() {
  timestart.innerHTML = parseInt(timestart.innerHTML) - 1;
  timetimer = parseInt(timestart.innerHTML);
  return timestart;
}

plus.addEventListener("click", plustime);
minus.addEventListener("click", minustime);





function timerStart() {
  starttimer.setAttribute("disabled", "disabled");
  stoptimer.removeAttribute("disabled");
  let offset = Date.now();
  timetimer = timetimer * 60 * 1000;

  timerinterval = setInterval(function timerupdate() {
    let now = Date.now();
    deltatime = now - offset;
    offset = now;
    timetimer = timetimer - deltatime;
    resulttimer.innerHTML = timeFormattertimer(timetimer);
  }, 500);
};




function timeFormattertimer(time) {
  time = new Date(time);
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }



  return minutes + ' : ' + seconds;
};
function Stoptimer() {
  timetimer = parseInt(timetimer) / 60000;

  clearInterval(timerinterval);
  starttimer.removeAttribute("disabled");
  stoptimer.setAttribute("disabled", "disabled");

}
function Resettimer() {
  resulttimer.innerHTML = '00:00';
  clearInterval(timerinterval);
  timetimer = parseInt(timestart.innerHTML);

  stoptimer.setAttribute("disabled", "disabled");
  starttimer.removeAttribute("disabled");


}