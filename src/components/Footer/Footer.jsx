import {Link} from 'react-router-dom';

import {ReactComponent as EmailIcon} from '../../assets/icons/mail.svg';
import {ReactComponent as PhoneIcon} from '../../assets/icons/phone.svg';
import {ReactComponent as LinkedinIcon} from '../../assets/icons/linkedin.svg';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-light py-2">
      <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-top ">
        <div>
          <h5>Link-uri rapide</h5>
          <p className="my-1"><Link to="/about">Despre noi</Link></p>
          <p className="my-1"><Link to="/tc">Terms &amp; Conditions</Link></p>
        </div>
        <div>
          <h5>Contact</h5>
          <p className="my-1"><EmailIcon className="mr-2"/><a href="mailto:avram.florin@gmail.com">avram.florin@gmail.com</a></p>
          <p className="my-1"><PhoneIcon className="mr-2"/>+40751.45.45.97</p>
        </div>
        <div>
          <h5>Contact</h5>
          <div><LinkedinIcon className="mr-2"/><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/florin-avram-092851162/">florin-avram</a></div>
        </div>
      </div>
      <div className="text-center py-3">
        <span>&copy; Florin Avram </span>
        {
          new Date().getFullYear() === 2021 
          ? '2021' 
          : '2021 - ' + new Date().getFullYear() }
      </div>
    </footer>
  )
}

export default Footer;