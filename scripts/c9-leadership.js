//PLAYING WITH D3  : -)


var grid = d3.select("#grid")
	.append("svg")
	.attr("width","1410px")
	.attr("height","300px");

var row = grid.selectAll(".row")
	.data(gridData)
	.enter().append("g")
	.attr("class", "row");

var column = row.selectAll(".square")
	.data(function(d) { return d; })
	.enter().append("circle") //can be 'square'
	.attr("class","square")
	.attr("cx", function(d) { return d.x; })
	.attr("cy", function(d) { return d.y; })
	// .attr("width", function(d) { return d.width; })
	// .attr("height", function(d) { return d.height; })
  .attr("r", "5") //only for circle
	.style("fill", "#fff")
	.style("stroke", "lightgray")
  .style("stroke", "50%")
  .on('mouseover', function(d) {

    if ((d.click)%12 == 0 ) { d3.select(this).style("fill","#caf7f7"); }
    if ((d.click)%12 == 1 ) { d3.select(this).style("fill","#b8d3d3"); }
    if ((d.click)%12 == 2 ) { d3.select(this).style("fill","#99afaf"); }
    if ((d.click)%12 == 3 ) { d3.select(this).style("fill","#758787"); }
    if ((d.click)%12 == 4 ) { d3.select(this).style("fill","#576666"); }
    if ((d.click)%12 == 5 ) { d3.select(this).style("fill","#384242"); }
    if ((d.click)%12 == 6 ) { d3.select(this).style("fill","#1c2121"); }
    if ((d.click)%12 == 7 ) { d3.select(this).style("fill","#060707"); }
    if ((d.click)%12 == 8 ) { d3.select(this).style("fill","black"); }
    if ((d.click)%12 == 9 ) { d3.select(this).style("fill","black"); }
    if ((d.click)%12 == 10 ) { d3.select(this).style("fill","black"); }
    if ((d.click)%12 == 11 ) { d3.select(this).style("fill","black"); }

    if ((d.click) < 11) {
    d.click ++;   };
	})

	.on('click', function(d) {
		d3.select(this).style('fill', '#ce5a57');
	});



  function gridData() {
  	var data = new Array();
  	var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
  	var ypos = 1;
  	var width = 10;
  	var height = 10;
    var click= 0;

  	// iterate for rows
  	for (var row = 0; row < 29; row++) {
  		data.push( new Array() );

  		// iterate for cells/columns inside rows
  		for (var column = 0; column < 180; column++) {
  			data[row].push({
  				x: xpos,
  				y: ypos,
  				width: width,
  				height: height,
          click: click
  			})
  			// increment the x position. I.e. move it over by 50 (width variable)
  			xpos += width;
  		}
  		// reset the x position after a row is complete
  		xpos = 1;
  		// increment the y position for the next row. Move it down 50 (height variable)
  		ypos += height;
  	}
  	return data;

  }
