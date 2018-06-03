'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var INNER_GAP_Y = 25;
var INNER_GAP_X = 40;
var LINE_HEIGHT = 18;

var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;


var USER_COLOR = 'rgba(255, 0, 0, 1)';
var getRandomBlue = function () {
  return 'rgba(0, 0, 255, ' + (Math.ceil(Math.random() * 9)) / 10 + ')';
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили', CLOUD_X + INNER_GAP_X, CLOUD_Y + INNER_GAP_Y);
  ctx.fillText('Список результатов:', CLOUD_X + INNER_GAP_X, CLOUD_Y + INNER_GAP_Y + LINE_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = getRandomBlue();
    if (players[i] === 'Вы') {
      ctx.fillStyle = USER_COLOR;
    }

    var columnHeight = (BAR_HEIGHT * times[i]) / maxTime;
    var columnGap = BAR_WIDTH + BAR_GAP;
    var columnY = CLOUD_Y + INNER_GAP_Y + LINE_HEIGHT * 3 + (BAR_HEIGHT - columnHeight);
    var columnX = CLOUD_X + INNER_GAP_X + columnGap * i;

    ctx.fillRect(columnX, columnY, BAR_WIDTH, columnHeight);

    ctx.fillStyle = '#000';
    ctx.textBaseline = 'Hanging';
    ctx.fillText(players[i], columnX, CLOUD_Y + CLOUD_HEIGHT - INNER_GAP_Y);
    ctx.fillText(Math.round(times[i]), columnX, columnY - GAP);
  }
};
