import React from 'react';
import './SkillsInfo.css';
import DownloadCV from '../Home/DownloadCVButton'; 

const SkillsInfo = () => {
  const skills = [
    { name: 'HTML', level: '85%' },
    { name: 'CSS', level: '92%' },
    { name: 'JavaScript', level: '93%' },
    { name: 'Bootstrap', level: '73%' },
    { name: 'Java', level: '85%' },
    { name: 'Python', level: '84%' },
    { name: 'React Native', level: '80%' },
    { name: 'React Js', level: '83%' },
    { name: 'Adroid Dev', level: '86%' },
    { name: 'Git & GitHub', level: '80%' },    
    { name: 'UX/UI designer', level: '80%' },
    { name: 'Mongo db', level: '80%' },
    { name: 'MYSQL', level: '80%' },
    { name: 'Machine Learning', level: '80%' },
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

        <div className='skills-experience'>
          <h1 className="skills-title"><span style={{color: '#ff6347'}}>EXPERIENCE</span> & <span style={{color: '#ff6347'}}>EDUCATION</span></h1>
          <div className='itemOne'>
          <div className='itemContent'>
              <h3 id='subHead'>Joined The University</h3>
              <p id='textN'>Started studying BSc Software Engineering at Kisii University in 2018. Developed a solid foundation in computer science, participated in projects, and enhanced my skills through hackathons.</p>            
            </div>
            <div className='left2'></div>
            <div className='left'></div>
          </div>
          <div className='itemOne'>
            <div className='left'></div>
            <div className='left1'></div>
            <div className="itemContent">
              <h3 id='subHead'>Programming Languages</h3>
              <p id='textN'>Experienced in developing web and mobile applications using HTML, CSS, JavaScript, React Js, Node Js, Express Js, MongoDB, MySQL, React Native, and Android development.</p>
            </div>
          </div>

          <div className='itemOne'>
            <div className="itemContent">
              <h3 id='subHead'>Software Developer</h3>
              <p id='textN'>Worked on full-stack applications with React Js, Node Js, Express Js, MongoDB, and MySQL. Built and maintained mobile apps with React Native and Android development.</p>
            </div>
            <div className='left2'></div>
            <div className='left'></div>
          </div>
          <div className='itemOne'>
            <div className='left'></div>
            <div className='left1'></div>
            <div className='itemContent'>
              <h3 id='subHead'>Full Stack Developer Internship</h3>
              <p id='textN'>Completed a 6-month internship at XYZ Tech Solutions. Developed full-stack applications, managed version control with Git, and implemented CI/CD pipelines.</p>            </div>
          </div>
          <div className='itemOne'>
            <div className='itemContent'>
              <h3 id='subHead'>Hackathon Participation</h3>
              <p id='textN'>Participated in multiple hackathons, building projects like a real-time chat application and an e-commerce platform prototype. Recognized for innovative design and functionality.</p>            </div>
            <div className='left2'></div>
            <div className='left'></div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default SkillsInfo;

