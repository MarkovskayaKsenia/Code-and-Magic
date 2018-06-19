'use strict';

// Параметры волшебников
var firstNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var secondNames = [
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
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var NUMBER_OF_WIZARDS = 4;

// Функция для получения RGB из HEX
var hexToRgb = function (hexString) {
  var hex = hexString.substr(1);
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

// Функция для вывода случайного элемента массива
var getRandomFromArray = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Функция для создания волшебников
var getWizards = function (wizardFirstNames, wizardSecondNames, wizardCoatColors, wizardEyesColors, num) {

  var wizards = [];
  for (var i = 0; i < num; i++) {
    var wizard = {};
    wizard.name = getRandomFromArray(wizardFirstNames) + ' ' + getRandomFromArray(wizardSecondNames);
    wizard.coatColor = getRandomFromArray(wizardCoatColors);
    wizard.eyesColor = getRandomFromArray(wizardEyesColors);
    wizards.push(wizard);
  }
  return wizards;
};

// Генерируем массив волшебников
var similarWizards = getWizards(firstNames, secondNames, coatColors, eyesColors, NUMBER_OF_WIZARDS);

// Функция отрисовки волшебников
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Находим место для списка волшебников и шаблон
var similarWizardList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// Создаем фрагмент, в который поместим волшебников
var fragment = document.createDocumentFragment();

// Цикл для отрисовки волшебников
for (var i = 0; i < similarWizards.length; i++) {
  fragment.appendChild(renderWizard(similarWizards[i]));
}

// Добавляем волшебников
similarWizardList.appendChild(fragment);

// Находим и показываем окно с волшебниками
var similarWizardsWindow = document.querySelector('.setup-similar');
similarWizardsWindow.classList.remove('hidden');

// Находим блок персонажа
var player = document.querySelector('.setup-player');

// Изменение цвета мантии персонажа
var wizardCoat = player.querySelector('.wizard-coat');
var wizardCoatInput = player.querySelector('input[name=coat-color]');
wizardCoat.addEventListener('click', function () {
  var newColor = getRandomFromArray(coatColors);
  while (newColor === wizardCoat.style.fill) {
    newColor = getRandomFromArray(coatColors);
  }
  wizardCoat.style.fill = newColor;
  wizardCoatInput.value = newColor;
});

// Изменение цвета глаз персонажа
var wizardEyes = player.querySelector('.wizard-eyes');
var wizardEyesInput = player.querySelector('input[name=eyes-color]');
wizardEyes.addEventListener('click', function () {
  var newColor = getRandomFromArray(eyesColors);
  while (newColor === wizardEyes.style.fill) {
    newColor = getRandomFromArray(eyesColors);
  }
  wizardEyes.style.fill = newColor;
  wizardEyesInput.value = newColor;
});

// Изменение цвета фаербола
var wizardFireball = player.querySelector('.setup-fireball-wrap');
var wizardFireballInput = player.querySelector('input[name=fireball-color]');
wizardFireball.addEventListener('click', function () {
  var newColor = getRandomFromArray(fireballColors);
  while (hexToRgb(newColor) === wizardFireball.style.backgroundColor) {
    newColor = getRandomFromArray(fireballColors);
  }
  wizardFireball.style.background = newColor;
  wizardFireballInput.value = newColor;
});
