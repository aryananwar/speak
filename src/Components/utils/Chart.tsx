import React from 'react';
import '../Styles/Chart.css';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
// @ts-ignore
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';


function Chart(inputs: any) {
  const times = ["Time1", "Time2", "Time3"];

  const paceData = [
    {x: 1, y: 30},
    {x: 2, y: 30},
    {x: 3, y: 30},
    {x: 4, y: 30},
    {x: 5, y: 30},
  ]

  return (
      <div className="Main">
        <div className="MainContent">
          <h3>{inputs.Title}</h3>
          <XYPlot height={500} width={450}>
            <XAxis title= {inputs.xaxis} style={{
              line: {stroke: '#ADDDE1'},
              ticks: {stroke: '#ADDDE1'},
              text: {stroke: 'none', fill: '#fff', fontWeight: 600}
            }} />
            <YAxis title={inputs.yaxis} style={{
              line: {stroke: '#ADDDE1'},
              ticks: {stroke: '#ADDDE1'},
              text: {stroke: 'none', fill: '#fff', fontWeight: 600}
            }} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <LineSeries data={inputs.data} color="red" fill="#fff"/>
          </XYPlot>
        </div>
      </div>
  );
}
export default Chart;