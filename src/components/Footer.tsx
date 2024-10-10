import logo from "../assets/heroOne/logo.png";

function Footer() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          backgroundColor: "black",
          color: "white",
          gap: "10px",
        }}
      >
        <img src={logo} alt="logo" />
        <nav>
          <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>News</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </nav>
        <div style={{ display: "flex", gap: "10px" }}>
          <p>NewsLetter</p>
          <input
            placeholder="Email"
            style={{ borderRadius: "20px", paddingLeft: "10px" }}
            type="text"
          />
        </div>
        <p style={{ fontSize: "10px" }}>
          All Copyrights are reserved by YATRI CABS
        </p>
      </div>
    </div>
  );
}

export default Footer;
