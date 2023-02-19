import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GitHubProjects from "./components/GitHubProjects";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav>
            <div className="app-title">
              <Link to="/aboutme" className="nav-item">Jason's Portfolio</Link>
            </div>
            <div>
              <Link to="/aboutme" className="nav-item">About Me</Link>
              <Link to="/skills" className="nav-item">Skills</Link>
              <Link to="/education" className="nav-item">Education</Link>
              <Link to="/experience" className="nav-item">Experience</Link>
              <Link to="/githubprojects" className="nav-item">GitHub Projects</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/githubprojects" element={<GitHubProjects />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App