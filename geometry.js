// triangle 

document.getElementById('triangle-btn').addEventListener('click', function(){
  const triangleBase = document.getElementById('triangle-base');
  const triangleBaseText = triangleBase.value;
  const triangleBaseTextinNumber = parseFloat(triangleBaseText);

  const triangleHeight = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeight.value;
  const triangleHeightTextInfloat = parseFloat(triangleHeightText)

  const triangleArea = (triangleBaseTextinNumber * triangleHeightTextInfloat)/2;
  const triangleAreaAreaInTwoDecimal = triangleArea.toFixed(2)

  const ol = document.getElementById("calculation-area");
  const li = document.createElement("li");
  li.innerText = "triangle" + " " + triangleAreaAreaInTwoDecimal;
  ol.appendChild(li)
})

//rectangle
document.getElementById('rectangle-btn').addEventListener('click', function(){
  const rectangleWidth = document.getElementById('rectangle-width');
  const rectangleWidthText = rectangleWidth.value;
  const rectangleWidthTextInNumber = parseFloat(rectangleWidthText)

const rectangleLength = document.getElementById('rectangle-length');
const rectangleLengthText  = rectangleLength.value;
const rectangleLengthTextInNumber =  parseFloat(rectangleLengthText);


const rectangleArea = (rectangleWidthTextInNumber * rectangleLengthTextInNumber);
const rectangleAreaInTwoDeciaml = rectangleArea.toFixed(2);

const ol = document.getElementById("calculation-area");
  const li = document.createElement("li");
  li.innerText = "Rectangle Area " + " " + rectangleAreaInTwoDeciaml;
  ol.appendChild(li)
})