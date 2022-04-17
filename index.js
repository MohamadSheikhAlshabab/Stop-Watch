// ? Define variables :
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timeRef = document.querySelector(".timerDisplay");
let int ,int2= null;

// ? Define Constructor Object:
function Stopwatch (){

    this.startTimer = function () {
      if (int !== null) { 
        clearInterval(int)
      };
      int = setInterval(timer, 10); 
      int2 = setInterval(changer, 10000);     
    };

    this.stopTimer = function () {
      clearInterval(int);
    };

    this.restTimer = function () {
      clearInterval(int);
      [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
      timeRef.innerHTML = '00 : 00 : 00 : 000';
    };

   let timer=function displayTimer(){
    milliseconds+=10;
  
    if(milliseconds == 1000) {

      milliseconds = 0;
      seconds++;
      
      if(seconds == 60) {
        seconds = 0;
        minutes++;
        
        
        if(minutes == 60){

          minutes = 0;
          hours++;
        }
      }
    }
      
        

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
   
    timeRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
  }
};

let SW= new Stopwatch();
document.getElementById("startTimer").addEventListener("click",SW.startTimer);
document.getElementById("stopTimer").addEventListener("click",SW.stopTimer);
document.getElementById("restTimer").addEventListener("click",SW.restTimer);
document.getElementById("startTimer").addEventListener("click",changer);

function changer(){
  let [r1,r2,r3]= [getRandomIntInclusive(0,255),getRandomIntInclusive(0,255),getRandomIntInclusive(0,255)];
  document.body.style.backgroundColor = `rgb(${r1},${r2},${r3})`;

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}