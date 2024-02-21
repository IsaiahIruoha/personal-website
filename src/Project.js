import './App.css';

function Project() {
  return (
    <>
      <section className="projects-section">
        <h1 className="projects-section-header" id="projects">Past & Present Work</h1>
        <div className="projects-grid">
            <a
                href="https://github.com/MOMOtrial/Hyperloop-GUI"
                target="_blank"
                className="project project-tile"
            >
                <img
                className="project-image"
                src="/Assets/hyperloop.png"
                alt="project"
                />
                <p className="project-title">
                <span className="code">&lt;</span>
                {' '}Hyperloop GUI (Frontend){' '}
                <span className="code">&#47;&gt;</span>
                </p>
            </a>

            <a
                href="https://github.com/IsaiahIruoha/PacMan"
                target="_blank"
                className="project project-tile"
            >
                <img
                className="project-image"
                src="/Assets/pacman.png"
                alt="project"
                />
                <p className="project-title">
                <span className="code">&lt;</span>
                {' '}PacMan (C/C++){' '}
                <span className="code">&#47;&gt;</span>
                </p>
            </a>

            <a
                href="https://github.com/IsaiahIruoha/mern-buyonic"
                target="_blank"
                className="project project-tile"
            >
                <img
                className="project-image"
                src="/Assets/buyonic.png"
                alt="project"
                />
                <p className="project-title">
                <span className="code">&lt;</span>
                {' '}E-Commerce Site (MERN){' '}
                <span className="code">&#47;&gt;</span>
                </p>
            </a>

            <a
                href="https://github.com/IsaiahIruoha/PLCProgramming"
                target="_blank"
                className="project project-tile"
            >
                <img
                className="project-image"
                src="/Assets/conveyor.png"
                alt="project"
                />
                <p className="project-title">
                <span className="code">&lt;</span>
                {' '}PLC Programming (TIA){' '}
                <span className="code">&#47;&gt;</span>
                </p>
            </a>

            <a
                href="https://github.com/IsaiahIruoha/excel-lite-project"
                target="_blank"
                className="project project-tile"
            >
                <img
                className="project-image"
                src="/Assets/excellite.png"
                alt="project"
                />
                <p className="project-title">
                <span className="code">&lt;</span>
                {' '}Excel Lite (C){' '}
                <span className="code">&#47;&gt;</span>
                </p>
            </a>

            <a
                href="https://isaiahiruoha.github.io/ios-calculator-replica/"
                target="_blank"
                className="project project-tile"
            >
                <img
                className="project-image"
                src="/Assets/calculator.png"
                alt="project"
                />
                <p className="project-title">
                <span className="code">&lt;</span>
                {' '}Calculator (React){' '}
                <span className="code">&#47;&gt;</span>
                </p>
            </a>
        </div>
        <a href="https://drive.google.com/file/d/1n0a8gj1Dlw2YS4qFNtfBll83eLOS51V6/view?usp=sharing" className="btn btn-resume" target="_blank">Resume PDF<i className="fas fa-chevron-right"></i></a>
      </section>
    </>
  );
}

export default Project;