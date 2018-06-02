'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 20;

var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var BAR_GAP = 50;


var USER_COLOR = 'rgba(255, 0, 0, 1)';
var RANDOM_BLUE = 'rgba(0, 0, 255, ' + (Math.ceil(Math.random() * 9)) / 10 + ')';

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
  ctx.font = 'PT Mono, 16px';
  ctx.fillText('Ура, вы победили', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP * 3);

  var maxTime = getMaxElement(times);
  console.log(players.length);

  for (var i = 0; i < players.length; i++) {
    // ctx.fillStyle = RANDOM_BLUE;
    // ctx.fillRect(CLOUD_X + TEXT_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_GAP * i - BAR_HEIGHT, BAR_WIDTH, COLUMN_HEIGHT);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + TEXT_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_GAP);
    console.log(players[i])
  }



};


