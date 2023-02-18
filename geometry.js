
document.getElementById('triangle-btn').addEventListener('click', function(){
  const triangleBase = document.getElementById('triangle-base');
  const triangleBaseText = triangleBase.value;
  const triangleBaseTextinNumber = parseFloat(triangleBaseText);
  // const triangleBaseInTwoDecimal = triangleBaseTextinNumber.toFixed(2);


  const triangleHeight = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeight.value;
  const triangleHeightTextInfloat = parseFloat(triangleHeightText)
  // const triangleHeightInTwoDecimal = triangleHeightTextInfloat.toFixed(2)


  const triangleArea = (triangleBaseTextinNumber * triangleHeightTextInfloat)/2;
  const triangleAreaAreaInTwoDecimal = triangleArea.toFixed(2)


  console.log(triangleAreaAreaInTwoDecimal)
})