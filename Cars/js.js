var Car=function(x,y){
this.x=x;
this.y=y;
};

//для консоли-
/*var tesla=new Car (10,20);
tesla;*/


// ОТРИСОВКА 1 метод
// var drawCar=function(car){
//   var carHtml='<img src="photo.jpg">';

//   var carElement=$(carHtml);
//   carElement.css({
//     position: "absolute",
//     left: car.x,
//     top:car.y
//   });

//     $("body").append(carElement);
//   };

// var zaporogets=new Car(20,20);
// var kopeyka=new Car(100,200);
// drawCar(zaporogets);
// drawCar(kopeyka);


//ОТРИСОВКА С ПРОТОТАЙП
Car.prototype.draw=function(){
  var carHtml='<img src="photo.jpg">';

  this.carElement=$(carHtml);

  this.carElement.css({
    position: "absolute",
    left: this.x,
    top:this.y});

    $("body").append(this.carElement);
  };
  Car.prototype.moveRight=function(){
    this.x+=5;
    this.carElement.css({
      left:this.x,
      top:this.y
    });
  };

  Car.prototype.moveLeft = function () {
    this.x -=5;
    this.carElement.css({
      left:this.x,
      top:this.y
    });
  };

  Car.prototype.moveUp = function () {
    this.y -=5;
    this.carElement.css({
      left:this.x,
      top:this.y
    });
  };

  Car.prototype.moveDown = function () {
    this.y +=5;
    this.carElement.css({
      left:this.x,
      top:this.y
    });
  };

  var zaporogets=new Car(20,20);
  var kopeyka=new Car(100,200);
 zaporogets.draw();
  kopeyka.draw();




//Движение машинки
// Car.prototype.draw=function(){
//     var carHtml='<img src="photo.jpg">';
  
//     this.carElement=$(carHtml);
  
//     this.carElement.css({
//       position: "absolute",
//       left: this.x,
//       top:this.y});
  
//       $("body").append(this.carElement);
//     };
//     Car.prototype.moveRight=function(){
//       this.x+=5;
//       this.carElement.css({
//         left:this.x,
//         top:this.y
//       });
//     };
  
//     var zaporogets=new Car(20,20);
//     var kopeyka=new Car(100,200);
//    zaporogets.draw();
//     kopeyka.draw();

//     function carMoveRight (){
//       zaporogets.moveRight();
//   }
//   setInterval(carMoveRight, 10)