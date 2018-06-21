
function setMeal() {
  var choice = select.value;

  if (choice === 'morning') {
    para.textContent = 'Since it is morning, we suggest eggs and toast';
  } else if (choice === 'noon') {
    para.textContent = 'Since it's the afternoon, we suggest a salad;
  } else if (choice === 'evening') {
    para.textContent = 'Since it is the evening, we suggest chicken and rice';
  } else {
    para.textContent = '';
  }
}