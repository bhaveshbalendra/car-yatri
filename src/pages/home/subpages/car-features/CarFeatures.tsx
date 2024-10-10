import Card from "./Card";
import styles from "./CarFeatures.module.css";
function CarFeatures() {
  return (
    <div className={styles.container}>
      <Card
        title={"CAR TYPE"}
        feature={["AC Sedans", "AC Hatchbacks", "AC SUV"]}
      />
      <Card
        title={"MODEL INCLUDES"}
        feature={[
          "Etios, Amaze, Dzire etc.",
          "Wagon R, Celerio, Micra etc.",
          "Ertiga, Xylo etc.",
        ]}
      />
      <Card title={"PASSENGERS"} feature={["4 Pax", "4 Pax", "6-7 Pax"]} />
      <Card
        title={"IDEAL FOR"}
        feature={[
          "Comfortable trips with small families",
          "Budget trips over short distances",
          "Premium trips with large families",
        ]}
      />
      <Card feature={["Rs.11/KM", "Rs.11/KM", "Rs.13/KM"]} title={"FARE"} />
    </div>
  );
}

export default CarFeatures;
