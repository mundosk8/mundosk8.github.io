"use client";
import React from "react";
import DownloadCV from "../DownloadCV";

const CTA = () => {
  return (
    <div className="mt-10 flex justify-start gap-5 text-nowrap">
      <DownloadCV />
      {/* <a href="#contact" className="btn btn-primary">
        Lets talk
      </a> */}
    </div>
  );
};

export default CTA;
