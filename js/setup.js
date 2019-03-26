'use strict';

var WIAZARDS_QUANTITY = 4;

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireBallColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

// Функция нахождения случайного элемента массива.
var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Функция создания массива с характеристиками каждого волшебника.
var createWizardsCharacteristics = function (wizardName, wizardSurname, wizardCoatColor, wizardEyesColor, quantity) {
  var wizards = [];
  for (var i = 0; i < quantity; i++) {
    var newWizard = {};
    newWizard.name = getRandomElement(wizardName) + ' ' + getRandomElement(wizardSurname);
    newWizard.coatColor = getRandomElement(wizardCoatColor);
    newWizard.eyesColor = getRandomElement(wizardEyesColor);
    wizards.push(newWizard);
  }
  return wizards;
};


document.querySelector('.setup-similar').classList.remove('hidden');

// Функция отрисовки одного волшебника
var renderWizard = function (obj) {

  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = obj.name;
  wizardElement.querySelector('.wizard-coat').style.fill = obj.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = obj.eyesColor;

  return wizardElement;
};

var generateSimilarWizards = function (quantity) {
  var fragment = document.createDocumentFragment();
  var similarWizardsList = document.querySelector('.setup-similar-list');
  var wizardsCharacteristics = createWizardsCharacteristics(names, surnames, coatColors, eyesColors, quantity);
  for (var i = 0; i < quantity; i++) {
    var newWizard = renderWizard(wizardsCharacteristics[i]);
    fragment.appendChild(newWizard);
  }
  similarWizardsList.append(fragment);
};

generateSimilarWizards(4);

// Открытие и закрытие окна настройки персонажа.
// Элементы для взаимодействия
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Методы открытия/закрытия Popup.
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (evt.target === setupUserName) {
      setupUserName.blur();
      evt.stopPropagation();
    } else {
      closePopup();
    }
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// Открытие окна Popup.

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

// Закрытие окна Popup.
setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Пользовательская проверка на валидность поля "Имя волшебника"
var userNameInput = setup.querySelector('.setup-user-name');
userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

// Смена цвета мантии персонажа.
var player = document.querySelector('.setup-player');
var wizardCoat = player.querySelector('.wizard-coat');
var wizardCoatInput = player.querySelector('input[name=coat-color]');

wizardCoat.addEventListener('click', function () {
  var newColor = getRandomElement(coatColors);
  while (newColor === wizardCoat.style.fill) {
    newColor = getRandomElement(coatColors);
  }
  wizardCoat.style.fill = newColor;
  wizardCoatInput.value = newColor;
});

// Смена цвета глаз персонажа.
var wizardEyes = player.querySelector('.wizard-eyes');
var wizardEyesInput = player.querySelector('input[name=eyes-color]');

wizardEyes.addEventListener('click', function () {
  var newColor = getRandomElement(eyesColors);
  while (newColor === wizardEyes.style.fill) {
    newColor = getRandomElement(eyesColors);
  }
  wizardEyes.style.fill = newColor;
  wizardEyesInput.value = newColor;
});


//Преобразование цветов из формата HEX в RGB
var hexToRgb = function (hexString) {
  var hex = hexString.substr(1);
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return 'rgb(' + r + ", " + g + ", " + b + ')';
};

// Смена цвета фаербола.
var wizardFireball = player.querySelector('.setup-fireball-wrap');
var wizardFireballInput = player.querySelector('input[name=fireball-color]');

wizardFireball.addEventListener('click', function () {
  var newColor = getRandomElement(fireBallColors);
  console.log(hexToRgb(newColor));
  console.log(wizardFireball.style.background);
  while(hexToRgb(newColor) === wizardFireball.style.background) {
    console.log(true);
    newColor = getRandomElement(fireBallColors);
  }
  wizardFireball.style.background = newColor;
  wizardFireballInput.value = newColor;
  console.log(hexToRgb(newColor));
});
