function ListCard({ title, points }: { title: string; points: string[] }) {
  return (
    <div style={{ margin: "10px 10px" }}>
      <h1
        style={{
          color: "white",
          backgroundColor: "#216900",
          borderRadius: "4px",
          textAlign: "center",
          padding: "13px 22px",
          marginBottom: "20px",
          marginTop: "90px",
        }}
      >
        {title}
      </h1>
      <div
        style={{
          backgroundColor: "#F1F2F5",
          padding: "10px",
          borderRadius: "4px",
        }}
      >
        <ul style={{ padding: "0", listStylePosition: "inside" }}>
          {points.map((p: string, index: number) => (
            <li key={index} style={{ margin: "20px 20px" }}>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListCard;
