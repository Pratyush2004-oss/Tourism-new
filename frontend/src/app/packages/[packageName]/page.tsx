"use client";
import BookingCard from "@/components/shared/BookingCard";
import PageLanding from "@/components/shared/PageLanding";
import { Packages } from "@/constants/Categories";
import { PACKAGETYPE } from "@/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { packageName } = useParams();
  const [PackageInfo, setPackageInfo] = useState<PACKAGETYPE | null>(null);
  useEffect(() => {
    const filteredPackage = Packages.filter(
      (p) => p.name === packageName?.toString().replaceAll("-", " ")
    );
    setPackageInfo(filteredPackage[0]);
  }, [packageName]);
  return (
    PackageInfo && (
      <div className="w-full">
        <PageLanding image={PackageInfo.image} title={PackageInfo.name} />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 p-4">
          <div className="my-20 col-span-3">
            <h1 className="text-2xl md:text-3xl text-center font-black bg-gradient-to-l from-blue-600 via-blue-400 to-blue-700 text-transparent bg-clip-text">
              {PackageInfo.name.replaceAll("-", " ")}
            </h1>

            {/* To do : Package info */}
          </div>

          {/* Booking card here */}
          <div className="flex mx-auto justify-center col-span-2">
            <BookingCard
              props={{
                PackageName: PackageInfo.name,
                PackageDays: PackageInfo.days,
                PackagePrice: PackageInfo.starting,
              }}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default page;
