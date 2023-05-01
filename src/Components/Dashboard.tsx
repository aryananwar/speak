import React from 'react';
import Card from "./utils/Card";
import './Styles/Dashboard.css';


function greeting()
{
  var d = new Date();
  var current = d.getHours();
  if (current < 12)
  {
    return "Good Morning, ";
  }
  if (current < 5)
  {
    return "Good Afternoon, ";
  }
  else 
  {
    return "Good Evening, ";
  }
}

function Dashboard(inputs: any) {
  return (
   
    <div className="App">
      <p className="Welcome-Dashboard">
           {greeting()} {inputs.name}
        </p>
    <header className="App-header">


    <div className = "c1Text">
          <p > Overall Rating</p>
            <p className = "c1BodyText"> {inputs.rating} </p>
            </div>
  

      <Card width = {"18.5%"} height = {"35%"} left = {"15%"} top = {"16%"}/>

      <div className = "c2Text">
          <p >Goals</p>
            
            </div>
   
      <Card width = {"18.5%"} height = {"35%"} left = {"15%"} top = {"58%"}/>
  


        <Card width = {"18.5%"} height = {"35%"} left = {"38%"} top = {"16%"}/>

        <div className = "c3Text">
          <p >Past Week Progress</p>
            
            </div>

            <div className = "line"> </div>

        <Card width = {"18.5%"} height = {"13%"} left = {"38%"} top = {"58%"}/>
        <div className = "square"> </div>
        <div className = "square2"> </div>
        
        <div className = "c4Text">
          <p >Practice Schedule</p>
            </div>
            <p className = "c4BodyText"> NEXT PRACTICE </p>
            <p className = "nextPractice" > SATURDAY {inputs.nextPractice}</p>
          <p className = "c4BodyText2"> YOUR TEST DATE {inputs.testDate} </p>
          <p className = "testDate"> SATURDAY {inputs.testDate} </p>

 
        <Card width = {"18.5%"} height = {"53%"} left = {"61%"} top = {"16%"}/>
        <p className = "c5Text"> Recent Files</p>
        <div className = "recentFiles">
          {inputs.recentFiles.map((file: any) => <li>{file}</li>)}
        </div>



  </header>
  </div>
 
  );
}

export default Dashboard;
