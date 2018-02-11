$( document ).ready(function() {
    timer.set();
});

let isPaused = false;

let timer = {
  isRunning: false,
  interval: null,
  set: function(){
    const inputAmount = $('#input-session-amount')
    const timerMins = $('#minutes');

    timerMins.text(inputAmount.val());
  },
  start: function(){
    let mins = $('#minutes');
    let secs = $('#seconds');
    let minsVal = parseInt(mins.text());
    let secsVal = parseInt(secs.text());
    let total = (minsVal * 60) + secsVal;

    timer.isRunning = true;
    
    timer.interval = setInterval(function(){
      if(total == 0){
        clearInterval(interval);
      } else {
        total -= 1;
        mins.text(Math.floor(total/60));
        if(total%60 < 10){
          secs.text("0" + total%60);
        }else{
          secs.text(total%60);
        }
      }
    }, 1000);
  },
  pause: function(){
    timer.isRunning = false;

    clearInterval(timer.interval);
  }
}

/*
function setTimer(){
  const inputAmount = $('#input-session-amount')
  const timerMins = $('#minutes');

  timerMins.text(inputAmount.val());
}

function timer(){
  let mins = $('#minutes');
  let secs = $('#seconds');
  let minsVal = parseInt(mins.text());
  let secsVal = parseInt(secs.text());
  let total = (minsVal * 60) + secsVal;

  total -= 1;
  mins.text(Math.floor(total/60));
  if(total%60 < 10){
    secs.text("0" + total%60);
  }else{
    secs.text(total%60);
  }
}

function startTimer(){
  /*
  let mins = $('#minutes');
  let secs = $('#seconds');
  let minsVal = parseInt(mins.text());
  let secsVal = parseInt(secs.text());
  let total = (minsVal * 60) + secsVal;

  setInterval(timer, 1000);

  let countdown = setInterval(function(){
    console.log(total);
    if(total == 0 || isPaused){
      isPaused = false;
      clearInterval(countdown);

    } else {
      total -= 1;
      mins.text(Math.floor(total/60));
      if(total%60 < 10){
        secs.text("0" + total%60);
      }else{
        secs.text(total%60);
      }
    }
  }, 1000);

}*/

/*
function pauseTimer(){
  console.log('pause pressed');
  clearInterval(timer, 1000);
}
*/

function increase(type){
  //check to see if timer is running first
  if(!(timer.isRunning)){

    const breakInput = $('#input-break-amount');
    const sessionInput = $('#input-session-amount');

    //see if decrease is for break time or session time
    if(type == 'break'){
      let breakVal = breakInput.val();
      breakInput.val(parseInt(breakVal) + 1);
    } else if (type == 'session'){
      let sessionVal = sessionInput.val();
      sessionInput.val(parseInt(sessionVal) + 1);
    }

    //update timer on screen
    timer.set();
  }
}

function decrease(type){
  //check to see if timer is running first
  if(!(timer.isRunning)){
    const breakInput = $('#input-break-amount');
    const sessionInput = $('#input-session-amount');

    //see if decrease is for break time or session time
    if(type == 'break'){
      let breakVal = breakInput.val();
      breakInput.val(parseInt(breakVal) - 1);
    } else if (type == 'session'){
      let sessionVal = sessionInput.val();
      sessionInput.val(parseInt(sessionVal) - 1);
    }

    //update timer on screen
    timer.set();
  }
}