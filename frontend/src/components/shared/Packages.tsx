import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { CATEGORIES } from "@/constants/Categories";
import Image from "next/image";
import Link from "next/link";
const Packages = () => {
  return (
    <div className="w-full my-5 flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl md:text-3xl text-center font-black bg-gradient-to-l from-blue-600 via-blue-400 to-blue-700 text-transparent bg-clip-text">
        Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {CATEGORIES.map((item, idx) => (
          <Card key={idx} className="p-0 w-full min-w-60 relative">
            <CardHeader className="p-0 group">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="group-hover:scale-105 ease-in-out transition-all duration-300"
              />
            </CardHeader>
            <CardContent className="px-2 py-1 absolute top-3/5 left-1/2 -translate-x-1/2 rounded-lg shadow-lg min-w-1/2 border-blue-600 bg-white">
              <CardTitle className="text-center text-xs md:text-sm text-blue-600">
                {item.name}
              </CardTitle>
            </CardContent>
            <CardFooter className="flex items-center justify-between pb-2">
              <div className="flex items-start flex-col gap-1">
                <h1 className="text-xs font-medium">Starting From</h1>
                <h1 className="font-bold text-blue-700">₹{item.starting}</h1>
              </div>
              <Link
                href={"#"}
                className="underline text-blue-800 font-bold cursor-pointer"
              >
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Packages;
