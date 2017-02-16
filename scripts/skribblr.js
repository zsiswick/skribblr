/*jshint esversion: 6 */
(function () {
  console.log('inserting svg into DOM...');
  var skribblrcanvasWrap = $('<div id="skribblrcanvasWrap"></div>');
  skribblrcanvasWrap.css({position:'absolute', left:'0px', top:'0px', width:'100%', height:'100%', 'z-index':'1000'});
  $('body').append(skribblrcanvasWrap);

  //TODO onResize event


  //TODO tools
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


  /**
   * D3 Skribble
   */

  // Globals
  var dragging = false, drawing = false, startPoint, points, lastPath, lineData = [];

  // Canvas
  var svg = d3.select('#skribblrcanvasWrap').append('svg')
      .attr('height', skribblrcanvasWrap.innerHeight())
      .attr('width', skribblrcanvasWrap.innerWidth())
      .style('height', skribblrcanvasWrap.innerHeight()+'px')
      .style('width', skribblrcanvasWrap.innerWidth()+'px');

  // Behaviors
  var dragger = d3.behavior.drag()
    .on('drag', handleDrag)
    .on('dragend', function(d){
      lineData = [];
    });
  svg.call(dragger);

  // Finds the last element in the collection
  d3.selection.prototype.last = function() {
    var last = this.size() - 1;
    return d3.select(this[0][last]);
  };

  function handleDrag() {
    lineData.push(d3.mouse(this));

    var lineFunction = d3.svg.line()
      .x(function(d) { return d[0]; })
      .y(function(d) { return d[1]; })
      .interpolate('basis');

    lastPath.attr('d', lineFunction(lineData));
  }

  svg.on('mousedown', function() {
    svg.append('path')
      .attr('fill', 'transparent')
      .attr('stroke', 'black');

    lastPath = svg.selectAll('path').last();
  });

})();
