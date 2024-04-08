import React from "react";
import HimawariHeader from "../Header/HimawariHeader";
import Image from "next/image";

const Speciality = () => {
  const speciality = [
    {
      title: "Photograph That Draws Everyone's Eyes",
      desc: [
        {
          p: "At Tokisaki Gallery, we pride ourselves on delivering photographs that captivate and mesmerize. Our commitment to excellence ensures that every image we produce exceeds expectations, leaving a lasting impression on anyone who beholds it. Utilizing advanced editing techniques and creative flair, we transform ordinary moments into extraordinary masterpieces that demand attention and admiration. With Tokisaki Gallery, prepare to be dazzled by the magic of photography.",
        },
      ],
      pictures: [
        {
          href: "1.png",
          title: "Sparkling Aquarium Date",
        },
        {
          href: "2.png",
          title: "Journey to The Frost",
        },
        {
          href: "3.png",
          title: "A Moment of Excellency",
        },
      ],
    },
    {
      title: "Advice on Planning",
      desc: [
        {
          p: "Planning is at the heart of everything we do at Tokisaki Gallery. Before each session, we meticulously prepare, drawing inspiration from various sources and delving deep into the background and lore of each character. Our team leaves no stone unturned as we meticulously research and analyze every detail to ensure a seamless and immersive experience. With Tokisaki Gallery by your side, you can rest assured that your vision will be brought to life with precision and authenticity.",
        },
      ],
      pictures: [
        {
          href: "1.png",
          title: "Sparkling Aquarium Date",
        },
        {
          href: "2.png",
          title: "Journey to The Frost",
        },
        {
          href: "3.png",
          title: "A Moment of Excellency",
        },
      ],
    },
    {
      title: "A Resonating Storytelling",
      desc: [
        {
          p: "At Tokisaki Gallery, we believe that photography is more than just capturing images; it's about telling a compelling story. Through the fusion of photography and storytelling, we create immersive narratives that resonate deeply with our audience. Each image is imbued with emotion, evoking feelings of joy, excitement, and nostalgia. ",
        },
        {
          p: "Whether it's a single frame or a series of photographs, Tokisaki Gallery transports viewers into a world where imagination knows no bounds. Get ready to embark on a journey of discovery and emotion with Tokisaki Gallery as your guide.",
        },
      ],
      pictures: [
        {
          href: "1.png",
          title: "Sparkling Aquarium Date",
        },
        {
          href: "2.png",
          title: "Journey to The Frost",
        },
        {
          href: "3.png",
          title: "A Moment of Excellency",
        },
      ],
    },
  ];

  return (
    <>
      <HimawariHeader
        title="Tokisaki Speciality"
        desc="Lorem ipsum dolor sit amet"
      />
      {speciality.map((item, index) => {
        const imageHref = `/assets/speciality/${index + 1}`;
        return (
          <div key={index} className="my-16 mx-6">
            <p className="text-xl font-bold mb-4 text-gray-500 uppercase">
              Speciality III
            </p>
            <p className="uppercase tracking-wider text-5xl text-primary500 font-bold mb-8">
              {item.title}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 mx-auto text-center">
              {item.pictures.map((image, index) => (
                <Image
                  key={index}
                  src={`${imageHref}/${image.href}`}
                  alt={image.title}
                  width={373}
                  height={373}
                  className="my-6"
                />
              ))}
            </div>
            {item.desc.map((text, index) => (
              <div
                key={index}
                className="mt-6 text-lg leading-8 font-semibold text-gray-600"
              >
                {text.p}
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Speciality;
