'use strict';

(function () {
  window.utils = {
    // Функция для получения RGB из HEX
    hexToRgb: function (hexString) {
      var hex = hexString.substr(1);
      var bigint = parseInt(hex, 16);
      var r = (bigint >> 16) & 255;
      var g = (bigint >> 8) & 255;
      var b = bigint & 255;

      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    },

    // Функция для вывода случайного элемента массива
    getRandomFromArray: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },

    onError: function (error) {
      var errorWindow = document.querySelector('.error-window');
      var errorText = document.querySelector('.error-message');
      errorText.textContent = error;
      errorWindow.classList.remove('hidden');
      setTimeout(function () {
        errorWindow.classList.add('hidden');
      }, 4000);
    }
  };
})();
