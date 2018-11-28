//Едет влево
// var leftOfset=200;
// var moveHeading=function(){
//   $("#heading").offset({left: leftOfset});
//   leftOfset--;
//   if(leftOfset==0){
//     leftOfset=200;
//   }
// };
// setInterval(moveHeading, 15);


//Едет вправо
// var leftOfset=0;
// var moveHeading=function(){
//   $("#heading").offset({left: leftOfset});
//   leftOfset++;
//   if(leftOfset>200){
//     leftOfset=0;
//   }
// };
// setInterval(moveHeading, 15);


//Показыват точки координат клика
// var click=function(event){
//   console.log("Ты сделал это "+ event.pageX +" "+event.pageY);
// };
// $("h1").click(click);


//Двигается вместе с мышкой
// $("html").mousemove(function(event){
//   $("#heading").offset({
//     left: event.pageX,
//     top: event.pageY
//   });
// });

//Слкдует за кликом мышки
// $("html").click(function(event){
//   $("#heading").offset({
//     left: event.pageX,
//     top: event.pageY
//   });
// });


//Двигаться по квадрату
// var leftOfset=0;
// var topOfset=0;
// var rightOfset=200;
// var moveHeading=function(){
//   if (leftOfset<200 && topOfset==0){
//     $("#heading").offset({left: leftOfset});
//     leftOfset++;
//   }
//   if(leftOfset==200 && topOfset<200 ){
//     $("#heading").offset({top: topOfset});
//     topOfset++;
//   }
//  if(leftOfset>0 && topOfset==200 ){
//   $("#heading").offset({left: leftOfset});
//   leftOfset--;
//  }
//  if (leftOfset==0 && topOfset>0){
//   $("#heading").offset({top: topOfset});
//   topOfset--;
//  }
// };
// setInterval(moveHeading, 15);



// Останвить кликом мыши
// var leftOfset=0;
// var topOfset=0;
// var moveHeading=function(){
//   if (leftOfset<200 && topOfset==0){
//     $("#heading").offset({left: leftOfset});
//     leftOfset++;
//   }
//   if(leftOfset==200 && topOfset<200 ){
//     $("#heading").offset({top: topOfset});
//     topOfset++;
//   }
//  if(leftOfset>0 && topOfset==200 ){
//   $("#heading").offset({left: leftOfset});
//   leftOfset--;
//  }
//  if (leftOfset==0 && topOfset>0){
//   $("#heading").offset({top: topOfset});
//   topOfset--;
//  }
// };
// var interval = setInterval(moveHeading, 15);

// $("h1").click(function(event){
//   clearInterval(interval);
//  })


//Ускоряем при нажатии
// var leftOfset=0;
// var topOfset=0;
// var moveHeading=function(){
//   if (leftOfset<200 && topOfset==0){
//     $("#heading").offset({left: leftOfset});
//     leftOfset++;
//   }
//   if(leftOfset==200 && topOfset<200 ){
//     $("#heading").offset({top: topOfset});
//     topOfset++;
//   }
//  if(leftOfset>0 && topOfset==200 ){
//   $("#heading").offset({left: leftOfset});
//   leftOfset--;
//  }
//  if (leftOfset==0 && topOfset>0){
//   $("#heading").offset({top: topOfset});
//   topOfset--;
//  }
// };

// var interval = setInterval(moveHeading, 15);

// $("h1").click(function(){
//   setInterval(moveHeading, 1);
//  })

 //Отслеживаем количество кликов и выводим 
//  var leftOfset=0;
// var topOfset=0;
// var moveHeading=function(){
//   if (leftOfset<200 && topOfset==0){
//     $("#heading").offset({left: leftOfset});
//     leftOfset++;
//   }
//   if(leftOfset==200 && topOfset<200 ){
//     $("#heading").offset({top: topOfset});
//     topOfset++;
//   }
//  if(leftOfset>0 && topOfset==200 ){
//   $("#heading").offset({left: leftOfset});
//   leftOfset--;
//  }
//  if (leftOfset==0 && topOfset>0){
//   $("#heading").offset({top: topOfset});
//   topOfset--;
//  }
// };

// var interval = setInterval(moveHeading, 15);
//  var counter=0;
//  var printMass=$("h1").click(function(){
//      setInterval(moveHeading, 1);
//     counter++;
//     if (counter==2){
//       alert("Вишенка, ты молодец!");
//     }
//   });
  

//Остановить игру(не завершенно)
var leftOfset=0;
var topOfset=0;
var moveHeading=function(){
  if (leftOfset<200 && topOfset==0){
    $("#heading").offset({left: leftOfset});
    leftOfset++;
  }
  if(leftOfset==200 && topOfset<200 ){
    $("#heading").offset({top: topOfset});
    topOfset++;
  }
 if(leftOfset>0 && topOfset==200 ){
  $("#heading").offset({left: leftOfset});
  leftOfset--;
 }
 if (leftOfset==0 && topOfset>0){
  $("#heading").offset({top: topOfset});
  topOfset--;
 }
};


var interval = setInterval(moveHeading, 40);
 var counter=0;
 var printMass=$("h1").click(function(){
    if(counter < 5){
    setInterval(moveHeading, 15)
    $("h1").html(counter + 1)
    counter++;
  }
    if (counter==5){
      $("h1").html("WIN");
    }
  });

