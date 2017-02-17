/*jshint esversion: 6 */
(function () {

  /**
   * D3 Skribblr
   */

  // Globals
  var lastPath, lineData = [], skrbColor, skrbStrokeWidth = 2;

  console.log('inserting svg into DOM...');
  var skribblrcanvasWrap = $('<div id="skribblrcanvasWrap"></div>');
  skribblrcanvasWrap.css({position:'absolute', left:'0px', top:'0px', width:'100%', height:'100%', 'z-index':'1000'});
  $('body').append(skribblrcanvasWrap);

  //TODO onResize event


  //TODO tools
  var tools = $(`<div class="skrb-tools-wrap"><div class="skrb-tools">
      <a href="#skribblrCanvas" data-color="#f00" style="background: #f00;">&nbsp;</a>
      <a href="#skribblrCanvas" data-color="#ff0" style="background: #ff0;">&nbsp;</a>
      <a href="#skribblrCanvas" data-color="#0f0" style="background: #0f0;">&nbsp;</a>
      <a href="#skribblrCanvas" data-color="#0ff" style="background: #0ff;">&nbsp;</a>
      <a href="#skribblrCanvas" data-color="#00f" style="background: #00f;">&nbsp;</a>
      <a href="#skribblrCanvas" data-color="#f0f" style="background: #f0f;">&nbsp;</a>
      <a href="#skribblrCanvas" data-color="#000" style="background: #000;">&nbsp;</a>
      <a href="#skribblrCanvas" data-color="#fff" style="background: #fff;">&nbsp;</a>
      <a href="#skribblrCanvas" data-size="2" style="background: #ccc">2</a>
      <a href="#skribblrCanvas" data-size="5" style="background: #ccc">5</a>
      <a href="#skribblrCanvas" data-size="10" style="background: #ccc">10</a>
      <a href="#skribblrCanvas" data-size="15" style="background: #ccc">15</a>
    </div></div>`);

  $('body').prepend(tools);

  var tools = d3.selectAll('.skrb-tools a')
      .on('mousedown', function() {
        var el = d3.select(this);
        skrbColor = el.attr('data-color') !== null ? el.attr('data-color') : skrbColor;
        skrbStrokeWidth = el.attr('data-size') !== null ? el.attr('data-size') : skrbStrokeWidth;
        console.log('skrbStrokeWidth: ', skrbStrokeWidth);
        console.log('skrbColor: ', skrbColor);
      });

  //TODO Keyboard events
  // $(document).keypress(function(e) {
  //   if (e.which === 95) {
  //     console.log('you pressed -');
  //   } else if(e.which === 43) {
  //     console.log('you pressed +');
  //   }
  // });


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
      .attr('stroke', skrbColor)
      .attr('stroke-width', skrbStrokeWidth);

    lastPath = svg.selectAll('path').last();
  });

})();
