function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {

  var messageResult = document.querySelector("#message");
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);

  const nimc = Number(imc);

  if(nimc < 16){
    messageResult.textContent = "Inválido";
  } 

  if(nimc >= 16 && nimc < 17){
    messageResult.textContent = "Muito abaixo do peso";
  } 
  
  if(nimc >= 17 && nimc < 18.5){
    messageResult.textContent = "Abaixo do peso";
  }
  
  if(nimc >= 18.5 && nimc < 25){
    messageResult.textContent = "Peso normal";
  }
  
  if(nimc >= 25 && nimc < 30){
    messageResult.textContent = "Acima do peso";
  }
  
  if(nimc >= 30 && nimc < 35){
    messageResult.textContent = "Obesidade grau I";
  }
  
  if(nimc >= 35 && nimc <= 40){
    messageResult.textContent = "Obesidade grau II";
  }
  
  if(nimc > 40){
    messageResult.textContent = "Obesidade grau III";
  }

  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
}

start();
