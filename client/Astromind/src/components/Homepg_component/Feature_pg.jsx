import React from 'react'
import "./Feature_pg.css"
import { Link } from 'react-router-dom'
export default function Feature_pg() {
  return (
    <>
      <div className="home-page2">
        <h1 className='feature-heading'>Features</h1>
        <div className="homepg2-container">

            <div className="feature-card">
          <Link to="/3dmodel">
              <div className="feature-img">
                <img src="/satellite.png" alt="" />
              </div>
          </Link>
              <div className="feature-name"> 3D Models</div>
            </div>

          <div className="feature-card">
          <Link to="/quiz">
            <div className="feature-img">
              <img src="/quiz.png" alt="" />
            </div>
          </Link>

            <div className="feature-name"> Quiz</div>
          </div>
          <div className="feature-card">
            <Link to = "/marssimulation">
            <div className="feature-img">
              <img src="/virtuallab.png" alt="" />
            </div>
            </Link>
            <div className="feature-name"> Virtual Simulation</div>
          </div>
          <div className="feature-card">
            <div className="feature-img">
            <Link to="/games">
              <img src="/games.png" alt="" />
            </Link>
            </div>
            <div className="feature-name">Games</div>
          </div>
          <div className="feature-card">
            <div className="feature-img">
            <Link to="https://avisek.github.io/Mars-Orbiter-Mission/">
              <img src="/main_timeline.webp" alt="" />
            </Link>
            </div>
            <div className="feature-name">Interactive Space Timeline</div>
          </div>
          <div className="feature-card">
            <Link to="/carrier">
            <div className="feature-img">
              <img src="/carrierguidance.png" alt="" />
            </div>
            </Link>
            <div className="feature-name">Carrier Guidance</div>
          </div>
          <div className="feature-card">
            <div className="feature-img">
              <img src="/fitness.png" alt="" />
            </div>
            <div className="feature-name"> Fitness</div>
          </div>
        </div>
      </div>
    </>
  )
}