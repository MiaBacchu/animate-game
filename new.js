let pos = 125;
let point = 0;
let second = 50;
let virus1pos = 0;
let virus2pos = 0;
let virus3pos = 0;
let rightStop = null;
let leftStop = null;
let virusStop = null;
let virus1Stop = null;
let virus2Stop = null;
let virus3Stop = null;
let virus1CallStop = null;
let virus2CallStop = null;
let virus3CallStop = null;
let collision  = null;
let timeStart  = null;

// move the ball right
let pointP = document.getElementById('point');
let time = document.getElementById('time');
function moveRight() {
    const elem = document.getElementById("animate");
    clearInterval(rightStop);
    clearInterval(leftStop);
    rightStop = setInterval(increase, 5);
    function increase() {
      if (pos == 250) {
        clearInterval(rightStop);
      } else {
        pos++;
        elem.style.left = pos + "px";
      }
    }
  }

// move the ball left
function moveLeft() {
    const elem = document.getElementById("animate");
    clearInterval(rightStop);
    clearInterval(leftStop);
    leftStop = setInterval(increase, 5);
    function increase() {
      if (pos == 0) {
        clearInterval(leftStop);
      } else {
        pos--;
        elem.style.left = pos + "px";
      }
    }
  }
  // start the virus
  function virusStart(){
    timeStart = setInterval(function(){
      second = second-1;
    },1000);
    virus1CallStop = setInterval(virus1,2500);
    virus2();
    virus2CallStop = setInterval(virus2,4000);
    virus3CallStop = setInterval(virus3,3500);
    // check the collision
     collision = setInterval(checkCollison,100);

     const timeOver = setTimeout(() => {
      const container  = document.getElementById('container');
      container.innerHTML=`Time Over.
      Your Score: ${point}; Please Reload For Play Again`;
      container.style.fontSize='20px'
      stopVirus();
      clearTimeout(timeOver);
     }, 50000);
  }
  // stop the virus
  function stopVirus (){
    clearInterval(virus1CallStop);
    clearInterval(virus2CallStop);
    clearInterval(virus3CallStop);
    clearInterval(collision);
    clearInterval(timeStart);
  }
// virus 1
  function virus1(){
    virus1pos = 0;
    const elem = document.getElementById("virus1");
    elem.style.display='block';
    clearInterval(virus1Stop);
    virus1Stop = setInterval(increase, 5);
    function increase() {
      if (virus1pos == 500) {
        elem.style.display='none';
        clearInterval(virus1Stop);
      } else {
        virus1pos++;
        elem.style.top = virus1pos + "px";
      }
    }
  }
// virus 2
  function virus2(){
      virus2pos = 0;
      const elem = document.getElementById("virus2");
      elem.style.display='block';
      clearInterval(virus2Stop);
      virus2Stop = setInterval(increase, 5);
      function increase() {
        if (virus2pos == 500) {
          elem.style.display='none';
          clearInterval(virus2Stop);
        } else {
          virus2pos++;
          elem.style.top = virus2pos + "px";
        }
      }
    }
// virus 3
function virus3(){
  virus3pos = 0;
  const elem = document.getElementById("virus3");
  elem.style.display='block';
  clearInterval(virus3Stop);
  virus3Stop = setInterval(increase, 5);
  function increase() {
    if (virus3pos == 500) {
      elem.style.display='none';
      clearInterval(virus3Stop);
    } else {
      virus3pos++;
      elem.style.top = virus3pos + "px";
    }
  }
}

//check collision func
function checkCollison(){
  time.innerHTML=second;
  let sum1 = pos+virus1pos;
  let sum2 = pos+virus2pos;
  let sum3 = pos+virus3pos;
  if (sum1>=390 && sum1<=430 && pos<=20) {
    point += 5;
    pointP.innerHTML = `Your Score: ${point}`;
  }
  else if (sum2>=490 && sum2<=530 && pos>=90 && pos<=160) {
    point += 5;
    pointP.innerHTML = `Your Score: ${point}`;
  }
  else if (sum3>=620 && sum3<=650 && pos>=230) {
    point += 5;
    pointP.innerHTML = `Your Score: ${point}`;
  }
}
