import Image from "next/image";

export default function About() {
  const aboutMeParagraph = `
    Ahoy!
I'm graduated in Computer Science, and programming are in my veins since a little boy.
I'm a front-end engineer, who's been working on the last couple of years with react, started with the early versions, now being more proficient using it with nextjs framework. During this journey, I tried to be updated with the new design patterns, and work with other technologies such as redux, graphql, express, nestjs, typeorm, etc.
I already worked with sectors such as the supply chain.
I consider myself as a person who's capable of mentoring in an easy way.
    `;
  return (
    <div className="flex justify-center gap-48 items-center h-dvh">
      <p className="max-w-2xl text-pretty">{aboutMeParagraph}</p>
      <Image
        width="192"
        height="192"
        className="rounded-full"
        src="/assets/me.jpeg"
        alt="me"
      />
    </div>
  );
}
