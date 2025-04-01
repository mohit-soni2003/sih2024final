import React from 'react'
import "./Fact.css"
export default function Fact() {
  return (
    <>
    <div className="facts-container">
        <div className="facts-part1">
            <div className="fact-heading">Fact Of The Day</div>
            <div className="fact-display">Olympus Mons on Mars is 2.5x taller than Everest !!!</div>
            <div className="curious_question">Curious Question</div>
            <div className="curious_question_display">What if Earth had rings like saturn?</div>
            <div className="curious_ques_img"><img src="/saturn.png" alt="" /></div>
        </div>
        <div className="facts-part2">
        
        <video className="video-content" autoPlay loop muted playsInline>
        <source src="/Home_back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
    </div>
    </>
  )
}
