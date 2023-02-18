// triangle 
document.getElementById('triangle-btn').addEventListener('click', function(){
  const triangleBase = document.getElementById('triangle-base');
  const triangleBaseText = triangleBase.value;
  const triangleBaseTextinNumber = parseFloat(triangleBaseText);

  const triangleHeight = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeight.value;
  const triangleHeightTextInfloat = parseFloat(triangleHeightText)

   if(isNaN(triangleBaseTextinNumber) || isNaN(triangleHeightTextInfloat)){
    alert('please input number value');
    return;
    }
    if(triangleBaseTextinNumber <=0 ||triangleHeightTextInfloat <=0 ){
    alert('Please enter positive value');
     return;
   }
   
  const triangleArea = (triangleBaseTextinNumber * triangleHeightTextInfloat)/2;
  const triangleAreaAreaInTwoDecimal = triangleArea.toFixed(2)

  const ol = document.getElementById("calculation-area");
  const li = document.createElement("li");
  const btn = document.createElement('button');
  btn.classList.add("cal-btn");
  btn.innerText = "convert to m2"
  li.innerText = "Triangle" + " " + triangleAreaAreaInTwoDecimal ;
  ol.appendChild(li).appendChild(btn)

  triangleBase.value = "";
  triangleHeight.value = "";

})

//rectangle
document.getElementById('rectangle-btn').addEventListener('click', function(){
  const rectangleWidth = document.getElementById('rectangle-width');
  const rectangleWidthText = rectangleWidth.value;
  const rectangleWidthTextInNumber = parseFloat(rectangleWidthText)

  const rectangleLength = document.getElementById('rectangle-length');
  const rectangleLengthText  = rectangleLength.value;
  const rectangleLengthTextInNumber =  parseFloat(rectangleLengthText);


  //validation 
  if(isNaN(rectangleWidthTextInNumber) || isNaN(rectangleLengthTextInNumber)){
    alert('please input number value');
    return;
    }
    if(rectangleWidthTextInNumber <=0 ||rectangleWidthTextInNumber <=0 ){
    alert('Please enter positive value');
     return;
   }


  const rectangleArea = (rectangleWidthTextInNumber * rectangleLengthTextInNumber);
  const rectangleAreaInTwoDeciaml = rectangleArea.toFixed(2);

  const ol = document.getElementById("calculation-area");
    const li = document.createElement("li");
    const btn = document.createElement('button');
    btn.classList.add("cal-btn");
    btn.innerText = "convert to m2"
    li.innerText = "Rectangle" + " " + rectangleAreaInTwoDeciaml;
    ol.appendChild(li).appendChild(btn);

    rectangleWidth.value = "";
    rectangleLength.value = "";
})

//parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function(){
  const parallelogramBase = document.getElementById('parallelgram-base');
  const parallelgramBaseText = parallelogramBase.value;
  const parallelgramBaseTextInNumber = parseFloat(parallelgramBaseText)

  const parallelgramHeignt = document.getElementById('parallelgram-height');
  const parallelgramHeigntText = parallelgramHeignt.value;
  const parallelgramHeigntTextInNumber =parseFloat(parallelgramHeigntText);


  //validation 
  if(isNaN(parallelgramBaseTextInNumber) || isNaN(parallelgramHeigntTextInNumber)){
    alert('please input number value');
    return;
    }
    if(parallelgramBaseTextInNumber <=0 ||parallelgramHeigntTextInNumber <=0 ){
    alert('Please enter positive value');
      return;
    }

  const parallelgramArea = (parallelgramBaseTextInNumber * parallelgramHeigntTextInNumber).toFixed(2);

  const ol = document.getElementById("calculation-area");
  const li = document.createElement("li");
  const btn = document.createElement('button');
  btn.classList.add("cal-btn");
  btn.innerText = "convert to m2"
  li.innerText = "Parallelgram" + " " + parallelgramArea;
  ol.appendChild(li).appendChild(btn);

  parallelogramBase.value = "";
  parallelgramHeignt.value = "";
})

