$( document ).ready(function() {
    timer.set();
});

let timer = {
  breakTime: false,
  isRunning: false,
  interval: null,
  set: function(){
    const inputSessionAmount = $('#input-session-amount')
    const inputBreakAmount = $('#input-break-amount')
    const timerMins = $('#minutes');
    const timerSecs = $('#seconds');

    if(timer.breakTime){
      timerMins.text(inputBreakAmount.val());
      timerSecs.text('00')
    } else {
      timerMins.text(inputSessionAmount.val());
      timerSecs.text('00');
    }
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
        //stop current timer
        clearInterval(timer.interval);
        //switch breakTime value
        timer.breakTime = !(timer.breakTime);
        //Reset timer with break/session amount
        timer.set();
        //re start timer
        timer.start();
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