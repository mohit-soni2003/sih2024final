import React, { useState } from "react";


function Dashboard() {
  const [activeSection, setActiveSection] = useState("Dashboard");

  // Dynamic content based on selected menu
  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <div className="dashboard-content">
            <h2>Welcome, John!</h2>
            <p>Here’s a summary of your activities and upcoming events.</p>

            {/* Widgets */}
            <div className="dashboard-widgets">
              <div className="widget">
                <h3>Total Quizzes</h3>
                <p>12</p>
              </div>
              <div className="widget">
                <h3>Upcoming Classes</h3>
                <p>3 Scheduled</p>
              </div>
              <div className="widget">
                <h3>Achievements</h3>
                <p>5 Badges</p>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="upcoming-events">
              <h3>Upcoming Events</h3>
              <ul>
                <li>Class: Introduction to Astronomy - Tomorrow at 10 AM</li>
                <li>Quiz: Solar System - Due in 3 days</li>
              </ul>
            </div>

            {/* Progress Bar */}
            <div className="progress-bar">
              <h3>Quiz Completion</h3>
              <div className="bar-container">
                <div className="bar" style={{ width: "75%" }}></div>
              </div>
              <p>75% completed</p>
            </div>

            {/* Quick Links */}
            <div className="quick-links">
              <button className="btn">Start a New Quiz</button>
              <button className="btn">Join a Class</button>
            </div>

            {/* Recent Activities */}
            <div className="recent-activities">
              <h3>Recent Activities</h3>
              <ul>
                <li>Completed Quiz: Planets and Moons</li>
                <li>Earned Badge: Astronomy Beginner</li>
                <li>Attended Class: Space Exploration 101</li>
              </ul>
            </div>
          </div>
        );
      case "Quiz History":
        return <h2>Here is your Quiz History.</h2>;
      case "Upcoming Classes":
        return <h2>Check out your Upcoming Classes.</h2>;
      case "Change Password":
        return <h2>Change your password here.</h2>;
      case "Account Settings":
        return <h2>Update your Account Settings here.</h2>;
      default:
        return <h2>Welcome!</h2>;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header">
        {/* Logo Section */}
        <div className="logo">
          <img src="/path/to/logo.png" alt="Website Logo" className="logo-image" />
          <h1 className="logo-text">Space Explorer</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item"><a href="/home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/quizzes" className="nav-link">Quizzes</a></li>
            <li className="nav-item"><a href="/classes" className="nav-link">Classes</a></li>
            <li className="nav-item"><a href="/profile" className="nav-link">Profile</a></li>
            <li className="nav-item"><a href="/logout" className="nav-link">Logout</a></li>
          </ul>
        </nav>
      </header>

      {/* Layout: Sidebar and Main Content */}
      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <ul className="sidebar-list">
            <li
              className={`sidebar-item ${activeSection === "Dashboard" ? "active" : ""}`}
              onClick={() => setActiveSection("Dashboard")}
            >
              Dashboard
            </li>
            <li
              className={`sidebar-item ${activeSection === "Quiz History" ? "active" : ""}`}
              onClick={() => setActiveSection("Quiz History")}
            >
              Quiz History
            </li>
            <li
              className={`sidebar-item ${activeSection === "Upcoming Classes" ? "active" : ""}`}
              onClick={() => setActiveSection("Upcoming Classes")}
            >
              Upcoming Classes
            </li>
            <li
              className={`sidebar-item ${activeSection === "Change Password" ? "active" : ""}`}
              onClick={() => setActiveSection("Change Password")}
            >
              Change Password
            </li>
            <li
              className={`sidebar-item ${activeSection === "Account Settings" ? "active" : ""}`}
              onClick={() => setActiveSection("Account Settings")}
            >
              Account Settings
            </li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">{renderContent()}</main>
      </div>
    </div>
  );
}

export default Dashboard;
