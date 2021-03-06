import * as d3 from 'd3'
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import CustomPopup from '../../Components/CustomPopup';

import { Form, Card, Button, Row, Col, Alert, Container } from "react-bootstrap";
import 'bootstrap';

const DigitalMedia = () => {
    //set states and arrays
    const [information, getInformation] = useState([]);
    const [visibility, setVisibility] = useState(false);
    var name = []

    var [array, getArray] = useState([]);
    var [nameArray, getNameArray] = useState([]);

    var size = []
    var links = [];

    //redirect function
    const redirect = () => {
        window.location.href = '/messenger'
    }
    //useEffect, get the information
    useEffect(() => {
        getAllInformation();
    }, []);
    //set the visibility of popup to false at start
    const popupCloseHandler = () => {
        setVisibility(false);
    };

    const getAllInformation = () => {
        axios.get(`http://localhost:3001/course/all/DigitalMedia`)
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
            source: "Digital Media",
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
        .on('click', function (d) {
            nameArray.unshift(d.name)
            setVisibility(true)
            var nodeSelection = d3.select(this).style('fill', 'blue');
            d3.select("body")
                .append("h2")
                .style("position", "relative")
                .style("justify-content", "center")
                .style("z-index", "10")
                .style("visibility", "visible")
                .style("background", "grey")
            //popupName = d.name;
            //console.log(popupName);
            console.log("Name array" + nameArray);

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


    return (
        <div>

            <CustomPopup
                onClose={popupCloseHandler}
                show={visibility}
                title={nameArray[0]}
                {...console.log("name in the popup: ")}
            >
                <Button onClick={redirect}>
                    Contact {nameArray[0]} on ARLA's Messenge
                </Button>
            </CustomPopup>
        </div>
    );
}
export default DigitalMedia;