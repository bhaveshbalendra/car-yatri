import styles from "./BusTrain.module.css";
import fastcar from "../../../../assets/bustrain/fastcar.png";
function BusTrain() {
  return (
    <div className={styles.main_container}>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "2.5vw" }}>
          Why choose AC Bus or AC Train for your One-way Journey?
        </h1>
        <p style={{ fontSize: "2vw" }}>
          Our oneway cab service is cheaper than AC bus and 2 tier AC train
          ticket fares, it reduces your travel time and you travel at your own
          private space also to enjoy your journey. Our one way taxi will come
          at your doorstep and take you to your desired destination. So book you
          oneway cab from Lucknow to Gorakhpur or Varanasi to Bareilly. read
          More....
        </p>
      </div>
      <div style={{ flex: 1 }}>
        <img style={{ width: "100%" }} src={fastcar} alt="this is fast car" />
      </div>
    </div>
  );
}

export default BusTrain;
