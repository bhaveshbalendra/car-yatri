import styles from "./CarFeatures.module.css";

function Card({ title, feature }: { title: string; feature: string[] }) {
  return (
    <div className={styles.card}>
      <h2
        style={{
          backgroundColor: "#4A7437",
          color: "white",
          padding: "10px",
          borderRadius: "4px",
          fontSize: "2vw",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          backgroundColor: "#D5F2C8",
          padding: "10px",
          borderRadius: "4px",
        }}
      >
        {feature.map((f: string, index: number) => (
          <p style={{ fontSize: "1.5vw" }} key={index}>
            {f}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Card;
