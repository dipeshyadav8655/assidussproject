import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import * as d3 from "d3";

function LineGraph() {
  const initialData = [
    {
      name: "car",
      value: 7,
    },
    {
      name: "c",
      value: 5,
    },
    {
      name: "ar",
      value: 8,
    },
    {
      name: "r",
      value: 9,
    },
    {
      name: "cy",
      value: 1,
    },
  ];
  const width = 350;
  const height = 250;
  const padding = 20;
  const maxValue = 20;

  const [chartData, setChartData] = useState(initialData);
  const svgRef = useRef();

  useEffect(() => {
    const xScale = d3
      .scalePoint()
      .domain(
        chartData.map((data) => {
          return data.name;
        })
      )
      .range([0 + padding, width - padding]);

    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(chartData, (data) => {
          return data.value;
        }),
      ])
      .range([height - padding, 0 + padding]);
    console.log("star - end", yScale(0), yScale(10));

    const line = d3
      .line()
      .x((data) => {
        return xScale(data.name);
      })
      .y((data) => {
        return yScale(data.value);
      })
      .curve(d3.curveMonotoneX);
    console.log(line(chartData));

    d3.select(svgRef.current)
      .select("path")
      .attr("d", () => {
        return line(chartData);
      })
      .attr("fill", "none")
      .attr("stroke", "#47B747");
    const xAxis = d3.axisBottom(xScale);

    d3.select(svgRef.current)
      .append("g")
      .attr("transform", `translate(0,${height - padding})`)
      .attr("id", "xAxis")
      .call(xAxis);
      // svg.selectAll('.domain').style('display', 'none');
      d3.select(svgRef.current).selectAll('.domain').style('display', 'none');
  }, [chartData]);
  const randomData = () => {
    const newData = chartData.map((data) => {
      data.value = Math.floor(Math.random() * (maxValue + 1));
      return data;
    });
    console.log(newData);
    setChartData(newData);
  };
  return (
    <div>
      <div className="flex justify-between items-center shadow-md py-3 px-3">
        <div>Checking Account</div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 shadow-md p-2 cursor-pointer" onClick={randomData}>
            Manage
            <IoIosArrowDown onClick={randomData} />
          </div>
          <div className="flex items-center gap-2 shadow-md p-2" onClick={randomData}>
            January
            <IoIosArrowDown onClick={randomData}/>
          </div>
        </div>
      </div>
      <svg id="chart" ref={svgRef} height={height} width={width}>
        {/* <rect width="50" height="50" fill='black'/> */}
        <path d="" fill="none" stroke="green" strokeWidth="2" />
      </svg>
      <button type="button" onClick={randomData}>
        click
      </button>
    </div>
  );
}

export default LineGraph;
