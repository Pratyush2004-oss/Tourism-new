import PageLanding from "@/components/shared/PageLanding";
import { PACKAGETYPE } from "@/types";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const { packageName } = useParams();
  const [PackageInfo, setPackageInfo] = useState<PACKAGETYPE | null>(null);
  return (
    <div className="w-full max-w-7xl mx-auto">
      <PageLanding image={""} title={""} />
    </div>
  );
};

export default page;
