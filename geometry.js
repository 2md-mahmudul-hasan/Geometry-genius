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
  li.innerText = "Triangle Area" + " " + triangleAreaAreaInTwoDecimal;
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

//parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function(){
  const parallelogramBase = document.getElementById('parallelgram-base');
  const parallelgramBaseText = parallelogramBase.value;
  const parallelgramBaseTextInNumber = parseFloat(parallelgramBaseText)

  const parallelgramHeignt = document.getElementById('parallelgram-height');
  const parallelgramHeigntText = parallelgramHeignt.value;
  const parallelgramHeigntTextInNumber =parseFloat(parallelgramHeigntText);

  const parallelgramArea = (parallelgramBaseTextInNumber * parallelgramHeigntTextInNumber).toFixed(2);

  const ol = document.getElementById("calculation-area");
  const li = document.createElement("li");
  li.innerText = "Parallelgram Area" + " " + parallelgramArea;
  ol.appendChild(li)
})

//Pentagon
document.getElementById('pentagon-btn').addEventListener('click', function(){
  const pentagonperimeter = document.getElementById('pentagon-perimeter');
  const pentagonperimeterText = pentagonperimeter.value;
  const pentagonperimeterInNumber = parseFloat(pentagonperimeterText)

  const pentagonApothem = document.getElementById('pentagon-perimeter');
  const pentagonApothemText = pentagonApothem.value;
  const pentagonApothemInNumber = parseFloat(pentagonApothemText)

  const pentagonArea = .5*(pentagonperimeterInNumber * pentagonApothemInNumber).toFixed(2);

  const ol = document.getElementById("calculation-area");
  const li = document.createElement("li");
  li.innerText = "Pentagon Area" + " " + pentagonArea;
  ol.appendChild(li)
})


//Rhombus
document.getElementById('rhombus-btn').addEventListener('click', function(){
  const rhombusD1 = document.getElementById('rhombus-d1');
  const rhombusD1Text = rhombusD1.value;
  const rhombusD1InNumber = parseFloat(rhombusD1Text)

  const rhombusD2 = document.getElementById('rhombus-d1');
  const rhombusD2Text = rhombusD2.value;
  const rhombusD2InNumber = parseFloat(rhombusD2Text)

  const rhombusAArea = .5*(rhombusD1InNumber * rhombusD2InNumber).toFixed(2);

  const ol = document.getElementById("calculation-area");
  const li = document.createElement("li");
  li.innerText = "Rhombus Area" + " " + rhombusAArea;
  ol.appendChild(li)
})