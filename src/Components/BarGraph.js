import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

function BarGraph() {
  // const svgRef = useRef()

  const initialData = [
    { name: "A", value: 100 },
    { name: "B", value: 200 },
    { name: "C", value: 500 },
    { name: "D", value: 150 },
    { name: "E", value: 300 },
  ];

  const chartRef = useRef();
  const [data,setData] = useState(initialData)

  useEffect(() => {
    d3.select(chartRef.current).selectAll('*').remove();
    if (data.length === 0) return;

    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const width = 350 - margin.left - margin.right;
    const height = 250 - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const colorScale = d3.scaleOrdinal().range(['#4CAF50']);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, width])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.name))
      .attr('y', (d) => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d.value))
      .attr('rx', 10) // Horizontal radius for rounded corners at the top
      .attr('transform', 'translate(0, -15)') // Add gap at the bottom

      .style('fill', (d, i) => colorScale(i));

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

      svg.selectAll('.domain').style('display', 'none');

    return () => {
      // Cleanup code, if needed
    };
  }, [data]);

  const randomData = () => {
    const newData = data.map((d) => {
      d.value = Math.floor(Math.random() * (20 + 1));
      return d;
    });
    console.log(newData);
    setData(newData);
  };

  return (
  <>
  <div ref={chartRef}></div>
  <button type='button'onClick={randomData}>Click</button>
  </>
  );
};


export default BarGraph