function Card({ points }: { points: string[] }) {
  return (
    <ul
      style={{
        backgroundColor: "#F2EFEF",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      {points.map((p: string, index: number) => (
        <li
          key={index}
          style={{ fontSize: "1.5vw", listStylePosition: "inside" }}
        >
          {p}
        </li>
      ))}
    </ul>
  );
}

export default Card;
