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
var BAR_GAP = 50;
var COLUMN_WIDTH = 40;

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

var renderColumn = function (ctx, players, times, index) {
  var columnHeight = (BAR_HEIGHT * times[index]) / getMaxElement(times);
  var columnGap = COLUMN_WIDTH + BAR_GAP;
  var columnY = CLOUD_Y + INNER_GAP_Y + LINE_HEIGHT * 3 + (BAR_HEIGHT - columnHeight);
  var columnX = CLOUD_X + INNER_GAP_X + columnGap * index;

  ctx.fillRect(columnX, columnY, COLUMN_WIDTH, columnHeight);

  ctx.fillStyle = '#000';
  ctx.textBaseline = 'Hanging';
  ctx.fillText(players[index], columnX, CLOUD_Y + CLOUD_HEIGHT - INNER_GAP_Y);
  ctx.fillText(Math.round(times[index]), columnX, columnY - GAP);
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили', CLOUD_X + INNER_GAP_X, CLOUD_Y + INNER_GAP_Y);
  ctx.fillText('Список результатов:', CLOUD_X + INNER_GAP_X, CLOUD_Y + INNER_GAP_Y + LINE_HEIGHT);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = getRandomBlue();
    if (players[i] === 'Вы') {
      ctx.fillStyle = USER_COLOR;
    }

    renderColumn(ctx, players, times, i);
  }
};
