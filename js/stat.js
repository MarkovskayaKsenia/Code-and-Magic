"use strict"
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GIST_COL_GAP = 50;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var TITLE_CONTENT = ["Ура вы победили!","Список результатов:"];
var GIST_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
  var delta = 10;

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y - delta);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH + delta, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_HEIGHT + delta);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x - delta, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.fill();

};

var cloudTitle = function(ctx, arr) {
  var titleHeight = CLOUD_Y + GAP + FONT_GAP + (FONT_GAP + GAP) * (arr.length - 1);;
  ctx.fillStyle = "#000000";
  ctx.font = '16px PT Mono';
  ctx.textAlign = "center";
  for (var i = 0; i < arr.length; i++) {
    ctx.fillText(arr[i], CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + GAP + FONT_GAP +(FONT_GAP + GAP) * i);
  }

 return titleHeight;
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for(var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#ffffff");

  var titleGap = + cloudTitle(ctx,TITLE_CONTENT);



  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++){
    ctx.textAlign = "left";
    ctx.fillStyle = "#000000";
    ctx.fillText(players[i], CLOUD_X + GIST_COL_GAP + (BAR_WIDTH + GIST_COL_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);

    if(players[i]==="Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      var rand = Math.random();
      var opacity = ( rand < 0.1) ? rand + 0.1 : rand;
      ctx.fillStyle = "rgb(0, 0, 255, " + opacity + ")";

    }
    ctx.fillRect(CLOUD_X + GIST_COL_GAP + (BAR_WIDTH + GIST_COL_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - GAP - times[i]/maxTime*GIST_HEIGHT, BAR_WIDTH , times[i]/maxTime*GIST_HEIGHT);

 }
};
