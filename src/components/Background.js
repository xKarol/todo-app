export default function Background({ className, children }) {
  return (
    <div className={`background ${className}`}>
      <section className="image" />
      {children}
    </div>
  );
}
