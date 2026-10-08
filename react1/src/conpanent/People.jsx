 export default function People({ value, total }) {
  const full = value / total >= 0.5;
  return (
    <span className={full ? "badge green" : "badge red"}>
      {value} / {total}
    </span>
  );
}