import './App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Project() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div data-aos="fade-right"
        data-aos-offset="250"
        data-aos-duration="500">
      <section className="projects-section">
        <h2 className="projects-section-header" id="projects">Past & Present Work</h2>
        <div className="projects-grid">
             <a
                href="https://isaiahiruoha.github.io/arbitrage/#/"
                target="_blank"
                className="project project-tile"
            >
                <img
                className="project-image"
                src={process.env.PUBLIC_URL + '/assets/cryptoarbitrage.png'} 
                alt='crypto arbitrage pathfinding'
                />
                <p className="project-title">
                <span className="code">&lt;</span>
                {' '}Crypto Arb Pathfinding{' '}
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
                src={process.env.PUBLIC_URL + '/assets/buyonic.png'} 
                alt='buyonic'
                />
                <p className="project-title">
                <span className="code">&lt;</span>
                {' '}E-Commerce Site{' '}
                <span className="code">&#47;&gt;</span>
                </p>
            </a>
            <a
                href="https://github.com/IsaiahIruoha/walking-jumping-classification-app"
                target="_blank"
                className="project project-tile"
            >
                <img
                className="project-image"
                src={process.env.PUBLIC_URL + '/assets/jumporwalk.png'} 
                alt='walkjump'
                />
                <p className="project-title">
                <span className="code">&lt;</span>
                {' '}Walk/Jump Classifier{' '}
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
                src={process.env.PUBLIC_URL + '/assets/excel.png'} 
                alt='excellite'
                />
                <p className="project-title">
                <span className="code">&lt;</span>
                {' '}Excel Lite{' '}
                <span className="code">&#47;&gt;</span>
                </p>
            </a>
            <a
                href="https://github.com/MOMOtrial/Hyperloop-GUI"
                target="_blank"
                className="project project-tile"
            >
                <img
                className="project-image"
                src={process.env.PUBLIC_URL + '/assets/hyperloop.png'} 
                alt='hyperloop'
                />
                <p className="project-title">
                <span className="code">&lt;</span>
                {' '}Hyperloop GUI{' '}
                <span className="code">&#47;&gt;</span>
                </p>
            </a>
            <a
                href="https://github.com/IsaiahIruoha/android-app-guessmaster"
                target="_blank"
                className="project project-tile"
            >
                <img
                className="project-image"
                src={process.env.PUBLIC_URL + '/assets/androidapp.png'} 
                alt='androidapp'
                />
                <p className="project-title">
                <span className="code">&lt;</span>
                {' '}Android Game Application{' '}
                <span className="code">&#47;&gt;</span>
                </p>
            </a>
        </div>
        <a href="https://drive.google.com/file/d/1n0a8gj1Dlw2YS4qFNtfBll83eLOS51V6/view?usp=sharing" className="btn btn-resume" target="_blank">Resume PDF<i className="fas fa-chevron-right"></i></a>
      </section>
    </div>
  );
}

export default Project;