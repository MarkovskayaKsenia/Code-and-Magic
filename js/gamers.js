'use strict';

(function () {
  // Шаблон для волшебников
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  // Функция отрисовки волшебников
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.backend.load(function (wizards) {
    var NUMBER_OF_WIZARDS = 4;

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

    // Находим и показываем окно с волшебниками
    var similarWizardsWindow = document.querySelector('.setup-similar');
    similarWizardsWindow.classList.remove('hidden');
  }, window.utils.onError);
})();
