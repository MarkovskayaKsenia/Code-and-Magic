'use strict';

// Имена и фамилии волшебников
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

// Цвета мантий и глаз
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

var numberOfWizards = 4;

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
var similarWizards = getWizards(firstNames, secondNames, coatColors, eyesColors, numberOfWizards);

// Функция отрисовки волшебников
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Находим и показываем окно setup
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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
