
const Shimmer = (props) =>{
   
    const {name } = props;


 return (name === "body") ?(  
  <>
    <div className="flex mx-4 my-4">
      <button className="bg-gray-300 text-gray-600 font-medium px-4 py-2 rounded-lg animate-pulse cursor-not-allowed">
        High rated restaurants
      </button>
    </div>

    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl shadow animate-pulse p-4"
          >
            <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          </div>
        ))}
    </div>
  </>
 ): (
  <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 animate-pulse">
    {/* Restaurant Name */}
    <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>

    {/* Rating */}
    <div className="h-4 bg-gray-300 rounded w-1/4 mb-3"></div>

    {/* Area & City */}
    <div className="h-4 bg-gray-300 rounded w-1/3 mb-6"></div>

    {/* Menu Title */}
    <div className="h-6 bg-gray-300 rounded w-24 mb-4"></div>

    {/* Dummy menu items */}
    <ul className="space-y-3">
      {Array(6).fill(0).map((_, i) => (
        <li key={i} className="h-4 bg-gray-300 rounded w-2/3"></li>
      ))}
    </ul>
  </div>
)

};


export default Shimmer;

