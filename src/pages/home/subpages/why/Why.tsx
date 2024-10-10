import flag from "../../../../assets/why/flag.svg";
import people from "../../../../assets/why/people.svg";
import order from "../../../../assets/why/order.svg";
import paid from "../../../../assets/why/paid.svg";
import car from "../../../../assets/why/car-rent.png";
import styles from "./Why.module.css";

const features = [
  {
    imgSrc: flag,
    title: "FAST RESPONSE TIME",
    description:
      "Experience the Best Car Rental Service with Driver for Local or Outstation Trips. Enjoy prompt response times and seamless car hire service, ensuring you get on the road quickly.",
  },
  {
    imgSrc: people,
    title: "VAST FLEET",
    description:
      "We offer a wide range of rental cars including Sedans, SUVs, MUVs, premium Sedans, and Tempo Travellers to meet all your needs.",
  },
  {
    imgSrc: order,
    title: "EASY TO ORDER",
    description:
      "Easily Book a Cab Online through our user-friendly website, mobile application, or by calling our customer support team.",
  },
  {
    imgSrc: paid,
    title: "GREAT TARIFFS",
    description:
      "Rent a Car at the Lowest Rates! Our car hire tariffs are highly competitive compared to other operators. Book online cabs at the best prices with Yatri Car Rental.",
  },
];

function Why() {
  return (
    <div className={styles.why_container}>
      <div style={{ flex: 1 }}>
        <img src={car} style={{ width: "100%" }} alt="Car" />
      </div>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "2vw" }}>WHY YATRI ?</h1>
        <div className={styles.feature_content}>
          {features.map((feature, index) => (
            <div key={index}>
              <img
                style={{ fontSize: "2vw" }}
                src={feature.imgSrc}
                alt={feature.title}
              />
              <h2 style={{ fontSize: "1.5vw" }}>{feature.title}</h2>
              <p style={{ fontSize: "1.2vw" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;
