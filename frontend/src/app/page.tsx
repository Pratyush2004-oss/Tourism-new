import LandingSlider from "@/components/shared/LandingSlider";
import Navbar from "@/components/shared/Navbar";
import Packages from "@/components/shared/Packages";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <LandingSlider />
      <Packages/>
    </>
  );
};

export default page;
