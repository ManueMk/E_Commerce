import React, { useState, useEffect, useContext } from "react";
import Context from "../../store/utils/context";
import Image from "next/image";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useRouter } from "next/router";
import { Tag } from "primereact/tag";
import Footer from "../../components/Footer";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import data from "../../utils/flasdeals.json";

function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [prod, setProd] = useState<any>(null);
  const { cartItems, incrementQuantity, decrementQuantity, addToCart } =
    useContext(Context);

  useEffect(() => {
    const p = data.filter((pr) => pr.id === Number(id))[0];
    setProd(p);
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-column">
        <article className="flex px-8 py-5 align-items-center justify-content-between ">
          <div className="flex line-height-4 gap-2 flex-column">
            <p style={{ color: "var(--base-50)" }}>Wing Chair</p>
            <div className="flex gap-3 align-items-center ">
              <h2
                style={{ maxWidth: "20rem" }}
                className="text-5xl line-height-1  "
              >
                {" "}
                {prod?.title}{" "}
              </h2>
              <Tag
                value="New"
                className="h-2rem px-3"
                style={{ backgroundColor: "var(--our-blue-75)" }}
              />
            </div>
            <p className="font-bold">XAF 7000</p>
            <p
              className="w-6 line-height-3 text-base"
              style={{ color: "var(--base-85)" }}
            >
              {" "}
              You can really loosen up and relax in comfort because the high
              back on this chair provides extra support for your neck{" "}
            </p>
            <div className="flex gap-2 mt-5">
              <Button
                className="p-button-rounded px-5 py-3"
                label="Buy now"
                style={{ backgroundColor: "var(--our-blue-75)" }}
              />
              <Button
                icon="pi pi-shopping-cart"
                className="p-button-rounded p-button-outlined px-5 py-3"
                label="Add to cart"
                style={{ color: "var(--base-70)" }}
                onClick={(e) => {
                  addToCart(prod);
                }}
              />
            </div>
            <div className="flex gap-2">
              <Button
                icon="pi pi-heart-fill"
                className="p-button-text px-0"
                style={{ color: "var(--base-50)" }}
              >
                <p className="mx-2" style={{ color: "var(--base-100)" }}>
                  Add to Wish List
                </p>
                (15,026 Adds)
              </Button>
            </div>
            <hr className="w-8" />
            <p className="font-bold mt-3">In Stock in Yaounde</p>
            <div className="flex flex-column line-height-2">
              <p className="font-bold ">Available Online</p>
              <p>Deliverable time is 4-10 working Days</p>
            </div>
          </div>
          <Card
            style={{
              height: "30rem",
              width: "40rem",
              borderRadius: "10px",
              backgroundImage: "url(" + "/images/cata1.png" + ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="flex align-items-end"
          ></Card>
        </article>
        <article
          className="border-round-md mx-8  mb-5  py-2"
          style={{ border: "1px solid var(--base-30)" }}
        >
          <p
            className="font-bold pl-5 pb-2"
            style={{ color: "var(--base-85)" }}
          >
            Product Description
          </p>
          <hr />
          <p
            className="w-6 line-height-3 px-5 py-5 "
            style={{ color: "var(--base-70)" }}
          >
            {" "}
            Introduced on September 12, 2017, the iPhone X and the iPhone X Plus
            represent a "huge step forward for the iPhone," according to Apple
            CEO Tim Cook. The two devices "improve on everything we love about
            iPhone" with overhauled internals and a tweaked design, but the
            changes introduced are not as dramatic as the changes brought to the
            iPhone X, Apple's new high-end flagship device being sold alongside
            the iPhone 8 and iPhone 8 Plus.{" "}
          </p>
        </article>
        <article
          style={{ border: "1px solid var(--base-30)" }}
          className="border-round-md pt-3 mb-5 mx-8 "
        >
          <p
            className="font-bold pl-5  pb-3"
            style={{ color: "var(--base-85)" }}
          >
            Buyers who bought these items also bought
          </p>
          <hr />
          <div className="flex mb-3 pt-3 px-5 align-items-center justify-content-between">
            <div className="flex align-items-center justify-content-start">
              <Image
                src="/images/samsung.png"
                alt="item-image"
                height={74}
                width={59}
              />
              <div className="flex gap-3 ml-4  flex-column align-items-start justify-content-start">
                <p style={{ color: "var(--base-70)" }}>
                  Samsung Galaxy S8+ 64 GB Midnight Black
                </p>
                <p className="font-bold" style={{ color: "var(--base-85)" }}>
                  XAF 4000
                </p>
                <Button
                  icon="pi pi-shopping-cart"
                  className="p-button-rounded p-button-outlined px-3 py-2"
                  label=" Add to cart"
                  style={{ color: "var(--base-70)" }}
                />
              </div>
            </div>
            <div className="flex mb-2 pl-5 align-items-center justify-content-start">
              <Image
                src="/images/earpiece.png"
                alt="item-image"
                height={74}
                width={35}
              />
              <div className="flex gap-3 ml-4  flex-column align-items-start justify-content-start">
                <p style={{ color: "var(--base-70)" }}>
                  Omega IEM Noise Isolating Earphones
                </p>
                <p className="font-bold" style={{ color: "var(--base-85)" }}>
                  XAF 4000
                </p>
                <Button
                  icon="pi pi-shopping-cart"
                  className="p-button-rounded p-button-outlined px-3 py-2"
                  label=" Add to cart"
                  style={{ color: "var(--base-70)" }}
                />
              </div>
            </div>
            <div className="flex pl-4 align-items-center justify-content-start">
              <Image
                src="/images/watch.png"
                alt="item-image"
                height={59}
                width={100}
              />
              <div className="flex gap-3 ml-4  flex-column align-items-start justify-content-start">
                <p style={{ color: "var(--base-70)" }}>
                  Samsung Galaxy S8+ 64 GB Midnight Black
                </p>
                <p className="font-bold" style={{ color: "var(--base-85)" }}>
                  XAF 4000
                </p>
                <Button
                  icon="pi pi-shopping-cart"
                  className="p-button-rounded p-button-outlined px-3 py-2"
                  label=" Add to cart"
                  style={{ color: "var(--base-70)" }}
                />
              </div>
            </div>
            <div className="flex pl-4 align-items-center justify-content-start">
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
                  XAF 4000
                </p>
                <Button
                  icon="pi pi-shopping-cart"
                  className="p-button-rounded p-button-outlined px-3 py-2"
                  label=" Add to cart"
                  style={{ color: "var(--base-70)" }}
                />
              </div>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}

export default Product;
