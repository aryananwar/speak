import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Practice from "./Components/Practice";
import Review from "./Components/Review";
import Settings from "./Components/Settings";
import Navigation from "./Components/utils/Navigation";


function App() {
  var test = ['Untitled Document.docx', 'Untitled Document.docx', 'Untitled Document.docx'];
  const [username, setUsername] = React.useState("default");

  React.useEffect(() => {
    setUsername("Aryan")
  }, [])

  return (
      <div className="App">
        <div className="navBar">
          <Navigation />
        </div>
        <Routes>

          <Route path="/" element={ <Dashboard name = {username} recentFiles = {test} /> } />
          <Route path="Practice" element={ <Practice /> } />
          <Route path="Review" element={ <Review name={username}/> } />
          <Route path="Settings" element={ <Settings /> } />
        </Routes>
      </div>
  )
}

export default App;