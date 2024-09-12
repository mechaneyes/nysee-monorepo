export default function Tags({ tags }) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <p className="mt-8 text-lg font-normal">
        <span className="mr-0">Tagged:</span>
        {tags.edges.map((tag, index) => (
          <span key={index} className="ml-2 font-light">
            {tag.node.name}
            {index < tags.edges.length - 1 && (
              <span className="ml-1"> &middot;</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}
