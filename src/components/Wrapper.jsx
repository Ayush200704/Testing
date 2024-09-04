import React, {useState} from 'react';
import './Wrapper.css'; // Ensure you have the corresponding CSS file

const Projects = () => {
  const [activeId, setActiveId] = useState('c3');
  const handleMouseEnter = (id) => {
    setActiveId(id);
  };

  const handleMouseLeave = (id) => {
    if (id !== 'c3') {
      setActiveId('c3');
    }
  };

  const handleChange = (id) => {
    setActiveId(id);
  };

  return (
    <section className="about" id="about">
      <h2 className="heading">PROJECTS</h2>
      
      <div className="wrapper">
        <div className="container">
          {['c1', 'c2', 'c3', 'c4', 'c5', 'c6'].map((id, index) => (
            <React.Fragment key={id}>
              <input
                type="radio"
                name="slide"
                id={id}
                checked={id === activeId}
                onChange={()=>handleChange(id)}
                className={`${id === activeId ? 'active' : 'inactive'}`}
              />
              <label htmlFor={id} className={`card ${id === activeId ? 'active' : ''}`} onMouseEnter={()=>handleMouseEnter(id)} onMouseLeave={()=>handleMouseLeave(id)}>
                <div className="row">
                  <div className="icon">{index + 1}</div>
                  <div className="description">
                    <h4>Project {index + 1}</h4>
                    <p>{getProjectDescription(index)}</p>
                  </div>
                </div>
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
      
       <div className="about-content">
        <h3>Summary</h3>
        <p>I have developed a diverse range of projects using React, CSS, JavaScript, Tailwind CSS, and modern UI design principles. These projects include a sophisticated trading website that provides users with real-time market data and trading functionalities, as well as an edtech platform designed to enhance the online learning experience through intuitive interfaces and interactive features. Each project demonstrates my ability to create responsive, user-friendly web applications that combine aesthetic appeal with robust performance.</p>
      </div>
      <div>
        <a href="#" className="btn">Read More</a>
      </div> 
    </section>
  );
};

const getProjectDescription = (index) => {
  switch(index) {
    case 0:
      return 'YOUTUBE CLONE';
    case 1:
      return 'TO-DO-LIST';
    case 2:
      return 'Game (Rock - Paper - Scissors)';
    case 3:
      return 'TradingHarbor';
    case 4:
      return 'Game (Rock - Paper - Scissors)';
    case 5:
      return 'Game (Rock - Paper - Scissors)';
    default:
      return '';
  }
}

export default Projects;
