'use strict';

(function () {
  // Шаблон для волшебников
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  // Функция отрисовки волшебников
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard['name'];
    wizardElement.querySelector('.wizard-coat').style.fill = wizard['colorCoat'];
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard['colorEyes'];

    return wizardElement;
  };

  var NUMBER_OF_WIZARDS = 4;
  // Находим место для списка волшебников
  var similarWizardsWindow = document.querySelector('.setup-similar');
  var similarWizardList = document.querySelector('.setup-similar-list');

  window.render = function (data) {
    var takeNumber = data.length > NUMBER_OF_WIZARDS ? NUMBER_OF_WIZARDS : data.length;
    similarWizardList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarWizardList.appendChild(renderWizard(data[i]));
    }
    similarWizardsWindow.classList.remove('hidden');
  };
})();
