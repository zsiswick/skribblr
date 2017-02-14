'use strict';

(function () {
  console.log('inserting canvas into DOM...');
  var canvasWrap = $('<div id="canvasWrap"></div>');
  canvasWrap.css({position:'absolute', left:'0px', top:'0px', width:'100%', height:'100%', 'z-index':'1000'});
  $('body').append(canvasWrap);
  var sketchCanvas = $('<canvas id="sketchCanvas"></canvas>');
  sketchCanvas.css({overflow:'visible',
    position:'absolute',
    left:'0px',
    top:'0px',
    width: canvasWrap.innerWidth()+'px',
    height: canvasWrap.innerHeight()+'px'
  });
  sketchCanvas.attr('width', canvasWrap.innerWidth());
  sketchCanvas.attr('height', canvasWrap.innerHeight());
  $('#canvasWrap').append(sketchCanvas);
  $('#sketchCanvas').sketch();

  //TODO onResize event
})();
