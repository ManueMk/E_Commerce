import React from "react";
import Image from "next/image";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";

function Recommendations() {
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
        <center className="mb-3">
          <Image
            src={`${item.imgURL}`}
            alt="car-image"
            height={170}
            width={170}
          />
        </center>
        <div className="flex flex-column align-items-center gap-3">
          <h4 className="mb-1 text-sm" style={{ color: "var(--base-85)" }}>
            {item.title}
          </h4>
          <div className="w-10">
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
    <>
      <section
        className="h-22rem pt-5"
        style={{ backgroundColor: "var(--gray-blue-100)" }}
      >
        <center>
          <h1 className="text-5xl text-white ">RECOMMENDED TO YOU</h1>
        </center>
      </section>
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
      </div>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "65.25rem",
          margin: "auto",
        }}
        className="flex my-6 align-items-center justify-content-between"
      >
        <div>
          <div className="flex align-items-center justify-conter-start ">
            {" "}
            <i
              style={{ color: "var(--our-blue-100)" }}
              className="pi pi-credit-card text-5xl"
            ></i>{" "}
            <div className="w-12rem">
              <p style={{ color: "var(--base-95)" }} className="ml-3 font-bold">
                Secure Online Payment
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex align-items-center justify-conter-start ">
            {" "}
            <i
              style={{ color: "var(--our-blue-100)" }}
              className="pi pi-clock text-5xl"
            ></i>{" "}
            <div className="w-12rem">
              <p style={{ color: "var(--base-95)" }} className="ml-3 font-bold">
                24 Hours Support
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex align-items-center justify-conter-start ">
            {" "}
            <i
              style={{ color: "var(--our-blue-100)" }}
              className="pi pi-compas text-5xl"
            ></i>{" "}
            <div className="w-12rem">
              <p style={{ color: "var(--base-95)" }} className="ml-3 font-bold">
                Free Shipping Worldwide
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex align-items-center justify-conter-start ">
            {" "}
            <i
              style={{ color: "var(--our-blue-100)" }}
              className="pi pi-star text-5xl"
            ></i>{" "}
            <div className="w-12rem">
              <p style={{ color: "var(--base-95)" }} className="ml-3 font-bold">
                High Quality Products
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recommendations;
