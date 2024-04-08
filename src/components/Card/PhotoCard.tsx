import React from "react";
import sizeOf from "image-size";
import Image from "next/image";

interface photosMetadata {
  photoId: string;
  title: string;
  altTitle: string;
  eventId: string;
  isThumbnail: boolean;
  isFame: boolean;
}

interface PhotoCardProps {
  image: photosMetadata;
}

const PhotoCard = ({ image }: PhotoCardProps) => {
  const imagePath = `/img/${
    image?.eventId !== "none" ? image.eventId : "single"
  }/${image.photoId}.jpg`;

  return (
    <div key={image.photoId} className="py-4 lg:py-6">
      <Image src={imagePath} alt={image.title} width={373} height={373} />
      <p className="text-primary500 mt-6 text-center text-sm">
        {image.altTitle}
      </p>
      <p className="text-primary500 text-lg uppercase tracking-widest mt-2 text-center font-bold">
        {image.title}
      </p>
    </div>
  );
};

export default PhotoCard;
