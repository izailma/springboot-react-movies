
import {ReactComponent as Github} from 'assets/img/github.svg';
import './styless.css';

function Navbar(){

    return(
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/IzaDarvelli/">
   
             <div className="dsmovie-contact-container">
               <Github/>
               <p>/IzaDarvelli</p>
             </div>
            </a>
          </div>
        </nav>
      </header>
    )
}

export default Navbar;