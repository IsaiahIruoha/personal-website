import './App.css';

function Skills() {
    return (
        <>
        <section className="skills-section"> 
          <h1 id="skills">Technical Experience</h1>
          <h3>I Have Worked With</h3>
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
              <img className="icons" id="c++" src={process.env.PUBLIC_URL + '/assets/c++.svg'} alt='C++' />
              <div className="label">C++</div>
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
              <img className="icons" id="java" src={process.env.PUBLIC_URL + '/assets/java.png'} alt='java' />
              <div className="label">Java</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="chartjs" src={process.env.PUBLIC_URL + '/assets/chartjs.png'} alt='chartjs' />
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
              <img className="icons" id="processing" src={process.env.PUBLIC_URL + '/assets/processing.png'} alt='processing' />
              <div className="label">Processing</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="jquery" src={process.env.PUBLIC_URL + '/assets/jquery.png'} alt='jquery' />
              <div className="label">jQuery</div>
            </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="bootstrap" src={process.env.PUBLIC_URL + '/assets/bootstrap.png'} alt='bootstrap' />
              <div className="label">Bootstrap</div>
            </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="redux" src={process.env.PUBLIC_URL + '/assets/redux.png'} alt='redux' />
              <div className="label">Redux</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="react" src={process.env.PUBLIC_URL + '/assets/react.png'} alt='react' />
              <div className="label">React</div>
              </div>
            </li>
            <li>
              <div className="image-container">
              <img className="icons" id="sass" src={process.env.PUBLIC_URL + '/assets/sass.svg'} alt='sass' />
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
          <h3>Additional Skills</h3>
          <ul className="additional-skills">
            <li>
              <p className="item">Financial Literacy</p>
            </li>
            <li>
              <p className="item">Technical Writing</p>
            </li>
            <li>
              <p className="item">Collaboration</p>
            </li>
            <li>
            <p className="item">Problem Solving</p>
            </li>
            <li>
            <p className="item">Leadership</p>
            </li>
            <li>
            <p className="item">Public Speaking</p>
            </li>
          </ul>
        </section>
      </>
    );
  }
  
  export default Skills;