
let totalTipMainScope = 0;
let totalTipPerPerson = 0;
let selectTip = 0;

function calculateMainScope(){
  if(Number(billInput.value) > 0 && selectTip > 0 && Number(peopleInput.value) > 0){
    totalTipMainScope = (Number(billInput.value) * (selectTip / 100)); 
    totalTipPerPerson = totalTipMainScope / Number(peopleInput.value);
    tipTotal.innerText = `$${totalTipMainScope.toFixed(2)}`;
    tipPerPerson.innerText = `$${totalTipPerPerson.toFixed(2)}`;
  }
}

function colorBtn(){
  if(billInput.value !== ''){
    resetBtn.style.backgroundColor = '#26C2AE';
  } else {
    resetBtn.style.backgroundColor = '#0D686D';
  }
}

function cantBeZero(){
  if(Number(peopleInput.value) < 1 && peopleInput.value !== ''){
    peopleInput.style.outlineColor = '#E17457';
    cantBeZeroText.style.display = 'block';
  } else {
    peopleInput.style.outlineColor = '#26C2AE';
    cantBeZeroText.style.display = 'none';
  }
}

const tipButtons = document.querySelectorAll('.tip-button');

function resetButtonStyles() {
  tipButtons.forEach(button => {
    button.style.backgroundColor = '#00474B';
    button.style.color = '#FFFFFF';
    // custom.value = '';
  });
}

function selectButton(event) {
  resetButtonStyles();
  const clickedButton = event.currentTarget;
  clickedButton.style.backgroundColor ='#26C2AE';
  clickedButton.style.color ='#00474B';
  custom.value = '';
}

function calculateCustom(){
  resetButtonStyles();
  let totalTip = Number(billInput.value) * (Number(custom.value) / 100);
  let tip = Number(totalTip) / Number(peopleInput.value);
  tipTotal.innerText = `$${totalTip.toFixed(2)}`;
  tipPerPerson.innerText = `$${tip.toFixed(2)}`;
  
}

function resetValues(){
  resetButtonStyles();
  tipTotal.innerText = '$0.00';
  tipPerPerson.innerText = '$0.00';
  billInput.value = '';
  peopleInput.value = '';
  cantBeZeroText.style.display = 'none';
}

billInput.addEventListener('input', colorBtn);
peopleInput.addEventListener('input', cantBeZero);
billInput.addEventListener('input', calculateMainScope);
peopleInput.addEventListener('input', calculateMainScope);
tipButtons.forEach( tipButtonsValue => {
  tipButtonsValue.addEventListener('click',  (event) => {
    const tipSpan = tipButtonsValue.querySelector('span');
    const tipValue = tipSpan ? tipSpan.innerText.trim() : null;
    selectTip = Number(tipValue);
    calculateMainScope();
  });
});
tipButtons.forEach(button => {
  button.addEventListener('click', selectButton);
});
custom.addEventListener('input', calculateCustom);
resetBtn.addEventListener('click', resetValues);