import './App.css';

function Nav() {
  return (
    <>
      <nav id="navbar" className="nav">
        <a id="logo" href="https://isaiahiruoha.com/">II</a>
        <ul className="nav-list">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;