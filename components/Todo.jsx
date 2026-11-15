// Renders a placeholder value (created with todo() in data files) so missing
// content is obvious on the page. Plain strings render as-is.
export default function Todo({ value, className = "" }) {
  if (value && typeof value === "object" && "todo" in value) {
    return (
      <span
        title="Placeholder: replace before publishing"
        className={`box-decoration-clone rounded-md border border-dashed border-amber-400/60 bg-amber-400/10 px-2 py-0.5 text-amber-200 ${className}`}
      >
        TODO: {value.todo}
      </span>
    );
  }
  return <span className={className}>{value}</span>;
}
