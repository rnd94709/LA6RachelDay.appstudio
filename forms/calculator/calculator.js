/*
algorithm: 
get the first and second number from the user as input
if the user clicks the add button, then sum the two numbers and output the answer
if the user clicks the multiply button, then multiply the two numbers and output the answer
*/ 


btnAdd.onclick=function(){
  user = inptUsers.value
  let firstNumber = parseInt(inptNum1.value)
  let secondNumber = parseInt(inptNum2.value)
  let added = firstNumber + secondNumber
  lblAnswer.value = (user + ", the sum of the answers is " + added)
}


btnMultiply.onclick=function(){
  user = inptUsers.value
  let firstNumber = parseInt(inptNum1.value)
  let secondNumber = parseInt(inptNum2.value)
  let multiplied = firstNumber * secondNumber
  lblAnswer.value = (user + ", the product of the answers is " + multiplied)
}

btnClear.onclick=function(){
  firstNumber.value = ""
  secondNumber.value = ""
  lblAnswer.value = ""

}


/*
Do we need to clear the output/how would we do that?
*/ 


