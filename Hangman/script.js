var words=["собака","колодец","море","кот"];
var word= words[Math.floor(Math.random() * words.length)];
//создаем еще один пустой масив, в нем создаем счетчик:записать в массив столько знаков "_", сколько букв
//в слове которое получили мы рондомом
var answerArray = [];
for (var i = 0; i < word.length; i++) {
answerArray[i] = "_";
}
//создаем  еще одну переменную, присваиваем ей значение: цыфру-колличесво букв слова из нашего массива, для отслежкт сколько букв осталось угадать
var remainingLetters = word.length;
//создаем цикл в котором наша последняя переменная должна быть больше "0"
while (remainingLetters > 0) {
//если это условие выполняется, а оно в любом случае выполняется,выводим на экран переменую "answerArray" в виде строки.
//получаем например в новом окне "_ _ _"
alert(answerArray.join(" "));
//в этом же цикле создаем окно ввода 
var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
guess=guess.toLowerCase();
if(guess==null){
  break;
}
else if(guess.length !== 1){
alert("Введите только одну букву");
}
else{
  for(var j=0; j < word.length; j++){
    if (word[j] === guess){
      answerArray[j]=guess;
      remainingLetters --;
    }
  }
}
}
alert(answerArray.join(" "));
alert("Отлично, было загадано слово " + word);


// console.log(answerArray);
