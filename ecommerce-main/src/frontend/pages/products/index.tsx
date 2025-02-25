import React, { useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { BreadCrumb } from "primereact/breadcrumb";
import { Accordion, AccordionTab } from "primereact/accordion";

import data from "../../utils/flasdeals.json";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import Image from "next/image";
import { Carousel } from "primereact/carousel";
import Footer from "../../components/Footer";

import { Menu } from "primereact/menu";
import Link from "next/link";

function Products() {
  const home = {
    icon: "pi pi-home",
    url: "https://localhost:3000",
  };
  const items = [
    { label: "Computer" },
    { label: "Notebook" },
    { label: "Accessories" },
    { label: "Backpacks" },
    { label: "Item" },
  ];

  const cardHeader = (cardInfo: any) => {
    return (
      <>
        <div className="flex"></div>
        <div className="pt-5 px-5">
          <Image
            alt="card-image"
            height={160}
            width={165}
            src={cardInfo.imageURL}
          />
        </div>
      </>
    );
  };

  const cardFooter = (cardInfo: any) => {
    return (
      <>
        <div className="flex align-items-center text-xs  justify-content-between">
          <span className="font-bold">{cardInfo.newPrice}</span>

          <Link
            href={`/products/${cardInfo.id}`}
            className="p-button-text p-button font-bold text-xs"
            style={{
              borderLeft: "1px solid var(--base-15)",
              color: "var(--our-blue-75)",
              borderRadius: 0,
            }}
          >
            {" "}
            Shop Now{" "}
          </Link>
        </div>
      </>
    );
  };

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

  const filterMenu = [
    {
      label: "Filter  ",
      icon: "pi pi-angle-down",
      items: [
        {
          label: "Filters",
        },
      ],
    },
  ];

  // const menu = React.useRef<MouseEvent>();

  const [cartItems, setCartItems] = useState<any[]>([]);
  const addToCart = (product: any): any => {
    const chosenProd = cartItems.filter(
      (item: any) => item.id === product.id
    )[0];
    if (!chosenProd) {
      product["quantity"] = 1;
      setCartItems([...cartItems, product]);
    } else {
      const newCartItems = cartItems.map((itm) => {
        if (itm.id === product.id) {
          return { ...itm, quantity: (itm.quantity += 1) };
        }
        return itm;
      });
      setCartItems(newCartItems);
    }
  };

  const incrementQuantity = (product: any) => {
    const newc = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: (item.quantity += 1) };
      }
      return item;
    });
    setCartItems(newc);
  };

  const decrementQuantity = (product: any) => {
    let newc = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: (item.quantity -= 1) };
      }
      return item;
    });
    if (product.quantity === 0) {
      newc = cartItems.filter((item) => item.id !== product.id);
      setCartItems(newc);
    }
    setCartItems(newc);
  };

  return (
    <div>
      <Header cart={cartItems.length} setCartItems={setCartItems} />
      <Navbar />
      <div style={{ backgroundColor: "var(--base-05)" }}>
        <div>
          <BreadCrumb model={items} className="px-7" home={home} />
        </div>
        <section className="grid gap-4  px-8 pt-3 ">
          <Accordion activeIndex={[0, 1, 2, 3, 4]} className="col-3  " multiple>
            <AccordionTab header="BRANDS">Content II</AccordionTab>
            <AccordionTab header="COLOR">Content III</AccordionTab>
            <AccordionTab header="SIZE">Content III</AccordionTab>
            <AccordionTab header="PRICE">Content III</AccordionTab>
          </Accordion>
          <article className="col">
            <div
              className="  flex align-items-center h-4rem justify-content-between border-round-md bg-white py-3 px-5"
              style={{}}
            >
              <div>
                <span className="font-bold" style={{ color: "var(--base-85)" }}>
                  {" "}
                  Laptops{" "}
                </span>
                <span style={{ color: "var(--base-30)" }}>52</span>
              </div>
              <div>
                {/* <Menu model={filterMenu} ref={menu} popup /> */}
                <Button
                  className="p-button-text text-xs "
                  label="Filters"
                  icon="pi pi-angle-down"
                  style={{ color: "var(--base-70)" }}
                  badge="5"
                  // onClick={(event) => menu.current.toggle(event)}
                />
              </div>
            </div>
            <div className=" mt-5 col grid gap-7 ">
              {data.map((d, i) => {
                return (
                  <Card
                    key={i}
                    style={{
                      height: "23.13rem",
                      width: "15rem",
                    }}
                    header={cardHeader(d)}
                    className=" text-center bordernoborder "
                    footer={cardFooter(d)}
                  >
                    <p className="font-bold"> {d.title} </p>
                  </Card>
                );
              })}
            </div>

            <Button
              className=" w-full  h-4rem  mt-5  border-round-md py-3 px-5"
              style={{
                backgroundColor: "inherit",
                border: "1px solid var(--base-30)",
                color: "var(--base-100)",
              }}
              icon="pi pi-replay"
            ></Button>
          </article>
        </section>
        <section
          className="h-30rem bg-white py-5 mt-5 "
          // style={{ backgroundColor: "var(--gray-blue-100)" }}
        >
          <center>
            <h1
              style={{ color: "var(--base-85)" }}
              className="text-3xl mb-5 font-bold "
            >
              Your Recently Viewed Items
            </h1>
          </center>
          <Carousel
            value={carouselItems}
            numVisible={4}
            showIndicators={false}
            // numScroll={3}s
            itemTemplate={carouselTemplate}
            circular
            style={{
              // backgroundColor: "white",
              border: "1px solid var(--base-30)",
              borderRadius: "10px",
              width: "71.25rem",
              margin: "auto",
              // marginTop: "5rem",
              boxShadow: "0 4px 2px -2px var(--base-15)",
            }}
          />
        </section>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Products;
