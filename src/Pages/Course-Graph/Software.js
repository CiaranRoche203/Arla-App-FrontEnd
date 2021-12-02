import * as d3 from 'd3'
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';


const VivaGraph = () => {
  const [information, getInformation] = useState([]);

  var name = []

  var [array, getArray] = useState([]);

  var size = []
  var links = [];

  useEffect(() => {
    getAllInformation();
  }, []);

  const getAllInformation = () => {
    axios.get(`http://localhost:3001/course/all/Bachelor of Science (Honours) in Computing in Software Development`)
      .then((response) => {
        //console.log(response.data.person.length);
        size = response.data.person.length;
        //size.push(response.data.person.length)
        for (var i = 0; i < response.data.person.length; i++) {
          var myInfo = response.data.person[i];
          array.push(myInfo.name)

          //bio = myInfo.people
          //console.log(array)
          getInformation(myInfo);
          //getArray(array);
        }

      })
  }
  //.console.log(size)
  //console.log(size ,"is")
  console.log(array.length, " is this much")
  for (var j = 0; j < array.length; j++) {
    //console.log(array)
    links.push({
      source: "Bachelor of Science (Honours) in Computing in Software Development",
      target: array[j]
    });
  }
  console.log("Here", links);


  //console.log(links)

  var nodes = {};

  // Compute the distinct nodes from the links.
  links.forEach(function (link) {
    link.source = nodes[link.source] || (nodes[link.source] = { name: link.source });
    link.target = nodes[link.target] || (nodes[link.target] = { name: link.target });
  });

  var width = 2000,
    height = 1000;

  var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(200)
    .charge(-300)
    .on("tick", tick)
    .start();

  var svg = d3.select("div").append("svg")
    .attr("width", width)
    .attr("height", height);

  // Per-type markers, as they don't inherit styles.


  var path = svg.append("g").selectAll("path")
    .data(force.links())
    .enter().append("path")
    .attr("class", function (d) { return "link " + d.type; })
    .attr("marker-end", function (d) { return "url(#" + d.type + ")"; });

  var circle = svg.append("g").selectAll("circle")
    .data(force.nodes())
    .enter().append("circle")
    .attr("r", 20)
    .style('fill', 'green')
    .on('mouseover', function (d) {
      var nodeSelection = d3.select(this).style('fill', 'blue');

    })
    .on("mouseout", function () {
      var nodeSelection = d3.select(this).style('fill', 'green');
    })
    .call(force.drag);

  var text = svg.append("g").selectAll("text")
    .data(force.nodes())
    .enter().append("text")
    .attr("x", 8)
    .attr("y", ".31em")
    .style("font-size", "1.5em")
    .text(function (d) { return d.name; });
    

  // Use elliptical arc path segments to doubly-encode directionality.
  function tick() {
    path.attr("d", linkArc);
    circle.attr("transform", transform);
    text.attr("transform", transform);
  }

  function linkArc(d) {
    var dx = d.target.x - d.source.x,
      dy = d.target.y - d.source.y,
      dr = Math.sqrt(dx * dx + dy * dy);
    return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
  }

  function transform(d) {
    return "translate(" + d.x + "," + d.y + ")";
  }
  function buttonClick(d) {
    console.log("clicked on node")
  }


  return (
    <div id="chart1">


    </div>
  );
}
export default VivaGraph;