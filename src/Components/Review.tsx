import React from 'react';
import './Styles/Review.css';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import Chart from './utils/Chart';
import Iframe from 'react-iframe'

function Review(inputs: any) {
  const times = ["1636894291", "1636893357"];
  const [selected, setSelected] = React.useState("1636894291");

  const paceData = [
    {x: 1, y: 152},
    {x: 2, y: 153},
    {x: 3, y: 152},
    {x: 4, y: 156},
    {x: 5, y: 149}
  ]

  const paceData2 = [
    {x: 1, y: 154},
    {x: 2, y: 152},
    {x: 3, y: 153},
    {x: 4, y: 151},
    {x: 5, y: 145}
  ]

  if (selected == "1636894291") {
    return (
      <>
        <div className="Page">
          <div className="Dashboard">
            <Dropdown
              placeholder="Select an option"
              options={times}
              value="one"
              onSelect={(value) => setSelected("1636893357")} 
            />
          </div> 
        </div> 
        <Chart xaxis = {"Minutes"} yaxis = {"WPM"} data={paceData} />
        <div className="Specifics">
          <h3>Specifics</h3>
          <p>
            Duration: 5.00 <br />
            Average Pace: 152 WPM <br />
            Fillers <br />
            Um: 4 <br />
            Uh: 2
          </p>
        </div>
        <div className="Playback">
          <h3>Preview</h3>
          <Iframe url="https://www.youtube.com/embed/vk60jnf4MDs"
            width="300px"
            height="450px"
            id="myId"
            className="myClassname"
            position="relative"
          />
        </div>
        <div className="Document">
          <h3>Document</h3>
          <Iframe url="https://drive.google.com/"
            width="445px"
            height="630px"
            id="myId"
            className="myClassname"
            position="relative"
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="Page">
          <div className="Dashboard">
            <Dropdown
              placeholder="Select an option"
              options={times}
              value="one"
              onSelect={(value) => setSelected("1636894291")} />
          </div> 
        </div> 
        <Chart xaxis = {"Minutes"} yaxis = {"WPM"} data={paceData2} />
        <div className="Specifics">
          <h3>Specifics</h3>
          <p>
            Duration: 5.00 <br />
            Average Pace: 151 WPM <br />
            Fillers <br />
            Um: 3 <br />
            Uh: 1
          </p>
        </div>
        <div className="Playback">
          <h3>Preview</h3>
          <Iframe url="https://www.youtube.com/embed/vk60jnf4MDs"
            width="300px"
            height="450px"
            id="myId"
            className="myClassname"
            position="relative"
          />
        </div>
        <div className="Document">
          <h3>Document</h3>
          <Iframe url="https://drive.google.com/"
            width="445px"
            height="630px"
            id="myId"
            className="myClassname"
            position="relative"
          />
        </div>
      </>
    );
  }
}

export default Review;