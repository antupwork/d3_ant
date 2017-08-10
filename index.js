
import * as d3 from "d3";

// import dataJson from "./us.json";
// console.log(dataJson)
// var width = document.body.clientWidth,
//     height = 500,
//     centered;

// var projection = d3.geoAlbersUsa()
//     .scale(1070)
//     .translate([width / 2, height / 2]);

// var path = d3.geoPath()
//     .projection(projection);

// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height);

// svg.append("rect")
//     .attr("class", "background")
//     .attr("width", width)
//     .attr("height", height)
//     .on("click", clicked);

// var g = svg.append("g");


//   g.append("g")
//       .attr("id", "states")
//     .selectAll("path")
//       .data(topojson.feature(dataJson, dataJson.objects.states).features)
//     .enter().append("path")
//       .attr("d", path)
//       .on("click", clicked);

//   g.append("path")
//       .datum(topojson.mesh(dataJson, dataJson.objects.states, function(a, b) { return a !== b; }))
//       .attr("id", "state-borders")
//       .attr("d", path);

// function clicked(d) {
//   var x, y, k;

//   if (d && centered !== d) {
//     var centroid = path.centroid(d);
//     x = centroid[0];
//     y = centroid[1];
//     k = 4;
//     centered = d;
//   } else {
//     x = width / 2;
//     y = height / 2;
//     k = 1;
//     centered = null;
//   }

//   g.selectAll("path")
//       .classed("active", centered && function(d) { return d === centered; });

//   g.transition()
//       .duration(750)
//       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
//       .style("stroke-width", 1.5 / k + "px");
// }
// 
// var context = d3.select("canvas").node().getContext("2d"),
var context = d3.select(document.getElementById("canvas")).node().getContext("2d"),
    path = d3.geoPath(d3.geoOrthographic(), context);
    // context.attr({width:document.body.clientWidth})
    console.log(context)

d3.json("https://unpkg.com/world-atlas@1/world/110m.json", function(error, world) {
  if (error) throw error;

  context.beginPath();
  path(topojson.mesh(world));
  context.stroke();
});
