import React from "react";

interface HimawariHeaderProps {
  title: string;
  desc: string;
  hasShortExplanation?: string;
  hasDownloadButton?: string;
}

const HimawariHeader = ({
  title,
  desc,
  hasShortExplanation,
  hasDownloadButton,
}: HimawariHeaderProps) => {
  return (
    <>
      <div className="w-full flex justify-between mx-auto py-5 items-center flex-col mb-4 space-y-8">
        <div className="flex justify-between items-center flex-col gap-2">
          <div className="flex flex-row justify-center items-center gap-4">
            <img
              className="h-4"
              src="/assets/header/diamond.svg"
              alt="diamond1"
            />

            <img
              className="h-9"
              src="/assets/header/himawari.svg"
              alt="himawari"
            />

            <img
              className="h-4"
              src="/assets/header/diamond.svg"
              alt="diamond2"
            />
          </div>
          <h6 className="text-center text-5xl font-semibold uppercase tracking-wide text-primary500 leading-[60px]">
            {title}
          </h6>
          <h6 className="text-2xl font-normal text-gray-700 italic text-center">
            {desc}
          </h6>
        </div>
        {hasShortExplanation && (
          <p className="text-center text-2xl font-semibold text-brown">
            {hasShortExplanation}
          </p>
        )}
        {hasDownloadButton && (
          <a href={hasDownloadButton}>
            <button className="border border-brown hover:bg-black hover:text-white rounded-none uppercase tracking-wide font-bold text-brown hover:border-transparent px-10 py-6">
              Download Photos Here!
            </button>
          </a>
        )}
      </div>
    </>
  );
};

export default HimawariHeader;
