import { CATEGORIES } from "@/constants/Categories";
import PackageCard from "./PackageCard";
const Packages = () => {
  return (
    <div className="w-full my-5 flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl md:text-3xl text-center font-black bg-gradient-to-l from-blue-600 via-blue-400 to-blue-700 text-transparent bg-clip-text">
        Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {CATEGORIES.map((item, idx) => (
          <PackageCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
