import React, { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import * as d3 from "d3";

function StackedBarGraph({ data }) {
  useEffect(() => {
    // if (data.length === 0) return;

    change();
  }, []);

  const chartRef = useRef();

  const change = () => {
    d3.select(chartRef.current).selectAll('*').remove();
    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const width = 350 - margin.left - margin.right;
    const height = 250 - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    svg.selectAll("*").remove();

    const colorScale = d3.scaleOrdinal().range(["#7fc97f", "#03C988"]);

    const keys = ["amountIn", "amountOut"];

    const stackedData = d3.stack().keys(keys)(data);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.category))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(stackedData, (d) => d3.max(d, (dd) => dd[1]))])
      .range([height, 0]);
    svg
      .append("g")
      .selectAll("g")
      .data(stackedData)
      .enter()
      .append("g")
      .attr("fill", (d) => colorScale(d.key))
      .selectAll("rect")
      .data((d) => d)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.data.category))
      .attr("y", (d) => yScale(d[1]))
      .attr("id", "hh")
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth())
      .attr("rx", 2) // Horizontal radius for rounded corners
      .attr("ry", 2);

    svg
      .append("g")
      .attr("transform", `translate(0,210)`)
      .call(d3.axisBottom(xScale));

      svg.selectAll('.domain').style('display', 'none');

    console.log("@@@@@@@@@@");
  };

  return (
    <>
      {/* <button type="button" onClick={change} >Click</button> */}
      <div className="flex justify-between items-center shadow-md py-3 px-3">
        <div>Checking Account</div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 shadow-lg p-2">
            Manage
            <IoIosArrowDown />
          </div>
          <div className="flex items-center gap-2 shadow-lg p-2">
            Manage
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div ref={chartRef}></div>
    </>
  );
}

export default StackedBarGraph;
