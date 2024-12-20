"use client";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="flex items-center gap-3 mt-5">
      <a
        href="https://www.linkedin.com/in/edmundo-freitas-124b438a/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.github.com/mundosk8"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://twitter.com/EdmundoFreitas1"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
