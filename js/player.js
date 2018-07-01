'use strict';

(function () {
  var setup = {
    colorCoat: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    colorEyes: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],
    colorFireball: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ]
  };
  window.player = {
    onEyesChange: function () {},
    onCoatChange: function () {},
    onFireballChange: function () {}
  };

  // Находим блок персонажа
  var player = document.querySelector('.setup-player');

  // Изменение цвета мантии персонажа
  var wizardCoat = player.querySelector('.wizard-coat');
  var wizardCoatInput = player.querySelector('input[name=coat-color]');
  wizardCoat.addEventListener('click', function () {
    var newColor = window.utils.getRandomFromArray(setup.colorCoat);
    while (newColor === wizardCoat.style.fill) {
      newColor = window.utils.getRandomFromArray(setup.colorCoat);
    }
    wizardCoat.style.fill = newColor;
    wizardCoatInput.value = newColor;
    window.player.onCoatChange(newColor);
  });

  // Изменение цвета глаз персонажа
  var wizardEyes = player.querySelector('.wizard-eyes');
  var wizardEyesInput = player.querySelector('input[name=eyes-color]');
  wizardEyes.addEventListener('click', function () {
    var newColor = window.utils.getRandomFromArray(setup.colorEyes);
    while (newColor === wizardEyes.style.fill) {
      newColor = window.utils.getRandomFromArray(setup.colorEyes);
    }
    wizardEyes.style.fill = newColor;
    wizardEyesInput.value = newColor;
    window.player.onEyesChange(newColor);
  });

  // Изменение цвета фаербола
  var wizardFireball = player.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = player.querySelector('input[name=fireball-color]');
  wizardFireball.addEventListener('click', function () {
    var newColor = window.utils.getRandomFromArray(setup.colorFireball);
    while (window.utils.hexToRgb(newColor) === wizardFireball.style.backgroundColor) {
      newColor = window.utils.getRandomFromArray(setup.colorFireball);
    }
    wizardFireball.style.background = newColor;
    wizardFireballInput.value = newColor;
    window.player.onFireballChange(newColor);
  });
})();

var form = document.querySelector('.setup-wizard-form');
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  window.backend.save(new FormData(form), window.closeDialog, window.utils.onError);
});
