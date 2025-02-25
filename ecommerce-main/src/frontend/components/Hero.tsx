import React from "react";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import Link from "next/link";
import { Button } from "primereact/button";
import Image from "next/image";

export type CarouselItem = {
  id: number;
  title: string;
  description: string;
  price: string;
};

function Hero() {
  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: "APPLE WATCH HERMES EDITION",
      description: "Stainless Steel Case xith Fauve Barenia Leather",
      price: "500,000 XAF",
    },
    {
      id: 2,
      title: "APPLE WATCH HERMES EDITION VANITY",
      description: "Stainless Steel Case xith Fauve Barenia Leather",
      price: "500,000 XAF",
    },
  ];

  const carouselTemplate = (item: CarouselItem) => {
    return (
      <div>
        <div className="flex gap-6 flex-column h-25rem align-items-start justify-content-center">
          <Tag
            className="mr-2 w-3rem h-1rem ml-5"
            severity="info"
            value="New"
          ></Tag>
          <div
            style={{ color: "var(--base-100)" }}
            className="flex flex-column gap-5 w-30rem ml-5"
          >
            <h1 className="text-5xl"> {item.title} </h1>
            <p>{item.description}</p>
          </div>
          <Link href="" className="ml-5">
            <Button
              label={`${item.price} Shope Now`}
              style={{ backgroundColor: "var(--our-blue-75)" }}
              className="p-button-rounded px-4"
            />
          </Link>
        </div>
        <Image
          alt="carousel-image"
          src="/images/watch.png"
          height={374}
          width={635}
          style={{
            position: "fixed",
            zIndex: -1,
            marginTop: "-374px",
            marginLeft: "400px",
          }}
        />
      </div>
    );
  };

  return (
    <section className="px-7">
      <Carousel
        value={carouselItems}
        numVisible={1}
        numScroll={1}
        itemTemplate={carouselTemplate}
        autoplayInterval={3000}
        circular
      />
      <article className="flex mb-3 px-7 align-items-center justify-content-between">
        <div className="flex align-items-center justify-content-start">
          <Image
            src="/images/samsung.png"
            alt="item-image"
            height={74}
            width={59}
          />
          <div className="flex gap-3 ml-4 w-7 flex-column align-items-start justify-content-start">
            <p style={{ color: "var(--base-70)" }}>
              Samsung Galaxy S8+ 64 GB Midnight Black
            </p>
            <p className="font-bold" style={{ color: "var(--base-85)" }}>
              XAF 90,999
            </p>
          </div>
        </div>
        <div
          style={{
            borderLeft: "1px solid var(--base-30)",
          }}
          className="flex mb-2 pl-5 align-items-center justify-content-start"
        >
          <Image
            src="/images/earpiece.png"
            alt="item-image"
            height={74}
            width={35}
          />
          <div className="flex gap-3 ml-4 w-7 flex-column align-items-start justify-content-start">
            <p style={{ color: "var(--base-70)" }}>
              Omega IEM Noise Isolating Earphones
            </p>
            <p className="font-bold" style={{ color: "var(--base-85)" }}>
              XAF 90,999
            </p>
          </div>
        </div>
        <div
          style={{
            borderLeft: "1px solid var(--base-30)",
          }}
          className="flex pl-4 align-items-center justify-content-start"
        >
          <Image
            src="/images/watch.png"
            alt="item-image"
            height={59}
            width={100}
          />
          <div className="flex gap-3 ml-4 w-7 flex-column align-items-start justify-content-start">
            <p style={{ color: "var(--base-70)" }}>
              Samsung Galaxy S8+ 64 GB Midnight Black
            </p>
            <p className="font-bold" style={{ color: "var(--base-85)" }}>
              XAF 90,999
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Hero;
