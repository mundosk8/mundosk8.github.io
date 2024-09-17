"use client";
import React from "react";
import DownloadCV from "../DownloadCV";

const CTA = () => {
  return (
    <div className="mt-10 flex justify-center gap-5">
      <DownloadCV />
      <a href="#contact" className="btn btn-primary">
        Lets talk
      </a>
    </div>
  );
};

export default CTA;
