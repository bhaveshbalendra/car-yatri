import Card from "./Card";
import car from "../../../../assets/choosecab/car.png";

const card1 = [
  "Instant Booking & Confirmation",
  "Confirmed Booking Immediately",
  "No Return Fare For One-Way Trip",
  "Clean & Professional Cab Service",
  "Transparent Billing With GPS Based Billing System",
];

const card2 = [
  "Pick-Up From Your House",
  "Dedicated Cab Just For You",
  "Drop To Your Desired Destination",
  "Completed More Than 20,000+ Oneway Trips",
  "Multiple Payment Option Including Credit Card",
];

function ChooseCab() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "green" }}>
        WHY CHOOSE ONE WAY CAB?
      </h1>
      <div
        style={{
          display: "flex",
          flex: 1,
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Card points={card1} />
        <div>
          <img src={car} style={{ width: "100%" }} alt="car" />
        </div>
        <Card points={card2} />
      </div>
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS INTERCITY CAR RENTALS IN
        INDIA – WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES IN
        EVERY CITY. UNLEASH YOUR JOURNEY!
      </p>
    </div>
  );
}

export default ChooseCab;
