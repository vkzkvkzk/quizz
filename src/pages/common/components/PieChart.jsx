import React, { useEffect } from "react";
import * as d3 from "d3";

function PieChart({ data, outerRadius = 100, innerRadius = 100 }) {
    const margin = {
        top: 50, right: 50, bottom: 50, left: 50,
    };

    const width = 2 * outerRadius + margin.left + margin.right;
    const height = 2 * outerRadius + margin.top + margin.bottom;

    const colorScale = d3
        .scaleSequential()
        .interpolator(d3.interpolateCool)
        .domain([0, data.length]);

    useEffect(() => {
        function drawChart() {
            d3.select('#pie-container')
                .select('svg')
                .remove();

            const svg = d3
                .select('#pie-container')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', `translate(${width / 2}, ${height / 2})`);

            const arcGenerator = d3
                .arc()
                .innerRadius(innerRadius)
                .outerRadius(0);

            const pieGenerator = d3
                .pie()
                .padAngle(0)
                .value((d) => d.value);

            const arc = svg
                .selectAll()
                .data(pieGenerator(data))
                .enter();

            arc
                .append('path')
                .attr('d', arcGenerator)
                .style('fill', (_, i) => colorScale(i))
                .style('stroke', '#ffffff')
                .style('stroke-width', 3);

            arc
                .append('text')
                .attr('text-anchor', 'middle')
                .attr('alignment-baseline', 'middle')
                .text((d) => `${d.data.label} - ${d.data.value}`)
                .style('fill', "#000000")
                .attr('transform', (d) => {
                    const [x, y] = arcGenerator.centroid(d);
                    return `translate(${x}, ${y})`;
                });
        }

        drawChart();
    }, [colorScale, data, height, innerRadius, width]);

    return <div id="pie-container" />;
}

export default PieChart;