//Rhombus
document.getElementById('rhombus-btn').addEventListener('click', function(){
  const rhombusD1 = document.getElementById('rhombus-d1');
  const rhombusD1Text = rhombusD1.value;
  const rhombusD1InNumber = parseFloat(rhombusD1Text)

  const rhombusD2 = document.getElementById('rhombus-d2');
  const rhombusD2Text = rhombusD2.value;
  const rhombusD2InNumber = parseFloat(rhombusD2Text)

  //validation 
  if(isNaN(rhombusD1InNumber) || isNaN(rhombusD2InNumber)){
    alert('please input number value');
    return;
    }
    if(rhombusD1InNumber <=0 ||rhombusD2InNumber <=0 ){
    alert('Please enter positive value');
      return;
    }

  const rhombusArea = (.5* rhombusD1InNumber * rhombusD2InNumber).toFixed(2);

  const ol = document.getElementById("calculation-area");
  const li = document.createElement("li");
  const btn = document.createElement('button');
  btn.classList.add("cal-btn");
  btn.innerText = "convert to m2"
  li.innerText = "Rhombus" + " " + rhombusArea;
  ol.appendChild(li).appendChild(btn);

  rhombusD1.value = "";
  rhombusD2.value = "";
})

//Pentagon
document.getElementById('pentagon-btn').addEventListener('click', function(){
  const pentagonperimeter = document.getElementById('pentagon-perimeter');
  const pentagonperimeterText = pentagonperimeter.value;
  const pentagonperimeterInNumber = parseFloat(pentagonperimeterText)

  const pentagonApothem = document.getElementById('pentagon-apothem');
  const pentagonApothemText = pentagonApothem.value;
  const pentagonApothemInNumber = parseFloat(pentagonApothemText)

  //validation 
  if(isNaN(pentagonperimeterInNumber) || isNaN(pentagonApothemInNumber)){
    alert('please input number value');
    return;
    }
  
  if(pentagonperimeterInNumber <=0 ||pentagonApothemInNumber <=0 ){
  alert('Please enter positive value');
    return;
  }

  const pentagonArea = .5*(pentagonperimeterInNumber * pentagonApothemInNumber).toFixed(2);

  const ol = document.getElementById("calculation-area");
  const li = document.createElement("li");
  const btn = document.createElement('button');
  btn.classList.add("cal-btn");
  btn.innerText = "convert to m2"
  li.innerText = "Pentagon" + " " + pentagonArea;
  ol.appendChild(li).appendChild(btn);

  pentagonperimeter.value = "";
  pentagonApothem.value = "";
})



//ellipse
document.getElementById('ellipse-btn').addEventListener('click', function(){
  const aAxis = document.getElementById('a-axis');
  const aAxisText = aAxis.value;
  const aAxisTextNumber = parseFloat(aAxisText)

  const bAxis = document.getElementById('b-axis');
  const bAxisText = bAxis.value;
  const bAxisTextNumber = parseFloat(bAxisText)

  //validation 
  if(isNaN(aAxisTextNumber) || isNaN(bAxisTextNumber)){
    alert('please input number value');
    return;
    }
    if(aAxisTextNumber <=0 ||bAxisTextNumber <=0 ){
    alert('Please enter positive value');
      return;
    }

  const ellipseArea = 3.14*(aAxisTextNumber * bAxisTextNumber).toFixed(2);

  const ol = document.getElementById("calculation-area");
  const li = document.createElement("li");
  const btn = document.createElement('button');
  btn.classList.add("cal-btn");
  btn.innerText = "convert to m2"
  li.innerText = "ellipse" + " " + ellipseArea;
  ol.appendChild(li).appendChild(btn);

  aAxis.value = "";
  bAxis.value = "";
})