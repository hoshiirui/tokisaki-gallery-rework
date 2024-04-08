import Image from "next/image";

export default function WhatIs() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p
                className="uppercase mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl"
                style={{ lineHeight: "130%" }}
              >
                About <br /> <span className="font-bold">Tokisaki Gallery</span>
              </p>
              <p className="mt-6 text-lg leading-8 font-normal text-gray-600">
                Welcome to Tokisaki Gallery, your premier destination for
                captivating cosplay photography based in Bali.
              </p>
              <p className="mt-6 text-lg leading-8 font-normal text-gray-600">
                We specialize in transforming fleeting moments into timeless
                masterpieces. Our team of passionate photographers is dedicated
                to capturing the essence of every moment, ensuring that your
                cosplay moments blossom into unforgettable experiences.
              </p>

              <p className="mt-6 text-lg leading-8 font-normal text-gray-600">
                With our motto,{" "}
                <span className="font-bold text-gray-800">
                  "We Make Your Moments Bloom"
                </span>
                , we strive to push boundaries, explore creativity, and
                celebrate the beauty of individuality.
              </p>
            </div>
          </div>
          <Image
            src="/assets/homepage/hoempage-abouttokisaki.png"
            width={700}
            height={504}
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
}
