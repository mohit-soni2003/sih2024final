import React from 'react'
import "./Home.css"
import Navpannel from '../shared_component/Navpannel'
import Footer from '../shared_component/Footer'
import Fact from './Homepg_component/Fact'
import Feature_pg from './Homepg_component/Feature_pg'
import Success_stories from './Homepg_component/Success_stories'
export default function Home() {
  return (
    <>
     <div className="video-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/Home_Page_Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        Explore the Universe from your Inbox
      </div>
    </div>  

      <div><Fact></Fact></div>
      <div><Feature_pg /></div>
      <div><Success_stories/></div>
      <Footer></Footer>



    </>

  )
}
