import driving from "../../../../assets/features/driving.svg";
import hand from "../../../../assets/features/hand.svg";
import location from "../../../../assets/features/location.svg";

import styles from "./Features.module.css";
function Features() {
  return (
    <div className={styles.feature_content}>
      <div>
        <img src={hand} alt="hand" />
        <h2 style={{ fontSize: "1.7vw" }}>RETURN FARE, NOT FAIR!</h2>
        <p style={{ fontSize: "1.5vw" }}>
          Why Pay for Return Journey when you are travelling one-way? Now get
          discounted AC Taxi at just half of the round trip cost for your oneway
          travel.
        </p>
      </div>
      <hr />
      <div>
        <img src={location} alt="location" />
        <h2 style={{ fontSize: "1.7vw" }}>GPS BASED BILLING SYSTEM</h2>
        <p style={{ fontSize: "1.5vw" }}>
          Since the GPS data captures the actual distance and time traveled, it
          reduce the chance of Kilometer tampering or discrepancies in billing.
        </p>
      </div>
      <hr />
      <div>
        <img src={driving} alt="driving" />
        <h2 style={{ fontSize: "1.7vw" }}>NOW AVAILABLE ROUTES ARE!</h2>
        <p style={{ fontSize: "1.5vw" }}>
          Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly
        </p>
      </div>
    </div>
  );
}

export default Features;
