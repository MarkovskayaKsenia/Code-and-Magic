'use strict';

(function () {
  // Находим блок персонажа
  var player = document.querySelector('.setup-player');

  // Изменение цвета мантии персонажа
  var wizardCoat = player.querySelector('.wizard-coat');
  var wizardCoatInput = player.querySelector('input[name=coat-color]');
  wizardCoat.addEventListener('click', function () {
    var newColor = window.utils.getRandomFromArray(window.setup.coatColors);
    while (newColor === wizardCoat.style.fill) {
      newColor = window.utils.getRandomFromArray(window.setup.coatColors);
    }
    wizardCoat.style.fill = newColor;
    wizardCoatInput.value = newColor;
  });

  // Изменение цвета глаз персонажа
  var wizardEyes = player.querySelector('.wizard-eyes');
  var wizardEyesInput = player.querySelector('input[name=eyes-color]');
  wizardEyes.addEventListener('click', function () {
    var newColor = window.utils.getRandomFromArray(window.setup.eyesColors);
    while (newColor === wizardEyes.style.fill) {
      newColor = window.utils.getRandomFromArray(window.setup.eyesColors);
    }
    wizardEyes.style.fill = newColor;
    wizardEyesInput.value = newColor;
  });

  // Изменение цвета фаербола
  var wizardFireball = player.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = player.querySelector('input[name=fireball-color]');
  wizardFireball.addEventListener('click', function () {
    var newColor = window.utils.getRandomFromArray(window.setup.fireballColors);
    while (window.utils.hexToRgb(newColor) === wizardFireball.style.backgroundColor) {
      newColor = window.utils.getRandomFromArray(window.setup.fireballColors);
    }
    wizardFireball.style.background = newColor;
    wizardFireballInput.value = newColor;
  });
})();
