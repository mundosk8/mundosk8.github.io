import React from "react";
import Image from "next/image";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import marioImage from "../../../../public/me.jpeg";

const Header = () => {
  return (
    <header className="h-dvh pt-28 overflow-hidden">
      <section className="h-full">
        <article className="flex justify-between sm:flex-row flex-col">
          <div>
            <h1 className="text-4xl font-semibold">Hey! I&apos;m Edmundo</h1>
            <h5 className="text-start text-purple-600">Frontend developer</h5>
          </div>
          <Image
            className="rounded-3xl"
            src={marioImage}
            alt="me"
            width={300}
            height={300}
          />
        </article>
        <CTA />
        <HeaderSocials />
      </section>
    </header>
  );
};

export default Header;
