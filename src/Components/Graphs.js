import React from 'react';
import LineGraph from '../Components/LineGraph';
import BarGraph from '../Components/BarGraph'; 
import StackedBarGraph from './StackedBarGraph';
import TbularData from './TbularData';

function Graphs() {

    const data = [
        { category: "Category 1", amountIn: 30, amountOut: 20 },
        { category: "Category 2", amountIn: 40, amountOut: 25 },
        { category: "Category 3", amountIn: 20, amountOut: 15 },
        // Add more data as needed
      ];

  return (
    <div className='mt-5 w-[95%] lg:flex justify-center items-center flex-wrap gap-3 sm:block'>
        <div className='lg:w-[48%] h-[50%] sm:w-full'>
            <LineGraph />
        </div>
        <div className='lg:w-[48%] h-[50%] sm:w-full'>
        <StackedBarGraph data={data} />
        </div >
        <div className='lg:w-[48%] h-[50%] sm:w-full'>
        <BarGraph />
        </div>
        <div className='lg:w-[48%] h-[50%] sm:w-full'>
            <TbularData />
        </div>
        {/* <LineGraph /> */}
        {/* <BarGraph /> */}
        {/*  */}
        {/* <StackedBarGraph data={data} /> */}
    </div>
  )
}

export default Graphs