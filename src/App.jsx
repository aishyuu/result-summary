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
            <span className="resultRightHeader">Summary</span>
            <div className="resultRightAnalysisContainer">
              <div className="resultRightReaction resultRightAnalysis">
                <img src="/img/icon-reaction.svg" alt="" />
                <span>Reaction</span>
                <div className="resultRightScoreContainer">
                  <span className="resultRightScore">80</span>
                  <span className="resultRightTotal">/</span>
                  <span className="resultRightTotal">100</span>
                </div>
              </div>

              <div className="resultRightMemory resultRightAnalysis">
                <img src="/img/icon-memory.svg" alt="" />
                <span>Memory</span>
                <div className="resultRightScoreContainer">
                  <span className="resultRightScore">92</span>
                  <span className="resultRightTotal">/</span>
                  <span className="resultRightTotal">100</span>
                </div>
              </div>

              <div className="resultRightVerbal resultRightAnalysis">
                <img src="/img/icon-verbal.svg" alt="" />
                <span>Verbal</span>
                <div className="resultRightScoreContainer">
                  <span className="resultRightScore">61</span>
                  <span className="resultRightTotal">/</span>
                  <span className="resultRightTotal">100</span>
                </div>
              </div>

              <div className="resultRightVisual resultRightAnalysis">
                <img src="/img/icon-visual.svg" alt="" />
                <span>Verbal</span>
                <div className="resultRightScoreContainer">
                  <span className="resultRightScore">72</span>
                  <span className="resultRightTotal">/</span>
                  <span className="resultRightTotal">100</span>
                </div>
              </div>
            </div>
            <button className="continue">Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
