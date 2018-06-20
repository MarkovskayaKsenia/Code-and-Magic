'use strict';

(function () {
  // Находим блок, который надо показать, кнопку открытия, кнопку закрытия
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open-icon');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var userNameInput = userDialog.querySelector('.setup-user-name');
  var userDialogStyleLeft = userDialog.style.left;
  var userDialogStyleTop = userDialog.style.top;
  var ESC_CODE = 27;
  var ENTER_CODE = 13;

  // Методы открытия и закрытия окна
  var onDialogEscPress = function (evt) {
    if (evt.keyCode === ESC_CODE) {
      if (evt.target === userNameInput) {
        userNameInput.blur();
        evt.stopPropagation();
      } else {
        closeDialog();
      }
    }
  };
  var resetDialogCoords = function () {
    userDialog.style.left = userDialogStyleLeft;
    userDialog.style.top = userDialogStyleTop;
  };
  var openDialog = function () {
    userDialog.classList.remove('hidden');
    resetDialogCoords();
    document.addEventListener('keydown', onDialogEscPress);
  };
  var closeDialog = function () {
    userDialog.classList.add('hidden');
    document.addEventListener('keydown', onDialogEscPress);
  };

  // Обработчики событий для открывания окна
  userDialogOpen.addEventListener('click', openDialog);
  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
      openDialog();
    }
  });
  userDialogClose.addEventListener('click', closeDialog);
  userDialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
      closeDialog();
    }
  });

  // Добавляем draggable аватару
  var userDialogHandler = userDialog.querySelector('.upload');
  userDialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          userDialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        userDialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
