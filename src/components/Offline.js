const Offline = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">😵 You're Offline</h1>
      <p className="text-lg text-gray-600 mb-6">
        No internet? Here's a developer joke while you wait:
      </p>
      <p className="italic text-gray-800 mb-8">
        Why do programmers hate nature? <br /> It has too many bugs 🐛
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Retry Connection
      </button>
    </div>
  );
};

export default Offline;
