import React, { useState, Component } from 'react';
import './Styles/Practice.css';
import Iframe from 'react-iframe';

function Practice() {
  const [presentation, setPresentation] = useState("");
  const [recording, setRecording] = useState(false);

  const openFile = (file: any) => {
    setPresentation(file.name);
    let name = (file.name);
  };

  return (
    <>
      <div className="Page">
        <div className="Display">
          <Iframe url="https://vclock.com"
            width="450px"
            height="800px"
            id="myId"
            className="myClassname"
            position="relative"
          />
        </div>
        <div style={{marginLeft: 600}}>
          <Iframe url="https://drive.google.com/"
            width="845px"
            height="830px"
            id="myId"
            className="myClassname"
            position="relative"
            styles={{screenLeft: 100}}
          />
        </div>
      </div>
    </>
  );
}

export default Practice;
