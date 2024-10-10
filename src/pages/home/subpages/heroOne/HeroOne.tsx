import styles from "./HeroOne.module.css";
import logo from "../../../../assets/heroOne/logo.png";
import time from "../../../../assets/heroOne/time.png";
import download from "../../../../assets/heroOne/download.png";
import profile from "../../../../assets/heroOne/profile.png";
import bg from "../../../../assets/heroOne/bg.png";
import googleplay from "../../../../assets/heroOne/googleplay.png";
import appstore from "../../../../assets/heroOne/appstore.png";

function HeroOne() {
  return (
    <div className={styles.heroOne_container}>
      <header>
        <div className={styles.header_content}>
          <div>
            <img style={{ width: "100%" }} src={logo} alt="logo" />
          </div>
          <div>
            <img style={{ width: "100%" }} src={time} alt="time" />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <div>
              <img
                className={styles.downloadImage}
                src={download}
                alt="download"
              />
            </div>
            <div>
              <img
                className={styles.profileImage}
                src={profile}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </header>
      <div className={styles.main_content}>
        <div>
          <img
            src={bg}
            style={{ position: "absolute", width: "100%", zIndex: 1 }}
            alt="background image"
          />
        </div>
        <div style={{ zIndex: 2, position: "absolute", width: "100%" }}>
          <div className={styles.hero_content}>
            <h1 style={{ color: "white" }}>
              INDIA'S{" "}
              <span style={{ color: "green" }}>
                LEADING ONE-WAY INTER-CITY{" "}
              </span>
              CAB SERVICE PROVIDER
            </h1>
            {/* <CabForm /> */}
          </div>
          <div className={styles.feature_content}>
            <div>
              <h2 style={{ fontSize: "2vw" }}>Transparent Billing</h2>
              <p style={{ fontSize: "1.5vw" }}>
                GPS Based Billing | No Km Tampering
              </p>
            </div>
            <hr />
            <div>
              <h2 style={{ fontSize: "2vw" }}>Download Now</h2>
              <div style={{ width: "100%" }}>
                <img
                  style={{ width: "100%" }}
                  src={googleplay}
                  alt="googleplay"
                />
                <img style={{ width: "100%" }} src={appstore} alt="appstore" />
              </div>
            </div>
            <hr />
            <div>
              <h2 style={{ fontSize: "2vw" }}>No return fare</h2>
              <p style={{ fontSize: "1.5vw" }}>
                One-Way cab fare | No hidden charges
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroOne;
