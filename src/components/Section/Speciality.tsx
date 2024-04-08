import React from "react";

const Speciality = () => {
  const speciality = [
    {
      title: "Photograph That Draws Everyone's Eyes",
      desc: [
        {
          p: "sldfjsdlfjsdlfsdfsdf",
        },
        {
          p: "sldfjsdlfjsdlfsdfsdf",
        },
      ],
      pictures: [
        {
          href: "1.jpg",
          title: "Sparkling Aquarium Date",
        },
        {
          href: "2.jpg",
          title: "Journey to The Frost",
        },
        {
          href: "3.jpg",
          title: "A Moment of Excellency",
        },
      ],
    },
    {
      title: "Advice on Planning",
      desc: [
        {
          p: "sldfjsdlfjsdlfsdfsdf",
        },
        {
          p: "sldfjsdlfjsdlfsdfsdf",
        },
      ],
      pictures: [
        {
          href: "/sdfds",
          title: "sdlfjsdlf",
        },
        {
          href: "/sdfds",
          title: "sdlfjsdlf",
        },
        {
          href: "/sdfds",
          title: "sdlfjsdlf",
        },
      ],
    },
    {
      title: "A Resonating Storytelling",
      desc: [
        {
          p: "sldfjsdlfjsdlfsdfsdf",
        },
        {
          p: "sldfjsdlfjsdlfsdfsdf",
        },
      ],
      pictures: [
        {
          href: "/sdfds",
          title: "sdlfjsdlf",
        },
        {
          href: "/sdfds",
          title: "sdlfjsdlf",
        },
        {
          href: "/sdfds",
          title: "sdlfjsdlf",
        },
      ],
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mx-auto text-center">
        <p>Speciality 1</p>
        <p>Speciality 2</p>
        <p>Speciality 3</p>
      </div>
    </>
  );
};

export default Speciality;
