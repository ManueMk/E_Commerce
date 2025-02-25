import React from "react";
import Image from "next/image";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";

function NewProducts() {
  const carouselItems = [
    {
      id: 1,
      title: "APPLE WATCH HERMES EDITION",
      description: "Stainless Steel Case xith Fauve Barenia Leather",
      price: "500,000 XAF",
      imgURL: "/images/nintendo.png",
    },
    {
      id: 2,
      title: "APPLE WATCH HERMES EDITION",
      description: "Stainless Steel Case xith Fauve Barenia Leather",
      price: "500,000 XAF",
      imgURL: "/images/nintendo.png",
    },
    {
      id: 3,
      title: "APPLE WATCH HERMES EDITION",
      description: "Stainless Steel Case xith Fauve Barenia Leather",
      price: "500,000 XAF",
      imgURL: "/images/nintendo.png",
    },
    {
      id: 4,
      title: "APPLE WATCH HERMES EDITION",
      description: "Stainless Steel Case xith Fauve Barenia Leather",
      price: "500,000 XAF",
      imgURL: "/images/nintendo.png",
    },
  ];

  const carouselTemplate = (item: any) => {
    return (
      <div
        className=" text-center "
        style={{ borderRight: "1px solid var(--base-15)" }}
      >
        <div className="mb-3">
          <Image
            src={`${item.imgURL}`}
            alt="car-image"
            height={170}
            width={170}
          />
        </div>
        <div className="flex flex-column align-items-center text-center gap-3">
          <h4 className="mb-1 text-sm" style={{ color: "var(--base-85)" }}>
            {item.title}
          </h4>

          <div className="w-10 text-center">
            <p
              className="font-light text-xs"
              style={{
                color: "var(--base-50)",
              }}
            >
              {" "}
              {item.description}{" "}
            </p>
          </div>
          <h6 className="mt-0 mb-3">${item.price}</h6>
        </div>
      </div>
    );
  };
  return (
    <section className="mb-5">
      <div
        className="h-22rem pt-5"
        style={{ backgroundColor: "var(--blue-green-100)" }}
      >
        <center>
          <h1 className="text-5xl text-white ">NEW ARRIVAL</h1>
        </center>
      </div>
      <div>
        <Carousel
          value={carouselItems}
          numVisible={4}
          showIndicators={false}
          // numScroll={3}s
          itemTemplate={carouselTemplate}
          circular
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            width: "71.25rem",
            margin: "auto",
            marginTop: "-13rem",
            boxShadow: "0 4px 2px -2px var(--base-15)",
          }}
        />
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            width: "65.25rem",
            margin: "auto",
          }}
          className="flex mt-5 align-items-center justify-content-between"
        >
          <div className="flex flex-column gap-5">
            <h2 className="text-3xl">
              Apple Watch 3 Review: Don’t Overlook This Shiny, Speedy Upgrade
            </h2>
            <div>
              <Button
                label="Read more"
                style={{
                  backgroundColor: "var(--our-blue-75)",
                }}
                className="text-xs p-button-rounded"
                iconPos="right"
                icon="pi pi-arrow-right"
              />
            </div>
          </div>
          <Image
            src="/images/watchcombo.png"
            height={155}
            width={500}
            alt="combo-picture"
          />
        </div>
      </div>
    </section>
  );
}

export default NewProducts;
