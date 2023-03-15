import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="resultContainer">
        <div className="resultLeft">
          <div className="resultLeftContent">
            <span>Your Result</span>
            <div className="resultLeftScoreContainer">
              <h1 className="resultLeftBigScore">76</h1>
              <span className="resultLeftTotal">of 100</span>
            </div>
            <span className="resultLeftResponse">Great</span>
            <span className="resultLeftFeedback">You scored higher than 65% of the people who have taken these tests.</span>
          </div>
        </div>
        <div className="resultRight">
          <div className="resultRightContent">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
