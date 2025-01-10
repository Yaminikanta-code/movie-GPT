const Shimmer = () => {
  return (
    <div className="animate-pulse grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="bg-gray-700 p-4 rounded shadow">
          <div className="h-48 bg-gray-600 rounded mb-2"></div>
          <div className="h-6 bg-gray-600 rounded mb-1"></div>
          <div className="h-4 bg-gray-600 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
