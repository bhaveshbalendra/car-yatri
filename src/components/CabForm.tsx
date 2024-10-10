import { useState } from "react";
import styles from "./CabForm.module.css"; // Assuming you save the CSS as CabForm.module.css

const CabForm = () => {
  const [tripType, setTripType] = useState("One Way");
  const [rideType, setRideType] = useState("Outstation");

  return (
    <div className={styles.form_container}>
      <div className={styles.rideType}>
        <button
          className={`${styles.button} ${
            rideType === "Outstation" ? styles.active : ""
          }`}
          onClick={() => setRideType("Outstation")}
        >
          Outstation
        </button>
        <button
          className={`${styles.button} ${
            rideType === "Local" ? styles.active : ""
          }`}
          onClick={() => setRideType("Local")}
        >
          Local
        </button>
        <button
          className={`${styles.button} ${
            rideType === "Airport" ? styles.active : ""
          }`}
          onClick={() => setRideType("Airport")}
        >
          Airport
        </button>
      </div>

      <div className={styles.tripType}>
        <button
          className={`${styles.button} ${
            tripType === "One Way" ? styles.active : ""
          }`}
          onClick={() => setTripType("One Way")}
        >
          One Way
        </button>
        <button
          className={`${styles.button} ${
            tripType === "Round Trip" ? styles.active : ""
          }`}
          onClick={() => setTripType("Round Trip")}
        >
          Round Trip
        </button>
      </div>

      <div className={styles.inputGroup}>
        <label>FROM</label>
        <input type="text" placeholder="Enter city or airport" />
      </div>

      <div className={styles.inputGroup}>
        <label>TO</label>
        <input type="text" placeholder="Enter city or airport" />
      </div>

      <div className={styles.inputGroup}>
        <label>PICK UP DATE</label>
        <input type="date" />
      </div>

      <div className={styles.inputGroup}>
        <label>PICK UP AT</label>
        <input type="time" />
      </div>

      <button className={styles.exploreButton}>EXPLORE CABS</button>
    </div>
  );
};

export default CabForm;
