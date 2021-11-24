import * as d3 from 'd3'
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import './../Styles/Register.css';
const VivaGraph = () => {
  const [information, getInformation] = useState([]);

  var name = []
  
  var [array, getArray] = useState([]);

  useEffect(() => {
    getAllInformation();
  }, []);


  const getAllInformation = () => {
    axios.get(`http://localhost:3001/course/all/Bachelor of Science (Honours) in Computing in Software Development`)
      .then((response) => {
        //console.log(response);
        for (var i = 0; i < 2; i++) {
          var myInfo = response.data.person[i];
          array.push(myInfo.name)
          
          //bio = myInfo.people
          console.log(array)
          getInformation(myInfo);
          getArray(array);
        }
      })
  }
  

  var links = [
    { source:" Bachelor of Science (Honours) in Computing in Software Development" , target: array[0] },
    { source:" Bachelor of Science (Honours) in Computing in Software Development" , target: array[1] },
    
  ];
  console.log(links)

  var nodes = {};

  // Compute the distinct nodes from the links.
  links.forEach(function (link) {
    link.source = nodes[link.source] || (nodes[link.source] = { name: link.source });
    link.target = nodes[link.target] || (nodes[link.target] = { name: link.target });
  });

  var width = 1000,
    height = 500;

  var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(60)
    .charge(-300)
    .on("tick", tick)
    .start();

  var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

  // Per-type markers, as they don't inherit styles.
  svg.append("defs").selectAll("marker")
    .data(["suit", "licensing", "resolved"])
    .enter().append("marker")
    .attr("id", function (d) { return d; })
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5");

  var path = svg.append("g").selectAll("path")
    .data(force.links())
    .enter().append("path")
    .attr("class", function (d) { return "link " + d.type; })
    .attr("marker-end", function (d) { return "url(#" + d.type + ")"; });

  var circle = svg.append("g").selectAll("circle")
    .data(force.nodes())
    .enter().append("circle")
    .attr("r", 6)
    .call(force.drag);

  var text = svg.append("g").selectAll("text")
    .data(force.nodes())
    .enter().append("text")
    .attr("x", 8)
    .attr("y", ".31em")
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
  return (
    <div>
     

    </div>
  );
}
export default VivaGraph;