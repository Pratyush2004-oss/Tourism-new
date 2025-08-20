"use client";
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
      <div className="w-full mx-auto">
        <PageLanding image={PackageInfo.image} title={PackageInfo.name} />
        <div className="my-20">
          <h1 className="text-2xl md:text-3xl text-center font-black bg-gradient-to-l from-blue-600 via-blue-400 to-blue-700 text-transparent bg-clip-text">
            {PackageInfo.name.replaceAll("-", " ")}
          </h1>
        </div>
        
      </div>
    )
  );
};

export default page;
