/*jshint esversion: 6 */
(function () {
  'use strict';
  console.log('inserting canvas into DOM...');
  var skribblrcanvasWrap = $('<div id="skribblrcanvasWrap"></div>');
  skribblrcanvasWrap.css({position:'absolute', left:'0px', top:'0px', width:'100%', height:'100%', 'z-index':'1000'});
  $('body').append(skribblrcanvasWrap);
  var skribblrCanvas = $('<canvas id="skribblrCanvas"></canvas>');
  skribblrCanvas.css({overflow:'visible',
    position:'absolute',
    left:'0px',
    top:'0px',
    width: skribblrcanvasWrap.innerWidth()+'px',
    height: skribblrcanvasWrap.innerHeight()+'px'
  });
  skribblrCanvas.attr('width', skribblrcanvasWrap.innerWidth());
  skribblrCanvas.attr('height', skribblrcanvasWrap.innerHeight());
  $('#skribblrcanvasWrap').append(skribblrCanvas);
  $('#skribblrCanvas').sketch({toolLinks:'true'});

  //TODO onResize event


  //TODO tool events
  var tools = $(`<div class="skrb-tools-wrap"><div class="skrb-tools">
      <a href="#skribblrCanvas" data-download="png" style="float: right">Download</a>
      <a href="#skribblrCanvas" data-color="#f00" style="background: #f00;">&nbsp;</a>
      <a href="#skribblrCanvas" data-color="#ff0" style="background: #ff0;">&nbsp;</a>
      <a href="#skribblrCanvas" data-color="#0f0" style="background: #0f0;">&nbsp;</a>
      <a href="#skribblrCanvas" data-color="#0ff" style="background: #0ff;">&nbsp;</a>
      <a href="#skribblrCanvas" data-color="#00f" style="background: #00f;">&nbsp;</a>
      <a href="#skribblrCanvas" data-color="#f0f" style="background: #f0f;">&nbsp;</a>
      <a href="#skribblrCanvas" data-color="#000" style="background: #000;">&nbsp;</a>
      <a href="#skribblrCanvas" data-color="#fff" style="background: #fff;">&nbsp;</a>
      <a href="#skribblrCanvas" data-size="3" style="background: #ccc">3</a>
      <a href="#skribblrCanvas" data-size="5" style="background: #ccc">5</a>
      <a href="#skribblrCanvas" data-size="10" style="background: #ccc">10</a>
      <a href="#skribblrCanvas" data-size="15" style="background: #ccc">15</a>
    </div></div>`);

  $('body').prepend(tools);

  //TODO Keyboard events
  // $(document).keypress(function(e) {
  //   if (e.which === 95) {
  //     console.log('you pressed -');
  //   } else if(e.which === 43) {
  //     console.log('you pressed +');
  //   }
  // });

})();
