'use strict';

// Параметры волшебников
var FIRST_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SECOND_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var NUMBER_OF_WIZARDS = 4;

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
var similarWizards = getWizards(FIRST_NAMES, SECOND_NAMES, COAT_COLORS, EYES_COLORS, NUMBER_OF_WIZARDS);

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


// Находим блок, который надо показать, кнопку открытия, кнопку закрытия
var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open-icon');
var userDialogClose = document.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');
var ESC_CODE = 27;
var ENTER_CODE = 13;

// Методы открытия и закрытия окна
var onDialogEscPress = function (evt) {
  if (evt.target === userNameInput) {
    userNameInput.blur();
    evt.stopPropagation();
  } else if (evt.keyCode === ESC_CODE) {
    closeDialog();
  }
};
var openDialog = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keyDown', onDialogEscPress);
};
var closeDialog = function () {
  userDialog.classList.add('hidden');
  document.addEventListener('keyDown', onDialogEscPress);
};


// Обработчики событий для открывания окна
userDialogOpen.addEventListener('click', openDialog);
userDialogOpen.addEventListener('keyDown', function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    openDialog();
  }
});
userDialogClose.addEventListener('click', closeDialog);
userDialogClose.addEventListener('keyDown', function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    closeDialog();
  }
});

// Находим блок персонажа
var player = document.querySelector('.setup-player');

// Изменение цвета мантии персонажа
var wizardCoat = player.querySelector('.wizard-coat');
var wizardCoatInput = player.querySelector('input[name=coat-color]');
wizardCoat.addEventListener('click', function () {
  var newColor = getRandomFromArray(COAT_COLORS);
  wizardCoat.style.fill = newColor;
  wizardCoatInput.value = newColor;
});

// Изменение цвета глаз персонажа
var wizardEyes = player.querySelector('.wizard-eyes');
var wizardEyesInput = player.querySelector('input[name=eyes-color]');
wizardEyes.addEventListener('click', function () {
  var newColor = getRandomFromArray(EYES_COLORS);
  wizardEyes.style.fill = newColor;
  wizardEyesInput.value = newColor;
});

// Изменение цвета фаербола
var wizardFireball = player.querySelector('.setup-fireball-wrap');
var wizardFireballInput = player.querySelector('input[name=fireball-color]');
wizardFireball.addEventListener('click', function () {
  var newColor = getRandomFromArray(FIREBALL_COLORS);
  wizardFireball.style.backgroundColor = newColor;
  wizardFireballInput.value = newColor;
});
