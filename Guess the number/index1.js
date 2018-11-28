// Ugadai Chislo The Game
// range 1-3

// VOT ETOT KOMMENT OCHEN VAJEN
// GIT PULL ORIGIN MASTER


var userChoise = prompt('Введите число',1-3); // "" < empty string
var userNumber = parseInt(userChoise>3); // "" > number
var randomNumber = Math.round(Math.random() * 3);

if (userNumber == NaN) {
    alert("VVEDITE ZNACHENIE");
    location.reload();
}

if (userNumber == randomNumber) {

    alert("WIN")
  

} else {

    alert("LOOSE")
   

}

location.reload();

    //  Рассказать про типы данных в целом
    //   Перечислить все типы данных
    //   Практическое применение булиан
    //   Перечислить все операторы в джаваскрипт
    //   Math.random & Math.floor
    //   Date() & prompt() & alert()
    //   Object reference
    //   Array reference
    //   Кложура и хойстин
    //   почему все языки ООП
    //   минимальная история языка джс
    //   ES4 ES5 ES6 ES7 BABEL PRESETS
    // READ ON WIKI ABOUT JS VERSIONS
    // localStorage.setItem('value', 2)
    // localStorage.getItem('value');
    // ADVANCED indexDB
    // cd .. cd~ mkdir git clone 
    // ADVANCED create your own repo on git
    // if else










