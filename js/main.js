$( document ).ready(function() {
    console.log( "ready!" );
    setTimer();
});

function setTimer(){
  const inputAmount = $('#input-session-amount')
  const timerMins = $('#minutes');

  timerMins.text(inputAmount.val());
}

function increase(type){
  const breakInput = $('#input-break-amount');
  const sessionInput = $('#input-session-amount');

  if(type == 'break'){
    let breakVal = breakInput.val();
    breakInput.val(parseInt(breakVal) + 1);

  } else if (type == 'session'){
    let sessionVal = sessionInput.val();
    sessionInput.val(parseInt(sessionVal) + 1);
  }

  setTimer();
}

function decrease(type){
  const breakInput = $('#input-break-amount');
  const sessionInput = $('#input-session-amount');

  if(type == 'break'){
    let breakVal = breakInput.val();
    breakInput.val(parseInt(breakVal) - 1);

  } else if (type == 'session'){
    let sessionVal = sessionInput.val();
    sessionInput.val(parseInt(sessionVal) - 1);
  }

  setTimer();
}