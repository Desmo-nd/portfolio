import React from 'react';
import './SkillsInfo.css';
import DownloadCV from '../Home/DownloadCVButton'; 

const SkillsInfo = () => {
  const skills = [
    { name: 'HTML', level: '85%' },
    { name: 'CSS', level: '92%' },
    { name: 'Tailwind', level: '93%' },
    { name: 'Bootstrap', level: '73%' },
    { name: 'Framer Motion', level: '85%' },
    { name: 'JavaScript', level: '84%' },
    { name: 'TypeScript', level: '80%' },
    { name: 'React', level: '83%' },
    { name: 'Redux Toolkit', level: '86%' },
    { name: 'Git & GitHub', level: '80%' },
  ];

  return (
     <div className="skills-container">

      <div className="skills-content">
        <h1 className="skills-title">MY <span style={{color: '#ff6347'}}>SKILLS</span></h1>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-level">{skill.level}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsInfo;
