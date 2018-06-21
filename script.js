var total = 0;

for (var num = 1; <= 5; num++) {

  total = total + num;

  console.log (total)

}



var answer = prompt('Do you want to play?');

if ( answer === 'yes' ) {

  prompt("Enter a word");

  prompt("Do you want to play again?");

} else { 

  }


var answer = prompt('Would you like to print your name - Yes or No?');

if ( answer === 'yes' ) {

  prompt("Please enter your name");

  prompt("Would you like to print your name again?");

if ( answer === 'yes' ) {

}
  prompt("Please enter your name");

  } else { 

  }


var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setMeal);


function setMeal() {
  var choice = select.value;

  if (choice === 'morning') {
    para.textContent = 'Since it is morning, we suggest eggs and toast';
  } else if (choice === 'noon') {
    para.textContent = 'Since it is the afternoon, we suggest a salad;
  } else if (choice === 'evening') {
    para.textContent = 'Since it is the evening, we suggest chicken and rice';
  } else {
    para.textContent = '';
  }
}
