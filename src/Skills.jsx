import './App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS file

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);
    return (
        <div data-aos="fade-left"
        data-aos-offset="250"
        data-aos-duration="500">
        <section className="skills-section"> 
          <h2 id="skills">Technical Experience</h2>
          <h3>Languages, Frameworks and Libraries</h3>
          <ul className="nav-list">
            <li>
              <div className="image-container">
                <img className="icons" id="javascript" src={process.env.PUBLIC_URL + '/assets/javascript.png'} alt='javascript' />
                <div className="label">JavaScript</div>
              </div>
            </li>
            <li>
              <div className="image-container">
                <img className="icons" id="html" src={process.env.PUBLIC_URL + '/assets/HTML.png'} alt='HTML' />
                <div className="label">HTML</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="css" src={process.env.PUBLIC_URL + '/assets/CSS.png'} alt='CSS'/>
              <div className="label">CSS</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="c" src={process.env.PUBLIC_URL + '/assets/C.png'} alt='C' />
              <div className="label">C</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="python" src={process.env.PUBLIC_URL + '/assets/python.svg.png'} alt='python' />
              <div className="label">Python</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="arduino" src={process.env.PUBLIC_URL + '/assets/arduino.png'} alt='arduino' />
              <div className="label">Arduino</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="java" src={process.env.PUBLIC_URL + '/assets/Java.png'} alt='java' />
              <div className="label">Java</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="chartjs" src={process.env.PUBLIC_URL + '/assets/Chartjs.png'} alt='chartjs' />
              <div className="label">ChartJS</div>
            </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="postgresql" src={process.env.PUBLIC_URL + '/assets/postgresql.svg.png'} alt='postgresql' />
              <div className="label">PostgreSQL/SQL</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="processing" src={process.env.PUBLIC_URL + '/assets/Processing.png'} alt='processing' />
              <div className="label">Processing</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="jquery" src={process.env.PUBLIC_URL + '/assets/jQuery.png'} alt='jquery' />
              <div className="label">jQuery</div>
            </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="bootstrap" src={process.env.PUBLIC_URL + '/assets/Bootstrap.png'} alt='bootstrap' />
              <div className="label">Bootstrap</div>
            </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="redux" src={process.env.PUBLIC_URL + '/assets/Redux.png'} alt='redux' />
              <div className="label">Redux</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="react" src={process.env.PUBLIC_URL + '/assets/React.png'} alt='react' />
              <div className="label">React</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="sass" src={process.env.PUBLIC_URL + '/assets/Sass.svg'} alt='sass' />
              <div className="label">SASS</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="nodejs" src={process.env.PUBLIC_URL + '/assets/nodejs.png'} alt='nodejs' />
              <div className="label">Node.js</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="mongodb" src={process.env.PUBLIC_URL + '/assets/mongodb.webp'} alt='mongodb' />
              <div className="label">MongoDB/NoSQL</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="mongoose" src={process.env.PUBLIC_URL + '/assets/mongoose.png'} alt='mongoose' />
              <div className="label">Mongoose ODM</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="php" src={process.env.PUBLIC_URL + '/assets/php.svg.png'} alt='php' />
              <div className="label">PHP</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="bash" src={process.env.PUBLIC_URL + '/assets/terminal.png'} alt='terminal' />
              <div className="label">Bash/Shell Scripting</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="git" src={process.env.PUBLIC_URL + '/assets/git.png'} alt='git' />
              <div className="label">Git</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="tensorflow" src={process.env.PUBLIC_URL + '/assets/tensorflow.svg.png'} alt='tensorflow' />
              <div className="label">TensorFlow</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="pytorch" src={process.env.PUBLIC_URL + '/assets/pytorch.svg.png'} alt='pytorch' />
              <div className="label">Pytorch</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="scikitlearn" src={process.env.PUBLIC_URL + '/assets/scikitlearn.svg.png'} alt='scikitlearn' />
              <div className="label">scikit-learn</div>
              </div>
            </li>
          </ul>
          <h3>Other Tools</h3>
          <ul className="nav-list">
            <li>
              <div className="image-container">
              <img className="icons" id="solidworks" src={process.env.PUBLIC_URL + '/assets/solidworks.png'} alt='solidworks' />
              <div className="label">SolidWorks</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="office" src={process.env.PUBLIC_URL + '/assets/microsoft-365.png'} alt='microsoft365' />
              <div className="label">Microsoft Office</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="photoshop" src={process.env.PUBLIC_URL + '/assets/photoshop.png'} alt='photoshop' />
              <div className="label">Adobe Photoshop</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="final cut pro" src={process.env.PUBLIC_URL + '/assets/finalcut.png'} alt='finalcut' />
              <div className="label">Final Cut Pro</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="tia portal" src={process.env.PUBLIC_URL + '/assets/TIA.jpg'} alt='TIA' />
              <div className="label">TIA Portal</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="vscode" src={process.env.PUBLIC_URL + '/assets/VSCode.png'} alt='VSCode' />
              <div className="label">VSCode</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="github" src={process.env.PUBLIC_URL + '/assets/github.png'} alt='github' />
              <div className="label">GitHub</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="jetbrains" src={process.env.PUBLIC_URL + '/assets/jetbrains.png'} alt='jetbrains' />
              <div className="label">JetBrains Suite</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="jupyter" src={process.env.PUBLIC_URL + '/assets/jupyter.svg.png'} alt='jupyter' />
              <div className="label">Jupyter</div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
  
  export default Skills;