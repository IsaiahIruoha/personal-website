import React from 'react';
import './App.css';

function TypingText({ text, delay }) {
  const [displayText, setDisplayText] = React.useState('');

  React.useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, delay]);

  return <p id="blurb">{displayText}</p>;
}

function Welcome() {
  return (
    <>
      <section className="welcome-section">
        <h1 id="welcome-section">Isaiah Iruoha</h1>
        <p id="sentence">Computer Engineering Student at Queen's University</p>
        <img src={process.env.PUBLIC_URL + '/assets/profile.png'} alt="about" />
        <TypingText
          text="I'm Isaiah - a Computer Engineering student at Queen's University with interests in software development, artificial intelligence, and finance. As I continue learning, this site will be updated with past and current projects along with my contact information, skills, and resume. Feel free to reach out!"
          delay={25}
        />
      </section>
    </>
  );
}

export default Welcome;