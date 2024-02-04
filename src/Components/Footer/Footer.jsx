import "./Footer.scss";
import FooterLogo from "../img/footer_logo.svg";
import FooterLog from "../img/footer_log.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <img
            className="footer__logo"
            src={FooterLogo}
            alt="logo"
            width="236"
            height="26"
          />
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="#link">
                Home
              </a>
              <a className="footer__link" href="#link">
                ABOUT US
              </a>
              <a className="footer__link" href="#link">
                Create your plan
              </a>
            </li>

            <li className="footer__info">
              <img
                className="footer__log"
                src={FooterLog}
                alt="log"
                width="24"
                height="24"
              />
              <img
                className="footer__log"
                src={FooterLog}
                alt="log"
                width="24"
                height="24"
              />
              <img
                className="footer__log"
                src={FooterLog}
                alt="log"
                width="24"
                height="24"
              />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
