import React from 'react'
import "./Success_stories.css"

export default function Success_stories() {
    return (
        <>
        <div className='success-story'></div>
         <div className="success-stories">
            <div className="stories-container">
                <div className="stories-row">
                    <div className="story-part1">
                        <div className="story-desc">Kalpana Chawla, the first Indian-origin woman to fly into space, is a beacon of inspiration for Indian girls, proving that dreams have no limits. Her journey from a small town in Haryana to becoming a NASA astronaut exemplifies courage, dedication, and the power of education. She remains a symbol of empowerment.</div>
                        <div className="story-name">Celestial Pioneer</div>
                        <div className="story-nam">Kalpana Chawla</div>

                    </div>
                    <div className="story-part2">
                        <img src="/home_pg/kalpana.png" alt="" />
                    </div>
                </div>
                <div className="stories-row">
                    <div className="story-part2">
                        <img src="/home_pg/apj.png" alt="" />
                    </div>
                    <div className="story-part1">
                        <div className="story-desc">Kalpana Chawla, the first Indian-origin woman to fly into space, is a beacon of inspiration for Indian girls, proving that dreams have no limits. Her journey from a small town in Haryana to becoming a NASA astronaut exemplifies courage, dedication, and the power of education. She remains a symbol of empowerment.</div>
                        <div className="story-name">Celestial Pioneer</div>
                        <div className="story-nam">Dr. APJ Abdul Kalam</div>

                    </div>
                </div>
            </div>
         </div>
        </>
    )
}
