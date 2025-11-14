import React, { useState, useEffect } from 'react';

export const SkillsShowcase = () => {
  const [rotation, setRotation] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // ✅ 技能数据（不需要写 angle）
  const skills = {
    innerCircle: [
      { name: 'C#', color: '#68217A', icon: 'C#' },
      { name: 'TypeScript', color: '#3178C6', icon: 'TS' },
      { name: 'JavaScript', color: '#F7DF1E', icon: 'JS' },
      { name: 'Python', color: '#3776AB', icon: 'Py' },
      { name: 'SQL', color: '#CC2927', icon: 'DB' },
      { name: 'React', color: '#61DAFB', icon: '⚛' },
    ],
    middleCircle: [
      { name: 'Vue.js', color: '#4FC08D', icon: 'V' },
      { name: 'Next.js', color: '#FFFFFF', icon: 'N' },
      { name: 'ASP.NET', color: '#512BD4', icon: '.N' },
      { name: 'Node.js', color: '#339933', icon: '◆' },
      { name: 'Bootstrap', color: '#7952B3', icon: 'B' },
      { name: 'Tailwind', color: '#06B6D4', icon: '~' },
      { name: 'HTML', color: '#E34F26', icon: 'H' },
      { name: 'CSS', color: '#1572B6', icon: 'C' },
      { name: 'jQuery', color: '#F7DF1E', icon: 'jQ' },
      { name: 'EF Core', color: '#512BD4', icon: 'EF' },
      { name: 'React Native', color: '#61DAFB', icon: 'RN' },
    ],
    outerCircle: [
      { name: 'Docker', color: '#2496ED', icon: '🐳' },
      { name: 'Git', color: '#F05032', icon: '⎇' },
      { name: 'AWS', color: '#FF9900', icon: '☁' },
      { name: 'Azure', color: '#0089D6', icon: 'Az' },
      { name: 'MongoDB', color: '#47A248', icon: 'M' },
      { name: 'MySQL', color: '#4479A1', icon: 'My' },
      { name: 'PostgreSQL', color: '#4169E1', icon: 'Pg' },
      { name: 'Oracle', color: '#F80000', icon: 'Or' },
      { name: 'SQL Server', color: '#009688', icon: 'MS' },
      { name: 'CI/CD', color: '#239120', icon: '⚙' },
      { name: 'RESTful', color: '#CC2927', icon: 'R' },
      { name: 'JWT', color: '#FFdFFF', icon: 'J' },
      { name: 'LINQ', color: '#512BD4', icon: 'LQ' },
      { name: 'Oracle Cloud', color: '#F80000', icon: 'OC' },
    ],
  };

  const getPosition = (angle, radius) => {
    const rad = (angle - 90) * (Math.PI / 180);
    return {
      x: 400 + radius * Math.cos(rad),
      y: 400 + radius * Math.sin(rad),
    };
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>My comprehensive technology stack and expertise across the full development lifecycle</p>
              <div className="relative w-full max-w-4xl mx-auto" style={{ aspectRatio: '1/1' }}>
                <svg viewBox="0 0 800 800" className="w-full h-full">
                  <defs>
                    <radialGradient id="centerGlow" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="#AA367C" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#4A2FBD" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* 背景光晕 */}
                  <circle cx="400" cy="400" r="350" fill="url(#centerGlow)" />

                  {/* 同心圆轨道 */}
                  <circle cx="400" cy="400" r="150" fill="none" stroke="rgba(170, 54, 124, 0.3)" strokeWidth="1.5" opacity="0.6" />
                  <circle cx="400" cy="400" r="240" fill="none" stroke="rgba(170, 54, 124, 0.3)" strokeWidth="1.5" opacity="0.6" />
                  <circle cx="400" cy="400" r="330" fill="none" stroke="rgba(170, 54, 124, 0.3)" strokeWidth="1.5" opacity="0.6" />

                  {/* 径向线 */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
                    const outer = getPosition(angle, 350);
                    return (
                      <line
                        key={angle}
                        x1="400"
                        y1="400"
                        x2={outer.x}
                        y2={outer.y}
                        stroke="rgba(170, 54, 124, 0.2)"
                        strokeWidth="1"
                        opacity="0.4"
                      />
                    );
                  })}

                  {/* 中心区域 */}
                  <circle cx="400" cy="400" r="90" fill="#151515" opacity="0.95" stroke="#AA367C" strokeWidth="2" />
                  <text x="400" y="390" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold">
                    Full Stack
                  </text>
                  <text x="400" y="415" textAnchor="middle" fill="#AA367C" fontSize="16">
                    Developer
                  </text>

                  {/* ✅ 内圈技能（自动分布） */}
                  {skills.innerCircle.map((skill, idx) => {
                    const total = skills.innerCircle.length;
                    const angle = (360 / total) * idx + rotation * 0.5;
                    const pos = getPosition(angle, 150);
                    const isHovered = hoveredSkill === `inner-${idx}`;
                    const radius = isHovered ? 45 : 35;
                    return (
                      <g
                        key={idx}
                        style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                        onMouseEnter={() => setHoveredSkill(`inner-${idx}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={radius}
                          fill="#151515"
                          stroke={skill.color}
                          strokeWidth={isHovered ? 3 : 2}
                          opacity="0.95"
                          style={{ transition: 'all 0.3s ease' }}
                        />
                        <text
                          x={pos.x}
                          y={pos.y - 5}
                          textAnchor="middle"
                          fill={skill.color}
                          fontSize={isHovered ? 20 : 16}
                          fontWeight="bold"
                          style={{ transition: 'all 0.3s ease' }}
                        >
                          {skill.icon}
                        </text>
                        <text
                          x={pos.x}
                          y={pos.y + 12}
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize={isHovered ? 11 : 9}
                          style={{ transition: 'all 0.3s ease' }}
                        >
                          {skill.name}
                        </text>
                      </g>
                    );
                  })}

                  {/* ✅ 中圈技能（自动分布） */}
                  {skills.middleCircle.map((skill, idx) => {
                    const total = skills.middleCircle.length;
                    const angle = (360 / total) * idx + rotation * 0.3;
                    const pos = getPosition(angle, 240);
                    const isHovered = hoveredSkill === `middle-${idx}`;
                    const radius = isHovered ? 36 : 28;
                    return (
                      <g
                        key={idx}
                        style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                        onMouseEnter={() => setHoveredSkill(`middle-${idx}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={radius}
                          fill="#151515"
                          stroke={skill.color}
                          strokeWidth={isHovered ? 3 : 2}
                          opacity="0.95"
                          style={{ transition: 'all 0.3s ease' }}
                        />
                        <text
                          x={pos.x}
                          y={pos.y + 4}
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize={isHovered ? 10 : 8}
                          fontWeight={isHovered ? 'bold' : 'normal'}
                          style={{ transition: 'all 0.3s ease' }}
                        >
                          {skill.name}
                        </text>
                      </g>
                    );
                  })}

                  {/* ✅ 外圈技能（自动分布） */}
                  {skills.outerCircle.map((skill, idx) => {
                    const total = skills.outerCircle.length;
                    const angle = (360 / total) * idx + rotation * 0.15;
                    const pos = getPosition(angle, 330);
                    const isHovered = hoveredSkill === `outer-${idx}`;
                    const radius = isHovered ? 33 : 25;
                    return (
                      <g
                        key={idx}
                        style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                        onMouseEnter={() => setHoveredSkill(`outer-${idx}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={radius}
                          fill="#151515"
                          stroke={skill.color}
                          strokeWidth={isHovered ? 3 : 2}
                          opacity="0.95"
                          style={{ transition: 'all 0.3s ease' }}
                        />
                        <text
                          x={pos.x}
                          y={pos.y + 4}
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize={isHovered ? 10 : 8}
                          fontWeight={isHovered ? 'bold' : 'normal'}
                          style={{ transition: 'all 0.3s ease' }}
                        >
                          {skill.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src="img/color-sharp.png" alt="" />
    </section>
  );
};
