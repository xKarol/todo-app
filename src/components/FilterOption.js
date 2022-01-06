export default function FilterOption({ name, active, onClick }) {
  return (
    <span className={active ? "active" : undefined} onClick={onClick}>
      {name}
    </span>
  );
}
