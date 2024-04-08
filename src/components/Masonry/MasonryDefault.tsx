"use client";

import React, { useEffect, useState } from "react";
import events from "./../../data/events.json";
import photos from "./../../data/photos.json";
import PhotoCard from "../Card/PhotoCard";

interface SingleGalleryProps {
  isFame?: boolean;
  isSingleGallery?: boolean;
  isExistEventId?: string;
  galleryType: string;
  isShow?: boolean;
  withFilter?: boolean;
}

interface photosMetadata {
  photoId: string;
  title: string;
  altTitle: string;
  eventId: string;
  isThumbnail: boolean;
  isFame: boolean;
}

const MasonryDefault = ({
  isFame,
  isSingleGallery,
  galleryType,
  isExistEventId,
  isShow,
  withFilter,
}: SingleGalleryProps) => {
  const filters = [
    {
      title: "all",
      isActive: false,
    },
    {
      title: "cosplay",
      isActive: false,
    },
    {
      title: "casual",
      isActive: false,
    },
    {
      title: "edited",
      isActive: false,
    },
  ];

  const [filteredPhotos, setFilteredPhotos] =
    useState<photosMetadata[]>(photos);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    let filtered = photos;

    // Apply filters based on props
    if (isFame) {
      filtered = filtered.filter((photo) => photo.isFame === true);
    }

    if (isExistEventId) {
      filtered = filtered.filter((photo) => photo.eventId === isExistEventId);
    }

    if (isSingleGallery) {
      filtered = filtered.filter((photo) => photo.eventId === "none");
    }

    // Apply search filter
    filtered = filtered.filter((photo) =>
      photo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredPhotos(filtered);
  }, [isFame, isSingleGallery, isExistEventId, searchQuery]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="pb-8 mx-auto">
        <div className="flex flex-row justify-between items-center mb-4">
          <div className="flex flex-row gap-8">
            {filters.map((filter, index) => (
              <p
                className="uppercase tracking-widest text-md text-primary500"
                key={index}
              >
                {filter.title}
              </p>
            ))}
          </div>
          <div className="flex flex-row gap-4">
            <input
              type="text"
              placeholder="SEARCH HERE"
              className="tracking-widest uppercase text-md border border-primary500 text-center py-2 px-8"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
        <div className="columns-1 gap-8 sm:columns-1 sm:gap-8 lg:gap-14 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8">
          {filteredPhotos.map((image: any, index: any) => (
            <PhotoCard image={image} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MasonryDefault;
