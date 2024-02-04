import "./Zoro.scss";
import ZoroImg from "../img/zoro.png";

function Zoro() {
  return (
    <>
      <section className="zoro">
        <div className="container">
          <div className="zoro__info">
            <div className="div"> 
              <h1 className="zoro__heading">Uncompromising quality</h1>
              <p className="zoro__text">
                Although we work with growers who pay close attention to all
                stages of harvest and processing, we employ, on our end, a
                rigorous quality control program to avoid over-roasting or
                baking the coffee dry. Every bag of coffee is tagged with a
                roast date and batch number. Our goal is to roast consistent,
                user-friendly coffee, so that brewing is easy and enjoyable.
              </p>
            </div>
            <img className="zoro__img" src={ZoroImg} alt="zoro" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Zoro;
