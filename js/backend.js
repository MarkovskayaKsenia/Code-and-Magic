'use strict';
(function () {
  var listenRequest = function (xhr, onLoad, onError) {
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + ' мс');
    });
  };
  window.backend = {
    save: function (data, onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = 10000;
      listenRequest(xhr, onLoad, onError);
      xhr.open('POST', URL);
      xhr.send(data);
    },
    load: function (onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick/data';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = 10;
      listenRequest(xhr, onLoad, onError);
      xhr.timeout = 10000;
      xhr.open('GET', URL);
      xhr.send();
    }
  };
})();
