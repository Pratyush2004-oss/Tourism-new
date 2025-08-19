import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { PACKAGETYPE } from "@/types";
import Link from "next/link";
const TourCard = ({ item }: { item: PACKAGETYPE }) => {
  return (
    <Card className="p-0 w-full min-w-60 relative">
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
        <CardTitle className="text-center text-xs md:text-sm text-blue-600 text-nowrap">
          {item.name.replaceAll("-", " ")}
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
          Know More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
