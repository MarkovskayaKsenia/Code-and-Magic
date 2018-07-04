'use strict';

(function () {
  var wizards = [];
  var coatColor;
  var eyesColor;
  var fireballColor;

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    if (wizard.colorFireball === fireballColor) {
      rank += 1;
    }
    return rank;
  };
  var namesSort = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    }
    return 0;
  };
  var updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesSort(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.player = {
    onEyesChange: function (color) {
      eyesColor = color;
      window.debounce(updateWizards);
    },
    onCoatChange: function (color) {
      coatColor = color;
      window.debounce(updateWizards);

    },
    onFireballChange: function (color) {
      fireballColor = color;
      window.debounce(updateWizards);
    }
  };
  window.onSuccess = function (data) {
    wizards = data;
    window.render(wizards);
  };
})();
