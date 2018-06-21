'use strict';

(function () {
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
  var NUMBER_OF_WIZARDS = 4;

  // Функция для создания волшебников
  var getWizards = function (wizardFirstNames, wizardSecondNames, wizardCoatColors, wizardEyesColors, num) {
    var wizards = [];
    for (var i = 0; i < num; i++) {
      var wizard = {};
      wizard.name = window.utils.getRandomFromArray(wizardFirstNames) + ' ' + window.utils.getRandomFromArray(wizardSecondNames);
      wizard.coatColor = window.utils.getRandomFromArray(wizardCoatColors);
      wizard.eyesColor = window.utils.getRandomFromArray(wizardEyesColors);
      wizards.push(wizard);
    }
    return wizards;
  };

  // Генерируем массив волшебников
  var similarWizards = getWizards(firstNames, secondNames, window.setup.coatColors, window.setup.eyesColors, NUMBER_OF_WIZARDS);

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
})();
