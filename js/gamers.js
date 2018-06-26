'use strict';

(function () {
  // var firstNames = [
  //   'Иван',
  //   'Хуан Себастьян',
  //   'Мария',
  //   'Кристоф',
  //   'Виктор',
  //   'Юлия',
  //   'Люпита',
  //   'Вашингтон'
  // ];
  // var secondNames = [
  //   'да Марья',
  //   'Верон',
  //   'Мирабелла',
  //   'Вальц',
  //   'Онопко',
  //   'Топольницкая',
  //   'Нионго',
  //   'Ирвинг'
  // ];
  var NUMBER_OF_WIZARDS = 4;

  // Функция для создания волшебников
  // var getWizards = function (wizardNames, wizardCoatColors, wizardEyesColors, num) {
  //   var wizards = [];
  //   for (var i = 0; i < num; i++) {
  //     var wizard = {};
  //     wizard.name = window.utils.getRandomFromArray(wizardFirstNames) + ' ' + window.utils.getRandomFromArray(wizardSecondNames);
  //     wizard.colorCoat = window.utils.getRandomFromArray(wizardCoatColors);
  //     wizard.colorEyes = window.utils.getRandomFromArray(wizardEyesColors);
  //     wizards.push(wizard);
  //   }
  //   return wizards;
  // };

  // // Генерируем массив волшебников
  // var similarWizards = getWizards(firstNames, secondNames, window.setup.colorCoat, window.setup.colorEyes, NUMBER_OF_WIZARDS);

  // Функция отрисовки волшебников
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // Шаблон для волшебников
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


  window.backend.load(function (wizards) {
    // Находим место для списка волшебников
    var similarWizardList = document.querySelector('.setup-similar-list');

    // Создаем фрагмент, в который поместим волшебников
    var fragment = document.createDocumentFragment();


    // Цикл для отрисовки волшебников
    for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
      fragment.appendChild(renderWizard(window.utils.getRandomFromArray(wizards)));
    }
    // Добавляем волшебников
    similarWizardList.appendChild(fragment);
  }, window.utils.onError);
  // Находим и показываем окно с волшебниками
  var similarWizardsWindow = document.querySelector('.setup-similar');
  similarWizardsWindow.classList.remove('hidden');

})();
