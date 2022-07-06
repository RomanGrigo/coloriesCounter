var countButton = document.querySelector('.form__submit-button');
var age = document.querySelector('#age');

if (age.value != '') {
	countButton.disabled = false;
}