import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ContactMe.css';
import profilePic from '../images/aditya.jpeg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin, FaGithub, FaCode, FaCheckCircle, FaStar, FaCodeBranch, FaTrophy } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { ContactMe as IContactMe } from '../types';
import { getContactMe } from '../queries/getContactMe';

const ContactMe: React.FC = () => {

  const [userData, setUserData] = useState<IContactMe>()
  const location = useLocation();
  const backgroundGif = location.state?.backgroundGif;

  useEffect(() => {
    async function fetchUserData() {
      const data = await getContactMe();
      setUserData(data);
    }

    fetchUserData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div 
      className="contact-container" 
      style={backgroundGif ? { backgroundImage: `url(${backgroundGif})` } : {}}
    >
      {/* Stats Section - FIRST */}
      <section className="stats-section">
        <h2 className="section-heading">Statistics</h2>
        <p className="section-quote">"First, solve the problem. Then, write the code." — John Johnson</p>
        <div className="stats-grid">
          
          {/* LeetCode Card */}
          <a 
            href="https://leetcode.com/u/bhardwajaditya0203/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="stat-card leetcode-card"
          >
            <div className="stat-card-header">
              <SiLeetcode className="stat-platform-icon" />
              <h3>LeetCode</h3>
            </div>
            <div className="stat-card-body">
              <div className="stat-big-number">
                <span className="big-num">540</span>
                <span className="big-label">Problems Solved</span>
              </div>
              <div className="stat-breakdown">
                <div className="stat-pill easy">
                  <span className="pill-count">247</span>
                  <span className="pill-label">Easy</span>
                </div>
                <div className="stat-pill medium">
                  <span className="pill-count">259</span>
                  <span className="pill-label">Medium</span>
                </div>
                <div className="stat-pill hard">
                  <span className="pill-count">34</span>
                  <span className="pill-label">Hard</span>
                </div>
              </div>
              <div className="stat-extras">
                <div className="stat-extra-item">
                  <FaTrophy className="extra-icon" />
                  <span>Rank #158,662</span>
                </div>
                <div className="stat-extra-item">
                  <FaCheckCircle className="extra-icon" />
                  <span>69% Acceptance</span>
                </div>
              </div>
            </div>
          </a>

          {/* GitHub Card */}
          <a 
            href="https://github.com/Aditya-Bhardwaj022" 
            target="_blank" 
            rel="noopener noreferrer"
            className="stat-card github-card"
          >
            <div className="stat-card-header">
              <FaGithub className="stat-platform-icon" />
              <h3>GitHub</h3>
            </div>
            <div className="stat-card-body">
              <div className="stat-big-number">
                <span className="big-num">9</span>
                <span className="big-label">Repositories</span>
              </div>
              <div className="github-repos">
                <div className="repo-item">
                  <FaCodeBranch className="repo-icon" />
                  <span>aditya-portfolio</span>
                  <span className="repo-lang ts">TypeScript</span>
                </div>
                <div className="repo-item">
                  <FaCodeBranch className="repo-icon" />
                  <span>ai-trip-planner</span>
                  <span className="repo-lang py">Python</span>
                </div>
                <div className="repo-item">
                  <FaCodeBranch className="repo-icon" />
                  <span>BookurShow</span>
                  <span className="repo-lang java">Java</span>
                </div>
              </div>
              <div className="stat-extras">
                <div className="stat-extra-item">
                  <FaStar className="extra-icon" />
                  <span>4 Stars</span>
                </div>
                <div className="stat-extra-item">
                  <FaCode className="extra-icon" />
                  <span>2 Followers</span>
                </div>
              </div>
            </div>
          </a>

        </div>
      </section>

      {/* Contact Me Section - SECOND */}
      <section className="contact-section">
        <h2 className="section-heading">Contact Me</h2>
        <div className="linkedin-badge-custom">
          <img src={profilePic} alt="Aditya Bhardwaj" className="badge-avatar" />
          <div className="badge-content">
            <h3 className="badge-name">{userData?.name}</h3>
            <p className="badge-title">{userData.title}</p>
            <p className="badge-description">
              {userData.summary}
            </p>
            <p className="badge-company">{userData.companyUniversity}</p>
            <a
              href={userData.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <FaLinkedin className="linkedin-icon" /> View Profile
            </a>
          </div>
        </div>
        <div className="contact-header">
          <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
        </div>
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href={`mailto:${userData.email}`} className="contact-link">
              {userData.email}
            </a>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <a href={`tel:${userData.phoneNumber}`} className="contact-link">
              {userData.phoneNumber}
            </a>
          </div>
          <div className="contact-fun">
            <p>Or catch up over a coffee ☕</p>
            <FaCoffee className="coffee-icon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
