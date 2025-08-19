import { PACKAGETYPE } from "@/types";
import TourCard from "./TourCard";

const PackagesList = ({ packages }: { packages: PACKAGETYPE[] }) => {
  return (
    <div className="w-full p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {packages.map((item, idx) => (
          <TourCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PackagesList;
