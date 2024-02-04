import "./Sanji.scss";
import SanjiLogo from "../img/sanji_1.svg";

function Sanji() {
  return (
    <>
      <section className="sanji">
        <div className="container">
          <h4 className="sanji__heading">Our headquarters</h4>
          <ul className="sanji__list">
            <li className="sanji__item">
              <img
                className="sanji_logo"
                src={SanjiLogo}
                alt="logo"
                width="40"
                height="49"
              />
              <h3 className="sanji__title">United Kingdom</h3>
              <p className="sanji__text">68 Asfordby Rd</p>
              <p className="sanji__text">Alcaston</p>
              <p className="sanji__text">SY6 1YA</p>
              <p className="sanji__text">+44 1241 918425</p>
            </li>

            <li className="sanji__item">
              <img
                className="sanji_logo"
                src={SanjiLogo}
                alt="logo"
                width="40"
                height="49"
              />
              <h3 className="sanji__title">Canada</h3>
              <p className="sanji__text">1528  Eglinton Avenue</p>
              <p className="sanji__text">Toronto</p>
              <p className="sanji__text">Ontario M4P 1A6</p>
              <p className="sanji__text">+1 416 485 2997</p>
            </li>

            <li className="sanji__item">
              <img
                className="sanji_logo"
                src={SanjiLogo}
                alt="logo"
                width="40"
                height="49"
              />
              <h3 className="sanji__title">Australia</h3>
              <p className="sanji__text">36 Swanston Street</p>
              <p className="sanji__text">Kewell</p>
              <p className="sanji__text">Victoria</p>
              <p className="sanji__text">+61 4 9928 3629</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Sanji;
